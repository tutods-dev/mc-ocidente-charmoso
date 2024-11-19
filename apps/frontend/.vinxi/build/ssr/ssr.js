import {
  lazy as $e,
  ErrorBoundary as Ce,
  createMemo as E,
  Switch as Ee,
  Show as I,
  createComponent as Se,
  For as U,
  untrack as be,
  Suspense as ee,
  getOwner as ge,
  onCleanup as j,
  sharedConfig as k,
  catchError as ke,
  children as me,
  Match as q,
  createRoot as ve,
  on as we,
  createSignal as ye,
} from 'solid-js';
import {
  ssrAttribute as $,
  ssrElement as D,
  isServer as L,
  getRequestEvent as P,
  NoHydration as Z,
  ssrHydrationKey as b,
  delegateEvents as ce,
  HydrationScript as de,
  renderToStream as fe,
  escape as h,
  Hydration as he,
  createComponent as l,
  mergeProps as le,
  ssr as m,
  renderToString as pe,
  useAssets as ue,
} from 'solid-js/web';
import {
  B as Ae,
  e as B,
  s as C,
  h as De,
  b as Le,
  f as Ne,
  d as Pe,
  g as Re,
  a as Te,
  c as xe,
} from './assets/styles-2TqKWpP5.js';
import 'clsx';
import { useWindowSize as Xe } from '@solid-primitives/resize-observer';
import { useWindowScrollPosition as ze } from '@solid-primitives/scroll';
import { eventHandler as et } from 'h3';
import { provideRequestEvent as Ze } from 'solid-js/web/storage';
import { twMerge as R } from 'tailwind-merge';
import { a as Qe } from './assets/action-DjunEzuR.js';
import { c as V } from './assets/cn-YZS7jNQp.js';
import {
  h as Be,
  m as Fe,
  k as He,
  b as Ie,
  R as Me,
  u as O,
  c as Oe,
  e as Ue,
  g as W,
  n as We,
  a as _e,
  d as je,
  f as qe,
  s as z,
} from './assets/routing-KofvCWNq.js';
import { h as Ge, a as Je, n as Ke, d as Ve, b as Ye } from './assets/styles-EAaAWUae.js';
import 'node:async_hooks';
import '@sanity/client';
import 'class-variance-authority';
import 'tailwind-variants';
const te = (e) => (t) => {
  const { base: r } = t,
    o = me(() => t.children),
    n = E(() => Oe(o(), t.base || ''));
  let a;
  const s = _e(e, n, () => a, { base: r, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return (
    e.create && e.create(s),
    l(Me.Provider, {
      value: s,
      get children() {
        return l(tt, {
          routerState: s,
          get root() {
            return t.root;
          },
          get preload() {
            return t.rootPreload || t.rootLoad;
          },
          get children() {
            return [
              (a = ge()) && null,
              l(rt, {
                routerState: s,
                get branches() {
                  return n();
                },
              }),
            ];
          },
        });
      },
    })
  );
};
function tt(e) {
  const t = e.routerState.location,
    r = e.routerState.params,
    o = E(
      () =>
        e.preload &&
        be(() => {
          z(!0), e.preload({ params: r, location: t, intent: Ue() || 'initial' }), z(!1);
        }),
    );
  return l(I, {
    get when() {
      return e.root;
    },
    keyed: !0,
    get fallback() {
      return e.children;
    },
    children: (n) =>
      l(n, {
        params: r,
        location: t,
        get data() {
          return o();
        },
        get children() {
          return e.children;
        },
      }),
  });
}
function rt(e) {
  if (L) {
    const n = P();
    if (n && n.router && n.router.dataOnly) {
      nt(n, e.routerState, e.branches);
      return;
    }
    n &&
      ((n.router || (n.router = {})).matches ||
        (n.router.matches = e.routerState.matches().map(({ route: a, path: s, params: i }) => ({
          path: a.originalPath,
          pattern: a.pattern,
          match: s,
          params: i,
          info: a.info,
        }))));
  }
  const t = [];
  let r;
  const o = E(
    we(e.routerState.matches, (n, a, s) => {
      let i = a && n.length === a.length;
      const p = [];
      for (let c = 0, w = n.length; c < w; c++) {
        const S = a && a[c],
          v = n[c];
        s && S && v.route.key === S.route.key
          ? (p[c] = s[c])
          : ((i = !1),
            t[c] && t[c](),
            ve((y) => {
              (t[c] = y),
                (p[c] = Ie(
                  e.routerState,
                  p[c - 1] || e.routerState.base,
                  K(() => o()[c + 1]),
                  () => e.routerState.matches()[c],
                ));
            }));
      }
      return t.splice(n.length).forEach((c) => c()), s && i ? s : ((r = p[0]), p);
    }),
  );
  return K(() => o() && r)();
}
const K = (e) => () =>
  l(I, {
    get when() {
      return e();
    },
    keyed: !0,
    children: (t) =>
      l(je.Provider, {
        value: t,
        get children() {
          return t.outlet();
        },
      }),
  });
function nt(e, t, r) {
  const o = new URL(e.request.url),
    n = W(r, new URL(e.router.previousUrl || e.request.url).pathname),
    a = W(r, o.pathname);
  for (let s = 0; s < a.length; s++) {
    (!n[s] || a[s].route !== n[s].route) && (e.router.dataOnly = !0);
    const { route: i, params: p } = a[s];
    i.preload && i.preload({ params: p, location: t.location, intent: 'preload' });
  }
}
function ot([e, t], r, o) {
  return [e, o ? (n) => t(o(n)) : t];
}
function st(e) {
  if (e === '#') {
    return null;
  }
  try {
    return document.querySelector(e);
  } catch {
    return null;
  }
}
function at(e) {
  let t = !1;
  const r = (n) => (typeof n == 'string' ? { value: n } : n),
    o = ot(
      ye(r(e.get()), { equals: (n, a) => n.value === a.value && n.state === a.state }),
      void 0,
      (n) => (!t && e.set(n), k.registry && !k.done && (k.done = !0), n),
    );
  return (
    e.init &&
      j(
        e.init((n = e.get()) => {
          (t = !0), o[1](r(n)), (t = !1);
        }),
      ),
    te({ signal: o, create: e.create, utils: e.utils })
  );
}
function it(e, t, r) {
  return e.addEventListener(t, r), () => e.removeEventListener(t, r);
}
function ct(e, t) {
  const r = st(`#${e}`);
  r ? r.scrollIntoView() : t && window.scrollTo(0, 0);
}
function lt(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function ut(e) {
  let t;
  const r = { value: e.url || ((t = P()) && lt(t.request.url)) || '' };
  return te({ signal: [() => r, (o) => Object.assign(r, o)] })(e);
}
function dt(e = !0, t = !1, r = '/_server', o) {
  return (n) => {
    const a = n.base.path(),
      s = n.navigatorFactory(n.base);
    const i = {};
    function p(u) {
      return u.namespaceURI === 'http://www.w3.org/2000/svg';
    }
    function c(u) {
      if (u.defaultPrevented || u.button !== 0 || u.metaKey || u.altKey || u.ctrlKey || u.shiftKey) {
        return;
      }
      const d = u.composedPath().find((H) => H instanceof Node && H.nodeName.toUpperCase() === 'A');
      if (!d || (t && !d.hasAttribute('link'))) {
        return;
      }
      const g = p(d),
        f = g ? d.href.baseVal : d.href;
      if ((g ? d.target.baseVal : d.target) || (!f && !d.hasAttribute('state'))) {
        return;
      }
      const T = (d.getAttribute('rel') || '').split(/\s+/);
      if (d.hasAttribute('download') || (T && T.includes('external'))) {
        return;
      }
      const N = g ? new URL(f, document.baseURI) : new URL(f);
      if (
        !(
          N.origin !== window.location.origin ||
          (a && N.pathname && !N.pathname.toLowerCase().startsWith(a.toLowerCase()))
        )
      ) {
        return [d, N];
      }
    }
    function w(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [g, f] = d,
        F = n.parsePath(f.pathname + f.search + f.hash),
        T = g.getAttribute('state');
      u.preventDefault(),
        s(F, {
          resolve: !1,
          replace: g.hasAttribute('replace'),
          scroll: !g.hasAttribute('noscroll'),
          state: T && JSON.parse(T),
        });
    }
    function S(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [g, f] = d;
      typeof o == 'function' && (f.pathname = o(f.pathname)),
        i[f.pathname] || n.preloadRoute(f, { preloadData: g.getAttribute('preload') !== 'false' });
    }
    function v(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [g, f] = d;
      typeof o == 'function' && (f.pathname = o(f.pathname)),
        !i[f.pathname] &&
          (i[f.pathname] = setTimeout(() => {
            n.preloadRoute(f, { preloadData: g.getAttribute('preload') !== 'false' }), delete i[f.pathname];
          }, 200));
    }
    function y(u) {
      const d = c(u);
      if (!d) {
        return;
      }
      const [, g] = d;
      typeof o == 'function' && (g.pathname = o(g.pathname)),
        i[g.pathname] && (clearTimeout(i[g.pathname]), delete i[g.pathname]);
    }
    function A(u) {
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
        const f = new URL(d, Fe);
        if (((d = n.parsePath(f.pathname + f.search)), !d.startsWith(r))) {
          return;
        }
      }
      if (u.target.method.toUpperCase() !== 'POST') {
        throw new Error('Only POST forms are supported for Actions');
      }
      const g = Qe.get(d);
      if (g) {
        u.preventDefault();
        const f = new FormData(u.target, u.submitter);
        g.call({ r: n, f: u.target }, u.target.enctype === 'multipart/form-data' ? f : new URLSearchParams(f));
      }
    }
    ce(['click', 'submit']),
      document.addEventListener('click', w),
      e &&
        (document.addEventListener('mouseover', v),
        document.addEventListener('mouseout', y),
        document.addEventListener('focusin', S),
        document.addEventListener('touchstart', S)),
      document.addEventListener('submit', A),
      j(() => {
        document.removeEventListener('click', w),
          e &&
            (document.removeEventListener('mouseover', v),
            document.removeEventListener('mouseout', y),
            document.removeEventListener('focusin', S),
            document.removeEventListener('touchstart', S)),
          document.removeEventListener('submit', A);
      });
  };
}
function ht(e) {
  if (L) {
    return ut(e);
  }
  const t = () => ({
      value: window.location.pathname.replace(/^\/+/, '/') + window.location.search + window.location.hash,
      state: window.history.state,
    }),
    r = Be();
  return at({
    get: t,
    set({ value: o, replace: n, scroll: a, state: s }) {
      n ? window.history.replaceState(He(s), '', o) : window.history.pushState(s, '', o),
        ct(decodeURIComponent(window.location.hash.slice(1)), a),
        qe();
    },
    init: (o) =>
      it(
        window,
        'popstate',
        We(o, (n) => {
          if (n && n < 0) {
            return !r.confirm(n);
          }
          {
            const a = t();
            return !r.confirm(a.value, { state: a.state });
          }
        }),
      ),
    create: dt(e.preload, e.explicitLinks, e.actionBase, e.transformUrl),
    utils: { go: (o) => window.history.go(o), beforeLeave: r },
  })(e);
}
function pt(e) {
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
var ft = ' ';
const mt = {
  style: (e) => D('style', e.attrs, () => h(e.children), !0),
  link: (e) => D('link', e.attrs, void 0, !0),
  script: (e) =>
    e.attrs.src
      ? D(
          'script',
          le(() => e.attrs, {
            get id() {
              return e.key;
            },
          }),
          () => m(ft),
          !0,
        )
      : null,
  noscript: (e) => D('noscript', e.attrs, () => h(e.children), !0),
};
function _(e, t) {
  const {
    tag: r,
    attrs: { key: o, ...n } = { key: void 0 },
    children: a,
  } = e;
  return mt[r]({ attrs: { ...n, nonce: t }, key: o, children: a });
}
function gt(e, t, r, o = 'default') {
  return $e(async () => {
    {
      const a = (await e.import())[o],
        i = (await t.inputs?.[e.src].assets()).filter((c) => c.tag === 'style' || c.attrs.rel === 'stylesheet');
      return typeof window < 'u' && pt(i), { default: (c) => [...i.map((w) => _(w)), Se(a, c)] };
    }
  });
}
const x = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function bt(e = {}) {
  const t = { options: e, rootNode: re(), staticRoutesMap: {} },
    r = (o) => (e.strictTrailingSlash ? o : o.replace(/\/$/, '') || '/');
  if (e.routes) {
    for (const o in e.routes) {
      J(t, r(o), e.routes[o]);
    }
  }
  return { ctx: t, lookup: (o) => wt(t, r(o)), insert: (o, n) => J(t, r(o), n), remove: (o) => vt(t, r(o)) };
}
function wt(e, t) {
  const r = e.staticRoutesMap[t];
  if (r) {
    return r.data;
  }
  const o = t.split('/'),
    n = {};
  let a = !1,
    s = null,
    i = e.rootNode,
    p = null;
  for (let c = 0; c < o.length; c++) {
    const w = o[c];
    i.wildcardChildNode !== null && ((s = i.wildcardChildNode), (p = o.slice(c).join('/')));
    const S = i.children.get(w);
    if (S === void 0) {
      if (i && i.placeholderChildren.length > 1) {
        const v = o.length - c;
        i = i.placeholderChildren.find((y) => y.maxDepth === v) || null;
      } else {
        i = i.placeholderChildren[0] || null;
      }
      if (!i) {
        break;
      }
      i.paramName && (n[i.paramName] = w), (a = !0);
    } else {
      i = S;
    }
  }
  return (
    (i === null || i.data === null) && s !== null && ((i = s), (n[i.paramName || '_'] = p), (a = !0)),
    i ? (a ? { ...i.data, params: a ? n : void 0 } : i.data) : null
  );
}
function J(e, t, r) {
  let o = !0;
  const n = t.split('/');
  let a = e.rootNode,
    s = 0;
  const i = [a];
  for (const p of n) {
    let c;
    if ((c = a.children.get(p))) {
      a = c;
    } else {
      const w = yt(p);
      (c = re({ type: w, parent: a })),
        a.children.set(p, c),
        w === x.PLACEHOLDER
          ? ((c.paramName = p === '*' ? `_${s++}` : p.slice(1)), a.placeholderChildren.push(c), (o = !1))
          : w === x.WILDCARD && ((a.wildcardChildNode = c), (c.paramName = p.slice(3) || '_'), (o = !1)),
        i.push(c),
        (a = c);
    }
  }
  for (const [p, c] of i.entries()) {
    c.maxDepth = Math.max(i.length - p, c.maxDepth || 0);
  }
  return (a.data = r), o === !0 && (e.staticRoutesMap[t] = a), a;
}
function vt(e, t) {
  let r = !1;
  const o = t.split('/');
  let n = e.rootNode;
  for (const a of o) {
    if (((n = n.children.get(a)), !n)) {
      return r;
    }
  }
  if (n.data) {
    const a = o.at(-1) || '';
    (n.data = null),
      Object.keys(n.children).length === 0 &&
        n.parent &&
        (n.parent.children.delete(a), (n.parent.wildcardChildNode = null), (n.parent.placeholderChildren = [])),
      (r = !0);
  }
  return r;
}
function re(e = {}) {
  return {
    type: e.type || x.NORMAL,
    maxDepth: 0,
    parent: e.parent || null,
    children: new Map(),
    data: e.data || null,
    paramName: e.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: [],
  };
}
function yt(e) {
  return e.startsWith('**') ? x.WILDCARD : e[0] === ':' || e === '*' ? x.PLACEHOLDER : x.NORMAL;
}
const ne = [
    {
      page: !0,
      $component: {
        src: 'src/routes/[...404].tsx?pick=default&pick=$css',
        build: () => import('./_...404_.js'),
        import: () => import('./_...404_.js'),
      },
      path: '/*404',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/[...404].tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/about.tsx?pick=default&pick=$css',
        build: () => import('./about.js'),
        import: () => import('./about.js'),
      },
      path: '/about',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/about.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/contactos.tsx?pick=default&pick=$css',
        build: () => import('./contactos.js'),
        import: () => import('./contactos.js'),
      },
      path: '/contactos',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/contactos.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/index.tsx?pick=default&pick=$css',
        build: () => import('./index.js'),
        import: () => import('./index.js'),
      },
      path: '/',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/index.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/sobre-nos.tsx?pick=default&pick=$css',
        build: () => import('./sobre-nos.js'),
        import: () => import('./sobre-nos.js'),
      },
      path: '/sobre-nos',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/sobre-nos.tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/projetos/[slug].tsx?pick=default&pick=$css',
        build: () => import('./_slug_.js'),
        import: () => import('./_slug_.js'),
      },
      path: '/projetos/:slug',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/[slug].tsx',
    },
    {
      page: !0,
      $component: {
        src: 'src/routes/projetos/index.tsx?pick=default&pick=$css',
        build: () => import('./index2.js'),
        import: () => import('./index2.js'),
      },
      path: '/projetos/',
      filePath: '/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/index.tsx',
    },
  ],
  $t = St(ne.filter((e) => e.page));
