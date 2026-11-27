import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/issues' }),
  schema: z.object({
    bar: z.number().int().positive(),
    title: z.string(),
    date: z.coerce.date(),
    dek: z.string(),
    // Drafts show in `npm run dev` but are left out of the built site and RSS.
    status: z.enum(['draft', 'published']),
    // Test issues for previewing the layout. Never built into the real site.
    sample: z.boolean().default(false),
    // Pencil note beside the issue on the home page. Use \n for line breaks.
    homeNote: z.string().optional(),
    image: z
      .object({ src: z.string(), alt: z.string(), caption: z.string(), credit: z.string() })
      .optional(),
    imageNeeded: z.string().optional(),
    pianoglass: z.object({
      month: z.string(),
      // Paragraphs, written as prose rather than a list.
      body: z.array(z.string()).min(1),
      youtube: z.string().optional(),
      clipNeeded: z.string().optional(),
      next: z.string().optional(),
    }),
    // Trusted HTML written by Ryan (for italics in titles).
    sources: z.array(z.string()),
  }),
});

export const collections = { issues };
