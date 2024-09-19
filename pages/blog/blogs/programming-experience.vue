<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <nuxt-link class="inline-flex items-center gap-x-1 text-sm text-black" to="/blog">
                    <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                        viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        <path d="m15 18-6-6 6-6" />
                    </svg>
                    Back to blogs
                </nuxt-link>
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">My Programming Experience</h2>

                    <p class="text-lg text-gray-800">
                        I have been coding most of the time in Laravel, which is a PHP framework. It bacame the central
                        of my development process. Laravel is powerful and help me build efficient applications in no
                        time. Next to it, I use PostgreSQL and MySQL to ensure I handle data correctly. I also work on
                        the front end, where I use Nuxt.js and Tailwindcss to create a resposive appealing applications.
                    </p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/programming.png"
                        alt="Programming Experience">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">Away from coding, I manage deployments of websites using cPanel, where I have configured next to it
                    an email service with Roundcube. All the technologies that I have listed make sure I deploy smooth,
                    responsive and secure websities.</p>

                <nav class="flex justify-between items-center gap-x-1" aria-label="Pagination">
                    <nuxt-link to="ict-field-of-work"
                        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        aria-label="Previous">
                        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m15 18-6-6 6-6"></path>
                        </svg>
                        <span aria-hidden="true" class="hidden sm:block">Previous</span>
                    </nuxt-link>
                    <nuxt-link to="swot"
                        class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none">
                        <span aria-hidden="true" class="hidden sm:block">Next</span>
                        <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6"></path>
                        </svg>
                    </nuxt-link>
                </nav>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
    title: `Programming Experience - ${config.public.appName}`
})
</script>