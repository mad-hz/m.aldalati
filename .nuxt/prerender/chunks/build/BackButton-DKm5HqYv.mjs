import { _ as _export_sfc, a as __nuxt_component_0$1 } from './server.mjs';
import { mergeProps, withCtx, openBlock, createBlock, createVNode, useSSRContext, createTextVNode } from 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue/index.mjs';
import { ssrRenderAttrs, ssrRenderComponent } from 'file:///Users/mad/Desktop/HZ/PCO/Assignments/preparation-assignment/node_modules/vue/server-renderer/index.mjs';

const _sfc_main$1 = {
  props: {
    previousLink: {
      type: String,
      required: true
    },
    nextLink: {
      type: String,
      required: true
    }
  }
};
function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(`<nav${ssrRenderAttrs(mergeProps({
    class: "flex justify-between items-center gap-x-1",
    "aria-label": "Pagination"
  }, _attrs))}>`);
  _push(ssrRenderComponent(_component_nuxt_link, {
    to: $props.previousLink,
    class: "min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100",
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
    to: $props.nextLink,
    class: "min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-2 text-sm rounded-lg text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100"
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
  _push(`</nav>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/PaginationNav.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : void 0;
};
const PaginationNav = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["ssrRender", _sfc_ssrRender$1]]);
const _sfc_main = {};
function _sfc_ssrRender(_ctx, _push, _parent, _attrs) {
  const _component_nuxt_link = __nuxt_component_0$1;
  _push(ssrRenderComponent(_component_nuxt_link, mergeProps({
    class: "inline-flex items-center gap-x-1 text-sm text-black",
    to: "/blog"
  }, _attrs), {
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
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("components/BackButton.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const BackButton = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

export { BackButton as B, PaginationNav as P };
//# sourceMappingURL=BackButton-DKm5HqYv.mjs.map
