import { createMemo as h, mergeProps as m, splitProps as v } from 'solid-js';
import { mergeProps as f, ssrElement as u } from 'solid-js/web';
import { l as C, o as c, u as d, j as g } from './routing-KofvCWNq.js';
function A(t) {
  t = m({ inactiveClass: 'inactive', activeClass: 'active' }, t);
  const [, r] = v(t, ['href', 'state', 'class', 'activeClass', 'inactiveClass', 'end']),
    i = g(() => t.href),
    o = C(i),
    l = d(),
    a = h(() => {
      const n = i();
      if (n === void 0) {
        return [!1, !1];
      }
      const e = c(n.split(/[?#]/, 1)[0]).toLowerCase(),
        s = c(l.pathname).toLowerCase();
      return [t.end ? e === s : s.startsWith(e + '/') || s === e, e === s];
    });
  return u(
    'a',
    f(r, {
      get href() {
        return o() || t.href;
      },
      get state() {
        return JSON.stringify(t.state);
      },
      get classList() {
        return {
          ...(t.class && { [t.class]: !0 }),
          [t.inactiveClass]: !a()[0],
          [t.activeClass]: a()[0],
          ...r.classList,
        };
      },
      link: !0,
      get 'aria-current'() {
        return a()[1] ? 'page' : void 0;
      },
    }),
    void 0,
    !0,
  );
}
export { A };
