import { fetchTechNews } from "@/lib/fetchNews"
import Image from "next/image"
import { Brain, Code, Blocks, Palette, GraduationCap } from "lucide-react"

const categoryMap: Record<string, { title: string; query: string }> = {
    "ai-future-of-work": { title: "AI & Future of Work", query: "artificial intelligence" },
    "web-development": { title: "Web Development", query: "web development" },
    "blockchain": { title: "Blockchain", query: "blockchain crypto" },
    "digital-creativity": { title: "Digital Creativity", query: "digital design creativity" },
    "tech-education": { title: "Tech Education", query: "tech education learning" },
}

export default async function CategoryPage({ params }: { params: { slug: string } }) {
    const category = categoryMap[params.slug]
    const articles = await fetchTechNews(category?.query)

    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl font-bold text-foreground mb-2">
                {category?.title}
            </h1>
            <p className="text-muted-foreground mb-10">
                Latest articles on {category?.title}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article: any, i: number) => (

                    <a
                        key={i}
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow duration-300"
                    >
                        <div className="relative w-full h-48 bg-slate-100">
                            {article.urlToImage ? (
                                <Image
                                    src={article.urlToImage}
                                    alt={article.title}
                                    fill
                                    className="object-cover"
                                />
                            ) : (
                                <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                                    No Image
                                </div>
                            )}
                        </div>
                        <div className="p-5">
                            <p className="text-xs text-primary font-semibold uppercase tracking-wider mb-2">
                                {article.source?.name}
                            </p>
                            <h2 className="text-base font-bold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors">
                                {article.title}
                            </h2>
                            <p className="text-sm text-slate-500 dark:text-slate-400 line-clamp-2">
                                {article.description}
                            </p>
                            <p className="text-xs text-slate-400 mt-3">
                                {new Date(article.publishedAt).toDateString()}
                            </p>
                        </div>
                    </a>
                ))}
            </div>
        </div>
    )
}
