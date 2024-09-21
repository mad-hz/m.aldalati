<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <BackButton />
                
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">My Personal SWOT Analysis</h2>

                    <p class="text-lg text-gray-800">
                        Looking at my SWOT analysis, I identified that my strenghts are in planning, leadership and
                        problem solving. Such strenghts will help me tackle the challenges that I will face through the
                        HBO-ICT program.
                    </p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/swot.png" alt="SWOT">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">On the other hand, my perfectionism, which could help me build clean
                    applications yet it might slow me down.</p>

                <PaginationNav previousLink="programming-experience" nextLink="profession" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PaginationNav from '~/components/PaginationNav'
import BackButton from '~/components/BackButton'

const config = useRuntimeConfig()

useHead({
    title: `SWOT Analysis - ${config.public.appName}`
})
</script>