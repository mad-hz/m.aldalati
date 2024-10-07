<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                 <!-- Back Button -->
                <BackButton />

                <!-- Content -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">First Feedback</h2>

                    <p class="text-lg text-gray-800">After completing the SKC assigment, I recieved a feedback about my
                        question where I happened to
                        ask about the content of the program, and how far are we going to get into cyber seucrity. The
                        response stated that the program will only cover the basics, further I could do self study.</p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/feedback.png" alt="Feedback">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">The feedback also stated that my knowledge with Laravel, will help me
                    in the second semster of the
                    first year, in which we get more deep into MVC.</p>

                <!-- Pagination -->
                <PaginationNav previousLink="profession" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PaginationNav from '~/components/PaginationNav'
import BackButton from '~/components/BackButton'

const config = useRuntimeConfig()

useHead({
    title: `Feedback - ${config.public.appName}`
})
</script>