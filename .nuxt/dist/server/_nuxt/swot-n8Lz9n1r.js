import { u as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { mergeProps, unref, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
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
const _imports_0 = "" + __buildAssetsURL("swot.KBVpCJmn.png");
const _sfc_main = {
  __name: "swot",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `SWOT Analysis - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" }, _attrs))}><div class="max-w-2xl"><div class="space-y-5 md:space-y-8">`);
      _push(ssrRenderComponent(unref(BackButton), null, null, _parent));
      _push(`<div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">My Personal SWOT Analysis</h2><p class="text-lg text-gray-800"> Looking at my SWOT analysis, I identified that my strenghts are in planning, leadership and problem solving. Such strenghts will help me tackle the challenges that I will face through the HBO-ICT program. </p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_0)} alt="SWOT"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800">On the other hand, my perfectionism, which could help me build clean applications yet it might slow me down.</p>`);
      _push(ssrRenderComponent(unref(PaginationNav), {
        previousLink: "programming-experience",
        nextLink: "profession"
      }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/blogs/swot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=swot-n8Lz9n1r.js.map
