"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const r=require("./common-445ba180.cjs"),o=require("vue"),i=(l,u)=>{const e=o.ref(""),a=o.ref(""),t={},n=s=>{r.combineMessages(t,s)};return e.value=l.lang,a.value=l.fallbackLang,n(u),{tMessages:s=>{const c=r.flatMessages(s);return n(s),(g,...v)=>{const f={...t[a.value],...c[a.value],...t[e.value],...c[e.value]};return r.formatObjKey(f,g,...v)}},lang:e,addMessages:n}};exports.createGrigVue=i;
