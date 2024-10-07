<template>
    <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <!-- Header Title -->
            <div class="max-w-2xl text-center mx-auto mb-10">
                <h2
                    class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent">
                    Who Am
                    I
                </h2>
                <p class="mt-3 text-lg text-gray-800">Once again, good morning to everyone except people who hate PHP.
                </p>
            </div>

            <!-- HZ Video -->
            <div class="mt-10 relative max-w-5xl mx-auto">
                <div class="w-full h-96 sm:h-[480px] rounded-xl overflow-hidden">
                    <div class="w-full h-full"><iframe
                            src="https://player.vimeo.com/video/1006493567?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                            frameborder="0" allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
                            style="position:absolute;top:0;left:0;width:100%;height:100%;"
                            title="Ontdek de nieuwe opleiding HBO-ICT in deeltijd | HZ University of Applied Sciences"></iframe>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- My Info -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">A little bit about myself</h2>
                    <p class="text-lg text-gray-800">Hello there, my name is Mohamad, you could call me Mo. I am 19
                        years old from Syria and have been
                        coding for a short time period, building a solid foundation in back end development. While I
                        find that challenging, I'm still in my early career stages, and consider myself as a newbie.
                        Currently, I am expanding my network and skills through the ICT program at the HZ. I like to
                        take control, lead the team and help them to solve the problem, which I consider as my
                        strenghts. Nor less, my perfectionism can slow me down, I am still trying to improve.</p>

                    <!-- Socials & Email -->
                    <ul class="mt-5 flex flex-col gap-y-3">
                        <li class="flex items-center gap-x-2.5">
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg>
                            <nuxt-link
                                class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                                href="mailto:mad@madnl.nl">
                                mad@madnl.nl
                            </nuxt-link>
                        </li>

                        <li class="flex items-center gap-x-2.5">
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M19.13 5.09C15.22 9.14 10 10.44 2.25 10.94"></path>
                                <path d="M21.75 12.84c-6.62-1.41-12.14 1-16.38 6.32"></path>
                                <path d="M8.56 2.75c4.37 6 6 9.42 8 17.72"></path>
                            </svg>
                            <nuxt-link
                                class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400"
                                href="https://madnl.nl" target="_blank">
                                Website (MAD NL)
                            </nuxt-link>
                        </li>
                        <li class="flex items-center gap-x-2.5">
                            <svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                                fill="currentColor" viewBox="0 0 16 16">
                                <path
                                    d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                            </svg>
                            <nuxt-link to="https://github.com/mad-hz" target="_blank"
                                class="text-[13px] text-gray-500 underline hover:text-gray-800 hover:decoration-2 focus:outline-none focus:decoration-2 dark:text-neutral-500 dark:hover:text-neutral-400">
                                Github
                            </nuxt-link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- List of tools I use -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl mb-8">Tools I use</h2>

                    <dl class="flex flex-col sm:flex-row gap-1">
                        <dt class="min-w-40">
                            <span class="block text-sm text-gray-500">Frontend:</span>
                        </dt>
                        <dd>
                            <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/bootstrap.png" alt="Bootstrap"
                                        class="w-6 h-6 me-1" />
                                    Bootstrap
                                </li>

                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/tailwindcss.png" alt="Tailwindcss"
                                        class="w-6 h-6 me-1" />
                                    Tailwindcss
                                </li>

                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/vue-js.png" alt="Vuejs" class="w-6 h-6 me-1" />
                                    Vuejs
                                </li>
                            </ul>
                        </dd>
                    </dl>

                    <dl class="flex flex-col sm:flex-row gap-1">
                        <dt class="min-w-40">
                            <span class="block text-sm text-gray-500">Backend:</span>
                        </dt>
                        <dd>
                            <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/laravel.png" alt="Laravel" class="w-6 h-6 me-1" />
                                    Laravel
                                </li>

                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/php.png" alt="PHP" class="w-6 h-6 me-1" />
                                    PHP
                                </li>
                            </ul>
                        </dd>
                    </dl>

                    <dl class="flex flex-col sm:flex-row gap-1">
                        <dt class="min-w-40">
                            <span class="block text-sm text-gray-500">Collaboration:</span>
                        </dt>
                        <dd>
                            <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/cpanel.png" alt="Laravel" class="w-6 h-6 me-1" />
                                    Cpanel
                                </li>

                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/roundcube_webmail.png" alt=""
                                        class="w-6 h-6 me-1" />
                                    RoundCube Webmail
                                </li>
                            </ul>
                        </dd>
                    </dl>

                    <dl class="flex flex-col sm:flex-row gap-1">
                        <dt class="min-w-40">
                            <span class="block text-sm text-gray-500 dark:text-neutral-500">Soft Skills:</span>
                        </dt>
                        <dd>
                            <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-black">
                                    Strong communication
                                </li>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-black">
                                    Problem-solving
                                </li>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-black">
                                    Attention to detail
                                </li>
                                <li class="me-1 inline-flex items-center text-sm text-black">
                                    Time management
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- A few projects I have made -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">A few projects by me</h2>
                    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
                        <div class="grid lg:grid-cols-2 lg:gap-y-16 gap-10">
                            <nuxt-link to="https://advocaat.madnl.nl" target="_blank"
                                class="group block rounded-xl overflow-hidden focus:outline-none">
                                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                    <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                        <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                            src="https://madnl.nl/assets/images/projects/latest-project-1.png"
                                            alt="MAD NL ADVOCAAT">
                                    </div>
                                </div>
                            </nuxt-link>

                            <nuxt-link to="https://github.com/mad-nl/Job-Board" target="_blank"
                                class="group block rounded-xl overflow-hidden focus:outline-none">
                                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                    <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                        <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                            src="https://madnl.nl/assets/images/projects/latest-project-3.png"
                                            alt="MAD NL JOB BOARD">
                                    </div>
                                </div>
                            </nuxt-link>

                            <nuxt-link to="https://lms.madnl.nl" target="_blank"
                                class="group block rounded-xl overflow-hidden focus:outline-none">
                                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                    <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                        <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                            src="https://madnl.nl/assets/images/projects/latest-project-4.png"
                                            alt="MAD NL LMS">
                                    </div>
                                </div>
                            </nuxt-link>

                            <nuxt-link to="https://madnl.nl" target="_blank"
                                class="group block rounded-xl overflow-hidden focus:outline-none">
                                <div class="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-5">
                                    <div class="shrink-0 relative rounded-xl overflow-hidden w-full sm:w-56 h-44">
                                        <img class="group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out size-full absolute top-0 start-0 object-cover rounded-xl"
                                            src="https://madnl.nl/assets/images/projects/latest-project-2.png"
                                            alt="MAD NL">
                                    </div>
                                </div>
                            </nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- Clients Am Referenced By -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">Referenced by</h2>
                    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                        <div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
                            <span class="h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500">E61-Machine
                                Consulting</span>

                            <nuxt-link to="https://italparts.coffee" target="_blank"><img
                                    class="w-2/4 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                                    src="~/assets/images/references/italparts.png" alt="Italparts" /></nuxt-link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
    title: `Profile - ${config.public.appName}`
})
</script>