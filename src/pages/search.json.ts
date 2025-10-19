import { getCollection } from "astro:content"

export async function GET() {
    const articles = await getCollection('article', article => article.data.publishedAt && new Date > new Date(article.data.publishedAt))
    
    return new Response(JSON.stringify(
        articles.map(article => {
            if (article.data.type === 'course') {
                return {
                    title: article.data.title,
                    url: `/courses/${article.data.course?.id}/${article.id}`,
                    description: article.data.description
                }
            }

            return {
                title: article.data.title,
                url: article.id,
                description: article.data.description
            }
        })
    ))
}