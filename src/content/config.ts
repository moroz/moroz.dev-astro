import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    date: z.date(),
    draft: z.boolean().optional(),
    summary: z.string().optional()
  })
});

export const collections = {
  blog: blogCollection
};
