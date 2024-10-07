<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- Back Button -->
                <BackButton />

                <!-- Content -->
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

                <!-- Pagination -->
                <PaginationNav previousLink="ict-field-of-work" nextLink="swot" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PaginationNav from '~/components/PaginationNav'
import BackButton from '~/components/BackButton'

const config = useRuntimeConfig()

useHead({
    title: `Programming Experience - ${config.public.appName}`
})
</script>