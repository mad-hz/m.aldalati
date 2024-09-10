import { u as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { mergeProps, useSSRContext } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrInterpolate, ssrRenderAttr } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/server-renderer/index.mjs';
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
              { name: "On-site case study exam", grade: "Pending" },
              { name: "Database exam", grade: "Pending" },
              { name: "Group presentation on project result", grade: "Pending" },
              { name: "Group portfolio with individual elements on requirements", grade: "Pending" }
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
        number: "S1",
        courses: [
          {
            name: " IT Personality Projectweek 1",
            ec: 1.25,
            exams: [
              { name: "Portfolio", grade: "Pending" }
            ]
          }
        ]
      },
      {
        number: "S2",
        courses: [
          {
            name: "IT Personality International week",
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
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-[85rem] p-4 lg:p-8 mx-auto" }, _attrs))}><div class="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden"><table class="min-w-full divide-y divide-gray-200"><thead class="bg-gray-50"><tr><!--[-->`);
      ssrRenderList(["Quarter", "Course", "EC's", "Exam", "Grade"], (header) => {
        _push(`<th class="px-6 py-3 text-start text-xs font-semibold uppercase tracking-wide text-gray-800">${ssrInterpolate(header)}</th>`);
      });
      _push(`<!--]--></tr></thead><tbody class="divide-y divide-gray-200"><!--[-->`);
      ssrRenderList(quarters, (quarter, qIndex) => {
        _push(`<!--[--><!--[-->`);
        ssrRenderList(quarter.courses, (course, cIndex) => {
          _push(`<!--[--><!--[-->`);
          ssrRenderList(course.exams, (exam, eIndex) => {
            _push(`<tr class="bg-white hover:bg-gray-50">`);
            if (cIndex === 0 && eIndex === 0) {
              _push(`<td${ssrRenderAttr("rowspan", quarter.courses.reduce((sum, c) => sum + c.exams.length, 0))} class="px-6 py-4 align-top">${ssrInterpolate(quarter.number)}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (eIndex === 0) {
              _push(`<td${ssrRenderAttr("rowspan", course.exams.length)} class="px-6 py-4 align-top">${ssrInterpolate(course.name)}</td>`);
            } else {
              _push(`<!---->`);
            }
            if (eIndex === 0) {
              _push(`<td${ssrRenderAttr("rowspan", course.exams.length)} class="px-6 py-4 align-top">${ssrInterpolate(course.ec)}</td>`);
            } else {
              _push(`<!---->`);
            }
            _push(`<td class="px-6 py-4 align-top">${ssrInterpolate(exam.name)}</td><td class="px-6 py-4 align-top"><span class="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">${ssrInterpolate(exam.grade)}</span></td></tr>`);
          });
          _push(`<!--]--><!--]-->`);
        });
        _push(`<!--]--><!--]-->`);
      });
      _push(`<!--]--></tbody></table></div><div class="bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 mt-8" role="alert" tabindex="-1" aria-labelledby="hs-actions-label"><div class="flex"><div class="shrink-0"><svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="ms-3"><h3 id="hs-actions-label" class="font-semibold"> NBSA </h3><div class="mt-2 text-sm text-gray-600"> You must at least get 45 ECs to pass the first year. </div></div></div></div><div class="mt-2 bg-green-100 border text-sm text-green-800 rounded-lg p-4" role="alert" tabindex="-1" aria-labelledby="hs-soft-color-success-label"><span id="hs-soft-color-success-label" class="font-bold">If you have got 60ECs then you may continue to the next year without repeating any exam.</span></div></div>`);
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
//# sourceMappingURL=dashboard-Br2lASbJ.mjs.map
