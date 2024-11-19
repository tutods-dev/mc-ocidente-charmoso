const __viteMapDeps = (
  i,
  m = __viteMapDeps,
  d = m.f ||
    (m.f = [
      'assets/_...404_-DvBTMdu5.js',
      'assets/web-Cw_Dym33.js',
      'assets/components-BT2slyNk.js',
      'assets/routing-VhRhlrWH.js',
      'assets/about-C3TBm2tE.js',
      'assets/contactos-CtWc_Nx6.js',
      'assets/styles-CtYowtZs.js',
      'assets/index-Cf71NSVw.js',
      'assets/action-BKws-HQi.js',
      'assets/utils-dZO239yP.js',
      'assets/index-1Hxyzcqf.js',
      'assets/sobre-nos-pG7yVOlw.js',
      'assets/_slug_-I_KSXykn.js',
      'assets/images-aBJc1Pbn.js',
      'assets/preload-helper-DYd7aIoe.js',
      'assets/index-D0OGMJsU.js',
    ]),
) => i.map((i) => d[i]);
import { a as Xe } from './action-BKws-HQi.js';
import { M as Be, h as Ke, b as Ze, a as qe } from './index-Cf71NSVw.js';
import { _ as S } from './preload-helper-DYd7aIoe.js';
import {
  u as B,
  c as De,
  d as Fe,
  n as He,
  R as Ie,
  g as Me,
  a as Oe,
  s as Q,
  m as Ue,
  e as Ve,
  k as We,
  b as je,
  f as ze,
} from './routing-VhRhlrWH.js';
import {
  i as Ce,
  f as D,
  a as G,
  c as J,
  d as Le,
  e as Ne,
  B as Pe,
  t as Re,
  g as Te,
  b as Y,
} from './styles-CtYowtZs.js';
import {
  i as $,
  n as $e,
  s as A,
  E as Ae,
  k as E,
  x as Ee,
  f as H,
  j as L,
  p as N,
  g as O,
  r as P,
  B as Se,
  m as T,
  u as U,
  d as V,
  S as W,
  M as X,
  l as _e,
  q as ae,
  o as be,
  w as ce,
  b as f,
  y as j,
  D as ke,
  F as le,
  z as ue,
  c as ve,
  a as w,
  h as we,
  A as x,
  C as xe,
  t as y,
  v as ye,
  e as z,
} from './web-Cw_Dym33.js';
const I = 'Invariant Violation',
  { setPrototypeOf: Ge = (e, t) => ((e.__proto__ = t), e) } = Object;
class q extends Error {
  framesToPop = 1;
  name = I;
  constructor(t = I) {
    super(typeof t == 'number' ? `${I}: ${t} (see https://github.com/apollographql/invariant-packages)` : t),
      Ge(this, q.prototype);
  }
}
function M(e, t) {
  if (!e) {
    throw new q(t);
  }
}
const Ye = /^[A-Za-z]:\//;
function Je(e = '') {
  return e && e.replace(/\\/g, '/').replace(Ye, (t) => t.toUpperCase());
}
const Qe = /^[/\\]{2}/,
  et = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/,
  tt = /^[A-Za-z]:$/,
  rt = (e) => {
    if (e.length === 0) {
      return '.';
    }
    e = Je(e);
    const t = e.match(Qe),
      r = F(e),
      n = e[e.length - 1] === '/';
    return (
      (e = nt(e, !r)),
      e.length === 0
        ? r
          ? '/'
          : n
            ? './'
            : '.'
        : (n && (e += '/'), tt.test(e) && (e += '/'), t ? (r ? `//${e}` : `//./${e}`) : r && !F(e) ? `/${e}` : e)
    );
  },
  de = (...e) => {
    if (e.length === 0) {
      return '.';
    }
    let t;
    for (const r of e) {
      r && r.length > 0 && (t === void 0 ? (t = r) : (t += `/${r}`));
    }
    return t === void 0 ? '.' : rt(t.replace(/\/\/+/g, '/'));
  };
