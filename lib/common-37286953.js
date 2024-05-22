const a = (t, e) => {
  if (t.indexOf("{") === -1)
    return t;
  let n = t;
  const c = /\{(.*?)\}/g, f = t.match(c);
  return f && f.forEach((r) => {
    if (r.length > 2) {
      const i = r.slice(1, r.length - 1);
      n = n.replace(new RegExp(r, "gm"), e[i] ?? "");
    }
  }), n;
}, o = (t, e = "", n = {}) => {
  for (const c of Object.keys(t)) {
    const f = `${e ? e + "." : ""}${c}`;
    typeof t[c] != "object" ? n[f] = t[c] : o(t[c], f, n);
  }
  return n;
}, s = (t, e, ...n) => {
  if (!t)
    return "";
  const c = t[e] || e;
  return n.length ? typeof c == "function" ? c(...n) : a(c, n[0]) : c;
}, u = (t) => {
  const e = {};
  return t && Object.keys(t).forEach((n) => {
    e[n] = o(t[n]);
  }), e;
}, h = (t, e) => {
  e && Object.keys(e).forEach((n) => {
    t[n] = Object.assign(
      t[n] ?? {},
      o(e[n])
    );
  });
};
export {
  s as a,
  h as c,
  u as f
};
