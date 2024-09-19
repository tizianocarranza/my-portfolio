const M=document.querySelector(".carousel"),O=document.querySelector(".prev"),C=document.querySelector(".next");let b=0;function V(){M&&(M.style.transform=`translateX(-${b*33.33}%)`)}C&&C.addEventListener("click",()=>{b=(b+1)%3,V()});O&&O.addEventListener("click",()=>{b=(b-1+3)%3,V()});const g="data-astro-transition-persist";function ne(e){for(const t of document.scripts)for(const n of e.scripts)if(!n.hasAttribute("data-astro-rerun")&&(!t.src&&t.textContent===n.textContent||t.src&&t.type===n.type&&t.src===n.src)){n.dataset.astroExec="";break}}function oe(e){const t=document.documentElement,n=[...t.attributes].filter(({name:o})=>(t.removeAttribute(o),o.startsWith("data-astro-")));[...e.documentElement.attributes,...n].forEach(({name:o,value:r})=>t.setAttribute(o,r))}function re(e){for(const t of Array.from(document.head.children)){const n=ae(t,e);n?n.remove():t.remove()}document.head.append(...e.head.children)}function ie(e,t){t.replaceWith(e);for(const n of t.querySelectorAll(`[${g}]`)){const o=n.getAttribute(g),r=e.querySelector(`[${g}="${o}"]`);r&&(r.replaceWith(n),r.localName==="astro-island"&&ce(n)&&(n.setAttribute("ssr",""),n.setAttribute("props",r.getAttribute("props"))))}}const se=()=>{const e=document.activeElement;if(e?.closest(`[${g}]`)){if(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement){const t=e.selectionStart,n=e.selectionEnd;return()=>k({activeElement:e,start:t,end:n})}return()=>k({activeElement:e})}else return()=>k({activeElement:null})},k=({activeElement:e,start:t,end:n})=>{e&&(e.focus(),(e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement)&&(typeof t=="number"&&(e.selectionStart=t),typeof n=="number"&&(e.selectionEnd=n)))},ae=(e,t)=>{const n=e.getAttribute(g),o=n&&t.head.querySelector(`[${g}="${n}"]`);if(o)return o;if(e.matches("link[rel=stylesheet]")){const r=e.getAttribute("href");return t.head.querySelector(`link[rel=stylesheet][href="${r}"]`)}return null},ce=e=>{const t=e.dataset.astroTransitionPersistProps;return t==null||t==="false"},le=e=>{ne(e),oe(e),re(e);const t=se();ie(e.body,document.body),t()},ue="astro:before-preparation",fe="astro:after-preparation",de="astro:before-swap",me="astro:after-swap",he=e=>document.dispatchEvent(new Event(e));class W extends Event{from;to;direction;navigationType;sourceElement;info;newDocument;signal;constructor(t,n,o,r,s,u,a,l,f,c){super(t,n),this.from=o,this.to=r,this.direction=s,this.navigationType=u,this.sourceElement=a,this.info=l,this.newDocument=f,this.signal=c,Object.defineProperties(this,{from:{enumerable:!0},to:{enumerable:!0,writable:!0},direction:{enumerable:!0,writable:!0},navigationType:{enumerable:!0},sourceElement:{enumerable:!0},info:{enumerable:!0},newDocument:{enumerable:!0,writable:!0},signal:{enumerable:!0}})}}class pe extends W{formData;loader;constructor(t,n,o,r,s,u,a,l,f,c){super(ue,{cancelable:!0},t,n,o,r,s,u,a,l),this.formData=f,this.loader=c.bind(this,this),Object.defineProperties(this,{formData:{enumerable:!0},loader:{enumerable:!0,writable:!0}})}}class we extends W{direction;viewTransition;swap;constructor(t,n){super(de,void 0,t.from,t.to,t.direction,t.navigationType,t.sourceElement,t.info,t.newDocument,t.signal),this.direction=t.direction,this.viewTransition=n,this.swap=()=>le(this.newDocument),Object.defineProperties(this,{direction:{enumerable:!0},viewTransition:{enumerable:!0},swap:{enumerable:!0,writable:!0}})}}async function ye(e,t,n,o,r,s,u,a,l){const f=new pe(e,t,n,o,r,s,window.document,u,a,l);return document.dispatchEvent(f)&&(await f.loader(),f.defaultPrevented||(he(fe),f.navigationType!=="traverse"&&D({scrollX,scrollY}))),f}function ge(e,t){const n=new we(e,t);return document.dispatchEvent(n),n.swap(),n}const be=history.pushState.bind(history),E=history.replaceState.bind(history),D=e=>{history.state&&(history.scrollRestoration="manual",E({...history.state,...e},""))},I=!!document.startViewTransition,N=()=>!!document.querySelector('[name="astro-view-transitions-enabled"]'),j=(e,t)=>e.pathname===t.pathname&&e.search===t.search;let d,w,S;const K=e=>document.dispatchEvent(new Event(e)),G=()=>K("astro:page-load"),ve=()=>{let e=document.createElement("div");e.setAttribute("aria-live","assertive"),e.setAttribute("aria-atomic","true"),e.className="astro-route-announcer",document.body.append(e),setTimeout(()=>{let t=document.title||document.querySelector("h1")?.textContent||location.pathname;e.textContent=t},60)},F="data-astro-transition-persist",X="data-astro-transition",x="data-astro-transition-fallback";let q,v=0;history.state?(v=history.state.index,scrollTo({left:history.state.scrollX,top:history.state.scrollY})):N()&&(E({index:v,scrollX,scrollY},""),history.scrollRestoration="manual");async function Te(e,t){try{const n=await fetch(e,t),r=(n.headers.get("content-type")??"").split(";",1)[0].trim();return r!=="text/html"&&r!=="application/xhtml+xml"?null:{html:await n.text(),redirected:n.redirected?n.url:void 0,mediaType:r}}catch{return null}}function z(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function Ee(){let e=Promise.resolve();for(const t of Array.from(document.scripts)){if(t.dataset.astroExec==="")continue;const n=t.getAttribute("type");if(n&&n!=="module"&&n!=="text/javascript")continue;const o=document.createElement("script");o.innerHTML=t.innerHTML;for(const r of t.attributes){if(r.name==="src"){const s=new Promise(u=>{o.onload=o.onerror=u});e=e.then(()=>s)}o.setAttribute(r.name,r.value)}o.dataset.astroExec="",t.replaceWith(o)}return e}const J=(e,t,n,o,r)=>{const s=j(t,e),u=document.title;document.title=o;let a=!1;if(e.href!==location.href&&!r)if(n.history==="replace"){const l=history.state;E({...n.state,index:l.index,scrollX:l.scrollX,scrollY:l.scrollY},"",e.href)}else be({...n.state,index:++v,scrollX:0,scrollY:0},"",e.href);if(document.title=u,S=e,s||(scrollTo({left:0,top:0,behavior:"instant"}),a=!0),r)scrollTo(r.scrollX,r.scrollY);else{if(e.hash){history.scrollRestoration="auto";const l=history.state;location.href=e.href,history.state||(E(l,""),s&&window.dispatchEvent(new PopStateEvent("popstate")))}else a||scrollTo({left:0,top:0,behavior:"instant"});history.scrollRestoration="manual"}};function Ae(e){const t=[];for(const n of e.querySelectorAll("head link[rel=stylesheet]"))if(!document.querySelector(`[${F}="${n.getAttribute(F)}"], link[rel=stylesheet][href="${n.getAttribute("href")}"]`)){const o=document.createElement("link");o.setAttribute("rel","preload"),o.setAttribute("as","style"),o.setAttribute("href",n.getAttribute("href")),t.push(new Promise(r=>{["load","error"].forEach(s=>o.addEventListener(s,r)),document.head.append(o)}))}return t}async function Y(e,t,n,o,r){async function s(l){function f(h){const m=h.effect;return!m||!(m instanceof KeyframeEffect)||!m.target?!1:window.getComputedStyle(m.target,m.pseudoElement).animationIterationCount==="infinite"}const c=document.getAnimations();document.documentElement.setAttribute(x,l);const p=document.getAnimations().filter(h=>!c.includes(h)&&!f(h));return Promise.allSettled(p.map(h=>h.finished))}if(r==="animate"&&!n.transitionSkipped&&!e.signal.aborted)try{await s("old")}catch{}const u=document.title,a=ge(e,n.viewTransition);J(a.to,a.from,t,u,o),K(me),r==="animate"&&(!n.transitionSkipped&&!a.signal.aborted?s("new").finally(()=>n.viewTransitionFinished()):n.viewTransitionFinished())}function Se(){return d?.controller.abort(),d={controller:new AbortController}}async function Q(e,t,n,o,r){const s=Se();if(!N()||location.origin!==n.origin){s===d&&(d=void 0),location.href=n.href;return}const u=r?"traverse":o.history==="replace"?"replace":"push";if(u!=="traverse"&&D({scrollX,scrollY}),j(t,n)&&(e!=="back"&&n.hash||e==="back"&&t.hash)){J(n,t,o,document.title,r),s===d&&(d=void 0);return}const a=await ye(t,n,e,u,o.sourceElement,o.info,s.controller.signal,o.formData,l);if(a.defaultPrevented||a.signal.aborted){s===d&&(d=void 0),a.signal.aborted||(location.href=n.href);return}async function l(i){const p=i.to.href,h={signal:i.signal};if(i.formData){h.method="POST";const y=i.sourceElement instanceof HTMLFormElement?i.sourceElement:i.sourceElement instanceof HTMLElement&&"form"in i.sourceElement?i.sourceElement.form:i.sourceElement?.closest("form");h.body=y?.attributes.getNamedItem("enctype")?.value==="application/x-www-form-urlencoded"?new URLSearchParams(i.formData):i.formData}const m=await Te(p,h);if(m===null){i.preventDefault();return}if(m.redirected){const y=new URL(m.redirected);if(y.origin!==i.to.origin){i.preventDefault();return}i.to=y}if(q??=new DOMParser,i.newDocument=q.parseFromString(m.html,m.mediaType),i.newDocument.querySelectorAll("noscript").forEach(y=>y.remove()),!i.newDocument.querySelector('[name="astro-view-transitions-enabled"]')&&!i.formData){i.preventDefault();return}const R=Ae(i.newDocument);R.length&&!i.signal.aborted&&await Promise.all(R)}async function f(){if(w&&w.viewTransition){try{w.viewTransition.skipTransition()}catch{}try{await w.viewTransition.updateCallbackDone}catch{}}return w={transitionSkipped:!1}}const c=await f();if(a.signal.aborted){s===d&&(d=void 0);return}if(document.documentElement.setAttribute(X,a.direction),I)c.viewTransition=document.startViewTransition(async()=>await Y(a,o,c,r));else{const i=(async()=>{await Promise.resolve(),await Y(a,o,c,r,z())})();c.viewTransition={updateCallbackDone:i,ready:i,finished:new Promise(p=>c.viewTransitionFinished=p),skipTransition:()=>{c.transitionSkipped=!0,document.documentElement.removeAttribute(x)}}}c.viewTransition.updateCallbackDone.finally(async()=>{await Ee(),G(),ve()}),c.viewTransition.finished.finally(()=>{c.viewTransition=void 0,c===w&&(w=void 0),s===d&&(d=void 0),document.documentElement.removeAttribute(X),document.documentElement.removeAttribute(x)});try{await c.viewTransition.updateCallbackDone}catch(i){const p=i;console.log("[astro]",p.name,p.message,p.stack)}}async function $(e,t){await Q("forward",S,new URL(e,location.href),t??{})}function Le(e){if(!N()&&e.state){location.reload();return}if(e.state===null)return;const t=history.state,n=t.index,o=n>v?"forward":"back";v=n,Q(o,S,new URL(location.href),{},t)}const _=()=>{history.state&&(scrollX!==history.state.scrollX||scrollY!==history.state.scrollY)&&D({scrollX,scrollY})};{if(I||z()!=="none")if(S=new URL(location.href),addEventListener("popstate",Le),addEventListener("load",G),"onscrollend"in window)addEventListener("scrollend",_);else{let e,t,n,o;const r=()=>{if(o!==history.state?.index){clearInterval(e),e=void 0;return}if(t===scrollY&&n===scrollX){clearInterval(e),e=void 0,_();return}else t=scrollY,n=scrollX};addEventListener("scroll",()=>{e===void 0&&(o=history.state.index,t=scrollY,n=scrollX,e=window.setInterval(r,50))},{passive:!0})}for(const e of document.scripts)e.dataset.astroExec=""}const Z=new Set,A=new WeakSet;let P,ee,B=!1;function Re(e){B||(B=!0,P??=e?.prefetchAll,ee??=e?.defaultStrategy??"hover",ke(),xe(),Pe(),Ie())}function ke(){for(const e of["touchstart","mousedown"])document.body.addEventListener(e,t=>{T(t.target,"tap")&&L(t.target.href,{ignoreSlowConnection:!0})},{passive:!0})}function xe(){let e;document.body.addEventListener("focusin",o=>{T(o.target,"hover")&&t(o)},{passive:!0}),document.body.addEventListener("focusout",n,{passive:!0}),H(()=>{for(const o of document.getElementsByTagName("a"))A.has(o)||T(o,"hover")&&(A.add(o),o.addEventListener("mouseenter",t,{passive:!0}),o.addEventListener("mouseleave",n,{passive:!0}))});function t(o){const r=o.target.href;e&&clearTimeout(e),e=setTimeout(()=>{L(r)},80)}function n(){e&&(clearTimeout(e),e=0)}}function Pe(){let e;H(()=>{for(const t of document.getElementsByTagName("a"))A.has(t)||T(t,"viewport")&&(A.add(t),e??=De(),e.observe(t))})}function De(){const e=new WeakMap;return new IntersectionObserver((t,n)=>{for(const o of t){const r=o.target,s=e.get(r);o.isIntersecting?(s&&clearTimeout(s),e.set(r,setTimeout(()=>{n.unobserve(r),e.delete(r),L(r.href)},300))):s&&(clearTimeout(s),e.delete(r))}})}function Ie(){H(()=>{for(const e of document.getElementsByTagName("a"))T(e,"load")&&L(e.href)})}function L(e,t){e=e.replace(/#.*/,"");const n=t?.ignoreSlowConnection??!1;if(Ne(e,n))if(Z.add(e),document.createElement("link").relList?.supports?.("prefetch")&&t?.with!=="fetch"){const o=document.createElement("link");o.rel="prefetch",o.setAttribute("href",e),document.head.append(o)}else fetch(e,{priority:"low"})}function Ne(e,t){if(!navigator.onLine||!t&&te())return!1;try{const n=new URL(e,location.href);return location.origin===n.origin&&(location.pathname!==n.pathname||location.search!==n.search)&&!Z.has(e)}catch{}return!1}function T(e,t){if(e?.tagName!=="A")return!1;const n=e.dataset.astroPrefetch;return n==="false"?!1:t==="tap"&&(n!=null||P)&&te()?!0:n==null&&P||n===""?t===ee:n===t}function te(){if("connection"in navigator){const e=navigator.connection;return e.saveData||/2g/.test(e.effectiveType)}return!1}function H(e){e();let t=!1;document.addEventListener("astro:page-load",()=>{if(!t){t=!0;return}e()})}function He(){const e=document.querySelector('[name="astro-view-transitions-fallback"]');return e?e.getAttribute("content"):"animate"}function U(e){return e.dataset.astroReload!==void 0}(I||He()!=="none")&&(document.addEventListener("click",e=>{let t=e.target;if(e.composed&&(t=e.composedPath()[0]),t instanceof Element&&(t=t.closest("a, area")),!(t instanceof HTMLAnchorElement)&&!(t instanceof SVGAElement)&&!(t instanceof HTMLAreaElement))return;const n=t instanceof HTMLElement?t.target:t.target.baseVal,o=t instanceof HTMLElement?t.href:t.href.baseVal,r=new URL(o,location.href).origin;U(t)||t.hasAttribute("download")||!t.href||n&&n!=="_self"||r!==location.origin||e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey||e.defaultPrevented||(e.preventDefault(),$(o,{history:t.dataset.astroHistory==="replace"?"replace":"auto",sourceElement:t}))}),document.addEventListener("submit",e=>{let t=e.target;if(t.tagName!=="FORM"||e.defaultPrevented||U(t))return;const n=t,o=e.submitter,r=new FormData(n,o),s=typeof n.action=="string"?n.action:n.getAttribute("action"),u=typeof n.method=="string"?n.method:n.getAttribute("method");let a=o?.getAttribute("formaction")??s??location.pathname;const l=o?.getAttribute("formmethod")??u??"get";if(l==="dialog"||location.origin!==new URL(a,location.href).origin)return;const f={sourceElement:o??n};if(l==="get"){const c=new URLSearchParams(r),i=new URL(a);i.search=c.toString(),a=i.toString()}else f.formData=r;e.preventDefault(),$(a,f)}),Re({prefetchAll:!0}));
