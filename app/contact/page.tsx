import { div } from "motion/react-client";
import Image from "next/image";

export default function ContactPage() {
    return <div className="w-full py-20 px-4">
        <section className="elative w-full flex  h-[60vh]">
             {/* Hero Section */}
             <div className="relative w-full h-[60vh] max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
               <Image 
                src="https://images.unsplash.com/photo-1587560699334-cc4ff634909a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Contact Techpath-blog"
                fill
                className="object-cover"
               />

               <div className="absolute inset-0 bg-black/60 flex items-center justify-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white">Contact Us</h1>
               </div>

             </div>


        </section>


    </div>
}