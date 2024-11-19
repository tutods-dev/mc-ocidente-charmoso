import { j as L, u as P, i as d, l } from './routing-VhRhlrWH.js';
import { t as C, m as c, H as f, r as g, j as h, i as m, a as v } from './web-Cw_Dym33.js';
var H = C('<a>');
function w(t) {
  t = c({ inactiveClass: 'inactive', activeClass: 'active' }, t);
  const [, i] = f(t, ['href', 'state', 'class', 'activeClass', 'inactiveClass', 'end']),
    n = d(() => t.href),
    o = L(n),
    u = P(),
    r = v(() => {
      const e = n();
      if (e === void 0) {
        return [!1, !1];
      }
      const a = l(e.split(/[?#]/, 1)[0]).toLowerCase(),
        s = l(u.pathname).toLowerCase();
      return [t.end ? a === s : s.startsWith(a + '/') || s === a, a === s];
    });
  return (() => {
    var e = m(H);
    return (
      h(
        e,
        c(i, {
          get href() {
            return o() || t.href;
          },
          get state() {
            return JSON.stringify(t.state);
          },
          get classList() {
            return {
              ...(t.class && { [t.class]: !0 }),
              [t.inactiveClass]: !r()[0],
              [t.activeClass]: r()[0],
              ...i.classList,
            };
          },
          link: '',
          get 'aria-current'() {
            return r()[1] ? 'page' : void 0;
          },
        }),
        !1,
        !1,
      ),
      g(),
      e
    );
  })();
}
export { w as A };
