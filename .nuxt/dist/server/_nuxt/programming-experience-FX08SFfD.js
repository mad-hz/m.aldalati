import { u as useRuntimeConfig } from "../server.mjs";
import { u as useHead } from "./index-BabADJUJ.js";
import { mergeProps, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderAttr } from "vue/server-renderer";
import { _ as _imports_2 } from "./programming-DRbLOKIY.js";
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
  __name: "programming-experience",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Programming Experience - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" }, _attrs))}><div class="max-w-2xl"><div class="space-y-5 md:space-y-8"><div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">My Programming Experience</h2><p class="text-lg text-gray-800"> I&#39;ve been coding extensively in Laravel, a PHP framework, which has become central to my development process. Laravel&#39;s elegant syntax and powerful features, such as Eloquent ORM and Blade templating, make it easy to build robust and scalable applications. I&#39;ve also integrated MySQL and PostgreSQL databases, ensuring data is handled efficiently. In addition to Laravel, I&#39;ve worked with Vue.js and Nuxt.js to build dynamic front-ends, enhancing the user experience. TailwindCSS and Bootstrap are my go-to tools for crafting responsive and visually appealing designs.</p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_2)} alt="Programming Experience"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800">Beyond coding, I&#39;ve managed deployments using cPanel, ensuring smooth website management, and I&#39;ve configured email services with Roundcube. This hands-on experience across various tools and technologies has deepened my understanding of full-stack development, enabling me to build comprehensive, efficient web applications. </p></div></div></div>`);
    };
  }
};
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("pages/blog/blogs/programming-experience.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
//# sourceMappingURL=programming-experience-FX08SFfD.js.map