function St(e) {
  function t(r, o, n, a) {
    const s = Object.values(r).find((i) => n.startsWith(i.id + '/'));
    return s
      ? (t(s.children || (s.children = []), o, n.slice(s.id.length)), r)
      : (r.push({ ...o, id: n, path: n.replace(/\/\([^)/]+\)/g, '').replace(/\([^)/]+\)/g, '') }), r);
  }
  return e.sort((r, o) => r.path.length - o.path.length).reduce((r, o) => t(r, o, o.path, o.path), []);
}
function Et(e, t) {
  const r = kt.lookup(e);
  if (r && r.route) {
    const o = r.route[`$${t}`];
    return o === void 0 ? void 0 : { handler: o, params: r.params };
  }
}
function Ct(e) {
  return e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const kt = bt({
  routes: ne.reduce((e, t) => {
    if (!Ct(t)) {
      return e;
    }
    const r = t.path
      .replace(/\/\([^)/]+\)/g, '')
      .replace(/\([^)/]+\)/g, '')
      .replace(/\*([^/]*)/g, (o, n) => `**:${n}`);
    if (/:[^/]*\?/g.test(r)) {
      throw new Error(`Optional parameters are not supported in API routes: ${r}`);
    }
    if (e[r]) {
      throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);
    }
    return (e[r] = { route: t }), e;
  }, {}),
});
function oe() {
  function e(r) {
    return {
      ...r,
      ...(r.$$route ? r.$$route.require().route : void 0),
      info: { ...(r.$$route ? r.$$route.require().route.info : {}), filesystem: !0 },
      component: r.$component && gt(r.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr),
      children: r.children ? r.children.map(e) : void 0,
    };
  }
  return $t.map(e);
}
let G;
const xt = L ? () => P().routes : () => G || (G = oe()),
  Rt = ['/', '/contactos', '/404'],
  se = [
    { key: 'home', label: 'Página Inicial', href: '/' },
    { key: 'about-us', label: 'Sobre nós', href: '/sobre-nos' },
    { key: 'projects', label: 'Projetos', href: '/projetos' },
    { key: 'contacts', label: 'Contactos', href: '/contactos' },
  ],
  At = ['/projetos/:slug', '/projetos'];
