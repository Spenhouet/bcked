import{S as He,i as Me,s as Xe,a as Ye,e as z,c as Qe,b as H,g as ie,t as K,d as le,f as x,h as F,j as Ze,o as be,k as et,l as tt,m as rt,n as ge,p as N,q as nt,r as at,u as st,v as M,w as Re,x as X,y as Y,z as Ce}from"./chunks/index-727eec03.js";import{g as qe,f as Be,s as W,a as ve,i as ot}from"./chunks/singletons-6179e3b4.js";import{s as it}from"./chunks/paths-6cd3a76e.js";const lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),ct=function(n,e){return new URL(n,e).href},Je={},T=function(e,t,c){return!t||t.length===0?e():Promise.all(t.map(o=>{if(o=ct(o,c),o in Je)return;Je[o]=!0;const d=o.endsWith(".css"),r=d?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${o}"]${r}`))return;const f=document.createElement("link");if(f.rel=d?"stylesheet":lt,d||(f.as="script",f.crossOrigin=""),f.href=o,document.head.appendChild(f),d)return new Promise((w,_)=>{f.addEventListener("load",w),f.addEventListener("error",()=>_(new Error(`Unable to preload CSS for ${o}`)))})})).then(()=>e())};class we{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,t){this.status=e,this.location=t}}function ft(n,e){return n==="/"||e==="ignore"?n:e==="never"?n.endsWith("/")?n.slice(0,-1):n:e==="always"&&!n.endsWith("/")?n+"/":n}function ut(n){for(const e in n)n[e]=n[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return n}const dt=["href","pathname","search","searchParams","toString","toJSON"];function pt(n,e){const t=new URL(n);for(const c of dt){let o=t[c];Object.defineProperty(t,c,{get(){return e(),o},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(c,o,d)=>d(n,o),ht(t),t}function ht(n){Object.defineProperty(n,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function mt(n){let e=5381,t=n.length;if(typeof n=="string")for(;t;)e=e*33^n.charCodeAt(--t);else for(;t;)e=e*33^n[--t];return(e>>>0).toString(36)}const Le=window.fetch;window.fetch=(n,e)=>{if((n instanceof Request?n.method:(e==null?void 0:e.method)||"GET")!=="GET"){const c=new URL(n instanceof Request?n.url:n.toString(),document.baseURI).href;oe.delete(c)}return Le(n,e)};const oe=new Map;function _t(n,e,t){let o=`script[data-sveltekit-fetched][data-url=${JSON.stringify(typeof n=="string"?n:n.url)}]`;t&&typeof t.body=="string"&&(o+=`[data-hash="${mt(t.body)}"]`);const d=document.querySelector(o);if(d!=null&&d.textContent){const{body:r,...f}=JSON.parse(d.textContent),w=d.getAttribute("data-ttl");return w&&oe.set(e,{body:r,init:f,ttl:1e3*Number(w)}),Promise.resolve(new Response(r,f))}return Le(n,t)}function gt(n,e){const t=oe.get(n);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);oe.delete(n)}return Le(n,e)}const wt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function yt(n){const e=[],t=[];let c=!0;return{pattern:n===""?/^\/$/:new RegExp(`^${n.split(/(?:\/|$)/).filter(bt).map((d,r,f)=>{const w=decodeURIComponent(d),_=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(w);if(_)return e.push(_[1]),t.push(_[2]),"(?:/(.*))?";const b=r===f.length-1;return w&&"/"+w.split(/\[(.+?)\]/).map((S,R)=>{if(R%2){const D=wt.exec(S);if(!D)throw new Error(`Invalid param: ${S}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,I,V,C]=D;return e.push(V),t.push(C),I?"(.*?)":"([^/]+?)"}return b&&S.includes(".")&&(c=!1),S.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${c?"/?":""}$`),names:e,types:t}}function bt(n){return!/^\([^)]+\)$/.test(n)}function vt(n,e,t,c){const o={};for(let d=0;d<e.length;d+=1){const r=e[d],f=t[d],w=n[d+1]||"";if(f){const _=c[f];if(!_)throw new Error(`Missing "${f}" param matcher`);if(!_(w))return}o[r]=w}return o}function Et(n,e,t,c){const o=new Set(e);return Object.entries(t).map(([f,[w,_,b]])=>{const{pattern:S,names:R,types:D}=yt(f),I={id:f,exec:V=>{const C=S.exec(V);if(C)return vt(C,R,D,c)},errors:[1,...b||[]].map(V=>n[V]),layouts:[0,..._||[]].map(r),leaf:d(w)};return I.errors.length=I.layouts.length=Math.max(I.errors.length,I.layouts.length),I});function d(f){const w=f<0;return w&&(f=~f),[w,n[f]]}function r(f){return f===void 0?f:[o.has(f),n[f]]}}function kt(n){let e,t,c;var o=n[0][0];function d(r){return{props:{data:r[2],form:r[1]}}}return o&&(e=new o(d(n))),{c(){e&&M(e.$$.fragment),t=z()},l(r){e&&Re(e.$$.fragment,r),t=z()},m(r,f){e&&X(e,r,f),H(r,t,f),c=!0},p(r,f){const w={};if(f&4&&(w.data=r[2]),f&2&&(w.form=r[1]),o!==(o=r[0][0])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}o?(e=new o(d(r)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){c||(e&&x(e.$$.fragment,r),c=!0)},o(r){e&&K(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Rt(n){let e,t,c;var o=n[0][0];function d(r){return{props:{data:r[2],$$slots:{default:[Lt]},$$scope:{ctx:r}}}}return o&&(e=new o(d(n))),{c(){e&&M(e.$$.fragment),t=z()},l(r){e&&Re(e.$$.fragment,r),t=z()},m(r,f){e&&X(e,r,f),H(r,t,f),c=!0},p(r,f){const w={};if(f&4&&(w.data=r[2]),f&523&&(w.$$scope={dirty:f,ctx:r}),o!==(o=r[0][0])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}o?(e=new o(d(r)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){c||(e&&x(e.$$.fragment,r),c=!0)},o(r){e&&K(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Lt(n){let e,t,c;var o=n[0][1];function d(r){return{props:{data:r[3],form:r[1]}}}return o&&(e=new o(d(n))),{c(){e&&M(e.$$.fragment),t=z()},l(r){e&&Re(e.$$.fragment,r),t=z()},m(r,f){e&&X(e,r,f),H(r,t,f),c=!0},p(r,f){const w={};if(f&8&&(w.data=r[3]),f&2&&(w.form=r[1]),o!==(o=r[0][1])){if(e){ie();const _=e;K(_.$$.fragment,1,0,()=>{Y(_,1)}),le()}o?(e=new o(d(r)),M(e.$$.fragment),x(e.$$.fragment,1),X(e,t.parentNode,t)):e=null}else o&&e.$set(w)},i(r){c||(e&&x(e.$$.fragment,r),c=!0)},o(r){e&&K(e.$$.fragment,r),c=!1},d(r){r&&F(t),e&&Y(e,r)}}}function Ke(n){let e,t=n[5]&&xe(n);return{c(){e=et("div"),t&&t.c(),this.h()},l(c){e=tt(c,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var o=rt(e);t&&t.l(o),o.forEach(F),this.h()},h(){ge(e,"id","svelte-announcer"),ge(e,"aria-live","assertive"),ge(e,"aria-atomic","true"),N(e,"position","absolute"),N(e,"left","0"),N(e,"top","0"),N(e,"clip","rect(0 0 0 0)"),N(e,"clip-path","inset(50%)"),N(e,"overflow","hidden"),N(e,"white-space","nowrap"),N(e,"width","1px"),N(e,"height","1px")},m(c,o){H(c,e,o),t&&t.m(e,null)},p(c,o){c[5]?t?t.p(c,o):(t=xe(c),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(c){c&&F(e),t&&t.d()}}}function xe(n){let e;return{c(){e=nt(n[6])},l(t){e=at(t,n[6])},m(t,c){H(t,e,c)},p(t,c){c&64&&st(e,t[6])},d(t){t&&F(e)}}}function St(n){let e,t,c,o,d;const r=[Rt,kt],f=[];function w(b,S){return b[0][1]?0:1}e=w(n),t=f[e]=r[e](n);let _=n[4]&&Ke(n);return{c(){t.c(),c=Ye(),_&&_.c(),o=z()},l(b){t.l(b),c=Qe(b),_&&_.l(b),o=z()},m(b,S){f[e].m(b,S),H(b,c,S),_&&_.m(b,S),H(b,o,S),d=!0},p(b,[S]){let R=e;e=w(b),e===R?f[e].p(b,S):(ie(),K(f[R],1,1,()=>{f[R]=null}),le(),t=f[e],t?t.p(b,S):(t=f[e]=r[e](b),t.c()),x(t,1),t.m(c.parentNode,c)),b[4]?_?_.p(b,S):(_=Ke(b),_.c(),_.m(o.parentNode,o)):_&&(_.d(1),_=null)},i(b){d||(x(t),d=!0)},o(b){K(t),d=!1},d(b){f[e].d(b),b&&F(c),_&&_.d(b),b&&F(o)}}}function $t(n,e,t){let{stores:c}=e,{page:o}=e,{components:d}=e,{form:r}=e,{data_0:f=null}=e,{data_1:w=null}=e;Ze(c.page.notify);let _=!1,b=!1,S=null;return be(()=>{const R=c.page.subscribe(()=>{_&&(t(5,b=!0),t(6,S=document.title||"untitled page"))});return t(4,_=!0),R}),n.$$set=R=>{"stores"in R&&t(7,c=R.stores),"page"in R&&t(8,o=R.page),"components"in R&&t(0,d=R.components),"form"in R&&t(1,r=R.form),"data_0"in R&&t(2,f=R.data_0),"data_1"in R&&t(3,w=R.data_1)},n.$$.update=()=>{n.$$.dirty&384&&c.page.set(o)},[d,r,f,w,_,b,S,c,o]}class Pt extends He{constructor(e){super(),Me(this,e,$t,St,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Ot={},ce=[()=>T(()=>import("./chunks/0-4c454d23.js"),["chunks/0-4c454d23.js","chunks/_layout-8d2a742b.js","components/pages/_layout.svelte-e17a061e.js","assets/_layout-4e7ae49e.css","chunks/index-727eec03.js","chunks/paths-6cd3a76e.js","chunks/stores-0e18ecb3.js","chunks/singletons-6179e3b4.js","chunks/index-335fd47a.js","chunks/search-dbcfd0b6.js","assets/search-4c825759.css","chunks/Cash-cf194f26.js","chunks/github-a77ec2f0.js"],import.meta.url),()=>T(()=>import("./chunks/1-9f440e85.js"),["chunks/1-9f440e85.js","components/pages/_error.svelte-4321e13f.js","chunks/index-727eec03.js","chunks/404-e85e838f.js","chunks/paths-6cd3a76e.js","chunks/github-a77ec2f0.js","chunks/SvelteSeo-7024a03c.js"],import.meta.url),()=>T(()=>import("./chunks/2-c471af98.js"),["chunks/2-c471af98.js","components/pages/assets/_error.svelte-64715e77.js","chunks/index-727eec03.js","chunks/stores-0e18ecb3.js","chunks/singletons-6179e3b4.js","chunks/index-335fd47a.js","chunks/paths-6cd3a76e.js","chunks/404-e85e838f.js","chunks/github-a77ec2f0.js","chunks/SvelteSeo-7024a03c.js"],import.meta.url),()=>T(()=>import("./chunks/3-1a2a2c92.js"),["chunks/3-1a2a2c92.js","components/pages/tokens/_error.svelte-c0060b2d.js","chunks/index-727eec03.js","chunks/404-e85e838f.js","chunks/paths-6cd3a76e.js","chunks/github-a77ec2f0.js","chunks/SvelteSeo-7024a03c.js","chunks/stores-0e18ecb3.js","chunks/singletons-6179e3b4.js","chunks/index-335fd47a.js"],import.meta.url),()=>T(()=>import("./chunks/4-9f560106.js"),["chunks/4-9f560106.js","components/pages/_page.svelte-ba784d51.js","chunks/index-727eec03.js","chunks/SvelteSeo-7024a03c.js","chunks/paths-6cd3a76e.js","chunks/search-dbcfd0b6.js","assets/search-4c825759.css","chunks/stores-0e18ecb3.js","chunks/singletons-6179e3b4.js","chunks/index-335fd47a.js","chunks/Cash-cf194f26.js","chunks/table-8837796d.js"],import.meta.url),()=>T(()=>import("./chunks/5-79b0f043.js"),["chunks/5-79b0f043.js","components/pages/about/_page.svelte-12b872e4.js","chunks/index-727eec03.js","chunks/SvelteSeo-7024a03c.js"],import.meta.url),()=>T(()=>import("./chunks/6-72d64277.js"),["chunks/6-72d64277.js","components/pages/api/_page.svelte-0e21e27c.js","chunks/index-727eec03.js","chunks/SvelteSeo-7024a03c.js"],import.meta.url),()=>T(()=>import("./chunks/7-5a33adbf.js"),["chunks/7-5a33adbf.js","components/pages/assets/_id_/_page.svelte-2ed81a1a.js","assets/_page-2997b35b.css","chunks/index-727eec03.js","chunks/index-335fd47a.js","chunks/table-8837796d.js","chunks/paths-6cd3a76e.js","chunks/Cash-cf194f26.js","chunks/_commonjsHelpers-456b4ed0.js","chunks/SvelteSeo-7024a03c.js"],import.meta.url),()=>T(()=>import("./chunks/8-dcdd26cf.js"),["chunks/8-dcdd26cf.js","components/pages/donate/_page.svelte-f946c397.js","chunks/index-727eec03.js","chunks/_commonjsHelpers-456b4ed0.js"],import.meta.url),()=>T(()=>import("./chunks/9-ad16329a.js"),["chunks/9-ad16329a.js","components/pages/faq/_page.svelte-1baeb20f.js","chunks/index-727eec03.js","chunks/SvelteSeo-7024a03c.js"],import.meta.url)],It=[],At={"":[-5],about:[-6],api:[6],donate:[8],faq:[-10],"assets/[id]":[-8,[],[2]]},jt={handleError:({error:n})=>(console.error(n),{message:"Internal Error"})},Ut="/__data.js",We="sveltekit:scroll",J="sveltekit:index",ne=Et(ce,It,At,Ot),Ee=ce[0],ke=ce[1];Ee();ke();let te={};try{te=JSON.parse(sessionStorage[We])}catch{}function ye(n){te[n]=ve()}function Tt({target:n,base:e,trailing_slash:t}){var Te;const c=[],o={id:null,promise:null},d={before_navigate:[],after_navigate:[]};let r={branch:[],error:null,session_id:0,url:null},f=!1,w=!0,_=!1,b=1,S=null,R=!1,D,I=(Te=history.state)==null?void 0:Te[J];I||(I=Date.now(),history.replaceState({...history.state,[J]:I},"",location.href));const V=te[I];V&&(history.scrollRestoration="manual",scrollTo(V.x,V.y));let C=!1,q,Se;function $e(){if(!S){const a=new URL(location.href);S=Promise.resolve().then(async()=>{const i=pe(a,!0);await Oe(i,a,[]),S=null,R=!1})}return S}async function fe(a,{noscroll:i=!1,replaceState:p=!1,keepfocus:s=!1,state:l={}},h){return typeof a=="string"&&(a=new URL(a,qe(document))),he({url:a,scroll:i?ve():null,keepfocus:s,redirect_chain:h,details:{state:l,replaceState:p},accepted:()=>{},blocked:()=>{},type:"goto"})}async function Pe(a){const i=pe(a,!1);if(!i)throw new Error("Attempted to prefetch a URL that does not belong to this app");return o.promise=je(i),o.id=i.id,o.promise}async function Oe(a,i,p,s,l){var v,E;const h=Se={};let m=a&&await je(a);if(!m&&i.origin===location.origin&&i.pathname===location.pathname&&(m=await re({status:404,error:new Error(`Not found: ${i.pathname}`),url:i,routeId:null})),!m)return await Z(i),!1;if(i=(a==null?void 0:a.url)||i,Se!==h)return!1;if(c.length=0,m.type==="redirect")if(p.length>10||p.includes(i.pathname))m=await re({status:500,error:new Error("Redirect loop"),url:i,routeId:null});else return fe(new URL(m.location,i).href,{},[...p,i.pathname]),!1;else((E=(v=m.props)==null?void 0:v.page)==null?void 0:E.status)>=400&&await W.updated.check()&&await Z(i);if(_=!0,s&&s.details){const{details:y}=s,g=y.replaceState?0:1;y.state[J]=I+=g,history[y.replaceState?"replaceState":"pushState"](y.state,"",i)}if(f){r=m.state,m.props.page&&(m.props.page.url=i);const y=se();D.$set(m.props),y()}else Ie(m);if(s){const{scroll:y,keepfocus:g}=s;if(!g){const k=document.body,A=k.getAttribute("tabindex");k.tabIndex=-1,k.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),A!==null?k.setAttribute("tabindex",A):k.removeAttribute("tabindex")}if(await Ce(),w){const k=i.hash&&document.getElementById(i.hash.slice(1));y?scrollTo(y.x,y.y):k?k.scrollIntoView():scrollTo(0,0)}}else await Ce();o.promise=null,o.id=null,w=!0,m.props.page&&(q=m.props.page),l&&l(),_=!1}function Ie(a){var l,h;r=a.state;const i=document.querySelector("style[data-sveltekit]");i&&i.remove(),q=a.props.page;const p=se();D=new Pt({target:n,props:{...a.props,stores:W},hydrate:!0}),p();const s={from:null,to:ae("to",{params:r.params,routeId:(h=(l=r.route)==null?void 0:l.id)!=null?h:null,url:new URL(location.href)}),type:"load"};d.after_navigate.forEach(m=>m(s)),f=!0}async function Q({url:a,params:i,branch:p,status:s,error:l,route:h,form:m}){var A;const v=p.filter(Boolean),E={type:"loaded",state:{url:a,params:i,branch:p,error:l,route:h,session_id:b},props:{components:v.map($=>$.node.component)}};m!==void 0&&(E.props.form=m);let y={},g=!q;for(let $=0;$<v.length;$+=1){const j=v[$];y={...y,...j.data},(g||!r.branch.some(U=>U===j))&&(E.props[`data_${$}`]=y,g=g||Object.keys((A=j.data)!=null?A:{}).length>0)}if(g||(g=Object.keys(q.data).length!==Object.keys(y).length),!r.url||a.href!==r.url.href||r.error!==l||g){E.props.page={error:l,params:i,routeId:h&&h.id,status:s,url:a,data:g?y:q.data};const $=(j,U)=>{Object.defineProperty(E.props.page,j,{get:()=>{throw new Error(`$page.${j} has been replaced by $page.url.${U}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function ue({loader:a,parent:i,url:p,params:s,routeId:l,server_data_node:h}){var y,g,k,A,$;let m=null;const v={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((y=E.shared)!=null&&y.load){let j=function(...u){for(const L of u){const{href:P}=new URL(L,p);v.dependencies.add(P)}};const U={};for(const u in s)Object.defineProperty(U,u,{get(){return v.params.add(u),s[u]},enumerable:!0});const B={routeId:l,params:U,data:(g=h==null?void 0:h.data)!=null?g:null,url:pt(p,()=>{v.url=!0}),async fetch(u,L){let P;typeof u=="string"?P=u:(P=u.url,L={body:u.method==="GET"||u.method==="HEAD"?void 0:await u.blob(),cache:u.cache,credentials:u.credentials,headers:u.headers,integrity:u.integrity,keepalive:u.keepalive,method:u.method,mode:u.mode,redirect:u.redirect,referrer:u.referrer,referrerPolicy:u.referrerPolicy,signal:u.signal,...L});const O=new URL(P,p).href;return j(O),f?gt(O,L):_t(P,O,L)},setHeaders:()=>{},depends:j,parent(){return v.parent=!0,i()}};Object.defineProperties(B,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),m=(k=await E.shared.load.call(null,B))!=null?k:null}return{node:E,loader:a,server:h,shared:(A=E.shared)!=null&&A.load?{type:"data",data:m,uses:v}:null,data:($=m!=null?m:h==null?void 0:h.data)!=null?$:null}}function Ae(a,i,p){if(R)return!0;if(!p)return!1;if(p.parent&&i||a.url&&p.url)return!0;for(const s of a.params)if(p.params.has(s))return!0;for(const s of p.dependencies)if(c.some(l=>l(new URL(s))))return!0;return!1}function de(a,i){var p,s;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((s=a.uses.params)!=null?s:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&i!=null?i:null}async function je({id:a,invalidating:i,url:p,params:s,route:l}){var B;if(o.id===a&&o.promise)return o.promise;const{errors:h,layouts:m,leaf:v}=l,E=r.url&&{url:a!==r.url.pathname+r.url.search,params:Object.keys(s).filter(u=>r.params[u]!==s[u])},y=[...m,v];h.forEach(u=>u==null?void 0:u().catch(()=>{})),y.forEach(u=>u==null?void 0:u[1]().catch(()=>{}));let g=null;const k=y.reduce((u,L,P)=>{var G;const O=r.branch[P],ee=!!(L!=null&&L[0])&&((O==null?void 0:O.loader)!==L[1]||Ae(E,u.some(Boolean),(G=O.server)==null?void 0:G.uses));return u.push(ee),u},[]);if(k.some(Boolean)){try{g=await Fe(p,k)}catch(u){return re({status:500,error:u,url:p,routeId:l.id})}if(g.type==="redirect")return g}const A=g==null?void 0:g.nodes;let $=!1;const j=y.map(async(u,L)=>{var me,De;if(!u)return;const P=r.branch[L],O=(me=A==null?void 0:A[L])!=null?me:null;if((!O||O.type==="skip")&&u[1]===(P==null?void 0:P.loader)&&!Ae(E,$,(De=P.shared)==null?void 0:De.uses))return P;if($=!0,(O==null?void 0:O.type)==="error")throw O;return ue({loader:u[1],url:p,params:s,routeId:l.id,parent:async()=>{var Ne;const Ve={};for(let _e=0;_e<L;_e+=1)Object.assign(Ve,(Ne=await j[_e])==null?void 0:Ne.data);return Ve},server_data_node:de(O,P==null?void 0:P.server)})});for(const u of j)u.catch(()=>{});const U=[];for(let u=0;u<y.length;u+=1)if(y[u])try{U.push(await j[u])}catch(L){if(L instanceof ze)return{type:"redirect",location:L.location};let P=500,O;for(A!=null&&A.includes(L)?(P=(B=L.status)!=null?B:P,O=L.error):L instanceof we?(P=L.status,O=L.body):O=Ge(L,{params:s,url:p,routeId:l.id});u--;)if(h[u]){let ee,G=u;for(;!U[G];)G-=1;try{return ee={node:await h[u](),loader:h[u],data:{},server:null,shared:null},await Q({url:p,params:s,branch:U.slice(0,G+1).concat(ee),status:P,error:O,route:l})}catch{continue}}await Z(p);return}else U.push(void 0);return await Q({url:p,params:s,branch:U,status:200,error:null,route:l,form:i?void 0:null})}async function re({status:a,error:i,url:p,routeId:s}){var y;const l={},h=await Ee();let m=null;if(h.server)try{const g=await Fe(p,[!0]);if(g.type!=="data"||g.nodes[0]&&g.nodes[0].type!=="data")throw 0;m=(y=g.nodes[0])!=null?y:null}catch{await Z(p);return}const v=await ue({loader:Ee,url:p,params:l,routeId:s,parent:()=>Promise.resolve({}),server_data_node:de(m)}),E={node:await ke(),loader:ke,shared:null,server:null,data:null};return await Q({url:p,params:l,branch:[v,E],status:a,error:i instanceof we?i.body:Ge(i,{url:p,params:l,routeId:null}),route:null})}function pe(a,i){if(Ue(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const s of ne){const l=s.exec(p);if(l){const h=new URL(a.origin+ft(a.pathname,t)+a.search+a.hash);return{id:h.pathname+h.search,invalidating:i,route:s,params:ut(l),url:h}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function he({url:a,scroll:i,keepfocus:p,redirect_chain:s,details:l,type:h,delta:m,accepted:v,blocked:E}){var $,j,U,B;let y=!1;const g=pe(a,!1),k={from:ae("from",{params:r.params,routeId:(j=($=r.route)==null?void 0:$.id)!=null?j:null,url:r.url}),to:ae("to",{params:(U=g==null?void 0:g.params)!=null?U:null,routeId:(B=g==null?void 0:g.route.id)!=null?B:null,url:a}),type:h};m!==void 0&&(k.delta=m);const A={...k,cancel:()=>{y=!0}};if(d.before_navigate.forEach(u=>u(A)),y){E();return}ye(I),v(),f&&W.navigating.set(k),await Oe(g,a,s,{scroll:i,keepfocus:p,details:l},()=>{d.after_navigate.forEach(u=>u(k)),W.navigating.set(null)})}function Z(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(d.after_navigate.push(a),()=>{const i=d.after_navigate.indexOf(a);d.after_navigate.splice(i,1)}))},before_navigate:a=>{be(()=>(d.before_navigate.push(a),()=>{const i=d.before_navigate.indexOf(a);d.before_navigate.splice(i,1)}))},disable_scroll_handling:()=>{(_||!f)&&(w=!1)},goto:(a,i={})=>fe(a,i,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")c.push(a);else{const{href:i}=new URL(a,location.href);c.push(p=>p.href===i)}return $e()},invalidateAll:()=>(R=!0,$e()),prefetch:async a=>{const i=new URL(a,qe(document));await Pe(i)},prefetch_routes:async a=>{const p=(a?ne.filter(s=>a.some(l=>s.exec(l))):ne).map(s=>Promise.all([...s.layouts,s.leaf].map(l=>l==null?void 0:l[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const i=new URL(location.href),{branch:p,route:s}=r;if(!s)return;let l=r.branch.length;for(;l--;)if(s.errors[l]){let h,m=l;for(;!p[m];)m-=1;try{h={node:await s.errors[l](),loader:s.errors[l],data:{},server:null,shared:null};const v=await Q({url:i,params:r.params,branch:p.slice(0,m+1).concat(h),status:500,error:a.error,route:s});r=v.state;const E=se();D.$set(v.props),E();return}catch{continue}}}else if(a.type==="redirect")fe(a.location,{},[]);else{const i={form:a.data};a.status!==q.status&&(i.page={...q,status:a.status});const p=se();D.$set(i),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",s=>{var m,v;let l=!1;const h={from:ae("from",{params:r.params,routeId:(v=(m=r.route)==null?void 0:m.id)!=null?v:null,url:r.url}),to:null,type:"unload",cancel:()=>l=!0};d.before_navigate.forEach(E=>E(h)),l?(s.preventDefault(),s.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){ye(I);try{sessionStorage[We]=JSON.stringify(te)}catch{}}});const a=s=>{const{url:l,options:h}=Be(s);if(l&&h.prefetch){if(Ue(l))return;Pe(l)}};let i;const p=s=>{clearTimeout(i),i=setTimeout(()=>{var l;(l=s.target)==null||l.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",s=>{if(s.button||s.which!==1||s.metaKey||s.ctrlKey||s.shiftKey||s.altKey||s.defaultPrevented)return;const{a:l,url:h,options:m}=Be(s);if(!l||!h)return;const v=l instanceof SVGAElement;if(!v&&!(h.protocol==="https:"||h.protocol==="http:"))return;const E=(l.getAttribute("rel")||"").split(/\s+/);if(l.hasAttribute("download")||E.includes("external")||m.reload||(v?l.target.baseVal:l.target))return;const[y,g]=h.href.split("#");if(g!==void 0&&y===location.href.split("#")[0]){C=!0,ye(I),W.page.set({...q,url:h}),W.page.notify();return}he({url:h,scroll:m.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:h.href===location.href},accepted:()=>s.preventDefault(),blocked:()=>s.preventDefault(),type:"link"})}),addEventListener("popstate",s=>{if(s.state){if(s.state[J]===I)return;const l=s.state[J]-I;he({url:new URL(location.href),scroll:te[s.state[J]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{I=s.state[J]},blocked:()=>{history.go(-l)},type:"popstate",delta:l})}}),addEventListener("hashchange",()=>{C&&(C=!1,history.replaceState({...history.state,[J]:++I},"",location.href))});for(const s of document.querySelectorAll("link"))s.rel==="icon"&&(s.href=s.href);addEventListener("pageshow",s=>{s.persisted&&W.navigating.set(null)})},_hydrate:async({status:a,error:i,node_ids:p,params:s,routeId:l,data:h,form:m})=>{var y;const v=new URL(location.href);let E;try{const g=p.map(async(k,A)=>{const $=h[A];return ue({loader:ce[k],url:v,params:s,routeId:l,parent:async()=>{const j={};for(let U=0;U<A;U+=1)Object.assign(j,(await g[U]).data);return j},server_data_node:de($)})});E=await Q({url:v,params:s,branch:await Promise.all(g),status:a,error:i,form:m,route:(y=ne.find(k=>k.id===l))!=null?y:null})}catch(g){const k=g;if(k instanceof ze){await Z(new URL(g.location,location.href));return}E=await re({status:k instanceof we?k.status:500,error:k,url:v,routeId:l})}Ie(E)}}}let Dt=1;async function Fe(n,e){const t=new URL(n);t.pathname=n.pathname.replace(/\/$/,"")+Ut,t.searchParams.set("__invalid",e.map(o=>o?"y":"n").join("")),t.searchParams.set("__id",String(Dt++)),await T(()=>import(t.href),[],import.meta.url);const c=window.__sveltekit_data;return delete window.__sveltekit_data,c}function Ge(n,e){var t;return(t=jt.handleError({error:n,event:e}))!=null?t:{message:"Internal Error"}}const Vt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function ae(n,e){for(const t of Vt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${n}.${t} should now be ${n}.url.${t}`)}});return e}function se(){return()=>{}}async function Bt({env:n,hydrate:e,paths:t,target:c,trailing_slash:o}){it(t);const d=Tt({target:c,base:t.base,trailing_slash:o});ot({client:d}),e?await d._hydrate(e):d.goto(location.href,{replaceState:!0}),d._start_router()}export{Bt as start};
