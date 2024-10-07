<template>
    <!-- Blog Card -->
    <nuxt-link :to="blog.link" class="group flex flex-col focus:outline-none mt-10">
        <div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden">
            <img :src="blog.image" :alt="blog.title"
                class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl" />
        </div>

        <!-- Blog Title -->
        <div class="mt-7">
            <h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600">
                {{ blog.title }}
            </h3>

            <!-- Blog description -->
            <p class="mt-3 text-gray-800">
                {{ blog.description }}
            </p>

            <!-- Link to read more -->
            <p
                class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium">
                Read more
                <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                    viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                    stroke-linejoin="round">
                    <path d="m9 18 6-6-6-6" />
                </svg>
            </p>
        </div>
    </nuxt-link>
</template>

<script setup>
defineProps({
    blog: {
        type: Object,
        required: true
    }
})
</script>