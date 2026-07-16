import { defineCollection, z } from "astro:content";

const linkSchema = z
  .array(
    z.object({
      label: z.string(),
      url: z.string(),
    }),
  )
  .default([]);

const imageSchema = z
  .object({
    src: z.string(),
    alt: z.string(),
  })
  .optional();

const learning = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    level: z.string(),
    prerequisites: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
    interactive: z.boolean().default(false),
  }),
});

const technical = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    updated: z.coerce.date().optional(),
    environment: z.string(),
    tools: z.array(z.string()).default([]),
    tags: z.array(z.string()).default([]),
  }),
});

const blog = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    date: z.coerce.date(),
    image: imageSchema,
    tags: z.array(z.string()).default([]),
  }),
});

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    role: z.string(),
    technologies: z.array(z.string()).default([]),
    status: z.string(),
    category: z.enum(["research", "applied"]),
    order: z.number(),
    agendaConnection: z.string(),
    image: imageSchema,
    tags: z.array(z.string()).default([]),
    links: linkSchema,
  }),
});

const publications = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    authors: z.array(z.string()),
    venue: z.string().optional(),
    status: z.string(),
    year: z.number().optional(),
    links: linkSchema,
  }),
});

export const collections = {
  learning,
  technical,
  blog,
  projects,
  publications,
};
