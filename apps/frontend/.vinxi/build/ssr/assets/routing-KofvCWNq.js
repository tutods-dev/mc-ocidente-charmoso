import {
  runWithOwner as G,
  createContext as J,
  untrack as Q,
  on as V,
  createSignal as _,
  startTransition as de,
  getOwner as fe,
  createComponent as ge,
  createRenderEffect as he,
  useContext as k,
  batch as me,
  resetErrorBoundaries as pe,
  createMemo as v,
} from 'solid-js';
import { getRequestEvent as X, isServer as q } from 'solid-js/web';
function ye() {
  const e = new Set();
  function t(r) {
    return e.add(r), () => e.delete(r);
  }
  let n = !1;
  function s(r, o) {
    if (n) {
      return !(n = !1);
    }
    const c = { to: r, options: o, defaultPrevented: !1, preventDefault: () => (c.defaultPrevented = !0) };
    for (const i of e) {
      i.listener({
        ...c,
        from: i.location,
        retry: (l) => {
          l && (n = !0), i.navigate(r, { ...o, resolve: !1 });
        },
      });
    }
    return !c.defaultPrevented;
  }
  return { subscribe: t, confirm: s };
}
let U;
function Y() {
  (!window.history.state || window.history.state._depth == null) &&
    window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ''),
    (U = window.history.state._depth);
}
q || Y();
function De(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function Me(e, t) {
  let n = !1;
  return () => {
    const s = U;
    Y();
    const r = s == null ? null : U - s;
    if (n) {
      n = !1;
      return;
    }
    r && t(r) ? ((n = !0), window.history.go(-r)) : e();
  };
}
const ve = /^(?:[a-z0-9]+:)?\/\//i,
  we = /^\/+|(\/)\/+$/g,
  Pe = 'http://sr';
function E(e, t = !1) {
  const n = e.replace(we, '$1');
  return n ? (t || /^[?#]/.test(n) ? n : '/' + n) : '';
}
function I(e, t, n) {
  if (ve.test(t)) {
    return;
  }
  const s = E(e),
    r = n && E(n);
  let o = '';
  return (
    !r || t.startsWith('/') ? (o = s) : r.toLowerCase().indexOf(s.toLowerCase()) !== 0 ? (o = s + r) : (o = r),
    (o || '/') + E(t, !o)
  );
}
function Re(e, t) {
  if (e == null) {
    throw new Error(t);
  }
  return e;
}
function be(e, t) {
  return E(e).replace(/\/*(\*.*)?$/g, '') + E(t);
}
function Z(e) {
  const t = {};
  return (
    e.searchParams.forEach((n, s) => {
      t[s] = n;
    }),
    t
  );
}
function xe(e, t, n) {
  const [s, r] = e.split('/*', 2),
    o = s.split('/').filter(Boolean),
    c = o.length;
  return (i) => {
    const l = i.split('/').filter(Boolean),
      f = l.length - c;
    if (f < 0 || (f > 0 && r === void 0 && !t)) {
      return null;
    }
    const h = { path: c ? '' : '/', params: {} },
      y = (p) => (n === void 0 ? void 0 : n[p]);
    for (let p = 0; p < c; p++) {
      const d = o[p],
        m = l[p],
        w = d[0] === ':',
        A = w ? d.slice(1) : d;
      if (w && D(m, y(A))) {
        h.params[A] = m;
      } else if (w || !D(m, d)) {
        return null;
      }
      h.path += `/${m}`;
    }
    if (r) {
      const p = f ? l.slice(-f).join('/') : '';
      if (D(p, y(r))) {
        h.params[r] = p;
      } else {
        return null;
      }
    }
    return h;
  };
}
function D(e, t) {
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
function Se(e) {
  const [t, n] = e.pattern.split('/*', 2),
    s = t.split('/').filter(Boolean);
  return s.reduce((r, o) => r + (o.startsWith(':') ? 2 : 3), s.length - (n === void 0 ? 0 : 1));
}
function ee(e) {
  const t = new Map(),
    n = fe();
  return new Proxy(
    {},
    {
      get(s, r) {
        return (
          t.has(r) ||
            G(n, () =>
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
function Ee(e, t) {
  const n = new URLSearchParams(e);
  Object.entries(t).forEach(([r, o]) => {
    o == null || o === '' ? n.delete(r) : n.set(r, String(o));
  });
  const s = n.toString();
  return s ? `?${s}` : '';
}
function te(e) {
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
  return te(s).reduce((o, c) => [...o, ...r.map((i) => i + c)], []);
}
const Ce = 100,
  Ae = J(),
  ne = J(),
  C = () => Re(k(Ae), "<A> and 'use' router primitives can be only used inside a Route."),
  Fe = () => k(ne) || C().base,
  Ue = (e) => {
    const t = Fe();
    return v(() => t.resolvePath(e()));
  },
  ke = (e) => {
    const t = C();
    return v(() => {
      const n = e();
      return n !== void 0 ? t.renderPath(n) : n;
    });
  },
  Le = () => C().navigatorFactory(),
  Oe = () => C().location,
  We = () => C().params,
  ze = () => {
    const e = Oe(),
      t = Le(),
      n = (s, r) => {
        const o = Q(() => Ee(e.search, s) + e.hash);
        t(o, { scroll: !1, resolve: !1, ...r });
      };
    return [e.query, n];
  };
function je(e, t = '') {
  const { component: n, preload: s, load: r, children: o, info: c } = e,
    i = !o || (Array.isArray(o) && !o.length),
    l = { key: e, component: n, preload: s || r, info: c };
  return re(e.path).reduce((f, h) => {
    for (const y of te(h)) {
      const p = be(t, y);
      let d = i ? p : p.split('/*', 1)[0];
      (d = d
        .split('/')
        .map((m) => (m.startsWith(':') || m.startsWith('*') ? m : encodeURIComponent(m)))
        .join('/')),
        f.push({ ...l, originalPath: h, pattern: d, matcher: xe(d, !i, e.matchFilters) });
    }
    return f;
  }, []);
}
function Be(e, t = 0) {
  return {
    routes: e,
    score: Se(e[e.length - 1]) * 1e4 - t,
    matcher(n) {
      const s = [];
      for (let r = e.length - 1; r >= 0; r--) {
        const o = e[r],
          c = o.matcher(n);
        if (!c) {
          return null;
        }
        s.unshift({ ...c, route: o });
      }
      return s;
    },
  };
}
function re(e) {
  return Array.isArray(e) ? e : [e];
}
function _e(e, t = '', n = [], s = []) {
  const r = re(e);
  for (let o = 0, c = r.length; o < c; o++) {
    const i = r[o];
    if (i && typeof i == 'object') {
      i.hasOwnProperty('path') || (i.path = '');
      const l = je(i, t);
      for (const f of l) {
        n.push(f);
        const h = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !h) {
          _e(i.children, f.pattern, n, s);
        } else {
          const y = Be([...n], s.length);
          s.push(y);
        }
        n.pop();
      }
    }
  }
  return n.length ? s : s.sort((o, c) => c.score - o.score);
}
function M(e, t) {
  for (let n = 0, s = e.length; n < s; n++) {
    const r = e[n].matcher(t);
    if (r) {
      return r;
    }
  }
  return [];
}
function qe(e, t) {
  const n = new URL(Pe),
    s = v(
      (l) => {
        const f = e();
        try {
          return new URL(f, n);
        } catch {
          return console.error(`Invalid path ${f}`), l;
        }
      },
      n,
      { equals: (l, f) => l.href === f.href },
    ),
    r = v(() => s().pathname),
    o = v(() => s().search, !0),
    c = v(() => s().hash),
    i = () => '';
  return {
    get pathname() {
      return r();
    },
    get search() {
      return o();
    },
    get hash() {
      return c();
    },
    get state() {
      return t();
    },
    get key() {
      return i();
    },
    query: ee(V(o, () => Z(s()))),
  };
}
let P;
function He() {
  return P;
}
let S = !1;
function Ke() {
  return S;
}
function Ne(e) {
  S = e;
}
function Te(e, t, n, s = {}) {
  const {
      signal: [r, o],
      utils: c = {},
    } = e,
    i = c.parsePath || ((a) => a),
    l = c.renderPath || ((a) => a),
    f = c.beforeLeave || ye(),
    h = I('', s.base || '');
  if (h === void 0) {
    throw new Error(`${h} is not a valid base path`);
  }
  h && !r().value && o({ value: h, replace: !0, scroll: !1 });
  const [y, p] = _(!1);
  let d;
  const m = (a, u) => {
      (u.value === w() && u.state === F()) ||
        (d === void 0 && p(!0),
        (P = a),
        (d = u),
        de(() => {
          d === u && (A(d.value), se(d.state), pe(), q || W[1]([]));
        }).finally(() => {
          d === u &&
            me(() => {
              (P = void 0), a === 'navigate' && ie(d), p(!1), (d = void 0);
            });
        }));
    },
    [w, A] = _(r().value),
    [F, se] = _(r().state),
    $ = qe(w, F),
    L = [],
    W = _(q ? le() : []),
    z = v(() => (typeof s.transformUrl == 'function' ? M(t(), s.transformUrl($.pathname)) : M(t(), $.pathname))),
    oe = ee(() => {
      const a = z(),
        u = {};
      for (let g = 0; g < a.length; g++) {
        Object.assign(u, a[g].params);
      }
      return u;
    }),
    H = {
      pattern: h,
      path: () => h,
      outlet: () => null,
      resolvePath(a) {
        return I(h, a);
      },
    };
  return (
    he(V(r, (a) => m('native', a), { defer: !0 })),
    {
      base: H,
      location: $,
      params: oe,
      isRouting: y,
      renderPath: l,
      parsePath: i,
      navigatorFactory: ce,
      matches: z,
      beforeLeave: f,
      preloadRoute: ue,
      singleFlight: s.singleFlight === void 0 ? !0 : s.singleFlight,
      submissions: W,
    }
  );
  function ae(a, u, g) {
    Q(() => {
      if (typeof u == 'number') {
        u && (c.go ? c.go(u) : console.warn('Router integration does not support relative routing'));
        return;
      }
      const O = !u || u[0] === '?',
        { replace: j, resolve: R, scroll: B, state: b } = { replace: !1, resolve: !O, scroll: !0, ...g };
      let K;
      const x = R ? a.resolvePath(u) : I((O && (K = r().value) && K.split('?')[0]) || '', u);
      if (x === void 0) {
        throw new Error(`Path '${u}' is not a routable path`);
      }
      if (L.length >= Ce) {
        throw new Error('Too many redirects');
      }
      const N = w();
      if (x !== N || b !== F()) {
        if (q) {
          const T = X();
          T && (T.response = { status: 302, headers: new Headers({ Location: x }) }),
            o({ value: x, replace: j, scroll: B, state: b });
        } else {
          f.confirm(x, g) &&
            (L.push({ value: N, replace: j, scroll: B, state: F() }), m('navigate', { value: x, state: b }));
        }
      }
    });
  }
  function ce(a) {
    return (a = a || k(ne) || H), (u, g) => ae(a, u, g);
  }
  function ie(a) {
    const u = L[0];
    u && (o({ ...a, replace: u.replace, scroll: u.scroll }), (L.length = 0));
  }
  function ue(a, u = {}) {
    const g = M(t(), a.pathname),
      O = P;
    P = 'preload';
    for (const j in g) {
      const { route: R, params: B } = g[j];
      R.component && R.component.preload && R.component.preload();
      const { preload: b } = R;
      (S = !0),
        u.preloadData &&
          b &&
          G(n(), () =>
            b({
              params: B,
              location: { pathname: a.pathname, search: a.search, hash: a.hash, query: Z(a), state: null, key: '' },
              intent: 'preload',
            }),
          ),
        (S = !1);
    }
    P = O;
  }
  function le() {
    const a = X();
    return a && a.router && a.router.submission ? [a.router.submission] : [];
  }
}
function Xe(e, t, n, s) {
  const { base: r, location: o, params: c } = e,
    { pattern: i, component: l, preload: f } = s().route,
    h = v(() => s().path);
  l && l.preload && l.preload(), (S = !0);
  const y = f ? f({ params: c, location: o, intent: P || 'initial' }) : void 0;
  return (
    (S = !1),
    {
      parent: t,
      pattern: i,
      path: h,
      outlet: () =>
        l
          ? ge(l, {
              params: c,
              location: o,
              data: y,
              get children() {
                return n();
              },
            })
          : n(),
      resolvePath(d) {
        return I(r.path(), d, h());
      },
    }
  );
}
export {
  Ae as R,
  Te as a,
  Xe as b,
  _e as c,
  ne as d,
  He as e,
  Y as f,
  M as g,
  ye as h,
  C as i,
  Ue as j,
  De as k,
  ke as l,
  Pe as m,
  Me as n,
  E as o,
  We as p,
  ze as q,
  Le as r,
  Ne as s,
  Ke as t,
  Oe as u,
};
