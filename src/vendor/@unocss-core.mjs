/* esm.sh - esbuild bundle(@unocss/core@0.58.5) es2022 production */
function qt(e){return e.replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}function ut(e){let t=e.length,r=-1,n,s="",o=e.charCodeAt(0);for(;++r<t;){if(n=e.charCodeAt(r),n===0){s+="\uFFFD";continue}if(n===37){s+="\\%";continue}if(n===44){s+="\\,";continue}if(n>=1&&n<=31||n===127||r===0&&n>=48&&n<=57||r===1&&n>=48&&n<=57&&o===45){s+=`\\${n.toString(16)} `;continue}if(r===0&&t===1&&n===45){s+=`\\${e.charAt(r)}`;continue}if(n>=128||n===45||n===95||n>=48&&n<=57||n>=65&&n<=90||n>=97&&n<=122){s+=e.charAt(r);continue}s+=`\\${e.charAt(r)}`}return s}var z=ut;function b(e=[]){return Array.isArray(e)?e:[e]}function I(e){return Array.from(new Set(e))}function ht(e,t){return e.reduce((r,n)=>(r.findIndex(o=>t(n,o))===-1&&r.push(n),r),[])}function v(e){return typeof e=="string"}function L(e){return v(e)?e:(Array.isArray(e)?e:Object.entries(e)).filter(t=>t[1]!=null)}function pt(e){return Array.isArray(e)?e.find(t=>!Array.isArray(t)||Array.isArray(t[0]))?e.map(t=>L(t)):[e]:[L(e)]}function dt(e){return e.filter(([t,r],n)=>{if(t.startsWith("$$"))return!1;for(let s=n-1;s>=0;s--)if(e[s][0]===t&&e[s][1]===r)return!1;return!0})}function W(e){return e==null?"":dt(e).map(([t,r])=>r!=null?`${t}:${r};`:void 0).filter(Boolean).join("")}function T(e){return e&&typeof e=="object"&&!Array.isArray(e)}function K(e,t,r=!1){let n=e,s=t;if(Array.isArray(s))return r&&Array.isArray(s)?[...n,...s]:[...s];let o={...n};return T(n)&&T(s)&&Object.keys(s).forEach(c=>{T(n[c])&&T(s[c])||Array.isArray(n[c])&&Array.isArray(s[c])?o[c]=K(n[c],s[c],r):Object.assign(o,{[c]:s[c]})}),o}function B(e){let t,r,n;if(Array.isArray(e)){for(r=Array(t=e.length);t--;)r[t]=(n=e[t])&&typeof n=="object"?B(n):n;return r}if(Object.prototype.toString.call(e)==="[object Object]"){r={};for(t in e)t==="__proto__"?Object.defineProperty(r,t,{value:B(e[t]),configurable:!0,enumerable:!0,writable:!0}):r[t]=(n=e[t])&&typeof n=="object"?B(n):n;return r}return e}function mt(e){return v(e[0])}function gt(e){return v(e[0])}var yt=/^\[(.+?)~?="(.*)"\]$/,kt=/\.(css|postcss|sass|scss|less|stylus|styl)($|\?)/,St=/[\w\u00A0-\uFFFF-_:%-?]/,Z="$$shortcut-no-merge";function Jt(e){return e.match(yt)}function Kt(e=""){return St.test(e)}function _t(e){return typeof e=="function"?{match:e}:e}function tt(e){return e.length===3}function it(e){return e!=null}function xt(){}var $t=Object.defineProperty,wt=(e,t,r)=>t in e?$t(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,vt=(e,t,r)=>(wt(e,typeof t!="symbol"?t+"":t,r),r),q=class{constructor(){vt(this,"_map",new Map)}get(t,r){let n=this._map.get(t);if(n)return n.get(r)}getFallback(t,r,n){let s=this._map.get(t);return s||(s=new Map,this._map.set(t,s)),s.has(r)||s.set(r,n),s.get(r)}set(t,r,n){let s=this._map.get(t);return s||(s=new Map,this._map.set(t,s)),s.set(r,n),this}has(t,r){return this._map.get(t)?.has(r)}delete(t,r){return this._map.get(t)?.delete(r)||!1}deleteTop(t){return this._map.delete(t)}map(t){return Array.from(this._map.entries()).flatMap(([r,n])=>Array.from(n.entries()).map(([s,o])=>t(o,r,s)))}},et=class extends Map{map(t){let r=[];return this.forEach((n,s)=>{r.push(t(n,s))}),r}},At=Object.defineProperty,Mt=(e,t,r)=>t in e?At(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,bt=(e,t,r)=>(Mt(e,typeof t!="symbol"?t+"":t,r),r),U=class extends Set{constructor(t){super(t),bt(this,"_map"),this._map??(this._map=new Map)}add(t){return this._map??(this._map=new Map),this._map.set(t,(this._map.get(t)??0)+1),super.add(t)}delete(t){return this._map.delete(t),super.delete(t)}clear(){this._map.clear(),super.clear()}getCount(t){return this._map.get(t)??0}setCount(t,r){return this._map.set(t,r),super.add(t)}};function Y(e){return e instanceof U}function Qt(e,t){return t.forEach(r=>{r[2]?r[2].layer=e:r[2]={layer:e}}),t}var F={};function Ct(e=["-",":"]){let t=e.join("|");return F[t]||(F[t]=new RegExp(`((?:[!@<~\\w+:_/-]|\\[&?>?:?\\S*\\])+?)(${t})\\(((?:[~!<>\\w\\s:/\\\\,%#.$?-]|\\[.*?\\])+?)\\)(?!\\s*?=>)`,"gm")),F[t].lastIndex=0,F[t]}function Et(e,t=["-",":"],r=5){let n=Ct(t),s,o=e.toString(),c=new Set,l=new Map;do s=!1,o=o.replace(n,(u,i,h,d,g)=>{if(!t.includes(h))return u;s=!0,c.add(i+h);let A=g+i.length+h.length+1,w={length:u.length,items:[]};l.set(g,w);for(let y of[...d.matchAll(/\S+/g)]){let S=A+y.index,m=l.get(S)?.items;m?l.delete(S):m=[{offset:S,length:y[0].length,className:y[0]}];for(let _ of m)_.className=_.className==="~"?i:_.className.replace(/^(!?)(.*)/,`$1${i}${h}$2`),w.items.push(_)}return"$".repeat(u.length)}),r-=1;while(s&&r);let f;if(typeof e=="string"){f="";let u=0;for(let[i,h]of l)f+=e.slice(u,i),f+=h.items.map(d=>d.className).join(" "),u=i+h.length;f+=e.slice(u)}else{f=e;for(let[u,i]of l)f.overwrite(u,u+i.length,i.items.map(h=>h.className).join(" "))}return{prefixes:Array.from(c),hasChanged:s,groupsByOffset:l,get expanded(){return f.toString()}}}function Xt(e,t){let r=new Map,n=t.sort((s,o)=>o.length-s.length);return e.split(/\s+/g).map(s=>{let o=n.find(l=>s.startsWith(l));if(!o)return s;let c=s.slice(o.length);if(r.has(o))return r.get(o).push(c),null;{let l=[c];return r.set(o,l),{prefix:o,items:l}}}).filter(it).map(s=>typeof s=="string"?s:`${s.prefix}(${s.items.join(" ")})`).join(" ")}function Ot(e,t=["-",":"],r=5){let n=Et(e,t,r);return typeof e=="string"?n.expanded:e}var rt=new Set;function Rt(e){rt.has(e)||(console.warn("[unocss]",e),rt.add(e))}var Pt=/[\\:]?[\s'"`;{}]+/g,Zt=/([\\:]?[\s"'`;<>]|:\(|\)"|\)\s)/g;function jt(e){return e.split(Pt)}var Lt={name:"@unocss/core/extractor-split",order:0,extract({code:e}){return jt(e)}};function Vt(){return{events:{},emit(e,...t){(this.events[e]||[]).forEach(r=>r(...t))},on(e,t){return(this.events[e]=this.events[e]||[]).push(t),()=>this.events[e]=(this.events[e]||[]).filter(r=>r!==t)}}}var N="default",k="preflights",Tt="shortcuts",Ft="imports",Bt={[Ft]:-200,[k]:-100,[Tt]:-10,[N]:0};function at(e){return b(e).flatMap(t=>Array.isArray(t)?[t]:Object.entries(t))}var nt="_uno_resolved";function Nt(e){let t=typeof e=="function"?e():e;if(nt in t)return t;t={...t},Object.defineProperty(t,nt,{value:!0,enumerable:!1});let r=t.shortcuts?at(t.shortcuts):void 0;if(t.shortcuts=r,t.prefix||t.layer){let n=s=>{s[2]||(s[2]={});let o=s[2];o.prefix==null&&t.prefix&&(o.prefix=b(t.prefix)),o.layer==null&&t.layer&&(o.layer=t.layer)};r?.forEach(n),t.rules?.forEach(n)}return t}function ct(e){let t=Nt(e);if(!t.presets)return[t];let r=(t.presets||[]).flatMap(b).flatMap(ct);return[t,...r]}function st(e={},t={}){let r=Object.assign({},t,e),n=ht((r.presets||[]).flatMap(b).flatMap(ct),(a,p)=>a.name===p.name),s=[...n.filter(a=>a.enforce==="pre"),...n.filter(a=>!a.enforce),...n.filter(a=>a.enforce==="post")],o=[...s,r],c=[...o].reverse(),l=Object.assign({},Bt,...o.map(a=>a.layers));function f(a){return I(o.flatMap(p=>b(p[a]||[])))}let u=f("extractors"),i=c.find(a=>a.extractorDefault!==void 0)?.extractorDefault;i===void 0&&(i=Lt),i&&!u.includes(i)&&u.unshift(i),u.sort((a,p)=>(a.order||0)-(p.order||0));let h=f("rules"),d={},g=h.length,A=h.map((a,p)=>{if(mt(a)){b(a[2]?.prefix||"").forEach(M=>{d[M+a[0]]=[p,a[1],a[2],a]});return}return[p,...a]}).filter(Boolean).reverse(),w=lt(o.map(a=>a.theme)),y=f("extendTheme");for(let a of y)w=a(w)||w;let S={templates:I(o.flatMap(a=>b(a.autocomplete?.templates))),extractors:o.flatMap(a=>b(a.autocomplete?.extractors)).sort((a,p)=>(a.order||0)-(p.order||0)),shorthands:It(o.map(a=>a.autocomplete?.shorthands||{}))},m=f("separators");m.length||(m=[":","-"]);let _={mergeSelectors:!0,warn:!0,sortLayers:a=>a,...r,blocklist:f("blocklist"),presets:s,envMode:r.envMode||"build",shortcutsLayer:r.shortcutsLayer||"shortcuts",layers:l,theme:w,rulesSize:g,rulesDynamic:A,rulesStaticMap:d,preprocess:f("preprocess"),postprocess:f("postprocess"),preflights:f("preflights"),autocomplete:S,variants:f("variants").map(_t).sort((a,p)=>(a.order||0)-(p.order||0)),shortcuts:at(f("shortcuts")).reverse(),extractors:u,safelist:f("safelist"),separators:m,details:r.details??r.envMode==="dev"};for(let a of o)a?.configResolved?.(_);return _}function te(e){let t=["shortcuts","preprocess","postprocess"];return e.map(n=>Object.entries(n).reduce((s,[o,c])=>({...s,[o]:t.includes(o)?b(c):c}),{})).reduce(({theme:n,...s},{theme:o,...c})=>{let l=K(s,c,!0);return(n||o)&&(l.theme=lt([n,o])),l},{})}function lt(e){return e.map(t=>t?B(t):{}).reduce((t,r)=>K(t,r),{})}function It(e){return e.reduce((t,r)=>{let n={};for(let s in r){let o=r[s];Array.isArray(o)?n[s]=`(${o.join("|")})`:n[s]=o}return{...t,...n}},{})}function ee(e){return e}var Ut="0.58.5",Dt=Object.defineProperty,Gt=(e,t,r)=>t in e?Dt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,P=(e,t,r)=>(Gt(e,typeof t!="symbol"?t+"":t,r),r),J=class{constructor(t={},r={}){this.userConfig=t,this.defaults=r,P(this,"version",Ut),P(this,"_cache",new Map),P(this,"config"),P(this,"blocked",new Set),P(this,"parentOrders",new Map),P(this,"events",Vt()),this.config=st(t,r),this.events.emit("config",this.config)}setConfig(t,r){t&&(r&&(this.defaults=r),this.userConfig=t,this.blocked.clear(),this.parentOrders.clear(),this._cache.clear(),this.config=st(t,this.defaults),this.events.emit("config",this.config))}async applyExtractors(t,r,n=new Set){let s={original:t,code:t,id:r,extracted:n,envMode:this.config.envMode};for(let o of this.config.extractors){let c=await o.extract?.(s);if(c)if(Y(c)&&Y(n))for(let l of c)n.setCount(l,n.getCount(l)+c.getCount(l));else for(let l of c)n.add(l)}return n}makeContext(t,r){let n={rawSelector:t,currentSelector:r[1],theme:this.config.theme,generator:this,variantHandlers:r[2],constructCSS:(...s)=>this.constructCustomCSS(n,...s),variantMatch:r};return n}async parseToken(t,r){if(this.blocked.has(t))return;let n=`${t}${r?` ${r}`:""}`;if(this._cache.has(n))return this._cache.get(n);let s=t;for(let u of this.config.preprocess)s=u(t);if(this.isBlocked(s)){this.blocked.add(t),this._cache.set(n,null);return}let o=await this.matchVariants(t,s);if(!o||this.isBlocked(o[1])){this.blocked.add(t),this._cache.set(n,null);return}let c=this.makeContext(t,[r||o[0],o[1],o[2],o[3]]);this.config.details&&(c.variants=[...o[3]]);let l=await this.expandShortcut(c.currentSelector,c),f=l?await this.stringifyShortcuts(c.variantMatch,c,l[0],l[1]):(await this.parseUtil(c.variantMatch,c))?.map(u=>this.stringifyUtil(u,c)).filter(it);if(f?.length)return this._cache.set(n,f),f;this._cache.set(n,null)}async generate(t,r={}){let{id:n,scope:s,preflights:o=!0,safelist:c=!0,minify:l=!1,extendedInfo:f=!1}=r,u=v(t)?await this.applyExtractors(t,n,f?new U:new Set):Array.isArray(t)?new Set(t):t;c&&this.config.safelist.forEach(a=>{u.has(a)||u.add(a)});let i=l?"":`
`,h=new Set([N]),d=f?new Map:new Set,g=new Map,A={},w=Array.from(u).map(async a=>{if(d.has(a))return;let p=await this.parseToken(a);if(p!=null){d instanceof Map?d.set(a,{data:p,count:Y(u)?u.getCount(a):-1}):d.add(a);for(let x of p){let M=x[3]||"",E=x[4]?.layer;g.has(M)||g.set(M,[]),g.get(M).push(x),E&&h.add(E)}}});await Promise.all(w),await(async()=>{if(!o)return;let a={generator:this,theme:this.config.theme},p=new Set([]);this.config.preflights.forEach(({layer:x=k})=>{h.add(x),p.add(x)}),A=Object.fromEntries(await Promise.all(Array.from(p).map(async x=>{let E=(await Promise.all(this.config.preflights.filter(j=>(j.layer||k)===x).map(async j=>await j.getCSS(a)))).filter(Boolean).join(i);return[x,E]})))})();let y=this.config.sortLayers(Array.from(h).sort((a,p)=>(this.config.layers[a]??0)-(this.config.layers[p]??0)||a.localeCompare(p))),S={},m=(a=N)=>{if(S[a])return S[a];let p=Array.from(g).sort((M,E)=>(this.parentOrders.get(M[0])??0)-(this.parentOrders.get(E[0])??0)||M[0]?.localeCompare(E[0]||"")||0).map(([M,E])=>{let j=E.length,D=E.filter($=>($[4]?.layer||N)===a).sort(($,C)=>$[0]-C[0]||($[4]?.sort||0)-(C[4]?.sort||0)||$[5]?.currentSelector?.localeCompare(C[5]?.currentSelector??"")||$[1]?.localeCompare(C[1]||"")||$[2]?.localeCompare(C[2]||"")||0).map(([,$,C,,V,,G])=>[[[($&&zt($,s))??"",V?.sort??0]],C,!!(G??V?.noMerge)]);if(!D.length)return;let Q=D.reverse().map(([$,C,V],G)=>{if(!V&&this.config.mergeSelectors)for(let R=G+1;R<j;R++){let O=D[R];if(O&&!O[2]&&($&&O[0]||$==null&&O[0]==null)&&O[1]===C)return $&&O[0]&&O[0].push(...$),null}let H=$?I($.sort((R,O)=>R[1]-O[1]||R[0]?.localeCompare(O[0]||"")||0).map(R=>R[0]).filter(Boolean)):[];return H.length?`${H.join(`,${i}`)}{${C}}`:C}).filter(Boolean).reverse().join(i);if(!M)return Q;let X=M.split(" $$ ");return`${X.join("{")}{${i}${Q}${i}${"}".repeat(X.length)}`}).filter(Boolean).join(i);o&&(p=[A[a],p].filter(Boolean).join(i));let x=l?"":`/* layer: ${a} */${i}`;return S[a]=p?x+p:""},_=(a=y,p)=>a.filter(x=>!p?.includes(x)).map(x=>m(x)||"").filter(Boolean).join(i);return{get css(){return _()},layers:y,matched:d,getLayers:_,getLayer:m}}async matchVariants(t,r){let n=new Set,s=[],o=r||t,c=!0,l={rawSelector:t,theme:this.config.theme,generator:this};for(;c;){c=!1;for(let f of this.config.variants){if(!f.multiPass&&n.has(f))continue;let u=await f.match(o,l);if(u){if(v(u)){if(u===o)continue;u={matcher:u}}o=u.matcher,s.unshift(u),n.add(f),c=!0;break}}if(!c)break;if(s.length>500)throw new Error(`Too many variants applied to "${t}"`)}return[t,o,s,n]}applyVariants(t,r=t[4],n=t[1]){let o=r.slice().sort((u,i)=>(u.order||0)-(i.order||0)).reduceRight((u,i)=>h=>{let d=i.body?.(h.entries)||h.entries,g=Array.isArray(i.parent)?i.parent:[i.parent,void 0];return(i.handle??Yt)({...h,entries:d,selector:i.selector?.(h.selector,d)||h.selector,parent:g[0]||h.parent,parentOrder:g[1]||h.parentOrder,layer:i.layer||h.layer,sort:i.sort||h.sort},u)},u=>u)({prefix:"",selector:Wt(n),pseudo:"",entries:t[2]}),{parent:c,parentOrder:l}=o;c!=null&&l!=null&&this.parentOrders.set(c,l);let f={selector:[o.prefix,o.selector,o.pseudo].join(""),entries:o.entries,parent:c,layer:o.layer,sort:o.sort,noMerge:o.noMerge};for(let u of this.config.postprocess)u(f);return f}constructCustomCSS(t,r,n){let s=L(r);if(v(s))return s;let{selector:o,entries:c,parent:l}=this.applyVariants([0,n||t.rawSelector,s,void 0,t.variantHandlers]),f=`${o}{${W(c)}}`;return l?`${l}{${f}}`:f}async parseUtil(t,r,n=!1,s){let[o,c,l]=v(t)?await this.matchVariants(t):t;this.config.details&&(r.rules=r.rules??[]);let f=this.config.rulesStaticMap[c];if(f&&f[1]&&(n||!f[2]?.internal)){this.config.details&&r.rules.push(f[3]);let i=f[0],h=L(f[1]),d=f[2];return v(h)?[[i,h,d]]:[[i,o,h,d,l]]}r.variantHandlers=l;let{rulesDynamic:u}=this.config;for(let[i,h,d,g]of u){if(g?.internal&&!n)continue;let A=c;if(g?.prefix){let m=b(g.prefix);if(s){let _=b(s);if(!m.some(a=>_.includes(a)))continue}else{let _=m.find(a=>c.startsWith(a));if(_==null)continue;A=c.slice(_.length)}}let w=A.match(h);if(!w)continue;let y=await d(w,r);if(!y)continue;this.config.details&&r.rules.push([h,d,g]);let S=pt(y).filter(m=>m.length);if(S.length)return S.map(m=>v(m)?[i,m,g]:[i,o,m,g,l])}}stringifyUtil(t,r){if(!t)return;if(tt(t))return[t[0],void 0,t[1],void 0,t[2],this.config.details?r:void 0,void 0];let{selector:n,entries:s,parent:o,layer:c,sort:l,noMerge:f}=this.applyVariants(t),u=W(s);if(!u)return;let{layer:i,sort:h,...d}=t[3]??{},g={...d,layer:c??i,sort:l??h};return[t[0],n,u,o,g,this.config.details?r:void 0,f]}async expandShortcut(t,r,n=5){if(n===0)return;let s=this.config.details?l=>{r.shortcuts=r.shortcuts??[],r.shortcuts.push(l)}:xt,o,c;for(let l of this.config.shortcuts){let f=t;if(l[2]?.prefix){let i=b(l[2].prefix).find(h=>t.startsWith(h));if(i==null)continue;f=t.slice(i.length)}if(gt(l)){if(l[0]===f){o=o||l[2],c=l[1],s(l);break}}else{let u=f.match(l[0]);if(u&&(c=l[1](u,r)),c){o=o||l[2],s(l);break}}}if(v(c)&&(c=Ot(c.trim()).split(/\s+/g)),!c){let[l,f]=v(t)?await this.matchVariants(t):t;if(l!==f){let u=await this.expandShortcut(f,r,n-1);u&&(c=u[0].map(i=>v(i)?l.replace(f,i):i))}}if(c)return[(await Promise.all(c.map(async l=>(v(l)?(await this.expandShortcut(l,r,n-1))?.[0]:void 0)||[l]))).flat(1).filter(Boolean),o]}async stringifyShortcuts(t,r,n,s={layer:this.config.shortcutsLayer}){let o=new q,c=(await Promise.all(I(n).map(async i=>{let h=v(i)?await this.parseUtil(i,r,!0,s.prefix):[[Number.POSITIVE_INFINITY,"{inline}",L(i),void 0,[]]];return!h&&this.config.warn&&Rt(`unmatched utility "${i}" in shortcut "${t[1]}"`),h||[]}))).flat(1).filter(Boolean).sort((i,h)=>i[0]-h[0]),[l,,f]=t,u=[];for(let i of c){if(tt(i)){u.push([i[0],void 0,i[1],void 0,i[2],r,void 0]);continue}let{selector:h,entries:d,parent:g,sort:A,noMerge:w}=this.applyVariants(i,[...i[4],...f],l);o.getFallback(h,g,[[],i[0]])[0].push([d,!!(w??i[3]?.noMerge),A??0])}return u.concat(o.map(([i,h],d,g)=>{let A=(y,S,m)=>{let _=Math.max(...m.map(p=>p[1])),a=m.map(p=>p[0]);return(y?[a.flat(1)]:a).map(p=>{let x=W(p);if(x)return[h,d,x,g,{...s,noMerge:S,sort:_},r,void 0]})};return[[i.filter(([,y])=>y).map(([y,,S])=>[y,S]),!0],[i.filter(([,y])=>!y).map(([y,,S])=>[y,S]),!1]].map(([y,S])=>[...A(!1,S,y.filter(([m])=>m.some(_=>_[0]===Z))),...A(!0,S,y.filter(([m])=>m.every(_=>_[0]!==Z)))])}).flat(2).filter(Boolean))}isBlocked(t){return!t||this.config.blocklist.some(r=>typeof r=="function"?r(t):v(r)?r===t:r.test(t))}};function re(e,t){return new J(e,t)}var ft=/\s\$\$\s+/g;function Ht(e){return ft.test(e)}function zt(e,t){return Ht(e)?e.replace(ft,t?` ${t} `:" "):t?`${t} ${e}`:e}var ot=/^\[(.+?)(~?=)"(.*)"\]$/;function Wt(e){return ot.test(e)?e.replace(ot,(t,r,n,s)=>`[${z(r)}${n}"${z(s)}"]`):`.${z(e)}`}function Yt(e,t){return t(e)}export{et as BetterMap,Z as CONTROL_SHORTCUT_NO_MERGE,U as CountableSet,q as TwoKeyMap,J as UnoGenerator,yt as attributifyRE,dt as clearIdenticalEntries,B as clone,Xt as collapseVariantGroup,re as createGenerator,kt as cssIdRE,Pt as defaultSplitRE,ee as definePreset,z as e,W as entriesToCss,qt as escapeRegExp,ut as escapeSelector,Ot as expandVariantGroup,Lt as extractorDefault,Lt as extractorSplit,Ht as hasScopePlaceholder,Jt as isAttributifySelector,Y as isCountableSet,T as isObject,tt as isRawUtil,mt as isStaticRule,gt as isStaticShortcut,v as isString,Kt as isValidSelector,Ct as makeRegexClassGroup,te as mergeConfigs,K as mergeDeep,xt as noop,L as normalizeCSSEntries,pt as normalizeCSSValues,_t as normalizeVariant,it as notNull,Et as parseVariantGroup,ft as regexScopePlaceholder,st as resolveConfig,Nt as resolvePreset,ct as resolvePresets,at as resolveShortcuts,Zt as splitWithVariantGroupRE,b as toArray,Wt as toEscapedSelector,I as uniq,ht as uniqueBy,St as validateFilterRE,Rt as warnOnce,Qt as withLayer};
//# sourceMappingURL=core.bundle.mjs.map