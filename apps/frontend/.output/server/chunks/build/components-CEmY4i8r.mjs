import { ssrElement, mergeProps as mergeProps$1 } from 'solid-js/web';
import { mergeProps, splitProps, createMemo } from 'solid-js';
import { J as Ue, K as ke, L as Oe, Q as E } from '../runtime.mjs';

function A(t) {
  t = mergeProps({ inactiveClass: "inactive", activeClass: "active" }, t);
  const [, r] = splitProps(t, ["href", "state", "class", "activeClass", "inactiveClass", "end"]), i = Ue(() => t.href), o = ke(i), l = Oe(), a = createMemo(() => {
    const n = i();
    if (n === void 0)
      return [false, false];
    const e = E(n.split(/[?#]/, 1)[0]).toLowerCase(), s = E(l.pathname).toLowerCase();
    return [t.end ? e === s : s.startsWith(e + "/") || s === e, e === s];
  });
  return ssrElement("a", mergeProps$1(r, { get href() {
    return o() || t.href;
  }, get state() {
    return JSON.stringify(t.state);
  }, get classList() {
    return { ...t.class && { [t.class]: true }, [t.inactiveClass]: !a()[0], [t.activeClass]: a()[0], ...r.classList };
  }, link: true, get "aria-current"() {
    return a()[1] ? "page" : void 0;
  } }), void 0, true);
}

export { A };
//# sourceMappingURL=components-CEmY4i8r.mjs.map
