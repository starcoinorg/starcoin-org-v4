import { z, defineCollection } from 'astro:content';

const postCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string(),
    author: z.string().optional(),
    tags: z.array(z.string()).optional(),
    archives: z.string().optional(),
    image: z.string().optional(),
    draft: z.boolean().optional().default(false),
    meta_description: z.string(),
  }),
});

export const collections = {
  post: postCollection,
};