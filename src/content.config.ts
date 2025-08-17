import { defineCollection, z } from "astro:content";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: z.object({
    author: z.object({
      name: z.string(),
      avatar: z.string().url(),
    }),
    date: z.string(), // parse/transform when rendering - or try z.coerce.date()
    tags: z.array(z.string()),
    heading: z.string(),
    summary: z.string(),
    image: z.string(), // path or URL
    imageAlt: z.string(),
  }),
});

export const collections = { blog };
