import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const course = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/courses' }),
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        description: z.string(),
    })
})

export const collections = { course }