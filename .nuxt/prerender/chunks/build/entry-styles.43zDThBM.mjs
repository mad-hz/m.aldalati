const main = `/*! tailwindcss v3.4.10 | MIT License | https://tailwindcss.com*/*,:after,:before{border:0 solid #e5e7eb;box-sizing:border-box}:after,:before{--tw-content:""}:host,html{line-height:1.5;-webkit-text-size-adjust:100%;font-family:ui-sans-serif,system-ui,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;font-feature-settings:normal;font-variation-settings:normal;-moz-tab-size:4;-o-tab-size:4;tab-size:4;-webkit-tap-highlight-color:transparent}body{line-height:inherit;margin:0}hr{border-top-width:1px;color:inherit;height:0}abbr:where([title]){-webkit-text-decoration:underline dotted;text-decoration:underline dotted}h1,h2,h3,h4,h5,h6{font-size:inherit;font-weight:inherit}a{color:inherit;text-decoration:inherit}b,strong{font-weight:bolder}code,kbd,pre,samp{font-family:ui-monospace,SFMono-Regular,Menlo,Monaco,Consolas,Liberation Mono,Courier New,monospace;font-feature-settings:normal;font-size:1em;font-variation-settings:normal}small{font-size:80%}sub,sup{font-size:75%;line-height:0;position:relative;vertical-align:baseline}sub{bottom:-.25em}sup{top:-.5em}table{border-collapse:collapse;border-color:inherit;text-indent:0}button,input,optgroup,select,textarea{color:inherit;font-family:inherit;font-feature-settings:inherit;font-size:100%;font-variation-settings:inherit;font-weight:inherit;letter-spacing:inherit;line-height:inherit;margin:0;padding:0}button,select{text-transform:none}button,input:where([type=button]),input:where([type=reset]),input:where([type=submit]){-webkit-appearance:button;background-color:transparent;background-image:none}:-moz-focusring{outline:auto}:-moz-ui-invalid{box-shadow:none}progress{vertical-align:baseline}::-webkit-inner-spin-button,::-webkit-outer-spin-button{height:auto}[type=search]{-webkit-appearance:textfield;outline-offset:-2px}::-webkit-search-decoration{-webkit-appearance:none}::-webkit-file-upload-button{-webkit-appearance:button;font:inherit}summary{display:list-item}blockquote,dd,dl,figure,h1,h2,h3,h4,h5,h6,hr,p,pre{margin:0}fieldset{margin:0}fieldset,legend{padding:0}menu,ol,ul{list-style:none;margin:0;padding:0}dialog{padding:0}textarea{resize:vertical}input::-moz-placeholder,textarea::-moz-placeholder{color:#9ca3af;opacity:1}input::placeholder,textarea::placeholder{color:#9ca3af;opacity:1}[role=button],button{cursor:pointer}:disabled{cursor:default}audio,canvas,embed,iframe,img,object,svg,video{display:block;vertical-align:middle}img,video{height:auto;max-width:100%}[hidden]{display:none}*,:after,:before{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }::backdrop{--tw-border-spacing-x:0;--tw-border-spacing-y:0;--tw-translate-x:0;--tw-translate-y:0;--tw-rotate:0;--tw-skew-x:0;--tw-skew-y:0;--tw-scale-x:1;--tw-scale-y:1;--tw-pan-x: ;--tw-pan-y: ;--tw-pinch-zoom: ;--tw-scroll-snap-strictness:proximity;--tw-gradient-from-position: ;--tw-gradient-via-position: ;--tw-gradient-to-position: ;--tw-ordinal: ;--tw-slashed-zero: ;--tw-numeric-figure: ;--tw-numeric-spacing: ;--tw-numeric-fraction: ;--tw-ring-inset: ;--tw-ring-offset-width:0px;--tw-ring-offset-color:#fff;--tw-ring-color:rgba(59,130,246,.5);--tw-ring-offset-shadow:0 0 #0000;--tw-ring-shadow:0 0 #0000;--tw-shadow:0 0 #0000;--tw-shadow-colored:0 0 #0000;--tw-blur: ;--tw-brightness: ;--tw-contrast: ;--tw-grayscale: ;--tw-hue-rotate: ;--tw-invert: ;--tw-saturate: ;--tw-sepia: ;--tw-drop-shadow: ;--tw-backdrop-blur: ;--tw-backdrop-brightness: ;--tw-backdrop-contrast: ;--tw-backdrop-grayscale: ;--tw-backdrop-hue-rotate: ;--tw-backdrop-invert: ;--tw-backdrop-opacity: ;--tw-backdrop-saturate: ;--tw-backdrop-sepia: ;--tw-contain-size: ;--tw-contain-layout: ;--tw-contain-paint: ;--tw-contain-style: }.sr-only{height:1px;margin:-1px;overflow:hidden;padding:0;position:absolute;width:1px;clip:rect(0,0,0,0);border-width:0;white-space:nowrap}.collapse{visibility:collapse}.static{position:static}.fixed{position:fixed}.absolute{position:absolute}.relative{position:relative}.sticky{position:sticky}.inset-0{inset:0}.bottom-full{bottom:100%}.start-0{inset-inline-start:0}.top-0{top:0}.top-full{top:100%}.-z-\\[1\\]{z-index:-1}.z-10{z-index:10}.z-50{z-index:50}.mx-4{margin-left:1rem;margin-right:1rem}.mx-auto{margin-left:auto;margin-right:auto}.my-2{margin-bottom:.5rem;margin-top:.5rem}.-mb-4{margin-bottom:-1rem}.-ms-4{margin-inline-start:-1rem}.mb-1{margin-bottom:.25rem}.mb-10{margin-bottom:2.5rem}.mb-2{margin-bottom:.5rem}.mb-4{margin-bottom:1rem}.mb-5{margin-bottom:1.25rem}.mb-8{margin-bottom:2rem}.me-1{margin-inline-end:.25rem}.me-4{margin-inline-end:1rem}.ms-3{margin-inline-start:.75rem}.ms-32{margin-inline-start:8rem}.ms-4{margin-inline-start:1rem}.ms-6{margin-inline-start:1.5rem}.ms-auto{margin-inline-start:auto}.mt-1{margin-top:.25rem}.mt-10{margin-top:2.5rem}.mt-2{margin-top:.5rem}.mt-24{margin-top:6rem}.mt-3{margin-top:.75rem}.mt-4{margin-top:1rem}.mt-5{margin-top:1.25rem}.mt-6{margin-top:1.5rem}.mt-7{margin-top:1.75rem}.mt-auto{margin-top:auto}.block{display:block}.inline-block{display:inline-block}.flex{display:flex}.inline-flex{display:inline-flex}.table{display:table}.grid{display:grid}.hidden{display:none}.size-16{height:4rem;width:4rem}.size-3\\.5{height:.875rem;width:.875rem}.size-4{height:1rem;width:1rem}.size-5{height:1.25rem;width:1.25rem}.size-6{height:1.5rem;width:1.5rem}.size-8{height:2rem;width:2rem}.size-\\[38px\\]{height:38px;width:38px}.size-full{height:100%;width:100%}.h-2{height:.5rem}.h-4{height:1rem}.h-44{height:11rem}.h-5{height:1.25rem}.h-6{height:1.5rem}.h-8{height:2rem}.h-96{height:24rem}.h-auto{height:auto}.h-full{height:100%}.min-h-24{min-height:6rem}.w-10{width:2.5rem}.w-2\\/4{width:50%}.w-20{width:5rem}.w-28{width:7rem}.w-32{width:8rem}.w-4\\/12{width:33.333333%}.w-5{width:1.25rem}.w-6{width:1.5rem}.w-8{width:2rem}.w-\\[calc\\(100\\%-2rem\\)\\]{width:calc(100% - 2rem)}.w-full{width:100%}.min-w-40{min-width:10rem}.max-w-2xl{max-width:42rem}.max-w-3xl{max-width:48rem}.max-w-5xl{max-width:64rem}.max-w-7xl{max-width:80rem}.max-w-\\[300px\\]{max-width:300px}.max-w-\\[85rem\\]{max-width:85rem}.max-w-full{max-width:100%}.flex-none{flex:none}.shrink-0{flex-shrink:0}.grow{flex-grow:1}.basis-full{flex-basis:100%}.-translate-x-8{--tw-translate-x:-2rem}.-translate-x-8,.-translate-y-8{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.-translate-y-8{--tw-translate-y:-2rem}.transform{transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}@keyframes spin{to{transform:rotate(1turn)}}.animate-spin{animation:spin 1s linear infinite}.cursor-pointer{cursor:pointer}.resize{resize:both}.list-disc{list-style-type:disc}.grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.flex-col{flex-direction:column}.flex-wrap{flex-wrap:wrap}.flex-nowrap{flex-wrap:nowrap}.items-start{align-items:flex-start}.items-center{align-items:center}.justify-center{justify-content:center}.justify-between{justify-content:space-between}.gap-1{gap:.25rem}.gap-10{gap:2.5rem}.gap-3{gap:.75rem}.gap-4{gap:1rem}.gap-6{gap:1.5rem}.gap-x-0{-moz-column-gap:0;column-gap:0}.gap-x-1{-moz-column-gap:.25rem;column-gap:.25rem}.gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.gap-x-2\\.5{-moz-column-gap:.625rem;column-gap:.625rem}.gap-x-3{-moz-column-gap:.75rem;column-gap:.75rem}.gap-x-5{-moz-column-gap:1.25rem;column-gap:1.25rem}.gap-x-6{-moz-column-gap:1.5rem;column-gap:1.5rem}.gap-y-3{row-gap:.75rem}.gap-y-4{row-gap:1rem}.space-x-2>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(.5rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(.5rem*var(--tw-space-x-reverse))}.space-x-4>:not([hidden])~:not([hidden]){--tw-space-x-reverse:0;margin-left:calc(1rem*(1 - var(--tw-space-x-reverse)));margin-right:calc(1rem*var(--tw-space-x-reverse))}.space-y-1\\.5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.375rem*var(--tw-space-y-reverse));margin-top:calc(.375rem*(1 - var(--tw-space-y-reverse)))}.space-y-3>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(.75rem*var(--tw-space-y-reverse));margin-top:calc(.75rem*(1 - var(--tw-space-y-reverse)))}.space-y-5>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(1.25rem*var(--tw-space-y-reverse));margin-top:calc(1.25rem*(1 - var(--tw-space-y-reverse)))}.space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.overflow-hidden{overflow:hidden}.overflow-x-auto{overflow-x:auto}.truncate{overflow:hidden;text-overflow:ellipsis}.truncate,.whitespace-nowrap{white-space:nowrap}.rounded-2xl{border-radius:1rem}.rounded-full{border-radius:9999px}.rounded-lg{border-radius:.5rem}.rounded-md{border-radius:.375rem}.rounded-xl{border-radius:.75rem}.rounded-s-lg{border-end-start-radius:.5rem;border-start-start-radius:.5rem}.border{border-width:1px}.border-2{border-width:2px}.border-\\[3px\\]{border-width:3px}.border-b-2{border-bottom-width:2px}.border-solid{border-style:solid}.border-blue-200{--tw-border-opacity:1;border-color:rgb(191 219 254/var(--tw-border-opacity))}.border-current{border-color:currentColor}.border-gray-200{--tw-border-opacity:1;border-color:rgb(229 231 235/var(--tw-border-opacity))}.border-gray-300{--tw-border-opacity:1;border-color:rgb(209 213 219/var(--tw-border-opacity))}.border-green-500{--tw-border-opacity:1;border-color:rgb(34 197 94/var(--tw-border-opacity))}.border-lime-400{--tw-border-opacity:1;border-color:rgb(163 230 53/var(--tw-border-opacity))}.border-lime-500{--tw-border-opacity:1;border-color:rgb(132 204 22/var(--tw-border-opacity))}.border-transparent{border-color:transparent}.border-t-transparent{border-top-color:transparent}.bg-blue-100{--tw-bg-opacity:1;background-color:rgb(219 234 254/var(--tw-bg-opacity))}.bg-blue-600{--tw-bg-opacity:1;background-color:rgb(37 99 235/var(--tw-bg-opacity))}.bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.bg-gray-200{--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.bg-gray-900{--tw-bg-opacity:1;background-color:rgb(17 24 39/var(--tw-bg-opacity))}.bg-green-500{--tw-bg-opacity:1;background-color:rgb(34 197 94/var(--tw-bg-opacity))}.bg-lime-400{--tw-bg-opacity:1;background-color:rgb(163 230 53/var(--tw-bg-opacity))}.bg-lime-500{--tw-bg-opacity:1;background-color:rgb(132 204 22/var(--tw-bg-opacity))}.bg-red-500{--tw-bg-opacity:1;background-color:rgb(239 68 68/var(--tw-bg-opacity))}.bg-white{--tw-bg-opacity:1;background-color:rgb(255 255 255/var(--tw-bg-opacity))}.bg-opacity-50{--tw-bg-opacity:0.5}.bg-gradient-to-tl{background-image:linear-gradient(to top left,var(--tw-gradient-stops))}.bg-gradient-to-tr{background-image:linear-gradient(to top right,var(--tw-gradient-stops))}.from-blue-500{--tw-gradient-from:#3b82f6 var(--tw-gradient-from-position);--tw-gradient-to:rgba(59,130,246,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.from-gray-200{--tw-gradient-from:#e5e7eb var(--tw-gradient-from-position);--tw-gradient-to:rgba(229,231,235,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),var(--tw-gradient-to)}.via-white\\/0{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position);--tw-gradient-stops:var(--tw-gradient-from),hsla(0,0%,100%,0) var(--tw-gradient-via-position),var(--tw-gradient-to)}.to-lime-400{--tw-gradient-to:#a3e635 var(--tw-gradient-to-position)}.to-white\\/0{--tw-gradient-to:hsla(0,0%,100%,0) var(--tw-gradient-to-position)}.bg-clip-text{-webkit-background-clip:text;background-clip:text}.fill-black{fill:#000}.object-cover{-o-object-fit:cover;object-fit:cover}.p-2{padding:.5rem}.p-3{padding:.75rem}.p-4{padding:1rem}.p-6{padding:1.5rem}.px-3{padding-left:.75rem;padding-right:.75rem}.px-4{padding-left:1rem;padding-right:1rem}.py-1{padding-bottom:.25rem;padding-top:.25rem}.py-10{padding-bottom:2.5rem;padding-top:2.5rem}.py-2{padding-bottom:.5rem;padding-top:.5rem}.py-3{padding-bottom:.75rem;padding-top:.75rem}.py-4{padding-bottom:1rem;padding-top:1rem}.py-7{padding-bottom:1.75rem;padding-top:1.75rem}.pb-12{padding-bottom:3rem}.pb-3{padding-bottom:.75rem}.pb-8{padding-bottom:2rem}.ps-1{padding-inline-start:.25rem}.pt-1{padding-top:.25rem}.pt-6{padding-top:1.5rem}.pt-\\[50\\%\\]{padding-top:50%}.text-center{text-align:center}.text-start{text-align:start}.text-end{text-align:end}.align-bottom{vertical-align:bottom}.text-2xl{font-size:1.5rem;line-height:2rem}.text-3xl{font-size:1.875rem;line-height:2.25rem}.text-\\[13px\\]{font-size:13px}.text-lg{font-size:1.125rem;line-height:1.75rem}.text-sm{font-size:.875rem;line-height:1.25rem}.text-xl{font-size:1.25rem;line-height:1.75rem}.text-xs{font-size:.75rem;line-height:1rem}.font-bold{font-weight:700}.font-medium{font-weight:500}.font-semibold{font-weight:600}.uppercase{text-transform:uppercase}.lowercase{text-transform:lowercase}.italic{font-style:italic}.not-italic{font-style:normal}.text-black{--tw-text-opacity:1;color:rgb(0 0 0/var(--tw-text-opacity))}.text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.text-blue-600{--tw-text-opacity:1;color:rgb(37 99 235/var(--tw-text-opacity))}.text-gray-200{--tw-text-opacity:1;color:rgb(229 231 235/var(--tw-text-opacity))}.text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.text-gray-700{--tw-text-opacity:1;color:rgb(55 65 81/var(--tw-text-opacity))}.text-gray-800{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.text-lime-500{--tw-text-opacity:1;color:rgb(132 204 22/var(--tw-text-opacity))}.text-lime-600{--tw-text-opacity:1;color:rgb(101 163 13/var(--tw-text-opacity))}.text-transparent{color:transparent}.text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.underline{text-decoration-line:underline}.decoration-2{text-decoration-thickness:2px}.opacity-0{opacity:0}.shadow-sm{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.blur{--tw-blur:blur(8px)}.blur,.filter{filter:var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow)}.transition{transition-duration:.15s;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,-webkit-backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter,-webkit-backdrop-filter;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-\\[height\\]{transition-duration:.15s;transition-property:height;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-all{transition-duration:.15s;transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1)}.transition-transform{transition-duration:.15s;transition-property:transform;transition-timing-function:cubic-bezier(.4,0,.2,1)}.duration-300{transition-duration:.3s}.duration-500{transition-duration:.5s}.ease-in-out{transition-timing-function:cubic-bezier(.4,0,.2,1)}.before\\:absolute:before{content:var(--tw-content);position:absolute}.before\\:bottom-0\\.5:before{bottom:.125rem;content:var(--tw-content)}.before\\:start-0:before{content:var(--tw-content);inset-inline-start:0}.before\\:-z-\\[1\\]:before{content:var(--tw-content);z-index:-1}.before\\:h-1:before{content:var(--tw-content);height:.25rem}.before\\:w-full:before{content:var(--tw-content);width:100%}.before\\:bg-lime-400:before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(163 230 53/var(--tw-bg-opacity))}.after\\:absolute:after{content:var(--tw-content);position:absolute}.after\\:bottom-2:after{bottom:.5rem;content:var(--tw-content)}.after\\:start-3:after{content:var(--tw-content);inset-inline-start:.75rem}.after\\:top-8:after{content:var(--tw-content);top:2rem}.after\\:w-px:after{content:var(--tw-content);width:1px}.after\\:-translate-x-\\[0\\.5px\\]:after{content:var(--tw-content);--tw-translate-x:-0.5px;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.after\\:bg-gray-200:after{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(229 231 235/var(--tw-bg-opacity))}.after\\:content-\\[\\'\\2c \\'\\]:after{--tw-content:",";content:var(--tw-content)}.hover\\:bg-blue-700:hover{--tw-bg-opacity:1;background-color:rgb(29 78 216/var(--tw-bg-opacity))}.hover\\:bg-gray-100:hover{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hover\\:bg-gray-50:hover{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.hover\\:bg-lime-500:hover{--tw-bg-opacity:1;background-color:rgb(132 204 22/var(--tw-bg-opacity))}.hover\\:bg-lime-600:hover{--tw-bg-opacity:1;background-color:rgb(101 163 13/var(--tw-bg-opacity))}.hover\\:text-gray-500:hover{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.hover\\:text-gray-800:hover{--tw-text-opacity:1;color:rgb(31 41 55/var(--tw-text-opacity))}.hover\\:underline:hover{text-decoration-line:underline}.hover\\:decoration-2:hover{text-decoration-thickness:2px}.hover\\:shadow-sm:hover{--tw-shadow:0 1px 2px 0 rgba(0,0,0,.05);--tw-shadow-colored:0 1px 2px 0 var(--tw-shadow-color);box-shadow:var(--tw-ring-offset-shadow,0 0 #0000),var(--tw-ring-shadow,0 0 #0000),var(--tw-shadow)}.hover\\:before\\:bg-black:hover:before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.focus\\:border-blue-500:focus{--tw-border-opacity:1;border-color:rgb(59 130 246/var(--tw-border-opacity))}.focus\\:bg-gray-100:focus{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.focus\\:bg-gray-50:focus{--tw-bg-opacity:1;background-color:rgb(249 250 251/var(--tw-bg-opacity))}.focus\\:bg-lime-500:focus{--tw-bg-opacity:1;background-color:rgb(132 204 22/var(--tw-bg-opacity))}.focus\\:bg-lime-600:focus{--tw-bg-opacity:1;background-color:rgb(101 163 13/var(--tw-bg-opacity))}.focus\\:text-gray-500:focus{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.focus\\:underline:focus{text-decoration-line:underline}.focus\\:decoration-2:focus{text-decoration-thickness:2px}.focus\\:opacity-80:focus{opacity:.8}.focus\\:outline-none:focus{outline:2px solid transparent;outline-offset:2px}.focus\\:ring-blue-500:focus{--tw-ring-opacity:1;--tw-ring-color:rgb(59 130 246/var(--tw-ring-opacity))}.focus\\:before\\:bg-black:focus:before{content:var(--tw-content);--tw-bg-opacity:1;background-color:rgb(0 0 0/var(--tw-bg-opacity))}.disabled\\:pointer-events-none:disabled{pointer-events:none}.disabled\\:opacity-50:disabled{opacity:.5}.group:last-child .group-last\\:pb-0{padding-bottom:0}.group:last-child .group-last\\:after\\:hidden:after{content:var(--tw-content);display:none}.group:hover .group-hover\\:scale-105{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:hover .group-hover\\:text-gray-500{--tw-text-opacity:1;color:rgb(107 114 128/var(--tw-text-opacity))}.group:hover .group-hover\\:text-gray-600{--tw-text-opacity:1;color:rgb(75 85 99/var(--tw-text-opacity))}.group:hover .group-hover\\:underline{text-decoration-line:underline}.group:focus .group-focus\\:scale-105{--tw-scale-x:1.05;--tw-scale-y:1.05;transform:translate(var(--tw-translate-x),var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y))}.group:focus .group-focus\\:underline{text-decoration-line:underline}.hs-accordion.active.hs-accordion-active\\:block{display:block}.hs-accordion.active.hs-accordion-active\\:hidden{display:none}.hs-accordion.active.hs-accordion-active\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hs-accordion.active>.hs-accordion-active\\:block{display:block}.hs-accordion.active>.hs-accordion-active\\:hidden{display:none}.hs-accordion.active>.hs-accordion-active\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hs-accordion.active>.hs-accordion-toggle .hs-accordion-active\\:block{display:block}.hs-accordion.active>.hs-accordion-toggle .hs-accordion-active\\:hidden{display:none}.hs-accordion.active>.hs-accordion-toggle .hs-accordion-active\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hs-accordion.active>.hs-accordion-heading>.hs-accordion-toggle .hs-accordion-active\\:block{display:block}.hs-accordion.active>.hs-accordion-heading>.hs-accordion-toggle .hs-accordion-active\\:hidden{display:none}.hs-accordion.active>.hs-accordion-heading>.hs-accordion-toggle .hs-accordion-active\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hs-accordion.active>.hs-accordion-toggle.hs-accordion-active\\:block{display:block}.hs-accordion.active>.hs-accordion-toggle.hs-accordion-active\\:hidden{display:none}.hs-accordion.active>.hs-accordion-toggle.hs-accordion-active\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hs-accordion.active>.hs-accordion-heading>.hs-accordion-toggle.hs-accordion-active\\:block{display:block}.hs-accordion.active>.hs-accordion-heading>.hs-accordion-toggle.hs-accordion-active\\:hidden{display:none}.hs-accordion.active>.hs-accordion-heading>.hs-accordion-toggle.hs-accordion-active\\:bg-gray-100{--tw-bg-opacity:1;background-color:rgb(243 244 246/var(--tw-bg-opacity))}.hs-collapse.open .hs-collapse-open\\:block{display:block}.hs-collapse.open .hs-collapse-open\\:hidden{display:none}.hs-collapse.open.hs-collapse-open\\:block{display:block}.hs-collapse.open.hs-collapse-open\\:hidden{display:none}.hs-collapse-toggle.open .hs-collapse-open\\:block{display:block}.hs-collapse-toggle.open .hs-collapse-open\\:hidden{display:none}.hs-collapse-toggle.open.hs-collapse-open\\:block{display:block}.hs-collapse-toggle.open.hs-collapse-open\\:hidden{display:none}.selected .hs-combo-box-selected\\:block,.selected.hs-combo-box-selected\\:block{display:block}@media (min-width:640px){.sm\\:mx-0{margin-left:0;margin-right:0}.sm\\:ms-48{margin-inline-start:12rem}.sm\\:inline-flex{display:inline-flex}.sm\\:h-24{height:6rem}.sm\\:h-\\[480px\\]{height:480px}.sm\\:w-2\\/12{width:16.666667%}.sm\\:w-24{width:6rem}.sm\\:w-28{width:7rem}.sm\\:w-48{width:12rem}.sm\\:w-56{width:14rem}.sm\\:grid-cols-1{grid-template-columns:repeat(1,minmax(0,1fr))}.sm\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.sm\\:flex-row{flex-direction:row}.sm\\:items-center{align-items:center}.sm\\:gap-5{gap:1.25rem}.sm\\:gap-6{gap:1.5rem}.sm\\:gap-x-12{-moz-column-gap:3rem;column-gap:3rem}.sm\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.sm\\:pt-\\[70\\%\\]{padding-top:70%}.sm\\:text-2xl{font-size:1.5rem;line-height:2rem}.sm\\:text-4xl{font-size:2.25rem;line-height:2.5rem}}@media (min-width:768px){.md\\:order-2{order:2}.md\\:order-3{order:3}.md\\:col-span-3{grid-column:span 3/span 3}.md\\:col-span-6{grid-column:span 6/span 6}.md\\:mt-0{margin-top:0}.md\\:block{display:block}.md\\:grid{display:grid}.md\\:hidden{display:none}.md\\:w-2\\/12{width:16.666667%}.md\\:w-20{width:5rem}.md\\:w-auto{width:auto}.md\\:basis-auto{flex-basis:auto}.md\\:grid-cols-12{grid-template-columns:repeat(12,minmax(0,1fr))}.md\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.md\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.md\\:flex-row{flex-direction:row}.md\\:flex-nowrap{flex-wrap:nowrap}.md\\:items-center{align-items:center}.md\\:justify-start{justify-content:flex-start}.md\\:justify-center{justify-content:center}.md\\:gap-8{gap:2rem}.md\\:gap-x-2{-moz-column-gap:.5rem;column-gap:.5rem}.md\\:gap-x-7{-moz-column-gap:1.75rem;column-gap:1.75rem}.md\\:gap-y-0{row-gap:0}.md\\:space-y-8>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(2rem*var(--tw-space-y-reverse));margin-top:calc(2rem*(1 - var(--tw-space-y-reverse)))}.md\\:p-6{padding:1.5rem}.md\\:px-6{padding-left:1.5rem;padding-right:1.5rem}.md\\:px-8{padding-left:2rem;padding-right:2rem}.md\\:ps-6{padding-inline-start:1.5rem}.md\\:text-3xl{font-size:1.875rem;line-height:2.25rem}.md\\:text-4xl{font-size:2.25rem;line-height:2.5rem}.md\\:text-5xl{font-size:3rem;line-height:1}.md\\:text-lg{font-size:1.125rem;line-height:1.75rem}.md\\:leading-normal{line-height:1.5}.md\\:leading-tight{line-height:1.25}}@media (min-width:1024px){.lg\\:mx-auto{margin-left:auto;margin-right:auto}.lg\\:-mb-6{margin-bottom:-1.5rem}.lg\\:-ms-6{margin-inline-start:-1.5rem}.lg\\:me-6{margin-inline-end:1.5rem}.lg\\:mt-10{margin-top:2.5rem}.lg\\:mt-6{margin-top:1.5rem}.lg\\:w-1\\/12{width:8.333333%}.lg\\:w-24{width:6rem}.lg\\:w-3\\/5{width:60%}.lg\\:grid-cols-2{grid-template-columns:repeat(2,minmax(0,1fr))}.lg\\:grid-cols-3{grid-template-columns:repeat(3,minmax(0,1fr))}.lg\\:items-center{align-items:center}.lg\\:gap-12{gap:3rem}.lg\\:gap-x-24{-moz-column-gap:6rem;column-gap:6rem}.lg\\:gap-y-16{row-gap:4rem}.lg\\:space-y-16>:not([hidden])~:not([hidden]){--tw-space-y-reverse:0;margin-bottom:calc(4rem*var(--tw-space-y-reverse));margin-top:calc(4rem*(1 - var(--tw-space-y-reverse)))}.lg\\:px-8{padding-left:2rem;padding-right:2rem}.lg\\:py-14{padding-bottom:3.5rem;padding-top:3.5rem}.lg\\:pt-10{padding-top:2.5rem}.lg\\:text-6xl{font-size:3.75rem;line-height:1}.lg\\:leading-tight{line-height:1.25}}@media (min-width:1280px){.xl\\:gap-20{gap:5rem}}@media (prefers-color-scheme:dark){.dark\\:border-neutral-600{--tw-border-opacity:1;border-color:rgb(82 82 82/var(--tw-border-opacity))}.dark\\:border-neutral-700{--tw-border-opacity:1;border-color:rgb(64 64 64/var(--tw-border-opacity))}.dark\\:bg-blue-500{--tw-bg-opacity:1;background-color:rgb(59 130 246/var(--tw-bg-opacity))}.dark\\:bg-neutral-700{--tw-bg-opacity:1;background-color:rgb(64 64 64/var(--tw-bg-opacity))}.dark\\:bg-neutral-800{--tw-bg-opacity:1;background-color:rgb(38 38 38/var(--tw-bg-opacity))}.dark\\:bg-neutral-900{--tw-bg-opacity:1;background-color:rgb(23 23 23/var(--tw-bg-opacity))}.dark\\:bg-opacity-80{--tw-bg-opacity:0.8}.dark\\:fill-neutral-200{fill:#e5e5e5}.dark\\:text-blue-500{--tw-text-opacity:1;color:rgb(59 130 246/var(--tw-text-opacity))}.dark\\:text-neutral-200{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}.dark\\:text-neutral-400{--tw-text-opacity:1;color:rgb(163 163 163/var(--tw-text-opacity))}.dark\\:text-neutral-500{--tw-text-opacity:1;color:rgb(115 115 115/var(--tw-text-opacity))}.dark\\:text-white{--tw-text-opacity:1;color:rgb(255 255 255/var(--tw-text-opacity))}.dark\\:hover\\:bg-neutral-800:hover{--tw-bg-opacity:1;background-color:rgb(38 38 38/var(--tw-bg-opacity))}.dark\\:hover\\:text-neutral-200:hover{--tw-text-opacity:1;color:rgb(229 229 229/var(--tw-text-opacity))}.dark\\:hover\\:text-neutral-400:hover{--tw-text-opacity:1;color:rgb(163 163 163/var(--tw-text-opacity))}.dark\\:focus\\:bg-neutral-800:focus{--tw-bg-opacity:1;background-color:rgb(38 38 38/var(--tw-bg-opacity))}}`;

const entryStyles_43zDThBM = [main];

export { entryStyles_43zDThBM as default };
//# sourceMappingURL=entry-styles.43zDThBM.mjs.map