var Tt = ['<i', ' class="ph ph-arrow-right leading-none"></i>'],
  Lt = [
    '<section',
    ' class="flex flex-col items-center justify-center overflow-hidden py-20"><div class="container relative isolate text-center"><h2>',
    '</h2><p class="mt-2 text-lg leading-8">',
    '</p><ul class="mt-6 flex flex-wrap items-center justify-center gap-8">',
    '</ul><!--$-->',
    '<!--/--></div></section>',
  ],
  Pt = [
    '<li',
    ' class="flex items-center gap-2 font-medium"><i class="ph ph-check text-lg"></i><!--$-->',
    '<!--/--></li>',
  ];
function Nt() {
  const e = O(),
    t = E(() => e.pathname),
    r = E(() => !Rt.includes(t())),
    o = xe(() => Re(r()));
  return l(ee, {
    get children() {
      return l(I, {
        get when() {
          return r() && !!o();
        },
        get children() {
          return m(
            Lt,
            b(),
            h(o()?.title),
            h(o()?.description),
            h(
              l(U, {
                get each() {
                  return o()?.points;
                },
                children: (n) => m(Pt, b(), h(n)),
              }),
            ),
            h(
              l(Ae, {
                variant: 'ghost',
                class: 'mt-10 inline-flex items-center gap-2 font-semibold',
                as: 'a',
                href: '/contactos',
                get children() {
                  return [o()?.button, m(Tt, b())];
                },
              }),
            ),
          );
        },
      });
    },
  });
}
function Dt() {
  const e = Xe();
  return E(() => (e.width > 480 && e.width < 1024 ? 'tablet' : e.width <= 480 ? 'mobile' : 'desktop'));
}
var Ot = ['<i', ' class="ph ph-list text-2xl"></i>'],
  _t = ['<i', ' class="ph ph-x text-lg"></i>'],
  Mt = [
    '<header',
    ' class="flex items-center justify-between gap-4 p-4"><p>MC Ocidente charmoso</p><!--$-->',
    '<!--/--></header>',
  ],
  It = ['<nav', ' class="flex-1 py-4"><ul class="flex flex-col">', '</ul></nav>'],
  jt = ['<li', '><a', '>', '</a></li>'];
