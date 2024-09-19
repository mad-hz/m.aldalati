<template>
    <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div class="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
            <div>
                <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight"><span
                        class="bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent">Mohamad
                        Aldalati</span>
                </h1>
                <p class="mt-3 text-lg text-gray-800">Good morning to everyone except people who hate PHP.</p>

                <div class="mt-7 grid gap-3 w-full sm:inline-flex">
                    <nuxt-link
                        class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-lime-500 text-white hover:bg-lime-600 focus:outline-none focus:bg-lime-600 disabled:opacity-50 disabled:pointer-events-none"
                        to="/profile">
                        My profile
                        <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <path d="m9 18 6-6-6-6" />
                        </svg>
                    </nuxt-link>
                    <nuxt-link
                        class="py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none"
                        to="/contact">
                        Contact me
                    </nuxt-link>
                </div>
            </div>

            <div class="relative ms-4">
                <img class="w-full rounded-md" src="~/assets/images/general/pc_foto.png" alt="PC Photo Page">
                <div
                    class="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 size-full rounded-md mt-4 -mb-4 me-4 -ms-4 lg:mt-6 lg:-mb-6 lg:me-6 lg:-ms-6">
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto mt-20">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">My vision</h2>
                    <p class="text-lg text-gray-800">The HBO ICT program almost matches my passion for technolog, it
                        offeres me an approach which I
                        could apply to real world challenges, particularly in web development in Laravel. Security is a
                        key focus for me, as I aim to build my knowledge in that particular field.
                    </p>

                    <figure>
                        <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/ict.png"
                            alt="ICT Field of Work">
                        <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                        </figcaption>
                    </figure>

                    <p class="text-lg text-gray-800">
                        This program also emphasizes creating thinking for success in ICT field, working on group
                        projects which will help to improve the communciation and problem solving skills. Further, I am
                        excited to contribute to the ICT community and build a career for myself.</p>
                </div>
            </div>
        </div>
    </div>

    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto mt-10">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl mb-10">Work Experience</h2>
                    <div class="group relative flex gap-x-5">
                        <div
                            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div class="relative z-10 size-6 flex justify-center items-center">
                                <img class="shrink-0 size-6 text-gray-600" src="~/assets/images/work/studentaanhuis.png"
                                    alt="Studentaanhuis">
                            </div>
                        </div>

                        <div class="grow pb-8 group-last:pb-0">
                            <h3 class="mb-1 text-xs text-gray-600">
                                2024 - Present
                            </h3>

                            <p class="font-semibold text-sm text-gray-800">
                                Technical Support at Home
                            </p>

                            <p class="mt-1 text-sm text-gray-600">
                                At studentaanhuis I was able to expand my knowledge, through solving the following
                                problems:
                            </p>

                            <ul class="list-disc ms-6 mt-3 space-y-1.5">
                                <li class="ps-1 text-sm text-gray-600">
                                    Email Problems
                                </li>
                                <li class="ps-1 text-sm text-gray-600">
                                    Remove Viruses
                                </li>
                                <li class="ps-1 text-sm text-gray-600">
                                    Install softwares
                                </li>
                                <li class="ps-1 text-sm text-gray-600">
                                    Do an APK Computer Check
                                </li>
                                <li class="ps-1 text-sm text-gray-600">
                                    Cleaning up devices and making a back-up.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="group relative flex gap-x-5">
                        <div
                            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div class="relative z-10 size-6 flex justify-center items-center">
                                <img class="shrink-0 size-6 text-gray-600" src="~/assets/images/work/dominos.png"
                                    alt="Dominos">
                            </div>
                        </div>

                        <div class="grow pb-8 group-last:pb-0">
                            <h3 class="mb-1 text-xs text-gray-600">
                                2024 - Present
                            </h3>

                            <p class="font-semibold text-sm text-gray-800">
                                Pizza Delivery & Making
                            </p>

                            <p class="mt-1 text-sm text-gray-600">
                                Dominos is a fun place to work at, where I happened to improve my communication skills,
                                and also my dutch language, I usually do the following tasks:
                            </p>

                            <ul class="list-disc ms-6 mt-3 space-y-1.5">
                                <li class="ps-1 text-sm text-gray-600">
                                    Delivery
                                </li>
                                <li class="ps-1 text-sm text-gray-600">
                                    Answering Calls & Taking orders
                                </li>
                                <li class="ps-1 text-sm text-gray-600">
                                    Making Simple Pizzas & Cutting it Into Slices.
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div class="group relative flex gap-x-5">
                        <div
                            class="relative group-last:after:hidden after:absolute after:top-8 after:bottom-2 after:start-3 after:w-px after:-translate-x-[0.5px] after:bg-gray-200">
                            <div class="relative z-10 size-6 flex justify-center items-center">
                                <img class="shrink-0 size-6 text-gray-600" src="~/assets/images/work/madnl.png"
                                    alt="MAD NL">
                            </div>
                        </div>

                        <div class="grow pb-8 group-last:pb-0">
                            <h3 class="mb-1 text-xs text-gray-600">
                                2024 - Present
                            </h3>

                            <p class="font-semibold text-sm text-gray-800">
                                MAD NL (Side Hustle) </p>

                            <p class="mt-1 text-sm text-gray-600">
                                I made MAD NL to be able to show myself to the world, and to prove that I am capable of
                                development, through it, I was able to improve myself and make connections.
                            </p>

                            <div class="mt-3">
                                <nuxt-link
                                    class="block border border-gray-200 rounded-lg hover:shadow-sm focus:outline-none"
                                    to="https://madnl.nl" target="_blank">
                                    <div class="relative flex items-center overflow-hidden">
                                        <img class="w-32 sm:w-48 h-full absolute inset-0 object-cover rounded-s-lg"
                                            src="~/assets/images/work/madnl.png" alt="MAD NL">

                                        <div class="grow p-4 ms-32 sm:ms-48">
                                            <div class="min-h-24 flex flex-col justify-center">
                                                <h3 class="font-semibold text-sm text-gray-800">
                                                    MAD NL
                                                </h3>
                                                <p class="mt-1 text-sm text-gray-500">
                                                    Unlock top-tier web design, development, and security for ultimate
                                                    online success.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </nuxt-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>


    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto mt-10">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl mb-10">HZ Links (Aside Menu)</h2>
                    <div class="max-w-[85rem] mx-auto">
                        <div class="gap-6">
                            <div
                                class="group flex flex-col h-full bg-white border border-gray-200 shadow-sm rounded-xl">
                                <div class="p-4 md:p-6">
                                    <aside>
                                        <ul>
                                            <li class="mb-4">
                                                <nuxt-link class="text-lime-500 hover:underline"
                                                    to="https://hz.nl/uploads/documents/1.4-Over-de-HZ/1.4.3.-Regelingen-en-documenten/OERS/2023-2024/Juli/CER-HZ-Bachelor-full-time-2023-2024-DEF-version-20240412.pdf?_gl=1*1u9ypqd*_up*MQ..*_ga*NzcxNDI4NjEyLjE3MjU2MTM5MTQ.*_ga_6MYD4DVW57*MTcyNTYxMzkxMy4xLjAuMTcyNTYxMzkxMy4wLjAuMA.."
                                                    target="_blank">The HZ HBO-ICT
                                                    Course and Examination Regulations (CER) </nuxt-link>
                                            </li>
                                            <li class="mb-4">
                                                <nuxt-link class="text-lime-500 hover:underline"
                                                    to="https://hz.nl/uploads/documents/1.4-Over-de-HZ/1.4.3.-Regelingen-en-documenten/OERS/2023-2024/Juli/TWE/IR-B-HBO-ICT-full-time-2023-2024-DEF.pdf"
                                                    target="_blank">The
                                                    Implementation Regulations (IR) of the HBO-ICT program</nuxt-link>
                                            </li>
                                            <li class="mb-4">
                                                <nuxt-link class="text-lime-500 hover:underline"
                                                    to="https://learn.hz.nl" target="_blank">This Learn
                                                    environment</nuxt-link>
                                            </li>
                                            <li class="mb-4">
                                                <nuxt-link class="text-lime-500 hover:underline"
                                                    to="https://learn.hz.nl" target="_blank">The page in MyHZ
                                                    with your study progress</nuxt-link>
                                            </li>
                                            <li>
                                                <nuxt-link class="text-lime-500 hover:underline"
                                                    to="https://github.com/HZ-HBO-ICT" target="_blank">HZ
                                                    Github</nuxt-link>
                                            </li>
                                        </ul>
                                    </aside>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="relative max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto mt-10">
        <blockquote class="text-center lg:mx-auto lg:w-3/5">
            <nuxt-link to="https://italparts.coffee" target="_blank"><img class="mx-auto w-20 h-auto sm:w-28 "
                    src="~/assets/images/references/italparts.png" alt="Italparts"></nuxt-link>

            <div class="mt-6 lg:mt-10">
                <p class="relative text-xl sm:text-2xl md:text-3xl md:leading-normal font-medium text-gray-800">
                    <svg class="absolute top-0 start-0 transform -translate-x-8 -translate-y-8 size-16 text-gray-200 sm:h-24 sm:w-24"
                        width="16" height="13" viewBox="0 0 16 13" fill="none" xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true">
                        <path
                            d="M7.18079 9.25611C7.18079 10.0101 6.93759 10.6211 6.45119 11.0891C5.96479 11.5311 5.35039 11.7521 4.60799 11.7521C3.71199 11.7521 2.96958 11.4531 2.38078 10.8551C1.81758 10.2571 1.53598 9.39911 1.53598 8.28111C1.53598 7.08511 1.86878 5.91511 2.53438 4.77111C3.22559 3.60111 4.18559 2.67811 5.41439 2.00211L6.29759 3.36711C5.63199 3.83511 5.09439 4.35511 4.68479 4.92711C4.30079 5.49911 4.04479 6.16211 3.91679 6.91611C4.14719 6.81211 4.41599 6.76011 4.72319 6.76011C5.43999 6.76011 6.02879 6.99411 6.48959 7.46211C6.95039 7.93011 7.18079 8.52811 7.18079 9.25611ZM14.2464 9.25611C14.2464 10.0101 14.0032 10.6211 13.5168 11.0891C13.0304 11.5311 12.416 11.7521 11.6736 11.7521C10.7776 11.7521 10.0352 11.4531 9.44639 10.8551C8.88319 10.2571 8.60159 9.39911 8.60159 8.28111C8.60159 7.08511 8.93439 5.91511 9.59999 4.77111C10.2912 3.60111 11.2512 2.67811 12.48 2.00211L13.3632 3.36711C12.6976 3.83511 12.16 4.35511 11.7504 4.92711C11.3664 5.49911 11.1104 6.16211 10.9824 6.91611C11.2128 6.81211 11.4816 6.76011 11.7888 6.76011C12.5056 6.76011 13.0944 6.99411 13.5552 7.46211C14.016 7.93011 14.2464 8.52811 14.2464 9.25611Z"
                            fill="currentColor" />
                    </svg>
                    <span class="relative z-10 italic text-gray-800">I just wanted to say that I'm very happy with
                        working with Mohamad, he's very fast to respond and always provides thoughtful solutions, making
                        collaboration smooth and productive.</span>
                </p>
            </div>

            <footer class="mt-6">
                <div class="font-semibold text-gray-800">Maher</div>
                <div class="text-sm text-gray-500">CEO | Italparts</div>
            </footer>
        </blockquote>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
    title: `Home - ${config.public.appName}`
})
</script>