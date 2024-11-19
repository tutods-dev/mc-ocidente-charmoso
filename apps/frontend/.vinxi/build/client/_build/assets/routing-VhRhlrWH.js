import {
  u as H,
  J,
  K as M,
  o as Q,
  x as T,
  g as ce,
  b as de,
  v as fe,
  P as he,
  p as ie,
  e as j,
  Q as le,
  U as ue,
  a as v,
} from './web-Cw_Dym33.js';
function pe() {
  const e = new Set();
  function t(r) {
    return e.add(r), () => e.delete(r);
  }
  let n = !1;
  function s(r, a) {
    if (n) {
      return !(n = !1);
    }
    const o = { to: r, options: a, defaultPrevented: !1, preventDefault: () => (o.defaultPrevented = !0) };
    for (const i of e) {
      i.listener({
        ...o,
        from: i.location,
        retry: (u) => {
          u && (n = !0), i.navigate(r, { ...a, resolve: !1 });
        },
      });
    }
    return !o.defaultPrevented;
  }
  return { subscribe: t, confirm: s };
}
let D;
function V() {
  (!window.history.state || window.history.state._depth == null) &&
    window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ''),
    (D = window.history.state._depth);
}
V();
function Ie(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function $e(e, t) {
  let n = !1;
  return () => {
    const s = D;
    V();
    const r = s == null ? null : D - s;
    if (n) {
      n = !1;
      return;
    }
    r && t(r) ? ((n = !0), window.history.go(-r)) : e();
  };
}
const me = /^(?:[a-z0-9]+:)?\/\//i,
  ge = /^\/+|(\/)\/+$/g,
  ye = 'http://sr';
function S(e, t = !1) {
  const n = e.replace(ge, '$1');
  return n ? (t || /^[?#]/.test(n) ? n : '/' + n) : '';
}
function B(e, t, n) {
  if (me.test(t)) {
    return;
  }
  const s = S(e),
    r = n && S(n);
  let a = '';
  return (
    !r || t.startsWith('/') ? (a = s) : r.toLowerCase().indexOf(s.toLowerCase()) !== 0 ? (a = s + r) : (a = r),
    (a || '/') + S(t, !a)
  );
}
function ve(e, t) {
  if (e == null) {
    throw new Error(t);
  }
  return e;
}
function we(e, t) {
  return S(e).replace(/\/*(\*.*)?$/g, '') + S(t);
}
function X(e) {
  const t = {};
  return (
    e.searchParams.forEach((n, s) => {
      t[s] = n;
    }),
    t
  );
}
function Pe(e, t, n) {
  const [s, r] = e.split('/*', 2),
    a = s.split('/').filter(Boolean),
    o = a.length;
  return (i) => {
    const u = i.split('/').filter(Boolean),
      f = u.length - o;
    if (f < 0 || (f > 0 && r === void 0 && !t)) {
      return null;
    }
    const h = { path: o ? '' : '/', params: {} },
      y = (p) => (n === void 0 ? void 0 : n[p]);
    for (let p = 0; p < o; p++) {
      const d = a[p],
        m = u[p],
        w = d[0] === ':',
        C = w ? d.slice(1) : d;
      if (w && q(m, y(C))) {
        h.params[C] = m;
      } else if (w || !q(m, d)) {
        return null;
      }
      h.path += `/${m}`;
    }
    if (r) {
      const p = f ? u.slice(-f).join('/') : '';
      if (q(p, y(r))) {
        h.params[r] = p;
      } else {
        return null;
      }
    }
    return h;
  };
}
function q(e, t) {
  const n = (s) => s.localeCompare(e, void 0, { sensitivity: 'base' }) === 0;
  return t === void 0
    ? !0
    : typeof t == 'string'
      ? n(t)
      : typeof t == 'function'
        ? t(e)
        : Array.isArray(t)
          ? t.some(n)
          : t instanceof RegExp
            ? t.test(e)
            : !1;
}
function Re(e) {
  const [t, n] = e.pattern.split('/*', 2),
    s = t.split('/').filter(Boolean);
  return s.reduce((r, a) => r + (a.startsWith(':') ? 2 : 3), s.length - (n === void 0 ? 0 : 1));
}
function G(e) {
  const t = new Map(),
    n = ce();
  return new Proxy(
    {},
    {
      get(s, r) {
        return (
          t.has(r) ||
            T(n, () =>
              t.set(
                r,
                v(() => e()[r]),
              ),
            ),
          t.get(r)()
        );
      },
      getOwnPropertyDescriptor() {
        return { enumerable: !0, configurable: !0 };
      },
      ownKeys() {
        return Reflect.ownKeys(e());
      },
    },
  );
}
function xe(e, t) {
  const n = new URLSearchParams(e);
  Object.entries(t).forEach(([r, a]) => {
    a == null || a === '' ? n.delete(r) : n.set(r, String(a));
  });
  const s = n.toString();
  return s ? `?${s}` : '';
}
function Y(e) {
  let t = /(\/?:[^/]+)\?/.exec(e);
  if (!t) {
    return [e];
  }
  let n = e.slice(0, t.index),
    s = e.slice(t.index + t[0].length);
  const r = [n, (n += t[1])];
  while ((t = /^(\/:[^/]+)\?/.exec(s))) {
    r.push((n += t[1])), (s = s.slice(t[0].length));
  }
  return Y(s).reduce((a, o) => [...a, ...r.map((i) => i + o)], []);
}
const be = 100,
  Se = J(),
  Z = J(),
  E = () => ve(M(Se), "<A> and 'use' router primitives can be only used inside a Route."),
  Ee = () => M(Z) || E().base,
  qe = (e) => {
    const t = Ee();
    return v(() => t.resolvePath(e()));
  },
  Ue = (e) => {
    const t = E();
    return v(() => {
      const n = e();
      return n !== void 0 ? t.renderPath(n) : n;
    });
  },
  Ce = () => E().navigatorFactory(),
  Ae = () => E().location,
  De = () => E().params,
  Me = () => {
    const e = Ae(),
      t = Ce(),
      n = (s, r) => {
        const a = H(() => xe(e.search, s) + e.hash);
        t(a, { scroll: !1, resolve: !1, ...r });
      };
    return [e.query, n];
  };
function Oe(e, t = '') {
  const { component: n, preload: s, load: r, children: a, info: o } = e,
    i = !a || (Array.isArray(a) && !a.length),
    u = { key: e, component: n, preload: s || r, info: o };
  return ee(e.path).reduce((f, h) => {
    for (const y of Y(h)) {
      const p = we(t, y);
      let d = i ? p : p.split('/*', 1)[0];
      (d = d
        .split('/')
        .map((m) => (m.startsWith(':') || m.startsWith('*') ? m : encodeURIComponent(m)))
        .join('/')),
        f.push({ ...u, originalPath: h, pattern: d, matcher: Pe(d, !i, e.matchFilters) });
    }
    return f;
  }, []);
}
function Fe(e, t = 0) {
  return {
    routes: e,
    score: Re(e[e.length - 1]) * 1e4 - t,
    matcher(n) {
      const s = [];
      for (let r = e.length - 1; r >= 0; r--) {
        const a = e[r],
          o = a.matcher(n);
        if (!o) {
          return null;
        }
        s.unshift({ ...o, route: a });
      }
      return s;
    },
  };
}
function ee(e) {
  return Array.isArray(e) ? e : [e];
}
function Le(e, t = '', n = [], s = []) {
  const r = ee(e);
  for (let a = 0, o = r.length; a < o; a++) {
    const i = r[a];
    if (i && typeof i == 'object') {
      i.hasOwnProperty('path') || (i.path = '');
      const u = Oe(i, t);
      for (const f of u) {
        n.push(f);
        const h = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !h) {
          Le(i.children, f.pattern, n, s);
        } else {
          const y = Fe([...n], s.length);
          s.push(y);
        }
        n.pop();
      }
    }
  }
  return n.length ? s : s.sort((a, o) => o.score - a.score);
}
function U(e, t) {
  for (let n = 0, s = e.length; n < s; n++) {
    const r = e[n].matcher(t);
    if (r) {
      return r;
    }
  }
  return [];
}
function je(e, t) {
  const n = new URL(ye),
    s = v(
      (u) => {
        const f = e();
        try {
          return new URL(f, n);
        } catch {
          return console.error(`Invalid path ${f}`), u;
        }
      },
      n,
      { equals: (u, f) => u.href === f.href },
    ),
    r = v(() => s().pathname),
    a = v(() => s().search, !0),
    o = v(() => s().hash),
    i = () => '';
  return {
    get pathname() {
      return r();
    },
    get search() {
      return a();
    },
    get hash() {
      return o();
    },
    get state() {
      return t();
    },
    get key() {
      return i();
    },
    query: G(Q(a, () => X(s()))),
  };
}
let P;
function ke() {
  return P;
}
let x = !1;
function We() {
  return x;
}
function Ke(e) {
  x = e;
}
function ze(e, t, n, s = {}) {
  const {
      signal: [r, a],
      utils: o = {},
    } = e,
    i = o.parsePath || ((c) => c),
    u = o.renderPath || ((c) => c),
    f = o.beforeLeave || pe(),
    h = B('', s.base || '');
  if (h === void 0) {
    throw new Error(`${h} is not a valid base path`);
  }
  h && !r().value && a({ value: h, replace: !0, scroll: !1 });
  const [y, p] = j(!1);
  let d;
  const m = (c, l) => {
      (l.value === w() && l.state === A()) ||
        (d === void 0 && p(!0),
        (P = c),
        (d = l),
        le(() => {
          d === l && (C(d.value), te(d.state), ue(), k[1]([]));
        }).finally(() => {
          d === l &&
            fe(() => {
              (P = void 0), c === 'navigate' && ae(d), p(!1), (d = void 0);
            });
        }));
    },
    [w, C] = j(r().value),
    [A, te] = j(r().state),
    _ = je(w, A),
    O = [],
    k = j([]),
    W = v(() => (typeof s.transformUrl == 'function' ? U(t(), s.transformUrl(_.pathname)) : U(t(), _.pathname))),
    ne = G(() => {
      const c = W(),
        l = {};
      for (let g = 0; g < c.length; g++) {
        Object.assign(l, c[g].params);
      }
      return l;
    }),
    K = {
      pattern: h,
      path: () => h,
      outlet: () => null,
      resolvePath(c) {
        return B(h, c);
      },
    };
  return (
    ie(Q(r, (c) => m('native', c), { defer: !0 })),
    {
      base: K,
      location: _,
      params: ne,
      isRouting: y,
      renderPath: u,
      parsePath: i,
      navigatorFactory: se,
      matches: W,
      beforeLeave: f,
      preloadRoute: oe,
      singleFlight: s.singleFlight === void 0 ? !0 : s.singleFlight,
      submissions: k,
    }
  );
  function re(c, l, g) {
    H(() => {
      if (typeof l == 'number') {
        l && (o.go ? o.go(l) : console.warn('Router integration does not support relative routing'));
        return;
      }
      const F = !l || l[0] === '?',
        { replace: I, resolve: R, scroll: $, state: b } = { replace: !1, resolve: !F, scroll: !0, ...g };
      let z;
      const L = R ? c.resolvePath(l) : B((F && (z = r().value) && z.split('?')[0]) || '', l);
      if (L === void 0) {
        throw new Error(`Path '${l}' is not a routable path`);
      }
      if (O.length >= be) {
        throw new Error('Too many redirects');
      }
      const N = w();
      (L !== N || b !== A()) &&
        (he ||
          (f.confirm(L, g) &&
            (O.push({ value: N, replace: I, scroll: $, state: A() }), m('navigate', { value: L, state: b }))));
    });
  }
  function se(c) {
    return (c = c || M(Z) || K), (l, g) => re(c, l, g);
  }
  function ae(c) {
    const l = O[0];
    l && (a({ ...c, replace: l.replace, scroll: l.scroll }), (O.length = 0));
  }
  function oe(c, l = {}) {
    const g = U(t(), c.pathname),
      F = P;
    P = 'preload';
    for (const I in g) {
      const { route: R, params: $ } = g[I];
      R.component && R.component.preload && R.component.preload();
      const { preload: b } = R;
      (x = !0),
        l.preloadData &&
          b &&
          T(n(), () =>
            b({
              params: $,
              location: { pathname: c.pathname, search: c.search, hash: c.hash, query: X(c), state: null, key: '' },
              intent: 'preload',
            }),
          ),
        (x = !1);
    }
    P = F;
  }
}
function Ne(e, t, n, s) {
  const { base: r, location: a, params: o } = e,
    { pattern: i, component: u, preload: f } = s().route,
    h = v(() => s().path);
  u && u.preload && u.preload(), (x = !0);
  const y = f ? f({ params: o, location: a, intent: P || 'initial' }) : void 0;
  return (
    (x = !1),
    {
      parent: t,
      pattern: i,
      path: h,
      outlet: () =>
        u
          ? de(u, {
              params: o,
              location: a,
              data: y,
              get children() {
                return n();
              },
            })
          : n(),
      resolvePath(d) {
        return B(r.path(), d, h());
      },
    }
  );
}
export {
  Se as R,
  ze as a,
  Ne as b,
  Le as c,
  Z as d,
  V as e,
  pe as f,
  ke as g,
  E as h,
  qe as i,
  Ue as j,
  Ie as k,
  S as l,
  ye as m,
  $e as n,
  De as o,
  Me as p,
  Ce as q,
  We as r,
  Ke as s,
  Ae as u,
};
