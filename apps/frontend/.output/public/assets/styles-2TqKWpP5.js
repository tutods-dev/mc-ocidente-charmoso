import { AsyncLocalStorage as Or } from 'node:async_hooks';
import { createClient as Cr } from '@sanity/client';
import { cva as xt } from 'class-variance-authority';
import je, { clsx as Lr } from 'clsx';
import {
  getRequestWebStream as Er,
  appendResponseHeader as Pr,
  removeResponseHeader as Sr,
  H3Event as _t,
  getRequestURL as br,
  sendRedirect as dr,
  setHeader as fr,
  getRequestIP as gr,
  getCookie as hr,
  getResponseStatusText as mr,
  getResponseStatus as pr,
  setResponseStatus as ur,
  setCookie as vr,
  getResponseHeader as wr,
  setResponseHeader as xr,
  getResponseHeaders as yr,
} from 'h3';
import {
  onCleanup as $,
  splitProps as C,
  untrack as G,
  useContext as K,
  createSignal as L,
  createMemo as O,
  createEffect as R,
  For as Tt,
  onMount as Xn,
  batch as ae,
  DEV as ar,
  createUniqueId as ce,
  getListener as ir,
  mergeProps as j,
  Show as ne,
  startTransition as pt,
  createContext as q,
  on as qt,
  getOwner as rr,
  createResource as sr,
  sharedConfig as we,
} from 'solid-js';
import {
  mergeProps as E,
  Portal as Gn,
  isServer as M,
  ssrAttribute as Rt,
  Dynamic as Zn,
  getRequestEvent as _e,
  createComponent as b,
  ssr as he,
  escape as ie,
  ssrElement as lr,
  ssrHydrationKey as ve,
} from 'solid-js/web';
import { provideRequestEvent as cr } from 'solid-js/web/storage';
import { twMerge as Qn } from 'tailwind-merge';
import { r as Dr, t as Rr, e as Tr } from './routing-KofvCWNq.js';
const Fr = 'Location',
  Ir = 5e3,
  $r = 18e4;
const Je = new Map();
M ||
  setInterval(() => {
    const e = Date.now();
    for (const [t, n] of Je.entries()) {
      !n[3].count && e - n[0] > $r && Je.delete(t);
    }
  }, 3e5);
function Kt() {
  if (!M) {
    return Je;
  }
  const e = _e();
  if (!e) {
    throw new Error('Cannot find cache context');
  }
  return (e.router || (e.router = {})).cache || (e.router.cache = new Map());
}
function vc(e, t = !0) {
  return pt(() => {
    const n = Date.now();
    kr(e, (o) => {
      t && (o[0] = 0), o[3][1](n);
    });
  });
}
function kr(e, t) {
  e && !Array.isArray(e) && (e = [e]);
  for (const n of Je.keys()) {
    (e === void 0 || Ar(n, e)) && t(Je.get(n));
  }
}
function de(e, t) {
  e.GET && (e = e.GET);
  const n = (...o) => {
    const r = Kt(),
      i = Tr(),
      s = Rr(),
      a = rr() ? Dr() : void 0,
      c = Date.now(),
      p = t + mn(o);
    let u = r.get(p),
      g;
    if (M) {
      const m = _e();
      if (m) {
        const v = (m.router || (m.router = {})).dataOnly;
        if (v) {
          const h = m && (m.router.data || (m.router.data = {}));
          if (h && p in h) {
            return h[p];
          }
          if (Array.isArray(v) && !v.includes(p)) {
            return (h[p] = void 0), Promise.resolve();
          }
        }
      }
    }
    if (
      (ir() && !M && ((g = !0), $(() => u[3].count--)),
      u && u[0] && (M || i === 'native' || u[3].count || Date.now() - u[0] < Ir))
    ) {
      g && (u[3].count++, u[3][0]()), u[2] === 'preload' && i !== 'preload' && (u[0] = c);
      let m = u[1];
      return (
        i !== 'preload' &&
          ((m = 'then' in u[1] ? u[1].then(d(!1), d(!0)) : d(!1)(u[1])),
          !M && i === 'navigate' && pt(() => u[3][1](u[0]))),
        s && 'then' in m && m.catch(() => {}),
        m
      );
    }
    let f = !M && we.context && we.has(p) ? we.load(p) : e(...o);
    if (
      (u
        ? ((u[0] = c), (u[1] = f), (u[2] = i), !M && i === 'navigate' && pt(() => u[3][1](u[0])))
        : (r.set(p, (u = [c, f, i, L(c)])), (u[3].count = 0)),
      g && (u[3].count++, u[3][0]()),
      M)
    ) {
      const m = _e();
      if (m && m.router.dataOnly) {
        return (m.router.data[p] = f);
      }
    }
    if (
      (i !== 'preload' && (f = 'then' in f ? f.then(d(!1), d(!0)) : d(!1)(f)),
      s && 'then' in f && f.catch(() => {}),
      M && we.context && we.context.async && !we.context.noHydrate)
    ) {
      const m = _e();
      (!m || !m.serverOnly) && we.context.serialize(p, f);
    }
    return f;
    function d(m) {
      return async (v) => {
        if (v instanceof Response) {
          const h = v.headers.get(Fr);
          if (h !== null) {
            if (a && h.startsWith('/')) {
              pt(() => {
                a(h, { replace: !0 });
              });
            } else if (!M) {
              window.location.href = h;
            } else if (M) {
              const w = _e();
              w && (w.response = { status: 302, headers: new Headers({ Location: h }) });
            }
            return;
          }
          v.customBody && (v = await v.customBody());
        }
        if (m) {
          throw v;
        }
        return v;
      };
    }
  };
  return (n.keyFor = (...o) => t + mn(o)), (n.key = t), n;
}
de.set = (e, t) => {
  const n = Kt(),
    o = Date.now();
  let r = n.get(e);
  r ? ((r[0] = o), (r[1] = t), (r[2] = 'preload')) : (n.set(e, (r = [o, t, , L(o)])), (r[3].count = 0));
};
de.clear = () => Kt().clear();
function Ar(e, t) {
  for (const n of t) {
    if (e.startsWith(n)) {
      return !0;
    }
  }
  return !1;
}
function mn(e) {
  return JSON.stringify(e, (t, n) =>
    _r(n)
      ? Object.keys(n)
          .sort()
          .reduce((o, r) => ((o[r] = n[r]), o), {})
      : n,
  );
}
function _r(e) {
  let t;
  return e != null && typeof e == 'object' && (!(t = Object.getPrototypeOf(e)) || t === Object.prototype);
}
function bc(e, t) {
  let n,
    o = () => (!n || n.state === 'unresolved' ? void 0 : n.latest);
  [n] = sr(
    () => Mr(e, G(o)),
    (i) => i,
    t,
  );
  const r = () => n();
  return (
    Object.defineProperty(r, 'latest', {
      get() {
        return n.latest;
      },
    }),
    r
  );
}
class ee {
  static all() {
    return new ee();
  }
  static allSettled() {
    return new ee();
  }
  static any() {
    return new ee();
  }
  static race() {
    return new ee();
  }
  static reject() {
    return new ee();
  }
  static resolve() {
    return new ee();
  }
  catch() {
    return new ee();
  }
  then() {
    return new ee();
  }
  finally() {
    return new ee();
  }
}
function Mr(e, t) {
  if (M || !we.context) {
    return e(t);
  }
  const n = fetch,
    o = Promise;
  try {
    return (window.fetch = () => new ee()), (Promise = ee), e(t);
  } finally {
    (window.fetch = n), (Promise = o);
  }
}
function hn(e, t = 302) {
  let n, o;
  typeof t == 'number'
    ? (n = { status: t })
    : (({ revalidate: o, ...n } = t), typeof n.status > 'u' && (n.status = 302));
  const r = new Headers(n.headers);
  return r.set('Location', e), o && r.set('X-Revalidate', o.toString()), new Response(null, { ...n, headers: r });
}
function zr(e = {}) {
  let t,
    n = !1;
  const o = (s) => {
    if (t && t !== s) {
      throw new Error('Context conflict');
    }
  };
  let r;
  if (e.asyncContext) {
    const s = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    s ? (r = new s()) : console.warn('[unctx] `AsyncLocalStorage` is not provided.');
  }
  const i = () => {
    if (r && t === void 0) {
      const s = r.getStore();
      if (s !== void 0) {
        return s;
      }
    }
    return t;
  };
  return {
    use: () => {
      const s = i();
      if (s === void 0) {
        throw new Error('Context is not available');
      }
      return s;
    },
    tryUse: () => i(),
    set: (s, l) => {
      l || o(s), (t = s), (n = !0);
    },
    unset: () => {
      (t = void 0), (n = !1);
    },
    call: (s, l) => {
      o(s), (t = s);
      try {
        return r ? r.run(s, l) : l();
      } finally {
        n || (t = void 0);
      }
    },
    async callAsync(s, l) {
      t = s;
      const a = () => {
          t = s;
        },
        c = () => (t === s ? a : void 0);
      yn.add(c);
      try {
        const p = r ? r.run(s, l) : l();
        return n || (t = void 0), await p;
      } finally {
        yn.delete(c);
      }
    },
  };
}
function Nr(e = {}) {
  const t = {};
  return {
    get(n, o = {}) {
      return t[n] || (t[n] = zr({ ...e, ...o })), t[n], t[n];
    },
  };
}
const vt =
    typeof globalThis < 'u'
      ? globalThis
      : typeof self < 'u'
        ? self
        : typeof global < 'u'
          ? global
          : typeof window < 'u'
            ? window
            : {},
  vn = '__unctx__',
  Br = vt[vn] || (vt[vn] = Nr()),
  Hr = (e, t = {}) => Br.get(e, t),
  bn = '__unctx_async_handlers__',
  yn = vt[bn] || (vt[bn] = new Set());
