import { getCollection, type CollectionEntry } from "astro:content";

export async function getArticles(): Promise<CollectionEntry<'article'>[]> {
    const articles = await getCollection('article', article => article.data.type === 'article' && article.data.publishedAt)

    articles.sort((a, b) => new Date(b.data.publishedAt!).getTime() - new Date(a.data.publishedAt!).getTime())

    return articles
}