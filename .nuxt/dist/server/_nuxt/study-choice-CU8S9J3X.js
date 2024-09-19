import { u as useRuntimeConfig, a as __nuxt_component_0 } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_5 } from "./study-choice-DSVjVXvp.js";
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
  __name: "study-choice",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Study Choice - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" }, _attrs))}><div class="max-w-2xl"><div class="space-y-5 md:space-y-8">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "inline-flex items-center gap-x-1 text-sm text-black",
        to: "/blog"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m15 18-6-6 6-6"${_scopeId}></path></svg> Back to blogs `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "shrink-0 size-4",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "m15 18-6-6 6-6" })
              ])),
              createTextVNode(" Back to blogs ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`<div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">Why I chose the HBO-ICT</h2><p class="text-lg text-gray-800"> I chose the HBO-ICT program because it almost aligns with my passion. I am particularly interested in roles where security plays a big role, eg. Back-end developer and and penetration tester. </p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_5)} alt="Study Choice"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800"> Through this program, I aim to gain and expand my technical skills, as well as to build myself a network with like minded people, and perhaps make an impact together in the ICT industy. </p><nav class="flex justify-between items-center gap-x-1" aria-label="Pagination"><button disabled class="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none" aria-label="Previous"><svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m15 18-6-6 6-6"></path></svg><span aria-hidden="true" class="hidden sm:block">Previous</span></button>`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "ict-field-of-work",
        class: "min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<span aria-hidden="true" class="hidden sm:block"${_scopeId}>Next</span><svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg>`);
          } else {
            return [
              createVNode("span", {
                "aria-hidden": "true",
                class: "hidden sm:block"
              }, "Next"),
              (openBlock(), createBlock("svg", {
                class: "shrink-0 size-3.5",
                xmlns: "http://www.w3.org/2000/svg",
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                stroke: "currentColor",
                "stroke-width": "2",
                "stroke-linecap": "round",
                "stroke-linejoin": "round"
              }, [
                createVNode("path", { d: "m9 18 6-6-6-6" })
              ]))
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</nav></div></div></div>`);
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
//# sourceMappingURL=study-choice-CU8S9J3X.js.map
