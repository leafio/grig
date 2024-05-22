import { c as m, f as v, a as _ } from "./common-37286953.js";
import { ref as o } from "vue";
const p = (n, g) => {
  const a = o(""), e = o(""), t = {}, l = (s) => {
    m(t, s);
  };
  return a.value = n.lang, e.value = n.fallbackLang, l(g), {
    tMessages: (s) => {
      const r = v(s);
      return l(s), (c, ...u) => {
        const f = {
          ...t[e.value],
          ...r[e.value],
          ...t[a.value],
          ...r[a.value]
        };
        return _(f, c, ...u);
      };
    },
    lang: a,
    addMessages: l
  };
};
export {
  p as createGrigVue
};
