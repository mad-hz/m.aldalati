import { a as buildAssetsURL } from '../_/renderer.mjs';
import { u as useRuntimeConfig } from './server.mjs';
import { u as useHead } from './index-BabADJUJ.mjs';
import { mergeProps, unref, useSSRContext } from 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderAttr } from 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue/server-renderer/index.mjs';
import { B as BackButton, P as PaginationNav } from './BackButton-DKm5HqYv.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue-bundle-renderer/dist/runtime.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/h3/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/devalue/index.js';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/ufo/dist/index.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/@unhead/ssr/dist/index.mjs';
import '../runtime.mjs';
import 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/ofetch/dist/node.mjs';
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

const _imports_0 = "" + buildAssetsURL("swot.KBVpCJmn.png");
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

export { _sfc_main as default };
//# sourceMappingURL=swot-n8Lz9n1r.mjs.map
