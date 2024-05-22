"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("react"),y=require("./index.cjs");require("./common-445ba180.cjs");var f={exports:{}},i={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var L=g,m=Symbol.for("react.element"),C=Symbol.for("react.fragment"),R=Object.prototype.hasOwnProperty,O=L.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,S={key:!0,ref:!0,__self:!0,__source:!0};function p(t,e,s){var r,n={},o=null,a=null;s!==void 0&&(o=""+s),e.key!==void 0&&(o=""+e.key),e.ref!==void 0&&(a=e.ref);for(r in e)R.call(e,r)&&!S.hasOwnProperty(r)&&(n[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)n[r]===void 0&&(n[r]=e[r]);return{$$typeof:m,type:t,key:o,ref:a,props:n,_owner:O.current}}i.Fragment=C;i.jsx=p;i.jsxs=p;f.exports=i;var b=f.exports;function P(t,e){const{tMessages:s,getLang:r,setLang:n,addLangChangeCallback:o,removeLangChangeCallback:a,addMessages:_}=y.createGrig(t,e),c=g.createContext({lang:"",setLang:()=>{}}),l=()=>g.useContext(c);return{useMessages:u=>(l(),s(u)),useGrigContext:l,GrigProvider:({children:u})=>{const[v,x]=g.useState(r());return b.jsx(c.Provider,{value:{lang:v,setLang:d=>{n(d),x(d)}},children:u})},tMessages:s,addLangChangeCallback:o,removeLangChangeCallback:a,addMessages:_,getLang:r}}exports.createGrigReact=P;
