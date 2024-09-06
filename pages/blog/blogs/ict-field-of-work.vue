<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">ICT Field of Work</h2>

                    <p class="text-lg text-gray-800">
                        The ICT field is vast and ever-evolving, offering a range of career paths from software
                        development to cybersecurity. One of the most exciting aspects of working in ICT is the constant
                        innovation. As technology advances, new roles and specializations emerge, providing endless
                        opportunities for growth and learning.</p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/ict.png"
                        alt="ICT Field of Work">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">For instance, the rise of cloud computing and data analytics has
                    created a demand for experts in these areas. Similarly, the increasing importance of cybersecurity
                    in protecting digital assets has led to a surge in roles focused on safeguarding information.
                    Working in ICT means being at the forefront of technological change, where every day presents new
                    challenges and opportunities to make a significant impact.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
    title: `ICT Field of Work - ${config.public.appName}`
})
</script>