function nt(e, t) {
  let r = '',
    n = 0,
    o = -1,
    i = 0,
    a = null;
  for (let s = 0; s <= e.length; ++s) {
    if (s < e.length) {
      a = e[s];
    } else {
      if (a === '/') {
        break;
      }
      a = '/';
    }
    if (a === '/') {
      if (!(o === s - 1 || i === 1)) {
        if (i === 2) {
          if (r.length < 2 || n !== 2 || r[r.length - 1] !== '.' || r[r.length - 2] !== '.') {
            if (r.length > 2) {
              const l = r.lastIndexOf('/');
              l === -1 ? ((r = ''), (n = 0)) : ((r = r.slice(0, l)), (n = r.length - 1 - r.lastIndexOf('/'))),
                (o = s),
                (i = 0);
              continue;
            } else if (r.length > 0) {
              (r = ''), (n = 0), (o = s), (i = 0);
              continue;
            }
          }
          t && ((r += r.length > 0 ? '/..' : '..'), (n = 2));
        } else {
          r.length > 0 ? (r += `/${e.slice(o + 1, s)}`) : (r = e.slice(o + 1, s)), (n = s - o - 1);
        }
      }
      (o = s), (i = 0);
    } else {
      a === '.' && i !== -1 ? ++i : (i = -1);
    }
  }
  return r;
}
const F = (e) => et.test(e);
function ot(e) {
  return `virtual:${e}`;
}
function st(e) {
  return e.handler?.endsWith('.html') ? (F(e.handler) ? e.handler : de(e.root, e.handler)) : `$vinxi/handler/${e.name}`;
}
const it = new Proxy(
  {},
  {
    get(e, t) {
      return (
        M(typeof t == 'string', 'Bundler name should be a string'),
        {
          name: t,
          type: 'client',
          handler: ot(st({ name: t })),
          baseURL: '/_build',
          chunks: new Proxy(
            {},
            {
              get(r, n) {
                M(typeof n == 'string', 'Chunk expected');
                const o = de('/_build', n + '.mjs');
                return {
                  import() {
                    return import(o);
                  },
                  output: { path: o },
                };
              },
            },
          ),
          inputs: new Proxy(
            {},
            {
              get(r, n) {
                M(typeof n == 'string', 'Input must be string');
                const o = window.manifest[n].output;
                return {
                  async import() {
                    return import(o);
                  },
                  async assets() {
                    return window.manifest[n].assets;
                  },
                  output: { path: o },
                };
              },
            },
          ),
        }
      );
    },
  },
);
globalThis.MANIFEST = it;
const at = (e) => (t) => {
  const { base: r } = t,
    n = ve(() => t.children),
    o = w(() => De(n(), t.base || ''));
  let i;
  const a = Oe(e, o, () => i, { base: r, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return (
    e.create && e.create(a),
    f(Ie.Provider, {
      value: a,
      get children() {
        return f(ct, {
          routerState: a,
          get root() {
            return t.root;
          },
          get preload() {
            return t.rootPreload || t.rootLoad;
          },
          get children() {
            return [
              w(() => (i = O()) && null),
              f(lt, {
                routerState: a,
                get branches() {
                  return o();
                },
              }),
            ];
          },
        });
      },
    })
  );
};
function ct(e) {
  const t = e.routerState.location,
    r = e.routerState.params,
    n = w(
      () =>
        e.preload &&
        U(() => {
          Q(!0), e.preload({ params: r, location: t, intent: Me() || 'initial' }), Q(!1);
        }),
    );
  return f(W, {
    get when() {
      return e.root;
    },
    keyed: !0,
    get fallback() {
      return e.children;
    },
    children: (o) =>
      f(o, {
        params: r,
        location: t,
        get data() {
          return n();
        },
        get children() {
          return e.children;
        },
      }),
  });
}
function lt(e) {
  const t = [];
  let r;
  const n = w(
    be(e.routerState.matches, (o, i, a) => {
      let s = i && o.length === i.length;
      const l = [];
      for (let c = 0, p = o.length; c < p; c++) {
        const g = i && i[c],
          v = o[c];
        a && g && v.route.key === g.route.key
          ? (l[c] = a[c])
          : ((s = !1),
            t[c] && t[c](),
            V((b) => {
              (t[c] = b),
                (l[c] = je(
                  e.routerState,
                  l[c - 1] || e.routerState.base,
                  ee(() => n()[c + 1]),
                  () => e.routerState.matches()[c],
                ));
            }));
      }
      return t.splice(o.length).forEach((c) => c()), a && s ? a : ((r = l[0]), l);
    }),
  );
  return ee(() => n() && r)();
}
const ee = (e) => () =>
  f(W, {
    get when() {
      return e();
    },
    keyed: !0,
    children: (t) =>
      f(Fe.Provider, {
        value: t,
        get children() {
          return t.outlet();
        },
      }),
  });
function ut([e, t], r, n) {
  return [e, n ? (o) => t(n(o)) : t];
}
function dt(e) {
  if (e === '#') {
    return null;
  }
  try {
    return document.querySelector(e);
  } catch {
    return null;
  }
}
function ft(e) {
  let t = !1;
  const r = (o) => (typeof o == 'string' ? { value: o } : o),
    n = ut(
      z(r(e.get()), { equals: (o, i) => o.value === i.value && o.state === i.state }),
      void 0,
      (o) => (!t && e.set(o), A.registry && !A.done && (A.done = !0), o),
    );
  return (
    e.init &&
      H(
        e.init((o = e.get()) => {
          (t = !0), n[1](r(o)), (t = !1);
        }),
      ),
    at({ signal: n, create: e.create, utils: e.utils })
  );
}
function ht(e, t, r) {
  return e.addEventListener(t, r), () => e.removeEventListener(t, r);
}
function pt(e, t) {
  const r = dt(`#${e}`);
  r ? r.scrollIntoView() : t && window.scrollTo(0, 0);
}
function mt(e = !0, t = !1, r = '/_server', n) {
  return (o) => {
    const i = o.base.path(),
      a = o.navigatorFactory(o.base);
    const s = {};
    function l(u) {
      return u.namespaceURI === 'http://www.w3.org/2000/svg';
    }
    function c(u) {
      if (u.defaultPrevented || u.button !== 0 || u.metaKey || u.altKey || u.ctrlKey || u.shiftKey) {
        return;
      }
      const d = u.composedPath().find((Z) => Z instanceof Node && Z.nodeName.toUpperCase() === 'A');
      if (!d || (t && !d.hasAttribute('link'))) {
        return;
      }
      const m = l(d),
        h = m ? d.href.baseVal : d.href;
      if ((m ? d.target.baseVal : d.target) || (!h && !d.hasAttribute('state'))) {
        return;
      }
      const R = (d.getAttribute('rel') || '').split(/\s+/);
      if (d.hasAttribute('download') || (R && R.includes('external'))) {
        return;
      }
      const C = m ? new URL(h, document.baseURI) : new URL(h);
      if (
        !(
          C.origin !== window.location.origin ||
          (i && C.pathname && !C.pathname.toLowerCase().startsWith(i.toLowerCase()))
        )
      ) {
        return [d, C];
      }
    }
    function p(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [m, h] = d,
        K = o.parsePath(h.pathname + h.search + h.hash),
        R = m.getAttribute('state');
      u.preventDefault(),
        a(K, {
          resolve: !1,
          replace: m.hasAttribute('replace'),
          scroll: !m.hasAttribute('noscroll'),
          state: R && JSON.parse(R),
        });
    }
    function g(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [m, h] = d;
      typeof n == 'function' && (h.pathname = n(h.pathname)),
        s[h.pathname] || o.preloadRoute(h, { preloadData: m.getAttribute('preload') !== 'false' });
    }
    function v(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [m, h] = d;
      typeof n == 'function' && (h.pathname = n(h.pathname)),
        !s[h.pathname] &&
          (s[h.pathname] = setTimeout(() => {
            o.preloadRoute(h, { preloadData: m.getAttribute('preload') !== 'false' }), delete s[h.pathname];
          }, 200));
    }
    function b(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [, m] = d;
      typeof n == 'function' && (m.pathname = n(m.pathname)),
        s[m.pathname] && (clearTimeout(s[m.pathname]), delete s[m.pathname]);
    }
    function _(u) {
      if (u.defaultPrevented) {
        return;
      }
      let d =
        u.submitter && u.submitter.hasAttribute('formaction')
          ? u.submitter.getAttribute('formaction')
          : u.target.getAttribute('action');
      if (!d) {
        return;
      }
      if (!d.startsWith('https://action/')) {
        const h = new URL(d, Ue);
        if (((d = o.parsePath(h.pathname + h.search)), !d.startsWith(r))) {
          return;
        }
      }
      if (u.target.method.toUpperCase() !== 'POST') {
        throw new Error('Only POST forms are supported for Actions');
      }
      const m = Xe.get(d);
      if (m) {
        u.preventDefault();
        const h = new FormData(u.target, u.submitter);
        m.call({ r: o, f: u.target }, u.target.enctype === 'multipart/form-data' ? h : new URLSearchParams(h));
      }
    }
    we(['click', 'submit']),
      document.addEventListener('click', p),
      e &&
        (document.addEventListener('mouseover', v),
        document.addEventListener('mouseout', b),
        document.addEventListener('focusin', g),
        document.addEventListener('touchstart', g)),
      document.addEventListener('submit', _),
      H(() => {
        document.removeEventListener('click', p),
          e &&
            (document.removeEventListener('mouseover', v),
            document.removeEventListener('mouseout', b),
            document.removeEventListener('focusin', g),
            document.removeEventListener('touchstart', g)),
          document.removeEventListener('submit', _);
      });
  };
}
function gt(e) {
  const t = () => ({
      value: window.location.pathname.replace(/^\/+/, '/') + window.location.search + window.location.hash,
      state: window.history.state,
    }),
    r = ze();
  return ft({
    get: t,
    set({ value: n, replace: o, scroll: i, state: a }) {
      o ? window.history.replaceState(We(a), '', n) : window.history.pushState(a, '', n),
        pt(decodeURIComponent(window.location.hash.slice(1)), i),
        Ve();
    },
    init: (n) =>
      ht(
        window,
        'popstate',
        He(n, (o) => {
          if (o && o < 0) {
            return !r.confirm(o);
          }
          {
            const i = t();
            return !r.confirm(i.value, { state: i.state });
          }
        }),
      ),
    create: mt(e.preload, e.explicitLinks, e.actionBase, e.transformUrl),
    utils: { go: (n) => window.history.go(n), beforeLeave: r },
  })(e);
}
function vt(e) {
  e.forEach((t) => {
    if (!t.attrs.href) {
      return;
    }
    let r = document.head.querySelector(`link[href="${t.attrs.href}"]`);
    r ||
      ((r = document.createElement('link')),
      r.setAttribute('rel', 'preload'),
      r.setAttribute('as', 'style'),
      r.setAttribute('href', t.attrs.href),
      document.head.appendChild(r));
  });
}
var bt = y('<style>'),
  wt = y('<link>'),
  _t = y('<script> '),
  $t = y('<noscript>');
const yt = {
  style: (e) =>
    (() => {
      var t = $(bt);
      return (
        L(
          t,
          T(() => e.attrs),
          !1,
          !0,
        ),
        E(t, () => e.children),
        P(),
        t
      );
    })(),
  link: (e) =>
    (() => {
      var t = $(wt);
      return (
        L(
          t,
          T(() => e.attrs),
          !1,
          !1,
        ),
        P(),
        t
      );
    })(),
  script: (e) =>
    e.attrs.src
      ? (() => {
          var t = $(_t);
          return (
            L(
              t,
              T(() => e.attrs, {
                get id() {
                  return e.key;
                },
              }),
              !1,
              !0,
            ),
            P(),
            t
          );
        })()
      : null,
  noscript: (e) =>
    (() => {
      var t = $($t);
      return (
        L(
          t,
          T(() => e.attrs),
          !1,
          !0,
        ),
        P(),
        t
      );
    })(),
};
function Et(e, t) {
  const {
    tag: r,
    attrs: { key: n, ...o } = { key: void 0 },
    children: i,
  } = e;
  return yt[r]({ attrs: { ...o, nonce: t }, key: n, children: i });
}
function St(e, t, r, n = 'default') {
  return _e(async () => {
    {
      const i = (await e.import())[n],
        s = (await t.inputs?.[e.src].assets()).filter((c) => c.tag === 'style' || c.attrs.rel === 'stylesheet');
      return typeof window < 'u' && vt(s), { default: (c) => [...s.map((p) => Et(p)), f(i, c)] };
    }
  });
}
const k = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function xt(e = {}) {
  const t = { options: e, rootNode: fe(), staticRoutesMap: {} },
    r = (n) => (e.strictTrailingSlash ? n : n.replace(/\/$/, '') || '/');
  if (e.routes) {
    for (const n in e.routes) {
      te(t, r(n), e.routes[n]);
    }
  }
  return { ctx: t, lookup: (n) => At(t, r(n)), insert: (n, o) => te(t, r(n), o), remove: (n) => kt(t, r(n)) };
}
function At(e, t) {
  const r = e.staticRoutesMap[t];
  if (r) {
    return r.data;
  }
  const n = t.split('/'),
    o = {};
  let i = !1,
    a = null,
    s = e.rootNode,
    l = null;
  for (let c = 0; c < n.length; c++) {
    const p = n[c];
    s.wildcardChildNode !== null && ((a = s.wildcardChildNode), (l = n.slice(c).join('/')));
    const g = s.children.get(p);
    if (g === void 0) {
      if (s && s.placeholderChildren.length > 1) {
        const v = n.length - c;
        s = s.placeholderChildren.find((b) => b.maxDepth === v) || null;
      } else {
        s = s.placeholderChildren[0] || null;
      }
      if (!s) {
        break;
      }
      s.paramName && (o[s.paramName] = p), (i = !0);
    } else {
      s = g;
    }
  }
  return (
    (s === null || s.data === null) && a !== null && ((s = a), (o[s.paramName || '_'] = l), (i = !0)),
    s ? (i ? { ...s.data, params: i ? o : void 0 } : s.data) : null
  );
}
function te(e, t, r) {
  let n = !0;
  const o = t.split('/');
  let i = e.rootNode,
    a = 0;
  const s = [i];
  for (const l of o) {
    let c;
    if ((c = i.children.get(l))) {
      i = c;
    } else {
      const p = Rt(l);
      (c = fe({ type: p, parent: i })),
        i.children.set(l, c),
        p === k.PLACEHOLDER
          ? ((c.paramName = l === '*' ? `_${a++}` : l.slice(1)), i.placeholderChildren.push(c), (n = !1))
          : p === k.WILDCARD && ((i.wildcardChildNode = c), (c.paramName = l.slice(3) || '_'), (n = !1)),
        s.push(c),
        (i = c);
    }
  }
  for (const [l, c] of s.entries()) {
    c.maxDepth = Math.max(s.length - l, c.maxDepth || 0);
  }
  return (i.data = r), n === !0 && (e.staticRoutesMap[t] = i), i;
}
function kt(e, t) {
  let r = !1;
  const n = t.split('/');
  let o = e.rootNode;
  for (const i of n) {
    if (((o = o.children.get(i)), !o)) {
      return r;
    }
  }
  if (o.data) {
    const i = n.at(-1) || '';
    (o.data = null),
      Object.keys(o.children).length === 0 &&
        o.parent &&
        (o.parent.children.delete(i), (o.parent.wildcardChildNode = null), (o.parent.placeholderChildren = [])),
      (r = !0);
  }
  return r;
}
function fe(e = {}) {
  return {
    type: e.type || k.NORMAL,
    maxDepth: 0,
    parent: e.parent || null,
    children: new Map(),
    data: e.data || null,
    paramName: e.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: [],
  };
}
function Rt(e) {
  return e.startsWith('**') ? k.WILDCARD : e[0] === ':' || e === '*' ? k.PLACEHOLDER : k.NORMAL;
}
const he = [
    {
      page: !0,
      $component: {
        src: 'src/routes/[...404].tsx?pick=default&pick=$css',
        build: () => S(() => import('./_...404_-DvBTMdu5.js'), __viteMapDeps([0, 1, 2, 3])),
        import: () =>
          import(globalThis.MANIFEST.client.inputs['src/routes/[...404].tsx?pick=default&pick=$css'].output.path),
      },
      path: '/*404',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/[...404].tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/about.tsx?pick=default&pick=$css',
        build: () => S(() => import('./about-C3TBm2tE.js'), __viteMapDeps([4, 1])),
        import: () =>
          import(globalThis.MANIFEST.client.inputs['src/routes/about.tsx?pick=default&pick=$css'].output.path),
      },
      path: '/about',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/about.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/contactos.tsx?pick=default&pick=$css',
        build: () => S(() => import('./contactos-CtWc_Nx6.js'), __viteMapDeps([5, 1, 6, 3, 7, 8, 9])),
        import: () =>
          import(globalThis.MANIFEST.client.inputs['src/routes/contactos.tsx?pick=default&pick=$css'].output.path),
      },
      path: '/contactos',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/contactos.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/index.tsx?pick=default&pick=$css',
        build: () => S(() => import('./index-1Hxyzcqf.js'), __viteMapDeps([10, 1, 2, 3])),
        import: () =>
          import(globalThis.MANIFEST.client.inputs['src/routes/index.tsx?pick=default&pick=$css'].output.path),
      },
      path: '/',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/index.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/sobre-nos.tsx?pick=default&pick=$css',
        build: () => S(() => import('./sobre-nos-pG7yVOlw.js'), __viteMapDeps([11, 1])),
        import: () =>
          import(globalThis.MANIFEST.client.inputs['src/routes/sobre-nos.tsx?pick=default&pick=$css'].output.path),
      },
      path: '/sobre-nos',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/sobre-nos.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/projetos/[slug].tsx?pick=default&pick=$css',
        build: () => S(() => import('./_slug_-I_KSXykn.js'), __viteMapDeps([12, 1, 6, 3, 13, 14])),
        import: () =>
          import(
            globalThis.MANIFEST.client.inputs['src/routes/projetos/[slug].tsx?pick=default&pick=$css'].output.path
          ),
      },
      path: '/projetos/:slug',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/[slug].tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/projetos/index.tsx?pick=default&pick=$css',
        build: () => S(() => import('./index-D0OGMJsU.js'), __viteMapDeps([15, 1, 6, 3, 13, 14, 7, 9])),
        import: () =>
          import(globalThis.MANIFEST.client.inputs['src/routes/projetos/index.tsx?pick=default&pick=$css'].output.path),
      },
      path: '/projetos/',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/index.tsx',
    },
  ],
  Ct = Lt(he.filter((e) => e.page));
