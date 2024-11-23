import { defineCollection, z } from "astro:content";

export const collection = {
    'layanan': defineCollection({
        type: 'data',
        schema: {
            title: z.string(),
            icon: z.string(),
            description: z.string(),
            thumbnail: z.string(),
            startFrom: z.number(),
            items: z.object({
                icon: z.string(),
                name: z.string()
            })
        }
    })
}