function Ut(e) {
  const t = O();
  function r(o) {
    return o === t.pathname;
  }
  return l(C, {
    side: 'right',
    children: (o) => [
      l(C.Trigger, {
        get class() {
          return V([
            'size-8 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-70',
            { 'text-gray-50 hover:text-white': e.mode === 'transparent' },
            { 'text-gray-800': e.isSticky },
          ]);
        },
        get children() {
          return m(Ot, b());
        },
      }),
      l(C.Portal, {
        get children() {
          return [
            l(C.Overlay, {
              get class() {
                return V([
                  'fixed inset-0',
                  'z-50',
                  'data-[transitioning]:transition-colors data-[transitioning]:duration-300',
                ]);
              },
              get style() {
                return { 'background-color': `rgb(0 0 0 / ${0.5 * o.openPercentage})` };
              },
            }),
            l(C.Content, {
              get class() {
                return R(Ve({ side: 'right' }));
              },
              get children() {
                return [
                  m(
                    Mt,
                    b(),
                    h(
                      l(C.Close, {
                        class:
                          'size-7 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-70',
                        get children() {
                          return m(_t, b());
                        },
                      }),
                    ),
                  ),
                  m(
                    It,
                    b(),
                    h(
                      l(U, {
                        each: se,
                        children: (n) =>
                          m(
                            jt,
                            b(),
                            $('class', h(R(Ke({ isActive: r(n.href) })), !0), !1) + $('href', h(n.href, !0), !1),
                            h(n.label),
                          ),
                      }),
                    ),
                  ),
                ];
              },
            }),
          ];
        },
      }),
    ],
  });
}
var Ft = ['<nav', '><ul', '>', '</ul></nav>'],
  Ht = ['<li', '><a', '>', '</a></li>'];
