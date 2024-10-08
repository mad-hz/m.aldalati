<template>
    <div class="relative overflow-hidden">
        <div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10">
            <!-- Header Title -->
            <div class="max-w-2xl text-center mx-auto mb-10">
                <h2
                    class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent">
                    Dashboard
                </h2>
                <p class="mt-1 text-gray-600">Let's dive more into the HBO ICT Program.</p>
            </div>
            <!-- Course Card -->
            <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div v-for="(course, index) in courses" :key="index" class="p-4 border border-gray-200 rounded-lg">
                    <div class="flex items-center mb-4">
                        <input type="checkbox" v-model="course.selected"
                            class="relative appearance-none w-[3.25rem] h-7 bg-gray-300 rounded-full cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 checked:bg-green-500
                  before:content-[''] before:absolute before:top-0.5 before:left-0.5 before:w-6 before:h-6 before:bg-white before:rounded-full before:shadow-md before:transition-transform before:duration-200 checked:before:translate-x-[1.55rem]" />
                    </div>
                    <!-- Course Info -->
                    <div>
                        <p class="font-semibold text-sm text-gray-800">{{ course.name }}</p>
                        <p class="mt-1 text-sm text-gray-600">
                            Quarter: {{ course.quarter }}<br>
                            Credits: {{ course.credits }} EC
                        </p>
                        <!-- List through the exams -->
                        <ul class="mt-2">
                            <li v-for="(exam, examIndex) in course.exams" :key="examIndex" class="text-sm">
                                {{ exam.name }}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- NBSA Boundry Alert -->
            <div class="bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 mt-5 flex items-center"
                role="alert" tabindex="-1" aria-labelledby="hs-actions-label">
                <div class="flex">
                    <div class="shrink-0">
                        <svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 16v-4"></path>
                            <path d="M12 8h.01"></path>
                        </svg>
                    </div>
                    <div class="ms-3">
                        <h3 id="hs-actions-label" class="font-semibold">
                            NBSA Boundary
                        </h3>
                        <div class="mt-2 text-sm text-gray-600">
                            To be able to continue to the next year, you need at least 45 ECs.
                        </div>
                    </div>
                </div>

                <!-- HZ & Alert images -->
                <div class="ml-auto flex gap-3">
                    <img src="~/assets/images/general/alert.png" alt="Alert" class="w-10 h-10 rounded-lg">
                    <img src="~/assets/images/general/hz-logo.png" alt="HZ Logo" class="w-10 h-10 rounded-lg">
                </div>
            </div>

            <!-- Progress Bar -->
            <div class="mt-4">
                <label for="progress-bar" class="block text-sm font-medium text-gray-700">Progress:</label>
                <div class="relative pt-1">
                    <div class="flex items-center justify-between">
                        <span class="text-xs font-medium text-gray-600">0</span>
                        <span class="text-xs font-medium text-gray-600">{{ totalCredits }} / total credits</span>
                        <span class="text-xs font-medium text-gray-600">60</span>
                    </div>
                    <div class="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-2">
                        <div class="flex flex-col justify-center rounded-full transition duration-500 text-xs text-white text-center"
                            :class="progressBarClass" :style="{ width: progressBarWidth }"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const config = useRuntimeConfig()

// Page title
useHead({
    title: `Dashboard - ${config.public.appName}`
})

// List of the courses
const quarters = [
    {
        number: 1,
        courses: [
            {
                name: 'Program- & Career Orientation',
                ec: 2.5,
                exams: [
                    { name: 'Presentation (individual)', grade: 'Pending' }
                ]
            },
            {
                name: 'Computer Science Basics',
                ec: 5,
                exams: [
                    { name: 'Written knowledge test', grade: 'Pending' },
                ]
            },
            {
                name: 'Programming Basics',
                ec: 5,
                exams: [
                    { name: 'Case study exam', grade: 'Pending' },
                ]
            }
        ]
    },
    {
        number: 2,
        courses: [
            {
                name: 'Object-Oriented Programming',
                ec: 10,
                exams: [
                    { name: 'Presentation (group)', grade: 'Pending' },
                    { name: 'Written knowledge test', grade: 'Pending' }
                ]
            }
        ]
    },
    {
        number: '1 and 2',
        courses: [
            {
                name: 'Business IT Consultancy basics',
                ec: 2.5,
                exams: [
                    { name: 'Video', grade: 'Pending' },
                ]
            }
        ]
    },
    {
        number: 3,
        courses: [
            {
                name: 'Framework project 1',
                ec: 10,
                exams: [
                    { name: 'Case study exam', grade: 'Pending' },
                    { name: 'Database exam', grade: 'Pending' },
                    { name: 'Group presentation', grade: 'Pending' },
                    { name: 'Group portfolio', grade: 'Pending' },

                ]
            }
        ]
    },
    {
        number: 4,
        courses: [
            {
                name: 'Framework Project 2',
                ec: 10,
                exams: [
                    { name: 'Final group delivery', grade: 'Pending' },
                    { name: 'Individual project assessment', grade: 'Pending' },
                    { name: 'IT Development portfolio', grade: 'Pending' },
                ]
            }
        ]
    },
    {
        number: 'All blocks',
        courses: [
            {
                name: 'Personal Professional Development Exploration',
                ec: 12.5,
                exams: [
                    { name: 'Criterium focused interview', grade: 'Pending' },
                ]
            }
        ]
    },
    {
        number: 'S1&S2',
        courses: [
            {
                name: 'IT Personality 1',
                ec: 1.25,
                exams: [
                    { name: 'Portfolio', grade: 'Pending' },
                ]
            }
        ]
    },
    {
        number: 'S1&S2',
        courses: [
            {
                name: 'IT Personality 2',
                ec: 1.25,
                exams: [
                    { name: 'Portfolio', grade: 'Pending' },
                ]
            }
        ]
    },
]

// Filters through the courses list and show each one
const courses = ref(
    quarters.flatMap((quarter) =>
        quarter.courses.map((course) => ({
            name: course.name,
            credits: course.ec,
            selected: false,
            exams: course.exams,
            quarter: `${quarter.number}`,
        }))
    )
)

// Calculate the earned credits so far
const totalCredits = computed(() => {
    return courses.value.reduce(
        (sum, course) => (course.selected ? sum + course.credits : sum),
        0
    )
})

// Show the progress on the bar
const progressBarWidth = computed(() => {
    const maxCredits = 60;
    const width = (totalCredits.value / maxCredits) * 100;
    return `${Math.min(width, 100)}%`;
})

// If the credits earned are more than 45 ECs then the progress bar will become green
const progressBarClass = computed(() => {
    return totalCredits.value < 45 ? 'bg-red-500' : 'bg-green-500'
})
</script>
