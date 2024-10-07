import { u as useRuntimeConfig, a as __nuxt_component_0 } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { mergeProps, withCtx, createTextVNode, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent } from "vue/server-renderer";
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
  __name: "faq",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `FAQ - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0;
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="max-w-2xl text-center mx-auto mb-10"><h2 class="text-2xl font-bold md:text-4xl md:leading-tight bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent"> Your questions, answered </h2><p class="mt-1 text-gray-600">Answers to the most frequently asked questions.</p></div><div class="max-w-2xl mx-auto"><div class="hs-accordion-group"><div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6 active" id="hs-basic-with-title-and-arrow-stretched-heading-one"><button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="true" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-one"> How can you print a document from your laptop at HZ? <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg><svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg></button><div id="hs-basic-with-title-and-arrow-stretched-collapse-one" class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-one"><p class="text-gray-800"> You could login on the `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium",
        to: "https://hz.mynetpay.nl/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`my net pay`);
          } else {
            return [
              createTextVNode("my net pay")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` from there, you select a printer, upload your documents and then print </p></div></div><div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-two"><button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-two"> How can you scan a document and send it to your laptop at HZ? <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg><svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg></button><div id="hs-basic-with-title-and-arrow-stretched-collapse-two" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-two"><p class="text-gray-800"> You scan your documents on one of the printers at the HZ, after that you could fill in your email address for it to be sent to you. </p></div></div><div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-three"><button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-three"> How can I buy something (like when I sign up for the IT introduction event) on the HZ web shop? <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg><svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg></button><div id="hs-basic-with-title-and-arrow-stretched-collapse-three" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-three"><p class="text-gray-800"> On the `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium",
        to: "https://webshop.hz.nl/",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`webshop`);
          } else {
            return [
              createTextVNode("webshop")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(` you can either register for Culuture Event, a sport event or just clothes or materials on there. You add it to the cart and you pay for it, after that wait until you receive a confirmation.</p></div></div><div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-four"><button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-four"> How can you book a project space? <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg><svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg></button><div id="hs-basic-with-title-and-arrow-stretched-collapse-four" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-four"><p class="text-gray-800"> You could easily reserve a place through the self service portal on the HZ `);
      _push(ssrRenderComponent(_component_nuxt_link, {
        class: "text-lime-500 decoration-2 hover:underline focus:outline-none focus:underline font-medium",
        to: "https://portal.hz.nl",
        target: "_blank"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`website`);
          } else {
            return [
              createTextVNode("website")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`. </p></div></div><div class="hs-accordion hs-accordion-active:bg-gray-100 rounded-xl p-6" id="hs-basic-with-title-and-arrow-stretched-heading-five"><button class="hs-accordion-toggle group pb-3 inline-flex items-center justify-between gap-x-3 w-full md:text-lg font-semibold text-start text-gray-800 rounded-lg transition hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-expanded="false" aria-controls="hs-basic-with-title-and-arrow-stretched-collapse-five"> What are the instructions if you want to park your car at the HZ parking lot? <svg class="hs-accordion-active:hidden block shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"></path></svg><svg class="hs-accordion-active:block hidden shrink-0 size-5 text-gray-600 group-hover:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m18 15-6-6-6 6"></path></svg></button><div id="hs-basic-with-title-and-arrow-stretched-collapse-five" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" role="region" aria-labelledby="hs-basic-with-title-and-arrow-stretched-heading-five"><p class="text-gray-800"> It is not possible to park directly at the HZ on Het Groene Woud. There is 1 special parking space available on the grounds for people with disabilities and/or chronic conditions. </p><p class="mt-2"> The car park on Kousteensedijk has a number of spaces for visitors, staff and students of Het Groene Woud. This car park is an 8-minute walk from the HZ. Upon showing your entry card, you can then get an exit card at the JRCZ service desk. </p></div></div></div></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/faq.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=faq-B2tI0oJ6.js.map
