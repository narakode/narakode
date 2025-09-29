import { getCollection, type CollectionEntry } from "astro:content";

export async function getCourseItems(course: CollectionEntry<'course'>): Promise<CollectionEntry<'article'>[]> {
    const items = await getCollection('article', article => article.data.course?.id === course.id && !!article.data.publishedAt)

    items.sort((a, b) => new Date(a.data.publishedAt!).getTime() - new Date(b.data.publishedAt!).getTime())

    return items
}