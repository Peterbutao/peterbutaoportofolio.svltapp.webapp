/**
 * Data validation schemas using Zod
 */

import { z } from 'zod';

// Project validation schema
const assetPathOrUrl = z.union([
  z.string().url(),
  z.string().startsWith('/')
]);

export const ProjectSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  desc: z.string().min(1),
  problem: z.string().min(1),
  role: z.string().min(1),
  approach: z.string().min(1),
  result: z.string().min(1),
  date: z.string().min(1),
  thumb: assetPathOrUrl,
  projecttype: z.string().min(1),
  github: z.string().url(),
  src: z.string().url()
});

export type Project = z.infer<typeof ProjectSchema>;

// Design validation schema
export const DesignSchema = z.object({
  slug: z.string().min(1),
  title: z.string().min(1),
  desc: z.string().min(1),
  details: z.string().min(1),
  date: z.string().min(1),
  thumb: assetPathOrUrl,
  tags: z.array(z.string().min(1)),
  src: z.string().url()
});

export type Design = z.infer<typeof DesignSchema>;

// Service validation schema
export const ServiceLinkSchema = z.object({
  label: z.string().min(1),
  href: z.string().url()
});

export const ServiceSchema = z.object({
  title: z.string().min(1),
  desc: z.string().min(1),
  tags: z.array(z.string().min(1)),
  link: ServiceLinkSchema,
  icon: z.string().min(1)
});

export type Service = z.infer<typeof ServiceSchema>;

// Experience validation schema
export const ExperienceSchema = z.object({
  org: z.string().min(1),
  role: z.string().min(1),
  label: z.string().min(1),
  desc: z.string().min(1),
  img: assetPathOrUrl,
  href: z.string().url()
});

export type Experience = z.infer<typeof ExperienceSchema>;

// About data validation schemas
export const StatSchema = z.object({
  value: z.number().int().nonnegative(),
  suffix: z.string(),
  label: z.string().min(1)
});

export const ProfileSchema = z.object({
  role: z.string().min(1),
  location: z.string().min(1),
  email: z.string().email(),
  phones: z.array(z.string().min(1)),
  linkedin: z.string().url(),
  summary: z.string().min(1)
});

export const WorkItemSchema = z.object({
  role: z.string().min(1),
  org: z.string().min(1),
  period: z.string().min(1),
  place: z.string().min(1),
  points: z.array(z.string().min(1))
});

export const SkillCategorySchema = z.object({
  area: z.string().min(1),
  skills: z.array(z.string().min(1))
});

export const EducationItemSchema = z.object({
  degree: z.string().min(1),
  org: z.string().min(1),
  period: z.string().min(1)
});

export const CertificationSchema = z.object({
  name: z.string().min(1),
  issuer: z.string().min(1),
  year: z.string().min(1)
});

// Validation function
export function validateData<T>(schema: z.ZodSchema<T>, data: unknown): T {
  return schema.parse(data);
}

// Safe validation function (returns error instead of throwing)
export function safeValidateData<T>(
  schema: z.ZodSchema<T>, 
  data: unknown
): { success: true; data: T } | { success: false; error: z.ZodError } {
  const result = schema.safeParse(data);
  if (result.success) {
    return { success: true, data: result.data };
  }
  return { success: false, error: result.error };
}
