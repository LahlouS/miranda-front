import{at as g,_ as O,au as S,a2 as D,av as p,B as c,A as N,y as I,C as u,a0 as L,aw as V,ax as C,T as H,ay as Y,N as M,az as P,K as $,w as j,p as k,d as z,h as w,O as B,b as K}from"./g3Tmz0S3.js";import{c as W,r as R,d as h,f as q}from"./CKB5XqNR.js";import{d as F}from"./DroBwdLr.js";const G=["touchstart","touchmove"];function J(t){return G.includes(t)}function x(t,e){var a=e==null?"":typeof e=="object"?e+"":e;a!==(t.__t??(t.__t=t.nodeValue))&&(t.__t=a,t.nodeValue=a+"")}function Q(t,e){return A(t,e)}function ee(t,e){g(),e.intro=e.intro??!1;const a=e.target,_=w,l=u;try{for(var r=O(a);r&&(r.nodeType!==8||r.data!==S);)r=D(r);if(!r)throw p;c(!0),N(r),I();const i=A(t,{...e,anchor:r});if(u===null||u.nodeType!==8||u.data!==L)throw V(),p;return c(!1),i}catch(i){if(i===p)return e.recover===!1&&C(),g(),H(a),c(!1),Q(t,e);throw i}finally{c(_),N(l),q()}}const d=new Map;function A(t,{target:e,anchor:a,props:_={},events:l,context:r,intro:i=!0}){g();var y=new Set,v=o=>{for(var s=0;s<o.length;s++){var n=o[s];if(!y.has(n)){y.add(n);var f=J(n);e.addEventListener(n,h,{passive:f});var T=d.get(n);T===void 0?(document.addEventListener(n,h,{passive:f}),d.set(n,1)):d.set(n,T+1)}}};v(M(W)),R.add(v);var m=void 0,b=P(()=>{var o=a??e.appendChild($());return j(()=>{if(r){k({});var s=z;s.c=r}l&&(_.$$events=l),w&&F(o,null),m=t(o,_)||{},w&&(B.nodes_end=u),r&&K()}),()=>{var f;for(var s of y){e.removeEventListener(s,h);var n=d.get(s);--n===0?(document.removeEventListener(s,h),d.delete(s)):d.set(s,n)}R.delete(v),o!==a&&((f=o.parentNode)==null||f.removeChild(o))}});return E.set(m,b),m}let E=new WeakMap;function te(t,e){const a=E.get(t);return a?(E.delete(t),a(e)):(Y(),Promise.resolve())}export{ee as h,Q as m,x as s,te as u};
