<template>
    <div class="max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto">
        <div class="max-w-2xl">
            <div class="space-y-5 md:space-y-8">
                <!-- Back Button -->
                <BackButton />

                <!-- Content -->
                <div class="space-y-3">
                    <h2 class="text-2xl font-bold md:text-3xl">Profession Assignment</h2>
                    <p class="text-lg text-gray-800"><nuxt-link class="text-lime-600 hover:underline font-semibold"
                            to="https://adib.ae" target="_blank">ADIB</nuxt-link> is an Islamic bank based in the UAE,
                        offering financial services including retail,
                        corporate, and private banking.
                        They focus on employing modern technologies like .NET, Java(if you look at the URLs, you will
                        notice it) and cloud services as Microsoft Azure.
                    </p>

                    <p class="text-lg text-gray-800">ADIB offers different kind of roles, one of the roles that aligns
                        well with my future goals is the <nuxt-link class="text-lime-600 hover:underline"
                            to="https://hciq.fa.em2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX_1/requisitions/preview/2161"
                            target="_blank">Senior IT Security Operations Officer.</nuxt-link></p>

                    <p class="text-lg text-gray-800">
                        This role requires knowledge and experience in Microsoft Azure Security, firewalls, and cloud
                        security.
                        This relects to me their expanding into securing their expanding cloud native infrastructure,
                        for me as a first year HBO-ICT student, this opportunity offers me a chance to expand my skills
                        and gain more experience at a large multinational bank.
                    </p>

                    <p class="text-lg text-gray-800">The bank has employees from all around the world, which shows it's
                        multi-culutre as well as their
                        innovation which is very business focued, makes it sound like a place that speaks to me.</p>

                    <p class="text-lg text-gray-800">
                        Sources of info: <nuxt-link class="text-lime-600 hover:underline"
                            to="https://www.adib.ae/en/pages/home_about_adib.aspx" target="_blank">About</nuxt-link> &
                        <nuxt-link class="text-lime-600 hover:underline"
                            to="https://www.adib.ae/mission-objectives#:~:text=ADIB%20is%20a%20leading%20bank,the%20Emirate%20of%20Abu%20Dhabi."
                            target="_blank">Vision</nuxt-link>
                    </p>

                </div>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="/images/blog/profession.png"
                        alt="Programming Experience">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">
                    <nuxt-link class="text-lime-600 hover:underline font-semibold" to="https://abnamro.nl"
                        target="_blank">ABN AMRO</nuxt-link>, is a well known Dutch bank that prioritizes security and
                    sustainability, they offer
                    different kind of IT roles that aligns with my intrests. One of them happened to be a <nuxt-link
                        class="text-lime-600 hover:underline"
                        to="https://www.werkenbijabnamro.nl/en/vacancy/6857/back-end-developer-tikkie-medior"
                        target="_blank">
                        back end developer for Tikkie</nuxt-link>, where we work with AWS. This role focuses on build a
                    secure back end services which goes with my goals.
                </p>

                <p class="text-lg text-gray-800">
                    Another role that got my intrest is the <nuxt-link class="text-lime-600 hover:underline"
                        to="https://www.werkenbijabnamro.nl/vacature/6924/junior-engineer-for-redhat-identity-manager"
                        target="_blank">Junior Engineer for RedHat Identity Manager</nuxt-link>, this role requires
                    experience with Azure Pipelines and peneration testing, all essntials skills for my career
                    development.
                </p>

                <p class="text-lg text-gray-800">
                    I like how ABN AMRO offers dynamic work environments which makes it an ideal place to grow. I am
                    quite excited about such roles, where both cloud and security are the key areas.
                </p>

                <p class="text-lg text-gray-800">
                    Sources of info: <nuxt-link class="text-lime-600 hover:underline"
                        to="https://www.abnamro.com/en/about-abn-amro" target="_blank">About ABN AMRO</nuxt-link>
                </p>

                <figure>
                    <img class="w-full object-cover rounded-xl" src="/images/blog/meta.png"
                        alt="Programming Experience">
                    <figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500">
                    </figcaption>
                </figure>

                <p class="text-lg text-gray-800">
                    At <nuxt-link class="text-lime-600 hover:underline font-semibold" to="https://www.meta.com"
                        target="_blank">Meta</nuxt-link> (known as Facebook), does offer the most exciting roles of all
                    time I must say, such as <nuxt-link class="text-lime-600 hover:underline"
                        to="https://www.metacareers.com/jobs/1689418041890618/" target="_blank">Security
                        Engineer</nuxt-link> and <nuxt-link class="text-lime-600 hover:underline"
                        to="https://www.metacareers.com/jobs/804955741151464/" target="_blank">Software Engineer -
                        Infrastructure </nuxt-link> which both involve with programming languages eg. PHP(I love it) and
                    databases eg. MySQL.
                    These positions focus on security and the infrastructure of the website. This company surely offers
                    an opportunity for professional growith, with it's multi-culutre and innovation.
                </p>

                <p class="text-lg text-gray-800">
                    As a first year HBO ICT student, such opportunities are not meant to be missed, to work at a company
                    with forward thinking is highly appealing to me.
                </p>

                <p class="text-lg text-gray-800">
                    Sources of info: <nuxt-link class="text-lime-600 hover:underline" to="https://www.metacareers.com"
                        target="_blank">Meta Careers</nuxt-link>
                </p>

                <!-- Pagination -->
                <PaginationNav previousLink="swot" nextLink="feedback" />
            </div>
        </div>
    </div>
</template>

<script setup>
import PaginationNav from '~/components/PaginationNav'
import BackButton from '~/components/BackButton'

const config = useRuntimeConfig()

useHead({
    title: `Profession - ${config.public.appName}`
})
</script>