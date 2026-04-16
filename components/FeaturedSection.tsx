import * as motion from "motion/react-client"
import { Card, CardContent, CardHeader } from "./ui/card";
import { Badge } from "./ui/badge";
import { ArrowRight, Calendar } from "lucide-react";
import Image from "next/image";
import { fetchTechNews } from "@/lib/fetchNews";

export default async function FeaturedSection() {
    const articles = await fetchTechNews()
    const posts = articles.slice(0, 4) // show only 4 on homepage

    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                        Featured Insights
                    </h2>
                    <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                        Curated thoughts and discoveries from the intersection of
                        technology, design and human experience
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {posts.map((article: any, index: number) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                        >
                            <a
                                href={article.url}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <Card className="group cursor-pointer overflow-hidden hover:shadow-xl transition-all duration-300 border-0 bg-card/50 backdrop-blur-xs py-0">
                                    <CardHeader className="p-0">
                                        <div className="relative">
                                            <div className="w-full h-48 relative bg-slate-100">
                                                {article.urlToImage ? (
                                                    <Image
                                                        fill
                                                        src={article.urlToImage}
                                                        alt={article.title}
                                                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                                                    />
                                                ) : (
                                                    <div className="w-full h-full flex items-center justify-center text-slate-400 text-sm">
                                                        No Image
                                                    </div>
                                                )}
                                            </div>
                                            <div className="absolute top-4 left-4">
                                                <Badge variant="secondary" className="bg-background/80 backdrop-blur-xs">
                                                    {article.source?.name}
                                                </Badge>
                                            </div>
                                        </div>
                                    </CardHeader>
                                    <CardContent className="p-6">
                                        <div className="flex items-center text-sm text-muted-foreground mb-3">
                                            <Calendar className="h-4 w-4 mr-2" />
                                            {new Date(article.publishedAt).toDateString()}
                                        </div>
                                        <h3 className="text-xl font-serif font-bold text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                                            {article.title}
                                        </h3>
                                        <p className="text-muted-foreground mb-4 line-clamp-3">
                                            {article.description}
                                        </p>
                                        <div className="flex items-center text-primary font-medium group-hover:underline">
                                            Read more
                                            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </a>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}