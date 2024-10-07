<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- Back Button -->
                <BackButton />

                <!-- Content -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">Why I chose the HBO-ICT</h2>

                    <p class="text-lg text-gray-800">
                        I chose the HBO-ICT program because it almost aligns with my passion. I am particularly
                        interested in roles where security plays a big role, eg. Back-end developer and and penetration
                        tester.
                    </p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="/images/blog/study-choice.png"
                        alt="Study Choice">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">
                    Through this program, I aim to gain and expand my technical skills, as well as to build myself a
                    network with like minded people, and perhaps make an impact together in the ICT industy.
                </p>

                <!-- Pagination -->
                <PaginationNav nextLink="ict-field-of-work" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PaginationNav from '~/components/PaginationNav'
import BackButton from '~/components/BackButton'

const config = useRuntimeConfig()

useHead({
    title: `Study Choice - ${config.public.appName}`
})
</script>