function Lt(e) {
  function t(r, n, o, i) {
    const a = Object.values(r).find((s) => o.startsWith(s.id + '/'));
    return a
      ? (t(a.children || (a.children = []), n, o.slice(a.id.length)), r)
      : (r.push({ ...n, id: o, path: o.replace(/\/\([^)/]+\)/g, '').replace(/\([^)/]+\)/g, '') }), r);
  }
  return e.sort((r, n) => r.path.length - n.path.length).reduce((r, n) => t(r, n, n.path, n.path), []);
}
function Tt(e) {
  return e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
xt({
  routes: he.reduce((e, t) => {
    if (!Tt(t)) {
      return e;
    }
    const r = t.path
      .replace(/\/\([^)/]+\)/g, '')
      .replace(/\([^)/]+\)/g, '')
      .replace(/\*([^/]*)/g, (n, o) => `**:${o}`);
    if (/:[^/]*\?/g.test(r)) {
      throw new Error(`Optional parameters are not supported in API routes: ${r}`);
    }
    if (e[r]) {
      throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);
    }
    return (e[r] = { route: t }), e;
  }, {}),
});
function Pt() {
  function e(r) {
    return {
      ...r,
      ...(r.$$route ? r.$$route.require().route : void 0),
      info: { ...(r.$$route ? r.$$route.require().route.info : {}), filesystem: !0 },
      component: r.$component && St(r.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr),
      children: r.children ? r.children.map(e) : void 0,
    };
  }
  return Ct.map(e);
}
let re;
const Nt = () => re || (re = Pt());
function pe(e, t, r, n) {
  return e.addEventListener(t, r, n), Re(e.removeEventListener.bind(e, t, r, n));
}
function Dt(e, t, r, n) {
  const o = () => {
    G(Y(e)).forEach((i) => {
      i && G(Y(t)).forEach((a) => pe(i, a, r, n));
    });
  };
  typeof e == 'function' ? $e(o) : N(o);
}
function ne(e) {
  const t = { ...e },
    r = { ...e },
    n = {},
    o = (a) => {
      let s = n[a];
      if (!s) {
        if (!ce()) {
          return t[a];
        }
        (n[a] = s = z(t[a], { internal: !0 })), delete t[a];
      }
      return s[0]();
    };
  for (const a in e) {
    Object.defineProperty(r, a, { get: () => o(a), enumerable: !0 });
  }
  const i = (a, s) => {
    const l = n[a];
    if (l) {
      return l[1](s);
    }
    a in t && (t[a] = J(s, [t[a]]));
  };
  return [
    r,
    (a, s) => {
      if (Ce(a)) {
        const l = U(() => Object.entries(J(a, r)));
        ye(() => {
          for (const [c, p] of l) {
            i(c, () => p);
          }
        });
      } else {
        i(a, s);
      }
      return r;
    },
  ];
}
function Ot(e, t) {
  if (A.context) {
    const [r, n] = ne(e);
    return ae(() => n(t())), [r, n];
  }
  return ne(t());
}
function It(e, t, r) {
  const n = O(),
    o = w(e, t, r),
    i = { ...U(o) },
    a = {};
  for (const s in i) {
    Object.defineProperty(i, s, {
      get() {
        let l = a[s];
        if (!l) {
          if (!ce()) {
            return o()[s];
          }
          Ee(n, () => (a[s] = l = w(() => o()[s])));
        }
        return l();
      },
      enumerable: !0,
    });
  }
  return i;
}
function Mt(e, t = O()) {
  let r = 0,
    n,
    o;
  return () => (
    r++,
    H(() => {
      r--,
        queueMicrotask(() => {
          !r && o && (o(), (o = n = void 0));
        });
    }),
    o || V((i) => (n = e((o = i))), t),
    n
  );
}
function me(e) {
  const t = O(),
    r = Mt(e, t);
  return () => (A.context ? V(e, t) : r());
}
var jt = { width: 0, height: 0 };
function oe() {
  return { width: window.innerWidth, height: window.innerHeight };
}
function Ft() {
  const [e, t] = Ot(jt, oe);
  return pe(window, 'resize', () => t(oe())), e;
}
var Ut = me(Ft);
const Wt = ['/', '/contactos', '/404'],
  Vt = ['/projetos/:slug', '/projetos'];
