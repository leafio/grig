"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("./common-445ba180.cjs"),l=require("svelte/store"),d=(n,i)=>{let s="";const t={},o=e=>{r.combineMessages(t,e)},c=l.writable(n.lang??"");s=n.fallbackLang,o(i);const m=e=>a=>{const g=r.flatMessages(a);return(u,...b)=>{const M={...t[s],...g[s],...t[e],...g[e]};return r.formatObjKey(M,u,...b)}};return{tMessages:e=>l.derived(c,a=>m(a)(e)),addMessages:o,lang:c}};exports.createGrigSvelte=d;
