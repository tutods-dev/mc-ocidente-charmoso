import { c as F, u as X, g as Y, I as Z } from './images-aBJc1Pbn.js';
import {
  w as A,
  J as D,
  d as E,
  K as G,
  L as J,
  M as K,
  e as R,
  N as U,
  p as V,
  O as W,
  F as k,
  I as q,
} from './styles-CtYowtZs.js';
import {
  p as B,
  F as H,
  A as L,
  m as N,
  r as Q,
  H as T,
  S as b,
  t as g,
  y as m,
  b as n,
  k as s,
  i as u,
  j as z,
} from './web-Cw_Dym33.js';
import './index-Cf71NSVw.js';
import { p as te } from './routing-VhRhlrWH.js';
import { c as ee } from './utils-dZO239yP.js';
import './preload-helper-DYd7aIoe.js';
var re = g('<div>');
const ae = R(
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
  ne = (e) => {
    const [t, r] = T(e, ['class', 'variant', 'round']);
    return (() => {
      var o = u(re);
      return (
        z(
          o,
          N(
            {
              get class() {
                return ee(ae({ variant: t.variant }), t.round ? 'rounded-full' : 'rounded-md', t.class);
              },
            },
            r,
          ),
          !1,
          !1,
        ),
        Q(),
        o
      );
    })();
  },
  y = 12;
function se(e = 1, t = y) {
  return { start: (e - 1) * t, end: e * t };
}
const M = `
  count(*[_type == 'project'])
`,
  ie = `
  count(*[_type == 'project' && $serviceSlug in services[]->slug.current])
`,
  le = `
    *[_type == "project"] | order(_createdAt desc) [$start...$end] {
      _id,
      title,
      "slug": slug.current,
      headline,
      "thumbnail": {
          ...thumbnail,
          "asset": thumbnail.asset->
      },
      "services": coalesce(services[]->{
          _id,
          title,
          'slug': slug.current
      }, []),
    }
`,
  oe = `
  {
    "total": ${M},
    "data": ${le}
  }
`;
A(async (e) => {
  try {
    let t = 0;
    return e ? (t = await F.fetch(ie, { serviceSlug: e })) : (t = await F.fetch(M)), t;
  } catch {
    return 0;
  }
}, 'total-projects');
A(V(ce, 'c_10961', '$$function0'), 'projects');
const O = A(async (e = 1, t = y) => {
  try {
    const { start: r, end: o } = se(e, t);
    return F.fetch(oe, { start: r, end: o });
  } catch {
    return { total: 0, data: [] };
  }
}, 'paginated-projects');
async function ce(e = 1) {}
var ue = g('<p class="mt-0.5 mb-4 line-clamp-3 text-md">'),
  ge = g('<ul class="flex flex-wrap items-center gap-2">'),
  de = g(
    '<a><article><!$><!/><section class="flex size-full flex-col justify-end bg-gradient-to-b from-50% from-transparent to-foreground px-6 py-8 text-gray-50 transition-colors duration-300 ease-in-out hover:from-0% group-hover:to-foreground"><h3 class="font-semibold text-white"></h3><!$><!/><!$><!/>',
  ),
  he = g('<li>');
function fe(e) {
  const t = N(e, { class: '' }),
    [r, o, P] = T(t, ['thumbnail', 'slug', 'headline', 'services', 'title'], ['class']);
  return (() => {
    var a = u(de),
      c = a.firstChild,
      f = c.firstChild,
      [h, $] = m(f.nextSibling),
      _ = h.nextSibling,
      x = _.firstChild,
      S = x.nextSibling,
      [v, j] = m(S.nextSibling),
      w = v.nextSibling,
      [C, I] = m(w.nextSibling);
    return (
      z(
        a,
        N(P, {
          get href() {
            return `/projetos/${r.slug}`;
          },
          get class() {
            return k(['group shadow transition duration-300 ease-in-out', o.class]);
          },
        }),
        !1,
        !0,
      ),
      s(
        c,
        n(Z, {
          loading: 'lazy',
          layout: 'fullWidth',
          get src() {
            return X(r.thumbnail).auto('format').quality(80).width(600).url();
          },
          get alt() {
            return r.title;
          },
          get background() {
            return Y(r.thumbnail);
          },
          class:
            '-z-10 absolute inset-0 size-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105',
        }),
        h,
        $,
      ),
      s(x, () => r.title),
      s(
        _,
        n(b, {
          get when() {
            return r.headline;
          },
          get children() {
            var i = u(ue);
            return s(i, () => r.headline), i;
          },
        }),
        v,
        j,
      ),
      s(
        _,
        n(b, {
          get when() {
            return r.services.length;
          },
          get children() {
            var i = u(ge);
            return (
              s(
                i,
                n(H, {
                  get each() {
                    return r.services;
                  },
                  children: (l) =>
                    (() => {
                      var p = u(he);
                      return (
                        s(
                          p,
                          n(ne, {
                            round: !0,
                            variant: 'secondary',
                            class: 'pointer-events-none',
                            get children() {
                              return l.title;
                            },
                          }),
                        ),
                        p
                      );
                    })(),
                }),
              ),
              i
            );
          },
        }),
        C,
        I,
      ),
      B(() => L(c, k(['relative isolate', 'overflow-hidden', 'h-[500px] rounded-lg']))),
      Q(),
      a
    );
  })();
}
var pe = g(
    '<main><header class=py-16><div class="container flex flex-col items-center justify-center gap-2 text-center"><h1 class=font-bold></h1><!$><!/></div></header><!$><!/><!$><!/>',
  ),
  me = g('<p class=text-lg>'),
  $e = g('<section class=py-16><div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">'),
  _e = g('<section class=py-2><div class="container flex justify-end">');
function we() {
  const [e, t] = te(),
    r = E(() => W()),
    o = E(async () => {
      let a = e.page ? Number(e.page) : 1;
      const c = await O(a, y),
        f = Math.ceil(c.total / y);
      a > c.total && (a = f);
      const { data: h, total: $ } = await O(a, y);
      return { data: h, total: $, currentPage: a };
    });
  function P(a) {
    t({ page: a }, { replace: !0 });
  }
  return (() => {
    var a = u(pe),
      c = a.firstChild,
      f = c.firstChild,
      h = f.firstChild,
      $ = h.nextSibling,
      [_, x] = m($.nextSibling),
      S = c.nextSibling,
      [v, j] = m(S.nextSibling),
      w = v.nextSibling,
      [C, I] = m(w.nextSibling);
    return (
      s(h, () => r()?.title ?? 'Projetos'),
      s(
        f,
        n(b, {
          get when() {
            return r()?.headline;
          },
          keyed: !0,
          children: (i) =>
            (() => {
              var l = u(me);
              return s(l, i), l;
            })(),
        }),
        _,
        x,
      ),
      s(
        a,
        n(b, {
          get when() {
            return o()?.data;
          },
          keyed: !0,
          children: (i) =>
            (() => {
              var l = u($e),
                p = l.firstChild;
              return (
                s(
                  p,
                  n(H, {
                    each: i,
                    children: (d) =>
                      n(fe, {
                        get title() {
                          return d.title;
                        },
                        get headline() {
                          return d.headline;
                        },
                        get thumbnail() {
                          return d.thumbnail;
                        },
                        get services() {
                          return d.services;
                        },
                        get slug() {
                          return d.slug;
                        },
                      }),
                  }),
                ),
                l
              );
            })(),
        }),
        v,
        j,
      ),
      s(
        a,
        n(b, {
          get when() {
            return o()?.total;
          },
          keyed: !0,
          children: (i) =>
            (() => {
              var l = u(_e),
                p = l.firstChild;
              return (
                s(
                  p,
                  n(q, {
                    count: i,
                    defaultPage: 1,
                    fixedItems: !0,
                    onPageChange: P,
                    get page() {
                      return Number(e.page) ?? 1;
                    },
                    itemComponent: (d) =>
                      n(D, {
                        get page() {
                          return d.page;
                        },
                        get children() {
                          return d.page;
                        },
                      }),
                    ellipsisComponent: () => n(G, {}),
                    get children() {
                      return [n(J, {}), n(K, {}), n(U, {})];
                    },
                  }),
                ),
                l
              );
            })(),
        }),
        C,
        I,
      ),
      a
    );
  })();
}
export { we as default };
