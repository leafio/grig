import { createSignal as i } from "solid-js";
import { c as M, f as _, a as b } from "./common-37286953.js";
const k = (n, o) => {
  let s = "";
  const a = {}, g = (t) => {
    M(a, t);
  }, [e, l] = i(n.lang ?? "");
  return s = n.fallbackLang, g(o), {
    tMessages: (t) => {
      const r = _(t);
      return (c, ...m) => {
        const f = {
          ...a[s],
          ...r[s],
          ...a[e()],
          ...r[e()]
        };
        return b(f, c, ...m);
      };
    },
    addMessages: g,
    lang: e,
    setLang: l
  };
};
export {
  k as createGrigSolid
};
