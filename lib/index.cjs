"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const g=require("./common-445ba180.cjs"),i=s=>(c,...n)=>g.formatObjKey(s,c,...n),u=(s,c)=>{let n="",r="";const l={},o=a=>{g.combineMessages(l,a)};n=s.lang,r=s.fallbackLang,o(c);const t=[];return{tMessages:a=>{const e=g.flatMessages(a);return(b,...m)=>{const d={...l[r],...e[r],...l[n],...e[n]};return g.formatObjKey(d,b,...m)}},addMessages:o,addLangChangeCallback:(a,e)=>{t.push({name:a,callback:e})},removeLangChangeCallback:a=>{t.splice(t.findIndex(e=>e.name==a),1)},getLang:()=>n,setLang:a=>{n=a,t.forEach(e=>{e.callback(a)})}}};exports.createGrig=u;exports.grig=i;
