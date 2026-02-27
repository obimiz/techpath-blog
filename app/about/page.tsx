import { div, section } from "motion/react-client";
import Image from "next/image";
import { Target, Globe } from "lucide-react";
import * as motion from "motion/react-client"
import { Lightbulb, Code, BrickWallShield, MapPlus, Wrench, BookOpen} from 'lucide-react';


export default function AboutPage() {
    return <div className="w-full py-20 px-4">
    <section className="relative w-full flex  h-[60vh]">
        {/* Hero Section */}
        <div className="relative w-full h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Image 
             src="https://plus.unsplash.com/premium_photo-1661513587082-bdff31963db7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTN8fHRlY2hub2xvZ3klMjB3b3Jrc3BhY2V8ZW58MHx8MHx8fDA%3D"
             alt="About Tech-Blog"
             fill
             className="object-cover"
             />

             {/*Overlay*/}

             <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
             <h1 className="text-4xl md:text-5xl font-bold text-white">
                About Tech-Path Blog
             </h1>
             </div>
        </div>
       
    </section>

    {/* Body */}


            {/* About techpath-Blog and About The Author */}
    <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto bg-white border border-border/50 rounded-xl shadow-lg p-8 cursor-pointer">
        <div>
            <h3 className="text-xl mb-4 font-semibold text-primary">
                About Techpath-Blog
            </h3>

       
                <p  className="text-lg text-black"> 
                    <span className="block mb-4 text-black">
                        Techpath-Blog is a modern digital publication focused on helping individuals 
                        navigate the intersection of technology, design, creativity, and AI.
                    </span>

                    <span className="block">
                        We break down complex tech trends into simple, practical insights you can apply in your career, business, or daily life.
                    </span>
                    </p>
            </div>
             </div>

             <div className="py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-5xl mx-auto bg-white cursor-pointer border border-border/50 rounded-xl shadow-lg p-8 text-primary">
                    <h3 className="text-xl mb-4 font-semibold">About the Author</h3>
                    <p className="text-xl text-black text-black">
                        <span className="block mb-4">
                            Hi, I'm Titus Mbanu, a software developer and blockchain engineer with over 10 years of experience 
                            building technology solutions.
                        </span>
                        <span className="block mb-4">
                            I'm passionate about building products, teaching tech, and helping people build future-proof careers 
                            in the age of AI.
                        </span>

                        <span className="block mb-4">
                            Through this blog, I share my insights, experiences, and lessons from working across web development, 
                            blockchain, and digital product design.
                        </span>
                    </p>
                </div>

             </div>


             {/* Missio and Vission */}

             <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-wrap gap-6 cursor-pointer">
                    <div className="w-full md:w-[48%] bg-white border border-border/50 rounded-xl shadow p-12">
                        <div className="flex gap-4">
                            <Target />
                            <h3 className="text-primary text-xl font-bold mb-4">Mission</h3>
                        </div>
                        <p className="text-black text-lg">To simplify technology and empower Africans with digital skills for the future.</p>
                    </div>

                    <div className="w-full md:w-[48%] bg-white border border-border/50 rounded-xl shadow p-12">
                        <div className="flex gap-4">
                            <Globe />
                            <h3 className="text-black text-xl font-bold mb-4 text-primary">Vision</h3>
                        </div>
                        <p className="text-black text-lg">To become a leading voice in tech education, digital creativity, 
                            and AI transformation in Africa.</p>
                    </div>

                </div>
                

             </div>

             {/* What we Share */}

                <div className="py-20">
                    <motion.div initial={{opacity: 0, y:  20}}
                    whileInView={{opacity: 1, y: 0}}
                    viewport={{once: true}}
                    transition={{duration: 0.5}}
                    className="text-center mb-8"
                    >
                        <h2 className="text-3xl md:text-4xl font-serif font-bold 
                        text-foreground mb-4">What We Share</h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-2 max-w-5xl mx-auto gap-8 ">
                        <motion.div
                                initial={{opacity: 0, y: 20}} 
                                whileInView={{opacity: 1, y: 0}}
                                viewport={{once: true}}
                                transition={{ duration: 0.6}}
                                className="bg-white p-6 shadow rounded-xl hover:shadow-lg"
                                >
                                <div className="w-12 h-12 rounded-full flex items-center mb-4 justify-center bg-blue-100">
                                    <Lightbulb className="w-8 h-8 text-primary" />
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-black">AI & Future of Work</h3>
                                <p className="text-black text-lg">Insights on artificial intelligence and its impact on careers and industries.</p>
                            
                              </motion.div>
                            <motion.div className="bg-white p-6 shadow rounded-xl hover:shadow-lg">
                                <div className="w-12 h-12 rounded-full flex items-center mb-4 justify-center bg-green-100">
                                    <Code className="w-8 h-8 text-green-500"/>
                                </div>
                                <h3 className="text-black text-xl font-bold mb-4">Web Development</h3>
                                <p className="text-black text-lg">Modern web technologies, frameworks, and best practices for developers.</p>                            
                            </motion.div>

                            <motion.div className="bg-white p-6 shadow rounded-xl hover:shadow-lg">
                                 <div className="w-12 h-12 rounded-full flex items-center mb-4 justify-center bg-indigo-100">
                                    <BrickWallShield className="w-8 h-8 text-indigo-500"/>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-black">Blockchain</h3>
                                <p className="text-black text-lg">Decentralized technologies, smart contracts, and the future of digital assets.</p>
                            </motion.div>


                            <motion.div className="bg-white p-6 shadow rounded-xl hover:shadow-lg">
                                 <div className="w-12 h-12 rounded-full flex items-center mb-4 justify-center bg-pink-100">
                                    <MapPlus className="w-8 h-8 text-pink-500"/>
                                </div>
                                 <h3 className="text-xl font-bold mb-4 text-black">Digital Creativity</h3>
                               <p className="text-black text-lg">Design thinking, creative tools, and building digital products.</p> 
                            </motion.div>

                            <motion.div className="bg-white p-6 shadow rounded-xl hover:shadow-lg">
                                 <div className="w-12 h-12 rounded-full flex items-center mb-4 justify-center bg-purple-100">
                                    <Wrench w-8 h-8 text-purple-500/>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-black">Gadgets & Tools</h3>
                                <p className="text-black text-lg">Reviews and recommendations on tools and tech Nigerians need.</p>
                            </motion.div>

                            <motion.div className="bg-white p-6 shadow rounded-xl hover:shadow-lg">
                                 <div className="w-12 h-12 rounded-full flex items-center mb-4 justify-center bg-green-100">
                                    <BookOpen className="w-8 h-8 text-green-500"/>
                                </div>
                                <h3 className="text-xl font-bold mb-4 text-black">Tech Education</h3>
                                <p className="text-black text-lg">Learning resources and career guidance for aspiring developers.</p>
                            </motion.div>

                                
                      
                        

                    </div>


                </div>
    </section>

    </div>
    
}