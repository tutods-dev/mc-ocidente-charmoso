import { u as $e } from './routing-VhRhlrWH.js';
import { F as D, f as J, S as M, e as X, R as pe } from './styles-CtYowtZs.js';
import {
  k as F,
  i as S,
  t as T,
  y as be,
  F as ge,
  A as he,
  b as k,
  B as me,
  p as ve,
  r as xe,
  h as ye,
} from './web-Cw_Dym33.js';
const Ae = [
  { key: 'home', label: 'Página Inicial', href: '/' },
  { key: 'about-us', label: 'Sobre nós', href: '/sobre-nos' },
  { key: 'projects', label: 'Projetos', href: '/projetos' },
  { key: 'contacts', label: 'Contactos', href: '/contactos' },
];
var W = (e) => (typeof e == 'boolean' ? `${e}` : e === 0 ? '0' : e),
  v = (e) => !e || typeof e != 'object' || Object.keys(e).length === 0,
  we = (e, c) => JSON.stringify(e) === JSON.stringify(c);
function Y(e, c) {
  e.forEach((t) => {
    Array.isArray(t) ? Y(t, c) : c.push(t);
  });
}
function ee(e) {
  const c = [];
  return Y(e, c), c;
}
var te = (...e) => ee(e).filter(Boolean),
  re = (e, c) => {
    const t = {},
      m = Object.keys(e),
      x = Object.keys(c);
    for (const d of m) {
      if (x.includes(d)) {
        const p = e[d],
          h = c[d];
        typeof p == 'object' && typeof h == 'object'
          ? (t[d] = re(p, h))
          : Array.isArray(p) || Array.isArray(h)
            ? (t[d] = te(h, p))
            : (t[d] = h + ' ' + p);
      } else {
        t[d] = e[d];
      }
    }
    for (const d of x) {
      m.includes(d) || (t[d] = c[d]);
    }
    return t;
  },
  Z = (e) => (!e || typeof e != 'string' ? e : e.replace(/\s+/g, ' ').trim()),
  je = { twMerge: !0, twMergeConfig: {}, responsiveVariants: !1 },
  ae = (e) => e || void 0,
  E = (...e) => ae(ee(e).filter(Boolean).join(' ')),
  B = null,
  w = {},
  H = !1,
  N =
    (...e) =>
    (c) =>
      c.twMerge
        ? ((!B || H) &&
            ((H = !1),
            (B = v(w)
              ? J
              : pe({
                  ...w,
                  extend: {
                    theme: w.theme,
                    classGroups: w.classGroups,
                    conflictingClassGroupModifiers: w.conflictingClassGroupModifiers,
                    conflictingClassGroups: w.conflictingClassGroups,
                    ...w.extend,
                  },
                }))),
          ae(B(E(e))))
        : E(e),
  Q = (e, c) => {
    for (const t in c) {
      e.hasOwnProperty(t) ? (e[t] = E(e[t], c[t])) : (e[t] = c[t]);
    }
    return e;
  },
  ne = (e, c) => {
    const {
        extend: t = null,
        slots: m = {},
        variants: x = {},
        compoundVariants: d = [],
        compoundSlots: p = [],
        defaultVariants: h = {},
      } = e,
      u = { ...je, ...c },
      $ = t != null && t.base ? E(t.base, e?.base) : e?.base,
      y = t != null && t.variants && !v(t.variants) ? re(x, t.variants) : x,
      V = t != null && t.defaultVariants && !v(t.defaultVariants) ? { ...t.defaultVariants, ...h } : h;
    !v(u.twMergeConfig) && !we(u.twMergeConfig, w) && ((H = !0), (w = u.twMergeConfig));
    const z = v(t?.slots),
      G = v(m) ? {} : { base: E(e?.base, z && t?.base), ...m },
      O = z ? G : Q({ ...t?.slots }, v(G) ? { base: e?.base } : G),
      C = v(t?.compoundVariants) ? d : te(t?.compoundVariants, d),
      A = (b) => {
        if (v(y) && v(m) && z) {
          return N($, b?.class, b?.className)(u);
        }
        if (C && !Array.isArray(C)) {
          throw new TypeError(`The "compoundVariants" prop must be an array. Received: ${typeof C}`);
        }
        if (p && !Array.isArray(p)) {
          throw new TypeError(`The "compoundSlots" prop must be an array. Received: ${typeof p}`);
        }
        const ie = (r, n, a = [], i) => {
            let l = a;
            if (typeof n == 'string') {
              l = l.concat(
                Z(n)
                  .split(' ')
                  .map((o) => `${r}:${o}`),
              );
            } else if (Array.isArray(n)) {
              l = l.concat(n.reduce((o, s) => o.concat(`${r}:${s}`), []));
            } else if (typeof n == 'object' && typeof i == 'string') {
              for (const o in n) {
                if (n.hasOwnProperty(o) && o === i) {
                  const s = n[o];
                  if (s && typeof s == 'string') {
                    const f = Z(s);
                    l[i]
                      ? (l[i] = l[i].concat(f.split(' ').map((g) => `${r}:${g}`)))
                      : (l[i] = f.split(' ').map((g) => `${r}:${g}`));
                  } else {
                    Array.isArray(s) && s.length > 0 && (l[i] = s.reduce((f, g) => f.concat(`${r}:${g}`), []));
                  }
                }
              }
            }
            return l;
          },
          I = (r, n = y, a = null, i = null) => {
            var l;
            const o = n[r];
            if (!o || v(o)) {
              return null;
            }
            const s = (l = i?.[r]) != null ? l : b?.[r];
            if (s === null) {
              return null;
            }
            let f = W(s),
              g =
                (Array.isArray(u.responsiveVariants) && u.responsiveVariants.length > 0) || u.responsiveVariants === !0,
              _ = V?.[r],
              j = [];
            if (typeof f == 'object' && g) {
              for (const [R, q] of Object.entries(f)) {
                const de = o[q];
                if (R === 'initial') {
                  _ = q;
                  continue;
                }
                (Array.isArray(u.responsiveVariants) && !u.responsiveVariants.includes(R)) || (j = ie(R, de, j, a));
              }
            }
            const fe = f != null && typeof f != 'object' ? f : W(_),
              P = o[fe || 'false'];
            return typeof j == 'object' && typeof a == 'string' && j[a] ? Q(j, P) : j.length > 0 ? (j.push(P), j) : P;
          },
          oe = () => (y ? Object.keys(y).map((r) => I(r, y)) : null),
          se = (r, n) => {
            if (!y || typeof y != 'object') {
              return null;
            }
            const a = new Array();
            for (const i in y) {
              const l = I(i, y, r, n),
                o = r === 'base' && typeof l == 'string' ? l : l && l[r];
              o && (a[a.length] = o);
            }
            return a;
          },
          K = {};
        for (const r in b) {
          b[r] !== void 0 && (K[r] = b[r]);
        }
        const L = (r, n) => {
            var a;
            const i = typeof b?.[r] == 'object' ? { [r]: (a = b[r]) == null ? void 0 : a.initial } : {};
            return { ...V, ...K, ...i, ...n };
          },
          U = (r = [], n) => {
            const a = [];
            for (const { class: i, className: l, ...o } of r) {
              let s = !0;
              for (const [f, g] of Object.entries(o)) {
                const _ = L(f, n);
                if (Array.isArray(g)) {
                  if (!g.includes(_[f])) {
                    s = !1;
                    break;
                  }
                } else if (_[f] !== g) {
                  s = !1;
                  break;
                }
              }
              s && (i && a.push(i), l && a.push(l));
            }
            return a;
          },
          ce = (r) => {
            const n = U(C, r);
            if (!Array.isArray(n)) {
              return n;
            }
            const a = {};
            for (const i of n) {
              if ((typeof i == 'string' && (a.base = N(a.base, i)(u)), typeof i == 'object')) {
                for (const [l, o] of Object.entries(i)) {
                  a[l] = N(a[l], o)(u);
                }
              }
            }
            return a;
          },
          ue = (r) => {
            if (p.length < 1) {
              return null;
            }
            const n = {};
            for (const { slots: a = [], class: i, className: l, ...o } of p) {
              if (!v(o)) {
                let s = !0;
                for (const f of Object.keys(o)) {
                  const g = L(f, r)[f];
                  if (g === void 0 || (Array.isArray(o[f]) ? !o[f].includes(g) : o[f] !== g)) {
                    s = !1;
                    break;
                  }
                }
                if (!s) {
                  continue;
                }
              }
              for (const s of a) {
                (n[s] = n[s] || []), n[s].push([i, l]);
              }
            }
            return n;
          };
        if (!v(m) || !z) {
          const r = {};
          if (typeof O == 'object' && !v(O)) {
            for (const n of Object.keys(O)) {
              r[n] = (a) => {
                var i, l;
                return N(
                  O[n],
                  se(n, a),
                  ((i = ce(a)) != null ? i : [])[n],
                  ((l = ue(a)) != null ? l : [])[n],
                  a?.class,
                  a?.className,
                )(u);
              };
            }
          }
          return r;
        }
        return N($, oe(), U(C), b?.class, b?.className)(u);
      },
      le = () => {
        if (!(!y || typeof y != 'object')) {
          return Object.keys(y);
        }
      };
    return (
      (A.variantKeys = le()),
      (A.extend = t),
      (A.base = $),
      (A.slots = O),
      (A.variants = y),
      (A.defaultVariants = V),
      (A.compoundSlots = p),
      (A.compoundVariants = C),
      A
    );
  };
