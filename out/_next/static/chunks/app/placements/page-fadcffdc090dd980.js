(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[619],{5308:function(e,t,s){Promise.resolve().then(s.bind(s,123)),Promise.resolve().then(s.bind(s,2280)),Promise.resolve().then(s.t.bind(s,8173,23)),Promise.resolve().then(s.t.bind(s,231,23))},2280:function(e,t,s){"use strict";var l=s(7437),n=s(2265),r=s(4300);t.default=e=>{let{slides:t,options:s}=e,[i,a]=(0,r.Z)({loop:!0,...s}),[c,o]=n.useState(0),[d,u]=n.useState([]),b=n.useCallback(()=>{a&&o(a.selectedScrollSnap())},[a]);n.useEffect(()=>{a&&(u(a.scrollSnapList()),a.on("select",b),a.on("reInit",b))},[a,b]);let _=e=>a&&a.scrollTo(e);return(0,l.jsxs)("section",{className:"embla",children:[(0,l.jsx)("div",{className:"embla__viewport",ref:i,children:(0,l.jsx)("div",{className:"embla__container",children:t.map((e,t)=>(0,l.jsx)("div",{className:"embla__slide",children:e.content},t))})}),(0,l.jsx)("button",{className:"embla__button embla__button--prev",onClick:()=>a&&a.scrollPrev(),disabled:(null==a?void 0:a.canScrollPrev())===!1,children:(0,l.jsx)("svg",{className:"embla__button__svg",viewBox:"0 0 532 532",children:(0,l.jsx)("path",{fill:"currentColor",d:"M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z"})})}),(0,l.jsx)("button",{className:"embla__button embla__button--next",onClick:()=>a&&a.scrollNext(),disabled:(null==a?void 0:a.canScrollNext())===!1,children:(0,l.jsx)("svg",{className:"embla__button__svg",viewBox:"0 0 532 532",children:(0,l.jsx)("path",{fill:"currentColor",d:"M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z"})})}),(0,l.jsx)("div",{className:"embla__dots",children:d.map((e,t)=>(0,l.jsx)("button",{className:"embla__dot ".concat(t===c?"embla__dot--selected":""),onClick:()=>_(t)},t))})]})}},123:function(e,t,s){"use strict";var l=s(7437),n=s(2265),r=s(7346),i=s(5211);i.kL.register(i.uw,i.f$,i.ZL,i.Dx,i.u,i.De),t.default=e=>{let{labels:t,datasets:s}=e,[i,a]=(0,n.useState)({width:800,height:400}),[c,o]=(0,n.useState)(!1),d=(0,n.useRef)(null);return(0,n.useEffect)(()=>{let e=()=>{let e,t;window.innerWidth<400?(e=330,t=200):window.innerWidth<1e3?(e=370,t=200):(e=800,t=400),a({width:e,height:t})};return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)},[]),(0,n.useEffect)(()=>{if(!d.current)return;let e=new IntersectionObserver(t=>{let[s]=t;s.isIntersecting&&(o(!0),e.unobserve(s.target))},{threshold:.1}),t=d.current;return e.observe(t),()=>{e.unobserve(t)}},[d]),(0,l.jsx)("div",{ref:d,style:{width:i.width,height:i.height},children:c&&(0,l.jsx)(r.$Q,{data:{labels:t,datasets:s},options:{indexAxis:"y",scales:{x:{beginAtZero:!0}}}})})}}},function(e){e.O(0,[7674,8173,231,4300,5746,2971,7023,1744],function(){return e(e.s=5308)}),_N_E=e.O()}]);