function jr(e) {
  let t;
  const n = eo(e),
    o = { duplex: 'half', method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer
    ? new Request(n, { ...o, body: e.node.req.body })
    : new Request(n, {
        ...o,
        get body() {
          return t || ((t = Zr(e)), t);
        },
      });
}
function Vr(e) {
  return (e.web ??= { request: jr(e), url: eo(e) }), e.web.request;
}
function Wr() {
  return ei();
}
const Jn = Symbol('$HTTPEvent');
function qr(e) {
  return typeof e == 'object' && (e instanceof _t || e?.[Jn] instanceof _t || e?.__is_event__ === !0);
}
function V(e) {
  return (...t) => {
    let n = t[0];
    if (qr(n)) {
      t[0] = n instanceof _t || n.__is_event__ ? n : n[Jn];
    } else {
      if (!globalThis.app.config.server.experimental?.asyncContext) {
        throw new Error(
          'AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.',
        );
      }
      if (((n = Wr()), !n)) {
        throw new Error(
          'No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.',
        );
      }
      t.unshift(n);
    }
    return e(...t);
  };
}
const eo = V(br),
  Kr = V(gr),
  wn = V(ur),
  xn = V(pr),
  Ur = V(mr),
  at = V(yr),
  Pn = V(wr),
  Yr = V(xr),
  Xr = V(Pr),
  yc = V(dr),
  wc = V(hr),
  xc = V(vr),
  Pc = V(fr),
  Zr = V(Er),
  Gr = V(Sr),
  Qr = V(Vr);
function Jr() {
  return Hr('nitro-app', {
    asyncContext: !!globalThis.app.config.server.experimental?.asyncContext,
    AsyncLocalStorage: Or,
  });
}
function ei() {
  return Jr().use().event;
}
const Lt = Symbol('fetchEvent');
function ti(e) {
  return { request: Qr(e), response: ri(e), clientAddress: Kr(e), locals: {}, nativeEvent: e };
}
function ni(e) {
  return { ...e };
}
function Sc(e) {
  if (!e[Lt]) {
    const t = ti(e);
    e[Lt] = t;
  }
  return e[Lt];
}
class oi {
  event;
  constructor(t) {
    this.event = t;
  }
  get(t) {
    const n = Pn(this.event, t);
    return Array.isArray(n) ? n.join(', ') : n || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    return Yr(this.event, t, n);
  }
  delete(t) {
    return Gr(this.event, t);
  }
  append(t, n) {
    Xr(this.event, t, n);
  }
  getSetCookie() {
    const t = Pn(this.event, 'Set-Cookie');
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(at(this.event)).forEach(([n, o]) => t(Array.isArray(o) ? o.join(', ') : o, n, this));
  }
  entries() {
    return Object.entries(at(this.event))
      .map(([t, n]) => [t, Array.isArray(n) ? n.join(', ') : n])
      [Symbol.iterator]();
  }
  keys() {
    return Object.keys(at(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(at(this.event))
      .map((t) => (Array.isArray(t) ? t.join(', ') : t))
      [Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function ri(e) {
  return {
    get status() {
      return xn(e);
    },
    set status(t) {
      wn(e, t);
    },
    get statusText() {
      return Ur(e);
    },
    set statusText(t) {
      wn(e, xn(e), t);
    },
    headers: new oi(e),
  };
}
function Ee(e, t, n) {
  if (typeof e != 'function') {
    throw new Error("Export from a 'use server' module must be a function");
  }
  const o = '';
  return new Proxy(e, {
    get(r, i, s) {
      return i === 'url'
        ? `${o}/_server?id=${encodeURIComponent(t)}&name=${encodeURIComponent(n)}`
        : i === 'GET'
          ? s
          : r[i];
    },
    apply(r, i, s) {
      const l = _e();
      if (!l) {
        throw new Error('Cannot call server function outside of a request');
      }
      const a = ni(l);
      return (a.locals.serverFunctionMeta = { id: t + '#' + n }), (a.serverOnly = !0), cr(a, () => e.apply(i, s));
    },
  });
}
const lt = { sanity: { projectId: 'sg9zb269', dataset: 'production', apiVersion: 'X' }, isProduction: !1 },
  Oe = Cr({
    projectId: lt.sanity.projectId,
    dataset: lt.sanity.dataset,
    useCdn: lt.isProduction,
    apiVersion: lt.sanity.apiVersion,
    perspective: 'published',
  }),
  ii = `
    *[_type == "project" && slug.current == $slug] [0] {
      ...,
      "slug": slug.current,
      "thumbnail": {
          ...thumbnail,
          "asset": thumbnail.asset->
      },
      "services": coalesce(services[]->{
          _id,
          title,
          'slug': slug.current
      }, []),
      "gallery": coalesce(gallery[]{
        ...,
        "asset": asset->
      }, null)
    }
`,
  si = `
    *[_type == "project" && slug.current != $slug && array::intersects(services[]->slug.current, $serviceSlugs)] [$start...$end] | order(_createdAt desc) {
        _id,
        "slug": slug.current,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
        "services": coalesce(services[]->{
            _id,
            title,
            'slug': slug.current
        }, [])
    }
`,
  ai = `
    *[_type == "settings"] [0] {
        ...cta,
        "points": cta.points
    }
`,
  li = `
  *[_type == "settings"] [0] {
    "contacts": coalesce(contacts, []),
    "social": coalesce(social, [])
  }
`,
  ci = `
    *[_type == "archives"] [0].projects
`,
  ui = `
    *[_type == "archives"] [0].services
`,
  di = `
  *[_type == 'contacts'] [0]
`,
  fi = `
    *[_type == "testimonial" && project->slug.current == $slug] [0] {
      _id,
      client,
      content,
      "url": coalesce(url, null),
      _createdAt,
      _updatedAt
    }
`,
  Ec = de(Ee(gi, 'c_12473', '$$function0'), 'cta-settings');
async function gi(e = !0) {
  if (e) {
    try {
      return Oe.fetch(ai);
    } catch {
      return;
    }
  }
}
const Oc = de(Ee(pi, 'c_12098', '$$function0'), 'social-networks-and-contacts');
async function pi() {
  try {
    return Oe.fetch(li);
  } catch {
    return { social: [], contacts: [] };
  }
}
const Cc = de(Ee(mi, 'c_11160', '$$function0'), 'projects-archive');
de(Ee(hi, 'c_11160', '$$function1'), 'services-archive');
async function mi() {
  try {
    return Oe.fetch(ci);
  } catch {
    return;
  }
}
async function hi() {
  try {
    return Oe.fetch(ui);
  } catch {
    return;
  }
}
const Dc = de(Ee(vi, 'c_11170', '$$function0'), 'contacts-page');
async function vi() {
  try {
    return Oe.fetch(di);
  } catch {
    return;
  }
}
const Tc = de(Ee(bi, 'c_10846', '$$function0'), 'project');
async function bi(e) {
  try {
    const t = await Oe.fetch(ii, { slug: e });
    if (!t) {
      throw hn('/projetos');
    }
    return t;
  } catch {
    throw hn('/projetos');
  }
}
de(Ee(yi, 'c_12805', '$$function0'), 'related-projects');
async function yi(e, t, n = 0, o = 6) {
  try {
    return Oe.fetch(si, { slug: e, serviceSlugs: t, start: n, end: o });
  } catch {
    return [];
  }
}
const Rc = de(Ee(wi, 'c_12518', '$$function0'), 'cta-settings');
async function wi(e) {
  return Oe.fetch(fi, { slug: e });
}
var to = { equals: !1 },
  A = (e) => (typeof e == 'function' && !e.length ? e() : e);
function xi(e, ...t) {
  return typeof e == 'function' ? e(...t) : e;
}
var Pi = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function Sn(e) {
  const t = {};
  let n;
  while ((n = Pi.exec(e))) {
    t[n[1]] = n[2];
  }
  return t;
}
function Ut(e, t) {
  if (typeof e == 'string') {
    if (typeof t == 'string') {
      return `${e};${t}`;
    }
    e = Sn(e);
  } else {
    typeof t == 'string' && (t = Sn(t));
  }
  return { ...e, ...t };
}
function Si(e) {
  return Object.prototype.toString.call(e) === '[object String]';
}
function Ei(e) {
  return typeof e == 'function';
}
function Yt(e) {
  return (t) => `${e()}-${t}`;
}
function Qe(e, t) {
  return e ? e === t || e.contains(t) : !1;
}
function no(e) {
  return ge(e).defaultView || window;
}
function ge(e) {
  return e ? e.ownerDocument || e : document;
}
var oo = ((e) => (
  (e.Escape = 'Escape'),
  (e.Enter = 'Enter'),
  (e.Tab = 'Tab'),
  (e.Space = ' '),
  (e.ArrowDown = 'ArrowDown'),
  (e.ArrowLeft = 'ArrowLeft'),
  (e.ArrowRight = 'ArrowRight'),
  (e.ArrowUp = 'ArrowUp'),
  (e.End = 'End'),
  (e.Home = 'Home'),
  (e.PageDown = 'PageDown'),
  (e.PageUp = 'PageUp'),
  e
))(oo || {});
function Oi(e) {
  return typeof window < 'u' && window.navigator != null
    ? e.test(window.navigator.userAgentData?.platform || window.navigator.platform)
    : !1;
}
function Ci() {
  return Oi(/^Mac/i);
}
function De(e, t) {
  return t && (Ei(t) ? t(e) : t[0](t[1], e)), e?.defaultPrevented;
}
function Te(e) {
  return (t) => {
    for (const n of e) {
      De(t, n);
    }
  };
}
function Di(e) {
  return Ci() ? e.metaKey && !e.ctrlKey : e.ctrlKey && !e.metaKey;
}
function Ti() {}
function Ri(e) {
  return [e.clientX, e.clientY];
}
function Li(e, t) {
  const [n, o] = e;
  let r = !1;
  const i = t.length;
  for (let s = i, l = 0, a = s - 1; l < s; a = l++) {
    const [c, p] = t[l],
      [u, g] = t[a],
      [, f] = t[a === 0 ? s - 1 : a - 1] || [0, 0],
      d = (p - g) * (n - c) - (c - u) * (o - p);
    if (g < p) {
      if (o >= g && o < p) {
        if (d === 0) {
          return !0;
        }
        d > 0 && (o === g ? o > f && (r = !r) : (r = !r));
      }
    } else if (p < g) {
      if (o > p && o <= g) {
        if (d === 0) {
          return !0;
        }
        d < 0 && (o === g ? o < f && (r = !r) : (r = !r));
      }
    } else if (o === p && ((n >= u && n <= c) || (n >= c && n <= u))) {
      return !0;
    }
  }
  return r;
}
function Y(e, t) {
  return j(e, t);
}
var Ue = new Map(),
  En = new Set();
function On() {
  if (typeof window > 'u') {
    return;
  }
  const e = (n) => {
      if (!n.target) {
        return;
      }
      let o = Ue.get(n.target);
      o || ((o = new Set()), Ue.set(n.target, o), n.target.addEventListener('transitioncancel', t)),
        o.add(n.propertyName);
    },
    t = (n) => {
      if (!n.target) {
        return;
      }
      const o = Ue.get(n.target);
      if (
        o &&
        (o.delete(n.propertyName),
        o.size === 0 && (n.target.removeEventListener('transitioncancel', t), Ue.delete(n.target)),
        Ue.size === 0)
      ) {
        for (const r of En) {
          r();
        }
        En.clear();
      }
    };
  document.body.addEventListener('transitionrun', e), document.body.addEventListener('transitionend', t);
}
typeof document < 'u' && (document.readyState !== 'loading' ? On() : document.addEventListener('DOMContentLoaded', On));
function Xt(e) {
  const [t, n] = L(e.defaultValue?.()),
    o = O(() => e.value?.() !== void 0),
    r = O(() => (o() ? e.value?.() : t()));
  return [
    r,
    (s) => {
      G(() => {
        const l = xi(s, r());
        return Object.is(l, r()) || (o() || n(l), e.onChange?.(l)), l;
      });
    },
  ];
}
function Fi(e) {
  const [t, n] = Xt(e);
  return [() => t() ?? !1, n];
}
var Ii = new Set(['Avst', 'Arab', 'Armi', 'Syrc', 'Samr', 'Mand', 'Thaa', 'Mend', 'Nkoo', 'Adlm', 'Rohg', 'Hebr']),
  $i = new Set([
    'ae',
    'ar',
    'arc',
    'bcc',
    'bqi',
    'ckb',
    'dv',
    'fa',
    'glk',
    'he',
    'ku',
    'mzn',
    'nqo',
    'pnb',
    'ps',
    'sd',
    'ug',
    'ur',
    'yi',
  ]);
function ki(e) {
  if (Intl.Locale) {
    const n = new Intl.Locale(e).maximize().script ?? '';
    return Ii.has(n);
  }
  const t = e.split('-')[0];
  return $i.has(t);
}
function Ai(e) {
  return ki(e) ? 'rtl' : 'ltr';
}
function ro() {
  let e = (typeof navigator < 'u' && (navigator.language || navigator.userLanguage)) || 'en-US';
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = 'en-US';
  }
  return { locale: e, direction: Ai(e) };
}
var Mt = ro(),
  Xe = new Set();
function Cn() {
  Mt = ro();
  for (const e of Xe) {
    e(Mt);
  }
}
function _i() {
  const e = { locale: 'en-US', direction: 'ltr' },
    [t, n] = L(Mt),
    o = O(() => (M ? e : t()));
  return (
    Xn(() => {
      Xe.size === 0 && window.addEventListener('languagechange', Cn),
        Xe.add(n),
        $(() => {
          Xe.delete(n), Xe.size === 0 && window.removeEventListener('languagechange', Cn);
        });
    }),
    { locale: () => o().locale, direction: () => o().direction }
  );
}
var Mi = q();
function zi() {
  const e = _i();
  return K(Mi) || e;
}
function Ni(e = {}) {
  const [t, n] = Fi({
      value: () => A(e.open),
      defaultValue: () => !!A(e.defaultOpen),
      onChange: (s) => e.onOpenChange?.(s),
    }),
    o = () => {
      n(!0);
    },
    r = () => {
      n(!1);
    };
  return {
    isOpen: t,
    setIsOpen: n,
    open: o,
    close: r,
    toggle: () => {
      t() ? r() : o();
    },
  };
}
function io(e, t) {
  const [n, o] = L(Dn(t?.()));
  return (
    R(() => {
      o(e()?.tagName.toLowerCase() || Dn(t?.()));
    }),
    n
  );
}
function Dn(e) {
  return Si(e) ? e : void 0;
}
function te(e) {
  const [t, n] = C(e, ['as']);
  if (!t.as) {
    throw new Error('[kobalte]: Polymorphic is missing the required `as` prop.');
  }
  return b(
    Zn,
    E(n, {
      get component() {
        return t.as;
      },
    }),
  );
}
var Bi = Object.defineProperty,
  Pt = (e, t) => {
    for (var n in t) {
      Bi(e, n, { get: t[n], enumerable: !0 });
    }
  },
  Hi = {};
Pt(Hi, { Button: () => so, Root: () => ot });
var ji = ['button', 'color', 'file', 'image', 'reset', 'submit'];
function Vi(e) {
  const t = e.tagName.toLowerCase();
  return t === 'button' ? !0 : t === 'input' && e.type ? ji.indexOf(e.type) !== -1 : !1;
}
function ot(e) {
  let t;
  const n = Y({ type: 'button' }, e),
    [o, r] = C(n, ['ref', 'type', 'disabled']),
    i = io(
      () => t,
      () => 'button',
    ),
    s = O(() => {
      const c = i();
      return c == null ? !1 : Vi({ tagName: c, type: o.type });
    }),
    l = O(() => i() === 'input'),
    a = O(() => i() === 'a' && t?.getAttribute('href') != null);
  return b(
    te,
    E(
      {
        as: 'button',
        get type() {
          return s() || l() ? o.type : void 0;
        },
        get role() {
          return !s() && !a() ? 'button' : void 0;
        },
        get tabIndex() {
          return !s() && !a() && !o.disabled ? 0 : void 0;
        },
        get disabled() {
          return s() || l() ? o.disabled : void 0;
        },
        get 'aria-disabled'() {
          return !s() && !l() && o.disabled ? !0 : void 0;
        },
        get 'data-disabled'() {
          return o.disabled ? '' : void 0;
        },
      },
      r,
    ),
  );
}
var so = ot;
function Ze(e) {
  return (t) => (e(t), () => e(void 0));
}
var x = (e) => (typeof e == 'function' ? e() : e),
  Zt = (...e) => e.some((t) => !!t()),
  Wi = (e) => {
    const t = O(() => {
        const s = x(e.element);
        if (s) {
          return getComputedStyle(s);
        }
      }),
      n = () => t()?.animationName ?? 'none',
      [o, r] = L(x(e.show) ? 'present' : 'hidden');
    let i = 'none';
    return (
      R((s) => {
        const l = x(e.show);
        return (
          G(() => {
            if (s === l) {
              return l;
            }
            const a = i,
              c = n();
            l
              ? r('present')
              : c === 'none' || t()?.display === 'none'
                ? r('hidden')
                : r(s === !0 && a !== c ? 'hiding' : 'hidden');
          }),
          l
        );
      }),
      R(() => {
        const s = x(e.element);
        if (!s) {
          return;
        }
        const l = (c) => {
            c.target === s && (i = n());
          },
          a = (c) => {
            const u = n().includes(c.animationName);
            c.target === s && u && o() === 'hiding' && r('hidden');
          };
        s.addEventListener('animationstart', l),
          s.addEventListener('animationcancel', a),
          s.addEventListener('animationend', a),
          $(() => {
            s.removeEventListener('animationstart', l),
              s.removeEventListener('animationcancel', a),
              s.removeEventListener('animationend', a);
          });
      }),
      { present: () => o() === 'present' || o() === 'hiding', state: o, setState: r }
    );
  },
  qi = Wi,
  zt = qi;
const Ve = (...e) => Qn(je(e));
function We(...e) {
  return Qn(Lr(e));
}
const Ki = xt(
    'inline-flex items-center border px-2.5 py-0.5 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2',
    {
      variants: {
        variant: {
          default: 'border-transparent bg-primary text-primary-foreground hover:bg-primary/80',
          secondary: 'border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80',
          destructive: 'border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80',
          outline: 'text-foreground',
        },
      },
      defaultVariants: { variant: 'default' },
    },
  ),
  Lc = (e) => {
    const [t, n] = C(e, ['class', 'variant', 'round']);
    return lr(
      'div',
      E(
        {
          get class() {
            return We(Ki({ variant: t.variant }), t.round ? 'rounded-full' : 'rounded-md', t.class);
          },
        },
        n,
      ),
      void 0,
      !0,
    );
  },
  St = xt(
    'inline-flex items-center justify-center rounded-md font-medium text-sm transition-[color,background-color,box-shadow] focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50',
    {
      variants: {
        variant: {
          default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
          destructive: 'bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90',
          outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
          secondary: 'bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80',
          ghost: 'hover:bg-accent hover:text-accent-foreground',
          link: 'text-primary underline-offset-4 hover:underline',
        },
        size: {
          default: 'h-9 px-4 py-2',
          sm: 'h-8 rounded-md px-3 text-xs',
          lg: 'h-10 rounded-md px-8',
          icon: 'h-9 w-9',
        },
      },
      defaultVariants: { variant: 'default', size: 'default' },
    },
  ),
  Fc = (e) => {
    const [t, n] = C(e, ['class', 'variant', 'size']);
    return b(
      so,
      E(
        {
          get class() {
            return Ve(St({ size: t.size, variant: t.variant }), t.class);
          },
        },
        n,
      ),
    );
  };
q(null);
var Ui = ['id', 'name', 'validationState', 'required', 'disabled', 'readOnly'];
function Yi(e) {
  const t = `form-control-${ce()}`,
    n = Y({ id: t }, e),
    [o, r] = L(),
    [i, s] = L(),
    [l, a] = L(),
    [c, p] = L(),
    u = (m, v, h) => {
      const w = h != null || o() != null;
      return [h, o(), w && v != null ? m : void 0].filter(Boolean).join(' ') || void 0;
    },
    g = (m) => [l(), c(), m].filter(Boolean).join(' ') || void 0,
    f = O(() => ({
      'data-valid': A(n.validationState) === 'valid' ? '' : void 0,
      'data-invalid': A(n.validationState) === 'invalid' ? '' : void 0,
      'data-required': A(n.required) ? '' : void 0,
      'data-disabled': A(n.disabled) ? '' : void 0,
      'data-readonly': A(n.readOnly) ? '' : void 0,
    }));
  return {
    formControlContext: {
      name: () => A(n.name) ?? A(n.id),
      dataset: f,
      validationState: () => A(n.validationState),
      isRequired: () => A(n.required),
      isDisabled: () => A(n.disabled),
      isReadOnly: () => A(n.readOnly),
      labelId: o,
      fieldId: i,
      descriptionId: l,
      errorMessageId: c,
      getAriaLabelledBy: u,
      getAriaDescribedBy: g,
      generateId: Yt(() => A(n.id)),
      registerLabel: Ze(r),
      registerField: Ze(s),
      registerDescription: Ze(a),
      registerErrorMessage: Ze(p),
    },
  };
}
var ao = q();
function rt() {
  const e = K(ao);
  if (e === void 0) {
    throw new Error('[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component');
  }
  return e;
}
function Gt(e) {
  const t = rt(),
    n = Y({ id: t.generateId('description') }, e);
  return (
    R(() => $(t.registerDescription(n.id))),
    b(
      te,
      E({ as: 'div' }, () => t.dataset(), n),
    )
  );
}
function Qt(e) {
  const t = rt(),
    n = Y({ id: t.generateId('error-message') }, e),
    [o, r] = C(n, ['forceMount']),
    i = () => t.validationState() === 'invalid';
  return (
    R(() => {
      i() && $(t.registerErrorMessage(r.id));
    }),
    b(ne, {
      get when() {
        return o.forceMount || i();
      },
      get children() {
        return b(
          te,
          E({ as: 'div' }, () => t.dataset(), r),
        );
      },
    })
  );
}
function Jt(e) {
  let t;
  const n = rt(),
    o = Y({ id: n.generateId('label') }, e),
    [r, i] = C(o, ['ref']),
    s = io(
      () => t,
      () => 'label',
    );
  return (
    R(() => $(n.registerLabel(i.id))),
    b(
      te,
      E(
        {
          as: 'label',
          get for() {
            return s() === 'label' ? n.fieldId() : void 0;
          },
        },
        () => n.dataset(),
        i,
      ),
    )
  );
}
var Xi = ['id', 'aria-label', 'aria-labelledby', 'aria-describedby'];
function Zi(e) {
  const t = rt(),
    n = Y({ id: t.generateId('field') }, e);
  return (
    R(() => $(t.registerField(A(n.id)))),
    {
      fieldProps: {
        id: () => A(n.id),
        ariaLabel: () => A(n['aria-label']),
        ariaLabelledBy: () => t.getAriaLabelledBy(A(n.id), A(n['aria-label']), A(n['aria-labelledby'])),
        ariaDescribedBy: () => t.getAriaDescribedBy(A(n['aria-describedby'])),
      },
    }
  );
}
function Gi(e, t) {
  R(
    qt(e, (n) => {
      if (n == null) {
        return;
      }
      const o = Qi(n);
      o != null &&
        (o.addEventListener('reset', t, { passive: !0 }),
        $(() => {
          o.removeEventListener('reset', t);
        }));
    }),
  );
}
function Qi(e) {
  return Ji(e) ? e.form : e.closest('form');
}
function Ji(e) {
  return e.matches('textarea, input, select, button');
}
var es = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function ts(e) {
  const t = {};
  let n;
  while ((n = es.exec(e))) {
    t[n[1]] = n[2];
  }
  return t;
}
function lo(e, t) {
  return typeof t == 'string' && (t = ts(t)), { ...e, ...t };
}
var co = (e, t) => (e && (typeof e == 'function' ? e(t) : e[0](e[1], t)), t.defaultPrevented),
  ze = (e, t) => {
    if (e.contains(t)) {
      return !0;
    }
    let n = t;
    while (n) {
      if (n === e) {
        return !0;
      }
      n = n._$host ?? n.parentElement;
    }
    return !1;
  },
  ns = (e) => O(() => x(e.element)?.tagName.toLowerCase() ?? e.fallback),
  os = ns,
  uo = (e) => typeof e == 'function' && e.length > 0,
  rs = ['button', 'color', 'file', 'image', 'reset', 'submit'],
  is = (e, t) => (e === 'button' ? !0 : e === 'input' && t !== void 0 ? rs.indexOf(t) !== -1 : !1),
  Ne = (e) => (e ? '' : void 0),
  ss = (e) => {
    const [t, n] = C(e, ['as']),
      o = O(() => t.as ?? 'div');
    return O(() => {
      const i = o();
      switch (typeof i) {
        case 'function':
          return G(() => i(n));
        case 'string':
          return b(Zn, E({ component: i }, n));
      }
    });
  },
  it = ss,
  as = (e) => {
    const [t, n] = L(null),
      [o, r] = C(e, ['ref', 'type']),
      i = os({ element: t, fallback: 'button' }),
      s = O(() => is(i(), o.type));
    return b(
      it,
      E(
        {
          as: 'button',
          get type() {
            return s() ? 'button' : void 0;
          },
          get role() {
            return s() ? void 0 : 'button';
          },
        },
        r,
      ),
    );
  },
  fo = as,
  mt = new Map(),
  go = (e, t) => {
    if (mt.has(e)) {
      return mt.get(e);
    }
    const n = q(t);
    return mt.set(e, n), n;
  },
  po = (e) => {
    const t = mt.get(e);
    if (t) {
      return K(t);
    }
  },
  ct = new Map(),
  ls = (e) => {
    R(() => {
      const t = x(e.style) ?? {},
        n = x(e.properties) ?? [],
        o = {};
      for (const i in t) {
        o[i] = e.element.style[i];
      }
      const r = ct.get(e.key);
      r ? r.activeCount++ : ct.set(e.key, { activeCount: 1, originalStyles: o, properties: n.map((i) => i.key) }),
        Object.assign(e.element.style, e.style);
      for (const i of n) {
        e.element.style.setProperty(i.key, i.value);
      }
      $(() => {
        const i = ct.get(e.key);
        if (i) {
          if (i.activeCount !== 1) {
            i.activeCount--;
            return;
          }
          ct.delete(e.key);
          for (const [s, l] of Object.entries(i.originalStyles)) {
            e.element.style[s] = l;
          }
          for (const s of i.properties) {
            e.element.style.removeProperty(s);
          }
          e.element.style.length === 0 && e.element.removeAttribute('style'), e.cleanup?.();
        }
      });
    });
  },
  Nt = ls,
  cs = (e) => {
    const t = j({ enabled: !0 }, e);
    R(() => {
      x(t.enabled) &&
        (document.addEventListener('keydown', n),
        $(() => {
          document.removeEventListener('keydown', n);
        }));
    });
    const n = (o) => {
      o.key === 'Escape' && t.onEscapeKeyDown(o);
    };
  },
  us = cs,
  ds = (e) => {
    const t = j({ enabled: !0 }, e);
    R(() => {
      const { body: n } = document;
      x(t.enabled) && Nt({ key: 'no-pointer-events', element: n, style: { pointerEvents: 'none' } });
    });
  },
  fs = ds,
  gs = 'dismissible.outsideFocus',
  ps = { bubbles: !1, cancelable: !0 },
  ms = (e) => {
    const t = j({ enabled: !0, ignorePointerEvents: !1 }, e);
    let n = !1;
    R(() => {
      if (!x(t.enabled)) {
        return;
      }
      const i = x(t.ignorePointerEvents);
      document.addEventListener('focusin', o),
        i && document.addEventListener('pointerdown', r),
        $(() => {
          document.removeEventListener('focusin', o), i && document.removeEventListener('pointerdown', r);
        });
    });
    const o = (i) => {
        if (n) {
          n = !1;
          return;
        }
        const s = x(t.element);
        if (s && !ze(s, i.target)) {
          const l = new CustomEvent(gs, ps);
          s.dispatchEvent(l), t.onFocus(l);
        }
      },
      r = () => {
        n = !0;
      };
  },
  hs = ms,
  vs = (e) => {
    const t = j({ enabled: !0, strategy: 'pointerup' }, e);
    R(() => {
      if (!x(t.enabled)) {
        return;
      }
      const o = x(t.strategy);
      document.addEventListener(o, n),
        $(() => {
          document.removeEventListener(o, n);
        });
    });
    const n = (o) => {
      const r = x(t.element),
        i = x(t.ignore);
      r && !ze(r, o.target) && !(i && i.some((s) => s && ze(s, o.target))) && t.onPointer(o);
    };
  },
  bs = vs,
  ys = (e) => {
    const t = j(
      {
        dismissOnEscapeKeyDown: !0,
        dismissOnOutsideFocus: !0,
        dismissOnOutsidePointer: !0,
        outsidePointerStrategy: 'pointerup',
        noOutsidePointerEvents: !0,
      },
      e,
    );
    us({
      enabled: () => x(t.dismissOnEscapeKeyDown),
      onEscapeKeyDown: (n) => {
        t.onEscapeKeyDown?.(n), n.defaultPrevented || t.onDismiss('escapeKey');
      },
    }),
      hs({
        enabled: () => x(t.dismissOnOutsideFocus),
        onFocus: (n) => {
          t.onOutsideFocus?.(n), n.defaultPrevented || t.onDismiss('outsideFocus');
        },
        element: () => x(t.element),
        ignorePointerEvents: () => x(t.noOutsidePointerEvents) || x(t.dismissOnOutsidePointer),
      }),
      bs({
        enabled: () => x(t.dismissOnOutsidePointer),
        strategy: () => x(t.outsidePointerStrategy),
        ignore: () => x(t.outsidePointerIgnore) ?? [],
        onPointer: (n) => {
          if ((t.onOutsidePointer?.(n), !n.defaultPrevented)) {
            const o = n.button === 0 && n.ctrlKey === !0;
            if (n.button === 2 || o) {
              return;
            }
            t.onDismiss('outsidePointer');
          }
        },
        element: () => x(t.element),
      }),
      fs({ enabled: () => x(t.noOutsidePointerEvents) });
  },
  ws = ys,
  Bt = q(),
  xs = (e) => {
    const t = j({ dismissibleId: ce() }, e);
    return O(() => {
      if (K(Bt)) {
        return b(Tn, e);
      }
      const [r, i] = L([t.dismissibleId]),
        s = (a) => {
          i((c) => [...c, a]);
        },
        l = (a) => {
          i((c) => c.filter((p) => p !== a));
        };
      return b(Bt.Provider, {
        value: { layers: r, onLayerShow: s, onLayerDismiss: l },
        get children() {
          return b(Tn, e);
        },
      });
    });
  },
  [Ic, Ft] = L([]),
  Tn = (e) => {
    const t = j(
        {
          enabled: !0,
          dismissibleId: ce(),
          dismissOnEscapeKeyDown: !0,
          dismissOnOutsideFocus: !0,
          dismissOnOutsidePointer: !0,
          outsidePointerStrategy: 'pointerup',
          noOutsidePointerEvents: !0,
        },
        e,
      ),
      [n, o] = C(t, [
        'enabled',
        'children',
        'dismissOnEscapeKeyDown',
        'dismissOnOutsideFocus',
        'dismissOnOutsidePointer',
        'outsidePointerStrategy',
        'outsidePointerIgnore',
        'noOutsidePointerEvents',
        'onDismiss',
      ]),
      r = K(Bt);
    $(() => {
      r.onLayerDismiss(t.dismissibleId), Ft((a) => a.filter((c) => c !== t.dismissibleId));
    }),
      R(() => {
        n.enabled
          ? (r.onLayerShow(t.dismissibleId), Ft((a) => [...a, t.dismissibleId]))
          : (r.onLayerDismiss(t.dismissibleId), Ft((a) => a.filter((c) => c !== t.dismissibleId)));
      });
    const i = () => r.layers()[r.layers().length - 1] === t.dismissibleId;
    ws({
      dismissOnEscapeKeyDown: () => x(n.dismissOnEscapeKeyDown) && i() && n.enabled,
      dismissOnOutsideFocus: () => x(n.dismissOnOutsideFocus) && i() && n.enabled,
      dismissOnOutsidePointer: () => x(n.dismissOnOutsidePointer) && i() && n.enabled,
      outsidePointerStrategy: n.outsidePointerStrategy,
      outsidePointerIgnore: n.outsidePointerIgnore,
      noOutsidePointerEvents: () => x(n.noOutsidePointerEvents) && n.enabled,
      onDismiss: (a) => {
        n.onDismiss(a);
      },
      ...o,
    });
    const s = O(() => n.children),
      l = () => {
        const a = s();
        return uo(a)
          ? a({
              get isLastLayer() {
                return i();
              },
            })
          : a;
      };
    return G(() => l());
  },
  Ps = xs,
  Ss = Ps;
function Es(e) {
  const [t, n] = L(e.initialValue),
    o = () => e.value?.() !== void 0,
    r = () => (o() ? e.value?.() : t());
  return [
    r,
    (s) =>
      G(() => {
        let l;
        return typeof s == 'function' ? (l = s(r())) : (l = s), Object.is(l, r()) || (o() || n(l), e.onChange?.(l)), l;
      }),
  ];
}
var Os = Es,
  W = (e) => (typeof e == 'function' ? e() : e),
  Cs = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function Ds(e) {
  const t = {};
  let n;
  while ((n = Cs.exec(e))) {
    t[n[1]] = n[2];
  }
  return t;
}
function Ts(e, t) {
  return typeof t == 'string' && (t = Ds(t)), { ...e, ...t };
}
var Be = (e) => requestAnimationFrame(() => requestAnimationFrame(e)),
  Rs =
    'a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])',
  It = 'focusTrap.initialFocus',
  $t = 'focusTrap.finalFocus',
  Rn = { bubbles: !1, cancelable: !0 },
  Ls = (e) => {
    const t = j({ enabled: !0, observeChanges: !0, restoreFocus: !0 }, e),
      [n, o] = L(null),
      r = O(() => {
        const d = n();
        return d ? (d[0] ?? null) : null;
      }),
      i = O(() => {
        const d = n();
        return d ? (d[d.length - 1] ?? null) : null;
      });
    let s = null;
    const l = () => {
      a(W(t.element)), (document.activeElement === null || document.activeElement === document.body) && c(W(t.element));
    };
    R(() => {
      const d = W(t.element);
      if (d && W(t.enabled)) {
        (s = document.activeElement),
          G(() => {
            a(d), c(d);
          });
        const m = new MutationObserver(l);
        W(t.observeChanges) &&
          m.observe(d, { subtree: !0, childList: !0, attributes: !0, attributeFilter: ['tabindex'] }),
          $(() => {
            W(t.observeChanges) && m.disconnect(), o(null), f(d);
          });
      }
    }),
      R(() => {
        const d = n();
        d === null ||
          d.length !== 0 ||
          (document.addEventListener('keydown', g),
          $(() => {
            document.removeEventListener('keydown', g);
          }));
      }),
      R(() => {
        const d = r();
        d &&
          (d.addEventListener('keydown', p),
          $(() => {
            d.removeEventListener('keydown', p);
          }));
      }),
      R(() => {
        const d = i();
        d &&
          (d.addEventListener('keydown', u),
          $(() => {
            d.removeEventListener('keydown', u);
          }));
      });
    const a = (d) => {
        o(Array.from(d.querySelectorAll(Rs)));
      },
      c = (d) => {
        const m = W(t.initialFocusElement) ?? r() ?? d,
          v = t.onInitialFocus;
        let h;
        v &&
          ((h = new CustomEvent(It, Rn)), d.addEventListener(It, v), d.dispatchEvent(h), d.removeEventListener(It, v)),
          h?.defaultPrevented !== !0 && Be(() => m.focus());
      },
      p = (d) => {
        d.key === 'Tab' && d.shiftKey && (d.preventDefault(), i().focus());
      },
      u = (d) => {
        d.key === 'Tab' && !d.shiftKey && (d.preventDefault(), r().focus());
      },
      g = (d) => {
        d.key === 'Tab' && d.preventDefault();
      },
      f = (d) => {
        if (!W(t.restoreFocus)) {
          return;
        }
        const v = W(t.finalFocusElement) ?? s;
        if (!v) {
          return;
        }
        let h;
        const w = t.onFinalFocus;
        w &&
          ((h = new CustomEvent($t, Rn)), d.addEventListener($t, w), d.dispatchEvent(h), d.removeEventListener($t, w)),
          h?.defaultPrevented !== !0 && Be(() => v.focus());
      };
  },
  Fs = Ls,
  Is = Fs,
  $s = (e) => {
    let t,
      n = !1;
    return () => (n ? t : ((n = !0), (t = O(e))));
  },
  ks = $s,
  As = (e, t) => {
    switch (t) {
      case 'x':
        return [e.clientWidth, e.scrollLeft, e.scrollWidth];
      case 'y':
        return [e.clientHeight, e.scrollTop, e.scrollHeight];
    }
  },
  _s = (e, t) => {
    const n = getComputedStyle(e),
      o = t === 'x' ? n.overflowX : n.overflowY;
    return o === 'auto' || o === 'scroll' || (e.tagName === 'HTML' && o === 'visible');
  },
  Ms = (e, t, n) => {
    const o = t === 'x' && window.getComputedStyle(e).direction === 'rtl' ? -1 : 1;
    let r = e,
      i = 0,
      s = 0,
      l = !1;
    do {
      const [a, c, p] = As(r, t),
        u = p - a - o * c;
      (c !== 0 || u !== 0) && _s(r, t) && ((i += u), (s += c)),
        r === (n ?? document.documentElement) ? (l = !0) : (r = r._$host ?? r.parentElement);
    } while (r && !l);
    return [i, s];
  },
  [Ln, Fn] = L([]),
  zs = (e) => Ln().indexOf(e) === Ln().length - 1,
  Ns = (e) => {
    const t = j(
        {
          element: null,
          enabled: !0,
          hideScrollbar: !0,
          preventScrollbarShift: !0,
          preventScrollbarShiftMode: 'padding',
          restoreScrollPosition: !0,
          allowPinchZoom: !1,
        },
        e,
      ),
      n = ce();
    let o = [0, 0],
      r = null,
      i = null;
    R(() => {
      x(t.enabled) &&
        (Fn((c) => [...c, n]),
        $(() => {
          Fn((c) => c.filter((p) => p !== n));
        }));
    }),
      R(() => {
        if (!x(t.enabled) || !x(t.hideScrollbar)) {
          return;
        }
        const { body: c } = document,
          p = window.innerWidth - c.offsetWidth;
        if (x(t.preventScrollbarShift)) {
          const u = { overflow: 'hidden' },
            g = [];
          p > 0 &&
            (x(t.preventScrollbarShiftMode) === 'padding'
              ? (u.paddingRight = `calc(${window.getComputedStyle(c).paddingRight} + ${p}px)`)
              : (u.marginRight = `calc(${window.getComputedStyle(c).marginRight} + ${p}px)`),
            g.push({ key: '--scrollbar-width', value: `${p}px` }));
          const f = window.scrollY,
            d = window.scrollX;
          Nt({
            key: 'prevent-scroll',
            element: c,
            style: u,
            properties: g,
            cleanup: () => {
              x(t.restoreScrollPosition) && p > 0 && window.scrollTo(d, f);
            },
          });
        } else {
          Nt({ key: 'prevent-scroll', element: c, style: { overflow: 'hidden' } });
        }
      }),
      R(() => {
        !zs(n) ||
          !x(t.enabled) ||
          (document.addEventListener('wheel', l, { passive: !1 }),
          document.addEventListener('touchstart', s, { passive: !1 }),
          document.addEventListener('touchmove', a, { passive: !1 }),
          $(() => {
            document.removeEventListener('wheel', l),
              document.removeEventListener('touchstart', s),
              document.removeEventListener('touchmove', a);
          }));
      });
    const s = (c) => {
        (o = In(c)), (r = null), (i = null);
      },
      l = (c) => {
        const p = c.target,
          u = x(t.element),
          g = Bs(c),
          f = Math.abs(g[0]) > Math.abs(g[1]) ? 'x' : 'y',
          d = f === 'x' ? g[0] : g[1],
          m = $n(p, f, d, u);
        let v;
        u && ze(u, p) ? (v = !m) : (v = !0), v && c.cancelable && c.preventDefault();
      },
      a = (c) => {
        const p = x(t.element),
          u = c.target;
        let g;
        if (c.touches.length === 2) {
          g = !x(t.allowPinchZoom);
        } else {
          if (r == null || i === null) {
            const f = In(c).map((m, v) => o[v] - m),
              d = Math.abs(f[0]) > Math.abs(f[1]) ? 'x' : 'y';
            (r = d), (i = d === 'x' ? f[0] : f[1]);
          }
          if (u.type === 'range') {
            g = !1;
          } else {
            const f = $n(u, r, i, p);
            p && ze(p, u) ? (g = !f) : (g = !0);
          }
        }
        g && c.cancelable && c.preventDefault();
      };
  },
  Bs = (e) => [e.deltaX, e.deltaY],
  In = (e) => (e.changedTouches[0] ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0]),
  $n = (e, t, n, o) => {
    const r = o !== null && ze(o, e),
      [i, s] = Ms(e, t, r ? o : void 0);
    return !((n > 0 && Math.abs(i) <= 1) || (n < 0 && Math.abs(s) < 1));
  },
  Hs = Ns,
  js = Hs,
  Vs = (e) => {
    const t = j({ initialRegistered: !1 }, e),
      [n, o] = L(t.initialRegistered);
    return [
      O(() => {
        if (n()) {
          return x(t.value);
        }
      }),
      () => {
        o(!0);
      },
      () => {
        o(!1);
      },
    ];
  },
  kn = Vs,
  mo = q(),
  Ws = (e) => (e === void 0 ? mo : go(`dialog-${e}`)),
  ho = (e) => {
    if (e === void 0) {
      const n = K(mo);
      if (!n) {
        throw new Error('[corvu]: Dialog context not found. Make sure to wrap Dialog components in <Dialog.Root>');
      }
      return n;
    }
    const t = po(`dialog-${e}`);
    if (!t) {
      throw new Error(
        `[corvu]: Dialog context with id "${e}" not found. Make sure to wrap Dialog components in <Dialog.Root contextId="${e}">`,
      );
    }
    return t;
  },
  vo = q(),
  qs = (e) => (e === void 0 ? vo : go(`dialog-internal-${e}`)),
  Fe = (e) => {
    if (e === void 0) {
      const n = K(vo);
      if (!n) {
        throw new Error('[corvu]: Dialog context not found. Make sure to wrap Dialog components in <Dialog.Root>');
      }
      return n;
    }
    const t = po(`dialog-internal-${e}`);
    if (!t) {
      throw new Error(
        `[corvu]: Dialog context with id "${e}" not found. Make sure to wrap Dialog components in <Dialog.Root contextId="${e}">`,
      );
    }
    return t;
  },
  Ks = (e) => {
    const [t, n] = C(e, ['contextId', 'onClick']),
      o = O(() => Fe(t.contextId));
    return b(
      fo,
      E(
        {
          onClick: (i) => {
            !co(t.onClick, i) && o().setOpen(!1);
          },
          'aria-label': 'close',
          'data-corvu-dialog-close': '',
        },
        n,
      ),
    );
  },
  Us = Ks,
  Ys = (e) => {
    const [t, n] = C(e, ['forceMount', 'contextId', 'ref', 'style']),
      o = O(() => Fe(t.contextId)),
      r = () => Zt(o().open, () => t.forceMount, o().contentPresent),
      i = O(() => o().open() || o().contentPresent());
    return b(Ss, {
      get element() {
        return o().contentRef;
      },
      get enabled() {
        return i();
      },
      get dismissibleId() {
        return o().dialogId();
      },
      onDismiss: () => o().setOpen(!1),
      get dismissOnEscapeKeyDown() {
        return o().closeOnEscapeKeyDown;
      },
      get dismissOnOutsideFocus() {
        return o().closeOnOutsideFocus;
      },
      get dismissOnOutsidePointer() {
        return o().closeOnOutsidePointer;
      },
      get outsidePointerStrategy() {
        return o().closeOnOutsidePointerStrategy;
      },
      outsidePointerIgnore: () => [o().triggerRef()],
      get noOutsidePointerEvents() {
        return o().noOutsidePointerEvents;
      },
      get onEscapeKeyDown() {
        return o().onEscapeKeyDown;
      },
      get onOutsideFocus() {
        return o().onOutsideFocus;
      },
      get onOutsidePointer() {
        return o().onOutsidePointer;
      },
      children: (s) =>
        b(ne, {
          get when() {
            return r();
          },
          get children() {
            return b(
              it,
              E(
                {
                  as: 'div',
                  get style() {
                    return lo({ 'pointer-events': s.isLastLayer ? 'auto' : void 0 }, t.style);
                  },
                  get id() {
                    return o().dialogId();
                  },
                  get role() {
                    return o().role();
                  },
                  tabIndex: '-1',
                  get 'aria-describedby'() {
                    return o().descriptionId();
                  },
                  get 'aria-labelledby'() {
                    return o().labelId();
                  },
                  get 'aria-modal'() {
                    return o().modal() ? 'true' : 'false';
                  },
                  get 'data-closed'() {
                    return Ne(!o().open());
                  },
                  get 'data-open'() {
                    return Ne(o().open());
                  },
                  'data-corvu-dialog-content': '',
                },
                n,
              ),
            );
          },
        }),
    });
  },
  Xs = Ys,
  Zs = (e) => {
    const [t, n] = C(e, ['contextId']),
      o = O(() => Fe(t.contextId));
    return (
      R(() => {
        const r = o();
        r.registerDescriptionId(), $(() => r.unregisterDescriptionId());
      }),
      b(
        it,
        E(
          {
            as: 'p',
            get id() {
              return o().descriptionId();
            },
            'data-corvu-dialog-description': '',
          },
          n,
        ),
      )
    );
  },
  Gs = Zs,
  Qs = (e) => {
    const [t, n] = C(e, ['contextId']),
      o = O(() => Fe(t.contextId));
    return (
      R(() => {
        const r = o();
        r.registerLabelId(), $(() => r.unregisterLabelId());
      }),
      b(
        it,
        E(
          {
            as: 'h2',
            get id() {
              return o().labelId();
            },
            'data-corvu-dialog-label': '',
          },
          n,
        ),
      )
    );
  },
  Js = Qs,
  ea = (e) => {
    const [t, n] = C(e, ['forceMount', 'contextId', 'ref', 'style']),
      o = O(() => Fe(t.contextId)),
      r = () => Zt(o().open, () => t.forceMount, o().overlayPresent);
    return b(ne, {
      get when() {
        return r();
      },
      get children() {
        return b(
          it,
          E(
            {
              as: 'div',
              get style() {
                return lo({ 'pointer-events': 'auto' }, t.style);
              },
              'aria-hidden': 'true',
              get 'data-closed'() {
                return Ne(!o().open());
              },
              get 'data-open'() {
                return Ne(o().open());
              },
              'data-corvu-dialog-overlay': '',
            },
            n,
          ),
        );
      },
    });
  },
  ta = ea,
  na = (e) => {
    const [t, n] = C(e, ['forceMount', 'contextId']),
      o = O(() => Fe(t.contextId)),
      r = () => Zt(o().open, () => t.forceMount, o().contentPresent, o().overlayPresent);
    return b(ne, {
      get when() {
        return r();
      },
      get children() {
        return b(Gn, n);
      },
    });
  },
  bo = na,
  kt = !0,
  oa = (e) => {
    const t = j(
        {
          role: 'dialog',
          initialOpen: !1,
          modal: !0,
          closeOnEscapeKeyDown: !0,
          closeOnOutsideFocus: () => e.trapFocus ?? !0,
          closeOnOutsidePointer: () => e.modal ?? kt,
          closeOnOutsidePointerStrategy: 'pointerup',
          noOutsidePointerEvents: () => e.modal ?? kt,
          preventScroll: () => e.modal ?? kt,
          hideScrollbar: !0,
          preventScrollbarShift: !0,
          preventScrollbarShiftMode: 'padding',
          restoreScrollPosition: !0,
          allowPinchZoom: !0,
          trapFocus: !0,
          restoreFocus: !0,
          dialogId: ce(),
        },
        e,
      ),
      [n, o] = Os({ value: () => t.open, initialValue: t.initialOpen, onChange: t.onOpenChange }),
      [r, i, s] = kn({ value: () => t.labelId ?? ce() }),
      [l, a, c] = kn({ value: () => t.descriptionId ?? ce() }),
      [p, u] = L(null),
      [g, f] = L(null),
      [d, m] = L(null),
      { present: v } = zt({ show: n, element: g }),
      { present: h } = zt({ show: n, element: d });
    Is({
      element: g,
      enabled: () => n() && t.trapFocus,
      initialFocusElement: () => t.initialFocusEl ?? null,
      restoreFocus: () => t.restoreFocus,
      finalFocusElement: () => t.finalFocusEl ?? null,
      onFinalFocus: t.onFinalFocus,
      onInitialFocus: t.onInitialFocus,
    }),
      js({
        element: g,
        enabled: () => v() && x(t.preventScroll),
        hideScrollbar: () => t.hideScrollbar,
        preventScrollbarShift: () => t.preventScrollbarShift,
        preventScrollbarShiftMode: () => t.preventScrollbarShiftMode,
        restoreScrollPosition: () => t.restoreScrollPosition,
        allowPinchZoom: () => t.allowPinchZoom,
      });
    const w = {
        get role() {
          return t.role;
        },
        get open() {
          return n();
        },
        setOpen: o,
        get modal() {
          return t.modal;
        },
        get closeOnEscapeKeyDown() {
          return t.closeOnEscapeKeyDown;
        },
        get closeOnOutsideFocus() {
          return x(t.closeOnOutsideFocus);
        },
        get closeOnOutsidePointer() {
          return x(t.closeOnOutsidePointer);
        },
        get closeOnOutsidePointerStrategy() {
          return t.closeOnOutsidePointerStrategy;
        },
        get noOutsidePointerEvents() {
          return x(t.noOutsidePointerEvents);
        },
        get preventScroll() {
          return x(t.preventScroll);
        },
        get hideScrollbar() {
          return t.hideScrollbar;
        },
        get preventScrollbarShift() {
          return x(t.preventScrollbarShift);
        },
        get preventScrollbarShiftMode() {
          return t.preventScrollbarShiftMode;
        },
        get restoreScrollPosition() {
          return t.restoreScrollPosition;
        },
        get allowPinchZoom() {
          return t.allowPinchZoom;
        },
        get trapFocus() {
          return t.trapFocus;
        },
        get restoreFocus() {
          return t.restoreFocus;
        },
        get initialFocusEl() {
          return t.initialFocusEl;
        },
        get finalFocusEl() {
          return t.finalFocusEl;
        },
        get contentPresent() {
          return v();
        },
        get contentRef() {
          return g();
        },
        get overlayPresent() {
          return h();
        },
        get overlayRef() {
          return d();
        },
        get dialogId() {
          return t.dialogId;
        },
        get labelId() {
          return r();
        },
        get descriptionId() {
          return l();
        },
      },
      D = ks(() => t.children),
      T = () => {
        const S = D()();
        return uo(S) ? S(w) : S;
      };
    return O(() => {
      const S = Ws(t.contextId),
        F = qs(t.contextId);
      return b(S.Provider, {
        value: {
          role: () => t.role,
          open: n,
          setOpen: o,
          modal: () => t.modal,
          closeOnEscapeKeyDown: () => t.closeOnEscapeKeyDown,
          closeOnOutsideFocus: () => x(t.closeOnOutsideFocus),
          closeOnOutsidePointer: () => x(t.closeOnOutsidePointer),
          closeOnOutsidePointerStrategy: () => t.closeOnOutsidePointerStrategy,
          noOutsidePointerEvents: () => x(t.noOutsidePointerEvents),
          preventScroll: () => x(t.preventScroll),
          hideScrollbar: () => t.hideScrollbar,
          preventScrollbarShift: () => x(t.preventScrollbarShift),
          preventScrollbarShiftMode: () => t.preventScrollbarShiftMode,
          restoreScrollPosition: () => t.restoreScrollPosition,
          allowPinchZoom: () => t.allowPinchZoom,
          trapFocus: () => t.trapFocus,
          restoreFocus: () => t.restoreFocus,
          initialFocusEl: () => t.initialFocusEl,
          finalFocusEl: () => t.finalFocusEl,
          contentPresent: v,
          contentRef: g,
          overlayPresent: h,
          overlayRef: d,
          dialogId: () => t.dialogId,
          labelId: r,
          descriptionId: l,
        },
        get children() {
          return b(F.Provider, {
            get value() {
              return {
                role: () => t.role,
                open: n,
                setOpen: o,
                modal: () => t.modal,
                closeOnEscapeKeyDown: () => t.closeOnEscapeKeyDown,
                onEscapeKeyDown: t.onEscapeKeyDown,
                closeOnOutsideFocus: () => x(t.closeOnOutsideFocus),
                closeOnOutsidePointer: () => x(t.closeOnOutsidePointer),
                closeOnOutsidePointerStrategy: () => t.closeOnOutsidePointerStrategy,
                onOutsideFocus: t.onOutsideFocus,
                onOutsidePointer: t.onOutsidePointer,
                noOutsidePointerEvents: () => x(t.noOutsidePointerEvents),
                preventScroll: () => x(t.preventScroll),
                hideScrollbar: () => t.hideScrollbar,
                preventScrollbarShift: () => x(t.preventScrollbarShift),
                preventScrollbarShiftMode: () => t.preventScrollbarShiftMode,
                restoreScrollPosition: () => t.restoreScrollPosition,
                allowPinchZoom: () => t.allowPinchZoom,
                trapFocus: () => t.trapFocus,
                restoreFocus: () => t.restoreFocus,
                initialFocusEl: () => t.initialFocusEl,
                finalFocusEl: () => t.finalFocusEl,
                contentPresent: v,
                contentRef: g,
                overlayPresent: h,
                overlayRef: d,
                dialogId: () => t.dialogId,
                labelId: r,
                registerLabelId: i,
                unregisterLabelId: s,
                descriptionId: l,
                registerDescriptionId: a,
                unregisterDescriptionId: c,
                setContentRef: f,
                setOverlayRef: m,
                triggerRef: p,
                setTriggerRef: u,
              };
            },
            get children() {
              return G(() => T());
            },
          });
        },
      });
    });
  },
  ra = oa,
  ia = (e) => {
    const [t, n] = C(e, ['contextId', 'ref', 'onClick']),
      o = O(() => Fe(t.contextId));
    return b(
      fo,
      E(
        {
          onClick: (i) => {
            !co(t.onClick, i) && o().setOpen((s) => !s);
          },
          get 'aria-controls'() {
            return o().dialogId();
          },
          get 'aria-expanded'() {
            return o().open() ? 'true' : 'false';
          },
          'aria-haspopup': 'dialog',
          get 'data-closed'() {
            return Ne(!o().open());
          },
          get 'data-open'() {
            return Ne(o().open());
          },
          'data-corvu-dialog-trigger': '',
        },
        n,
      ),
    );
  },
  sa = ia,
  aa = Object.assign(ra, {
    Trigger: sa,
    Portal: bo,
    Overlay: ta,
    Content: Xs,
    Label: Js,
    Description: Gs,
    Close: Us,
    useContext: ho,
  }),
  pe = aa,
  la = (e) => typeof e == 'function' && e.length > 0,
  se = (e) => (e ? '' : void 0),
  ca = (e, t) => {
    switch (t) {
      case 'x':
        return [e.clientWidth, e.scrollLeft, e.scrollWidth];
      case 'y':
        return [e.clientHeight, e.scrollTop, e.scrollHeight];
    }
  },
  ua = (e, t) => {
    const n = getComputedStyle(e),
      o = t === 'x' ? n.overflowX : n.overflowY;
    return o === 'auto' || o === 'scroll' || (e.tagName === 'HTML' && o === 'visible');
  },
  da = (e, t, n) => {
    const o = t === 'x' && window.getComputedStyle(e).direction === 'rtl' ? -1 : 1;
    let r = e,
      i = 0,
      s = 0,
      l = !1;
    do {
      const [a, c, p] = ca(r, t),
        u = p - a - o * c;
      (c !== 0 || u !== 0) && ua(r, t) && ((i += u), (s += c)),
        r === (n ?? document.documentElement) ? (l = !0) : (r = r._$host ?? r.parentElement);
    } while (r && !l);
    return [i, s];
  },
  ht = new Map(),
  yo = (e, t) => {
    if (ht.has(e)) {
      return ht.get(e);
    }
    const n = q(t);
    return ht.set(e, n), n;
  },
  wo = (e) => {
    const t = ht.get(e);
    if (t) {
      return K(t);
    }
  };
function fa(e) {
  const [t, n] = L(e.initialValue),
    o = () => e.value?.() !== void 0,
    r = () => (o() ? e.value?.() : t());
  return [
    r,
    (s) =>
      G(() => {
        let l;
        return typeof s == 'function' ? (l = s(r())) : (l = s), Object.is(l, r()) || (o() || n(l), e.onChange?.(l)), l;
      }),
  ];
}
var An = fa,
  ga = (e) => {
    let t,
      n = !1;
    return () => (n ? t : ((n = !0), (t = O(e))));
  },
  pa = ga,
  ma = (e) => {
    const [t, n] = L(0);
    R(() => {
      const i = W(e.element);
      if (!i) {
        return;
      }
      r(i);
      const s = new ResizeObserver(o);
      s.observe(i),
        $(() => {
          s.disconnect();
        });
    });
    const o = ([i]) => {
        r(i.target);
      },
      r = (i) => {
        switch (W(e.dimension)) {
          case 'width':
            n(i.offsetWidth);
            break;
          case 'height':
            n(i.offsetHeight);
            break;
        }
      };
    return t;
  },
  ha = ma;
function va(e) {
  const t = j({ enabled: !0, dimension: 'both' }, e),
    [n, o] = L(!1),
    [r, i] = L(null);
  let s = null;
  R(() => {
    const c = W(t.element),
      p = W(t.enabled);
    if (!c || !p) {
      return;
    }
    const u = new ResizeObserver(l);
    u.observe(c),
      c.addEventListener('transitionend', a),
      $(() => {
        u.disconnect(), c.removeEventListener('transitionend', a), a();
      });
  });
  const l = ([c]) => {
      if (n()) {
        return;
      }
      const p = c.target,
        u = [p.offsetWidth, p.offsetHeight],
        g = W(t.dimension);
      g === 'both'
        ? s
          ? s[0] !== u[0] &&
            s[1] !== u[1] &&
            (ae(() => {
              i(s), o(!0);
            }),
            Be(() => {
              i(u), Number.parseFloat(getComputedStyle(c.target).transitionDuration) === 0 && a();
            }))
          : (s = u)
        : s
          ? ut(g, s) !== ut(g, u) &&
            (ae(() => {
              i(ut(g, s)), o(!0);
            }),
            Be(() => {
              i(ut(g, u)), Number.parseFloat(getComputedStyle(c.target).transitionDuration) === 0 && a();
            }))
          : (s = u);
    },
    a = () => {
      if (!n()) {
        return;
      }
      const c = W(t.element);
      c ? (s = [c.offsetWidth, c.offsetHeight]) : (s = null),
        ae(() => {
          o(!1), i(null);
        });
    };
  return { transitioning: n, transitionSize: r };
}
var ut = (e, t) => {
    switch (e) {
      case 'width':
        return t[0];
      case 'height':
        return t[1];
    }
  },
  ba = va,
  ya = ba,
  wa = (e, t) => (e.length > 0 ? () => e(G(t)) : e);
function xa(e, t) {
  let n = 0;
  const o = e.map((r, i) => O(() => ((n = i), r()), void 0, ar ? { name: i + 1 + '. source', equals: !1 } : to));
  return O(() => o.map((r) => r())[n], void 0, t);
}
function _n(e, t, n) {
  let o = () => t;
  const [r, i] = L(t, to),
    s = O(
      wa(e, () => o()),
      t,
    );
  return [(o = xa([r, s], n)), (l) => i(() => (typeof l == 'function' ? l(G(o)) : l))];
}
var Pa = (e) => b(pe.Close, E({ 'data-corvu-drawer-close': '', 'data-corvu-dialog-close': null }, e)),
  Sa = Pa,
  xo = (e, t, n, o) => {
    if (n === void 0 || o === void 0) {
      return { value: e, offset: dt(e, t) };
    }
    const r = o[n - 1] !== void 0 && o[n - 1] !== null ? dt(o[n - 1], t) : void 0,
      i = o[n] !== void 0 && o[n] !== null ? dt(o[n], t) : void 0;
    return { value: e, offset: dt(e, t), lowerBreakPoint: i, upperBreakPoint: r };
  },
  dt = (e, t) => {
    if (typeof e == 'number') {
      return t - e * t;
    }
    if (!e.endsWith('px')) {
      throw new Error(`[corvu] Snap and break points must be a number or a string ending with 'px'. Got ${e}`);
    }
    return t - Number.parseInt(e, 10);
  },
  Ea = (e, t, n, o) => {
    const r = Mn('upper', e, o ? n : t),
      i = Mn('lower', e, o ? n : t);
    return r
      ? i
        ? i.upperBreakPoint === void 0 || r.lowerBreakPoint === void 0
          ? Math.abs(i.offset - n) < Math.abs(r.offset - n)
            ? i
            : r
          : n < r.lowerBreakPoint
            ? i
            : r
        : r
      : i;
  },
  Mn = (e, t, n) =>
    t.reduce(
      (o, r) =>
        (e == 'upper' && r.offset >= n && (!o || r.offset < o.offset)) ||
        (e == 'lower' && r.offset <= n && (!o || r.offset > o.offset))
          ? r
          : o,
      void 0,
    ),
  Oa = (e, t, n) => {
    let o = e,
      r = !1;
    do {
      if (o.hasAttribute('data-corvu-no-drag') || o.type === 'range' || (o.tagName === 'SELECT' && n === 'mouse')) {
        return !1;
      }
      o === t ? (r = !0) : (o = o.parentElement);
    } while (o && !r);
    return !0;
  },
  Po = q(),
  Ca = (e) => (e === void 0 ? Po : yo(`drawer-${e}`)),
  Da = (e) => {
    if (e === void 0) {
      const n = K(Po);
      if (!n) {
        throw new Error('[corvu]: Drawer context not found. Make sure to wrap Drawer components in <Drawer.Root>');
      }
      return n;
    }
    const t = wo(`drawer-${e}`);
    if (!t) {
      throw new Error(
        `[corvu]: Drawer context with id "${e}" not found. Make sure to wrap Drawer components in <Drawer.Root contextId="${e}">`,
      );
    }
    return t;
  },
  So = q(),
  Ta = (e) => (e === void 0 ? So : yo(`drawer-internal-${e}`)),
  Eo = (e) => {
    if (e === void 0) {
      const n = K(So);
      if (!n) {
        throw new Error('[corvu]: Drawer context not found. Make sure to wrap Drawer components in <Drawer.Root>');
      }
      return n;
    }
    const t = wo(`drawer-internal-${e}`);
    if (!t) {
      throw new Error(
        `[corvu]: Drawer context with id "${e}" not found. Make sure to wrap Drawer components in <Drawer.Root contextId="${e}">`,
      );
    }
    return t;
  },
  Ra = (e) => {
    const [t, n] = C(e, ['contextId', 'style']);
    let o = !1,
      r = null,
      i = [0, 0],
      s,
      l = 0;
    const a = O(() => Eo(t.contextId)),
      c = O(() => pe.useContext(t.contextId)),
      p = O(() =>
        a()
          .snapPoints()
          .map((y, S) => xo(y, a().drawerSize(), S, a().breakPoints())),
      ),
      u = O(() => {
        switch (a().side()) {
          case 'top':
            return `translate3d(0, ${-a().translate()}px, 0)`;
          case 'bottom':
            return `translate3d(0, ${a().translate()}px, 0)`;
          case 'right':
            return `translate3d(${a().translate()}px, 0, 0)`;
          case 'left':
            return `translate3d(${-a().translate()}px, 0, 0)`;
        }
      }),
      g = O(() => {
        const y = a().transitionSize();
        if (y !== null) {
          switch (a().side()) {
            case 'top':
            case 'bottom':
              return `${y}px`;
          }
        }
      }),
      f = O(() => {
        const y = a().transitionSize();
        if (y !== null) {
          switch (a().side()) {
            case 'left':
            case 'right':
              return `${y}px`;
          }
        }
      });
    R(() => {
      c().open() &&
        (document.addEventListener('pointermove', m),
        document.addEventListener('touchmove', v),
        document.addEventListener('pointerup', w),
        document.addEventListener('touchend', D),
        document.addEventListener('contextmenu', T),
        $(() => {
          document.removeEventListener('pointermove', m),
            document.removeEventListener('touchmove', v),
            document.removeEventListener('pointerup', w),
            document.removeEventListener('touchend', D),
            document.removeEventListener('contextmenu', T);
        }));
    }),
      R(() => {
        a().transitionState() === 'closing' && a().setIsDragging(!1);
      });
    const d = (y) => {
        y.button === 0 &&
          Oa(y.target, c().contentRef(), y.pointerType) &&
          a().transitionState() !== 'closing' &&
          ((o = !0), a().handleScrollableElements() && (i = [y.clientX, y.clientY]));
      },
      m = (y) => {
        h(y.target, y.clientX, y.clientY);
      },
      v = (y) => {
        y.touches[0] && h(y.target, y.touches[0].clientX, y.touches[0].clientY);
      },
      h = (y, S, F) => {
        if (!o) {
          return;
        }
        if (!a().isDragging() || r === null) {
          const B = window.getSelection();
          if (B && B.toString().length > 0) {
            T();
            return;
          }
          if (a().handleScrollableElements()) {
            const H = [S, F].map((U, J) => i[J] - U),
              Q = Math.abs(H[0]) > Math.abs(H[1]) ? 'x' : 'y',
              k = Q === 'x' ? H[0] : H[1];
            if (Math.abs(k) < 0.3) {
              return;
            }
            const P = c().contentRef(),
              [_, N] = da(y, Q, P);
            if ((k > 0 && Math.abs(_) > 1) || (k < 0 && Math.abs(N) > 0)) {
              T();
              return;
            }
          }
          switch (a().side()) {
            case 'top':
            case 'bottom':
              r = F;
              break;
            case 'right':
            case 'left':
              r = S;
          }
          (s = new Date()),
            (l = a().translate()),
            ae(() => {
              a().setIsDragging(!0), a().setTransitionState(null);
            });
        }
        let I;
        switch (a().side()) {
          case 'top':
            I = -(r - F);
            break;
          case 'bottom':
            I = r - F;
            break;
          case 'right':
            I = r - S;
            break;
          case 'left':
            I = -(r - S);
            break;
        }
        (I -= a().resolvedActiveSnapPoint().offset), I > 0 && (I = a().dampFunction(I));
        const z = new Date();
        z.getTime() - s.getTime() > a().velocityCacheReset() && ((s = z), (l = a().translate())), a().setTranslate(-I);
      },
      w = (y) => {
        y.pointerType !== 'touch' && T();
      },
      D = (y) => {
        y.touches.length === 0 && T();
      },
      T = () => {
        if (((o = !1), !a().isDragging())) {
          return;
        }
        const y = new Date(),
          S = a().velocityFunction(-(l - a().translate()), y.getTime() - s.getTime() || 1),
          F = a().translate() * S,
          I = Ea(p(), a().translate(), F, a().allowSkippingSnapPoints());
        ae(() => {
          a().setTransitionState('snapping'), a().setIsDragging(!1);
        }),
          ae(() => {
            a().setActiveSnapPoint(I.value),
              I.offset === a().drawerSize()
                ? c().setOpen(!1)
                : (a().setTranslate(I.offset),
                  Number.parseFloat(a().drawerStyles().transitionDuration) === 0 && a().setTransitionState(null));
          });
      };
    return b(
      pe.Content,
      E(
        {
          get contextId() {
            return t.contextId;
          },
          get style() {
            return Ts(
              { transform: u(), 'transition-duration': a().isDragging() ? '0ms' : void 0, height: g(), width: f() },
              t.style,
            );
          },
          onPointerDown: d,
          onTouchStart: (y) => {
            y.touches.length === 1 && (r = null);
          },
          onTransitionEnd: () => {
            ae(() => {
              a().transitionState() === 'closing' && a().closeDrawer(),
                a().transitionState() !== 'resizing' && a().setTransitionState(null);
            });
          },
          get 'data-closing'() {
            return se(a().transitionState() === 'closing');
          },
          get 'data-opening'() {
            return se(a().transitionState() === 'opening');
          },
          get 'data-resizing'() {
            return se(a().transitionState() === 'resizing');
          },
          get 'data-snapping'() {
            return se(a().transitionState() === 'snapping');
          },
          get 'data-transitioning'() {
            return se(a().isTransitioning());
          },
          'data-corvu-drawer-content': '',
          'data-corvu-dialog-content': null,
        },
        n,
      ),
    );
  },
  La = Ra,
  Fa = (e) => b(pe.Description, E({ 'data-corvu-drawer-description': '', 'data-corvu-dialog-description': null }, e)),
  Ia = Fa,
  $a = (e) => b(pe.Label, E({ 'data-corvu-drawer-label': '', 'data-corvu-dialog-label': null }, e)),
  ka = $a,
  Aa = (e) => {
    const [t, n] = C(e, ['contextId']),
      o = O(() => Eo(t.contextId));
    return b(
      pe.Overlay,
      E(
        {
          get contextId() {
            return t.contextId;
          },
          get 'data-closing'() {
            return se(o().transitionState() === 'closing');
          },
          get 'data-opening'() {
            return se(o().transitionState() === 'opening');
          },
          get 'data-resizing'() {
            return se(o().transitionState() === 'resizing');
          },
          get 'data-snapping'() {
            return se(o().transitionState() === 'snapping');
          },
          get 'data-transitioning'() {
            return se(o().isTransitioning());
          },
          'data-corvu-drawer-overlay': '',
          'data-corvu-dialog-overlay': null,
        },
        n,
      ),
    );
  },
  _a = Aa,
  Ma = (e) => {
    const t = j(
        {
          initialOpen: !1,
          snapPoints: [0, 1],
          breakPoints: [null],
          defaultSnapPoint: 1,
          side: 'bottom',
          dampFunction: (k) => 6 * Math.log(k + 1),
          velocityFunction: (k, P) => {
            const _ = k / P;
            return _ < 1 && _ > -1 ? 1 : _;
          },
          velocityCacheReset: 200,
          allowSkippingSnapPoints: !0,
          handleScrollableElements: !0,
          transitionResize: !1,
          closeOnOutsidePointer: !0,
          allowPinchZoom: !1,
        },
        e,
      ),
      [n, o] = C(t, [
        'snapPoints',
        'breakPoints',
        'defaultSnapPoint',
        'activeSnapPoint',
        'onActiveSnapPointChange',
        'side',
        'dampFunction',
        'velocityFunction',
        'velocityCacheReset',
        'allowSkippingSnapPoints',
        'handleScrollableElements',
        'transitionResize',
        'open',
        'initialOpen',
        'onOpenChange',
        'closeOnOutsidePointer',
        'contextId',
        'children',
      ]),
      [r, i] = An({ value: () => n.open, initialValue: n.initialOpen, onChange: n.onOpenChange }),
      [s, l] = An({ value: () => n.activeSnapPoint, initialValue: 0, onChange: n.onActiveSnapPointChange }),
      [a, c] = L(),
      { transitioning: p, transitionSize: u } = ya({
        element: () => a()?.contentRef() ?? null,
        enabled: () => r() && n.transitionResize,
        dimension: () => {
          switch (n.side) {
            case 'top':
            case 'bottom':
              return 'height';
            case 'left':
            case 'right':
              return 'width';
          }
        },
      }),
      [g, f] = L(!1),
      [d, m] = _n(() => (p() ? 'resizing' : null)),
      v = O(() => {
        const k = a()?.contentRef();
        if (k) {
          return getComputedStyle(k);
        }
      }),
      [h, w] = L(!1);
    R(() => {
      const k = r();
      G(() => {
        h() !== k &&
          (k
            ? (w(!0),
              Be(() => {
                ae(() => {
                  m('opening'), l(n.defaultSnapPoint);
                }),
                  Number.parseFloat(v().transitionDuration) === 0 && m(null);
              }))
            : (ae(() => {
                m('closing'), l(0);
              }),
              Be(() => {
                Number.parseFloat(v().transitionDuration) === 0 && D();
              })));
      });
    });
    const D = () => {
        ae(() => {
          w(!1), m(null);
        });
      },
      T = ha({
        element: () => a()?.contentRef() ?? null,
        dimension: () => {
          switch (n.side) {
            case 'top':
            case 'bottom':
              return 'height';
            case 'left':
            case 'right':
              return 'width';
          }
        },
      }),
      y = O(() => xo(s(), T())),
      [S, F] = _n(() => y().offset),
      I = O(() => (T() ? (T() - S()) / T() : 0)),
      z = {
        get snapPoints() {
          return n.snapPoints;
        },
        get breakPoints() {
          return n.breakPoints;
        },
        get defaultSnapPoint() {
          return n.defaultSnapPoint;
        },
        get activeSnapPoint() {
          return s();
        },
        setActiveSnapPoint: l,
        get side() {
          return n.side;
        },
        get isDragging() {
          return g();
        },
        get isTransitioning() {
          return d() !== null;
        },
        get transitionState() {
          return d();
        },
        get openPercentage() {
          return I();
        },
        get translate() {
          return S();
        },
        get velocityCacheReset() {
          return n.velocityCacheReset;
        },
        get allowSkippingSnapPoints() {
          return n.allowSkippingSnapPoints;
        },
        get handleScrollableElements() {
          return n.handleScrollableElements;
        },
        get transitionResize() {
          return n.transitionResize;
        },
      },
      B = pa(() => n.children),
      H = (k) => {
        c(pe.useContext(n.contextId));
        const P = B()();
        if (la(P)) {
          const _ = j(k, z);
          return P(_);
        }
        return P;
      };
    return O(() => {
      const k = Ca(n.contextId),
        P = Ta(n.contextId);
      return G(() =>
        b(k.Provider, {
          value: {
            snapPoints: () => n.snapPoints,
            breakPoints: () => n.breakPoints,
            defaultSnapPoint: () => n.defaultSnapPoint,
            activeSnapPoint: s,
            setActiveSnapPoint: l,
            side: () => n.side,
            isDragging: g,
            isTransitioning: () => d() !== null,
            transitionState: d,
            openPercentage: I,
            translate: S,
            velocityCacheReset: () => n.velocityCacheReset,
            allowSkippingSnapPoints: () => n.allowSkippingSnapPoints,
            handleScrollableElements: () => n.handleScrollableElements,
            transitionResize: () => n.transitionResize,
          },
          get children() {
            return b(P.Provider, {
              get value() {
                return {
                  snapPoints: () => n.snapPoints,
                  breakPoints: () => n.breakPoints,
                  defaultSnapPoint: () => n.defaultSnapPoint,
                  activeSnapPoint: s,
                  setActiveSnapPoint: l,
                  side: () => n.side,
                  isDragging: g,
                  isTransitioning: () => d() !== null,
                  transitionState: d,
                  openPercentage: I,
                  translate: S,
                  velocityCacheReset: () => n.velocityCacheReset,
                  allowSkippingSnapPoints: () => n.allowSkippingSnapPoints,
                  handleScrollableElements: () => n.handleScrollableElements,
                  transitionResize: () => n.transitionResize,
                  dampFunction: n.dampFunction,
                  velocityFunction: n.velocityFunction,
                  setIsDragging: f,
                  setTranslate: F,
                  drawerSize: T,
                  resolvedActiveSnapPoint: y,
                  drawerStyles: v,
                  setTransitionState: m,
                  transitionSize: u,
                  closeDrawer: D,
                };
              },
              get children() {
                return b(
                  pe,
                  E(
                    {
                      get open() {
                        return h();
                      },
                      onOpenChange: i,
                      get contextId() {
                        return n.contextId;
                      },
                      get closeOnOutsidePointer() {
                        return !g() && n.closeOnOutsidePointer;
                      },
                    },
                    o,
                    { children: (_) => H(_) },
                  ),
                );
              },
            });
          },
        }),
      );
    });
  },
  za = Ma,
  Na = (e) => b(pe.Trigger, E({ 'data-corvu-drawer-trigger': '', 'data-corvu-dialog-trigger': null }, e)),
  Ba = Na,
  Ha = Object.assign(za, {
    Trigger: Ba,
    Portal: bo,
    Overlay: _a,
    Content: La,
    Label: ka,
    Description: Ia,
    Close: Sa,
    useContext: Da,
    useDialogContext: ho,
  }),
  Oo = Ha;
Oo.Trigger;
Oo.Close;
var Et = ['<li', '>', '</li>'],
  ja = ['<ul', '>', '</ul>'],
  Va = {};
Pt(Va, {
  Ellipsis: () => Co,
  Item: () => To,
  Items: () => Ro,
  Next: () => Lo,
  Pagination: () => Ie,
  Previous: () => Fo,
  Root: () => Io,
});
function Co(e) {
  return he(Et, ve(), ie(b(te, E({ as: 'div' }, e))));
}
var Do = q();
function Ot() {
  const e = K(Do);
  if (e === void 0) {
    throw new Error('[kobalte]: `usePaginationContext` must be used within a `Pagination` component');
  }
  return e;
}
function To(e) {
  const t = Ot(),
    [n, o] = C(e, ['page', 'onClick']),
    r = () => t.page() === n.page,
    i = () => {
      t.setPage(n.page);
    };
  return he(
    Et,
    ve(),
    ie(
      b(
        ot,
        E(
          {
            get 'aria-current'() {
              return r() ? 'page' : void 0;
            },
            get 'data-current'() {
              return r() ? '' : void 0;
            },
            get onClick() {
              return Te([n.onClick, i]);
            },
          },
          o,
        ),
      ),
    ),
  );
}
function Ro(e) {
  const t = Ot(),
    n = O(() => {
      const { count: o, siblingCount: r, page: i, fixedItems: s, showFirst: l, showLast: a } = t,
        c = o() < 2 * r() + (s() ? 6 : 4);
      if (c) {
        return { renderItemsDirectly: c };
      }
      const p = l() && i() - 1 > r(),
        u = a() && o() - i() > r();
      let g = i() - (l() ? 2 : 1) > r(),
        f = o() - i() - (a() ? 1 : 0) > r(),
        d = Math.min(i() - 1, r()),
        m = Math.min(o() - i(), r());
      if (s() !== !1) {
        const v = d,
          h = m;
        (d += Math.max(r() - h, 0)),
          (m += Math.max(r() - v, 0)),
          p || m++,
          u || d++,
          s() === !0 && (g || m++, f || d++),
          i() - d - (l() ? 2 : 1) === 1 && ((g = !1), d++),
          o() - i() - m - (a() ? 1 : 0) === 1 && ((f = !1), m++);
      }
      return {
        showFirst: p,
        showLast: u,
        showFirstEllipsis: g,
        showLastEllipsis: f,
        previousSiblingCount: d,
        nextSiblingCount: m,
        renderItemsDirectly: c,
      };
    });
  return b(ne, {
    get when() {
      return n().renderItemsDirectly;
    },
    get fallback() {
      return [
        b(ne, {
          get when() {
            return n().showFirst;
          },
          get children() {
            return t.renderItem(1);
          },
        }),
        b(ne, {
          get when() {
            return n().showFirstEllipsis;
          },
          get children() {
            return t.renderEllipsis();
          },
        }),
        b(Tt, {
          get each() {
            return [...Array(n().previousSiblingCount).keys()].reverse();
          },
          children: (o) => t.renderItem(t.page() - (o + 1)),
        }),
        t.renderItem(t.page()),
        b(Tt, {
          get each() {
            return [...Array(n().nextSiblingCount).keys()];
          },
          children: (o) => t.renderItem(t.page() + (o + 1)),
        }),
        b(ne, {
          get when() {
            return n().showLastEllipsis;
          },
          get children() {
            return t.renderEllipsis();
          },
        }),
        b(ne, {
          get when() {
            return n().showLast;
          },
          get children() {
            return t.renderItem(t.count());
          },
        }),
      ];
    },
    get children() {
      return b(Tt, {
        get each() {
          return [...Array(t.count()).keys()];
        },
        children: (o) => t.renderItem(o + 1),
      });
    },
  });
}
function Lo(e) {
  const t = Ot(),
    [n, o] = C(e, ['onClick']),
    r = () => {
      t.setPage(t.page() + 1);
    },
    i = () => t.page() === t.count();
  return he(
    Et,
    ve(),
    ie(
      b(
        ot,
        E(
          {
            get tabIndex() {
              return i() || t.page() === t.count() ? -1 : void 0;
            },
            get disabled() {
              return i();
            },
            get 'aria-disabled'() {
              return i() || void 0;
            },
            get 'data-disabled'() {
              return i() ? '' : void 0;
            },
            get onClick() {
              return Te([n.onClick, r]);
            },
          },
          o,
        ),
      ),
    ),
  );
}
function Fo(e) {
  const t = Ot(),
    [n, o] = C(e, ['onClick']),
    r = () => {
      t.setPage(t.page() - 1);
    },
    i = () => t.page() === 1;
  return he(
    Et,
    ve(),
    ie(
      b(
        ot,
        E(
          {
            get tabIndex() {
              return i() || t.page() === 1 ? -1 : void 0;
            },
            get disabled() {
              return i();
            },
            get 'aria-disabled'() {
              return i() || void 0;
            },
            get 'data-disabled'() {
              return i() ? '' : void 0;
            },
            get onClick() {
              return Te([n.onClick, r]);
            },
          },
          o,
        ),
      ),
    ),
  );
}
function Io(e) {
  const t = `pagination-${ce()}`,
    n = Y({ id: t }, e),
    [o, r] = C(n, [
      'page',
      'defaultPage',
      'onPageChange',
      'count',
      'siblingCount',
      'showFirst',
      'showLast',
      'fixedItems',
      'itemComponent',
      'ellipsisComponent',
      'disabled',
      'children',
    ]),
    i = Xt({ defaultValue: () => o.defaultPage ?? 1, onChange: o.onPageChange, value: () => o.page }),
    s = {
      count: () => o.count,
      siblingCount: () => o.siblingCount ?? 1,
      showFirst: () => o.showFirst ?? !0,
      showLast: () => o.showLast ?? !0,
      fixedItems: () => o.fixedItems ?? !1,
      isDisabled: () => o.disabled ?? !1,
      renderItem: (l) => o.itemComponent({ page: l }),
      renderEllipsis: o.ellipsisComponent,
      page: () => Math.min(i[0]() ?? 1, o.count),
      setPage: i[1],
    };
  return b(Do.Provider, {
    value: s,
    get children() {
      return b(
        te,
        E(
          {
            as: 'nav',
            get 'data-disabled'() {
              return o.disabled ? '' : void 0;
            },
          },
          r,
          {
            get children() {
              return he(ja, ve(), ie(o.children));
            },
          },
        ),
      );
    },
  });
}
var Ie = Object.assign(Io, { Ellipsis: Co, Item: To, Items: Ro, Next: Lo, Previous: Fo }),
  Wa = [
    '<svg',
    ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path><title>More pages</title></svg>',
  ],
  qa = ['<i', ' class="ph ph-caret-left text-base leading-none" aria-label="Página anterior"></i>'],
  Ka = ['<i', ' class="ph ph-caret-right text-base leading-none" aria-label="Próxima página"></i>'];
const $c = Ie.Items,
  kc = (e) => {
    const [t, n] = C(e, ['class']);
    return b(
      Ie,
      E(
        {
          get class() {
            return Ve(
              'mx-auto flex w-full justify-center [&>ul]:flex [&>ul]:flex-row [&>ul]:items-center [&>ul]:gap-1',
              t.class,
            );
          },
        },
        n,
      ),
    );
  },
  Ac = (e) => {
    const t = j({ size: 'icon' }, e),
      [n, o] = C(t, ['class', 'size']);
    return b(
      Ie.Item,
      E(
        {
          get class() {
            return Ve(
              St({ variant: 'ghost', size: n.size }),
              'aria-[current=page]:border aria-[current=page]:border-input aria-[current=page]:bg-background aria-[current=page]:shadow-sm aria-[current=page]:hover:bg-accent aria-[current=page]:hover:text-accent-foreground',
              n.class,
            );
          },
        },
        o,
      ),
    );
  },
  _c = (e) => {
    const [t, n] = C(e, ['class']);
    return b(
      Ie.Ellipsis,
      E(
        {
          get class() {
            return Ve('flex h-9 w-9 items-center justify-center', t.class);
          },
        },
        n,
        {
          get children() {
            return he(Wa, ve());
          },
        },
      ),
    );
  },
  Mc = (e) => {
    const t = j({ size: 'icon' }, e),
      [n, o] = C(t, ['class', 'size']);
    return b(
      Ie.Previous,
      E(
        {
          get class() {
            return Ve(
              St({ variant: 'ghost', size: n.size }),
              'aria-[current=page]:border aria-[current=page]:border-input aria-[current=page]:bg-background aria-[current=page]:shadow-sm aria-[current=page]:hover:bg-accent aria-[current=page]:hover:text-accent-foreground',
              n.class,
            );
          },
        },
        o,
        {
          get children() {
            return he(qa, ve());
          },
        },
      ),
    );
  },
  zc = (e) => {
    const t = j({ size: 'icon' }, e),
      [n, o] = C(t, ['class', 'size']);
    return b(
      Ie.Next,
      E(
        {
          get class() {
            return Ve(
              St({ variant: 'ghost', size: n.size }),
              'aria-[current=page]:border aria-[current=page]:border-input aria-[current=page]:bg-background aria-[current=page]:shadow-sm aria-[current=page]:hover:bg-accent aria-[current=page]:hover:text-accent-foreground',
              n.class,
            );
          },
        },
        o,
        {
          get children() {
            return he(Ka, ve());
          },
        },
      ),
    );
  };
xt('absolute outline-none transition-all duration-200', {
  variants: {
    variant: {
      block:
        'rounded-md bg-background shadow peer-focus-visible:outline-none peer-focus-visible:ring-[1.5px] peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background data-[orientation=vertical]:top-0 data-[orientation=vertical]:right-1 data-[orientation=horizontal]:bottom-1 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-[calc(100%-0.5rem)] data-[orientation=vertical]:w-[calc(100%-0.5rem)]',
      underline:
        'data-[orientation=horizontal]:-bottom-[1px] data-[orientation=vertical]:-right-[1px] bg-primary data-[orientation=vertical]:top-0 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]',
    },
  },
  defaultVariants: { variant: 'block' },
});
var Ua = {};
Pt(Ua, {
  Description: () => Gt,
  ErrorMessage: () => Qt,
  Input: () => en,
  Label: () => Jt,
  Root: () => tn,
  TextArea: () => nn,
  TextField: () => Xa,
});
var $o = q();
function ko() {
  const e = K($o);
  if (e === void 0) {
    throw new Error('[kobalte]: `useTextFieldContext` must be used within a `TextField` component');
  }
  return e;
}
function en(e) {
  return b(Ao, E({ type: 'text' }, e));
}
function Ao(e) {
  const t = rt(),
    n = ko(),
    o = Y({ id: n.generateId('input') }, e),
    [r, i, s] = C(o, ['onInput'], Xi),
    { fieldProps: l } = Zi(i);
  return b(
    te,
    E(
      {
        as: 'input',
        get id() {
          return l.id();
        },
        get name() {
          return t.name();
        },
        get value() {
          return n.value();
        },
        get required() {
          return t.isRequired();
        },
        get disabled() {
          return t.isDisabled();
        },
        get readonly() {
          return t.isReadOnly();
        },
        get 'aria-label'() {
          return l.ariaLabel();
        },
        get 'aria-labelledby'() {
          return l.ariaLabelledBy();
        },
        get 'aria-describedby'() {
          return l.ariaDescribedBy();
        },
        get 'aria-invalid'() {
          return t.validationState() === 'invalid' || void 0;
        },
        get 'aria-required'() {
          return t.isRequired() || void 0;
        },
        get 'aria-disabled'() {
          return t.isDisabled() || void 0;
        },
        get 'aria-readonly'() {
          return t.isReadOnly() || void 0;
        },
        get onInput() {
          return Te([r.onInput, n.onInput]);
        },
      },
      () => t.dataset(),
      s,
    ),
  );
}
function tn(e) {
  let t;
  const n = `textfield-${ce()}`,
    o = Y({ id: n }, e),
    [r, i, s] = C(o, ['ref', 'value', 'defaultValue', 'onChange'], Ui),
    l = r.value,
    [a, c] = Xt({
      value: () => (l === void 0 ? void 0 : (r.value ?? '')),
      defaultValue: () => r.defaultValue,
      onChange: (f) => r.onChange?.(f),
    }),
    { formControlContext: p } = Yi(i);
  Gi(
    () => t,
    () => c(r.defaultValue ?? ''),
  );
  const u = (f) => {
      if (p.isReadOnly() || p.isDisabled()) {
        return;
      }
      const d = f.target;
      c(d.value), (d.value = a() ?? '');
    },
    g = { value: a, generateId: Yt(() => A(i.id)), onInput: u };
  return b(ao.Provider, {
    value: p,
    get children() {
      return b($o.Provider, {
        value: g,
        get children() {
          return b(
            te,
            E(
              {
                as: 'div',
                role: 'group',
                get id() {
                  return A(i.id);
                },
              },
              () => p.dataset(),
              s,
            ),
          );
        },
      });
    },
  });
}
function nn(e) {
  let t;
  const n = ko(),
    o = Y({ id: n.generateId('textarea') }, e),
    [r, i] = C(o, ['ref', 'autoResize', 'submitOnEnter', 'onKeyPress']);
  R(
    qt([() => t, () => r.autoResize, () => n.value()], ([l, a]) => {
      !l || !a || Ya(l);
    }),
  );
  const s = (l) => {};
  return b(
    Ao,
    E(
      {
        as: 'textarea',
        get 'aria-multiline'() {
          return r.submitOnEnter ? 'false' : void 0;
        },
        get onKeyPress() {
          return Te([r.onKeyPress, s]);
        },
      },
      i,
    ),
  );
}
function Ya(e) {
  const t = e.style.alignSelf,
    n = e.style.overflow;
  'MozAppearance' in e.style || (e.style.overflow = 'hidden'),
    (e.style.alignSelf = 'start'),
    (e.style.height = 'auto'),
    (e.style.height = `${e.scrollHeight + (e.offsetHeight - e.clientHeight)}px`),
    (e.style.overflow = n),
    (e.style.alignSelf = t);
}
var Xa = Object.assign(tn, { Description: Gt, ErrorMessage: Qt, Input: en, Label: Jt, TextArea: nn });
const Nc = tn,
  Bc = (e) => {
    const [t, n] = C(e, ['type', 'class']);
    return b(
      en,
      E(
        {
          get type() {
            return t.type;
          },
          get class() {
            return We(
              'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              t.class,
            );
          },
        },
        n,
      ),
    );
  },
  Hc = (e) => {
    const [t, n] = C(e, ['class']);
    return b(
      nn,
      E(
        {
          get class() {
            return We(
              'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              t.class,
            );
          },
        },
        n,
      ),
    );
  },
  on = xt('font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', {
    variants: {
      variant: {
        label: 'data-[invalid]:text-destructive',
        description: 'text-destructive',
        error: 'font-normal text-destructive',
      },
    },
    defaultVariants: { variant: 'label' },
  }),
  jc = (e) => {
    const [t, n] = C(e, ['class']);
    return b(
      Jt,
      E(
        {
          get class() {
            return We(on(), t.class);
          },
        },
        n,
      ),
    );
  },
  Vc = (e) => {
    const [t, n] = C(e, ['class']);
    return b(
      Gt,
      E(
        {
          get class() {
            return We(on({ variant: 'description' }), t.class);
          },
        },
        n,
      ),
    );
  },
  Wc = (e) => {
    const [t, n] = C(e, ['class']);
    return b(
      Qt,
      E(n, {
        get class() {
          return We(on({ variant: 'error', class: t.class }));
        },
      }),
    );
  },
  Za = ['top', 'right', 'bottom', 'left'],
  le = Math.min,
  X = Math.max,
  bt = Math.round,
  ft = Math.floor,
  xe = (e) => ({ x: e, y: e }),
  Ga = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' },
  Qa = { start: 'end', end: 'start' };
function Ht(e, t, n) {
  return X(e, le(t, n));
}
function $e(e, t) {
  return typeof e == 'function' ? e(t) : e;
}
function Pe(e) {
  return e.split('-')[0];
}
function qe(e) {
  return e.split('-')[1];
}
function _o(e) {
  return e === 'x' ? 'y' : 'x';
}
function rn(e) {
  return e === 'y' ? 'height' : 'width';
}
function Re(e) {
  return ['top', 'bottom'].includes(Pe(e)) ? 'y' : 'x';
}
function sn(e) {
  return _o(Re(e));
}
function Ja(e, t, n) {
  n === void 0 && (n = !1);
  const o = qe(e),
    r = sn(e),
    i = rn(r);
  let s = r === 'x' ? (o === (n ? 'end' : 'start') ? 'right' : 'left') : o === 'start' ? 'bottom' : 'top';
  return t.reference[i] > t.floating[i] && (s = yt(s)), [s, yt(s)];
}
function el(e) {
  const t = yt(e);
  return [jt(e), t, jt(t)];
}
function jt(e) {
  return e.replace(/start|end/g, (t) => Qa[t]);
}
function tl(e, t, n) {
  const o = ['left', 'right'],
    r = ['right', 'left'],
    i = ['top', 'bottom'],
    s = ['bottom', 'top'];
  switch (e) {
    case 'top':
    case 'bottom':
      return n ? (t ? r : o) : t ? o : r;
    case 'left':
    case 'right':
      return t ? i : s;
    default:
      return [];
  }
}
function nl(e, t, n, o) {
  const r = qe(e);
  let i = tl(Pe(e), n === 'start', o);
  return r && ((i = i.map((s) => s + '-' + r)), t && (i = i.concat(i.map(jt)))), i;
}
function yt(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ga[t]);
}
function ol(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Mo(e) {
  return typeof e != 'number' ? ol(e) : { top: e, right: e, bottom: e, left: e };
}
function wt(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function zn(e, t, n) {
  const { reference: o, floating: r } = e;
  const i = Re(t),
    s = sn(t),
    l = rn(s),
    a = Pe(t),
    c = i === 'y',
    p = o.x + o.width / 2 - r.width / 2,
    u = o.y + o.height / 2 - r.height / 2,
    g = o[l] / 2 - r[l] / 2;
  let f;
  switch (a) {
    case 'top':
      f = { x: p, y: o.y - r.height };
      break;
    case 'bottom':
      f = { x: p, y: o.y + o.height };
      break;
    case 'right':
      f = { x: o.x + o.width, y: u };
      break;
    case 'left':
      f = { x: o.x - r.width, y: u };
      break;
    default:
      f = { x: o.x, y: o.y };
  }
  switch (qe(t)) {
    case 'start':
      f[s] -= g * (n && c ? -1 : 1);
      break;
    case 'end':
      f[s] += g * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const rl = async (e, t, n) => {
  const { placement: o = 'bottom', strategy: r = 'absolute', middleware: i = [], platform: s } = n,
    l = i.filter(Boolean),
    a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: r }),
    { x: p, y: u } = zn(c, o, a),
    g = o,
    f = {},
    d = 0;
  for (let m = 0; m < l.length; m++) {
    const { name: v, fn: h } = l[m],
      {
        x: w,
        y: D,
        data: T,
        reset: y,
      } = await h({
        x: p,
        y: u,
        initialPlacement: o,
        placement: g,
        strategy: r,
        middlewareData: f,
        rects: c,
        platform: s,
        elements: { reference: e, floating: t },
      });
    (p = w ?? p),
      (u = D ?? u),
      (f = { ...f, [v]: { ...f[v], ...T } }),
      y &&
        d <= 50 &&
        (d++,
        typeof y == 'object' &&
          (y.placement && (g = y.placement),
          y.rects &&
            (c = y.rects === !0 ? await s.getElementRects({ reference: e, floating: t, strategy: r }) : y.rects),
          ({ x: p, y: u } = zn(c, g, a))),
        (m = -1));
  }
  return { x: p, y: u, placement: g, strategy: r, middlewareData: f };
};
async function et(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: i, rects: s, elements: l, strategy: a } = e,
    {
      boundary: c = 'clippingAncestors',
      rootBoundary: p = 'viewport',
      elementContext: u = 'floating',
      altBoundary: g = !1,
      padding: f = 0,
    } = $e(t, e),
    d = Mo(f),
    v = l[g ? (u === 'floating' ? 'reference' : 'floating') : u],
    h = wt(
      await i.getClippingRect({
        element:
          (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n
            ? v
            : v.contextElement || (await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating))),
        boundary: c,
        rootBoundary: p,
        strategy: a,
      }),
    ),
    w = u === 'floating' ? { x: o, y: r, width: s.floating.width, height: s.floating.height } : s.reference,
    D = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)),
    T = (await (i.isElement == null ? void 0 : i.isElement(D)))
      ? (await (i.getScale == null ? void 0 : i.getScale(D))) || { x: 1, y: 1 }
      : { x: 1, y: 1 },
    y = wt(
      i.convertOffsetParentRelativeRectToViewportRelativeRect
        ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({
            elements: l,
            rect: w,
            offsetParent: D,
            strategy: a,
          })
        : w,
    );
  return {
    top: (h.top - y.top + d.top) / T.y,
    bottom: (y.bottom - h.bottom + d.bottom) / T.y,
    left: (h.left - y.left + d.left) / T.x,
    right: (y.right - h.right + d.right) / T.x,
  };
}
const il = (e) => ({
    name: 'arrow',
    options: e,
    async fn(t) {
      const { x: n, y: o, placement: r, rects: i, platform: s, elements: l, middlewareData: a } = t,
        { element: c, padding: p = 0 } = $e(e, t) || {};
      if (c == null) {
        return {};
      }
      const u = Mo(p),
        g = { x: n, y: o },
        f = sn(r),
        d = rn(f),
        m = await s.getDimensions(c),
        v = f === 'y',
        h = v ? 'top' : 'left',
        w = v ? 'bottom' : 'right',
        D = v ? 'clientHeight' : 'clientWidth',
        T = i.reference[d] + i.reference[f] - g[f] - i.floating[d],
        y = g[f] - i.reference[f],
        S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
      let F = S ? S[D] : 0;
      (!F || !(await (s.isElement == null ? void 0 : s.isElement(S)))) && (F = l.floating[D] || i.floating[d]);
      const I = T / 2 - y / 2,
        z = F / 2 - m[d] / 2 - 1,
        B = le(u[h], z),
        H = le(u[w], z),
        Q = B,
        k = F - m[d] - H,
        P = F / 2 - m[d] / 2 + I,
        _ = Ht(Q, P, k),
        N = !a.arrow && qe(r) != null && P !== _ && i.reference[d] / 2 - (P < Q ? B : H) - m[d] / 2 < 0,
        U = N ? (P < Q ? P - Q : P - k) : 0;
      return { [f]: g[f] + U, data: { [f]: _, centerOffset: P - _ - U, ...(N && { alignmentOffset: U }) }, reset: N };
    },
  }),
  sl = (e) => (
    e === void 0 && (e = {}),
    {
      name: 'flip',
      options: e,
      async fn(t) {
        var n, o;
        const { placement: r, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: c } = t,
          {
            mainAxis: p = !0,
            crossAxis: u = !0,
            fallbackPlacements: g,
            fallbackStrategy: f = 'bestFit',
            fallbackAxisSideDirection: d = 'none',
            flipAlignment: m = !0,
            ...v
          } = $e(e, t);
        if ((n = i.arrow) != null && n.alignmentOffset) {
          return {};
        }
        const h = Pe(r),
          w = Re(l),
          D = Pe(l) === l,
          T = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)),
          y = g || (D || !m ? [yt(l)] : el(l)),
          S = d !== 'none';
        !g && S && y.push(...nl(l, m, d, T));
        const F = [l, ...y],
          I = await et(t, v),
          z = [];
        let B = ((o = i.flip) == null ? void 0 : o.overflows) || [];
        if ((p && z.push(I[h]), u)) {
          const P = Ja(r, s, T);
          z.push(I[P[0]], I[P[1]]);
        }
        if (((B = [...B, { placement: r, overflows: z }]), !z.every((P) => P <= 0))) {
          var H, Q;
          const P = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1,
            _ = F[P];
          if (_) {
            return { data: { index: P, overflows: B }, reset: { placement: _ } };
          }
          let N =
            (Q = B.filter((U) => U.overflows[0] <= 0).sort((U, J) => U.overflows[1] - J.overflows[1])[0]) == null
              ? void 0
              : Q.placement;
          if (!N) {
            switch (f) {
              case 'bestFit': {
                var k;
                const U =
                  (k = B.filter((J) => {
                    if (S) {
                      const ye = Re(J.placement);
                      return ye === w || ye === 'y';
                    }
                    return !0;
                  })
                    .map((J) => [J.placement, J.overflows.filter((ye) => ye > 0).reduce((ye, or) => ye + or, 0)])
                    .sort((J, ye) => J[1] - ye[1])[0]) == null
                    ? void 0
                    : k[0];
                U && (N = U);
                break;
              }
              case 'initialPlacement':
                N = l;
                break;
            }
          }
          if (r !== N) {
            return { reset: { placement: N } };
          }
        }
        return {};
      },
    }
  );
