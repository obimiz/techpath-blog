import Image from "next/image";
import { Mail, Phone, MapPin } from "lucide-react"

export default function ContactPage() {
    return (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <section>
                {/* Hero Section */}
                <div className="relative w-full h-[60vh]">
                    <Image
                        src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt="Contact Techpath-blog"
                        fill
                        priority
                        className="object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-black/60 rounded-xl flex flex-col items-center justify-center text-center px-4">
                        <p className="text-sm font-semibold tracking-[0.25em] uppercase text-white/70 mb-3">
                            Get in Touch
                        </p>
                        <h1 className="text-4xl md:text-5xl font-bold text-white font-serif">
                            Contact Us
                        </h1>
                        <p className="mt-4 text-base md:text-lg text-white/80 max-w-xl">
                            We'd love to hear from you — questions, ideas or collaborations.
                        </p>
                    </div>
                </div>
            </section>

            <div className="max-w-5xl mx-auto mt-20 px-4 pb-20">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                    {/* Form */}
                    <div className="lg:col-span-2 bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 md:p-10">
                        <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-2">
                            Let's Connect
                        </h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
                            Have a question, suggestion, or collaboration idea?
                            Fill the form below and we'll get back to you.
                        </p>

                        <form className="space-y-5">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary"
                            />
                            <textarea
                                placeholder="Your Message"
                                rows={5}
                                className="w-full p-3 border border-slate-200 dark:border-slate-700 rounded-lg bg-transparent text-foreground placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary resize-none"
                            />
                            <button
                                type="submit"
                                className="px-8 py-3 bg-primary text-white rounded-lg font-semibold hover:bg-purple-700 transition-colors duration-300 cursor-pointer"
                            >
                                Send Message
                            </button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="flex flex-col gap-6">
                        <div className="bg-slate-50 dark:bg-slate-900 p-6 rounded-2xl border border-slate-100 dark:border-slate-800">
                            <h2 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
                                Contact Information
                            </h2>
                            <div className="space-y-6">

                                {/* Email */}
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Mail className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm">Email</p>
                                        
                                        <a href="mailto:hello@techpathblog.com"
                                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                        >
                                            hello@techpathblog.com
                                        </a>
                                    </div>
                                </div>

                                {/* Phone */}
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <Phone className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm">Phone</p>
                                        
                                           <a href="tel:+2348000000000"
                                            className="text-sm text-slate-600 dark:text-slate-400 hover:text-primary transition-colors"
                                        >
                                            +234 800 000 0000
                                        </a>
                                    </div>
                                </div>

                                {/* Location */}
                                <div className="flex items-start gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                                        <MapPin className="w-5 h-5 text-primary" />
                                    </div>
                                    <div>
                                        <p className="font-semibold text-slate-900 dark:text-white text-sm">Location</p>
                                        <p className="text-sm text-slate-600 dark:text-slate-400">
                                            Lagos, Nigeria
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}