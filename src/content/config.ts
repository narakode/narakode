import { defineCollection, z } from "astro:content";

export const collection = {
    'layanan': defineCollection({
        type: 'data',
        schema: {
            order: z.number(),
            title: z.string(),
            icon: z.string(),
            description: z.string(),
            simpleDescription: z.string(),
            thumbnail: z.string(),
            startFrom: z.number(),
            items: z.array(z.object({
                icon: z.string(),
                name: z.string(),
                link: z.string(),
                description: z.string(),
                startFrom: z.number(),
            })),
            featureDescription: z.string(),
            features: z.array(z.object({
                icon: z.string(),
                name: z.string(),
            })),
        }
    })
}