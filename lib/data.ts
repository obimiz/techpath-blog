export const FeaturedPosts = [
    {
         id: "1",
        titles: "The Art of Minimalist Design",
        excepts: "Exploring how less can truely be more in the digital age, and why constrainst breeds creativity.",
        category: "Design",
        date: "Dec 15, 2025",
        image: "https://images.unsplash.com/photo-1761839256545-4268b03606c0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
         id: "2",
        titles: "Building Sustainable Tech Solutions",
        excepts: "A deep dive into creating technology that doesnt just work but works responsibly but works for future generations.",
        category: "Tech",
        date: "Dec 12, 2025",
        image: "https://plus.unsplash.com/premium_photo-1683121716061-3faddf4dc504?q=80&w=2832&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },

    {
         id: "3",
        titles: "The Psycology of Creative Flow",
        excepts: "Understanding the mental state that unlock our most innovative thinking and productive thinking",
        category: "Creativity",
        date: "Dec 10, 2025",
        image: "https://plus.unsplash.com/premium_photo-1674489155735-60583eee3693?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8VGhlJTIwUHN5Y29sb2d5JTIwb2YlMjBDcmVhdGl2ZSUyMEZsb3d8ZW58MHx8MHx8fDA%3D"
    },

    {
        id: "4",
        titles: "Future of Remote Collaboration",
        excepts: "How distributed teams are shaping the way we work, communicate and create together.",
        category: "Tech",
        date: "Dec 8, 2025",
        image: "https://images.unsplash.com/photo-1758874384552-5d090a98033b?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8RnV0dXJlJTIwb2YlMjBSZW1vdGUlMjBDb2xsYWJvcmF0aW9ufGVufDB8fDB8fHww"
    }

   
]

export const categories = [
    {
        name: "Tech",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="lucide lucide-code-icon lucide-code"><path d="m16 18 6-6-6-6"/><path d="m8 6-6 6 6 6"/></svg>`,
        count: 24,
    },

    {
        name: "Design",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" 
        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" 
        class="lucide lucide-component-icon lucide-component"><path d="M15.536 11.293a1 1 0 0 0 0 1.414l2.376 
        2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 0 0-1.414 0z"/><path d="M2.297 
        11.293a1 1 0 0 0 0 1.414l2.377 2.377a1 1 0 0 0 1.414 0l2.377-2.377a1 1 0 0 0 0-1.414L6.088 8.916a1 1 0 0 0-1.414 0z"/><path 
        d="M8.916 17.912a1 1 0 0 0 0 1.415l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.415l-2.377-2.376a1 1 0 0 0-1.414 
        0z"/><path d="M8.916 4.674a1 1 0 0 0 0 1.414l2.377 2.376a1 1 0 0 0 1.414 0l2.377-2.376a1 1 0 0 0 0-1.414l-2.377-2.377a1 1 0 
        0 0-1.414 0z"/></svg>`,
        count: "18",
    },

    {
        name: "Creativity",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
        lucide-lightbulb-icon lucide-lightbulb"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 
        6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"/><path d="M9 18h6"/><path d="M10 22h4"/></svg>`,
        count: "15",
    },

    {
        name: "Innovation",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
        lucide-alarm-smoke-icon lucide-alarm-smoke"><path d="M11 21c0-2.5 2-2.5 2-5"/><path d="M16 21c0-2.5 2-2.5 
        2-5"/><path d="m19 8-.8 3a1.25 1.25 0 0 1-1.2 1H7a1.25 1.25 0 0 1-1.2-1L5 8"/><path d="M21 3a1 1 0 0 1 1 
        1v2a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4a1 1 0 0 1 1-1z"/><path d="M6 21c0-2.5 2-2.5 2-5"/></svg>`,
        count: "12",
    },

    {
        name: "Digital",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
        lucide-globe-icon lucide-globe"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 
        14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>`,
        count: "20",
    },

    {
        name: "Lifestyle",
        icon: `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide 
        lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 
        9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"/></svg>`,
        count: "8"
    }

]