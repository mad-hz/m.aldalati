<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- Back Button -->
                <BackButton />

                <!-- Content -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">ICT Field of Work</h2>

                    <p class="text-lg text-gray-800">
                        The ICT field, as we know it today, is still involving, offering a range of different career
                        paths.In ICT there's a constant innovation, as we advance more, more career roles come out and
                        the more easier our life becomes.
                    </p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="/images/blog/ict.png"
                        alt="ICT Field of Work">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">
                    For instance, the rise of cloud computing and AI created a demand for experts in such fields. As
                    well as the increase of the importance of cybersecurity. Working in ICT basically means that
                    everyday there's a new challenge and an opportunity to make an impact.
                </p>

                <!-- Pagination -->
                <PaginationNav previousLink="study-choice" nextLink="programming-experience" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PaginationNav from '~/components/PaginationNav'
import BackButton from '~/components/BackButton'

const config = useRuntimeConfig()

useHead({
    title: `ICT Field of Work - ${config.public.appName}`
})
</script>