const ze = ne({
    base: ['py-2', 'z-50', 'transition duration-300 ease-in-out'],
    variants: {
      mode: { transparent: 'fixed top-0 right-0 left-0', solid: '' },
      isSticky: { true: ['bg-gray-50', 'shadow-lg', 'sticky top-0 inset-x-0'], false: [] },
    },
    defaultVariants: { mode: 'transparent' },
  }),
  Ge = ne({
    base: ['container h-full', 'flex items-center justify-between gap-4', 'mx-auto px-4'],
    variants: { mode: { transparent: ['text-white'], solid: [''] }, isSticky: { true: 'text-gray-800', false: [] } },
    defaultVariants: { mode: 'transparent' },
  }),
  Ve = X(
    [
      'fixed',
      'z-50',
      'flex flex-col',
      'bg-white',
      'shadow-sm',
      'data-[transitioning]:transition-transform data-[transitioning]:duration-500 data-[transitioning]:ease-[cubic-bezier(0.32,0.72,0,1)]',
    ],
    {
      variants: {
        side: {
          top: ['top-0', 'rounded-b-lg'],
          bottom: ['bottom-0', 'rounded-t-lg'],
          right: ['right-0'],
          left: ['left-0'],
        },
      },
      compoundVariants: [
        { side: ['top', 'bottom'], class: ['h-full max-h-[500px]', 'inset-x-0'] },
        { side: ['left', 'right'], class: ['h-full w-full max-w-[85vw] md:max-w-[50vw]', 'inset-y-0'] },
      ],
    },
  ),
  ke = X(
    [
      'py-3 pr-4 pl-8',
      'flex items-center',
      'font-bold font-serif text-lg',
      'transition duration-300 ease-in-out',
      'relative before:absolute before:inset-y-0 before:left-0 before:h-full before:w-1 before:rounded-r-md before:bg-transparent before:content-[""]',
    ],
    {
      variants: {
        isActive: {
          true: ['text-gray-900', 'before:bg-gray-900'],
          false: ['text-gray-800', 'hover:text-gray-900 hover:before:bg-gray-900'],
        },
      },
      defaultVariants: { isActive: !1 },
    },
  );
