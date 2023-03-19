(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const i of a)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(a){const i={};return a.integrity&&(i.integrity=a.integrity),a.referrerPolicy&&(i.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?i.credentials="include":a.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(a){if(a.ep)return;a.ep=!0;const i=n(a);fetch(a.href,i)}})();function Xr(e,t){const n=Object.create(null),r=e.split(",");for(let a=0;a<r.length;a++)n[r[a]]=!0;return t?a=>!!n[a.toLowerCase()]:a=>!!n[a]}function fn(e){if(L(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],a=re(r)?ks(r):fn(r);if(a)for(const i in a)t[i]=a[i]}return t}else{if(re(e))return e;if(J(e))return e}}const ys=/;(?![^(]*\))/g,_s=/:([^]+)/,xs=/\/\*.*?\*\//gs;function ks(e){const t={};return e.replace(xs,"").split(ys).forEach(n=>{if(n){const r=n.split(_s);r.length>1&&(t[r[0].trim()]=r[1].trim())}}),t}function Ft(e){let t="";if(re(e))t=e;else if(L(e))for(let n=0;n<e.length;n++){const r=Ft(e[n]);r&&(t+=r+" ")}else if(J(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const ws="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",As=Xr(ws);function zi(e){return!!e||e===""}const Ze=e=>re(e)?e:e==null?"":L(e)||J(e)&&(e.toString===Yi||!R(e.toString))?JSON.stringify(e,Hi,2):String(e),Hi=(e,t)=>t&&t.__v_isRef?Hi(e,t.value):Ot(t)?{[`Map(${t.size})`]:[...t.entries()].reduce((n,[r,a])=>(n[`${r} =>`]=a,n),{})}:Bi(t)?{[`Set(${t.size})`]:[...t.values()]}:J(t)&&!L(t)&&!Wi(t)?String(t):t,Q={},At=[],Ee=()=>{},Os=()=>!1,Ss=/^on[^a-z]/,Qn=e=>Ss.test(e),qr=e=>e.startsWith("onUpdate:"),me=Object.assign,Qr=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Cs=Object.prototype.hasOwnProperty,H=(e,t)=>Cs.call(e,t),L=Array.isArray,Ot=e=>Jn(e)==="[object Map]",Bi=e=>Jn(e)==="[object Set]",R=e=>typeof e=="function",re=e=>typeof e=="string",Jr=e=>typeof e=="symbol",J=e=>e!==null&&typeof e=="object",Ui=e=>J(e)&&R(e.then)&&R(e.catch),Yi=Object.prototype.toString,Jn=e=>Yi.call(e),Ts=e=>Jn(e).slice(8,-1),Wi=e=>Jn(e)==="[object Object]",Gr=e=>re(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Fn=Xr(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Gn=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Es=/-(\w)/g,Re=Gn(e=>e.replace(Es,(t,n)=>n?n.toUpperCase():"")),Ps=/\B([A-Z])/g,jt=Gn(e=>e.replace(Ps,"-$1").toLowerCase()),Zn=Gn(e=>e.charAt(0).toUpperCase()+e.slice(1)),mr=Gn(e=>e?`on${Zn(e)}`:""),Qt=(e,t)=>!Object.is(e,t),pr=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},zn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Is=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let Ra;const Ns=()=>Ra||(Ra=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Ae;class Ms{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Ae,!t&&Ae&&(this.index=(Ae.scopes||(Ae.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=Ae;try{return Ae=this,t()}finally{Ae=n}}}on(){Ae=this}off(){Ae=this.parent}stop(t){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const a=this.parent.scopes.pop();a&&a!==this&&(this.parent.scopes[this.index]=a,a.index=this.index)}this.parent=void 0,this._active=!1}}}function Fs(e,t=Ae){t&&t.active&&t.effects.push(e)}function js(){return Ae}const Zr=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ki=e=>(e.w&et)>0,Vi=e=>(e.n&et)>0,Ls=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=et},Rs=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const a=t[r];Ki(a)&&!Vi(a)?a.delete(e):t[n++]=a,a.w&=~et,a.n&=~et}t.length=n}},Ar=new WeakMap;let Bt=0,et=1;const Or=30;let Oe;const pt=Symbol(""),Sr=Symbol("");class ea{constructor(t,n=null,r){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,Fs(this,r)}run(){if(!this.active)return this.fn();let t=Oe,n=Je;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=Oe,Oe=this,Je=!0,et=1<<++Bt,Bt<=Or?Ls(this):Da(this),this.fn()}finally{Bt<=Or&&Rs(this),et=1<<--Bt,Oe=this.parent,Je=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Oe===this?this.deferStop=!0:this.active&&(Da(this),this.onStop&&this.onStop(),this.active=!1)}}function Da(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let Je=!0;const Xi=[];function Lt(){Xi.push(Je),Je=!1}function Rt(){const e=Xi.pop();Je=e===void 0?!0:e}function ve(e,t,n){if(Je&&Oe){let r=Ar.get(e);r||Ar.set(e,r=new Map);let a=r.get(n);a||r.set(n,a=Zr()),qi(a)}}function qi(e,t){let n=!1;Bt<=Or?Vi(e)||(e.n|=et,n=!Ki(e)):n=!e.has(Oe),n&&(e.add(Oe),Oe.deps.push(e))}function He(e,t,n,r,a,i){const o=Ar.get(e);if(!o)return;let s=[];if(t==="clear")s=[...o.values()];else if(n==="length"&&L(e)){const l=Number(r);o.forEach((c,d)=>{(d==="length"||d>=l)&&s.push(c)})}else switch(n!==void 0&&s.push(o.get(n)),t){case"add":L(e)?Gr(n)&&s.push(o.get("length")):(s.push(o.get(pt)),Ot(e)&&s.push(o.get(Sr)));break;case"delete":L(e)||(s.push(o.get(pt)),Ot(e)&&s.push(o.get(Sr)));break;case"set":Ot(e)&&s.push(o.get(pt));break}if(s.length===1)s[0]&&Cr(s[0]);else{const l=[];for(const c of s)c&&l.push(...c);Cr(Zr(l))}}function Cr(e,t){const n=L(e)?e:[...e];for(const r of n)r.computed&&$a(r);for(const r of n)r.computed||$a(r)}function $a(e,t){(e!==Oe||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const Ds=Xr("__proto__,__v_isRef,__isVue"),Qi=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Jr)),$s=ta(),zs=ta(!1,!0),Hs=ta(!0),za=Bs();function Bs(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const r=B(this);for(let i=0,o=this.length;i<o;i++)ve(r,"get",i+"");const a=r[t](...n);return a===-1||a===!1?r[t](...n.map(B)):a}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){Lt();const r=B(this)[t].apply(this,n);return Rt(),r}}),e}function Us(e){const t=B(this);return ve(t,"has",e),t.hasOwnProperty(e)}function ta(e=!1,t=!1){return function(r,a,i){if(a==="__v_isReactive")return!e;if(a==="__v_isReadonly")return e;if(a==="__v_isShallow")return t;if(a==="__v_raw"&&i===(e?t?il:to:t?eo:Zi).get(r))return r;const o=L(r);if(!e){if(o&&H(za,a))return Reflect.get(za,a,i);if(a==="hasOwnProperty")return Us}const s=Reflect.get(r,a,i);return(Jr(a)?Qi.has(a):Ds(a))||(e||ve(r,"get",a),t)?s:se(s)?o&&Gr(a)?s:s.value:J(s)?e?no(s):aa(s):s}}const Ys=Ji(),Ws=Ji(!0);function Ji(e=!1){return function(n,r,a,i){let o=n[r];if(Et(o)&&se(o)&&!se(a))return!1;if(!e&&(!Hn(a)&&!Et(a)&&(o=B(o),a=B(a)),!L(n)&&se(o)&&!se(a)))return o.value=a,!0;const s=L(n)&&Gr(r)?Number(r)<n.length:H(n,r),l=Reflect.set(n,r,a,i);return n===B(i)&&(s?Qt(a,o)&&He(n,"set",r,a):He(n,"add",r,a)),l}}function Ks(e,t){const n=H(e,t);e[t];const r=Reflect.deleteProperty(e,t);return r&&n&&He(e,"delete",t,void 0),r}function Vs(e,t){const n=Reflect.has(e,t);return(!Jr(t)||!Qi.has(t))&&ve(e,"has",t),n}function Xs(e){return ve(e,"iterate",L(e)?"length":pt),Reflect.ownKeys(e)}const Gi={get:$s,set:Ys,deleteProperty:Ks,has:Vs,ownKeys:Xs},qs={get:Hs,set(e,t){return!0},deleteProperty(e,t){return!0}},Qs=me({},Gi,{get:zs,set:Ws}),na=e=>e,er=e=>Reflect.getPrototypeOf(e);function vn(e,t,n=!1,r=!1){e=e.__v_raw;const a=B(e),i=B(t);n||(t!==i&&ve(a,"get",t),ve(a,"get",i));const{has:o}=er(a),s=r?na:n?oa:Jt;if(o.call(a,t))return s(e.get(t));if(o.call(a,i))return s(e.get(i));e!==a&&e.get(t)}function bn(e,t=!1){const n=this.__v_raw,r=B(n),a=B(e);return t||(e!==a&&ve(r,"has",e),ve(r,"has",a)),e===a?n.has(e):n.has(e)||n.has(a)}function yn(e,t=!1){return e=e.__v_raw,!t&&ve(B(e),"iterate",pt),Reflect.get(e,"size",e)}function Ha(e){e=B(e);const t=B(this);return er(t).has.call(t,e)||(t.add(e),He(t,"add",e,e)),this}function Ba(e,t){t=B(t);const n=B(this),{has:r,get:a}=er(n);let i=r.call(n,e);i||(e=B(e),i=r.call(n,e));const o=a.call(n,e);return n.set(e,t),i?Qt(t,o)&&He(n,"set",e,t):He(n,"add",e,t),this}function Ua(e){const t=B(this),{has:n,get:r}=er(t);let a=n.call(t,e);a||(e=B(e),a=n.call(t,e)),r&&r.call(t,e);const i=t.delete(e);return a&&He(t,"delete",e,void 0),i}function Ya(){const e=B(this),t=e.size!==0,n=e.clear();return t&&He(e,"clear",void 0,void 0),n}function _n(e,t){return function(r,a){const i=this,o=i.__v_raw,s=B(o),l=t?na:e?oa:Jt;return!e&&ve(s,"iterate",pt),o.forEach((c,d)=>r.call(a,l(c),l(d),i))}}function xn(e,t,n){return function(...r){const a=this.__v_raw,i=B(a),o=Ot(i),s=e==="entries"||e===Symbol.iterator&&o,l=e==="keys"&&o,c=a[e](...r),d=n?na:t?oa:Jt;return!t&&ve(i,"iterate",l?Sr:pt),{next(){const{value:m,done:v}=c.next();return v?{value:m,done:v}:{value:s?[d(m[0]),d(m[1])]:d(m),done:v}},[Symbol.iterator](){return this}}}}function Ve(e){return function(...t){return e==="delete"?!1:this}}function Js(){const e={get(i){return vn(this,i)},get size(){return yn(this)},has:bn,add:Ha,set:Ba,delete:Ua,clear:Ya,forEach:_n(!1,!1)},t={get(i){return vn(this,i,!1,!0)},get size(){return yn(this)},has:bn,add:Ha,set:Ba,delete:Ua,clear:Ya,forEach:_n(!1,!0)},n={get(i){return vn(this,i,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:_n(!0,!1)},r={get(i){return vn(this,i,!0,!0)},get size(){return yn(this,!0)},has(i){return bn.call(this,i,!0)},add:Ve("add"),set:Ve("set"),delete:Ve("delete"),clear:Ve("clear"),forEach:_n(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(i=>{e[i]=xn(i,!1,!1),n[i]=xn(i,!0,!1),t[i]=xn(i,!1,!0),r[i]=xn(i,!0,!0)}),[e,n,t,r]}const[Gs,Zs,el,tl]=Js();function ra(e,t){const n=t?e?tl:el:e?Zs:Gs;return(r,a,i)=>a==="__v_isReactive"?!e:a==="__v_isReadonly"?e:a==="__v_raw"?r:Reflect.get(H(n,a)&&a in r?n:r,a,i)}const nl={get:ra(!1,!1)},rl={get:ra(!1,!0)},al={get:ra(!0,!1)},Zi=new WeakMap,eo=new WeakMap,to=new WeakMap,il=new WeakMap;function ol(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function sl(e){return e.__v_skip||!Object.isExtensible(e)?0:ol(Ts(e))}function aa(e){return Et(e)?e:ia(e,!1,Gi,nl,Zi)}function ll(e){return ia(e,!1,Qs,rl,eo)}function no(e){return ia(e,!0,qs,al,to)}function ia(e,t,n,r,a){if(!J(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const i=a.get(e);if(i)return i;const o=sl(e);if(o===0)return e;const s=new Proxy(e,o===2?r:n);return a.set(e,s),s}function St(e){return Et(e)?St(e.__v_raw):!!(e&&e.__v_isReactive)}function Et(e){return!!(e&&e.__v_isReadonly)}function Hn(e){return!!(e&&e.__v_isShallow)}function ro(e){return St(e)||Et(e)}function B(e){const t=e&&e.__v_raw;return t?B(t):e}function ao(e){return zn(e,"__v_skip",!0),e}const Jt=e=>J(e)?aa(e):e,oa=e=>J(e)?no(e):e;function io(e){Je&&Oe&&(e=B(e),qi(e.dep||(e.dep=Zr())))}function oo(e,t){e=B(e);const n=e.dep;n&&Cr(n)}function se(e){return!!(e&&e.__v_isRef===!0)}function Qe(e){return fl(e,!1)}function fl(e,t){return se(e)?e:new cl(e,t)}class cl{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:B(t),this._value=n?t:Jt(t)}get value(){return io(this),this._value}set value(t){const n=this.__v_isShallow||Hn(t)||Et(t);t=n?t:B(t),Qt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Jt(t),oo(this))}}function sa(e){return se(e)?e.value:e}const ul={get:(e,t,n)=>sa(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const a=e[t];return se(a)&&!se(n)?(a.value=n,!0):Reflect.set(e,t,n,r)}};function so(e){return St(e)?e:new Proxy(e,ul)}var lo;class dl{constructor(t,n,r,a){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[lo]=!1,this._dirty=!0,this.effect=new ea(t,()=>{this._dirty||(this._dirty=!0,oo(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!a,this.__v_isReadonly=r}get value(){const t=B(this);return io(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}lo="__v_isReadonly";function ml(e,t,n=!1){let r,a;const i=R(e);return i?(r=e,a=Ee):(r=e.get,a=e.set),new dl(r,a,i||!a,n)}function Ge(e,t,n,r){let a;try{a=r?e(...r):e()}catch(i){tr(i,t,n)}return a}function Pe(e,t,n,r){if(R(e)){const i=Ge(e,t,n,r);return i&&Ui(i)&&i.catch(o=>{tr(o,t,n)}),i}const a=[];for(let i=0;i<e.length;i++)a.push(Pe(e[i],t,n,r));return a}function tr(e,t,n,r=!0){const a=t?t.vnode:null;if(t){let i=t.parent;const o=t.proxy,s=n;for(;i;){const c=i.ec;if(c){for(let d=0;d<c.length;d++)if(c[d](e,o,s)===!1)return}i=i.parent}const l=t.appContext.config.errorHandler;if(l){Ge(l,null,10,[e,o,s]);return}}pl(e,n,a,r)}function pl(e,t,n,r=!0){console.error(e)}let Gt=!1,Tr=!1;const oe=[];let je=0;const Ct=[];let ze=null,ct=0;const fo=Promise.resolve();let la=null;function hl(e){const t=la||fo;return e?t.then(this?e.bind(this):e):t}function gl(e){let t=je+1,n=oe.length;for(;t<n;){const r=t+n>>>1;Zt(oe[r])<e?t=r+1:n=r}return t}function fa(e){(!oe.length||!oe.includes(e,Gt&&e.allowRecurse?je+1:je))&&(e.id==null?oe.push(e):oe.splice(gl(e.id),0,e),co())}function co(){!Gt&&!Tr&&(Tr=!0,la=fo.then(mo))}function vl(e){const t=oe.indexOf(e);t>je&&oe.splice(t,1)}function bl(e){L(e)?Ct.push(...e):(!ze||!ze.includes(e,e.allowRecurse?ct+1:ct))&&Ct.push(e),co()}function Wa(e,t=Gt?je+1:0){for(;t<oe.length;t++){const n=oe[t];n&&n.pre&&(oe.splice(t,1),t--,n())}}function uo(e){if(Ct.length){const t=[...new Set(Ct)];if(Ct.length=0,ze){ze.push(...t);return}for(ze=t,ze.sort((n,r)=>Zt(n)-Zt(r)),ct=0;ct<ze.length;ct++)ze[ct]();ze=null,ct=0}}const Zt=e=>e.id==null?1/0:e.id,yl=(e,t)=>{const n=Zt(e)-Zt(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function mo(e){Tr=!1,Gt=!0,oe.sort(yl);const t=Ee;try{for(je=0;je<oe.length;je++){const n=oe[je];n&&n.active!==!1&&Ge(n,null,14)}}finally{je=0,oe.length=0,uo(),Gt=!1,la=null,(oe.length||Ct.length)&&mo()}}function _l(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||Q;let a=n;const i=t.startsWith("update:"),o=i&&t.slice(7);if(o&&o in r){const d=`${o==="modelValue"?"model":o}Modifiers`,{number:m,trim:v}=r[d]||Q;v&&(a=n.map(w=>re(w)?w.trim():w)),m&&(a=n.map(Is))}let s,l=r[s=mr(t)]||r[s=mr(Re(t))];!l&&i&&(l=r[s=mr(jt(t))]),l&&Pe(l,e,6,a);const c=r[s+"Once"];if(c){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,Pe(c,e,6,a)}}function po(e,t,n=!1){const r=t.emitsCache,a=r.get(e);if(a!==void 0)return a;const i=e.emits;let o={},s=!1;if(!R(e)){const l=c=>{const d=po(c,t,!0);d&&(s=!0,me(o,d))};!n&&t.mixins.length&&t.mixins.forEach(l),e.extends&&l(e.extends),e.mixins&&e.mixins.forEach(l)}return!i&&!s?(J(e)&&r.set(e,null),null):(L(i)?i.forEach(l=>o[l]=null):me(o,i),J(e)&&r.set(e,o),o)}function nr(e,t){return!e||!Qn(t)?!1:(t=t.slice(2).replace(/Once$/,""),H(e,t[0].toLowerCase()+t.slice(1))||H(e,jt(t))||H(e,t))}let ue=null,ho=null;function Bn(e){const t=ue;return ue=e,ho=e&&e.type.__scopeId||null,t}function gt(e,t=ue,n){if(!t||e._n)return e;const r=(...a)=>{r._d&&ei(-1);const i=Bn(t);let o;try{o=e(...a)}finally{Bn(i),r._d&&ei(1)}return o};return r._n=!0,r._c=!0,r._d=!0,r}function hr(e){const{type:t,vnode:n,proxy:r,withProxy:a,props:i,propsOptions:[o],slots:s,attrs:l,emit:c,render:d,renderCache:m,data:v,setupState:w,ctx:F,inheritAttrs:N}=e;let U,x;const C=Bn(e);try{if(n.shapeFlag&4){const D=a||r;U=Fe(d.call(D,D,m,i,w,v,F)),x=l}else{const D=t;U=Fe(D.length>1?D(i,{attrs:l,slots:s,emit:c}):D(i,null)),x=t.props?l:xl(l)}}catch(D){Kt.length=0,tr(D,e,1),U=$(tt)}let S=U;if(x&&N!==!1){const D=Object.keys(x),{shapeFlag:Y}=S;D.length&&Y&7&&(o&&D.some(qr)&&(x=kl(x,o)),S=It(S,x))}return n.dirs&&(S=It(S),S.dirs=S.dirs?S.dirs.concat(n.dirs):n.dirs),n.transition&&(S.transition=n.transition),U=S,Bn(C),U}const xl=e=>{let t;for(const n in e)(n==="class"||n==="style"||Qn(n))&&((t||(t={}))[n]=e[n]);return t},kl=(e,t)=>{const n={};for(const r in e)(!qr(r)||!(r.slice(9)in t))&&(n[r]=e[r]);return n};function wl(e,t,n){const{props:r,children:a,component:i}=e,{props:o,children:s,patchFlag:l}=t,c=i.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&l>=0){if(l&1024)return!0;if(l&16)return r?Ka(r,o,c):!!o;if(l&8){const d=t.dynamicProps;for(let m=0;m<d.length;m++){const v=d[m];if(o[v]!==r[v]&&!nr(c,v))return!0}}}else return(a||s)&&(!s||!s.$stable)?!0:r===o?!1:r?o?Ka(r,o,c):!0:!!o;return!1}function Ka(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let a=0;a<r.length;a++){const i=r[a];if(t[i]!==e[i]&&!nr(n,i))return!0}return!1}function Al({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const Ol=e=>e.__isSuspense;function Sl(e,t){t&&t.pendingBranch?L(e)?t.effects.push(...e):t.effects.push(e):bl(e)}function Cl(e,t){if(ne){let n=ne.provides;const r=ne.parent&&ne.parent.provides;r===n&&(n=ne.provides=Object.create(r)),n[e]=t}}function jn(e,t,n=!1){const r=ne||ue;if(r){const a=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(a&&e in a)return a[e];if(arguments.length>1)return n&&R(t)?t.call(r.proxy):t}}function go(e,t){return ca(e,null,t)}const kn={};function Ln(e,t,n){return ca(e,t,n)}function ca(e,t,{immediate:n,deep:r,flush:a,onTrack:i,onTrigger:o}=Q){const s=js()===(ne==null?void 0:ne.scope)?ne:null;let l,c=!1,d=!1;if(se(e)?(l=()=>e.value,c=Hn(e)):St(e)?(l=()=>e,r=!0):L(e)?(d=!0,c=e.some(S=>St(S)||Hn(S)),l=()=>e.map(S=>{if(se(S))return S.value;if(St(S))return xt(S);if(R(S))return Ge(S,s,2)})):R(e)?t?l=()=>Ge(e,s,2):l=()=>{if(!(s&&s.isUnmounted))return m&&m(),Pe(e,s,3,[v])}:l=Ee,t&&r){const S=l;l=()=>xt(S())}let m,v=S=>{m=x.onStop=()=>{Ge(S,s,4)}},w;if(tn)if(v=Ee,t?n&&Pe(t,s,3,[l(),d?[]:void 0,v]):l(),a==="sync"){const S=wf();w=S.__watcherHandles||(S.__watcherHandles=[])}else return Ee;let F=d?new Array(e.length).fill(kn):kn;const N=()=>{if(x.active)if(t){const S=x.run();(r||c||(d?S.some((D,Y)=>Qt(D,F[Y])):Qt(S,F)))&&(m&&m(),Pe(t,s,3,[S,F===kn?void 0:d&&F[0]===kn?[]:F,v]),F=S)}else x.run()};N.allowRecurse=!!t;let U;a==="sync"?U=N:a==="post"?U=()=>ge(N,s&&s.suspense):(N.pre=!0,s&&(N.id=s.uid),U=()=>fa(N));const x=new ea(l,U);t?n?N():F=x.run():a==="post"?ge(x.run.bind(x),s&&s.suspense):x.run();const C=()=>{x.stop(),s&&s.scope&&Qr(s.scope.effects,x)};return w&&w.push(C),C}function Tl(e,t,n){const r=this.proxy,a=re(e)?e.includes(".")?vo(r,e):()=>r[e]:e.bind(r,r);let i;R(t)?i=t:(i=t.handler,n=t);const o=ne;Nt(this);const s=ca(a,i.bind(r),n);return o?Nt(o):ht(),s}function vo(e,t){const n=t.split(".");return()=>{let r=e;for(let a=0;a<n.length&&r;a++)r=r[n[a]];return r}}function xt(e,t){if(!J(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),se(e))xt(e.value,t);else if(L(e))for(let n=0;n<e.length;n++)xt(e[n],t);else if(Bi(e)||Ot(e))e.forEach(n=>{xt(n,t)});else if(Wi(e))for(const n in e)xt(e[n],t);return e}function ua(e){return R(e)?{setup:e,name:e.name}:e}const Yt=e=>!!e.type.__asyncLoader,bo=e=>e.type.__isKeepAlive;function El(e,t){yo(e,"a",t)}function Pl(e,t){yo(e,"da",t)}function yo(e,t,n=ne){const r=e.__wdc||(e.__wdc=()=>{let a=n;for(;a;){if(a.isDeactivated)return;a=a.parent}return e()});if(rr(t,r,n),n){let a=n.parent;for(;a&&a.parent;)bo(a.parent.vnode)&&Il(r,t,n,a),a=a.parent}}function Il(e,t,n,r){const a=rr(t,e,r,!0);_o(()=>{Qr(r[t],a)},n)}function rr(e,t,n=ne,r=!1){if(n){const a=n[e]||(n[e]=[]),i=t.__weh||(t.__weh=(...o)=>{if(n.isUnmounted)return;Lt(),Nt(n);const s=Pe(t,n,e,o);return ht(),Rt(),s});return r?a.unshift(i):a.push(i),i}}const We=e=>(t,n=ne)=>(!tn||e==="sp")&&rr(e,(...r)=>t(...r),n),Nl=We("bm"),Ml=We("m"),Fl=We("bu"),jl=We("u"),Ll=We("bum"),_o=We("um"),Rl=We("sp"),Dl=We("rtg"),$l=We("rtc");function zl(e,t=ne){rr("ec",e,t)}function st(e,t,n,r){const a=e.dirs,i=t&&t.dirs;for(let o=0;o<a.length;o++){const s=a[o];i&&(s.oldValue=i[o].value);let l=s.dir[r];l&&(Lt(),Pe(l,n,8,[e.el,s,e,t]),Rt())}}const xo="components";function Hl(e,t){return Ul(xo,e,!0,t)||e}const Bl=Symbol();function Ul(e,t,n=!0,r=!1){const a=ue||ne;if(a){const i=a.type;if(e===xo){const s=_f(i,!1);if(s&&(s===t||s===Re(t)||s===Zn(Re(t))))return i}const o=Va(a[e]||i[e],t)||Va(a.appContext[e],t);return!o&&r?i:o}}function Va(e,t){return e&&(e[t]||e[Re(t)]||e[Zn(Re(t))])}function ko(e,t,n,r){let a;const i=n&&n[r];if(L(e)||re(e)){a=new Array(e.length);for(let o=0,s=e.length;o<s;o++)a[o]=t(e[o],o,void 0,i&&i[o])}else if(typeof e=="number"){a=new Array(e);for(let o=0;o<e;o++)a[o]=t(o+1,o,void 0,i&&i[o])}else if(J(e))if(e[Symbol.iterator])a=Array.from(e,(o,s)=>t(o,s,void 0,i&&i[s]));else{const o=Object.keys(e);a=new Array(o.length);for(let s=0,l=o.length;s<l;s++){const c=o[s];a[s]=t(e[c],c,s,i&&i[s])}}else a=[];return n&&(n[r]=a),a}function wo(e,t,n={},r,a){if(ue.isCE||ue.parent&&Yt(ue.parent)&&ue.parent.isCE)return t!=="default"&&(n.name=t),$("slot",n,r&&r());let i=e[t];i&&i._c&&(i._d=!1),ee();const o=i&&Ao(i(n)),s=Pt(ce,{key:n.key||o&&o.key||`_${t}`},o||(r?r():[]),o&&e._===1?64:-2);return!a&&s.scopeId&&(s.slotScopeIds=[s.scopeId+"-s"]),i&&i._c&&(i._d=!0),s}function Ao(e){return e.some(t=>Yn(t)?!(t.type===tt||t.type===ce&&!Ao(t.children)):!0)?e:null}const Er=e=>e?Lo(e)?ha(e)||e.proxy:Er(e.parent):null,Wt=me(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>Er(e.parent),$root:e=>Er(e.root),$emit:e=>e.emit,$options:e=>da(e),$forceUpdate:e=>e.f||(e.f=()=>fa(e.update)),$nextTick:e=>e.n||(e.n=hl.bind(e.proxy)),$watch:e=>Tl.bind(e)}),gr=(e,t)=>e!==Q&&!e.__isScriptSetup&&H(e,t),Yl={get({_:e},t){const{ctx:n,setupState:r,data:a,props:i,accessCache:o,type:s,appContext:l}=e;let c;if(t[0]!=="$"){const w=o[t];if(w!==void 0)switch(w){case 1:return r[t];case 2:return a[t];case 4:return n[t];case 3:return i[t]}else{if(gr(r,t))return o[t]=1,r[t];if(a!==Q&&H(a,t))return o[t]=2,a[t];if((c=e.propsOptions[0])&&H(c,t))return o[t]=3,i[t];if(n!==Q&&H(n,t))return o[t]=4,n[t];Pr&&(o[t]=0)}}const d=Wt[t];let m,v;if(d)return t==="$attrs"&&ve(e,"get",t),d(e);if((m=s.__cssModules)&&(m=m[t]))return m;if(n!==Q&&H(n,t))return o[t]=4,n[t];if(v=l.config.globalProperties,H(v,t))return v[t]},set({_:e},t,n){const{data:r,setupState:a,ctx:i}=e;return gr(a,t)?(a[t]=n,!0):r!==Q&&H(r,t)?(r[t]=n,!0):H(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(i[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:a,propsOptions:i}},o){let s;return!!n[o]||e!==Q&&H(e,o)||gr(t,o)||(s=i[0])&&H(s,o)||H(r,o)||H(Wt,o)||H(a.config.globalProperties,o)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:H(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Pr=!0;function Wl(e){const t=da(e),n=e.proxy,r=e.ctx;Pr=!1,t.beforeCreate&&Xa(t.beforeCreate,e,"bc");const{data:a,computed:i,methods:o,watch:s,provide:l,inject:c,created:d,beforeMount:m,mounted:v,beforeUpdate:w,updated:F,activated:N,deactivated:U,beforeDestroy:x,beforeUnmount:C,destroyed:S,unmounted:D,render:Y,renderTracked:pe,renderTriggered:ie,errorCaptured:ke,serverPrefetch:_e,expose:De,inheritAttrs:$t,components:mn,directives:pn,filters:cr}=t;if(c&&Kl(c,r,null,e.appContext.config.unwrapInjectedRef),o)for(const G in o){const K=o[G];R(K)&&(r[G]=K.bind(n))}if(a){const G=a.call(n,n);J(G)&&(e.data=aa(G))}if(Pr=!0,i)for(const G in i){const K=i[G],it=R(K)?K.bind(n,n):R(K.get)?K.get.bind(n,n):Ee,hn=!R(K)&&R(K.set)?K.set.bind(n):Ee,ot=xe({get:it,set:hn});Object.defineProperty(r,G,{enumerable:!0,configurable:!0,get:()=>ot.value,set:Ie=>ot.value=Ie})}if(s)for(const G in s)Oo(s[G],r,n,G);if(l){const G=R(l)?l.call(n):l;Reflect.ownKeys(G).forEach(K=>{Cl(K,G[K])})}d&&Xa(d,e,"c");function le(G,K){L(K)?K.forEach(it=>G(it.bind(n))):K&&G(K.bind(n))}if(le(Nl,m),le(Ml,v),le(Fl,w),le(jl,F),le(El,N),le(Pl,U),le(zl,ke),le($l,pe),le(Dl,ie),le(Ll,C),le(_o,D),le(Rl,_e),L(De))if(De.length){const G=e.exposed||(e.exposed={});De.forEach(K=>{Object.defineProperty(G,K,{get:()=>n[K],set:it=>n[K]=it})})}else e.exposed||(e.exposed={});Y&&e.render===Ee&&(e.render=Y),$t!=null&&(e.inheritAttrs=$t),mn&&(e.components=mn),pn&&(e.directives=pn)}function Kl(e,t,n=Ee,r=!1){L(e)&&(e=Ir(e));for(const a in e){const i=e[a];let o;J(i)?"default"in i?o=jn(i.from||a,i.default,!0):o=jn(i.from||a):o=jn(i),se(o)&&r?Object.defineProperty(t,a,{enumerable:!0,configurable:!0,get:()=>o.value,set:s=>o.value=s}):t[a]=o}}function Xa(e,t,n){Pe(L(e)?e.map(r=>r.bind(t.proxy)):e.bind(t.proxy),t,n)}function Oo(e,t,n,r){const a=r.includes(".")?vo(n,r):()=>n[r];if(re(e)){const i=t[e];R(i)&&Ln(a,i)}else if(R(e))Ln(a,e.bind(n));else if(J(e))if(L(e))e.forEach(i=>Oo(i,t,n,r));else{const i=R(e.handler)?e.handler.bind(n):t[e.handler];R(i)&&Ln(a,i,e)}}function da(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:a,optionsCache:i,config:{optionMergeStrategies:o}}=e.appContext,s=i.get(t);let l;return s?l=s:!a.length&&!n&&!r?l=t:(l={},a.length&&a.forEach(c=>Un(l,c,o,!0)),Un(l,t,o)),J(t)&&i.set(t,l),l}function Un(e,t,n,r=!1){const{mixins:a,extends:i}=t;i&&Un(e,i,n,!0),a&&a.forEach(o=>Un(e,o,n,!0));for(const o in t)if(!(r&&o==="expose")){const s=Vl[o]||n&&n[o];e[o]=s?s(e[o],t[o]):t[o]}return e}const Vl={data:qa,props:ft,emits:ft,methods:ft,computed:ft,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:ft,directives:ft,watch:ql,provide:qa,inject:Xl};function qa(e,t){return t?e?function(){return me(R(e)?e.call(this,this):e,R(t)?t.call(this,this):t)}:t:e}function Xl(e,t){return ft(Ir(e),Ir(t))}function Ir(e){if(L(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function ft(e,t){return e?me(me(Object.create(null),e),t):t}function ql(e,t){if(!e)return t;if(!t)return e;const n=me(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function Ql(e,t,n,r=!1){const a={},i={};zn(i,ir,1),e.propsDefaults=Object.create(null),So(e,t,a,i);for(const o in e.propsOptions[0])o in a||(a[o]=void 0);n?e.props=r?a:ll(a):e.type.props?e.props=a:e.props=i,e.attrs=i}function Jl(e,t,n,r){const{props:a,attrs:i,vnode:{patchFlag:o}}=e,s=B(a),[l]=e.propsOptions;let c=!1;if((r||o>0)&&!(o&16)){if(o&8){const d=e.vnode.dynamicProps;for(let m=0;m<d.length;m++){let v=d[m];if(nr(e.emitsOptions,v))continue;const w=t[v];if(l)if(H(i,v))w!==i[v]&&(i[v]=w,c=!0);else{const F=Re(v);a[F]=Nr(l,s,F,w,e,!1)}else w!==i[v]&&(i[v]=w,c=!0)}}}else{So(e,t,a,i)&&(c=!0);let d;for(const m in s)(!t||!H(t,m)&&((d=jt(m))===m||!H(t,d)))&&(l?n&&(n[m]!==void 0||n[d]!==void 0)&&(a[m]=Nr(l,s,m,void 0,e,!0)):delete a[m]);if(i!==s)for(const m in i)(!t||!H(t,m))&&(delete i[m],c=!0)}c&&He(e,"set","$attrs")}function So(e,t,n,r){const[a,i]=e.propsOptions;let o=!1,s;if(t)for(let l in t){if(Fn(l))continue;const c=t[l];let d;a&&H(a,d=Re(l))?!i||!i.includes(d)?n[d]=c:(s||(s={}))[d]=c:nr(e.emitsOptions,l)||(!(l in r)||c!==r[l])&&(r[l]=c,o=!0)}if(i){const l=B(n),c=s||Q;for(let d=0;d<i.length;d++){const m=i[d];n[m]=Nr(a,l,m,c[m],e,!H(c,m))}}return o}function Nr(e,t,n,r,a,i){const o=e[n];if(o!=null){const s=H(o,"default");if(s&&r===void 0){const l=o.default;if(o.type!==Function&&R(l)){const{propsDefaults:c}=a;n in c?r=c[n]:(Nt(a),r=c[n]=l.call(null,t),ht())}else r=l}o[0]&&(i&&!s?r=!1:o[1]&&(r===""||r===jt(n))&&(r=!0))}return r}function Co(e,t,n=!1){const r=t.propsCache,a=r.get(e);if(a)return a;const i=e.props,o={},s=[];let l=!1;if(!R(e)){const d=m=>{l=!0;const[v,w]=Co(m,t,!0);me(o,v),w&&s.push(...w)};!n&&t.mixins.length&&t.mixins.forEach(d),e.extends&&d(e.extends),e.mixins&&e.mixins.forEach(d)}if(!i&&!l)return J(e)&&r.set(e,At),At;if(L(i))for(let d=0;d<i.length;d++){const m=Re(i[d]);Qa(m)&&(o[m]=Q)}else if(i)for(const d in i){const m=Re(d);if(Qa(m)){const v=i[d],w=o[m]=L(v)||R(v)?{type:v}:Object.assign({},v);if(w){const F=Za(Boolean,w.type),N=Za(String,w.type);w[0]=F>-1,w[1]=N<0||F<N,(F>-1||H(w,"default"))&&s.push(m)}}}const c=[o,s];return J(e)&&r.set(e,c),c}function Qa(e){return e[0]!=="$"}function Ja(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function Ga(e,t){return Ja(e)===Ja(t)}function Za(e,t){return L(t)?t.findIndex(n=>Ga(n,e)):R(t)&&Ga(t,e)?0:-1}const To=e=>e[0]==="_"||e==="$stable",ma=e=>L(e)?e.map(Fe):[Fe(e)],Gl=(e,t,n)=>{if(t._n)return t;const r=gt((...a)=>ma(t(...a)),n);return r._c=!1,r},Eo=(e,t,n)=>{const r=e._ctx;for(const a in e){if(To(a))continue;const i=e[a];if(R(i))t[a]=Gl(a,i,r);else if(i!=null){const o=ma(i);t[a]=()=>o}}},Po=(e,t)=>{const n=ma(t);e.slots.default=()=>n},Zl=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=B(t),zn(t,"_",n)):Eo(t,e.slots={})}else e.slots={},t&&Po(e,t);zn(e.slots,ir,1)},ef=(e,t,n)=>{const{vnode:r,slots:a}=e;let i=!0,o=Q;if(r.shapeFlag&32){const s=t._;s?n&&s===1?i=!1:(me(a,t),!n&&s===1&&delete a._):(i=!t.$stable,Eo(t,a)),o=t}else t&&(Po(e,t),o={default:1});if(i)for(const s in a)!To(s)&&!(s in o)&&delete a[s]};function Io(){return{app:null,config:{isNativeTag:Os,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let tf=0;function nf(e,t){return function(r,a=null){R(r)||(r=Object.assign({},r)),a!=null&&!J(a)&&(a=null);const i=Io(),o=new Set;let s=!1;const l=i.app={_uid:tf++,_component:r,_props:a,_container:null,_context:i,_instance:null,version:Af,get config(){return i.config},set config(c){},use(c,...d){return o.has(c)||(c&&R(c.install)?(o.add(c),c.install(l,...d)):R(c)&&(o.add(c),c(l,...d))),l},mixin(c){return i.mixins.includes(c)||i.mixins.push(c),l},component(c,d){return d?(i.components[c]=d,l):i.components[c]},directive(c,d){return d?(i.directives[c]=d,l):i.directives[c]},mount(c,d,m){if(!s){const v=$(r,a);return v.appContext=i,d&&t?t(v,c):e(v,c,m),s=!0,l._container=c,c.__vue_app__=l,ha(v.component)||v.component.proxy}},unmount(){s&&(e(null,l._container),delete l._container.__vue_app__)},provide(c,d){return i.provides[c]=d,l}};return l}}function Mr(e,t,n,r,a=!1){if(L(e)){e.forEach((v,w)=>Mr(v,t&&(L(t)?t[w]:t),n,r,a));return}if(Yt(r)&&!a)return;const i=r.shapeFlag&4?ha(r.component)||r.component.proxy:r.el,o=a?null:i,{i:s,r:l}=e,c=t&&t.r,d=s.refs===Q?s.refs={}:s.refs,m=s.setupState;if(c!=null&&c!==l&&(re(c)?(d[c]=null,H(m,c)&&(m[c]=null)):se(c)&&(c.value=null)),R(l))Ge(l,s,12,[o,d]);else{const v=re(l),w=se(l);if(v||w){const F=()=>{if(e.f){const N=v?H(m,l)?m[l]:d[l]:l.value;a?L(N)&&Qr(N,i):L(N)?N.includes(i)||N.push(i):v?(d[l]=[i],H(m,l)&&(m[l]=d[l])):(l.value=[i],e.k&&(d[e.k]=l.value))}else v?(d[l]=o,H(m,l)&&(m[l]=o)):w&&(l.value=o,e.k&&(d[e.k]=o))};o?(F.id=-1,ge(F,n)):F()}}}const ge=Sl;function rf(e){return af(e)}function af(e,t){const n=Ns();n.__VUE__=!0;const{insert:r,remove:a,patchProp:i,createElement:o,createText:s,createComment:l,setText:c,setElementText:d,parentNode:m,nextSibling:v,setScopeId:w=Ee,insertStaticContent:F}=e,N=(f,u,p,g=null,h=null,_=null,A=!1,y=null,k=!!u.dynamicChildren)=>{if(f===u)return;f&&!Ht(f,u)&&(g=gn(f),Ie(f,h,_,!0),f=null),u.patchFlag===-2&&(k=!1,u.dynamicChildren=null);const{type:b,ref:P,shapeFlag:T}=u;switch(b){case ar:U(f,u,p,g);break;case tt:x(f,u,p,g);break;case vr:f==null&&C(u,p,g,A);break;case ce:mn(f,u,p,g,h,_,A,y,k);break;default:T&1?Y(f,u,p,g,h,_,A,y,k):T&6?pn(f,u,p,g,h,_,A,y,k):(T&64||T&128)&&b.process(f,u,p,g,h,_,A,y,k,yt)}P!=null&&h&&Mr(P,f&&f.ref,_,u||f,!u)},U=(f,u,p,g)=>{if(f==null)r(u.el=s(u.children),p,g);else{const h=u.el=f.el;u.children!==f.children&&c(h,u.children)}},x=(f,u,p,g)=>{f==null?r(u.el=l(u.children||""),p,g):u.el=f.el},C=(f,u,p,g)=>{[f.el,f.anchor]=F(f.children,u,p,g,f.el,f.anchor)},S=({el:f,anchor:u},p,g)=>{let h;for(;f&&f!==u;)h=v(f),r(f,p,g),f=h;r(u,p,g)},D=({el:f,anchor:u})=>{let p;for(;f&&f!==u;)p=v(f),a(f),f=p;a(u)},Y=(f,u,p,g,h,_,A,y,k)=>{A=A||u.type==="svg",f==null?pe(u,p,g,h,_,A,y,k):_e(f,u,h,_,A,y,k)},pe=(f,u,p,g,h,_,A,y)=>{let k,b;const{type:P,props:T,shapeFlag:I,transition:j,dirs:z}=f;if(k=f.el=o(f.type,_,T&&T.is,T),I&8?d(k,f.children):I&16&&ke(f.children,k,null,g,h,_&&P!=="foreignObject",A,y),z&&st(f,null,g,"created"),ie(k,f,f.scopeId,A,g),T){for(const W in T)W!=="value"&&!Fn(W)&&i(k,W,null,T[W],_,f.children,g,h,$e);"value"in T&&i(k,"value",null,T.value),(b=T.onVnodeBeforeMount)&&Me(b,g,f)}z&&st(f,null,g,"beforeMount");const V=(!h||h&&!h.pendingBranch)&&j&&!j.persisted;V&&j.beforeEnter(k),r(k,u,p),((b=T&&T.onVnodeMounted)||V||z)&&ge(()=>{b&&Me(b,g,f),V&&j.enter(k),z&&st(f,null,g,"mounted")},h)},ie=(f,u,p,g,h)=>{if(p&&w(f,p),g)for(let _=0;_<g.length;_++)w(f,g[_]);if(h){let _=h.subTree;if(u===_){const A=h.vnode;ie(f,A,A.scopeId,A.slotScopeIds,h.parent)}}},ke=(f,u,p,g,h,_,A,y,k=0)=>{for(let b=k;b<f.length;b++){const P=f[b]=y?qe(f[b]):Fe(f[b]);N(null,P,u,p,g,h,_,A,y)}},_e=(f,u,p,g,h,_,A)=>{const y=u.el=f.el;let{patchFlag:k,dynamicChildren:b,dirs:P}=u;k|=f.patchFlag&16;const T=f.props||Q,I=u.props||Q;let j;p&&lt(p,!1),(j=I.onVnodeBeforeUpdate)&&Me(j,p,u,f),P&&st(u,f,p,"beforeUpdate"),p&&lt(p,!0);const z=h&&u.type!=="foreignObject";if(b?De(f.dynamicChildren,b,y,p,g,z,_):A||K(f,u,y,null,p,g,z,_,!1),k>0){if(k&16)$t(y,u,T,I,p,g,h);else if(k&2&&T.class!==I.class&&i(y,"class",null,I.class,h),k&4&&i(y,"style",T.style,I.style,h),k&8){const V=u.dynamicProps;for(let W=0;W<V.length;W++){const te=V[W],we=T[te],_t=I[te];(_t!==we||te==="value")&&i(y,te,we,_t,h,f.children,p,g,$e)}}k&1&&f.children!==u.children&&d(y,u.children)}else!A&&b==null&&$t(y,u,T,I,p,g,h);((j=I.onVnodeUpdated)||P)&&ge(()=>{j&&Me(j,p,u,f),P&&st(u,f,p,"updated")},g)},De=(f,u,p,g,h,_,A)=>{for(let y=0;y<u.length;y++){const k=f[y],b=u[y],P=k.el&&(k.type===ce||!Ht(k,b)||k.shapeFlag&70)?m(k.el):p;N(k,b,P,null,g,h,_,A,!0)}},$t=(f,u,p,g,h,_,A)=>{if(p!==g){if(p!==Q)for(const y in p)!Fn(y)&&!(y in g)&&i(f,y,p[y],null,A,u.children,h,_,$e);for(const y in g){if(Fn(y))continue;const k=g[y],b=p[y];k!==b&&y!=="value"&&i(f,y,b,k,A,u.children,h,_,$e)}"value"in g&&i(f,"value",p.value,g.value)}},mn=(f,u,p,g,h,_,A,y,k)=>{const b=u.el=f?f.el:s(""),P=u.anchor=f?f.anchor:s("");let{patchFlag:T,dynamicChildren:I,slotScopeIds:j}=u;j&&(y=y?y.concat(j):j),f==null?(r(b,p,g),r(P,p,g),ke(u.children,p,P,h,_,A,y,k)):T>0&&T&64&&I&&f.dynamicChildren?(De(f.dynamicChildren,I,p,h,_,A,y),(u.key!=null||h&&u===h.subTree)&&No(f,u,!0)):K(f,u,p,P,h,_,A,y,k)},pn=(f,u,p,g,h,_,A,y,k)=>{u.slotScopeIds=y,f==null?u.shapeFlag&512?h.ctx.activate(u,p,g,A,k):cr(u,p,g,h,_,A,k):Ia(f,u,k)},cr=(f,u,p,g,h,_,A)=>{const y=f.component=hf(f,g,h);if(bo(f)&&(y.ctx.renderer=yt),gf(y),y.asyncDep){if(h&&h.registerDep(y,le),!f.el){const k=y.subTree=$(tt);x(null,k,u,p)}return}le(y,f,u,p,h,_,A)},Ia=(f,u,p)=>{const g=u.component=f.component;if(wl(f,u,p))if(g.asyncDep&&!g.asyncResolved){G(g,u,p);return}else g.next=u,vl(g.update),g.update();else u.el=f.el,g.vnode=u},le=(f,u,p,g,h,_,A)=>{const y=()=>{if(f.isMounted){let{next:P,bu:T,u:I,parent:j,vnode:z}=f,V=P,W;lt(f,!1),P?(P.el=z.el,G(f,P,A)):P=z,T&&pr(T),(W=P.props&&P.props.onVnodeBeforeUpdate)&&Me(W,j,P,z),lt(f,!0);const te=hr(f),we=f.subTree;f.subTree=te,N(we,te,m(we.el),gn(we),f,h,_),P.el=te.el,V===null&&Al(f,te.el),I&&ge(I,h),(W=P.props&&P.props.onVnodeUpdated)&&ge(()=>Me(W,j,P,z),h)}else{let P;const{el:T,props:I}=u,{bm:j,m:z,parent:V}=f,W=Yt(u);if(lt(f,!1),j&&pr(j),!W&&(P=I&&I.onVnodeBeforeMount)&&Me(P,V,u),lt(f,!0),T&&dr){const te=()=>{f.subTree=hr(f),dr(T,f.subTree,f,h,null)};W?u.type.__asyncLoader().then(()=>!f.isUnmounted&&te()):te()}else{const te=f.subTree=hr(f);N(null,te,p,g,f,h,_),u.el=te.el}if(z&&ge(z,h),!W&&(P=I&&I.onVnodeMounted)){const te=u;ge(()=>Me(P,V,te),h)}(u.shapeFlag&256||V&&Yt(V.vnode)&&V.vnode.shapeFlag&256)&&f.a&&ge(f.a,h),f.isMounted=!0,u=p=g=null}},k=f.effect=new ea(y,()=>fa(b),f.scope),b=f.update=()=>k.run();b.id=f.uid,lt(f,!0),b()},G=(f,u,p)=>{u.component=f;const g=f.vnode.props;f.vnode=u,f.next=null,Jl(f,u.props,g,p),ef(f,u.children,p),Lt(),Wa(),Rt()},K=(f,u,p,g,h,_,A,y,k=!1)=>{const b=f&&f.children,P=f?f.shapeFlag:0,T=u.children,{patchFlag:I,shapeFlag:j}=u;if(I>0){if(I&128){hn(b,T,p,g,h,_,A,y,k);return}else if(I&256){it(b,T,p,g,h,_,A,y,k);return}}j&8?(P&16&&$e(b,h,_),T!==b&&d(p,T)):P&16?j&16?hn(b,T,p,g,h,_,A,y,k):$e(b,h,_,!0):(P&8&&d(p,""),j&16&&ke(T,p,g,h,_,A,y,k))},it=(f,u,p,g,h,_,A,y,k)=>{f=f||At,u=u||At;const b=f.length,P=u.length,T=Math.min(b,P);let I;for(I=0;I<T;I++){const j=u[I]=k?qe(u[I]):Fe(u[I]);N(f[I],j,p,null,h,_,A,y,k)}b>P?$e(f,h,_,!0,!1,T):ke(u,p,g,h,_,A,y,k,T)},hn=(f,u,p,g,h,_,A,y,k)=>{let b=0;const P=u.length;let T=f.length-1,I=P-1;for(;b<=T&&b<=I;){const j=f[b],z=u[b]=k?qe(u[b]):Fe(u[b]);if(Ht(j,z))N(j,z,p,null,h,_,A,y,k);else break;b++}for(;b<=T&&b<=I;){const j=f[T],z=u[I]=k?qe(u[I]):Fe(u[I]);if(Ht(j,z))N(j,z,p,null,h,_,A,y,k);else break;T--,I--}if(b>T){if(b<=I){const j=I+1,z=j<P?u[j].el:g;for(;b<=I;)N(null,u[b]=k?qe(u[b]):Fe(u[b]),p,z,h,_,A,y,k),b++}}else if(b>I)for(;b<=T;)Ie(f[b],h,_,!0),b++;else{const j=b,z=b,V=new Map;for(b=z;b<=I;b++){const be=u[b]=k?qe(u[b]):Fe(u[b]);be.key!=null&&V.set(be.key,b)}let W,te=0;const we=I-z+1;let _t=!1,Fa=0;const zt=new Array(we);for(b=0;b<we;b++)zt[b]=0;for(b=j;b<=T;b++){const be=f[b];if(te>=we){Ie(be,h,_,!0);continue}let Ne;if(be.key!=null)Ne=V.get(be.key);else for(W=z;W<=I;W++)if(zt[W-z]===0&&Ht(be,u[W])){Ne=W;break}Ne===void 0?Ie(be,h,_,!0):(zt[Ne-z]=b+1,Ne>=Fa?Fa=Ne:_t=!0,N(be,u[Ne],p,null,h,_,A,y,k),te++)}const ja=_t?of(zt):At;for(W=ja.length-1,b=we-1;b>=0;b--){const be=z+b,Ne=u[be],La=be+1<P?u[be+1].el:g;zt[b]===0?N(null,Ne,p,La,h,_,A,y,k):_t&&(W<0||b!==ja[W]?ot(Ne,p,La,2):W--)}}},ot=(f,u,p,g,h=null)=>{const{el:_,type:A,transition:y,children:k,shapeFlag:b}=f;if(b&6){ot(f.component.subTree,u,p,g);return}if(b&128){f.suspense.move(u,p,g);return}if(b&64){A.move(f,u,p,yt);return}if(A===ce){r(_,u,p);for(let T=0;T<k.length;T++)ot(k[T],u,p,g);r(f.anchor,u,p);return}if(A===vr){S(f,u,p);return}if(g!==2&&b&1&&y)if(g===0)y.beforeEnter(_),r(_,u,p),ge(()=>y.enter(_),h);else{const{leave:T,delayLeave:I,afterLeave:j}=y,z=()=>r(_,u,p),V=()=>{T(_,()=>{z(),j&&j()})};I?I(_,z,V):V()}else r(_,u,p)},Ie=(f,u,p,g=!1,h=!1)=>{const{type:_,props:A,ref:y,children:k,dynamicChildren:b,shapeFlag:P,patchFlag:T,dirs:I}=f;if(y!=null&&Mr(y,null,p,f,!0),P&256){u.ctx.deactivate(f);return}const j=P&1&&I,z=!Yt(f);let V;if(z&&(V=A&&A.onVnodeBeforeUnmount)&&Me(V,u,f),P&6)bs(f.component,p,g);else{if(P&128){f.suspense.unmount(p,g);return}j&&st(f,null,u,"beforeUnmount"),P&64?f.type.remove(f,u,p,h,yt,g):b&&(_!==ce||T>0&&T&64)?$e(b,u,p,!1,!0):(_===ce&&T&384||!h&&P&16)&&$e(k,u,p),g&&Na(f)}(z&&(V=A&&A.onVnodeUnmounted)||j)&&ge(()=>{V&&Me(V,u,f),j&&st(f,null,u,"unmounted")},p)},Na=f=>{const{type:u,el:p,anchor:g,transition:h}=f;if(u===ce){vs(p,g);return}if(u===vr){D(f);return}const _=()=>{a(p),h&&!h.persisted&&h.afterLeave&&h.afterLeave()};if(f.shapeFlag&1&&h&&!h.persisted){const{leave:A,delayLeave:y}=h,k=()=>A(p,_);y?y(f.el,_,k):k()}else _()},vs=(f,u)=>{let p;for(;f!==u;)p=v(f),a(f),f=p;a(u)},bs=(f,u,p)=>{const{bum:g,scope:h,update:_,subTree:A,um:y}=f;g&&pr(g),h.stop(),_&&(_.active=!1,Ie(A,f,u,p)),y&&ge(y,u),ge(()=>{f.isUnmounted=!0},u),u&&u.pendingBranch&&!u.isUnmounted&&f.asyncDep&&!f.asyncResolved&&f.suspenseId===u.pendingId&&(u.deps--,u.deps===0&&u.resolve())},$e=(f,u,p,g=!1,h=!1,_=0)=>{for(let A=_;A<f.length;A++)Ie(f[A],u,p,g,h)},gn=f=>f.shapeFlag&6?gn(f.component.subTree):f.shapeFlag&128?f.suspense.next():v(f.anchor||f.el),Ma=(f,u,p)=>{f==null?u._vnode&&Ie(u._vnode,null,null,!0):N(u._vnode||null,f,u,null,null,null,p),Wa(),uo(),u._vnode=f},yt={p:N,um:Ie,m:ot,r:Na,mt:cr,mc:ke,pc:K,pbc:De,n:gn,o:e};let ur,dr;return t&&([ur,dr]=t(yt)),{render:Ma,hydrate:ur,createApp:nf(Ma,ur)}}function lt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function No(e,t,n=!1){const r=e.children,a=t.children;if(L(r)&&L(a))for(let i=0;i<r.length;i++){const o=r[i];let s=a[i];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=a[i]=qe(a[i]),s.el=o.el),n||No(o,s)),s.type===ar&&(s.el=o.el)}}function of(e){const t=e.slice(),n=[0];let r,a,i,o,s;const l=e.length;for(r=0;r<l;r++){const c=e[r];if(c!==0){if(a=n[n.length-1],e[a]<c){t[r]=a,n.push(r);continue}for(i=0,o=n.length-1;i<o;)s=i+o>>1,e[n[s]]<c?i=s+1:o=s;c<e[n[i]]&&(i>0&&(t[r]=n[i-1]),n[i]=r)}}for(i=n.length,o=n[i-1];i-- >0;)n[i]=o,o=t[o];return n}const sf=e=>e.__isTeleport,ce=Symbol(void 0),ar=Symbol(void 0),tt=Symbol(void 0),vr=Symbol(void 0),Kt=[];let Ce=null;function ee(e=!1){Kt.push(Ce=e?null:[])}function lf(){Kt.pop(),Ce=Kt[Kt.length-1]||null}let en=1;function ei(e){en+=e}function Mo(e){return e.dynamicChildren=en>0?Ce||At:null,lf(),en>0&&Ce&&Ce.push(e),e}function de(e,t,n,r,a,i){return Mo(M(e,t,n,r,a,i,!0))}function Pt(e,t,n,r,a){return Mo($(e,t,n,r,a,!0))}function Yn(e){return e?e.__v_isVNode===!0:!1}function Ht(e,t){return e.type===t.type&&e.key===t.key}const ir="__vInternal",Fo=({key:e})=>e??null,Rn=({ref:e,ref_key:t,ref_for:n})=>e!=null?re(e)||se(e)||R(e)?{i:ue,r:e,k:t,f:!!n}:e:null;function M(e,t=null,n=null,r=0,a=null,i=e===ce?0:1,o=!1,s=!1){const l={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Fo(t),ref:t&&Rn(t),scopeId:ho,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:i,patchFlag:r,dynamicProps:a,dynamicChildren:null,appContext:null,ctx:ue};return s?(pa(l,n),i&128&&e.normalize(l)):n&&(l.shapeFlag|=re(n)?8:16),en>0&&!o&&Ce&&(l.patchFlag>0||i&6)&&l.patchFlag!==32&&Ce.push(l),l}const $=ff;function ff(e,t=null,n=null,r=0,a=null,i=!1){if((!e||e===Bl)&&(e=tt),Yn(e)){const s=It(e,t,!0);return n&&pa(s,n),en>0&&!i&&Ce&&(s.shapeFlag&6?Ce[Ce.indexOf(e)]=s:Ce.push(s)),s.patchFlag|=-2,s}if(xf(e)&&(e=e.__vccOpts),t){t=cf(t);let{class:s,style:l}=t;s&&!re(s)&&(t.class=Ft(s)),J(l)&&(ro(l)&&!L(l)&&(l=me({},l)),t.style=fn(l))}const o=re(e)?1:Ol(e)?128:sf(e)?64:J(e)?4:R(e)?2:0;return M(e,t,n,r,a,o,i,!0)}function cf(e){return e?ro(e)||ir in e?me({},e):e:null}function It(e,t,n=!1){const{props:r,ref:a,patchFlag:i,children:o}=e,s=t?df(r||{},t):r;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&Fo(s),ref:t&&t.ref?n&&a?L(a)?a.concat(Rn(t)):[a,Rn(t)]:Rn(t):a,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:o,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==ce?i===-1?16:i|16:i,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&It(e.ssContent),ssFallback:e.ssFallback&&It(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function uf(e=" ",t=0){return $(ar,null,e,t)}function jo(e="",t=!1){return t?(ee(),Pt(tt,null,e)):$(tt,null,e)}function Fe(e){return e==null||typeof e=="boolean"?$(tt):L(e)?$(ce,null,e.slice()):typeof e=="object"?qe(e):$(ar,null,String(e))}function qe(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:It(e)}function pa(e,t){let n=0;const{shapeFlag:r}=e;if(t==null)t=null;else if(L(t))n=16;else if(typeof t=="object")if(r&65){const a=t.default;a&&(a._c&&(a._d=!1),pa(e,a()),a._c&&(a._d=!0));return}else{n=32;const a=t._;!a&&!(ir in t)?t._ctx=ue:a===3&&ue&&(ue.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else R(t)?(t={default:t,_ctx:ue},n=32):(t=String(t),r&64?(n=16,t=[uf(t)]):n=8);e.children=t,e.shapeFlag|=n}function df(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const a in r)if(a==="class")t.class!==r.class&&(t.class=Ft([t.class,r.class]));else if(a==="style")t.style=fn([t.style,r.style]);else if(Qn(a)){const i=t[a],o=r[a];o&&i!==o&&!(L(i)&&i.includes(o))&&(t[a]=i?[].concat(i,o):o)}else a!==""&&(t[a]=r[a])}return t}function Me(e,t,n,r=null){Pe(e,t,7,[n,r])}const mf=Io();let pf=0;function hf(e,t,n){const r=e.type,a=(t?t.appContext:e.appContext)||mf,i={uid:pf++,vnode:e,type:r,parent:t,appContext:a,root:null,next:null,subTree:null,effect:null,update:null,scope:new Ms(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(a.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Co(r,a),emitsOptions:po(r,a),emit:null,emitted:null,propsDefaults:Q,inheritAttrs:r.inheritAttrs,ctx:Q,data:Q,props:Q,attrs:Q,slots:Q,refs:Q,setupState:Q,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return i.ctx={_:i},i.root=t?t.root:i,i.emit=_l.bind(null,i),e.ce&&e.ce(i),i}let ne=null;const Nt=e=>{ne=e,e.scope.on()},ht=()=>{ne&&ne.scope.off(),ne=null};function Lo(e){return e.vnode.shapeFlag&4}let tn=!1;function gf(e,t=!1){tn=t;const{props:n,children:r}=e.vnode,a=Lo(e);Ql(e,n,a,t),Zl(e,r);const i=a?vf(e,t):void 0;return tn=!1,i}function vf(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=ao(new Proxy(e.ctx,Yl));const{setup:r}=n;if(r){const a=e.setupContext=r.length>1?yf(e):null;Nt(e),Lt();const i=Ge(r,e,0,[e.props,a]);if(Rt(),ht(),Ui(i)){if(i.then(ht,ht),t)return i.then(o=>{ti(e,o,t)}).catch(o=>{tr(o,e,0)});e.asyncDep=i}else ti(e,i,t)}else Ro(e,t)}function ti(e,t,n){R(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:J(t)&&(e.setupState=so(t)),Ro(e,n)}let ni;function Ro(e,t,n){const r=e.type;if(!e.render){if(!t&&ni&&!r.render){const a=r.template||da(e).template;if(a){const{isCustomElement:i,compilerOptions:o}=e.appContext.config,{delimiters:s,compilerOptions:l}=r,c=me(me({isCustomElement:i,delimiters:s},o),l);r.render=ni(a,c)}}e.render=r.render||Ee}Nt(e),Lt(),Wl(e),Rt(),ht()}function bf(e){return new Proxy(e.attrs,{get(t,n){return ve(e,"get","$attrs"),t[n]}})}function yf(e){const t=r=>{e.exposed=r||{}};let n;return{get attrs(){return n||(n=bf(e))},slots:e.slots,emit:e.emit,expose:t}}function ha(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(so(ao(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in Wt)return Wt[n](e)},has(t,n){return n in t||n in Wt}}))}function _f(e,t=!0){return R(e)?e.displayName||e.name:e.name||t&&e.__name}function xf(e){return R(e)&&"__vccOpts"in e}const xe=(e,t)=>ml(e,t,tn);function Do(e,t,n){const r=arguments.length;return r===2?J(t)&&!L(t)?Yn(t)?$(e,null,[t]):$(e,t):$(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):r===3&&Yn(n)&&(n=[n]),$(e,t,n))}const kf=Symbol(""),wf=()=>jn(kf),Af="3.2.47",Of="http://www.w3.org/2000/svg",ut=typeof document<"u"?document:null,ri=ut&&ut.createElement("template"),Sf={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const a=t?ut.createElementNS(Of,e):ut.createElement(e,n?{is:n}:void 0);return e==="select"&&r&&r.multiple!=null&&a.setAttribute("multiple",r.multiple),a},createText:e=>ut.createTextNode(e),createComment:e=>ut.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>ut.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,r,a,i){const o=n?n.previousSibling:t.lastChild;if(a&&(a===i||a.nextSibling))for(;t.insertBefore(a.cloneNode(!0),n),!(a===i||!(a=a.nextSibling)););else{ri.innerHTML=r?`<svg>${e}</svg>`:e;const s=ri.content;if(r){const l=s.firstChild;for(;l.firstChild;)s.appendChild(l.firstChild);s.removeChild(l)}t.insertBefore(s,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Cf(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function Tf(e,t,n){const r=e.style,a=re(n);if(n&&!a){if(t&&!re(t))for(const i in t)n[i]==null&&Fr(r,i,"");for(const i in n)Fr(r,i,n[i])}else{const i=r.display;a?t!==n&&(r.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(r.display=i)}}const ai=/\s*!important$/;function Fr(e,t,n){if(L(n))n.forEach(r=>Fr(e,t,r));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const r=Ef(e,t);ai.test(n)?e.setProperty(jt(r),n.replace(ai,""),"important"):e[r]=n}}const ii=["Webkit","Moz","ms"],br={};function Ef(e,t){const n=br[t];if(n)return n;let r=Re(t);if(r!=="filter"&&r in e)return br[t]=r;r=Zn(r);for(let a=0;a<ii.length;a++){const i=ii[a]+r;if(i in e)return br[t]=i}return t}const oi="http://www.w3.org/1999/xlink";function Pf(e,t,n,r,a){if(r&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(oi,t.slice(6,t.length)):e.setAttributeNS(oi,t,n);else{const i=As(t);n==null||i&&!zi(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function If(e,t,n,r,a,i,o){if(t==="innerHTML"||t==="textContent"){r&&o(r,a,i),e[t]=n??"";return}if(t==="value"&&e.tagName!=="PROGRESS"&&!e.tagName.includes("-")){e._value=n;const l=n??"";(e.value!==l||e.tagName==="OPTION")&&(e.value=l),n==null&&e.removeAttribute(t);return}let s=!1;if(n===""||n==null){const l=typeof e[t];l==="boolean"?n=zi(n):n==null&&l==="string"?(n="",s=!0):l==="number"&&(n=0,s=!0)}try{e[t]=n}catch{}s&&e.removeAttribute(t)}function Nf(e,t,n,r){e.addEventListener(t,n,r)}function Mf(e,t,n,r){e.removeEventListener(t,n,r)}function Ff(e,t,n,r,a=null){const i=e._vei||(e._vei={}),o=i[t];if(r&&o)o.value=r;else{const[s,l]=jf(t);if(r){const c=i[t]=Df(r,a);Nf(e,s,c,l)}else o&&(Mf(e,s,o,l),i[t]=void 0)}}const si=/(?:Once|Passive|Capture)$/;function jf(e){let t;if(si.test(e)){t={};let r;for(;r=e.match(si);)e=e.slice(0,e.length-r[0].length),t[r[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):jt(e.slice(2)),t]}let yr=0;const Lf=Promise.resolve(),Rf=()=>yr||(Lf.then(()=>yr=0),yr=Date.now());function Df(e,t){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;Pe($f(r,n.value),t,5,[r])};return n.value=e,n.attached=Rf(),n}function $f(e,t){if(L(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(r=>a=>!a._stopped&&r&&r(a))}else return t}const li=/^on[a-z]/,zf=(e,t,n,r,a=!1,i,o,s,l)=>{t==="class"?Cf(e,r,a):t==="style"?Tf(e,n,r):Qn(t)?qr(t)||Ff(e,t,n,r,o):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):Hf(e,t,r,a))?If(e,t,r,i,o,s,l):(t==="true-value"?e._trueValue=r:t==="false-value"&&(e._falseValue=r),Pf(e,t,r,a))};function Hf(e,t,n,r){return r?!!(t==="innerHTML"||t==="textContent"||t in e&&li.test(t)&&R(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||li.test(t)&&re(n)?!1:t in e}const Bf=me({patchProp:zf},Sf);let fi;function Uf(){return fi||(fi=rf(Bf))}const Yf=(...e)=>{const t=Uf().createApp(...e),{mount:n}=t;return t.mount=r=>{const a=Wf(r);if(!a)return;const i=t._component;!R(i)&&!i.render&&!i.template&&(i.template=a.innerHTML),a.innerHTML="";const o=n(a,!1,a instanceof SVGElement);return a instanceof Element&&(a.removeAttribute("v-cloak"),a.setAttribute("data-v-app","")),o},t};function Wf(e){return re(e)?document.querySelector(e):e}const Kf="/frosovallen-test/line-green.svg",Vf="/frosovallen-test/line-green__arrow.svg";const $o=(e,t)=>{const n=e.__vccOpts||e;for(const[r,a]of t)n[r]=a;return n},Xf={},qf={class:"layout__main-width"};function Qf(e,t){return ee(),de("section",qf,[wo(e.$slots,"default")])}const nn=$o(Xf,[["render",Qf]]);function ci(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ci(Object(n),!0).forEach(function(r){ae(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ci(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Wn(e){return Wn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Wn(e)}function Jf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function ui(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function Gf(e,t,n){return t&&ui(e.prototype,t),n&&ui(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function ae(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ga(e,t){return ec(e)||nc(e,t)||zo(e,t)||ac()}function cn(e){return Zf(e)||tc(e)||zo(e)||rc()}function Zf(e){if(Array.isArray(e))return jr(e)}function ec(e){if(Array.isArray(e))return e}function tc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function nc(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r=[],a=!0,i=!1,o,s;try{for(n=n.call(e);!(a=(o=n.next()).done)&&(r.push(o.value),!(t&&r.length===t));a=!0);}catch(l){i=!0,s=l}finally{try{!a&&n.return!=null&&n.return()}finally{if(i)throw s}}return r}}function zo(e,t){if(e){if(typeof e=="string")return jr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return jr(e,t)}}function jr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function rc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ac(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var di=function(){},va={},Ho={},Bo=null,Uo={mark:di,measure:di};try{typeof window<"u"&&(va=window),typeof document<"u"&&(Ho=document),typeof MutationObserver<"u"&&(Bo=MutationObserver),typeof performance<"u"&&(Uo=performance)}catch{}var ic=va.navigator||{},mi=ic.userAgent,pi=mi===void 0?"":mi,nt=va,q=Ho,hi=Bo,wn=Uo;nt.document;var Ke=!!q.documentElement&&!!q.head&&typeof q.addEventListener=="function"&&typeof q.createElement=="function",Yo=~pi.indexOf("MSIE")||~pi.indexOf("Trident/"),An,On,Sn,Cn,Tn,Be="___FONT_AWESOME___",Lr=16,Wo="fa",Ko="svg-inline--fa",vt="data-fa-i2svg",Rr="data-fa-pseudo-element",oc="data-fa-pseudo-element-pending",ba="data-prefix",ya="data-icon",gi="fontawesome-i2svg",sc="async",lc=["HTML","HEAD","STYLE","SCRIPT"],Vo=function(){try{return!0}catch{return!1}}(),X="classic",Z="sharp",_a=[X,Z];function un(e){return new Proxy(e,{get:function(n,r){return r in n?n[r]:n[X]}})}var rn=un((An={},ae(An,X,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),ae(An,Z,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular"}),An)),an=un((On={},ae(On,X,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),ae(On,Z,{solid:"fass",regular:"fasr"}),On)),on=un((Sn={},ae(Sn,X,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),ae(Sn,Z,{fass:"fa-solid",fasr:"fa-regular"}),Sn)),fc=un((Cn={},ae(Cn,X,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),ae(Cn,Z,{"fa-solid":"fass","fa-regular":"fasr"}),Cn)),cc=/fa(s|r|l|t|d|b|k|ss|sr)?[\-\ ]/,Xo="fa-layers-text",uc=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,dc=un((Tn={},ae(Tn,X,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),ae(Tn,Z,{900:"fass",400:"fasr"}),Tn)),qo=[1,2,3,4,5,6,7,8,9,10],mc=qo.concat([11,12,13,14,15,16,17,18,19,20]),pc=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],dt={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},sn=new Set;Object.keys(an[X]).map(sn.add.bind(sn));Object.keys(an[Z]).map(sn.add.bind(sn));var hc=[].concat(_a,cn(sn),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",dt.GROUP,dt.SWAP_OPACITY,dt.PRIMARY,dt.SECONDARY]).concat(qo.map(function(e){return"".concat(e,"x")})).concat(mc.map(function(e){return"w-".concat(e)})),Vt=nt.FontAwesomeConfig||{};function gc(e){var t=q.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function vc(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(q&&typeof q.querySelector=="function"){var bc=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];bc.forEach(function(e){var t=ga(e,2),n=t[0],r=t[1],a=vc(gc(n));a!=null&&(Vt[r]=a)})}var Qo={styleDefault:"solid",familyDefault:"classic",cssPrefix:Wo,replacementClass:Ko,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};Vt.familyPrefix&&(Vt.cssPrefix=Vt.familyPrefix);var Mt=O(O({},Qo),Vt);Mt.autoReplaceSvg||(Mt.observeMutations=!1);var E={};Object.keys(Qo).forEach(function(e){Object.defineProperty(E,e,{enumerable:!0,set:function(n){Mt[e]=n,Xt.forEach(function(r){return r(E)})},get:function(){return Mt[e]}})});Object.defineProperty(E,"familyPrefix",{enumerable:!0,set:function(t){Mt.cssPrefix=t,Xt.forEach(function(n){return n(E)})},get:function(){return Mt.cssPrefix}});nt.FontAwesomeConfig=E;var Xt=[];function yc(e){return Xt.push(e),function(){Xt.splice(Xt.indexOf(e),1)}}var Xe=Lr,Le={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function _c(e){if(!(!e||!Ke)){var t=q.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=q.head.childNodes,r=null,a=n.length-1;a>-1;a--){var i=n[a],o=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(o)>-1&&(r=i)}return q.head.insertBefore(t,r),e}}var xc="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function ln(){for(var e=12,t="";e-- >0;)t+=xc[Math.random()*62|0];return t}function Dt(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function xa(e){return e.classList?Dt(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function Jo(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function kc(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(Jo(e[n]),'" ')},"").trim()}function or(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ka(e){return e.size!==Le.size||e.x!==Le.x||e.y!==Le.y||e.rotate!==Le.rotate||e.flipX||e.flipY}function wc(e){var t=e.transform,n=e.containerWidth,r=e.iconWidth,a={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),o="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),s="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(o," ").concat(s)},c={transform:"translate(".concat(r/2*-1," -256)")};return{outer:a,inner:l,path:c}}function Ac(e){var t=e.transform,n=e.width,r=n===void 0?Lr:n,a=e.height,i=a===void 0?Lr:a,o=e.startCentered,s=o===void 0?!1:o,l="";return s&&Yo?l+="translate(".concat(t.x/Xe-r/2,"em, ").concat(t.y/Xe-i/2,"em) "):s?l+="translate(calc(-50% + ".concat(t.x/Xe,"em), calc(-50% + ").concat(t.y/Xe,"em)) "):l+="translate(".concat(t.x/Xe,"em, ").concat(t.y/Xe,"em) "),l+="scale(".concat(t.size/Xe*(t.flipX?-1:1),", ").concat(t.size/Xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var Oc=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function Go(){var e=Wo,t=Ko,n=E.cssPrefix,r=E.replacementClass,a=Oc;if(n!==e||r!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),o=new RegExp("\\--".concat(e,"\\-"),"g"),s=new RegExp("\\.".concat(t),"g");a=a.replace(i,".".concat(n,"-")).replace(o,"--".concat(n,"-")).replace(s,".".concat(r))}return a}var vi=!1;function _r(){E.autoAddCss&&!vi&&(_c(Go()),vi=!0)}var Sc={mixout:function(){return{dom:{css:Go,insertCss:_r}}},hooks:function(){return{beforeDOMElementCreation:function(){_r()},beforeI2svg:function(){_r()}}}},Ue=nt||{};Ue[Be]||(Ue[Be]={});Ue[Be].styles||(Ue[Be].styles={});Ue[Be].hooks||(Ue[Be].hooks={});Ue[Be].shims||(Ue[Be].shims=[]);var Te=Ue[Be],Zo=[],Cc=function e(){q.removeEventListener("DOMContentLoaded",e),Kn=1,Zo.map(function(t){return t()})},Kn=!1;Ke&&(Kn=(q.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(q.readyState),Kn||q.addEventListener("DOMContentLoaded",Cc));function Tc(e){Ke&&(Kn?setTimeout(e,0):Zo.push(e))}function dn(e){var t=e.tag,n=e.attributes,r=n===void 0?{}:n,a=e.children,i=a===void 0?[]:a;return typeof e=="string"?Jo(e):"<".concat(t," ").concat(kc(r),">").concat(i.map(dn).join(""),"</").concat(t,">")}function bi(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var Ec=function(t,n){return function(r,a,i,o){return t.call(n,r,a,i,o)}},xr=function(t,n,r,a){var i=Object.keys(t),o=i.length,s=a!==void 0?Ec(n,a):n,l,c,d;for(r===void 0?(l=1,d=t[i[0]]):(l=0,d=r);l<o;l++)c=i[l],d=s(d,t[c],c,t);return d};function Pc(e){for(var t=[],n=0,r=e.length;n<r;){var a=e.charCodeAt(n++);if(a>=55296&&a<=56319&&n<r){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((a&1023)<<10)+(i&1023)+65536):(t.push(a),n--)}else t.push(a)}return t}function Dr(e){var t=Pc(e);return t.length===1?t[0].toString(16):null}function Ic(e,t){var n=e.length,r=e.charCodeAt(t),a;return r>=55296&&r<=56319&&n>t+1&&(a=e.charCodeAt(t+1),a>=56320&&a<=57343)?(r-55296)*1024+a-56320+65536:r}function yi(e){return Object.keys(e).reduce(function(t,n){var r=e[n],a=!!r.icon;return a?t[r.iconName]=r.icon:t[n]=r,t},{})}function $r(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=n.skipHooks,a=r===void 0?!1:r,i=yi(t);typeof Te.hooks.addPack=="function"&&!a?Te.hooks.addPack(e,yi(t)):Te.styles[e]=O(O({},Te.styles[e]||{}),i),e==="fas"&&$r("fa",t)}var En,Pn,In,kt=Te.styles,Nc=Te.shims,Mc=(En={},ae(En,X,Object.values(on[X])),ae(En,Z,Object.values(on[Z])),En),wa=null,es={},ts={},ns={},rs={},as={},Fc=(Pn={},ae(Pn,X,Object.keys(rn[X])),ae(Pn,Z,Object.keys(rn[Z])),Pn);function jc(e){return~hc.indexOf(e)}function Lc(e,t){var n=t.split("-"),r=n[0],a=n.slice(1).join("-");return r===e&&a!==""&&!jc(a)?a:null}var is=function(){var t=function(i){return xr(kt,function(o,s,l){return o[l]=xr(s,i,{}),o},{})};es=t(function(a,i,o){if(i[3]&&(a[i[3]]=o),i[2]){var s=i[2].filter(function(l){return typeof l=="number"});s.forEach(function(l){a[l.toString(16)]=o})}return a}),ts=t(function(a,i,o){if(a[o]=o,i[2]){var s=i[2].filter(function(l){return typeof l=="string"});s.forEach(function(l){a[l]=o})}return a}),as=t(function(a,i,o){var s=i[2];return a[o]=o,s.forEach(function(l){a[l]=o}),a});var n="far"in kt||E.autoFetchSvg,r=xr(Nc,function(a,i){var o=i[0],s=i[1],l=i[2];return s==="far"&&!n&&(s="fas"),typeof o=="string"&&(a.names[o]={prefix:s,iconName:l}),typeof o=="number"&&(a.unicodes[o.toString(16)]={prefix:s,iconName:l}),a},{names:{},unicodes:{}});ns=r.names,rs=r.unicodes,wa=sr(E.styleDefault,{family:E.familyDefault})};yc(function(e){wa=sr(e.styleDefault,{family:E.familyDefault})});is();function Aa(e,t){return(es[e]||{})[t]}function Rc(e,t){return(ts[e]||{})[t]}function mt(e,t){return(as[e]||{})[t]}function os(e){return ns[e]||{prefix:null,iconName:null}}function Dc(e){var t=rs[e],n=Aa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function rt(){return wa}var Oa=function(){return{prefix:null,iconName:null,rest:[]}};function sr(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,r=n===void 0?X:n,a=rn[r][e],i=an[r][e]||an[r][a],o=e in Te.styles?e:null;return i||o||null}var _i=(In={},ae(In,X,Object.keys(on[X])),ae(In,Z,Object.keys(on[Z])),In);function lr(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.skipLookups,a=r===void 0?!1:r,i=(t={},ae(t,X,"".concat(E.cssPrefix,"-").concat(X)),ae(t,Z,"".concat(E.cssPrefix,"-").concat(Z)),t),o=null,s=X;(e.includes(i[X])||e.some(function(c){return _i[X].includes(c)}))&&(s=X),(e.includes(i[Z])||e.some(function(c){return _i[Z].includes(c)}))&&(s=Z);var l=e.reduce(function(c,d){var m=Lc(E.cssPrefix,d);if(kt[d]?(d=Mc[s].includes(d)?fc[s][d]:d,o=d,c.prefix=d):Fc[s].indexOf(d)>-1?(o=d,c.prefix=sr(d,{family:s})):m?c.iconName=m:d!==E.replacementClass&&d!==i[X]&&d!==i[Z]&&c.rest.push(d),!a&&c.prefix&&c.iconName){var v=o==="fa"?os(c.iconName):{},w=mt(c.prefix,c.iconName);v.prefix&&(o=null),c.iconName=v.iconName||w||c.iconName,c.prefix=v.prefix||c.prefix,c.prefix==="far"&&!kt.far&&kt.fas&&!E.autoFetchSvg&&(c.prefix="fas")}return c},Oa());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&s===Z&&(kt.fass||E.autoFetchSvg)&&(l.prefix="fass",l.iconName=mt(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||o==="fa")&&(l.prefix=rt()||"fas"),l}var $c=function(){function e(){Jf(this,e),this.definitions={}}return Gf(e,[{key:"add",value:function(){for(var n=this,r=arguments.length,a=new Array(r),i=0;i<r;i++)a[i]=arguments[i];var o=a.reduce(this._pullDefinitions,{});Object.keys(o).forEach(function(s){n.definitions[s]=O(O({},n.definitions[s]||{}),o[s]),$r(s,o[s]);var l=on[X][s];l&&$r(l,o[s]),is()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,r){var a=r.prefix&&r.iconName&&r.icon?{0:r}:r;return Object.keys(a).map(function(i){var o=a[i],s=o.prefix,l=o.iconName,c=o.icon,d=c[2];n[s]||(n[s]={}),d.length>0&&d.forEach(function(m){typeof m=="string"&&(n[s][m]=c)}),n[s][l]=c}),n}}]),e}(),xi=[],wt={},Tt={},zc=Object.keys(Tt);function Hc(e,t){var n=t.mixoutsTo;return xi=e,wt={},Object.keys(Tt).forEach(function(r){zc.indexOf(r)===-1&&delete Tt[r]}),xi.forEach(function(r){var a=r.mixout?r.mixout():{};if(Object.keys(a).forEach(function(o){typeof a[o]=="function"&&(n[o]=a[o]),Wn(a[o])==="object"&&Object.keys(a[o]).forEach(function(s){n[o]||(n[o]={}),n[o][s]=a[o][s]})}),r.hooks){var i=r.hooks();Object.keys(i).forEach(function(o){wt[o]||(wt[o]=[]),wt[o].push(i[o])})}r.provides&&r.provides(Tt)}),n}function zr(e,t){for(var n=arguments.length,r=new Array(n>2?n-2:0),a=2;a<n;a++)r[a-2]=arguments[a];var i=wt[e]||[];return i.forEach(function(o){t=o.apply(null,[t].concat(r))}),t}function bt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=wt[e]||[];a.forEach(function(i){i.apply(null,n)})}function Ye(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return Tt[e]?Tt[e].apply(null,t):void 0}function Hr(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||rt();if(t)return t=mt(n,t)||t,bi(ss.definitions,n,t)||bi(Te.styles,n,t)}var ss=new $c,Bc=function(){E.autoReplaceSvg=!1,E.observeMutations=!1,bt("noAuto")},Uc={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return Ke?(bt("beforeI2svg",t),Ye("pseudoElements2svg",t),Ye("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;E.autoReplaceSvg===!1&&(E.autoReplaceSvg=!0),E.observeMutations=!0,Tc(function(){Wc({autoReplaceSvgRoot:n}),bt("watch",t)})}},Yc={icon:function(t){if(t===null)return null;if(Wn(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:mt(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],r=sr(t[0]);return{prefix:r,iconName:mt(r,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(E.cssPrefix,"-"))>-1||t.match(cc))){var a=lr(t.split(" "),{skipLookups:!0});return{prefix:a.prefix||rt(),iconName:mt(a.prefix,a.iconName)||a.iconName}}if(typeof t=="string"){var i=rt();return{prefix:i,iconName:mt(i,t)||t}}}},ye={noAuto:Bc,config:E,dom:Uc,parse:Yc,library:ss,findIconDefinition:Hr,toHtml:dn},Wc=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,r=n===void 0?q:n;(Object.keys(Te.styles).length>0||E.autoFetchSvg)&&Ke&&E.autoReplaceSvg&&ye.dom.i2svg({node:r})};function fr(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(r){return dn(r)})}}),Object.defineProperty(e,"node",{get:function(){if(Ke){var r=q.createElement("div");return r.innerHTML=e.html,r.children}}}),e}function Kc(e){var t=e.children,n=e.main,r=e.mask,a=e.attributes,i=e.styles,o=e.transform;if(ka(o)&&n.found&&!r.found){var s=n.width,l=n.height,c={x:s/l/2,y:.5};a.style=or(O(O({},i),{},{"transform-origin":"".concat(c.x+o.x/16,"em ").concat(c.y+o.y/16,"em")}))}return[{tag:"svg",attributes:a,children:t}]}function Vc(e){var t=e.prefix,n=e.iconName,r=e.children,a=e.attributes,i=e.symbol,o=i===!0?"".concat(t,"-").concat(E.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:O(O({},a),{},{id:o}),children:r}]}]}function Sa(e){var t=e.icons,n=t.main,r=t.mask,a=e.prefix,i=e.iconName,o=e.transform,s=e.symbol,l=e.title,c=e.maskId,d=e.titleId,m=e.extra,v=e.watchable,w=v===void 0?!1:v,F=r.found?r:n,N=F.width,U=F.height,x=a==="fak",C=[E.replacementClass,i?"".concat(E.cssPrefix,"-").concat(i):""].filter(function(_e){return m.classes.indexOf(_e)===-1}).filter(function(_e){return _e!==""||!!_e}).concat(m.classes).join(" "),S={children:[],attributes:O(O({},m.attributes),{},{"data-prefix":a,"data-icon":i,class:C,role:m.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(N," ").concat(U)})},D=x&&!~m.classes.indexOf("fa-fw")?{width:"".concat(N/U*16*.0625,"em")}:{};w&&(S.attributes[vt]=""),l&&(S.children.push({tag:"title",attributes:{id:S.attributes["aria-labelledby"]||"title-".concat(d||ln())},children:[l]}),delete S.attributes.title);var Y=O(O({},S),{},{prefix:a,iconName:i,main:n,mask:r,maskId:c,transform:o,symbol:s,styles:O(O({},D),m.styles)}),pe=r.found&&n.found?Ye("generateAbstractMask",Y)||{children:[],attributes:{}}:Ye("generateAbstractIcon",Y)||{children:[],attributes:{}},ie=pe.children,ke=pe.attributes;return Y.children=ie,Y.attributes=ke,s?Vc(Y):Kc(Y)}function ki(e){var t=e.content,n=e.width,r=e.height,a=e.transform,i=e.title,o=e.extra,s=e.watchable,l=s===void 0?!1:s,c=O(O(O({},o.attributes),i?{title:i}:{}),{},{class:o.classes.join(" ")});l&&(c[vt]="");var d=O({},o.styles);ka(a)&&(d.transform=Ac({transform:a,startCentered:!0,width:n,height:r}),d["-webkit-transform"]=d.transform);var m=or(d);m.length>0&&(c.style=m);var v=[];return v.push({tag:"span",attributes:c,children:[t]}),i&&v.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),v}function Xc(e){var t=e.content,n=e.title,r=e.extra,a=O(O(O({},r.attributes),n?{title:n}:{}),{},{class:r.classes.join(" ")}),i=or(r.styles);i.length>0&&(a.style=i);var o=[];return o.push({tag:"span",attributes:a,children:[t]}),n&&o.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),o}var kr=Te.styles;function Br(e){var t=e[0],n=e[1],r=e.slice(4),a=ga(r,1),i=a[0],o=null;return Array.isArray(i)?o={tag:"g",attributes:{class:"".concat(E.cssPrefix,"-").concat(dt.GROUP)},children:[{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(dt.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(E.cssPrefix,"-").concat(dt.PRIMARY),fill:"currentColor",d:i[1]}}]}:o={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:o}}var qc={found:!1,width:512,height:512};function Qc(e,t){!Vo&&!E.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ur(e,t){var n=t;return t==="fa"&&E.styleDefault!==null&&(t=rt()),new Promise(function(r,a){if(Ye("missingIconAbstract"),n==="fa"){var i=os(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&kr[t]&&kr[t][e]){var o=kr[t][e];return r(Br(o))}Qc(e,t),r(O(O({},qc),{},{icon:E.showMissingIcons&&e?Ye("missingIconAbstract")||{}:{}}))})}var wi=function(){},Yr=E.measurePerformance&&wn&&wn.mark&&wn.measure?wn:{mark:wi,measure:wi},Ut='FA "6.3.0"',Jc=function(t){return Yr.mark("".concat(Ut," ").concat(t," begins")),function(){return ls(t)}},ls=function(t){Yr.mark("".concat(Ut," ").concat(t," ends")),Yr.measure("".concat(Ut," ").concat(t),"".concat(Ut," ").concat(t," begins"),"".concat(Ut," ").concat(t," ends"))},Ca={begin:Jc,end:ls},Dn=function(){};function Ai(e){var t=e.getAttribute?e.getAttribute(vt):null;return typeof t=="string"}function Gc(e){var t=e.getAttribute?e.getAttribute(ba):null,n=e.getAttribute?e.getAttribute(ya):null;return t&&n}function Zc(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(E.replacementClass)}function eu(){if(E.autoReplaceSvg===!0)return $n.replace;var e=$n[E.autoReplaceSvg];return e||$n.replace}function tu(e){return q.createElementNS("http://www.w3.org/2000/svg",e)}function nu(e){return q.createElement(e)}function fs(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,r=n===void 0?e.tag==="svg"?tu:nu:n;if(typeof e=="string")return q.createTextNode(e);var a=r(e.tag);Object.keys(e.attributes||[]).forEach(function(o){a.setAttribute(o,e.attributes[o])});var i=e.children||[];return i.forEach(function(o){a.appendChild(fs(o,{ceFn:r}))}),a}function ru(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var $n={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(a){n.parentNode.insertBefore(fs(a),n)}),n.getAttribute(vt)===null&&E.keepOriginalSource){var r=q.createComment(ru(n));n.parentNode.replaceChild(r,n)}else n.remove()},nest:function(t){var n=t[0],r=t[1];if(~xa(n).indexOf(E.replacementClass))return $n.replace(t);var a=new RegExp("".concat(E.cssPrefix,"-.*"));if(delete r[0].attributes.id,r[0].attributes.class){var i=r[0].attributes.class.split(" ").reduce(function(s,l){return l===E.replacementClass||l.match(a)?s.toSvg.push(l):s.toNode.push(l),s},{toNode:[],toSvg:[]});r[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var o=r.map(function(s){return dn(s)}).join(`
`);n.setAttribute(vt,""),n.innerHTML=o}};function Oi(e){e()}function cs(e,t){var n=typeof t=="function"?t:Dn;if(e.length===0)n();else{var r=Oi;E.mutateApproach===sc&&(r=nt.requestAnimationFrame||Oi),r(function(){var a=eu(),i=Ca.begin("mutate");e.map(a),i(),n()})}}var Ta=!1;function us(){Ta=!0}function Wr(){Ta=!1}var Vn=null;function Si(e){if(hi&&E.observeMutations){var t=e.treeCallback,n=t===void 0?Dn:t,r=e.nodeCallback,a=r===void 0?Dn:r,i=e.pseudoElementsCallback,o=i===void 0?Dn:i,s=e.observeMutationsRoot,l=s===void 0?q:s;Vn=new hi(function(c){if(!Ta){var d=rt();Dt(c).forEach(function(m){if(m.type==="childList"&&m.addedNodes.length>0&&!Ai(m.addedNodes[0])&&(E.searchPseudoElements&&o(m.target),n(m.target)),m.type==="attributes"&&m.target.parentNode&&E.searchPseudoElements&&o(m.target.parentNode),m.type==="attributes"&&Ai(m.target)&&~pc.indexOf(m.attributeName))if(m.attributeName==="class"&&Gc(m.target)){var v=lr(xa(m.target)),w=v.prefix,F=v.iconName;m.target.setAttribute(ba,w||d),F&&m.target.setAttribute(ya,F)}else Zc(m.target)&&a(m.target)})}}),Ke&&Vn.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function au(){Vn&&Vn.disconnect()}function iu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(r,a){var i=a.split(":"),o=i[0],s=i.slice(1);return o&&s.length>0&&(r[o]=s.join(":").trim()),r},{})),n}function ou(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),r=e.innerText!==void 0?e.innerText.trim():"",a=lr(xa(e));return a.prefix||(a.prefix=rt()),t&&n&&(a.prefix=t,a.iconName=n),a.iconName&&a.prefix||(a.prefix&&r.length>0&&(a.iconName=Rc(a.prefix,e.innerText)||Aa(a.prefix,Dr(e.innerText))),!a.iconName&&E.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(a.iconName=e.firstChild.data)),a}function su(e){var t=Dt(e.attributes).reduce(function(a,i){return a.name!=="class"&&a.name!=="style"&&(a[i.name]=i.value),a},{}),n=e.getAttribute("title"),r=e.getAttribute("data-fa-title-id");return E.autoA11y&&(n?t["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(r||ln()):(t["aria-hidden"]="true",t.focusable="false")),t}function lu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:Le,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ci(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=ou(e),r=n.iconName,a=n.prefix,i=n.rest,o=su(e),s=zr("parseNodeAttributes",{},e),l=t.styleParser?iu(e):[];return O({iconName:r,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:a,transform:Le,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:o}},s)}var fu=Te.styles;function ds(e){var t=E.autoReplaceSvg==="nest"?Ci(e,{styleParser:!1}):Ci(e);return~t.extra.classes.indexOf(Xo)?Ye("generateLayersText",e,t):Ye("generateSvgReplacementMutation",e,t)}var at=new Set;_a.map(function(e){at.add("fa-".concat(e))});Object.keys(rn[X]).map(at.add.bind(at));Object.keys(rn[Z]).map(at.add.bind(at));at=cn(at);function Ti(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!Ke)return Promise.resolve();var n=q.documentElement.classList,r=function(m){return n.add("".concat(gi,"-").concat(m))},a=function(m){return n.remove("".concat(gi,"-").concat(m))},i=E.autoFetchSvg?at:_a.map(function(d){return"fa-".concat(d)}).concat(Object.keys(fu));i.includes("fa")||i.push("fa");var o=[".".concat(Xo,":not([").concat(vt,"])")].concat(i.map(function(d){return".".concat(d,":not([").concat(vt,"])")})).join(", ");if(o.length===0)return Promise.resolve();var s=[];try{s=Dt(e.querySelectorAll(o))}catch{}if(s.length>0)r("pending"),a("complete");else return Promise.resolve();var l=Ca.begin("onTree"),c=s.reduce(function(d,m){try{var v=ds(m);v&&d.push(v)}catch(w){Vo||w.name==="MissingIcon"&&console.error(w)}return d},[]);return new Promise(function(d,m){Promise.all(c).then(function(v){cs(v,function(){r("active"),r("complete"),a("pending"),typeof t=="function"&&t(),l(),d()})}).catch(function(v){l(),m(v)})})}function cu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;ds(e).then(function(n){n&&cs([n],t)})}function uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=(t||{}).icon?t:Hr(t||{}),a=n.mask;return a&&(a=(a||{}).icon?a:Hr(a||{})),e(r,O(O({},n),{},{mask:a}))}}var du=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=n.transform,a=r===void 0?Le:r,i=n.symbol,o=i===void 0?!1:i,s=n.mask,l=s===void 0?null:s,c=n.maskId,d=c===void 0?null:c,m=n.title,v=m===void 0?null:m,w=n.titleId,F=w===void 0?null:w,N=n.classes,U=N===void 0?[]:N,x=n.attributes,C=x===void 0?{}:x,S=n.styles,D=S===void 0?{}:S;if(t){var Y=t.prefix,pe=t.iconName,ie=t.icon;return fr(O({type:"icon"},t),function(){return bt("beforeDOMElementCreation",{iconDefinition:t,params:n}),E.autoA11y&&(v?C["aria-labelledby"]="".concat(E.replacementClass,"-title-").concat(F||ln()):(C["aria-hidden"]="true",C.focusable="false")),Sa({icons:{main:Br(ie),mask:l?Br(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:Y,iconName:pe,transform:O(O({},Le),a),symbol:o,title:v,maskId:d,titleId:F,extra:{attributes:C,styles:D,classes:U}})})}},mu={mixout:function(){return{icon:uu(du)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Ti,n.nodeCallback=cu,n}}},provides:function(t){t.i2svg=function(n){var r=n.node,a=r===void 0?q:r,i=n.callback,o=i===void 0?function(){}:i;return Ti(a,o)},t.generateSvgReplacementMutation=function(n,r){var a=r.iconName,i=r.title,o=r.titleId,s=r.prefix,l=r.transform,c=r.symbol,d=r.mask,m=r.maskId,v=r.extra;return new Promise(function(w,F){Promise.all([Ur(a,s),d.iconName?Ur(d.iconName,d.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(N){var U=ga(N,2),x=U[0],C=U[1];w([n,Sa({icons:{main:x,mask:C},prefix:s,iconName:a,transform:l,symbol:c,maskId:m,title:i,titleId:o,extra:v,watchable:!0})])}).catch(F)})},t.generateAbstractIcon=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.transform,s=n.styles,l=or(s);l.length>0&&(a.style=l);var c;return ka(o)&&(c=Ye("generateAbstractTransformGrouping",{main:i,transform:o,containerWidth:i.width,iconWidth:i.width})),r.push(c||i.icon),{children:r,attributes:a}}}},pu={mixout:function(){return{layer:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.classes,i=a===void 0?[]:a;return fr({type:"layer"},function(){bt("beforeDOMElementCreation",{assembler:n,params:r});var o=[];return n(function(s){Array.isArray(s)?s.map(function(l){o=o.concat(l.abstract)}):o=o.concat(s.abstract)}),[{tag:"span",attributes:{class:["".concat(E.cssPrefix,"-layers")].concat(cn(i)).join(" ")},children:o}]})}}}},hu={mixout:function(){return{counter:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.title,i=a===void 0?null:a,o=r.classes,s=o===void 0?[]:o,l=r.attributes,c=l===void 0?{}:l,d=r.styles,m=d===void 0?{}:d;return fr({type:"counter",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),Xc({content:n.toString(),title:i,extra:{attributes:c,styles:m,classes:["".concat(E.cssPrefix,"-layers-counter")].concat(cn(s))}})})}}}},gu={mixout:function(){return{text:function(n){var r=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=r.transform,i=a===void 0?Le:a,o=r.title,s=o===void 0?null:o,l=r.classes,c=l===void 0?[]:l,d=r.attributes,m=d===void 0?{}:d,v=r.styles,w=v===void 0?{}:v;return fr({type:"text",content:n},function(){return bt("beforeDOMElementCreation",{content:n,params:r}),ki({content:n,transform:O(O({},Le),i),title:s,extra:{attributes:m,styles:w,classes:["".concat(E.cssPrefix,"-layers-text")].concat(cn(c))}})})}}},provides:function(t){t.generateLayersText=function(n,r){var a=r.title,i=r.transform,o=r.extra,s=null,l=null;if(Yo){var c=parseInt(getComputedStyle(n).fontSize,10),d=n.getBoundingClientRect();s=d.width/c,l=d.height/c}return E.autoA11y&&!a&&(o.attributes["aria-hidden"]="true"),Promise.resolve([n,ki({content:n.innerHTML,width:s,height:l,transform:i,title:a,extra:o,watchable:!0})])}}},vu=new RegExp('"',"ug"),Ei=[1105920,1112319];function bu(e){var t=e.replace(vu,""),n=Ic(t,0),r=n>=Ei[0]&&n<=Ei[1],a=t.length===2?t[0]===t[1]:!1;return{value:Dr(a?t[0]:t),isSecondary:r||a}}function Pi(e,t){var n="".concat(oc).concat(t.replace(":","-"));return new Promise(function(r,a){if(e.getAttribute(n)!==null)return r();var i=Dt(e.children),o=i.filter(function(ie){return ie.getAttribute(Rr)===t})[0],s=nt.getComputedStyle(e,t),l=s.getPropertyValue("font-family").match(uc),c=s.getPropertyValue("font-weight"),d=s.getPropertyValue("content");if(o&&!l)return e.removeChild(o),r();if(l&&d!=="none"&&d!==""){var m=s.getPropertyValue("content"),v=~["Sharp"].indexOf(l[2])?Z:X,w=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?an[v][l[2].toLowerCase()]:dc[v][c],F=bu(m),N=F.value,U=F.isSecondary,x=l[0].startsWith("FontAwesome"),C=Aa(w,N),S=C;if(x){var D=Dc(N);D.iconName&&D.prefix&&(C=D.iconName,w=D.prefix)}if(C&&!U&&(!o||o.getAttribute(ba)!==w||o.getAttribute(ya)!==S)){e.setAttribute(n,S),o&&e.removeChild(o);var Y=lu(),pe=Y.extra;pe.attributes[Rr]=t,Ur(C,w).then(function(ie){var ke=Sa(O(O({},Y),{},{icons:{main:ie,mask:Oa()},prefix:w,iconName:S,extra:pe,watchable:!0})),_e=q.createElement("svg");t==="::before"?e.insertBefore(_e,e.firstChild):e.appendChild(_e),_e.outerHTML=ke.map(function(De){return dn(De)}).join(`
`),e.removeAttribute(n),r()}).catch(a)}else r()}else r()})}function yu(e){return Promise.all([Pi(e,"::before"),Pi(e,"::after")])}function _u(e){return e.parentNode!==document.head&&!~lc.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Rr)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Ii(e){if(Ke)return new Promise(function(t,n){var r=Dt(e.querySelectorAll("*")).filter(_u).map(yu),a=Ca.begin("searchPseudoElements");us(),Promise.all(r).then(function(){a(),Wr(),t()}).catch(function(){a(),Wr(),n()})})}var xu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Ii,n}}},provides:function(t){t.pseudoElements2svg=function(n){var r=n.node,a=r===void 0?q:r;E.searchPseudoElements&&Ii(a)}}},Ni=!1,ku={mixout:function(){return{dom:{unwatch:function(){us(),Ni=!0}}}},hooks:function(){return{bootstrap:function(){Si(zr("mutationObserverCallbacks",{}))},noAuto:function(){au()},watch:function(n){var r=n.observeMutationsRoot;Ni?Wr():Si(zr("mutationObserverCallbacks",{observeMutationsRoot:r}))}}}},Mi=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(r,a){var i=a.toLowerCase().split("-"),o=i[0],s=i.slice(1).join("-");if(o&&s==="h")return r.flipX=!0,r;if(o&&s==="v")return r.flipY=!0,r;if(s=parseFloat(s),isNaN(s))return r;switch(o){case"grow":r.size=r.size+s;break;case"shrink":r.size=r.size-s;break;case"left":r.x=r.x-s;break;case"right":r.x=r.x+s;break;case"up":r.y=r.y-s;break;case"down":r.y=r.y+s;break;case"rotate":r.rotate=r.rotate+s;break}return r},n)},wu={mixout:function(){return{parse:{transform:function(n){return Mi(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-transform");return a&&(n.transform=Mi(a)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var r=n.main,a=n.transform,i=n.containerWidth,o=n.iconWidth,s={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(a.x*32,", ").concat(a.y*32,") "),c="scale(".concat(a.size/16*(a.flipX?-1:1),", ").concat(a.size/16*(a.flipY?-1:1),") "),d="rotate(".concat(a.rotate," 0 0)"),m={transform:"".concat(l," ").concat(c," ").concat(d)},v={transform:"translate(".concat(o/2*-1," -256)")},w={outer:s,inner:m,path:v};return{tag:"g",attributes:O({},w.outer),children:[{tag:"g",attributes:O({},w.inner),children:[{tag:r.icon.tag,children:r.icon.children,attributes:O(O({},r.icon.attributes),w.path)}]}]}}}},wr={x:0,y:0,width:"100%",height:"100%"};function Fi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Au(e){return e.tag==="g"?e.children:[e]}var Ou={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-mask"),i=a?lr(a.split(" ").map(function(o){return o.trim()})):Oa();return i.prefix||(i.prefix=rt()),n.mask=i,n.maskId=r.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var r=n.children,a=n.attributes,i=n.main,o=n.mask,s=n.maskId,l=n.transform,c=i.width,d=i.icon,m=o.width,v=o.icon,w=wc({transform:l,containerWidth:m,iconWidth:c}),F={tag:"rect",attributes:O(O({},wr),{},{fill:"white"})},N=d.children?{children:d.children.map(Fi)}:{},U={tag:"g",attributes:O({},w.inner),children:[Fi(O({tag:d.tag,attributes:O(O({},d.attributes),w.path)},N))]},x={tag:"g",attributes:O({},w.outer),children:[U]},C="mask-".concat(s||ln()),S="clip-".concat(s||ln()),D={tag:"mask",attributes:O(O({},wr),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[F,x]},Y={tag:"defs",children:[{tag:"clipPath",attributes:{id:S},children:Au(v)},D]};return r.push(Y,{tag:"rect",attributes:O({fill:"currentColor","clip-path":"url(#".concat(S,")"),mask:"url(#".concat(C,")")},wr)}),{children:r,attributes:a}}}},Su={provides:function(t){var n=!1;nt.matchMedia&&(n=nt.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var r=[],a={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};r.push({tag:"path",attributes:O(O({},a),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var o=O(O({},i),{},{attributeName:"opacity"}),s={tag:"circle",attributes:O(O({},a),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||s.children.push({tag:"animate",attributes:O(O({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:O(O({},o),{},{values:"1;0;1;1;0;1;"})}),r.push(s),r.push({tag:"path",attributes:O(O({},a),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:O(O({},o),{},{values:"1;0;0;0;0;1;"})}]}),n||r.push({tag:"path",attributes:O(O({},a),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:O(O({},o),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:r}}}},Cu={hooks:function(){return{parseNodeAttributes:function(n,r){var a=r.getAttribute("data-fa-symbol"),i=a===null?!1:a===""?!0:a;return n.symbol=i,n}}}},Tu=[Sc,mu,pu,hu,gu,xu,ku,wu,Ou,Su,Cu];Hc(Tu,{mixoutsTo:ye});ye.noAuto;var ms=ye.config,Eu=ye.library;ye.dom;var Xn=ye.parse;ye.findIconDefinition;ye.toHtml;var Pu=ye.icon;ye.layer;var Iu=ye.text;ye.counter;function ji(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),n.push.apply(n,r)}return n}function Se(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?ji(Object(n),!0).forEach(function(r){he(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ji(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function qn(e){return qn=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},qn(e)}function he(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Nu(e,t){if(e==null)return{};var n={},r=Object.keys(e),a,i;for(i=0;i<r.length;i++)a=r[i],!(t.indexOf(a)>=0)&&(n[a]=e[a]);return n}function Mu(e,t){if(e==null)return{};var n=Nu(e,t),r,a;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}function Kr(e){return Fu(e)||ju(e)||Lu(e)||Ru()}function Fu(e){if(Array.isArray(e))return Vr(e)}function ju(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Lu(e,t){if(e){if(typeof e=="string")return Vr(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Vr(e,t)}}function Vr(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Ru(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Du=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},ps={exports:{}};(function(e){(function(t){var n=function(x,C,S){if(!c(C)||m(C)||v(C)||w(C)||l(C))return C;var D,Y=0,pe=0;if(d(C))for(D=[],pe=C.length;Y<pe;Y++)D.push(n(x,C[Y],S));else{D={};for(var ie in C)Object.prototype.hasOwnProperty.call(C,ie)&&(D[x(ie,S)]=n(x,C[ie],S))}return D},r=function(x,C){C=C||{};var S=C.separator||"_",D=C.split||/(?=[A-Z])/;return x.split(D).join(S)},a=function(x){return F(x)?x:(x=x.replace(/[\-_\s]+(.)?/g,function(C,S){return S?S.toUpperCase():""}),x.substr(0,1).toLowerCase()+x.substr(1))},i=function(x){var C=a(x);return C.substr(0,1).toUpperCase()+C.substr(1)},o=function(x,C){return r(x,C).toLowerCase()},s=Object.prototype.toString,l=function(x){return typeof x=="function"},c=function(x){return x===Object(x)},d=function(x){return s.call(x)=="[object Array]"},m=function(x){return s.call(x)=="[object Date]"},v=function(x){return s.call(x)=="[object RegExp]"},w=function(x){return s.call(x)=="[object Boolean]"},F=function(x){return x=x-0,x===x},N=function(x,C){var S=C&&"process"in C?C.process:C;return typeof S!="function"?x:function(D,Y){return S(D,x,Y)}},U={camelize:a,decamelize:o,pascalize:i,depascalize:o,camelizeKeys:function(x,C){return n(N(a,C),x)},decamelizeKeys:function(x,C){return n(N(o,C),x,C)},pascalizeKeys:function(x,C){return n(N(i,C),x)},depascalizeKeys:function(){return this.decamelizeKeys.apply(this,arguments)}};e.exports?e.exports=U:t.humps=U})(Du)})(ps);var $u=ps.exports,zu=["class","style"];function Hu(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var r=n.indexOf(":"),a=$u.camelize(n.slice(0,r)),i=n.slice(r+1).trim();return t[a]=i,t},{})}function Bu(e){return e.split(/\s+/).reduce(function(t,n){return t[n]=!0,t},{})}function Ea(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof e=="string")return e;var r=(e.children||[]).map(function(l){return Ea(l)}),a=Object.keys(e.attributes||{}).reduce(function(l,c){var d=e.attributes[c];switch(c){case"class":l.class=Bu(d);break;case"style":l.style=Hu(d);break;default:l.attrs[c]=d}return l},{attrs:{},class:{},style:{}});n.class;var i=n.style,o=i===void 0?{}:i,s=Mu(n,zu);return Do(e.tag,Se(Se(Se({},t),{},{class:a.class,style:Se(Se({},a.style),o)},a.attrs),s),r)}var hs=!1;try{hs=!0}catch{}function Uu(){if(!hs&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function qt(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?he({},e,t):{}}function Yu(e){var t,n=(t={"fa-spin":e.spin,"fa-pulse":e.pulse,"fa-fw":e.fixedWidth,"fa-border":e.border,"fa-li":e.listItem,"fa-inverse":e.inverse,"fa-flip":e.flip===!0,"fa-flip-horizontal":e.flip==="horizontal"||e.flip==="both","fa-flip-vertical":e.flip==="vertical"||e.flip==="both"},he(t,"fa-".concat(e.size),e.size!==null),he(t,"fa-rotate-".concat(e.rotation),e.rotation!==null),he(t,"fa-pull-".concat(e.pull),e.pull!==null),he(t,"fa-swap-opacity",e.swapOpacity),he(t,"fa-bounce",e.bounce),he(t,"fa-shake",e.shake),he(t,"fa-beat",e.beat),he(t,"fa-fade",e.fade),he(t,"fa-beat-fade",e.beatFade),he(t,"fa-flash",e.flash),he(t,"fa-spin-pulse",e.spinPulse),he(t,"fa-spin-reverse",e.spinReverse),t);return Object.keys(n).map(function(r){return n[r]?r:null}).filter(function(r){return r})}function Li(e){if(e&&qn(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(Xn.icon)return Xn.icon(e);if(e===null)return null;if(qn(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}var Pa=ua({name:"FontAwesomeIcon",props:{border:{type:Boolean,default:!1},fixedWidth:{type:Boolean,default:!1},flip:{type:[Boolean,String],default:!1,validator:function(t){return[!0,!1,"horizontal","vertical","both"].indexOf(t)>-1}},icon:{type:[Object,Array,String],required:!0},mask:{type:[Object,Array,String],default:null},listItem:{type:Boolean,default:!1},pull:{type:String,default:null,validator:function(t){return["right","left"].indexOf(t)>-1}},pulse:{type:Boolean,default:!1},rotation:{type:[String,Number],default:null,validator:function(t){return[90,180,270].indexOf(Number.parseInt(t,10))>-1}},swapOpacity:{type:Boolean,default:!1},size:{type:String,default:null,validator:function(t){return["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"].indexOf(t)>-1}},spin:{type:Boolean,default:!1},transform:{type:[String,Object],default:null},symbol:{type:[Boolean,String],default:!1},title:{type:String,default:null},inverse:{type:Boolean,default:!1},bounce:{type:Boolean,default:!1},shake:{type:Boolean,default:!1},beat:{type:Boolean,default:!1},fade:{type:Boolean,default:!1},beatFade:{type:Boolean,default:!1},flash:{type:Boolean,default:!1},spinPulse:{type:Boolean,default:!1},spinReverse:{type:Boolean,default:!1}},setup:function(t,n){var r=n.attrs,a=xe(function(){return Li(t.icon)}),i=xe(function(){return qt("classes",Yu(t))}),o=xe(function(){return qt("transform",typeof t.transform=="string"?Xn.transform(t.transform):t.transform)}),s=xe(function(){return qt("mask",Li(t.mask))}),l=xe(function(){return Pu(a.value,Se(Se(Se(Se({},i.value),o.value),s.value),{},{symbol:t.symbol,title:t.title}))});Ln(l,function(d){if(!d)return Uu("Could not find one or more icon(s)",a.value,s.value)},{immediate:!0});var c=xe(function(){return l.value?Ea(l.value.abstract[0],{},r):null});return function(){return c.value}}});ua({name:"FontAwesomeLayers",props:{fixedWidth:{type:Boolean,default:!1}},setup:function(t,n){var r=n.slots,a=ms.familyPrefix,i=xe(function(){return["".concat(a,"-layers")].concat(Kr(t.fixedWidth?["".concat(a,"-fw")]:[]))});return function(){return Do("div",{class:i.value},r.default?r.default():[])}}});ua({name:"FontAwesomeLayersText",props:{value:{type:[String,Number],default:""},transform:{type:[String,Object],default:null},counter:{type:Boolean,default:!1},position:{type:String,default:null,validator:function(t){return["bottom-left","bottom-right","top-left","top-right"].indexOf(t)>-1}}},setup:function(t,n){var r=n.attrs,a=ms.familyPrefix,i=xe(function(){return qt("classes",[].concat(Kr(t.counter?["".concat(a,"-layers-counter")]:[]),Kr(t.position?["".concat(a,"-layers-").concat(t.position)]:[])))}),o=xe(function(){return qt("transform",typeof t.transform=="string"?Xn.transform(t.transform):t.transform)}),s=xe(function(){var c=Iu(t.value.toString(),Se(Se({},o.value),i.value)),d=c.abstract;return t.counter&&(d[0].attributes.class=d[0].attributes.class.replace("fa-layers-text","")),d[0]}),l=xe(function(){return Ea(s.value,{},r)});return function(){return l.value}}});const Wu={class:"info-icon__background"},Ku=["src"],Vu={class:"info-icon__text"},Nn={__name:"InfoIcon",props:{bgSrc:{type:String,required:!0},text:{type:String,required:!0},iconClass:{type:String,required:!1}},emits:["handleClick"],setup(e,{emit:t}){const n=()=>{t("handleClick")};return(r,a)=>(ee(),de("div",{onClick:n,class:"info-icon"},[M("div",Wu,[M("img",{src:e.bgSrc,alt:"info-icon icon background"},null,8,Ku),M("div",null,[$(sa(Pa),{class:"test",icon:["fas",e.iconClass]},null,8,["icon"])])]),M("div",Vu,[M("p",null,Ze(e.text),1)])]))}};const Xu={class:"info-text__container"},qu=["innerHTML"],Qu={__name:"InfoText",props:{headerTxt:{type:String,required:!0},infoTxt:{type:String,required:!0}},setup(e){return(t,n)=>(ee(),de("div",Xu,[M("h4",null,Ze(e.headerTxt),1),M("span",{innerHTML:e.infoTxt},null,8,qu)]))}};const Ju={},Gu={class:"info-text__layout"};function Zu(e,t){return ee(),de("div",Gu,[wo(e.$slots,"default")])}const ed=$o(Ju,[["render",Zu]]),td={cafe:[{headerTxt:"öppettider ",infoTxt:"Café har öppet mellan 23 juni - 20 augusti | kl 12:00 - 17:00"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],vandrarhem:[{headerTxt:"Boka boende",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"Bankgiro | Swish",infoTxt:"818 - 0556 | 123 421 83 27"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],event:[{headerTxt:"kommande",infoTxt:" hitta kalender på facebook <a href='https://www.facebook.com'>klicka här</a> "},{headerTxt:"Boka lokal",infoTxt:"<b>073-091 72 49</b> <a href='mailto:info@frosovallen.se'>info@frosovallen.se</a> "},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}],gudstjänster:[{headerTxt:"söndagar",infoTxt:"detta är ett test <a href='#'>länk</a>"},{headerTxt:"hitta hit",infoTxt:"Stockevägen 3, 832 93 FRÖSÖN <a href='https://www.google.com/maps/place/Stockev%C3%A4gen+3,+832+96+Fr%C3%B6s%C3%B6n/data=!4m2!3m1!1s0x466fb7a8e0574df3:0x20bf172f27e94663?sa=X&ved=2ahUKEwiCkpXQwuP9AhXPzYsKHXDjAXwQ8gF6BAgKEAI'>maps</a>"}]};const nd={class:"icon__container"},rd={class:"info-text__line-animation"},ad=M("img",{src:Kf,alt:"animation"},null,-1),id={__name:"LearnMoreFeature",setup(e){const t=Qe("cafe"),n=Qe(td),r=Qe(null);return go(()=>{t.value==="cafe"&&(r.value=8.1),t.value==="vandrarhem"&&(r.value=34),t.value==="event"&&(r.value=59.8),t.value==="gudstjänster"&&(r.value=87.1)}),(a,i)=>(ee(),Pt(nn,null,{default:gt(()=>[M("div",nd,[$(Nn,{"bg-src":"./learn-more__cafe-img.png",text:"cafe","icon-class":"utensils",onHandleClick:i[0]||(i[0]=()=>t.value="cafe")}),$(Nn,{"bg-src":"./learn-more__vandrarhem-img.png",text:"vandrarhem","icon-class":"house",onHandleClick:i[1]||(i[1]=()=>t.value="vandrarhem")}),$(Nn,{"bg-src":"./learn-more__event-img.png",text:"event","icon-class":"calendar",onHandleClick:i[2]||(i[2]=()=>t.value="event")}),$(Nn,{"bg-src":"./learn-more__gudstjänst-img.png",text:"gudstjänst","icon-class":"church",onHandleClick:i[3]||(i[3]=()=>t.value="gudstjänster")})]),M("div",rd,[ad,M("img",{style:fn({left:r.value+"%"}),class:"line-green__arrow",src:Vf,alt:"animation"},null,4)]),$(ed,null,{default:gt(()=>[(ee(!0),de(ce,null,ko(n.value[t.value],(o,s)=>(ee(),Pt(Qu,{key:s,"header-txt":o.headerTxt,"info-txt":o.infoTxt},null,8,["header-txt","info-txt"]))),128))]),_:1})]),_:1}))}},gs="/frosovallen-test/assets/imgHeaderDesktop-a28e796e.png",od="/frosovallen-test/assets/imgHeaderMobile-650abe62.png";const Mn={__name:"TableCategory",props:{text:{type:String,required:!0},fontAwesomeClass:{type:String,required:!1},selected:{type:Boolean,default:!1}},emits:["handleClick"],setup(e,{emit:t}){const n=()=>{t("handleClick")};return(r,a)=>{const i=Hl("FontAwesomeIcon");return ee(),de("div",{onClick:n,class:Ft({"food-table__category":!0,"food-table__category--selected":e.selected})},[$(i,{icon:["fas",e.fontAwesomeClass]},null,8,["icon"]),M("h4",null,Ze(e.text),1)],2)}}};const sd={key:0,class:"food-item__picture--disabled"},ld=M("p",null,"slutsåld",-1),fd=[ld],cd=["src"],ud={class:"food-item__text-block"},dd={__name:"FoodItem",props:{imgSrc:{type:String,required:!0},headerTxt:{type:String,required:!0},text:{type:String,required:!0},outOfStock:{type:Boolean,required:!1,default:!1}},setup(e){return(t,n)=>(ee(),de("div",{class:Ft({"food-item":!0,"food-item--disabled":e.outOfStock})},[M("picture",null,[e.outOfStock?(ee(),de("div",sd,fd)):jo("",!0),M("img",{src:e.imgSrc,alt:"food item picture"},null,8,cd)]),M("div",ud,[M("h5",null,Ze(e.headerTxt),1),M("p",null,Ze(e.text),1)])],2))}},Ri=[{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"Fwarmitem",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./warmFoodDef.jpg"},{headerTxt:"warm item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./warmFoodDef.jpg"}],md=[{headerTxt:"cold item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./coldFoodDef.jpg"},{headerTxt:"cold item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./coldFoodDef.jpg"},{headerTxt:"cold item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./coldFoodDef.jpg"},{headerTxt:"cold item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./coldFoodDef.jpg"},{headerTxt:"cold item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./coldFoodDef.jpg"}],pd=[{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./dessertDef.jpg"},{headerTxt:"dessert item",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./dessertDef.jpg"}],hd=[{headerTxt:"drinks",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./drinkDef.jpg"},{headerTxt:"drinks",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!1,imgSrc:"./drinkDef.jpg"},{headerTxt:"drinks",text:"Beskrivning av detta föremålet, kanske innehållet eller likande.det beror ju lite på vad man känner för",outOfStock:!0,imgSrc:"./drinkDef.jpg"}];const gd=gs,vd=od,bd={class:"food-table"},yd=M("picture",{id:"food-table__img-header"},[M("source",{media:"(min-width:650px)",srcset:gd}),M("source",{media:"(min-width:465px)",srcset:vd}),M("img",{src:gs,alt:"berg"})],-1),_d={class:"food-table__categories"},xd={class:"food-table__btn-container"},kd={__name:"FoodTable",setup(e){const t=Qe(1),n=Qe(!1),r=Qe("visa mer"),a=Qe(Ri),i=Qe("warm");go(()=>{t.value=Math.ceil(a.value.length/2)});const o=()=>{n.value=!n.value,n.value?r.value="visa mindre":r.value="visa mer"},s=()=>{a.value=Ri,i.value="warm"},l=()=>{a.value=md,i.value="cold"},c=()=>{a.value=pd,i.value="dessert"},d=()=>{a.value=hd,i.value="drinks"};return(m,v)=>(ee(),de("section",bd,[yd,$(nn,null,{default:gt(()=>[M("div",_d,[$(Mn,{"font-awesome-class":"bowl-rice",text:"varm mat",selected:i.value==="warm",onHandleClick:s},null,8,["selected"]),$(Mn,{"font-awesome-class":"bowl-food",text:"kall mat",selected:i.value==="cold",onHandleClick:l},null,8,["selected"]),$(Mn,{"font-awesome-class":"ice-cream",text:"fika",selected:i.value==="dessert",onHandleClick:c},null,8,["selected"]),$(Mn,{"font-awesome-class":"mug-hot",text:"dryck",selected:i.value==="drinks",onHandleClick:d},null,8,["selected"])])]),_:1}),$(nn,null,{default:gt(()=>[M("div",{class:Ft({"food-table__items":!0,"food-table__items--expanded":n.value})},[M("div",{class:"food-table__divider",style:fn({"grid-row-end":`span ${t.value}`})},null,4),(ee(!0),de(ce,null,ko(a.value,(w,F)=>(ee(),Pt(dd,{key:F,"header-txt":w.headerTxt,text:w.text,"out-of-stock":w.outOfStock,"img-src":w.imgSrc},null,8,["header-txt","text","out-of-stock","img-src"]))),128))],2)]),_:1}),M("div",xd,[a.value.length>=4?(ee(),de("button",{key:0,onClick:o},Ze(r.value),1)):jo("",!0)])]))}},wd="/frosovallen-test/assets/frosovallenHouse-24bba71e.png";const Ad=M("section",{id:"about-us"},[M("div",{class:"about-us__outer-div"},[M("h2",null,"Frösövallen"),M("div",{class:"about-us__inner-div"},[M("article",{class:"about-us__info-txt"},[M("h3",null,"om oss"),M("p",null," Vivamus orci purus, semper et euismod id, vestibulum ut risus. Morbi diam ante, varius eget lorem et, accumsan sodales dolor. Aliquam sollicitudin nibh quis turpis tincidunt imperdiet. Donec ut volutpat ipsum. Duis posuere diam ut urna pretium, nec eleifend velit. "),M("p",null," Pellentesque. Vestibulum et sagittis nunc, sed bibendum justo. Etiam posuere dui et porta sagittis. Praesent vitae risus ornare, cursus dolor sit amet, aliquet velit. Etiam molestie magna interdum lobortis mollis. Maecenas sem elit, hendrerit nec dolor sed. ")]),M("div",{class:"about-us__img-container"},[M("img",{src:wd,alt:"bild på försvallen"})])]),M("div",{class:"about-us__background-shape"})])],-1),Od={__name:"AboutUs",setup(e){return(t,n)=>(ee(),Pt(nn,null,{default:gt(()=>[Ad]),_:1}))}},Sd="/frosovallen-test/main-header__img.png",Cd=["href"],Di={__name:"NavItem",props:{text:{type:String,required:!0},goTo:{type:String}},emits:["handleClick"],setup(e){return(t,n)=>(ee(),de("li",{class:"header-nav-item",onClick:n[0]||(n[0]=(...r)=>t.handleClick&&t.handleClick(...r))},[M("a",{href:e.goTo},Ze(e.text),9,Cd)]))}};const Td={class:"header-nav-item header-nav-item__link"},Ed=["href"],$i={__name:"NavLinkIem",props:{text:{type:String,required:!0},aLink:{type:String,required:!0}},setup(e){return(t,n)=>(ee(),de("li",Td,[M("a",{target:"_blank",href:e.aLink},Ze(e.text),9,Ed),$(sa(Pa),{icon:"arrow-up-right-from-square"})]))}};const Pd=M("picture",{class:"main-header__img"},[M("img",{src:Sd,alt:""})],-1),Id={class:"header-nav"},Nd={class:"header-nav__desktop-menu-row"},Md=M("div",{class:"header-nav__logo"},"logo",-1),Fd={class:"header-nav__desktop-menu-row"},jd={__name:"HeaderNav",setup(e){return(t,n)=>(ee(),de(ce,null,[Pd,$(nn,null,{default:gt(()=>[M("header",Id,[M("ul",Nd,[$(Di,{text:"cafe","go-to":"#cafe"}),$(Di,{text:"meny","go-to":"#meny"})]),Md,M("ul",Fd,[$($i,{text:"evenemang","a-link":"https://facebook.com"}),$($i,{text:"hitta hit","a-link":"https://facebook.com"})])])]),_:1})],64))}};const Ld=M("footer",null,null,-1),Rd={__name:"App",setup(e){return(t,n)=>(ee(),de(ce,null,[$(jd),M("main",null,[$(Od),$(id),$(kd)]),Ld],64))}};var Dd={prefix:"fas",iconName:"mug-hot",icon:[512,512,[9749],"f7b6","M88 0C74.7 0 64 10.7 64 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C120.5 112.3 128 119.9 128 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C119.5 47.7 112 40.1 112 24c0-13.3-10.7-24-24-24zM32 192c-17.7 0-32 14.3-32 32V416c0 53 43 96 96 96H288c53 0 96-43 96-96h16c61.9 0 112-50.1 112-112s-50.1-112-112-112H352 32zm352 64h16c26.5 0 48 21.5 48 48s-21.5 48-48 48H384V256zM224 24c0-13.3-10.7-24-24-24s-24 10.7-24 24c0 38.9 23.4 59.4 39.1 73.1l1.1 1C232.5 112.3 240 119.9 240 136c0 13.3 10.7 24 24 24s24-10.7 24-24c0-38.9-23.4-59.4-39.1-73.1l-1.1-1C231.5 47.7 224 40.1 224 24z"]},$d={prefix:"fas",iconName:"bowl-food",icon:[512,512,[],"e4c6","M0 192c0-35.3 28.7-64 64-64c.5 0 1.1 0 1.6 0C73 91.5 105.3 64 144 64c15 0 29 4.1 40.9 11.2C198.2 49.6 225.1 32 256 32s57.8 17.6 71.1 43.2C339 68.1 353 64 368 64c38.7 0 71 27.5 78.4 64c.5 0 1.1 0 1.6 0c35.3 0 64 28.7 64 64c0 11.7-3.1 22.6-8.6 32H8.6C3.1 214.6 0 203.7 0 192zm0 91.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4z"]},zd={prefix:"fas",iconName:"church",icon:[640,512,[9962],"f51d","M344 24c0-13.3-10.7-24-24-24s-24 10.7-24 24V48H264c-13.3 0-24 10.7-24 24s10.7 24 24 24h32v46.4L183.3 210c-14.5 8.7-23.3 24.3-23.3 41.2V512h96V416c0-35.3 28.7-64 64-64s64 28.7 64 64v96h96V251.2c0-16.9-8.8-32.5-23.3-41.2L344 142.4V96h32c13.3 0 24-10.7 24-24s-10.7-24-24-24H344V24zM24.9 330.3C9.5 338.8 0 354.9 0 372.4V464c0 26.5 21.5 48 48 48h80V273.6L24.9 330.3zM592 512c26.5 0 48-21.5 48-48V372.4c0-17.5-9.5-33.6-24.9-42.1L512 273.6V512h80z"]},Hd={prefix:"fas",iconName:"arrow-up-right-from-square",icon:[512,512,["external-link"],"f08e","M320 0c-17.7 0-32 14.3-32 32s14.3 32 32 32h82.7L201.4 265.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L448 109.3V192c0 17.7 14.3 32 32 32s32-14.3 32-32V32c0-17.7-14.3-32-32-32H320zM80 32C35.8 32 0 67.8 0 112V432c0 44.2 35.8 80 80 80H400c44.2 0 80-35.8 80-80V320c0-17.7-14.3-32-32-32s-32 14.3-32 32V432c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16H192c17.7 0 32-14.3 32-32s-14.3-32-32-32H80z"]},Bd={prefix:"fas",iconName:"house",icon:[576,512,[127968,63498,63500,"home","home-alt","home-lg-alt"],"f015","M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"]},Ud={prefix:"fas",iconName:"utensils",icon:[448,512,[127860,61685,"cutlery"],"f2e7","M416 0C400 0 288 32 288 176V288c0 35.3 28.7 64 64 64h32V480c0 17.7 14.3 32 32 32s32-14.3 32-32V352 240 32c0-17.7-14.3-32-32-32zM64 16C64 7.8 57.9 1 49.7 .1S34.2 4.6 32.4 12.5L2.1 148.8C.7 155.1 0 161.5 0 167.9c0 45.9 35.1 83.6 80 87.7V480c0 17.7 14.3 32 32 32s32-14.3 32-32V255.6c44.9-4.1 80-41.8 80-87.7c0-6.4-.7-12.8-2.1-19.1L191.6 12.5c-1.8-8-9.3-13.3-17.4-12.4S160 7.8 160 16V150.2c0 5.4-4.4 9.8-9.8 9.8c-5.1 0-9.3-3.9-9.8-9L127.9 14.6C127.2 6.3 120.3 0 112 0s-15.2 6.3-15.9 14.6L83.7 151c-.5 5.1-4.7 9-9.8 9c-5.4 0-9.8-4.4-9.8-9.8V16zm48.3 152l-.3 0-.3 0 .3-.7 .3 .7z"]},Yd={prefix:"fas",iconName:"bowl-rice",icon:[512,512,[],"e2eb","M176 56c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24zm24 48h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H200c-13.3 0-24-10.7-24-24s10.7-24 24-24zM56 176H72c13.3 0 24 10.7 24 24s-10.7 24-24 24H56c-13.3 0-24-10.7-24-24s10.7-24 24-24zM0 283.4C0 268.3 12.3 256 27.4 256H484.6c15.1 0 27.4 12.3 27.4 27.4c0 70.5-44.4 130.7-106.7 154.1L403.5 452c-2 16-15.6 28-31.8 28H140.2c-16.1 0-29.8-12-31.8-28l-1.8-14.4C44.4 414.1 0 353.9 0 283.4zM224 200c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H248c-13.3 0-24-10.7-24-24zm-96 0c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H104c-13.3 0-24-10.7-24-24s10.7-24 24-24zm216 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H344c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24zm120 96c0-13.3 10.7-24 24-24h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H440c-13.3 0-24-10.7-24-24zm-24-96h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H392c-13.3 0-24-10.7-24-24s10.7-24 24-24zM296 32h16c13.3 0 24 10.7 24 24s-10.7 24-24 24H296c-13.3 0-24-10.7-24-24s10.7-24 24-24z"]},Wd={prefix:"fas",iconName:"ice-cream",icon:[384,512,[127848],"f810","M335.1 160c.6-5.3 .9-10.6 .9-16C336 64.5 271.5 0 192 0S48 64.5 48 144c0 5.4 .3 10.7 .9 16H48c-26.5 0-48 21.5-48 48s21.5 48 48 48h53.5 181H336c26.5 0 48-21.5 48-48s-21.5-48-48-48h-.9zM64 288L168.8 497.7c4.4 8.8 13.3 14.3 23.2 14.3s18.8-5.5 23.2-14.3L320 288H64z"]},Kd={prefix:"fas",iconName:"calendar",icon:[448,512,[128197,128198],"f133","M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"]};Eu.add(Hd,Ud,Kd,zd,Bd,Wd,Dd,$d,Yd);Yf(Rd).component("FontAwesomeIcon",Pa).mount("#app");
