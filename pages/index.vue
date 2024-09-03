<template>
    <div
        class="relative overflow-hidden before:absolute before:top-0 before:start-1/2 before:bg-[url('https://preline.co/assets/svg/examples/squared-bg-element.svg')] before:bg-no-repeat before:bg-top before:size-full before:-z-[1] before:transform before:-translate-x-1/2">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-10">
            <div class="mt-5 max-w-xl text-center mx-auto">
                <h1 class="block font-bold text-gray-800 text-4xl md:text-5xl lg:text-6xl">
                    <span class="bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent">Mohamad Aldalati</span>
                </h1>
            </div>

            <div class="mt-5 max-w-3xl text-center mx-auto">
                <p class="text-lg text-gray-600">Let's build something together.</p>
            </div>

            <div class="mt-8 gap-3 flex justify-center">
                <nuxt-link
                    class="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-r from-blue-500 via-lime-400 to-yellow-500 hover:bg-gradient-to-r hover:from-blue-400 hover:via-lime-300 hover:to-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-lime-400 text-white text-sm font-medium rounded-full py-3 px-6 transition duration-300 ease-in-out"
                    to="https://github.com/mad-hz" target="_blank">
                    <svg class="shrink-0 w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                        fill="currentColor" viewBox="0 0 16 16">
                        <path
                            d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z">
                        </path>
                    </svg>
                    My Github
                </nuxt-link>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto mt-24">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">A little bit about myself</h2>

                    <p class="text-lg text-gray-800">
                        I've been coding for a while and have built a strong foundation, particularly in backend
                        development with PHP, which I enjoy for its challenges. I'm currently expanding my skills and
                        network through the HZ ICT program. My strengths in planning, leadership, problem-solving, and
                        attention to detail help me excel in both individual and team settings, though my perfectionism
                        sometimes slows me down.
                    </p>
                    <p class="text-lg text-gray-800">
                        I also work part-time as a pizza delivery driver at Domino's, which presents challenges due to
                        my long commute and balancing work with my studies. After completing this program, I aim to
                        pursue a career as a security or software engineer.
                    </p>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl mb-8">Tools I use</h2>

                    <dl class="flex flex-col sm:flex-row gap-1">
                        <dt class="min-w-40">
                            <span class="block text-sm text-gray-500">Frontend:</span>
                        </dt>
                        <dd>
                            <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/bootstrap.png" alt="" class="w-6 h-6 me-1" />
                                    Bootstrap
                                </li>

                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/tailwindcss.png" alt="" class="w-6 h-6 me-1" />
                                    Tailwindcss
                                </li>

                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/vue-js.png" alt="" class="w-6 h-6 me-1" />
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

                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/php.png" alt="" class="w-6 h-6 me-1" />
                                    PHP
                                </li>
                            </ul>
                        </dd>
                    </dl>

                    <dl class="flex flex-col sm:flex-row gap-1">
                        <dt class="min-w-40">
                            <span class="block text-sm text-gray-500">Collobration:</span>
                        </dt>
                        <dd>
                            <ul>
                                <li class="me-1 after:content-[','] inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/cpanel.png" alt="Laravel" class="w-6 h-6 me-1" />
                                    Cpanel
                                </li>

                                <li class="me-1 inline-flex items-center text-sm text-gray-800">
                                    <img src="~/assets/images/tools/roundcube_webmail.png" alt="" class="w-6 h-6 me-1" />
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
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl mb-8">My journey to the HZ</h2>
                    <div>
                        <div class="group relative flex gap-x-5">
                            <div
                                class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                <div class="relative z-10 size-6 flex justify-center items-center">
                                    <img src="~/assets/images/journey/aob-compaz.png" alt="Image">
                                </div>
                            </div>

                            <div class="grow pb-8 group-last:pb-0">
                                <p class="font-semibold text-lg text-gray-800">
                                    21+ toets </p>
                            </div>
                        </div>

                        <div class="group relative flex gap-x-5">
                            <div
                                class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                <div class="relative z-10 size-6 flex justify-center items-center">
                                    <img src="~/assets/images/journey/ielts.png" alt="Image">
                                </div>
                            </div>

                            <div class="grow pb-8 group-last:pb-0">
                                <p class="font-semibold text-lg text-gray-800">
                                    Ielts
                                </p>
                            </div>
                        </div>

                        <div class="group relative flex gap-x-5">
                            <div
                                class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                                <div class="relative z-10 size-6 flex justify-center items-center">
                                    <img src="~/assets/images/journey/wiskunde_b.png" alt="Image">
                                </div>
                            </div>

                            <div class="grow pb-8 group-last:pb-0">
                                <p class="font-semibold text-lg text-gray-800">
                                    Math B
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">Refrenced by</h2>
                    <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14">
                        <div class="flex justify-center gap-x-6 sm:gap-x-12 lg:gap-x-24">
                            <span class="h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500">E61-Machine
                                Consulting</span>

                            <a href="https://italparts.coffee" target="_blank"><img
                                    class="py-3 lg:py-5 w-16 h-auto md:w-20 lg:w-24 mx-auto sm:mx-0 text-gray-500"
                                    src="~/assets/images/references/italparts.png" /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>