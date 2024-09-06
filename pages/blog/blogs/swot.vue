<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">My Personal SWOT Analysis</h2>

                    <p class="text-lg text-gray-800">Reflecting on my SWOT analysis, I identify key strengths in
                        planning, group leadership, problem-solving, and attention to detail. These qualities help me
                        tackle challenges efficiently and contribute effectively to team efforts.</p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/swot.png"
                        alt="SWOT">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">On the other hand, my perfectionism, while driving me towards
                    excellence, can also lead to stress. I see the HBO-ICT program as an opportunity to enhance my CV,
                    expand my network, and improve my skills. However, managing long commutes and balancing work with
                    study are challenges I need to address.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
    title: `SWOT Analysis - ${config.public.appName}`
})
</script>