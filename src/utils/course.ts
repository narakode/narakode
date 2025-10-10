import { getCollection, type CollectionEntry } from "astro:content";

export async function getCourseItems(course: CollectionEntry<'course'>): Promise<CollectionEntry<'article'>[]> {
    const items = await getCollection('article', article => article.data.course?.id === course.id)

    items.sort((a, b) => new Date(a.data.publishedAt!).getTime() - new Date(b.data.publishedAt!).getTime())

    return items
}
export function filterPublishedItems(entries: CollectionEntry<'article'>[]): CollectionEntry<'article'>[] {
    return entries.filter(entry => new Date > new Date(entry.data.publishedAt!))
}

export async function getCourses(): Promise<CollectionEntry<'course'>[]> {
    const courses = await getCollection('course', course => course.data.publishedAt)

    courses.sort((a, b) => new Date(a.data.publishedAt!).getTime() - new Date(b.data.publishedAt!).getTime())

    return courses
}