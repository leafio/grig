import { a as o, c as L, f as d } from "./common-37286953.js";
const M = (n) => (g, ...s) => o(n, g, ...s), p = (n, g) => {
  let s = "", c = "";
  const l = {}, r = (a) => {
    L(l, a);
  };
  s = n.lang, c = n.fallbackLang, r(g);
  const t = [];
  return {
    tMessages: (a) => {
      const e = d(a);
      return (b, ...m) => {
        const C = {
          ...l[c],
          ...e[c],
          ...l[s],
          ...e[s]
        };
        return o(C, b, ...m);
      };
    },
    addMessages: r,
    addLangChangeCallback: (a, e) => {
      t.push({ name: a, callback: e });
    },
    removeLangChangeCallback: (a) => {
      t.splice(
        t.findIndex((e) => e.name == a),
        1
      );
    },
    getLang: () => s,
    setLang: (a) => {
      s = a, t.forEach((e) => {
        e.callback(a);
      });
    }
  };
};
export {
  p as createGrig,
  M as grig
};
