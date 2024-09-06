<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">Why I chose the HBO-ICT</h2>

                    <p class="text-lg text-gray-800">I chose the HBO-ICT program because it aligns perfectly with my
                        passion for technology and my career aspirations. I am particularly interested in roles like
                        cybersecurity engineer, back-end developer, and penetration tester. These areas fascinate me
                        because they offer intellectual challenges and the opportunity to enhance system security and
                        efficiency.</p>
                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="~/assets/images/blog/study-choice.png"
                        alt="Study Choice">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">Through this program, I aim to gain the technical skills and practical
                    experience necessary to excel in these fields. My goal is to develop expertise that will allow me to
                    make a meaningful impact in the ICT industry.
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
const config = useRuntimeConfig()

useHead({
    title: `Study Choice - ${config.public.appName}`
})
</script>