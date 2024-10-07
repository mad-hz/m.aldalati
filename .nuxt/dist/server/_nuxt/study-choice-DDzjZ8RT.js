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
const _imports_0 = "" + __buildAssetsURL("study-choice.C2_Dz4Wv.png");
const _sfc_main = {
  __name: "study-choice",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Study Choice - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" }, _attrs))}><div class="max-w-2xl"><div class="space-y-5 md:space-y-8">`);
      _push(ssrRenderComponent(unref(BackButton), null, null, _parent));
      _push(`<div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">Why I chose the HBO-ICT</h2><p class="text-lg text-gray-800"> I chose the HBO-ICT program because it almost aligns with my passion. I am particularly interested in roles where security plays a big role, eg. Back-end developer and and penetration tester. </p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_0)} alt="Study Choice"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800"> Through this program, I aim to gain and expand my technical skills, as well as to build myself a network with like minded people, and perhaps make an impact together in the ICT industy. </p>`);
      _push(ssrRenderComponent(unref(PaginationNav), { nextLink: "ict-field-of-work" }, null, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/blogs/study-choice.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=study-choice-DDzjZ8RT.js.map