function qt(e) {
  const { nav: t = '', item: r = '', ul: o = '', li: n = '' } = e.classNames ?? {},
    a = O();
  function s(i) {
    return i === a.pathname;
  }
  return m(
    Ft,
    b() + $('class', h(t, !0), !1),
    $('class', h(R('flex items-center justify-end', o), !0), !1),
    h(
      l(U, {
        each: se,
        children: (i) =>
          m(
            Ht,
            b() + $('class', h(n, !0), !1),
            $('class', h(R(Je({ mode: e.mode, isSticky: e.isSticky, isActive: s(i.href), class: r })), !0), !1) +
              $('href', h(i.href, !0), !1),
            h(i.label),
          ),
      }),
    ),
  );
}
var Bt = [
  '<header',
  '><div',
  '><a href="/"><img class="h-auto max-w-20" fetchpriority="high" src="/logo.jpeg" alt="MC Ocidente Charmoso"></a><!--$-->',
  '<!--/--></div></header>',
];
function Wt({ mode: e = 'transparent', className: t = '' }) {
  const r = ze(),
    o = Dt(),
    n = O(),
    a = E(() => n.pathname),
    s = E(() => (At.includes(a()) ? 'solid' : (e ?? 'transparent'))),
    i = E(() => r.y > 50);
  return m(
    Bt,
    b() + $('class', h(R(Ge({ mode: s(), isSticky: i(), class: t })), !0), !1),
    $('class', h(R(Ye({ mode: s(), isSticky: i() })), !0), !1),
    h(
      l(Ee, {
        get children() {
          return [
            l(q, {
              get when() {
                return o() === 'desktop';
              },
              get children() {
                return l(qt, {
                  get mode() {
                    return s();
                  },
                  get isSticky() {
                    return i();
                  },
                });
              },
            }),
            l(q, {
              get when() {
                return ['mobile', 'tablet'].includes(o());
              },
              get children() {
                return l(Ut, {
                  get mode() {
                    return s();
                  },
                  get isSticky() {
                    return i();
                  },
                });
              },
            }),
          ];
        },
      }),
    ),
  );
}
function zt() {
  return l(ht, {
    preload: !0,
    root: (e) =>
      l(ee, {
        fallback: 'Loading...',
        get children() {
          return [l(Wt, { mode: 'solid' }), e.children, l(Nt, {})];
        },
      }),
    get children() {
      return l(xt, {});
    },
  });
}
const ae = L
  ? (e) => {
      const t = P();
      return (
        (t.response.status = e.code),
        (t.response.statusText = e.text),
        j(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)),
        null
      );
    }
  : (e) => null;
