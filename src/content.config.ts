import { file, glob } from "astro/loaders";
import { defineCollection, reference, z } from "astro:content";

const course = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/courses' }),
    schema: z.object({
        title: z.string(),
        icon: z.string(),
        description: z.string(),
        publishedAt: z.coerce.date().optional()
    })
})

const tutorial = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/tutorials' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        thumbnail: image(),
        tags: z.array(z.string()),
        publishedAt: z.coerce.date().optional()
    })
})

const book = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/books' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        price: z.number(),
        cover: image(),
        publishedAt: z.coerce.date().optional()
    })
})

const video = defineCollection({
    loader: file('./src/data/videos.json'),
    schema: z.object({
        title: z.string(),
        src: z.string().url(),
        publishedAt: z.coerce.date().optional()
    })
})

const article = defineCollection({
    loader: glob({ pattern: '**/*.md', base: './src/data/articles' }),
    schema: ({ image }) => z.object({
        title: z.string(),
        description: z.string(),
        category: z.string().optional(),
        thumbnail: image().optional(),
        type: z.enum(['article', 'course']),
        course: reference('course').optional(),
        publishedAt: z.coerce.date().optional()
    })
})

export const collections = { course, tutorial, book, video, article }