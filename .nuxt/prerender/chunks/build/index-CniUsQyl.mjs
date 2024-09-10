import { u as useRuntimeConfig, a as __nuxt_component_0$1 } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { mergeProps, withCtx, createVNode, createTextVNode, openBlock, createBlock, useSSRContext } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/mad/Desktop/HZ/Assignments/preparation-assignment/node_modules/vue/server-renderer/index.mjs';
import { _ as _imports_0 } from './feedback-BDjr9gUV.mjs';
import { _ as _imports_1 } from './profession-BHOt-1Wr.mjs';
import { _ as _imports_2 } from './swot-CtHUuAZW.mjs';
import { _ as _imports_3 } from './programming-BchjNGP9.mjs';
import { _ as _imports_0$1 } from './ict-BxZY_PBV.mjs';
import { _ as _imports_5 } from './study-choice-DSVjVXvp.mjs';
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
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Insights - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="max-w-2xl text-center mx-auto mb-10"><h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent py-4"> Insights </h1><p class="mt-1 text-gray-600">A chronological journal about the HBO-ICT program.</p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">`);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "group flex flex-col focus:outline-none mt-10",
        to: "/blog/blogs/feedback"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden"${_scopeId}><img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"${ssrRenderAttr("src", _imports_0)} alt="SKC Feedback"${_scopeId}></div><div class="mt-7"${_scopeId}><h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600"${_scopeId}> SKC Feedback </h3><p class="mt-3 text-gray-800"${_scopeId}> After completing the SKC assignment, I received feedback highlighting my...</p><p class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium"${_scopeId}> Read more <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" }, [
                createVNode("img", {
                  class: "size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl",
                  src: _imports_0,
                  alt: "SKC Feedback"
                })
              ]),
              createVNode("div", { class: "mt-7" }, [
                createVNode("h3", { class: "text-xl font-semibold text-gray-800 group-hover:text-gray-600" }, " SKC Feedback "),
                createVNode("p", { class: "mt-3 text-gray-800" }, " After completing the SKC assignment, I received feedback highlighting my..."),
                createVNode("p", { class: "mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium" }, [
                  createTextVNode(" Read more "),
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
                    createVNode("path", { d: "m9 18 6-6-6-6" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "group flex flex-col focus:outline-none mt-10",
        to: "/blog/blogs/profession"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden"${_scopeId}><img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"${ssrRenderAttr("src", _imports_1)} alt="Profession"${_scopeId}></div><div class="mt-7"${_scopeId}><h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600"${_scopeId}> Profession </h3><p class="mt-3 text-gray-800"${_scopeId}> ADIB is a leading Islamic bank based in the UAE, offering Sharia-compliant...</p><p class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium"${_scopeId}> Read more <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" }, [
                createVNode("img", {
                  class: "size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl",
                  src: _imports_1,
                  alt: "Profession"
                })
              ]),
              createVNode("div", { class: "mt-7" }, [
                createVNode("h3", { class: "text-xl font-semibold text-gray-800 group-hover:text-gray-600" }, " Profession "),
                createVNode("p", { class: "mt-3 text-gray-800" }, " ADIB is a leading Islamic bank based in the UAE, offering Sharia-compliant..."),
                createVNode("p", { class: "mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium" }, [
                  createTextVNode(" Read more "),
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
                    createVNode("path", { d: "m9 18 6-6-6-6" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "group flex flex-col focus:outline-none mt-10",
        to: "/blog/blogs/swot"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden"${_scopeId}><img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"${ssrRenderAttr("src", _imports_2)} alt="SWOT"${_scopeId}></div><div class="mt-7"${_scopeId}><h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600"${_scopeId}> Personal SWOT Analysis </h3><p class="mt-3 text-gray-800"${_scopeId}> Reflecting on my SWOT analysis, I identify key strengths in planning...</p><p class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium"${_scopeId}> Read more <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" }, [
                createVNode("img", {
                  class: "size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl",
                  src: _imports_2,
                  alt: "SWOT"
                })
              ]),
              createVNode("div", { class: "mt-7" }, [
                createVNode("h3", { class: "text-xl font-semibold text-gray-800 group-hover:text-gray-600" }, " Personal SWOT Analysis "),
                createVNode("p", { class: "mt-3 text-gray-800" }, " Reflecting on my SWOT analysis, I identify key strengths in planning..."),
                createVNode("p", { class: "mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium" }, [
                  createTextVNode(" Read more "),
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
                    createVNode("path", { d: "m9 18 6-6-6-6" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "group flex flex-col focus:outline-none mt-10",
        to: "/blog/blogs/programming-experience"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden"${_scopeId}><img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"${ssrRenderAttr("src", _imports_3)} alt="Programming Experience"${_scopeId}></div><div class="mt-7"${_scopeId}><h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600"${_scopeId}> Programming Experience </h3><p class="mt-3 text-gray-800"${_scopeId}> I&#39;ve been coding extensively in Laravel, a PHP framework, which has become central to...</p><p class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium"${_scopeId}> Read more <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" }, [
                createVNode("img", {
                  class: "size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl",
                  src: _imports_3,
                  alt: "Programming Experience"
                })
              ]),
              createVNode("div", { class: "mt-7" }, [
                createVNode("h3", { class: "text-xl font-semibold text-gray-800 group-hover:text-gray-600" }, " Programming Experience "),
                createVNode("p", { class: "mt-3 text-gray-800" }, " I've been coding extensively in Laravel, a PHP framework, which has become central to..."),
                createVNode("p", { class: "mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium" }, [
                  createTextVNode(" Read more "),
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
                    createVNode("path", { d: "m9 18 6-6-6-6" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "group flex flex-col focus:outline-none mt-10",
        to: "/blog/blogs/ict-field-of-work"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden"${_scopeId}><img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"${ssrRenderAttr("src", _imports_0$1)} alt="ICT Field of Work"${_scopeId}></div><div class="mt-7"${_scopeId}><h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600"${_scopeId}> ICT Field of Work </h3><p class="mt-3 text-gray-800"${_scopeId}> The ICT field is vast and ever-evolving, offering a range of career paths from...</p><p class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium"${_scopeId}> Read more <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" }, [
                createVNode("img", {
                  class: "size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl",
                  src: _imports_0$1,
                  alt: "ICT Field of Work"
                })
              ]),
              createVNode("div", { class: "mt-7" }, [
                createVNode("h3", { class: "text-xl font-semibold text-gray-800 group-hover:text-gray-600" }, " ICT Field of Work "),
                createVNode("p", { class: "mt-3 text-gray-800" }, " The ICT field is vast and ever-evolving, offering a range of career paths from..."),
                createVNode("p", { class: "mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium" }, [
                  createTextVNode(" Read more "),
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
                    createVNode("path", { d: "m9 18 6-6-6-6" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "group flex flex-col focus:outline-none mt-10",
        to: "/blog/blogs/study-choice"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden"${_scopeId}><img class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"${ssrRenderAttr("src", _imports_5)} alt="Study Choice"${_scopeId}></div><div class="mt-7"${_scopeId}><h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600"${_scopeId}> Study choice </h3><p class="mt-3 text-gray-800"${_scopeId}> I chose the HBO-ICT program because it aligns perfectly with...</p><p class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium"${_scopeId}> Read more <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" }, [
                createVNode("img", {
                  class: "size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl",
                  src: _imports_5,
                  alt: "Study Choice"
                })
              ]),
              createVNode("div", { class: "mt-7" }, [
                createVNode("h3", { class: "text-xl font-semibold text-gray-800 group-hover:text-gray-600" }, " Study choice "),
                createVNode("p", { class: "mt-3 text-gray-800" }, " I chose the HBO-ICT program because it aligns perfectly with..."),
                createVNode("p", { class: "mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium" }, [
                  createTextVNode(" Read more "),
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
                    createVNode("path", { d: "m9 18 6-6-6-6" })
                  ]))
                ])
              ])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/index.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};

export { _sfc_main as default };
//# sourceMappingURL=index-CniUsQyl.mjs.map
