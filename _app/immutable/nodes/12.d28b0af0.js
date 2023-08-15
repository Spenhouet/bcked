import{S as P,i as T,s as B,y as b,a as D,k as L,z as k,c as V,l as C,m as O,h as c,n as j,A as w,b as $,g as A,d as y,B as S}from"../chunks/index.3647f7f4.js";import{b as g}from"../chunks/paths.817d848d.js";import{T as G,f as N}from"../chunks/index.683a81ea.js";import{P as I}from"../chunks/public.d1f81b30.js";import{c as R,f as q}from"../chunks/string-formatting.ca7775a2.js";import{S as z}from"../chunks/index.816323cb.js";import{l as E}from"../chunks/lodash.default.326fb9c1.js";function J(t){let r,i,o,l,n;return r=new z({props:{title:t[2].title,description:t[2].description,openGraph:{title:t[2].title,description:t[2].description,url:t[2].url,type:"website",images:[t[2].image]},twitter:{site:"@bcked_com",title:t[2].title,description:t[2].description,image:t[2].image.url,imageAlt:t[2].image.alt}}}),l=new G({props:{data:t[0],columns:[{id:"rank",title:"#",class:""},{id:"name",title:"Name",class:"font-medium",link:!0},{id:"tvl",title:"Total Value Locked (TVL)",class:""},{id:"numAssets",title:"Assets",class:""}],rows:t[1],sort:[{by:"tvl"}],class:""}}),{c(){b(r.$$.fragment),i=D(),o=L("div"),b(l.$$.fragment),this.h()},l(e){k(r.$$.fragment,e),i=V(e),o=C(e,"DIV",{class:!0});var a=O(o);k(l.$$.fragment,a),a.forEach(c),this.h()},h(){j(o,"class","w-full pt-8")},m(e,a){w(r,e,a),$(e,i,a),$(e,o,a),w(l,o,null),n=!0},p(e,[a]){const m={};a&4&&(m.title=e[2].title),a&4&&(m.description=e[2].description),a&4&&(m.openGraph={title:e[2].title,description:e[2].description,url:e[2].url,type:"website",images:[e[2].image]}),a&4&&(m.twitter={site:"@bcked_com",title:e[2].title,description:e[2].description,image:e[2].image.url,imageAlt:e[2].image.alt}),r.$set(m);const d={};a&1&&(d.data=e[0]),a&2&&(d.rows=e[1]),l.$set(d)},i(e){n||(A(r.$$.fragment,e),A(l.$$.fragment,e),n=!0)},o(e){y(r.$$.fragment,e),y(l.$$.fragment,e),n=!1},d(e){S(r,e),e&&c(i),e&&c(o),S(l)}}}function M(t,r,i){let o,l,n,e,a,m,d,{data:f}=r;return t.$$set=s=>{"data"in s&&i(0,f=s.data)},t.$$.update=()=>{t.$$.dirty&1&&i(4,{assetsPrice:o,assetsBacking:l,graphData:n,issuersDetails:e,issuersIcons:a}=f,n,(i(5,e),i(0,f)),(i(3,a),i(0,f))),t.$$.dirty&16&&N(n),t.$$.dirty&56&&i(1,m=Object.values(e).map(s=>{const u=n.nodes.filter(p=>p.data.details.issuer==s.id).filter(p=>!p.data.details.tags.includes("lp"));return{...s,numAssets:u.length,tvl:E.sumBy(u,p=>{var h,v,_;return((_=(v=(h=p.data.history)==null?void 0:h.at(-1))==null?void 0:v.mcap)==null?void 0:_.value)??0})}}).filter(s=>s.tvl).sort((s,u)=>R(s.tvl,u.tvl)).map((s,u)=>{var p;return{rank:{text:(u+1).toString(),value:u},name:{text:s.name,value:s.name,icon:`${g}/${(p=a[s.id])==null?void 0:p.href}`},"name-path":{text:`${g}/issuers/${s.id}`,value:`${g}/issuers/${s.id}`},numAssets:{text:s.numAssets.toString(),value:s.numAssets},tvl:{text:q(s.tvl),value:s.tvl}}})),t.$$.dirty&2&&i(2,d={title:"bcked: Issuers Ranking",description:`Ranking of ${m.length} issuers based on total value locked (TVL). See all ...`,url:`${I}/issuers`,image:{url:`${I}/issuers/preview.jpg`,width:1200,height:630,alt:"Preview of issuers ranking."}})},[f,m,d,a,n,e]}class Y extends P{constructor(r){super(),T(this,r,M,J,B,{data:0})}}export{Y as component};
