"use strict";const s=(t,n)=>{if(t.indexOf("{")===-1)return t;let e=t;const c=/\{(.*?)\}/g,f=t.match(c);return f&&f.forEach(r=>{if(r.length>2){const i=r.slice(1,r.length-1);e=e.replace(new RegExp(r,"gm"),n[i]??"")}}),e},o=(t,n="",e={})=>{for(const c of Object.keys(t)){const f=`${n?n+".":""}${c}`;typeof t[c]!="object"?e[f]=t[c]:o(t[c],f,e)}return e},a=(t,n,...e)=>{if(!t)return"";const c=t[n]||n;return e.length?typeof c=="function"?c(...e):s(c,e[0]):c},u=t=>{const n={};return t&&Object.keys(t).forEach(e=>{n[e]=o(t[e])}),n},l=(t,n)=>{n&&Object.keys(n).forEach(e=>{t[e]=Object.assign(t[e]??{},o(n[e]))})};exports.combineMessages=l;exports.flatMessages=u;exports.formatObjKey=a;