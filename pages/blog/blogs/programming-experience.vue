<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">My Programming Experience</h2>

                    <p class="text-lg text-gray-800">
                        I've been coding extensively in Laravel, a PHP framework, which has become central to my
                        development process. Laravel's elegant syntax and powerful features, such as Eloquent ORM and
                        Blade templating, make it easy to build robust and scalable applications. I've also integrated
                        MySQL and PostgreSQL databases, ensuring data is handled efficiently. In addition to Laravel,
                        I've worked with Vue.js and Nuxt.js to build dynamic front-ends, enhancing the user experience.
                        TailwindCSS and Bootstrap are my go-to tools for crafting responsive and visually appealing
                        designs.</p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/programming.png"
                        alt="Programming Experience">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">Beyond coding, I've managed deployments using cPanel, ensuring smooth
                    website management, and I've configured email services with Roundcube. This hands-on experience
                    across various tools and technologies has deepened my understanding of full-stack development,
                    enabling me to build comprehensive, efficient web applications.
                </p>
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