var Ce = T('<i class="ph ph-list text-2xl">'),
  Me = T('<i class="ph ph-x text-lg">'),
  Oe = T('<header class="flex items-center justify-between gap-4 p-4"><p>MC Ocidente charmoso</p><!$><!/>'),
  _e = T('<nav class="flex-1 py-4"><ul class="flex flex-col">'),
  Se = T('<li><a>');
function Pe(e) {
  const c = $e();
  function t(m) {
    return m === c.pathname;
  }
  return k(M, {
    side: 'right',
    children: (m) => [
      k(M.Trigger, {
        get class() {
          return D([
            'size-8 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-70',
            { 'text-gray-50 hover:text-white': e.mode === 'transparent' },
            { 'text-gray-800': e.isSticky },
          ]);
        },
        get children() {
          return S(Ce);
        },
      }),
      k(M.Portal, {
        get children() {
          return [
            k(M.Overlay, {
              get class() {
                return D([
                  'fixed inset-0',
                  'z-50',
                  'data-[transitioning]:transition-colors data-[transitioning]:duration-300',
                ]);
              },
              get style() {
                return { 'background-color': `rgb(0 0 0 / ${0.5 * m.openPercentage})` };
              },
            }),
            k(M.Content, {
              get class() {
                return J(Ve({ side: 'right' }));
              },
              get children() {
                return [
                  (() => {
                    var x = S(Oe),
                      d = x.firstChild,
                      p = d.nextSibling,
                      [h, u] = be(p.nextSibling);
                    return (
                      F(
                        x,
                        k(M.Close, {
                          class:
                            'size-7 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-70',
                          get children() {
                            return S(Me);
                          },
                        }),
                        h,
                        u,
                      ),
                      x
                    );
                  })(),
                  (() => {
                    var x = S(_e),
                      d = x.firstChild;
                    return (
                      F(
                        d,
                        k(ge, {
                          each: Ae,
                          children: (p) =>
                            (() => {
                              var h = S(Se),
                                u = h.firstChild;
                              return (
                                (u.$$click = () => m.setOpen(!1)),
                                F(u, () => p.label),
                                ve(
                                  ($) => {
                                    var y = J(ke({ isActive: t(p.href) })),
                                      V = p.href;
                                    return y !== $.e && he(u, ($.e = y)), V !== $.t && me(u, 'href', ($.t = V)), $;
                                  },
                                  { e: void 0, t: void 0 },
                                ),
                                xe(),
                                h
                              );
                            })(),
                        }),
                      ),
                      x
                    );
                  })(),
                ];
              },
            }),
          ];
        },
      }),
    ],
  });
}
ye(['click']);
export { Ae as M, Pe as a, Ge as b, ze as h };
