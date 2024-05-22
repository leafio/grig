import { c as _, f as b, a as i } from "./common-37286953.js";
import { writable as d, derived as u } from "svelte/store";
const j = (r, c) => {
  let e = "";
  const a = {}, n = (s) => {
    _(a, s);
  }, o = d(r.lang ?? "");
  e = r.fallbackLang, n(c);
  const l = (s) => (t) => {
    const g = b(t);
    return (m, ...f) => {
      const M = {
        ...a[e],
        ...g[e],
        ...a[s],
        ...g[s]
      };
      return i(M, m, ...f);
    };
  };
  return {
    tMessages: (s) => u(
      o,
      (t) => l(t)(s)
    ),
    addMessages: n,
    lang: o
  };
};
export {
  j as createGrigSvetle
};
