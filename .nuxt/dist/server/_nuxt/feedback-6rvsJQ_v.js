import { u as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_3 } from "./feedback-_r_aQiyA.js";
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
  __name: "feedback",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Feedback - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" }, _attrs))}><div class="max-w-2xl"><div class="space-y-5 md:space-y-8"><div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">First Feedback</h2><p class="text-lg text-gray-800">After completing the SKC assignment, I received feedback highlighting my interest in cybersecurity. The program offers basic coverage, but diving deeper will require self-initiative through projects or self-study. This motivated me to explore more on my own. </p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_3)} alt="Feedback"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800">The feedback also acknowledged my experience with Laravel, which aligns with the program&#39;s framework in the second semester. It reassured me that I&#39;m on the right track but also emphasized the need for continuous learning and adaptation. </p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/blogs/feedback.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=feedback-6rvsJQ_v.js.map
