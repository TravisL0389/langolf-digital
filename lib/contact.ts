import type { ProjectInquiryData } from '@/types/project';

export const PROJECT_TYPE_OPTIONS = [
  'Website',
  'Web Application',
  'AI Product',
  'Business System',
  'Automation',
  'E-commerce',
  '3D / AR',
  'Not Sure Yet'
] as const;

export const TIMELINE_OPTIONS = [
  'Exploring / No deadline',
  'ASAP',
  'Within a month',
  '1-3 months',
  '3+ months',
  'Ongoing / Long-term'
] as const;

export const BUDGET_OPTIONS = [
  'Under $1k',
  '$1k - $5k',
  '$5k - $10k',
  '$10k - $20k',
  '$20k+',
  'Prefer to discuss'
] as const;

/**
 * Submission boundary for the contact form.
 *
 * Currently this returns a successful, locally-held receipt so the UI works
 * without a backend. To connect Supabase: create the `contact_messages` table
 * and replace the body of this function with an authenticated insert (or POST
 * to an app route backed by the Supabase service client). Message data is
 * already shaped in ProjectInquiryData to map 1:1 to columns.
 */
export async function submitContactInquiry(
  data: ProjectInquiryData
): Promise<{ ok: true }> {
  // TODO(supabase): insert into `contact_messages` via the Supabase client.
  // const { error } = await supabase.from('contact_messages').insert({ ...data });
  // if (error) throw new Error('Failed to store the inquiry.');
  const payload = { ...data, receivedAt: new Date().toISOString() };
  void payload; // placeholder receipt kept for the future insert
  await new Promise((resolve) => setTimeout(resolve, 650));
  return { ok: true };
}