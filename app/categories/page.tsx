import Image from "next/image";
import { Brain, Code, Blocks, Palette, GraduationCap, ArrowRight } from "lucide-react"
import Link from "next/link";

const categories = [
    {
        title: "AI & Future of Work",
        slug: "ai-future-of-work",
        description: "Artificial intelligence and its impact on careers and the modern workplace.",
        icon: Brain,
        count: 12,
        color: "from-violet-500/20 to-violet-500/5",
        border: "hover:border-violet-500/50",
        iconColor: "text-violet-500",
    },
    {
        title: "Web Development",
        slug: "web-development",
        description: "Modern frameworks, best practices and everything you need to build the web.",
        icon: Code,
        count: 24,
        color: "from-blue-500/20 to-blue-500/5",
        border: "hover:border-blue-500/50",
        iconColor: "text-blue-500",
    },
    {
        title: "Blockchain",
        slug: "blockchain",
        description: "Decentralized technologies, smart contracts and the future of finance.",
        icon: Blocks,
        count: 8,
        color: "from-orange-500/20 to-orange-500/5",
        border: "hover:border-orange-500/50",
        iconColor: "text-orange-500",
    },
    {
        title: "Digital Creativity",
        slug: "digital-creativity",
        description: "Design thinking, digital products and the art of creative problem solving.",
        icon: Palette,
        count: 18,
        color: "from-pink-500/20 to-pink-500/5",
        border: "hover:border-pink-500/50",
        iconColor: "text-pink-500",
    },
    {
        title: "Tech Education",
        slug: "tech-education",
        description: "Learning resources, career growth and pathways into the tech industry.",
        icon: GraduationCap,
        count: 15,
        color: "from-green-500/20 to-green-500/5",
        border: "hover:border-green-500/50",
        iconColor: "text-green-500",
    },
]

export default function Categories() {
    return (
        <main className="min-h-screen bg-background">

            {/* Hero Banner */}
            <section className="relative w-full h-[50vh] overflow-hidden">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1733306472711-6863aa811dbf?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Category"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-black/60" />
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/70 mb-3">
                        Browse by Topic
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
                        Explore our Categories
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
                        Discover insights across different areas of technology and creativity.
                    </p>
                </div>
            </section>

            {/* Categories Grid */}
            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categories.map((category) => {
                        const Icon = category.icon
                        return (
                            <Link
                                key={category.slug}
                                href={`/categories/${category.slug}`}
                                className={`group relative flex flex-col gap-4 p-6 rounded-2xl border border-border bg-gradient-to-br ${category.color} ${category.border} transition-all duration-300 hover:-translate-y-1 hover:shadow-lg`}
                            >
                                {/* Icon */}
                                <div className={`w-12 h-12 rounded-xl bg-background/80 flex items-center justify-center ${category.iconColor}`}>
                                    <Icon className="w-6 h-6" />
                                </div>

                                {/* Text */}
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center justify-between">
                                        <h2 className="text-lg font-bold text-foreground">{category.title}</h2>
                                        <span className="text-xs font-medium text-muted-foreground bg-background/80 px-2 py-1 rounded-full">
                                            {category.count} posts
                                        </span>
                                    </div>
                                    <p className="text-sm text-muted-foreground leading-relaxed">
                                        {category.description}
                                    </p>
                                </div>

                                {/* Arrow */}
                                <div className={`flex items-center gap-1 text-sm font-medium ${category.iconColor} mt-auto`}>
                                    <span>Explore</span>
                                    <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                                </div>
                            </Link>
                        )
                    })}
                </div>
            </section>

        </main>
    )
}