"use client";
import * as motion from "motion/react-client"
import { Button } from "./ui/button";
import { ArrowRight } from "lucide-react";



export default function HeroSection() {
    return <section className="min-h-[90vh] flex items-center justify-center  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            {/* Left Content */}
            <motion.div 
            initial={{opacity: 0, y: 20}}
            animate={{opacity: 1, y: 0}}
            transition={{duration: 0.8}}
            className="text-center lg:text-left"
            >
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight mb-6">
                    Writing That
                    <span className="block text-primary italic">Resonates</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl">
                        <span className="block">
                        Insight on Tech, Design, and Creativity from a digital
                        </span>

                        <span className="block">
                        craftman who believes in the power of thoughtful 
                        </span> 
                        
                        <span className="block">storytelling.</span>
                    </p>
                    <motion.div initial={{opacity: 0, y: 20}} animate={{opacity: 1, y: 0}} transition={{duration: 0.8, delay: 0.2}}>
                        <Button size="lg" className="group">
                            Read the Latest Post <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1"/>
                        </Button>
                    </motion.div>
            </motion.div>
           
        </div>

    </section>
}