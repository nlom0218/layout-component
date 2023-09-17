(function(R,k){typeof exports=="object"&&typeof module<"u"?k(exports,require("react")):typeof define=="function"&&define.amd?define(["exports","react"],k):(R=typeof globalThis<"u"?globalThis:R||self,k(R.index={},R.React))})(this,function(R,k){"use strict";function Ce(c){const g=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(c){for(const b in c)if(b!=="default"){const l=Object.getOwnPropertyDescriptor(c,b);Object.defineProperty(g,b,l.get?l:{enumerable:!0,get:()=>c[b]})}}return g.default=c,Object.freeze(g)}const je=Ce(k);function we(c){if(c.__esModule)return c;var g=c.default;if(typeof g=="function"){var b=function l(){return this instanceof l?Reflect.construct(g,arguments,this.constructor):g.apply(this,arguments)};b.prototype=g.prototype}else b={};return Object.defineProperty(b,"__esModule",{value:!0}),Object.keys(c).forEach(function(l){var T=Object.getOwnPropertyDescriptor(c,l);Object.defineProperty(b,l,T.get?T:{enumerable:!0,get:function(){return c[l]}})}),b}var q={exports:{}},D={};const Q=we(je);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ee;function xe(){if(ee)return D;ee=1;var c=Q,g=Symbol.for("react.element"),b=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,T=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,W={key:!0,ref:!0,__self:!0,__source:!0};function A(O,d,C){var y,m={},P=null,Y=null;C!==void 0&&(P=""+C),d.key!==void 0&&(P=""+d.key),d.ref!==void 0&&(Y=d.ref);for(y in d)l.call(d,y)&&!W.hasOwnProperty(y)&&(m[y]=d[y]);if(O&&O.defaultProps)for(y in d=O.defaultProps,d)m[y]===void 0&&(m[y]=d[y]);return{$$typeof:g,type:O,key:P,ref:Y,props:m,_owner:T.current}}return D.Fragment=b,D.jsx=A,D.jsxs=A,D}var F={};/**
 * @license React
 * react-jsx-runtime.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var re;function ke(){return re||(re=1,process.env.NODE_ENV!=="production"&&function(){var c=Q,g=Symbol.for("react.element"),b=Symbol.for("react.portal"),l=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),W=Symbol.for("react.profiler"),A=Symbol.for("react.provider"),O=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),C=Symbol.for("react.suspense"),y=Symbol.for("react.suspense_list"),m=Symbol.for("react.memo"),P=Symbol.for("react.lazy"),Y=Symbol.for("react.offscreen"),te=Symbol.iterator,Ae="@@iterator";function Ie(e){if(e===null||typeof e!="object")return null;var r=te&&e[te]||e[Ae];return typeof r=="function"?r:null}var j=c.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;function v(e){{for(var r=arguments.length,t=new Array(r>1?r-1:0),n=1;n<r;n++)t[n-1]=arguments[n];$e("error",e,t)}}function $e(e,r,t){{var n=j.ReactDebugCurrentFrame,i=n.getStackAddendum();i!==""&&(r+="%s",t=t.concat([i]));var u=t.map(function(o){return String(o)});u.unshift("Warning: "+r),Function.prototype.apply.call(console[e],console,u)}}var We=!1,Ye=!1,Me=!1,Ne=!1,Le=!1,ne;ne=Symbol.for("react.module.reference");function Ve(e){return!!(typeof e=="string"||typeof e=="function"||e===l||e===W||Le||e===T||e===C||e===y||Ne||e===Y||We||Ye||Me||typeof e=="object"&&e!==null&&(e.$$typeof===P||e.$$typeof===m||e.$$typeof===A||e.$$typeof===O||e.$$typeof===d||e.$$typeof===ne||e.getModuleId!==void 0))}function Ue(e,r,t){var n=e.displayName;if(n)return n;var i=r.displayName||r.name||"";return i!==""?t+"("+i+")":t}function ae(e){return e.displayName||"Context"}function _(e){if(e==null)return null;if(typeof e.tag=="number"&&v("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case l:return"Fragment";case b:return"Portal";case W:return"Profiler";case T:return"StrictMode";case C:return"Suspense";case y:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case O:var r=e;return ae(r)+".Consumer";case A:var t=e;return ae(t._context)+".Provider";case d:return Ue(e,e.render,"ForwardRef");case m:var n=e.displayName||null;return n!==null?n:_(e.type)||"Memo";case P:{var i=e,u=i._payload,o=i._init;try{return _(o(u))}catch{return null}}}return null}var S=Object.assign,I=0,oe,ie,ue,se,fe,ce,le;function de(){}de.__reactDisabledLog=!0;function qe(){{if(I===0){oe=console.log,ie=console.info,ue=console.warn,se=console.error,fe=console.group,ce=console.groupCollapsed,le=console.groupEnd;var e={configurable:!0,enumerable:!0,value:de,writable:!0};Object.defineProperties(console,{info:e,log:e,warn:e,error:e,group:e,groupCollapsed:e,groupEnd:e})}I++}}function Be(){{if(I--,I===0){var e={configurable:!0,enumerable:!0,writable:!0};Object.defineProperties(console,{log:S({},e,{value:oe}),info:S({},e,{value:ie}),warn:S({},e,{value:ue}),error:S({},e,{value:se}),group:S({},e,{value:fe}),groupCollapsed:S({},e,{value:ce}),groupEnd:S({},e,{value:le})})}I<0&&v("disabledDepth fell below zero. This is a bug in React. Please file an issue.")}}var B=j.ReactCurrentDispatcher,J;function M(e,r,t){{if(J===void 0)try{throw Error()}catch(i){var n=i.stack.trim().match(/\n( *(at )?)/);J=n&&n[1]||""}return`
`+J+e}}var z=!1,N;{var Je=typeof WeakMap=="function"?WeakMap:Map;N=new Je}function ve(e,r){if(!e||z)return"";{var t=N.get(e);if(t!==void 0)return t}var n;z=!0;var i=Error.prepareStackTrace;Error.prepareStackTrace=void 0;var u;u=B.current,B.current=null,qe();try{if(r){var o=function(){throw Error()};if(Object.defineProperty(o.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(o,[])}catch(E){n=E}Reflect.construct(e,[],o)}else{try{o.call()}catch(E){n=E}e.call(o.prototype)}}else{try{throw Error()}catch(E){n=E}e()}}catch(E){if(E&&n&&typeof E.stack=="string"){for(var a=E.stack.split(`
`),p=n.stack.split(`
`),s=a.length-1,f=p.length-1;s>=1&&f>=0&&a[s]!==p[f];)f--;for(;s>=1&&f>=0;s--,f--)if(a[s]!==p[f]){if(s!==1||f!==1)do if(s--,f--,f<0||a[s]!==p[f]){var h=`
`+a[s].replace(" at new "," at ");return e.displayName&&h.includes("<anonymous>")&&(h=h.replace("<anonymous>",e.displayName)),typeof e=="function"&&N.set(e,h),h}while(s>=1&&f>=0);break}}}finally{z=!1,B.current=u,Be(),Error.prepareStackTrace=i}var x=e?e.displayName||e.name:"",Se=x?M(x):"";return typeof e=="function"&&N.set(e,Se),Se}function ze(e,r,t){return ve(e,!1)}function Ge(e){var r=e.prototype;return!!(r&&r.isReactComponent)}function L(e,r,t){if(e==null)return"";if(typeof e=="function")return ve(e,Ge(e));if(typeof e=="string")return M(e);switch(e){case C:return M("Suspense");case y:return M("SuspenseList")}if(typeof e=="object")switch(e.$$typeof){case d:return ze(e.render);case m:return L(e.type,r,t);case P:{var n=e,i=n._payload,u=n._init;try{return L(u(i),r,t)}catch{}}}return""}var V=Object.prototype.hasOwnProperty,pe={},ge=j.ReactDebugCurrentFrame;function U(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);ge.setExtraStackFrame(t)}else ge.setExtraStackFrame(null)}function Ke(e,r,t,n,i){{var u=Function.call.bind(V);for(var o in e)if(u(e,o)){var a=void 0;try{if(typeof e[o]!="function"){var p=Error((n||"React class")+": "+t+" type `"+o+"` is invalid; it must be a function, usually from the `prop-types` package, but received `"+typeof e[o]+"`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");throw p.name="Invariant Violation",p}a=e[o](r,o,n,t,null,"SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED")}catch(s){a=s}a&&!(a instanceof Error)&&(U(i),v("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).",n||"React class",t,o,typeof a),U(null)),a instanceof Error&&!(a.message in pe)&&(pe[a.message]=!0,U(i),v("Failed %s type: %s",t,a.message),U(null))}}}var He=Array.isArray;function G(e){return He(e)}function Xe(e){{var r=typeof Symbol=="function"&&Symbol.toStringTag,t=r&&e[Symbol.toStringTag]||e.constructor.name||"Object";return t}}function Ze(e){try{return be(e),!1}catch{return!0}}function be(e){return""+e}function ye(e){if(Ze(e))return v("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.",Xe(e)),be(e)}var $=j.ReactCurrentOwner,Qe={key:!0,ref:!0,__self:!0,__source:!0},he,me,K;K={};function er(e){if(V.call(e,"ref")){var r=Object.getOwnPropertyDescriptor(e,"ref").get;if(r&&r.isReactWarning)return!1}return e.ref!==void 0}function rr(e){if(V.call(e,"key")){var r=Object.getOwnPropertyDescriptor(e,"key").get;if(r&&r.isReactWarning)return!1}return e.key!==void 0}function tr(e,r){if(typeof e.ref=="string"&&$.current&&r&&$.current.stateNode!==r){var t=_($.current.type);K[t]||(v('Component "%s" contains the string ref "%s". Support for string refs will be removed in a future major release. This case cannot be automatically converted to an arrow function. We ask you to manually fix this case by using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref',_($.current.type),e.ref),K[t]=!0)}}function nr(e,r){{var t=function(){he||(he=!0,v("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"key",{get:t,configurable:!0})}}function ar(e,r){{var t=function(){me||(me=!0,v("%s: `ref` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://reactjs.org/link/special-props)",r))};t.isReactWarning=!0,Object.defineProperty(e,"ref",{get:t,configurable:!0})}}var or=function(e,r,t,n,i,u,o){var a={$$typeof:g,type:e,key:r,ref:t,props:o,_owner:u};return a._store={},Object.defineProperty(a._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:!1}),Object.defineProperty(a,"_self",{configurable:!1,enumerable:!1,writable:!1,value:n}),Object.defineProperty(a,"_source",{configurable:!1,enumerable:!1,writable:!1,value:i}),Object.freeze&&(Object.freeze(a.props),Object.freeze(a)),a};function ir(e,r,t,n,i){{var u,o={},a=null,p=null;t!==void 0&&(ye(t),a=""+t),rr(r)&&(ye(r.key),a=""+r.key),er(r)&&(p=r.ref,tr(r,i));for(u in r)V.call(r,u)&&!Qe.hasOwnProperty(u)&&(o[u]=r[u]);if(e&&e.defaultProps){var s=e.defaultProps;for(u in s)o[u]===void 0&&(o[u]=s[u])}if(a||p){var f=typeof e=="function"?e.displayName||e.name||"Unknown":e;a&&nr(o,f),p&&ar(o,f)}return or(e,a,p,i,n,$.current,o)}}var H=j.ReactCurrentOwner,_e=j.ReactDebugCurrentFrame;function w(e){if(e){var r=e._owner,t=L(e.type,e._source,r?r.type:null);_e.setExtraStackFrame(t)}else _e.setExtraStackFrame(null)}var X;X=!1;function Z(e){return typeof e=="object"&&e!==null&&e.$$typeof===g}function Ee(){{if(H.current){var e=_(H.current.type);if(e)return`

Check the render method of \``+e+"`."}return""}}function ur(e){{if(e!==void 0){var r=e.fileName.replace(/^.*[\\\/]/,""),t=e.lineNumber;return`

Check your code at `+r+":"+t+"."}return""}}var Re={};function sr(e){{var r=Ee();if(!r){var t=typeof e=="string"?e:e.displayName||e.name;t&&(r=`

Check the top-level render call using <`+t+">.")}return r}}function Te(e,r){{if(!e._store||e._store.validated||e.key!=null)return;e._store.validated=!0;var t=sr(r);if(Re[t])return;Re[t]=!0;var n="";e&&e._owner&&e._owner!==H.current&&(n=" It was passed a child from "+_(e._owner.type)+"."),w(e),v('Each child in a list should have a unique "key" prop.%s%s See https://reactjs.org/link/warning-keys for more information.',t,n),w(null)}}function Oe(e,r){{if(typeof e!="object")return;if(G(e))for(var t=0;t<e.length;t++){var n=e[t];Z(n)&&Te(n,r)}else if(Z(e))e._store&&(e._store.validated=!0);else if(e){var i=Ie(e);if(typeof i=="function"&&i!==e.entries)for(var u=i.call(e),o;!(o=u.next()).done;)Z(o.value)&&Te(o.value,r)}}}function fr(e){{var r=e.type;if(r==null||typeof r=="string")return;var t;if(typeof r=="function")t=r.propTypes;else if(typeof r=="object"&&(r.$$typeof===d||r.$$typeof===m))t=r.propTypes;else return;if(t){var n=_(r);Ke(t,e.props,"prop",n,e)}else if(r.PropTypes!==void 0&&!X){X=!0;var i=_(r);v("Component %s declared `PropTypes` instead of `propTypes`. Did you misspell the property assignment?",i||"Unknown")}typeof r.getDefaultProps=="function"&&!r.getDefaultProps.isReactClassApproved&&v("getDefaultProps is only used on classic React.createClass definitions. Use a static property named `defaultProps` instead.")}}function cr(e){{for(var r=Object.keys(e.props),t=0;t<r.length;t++){var n=r[t];if(n!=="children"&&n!=="key"){w(e),v("Invalid prop `%s` supplied to `React.Fragment`. React.Fragment can only have `key` and `children` props.",n),w(null);break}}e.ref!==null&&(w(e),v("Invalid attribute `ref` supplied to `React.Fragment`."),w(null))}}function Pe(e,r,t,n,i,u){{var o=Ve(e);if(!o){var a="";(e===void 0||typeof e=="object"&&e!==null&&Object.keys(e).length===0)&&(a+=" You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");var p=ur(i);p?a+=p:a+=Ee();var s;e===null?s="null":G(e)?s="array":e!==void 0&&e.$$typeof===g?(s="<"+(_(e.type)||"Unknown")+" />",a=" Did you accidentally export a JSX literal instead of a component?"):s=typeof e,v("React.jsx: type is invalid -- expected a string (for built-in components) or a class/function (for composite components) but got: %s.%s",s,a)}var f=ir(e,r,t,i,u);if(f==null)return f;if(o){var h=r.children;if(h!==void 0)if(n)if(G(h)){for(var x=0;x<h.length;x++)Oe(h[x],e);Object.freeze&&Object.freeze(h)}else v("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else Oe(h,e)}return e===l?cr(f):fr(f),f}}function lr(e,r,t){return Pe(e,r,t,!0)}function dr(e,r,t){return Pe(e,r,t,!1)}var vr=dr,pr=lr;F.Fragment=l,F.jsx=vr,F.jsxs=pr}()),F}process.env.NODE_ENV==="production"?q.exports=xe():q.exports=ke();var De=q.exports;function Fe(c){return De.jsx("div",{children:c.children})}R.Container=Fe,Object.defineProperty(R,Symbol.toStringTag,{value:"Module"})});
