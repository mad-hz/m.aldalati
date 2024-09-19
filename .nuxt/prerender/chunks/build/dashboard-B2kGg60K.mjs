import { u as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { ref, computed, mergeProps, useSSRContext } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrIncludeBooleanAttr, ssrLooseContain, ssrInterpolate, ssrRenderClass, ssrRenderStyle } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/h3/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/devalue/index.js';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/destr/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/klona/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/scule/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Dashboard - ${config.public.appName}`
    });
    const quarters = [
      {
        number: 1,
        courses: [
          {
            name: "Program- & Career Orientation",
            ec: 2.5,
            exams: [
              { name: "Presentation (individual)", grade: "Pending" }
            ]
          },
          {
            name: "Computer Science Basics",
            ec: 5,
            exams: [
              { name: "Written knowledge test", grade: "Pending" }
            ]
          },
          {
            name: "Programming Basics",
            ec: 5,
            exams: [
              { name: "Case study exam", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: 2,
        courses: [
          {
            name: "Object-Oriented Programming",
            ec: 10,
            exams: [
              { name: "Presentation (group)", grade: "Pending" },
              { name: "Written knowledge test", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: "1 and 2",
        courses: [
          {
            name: "Business IT Consultancy basics",
            ec: 2.5,
            exams: [
              { name: "Video", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: 3,
        courses: [
          {
            name: "Framework project 1",
            ec: 10,
            exams: [
              { name: "Case study exam", grade: "Pending" },
              { name: "Database exam", grade: "Pending" },
              { name: "Group presentation", grade: "Pending" },
              { name: "Group portfolio", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: 4,
        courses: [
          {
            name: "Framework Project 2",
            ec: 10,
            exams: [
              { name: "Final group delivery", grade: "Pending" },
              { name: "Individual project assessment", grade: "Pending" },
              { name: "IT Development portfolio", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: "All blocks",
        courses: [
          {
            name: "Personal Professional Development Exploration",
            ec: 12.5,
            exams: [
              { name: "Criterium focused interview", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: "S1&S2",
        courses: [
          {
            name: "IT Personality 1",
            ec: 1.25,
            exams: [
              { name: "Portfolio", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: "S1&S2",
        courses: [
          {
            name: "IT Personality 2",
            ec: 1.25,
            exams: [
              { name: "Portfolio", grade: "Pending" }
            ]
          }
        ]
      }
    ];
    const courses = ref(
      quarters.flatMap(
        (quarter) => quarter.courses.map((course) => ({
          name: course.name,
          credits: course.ec,
          selected: false,
          exams: course.exams,
          quarter: `${quarter.number}`
        }))
      )
    );
    const totalCredits = computed(() => {
      return courses.value.reduce(
        (sum, course) => course.selected ? sum + course.credits : sum,
        0
      );
    });
    const progressBarWidth = computed(() => {
      const maxCredits = 60;
      const width = totalCredits.value / maxCredits * 100;
      return `${Math.min(width, 100)}%`;
    });
    const progressBarClass = computed(() => {
      return totalCredits.value < 45 ? "bg-red-500" : "bg-green-500";
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="max-w-2xl text-center mx-auto mb-10"><h2 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent"> Dashboard </h2><p class="mt-1 text-gray-600">Let&#39;s dive more into the HBO ICT Program.</p></div><div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6"><!--[-->`);
      ssrRenderList(courses.value, (course, index) => {
        _push(`<div class="p-4 border border-gray-200 rounded-lg"><div class="flex items-center mb-4"><input type="checkbox"${ssrIncludeBooleanAttr(Array.isArray(course.selected) ? ssrLooseContain(course.selected, null) : course.selected) ? " checked" : ""} class="relative appearance-none w-[3.25rem] h-7 bg-gray-300 rounded-full cursor-pointer transition duration-200 ease-in-out focus:outline-none focus:ring-2 focus:ring-green-600 checked:bg-green-500 before:content-[&#39;&#39;] before:absolute before:top-0.5 before:left-0.5 before:w-6 before:h-6 before:bg-white before:rounded-full before:shadow-md before:transition-transform before:duration-200 checked:before:translate-x-[1.55rem]"></div><div><p class="font-semibold text-sm text-gray-800">${ssrInterpolate(course.name)}</p><p class="mt-1 text-sm text-gray-600"> Quarter: ${ssrInterpolate(course.quarter)}<br> Credits: ${ssrInterpolate(course.credits)} EC </p><ul class="mt-2"><!--[-->`);
        ssrRenderList(course.exams, (exam, examIndex) => {
          _push(`<li class="text-sm">${ssrInterpolate(exam.name)}</li>`);
        });
        _push(`<!--]--></ul></div></div>`);
      });
      _push(`<!--]--></div><div class="bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 mt-5" role="alert" tabindex="-1" aria-labelledby="hs-actions-label"><div class="flex"><div class="shrink-0"><svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="ms-3"><h3 id="hs-actions-label" class="font-semibold"> NBSA Boundry </h3><div class="mt-2 text-sm text-gray-600"> To be able to continue to the next year, you need at least 45 ECs. </div></div></div></div><div class="mt-4"><label for="progress-bar" class="block text-sm font-medium text-gray-700">Progress:</label><div class="relative pt-1"><div class="flex items-center justify-between"><span class="text-xs font-medium text-gray-600">0</span><span class="text-xs font-medium text-gray-600">${ssrInterpolate(totalCredits.value)} / total credits</span><span class="text-xs font-medium text-gray-600">60</span></div><div class="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-2"><div class="${ssrRenderClass([progressBarClass.value, "flex flex-col justify-center rounded-full transition duration-500 text-xs text-white text-center"])}" style="${ssrRenderStyle({ width: progressBarWidth.value })}"></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=dashboard-B2kGg60K.mjs.map
