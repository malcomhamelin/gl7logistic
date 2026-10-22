import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Articles de la rubrique « Conseils » : un fichier Markdown par article dans src/content/conseils/.
const conseils = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/conseils' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { conseils };
