'use client';

import React, { useEffect, useRef } from 'react';
import { cn } from '@/lib/utils';

interface AmbientCanvasProps {
  className?: string;
  /** Restrict to a non-interactive, extra-quiet mode (e.g. page footers). */
  quiet?: boolean;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  baseAlpha: number;
  alpha: number;
  depth: number;
}

interface Ripple {
  x: number;
  y: number;
  radius: number;
  max: number;
  alpha: number;
}

const THEME_EVENT = 'langolf:theme';

function prefersReducedMotion() {
  return (
    typeof window !== 'undefined' &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches
  );
}

function particleCountFor(width: number) {
  if (width < 480) return 22;
  if (width < 768) return 42;
  if (width < 1200) return 74;
  return 100;
}

/**
 * Restrained ambient particle field for the hero. Monochrome constelfield
 * with a gentle accent reaction to the pointer and clicks. Theme-aware,
 * DPR-capped, paused off-screen and under `prefers-reduced-motion`.
 */
export function AmbientCanvas({ className, quiet = false }: AmbientCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    if (prefersReducedMotion()) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const ripples: Ripple[] = [];
    let raf = 0;
    let running = true;
    let visible = true;
    let width = 0;
    let height = 0;

    const colors = { ink: '', accent: '', line: '' };
    const readColors = () => {
      const style = getComputedStyle(document.documentElement);
      const hex = (name: string) => {
        const v = style.getPropertyValue(name).trim();
        return v || '#888';
      };
      colors.ink = hex('--ink');
      colors.accent = hex('--accent');
      colors.line = hex('--line-strong');
    };

    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const resize = () => {
      const rect = canvas.getBoundingClientRect();
      width = rect.width;
      height = rect.height;
      if (width === 0 || height === 0) return;
      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      seed();
    };

    const seed = () => {
      const count = particleCountFor(window.innerWidth);
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        size: Math.random() * 1.4 + 0.6,
        baseAlpha: Math.random() * 0.22 + 0.06,
        alpha: 0,
        depth: 0.6 + Math.random() * 0.6
      }));
    };

    const pointer = { x: -9999, y: -9999, active: false };
    const onPointerMove = (e: PointerEvent) => {
      const rect = canvas.getBoundingClientRect();
      pointer.x = e.clientX - rect.left;
      pointer.y = e.clientY - rect.top;
      pointer.active = true;
    };
    const onPointerLeave = () => {
      pointer.active = false;
    };
    const onClick = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      ripples.push({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
        radius: 4,
        max: Math.min(width, height) * 0.3,
        alpha: 0.28
      });
      if (ripples.length > 3) ripples.shift();
    };

    const toRgba = (hex: string, a: number) => {
      const h = hex.replace('#', '');
      const n = parseInt(
        h.length === 3 ? h.split('').map((c) => c + c).join('') : h,
        16
      );
      const r = (n >> 16) & 255;
      const g = (n >> 8) & 255;
      const b = n & 255;
      return `rgba(${r}, ${g}, ${b}, ${a})`;
    };

    const draw = () => {
      if (!running || !visible) return;
      ctx.clearRect(0, 0, width, height);

      const maxLink = quiet ? 0 : width < 768 ? 70 : 96;
      const linkThreshold = maxLink > 0 ? maxLink : -1;
      const pointerRadius = width < 768 ? 130 : 200;
      const isTouch = window.matchMedia('(hover: none)').matches;

      // Ambient reaction: pointer gently draws particles toward its edge.
      if (pointer.active && !isTouch && !quiet) {
        for (const p of particles) {
          const dx = pointer.x - p.x;
          const dy = pointer.y - p.y;
          const d = Math.hypot(dx, dy);
          if (d < pointerRadius && d > 1) {
            const force = quiet ? 0 : 0.012;
            p.vx -= (dx / d) * force * p.depth;
            p.vy -= (dy / d) * force * p.depth;
          }
        }
      }

      for (const p of particles) {
        p.vx *= 0.985;
        p.vy *= 0.985;
        if (!quiet) {
          p.vx += (Math.random() - 0.5) * 0.008;
          p.vy += (Math.random() - 0.5) * 0.008;
        }
        p.x += p.vx;
        p.y += p.vy;

        // Wrap edges for an endless field.
        if (p.x < -4) p.x = width + 4;
        if (p.x > width + 4) p.x = -4;
        if (p.y < -4) p.y = height + 4;
        if (p.y > height + 4) p.y = -4;
      }

      // Click ripples expand and push particles outward.
      for (let i = ripples.length - 1; i >= 0; i--) {
        const r = ripples[i];
        r.radius += 2.4;
        r.alpha *= 0.96;
        for (const p of particles) {
          const dx = p.x - r.x;
          const dy = p.y - r.y;
          const d = Math.hypot(dx, dy);
          if (Math.abs(d - r.radius) < 30) {
            const force = (1 - Math.abs(d - r.radius) / 30) * 0.6;
            p.vx += (dx / (d || 1)) * force;
            p.vy += (dy / (d || 1)) * force;
          }
        }
        if (r.radius >= r.max || r.alpha < 0.01) {
          ripples.splice(i, 1);
        }
      }

      // Constellation links.
      if (!quiet) {
        for (let i = 0; i < particles.length; i++) {
          const a = particles[i];
          for (let j = i + 1; j < particles.length; j++) {
            const b = particles[j];
            const dx = a.x - b.x;
            const dy = a.y - b.y;
            const d = dx * dx + dy * dy;
            if (d < linkThreshold * linkThreshold) {
              const dist = Math.sqrt(d);
              const alpha =
                (1 - dist / linkThreshold) * Math.min(a.alpha, b.alpha) * 0.22;
              ctx.strokeStyle = toRgba(colors.line, alpha);
              ctx.lineWidth = 0.5;
              ctx.beginPath();
              ctx.moveTo(a.x, a.y);
              ctx.lineTo(b.x, b.y);
              ctx.stroke();
            }
          }
        }
      }

      // Draw particles with depth-based scale.
      for (const p of particles) {
        p.alpha += (p.baseAlpha + (pointer.active && !quiet ? p.baseAlpha * 0.7 : 0) - p.alpha) * 0.05;
        const radius = p.size * (0.7 + p.depth * 0.6);
        ctx.fillStyle = toRgba(colors.ink, p.alpha);
        ctx.beginPath();
        ctx.arc(p.x, p.y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Ripples on top.
      for (const r of ripples) {
        ctx.strokeStyle = toRgba(colors.accent, r.alpha);
        ctx.lineWidth = 1.1;
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.radius, 0, Math.PI * 2);
        ctx.stroke();
      }

      raf = requestAnimationFrame(draw);
    };

    const onVisibility = () => {
      visible = document.visibilityState === 'visible';
      if (visible && running && !raf) {
        raf = requestAnimationFrame(draw);
      } else if (!visible && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    };

    const onTheme = () => {
      readColors();
    };

    const io = new IntersectionObserver((entries) => {
      visible = entries[0]?.isIntersecting ?? true;
      if (!running) return;
      if (visible && !raf) {
        raf = requestAnimationFrame(draw);
      } else if (!visible && raf) {
        cancelAnimationFrame(raf);
        raf = 0;
      }
    });

    readColors();
    resize();

    window.addEventListener('resize', resize);
    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('pointerleave', onPointerLeave);
    window.addEventListener('click', onClick, { passive: true });
    document.addEventListener('visibilitychange', onVisibility);
    window.addEventListener(THEME_EVENT, onTheme);
    io.observe(canvas);

    running = true;
    raf = requestAnimationFrame(draw);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      io.disconnect();
      window.removeEventListener('resize', resize);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerleave', onPointerLeave);
      window.removeEventListener('click', onClick);
      document.removeEventListener('visibilitychange', onVisibility);
      window.removeEventListener(THEME_EVENT, onTheme);
    };
  }, [quiet]);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className={cn('pointer-events-none absolute inset-0 h-full w-full', className)}
    />
  );
}