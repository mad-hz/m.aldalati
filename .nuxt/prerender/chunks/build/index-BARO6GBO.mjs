import { u as useRuntimeConfig, a as __nuxt_component_0$1 } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { mergeProps, unref, useSSRContext, withCtx, createVNode, toDisplayString, createTextVNode, openBlock, createBlock } from 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderList, ssrRenderComponent, ssrRenderAttr, ssrInterpolate } from 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue/server-renderer/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/ofetch/dist/node.mjs';
import '../_/renderer.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/h3/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/devalue/index.js';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/destr/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/unenv/runtime/fetch/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/hookable/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/klona/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/scule/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/defu/dist/defu.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/ohash/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/unstorage/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/unstorage/drivers/fs.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/unstorage/drivers/fs-lite.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/unstorage/drivers/lru-cache.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/radix3/dist/index.mjs';
import 'node:fs';
import 'node:url';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/pathe/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/unhead/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/@unhead/shared/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/unctx/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue-router/dist/vue-router.node.mjs';

const _sfc_main$1 = {
  __name: "BlogCard",
  __ssrInlineRender: true,
  props: {
    blog: {
      type: Object,
      required: true
    }
  },
  setup(__props) {
    return (_ctx, _push, _parent, _attrs) => {
      const _component_nuxt_link = __nuxt_component_0$1;
      _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
        to: __props.blog.link,
        class: "group flex flex-col focus:outline-none mt-10"
      }, _attrs), {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<div class="relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden"${_scopeId}><img${ssrRenderAttr("src", __props.blog.image)}${ssrRenderAttr("alt", __props.blog.title)} class="size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"${_scopeId}></div><div class="mt-7"${_scopeId}><h3 class="text-xl font-semibold text-gray-800 group-hover:text-gray-600"${_scopeId}>${ssrInterpolate(__props.blog.title)}</h3><p class="mt-3 text-gray-800"${_scopeId}>${ssrInterpolate(__props.blog.description)}</p><p class="mt-5 inline-flex items-center gap-x-1 text-sm text-lime-500 decoration-2 group-hover:underline group-focus:underline font-medium"${_scopeId}> Read more <svg class="shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"${_scopeId}><path d="m9 18 6-6-6-6"${_scopeId}></path></svg></p></div>`);
          } else {
            return [
              createVNode("div", { class: "relative pt-[50%] sm:pt-[70%] rounded-xl overflow-hidden" }, [
                createVNode("img", {
                  src: __props.blog.image,
                  alt: __props.blog.title,
                  class: "size-full absolute top-0 start-0 object-cover group-hover:scale-105 group-focus:scale-105 transition-transform duration-500 ease-in-out rounded-xl"
                }, null, 8, ["src", "alt"])
              ]),
              createVNode("div", { class: "mt-7" }, [
                createVNode("h3", { class: "text-xl font-semibold text-gray-800 group-hover:text-gray-600" }, toDisplayString(__props.blog.title), 1),
                createVNode("p", { class: "mt-3 text-gray-800" }, toDisplayString(__props.blog.description), 1),
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
    };
  }
};
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BlogCard.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const _sfc_main = {
  __name: "index",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Blog - ${config.public.appName}`
    });
    const blogs = [
      {
        title: "SKC Feedback",
        description: "After completing the SKC assignment, I received feedback about my question where I happened to...",
        image: "/_nuxt/assets/images/blog/feedback.png",
        link: "/blog/blogs/feedback"
      },
      {
        title: "Profession",
        description: "ADIB is an Islamic bank based in the UAE, offering financial services including retail, corporate, and...",
        image: "/_nuxt/assets/images/blog/profession.png",
        link: "/blog/blogs/profession"
      },
      {
        title: "Personal SWOT Analysis",
        description: "Looking at my SWOT analysis, I identified that my strengths are in planning, leadership and...",
        image: "/_nuxt/assets/images/blog/swot.png",
        link: "/blog/blogs/swot"
      },
      {
        title: "Programming Experience",
        description: "I have been coding most of the time in Laravel, which is a PHP framework. It became the central...",
        image: "/_nuxt/assets/images/blog/programming.png",
        link: "/blog/blogs/programming-experience"
      },
      {
        title: "ICT Field of Work",
        description: "The ICT field, as we know it today, is still evolving, offering a range of different career...",
        image: "/_nuxt/assets/images/blog/ict.png",
        link: "/blog/blogs/ict-field-of-work"
      },
      {
        title: "Study Choice",
        description: "I chose the HBO-ICT program because it almost aligns with my passion. I am particularly interested in...",
        image: "/_nuxt/assets/images/blog/study-choice.png",
        link: "/blog/blogs/study-choice"
      }
    ];
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "relative overflow-hidden" }, _attrs))}><div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10"><div class="max-w-2xl text-center mx-auto mb-10"><h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent py-4"> Insights </h1><p class="mt-1 text-gray-600"> A chronological journal about the HBO-ICT program. </p></div><div class="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"><!--[-->`);
      ssrRenderList(blogs, (blog, index) => {
        _push(ssrRenderComponent(unref(_sfc_main$1), {
          key: index,
          blog
        }, null, _parent));
      });
      _push(`<!--]--></div></div></div>`);
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
//# sourceMappingURL=index-BARO6GBO.mjs.map
