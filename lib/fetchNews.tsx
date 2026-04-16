// lib/fetchNews.ts
export async function fetchTechNews(query?: string) {
    const url = query
        ? `https://newsapi.org/v2/everything?q=${query}&language=en&pageSize=12&sortBy=publishedAt`
        : `https://newsapi.org/v2/top-headlines?category=technology&language=en&pageSize=12`

    const res = await fetch(url, {
        headers: {
            Authorization: `Bearer ${process.env.NEWS_API_KEY}`
        },
        next: { revalidate: 3600 }
    })

    if (!res.ok) throw new Error("Failed to fetch news")
    const data = await res.json()
    return data.articles
}