'use client';

import React, { useState } from 'react';
import { ArrowUpRight, CheckCircle2, Loader2, Mail } from 'lucide-react';
import type { ProjectInquiryData } from '@/types/project';
import { STUDIO_INFO } from '@/data/site';
import { cn } from '@/lib/utils';
import {
  PROJECT_TYPE_OPTIONS,
  TIMELINE_OPTIONS,
  BUDGET_OPTIONS,
  submitContactInquiry
} from '@/lib/contact';

const EMPTY_FORM: ProjectInquiryData = {
  name: '',
  email: '',
  company: '',
  projectType: PROJECT_TYPE_OPTIONS[0],
  projectDescription: '',
  timeline: TIMELINE_OPTIONS[0],
  budget: BUDGET_OPTIONS[0]
};

const inputClasses =
  'w-full rounded-lg border border-line bg-canvas px-3.5 py-2.5 text-sm text-ink placeholder:text-faint focus:border-accent focus:outline-none transition-colors';

function FieldLabel({
  htmlFor,
  children,
  optional
}: {
  htmlFor: string;
  children: React.ReactNode;
  optional?: boolean;
}) {
  return (
    <label
      htmlFor={htmlFor}
      className="flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.15em] text-muted"
    >
      <span>{children}</span>
      {optional && <span className="normal-case tracking-normal text-faint">optional</span>}
    </label>
  );
}

export function ContactForm() {
  const [form, setForm] = useState<ProjectInquiryData>(EMPTY_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const update = <K extends keyof ProjectInquiryData>(key: K, value: ProjectInquiryData[K]) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (!form.name.trim()) return setError('Please add your name.');
    if (!form.email.trim() || !/^\S+@\S+\.\S+$/.test(form.email.trim()))
      return setError('Please add a valid email address.');
    if (form.projectDescription.trim().length < 10)
      return setError('Please describe the project in a sentence or two.');

    setSubmitting(true);
    try {
      await submitContactInquiry(form);
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please try again, or email me directly.');
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className="rounded-2xl border border-line bg-surface p-8 text-center sm:p-12">
        <div className="mx-auto inline-flex h-12 w-12 items-center justify-center rounded-full border border-line-strong bg-surface-2">
          <CheckCircle2 className="h-6 w-6 text-accent" />
        </div>
        <h2 className="mt-5 text-2xl font-semibold tracking-tight text-ink">
          Noted. Thanks, {form.name}.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted">
          The form is still in prototype mode, so nothing was sent yet — this is just a local
          receipt of what you described.
        </p>
        <p className="mx-auto mt-4 max-w-sm font-mono text-[11px] uppercase tracking-widest text-faint">
          Prototype mode — backend connection pending
        </p>
        <p className="mx-auto mt-6 text-sm leading-relaxed text-muted">
          For a direct response today, email me at:
        </p>
        <a
          href={`mailto:${STUDIO_INFO.email}?subject=${encodeURIComponent(
            `${form.projectType} — ${form.name}`
          )}`}
          className="mx-auto mt-2 inline-flex items-center gap-2 text-sm font-medium text-ink underline underline-offset-4 hover:opacity-70"
        >
          <Mail className="h-4 w-4" />
          {STUDIO_INFO.email}
        </a>
        <button
          type="button"
          onClick={() => {
            setForm(EMPTY_FORM);
            setSubmitted(false);
          }}
          className="mt-6 font-mono text-xs text-muted underline underline-offset-4 hover:text-ink"
        >
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-7 rounded-2xl border border-line bg-surface p-6 sm:p-10"
    >
      {error && (
        <p
          role="alert"
          className="rounded-lg border border-rose-600/40 bg-rose-500/10 px-4 py-3 text-sm text-rose-700 dark:text-rose-300"
        >
          {error}
        </p>
      )}

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <FieldLabel htmlFor="contact-name">Name</FieldLabel>
          <input
            id="contact-name"
            type="text"
            autoComplete="name"
            required
            value={form.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Alex Johnson"
            className={inputClasses}
          />
        </div>
        <div className="space-y-2">
          <FieldLabel htmlFor="contact-email">Email</FieldLabel>
          <input
            id="contact-email"
            type="email"
            autoComplete="email"
            required
            value={form.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="alex@company.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="space-y-2">
        <FieldLabel htmlFor="contact-company" optional>
          Company / Organization
        </FieldLabel>
        <input
          id="contact-company"
          type="text"
          autoComplete="organization"
          value={form.company ?? ''}
          onChange={(e) => update('company', e.target.value)}
          placeholder="Optional — solo, startup, or established?"
          className={inputClasses}
        />
      </div>

      <fieldset className="space-y-3">
        <legend className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
          Project type
        </legend>
        <div className="flex flex-wrap gap-2" role="group" aria-label="Project type">
          {PROJECT_TYPE_OPTIONS.map((option) => {
            const selected = form.projectType === option;
            return (
              <button
                key={option}
                type="button"
                aria-pressed={selected}
                onClick={() => update('projectType', option)}
                className={cn(
                  'rounded-full border px-3.5 py-1.5 font-mono text-[11px] tracking-wider transition-colors',
                  selected
                    ? 'border-line-strong bg-ink text-canvas font-medium'
                    : 'border-line bg-surface-2 text-muted hover:text-ink hover:border-line-strong'
                )}
              >
                {option}
              </button>
            );
          })}
        </div>
      </fieldset>

      <div className="space-y-2">
        <FieldLabel htmlFor="contact-description">Project description</FieldLabel>
        <textarea
          id="contact-description"
          required
          rows={5}
          value={form.projectDescription}
          onChange={(e) => update('projectDescription', e.target.value)}
          placeholder="What problem are you trying to solve? Who is it for? What would 'done' look like?"
          className={cn(inputClasses, 'resize-y leading-relaxed')}
        />
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <FieldLabel htmlFor="contact-timeline">Timeline</FieldLabel>
          <select
            id="contact-timeline"
            value={form.timeline}
            onChange={(e) => update('timeline', e.target.value)}
            className={cn(inputClasses, 'bg-canvas')}
          >
            {TIMELINE_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <FieldLabel htmlFor="contact-budget">Budget range</FieldLabel>
          <select
            id="contact-budget"
            value={form.budget}
            onChange={(e) => update('budget', e.target.value)}
            className={cn(inputClasses, 'bg-canvas')}
          >
            {BUDGET_OPTIONS.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-4 border-t border-line pt-6 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-mono text-[11px] uppercase tracking-widest text-faint">
          Prototype form · email is the fastest path
        </p>
        <button
          type="submit"
          disabled={submitting}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-xs font-mono font-medium tracking-wider text-canvas transition-opacity hover:opacity-80 disabled:opacity-50"
        >
          {submitting ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Sending...
            </>
          ) : (
            <>
              START THE CONVERSATION
              <ArrowUpRight className="h-4 w-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}