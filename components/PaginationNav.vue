<template>
    <nav class="flex justify-between items-center gap-x-1" aria-label="Pagination">
        <nuxt-link :to="previousLink"
            class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
            aria-label="Previous">
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m15 18-6-6 6-6"></path>
            </svg>
            <span aria-hidden="true" class="hidden sm:block">Previous</span>
        </nuxt-link>
        <nuxt-link :to="nextLink"
            class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100">
            <span aria-hidden="true" class="hidden sm:block">Next</span>
            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="m9 18 6-6-6-6"></path>
            </svg>
        </nuxt-link>
    </nav>
</template>

<script>
export default {
    props: {
        previousLink: {
            type: String,
            required: true,
        },
        nextLink: {
            type: String,
            required: true,
        },
    },
};
</script>
