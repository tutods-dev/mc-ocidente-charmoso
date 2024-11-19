import { m as S, h as v } from './routing-VhRhlrWH.js';
import { w as A, u as F, v as O, x as X } from './styles-CtYowtZs.js';
import { e as R, g as w, f as y } from './web-Cw_Dym33.js';
const m = new Map();
function $(t) {
  const e = v();
  return (...i) => t.apply({ r: e }, i);
}
function b(t, e) {
  function i(...r) {
    const a = this.r,
      c = this.f,
      s = (a.singleFlight && t.withOptions ? t.withOptions({ headers: { 'X-Single-Flight': 'true' } }) : t)(...r),
      [l, f] = R();
    let g;
    function u(d) {
      return async (h) => {
        const o = await B(h, d, a.navigatorFactory());
        if (!o) {
          return g.clear();
        }
        if ((f(o), o.error && !c)) {
          throw o.error;
        }
        return o.data;
      };
    }
    return (
      a.submissions[1]((d) => [
        ...d,
        (g = {
          input: r,
          url: n,
          get result() {
            return l()?.data;
          },
          get error() {
            return l()?.error;
          },
          get pending() {
            return !l();
          },
          clear() {
            a.submissions[1]((h) => h.filter((o) => o.input !== r));
          },
          retry() {
            return f(void 0), t(...r).then(u(), u(!0));
          },
        }),
      ]),
      s.then(u(), u(!0))
    );
  }
  const n = t.url || e || `https://action/${x(t.toString())}`;
  return p(i, n);
}
function p(t, e) {
  return (
    (t.toString = () => {
      if (!e) {
        throw new Error('Client Actions need explicit names if server rendered');
      }
      return e;
    }),
    (t.with = (...i) => {
      const n = function (...a) {
          return t.call(this, ...i, ...a);
        },
        r = new URL(e, S);
      return (
        r.searchParams.set('args', F(i)), p(n, (r.origin === 'https://action' ? r.origin : '') + r.pathname + r.search)
      );
    }),
    (t.url = e),
    m.set(e, t),
    w() && y(() => m.delete(e)),
    t
  );
}
const x = (t) => t.split('').reduce((e, i) => ((e << 5) - e + i.charCodeAt(0)) | 0, 0);
async function B(t, e, i) {
  let n, r, a, c;
  if (t instanceof Response) {
    if (
      (t.headers.has('X-Revalidate') && (a = t.headers.get('X-Revalidate').split(',')),
      t.customBody &&
        ((n = r = await t.customBody()),
        t.headers.has('X-Single-Flight') && ((n = n._$value), delete r._$value, (c = Object.keys(r)))),
      t.headers.has('Location'))
    ) {
      const s = t.headers.get('Location') || '/';
      s.startsWith('http') ? (window.location.href = s) : i(s);
    }
  } else {
    if (e) {
      return { error: t };
    }
    n = t;
  }
  return (
    O(a, (s) => (s[0] = 0)), c && c.forEach((s) => A.set(s, r[s])), await X(a, !1), n != null ? { data: n } : void 0
  );
}
export { m as a, b, $ as u };
