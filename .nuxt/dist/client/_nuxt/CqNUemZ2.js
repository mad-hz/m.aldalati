import{r as f,h as n,c as o,a as e,F as v,i as _,t as l,n as u,j as b,u as C,o as i,k as w,v as y,l as k,d as h}from"./3iLDiuWg.js";import{u as B}from"./B0vXS-8X.js";const P={class:"relative overflow-hidden"},U={class:"max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-10"},j=e("div",{class:"max-w-2xl text-center mx-auto mb-10"},[e("h2",{class:"block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl bg-clip-text bg-gradient-to-tl from-blue-500 to-lime-400 text-transparent"}," Dashboard "),e("p",{class:"mt-1 text-gray-600"},"Let's dive more into the HBO ICT Program.")],-1),D={class:"grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6"},N={class:"flex items-center"},M=["id","onUpdate:modelValue"],V=["onClick"],E={key:0,class:"w-5 h-5 text-white absolute",fill:"none",stroke:"currentColor",viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg"},F=e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M5 13l4 4L19 7"},null,-1),O=[F],S={class:"font-semibold text-sm text-gray-800"},z={class:"mt-1 text-sm text-gray-600"},I=e("br",null,null,-1),L=e("div",{class:"bg-blue-100 border border-blue-200 text-gray-800 rounded-lg p-4 mt-10",role:"alert",tabindex:"-1","aria-labelledby":"hs-actions-label"},[e("div",{class:"flex"},[e("div",{class:"shrink-0"},[e("svg",{class:"shrink-0 size-4 mt-1",xmlns:"http://www.w3.org/2000/svg",width:"24",height:"24",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor","stroke-width":"2","stroke-linecap":"round","stroke-linejoin":"round"},[e("circle",{cx:"12",cy:"12",r:"10"}),e("path",{d:"M12 16v-4"}),e("path",{d:"M12 8h.01"})])]),e("div",{class:"ms-3"},[e("h3",{id:"hs-actions-label",class:"font-semibold"}," NBSA "),e("div",{class:"mt-2 text-sm text-gray-600"}," You need at least 45 ECs to pass the first year, and 60 ECs to not repeat any section. ")])])],-1),T={class:"mt-10"},$=e("label",{for:"progress-bar",class:"block text-md font-medium text-gray-700"},"Progress:",-1),A={class:"relative pt-1"},H={class:"flex items-center justify-between"},R=e("span",{class:"text-xs font-medium text-gray-600"},"0",-1),W={class:"text-xs font-medium text-gray-600"},Y=e("span",{class:"text-xs font-medium text-gray-600"},"60",-1),q={class:"flex w-full h-4 bg-gray-200 rounded-full overflow-hidden mt-2",role:"progressbar","aria-valuenow":"50","aria-valuemin":"0","aria-valuemax":"100"},Q={__name:"dashboard",setup(G){const c=f([{name:"Program and Career Orientation",id:"CU75001",credits:2.5,selected:!1},{name:"Computer Science Basics",id:"CU75002",credits:5,selected:!1},{name:"Programming Basics",id:"CU75003",credits:5,selected:!1},{name:"Personal Professional Development",id:"CU75068",credits:12.5,selected:!1},{name:"Object Oriented Programming",id:"CU75004",credits:10,selected:!1},{name:"Business IT Consultancy Basics",id:"CU75081",credits:2.5,selected:!1},{name:"Framework Project 1",id:"CU75011",credits:10,selected:!1},{name:"Framework Project 2",id:"CU75080",credits:10,selected:!1},{name:"Personality",id:"NA",credits:2.5,selected:!1}]),d=n(()=>c.value.reduce((s,a)=>a.selected?s+a.credits:s,0)),x=n(()=>{const a=d.value/60*100;return`${Math.min(a,100)}%`}),g=n(()=>d.value<45?"bg-red-500":"bg-green-500"),p=C();return B({title:`Dashboard - ${p.public.appName}`}),(s,a)=>(i(),o("div",P,[e("div",U,[j,e("div",D,[(i(!0),o(v,null,_(c.value,(t,m)=>(i(),o("div",{key:m,class:"p-4 border border-gray-200 rounded-lg flex items-start space-x-4"},[e("div",N,[w(e("input",{type:"checkbox",id:"course-"+m,"onUpdate:modelValue":r=>t.selected=r,onChange:a[0]||(a[0]=(...r)=>s.updateCredits&&s.updateCredits(...r)),class:"hidden"},null,40,M),[[y,t.selected]]),e("div",{class:u(["relative w-8 h-8 flex items-center justify-center border-2 border-gray-300 rounded-full cursor-pointer",{"bg-green-500 border-green-500":t.selected}]),onClick:r=>{t.selected=!t.selected,s.updateCredits()}},[t.selected?(i(),o("svg",E,O)):k("",!0)],10,V)]),e("div",null,[e("p",S,l(t.name),1),e("p",z,[h(" Course ID: "+l(t.id),1),I,h(" Credits: "+l(t.credits)+" EC ",1)])])]))),128))]),L,e("div",T,[$,e("div",A,[e("div",H,[R,e("span",W,l(d.value)+" credits",1),Y]),e("div",q,[e("div",{class:u(["flex flex-col justify-center rounded-full overflow-hidden transition duration-500 text-xs text-white text-center whitespace-nowrap",g.value]),style:b({width:x.value})},null,6)])])])])]))}};export{Q as default};