function Nn(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Bn(e) {
  return Za.some((t) => e[t] >= 0);
}
const al = (e) => (
  e === void 0 && (e = {}),
  {
    name: 'hide',
    options: e,
    async fn(t) {
      const { rects: n } = t,
        { strategy: o = 'referenceHidden', ...r } = $e(e, t);
      switch (o) {
        case 'referenceHidden': {
          const i = await et(t, { ...r, elementContext: 'reference' }),
            s = Nn(i, n.reference);
          return { data: { referenceHiddenOffsets: s, referenceHidden: Bn(s) } };
        }
        case 'escaped': {
          const i = await et(t, { ...r, altBoundary: !0 }),
            s = Nn(i, n.floating);
          return { data: { escapedOffsets: s, escaped: Bn(s) } };
        }
        default:
          return {};
      }
    },
  }
);
async function ll(e, t) {
  const { placement: n, platform: o, elements: r } = e,
    i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)),
    s = Pe(n),
    l = qe(n),
    a = Re(n) === 'y',
    c = ['left', 'top'].includes(s) ? -1 : 1,
    p = i && a ? -1 : 1,
    u = $e(t, e);
  let {
    mainAxis: g,
    crossAxis: f,
    alignmentAxis: d,
  } = typeof u == 'number'
    ? { mainAxis: u, crossAxis: 0, alignmentAxis: null }
    : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
  return (
    l && typeof d == 'number' && (f = l === 'end' ? d * -1 : d), a ? { x: f * p, y: g * c } : { x: g * c, y: f * p }
  );
}
const cl = (e) => (
    e === void 0 && (e = 0),
    {
      name: 'offset',
      options: e,
      async fn(t) {
        var n, o;
        const { x: r, y: i, placement: s, middlewareData: l } = t,
          a = await ll(t, e);
        return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset
          ? {}
          : { x: r + a.x, y: i + a.y, data: { ...a, placement: s } };
      },
    }
  ),
  ul = (e) => (
    e === void 0 && (e = {}),
    {
      name: 'shift',
      options: e,
      async fn(t) {
        const { x: n, y: o, placement: r } = t,
          {
            mainAxis: i = !0,
            crossAxis: s = !1,
            limiter: l = {
              fn: (v) => {
                const { x: h, y: w } = v;
                return { x: h, y: w };
              },
            },
            ...a
          } = $e(e, t),
          c = { x: n, y: o },
          p = await et(t, a),
          u = Re(Pe(r)),
          g = _o(u);
        let f = c[g],
          d = c[u];
        if (i) {
          const v = g === 'y' ? 'top' : 'left',
            h = g === 'y' ? 'bottom' : 'right',
            w = f + p[v],
            D = f - p[h];
          f = Ht(w, f, D);
        }
        if (s) {
          const v = u === 'y' ? 'top' : 'left',
            h = u === 'y' ? 'bottom' : 'right',
            w = d + p[v],
            D = d - p[h];
          d = Ht(w, d, D);
        }
        const m = l.fn({ ...t, [g]: f, [u]: d });
        return { ...m, data: { x: m.x - n, y: m.y - o } };
      },
    }
  ),
  dl = (e) => (
    e === void 0 && (e = {}),
    {
      name: 'size',
      options: e,
      async fn(t) {
        const { placement: n, rects: o, platform: r, elements: i } = t,
          { apply: s = () => {}, ...l } = $e(e, t),
          a = await et(t, l),
          c = Pe(n),
          p = qe(n),
          u = Re(n) === 'y',
          { width: g, height: f } = o.floating;
        let d, m;
        c === 'top' || c === 'bottom'
          ? ((d = c),
            (m = p === ((await (r.isRTL == null ? void 0 : r.isRTL(i.floating))) ? 'start' : 'end') ? 'left' : 'right'))
          : ((m = c), (d = p === 'end' ? 'top' : 'bottom'));
        const v = f - a.top - a.bottom,
          h = g - a.left - a.right,
          w = le(f - a[d], v),
          D = le(g - a[m], h),
          T = !t.middlewareData.shift;
        let y = w,
          S = D;
        if ((u ? (S = p || T ? le(D, h) : h) : (y = p || T ? le(w, v) : v), T && !p)) {
          const I = X(a.left, 0),
            z = X(a.right, 0),
            B = X(a.top, 0),
            H = X(a.bottom, 0);
          u
            ? (S = g - 2 * (I !== 0 || z !== 0 ? I + z : X(a.left, a.right)))
            : (y = f - 2 * (B !== 0 || H !== 0 ? B + H : X(a.top, a.bottom)));
        }
        await s({ ...t, availableWidth: S, availableHeight: y });
        const F = await r.getDimensions(i.floating);
        return g !== F.width || f !== F.height ? { reset: { rects: !0 } } : {};
      },
    }
  );
