<template>
    <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <!-- Header Title -->
            <div class="max-w-2xl text-center mx-auto mb-10">
                <h1
                    class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent py-4">
                    Insights
                </h1>
                <p class="mt-1 text-gray-600">
                    A chronological journal about the HBO-ICT program.
                </p>
            </div>

            <!-- List through blogs -->
            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <BlogCard v-for="(blog, index) in blogs" :key="index" :blog="blog" />
            </div>
        </div>
    </div>
</template>

<script setup>
import BlogCard from '~/components/BlogCard'
const config = useRuntimeConfig()

useHead({
    title: `Blog - ${config.public.appName}`
})

// Blogs List
const blogs = [
    {
        title: 'SKC Feedback',
        description: 'After completing the SKC assignment, I received feedback about my question where I happened to...',
        image: '/images/blog/feedback.png',
        link: '/blog/blogs/feedback',
    },
    {
        title: 'Profession',
        description: 'ADIB is an Islamic bank based in the UAE, offering financial services including retail, corporate, and...',
        image: '/images/blog/profession.png',
        link: '/blog/blogs/profession',
    },
    {
        title: 'Personal SWOT Analysis',
        description: 'Looking at my SWOT analysis, I identified that my strengths are in planning, leadership and...',
        image: '/images/blog/swot.png',
        link: '/blog/blogs/swot',
    },
    {
        title: 'Programming Experience',
        description: 'I have been coding most of the time in Laravel, which is a PHP framework. It became the central...',
        image: '/images/blog/programming.png',
        link: '/blog/blogs/programming-experience',
    },
    {
        title: 'ICT Field of Work',
        description: 'The ICT field, as we know it today, is still evolving, offering a range of different career...',
        image: '/images/blog/ict.png',
        link: '/blog/blogs/ict-field-of-work',
    },
    {
        title: 'Study Choice',
        description: 'I chose the HBO-ICT program because it almost aligns with my passion. I am particularly interested in...',
        image: '/images/blog/study-choice.png',
        link: '/blog/blogs/study-choice',
    },
]
</script>