import x, { createContext as v, useContext as L, useState as y } from "react";
import { createGrig as C } from "./index.js";
import "./common-37286953.js";
var f = { exports: {} }, g = {};
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var R = x, O = Symbol.for("react.element"), k = Symbol.for("react.fragment"), E = Object.prototype.hasOwnProperty, P = R.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner, S = { key: !0, ref: !0, __self: !0, __source: !0 };
function l(t, e, o) {
  var r, n = {}, s = null, a = null;
  o !== void 0 && (s = "" + o), e.key !== void 0 && (s = "" + e.key), e.ref !== void 0 && (a = e.ref);
  for (r in e)
    E.call(e, r) && !S.hasOwnProperty(r) && (n[r] = e[r]);
  if (t && t.defaultProps)
    for (r in e = t.defaultProps, e)
      n[r] === void 0 && (n[r] = e[r]);
  return { $$typeof: O, type: t, key: s, ref: a, props: n, _owner: P.current };
}
g.Fragment = k;
g.jsx = l;
g.jsxs = l;
f.exports = g;
var b = f.exports;
function $(t, e) {
  const {
    tMessages: o,
    getLang: r,
    setLang: n,
    addLangChangeCallback: s,
    removeLangChangeCallback: a,
    addMessages: _
  } = C(t, e), u = v({
    lang: "",
    setLang: () => {
    }
  }), c = () => L(u);
  return {
    useMessages: (i) => (c(), o(i)),
    useGrigContext: c,
    GrigProvider: ({ children: i }) => {
      const [m, d] = y(r());
      return /* @__PURE__ */ b.jsx(
        u.Provider,
        {
          value: {
            lang: m,
            setLang: (p) => {
              n(p), d(p);
            }
          },
          children: i
        }
      );
    },
    tMessages: o,
    addLangChangeCallback: s,
    removeLangChangeCallback: a,
    addMessages: _,
    getLang: r
  };
}
export {
  $ as createGrigReact
};
