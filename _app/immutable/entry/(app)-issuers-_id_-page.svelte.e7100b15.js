import{S as Oe,i as Ee,s as Ke,y,a as S,z as b,c as L,A as w,b as h,g as c,d,B as v,h as _,a1 as Me,e as le,v as te,f as se,k as ie,l as ne,m as fe,n as oe,J as Pe,q as ue,r as pe,u as Te}from"../chunks/index.6847575b.js";import{b as N}from"../chunks/paths.26aeeb05.js";import{p as Be}from"../chunks/stores.45a7037f.js";import{M as He,I as Ce,e as T,H as me,F as Ue,C as Fe,S as Ve}from"../chunks/main.0562ac1a.js";import{P as Ge}from"../chunks/page.2972ba9c.js";import{n as ze,T as je}from"../chunks/index.7b42fc59.js";import{P as he}from"../chunks/public.d1f81b30.js";import{f as P,b as ye}from"../chunks/string-formatting.ca7775a2.js";import{E as Je}from"../chunks/ExternalLink.6f14238f.js";import{S as Qe}from"../chunks/index.b15051cd.js";function be(n,s,l){const t=n.slice();return t[0]=s[l],t}function we(n,s,l){const t=n.slice();return t[0]=s[l],t}function Re(n){let s=n[1].reference+"",l;return{c(){l=ue(s)},l(t){l=pe(t,s)},m(t,r){h(t,l,r)},p(t,r){r&2&&s!==(s=t[1].reference+"")&&Te(l,s)},d(t){t&&_(l)}}}function ve(n){let s,l;return s=new Ce({props:{icon:Fe,$$slots:{default:[We]},$$scope:{ctx:n}}}),{c(){y(s.$$.fragment)},l(t){b(s.$$.fragment,t)},m(t,r){w(s,t,r),l=!0},p(t,r){const e={};r&134217984&&(e.$$scope={dirty:r,ctx:t}),s.$set(e)},i(t){l||(c(s.$$.fragment,t),l=!0)},o(t){d(s.$$.fragment,t),l=!1},d(t){v(s,t)}}}function We(n){let s,l=new Date(n[8]).toLocaleDateString()+"",t;return{c(){s=ue("Updated on "),t=ue(l)},l(r){s=pe(r,"Updated on "),t=pe(r,l)},m(r,e){h(r,s,e),h(r,t,e)},p(r,e){e&256&&l!==(l=new Date(r[8]).toLocaleDateString()+"")&&Te(t,l)},d(r){r&&_(s),r&&_(t)}}}function Xe(n){let s,l,t,r;s=new Ce({props:{href:n[1].reference,icon:Je,$$slots:{default:[Re]},$$scope:{ctx:n}}});let e=n[8]&&ve(n);return{c(){y(s.$$.fragment),l=S(),e&&e.c(),t=le()},l(a){b(s.$$.fragment,a),l=L(a),e&&e.l(a),t=le()},m(a,o){w(s,a,o),h(a,l,o),e&&e.m(a,o),h(a,t,o),r=!0},p(a,o){const i={};o&2&&(i.href=a[1].reference),o&134217730&&(i.$$scope={dirty:o,ctx:a}),s.$set(i),a[8]?e?(e.p(a,o),o&256&&c(e,1)):(e=ve(a),e.c(),c(e,1),e.m(t.parentNode,t)):e&&(te(),d(e,1,1,()=>{e=null}),se())},i(a){r||(c(s.$$.fragment,a),c(e),r=!0)},o(a){d(s.$$.fragment,a),d(e),r=!1},d(a){v(s,a),a&&_(l),e&&e.d(a),a&&_(t)}}}function ke(n){let s,l,t,r,e,a,o=n[5],i=[];for(let f=0;f<o.length;f+=1)i[f]=Se(we(n,o,f));const $=f=>d(i[f],1,1,()=>{i[f]=null});return t=new T({props:{$$slots:{default:[Ze]},$$scope:{ctx:n}}}),e=new T({props:{class:"sm:mx-0 divide-y divide-gray-200",$$slots:{default:[xe]},$$scope:{ctx:n}}}),{c(){s=ie("div");for(let f=0;f<i.length;f+=1)i[f].c();l=S(),y(t.$$.fragment),r=S(),y(e.$$.fragment),this.h()},l(f){s=ne(f,"DIV",{class:!0});var m=fe(s);for(let g=0;g<i.length;g+=1)i[g].l(m);m.forEach(_),l=L(f),b(t.$$.fragment,f),r=L(f),b(e.$$.fragment,f),this.h()},h(){oe(s,"class","grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none")},m(f,m){h(f,s,m);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(s,null);h(f,l,m),w(t,f,m),h(f,r,m),w(e,f,m),a=!0},p(f,m){if(m&32){o=f[5];let u;for(u=0;u<o.length;u+=1){const D=we(f,o,u);i[u]?(i[u].p(D,m),c(i[u],1)):(i[u]=Se(D),i[u].c(),c(i[u],1),i[u].m(s,null))}for(te(),u=o.length;u<i.length;u+=1)$(u);se()}const g={};m&134217754&&(g.$$scope={dirty:m,ctx:f}),t.$set(g);const k={};m&134218755&&(k.$$scope={dirty:m,ctx:f}),e.$set(k)},i(f){if(!a){for(let m=0;m<o.length;m+=1)c(i[m]);c(t.$$.fragment,f),c(e.$$.fragment,f),a=!0}},o(f){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)d(i[m]);d(t.$$.fragment,f),d(e.$$.fragment,f),a=!1},d(f){f&&_(s),Pe(i,f),f&&_(l),v(t,f),f&&_(r),v(e,f)}}}function Ye(n){let s,l,t;return s=new Ve({props:{data:n[0]}}),{c(){y(s.$$.fragment),l=S()},l(r){b(s.$$.fragment,r),l=L(r)},m(r,e){w(s,r,e),h(r,l,e),t=!0},p(r,e){const a={};e&32&&(a.data=r[0]),s.$set(a)},i(r){t||(c(s.$$.fragment,r),t=!0)},o(r){d(s.$$.fragment,r),t=!1},d(r){v(s,r),r&&_(l)}}}function Se(n){let s,l;return s=new T({props:{class:"relative px-4 py-5 sm:p-6",$$slots:{default:[Ye]},$$scope:{ctx:n}}}),{c(){y(s.$$.fragment)},l(t){b(s.$$.fragment,t)},m(t,r){w(s,t,r),l=!0},p(t,r){const e={};r&134217760&&(e.$$scope={dirty:r,ctx:t}),s.$set(e)},i(t){l||(c(s.$$.fragment,t),l=!0)},o(t){d(s.$$.fragment,t),l=!1},d(t){v(s,t)}}}function Ze(n){let s,l,t,r,e;return s=new me({props:{title:"TVL History",subtitle:"The history of total value locked (TVL) in "+n[1].name+"."}}),r=new Ue({props:{formatter:P,data:n[3].count>0?n[4].history.map(De):[{date:new Date().toISOString(),value:0}]}}),{c(){y(s.$$.fragment),l=S(),t=ie("div"),y(r.$$.fragment),this.h()},l(a){b(s.$$.fragment,a),l=L(a),t=ne(a,"DIV",{class:!0});var o=fe(t);b(r.$$.fragment,o),o.forEach(_),this.h()},h(){oe(t,"class","mt-5 sm:mt-6 h-full overflow-hidden")},m(a,o){w(s,a,o),h(a,l,o),h(a,t,o),w(r,t,null),e=!0},p(a,o){const i={};o&2&&(i.subtitle="The history of total value locked (TVL) in "+a[1].name+"."),s.$set(i);const $={};o&24&&($.data=a[3].count>0?a[4].history.map(De):[{date:new Date().toISOString(),value:0}]),r.$set($)},i(a){e||(c(s.$$.fragment,a),c(r.$$.fragment,a),e=!0)},o(a){d(s.$$.fragment,a),d(r.$$.fragment,a),e=!1},d(a){v(s,a),a&&_(l),a&&_(t),v(r)}}}function xe(n){let s,l,t,r;return s=new me({props:{title:"Issued Assets",subtitle:"List of assets issued by "+n[1].name+"."}}),t=new je({props:{data:n[0],columns:[{id:"name",title:"Name",class:"font-medium",link:!0},{id:"price",title:"Price",class:"hidden sm:table-cell"},{id:"supply",title:"Supply",class:"hidden sm:table-cell"},{id:"mcap",title:"Market Cap",class:""}],rows:n[10].map(n[20]),sort:[{by:"mcap"}],class:"mt-5 sm:mt-6"}}),{c(){y(s.$$.fragment),l=S(),y(t.$$.fragment)},l(e){b(s.$$.fragment,e),l=L(e),b(t.$$.fragment,e)},m(e,a){w(s,e,a),h(e,l,a),w(t,e,a),r=!0},p(e,a){const o={};a&2&&(o.subtitle="List of assets issued by "+e[1].name+"."),s.$set(o);const i={};a&1&&(i.data=e[0]),a&1024&&(i.rows=e[10].map(e[20])),t.$set(i)},i(e){r||(c(s.$$.fragment,e),c(t.$$.fragment,e),r=!0)},o(e){d(s.$$.fragment,e),d(t.$$.fragment,e),r=!1},d(e){v(s,e),e&&_(l),v(t,e)}}}function Le(n){let s,l,t,r,e,a,o=n[6],i=[];for(let f=0;f<o.length;f+=1)i[f]=Ne(be(n,o,f));const $=f=>d(i[f],1,1,()=>{i[f]=null});return t=new T({props:{$$slots:{default:[tt]},$$scope:{ctx:n}}}),e=new T({props:{class:"sm:mx-0 divide-y divide-gray-200",$$slots:{default:[st]},$$scope:{ctx:n}}}),{c(){s=ie("div");for(let f=0;f<i.length;f+=1)i[f].c();l=S(),y(t.$$.fragment),r=S(),y(e.$$.fragment),this.h()},l(f){s=ne(f,"DIV",{class:!0});var m=fe(s);for(let g=0;g<i.length;g+=1)i[g].l(m);m.forEach(_),l=L(f),b(t.$$.fragment,f),r=L(f),b(e.$$.fragment,f),this.h()},h(){oe(s,"class","grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none")},m(f,m){h(f,s,m);for(let g=0;g<i.length;g+=1)i[g]&&i[g].m(s,null);h(f,l,m),w(t,f,m),h(f,r,m),w(e,f,m),a=!0},p(f,m){if(m&64){o=f[6];let u;for(u=0;u<o.length;u+=1){const D=be(f,o,u);i[u]?(i[u].p(D,m),c(i[u],1)):(i[u]=Ne(D),i[u].c(),c(i[u],1),i[u].m(s,null))}for(te(),u=o.length;u<i.length;u+=1)$(u);se()}const g={};m&134217750&&(g.$$scope={dirty:m,ctx:f}),t.$set(g);const k={};m&134218243&&(k.$$scope={dirty:m,ctx:f}),e.$set(k)},i(f){if(!a){for(let m=0;m<o.length;m+=1)c(i[m]);c(t.$$.fragment,f),c(e.$$.fragment,f),a=!0}},o(f){i=i.filter(Boolean);for(let m=0;m<i.length;m+=1)d(i[m]);d(t.$$.fragment,f),d(e.$$.fragment,f),a=!1},d(f){f&&_(s),Pe(i,f),f&&_(l),v(t,f),f&&_(r),v(e,f)}}}function et(n){let s,l,t;return s=new Ve({props:{data:n[0]}}),{c(){y(s.$$.fragment),l=S()},l(r){b(s.$$.fragment,r),l=L(r)},m(r,e){w(s,r,e),h(r,l,e),t=!0},p(r,e){const a={};e&64&&(a.data=r[0]),s.$set(a)},i(r){t||(c(s.$$.fragment,r),t=!0)},o(r){d(s.$$.fragment,r),t=!1},d(r){v(s,r),r&&_(l)}}}function Ne(n){let s,l;return s=new T({props:{class:"relative px-4 py-5 sm:p-6",$$slots:{default:[et]},$$scope:{ctx:n}}}),{c(){y(s.$$.fragment)},l(t){b(s.$$.fragment,t)},m(t,r){w(s,t,r),l=!0},p(t,r){const e={};r&134217792&&(e.$$scope={dirty:r,ctx:t}),s.$set(e)},i(t){l||(c(s.$$.fragment,t),l=!0)},o(t){d(s.$$.fragment,t),l=!1},d(t){v(s,t)}}}function tt(n){let s,l,t,r,e;return s=new me({props:{title:"LP History",subtitle:"The history of "+n[1].name+"'s liquidity provided by liquidity providers (LPs)."}}),r=new Ue({props:{formatter:P,data:n[2].count>0?n[4].history.map(Ie):[{date:new Date().toISOString(),value:0}]}}),{c(){y(s.$$.fragment),l=S(),t=ie("div"),y(r.$$.fragment),this.h()},l(a){b(s.$$.fragment,a),l=L(a),t=ne(a,"DIV",{class:!0});var o=fe(t);b(r.$$.fragment,o),o.forEach(_),this.h()},h(){oe(t,"class","mt-5 sm:mt-6 h-full overflow-hidden")},m(a,o){w(s,a,o),h(a,l,o),h(a,t,o),w(r,t,null),e=!0},p(a,o){const i={};o&2&&(i.subtitle="The history of "+a[1].name+"'s liquidity provided by liquidity providers (LPs)."),s.$set(i);const $={};o&20&&($.data=a[2].count>0?a[4].history.map(Ie):[{date:new Date().toISOString(),value:0}]),r.$set($)},i(a){e||(c(s.$$.fragment,a),c(r.$$.fragment,a),e=!0)},o(a){d(s.$$.fragment,a),d(r.$$.fragment,a),e=!1},d(a){v(s,a),a&&_(l),a&&_(t),v(r)}}}function st(n){let s,l,t,r;return s=new me({props:{title:"Issued LP Tokens",subtitle:"List of LP tokens issued by "+n[1].name+"."}}),t=new je({props:{data:n[0],columns:[{id:"name",title:"Name",class:"font-medium",link:!0},{id:"price",title:"Price",class:"hidden sm:table-cell"},{id:"supply",title:"Supply",class:"hidden sm:table-cell"},{id:"mcap",title:"Market Cap",class:""}],rows:n[9].map(n[21]),sort:[{by:"mcap"}],class:"mt-5 sm:mt-6"}}),{c(){y(s.$$.fragment),l=S(),y(t.$$.fragment)},l(e){b(s.$$.fragment,e),l=L(e),b(t.$$.fragment,e)},m(e,a){w(s,e,a),h(e,l,a),w(t,e,a),r=!0},p(e,a){const o={};a&2&&(o.subtitle="List of LP tokens issued by "+e[1].name+"."),s.$set(o);const i={};a&1&&(i.data=e[0]),a&512&&(i.rows=e[9].map(e[21])),t.$set(i)},i(e){r||(c(s.$$.fragment,e),c(t.$$.fragment,e),r=!0)},o(e){d(s.$$.fragment,e),d(t.$$.fragment,e),r=!1},d(e){v(s,e),e&&_(l),v(t,e)}}}function at(n){let s,l,t,r,e;s=new He({props:{title:n[1].name,iconUrl:n[11]?`${N}/${n[11].href}`:`${N}/default-icon.png`,$$slots:{default:[Xe]},$$scope:{ctx:n}}});let a=n[3].count>0&&ke(n),o=n[2].count>0&&Le(n);return{c(){y(s.$$.fragment),l=S(),a&&a.c(),t=S(),o&&o.c(),r=le()},l(i){b(s.$$.fragment,i),l=L(i),a&&a.l(i),t=L(i),o&&o.l(i),r=le()},m(i,$){w(s,i,$),h(i,l,$),a&&a.m(i,$),h(i,t,$),o&&o.m(i,$),h(i,r,$),e=!0},p(i,$){const f={};$&2&&(f.title=i[1].name),$&2048&&(f.iconUrl=i[11]?`${N}/${i[11].href}`:`${N}/default-icon.png`),$&134217986&&(f.$$scope={dirty:$,ctx:i}),s.$set(f),i[3].count>0?a?(a.p(i,$),$&8&&c(a,1)):(a=ke(i),a.c(),c(a,1),a.m(t.parentNode,t)):a&&(te(),d(a,1,1,()=>{a=null}),se()),i[2].count>0?o?(o.p(i,$),$&4&&c(o,1)):(o=Le(i),o.c(),c(o,1),o.m(r.parentNode,r)):o&&(te(),d(o,1,1,()=>{o=null}),se())},i(i){e||(c(s.$$.fragment,i),c(a),c(o),e=!0)},o(i){d(s.$$.fragment,i),d(a),d(o),e=!1},d(i){v(s,i),i&&_(l),a&&a.d(i),i&&_(t),o&&o.d(i),i&&_(r)}}}function rt(n){let s,l,t,r;return s=new Qe({props:{title:n[7].title,description:n[7].description,openGraph:{title:n[7].title,description:n[7].description,url:n[7].url,type:"website",images:[n[7].image]},twitter:{site:"@bcked_com",title:n[7].title,description:n[7].description,image:n[7].image.url,imageAlt:n[7].image.alt}}}),t=new Ge({props:{class:"px-0",$$slots:{default:[at]},$$scope:{ctx:n}}}),{c(){y(s.$$.fragment),l=S(),y(t.$$.fragment)},l(e){b(s.$$.fragment,e),l=L(e),b(t.$$.fragment,e)},m(e,a){w(s,e,a),h(e,l,a),w(t,e,a),r=!0},p(e,[a]){const o={};a&128&&(o.title=e[7].title),a&128&&(o.description=e[7].description),a&128&&(o.openGraph={title:e[7].title,description:e[7].description,url:e[7].url,type:"website",images:[e[7].image]}),a&128&&(o.twitter={site:"@bcked_com",title:e[7].title,description:e[7].description,image:e[7].image.url,imageAlt:e[7].image.alt}),s.$set(o);const i={};a&134221695&&(i.$$scope={dirty:a,ctx:e}),t.$set(i)},i(e){r||(c(s.$$.fragment,e),c(t.$$.fragment,e),r=!0)},o(e){d(s.$$.fragment,e),d(t.$$.fragment,e),r=!1},d(e){v(s,e),e&&_(l),v(t,e)}}}const De=n=>({date:n.timestamp,value:n.assets.tvl}),Ie=n=>({date:n.timestamp,value:n.lps.tvl});function lt(n,s,l){let t,r,e,a,o,i,$,f,m,g,k,u,D,ce,$e,de,ae;Me(n,Be,p=>l(19,ae=p));let{data:I}=s,re,ge=[],_e=[];const Ae=p=>{var C,U,V,j,A,q,O,E,K,M,B,H,F,G,z,J,Q,R,W,X,Y,Z,x,ee;return{name:{text:p.details.name,value:p.details.name,icon:`${N}/assets/${p.details.id}/icon.svg`},"name-path":{text:`${N}/assets/${p.details.id}`,value:`${N}/assets/${p.details.id}`},price:{text:(V=(U=(C=p.history)==null?void 0:C.at(-1))==null?void 0:U.price)!=null&&V.usd?P(((q=(A=(j=p.history)==null?void 0:j.at(-1))==null?void 0:A.price)==null?void 0:q.usd)??0):"UNK",value:(K=(E=(O=p.history)==null?void 0:O.at(-1))==null?void 0:E.price)==null?void 0:K.usd},supply:{text:(H=(B=(M=p.history)==null?void 0:M.at(-1))==null?void 0:B.supply)!=null&&H.total?ye(((z=(G=(F=p.history)==null?void 0:F.at(-1))==null?void 0:G.supply)==null?void 0:z.total)??0):"UNK",value:(R=(Q=(J=p.history)==null?void 0:J.at(-1))==null?void 0:Q.supply)==null?void 0:R.total},mcap:{text:(X=(W=p.history)==null?void 0:W.at(-1))!=null&&X.mcap?P(((Z=(Y=p.history)==null?void 0:Y.at(-1))==null?void 0:Z.mcap)??0):"UNK",value:(ee=(x=p.history)==null?void 0:x.at(-1))==null?void 0:ee.mcap}}},qe=p=>{var C,U,V,j,A,q,O,E,K,M,B,H,F,G,z,J,Q,R,W,X,Y,Z,x,ee;return{name:{text:p.details.name,value:p.details.name,icon:`${N}/assets/${p.details.id}/icon.svg`},"name-path":{text:`${N}/assets/${p.details.id}`,value:`${N}/assets/${p.details.id}`},price:{text:(V=(U=(C=p.history)==null?void 0:C.at(-1))==null?void 0:U.price)!=null&&V.usd?P(((q=(A=(j=p.history)==null?void 0:j.at(-1))==null?void 0:A.price)==null?void 0:q.usd)??0):"UNK",value:(K=(E=(O=p.history)==null?void 0:O.at(-1))==null?void 0:E.price)==null?void 0:K.usd},supply:{text:(H=(B=(M=p.history)==null?void 0:M.at(-1))==null?void 0:B.supply)!=null&&H.total?ye(((z=(G=(F=p.history)==null?void 0:F.at(-1))==null?void 0:G.supply)==null?void 0:z.total)??0):"UNK",value:(R=(Q=(J=p.history)==null?void 0:J.at(-1))==null?void 0:Q.supply)==null?void 0:R.total},mcap:{text:(X=(W=p.history)==null?void 0:W.at(-1))!=null&&X.mcap?P(((Z=(Y=p.history)==null?void 0:Y.at(-1))==null?void 0:Z.mcap)??0):"UNK",value:(ee=(x=p.history)==null?void 0:x.at(-1))==null?void 0:ee.mcap}}};return n.$$set=p=>{"data"in p&&l(0,I=p.data)},n.$$.update=()=>{n.$$.dirty&1&&l(17,{issuersDetails:t,issuersStats:r,issuersIcons:e,assetsDetails:a,graphData:o}=I,t,(l(16,r),l(0,I)),(l(15,e),l(0,I)),(l(18,o),l(0,I))),n.$$.dirty&524288&&l(13,i=ae.params.id),n.$$.dirty&262144&&l(12,re=ze(o)),n.$$.dirty&139264&&l(1,$=t[i]),n.$$.dirty&73728&&l(4,f=r[i]),n.$$.dirty&40960&&l(11,m=e[i]),n.$$.dirty&16&&l(14,g=f.history.at(-1)),n.$$.dirty&16384&&l(3,{assets:k,lps:u}=g,k,(l(2,u),l(14,g),l(4,f),l(16,r),l(13,i),l(0,I),l(19,ae))),n.$$.dirty&4104&&l(10,D=Object.keys(k.mcaps).map(p=>re.getNode(p).data)),n.$$.dirty&4100&&l(9,ce=Object.keys(u.mcaps).map(p=>re.getNode(p).data)),n.$$.dirty&16384&&l(8,$e=g.timestamp),n.$$.dirty&8&&l(5,ge=[{name:"Number of Assets",value:k.count.toString(),type:"standard"},{name:"Total Value Locked (TVL)",value:k.tvl,type:"currency"},{name:"24h Change",value:k.rate24h,type:"change"},{name:"30d Change",value:k.rate30d,type:"change"}]),n.$$.dirty&4&&l(6,_e=[{name:"Number of LP Tokens",value:u.count.toString(),type:"standard"},{name:"Total Value Locked (TVL)",value:P(u.tvl),type:"currency"},{name:"24h Change",value:u.rate24h,type:"change"},{name:"30d Change",value:u.rate30d,type:"change"}]),n.$$.dirty&8194&&l(7,de={title:`${$.name}'s assets`,description:`See all assets of ${$.name}. Learn more ...`,url:`${he}/issuers/${i}`,image:{url:`${he}/issuers/${i}/preview.jpg`,width:1200,height:630,alt:`Preview of ${$.name}'s detail view.`}})},[I,$,u,k,f,ge,_e,de,$e,ce,D,m,re,i,g,e,r,t,o,ae,Ae,qe]}class gt extends Oe{constructor(s){super(),Ee(this,s,lt,rt,Ke,{data:0})}}export{gt as default};