var zt = y('<i class="ph ph-arrow-right leading-none">'),
  Ht = y(
    '<section class="flex flex-col items-center justify-center overflow-hidden py-20"><div class="container relative isolate text-center"><h2></h2><p class="mt-2 text-lg leading-8"></p><ul class="mt-6 flex flex-wrap items-center justify-center gap-8"></ul><!$><!/>',
  ),
  Bt = y('<li class="flex items-center gap-2 font-medium"><i class="ph ph-check text-lg"></i><!$><!/>');
function qt() {
  const e = B(),
    t = w(() => e.pathname),
    r = w(() => !Wt.includes(t())),
    n = Le(() => Te(r()));
  return f(ue, {
    get children() {
      return f(W, {
        get when() {
          return w(() => !!r())() && !!n();
        },
        get children() {
          var o = $(Ht),
            i = o.firstChild,
            a = i.firstChild,
            s = a.nextSibling,
            l = s.nextSibling,
            c = l.nextSibling,
            [p, g] = j(c.nextSibling);
          return (
            E(a, () => n()?.title),
            E(s, () => n()?.description),
            E(
              l,
              f(le, {
                get each() {
                  return n()?.points;
                },
                children: (v) =>
                  (() => {
                    var b = $(Bt),
                      _ = b.firstChild,
                      u = _.nextSibling,
                      [d, m] = j(u.nextSibling);
                    return E(b, v, d, m), b;
                  })(),
              }),
            ),
            E(
              i,
              f(Pe, {
                variant: 'ghost',
                class: 'mt-10 inline-flex items-center gap-2 font-semibold',
                as: 'a',
                href: '/contactos',
                get children() {
                  return [w(() => n()?.button), $(zt)];
                },
              }),
              p,
              g,
            ),
            o
          );
        },
      });
    },
  });
}
var ge = { x: 0, y: 0 };
function se(e) {
  return e ? (e instanceof Window ? { x: e.scrollX, y: e.scrollY } : { x: e.scrollLeft, y: e.scrollTop }) : { ...ge };
}
function Kt(e) {
  e = e || window;
  const t = typeof e == 'function',
    r = A.context,
    n = t ? () => se(e()) : () => se(e),
    [o, i] = z(r ? () => ge : n, { equals: !1 }),
    a = () => i(() => n),
    s = It(() => o()());
  return (r || t) && ae(a), Dt(e, 'scroll', a, { passive: !0 }), s;
}
var Zt = me(() => Kt(window));
function Xt() {
  const e = Ut();
  return w(() => (e.width > 480 && e.width < 1024 ? 'tablet' : e.width <= 480 ? 'mobile' : 'desktop'));
}
const Gt = Ne(
  [
    'h-14',
    'px-4',
    'inline-flex items-center justify-center',
    'font-bold font-serif text-lg',
    'transition-all duration-300 ease-in-out',
    'relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-b-sm after:bg-transparent after:content-[""]',
  ],
  {
    variants: {
      isActive: { true: [], false: [] },
      mode: {
        transparent: ['text-gray-100', 'hover:text-white hover:after:bg-white'],
        solid: ['text-gray-500', 'hover:text-gray-900 hover:after:bg-gray-900'],
      },
      isSticky: { true: ['text-gray-600', 'hover:text-gray-900 hover:after:bg-gray-900'], false: [] },
    },
    compoundVariants: [
      { isActive: !0, mode: 'solid', class: ['after:bg-gray-900', 'text-gray-900'] },
      { isActive: !0, mode: 'transparent', class: ['after:bg-white', 'text-white'] },
    ],
    defaultVariants: { isActive: !1 },
  },
);
var Yt = y('<nav><ul>'),
  Jt = y('<li><a>');
