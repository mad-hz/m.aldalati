<template>
    <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <div class="max-w-2xl text-center mx-auto mb-10">
                <h1
                    class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent py-4">
                    Insights
                </h1>
                <p class="mt-1 text-gray-600">A chronological journal about the HBO-ICT program.</p>
            </div>

            <div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <nuxt-link class="group flex flex-col focus:outline-none" to="/blog/blogs/study-choice">
                    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="~/assets/images/blog/study-choice.png" alt="Study Choice">
                    </div>

                    <div class="mt-7">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                            Study choice
                        </h3>
                        <p class="mt-3 text-gray-800">
                            I chose the HBO-ICT program because it aligns perfectly with...</p>
                        <p
                            class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </nuxt-link>

                <nuxt-link class="group flex flex-col focus:outline-none" to="/blog/blogs/swot">
                    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="~/assets/images/blog/swot.png" alt="SWOT">
                    </div>

                    <div class="mt-7">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                            Personal SWOT Analysis
                        </h3>
                        <p class="mt-3 text-gray-800">
                            Reflecting on my SWOT analysis, I identify key strengths in planning...</p>
                        <p
                            class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </nuxt-link>

                <nuxt-link class="group flex flex-col focus:outline-none" to="/blog/blogs/programming-experience">
                    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="~/assets/images/blog/programming.png" alt="Programming Experience">
                    </div>

                    <div class="mt-7">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                            Programming Experience
                        </h3>
                        <p class="mt-3 text-gray-800">
                            I've been coding extensively in Laravel, a PHP framework, which has become central to...</p>
                        <p
                            class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </nuxt-link>

                <nuxt-link class="group flex flex-col focus:outline-none mt-10" to="/blog/blogs/feedback">
                    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="~/assets/images/blog/feedback.png" alt="SKC Feedback">
                    </div>

                    <div class="mt-7">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                            SKC Feedback
                        </h3>
                        <p class="mt-3 text-gray-800">
                            After completing the SKC assignment, I received feedback highlighting my...</p>
                        <p
                            class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </nuxt-link>

                <nuxt-link class="group flex flex-col focus:outline-none mt-10" to="/blog/blogs/ict-field-of-work">
                    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="~/assets/images/blog/ict.png" alt="ICT Field of Work">
                    </div>

                    <div class="mt-7">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                            ICT Field of Work
                        </h3>
                        <p class="mt-3 text-gray-800">
                            The ICT field is vast and ever-evolving, offering a range of career paths from...</p>
                        <p
                            class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </nuxt-link>

                <nuxt-link class="group flex flex-col focus:outline-none mt-10" to="/blog/blogs/profession">
                    <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
                        <img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                            src="~/assets/images/blog/profession.png" alt="Profession">
                    </div>

                    <div class="mt-7">
                        <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                            Profession
                        </h3>
                        <p class="mt-3 text-gray-800">
                            The ICT field is vast and ever-evolving, offering a range of career paths from...</p>
                        <p
                            class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                            Read more
                            <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="m9 18 6-6-6-6" />
                            </svg>
                        </p>
                    </div>
                </nuxt-link>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
    title: `Insights - ${config.public.appName}`
})
</script>