function Ke(e) {
  return zo(e) ? (e.nodeName || '').toLowerCase() : '#document';
}
function Z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function be(e) {
  var t;
  return (t = (zo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zo(e) {
  return e instanceof Node || e instanceof Z(e).Node;
}
function oe(e) {
  return e instanceof Element || e instanceof Z(e).Element;
}
function ue(e) {
  return e instanceof HTMLElement || e instanceof Z(e).HTMLElement;
}
function Hn(e) {
  return typeof ShadowRoot > 'u' ? !1 : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
function st(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = re(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !['inline', 'contents'].includes(r);
}
function fl(e) {
  return ['table', 'td', 'th'].includes(Ke(e));
}
function Ct(e) {
  return [':popover-open', ':modal'].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return !1;
    }
  });
}
function an(e) {
  const t = ln(),
    n = oe(e) ? re(e) : e;
  return (
    n.transform !== 'none' ||
    n.perspective !== 'none' ||
    (n.containerType ? n.containerType !== 'normal' : !1) ||
    (!t && (n.backdropFilter ? n.backdropFilter !== 'none' : !1)) ||
    (!t && (n.filter ? n.filter !== 'none' : !1)) ||
    ['transform', 'perspective', 'filter'].some((o) => (n.willChange || '').includes(o)) ||
    ['paint', 'layout', 'strict', 'content'].some((o) => (n.contain || '').includes(o))
  );
}
function gl(e) {
  let t = Se(e);
  while (ue(t) && !He(t)) {
    if (an(t)) {
      return t;
    }
    if (Ct(t)) {
      return null;
    }
    t = Se(t);
  }
  return null;
}
function ln() {
  return typeof CSS > 'u' || !CSS.supports ? !1 : CSS.supports('-webkit-backdrop-filter', 'none');
}
function He(e) {
  return ['html', 'body', '#document'].includes(Ke(e));
}
function re(e) {
  return Z(e).getComputedStyle(e);
}
function Dt(e) {
  return oe(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Se(e) {
  if (Ke(e) === 'html') {
    return e;
  }
  const t = e.assignedSlot || e.parentNode || (Hn(e) && e.host) || be(e);
  return Hn(t) ? t.host : t;
}
function No(e) {
  const t = Se(e);
  return He(t) ? (e.ownerDocument ? e.ownerDocument.body : e.body) : ue(t) && st(t) ? t : No(t);
}
function tt(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = !0);
  const r = No(e),
    i = r === ((o = e.ownerDocument) == null ? void 0 : o.body),
    s = Z(r);
  if (i) {
    const l = Vt(s);
    return t.concat(s, s.visualViewport || [], st(r) ? r : [], l && n ? tt(l) : []);
  }
  return t.concat(r, tt(r, [], n));
}
function Vt(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Bo(e) {
  const t = re(e);
  let n = Number.parseFloat(t.width) || 0,
    o = Number.parseFloat(t.height) || 0;
  const r = ue(e),
    i = r ? e.offsetWidth : n,
    s = r ? e.offsetHeight : o,
    l = bt(n) !== i || bt(o) !== s;
  return l && ((n = i), (o = s)), { width: n, height: o, $: l };
}
function cn(e) {
  return oe(e) ? e : e.contextElement;
}
function Me(e) {
  const t = cn(e);
  if (!ue(t)) {
    return xe(1);
  }
  const n = t.getBoundingClientRect(),
    { width: o, height: r, $: i } = Bo(t);
  let s = (i ? bt(n.width) : n.width) / o,
    l = (i ? bt(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const pl = xe(0);
function Ho(e) {
  const t = Z(e);
  return !ln() || !t.visualViewport ? pl : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ml(e, t, n) {
  return t === void 0 && (t = !1), !n || (t && n !== Z(e)) ? !1 : t;
}
function Le(e, t, n, o) {
  t === void 0 && (t = !1), n === void 0 && (n = !1);
  const r = e.getBoundingClientRect(),
    i = cn(e);
  let s = xe(1);
  t && (o ? oe(o) && (s = Me(o)) : (s = Me(e)));
  const l = ml(i, n, o) ? Ho(i) : xe(0);
  let a = (r.left + l.x) / s.x,
    c = (r.top + l.y) / s.y,
    p = r.width / s.x,
    u = r.height / s.y;
  if (i) {
    const g = Z(i),
      f = o && oe(o) ? Z(o) : o;
    let d = g,
      m = Vt(d);
    while (m && o && f !== d) {
      const v = Me(m),
        h = m.getBoundingClientRect(),
        w = re(m),
        D = h.left + (m.clientLeft + Number.parseFloat(w.paddingLeft)) * v.x,
        T = h.top + (m.clientTop + Number.parseFloat(w.paddingTop)) * v.y;
      (a *= v.x), (c *= v.y), (p *= v.x), (u *= v.y), (a += D), (c += T), (d = Z(m)), (m = Vt(d));
    }
  }
  return wt({ width: p, height: u, x: a, y: c });
}
function hl(e) {
  const { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const i = r === 'fixed',
    s = be(o),
    l = t ? Ct(t.floating) : !1;
  if (o === s || (l && i)) {
    return n;
  }
  let a = { scrollLeft: 0, scrollTop: 0 },
    c = xe(1);
  const p = xe(0),
    u = ue(o);
  if ((u || (!u && !i)) && ((Ke(o) !== 'body' || st(s)) && (a = Dt(o)), ue(o))) {
    const g = Le(o);
    (c = Me(o)), (p.x = g.x + o.clientLeft), (p.y = g.y + o.clientTop);
  }
  return {
    width: n.width * c.x,
    height: n.height * c.y,
    x: n.x * c.x - a.scrollLeft * c.x + p.x,
    y: n.y * c.y - a.scrollTop * c.y + p.y,
  };
}
function vl(e) {
  return Array.from(e.getClientRects());
}
function jo(e) {
  return Le(be(e)).left + Dt(e).scrollLeft;
}
function bl(e) {
  const t = be(e),
    n = Dt(e),
    o = e.ownerDocument.body,
    r = X(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth),
    i = X(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + jo(e);
  const l = -n.scrollTop;
  return re(o).direction === 'rtl' && (s += X(t.clientWidth, o.clientWidth) - r), { width: r, height: i, x: s, y: l };
}
function yl(e, t) {
  const n = Z(e),
    o = be(e),
    r = n.visualViewport;
  let i = o.clientWidth,
    s = o.clientHeight,
    l = 0,
    a = 0;
  if (r) {
    (i = r.width), (s = r.height);
    const c = ln();
    (!c || (c && t === 'fixed')) && ((l = r.offsetLeft), (a = r.offsetTop));
  }
  return { width: i, height: s, x: l, y: a };
}
function wl(e, t) {
  const n = Le(e, !0, t === 'fixed'),
    o = n.top + e.clientTop,
    r = n.left + e.clientLeft,
    i = ue(e) ? Me(e) : xe(1),
    s = e.clientWidth * i.x,
    l = e.clientHeight * i.y,
    a = r * i.x,
    c = o * i.y;
  return { width: s, height: l, x: a, y: c };
}
function jn(e, t, n) {
  let o;
  if (t === 'viewport') {
    o = yl(e, n);
  } else if (t === 'document') {
    o = bl(be(e));
  } else if (oe(t)) {
    o = wl(t, n);
  } else {
    const r = Ho(e);
    o = { ...t, x: t.x - r.x, y: t.y - r.y };
  }
  return wt(o);
}
function Vo(e, t) {
  const n = Se(e);
  return n === t || !oe(n) || He(n) ? !1 : re(n).position === 'fixed' || Vo(n, t);
}
function xl(e, t) {
  const n = t.get(e);
  if (n) {
    return n;
  }
  let o = tt(e, [], !1).filter((l) => oe(l) && Ke(l) !== 'body'),
    r = null;
  const i = re(e).position === 'fixed';
  let s = i ? Se(e) : e;
  while (oe(s) && !He(s)) {
    const l = re(s),
      a = an(s);
    !a && l.position === 'fixed' && (r = null),
      (
        i
          ? !a && !r
          : (!a && l.position === 'static' && !!r && ['absolute', 'fixed'].includes(r.position)) ||
            (st(s) && !a && Vo(e, s))
      )
        ? (o = o.filter((p) => p !== s))
        : (r = l),
      (s = Se(s));
  }
  return t.set(e, o), o;
}
function Pl(e) {
  const { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = [...(n === 'clippingAncestors' ? (Ct(t) ? [] : xl(t, this._c)) : [].concat(n)), o],
    l = s[0],
    a = s.reduce(
      (c, p) => {
        const u = jn(t, p, r);
        return (
          (c.top = X(u.top, c.top)),
          (c.right = le(u.right, c.right)),
          (c.bottom = le(u.bottom, c.bottom)),
          (c.left = X(u.left, c.left)),
          c
        );
      },
      jn(t, l, r),
    );
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function Sl(e) {
  const { width: t, height: n } = Bo(e);
  return { width: t, height: n };
}
function El(e, t, n) {
  const o = ue(t),
    r = be(t),
    i = n === 'fixed',
    s = Le(e, !0, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = xe(0);
  if (o || (!o && !i)) {
    if (((Ke(t) !== 'body' || st(r)) && (l = Dt(t)), o)) {
      const u = Le(t, !0, i, t);
      (a.x = u.x + t.clientLeft), (a.y = u.y + t.clientTop);
    } else {
      r && (a.x = jo(r));
    }
  }
  const c = s.left + l.scrollLeft - a.x,
    p = s.top + l.scrollTop - a.y;
  return { x: c, y: p, width: s.width, height: s.height };
}
function At(e) {
  return re(e).position === 'static';
}
function Vn(e, t) {
  return !ue(e) || re(e).position === 'fixed' ? null : t ? t(e) : e.offsetParent;
}
function Wo(e, t) {
  const n = Z(e);
  if (Ct(e)) {
    return n;
  }
  if (!ue(e)) {
    let r = Se(e);
    while (r && !He(r)) {
      if (oe(r) && !At(r)) {
        return r;
      }
      r = Se(r);
    }
    return n;
  }
  let o = Vn(e, t);
  while (o && fl(o) && At(o)) {
    o = Vn(o, t);
  }
  return o && He(o) && At(o) && !an(o) ? n : o || gl(e) || n;
}
const Ol = async function (e) {
  const t = this.getOffsetParent || Wo,
    n = this.getDimensions,
    o = await n(e.floating);
  return {
    reference: El(e.reference, await t(e.floating), e.strategy),
    floating: { x: 0, y: 0, width: o.width, height: o.height },
  };
};
function Cl(e) {
  return re(e).direction === 'rtl';
}
const qo = {
  convertOffsetParentRelativeRectToViewportRelativeRect: hl,
  getDocumentElement: be,
  getClippingRect: Pl,
  getOffsetParent: Wo,
  getElementRects: Ol,
  getClientRects: vl,
  getDimensions: Sl,
  getScale: Me,
  isElement: oe,
  isRTL: Cl,
};
function Dl(e, t) {
  let n = null,
    o;
  const r = be(e);
  function i() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), (n = null);
  }
  function s(l, a) {
    l === void 0 && (l = !1), a === void 0 && (a = 1), i();
    const { left: c, top: p, width: u, height: g } = e.getBoundingClientRect();
    if ((l || t(), !u || !g)) {
      return;
    }
    const f = ft(p),
      d = ft(r.clientWidth - (c + u)),
      m = ft(r.clientHeight - (p + g)),
      v = ft(c),
      w = { rootMargin: -f + 'px ' + -d + 'px ' + -m + 'px ' + -v + 'px', threshold: X(0, le(1, a)) || 1 };
    let D = !0;
    function T(y) {
      const S = y[0].intersectionRatio;
      if (S !== a) {
        if (!D) {
          return s();
        }
        S
          ? s(!1, S)
          : (o = setTimeout(() => {
              s(!1, 1e-7);
            }, 1e3));
      }
      D = !1;
    }
    try {
      n = new IntersectionObserver(T, { ...w, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(T, w);
    }
    n.observe(e);
  }
  return s(!0), i;
}
function Tl(e, t, n, o) {
  o === void 0 && (o = {});
  const {
      ancestorScroll: r = !0,
      ancestorResize: i = !0,
      elementResize: s = typeof ResizeObserver == 'function',
      layoutShift: l = typeof IntersectionObserver == 'function',
      animationFrame: a = !1,
    } = o,
    c = cn(e),
    p = r || i ? [...(c ? tt(c) : []), ...tt(t)] : [];
  p.forEach((h) => {
    r && h.addEventListener('scroll', n, { passive: !0 }), i && h.addEventListener('resize', n);
  });
  const u = c && l ? Dl(c, n) : null;
  let g = -1,
    f = null;
  s &&
    ((f = new ResizeObserver((h) => {
      const [w] = h;
      w &&
        w.target === c &&
        f &&
        (f.unobserve(t),
        cancelAnimationFrame(g),
        (g = requestAnimationFrame(() => {
          var D;
          (D = f) == null || D.observe(t);
        }))),
        n();
    })),
    c && !a && f.observe(c),
    f.observe(t));
  let d,
    m = a ? Le(e) : null;
  a && v();
  function v() {
    const h = Le(e);
    m && (h.x !== m.x || h.y !== m.y || h.width !== m.width || h.height !== m.height) && n(),
      (m = h),
      (d = requestAnimationFrame(v));
  }
  return (
    n(),
    () => {
      var h;
      p.forEach((w) => {
        r && w.removeEventListener('scroll', n), i && w.removeEventListener('resize', n);
      }),
        u?.(),
        (h = f) == null || h.disconnect(),
        (f = null),
        a && cancelAnimationFrame(d);
    }
  );
}
const Rl = cl,
  Ll = ul,
  Fl = sl,
  Il = dl,
  $l = al,
  kl = il,
  Al = (e, t, n) => {
    const o = new Map(),
      r = { platform: qo, ...n },
      i = { ...r.platform, _c: o };
    return rl(e, t, { ...r, platform: i });
  };
var _l = [
    '<svg',
    ' display="block" viewBox="',
    '" style="transform:scale(1.02)"><g',
    '><path fill="none"',
    '></path><path stroke="none"',
    '></path></g></svg>',
  ],
  un = q();
function dn() {
  const e = K(un);
  if (e === void 0) {
    throw new Error('[kobalte]: `usePopperContext` must be used within a `Popper` component');
  }
  return e;
}
var Ge = 30,
  Wn = Ge / 2,
  Ml = { top: 180, right: -90, bottom: 0, left: 90 },
  qn = 'M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z';
function fn(e) {
  const t = dn(),
    n = Y({ size: Ge }, e),
    [o, r] = C(n, ['ref', 'style', 'size']),
    i = () => t.currentPlacement().split('-')[0],
    s = zl(t.contentRef),
    l = () => s()?.getPropertyValue('background-color') || 'none',
    a = () => s()?.getPropertyValue(`border-${i()}-color`) || 'none',
    c = () => s()?.getPropertyValue(`border-${i()}-width`) || '0px',
    p = () => Number.parseInt(c()) * 2 * (Ge / o.size),
    u = () => `rotate(${Ml[i()]} ${Wn} ${Wn}) translate(0 2)`;
  return b(
    te,
    E(
      {
        as: 'div',
        'aria-hidden': 'true',
        get style() {
          return Ut(
            {
              position: 'absolute',
              'font-size': `${o.size}px`,
              width: '1em',
              height: '1em',
              'pointer-events': 'none',
              fill: l(),
              stroke: a(),
              'stroke-width': p(),
            },
            o.style,
          );
        },
      },
      r,
      {
        get children() {
          return he(
            _l,
            ve(),
            `0 0 ${ie(Ge, !0)} ${ie(Ge, !0)}`,
            Rt('transform', ie(u(), !0), !1),
            Rt('d', ie(qn, !0), !1),
            Rt('d', ie(qn, !0), !1),
          );
        },
      },
    ),
  );
}
function zl(e) {
  const [t, n] = L();
  return (
    R(() => {
      const o = e();
      o && n(no(o).getComputedStyle(o));
    }),
    t
  );
}
function Nl(e) {
  dn();
  const [t, n] = C(e, ['ref', 'style']);
  return b(
    te,
    E(
      {
        as: 'div',
        'data-popper-positioner': '',
        get style() {
          return Ut({ position: 'absolute', top: 0, left: 0, 'min-width': 'max-content' }, t.style);
        },
      },
      n,
    ),
  );
}
function Kn(e) {
  const { x: t = 0, y: n = 0, width: o = 0, height: r = 0 } = e ?? {};
  if (typeof DOMRect == 'function') {
    return new DOMRect(t, n, o, r);
  }
  const i = { x: t, y: n, width: o, height: r, top: n, right: t + o, bottom: n + r, left: t };
  return { ...i, toJSON: () => i };
}
function Bl(e, t) {
  return {
    contextElement: e,
    getBoundingClientRect: () => {
      const o = t(e);
      return o ? Kn(o) : e ? e.getBoundingClientRect() : Kn();
    },
  };
}
function Hl(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
var jl = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' };
function Vl(e, t) {
  const [n, o] = e.split('-'),
    r = jl[n];
  return o
    ? n === 'left' || n === 'right'
      ? `${r} ${o === 'start' ? 'top' : 'bottom'}`
      : o === 'start'
        ? `${r} ${t === 'rtl' ? 'right' : 'left'}`
        : `${r} ${t === 'rtl' ? 'left' : 'right'}`
    : `${r} center`;
}
function Wl(e) {
  const t = Y(
      {
        getAnchorRect: (g) => g?.getBoundingClientRect(),
        placement: 'bottom',
        gutter: 0,
        shift: 0,
        flip: !0,
        slide: !0,
        overlap: !1,
        sameWidth: !1,
        fitViewport: !1,
        hideWhenDetached: !1,
        detachedPadding: 0,
        arrowPadding: 4,
        overflowPadding: 8,
      },
      e,
    ),
    [n, o] = L(),
    [r, i] = L(),
    [s, l] = L(t.placement),
    a = () => Bl(t.anchorRef?.(), t.getAnchorRect),
    { direction: c } = zi();
  async function p() {
    const g = a(),
      f = n(),
      d = r();
    if (!g || !f) {
      return;
    }
    const m = (d?.clientHeight || 0) / 2,
      v = typeof t.gutter == 'number' ? t.gutter + m : (t.gutter ?? m);
    f.style.setProperty('--kb-popper-content-overflow-padding', `${t.overflowPadding}px`), g.getBoundingClientRect();
    const h = [
      Rl(({ placement: S }) => {
        const F = !!S.split('-')[1];
        return { mainAxis: v, crossAxis: F ? void 0 : t.shift, alignmentAxis: t.shift };
      }),
    ];
    if (t.flip !== !1) {
      const S = typeof t.flip == 'string' ? t.flip.split(' ') : void 0;
      if (S !== void 0 && !S.every(Hl)) {
        throw new Error('`flip` expects a spaced-delimited list of placements');
      }
      h.push(Fl({ padding: t.overflowPadding, fallbackPlacements: S }));
    }
    (t.slide || t.overlap) && h.push(Ll({ mainAxis: t.slide, crossAxis: t.overlap, padding: t.overflowPadding })),
      h.push(
        Il({
          padding: t.overflowPadding,
          apply({ availableWidth: S, availableHeight: F, rects: I }) {
            const z = Math.round(I.reference.width);
            (S = Math.floor(S)),
              (F = Math.floor(F)),
              f.style.setProperty('--kb-popper-anchor-width', `${z}px`),
              f.style.setProperty('--kb-popper-content-available-width', `${S}px`),
              f.style.setProperty('--kb-popper-content-available-height', `${F}px`),
              t.sameWidth && (f.style.width = `${z}px`),
              t.fitViewport && ((f.style.maxWidth = `${S}px`), (f.style.maxHeight = `${F}px`));
          },
        }),
      ),
      t.hideWhenDetached && h.push($l({ padding: t.detachedPadding })),
      d && h.push(kl({ element: d, padding: t.arrowPadding }));
    const w = await Al(g, f, {
      placement: t.placement,
      strategy: 'absolute',
      middleware: h,
      platform: { ...qo, isRTL: () => c() === 'rtl' },
    });
    if ((l(w.placement), t.onCurrentPlacementChange?.(w.placement), !f)) {
      return;
    }
    f.style.setProperty('--kb-popper-content-transform-origin', Vl(w.placement, c()));
    const D = Math.round(w.x),
      T = Math.round(w.y);
    let y;
    if (
      (t.hideWhenDetached && (y = w.middlewareData.hide?.referenceHidden ? 'hidden' : 'visible'),
      Object.assign(f.style, { top: '0', left: '0', transform: `translate3d(${D}px, ${T}px, 0)`, visibility: y }),
      d && w.middlewareData.arrow)
    ) {
      const { x: S, y: F } = w.middlewareData.arrow,
        I = w.placement.split('-')[0];
      Object.assign(d.style, { left: S != null ? `${S}px` : '', top: F != null ? `${F}px` : '', [I]: '100%' });
    }
  }
  R(() => {
    const g = a(),
      f = n();
    if (!g || !f) {
      return;
    }
    const d = Tl(g, f, p, { elementResize: typeof ResizeObserver == 'function' });
    $(d);
  }),
    R(() => {
      const g = n(),
        f = t.contentRef?.();
      !g ||
        !f ||
        queueMicrotask(() => {
          g.style.zIndex = getComputedStyle(f).zIndex;
        });
    });
  const u = { currentPlacement: s, contentRef: () => t.contentRef?.(), setPositionerRef: o, setArrowRef: i };
  return b(un.Provider, {
    value: u,
    get children() {
      return t.children;
    },
  });
}
var Ko = Object.assign(Wl, { Arrow: fn, Context: un, usePopperContext: dn, Positioner: Nl });
function ql(e) {
  const t = (n) => {
    n.key, oo.Escape;
  };
  R(() => {
    if (M || A(e.isDisabled)) {
      return;
    }
    const n = e.ownerDocument?.() ?? ge();
    n.addEventListener('keydown', t),
      $(() => {
        n.removeEventListener('keydown', t);
      });
  });
}
var Kl = 'data-kb-top-layer',
  Uo,
  Wt = !1,
  me = [];
function nt(e) {
  return me.findIndex((t) => t.node === e);
}
function Ul(e) {
  return me[nt(e)];
}
function Yl(e) {
  return me[me.length - 1].node === e;
}
function Yo() {
  return me.filter((e) => e.isPointerBlocking);
}
function Xl() {
  return [...Yo()].slice(-1)[0];
}
function gn() {
  return Yo().length > 0;
}
function Xo(e) {
  const t = nt(Xl()?.node);
  return nt(e) < t;
}
function Zl(e) {
  me.push(e);
}
function Gl(e) {
  const t = nt(e);
  t < 0 || me.splice(t, 1);
}
function Ql() {
  for (const { node: e } of me) {
    e.style.pointerEvents = Xo(e) ? 'none' : 'auto';
  }
}
function Jl(e) {
  if (gn() && !Wt) {
    const t = ge(e);
    (Uo = document.body.style.pointerEvents), (t.body.style.pointerEvents = 'none'), (Wt = !0);
  }
}
function ec(e) {
  if (gn()) {
    return;
  }
  const t = ge(e);
  (t.body.style.pointerEvents = Uo), t.body.style.length === 0 && t.body.removeAttribute('style'), (Wt = !1);
}
var gt = {
    layers: me,
    isTopMostLayer: Yl,
    hasPointerBlockingLayer: gn,
    isBelowPointerBlockingLayer: Xo,
    addLayer: Zl,
    removeLayer: Gl,
    indexOf: nt,
    find: Ul,
    assignPointerEventToLayers: Ql,
    disableBodyPointerEvents: Jl,
    restoreBodyPointerEvents: ec,
  },
  Un = 'interactOutside.pointerDownOutside',
  Yn = 'interactOutside.focusOutside';
function tc(e, t) {
  let n,
    o = Ti;
  const r = () => ge(t()),
    i = (u) => e.onPointerDownOutside?.(u),
    s = (u) => e.onFocusOutside?.(u),
    l = (u) => e.onInteractOutside?.(u),
    a = (u) => {
      const g = u.target;
      return !(g instanceof HTMLElement) || g.closest(`[${Kl}]`) || !Qe(r(), g) || Qe(t(), g)
        ? !1
        : !e.shouldExcludeElement?.(g);
    },
    c = (u) => {
      function g() {
        const f = t(),
          d = u.target;
        if (!f || !d || !a(u)) {
          return;
        }
        const m = Te([i, l]);
        d.addEventListener(Un, m, { once: !0 });
        const v = new CustomEvent(Un, {
          bubbles: !1,
          cancelable: !0,
          detail: { originalEvent: u, isContextMenu: u.button === 2 || (Di(u) && u.button === 0) },
        });
        d.dispatchEvent(v);
      }
      u.pointerType === 'touch'
        ? (r().removeEventListener('click', g), (o = g), r().addEventListener('click', g, { once: !0 }))
        : g();
    },
    p = (u) => {
      const g = t(),
        f = u.target;
      if (!g || !f || !a(u)) {
        return;
      }
      const d = Te([s, l]);
      f.addEventListener(Yn, d, { once: !0 });
      const m = new CustomEvent(Yn, { bubbles: !1, cancelable: !0, detail: { originalEvent: u, isContextMenu: !1 } });
      f.dispatchEvent(m);
    };
  R(() => {
    M ||
      A(e.isDisabled) ||
      ((n = window.setTimeout(() => {
        r().addEventListener('pointerdown', c, !0);
      }, 0)),
      r().addEventListener('focusin', p, !0),
      $(() => {
        window.clearTimeout(n),
          r().removeEventListener('click', o),
          r().removeEventListener('pointerdown', c, !0),
          r().removeEventListener('focusin', p, !0);
      }));
  });
}
var Zo = q();
function nc() {
  return K(Zo);
}
function oc(e) {
  let t;
  const n = nc(),
    [o, r] = C(e, [
      'ref',
      'disableOutsidePointerEvents',
      'excludedElements',
      'onEscapeKeyDown',
      'onPointerDownOutside',
      'onFocusOutside',
      'onInteractOutside',
      'onDismiss',
      'bypassTopMostLayerCheck',
    ]),
    i = new Set([]),
    s = (u) => {
      i.add(u);
      const g = n?.registerNestedLayer(u);
      return () => {
        i.delete(u), g?.();
      };
    };
  tc(
    {
      shouldExcludeElement: (u) => !1,
      onPointerDownOutside: (u) => {},
      onFocusOutside: (u) => {
        o.onFocusOutside?.(u), o.onInteractOutside?.(u), u.defaultPrevented || o.onDismiss?.();
      },
    },
    () => t,
  ),
    ql({ ownerDocument: () => ge(t), onEscapeKeyDown: (u) => {} }),
    Xn(() => {}),
    R(
      qt(
        [() => t, () => o.disableOutsidePointerEvents],
        ([u, g]) => {
          if (!u) {
            return;
          }
          const f = gt.find(u);
          f && f.isPointerBlocking !== g && ((f.isPointerBlocking = g), gt.assignPointerEventToLayers()),
            g && gt.disableBodyPointerEvents(u),
            $(() => {
              gt.restoreBodyPointerEvents(u);
            });
        },
        { defer: !0 },
      ),
    );
  const p = { registerNestedLayer: s };
  return b(Zo.Provider, {
    value: p,
    get children() {
      return b(te, E({ as: 'div' }, r));
    },
  });
}
var rc = {};
Pt(rc, { Arrow: () => fn, Content: () => Qo, Portal: () => Jo, Root: () => er, Tooltip: () => nr, Trigger: () => tr });
var Go = q();
function pn() {
  const e = K(Go);
  if (e === void 0) {
    throw new Error('[kobalte]: `useTooltipContext` must be used within a `Tooltip` component');
  }
  return e;
}
function Qo(e) {
  const t = pn(),
    n = Y({ id: t.generateId('content') }, e),
    [o, r] = C(n, ['ref', 'style']);
  return (
    R(() => $(t.registerContentId(r.id))),
    b(ne, {
      get when() {
        return t.contentPresent();
      },
      get children() {
        return b(Ko.Positioner, {
          get children() {
            return b(
              oc,
              E(
                {
                  role: 'tooltip',
                  disableOutsidePointerEvents: !1,
                  get style() {
                    return Ut(
                      {
                        '--kb-tooltip-content-transform-origin': 'var(--kb-popper-content-transform-origin)',
                        position: 'relative',
                      },
                      o.style,
                    );
                  },
                  onFocusOutside: (i) => i.preventDefault(),
                  onDismiss: () => t.hideTooltip(!0),
                },
                () => t.dataset(),
                r,
              ),
            );
          },
        });
      },
    })
  );
}
function Jo(e) {
  const t = pn();
  return b(ne, {
    get when() {
      return t.contentPresent();
    },
    get children() {
      return b(Gn, e);
    },
  });
}
function ic(e, t, n) {
  const o = e.split('-')[0],
    r = t.getBoundingClientRect(),
    i = n.getBoundingClientRect(),
    s = [],
    l = r.left + r.width / 2,
    a = r.top + r.height / 2;
  switch (o) {
    case 'top':
      s.push([r.left, a]),
        s.push([i.left, i.bottom]),
        s.push([i.left, i.top]),
        s.push([i.right, i.top]),
        s.push([i.right, i.bottom]),
        s.push([r.right, a]);
      break;
    case 'right':
      s.push([l, r.top]),
        s.push([i.left, i.top]),
        s.push([i.right, i.top]),
        s.push([i.right, i.bottom]),
        s.push([i.left, i.bottom]),
        s.push([l, r.bottom]);
      break;
    case 'bottom':
      s.push([r.left, a]),
        s.push([i.left, i.top]),
        s.push([i.left, i.bottom]),
        s.push([i.right, i.bottom]),
        s.push([i.right, i.top]),
        s.push([r.right, a]);
      break;
    case 'left':
      s.push([l, r.top]),
        s.push([i.right, i.top]),
        s.push([i.left, i.top]),
        s.push([i.left, i.bottom]),
        s.push([i.right, i.bottom]),
        s.push([l, r.bottom]);
      break;
  }
  return s;
}
var Ce = {},
  sc = 0,
  ke = !1,
  fe,
  Ye,
  Ae;
function er(e) {
  const t = `tooltip-${ce()}`,
    n = `${++sc}`,
    o = Y({ id: t, openDelay: 700, closeDelay: 300, skipDelayDuration: 300 }, e),
    [r, i] = C(o, [
      'id',
      'open',
      'defaultOpen',
      'onOpenChange',
      'disabled',
      'triggerOnFocusOnly',
      'openDelay',
      'closeDelay',
      'skipDelayDuration',
      'ignoreSafeArea',
      'forceMount',
    ]);
  let s;
  const [l, a] = L(),
    [c, p] = L(),
    [u, g] = L(),
    [f, d] = L(i.placement),
    m = Ni({ open: () => r.open, defaultOpen: () => r.defaultOpen, onOpenChange: (P) => r.onOpenChange?.(P) }),
    { present: v } = zt({ show: () => r.forceMount || m.isOpen(), element: () => u() ?? null }),
    h = () => {
      Ce[n] = D;
    },
    w = () => {
      for (const P in Ce) {
        P !== n && (Ce[P](!0), delete Ce[P]);
      }
    },
    D = (P = !1) => {
      M ||
        (P || (r.closeDelay && r.closeDelay <= 0)
          ? (window.clearTimeout(s), (s = void 0), m.close())
          : s ||
            (s = window.setTimeout(() => {
              (s = void 0), m.close();
            }, r.closeDelay)),
        window.clearTimeout(fe),
        (fe = void 0),
        r.skipDelayDuration &&
          r.skipDelayDuration >= 0 &&
          (Ae = window.setTimeout(() => {
            window.clearTimeout(Ae), (Ae = void 0);
          }, r.skipDelayDuration)),
        ke &&
          (window.clearTimeout(Ye),
          (Ye = window.setTimeout(() => {
            delete Ce[n], (Ye = void 0), (ke = !1);
          }, r.closeDelay))));
    },
    T = () => {
      M ||
        (clearTimeout(s),
        (s = void 0),
        w(),
        h(),
        (ke = !0),
        m.open(),
        window.clearTimeout(fe),
        (fe = void 0),
        window.clearTimeout(Ye),
        (Ye = void 0),
        window.clearTimeout(Ae),
        (Ae = void 0));
    },
    y = () => {
      M ||
        (w(),
        h(),
        !m.isOpen() && !fe && !ke
          ? (fe = window.setTimeout(() => {
              (fe = void 0), (ke = !0), T();
            }, r.openDelay))
          : m.isOpen() || T());
    },
    S = (P = !1) => {
      M || (!P && r.openDelay && r.openDelay > 0 && !s && !Ae ? y() : T());
    },
    F = () => {
      M || (window.clearTimeout(fe), (fe = void 0), (ke = !1));
    },
    I = () => {
      M || (window.clearTimeout(s), (s = void 0));
    },
    z = (P) => Qe(c(), P) || Qe(u(), P),
    B = (P) => {
      const _ = c(),
        N = u();
      if (!(!_ || !N)) {
        return ic(P, _, N);
      }
    },
    H = (P) => {
      const _ = P.target;
      if (z(_)) {
        I();
        return;
      }
      if (!r.ignoreSafeArea) {
        const N = B(f());
        if (N && Li(Ri(P), N)) {
          I();
          return;
        }
      }
      s || D();
    };
  R(() => {
    if (M || !m.isOpen()) {
      return;
    }
    const P = ge();
    P.addEventListener('pointermove', H, !0),
      $(() => {
        P.removeEventListener('pointermove', H, !0);
      });
  }),
    R(() => {
      const P = c();
      if (!P || !m.isOpen()) {
        return;
      }
      const _ = (U) => {
          const J = U.target;
          Qe(J, P) && D(!0);
        },
        N = no();
      N.addEventListener('scroll', _, { capture: !0 }),
        $(() => {
          N.removeEventListener('scroll', _, { capture: !0 });
        });
    }),
    $(() => {
      clearTimeout(s), Ce[n] && delete Ce[n];
    });
  const k = {
    dataset: O(() => ({ 'data-expanded': m.isOpen() ? '' : void 0, 'data-closed': m.isOpen() ? void 0 : '' })),
    isOpen: m.isOpen,
    isDisabled: () => r.disabled ?? !1,
    triggerOnFocusOnly: () => r.triggerOnFocusOnly ?? !1,
    contentId: l,
    contentPresent: v,
    openTooltip: S,
    hideTooltip: D,
    cancelOpening: F,
    generateId: Yt(() => o.id),
    registerContentId: Ze(a),
    isTargetOnTooltip: z,
    setTriggerRef: p,
    setContentRef: g,
  };
  return b(Go.Provider, {
    value: k,
    get children() {
      return b(Ko, E({ anchorRef: c, contentRef: u, onCurrentPlacementChange: d }, i));
    },
  });
}
function tr(e) {
  let t;
  const n = pn(),
    [o, r] = C(e, ['ref', 'onPointerEnter', 'onPointerLeave', 'onPointerDown', 'onClick', 'onFocus', 'onBlur']);
  let i = !1,
    s = !1,
    l = !1;
  const a = () => {
      i = !1;
    },
    c = () => {
      !n.isOpen() && (s || l) && n.openTooltip(l);
    },
    p = (h) => {
      n.isOpen() && !s && !l && n.hideTooltip(h);
    },
    u = (h) => {
      De(h, o.onPointerEnter),
        !(h.pointerType === 'touch' || n.triggerOnFocusOnly() || n.isDisabled() || h.defaultPrevented) &&
          ((s = !0), c());
    },
    g = (h) => {
      De(h, o.onPointerLeave), h.pointerType !== 'touch' && ((s = !1), (l = !1), n.isOpen() ? p() : n.cancelOpening());
    },
    f = (h) => {
      De(h, o.onPointerDown), (i = !0), ge(t).addEventListener('pointerup', a, { once: !0 });
    },
    d = (h) => {
      De(h, o.onClick), (s = !1), (l = !1), p(!0);
    },
    m = (h) => {
      De(h, o.onFocus), !(n.isDisabled() || h.defaultPrevented || i) && ((l = !0), c());
    },
    v = (h) => {
      De(h, o.onBlur);
      const w = h.relatedTarget;
      n.isTargetOnTooltip(w) || ((s = !1), (l = !1), p(!0));
    };
  return (
    $(() => {
      M || ge(t).removeEventListener('pointerup', a);
    }),
    b(
      te,
      E(
        {
          as: 'button',
          get 'aria-describedby'() {
            return n.isOpen() ? n.contentId() : void 0;
          },
          onPointerEnter: u,
          onPointerLeave: g,
          onPointerDown: f,
          onClick: d,
          onFocus: m,
          onBlur: v,
        },
        () => n.dataset(),
        r,
      ),
    )
  );
}
var nr = Object.assign(er, { Arrow: fn, Content: Qo, Portal: Jo, Trigger: tr });
nr.Trigger;
const qc = je([
    'relative isolate',
    'rounded-md',
    'overflow-hidden',
    'cursor-pointer',
    'outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
  ]),
  Kc = je([
    'absolute inset-0',
    'flex flex-col items-center justify-center gap-2',
    'opacity-0 hover:opacity-100',
    'transition-all duration-300 ease-in-out',
    'bg-gradient-to-b from-gray-500/20 to-foreground/85',
    'text-center text-white',
  ]),
  Uc = je([
    '-translate-y-1/2 -translate-x-1/2 fixed top-1/2 left-1/2 z-50',
    'px-4 py-4',
    'flex items-center justify-center gap-4',
    'data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] duration-200 data-[closed]:animate-out data-[expanded]:animate-in',
  ]),
  Yc = je([
    'absolute top-6 right-6',
    'flex items-center justify-center',
    'size-8 rounded-full',
    'bg-gray-500/40 text-gray-100 hover:bg-gray-950/50 hover:text-white',
    'text-lg leading-none',
    'transition-colors duration-300 ease-in-out',
    'outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
  ]),
  Xc = je([
    'fixed inset-0 z-50',
    'bg-gray-900/90 backdrop-blur-sm',
    'data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:animate-out data-[expanded]:animate-in',
  ]);
export {
  qc as A,
  Fc as B,
  Kc as C,
  Xc as D,
  Uc as E,
  Yc as F,
  Rc as G,
  Tc as H,
  Oe as I,
  Lc as J,
  kc as K,
  Ac as L,
  _c as M,
  Mc as N,
  $c as O,
  te as P,
  zc as Q,
  Cc as R,
  Nc as T,
  Pt as _,
  wc as a,
  xc as b,
  bc as c,
  Sc as d,
  yc as e,
  wn as f,
  Ec as g,
  Pc as h,
  Ee as i,
  lt as j,
  jc as k,
  Hc as l,
  Ve as m,
  Wc as n,
  Vc as o,
  Bc as p,
  Dc as q,
  Oc as r,
  Oo as s,
  mn as t,
  kr as u,
  de as v,
  vc as w,
  Y as x,
  io as y,
  pe as z,
};