var Vt = [
    '<span',
    ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">',
    '</span>',
  ],
  Kt = [
    '<span',
    ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>',
  ];
const Jt = (e) => {
    const t = L ? '500 | Internal Server Error' : 'Error | Uncaught Client Exception';
    return l(Ce, {
      fallback: (r) => (console.error(r), [m(Vt, b(), h(t)), l(ae, { code: 500 })]),
      get children() {
        return e.children;
      },
    });
  },
  Gt = (e) => {
    let t = !1;
    const r = ke(
      () => e.children,
      (o) => {
        console.error(o), (t = !!o);
      },
    );
    return t ? [m(Kt, b()), l(ae, { code: 500 })] : r;
  };
var Y = ['<script', '>', '</script>'],
  Yt = ['<script', ' type="module"', ' async', '></script>'],
  Xt = ['<script', ' type="module" async', '></script>'];
const Qt = m('<!DOCTYPE html>');
function ie(e, t, r = []) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (n.path !== e[0].path) {
      continue;
    }
    let a = [...r, n];
    if (n.children) {
      const s = e.slice(1);
      if (s.length === 0 || ((a = ie(s, n.children, a)), !a)) {
        continue;
      }
    }
    return a;
  }
}
function Zt(e) {
  const t = P(),
    r = t.nonce;
  let o = [];
  return (
    Promise.resolve().then(async () => {
      const n = [];
      if (t.router && t.router.matches) {
        const a = [...t.router.matches];
        while (a.length && (!a[0].info || !a[0].info.filesystem)) {
          a.shift();
        }
        const s = a.length && ie(a, t.routes);
        if (s) {
          const i = globalThis.MANIFEST.client.inputs;
          for (let p = 0; p < s.length; p++) {
            const c = s[p],
              w = i[c.$component.src];
            n.push(w.assets());
          }
        }
      }
      o = await Promise.all(n).then((a) =>
        [...new Map(a.flat().map((s) => [s.attrs.key, s])).values()].filter(
          (s) => s.attrs.rel === 'modulepreload' && !t.assets.find((i) => i.attrs.key === s.attrs.key),
        ),
      );
    }),
    ue(() => (o.length ? o.map((n) => _(n)) : void 0)),
    l(Z, {
      get children() {
        return [
          Qt,
          l(Gt, {
            get children() {
              return l(e.document, {
                get assets() {
                  return [l(de, {}), t.assets.map((n) => _(n, r))];
                },
                get scripts() {
                  return r
                    ? [
                        m(Y, b() + $('nonce', h(r, !0), !1), `window.manifest = ${JSON.stringify(t.manifest)}`),
                        m(
                          Yt,
                          b(),
                          $('nonce', h(r, !0), !1),
                          $(
                            'src',
                            h(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, !0),
                            !1,
                          ),
                        ),
                      ]
                    : [
                        m(Y, b(), `window.manifest = ${JSON.stringify(t.manifest)}`),
                        m(
                          Xt,
                          b(),
                          $(
                            'src',
                            h(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, !0),
                            !1,
                          ),
                        ),
                      ];
                },
                get children() {
                  return l(he, {
                    get children() {
                      return l(Jt, {
                        get children() {
                          return l(zt, {});
                        },
                      });
                    },
                  });
                },
              });
            },
          }),
        ];
      },
    })
  );
}
function er(e) {
  const t = Te(e.nativeEvent, 'flash');
  if (!t) {
    return;
  }
  const r = JSON.parse(t);
  if (!r || !r.result) {
    return;
  }
  const o = [...r.input.slice(0, -1), new Map(r.input[r.input.length - 1])];
  Le(e.nativeEvent, 'flash', '', { maxAge: 0 });
  const n = r.error ? new Error(r.result) : r.result;
  return { input: o, url: r.url, pending: !1, result: r.thrown ? void 0 : n, error: r.thrown ? n : void 0 };
}
async function tr(e) {
  const t = globalThis.MANIFEST.client;
  return (
    globalThis.MANIFEST.ssr,
    e.response.headers.set('Content-Type', 'text/html'),
    Object.assign(e, {
      manifest: await t.json(),
      assets: [...(await t.inputs[t.handler].assets())],
      router: { submission: er(e) },
      routes: oe(),
      complete: !1,
      $islands: new Set(),
    })
  );
}
const rr = new Set([301, 302, 303, 307, 308]);
function M(e) {
  return e.status && rr.has(e.status) ? e.status : 302;
}
function nr(e, t, r = {}) {
  return et({
    handler: (o) => {
      const n = Pe(o);
      return Ze(n, async () => {
        const a = Et(new URL(n.request.url).pathname, n.request.method);
        if (a) {
          const y = (await a.handler.import())[n.request.method];
          (n.params = a.params || {}), (k.context = { event: n });
          const A = await y(n);
          if (A !== void 0) {
            return A;
          }
          if (n.request.method !== 'GET') {
            throw new Error(`API handler for ${n.request.method} "${n.request.url}" did not return a response.`);
          }
        }
        const s = await t(n),
          i = typeof r == 'function' ? await r(s) : { ...r },
          p = i.mode || 'stream';
        if ((i.nonce && (s.nonce = i.nonce), p === 'sync')) {
          const v = pe(() => ((k.context.event = s), e(s)), i);
          if (((s.complete = !0), s.response && s.response.headers.get('Location'))) {
            const y = M(s.response);
            return B(o, s.response.headers.get('Location'), y);
          }
          return v;
        }
        if (i.onCompleteAll) {
          const v = i.onCompleteAll;
          i.onCompleteAll = (y) => {
            Q(s)(y), v(y);
          };
        } else {
          i.onCompleteAll = Q(s);
        }
        if (i.onCompleteShell) {
          const v = i.onCompleteShell;
          i.onCompleteShell = (y) => {
            X(s, o)(), v(y);
          };
        } else {
          i.onCompleteShell = X(s, o);
        }
        const c = fe(() => ((k.context.event = s), e(s)), i);
        if (s.response && s.response.headers.get('Location')) {
          const v = M(s.response);
          return B(o, s.response.headers.get('Location'), v);
        }
        if (p === 'async') {
          return c;
        }
        const { writable: w, readable: S } = new TransformStream();
        return c.pipeTo(w), S;
      });
    },
  });
}
function X(e, t) {
  return () => {
    if (e.response && e.response.headers.get('Location')) {
      const r = M(e.response);
      Ne(t, r), De(t, 'Location', e.response.headers.get('Location'));
    }
  };
}
function Q(e) {
  return ({ write: t }) => {
    e.complete = !0;
    const r = e.response && e.response.headers.get('Location');
    r && t(`<script>window.location="${r}"<\/script>`);
  };
}
function or(e, t) {
  return nr(e, tr, t);
}
var sr = [
    '<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">',
    '</head>',
  ],
  ar = ['<html', ' lang="en">', '<body><div id="app">', '</div><!--$-->', '<!--/--></body></html>'];
const Cr = or(() =>
  l(Zt, {
    document: ({ assets: e, children: t, scripts: r }) =>
      m(
        ar,
        b(),
        l(Z, {
          get children() {
            return m(sr, h(e));
          },
        }),
        h(t),
        h(r),
      ),
  }),
);
export { Cr as default };
