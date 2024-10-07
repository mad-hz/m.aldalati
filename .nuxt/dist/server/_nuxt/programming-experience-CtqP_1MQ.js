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
const _imports_0 = "" + __buildAssetsURL("programming.DRvO2NAq.png");
const _sfc_main = {
  __name: "programming-experience",
  __ssrInlineRender: true,
  setup(__props) {
    const config = useRuntimeConfig();
    useHead({
      title: `Programming Experience - ${config.public.appName}`
    });
    return (_ctx, _push, _parent, _attrs) => {
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "max-w-3xl px-4 pt-6 lg:pt-10 pb-12 sm:px-6 lg:px-8 mx-auto" }, _attrs))}><div class="max-w-2xl"><div class="space-y-5 md:space-y-8">`);
      _push(ssrRenderComponent(unref(BackButton), null, null, _parent));
      _push(`<div class="space-y-3"><h2 class="text-2xl font-bold md:text-3xl">My Programming Experience</h2><p class="text-lg text-gray-800"> I have been coding most of the time in Laravel, which is a PHP framework. It bacame the central of my development process. Laravel is powerful and help me build efficient applications in no time. Next to it, I use PostgreSQL and MySQL to ensure I handle data correctly. I also work on the front end, where I use Nuxt.js and Tailwindcss to create a resposive appealing applications. </p></div><figure><img class="w-full object-cover rounded-xl"${ssrRenderAttr("src", _imports_0)} alt="Programming Experience"><figcaption class="mt-3 text-sm text-center text-gray-500 dark:text-neutral-500"></figcaption></figure><p class="text-lg text-gray-800">Away from coding, I manage deployments of websites using cPanel, where I have configured next to it an email service with Roundcube. All the technologies that I have listed make sure I deploy smooth, responsive and secure websities.</p>`);
      _push(ssrRenderComponent(unref(PaginationNav), {
        previousLink: "ict-field-of-work",
        nextLink: "swot"
      }, null, _parent));
      _push(`</div></div></div>`);
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
//# sourceMappingURL=programming-experience-CtqP_1MQ.js.map
