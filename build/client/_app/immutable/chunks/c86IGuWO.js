var rt=e=>{throw TypeError(e)};var Ht=(e,t,n)=>t.has(e)||rt("Cannot "+n);var S=(e,t,n)=>(Ht(e,t,"read from private field"),n?n.call(e):t.get(e)),x=(e,t,n)=>t.has(e)?rt("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,n);import{aP as at,aQ as T,g as O,I as j,a_ as ot,aR as je}from"./DsZSh94P.js";import{w as Be}from"./CXYAfE7x.js";new URL("sveltekit-internal://");function Mt(e,t){return e==="/"||t==="ignore"?e:t==="never"?e.endsWith("/")?e.slice(0,-1):e:t==="always"&&!e.endsWith("/")?e+"/":e}function Kt(e){return e.split("%25").map(decodeURI).join("%25")}function Wt(e){for(const t in e)e[t]=decodeURIComponent(e[t]);return e}function Le({href:e}){return e.split("#")[0]}function Jt(e,t,n,r=!1){const a=new URL(e);Object.defineProperty(a,"searchParams",{value:new Proxy(a.searchParams,{get(i,o){if(o==="get"||o==="getAll"||o==="has")return l=>(n(l),i[o](l));t();const c=Reflect.get(i,o);return typeof c=="function"?c.bind(i):c}}),enumerable:!0,configurable:!0});const s=["href","pathname","search","toString","toJSON"];r&&s.push("hash");for(const i of s)Object.defineProperty(a,i,{get(){return t(),e[i]},enumerable:!0,configurable:!0});return r||Yt(a),a}function Yt(e){Object.defineProperty(e,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `page.url.hash` inside a component instead")}})}function zt(...e){let t=5381;for(const n of e)if(typeof n=="string"){let r=n.length;for(;r;)t=t*33^n.charCodeAt(--r)}else if(ArrayBuffer.isView(n)){const r=new Uint8Array(n.buffer,n.byteOffset,n.byteLength);let a=r.length;for(;a;)t=t*33^r[--a]}else throw new TypeError("value must be a string or TypedArray");return(t>>>0).toString(36)}function Xt(e){const t=atob(e),n=new Uint8Array(t.length);for(let r=0;r<t.length;r++)n[r]=t.charCodeAt(r);return n.buffer}let qe=0;const Qt=window.fetch;function Zt(){qe+=1}function en(){qe-=1}{let e=!1;(async()=>{e=new Error().stack.includes("check_stack_trace")})(),window.fetch=(n,r)=>{const a=n instanceof Request?n.url:n.toString(),s=new Error().stack.split(`
`),i=s.findIndex(p=>p.includes("load@")||p.includes("at load")),o=s.slice(0,i+2).join(`
`),c=e?o.includes("src/runtime/client/client.js"):qe,l=r==null?void 0:r.__sveltekit_fetch__;return c&&!l&&console.warn(`Loading ${a} using \`window.fetch\`. For best results, use the \`fetch\` that is passed to your \`load\` function: https://svelte.dev/docs/kit/load#making-fetch-requests`),(n instanceof Request?n.method:(r==null?void 0:r.method)||"GET")!=="GET"&&J.delete(He(n)),Qt(n,r)}}const J=new Map;function tn(e,t){const n=He(e,t),r=document.querySelector(n);if(r!=null&&r.textContent){let{body:a,...s}=JSON.parse(r.textContent);const i=r.getAttribute("data-ttl");return i&&J.set(n,{body:a,init:s,ttl:1e3*Number(i)}),r.getAttribute("data-b64")!==null&&(a=Xt(a)),Promise.resolve(new Response(a,s))}return Ge(e,t)}function nn(e,t,n){if(J.size>0){const r=He(e,n),a=J.get(r);if(a){if(performance.now()<a.ttl&&["default","force-cache","only-if-cached",void 0].includes(n==null?void 0:n.cache))return new Response(a.body,a.init);J.delete(r)}}return Ge(t,n)}function Ge(e,t){const n={...t};return Object.defineProperty(n,"__sveltekit_fetch__",{value:!0,writable:!0,configurable:!0}),window.fetch(e,n)}function He(e,t){let r=`script[data-sveltekit-fetched][data-url=${JSON.stringify(e instanceof Request?e.url:e)}]`;if(t!=null&&t.headers||t!=null&&t.body){const a=[];t.headers&&a.push([...new Headers(t.headers)].join(",")),t.body&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&a.push(t.body),r+=`[data-hash="${zt(...a)}"]`}return r}const rn=/^(\[)?(\.\.\.)?(\w+)(?:=(\w+))?(\])?$/;function an(e){const t=[];return{pattern:e==="/"?/^\/$/:new RegExp(`^${sn(e).map(r=>{const a=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(r);if(a)return t.push({name:a[1],matcher:a[2],optional:!1,rest:!0,chained:!0}),"(?:/(.*))?";const s=/^\[\[(\w+)(?:=(\w+))?\]\]$/.exec(r);if(s)return t.push({name:s[1],matcher:s[2],optional:!0,rest:!1,chained:!0}),"(?:/([^/]+))?";if(!r)return;const i=r.split(/\[(.+?)\](?!\])/);return"/"+i.map((c,l)=>{if(l%2){if(c.startsWith("x+"))return Pe(String.fromCharCode(parseInt(c.slice(2),16)));if(c.startsWith("u+"))return Pe(String.fromCharCode(...c.slice(2).split("-").map(h=>parseInt(h,16))));const u=rn.exec(c),[,p,m,f,w]=u;return t.push({name:f,matcher:w,optional:!!p,rest:!!m,chained:m?l===1&&i[0]==="":!1}),m?"(.*?)":p?"([^/]*)?":"([^/]+?)"}return Pe(c)}).join("")}).join("")}/?$`),params:t}}function on(e){return!/^\([^)]+\)$/.test(e)}function sn(e){return e.slice(1).split("/").filter(on)}function cn(e,t,n){const r={},a=e.slice(1),s=a.filter(o=>o!==void 0);let i=0;for(let o=0;o<t.length;o+=1){const c=t[o];let l=a[o-i];if(c.chained&&c.rest&&i&&(l=a.slice(o-i,o+1).filter(u=>u).join("/"),i=0),l===void 0){c.rest&&(r[c.name]="");continue}if(!c.matcher||n[c.matcher](l)){r[c.name]=l;const u=t[o+1],p=a[o+1];u&&!u.rest&&u.optional&&p&&c.chained&&(i=0),!u&&!p&&Object.keys(r).length===s.length&&(i=0);continue}if(c.optional&&c.chained){i++;continue}return}if(!i)return r}function Pe(e){return e.normalize().replace(/[[\]]/g,"\\$&").replace(/%/g,"%25").replace(/\//g,"%2[Ff]").replace(/\?/g,"%3[Ff]").replace(/#/g,"%23").replace(/[.*+?^${}()|\\]/g,"\\$&")}function ln({nodes:e,server_loads:t,dictionary:n,matchers:r}){const a=new Set(t);return Object.entries(n).map(([o,[c,l,u]])=>{const{pattern:p,params:m}=an(o),f={id:o,exec:w=>{const h=p.exec(w);if(h)return cn(h,m,r)},errors:[1,...u||[]].map(w=>e[w]),layouts:[0,...l||[]].map(i),leaf:s(c)};return f.errors.length=f.layouts.length=Math.max(f.errors.length,f.layouts.length),f});function s(o){const c=o<0;return c&&(o=~o),[c,e[o]]}function i(o){return o===void 0?o:[a.has(o),e[o]]}}function bt(e,t=JSON.parse){try{return t(sessionStorage[e])}catch{}}function st(e,t,n=JSON.stringify){const r=n(t);try{sessionStorage[e]=r}catch{}}var mt;const P=((mt=globalThis.__sveltekit_1na4t12)==null?void 0:mt.base)??"";var yt;(yt=globalThis.__sveltekit_1na4t12)==null||yt.assets;const kt="sveltekit:snapshot",St="sveltekit:scroll",Et="sveltekit:states",fn="sveltekit:pageurl",G="sveltekit:history",X="sveltekit:navigation",pe={tap:1,hover:2,viewport:3,eager:4,off:-1,false:-1},ue=location.origin;function At(e){if(e instanceof URL)return e;let t=document.baseURI;if(!t){const n=document.getElementsByTagName("base");t=n.length?n[0].href:document.URL}return new URL(e,t)}function Me(){return{x:pageXOffset,y:pageYOffset}}const it=new WeakSet,ct={"preload-code":["","off","false","tap","hover","viewport","eager"],"preload-data":["","off","false","tap","hover"],keepfocus:["","true","off","false"],noscroll:["","true","off","false"],reload:["","true","off","false"],replacestate:["","true","off","false"]};function q(e,t){const n=e.getAttribute(`data-sveltekit-${t}`);return un(e,t,n),n}function un(e,t,n){n!==null&&!it.has(e)&&!ct[t].includes(n)&&(console.error(`Unexpected value for ${t} — should be one of ${ct[t].map(r=>JSON.stringify(r)).join(", ")}`,e),it.add(e))}const lt={...pe,"":pe.hover};function Rt(e){let t=e.assignedSlot??e.parentNode;return(t==null?void 0:t.nodeType)===11&&(t=t.host),t}function It(e,t){for(;e&&e!==t;){if(e.nodeName.toUpperCase()==="A"&&e.hasAttribute("href"))return e;e=Rt(e)}}function Ce(e,t,n){let r;try{if(r=new URL(e instanceof SVGAElement?e.href.baseVal:e.href,document.baseURI),n&&r.hash.match(/^#[^/]/)){const o=location.hash.split("#")[1]||"/";r.hash=`#${o}${r.hash}`}}catch{}const a=e instanceof SVGAElement?e.target.baseVal:e.target,s=!r||!!a||Se(r,t,n)||(e.getAttribute("rel")||"").split(/\s+/).includes("external"),i=(r==null?void 0:r.origin)===ue&&e.hasAttribute("download");return{url:r,external:s,target:a,download:i}}function ge(e){let t=null,n=null,r=null,a=null,s=null,i=null,o=e;for(;o&&o!==document.documentElement;)r===null&&(r=q(o,"preload-code")),a===null&&(a=q(o,"preload-data")),t===null&&(t=q(o,"keepfocus")),n===null&&(n=q(o,"noscroll")),s===null&&(s=q(o,"reload")),i===null&&(i=q(o,"replacestate")),o=Rt(o);function c(l){switch(l){case"":case"true":return!0;case"off":case"false":return!1;default:return}}return{preload_code:lt[r??"off"],preload_data:lt[a??"off"],keepfocus:c(t),noscroll:c(n),reload:c(s),replace_state:c(i)}}function ft(e){const t=Be(e);let n=!0;function r(){n=!0,t.update(i=>i)}function a(i){n=!1,t.set(i)}function s(i){let o;return t.subscribe(c=>{(o===void 0||n&&c!==o)&&i(o=c)})}return{notify:r,set:a,subscribe:s}}function hn(){const{set:e,subscribe:t}=Be(!1);return{subscribe:t,check:async()=>!1}}function Se(e,t,n){return e.origin!==ue||!e.pathname.startsWith(t)?!0:n?!(e.pathname===t+"/"||e.pathname===t+"/index.html"||e.protocol==="file:"&&e.pathname.replace(/\/[^/]+\.html?$/,"")===t):!1}function ut(e){const t=pn(e),n=new ArrayBuffer(t.length),r=new DataView(n);for(let a=0;a<n.byteLength;a++)r.setUint8(a,t.charCodeAt(a));return n}const dn="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";function pn(e){e.length%4===0&&(e=e.replace(/==?$/,""));let t="",n=0,r=0;for(let a=0;a<e.length;a++)n<<=6,n|=dn.indexOf(e[a]),r+=6,r===24&&(t+=String.fromCharCode((n&16711680)>>16),t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255),n=r=0);return r===12?(n>>=4,t+=String.fromCharCode(n)):r===18&&(n>>=2,t+=String.fromCharCode((n&65280)>>8),t+=String.fromCharCode(n&255)),t}const gn=-1,wn=-2,mn=-3,yn=-4,_n=-5,vn=-6;function zn(e,t){return $t(JSON.parse(e),t)}function $t(e,t){if(typeof e=="number")return a(e,!0);if(!Array.isArray(e)||e.length===0)throw new Error("Invalid input");const n=e,r=Array(n.length);function a(s,i=!1){if(s===gn)return;if(s===mn)return NaN;if(s===yn)return 1/0;if(s===_n)return-1/0;if(s===vn)return-0;if(i)throw new Error("Invalid input");if(s in r)return r[s];const o=n[s];if(!o||typeof o!="object")r[s]=o;else if(Array.isArray(o))if(typeof o[0]=="string"){const c=o[0],l=t==null?void 0:t[c];if(l)return r[s]=l(a(o[1]));switch(c){case"Date":r[s]=new Date(o[1]);break;case"Set":const u=new Set;r[s]=u;for(let f=1;f<o.length;f+=1)u.add(a(o[f]));break;case"Map":const p=new Map;r[s]=p;for(let f=1;f<o.length;f+=2)p.set(a(o[f]),a(o[f+1]));break;case"RegExp":r[s]=new RegExp(o[1],o[2]);break;case"Object":r[s]=Object(o[1]);break;case"BigInt":r[s]=BigInt(o[1]);break;case"null":const m=Object.create(null);r[s]=m;for(let f=1;f<o.length;f+=2)m[o[f]]=a(o[f+1]);break;case"Int8Array":case"Uint8Array":case"Uint8ClampedArray":case"Int16Array":case"Uint16Array":case"Int32Array":case"Uint32Array":case"Float32Array":case"Float64Array":case"BigInt64Array":case"BigUint64Array":{const f=globalThis[c],w=o[1],h=ut(w),d=new f(h);r[s]=d;break}case"ArrayBuffer":{const f=o[1],w=ut(f);r[s]=w;break}default:throw new Error(`Unknown type ${c}`)}}else{const c=new Array(o.length);r[s]=c;for(let l=0;l<o.length;l+=1){const u=o[l];u!==wn&&(c[l]=a(u))}}else{const c={};r[s]=c;for(const l in o){const u=o[l];c[l]=a(u)}}return r[s]}return a(0)}function bn(e){function t(n,r){if(n)for(const a in n){if(a[0]==="_"||e.has(a))continue;const s=[...e.values()],i=kn(a,r==null?void 0:r.slice(r.lastIndexOf(".")))??`valid exports are ${s.join(", ")}, or anything with a '_' prefix`;throw new Error(`Invalid export '${a}'${r?` in ${r}`:""} (${i})`)}}return t}function kn(e,t=".js"){const n=[];if(Ke.has(e)&&n.push(`+layout${t}`),Ut.has(e)&&n.push(`+page${t}`),Lt.has(e)&&n.push(`+layout.server${t}`),Sn.has(e)&&n.push(`+page.server${t}`),En.has(e)&&n.push(`+server${t}`),n.length>0)return`'${e}' is a valid export in ${n.slice(0,-1).join(", ")}${n.length>1?" or ":""}${n.at(-1)}`}const Ke=new Set(["load","prerender","csr","ssr","trailingSlash","config"]),Ut=new Set([...Ke,"entries"]),Lt=new Set([...Ke]),Sn=new Set([...Lt,"actions","entries"]),En=new Set(["GET","POST","PATCH","PUT","DELETE","OPTIONS","HEAD","fallback","prerender","trailingSlash","config","entries"]),An=bn(Ut);function Rn(e){return e.filter(t=>t!=null)}class Ee{constructor(t,n){this.status=t,typeof n=="string"?this.body={message:n}:n?this.body=n:this.body={message:`Error: ${t}`}}toString(){return JSON.stringify(this.body)}}class We{constructor(t,n){this.status=t,this.location=n}}class we extends Error{constructor(t,n,r){super(r),this.status=t,this.text=n}}function In(e,t){const n=/^(moz-icon|view-source|jar):/.exec(t);n&&console.warn(`${e}: Calling \`depends('${t}')\` will throw an error in Firefox because \`${n[1]}\` is a special URI scheme`)}const xe="x-sveltekit-invalidated",$n="x-sveltekit-trailing-slash";function me(e){return e instanceof Ee||e instanceof we?e.status:500}function Un(e){return e instanceof we?e.text:"Internal Error"}let E,Q;const Ln=at.toString().includes("$$")||/function \w+\(\) \{\}/.test(at.toString());var ne,re,ae,oe,se,ie,ce,le,_t,fe,vt;Ln?(E={data:{},form:null,error:null,params:{},route:{id:null},state:{},status:-1,url:new URL("https://example.com")},Q={current:null}):(E=new(_t=class{constructor(){x(this,ne,T({}));x(this,re,T(null));x(this,ae,T(null));x(this,oe,T({}));x(this,se,T({id:null}));x(this,ie,T({}));x(this,ce,T(-1));x(this,le,T(new URL("https://example.com")))}get data(){return O(S(this,ne))}set data(t){j(S(this,ne),t)}get form(){return O(S(this,re))}set form(t){j(S(this,re),t)}get error(){return O(S(this,ae))}set error(t){j(S(this,ae),t)}get params(){return O(S(this,oe))}set params(t){j(S(this,oe),t)}get route(){return O(S(this,se))}set route(t){j(S(this,se),t)}get state(){return O(S(this,ie))}set state(t){j(S(this,ie),t)}get status(){return O(S(this,ce))}set status(t){j(S(this,ce),t)}get url(){return O(S(this,le))}set url(t){j(S(this,le),t)}[ot](t){}},ne=new WeakMap,re=new WeakMap,ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ie=new WeakMap,ce=new WeakMap,le=new WeakMap,_t),Q=new(vt=class{constructor(){x(this,fe,T(null))}get current(){return O(S(this,fe))}set current(t){j(S(this,fe),t)}[ot](t){}},fe=new WeakMap,vt));function Je(e){Object.assign(E,e)}const Pn="/__data.json",xn=".html__data.json";function Tn(e){return e.endsWith(".html")?e.replace(/\.html$/,xn):e.replace(/\/$/,"")+Pn}const On=new Set(["icon","shortcut icon","apple-touch-icon"]),B=bt(St)??{},Z=bt(kt)??{};{let e=!1;const t=import.meta.url.split("?")[0],n=()=>{var i,o;if(e)return;let s=(i=new Error().stack)==null?void 0:i.split(`
`);s&&(!s[0].includes("https:")&&!s[0].includes("http:")&&(s=s.slice(1)),s=s.slice(2),!((o=s[0])!=null&&o.includes(t))&&(e=!0,console.warn("Avoid using `history.pushState(...)` and `history.replaceState(...)` as these will conflict with SvelteKit's router. Use the `pushState` and `replaceState` imports from `$app/navigation` instead.")))},r=history.pushState;history.pushState=(...s)=>(n(),r.apply(history,s));const a=history.replaceState;history.replaceState=(...s)=>(n(),a.apply(history,s))}const D={url:ft({}),page:ft({}),navigating:Be(null),updated:hn()};function Ye(e){B[e]=Me()}function jn(e,t){let n=e+1;for(;B[n];)delete B[n],n+=1;for(n=t+1;Z[n];)delete Z[n],n+=1}function M(e){return location.href=e.href,new Promise(()=>{})}async function Pt(){if("serviceWorker"in navigator){const e=await navigator.serviceWorker.getRegistration(P||"/");e&&await e.update()}}function ht(){}let ze,Ne,ye,C,De,k;const _e=[],ve=[];let U=null;const xt=new Set,Cn=new Set,Y=new Set;let y={branch:[],error:null,url:null},Xe=!1,be=!1,dt=!0,ee=!1,K=!1,Tt=!1,Ae=!1,H,I,L,N;const z=new Set;let Te;async function Zn(e,t,n){var a,s,i,o;t===document.body&&console.warn(`Placing %sveltekit.body% directly inside <body> is not recommended, as your app may break for users who have certain browser extensions installed.

Consider wrapping it in an element:

<div style="display: contents">
  %sveltekit.body%
</div>`),document.URL!==location.href&&(location.href=location.href),k=e,await((s=(a=e.hooks).init)==null?void 0:s.call(a)),ze=ln(e),C=document.documentElement,De=t,Ne=e.nodes[0],ye=e.nodes[1],Ne(),ye(),I=(i=history.state)==null?void 0:i[G],L=(o=history.state)==null?void 0:o[X],I||(I=L=Date.now(),history.replaceState({...history.state,[G]:I,[X]:L},""));const r=B[I];r&&(history.scrollRestoration="manual",scrollTo(r.x,r.y)),n?await Kn(De,n):Gn(k.hash?Gt(new URL(location.href)):location.href,{replaceState:!0}),Mn()}async function Nn(){if(await(Te||(Te=Promise.resolve())),!Te)return;Te=null;const e=N={},t=await de(y.url,!0);U=null;const n=t&&await et(t);if(!(!n||e!==N)){if(n.type==="redirect")return he(new URL(n.location,y.url).href,{},1,e);n.props.page&&Object.assign(E,n.props.page),y=n.state,Ot(),H.$set(n.props),Je(n.props.page)}}function Ot(){_e.length=0,Ae=!1}function jt(e){ve.some(t=>t==null?void 0:t.snapshot)&&(Z[e]=ve.map(t=>{var n;return(n=t==null?void 0:t.snapshot)==null?void 0:n.capture()}))}function Ct(e){var t;(t=Z[e])==null||t.forEach((n,r)=>{var a,s;(s=(a=ve[r])==null?void 0:a.snapshot)==null||s.restore(n)})}function pt(){Ye(I),st(St,B),jt(L),st(kt,Z)}async function he(e,t,n,r){return W({type:"goto",url:At(e),keepfocus:t.keepFocus,noscroll:t.noScroll,replace_state:t.replaceState,state:t.state,redirect_count:n,nav_token:r,accept:()=>{t.invalidateAll&&(Ae=!0),t.invalidate&&t.invalidate.forEach(Hn)}})}async function Dn(e){if(e.id!==(U==null?void 0:U.id)){const t={};z.add(t),U={id:e.id,token:t,promise:et({...e,preload:t}).then(n=>(z.delete(t),n.type==="loaded"&&n.state.error&&(U=null),n))}}return U.promise}async function Oe(e){var n;const t=(n=await de(e,!1))==null?void 0:n.route;t&&await Promise.all([...t.layouts,t.leaf].map(r=>r==null?void 0:r[1]()))}function Nt(e,t,n){var s;if(e.state.error&&document.querySelector("vite-error-overlay"))return;y=e.state;const r=document.querySelector("style[data-sveltekit]");r&&r.remove(),Object.assign(E,e.props.page),H=new k.root({target:t,props:{...e.props,stores:D,components:ve},hydrate:n,sync:!1}),Ct(L);const a={from:null,to:{params:y.params,route:{id:((s=y.route)==null?void 0:s.id)??null},url:new URL(location.href)},willUnload:!1,type:"enter",complete:Promise.resolve()};Y.forEach(i=>i(a)),be=!0}function te({url:e,params:t,branch:n,status:r,error:a,route:s,form:i}){let o="never";if(P&&(e.pathname===P||e.pathname===P+"/"))o="always";else for(const f of n)(f==null?void 0:f.slash)!==void 0&&(o=f.slash);e.pathname=Mt(e.pathname,o),e.search=e.search;const c={type:"loaded",state:{url:e,params:t,branch:n,error:a,route:s},props:{constructors:Rn(n).map(f=>f.node.component),page:Ie(E)}};i!==void 0&&(c.props.form=i);let l={},u=!E,p=0;for(let f=0;f<Math.max(n.length,y.branch.length);f+=1){const w=n[f],h=y.branch[f];(w==null?void 0:w.data)!==(h==null?void 0:h.data)&&(u=!0),w&&(l={...l,...w.data},u&&(c.props[`data_${p}`]=l),p+=1)}return(!y.url||e.href!==y.url.href||y.error!==a||i!==void 0&&i!==E.form||u)&&(c.props.page={error:a,params:t,route:{id:(s==null?void 0:s.id)??null},state:{},status:r,url:new URL(e),form:i??null,data:u?l:E.data}),c}async function Qe({loader:e,parent:t,url:n,params:r,route:a,server_data_node:s}){var u,p,m;let i=null,o=!0;const c={dependencies:new Set,params:new Set,parent:!1,route:!1,url:!1,search_params:new Set},l=await e();if(An(l.universal),l.universal&&k.hash){const f=Object.keys(l.universal).filter(w=>w!=="load");if(f.length>0)throw new Error(`Page options are ignored when \`router.type === 'hash'\` (${a.id} has ${f.filter(w=>w!=="load").map(w=>`'${w}'`).join(", ")})`)}if((u=l.universal)!=null&&u.load){let f=function(...h){for(const d of h){In(a.id,d);const{href:_}=new URL(d,n);c.dependencies.add(_)}};const w={route:new Proxy(a,{get:(h,d)=>(o&&(c.route=!0),h[d])}),params:new Proxy(r,{get:(h,d)=>(o&&c.params.add(d),h[d])}),data:(s==null?void 0:s.data)??null,url:Jt(n,()=>{o&&(c.url=!0)},h=>{o&&c.search_params.add(h)},k.hash),async fetch(h,d){let _;h instanceof Request?(_=h.url,d={body:h.method==="GET"||h.method==="HEAD"?void 0:await h.blob(),cache:h.cache,credentials:h.credentials,headers:[...h.headers].length?h.headers:void 0,integrity:h.integrity,keepalive:h.keepalive,method:h.method,mode:h.mode,redirect:h.redirect,referrer:h.referrer,referrerPolicy:h.referrerPolicy,signal:h.signal,...d}):_=h;const A=new URL(_,n);return o&&f(A.href),A.origin===n.origin&&(_=A.href.slice(n.origin.length)),be?nn(_,A.href,d):tn(_,d)},setHeaders:()=>{},depends:f,parent(){return o&&(c.parent=!0),t()},untrack(h){o=!1;try{return h()}finally{o=!0}}};try{if(Zt(),i=await l.universal.load.call(null,w)??null,i!=null&&Object.getPrototypeOf(i)!==Object.prototype)throw new Error(`a load function related to route '${a.id}' returned ${typeof i!="object"?`a ${typeof i}`:i instanceof Response?"a Response object":Array.isArray(i)?"an array":"a non-plain object"}, but must return a plain object at the top level (i.e. \`return {...}\`)`)}finally{en()}}return{node:l,loader:e,server:s,universal:(p=l.universal)!=null&&p.load?{type:"data",data:i,uses:c}:null,data:i??(s==null?void 0:s.data)??null,slash:((m=l.universal)==null?void 0:m.trailingSlash)??(s==null?void 0:s.slash)}}function gt(e,t,n,r,a,s){if(Ae)return!0;if(!a)return!1;if(a.parent&&e||a.route&&t||a.url&&n)return!0;for(const i of a.search_params)if(r.has(i))return!0;for(const i of a.params)if(s[i]!==y.params[i])return!0;for(const i of a.dependencies)if(_e.some(o=>o(new URL(i))))return!0;return!1}function Ze(e,t){return(e==null?void 0:e.type)==="data"?e:(e==null?void 0:e.type)==="skip"?t??null:null}function Fn(e,t){if(!e)return new Set(t.searchParams.keys());const n=new Set([...e.searchParams.keys(),...t.searchParams.keys()]);for(const r of n){const a=e.searchParams.getAll(r),s=t.searchParams.getAll(r);a.every(i=>s.includes(i))&&s.every(i=>a.includes(i))&&n.delete(r)}return n}function wt({error:e,url:t,route:n,params:r}){return{type:"loaded",state:{error:e,url:t,route:n,params:r,branch:[]},props:{page:Ie(E),constructors:[]}}}async function et({id:e,invalidating:t,url:n,params:r,route:a,preload:s}){if((U==null?void 0:U.id)===e)return z.delete(U.token),U.promise;const{errors:i,layouts:o,leaf:c}=a,l=[...o,c];i.forEach(g=>g==null?void 0:g().catch(()=>{})),l.forEach(g=>g==null?void 0:g[1]().catch(()=>{}));let u=null;const p=y.url?e!==ke(y.url):!1,m=y.route?a.id!==y.route.id:!1,f=Fn(y.url,n);let w=!1;const h=l.map((g,v)=>{var F;const b=y.branch[v],R=!!(g!=null&&g[0])&&((b==null?void 0:b.loader)!==g[1]||gt(w,m,p,f,(F=b.server)==null?void 0:F.uses,r));return R&&(w=!0),R});if(h.some(Boolean)){try{u=await Vt(n,h)}catch(g){const v=await V(g,{url:n,params:r,route:{id:e}});return z.has(s)?wt({error:v,url:n,params:r,route:a}):Re({status:me(g),error:v,url:n,route:a})}if(u.type==="redirect")return u}const d=u==null?void 0:u.nodes;let _=!1;const A=l.map(async(g,v)=>{var $e;if(!g)return;const b=y.branch[v],R=d==null?void 0:d[v];if((!R||R.type==="skip")&&g[1]===(b==null?void 0:b.loader)&&!gt(_,m,p,f,($e=b.universal)==null?void 0:$e.uses,r))return b;if(_=!0,(R==null?void 0:R.type)==="error")throw R;return Qe({loader:g[1],url:n,params:r,route:a,parent:async()=>{var nt;const tt={};for(let Ue=0;Ue<v;Ue+=1)Object.assign(tt,(nt=await A[Ue])==null?void 0:nt.data);return tt},server_data_node:Ze(R===void 0&&g[0]?{type:"skip"}:R??null,g[0]?b==null?void 0:b.server:void 0)})});for(const g of A)g.catch(()=>{});const $=[];for(let g=0;g<l.length;g+=1)if(l[g])try{$.push(await A[g])}catch(v){if(v instanceof We)return{type:"redirect",location:v.location};if(z.has(s))return wt({error:await V(v,{params:r,url:n,route:{id:a.id}}),url:n,params:r,route:a});let b=me(v),R;if(d!=null&&d.includes(v))b=v.status??b,R=v.error;else if(v instanceof Ee)R=v.body;else{if(await D.updated.check())return await Pt(),await M(n);R=await V(v,{params:r,url:n,route:{id:a.id}})}const F=await Dt(g,$,i);return F?te({url:n,params:r,branch:$.slice(0,F.idx).concat(F.node),status:b,error:R,route:a}):await Fe(n,{id:a.id},R,b)}else $.push(void 0);return te({url:n,params:r,branch:$,status:200,error:null,route:a,form:t?void 0:null})}async function Dt(e,t,n){for(;e--;)if(n[e]){let r=e;for(;!t[r];)r-=1;try{return{idx:r+1,node:{node:await n[e](),loader:n[e],data:{},server:null,universal:null}}}catch{continue}}}async function Re({status:e,error:t,url:n,route:r}){const a={};let s=null;if(k.server_loads[0]===0)try{const o=await Vt(n,[!0]);if(o.type!=="data"||o.nodes[0]&&o.nodes[0].type!=="data")throw 0;s=o.nodes[0]??null}catch{(n.origin!==ue||n.pathname!==location.pathname||Xe)&&await M(n)}try{const o=await Qe({loader:Ne,url:n,params:a,route:r,parent:()=>Promise.resolve({}),server_data_node:Ze(s)}),c={node:await ye(),loader:ye,universal:null,server:null,data:null};return te({url:n,params:a,branch:[o,c],status:e,error:t,route:null})}catch(o){if(o instanceof We)return he(new URL(o.location,location.href),{},0);throw o}}function Vn(e){let t;try{if(t=k.hooks.reroute({url:new URL(e)})??e,typeof t=="string"){const n=new URL(e);k.hash?n.hash=t:n.pathname=t,t=n}}catch(n){{console.error(n);debugger}return}return t}async function de(e,t){if(e&&!Se(e,P,k.hash)){const n=Vn(e);if(!n)return;const r=Bn(n);for(const a of ze){const s=a.exec(r);if(s)return{id:ke(e),invalidating:t,route:a,params:Wt(s),url:e}}}}function Bn(e){return Kt(k.hash?e.hash.replace(/^#/,"").replace(/[?#].+/,""):e.pathname.slice(P.length))||"/"}function ke(e){return(k.hash?e.hash.replace(/^#/,""):e.pathname)+e.search}function Ft({url:e,type:t,intent:n,delta:r}){let a=!1;const s=qt(y,n,e,t);r!==void 0&&(s.navigation.delta=r);const i={...s.navigation,cancel:()=>{a=!0,s.reject(new Error("navigation cancelled"))}};return ee||xt.forEach(o=>o(i)),a?null:s}async function W({type:e,url:t,popped:n,keepfocus:r,noscroll:a,replace_state:s,state:i={},redirect_count:o=0,nav_token:c={},accept:l=ht,block:u=ht}){const p=N;N=c;const m=await de(t,!1),f=Ft({url:t,type:e,delta:n==null?void 0:n.delta,intent:m});if(!f){u(),N===c&&(N=p);return}const w=I,h=L;l(),ee=!0,be&&D.navigating.set(Q.current=f.navigation);let d=m&&await et(m);if(!d)if(Se(t,P,k.hash))if(k.hash)d=await Fe(t,{id:null},await V(new we(404,"Not Found",`Not found: ${t.pathname} (did you forget the hash?)`),{url:t,params:{},route:{id:null}}),404);else return await M(t);else d=await Fe(t,{id:null},await V(new we(404,"Not Found",`Not found: ${t.pathname}`),{url:t,params:{},route:{id:null}}),404);if(t=(m==null?void 0:m.url)||t,N!==c)return f.reject(new Error("navigation aborted")),!1;if(d.type==="redirect")if(o>=20)d=await Re({status:500,error:await V(new Error("Redirect loop"),{url:t,params:{},route:{id:null}}),url:t,route:{id:null}});else return he(new URL(d.location,t).href,{},o+1,c),!1;else d.props.page.status>=400&&await D.updated.check()&&(await Pt(),await M(t));if(Ot(),Ye(w),jt(h),d.props.page.url.pathname!==t.pathname&&(t.pathname=d.props.page.url.pathname),i=n?n.state:i,!n){const g=s?0:1,v={[G]:I+=g,[X]:L+=g,[Et]:i};(s?history.replaceState:history.pushState).call(history,v,"",t),s||jn(I,L)}if(U=null,d.props.page.state=i,be){y=d.state,d.props.page&&(d.props.page.url=t);const g=(await Promise.all(Array.from(Cn,v=>v(f.navigation)))).filter(v=>typeof v=="function");if(g.length>0){let v=function(){g.forEach(b=>{Y.delete(b)})};g.push(v),g.forEach(b=>{Y.add(b)})}H.$set(d.props),Je(d.props.page),Tt=!0}else Nt(d,De,!1);const{activeElement:_}=document;await je();const A=n?n.scroll:a?Me():null;if(dt){const g=t.hash&&document.getElementById(decodeURIComponent(k.hash?t.hash.split("#")[2]??"":t.hash.slice(1)));A?scrollTo(A.x,A.y):g?g.scrollIntoView():scrollTo(0,0)}const $=document.activeElement!==_&&document.activeElement!==document.body;!r&&!$&&Ve(),dt=!0,d.props.page&&Object.assign(E,d.props.page),ee=!1,e==="popstate"&&Ct(L),f.fulfil(void 0),Y.forEach(g=>g(f.navigation)),D.navigating.set(Q.current=null)}async function Fe(e,t,n,r){if(e.origin===ue&&e.pathname===location.pathname&&!Xe)return await Re({status:r,error:n,url:e,route:t});if(r!==404){console.error("An error occurred while loading the page. This will cause a full page reload. (This message will only appear during development.)");debugger}return await M(e)}function qn(){let e,t;C.addEventListener("mousemove",i=>{const o=i.target;clearTimeout(e),e=setTimeout(()=>{a(o,2)},20)});function n(i){i.defaultPrevented||a(i.composedPath()[0],1)}C.addEventListener("mousedown",n),C.addEventListener("touchstart",n,{passive:!0});const r=new IntersectionObserver(i=>{for(const o of i)o.isIntersecting&&(Oe(new URL(o.target.href)),r.unobserve(o.target))},{threshold:0});async function a(i,o){const c=It(i,C);if(!c||c===t)return;t=c;const{url:l,external:u,download:p}=Ce(c,P,k.hash);if(u||p)return;const m=ge(c),f=l&&ke(y.url)===ke(l);if(!m.reload&&!f)if(o<=m.preload_data){const w=await de(l,!1);w&&Dn(w).then(h=>{h.type==="loaded"&&h.state.error&&console.warn(`Preloading data for ${w.url.pathname} failed with the following error: ${h.state.error.message}
If this error is transient, you can ignore it. Otherwise, consider disabling preloading for this route. This route was preloaded due to a data-sveltekit-preload-data attribute. See https://svelte.dev/docs/kit/link-options for more info`)})}else o<=m.preload_code&&Oe(l)}function s(){r.disconnect();for(const i of C.querySelectorAll("a")){const{url:o,external:c,download:l}=Ce(i,P,k.hash);if(c||l)continue;const u=ge(i);u.reload||(u.preload_code===pe.viewport&&r.observe(i),u.preload_code===pe.eager&&Oe(o))}}Y.add(s),s()}function V(e,t){if(e instanceof Ee)return e.body;console.warn("The next HMR update will cause the page to reload");const n=me(e),r=Un(e);return k.hooks.handleError({error:e,event:t,status:n,message:r})??{message:r}}function Gn(e,t={}){return e=new URL(At(e)),e.origin!==ue?Promise.reject(new Error(`Cannot use \`goto\` with an external URL. Use \`window.location = "${e}"\` instead`)):he(e,t,0)}function Hn(e){if(typeof e=="function")_e.push(e);else{const{href:t}=new URL(e,location.href);_e.push(n=>n.href===t)}}function er(){return Ae=!0,Nn()}async function tr(e){if(e.type==="error"){const t=new URL(location.href),{branch:n,route:r}=y;if(!r)return;const a=await Dt(y.branch.length,n,r.errors);if(a){const s=te({url:t,params:y.params,branch:n.slice(0,a.idx).concat(a.node),status:e.status??500,error:e.error,route:r});y=s.state,H.$set(s.props),Je(s.props.page),je().then(Ve)}}else e.type==="redirect"?he(e.location,{invalidateAll:!0},0):(E.form=e.data,E.status=e.status,H.$set({form:null,page:Ie(E)}),await je(),H.$set({form:e.data}),e.type==="success"&&Ve())}function Mn(){var t;history.scrollRestoration="manual",addEventListener("beforeunload",n=>{let r=!1;if(pt(),!ee){const a=qt(y,void 0,null,"leave"),s={...a.navigation,cancel:()=>{r=!0,a.reject(new Error("navigation cancelled"))}};xt.forEach(i=>i(s))}r?(n.preventDefault(),n.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{document.visibilityState==="hidden"&&pt()}),(t=navigator.connection)!=null&&t.saveData||qn(),C.addEventListener("click",async n=>{if(n.button||n.which!==1||n.metaKey||n.ctrlKey||n.shiftKey||n.altKey||n.defaultPrevented)return;const r=It(n.composedPath()[0],C);if(!r)return;const{url:a,external:s,target:i,download:o}=Ce(r,P,k.hash);if(!a)return;if(i==="_parent"||i==="_top"){if(window.parent!==window)return}else if(i&&i!=="_self")return;const c=ge(r);if(!(r instanceof SVGAElement)&&a.protocol!==location.protocol&&!(a.protocol==="https:"||a.protocol==="http:")||o)return;const[u,p]=(k.hash?a.hash.replace(/^#/,""):a.href).split("#"),m=u===Le(location);if(s||c.reload&&(!m||!p)){Ft({url:a,type:"link"})?ee=!0:n.preventDefault();return}if(p!==void 0&&m){const[,f]=y.url.href.split("#");if(f===p){if(n.preventDefault(),p===""||p==="top"&&r.ownerDocument.getElementById("top")===null)window.scrollTo({top:0});else{const w=r.ownerDocument.getElementById(decodeURIComponent(p));w&&(w.scrollIntoView(),w.focus())}return}if(K=!0,Ye(I),e(a),!c.replace_state)return;K=!1}n.preventDefault(),await new Promise(f=>{requestAnimationFrame(()=>{setTimeout(f,0)}),setTimeout(f,100)}),W({type:"link",url:a,keepfocus:c.keepfocus,noscroll:c.noscroll,replace_state:c.replace_state??a.href===location.href})}),C.addEventListener("submit",n=>{if(n.defaultPrevented)return;const r=HTMLFormElement.prototype.cloneNode.call(n.target),a=n.submitter;if(((a==null?void 0:a.formTarget)||r.target)==="_blank"||((a==null?void 0:a.formMethod)||r.method)!=="get")return;const o=new URL((a==null?void 0:a.hasAttribute("formaction"))&&(a==null?void 0:a.formAction)||r.action);if(Se(o,P,!1))return;const c=n.target,l=ge(c);if(l.reload)return;n.preventDefault(),n.stopPropagation();const u=new FormData(c),p=a==null?void 0:a.getAttribute("name");p&&u.append(p,(a==null?void 0:a.getAttribute("value"))??""),o.search=new URLSearchParams(u).toString(),W({type:"form",url:o,keepfocus:l.keepfocus,noscroll:l.noscroll,replace_state:l.replace_state??o.href===location.href})}),addEventListener("popstate",async n=>{var r;if((r=n.state)!=null&&r[G]){const a=n.state[G];if(N={},a===I)return;const s=B[a],i=n.state[Et]??{},o=new URL(n.state[fn]??location.href),c=n.state[X],l=y.url?Le(location)===Le(y.url):!1;if(c===L&&(Tt||l)){i!==E.state&&(E.state=i),e(o),B[I]=Me(),s&&scrollTo(s.x,s.y),I=a;return}const p=a-I;await W({type:"popstate",url:o,popped:{state:i,scroll:s,delta:p},accept:()=>{I=a,L=c},block:()=>{history.go(-p)},nav_token:N})}else if(!K){const a=new URL(location.href);e(a)}}),addEventListener("hashchange",()=>{K?(K=!1,history.replaceState({...history.state,[G]:++I,[X]:L},"",location.href)):k.hash&&y.url.hash===location.hash&&W({type:"goto",url:Gt(y.url)})});for(const n of document.querySelectorAll("link"))On.has(n.rel)&&(n.href=n.href);addEventListener("pageshow",n=>{n.persisted&&D.navigating.set(Q.current=null)});function e(n){y.url=E.url=n,D.page.set(Ie(E)),D.page.notify()}}async function Kn(e,{status:t=200,error:n,node_ids:r,params:a,route:s,server_route:i,data:o,form:c}){Xe=!0;const l=new URL(location.href);let u;({params:a={},route:s={id:null}}=await de(l,!1)||{}),u=ze.find(({id:f})=>f===s.id);let p,m=!0;try{const f=r.map(async(h,d)=>{const _=o[d];return _!=null&&_.uses&&(_.uses=Bt(_.uses)),Qe({loader:k.nodes[h],url:l,params:a,route:s,parent:async()=>{const A={};for(let $=0;$<d;$+=1)Object.assign(A,(await f[$]).data);return A},server_data_node:Ze(_)})}),w=await Promise.all(f);if(u){const h=u.layouts;for(let d=0;d<h.length;d++)h[d]||w.splice(d,0,void 0)}p=te({url:l,params:a,branch:w,status:t,error:n,form:c,route:u??null})}catch(f){if(f instanceof We){await M(new URL(f.location,location.href));return}p=await Re({status:me(f),error:await V(f,{url:l,params:a,route:s}),url:l,route:s}),e.textContent="",m=!1}p.props.page&&(p.props.page.state={}),Nt(p,e,m)}async function Vt(e,t){var s;const n=new URL(e);if(n.pathname=Tn(e.pathname),e.pathname.endsWith("/")&&n.searchParams.append($n,"1"),e.searchParams.has(xe))throw new Error(`Cannot used reserved query parameter "${xe}"`);n.searchParams.append(xe,t.map(i=>i?"1":"0").join(""));const a=await Ge(n.href,{});if(!a.ok){let i;throw(s=a.headers.get("content-type"))!=null&&s.includes("application/json")?i=await a.json():a.status===404?i="Not Found":a.status===500&&(i="Internal Error"),new Ee(a.status,i)}return new Promise(async i=>{var m;const o=new Map,c=a.body.getReader(),l=new TextDecoder;function u(f){return $t(f,{...k.decoders,Promise:w=>new Promise((h,d)=>{o.set(w,{fulfil:h,reject:d})})})}let p="";for(;;){const{done:f,value:w}=await c.read();if(f&&!p)break;for(p+=!w&&p?`
`:l.decode(w,{stream:!0});;){const h=p.indexOf(`
`);if(h===-1)break;const d=JSON.parse(p.slice(0,h));if(p=p.slice(h+1),d.type==="redirect")return i(d);if(d.type==="data")(m=d.nodes)==null||m.forEach(_=>{(_==null?void 0:_.type)==="data"&&(_.uses=Bt(_.uses),_.data=u(_.data))}),i(d);else if(d.type==="chunk"){const{id:_,data:A,error:$}=d,g=o.get(_);o.delete(_),$?g.reject(u($)):g.fulfil(u(A))}}}})}function Bt(e){return{dependencies:new Set((e==null?void 0:e.dependencies)??[]),params:new Set((e==null?void 0:e.params)??[]),parent:!!(e!=null&&e.parent),route:!!(e!=null&&e.route),url:!!(e!=null&&e.url),search_params:new Set((e==null?void 0:e.search_params)??[])}}function Ve(){const e=document.querySelector("[autofocus]");if(e)e.focus();else{const t=document.body,n=t.getAttribute("tabindex");t.tabIndex=-1,t.focus({preventScroll:!0,focusVisible:!1}),n!==null?t.setAttribute("tabindex",n):t.removeAttribute("tabindex");const r=getSelection();if(r&&r.type!=="None"){const a=[];for(let s=0;s<r.rangeCount;s+=1)a.push(r.getRangeAt(s));setTimeout(()=>{if(r.rangeCount===a.length){for(let s=0;s<r.rangeCount;s+=1){const i=a[s],o=r.getRangeAt(s);if(i.commonAncestorContainer!==o.commonAncestorContainer||i.startContainer!==o.startContainer||i.endContainer!==o.endContainer||i.startOffset!==o.startOffset||i.endOffset!==o.endOffset)return}r.removeAllRanges()}})}}}function qt(e,t,n,r){var c,l;let a,s;const i=new Promise((u,p)=>{a=u,s=p});return i.catch(()=>{}),{navigation:{from:{params:e.params,route:{id:((c=e.route)==null?void 0:c.id)??null},url:e.url},to:n&&{params:(t==null?void 0:t.params)??null,route:{id:((l=t==null?void 0:t.route)==null?void 0:l.id)??null},url:n},willUnload:!t,type:r,complete:i},fulfil:a,reject:s}}function Ie(e){return{data:e.data,error:e.error,form:e.form,params:e.params,route:e.route,state:e.state,status:e.status,url:e.url}}function Gt(e){const t=new URL(e);return t.hash=decodeURIComponent(e.hash),t}{const e=console.warn;console.warn=function(...n){n.length===1&&/<(Layout|Page|Error)(_[\w$]+)?> was created (with unknown|without expected) prop '(data|form)'/.test(n[0])||e(...n)}}export{tr as a,zn as b,k as c,Zn as d,er as i,E as p,D as s};
