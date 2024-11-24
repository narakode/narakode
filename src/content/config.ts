import { defineCollection, reference, z } from "astro:content";

export const collection = {
    'layanan': defineCollection({
        type: 'data',
        schema: z.object({
            order: z.number(),
            title: z.string(),
            icon: z.string(),
            description: z.string(),
            simpleDescription: z.string(),
            thumbnail: z.string(),
            startFrom: z.number(),
            items: z.array(reference('layanan-item')),
            relatedPosts: z.array(reference('blog')),
            featureDescription: z.string(),
            features: z.array(z.object({
                icon: z.string(),
                name: z.string(),
            })),
        })
    }),
    'layanan-item': defineCollection({
        type: 'data',
        schema: z.object({
            icon: z.string(),
            title: z.string(),
            image: z.string(),
            description: z.string(),
            startFrom: z.number(),
        })
    })
}