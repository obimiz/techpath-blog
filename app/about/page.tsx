import Image from "next/image";
import { Target, Globe } from "lucide-react";
import * as motion from "motion/react-client"
import { Lightbulb, Code, BrickWallShield, MapPlus, Wrench, BookOpen } from 'lucide-react';

export default function AboutPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

            {/* Hero Section */}
            <section className="relative w-full h-[60vh]">
                <Image
                    src="https://plus.unsplash.com/premium_photo-1661513587082-bdff31963db7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRlY2hub2xvZ3klMjB3b3Jrc3BhY2V8ZW58MHx8MHx8fDA%3D"
                    alt="About Tech-Blog"
                    fill
                    priority
                    className="object-cover rounded-xl"
                />
                <div className="absolute inset-0 bg-black/60 rounded-xl flex flex-col items-center justify-center text-center px-4">
                    <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/70 mb-3">
                        Who We Are
                    </p>
                    <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
                        About Techpath-Blog
                    </h1>
                    <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
                        Navigating technology, design, creativity and AI — simplified for you.
                    </p>
                </div>
            </section>

            <section className="py-20">

                {/* About Blog & Author */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-900 border border-border/50 rounded-xl shadow-lg p-8">
                        <h3 className="text-xl mb-4 font-semibold text-primary">
                            About Techpath-Blog
                        </h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Techpath-Blog is a modern digital publication focused on helping individuals
                            navigate the intersection of technology, design, creativity, and AI.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            We break down complex tech trends into simple, practical insights you can
                            apply in your career, business, or daily life.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-border/50 rounded-xl shadow-lg p-8">
                        <h3 className="text-xl mb-4 font-semibold text-primary">About the Author</h3>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            Hi, I'm Titus Mbanu, a software developer and blockchain engineer with over
                            10 years of experience building technology solutions.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-4">
                            I'm passionate about building products, teaching tech, and helping people
                            build future-proof careers in the age of AI.
                        </p>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            Through this blog, I share insights and lessons from working across web
                            development, blockchain, and digital product design.
                        </p>
                    </div>
                </div>

                {/* Mission & Vision */}
                <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
                    <div className="bg-white dark:bg-slate-900 border border-border/50 rounded-xl shadow p-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Target className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Mission</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            To simplify technology and empower Africans with digital skills for the future.
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-border/50 rounded-xl shadow p-10">
                        <div className="flex items-center gap-3 mb-4">
                            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                                <Globe className="w-5 h-5 text-primary" />
                            </div>
                            <h3 className="text-xl font-bold text-foreground">Vision</h3>
                        </div>
                        <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                            To become a leading voice in tech education, digital creativity,
                            and AI transformation in Africa.
                        </p>
                    </div>
                </div>

                {/* What We Share */}
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            What We Share
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 max-w-xl mx-auto">
                            Topics we cover to help you stay ahead in the digital world.
                        </p>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {[
                            {
                                icon: <Lightbulb className="w-6 h-6 text-primary" />,
                                bg: "bg-blue-100 dark:bg-blue-900/30",
                                title: "AI & Future of Work",
                                desc: "Insights on artificial intelligence and its impact on careers and industries."
                            },
                            {
                                icon: <Code className="w-6 h-6 text-green-500" />,
                                bg: "bg-green-100 dark:bg-green-900/30",
                                title: "Web Development",
                                desc: "Modern web technologies, frameworks, and best practices for developers."
                            },
                            {
                                icon: <BrickWallShield className="w-6 h-6 text-indigo-500" />,
                                bg: "bg-indigo-100 dark:bg-indigo-900/30",
                                title: "Blockchain",
                                desc: "Decentralized technologies, smart contracts, and the future of digital assets."
                            },
                            {
                                icon: <MapPlus className="w-6 h-6 text-pink-500" />,
                                bg: "bg-pink-100 dark:bg-pink-900/30",
                                title: "Digital Creativity",
                                desc: "Design thinking, creative tools, and building digital products."
                            },
                            {
                                icon: <Wrench className="w-6 h-6 text-purple-500" />,
                                bg: "bg-purple-100 dark:bg-purple-900/30",
                                title: "Gadgets & Tools",
                                desc: "Reviews and recommendations on tools and tech Nigerians need."
                            },
                            {
                                icon: <BookOpen className="w-6 h-6 text-green-500" />,
                                bg: "bg-green-100 dark:bg-green-900/30",
                                title: "Tech Education",
                                desc: "Learning resources and career guidance for aspiring developers."
                            },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: i * 0.1 }}
                                className="bg-white dark:bg-slate-900 border border-border/50 p-6 rounded-xl shadow hover:shadow-lg transition-shadow"
                            >
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${item.bg}`}>
                                    {item.icon}
                                </div>
                                <h3 className="text-lg font-bold mb-2 text-foreground">{item.title}</h3>
                                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </section>
        </div>
    )
}