import{S as Oe,i as Ke,s as Be,y as v,a as L,z as y,c as S,A as b,b as h,g as $,d,B as w,h as g,a1 as He,e as me,v as ne,f as fe,k as P,l as U,m as j,n as A,J as Pe,q as ce,r as $e,u as Ue}from"../chunks/index.3647f7f4.js";import{b as D}from"../chunks/paths.c3f4a8c8.js";import{p as Fe}from"../chunks/stores.4b2627b2.js";import{M as Ge,I as je,H as pe,F as Ae,C as Je,S as Ee}from"../chunks/main.1bb10777.js";import{M as V}from"../chunks/main.2b7b246d.js";import{P as ze}from"../chunks/page.03da4228.js";import{f as Qe,T as qe}from"../chunks/index.30642f40.js";import{P as ye}from"../chunks/public.d1f81b30.js";import{f as I,b as be}from"../chunks/string-formatting.ca7775a2.js";import{E as Re}from"../chunks/ExternalLink.f7713a66.js";import{S as We}from"../chunks/index.816323cb.js";function we(f,t,l){const s=f.slice();return s[0]=t[l],s}function ke(f,t,l){const s=f.slice();return s[0]=t[l],s}function Xe(f){let t=f[1].reference+"",l;return{c(){l=ce(t)},l(s){l=$e(s,t)},m(s,a){h(s,l,a)},p(s,a){a&2&&t!==(t=s[1].reference+"")&&Ue(l,t)},d(s){s&&g(l)}}}function Le(f){let t,l;return t=new je({props:{icon:Je,$$slots:{default:[Ye]},$$scope:{ctx:f}}}),{c(){v(t.$$.fragment)},l(s){y(t.$$.fragment,s)},m(s,a){b(t,s,a),l=!0},p(s,a){const r={};a&134217984&&(r.$$scope={dirty:a,ctx:s}),t.$set(r)},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){d(t.$$.fragment,s),l=!1},d(s){w(t,s)}}}function Ye(f){let t,l=new Date(f[8]).toLocaleDateString()+"",s;return{c(){t=ce("Updated on "),s=ce(l)},l(a){t=$e(a,"Updated on "),s=$e(a,l)},m(a,r){h(a,t,r),h(a,s,r)},p(a,r){r&256&&l!==(l=new Date(a[8]).toLocaleDateString()+"")&&Ue(s,l)},d(a){a&&g(t),a&&g(s)}}}function Ze(f){let t,l,s,a;t=new je({props:{href:f[1].reference,icon:Re,$$slots:{default:[Xe]},$$scope:{ctx:f}}});let r=f[8]&&Le(f);return{c(){v(t.$$.fragment),l=L(),r&&r.c(),s=me()},l(e){y(t.$$.fragment,e),l=S(e),r&&r.l(e),s=me()},m(e,n){b(t,e,n),h(e,l,n),r&&r.m(e,n),h(e,s,n),a=!0},p(e,n){const i={};n&2&&(i.href=e[1].reference),n&134217730&&(i.$$scope={dirty:n,ctx:e}),t.$set(i),e[8]?r?(r.p(e,n),n&256&&$(r,1)):(r=Le(e),r.c(),$(r,1),r.m(s.parentNode,s)):r&&(ne(),d(r,1,1,()=>{r=null}),fe())},i(e){a||($(t.$$.fragment,e),$(r),a=!0)},o(e){d(t.$$.fragment,e),d(r),a=!1},d(e){w(t,e),e&&g(l),r&&r.d(e),e&&g(s)}}}function Se(f){let t,l,s,a,r,e,n=f[5],i=[];for(let o=0;o<n.length;o+=1)i[o]=De(ke(f,n,o));const p=o=>d(i[o],1,1,()=>{i[o]=null});return s=new V({props:{$$slots:{default:[et]},$$scope:{ctx:f}}}),r=new V({props:{class:"sm:mx-0 divide-y divide-gray-200",$$slots:{default:[tt]},$$scope:{ctx:f}}}),{c(){t=P("div");for(let o=0;o<i.length;o+=1)i[o].c();l=L(),v(s.$$.fragment),a=L(),v(r.$$.fragment),this.h()},l(o){t=U(o,"DIV",{class:!0});var u=j(t);for(let _=0;_<i.length;_+=1)i[_].l(u);u.forEach(g),l=S(o),y(s.$$.fragment,o),a=S(o),y(r.$$.fragment,o),this.h()},h(){A(t,"class","grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none")},m(o,u){h(o,t,u);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(t,null);h(o,l,u),b(s,o,u),h(o,a,u),b(r,o,u),e=!0},p(o,u){if(u&32){n=o[5];let m;for(m=0;m<n.length;m+=1){const N=ke(o,n,m);i[m]?(i[m].p(N,u),$(i[m],1)):(i[m]=De(N),i[m].c(),$(i[m],1),i[m].m(t,null))}for(ne(),m=n.length;m<i.length;m+=1)p(m);fe()}const _={};u&134217754&&(_.$$scope={dirty:u,ctx:o}),s.$set(_);const k={};u&134218755&&(k.$$scope={dirty:u,ctx:o}),r.$set(k)},i(o){if(!e){for(let u=0;u<n.length;u+=1)$(i[u]);$(s.$$.fragment,o),$(r.$$.fragment,o),e=!0}},o(o){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)d(i[u]);d(s.$$.fragment,o),d(r.$$.fragment,o),e=!1},d(o){o&&g(t),Pe(i,o),o&&g(l),w(s,o),o&&g(a),w(r,o)}}}function xe(f){let t,l,s;return t=new Ee({props:{data:f[0]}}),{c(){v(t.$$.fragment),l=L()},l(a){y(t.$$.fragment,a),l=S(a)},m(a,r){b(t,a,r),h(a,l,r),s=!0},p(a,r){const e={};r&32&&(e.data=a[0]),t.$set(e)},i(a){s||($(t.$$.fragment,a),s=!0)},o(a){d(t.$$.fragment,a),s=!1},d(a){w(t,a),a&&g(l)}}}function De(f){let t,l;return t=new V({props:{class:"relative px-4 py-5 sm:p-6",$$slots:{default:[xe]},$$scope:{ctx:f}}}),{c(){v(t.$$.fragment)},l(s){y(t.$$.fragment,s)},m(s,a){b(t,s,a),l=!0},p(s,a){const r={};a&134217760&&(r.$$scope={dirty:a,ctx:s}),t.$set(r)},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){d(t.$$.fragment,s),l=!1},d(s){w(t,s)}}}function et(f){let t,l,s,a,r;return t=new pe({props:{title:"TVL History",subtitle:"The history of total value locked (TVL) in "+f[1].name+"."}}),a=new Ae({props:{formatter:I,data:f[3].count>0?f[4].history.map(Ie):[{date:new Date().toISOString(),value:0}]}}),{c(){v(t.$$.fragment),l=L(),s=P("div"),v(a.$$.fragment),this.h()},l(e){y(t.$$.fragment,e),l=S(e),s=U(e,"DIV",{class:!0});var n=j(s);y(a.$$.fragment,n),n.forEach(g),this.h()},h(){A(s,"class","mt-5 sm:mt-6 h-full overflow-hidden")},m(e,n){b(t,e,n),h(e,l,n),h(e,s,n),b(a,s,null),r=!0},p(e,n){const i={};n&2&&(i.subtitle="The history of total value locked (TVL) in "+e[1].name+"."),t.$set(i);const p={};n&24&&(p.data=e[3].count>0?e[4].history.map(Ie):[{date:new Date().toISOString(),value:0}]),a.$set(p)},i(e){r||($(t.$$.fragment,e),$(a.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),d(a.$$.fragment,e),r=!1},d(e){w(t,e),e&&g(l),e&&g(s),w(a)}}}function tt(f){let t,l,s,a,r;return t=new pe({props:{title:"Issued Assets",subtitle:"List of assets issued by "+f[1].name+"."}}),a=new qe({props:{data:f[0],columns:[{id:"name",title:"Name",class:"font-medium",link:!0},{id:"price",title:"Price",class:""},{id:"supply",title:"Supply",class:""},{id:"mcap",title:"Market Cap",class:""}],rows:f[10].map(f[20]),sort:[{by:"mcap"}],class:""}}),{c(){v(t.$$.fragment),l=L(),s=P("div"),v(a.$$.fragment),this.h()},l(e){y(t.$$.fragment,e),l=S(e),s=U(e,"DIV",{class:!0});var n=j(s);y(a.$$.fragment,n),n.forEach(g),this.h()},h(){A(s,"class","mt-5 sm:mt-6")},m(e,n){b(t,e,n),h(e,l,n),h(e,s,n),b(a,s,null),r=!0},p(e,n){const i={};n&2&&(i.subtitle="List of assets issued by "+e[1].name+"."),t.$set(i);const p={};n&1&&(p.data=e[0]),n&1024&&(p.rows=e[10].map(e[20])),a.$set(p)},i(e){r||($(t.$$.fragment,e),$(a.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),d(a.$$.fragment,e),r=!1},d(e){w(t,e),e&&g(l),e&&g(s),w(a)}}}function Ne(f){let t,l,s,a,r,e,n=f[6],i=[];for(let o=0;o<n.length;o+=1)i[o]=Te(we(f,n,o));const p=o=>d(i[o],1,1,()=>{i[o]=null});return s=new V({props:{$$slots:{default:[at]},$$scope:{ctx:f}}}),r=new V({props:{class:"sm:mx-0 divide-y divide-gray-200",$$slots:{default:[rt]},$$scope:{ctx:f}}}),{c(){t=P("div");for(let o=0;o<i.length;o+=1)i[o].c();l=L(),v(s.$$.fragment),a=L(),v(r.$$.fragment),this.h()},l(o){t=U(o,"DIV",{class:!0});var u=j(t);for(let _=0;_<i.length;_+=1)i[_].l(u);u.forEach(g),l=S(o),y(s.$$.fragment,o),a=S(o),y(r.$$.fragment,o),this.h()},h(){A(t,"class","grid grid-cols-2 gap-[0.1rem] sm:gap-4 md:grid-cols-4 shadow sm:shadow-none")},m(o,u){h(o,t,u);for(let _=0;_<i.length;_+=1)i[_]&&i[_].m(t,null);h(o,l,u),b(s,o,u),h(o,a,u),b(r,o,u),e=!0},p(o,u){if(u&64){n=o[6];let m;for(m=0;m<n.length;m+=1){const N=we(o,n,m);i[m]?(i[m].p(N,u),$(i[m],1)):(i[m]=Te(N),i[m].c(),$(i[m],1),i[m].m(t,null))}for(ne(),m=n.length;m<i.length;m+=1)p(m);fe()}const _={};u&134217750&&(_.$$scope={dirty:u,ctx:o}),s.$set(_);const k={};u&134218243&&(k.$$scope={dirty:u,ctx:o}),r.$set(k)},i(o){if(!e){for(let u=0;u<n.length;u+=1)$(i[u]);$(s.$$.fragment,o),$(r.$$.fragment,o),e=!0}},o(o){i=i.filter(Boolean);for(let u=0;u<i.length;u+=1)d(i[u]);d(s.$$.fragment,o),d(r.$$.fragment,o),e=!1},d(o){o&&g(t),Pe(i,o),o&&g(l),w(s,o),o&&g(a),w(r,o)}}}function st(f){let t,l,s;return t=new Ee({props:{data:f[0]}}),{c(){v(t.$$.fragment),l=L()},l(a){y(t.$$.fragment,a),l=S(a)},m(a,r){b(t,a,r),h(a,l,r),s=!0},p(a,r){const e={};r&64&&(e.data=a[0]),t.$set(e)},i(a){s||($(t.$$.fragment,a),s=!0)},o(a){d(t.$$.fragment,a),s=!1},d(a){w(t,a),a&&g(l)}}}function Te(f){let t,l;return t=new V({props:{class:"relative px-4 py-5 sm:p-6",$$slots:{default:[st]},$$scope:{ctx:f}}}),{c(){v(t.$$.fragment)},l(s){y(t.$$.fragment,s)},m(s,a){b(t,s,a),l=!0},p(s,a){const r={};a&134217792&&(r.$$scope={dirty:a,ctx:s}),t.$set(r)},i(s){l||($(t.$$.fragment,s),l=!0)},o(s){d(t.$$.fragment,s),l=!1},d(s){w(t,s)}}}function at(f){let t,l,s,a,r;return t=new pe({props:{title:"LP History",subtitle:"The history of "+f[1].name+"'s liquidity provided by liquidity providers (LPs)."}}),a=new Ae({props:{formatter:I,data:f[2].count>0?f[4].history.map(Ve):[{date:new Date().toISOString(),value:0}]}}),{c(){v(t.$$.fragment),l=L(),s=P("div"),v(a.$$.fragment),this.h()},l(e){y(t.$$.fragment,e),l=S(e),s=U(e,"DIV",{class:!0});var n=j(s);y(a.$$.fragment,n),n.forEach(g),this.h()},h(){A(s,"class","mt-5 sm:mt-6 h-full overflow-hidden")},m(e,n){b(t,e,n),h(e,l,n),h(e,s,n),b(a,s,null),r=!0},p(e,n){const i={};n&2&&(i.subtitle="The history of "+e[1].name+"'s liquidity provided by liquidity providers (LPs)."),t.$set(i);const p={};n&20&&(p.data=e[2].count>0?e[4].history.map(Ve):[{date:new Date().toISOString(),value:0}]),a.$set(p)},i(e){r||($(t.$$.fragment,e),$(a.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),d(a.$$.fragment,e),r=!1},d(e){w(t,e),e&&g(l),e&&g(s),w(a)}}}function rt(f){let t,l,s,a,r;return t=new pe({props:{title:"Issued LP Tokens",subtitle:"List of LP tokens issued by "+f[1].name+"."}}),a=new qe({props:{data:f[0],columns:[{id:"name",title:"Name",class:"font-medium",link:!0},{id:"price",title:"Price",class:""},{id:"supply",title:"Supply",class:""},{id:"mcap",title:"Market Cap",class:""}],rows:f[9].map(f[21]),sort:[{by:"mcap"}],class:""}}),{c(){v(t.$$.fragment),l=L(),s=P("div"),v(a.$$.fragment),this.h()},l(e){y(t.$$.fragment,e),l=S(e),s=U(e,"DIV",{class:!0});var n=j(s);y(a.$$.fragment,n),n.forEach(g),this.h()},h(){A(s,"class","mt-5 sm:mt-6")},m(e,n){b(t,e,n),h(e,l,n),h(e,s,n),b(a,s,null),r=!0},p(e,n){const i={};n&2&&(i.subtitle="List of LP tokens issued by "+e[1].name+"."),t.$set(i);const p={};n&1&&(p.data=e[0]),n&512&&(p.rows=e[9].map(e[21])),a.$set(p)},i(e){r||($(t.$$.fragment,e),$(a.$$.fragment,e),r=!0)},o(e){d(t.$$.fragment,e),d(a.$$.fragment,e),r=!1},d(e){w(t,e),e&&g(l),e&&g(s),w(a)}}}function lt(f){let t,l,s,a,r;t=new Ge({props:{title:f[1].name,iconUrl:f[11]?`${D}/${f[11].href}`:`${D}/default-icon.png`,$$slots:{default:[Ze]},$$scope:{ctx:f}}});let e=f[3].count>0&&Se(f),n=f[2].count>0&&Ne(f);return{c(){v(t.$$.fragment),l=L(),e&&e.c(),s=L(),n&&n.c(),a=me()},l(i){y(t.$$.fragment,i),l=S(i),e&&e.l(i),s=S(i),n&&n.l(i),a=me()},m(i,p){b(t,i,p),h(i,l,p),e&&e.m(i,p),h(i,s,p),n&&n.m(i,p),h(i,a,p),r=!0},p(i,p){const o={};p&2&&(o.title=i[1].name),p&2048&&(o.iconUrl=i[11]?`${D}/${i[11].href}`:`${D}/default-icon.png`),p&134217986&&(o.$$scope={dirty:p,ctx:i}),t.$set(o),i[3].count>0?e?(e.p(i,p),p&8&&$(e,1)):(e=Se(i),e.c(),$(e,1),e.m(s.parentNode,s)):e&&(ne(),d(e,1,1,()=>{e=null}),fe()),i[2].count>0?n?(n.p(i,p),p&4&&$(n,1)):(n=Ne(i),n.c(),$(n,1),n.m(a.parentNode,a)):n&&(ne(),d(n,1,1,()=>{n=null}),fe())},i(i){r||($(t.$$.fragment,i),$(e),$(n),r=!0)},o(i){d(t.$$.fragment,i),d(e),d(n),r=!1},d(i){w(t,i),i&&g(l),e&&e.d(i),i&&g(s),n&&n.d(i),i&&g(a)}}}function it(f){let t,l,s,a;return t=new We({props:{title:f[7].title,description:f[7].description,openGraph:{title:f[7].title,description:f[7].description,url:f[7].url,type:"website",images:[f[7].image]},twitter:{site:"@bcked_com",title:f[7].title,description:f[7].description,image:f[7].image.url,imageAlt:f[7].image.alt}}}),s=new ze({props:{class:"px-0",$$slots:{default:[lt]},$$scope:{ctx:f}}}),{c(){v(t.$$.fragment),l=L(),v(s.$$.fragment)},l(r){y(t.$$.fragment,r),l=S(r),y(s.$$.fragment,r)},m(r,e){b(t,r,e),h(r,l,e),b(s,r,e),a=!0},p(r,[e]){const n={};e&128&&(n.title=r[7].title),e&128&&(n.description=r[7].description),e&128&&(n.openGraph={title:r[7].title,description:r[7].description,url:r[7].url,type:"website",images:[r[7].image]}),e&128&&(n.twitter={site:"@bcked_com",title:r[7].title,description:r[7].description,image:r[7].image.url,imageAlt:r[7].image.alt}),t.$set(n);const i={};e&134221695&&(i.$$scope={dirty:e,ctx:r}),s.$set(i)},i(r){a||($(t.$$.fragment,r),$(s.$$.fragment,r),a=!0)},o(r){d(t.$$.fragment,r),d(s.$$.fragment,r),a=!1},d(r){w(t,r),r&&g(l),w(s,r)}}}const Ie=f=>({date:f.timestamp,value:f.assets.tvl.value}),Ve=f=>({date:f.timestamp,value:f.lps.tvl.value});function nt(f,t,l){let s,a,r,e,n,i,p,o,u,_,k,m,N,de,ge,_e,oe;He(f,Fe,c=>l(19,oe=c));let{data:T}=t,ue,he=[],ve=[];const Ce=c=>{var E,q,C,M,O,K,B,H,F,G,J,z,Q,R,W,X,Y,Z,x,ee,te,se,ae,re,le,ie;return{name:{text:c.details.name,value:c.details.name,icon:`${D}/assets/${c.details.id}/icon.svg`},"name-path":{text:`${D}/assets/${c.details.id}`,value:`${D}/assets/${c.details.id}`},price:{text:(C=(q=(E=c.history)==null?void 0:E.at(-1))==null?void 0:q.price)!=null&&C.usd?I(((K=(O=(M=c.history)==null?void 0:M.at(-1))==null?void 0:O.price)==null?void 0:K.usd)??0):"UNK",value:(F=(H=(B=c.history)==null?void 0:B.at(-1))==null?void 0:H.price)==null?void 0:F.usd},supply:{text:(z=(J=(G=c.history)==null?void 0:G.at(-1))==null?void 0:J.supply)!=null&&z.total?be(((W=(R=(Q=c.history)==null?void 0:Q.at(-1))==null?void 0:R.supply)==null?void 0:W.total)??0):"UNK",value:(Z=(Y=(X=c.history)==null?void 0:X.at(-1))==null?void 0:Y.supply)==null?void 0:Z.total},mcap:{text:(ee=(x=c.history)==null?void 0:x.at(-1))!=null&&ee.mcap?I(((ae=(se=(te=c.history)==null?void 0:te.at(-1))==null?void 0:se.mcap)==null?void 0:ae.value)??0):"UNK",value:(ie=(le=(re=c.history)==null?void 0:re.at(-1))==null?void 0:le.mcap)==null?void 0:ie.value}}},Me=c=>{var E,q,C,M,O,K,B,H,F,G,J,z,Q,R,W,X,Y,Z,x,ee,te,se,ae,re,le,ie;return{name:{text:c.details.name,value:c.details.name,icon:`${D}/assets/${c.details.id}/icon.svg`},"name-path":{text:`${D}/assets/${c.details.id}`,value:`${D}/assets/${c.details.id}`},price:{text:(C=(q=(E=c.history)==null?void 0:E.at(-1))==null?void 0:q.price)!=null&&C.usd?I(((K=(O=(M=c.history)==null?void 0:M.at(-1))==null?void 0:O.price)==null?void 0:K.usd)??0):"UNK",value:(F=(H=(B=c.history)==null?void 0:B.at(-1))==null?void 0:H.price)==null?void 0:F.usd},supply:{text:(z=(J=(G=c.history)==null?void 0:G.at(-1))==null?void 0:J.supply)!=null&&z.total?be(((W=(R=(Q=c.history)==null?void 0:Q.at(-1))==null?void 0:R.supply)==null?void 0:W.total)??0):"UNK",value:(Z=(Y=(X=c.history)==null?void 0:X.at(-1))==null?void 0:Y.supply)==null?void 0:Z.total},mcap:{text:(ee=(x=c.history)==null?void 0:x.at(-1))!=null&&ee.mcap?I(((ae=(se=(te=c.history)==null?void 0:te.at(-1))==null?void 0:se.mcap)==null?void 0:ae.value)??0):"UNK",value:(ie=(le=(re=c.history)==null?void 0:re.at(-1))==null?void 0:le.mcap)==null?void 0:ie.value}}};return f.$$set=c=>{"data"in c&&l(0,T=c.data)},f.$$.update=()=>{f.$$.dirty&1&&l(17,{issuersDetails:s,issuersStats:a,issuersIcons:r,assetsDetails:e,graphData:n}=T,s,(l(16,a),l(0,T)),(l(15,r),l(0,T)),(l(18,n),l(0,T))),f.$$.dirty&524288&&l(13,i=oe.params.id),f.$$.dirty&262144&&l(12,ue=Qe(n)),f.$$.dirty&139264&&l(1,p=s[i]),f.$$.dirty&73728&&l(4,o=a[i]),f.$$.dirty&40960&&l(11,u=r[i]),f.$$.dirty&16&&l(14,_=o.history.at(-1)),f.$$.dirty&16384&&l(3,{assets:k,lps:m}=_,k,(l(2,m),l(14,_),l(4,o),l(16,a),l(13,i),l(0,T),l(19,oe))),f.$$.dirty&4104&&l(10,N=Object.keys(k.mcaps).map(c=>ue.getNode(c).data)),f.$$.dirty&4100&&l(9,de=Object.keys(m.mcaps).map(c=>ue.getNode(c).data)),f.$$.dirty&16384&&l(8,ge=_.timestamp),f.$$.dirty&8&&l(5,he=[{name:"Number of Assets",value:k.count.toString(),type:"standard"},{name:"Total Value Locked (TVL)",value:k.tvl.value,type:"currency"},{name:"TVL 7d %",value:k.tvl.rate7d,type:"change"},{name:"TVL 30d %",value:k.tvl.rate30d,type:"change"}]),f.$$.dirty&4&&l(6,ve=[{name:"Number of LP Tokens",value:m.count.toString(),type:"standard"},{name:"Total Value Locked (TVL)",value:m.tvl.value,type:"currency"},{name:"TVL 7d %",value:m.tvl.rate7d,type:"change"},{name:"TVL 30d %",value:m.tvl.rate30d,type:"change"}]),f.$$.dirty&8194&&l(7,_e={title:`${p.name}'s assets`,description:`See all assets of ${p.name}. Learn more ...`,url:`${ye}/issuers/${i}`,image:{url:`${ye}/issuers/${i}/preview.jpg`,width:1200,height:630,alt:`Preview of ${p.name}'s detail view.`}})},[T,p,m,k,o,he,ve,_e,ge,de,N,u,ue,i,_,r,a,s,n,oe,Ce,Me]}class vt extends Oe{constructor(t){super(),Ke(this,t,nt,it,Be,{data:0})}}export{vt as component};