function Qt(e) {
  const { nav: t = '', item: r = '', ul: n = '', li: o = '' } = e.classNames ?? {},
    i = B();
  function a(s) {
    return s === i.pathname;
  }
  return (() => {
    var s = $(Yt),
      l = s.firstChild;
    return (
      x(s, t),
      E(
        l,
        f(le, {
          each: Be,
          children: (c) =>
            (() => {
              var p = $(Jt),
                g = p.firstChild;
              return (
                x(p, o),
                E(g, () => c.label),
                N(
                  (v) => {
                    var b = D(Gt({ mode: e.mode, isSticky: e.isSticky, isActive: a(c.href), class: r })),
                      _ = c.href;
                    return b !== v.e && x(g, (v.e = b)), _ !== v.t && Se(g, 'href', (v.t = _)), v;
                  },
                  { e: void 0, t: void 0 },
                ),
                p
              );
            })(),
        }),
      ),
      N(() => x(l, D('flex items-center justify-end', n))),
      s
    );
  })();
}
var er = y(
  '<header><div><a href=/><img class="h-auto max-w-20"fetchpriority=high src=/logo.jpeg alt="MC Ocidente Charmoso"></a><!$><!/>',
);
function tr({ mode: e = 'transparent', className: t = '' }) {
  const r = Zt(),
    n = Xt(),
    o = B(),
    i = w(() => o.pathname),
    a = w(() => (Vt.includes(i()) ? 'solid' : (e ?? 'transparent'))),
    s = w(() => r.y > 50);
  return (() => {
    var l = $(er),
      c = l.firstChild,
      p = c.firstChild,
      g = p.nextSibling,
      [v, b] = j(g.nextSibling);
    return (
      E(
        c,
        f(xe, {
          get children() {
            return [
              f(X, {
                get when() {
                  return n() === 'desktop';
                },
                get children() {
                  return f(Qt, {
                    get mode() {
                      return a();
                    },
                    get isSticky() {
                      return s();
                    },
                  });
                },
              }),
              f(X, {
                get when() {
                  return ['mobile', 'tablet'].includes(n());
                },
                get children() {
                  return f(qe, {
                    get mode() {
                      return a();
                    },
                    get isSticky() {
                      return s();
                    },
                  });
                },
              }),
            ];
          },
        }),
        v,
        b,
      ),
      N(
        (_) => {
          var u = D(Ke({ mode: a(), isSticky: s(), class: t })),
            d = D(Ze({ mode: a(), isSticky: s() }));
          return u !== _.e && x(l, (_.e = u)), d !== _.t && x(c, (_.t = d)), _;
        },
        { e: void 0, t: void 0 },
      ),
      l
    );
  })();
}
function rr() {
  return f(gt, {
    preload: !0,
    root: (e) =>
      f(ue, {
        fallback: 'Loading...',
        get children() {
          return [f(tr, { mode: 'solid' }), w(() => e.children), f(qt, {})];
        },
      }),
    get children() {
      return f(Nt, {});
    },
  });
}
const nr = (e) => null;
var or = y('<span style=font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;>');
const sr = (e) => {
  const t = 'Error | Uncaught Client Exception';
  return f(Ae, {
    fallback: (r) => (
      console.error(r),
      [
        (() => {
          var n = $(or);
          return E(n, t), n;
        })(),
        f(nr, { code: 500 }),
      ]
    ),
    get children() {
      return e.children;
    },
  });
};
function ir(e, t) {
  return ke(e, t);
}
function ie(e) {
  return e.children;
}
function ar() {
  return f(ie, {
    get children() {
      return f(ie, {
        get children() {
          return f(sr, {
            get children() {
              return f(rr, {});
            },
          });
        },
      });
    },
  });
}
ir(() => f(ar, {}), document.getElementById('app'));
const pr = void 0;
export { pr as default };
