import { u as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { ref, computed, mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderList, ssrRenderAttr, ssrIncludeBooleanAttr, ssrLooseContain, ssrRenderClass, ssrInterpolate, ssrRenderStyle } from "vue/server-renderer";
import "ofetch";
import "#internal/nuxt/paths";
import "hookable";
import "unctx";
import "h3";
import "unhead";
import "@unhead/shared";
import "vue-router";
import "radix3";
import "defu";
import "ufo";
import "devalue";
const _sfc_main = {
  __name: "dashboard",
  __ssrInlineRender: true,
  setup(__props) {
    const courses = ref([
      { name: "Program and Career Orientation", id: "CU75001", credits: 2.5, selected: false },
      { name: "Computer Science Basics", id: "CU75002", credits: 5, selected: false },
      { name: "Programming Basics", id: "CU75003", credits: 5, selected: false },
      { name: "Personal Professional Development", id: "CU75068", credits: 12.5, selected: false },
      { name: "Object Oriented Programming", id: "CU75004", credits: 10, selected: false },
      { name: "Business IT Consultancy Basics", id: "CU75081", credits: 2.5, selected: false },
      { name: "Framework Project 1", id: "CU75011", credits: 10, selected: false },
      { name: "Framework Project 2", id: "CU75080", credits: 10, selected: false },
      { name: "Personality", id: "NA", credits: 2.5, selected: false }
    ]);
    const totalCredits = computed(() => {
      return courses.value.reduce((sum, course) => course.selected ? sum + course.credits : sum, 0);
    });
    const progressBarWidth = computed(() => {
      const maxCredits = 60;
      const width = totalCredits.value / maxCredits * 100;
      return `${Math.min(width, 100)}%`;
    });
    const progressBarClass = computed(() => {
      return totalCredits.value < 45 ? "bg-red-500" : "bg-green-500";
    });
    const config = useRuntimeConfig();
    useHead({
      title: `Dashboard - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="max-w-2xl text-center mx-auto mb-10"><h2 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent"> Dashboard </h2><p class="mt-1 text-gray-600">Let&#39;s dive more into the HBO ICT Program.</p></div><div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(courses.value, (course, index) => {
        _push(`<div class="p-4 border border-gray-200 rounded-lg flex items-start space-x-4"><div class="flex items-center"><input type="checkbox"${ssrRenderAttr("id", "course-" + index)}${ssrIncludeBooleanAttr(Array.isArray(course.selected) ? ssrLooseContain(course.selected, null) : course.selected) ? " checked" : ""} class="hidden"><div class="${ssrRenderClass([{ "bg-green-500 border-green-500": course.selected }, "relative w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-full cursor-pointer"])}">`);
        if (course.selected) {
          _push(`<svg class="w-5 h-5 text-white absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path></svg>`);
        } else {
          _push(`<!---->`);
        }
        _push(`</div></div><div><p class="font-semibold text-sm text-gray-800">${ssrInterpolate(course.name)}</p><p class="mt-1 text-sm text-gray-600"> Course ID: ${ssrInterpolate(course.id)}<br> Credits: ${ssrInterpolate(course.credits)} EC </p></div></div>`);
      });
      _push(`<!--]--></div><div class="bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 mt-10" role="alert" tabindex="-1" aria-labelledby="hs-actions-label"><div class="flex"><div class="shrink-0"><svg class="shrink-0 size-4 mt-1" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg></div><div class="ms-3"><h3 id="hs-actions-label" class="font-semibold"> NBSA </h3><div class="mt-2 text-sm text-gray-600"> You need at least 45 ECs to pass the first year, and 60 ECs to not repeat any section. </div></div></div></div><div class="mt-10"><label for="progress-bar" class="block text-md font-medium text-gray-700">Progress:</label><div class="relative pt-1"><div class="flex items-center justify-between"><span class="text-xs font-medium text-gray-600">0</span><span class="text-xs font-medium text-gray-600">${ssrInterpolate(totalCredits.value)} credits</span><span class="text-xs font-medium text-gray-600">60</span></div><div class="flex w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-2" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"><div class="${ssrRenderClass([progressBarClass.value, "flex flex-col justify-center rounded-full overflow-hidden transition duration-500 text-xs text-white text-center whitespace-nowrap"])}" style="${ssrRenderStyle({ width: progressBarWidth.value })}"></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/dashboard.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=dashboard-DrLX_LmW.js.map
