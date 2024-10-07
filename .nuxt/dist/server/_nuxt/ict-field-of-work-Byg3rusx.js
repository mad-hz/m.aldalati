import { u as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_1 } from "./ict-BDG1ZcoL.js";
import { B as BackButton, P as PaginationNav } from "./BackButton-DKm5HqYv.js";
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
  __name: "ict-field-of-work",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `ICT Field of Work - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" }, _attrs))}><div class="max-w-2xl"><div class="space-y-5 md:space-y-8">`);
      _push(ssrRenderComponent(unref(BackButton), null, null, _parent));
      _push(`<div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">ICT Field of Work</h2><p class="text-lg text-gray-800"> The ICT field, as we know it today, is still involving, offering a range of different career paths.In ICT there&#39;s a constant innovation, as we advance more, more career roles come out and the more easier our life becomes. </p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_1)} alt="ICT Field of Work"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800"> For instance, the rise of cloud computing and AI created a demand for experts in such fields. As well as the increase of the importance of cybersecurity. Working in ICT basically means that everyday there&#39;s a new challenge and an opportunity to make an impact. </p>`);
      _push(ssrRenderComponent(unref(PaginationNav), {
        previousLink: "study-choice",
        nextLink: "programming-experience"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/blogs/ict-field-of-work.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=ict-field-of-work-Byg3rusx.js.map
