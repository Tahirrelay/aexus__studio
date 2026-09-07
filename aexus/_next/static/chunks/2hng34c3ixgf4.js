(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,26692,e=>{"use strict";var t,r,n=e.i(43476),s=e.i(71645),i=e.i(47167);Object.create(null);var a="-ms-",o="-moz-",l="-webkit-",c="comm",u="rule",d="decl",f="@keyframes",p=Math.abs,h=String.fromCharCode,g=Object.assign;function m(e,t){return(e=t.exec(e))?e[0]:e}function y(e,t,r){return e.replace(t,r)}function b(e,t,r){return e.indexOf(t,r)}function v(e,t){return 0|e.charCodeAt(t)}function x(e,t,r){return e.slice(t,r)}function w(e){return e.length}function S(e,t){return t.push(e),e}function C(e,t){return e.filter(function(e){return!m(e,t)})}var $=1,A=1,k=0,j=0,O=0,N="";function I(e,t,r,n,s,i,a,o){return{value:e,root:t,parent:r,type:n,props:s,children:i,line:$,column:A,length:a,return:"",siblings:o}}function R(e,t){return g(I("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function _(e){for(;e.root;)e=R(e.root,{children:[e]});S(e,e.siblings)}function P(){return O=j<k?v(N,j++):0,A++,10===O&&(A=1,$++),O}function T(){return v(N,j)}function z(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function E(e){var t,r;return(t=j-1,r=function e(t){for(;P();)switch(O){case t:return j;case 34:case 39:34!==t&&39!==t&&e(O);break;case 40:41===t&&e(t);break;case 92:P()}return j}(91===e?e+2:40===e?e+1:e),x(N,t,r)).trim()}function G(e,t){for(var r="",n=0;n<e.length;n++)r+=t(e[n],n,e,t)||"";return r}function F(e,t,r,n){switch(e.type){case"@layer":if(e.children.length)break;case"@import":case"@namespace":case d:return e.return=e.return||e.value;case c:return"";case f:return e.return=e.value+"{"+G(e.children,n)+"}";case u:if(!w(e.value=e.props.join(",")))return""}return w(r=G(e.children,n))?e.return=e.value+"{"+r+"}":""}function D(e,t,r,n){if(e.length>-1&&!e.return)switch(e.type){case d:e.return=function e(t,r,n){var s;switch(s=r,45^v(t,0)?(((s<<2^v(t,0))<<2^v(t,1))<<2^v(t,2))<<2^v(t,3):0){case 5103:return l+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:case 6391:case 5879:case 5623:case 6135:case 4599:return l+t+t;case 4855:return l+t.replace("add","source-over").replace("substract","source-out").replace("intersect","source-in").replace("exclude","xor")+t;case 4789:return o+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return l+t+o+t+a+t+t;case 5936:switch(v(t,r+11)){case 114:return l+t+a+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return l+t+a+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return l+t+a+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}case 6828:case 4268:case 2903:return l+t+a+t+t;case 6165:return l+t+a+"flex-"+t+t;case 5187:return l+t+y(t,/(\w+).+(:[^]+)/,l+"box-$1$2"+a+"flex-$1$2")+t;case 5443:return l+t+a+"flex-item-"+y(t,/flex-|-self/g,"")+(m(t,/flex-|baseline/)?"":a+"grid-row-"+y(t,/flex-|-self/g,""))+t;case 4675:return l+t+a+"flex-line-pack"+y(t,/align-content|flex-|-self/g,"")+t;case 5548:return l+t+a+y(t,"shrink","negative")+t;case 5292:return l+t+a+y(t,"basis","preferred-size")+t;case 6060:return l+"box-"+y(t,"-grow","")+l+t+a+y(t,"grow","positive")+t;case 4554:return l+y(t,/([^-])(transform)/g,"$1"+l+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,l+"$1"),/(image-set)/,l+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,l+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,l+"box-pack:$3"+a+"flex-pack:$3"),/space-between/,"justify")+l+t+t;case 4200:if(!m(t,/flex-|baseline/))return a+"grid-column-align"+x(t,r)+t;break;case 2592:case 3360:return a+y(t,"template-","")+t;case 4384:case 3616:if(n&&n.some(function(e,t){return r=t,m(e.props,/grid-\w+-end/)}))return~b(t+(n=n[r].value),"span",0)?t:a+y(t,"-start","")+t+a+"grid-row-span:"+(~b(n,"span",0)?m(n,/\d+/):m(n,/\d+/)-m(t,/\d+/))+";";return a+y(t,"-start","")+t;case 4896:case 4128:return n&&n.some(function(e){return m(e.props,/grid-\w+-start/)})?t:a+y(y(t,"-end","-span"),"span ","")+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,l+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(w(t)-1-r>6)switch(v(t,r+1)){case 109:if(45!==v(t,r+4))break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+l+"$2-$3$1"+o+(108==v(t,r+3)?"$3":"$2-$3"))+t;case 115:return~b(t,"stretch",0)?e(y(t,"stretch","fill-available"),r,n)+t:t}break;case 5152:case 5920:return y(t,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(e,r,n,s,i,o,l){return a+r+":"+n+l+(s?a+r+"-span:"+(i?o:o-n)+l:"")+t});case 4949:if(121===v(t,r+6))return y(t,":",":"+l)+t;break;case 6444:switch(v(t,45===v(t,14)?18:11)){case 120:return y(t,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+l+(45===v(t,14)?"inline-":"")+"box$3$1"+l+"$2$3$1"+a+"$2box$3")+t;case 100:return y(t,":",":"+a)+t}break;case 5719:case 2647:case 2135:case 3927:case 2391:return y(t,"scroll-","scroll-snap-")+t}return t}(e.value,e.length,r);return;case f:return G([R(e,{value:y(e.value,"@","@"+l)})],n);case u:if(e.length){var s,i;return s=r=e.props,i=function(t){switch(m(t,n=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":_(R(e,{props:[y(t,/:(read-\w+)/,":"+o+"$1")]})),_(R(e,{props:[t]})),g(e,{props:C(r,n)});break;case"::placeholder":_(R(e,{props:[y(t,/:(plac\w+)/,":"+l+"input-$1")]})),_(R(e,{props:[y(t,/:(plac\w+)/,":"+o+"$1")]})),_(R(e,{props:[y(t,/:(plac\w+)/,a+"input-$1")]})),_(R(e,{props:[t]})),g(e,{props:C(r,n)})}return""},s.map(i).join("")}}}function M(e,t,r,n,s,i,a,o,l,c,d,f){for(var h=s-1,g=0===s?i:[""],m=g.length,b=0,v=0,w=0;b<n;++b)for(var S=0,C=x(e,h+1,h=p(v=a[b])),$=e;S<m;++S)($=(v>0?g[S]+" "+C:y(C,/&\f/g,g[S])).trim())&&(l[w++]=$);return I(e,t,r,0===s?u:o,l,c,d,f)}function B(e,t,r,n,s){return I(e,t,r,d,x(e,0,n),x(e,n+1,-1),n,s)}let U=void 0!==i.default&&void 0!==i.default.env&&(i.default.env.REACT_APP_SC_ATTR||i.default.env.SC_ATTR)||"data-styled",W="active",L="data-styled-version",q="6.5.3",Y="/*!sc*/\n",K="u">typeof window&&"u">typeof document;function H(e){if(void 0!==i.default&&void 0!==i.default.env){let t=i.default.env[e];if(void 0!==t&&""!==t)return"false"!==t}}let J=!!("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:null!=(r=null!=(t=H("REACT_APP_SC_DISABLE_SPEEDY"))?t:H("SC_DISABLE_SPEEDY"))?r:void 0!==i.default&&void 0!==i.default.env&&!1);function Q(e,...t){return Error(`An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#${e} for more information.${t.length>0?` Args: ${t.join(", ")}`:""}`)}let V=new Map,X=new Map,Z=1,ee=e=>{if(V.has(e))return V.get(e);for(;X.has(Z);)Z++;let t=Z++;return V.set(e,t),X.set(t,e),t},et=e=>X.get(e),er=(e,t)=>{Z=t+1,V.set(e,t),X.set(t,e)},en=Object.freeze([]),es=Object.freeze({}),ei=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,ea=/(^-|-$)/g;function eo(e){return e.replace(ei,"-").replace(ea,"")}let el=/(a)(d)/gi,ec=e=>String.fromCharCode(e+(e>25?39:97));function eu(e){let t,r="";for(t=Math.abs(e);t>52;t=t/52|0)r=ec(t%52)+r;return(ec(t%52)+r).replace(el,"$1-$2")}let ed=(e,t)=>{let r=t.length;for(;r;)e=33*e^t.charCodeAt(--r);return e};function ef(e){return"string"==typeof e}let ep=Symbol.for("react.memo"),eh=Symbol.for("react.forward_ref"),eg={contextType:!0,defaultProps:!0,displayName:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,propTypes:!0,type:!0},em={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},ey={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},eb={[eh]:{$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},[ep]:ey};function ev(e){return("type"in e&&e.type.$$typeof)===ep?ey:"$$typeof"in e?eb[e.$$typeof]:eg}let ex=Object.defineProperty,ew=Object.getOwnPropertyNames,eS=Object.getOwnPropertySymbols,eC=Object.getOwnPropertyDescriptor,e$=Object.getPrototypeOf,eA=Object.prototype;function ek(e){return"function"==typeof e}let ej=Symbol.for("react.forward_ref");function eO(e){return null!=e&&("object"==typeof e||"function"==typeof e)&&e.$$typeof===ej&&"styledComponentId"in e}function eN(e,t){return e&&t?e+" "+t:e||t||""}function eI(e){return null!==e&&"object"==typeof e&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function eR(e,t){Object.defineProperty(e,"toString",{value:t})}let e_=class{constructor(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e,this._cGroup=0,this._cIndex=0}indexOfGroup(e){if(e===this._cGroup)return this._cIndex;let t=this._cIndex;if(e>this._cGroup)for(let r=this._cGroup;r<e;r++)t+=this.groupSizes[r];else for(let r=this._cGroup-1;r>=e;r--)t-=this.groupSizes[r];return this._cGroup=e,this._cIndex=t,t}insertRules(e,t){if(e>=this.groupSizes.length){let t=this.groupSizes,r=t.length,n=r;for(;e>=n;)if((n<<=1)<0)throw Q(16,`${e}`);this.groupSizes=new Uint32Array(n),this.groupSizes.set(t),this.length=n;for(let e=r;e<n;e++)this.groupSizes[e]=0}let r=this.indexOfGroup(e+1),n=0;for(let s=0,i=t.length;s<i;s++)this.tag.insertRule(r,t[s])&&(this.groupSizes[e]++,r++,n++);n>0&&this._cGroup>e&&(this._cIndex+=n)}clearGroup(e){if(e<this.length){let t=this.groupSizes[e],r=this.indexOfGroup(e),n=r+t;this.groupSizes[e]=0;for(let e=r;e<n;e++)this.tag.deleteRule(r);t>0&&this._cGroup>e&&(this._cIndex-=t)}}getGroup(e){let t="";if(e>=this.length||0===this.groupSizes[e])return t;let r=this.groupSizes[e],n=this.indexOfGroup(e),s=n+r;for(let e=n;e<s;e++)t+=this.tag.getRule(e)+Y;return t}},eP=`style[${U}][${L}="${q}"]`,eT=RegExp(`^${U}\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)`),ez=e=>"u">typeof ShadowRoot&&e instanceof ShadowRoot||"host"in e&&11===e.nodeType,eE=e=>{if(!e)return document;if(ez(e))return e;if("getRootNode"in e){let t=e.getRootNode();if(ez(t))return t}return document},eG=(e,t,r)=>{let n,s=r.split(",");for(let r=0,i=s.length;r<i;r++)(n=s[r])&&e.registerName(t,n)},eF=(e,t)=>{var r;let n=(null!=(r=t.textContent)?r:"").split(Y),s=[];for(let t=0,r=n.length;t<r;t++){let r=n[t].trim();if(!r)continue;let i=r.match(eT);if(i){let t=0|parseInt(i[1],10),r=i[2];0!==t&&(er(r,t),eG(e,r,i[3]),e.getTag().insertRules(t,s)),s.length=0}else s.push(r)}},eD=e=>{let t=eE(e.options.target).querySelectorAll(eP);for(let r=0,n=t.length;r<n;r++){let n=t[r];n&&n.getAttribute(U)!==W&&(eF(e,n),n.parentNode&&n.parentNode.removeChild(n))}},eM=!1,eB=(e,t)=>{let r,n=document.head,s=e||n,i=document.createElement("style"),a=(r=Array.from(s.querySelectorAll(`style[${U}]`)))[r.length-1],o=void 0!==a?a.nextSibling:null;i.setAttribute(U,W),i.setAttribute(L,q);let l=t||function(){if(!1!==eM)return eM;if("u">typeof document){let e=document.head.querySelector('meta[property="csp-nonce"]');if(e)return eM=e.nonce||e.getAttribute("content")||void 0;let t=document.head.querySelector('meta[name="sc-nonce"]');if(t)return eM=t.getAttribute("content")||void 0}return eM="u">typeof __webpack_nonce__?__webpack_nonce__:void 0}();return l&&i.setAttribute("nonce",l),s.insertBefore(i,o),i},eU=class{constructor(e,t){this.element=eB(e,t),this.element.appendChild(document.createTextNode("")),this.sheet=(e=>{var t;if(e.sheet)return e.sheet;let r=null!=(t=e.getRootNode().styleSheets)?t:document.styleSheets;for(let t=0,n=r.length;t<n;t++){let n=r[t];if(n.ownerNode===e)return n}throw Q(17)})(this.element),this.length=0}insertRule(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}}deleteRule(e){this.sheet.deleteRule(e),this.length--}getRule(e){let t=this.sheet.cssRules[e];return t&&t.cssText?t.cssText:""}},eW=class{constructor(e,t){this.element=eB(e,t),this.nodes=this.element.childNodes,this.length=0}insertRule(e,t){if(e<=this.length&&e>=0){let r=document.createTextNode(t);return this.element.insertBefore(r,this.nodes[e]||null),this.length++,!0}return!1}deleteRule(e){this.element.removeChild(this.nodes[e]),this.length--}getRule(e){return e<this.length?this.nodes[e].textContent:""}},eL=K,eq={isServer:!K,useCSSOMInjection:!J};class eY{static registerId(e){return ee(e)}constructor(e=es,t={},r){this.options=Object.assign(Object.assign({},eq),e),this.gs=t,this.keyframeIds=new Set,this.names=new Map(r),this.server=!!e.isServer,!this.server&&K&&eL&&(eL=!1,eD(this)),eR(this,()=>(e=>{let t=e.getTag(),{length:r}=t,n="";for(let s=0;s<r;s++){let r=et(s);if(void 0===r)continue;let i=e.names.get(r);if(void 0===i||!i.size)continue;let a=t.getGroup(s);if(0===a.length)continue;let o=U+".g"+s+'[id="'+r+'"]',l="";for(let e of i)e.length>0&&(l+=e+",");n+=a+o+'{content:"'+l+'"}'+Y}return n})(this))}rehydrate(){!this.server&&K&&eD(this)}reconstructWithOptions(e,t=!0){let r=new eY(Object.assign(Object.assign({},this.options),e),this.gs,t&&this.names||void 0);return r.keyframeIds=new Set(this.keyframeIds),!this.server&&K&&e.target!==this.options.target&&eE(this.options.target)!==eE(e.target)&&eD(r),r}allocateGSInstance(e){return this.gs[e]=(this.gs[e]||0)+1}getTag(){return this.tag||(this.tag=new e_((({useCSSOMInjection:e,target:t,nonce:r})=>e?new eU(t,r):new eW(t,r))(this.options)))}hasNameForId(e,t){var r,n;return null!=(n=null==(r=this.names.get(e))?void 0:r.has(t))&&n}registerName(e,t){ee(e),e.startsWith("sc-keyframes-")&&this.keyframeIds.add(e);let r=this.names.get(e);r?r.add(t):this.names.set(e,new Set([t]))}insertRules(e,t,r){this.registerName(e,t),this.getTag().insertRules(ee(e),r)}clearNames(e){this.names.has(e)&&this.names.get(e).clear()}clearRules(e){this.getTag().clearGroup(ee(e)),this.clearNames(e)}clearTag(){this.tag=void 0}}let eK=new WeakSet,eH={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexShrink:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,scale:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function eJ(e){if(45===e.charCodeAt(0)&&45===e.charCodeAt(1))return e;let t="";for(let r=0;r<e.length;r++){let n=e.charCodeAt(r);t+=n>=65&&n<=90?"-"+String.fromCharCode(n+32):e[r]}return t.startsWith("ms-")?"-"+t:t}let eQ=Symbol.for("sc-keyframes");function eV(e){return ek(e)&&!(e.prototype&&e.prototype.isReactComponent)}let eX=e=>null==e||!1===e||""===e,eZ=Symbol.for("react.client.reference");function e0(e){return e.$$typeof===eZ}function e1(e,t,r,n,s=[]){if(eX(e))return s;let i=typeof e;if("string"===i)return s.push(e),s;if("function"===i)return e0(e)?s:eV(e)&&t?e1(e(t),t,r,n,s):(s.push(e),s);if(Array.isArray(e)){for(let i=0;i<e.length;i++)e1(e[i],t,r,n,s);return s}return eO(e)?s.push(`.${e.styledComponentId}`):"object"==typeof e&&null!==e&&eQ in e?r?(e.inject(r,n),s.push(e.getName(n))):s.push(e):e0(e)||(eI(e)?e.toString!==Object.prototype.toString?s.push(e.toString()):function e(t,r){for(let n in t){let s=t[n];t.hasOwnProperty(n)&&!eX(s)&&(Array.isArray(s)&&eK.has(s)||ek(s)?r.push(eJ(n)+":",s,";"):eI(s)?(r.push(n+" {"),e(s,r),r.push("}")):r.push(eJ(n)+": "+(null==s||"boolean"==typeof s||""===s?"":"number"!=typeof s||0===s||n in eH||n.startsWith("--")?String(s).trim():s+"px")+";"))}}(e,s):s.push(e.toString())),s}let e2=ed(5381,q);class e5{constructor(e,t,r){this.rules=e,this.componentId=t,this.baseHash=ed(e2,t),this.baseStyle=r,eY.registerId(t)}generateAndInjectStyles(e,t,r){let n=this.baseStyle?this.baseStyle.generateAndInjectStyles(e,t,r):"";{let s="";for(let n=0;n<this.rules.length;n++){let i=this.rules[n];if("string"==typeof i)s+=i;else if(i)if(eV(i)){let n=i(e);"string"==typeof n?s+=n:null!=n&&!1!==n&&(s+=e1(n,e,t,r).join(""))}else s+=e1(i,e,t,r).join("")}if(s){this.dynamicNameCache||(this.dynamicNameCache=new Map);let e=r.hash?r.hash+s:s,i=this.dynamicNameCache.get(e);if(!i){if(i=eu(ed(ed(this.baseHash,r.hash),s)>>>0),this.dynamicNameCache.size>=200){let e=this.dynamicNameCache.keys().next().value;void 0!==e&&this.dynamicNameCache.delete(e)}this.dynamicNameCache.set(e,i)}if(!t.hasNameForId(this.componentId,i)){let e=r(s,"."+i,void 0,this.componentId);t.insertRules(this.componentId,i,e)}n=eN(n,i)}}return n}}let e4=/&/g;function e3(e,t){let r=0;for(;--t>=0&&92===e.charCodeAt(t);)r++;return!(1&~r)}function e9(e){let t=e.length,r="",n=0,s=0,i=0,a=!1,o=!1;for(let l=0;l<t;l++){let c=e.charCodeAt(l);if(0!==i||a||47!==c||42!==e.charCodeAt(l+1))if(a)42===c&&47===e.charCodeAt(l+1)&&(a=!1,l++);else if(34!==c&&39!==c||e3(e,l)){if(0===i)if(123===c)s++;else if(125===c){if(--s<0){o=!0;let r=l+1;for(;r<t;){let t=e.charCodeAt(r);if(59===t||10===t)break;r++}r<t&&59===e.charCodeAt(r)&&r++,s=0,l=r-1,n=r;continue}0===s&&(r+=e.substring(n,l+1),n=l+1)}else 59===c&&0===s&&(r+=e.substring(n,l+1),n=l+1)}else 0===i?i=c:i===c&&(i=0);else a=!0,l++}return o||0!==s||0!==i?(n<t&&0===s&&0===i&&(r+=e.substring(n)),r):e}let e6=new eY,e7=function({options:e=es,plugins:t=en}=es){var r,n,s;let i,a,o,l=(e,t,r)=>r.startsWith(a)&&r.endsWith(a)&&r.replaceAll(a,"").length>0?`.${i}`:e,d=t.slice();d.push(e=>{e.type===u&&e.value.includes("&")&&(o||(o=RegExp(`\\${a}\\b`,"g")),e.props[0]=e.props[0].replace(e4,a).replace(o,l))}),e.prefix&&d.push(D),d.push(F);let f=[],g=(s=(n=d.concat((r=e=>f.push(e),function(e){!e.root&&(e=e.return)&&r(e)}))).length,function(e,t,r,i){for(var a="",o=0;o<s;o++)a+=n[o](e,t,r,i)||"";return a}),m=(t,r="",n="",s="&")=>{var l,u,d;i=s,a=r,o=void 0;let m=function(e){let t=-1!==e.indexOf("//"),r=-1!==e.indexOf("}");if(!t&&!r)return e;if(!t)return e9(e);let n=e.length,s="",i=0,a=0,o=0,l=0,c=0,u=!1;for(;a<n;){let t=e.charCodeAt(a);if(34!==t&&39!==t||e3(e,a))if(0===o)if(47===t&&a+1<n&&42===e.charCodeAt(a+1)){for(a+=2;a+1<n&&(42!==e.charCodeAt(a)||47!==e.charCodeAt(a+1));)a++;a+=2}else if(40!==t)if(41!==t)if(l>0)a++;else if(42===t&&a+1<n&&47===e.charCodeAt(a+1))s+=e.substring(i,a),a+=2,i=a,u=!0;else if(47===t&&a+1<n&&47===e.charCodeAt(a+1)){for(s+=e.substring(i,a);a<n&&10!==e.charCodeAt(a);)a++;i=a,u=!0}else 123===t?c++:125===t&&c--,a++;else l>0&&l--,a++;else l++,a++;else a++;else 0===o?o=t:o===t&&(o=0),a++}return u?(i<n&&(s+=e.substring(i)),0===c?s:e9(s)):0===c?e:e9(e)}(t),C=(d=function e(t,r,n,s,i,a,o,l,u){for(var d,f,g,m,C=0,k=0,R=o,_=0,G=0,F=0,D=1,U=1,W=1,L=0,q="",Y=i,K=a,H=s,J=q;U;)switch(F=L,L=P()){case 40:if(108!=F&&58==v(J,R-1)){-1!=b(J+=y(E(L),"&","&\f"),"&\f",p(C?l[C-1]:0))&&(W=-1);break}case 34:case 39:case 91:J+=E(L);break;case 9:case 10:case 13:case 32:J+=function(e){for(;O=T();)if(O<33)P();else break;return z(e)>2||z(O)>3?"":" "}(F);break;case 92:J+=function(e,t){for(var r;--t&&P()&&!(O<48)&&!(O>102)&&(!(O>57)||!(O<65))&&(!(O>70)||!(O<97)););return r=j+(t<6&&32==T()&&32==P()),x(N,e,r)}(j-1,7);continue;case 47:switch(T()){case 42:case 47:S((d=function(e,t){for(;P();)if(e+O===57)break;else if(e+O===84&&47===T())break;return"/*"+x(N,t,j-1)+"*"+h(47===e?e:P())}(P(),j),f=r,g=n,m=u,I(d,f,g,c,h(O),x(d,2,-2),0,m)),u),(5==z(F||1)||5==z(T()||1))&&w(J)&&" "!==x(J,-1,void 0)&&(J+=" ");break;default:J+="/"}break;case 123*D:l[C++]=w(J)*W;case 125*D:case 59:case 0:switch(L){case 0:case 125:U=0;case 59+k:-1==W&&(J=y(J,/\f/g,"")),G>0&&(w(J)-R||0===D&&47===F)&&S(G>32?B(J+";",s,n,R-1,u):B(y(J," ","")+";",s,n,R-2,u),u);break;case 59:J+=";";default:if(S(H=M(J,r,n,C,k,i,l,q,Y=[],K=[],R,a),a),123===L)if(0===k)e(J,r,H,H,Y,a,R,l,K);else{switch(_){case 99:if(110===v(J,3))break;case 108:if(97===v(J,2))break;default:k=0;case 100:case 109:case 115:}k?e(t,H,H,s&&S(M(t,H,H,0,0,i,l,q,i,Y=[],R,K),K),i,K,R,l,s?Y:K):e(J,H,H,H,[""],K,0,l,K)}}C=k=G=0,D=W=1,q=J="",R=o;break;case 58:R=1+w(J),G=F;default:if(D<1){if(123==L)--D;else if(125==L&&0==D++&&125==(O=j>0?v(N,--j):0,A--,10===O&&(A=1,$--),O))continue}switch(J+=h(L),L*D){case 38:W=k>0?1:(J+="\f",-1);break;case 44:l[C++]=(w(J)-1)*W,W=1;break;case 64:45===T()&&(J+=E(P())),_=T(),k=R=w(q=J+=function(e){for(;!z(T());)P();return x(N,e,j)}(j)),L++;break;case 45:45===F&&2==w(J)&&(D=0)}}return a}("",null,null,null,[""],(u=l=n||r?n+" "+r+" { "+m+" }":m,$=A=1,k=w(N=u),j=0,l=[]),0,[0],l),N="",d);return e.namespace&&(C=function e(t,r){let n=r+" ",s=","+n;for(let i=0;i<t.length;i++){let a=t[i];if("rule"===a.type){a.value=(n+a.value).replaceAll(",",s);let e=a.props,t=[];for(let r=0;r<e.length;r++)t[r]=n+e[r];a.props=t}Array.isArray(a.children)&&"@keyframes"!==a.type&&e(a.children,r)}return t}(C,e.namespace)),f=[],G(C,g),f},C=5381;for(let e=0;e<t.length;e++)t[e].name||Q(15),C=ed(C,t[e].name);return(null==e?void 0:e.namespace)&&(C=ed(C,e.namespace)),(null==e?void 0:e.prefix)&&(C=ed(C,"p")),m.hash=5381!==C?C.toString():"",m}(),e8=s.default.createContext({shouldForwardProp:void 0,styleSheet:e6,stylis:e7,stylisPlugins:void 0});e8.Consumer;let te=s.default.createContext(void 0);te.Consumer;let tt=Object.prototype.hasOwnProperty,tr={};function tn(e,t,r){var n,i;let a,o,l=eO(e),c=!ef(e),{attrs:u=en,componentId:d=(n=t.displayName,i=t.parentComponentId,tr[a="string"!=typeof n?"sc":eo(n)]=(tr[a]||0)+1,o=a+"-"+eu(ed(5381,q+a+tr[a])>>>0),i?i+"-"+o:o),displayName:f=ef(e)?`styled.${e}`:`Styled(${e.displayName||e.name||"Component"})`}=t,p=t.displayName&&t.componentId?eo(t.displayName)+"-"+t.componentId:t.componentId||d,h=l&&e.attrs?e.attrs.concat(u).filter(Boolean):u,{shouldForwardProp:g}=t;if(l&&e.shouldForwardProp){let r=e.shouldForwardProp;if(t.shouldForwardProp){let e=t.shouldForwardProp;g=(t,n)=>r(t,n)&&e(t,n)}else g=r}let m=new e5(r,p,l?e.componentStyle:void 0);function y(e,t){return function(e,t,r){let n,i,{attrs:a,componentStyle:o,defaultProps:l,foldedComponentIds:c,styledComponentId:u,target:d}=e,f=s.default.useContext(te),p=s.default.useContext(e8),h=e.shouldForwardProp||p.shouldForwardProp,g=function(e,t,r=es){return e.theme!==r.theme&&e.theme||t||r.theme}(t,f,l)||es;{let e=s.default.useRef(null),r=e.current;if(null!==r&&r[1]===g&&r[2]===p.styleSheet&&r[3]===p.stylis&&r[7]===o&&function(e,t,r){let n=0;for(let r in t)if(tt.call(t,r)&&(n++,e[r]!==t[r]))return!1;return n===r}(r[0],t,r[4]))n=r[5],i=r[6];else{n=function(e,t,r){let n=Object.assign(Object.assign({},t),{className:void 0,theme:r}),s=e.length>1;for(let r=0;r<e.length;r++){let i=e[r],a=ek(i)?i(s?Object.assign({},n):n):i;for(let e in a)"className"===e?n.className=eN(n.className,a[e]):"style"===e?n.style=Object.assign(Object.assign({},n.style),a[e]):e in t&&void 0===t[e]||(n[e]=a[e])}return"className"in t&&"string"==typeof t.className&&(n.className=eN(n.className,t.className)),n}(a,t,g),i=o.generateAndInjectStyles(n,p.styleSheet,p.stylis);let r=0;for(let e in t)tt.call(t,e)&&r++;e.current=[t,g,p.styleSheet,p.stylis,r,n,i,o]}}let m=n.as||d,y=function(e,t,r,n){let s={};for(let i in e)void 0===e[i]||"$"===i[0]||"as"===i||"theme"===i&&e.theme===r||("forwardedAs"===i?s.as=e.forwardedAs:n&&!n(i,t)||(s[i]=e[i]));return s}(n,m,g,h),b=eN(c,u);return i&&(b+=" "+i),n.className&&(b+=" "+n.className),y[ef(m)&&m.includes("-")?"class":"className"]=b,r&&(y.ref=r),(0,s.createElement)(m,y)}(b,e,t)}y.displayName=f;let b=s.default.forwardRef(y);return b.attrs=h,b.componentStyle=m,b.displayName=f,b.shouldForwardProp=g,b.foldedComponentIds=l?eN(e.foldedComponentIds,e.styledComponentId):"",b.styledComponentId=p,b.target=l?e.target:e,Object.defineProperty(b,"defaultProps",{get(){return this._foldedDefaultProps},set(t){this._foldedDefaultProps=l?function(e,...t){for(let r of t)!function e(t,r,n=!1){if(!n&&!eI(t)&&!Array.isArray(t))return r;if(Array.isArray(r))for(let n=0;n<r.length;n++)t[n]=e(t[n],r[n]);else if(eI(r))for(let n in r)t[n]=e(t[n],r[n]);return t}(e,r,!0);return e}({},e.defaultProps,t):t}}),eR(b,()=>`.${b.styledComponentId}`),c&&function e(t,r,n){if("string"!=typeof r){let s=e$(r);s&&s!==eA&&e(t,s,n);let i=ew(r).concat(eS(r)),a=ev(t),o=ev(r);for(let e=0;e<i.length;++e){let s=i[e];if(!(s in em||n&&n[s]||o&&s in o||a&&s in a)){let e=eC(r,s);try{ex(t,s,e)}catch(e){}}}}return t}(b,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),b}var ts=new Set(["a","abbr","address","area","article","aside","audio","b","bdi","bdo","blockquote","body","button","br","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","label","legend","li","main","map","mark","menu","meter","nav","object","ol","optgroup","option","output","p","picture","pre","progress","q","rp","rt","ruby","s","samp","search","section","select","slot","small","span","strong","sub","summary","sup","table","tbody","td","template","textarea","tfoot","th","thead","time","tr","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feDropShadow","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","switch","symbol","text","textPath","tspan","use"]);function ti(e,t){let r=[e[0]];for(let n=0,s=t.length;n<s;n+=1)r.push(t[n],e[n+1]);return r}let ta=e=>(eK.add(e),e),to=e=>(function e(t,r,n=es){if(!r)throw Q(1,r);let s=(e,...s)=>t(r,n,function(e,...t){return ek(e)||eI(e)?ta(e1(ti(en,[e,...t]))):0===t.length&&1===e.length&&"string"==typeof e[0]?e1(e):ta(e1(ti(e,t)))}(e,...s));return s.attrs=s=>e(t,r,Object.assign(Object.assign({},n),{attrs:Array.prototype.concat(n.attrs,s).filter(Boolean)})),s.withConfig=s=>e(t,r,Object.assign(Object.assign({},n),s)),s})(tn,e);ts.forEach(e=>{to[e]=to(e)});let tl=[{id:"01",title:"BIKE CONFIGURATOR",mediaUrl:"/videos/bike.mp4"},{id:"02",title:"TOYOTA CONFIGURATOR",mediaUrl:"/videos/Car_Configurator.mp4"},{id:"03",title:"JACKET CONFIGURATOR",mediaUrl:"/videos/jacket-configurator.mp4"},{id:"04",title:"TOYOTA CONFIGURATOR",mediaUrl:"/videos/Car_Configurator.mp4"}],tc=["#d4d4d8","#ca8a04","#ea580c"],tu=to.div`
  .portfolio-section {
    position: relative;
    width: 100%;
    min-height: 100vh;
    background: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 4vw;
  }

  .section-header {
    width: 100%;
    max-width: 1300px;
    margin-bottom: 24px;
    text-align: left;
    padding-left: 12px;
    z-index: 10;
  }

  .portfolio-title {
    font-size: 2.5rem;
    font-weight: 900;
    color: #ffffff;
    letter-spacing: 0.05em;
    text-shadow: 0 2px 12px rgba(0,0,0,0.25);
  }

  .portfolio-title .highlight {
    color: #e2a012;
  }

  .accordion-container {
    display: flex;
    width: 100%;
    max-width: 1300px;
    height: 650px;
    background: #222222;
    border-radius: 28px;
    overflow: hidden;
    box-shadow: 0 30px 60px rgba(0,0,0,0.3);
    gap: 12px;
    padding: 12px;
    z-index: 10;
  }

  .accordion-panel {
    position: relative;
    height: 100%;
    border-radius: 20px;
    cursor: pointer;
    overflow: hidden;
    transition: flex 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    display: flex;
  }

  .accordion-panel.collapsed {
    flex: 0 0 75px;
  }

  .accordion-panel.active {
    flex: 1 1 auto;
  }

  .collapsed-content {
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 1;
    transition: opacity 0.3s ease;
  }

  .accordion-panel.active .collapsed-content {
    opacity: 0;
    pointer-events: none;
  }

  .vertical-title {
    writing-mode: vertical-rl;
    transform: rotate(180deg);
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0.15em;
    white-space: nowrap;
    user-select: none;
    color: #111;
  }

  .expanded-content {
    position: absolute;
    inset: 0;
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.4s ease 0.15s;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: inherit;
    overflow: hidden;
    background: #000;
  }

  .accordion-panel.active .expanded-content {
    opacity: 1;
    pointer-events: auto;
  }

  .video-wrapper {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .video-wrapper video {
    width: 100%;
    height: 100%;
    object-fit: cover; 
  }

  .close-back-btn {
    position: absolute;
    top: 20px;
    right: 20px;
    z-index: 30;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 1px solid rgba(255, 255, 255, 0.2);
    font-size: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.2s ease;
    backdrop-filter: blur(8px);
  }

  .close-back-btn:hover {
    background: #ffffff;
    color: #000000;
    transform: scale(1.08);
  }

  @media (max-width: 768px) {
    .accordion-container {
      height: auto;
      flex-direction: column;
      padding: 8px;
    }
    .accordion-panel.collapsed {
      flex: 0 0 60px;
      width: 100%;
    }
    .accordion-panel.active {
      height: 420px;
      width: 100%;
    }
    .vertical-title {
      writing-mode: horizontal-tb;
      transform: none;
    }
  }
`;e.s(["default",0,function(){let[e,t]=(0,s.useState)(1),[r,i]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{i(!0)},[]),r)?(0,n.jsx)(tu,{children:(0,n.jsxs)("section",{className:"portfolio-section",children:[(0,n.jsx)("div",{className:"section-header",children:(0,n.jsxs)("h2",{className:"portfolio-title",children:["OUR ",(0,n.jsx)("span",{className:"highlight",children:"Latest Work"})]})}),(0,n.jsx)("div",{className:"accordion-container",children:tl.map((r,s)=>{let i=e===s;return(0,n.jsxs)("div",{className:`accordion-panel ${i?"active":"collapsed"}`,style:{backgroundColor:tc[s%tc.length]},onClick:()=>t(s),children:[(0,n.jsx)("div",{className:"collapsed-content",children:(0,n.jsx)("span",{className:"vertical-title",children:r.title})}),(0,n.jsx)("div",{className:"expanded-content",children:(0,n.jsx)("div",{className:"video-wrapper",children:(0,n.jsx)("video",{src:r.mediaUrl,autoPlay:!0,loop:!0,muted:!0,playsInline:!0})})})]},r.id)})})]})}):(0,n.jsx)("div",{className:"min-h-screen bg-[#333333]"})}],26692)}]);