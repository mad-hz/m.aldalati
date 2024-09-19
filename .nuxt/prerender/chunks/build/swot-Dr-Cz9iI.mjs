import { u as useRuntimeConfig, a as __nuxt_component_0$1 } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, useSSRContext } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_2 } from './swot-CtHUuAZW.mjs';
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
  __name: "swot",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `SWOT Analysis - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
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
      _push(`<div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">My Personal SWOT Analysis</h2><p class="text-lg text-gray-800"> Looking at my SWOT analysis, I identified that my strenghts are in planning, leadership and problem solving. Such strenghts will help me tackle the challenges that I will face through the HBO-ICT program. </p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_2)} alt="SWOT"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800">On the other hand, my perfectionism, which could help me build clean applications yet it might slow me down.</p><nav class="flex justify-between items-center gap-x-1" aria-label="Pagination">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "programming-experience",
        class: "min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none",
        "aria-label": "Previous"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="shrink-0 size-3.5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m15 18-6-6 6-6"${_scopeId}></path></svg><span aria-hidden="true" class="hidden sm:block"${_scopeId}>Previous</span>`);
          } else {
            return [
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
                createVNode("path", { d: "m15 18-6-6 6-6" })
              ])),
              createVNode("span", {
                "aria-hidden": "true",
                class: "hidden sm:block"
              }, "Previous")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        to: "profession",
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
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/blogs/swot.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=swot-Dr-Cz9iI.mjs.map
