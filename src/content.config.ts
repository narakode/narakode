import { file, glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const course = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/courses' }),
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        description: z.string(),
    })
})

const tutorial = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/tutorials' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: image(),
        tags: z.array(z.string())
    })
})

const book = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/books' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        price: z.number(),
        cover: image(),
    })
})

const video = defineCollection({
    loader: file('./src/data/videos.json'),
    schema: z.object({
        title: z.string(),
        src: z.string().url()
    })
})

export const collections = { course, tutorial, book, video }