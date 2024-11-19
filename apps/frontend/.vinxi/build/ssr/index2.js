import { splitProps as C, mergeProps as S, Show as u, For as y } from 'solid-js';
import {
  ssrAttribute as A,
  mergeProps as I,
  escape as a,
  ssrHydrationKey as c,
  createComponent as e,
  ssr as o,
  ssrElement as w,
} from 'solid-js/web';
import {
  Q as E,
  i as F,
  J as N,
  K as O,
  L as Q,
  M as T,
  I as d,
  c as h,
  N as k,
  v as m,
  R as q,
  O as z,
} from './assets/styles-2TqKWpP5.js';
import 'clsx';
import './assets/styles-EAaAWUae.js';
import { c as f } from './assets/cn-YZS7jNQp.js';
import { I as B, u as H, g as K } from './assets/images-CtpvCe-X.js';
import { q as L } from './assets/routing-KofvCWNq.js';
import 'solid-js/web/storage';
import 'h3';
import 'node:async_hooks';
import '@sanity/client';
import 'class-variance-authority';
import 'tailwind-merge';
import 'tailwind-variants';
import '@sanity/image-url';
const v = `
  count(*[_type == 'project'])
`,
  M = `
  count(*[_type == 'project' && $serviceSlug in services[]->slug.current])
`,
  $ = `
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
  R = `
  {
    "total": ${v},
    "data": ${$}
  }
`,
  g = 12;
function b(t = 1, s = g) {
  return { start: (t - 1) * s, end: t * s };
}
m(async (t) => {
  try {
    let s = 0;
    return t ? (s = await d.fetch(M, { serviceSlug: t })) : (s = await d.fetch(v)), s;
  } catch {
    return 0;
  }
}, 'total-projects');
m(F(D, 'c_10961', '$$function0'), 'projects');
const P = m(async (t = 1, s = g) => {
  try {
    const { start: n, end: l } = b(t, s);
    return d.fetch(R, { start: n, end: l });
  } catch {
    return { total: 0, data: [] };
  }
}, 'paginated-projects');
async function D(t = 1) {
  try {
    return d.fetch($, { ...b(t) });
  } catch {
    return [];
  }
}
var G = ['<p', ' class="mt-0.5 mb-4 line-clamp-3 text-md">', '</p>'],
  J = ['<ul', ' class="flex flex-wrap items-center gap-2">', '</ul>'],
  U = [
    '<article',
    '><!--$-->',
    '<!--/--><section class="flex size-full flex-col justify-end bg-gradient-to-b from-50% from-transparent to-foreground px-6 py-8 text-gray-50 transition-colors duration-300 ease-in-out hover:from-0% group-hover:to-foreground"><h3 class="font-semibold text-white">',
    '</h3><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--></section></article>',
  ],
  W = ['<li', '>', '</li>'];
function V(t) {
  const s = S(t, { class: '' }),
    [n, l, p] = C(s, ['thumbnail', 'slug', 'headline', 'services', 'title'], ['class']);
  return w(
    'a',
    I(p, {
      get href() {
        return `/projetos/${n.slug}`;
      },
      get class() {
        return f(['group shadow transition duration-300 ease-in-out', l.class]);
      },
    }),
    () =>
      o(
        U,
        A('class', a(f(['relative isolate', 'overflow-hidden', 'h-[500px] rounded-lg']), !0), !1),
        a(
          e(B, {
            loading: 'lazy',
            layout: 'fullWidth',
            get src() {
              return H(n.thumbnail).auto('format').quality(80).width(600).url();
            },
            get alt() {
              return n.title;
            },
            get background() {
              return K(n.thumbnail);
            },
            class:
              '-z-10 absolute inset-0 size-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105',
          }),
        ),
        a(n.title),
        a(
          e(u, {
            get when() {
              return n.headline;
            },
            get children() {
              return o(G, c(), a(n.headline));
            },
          }),
        ),
        a(
          e(u, {
            get when() {
              return n.services.length;
            },
            get children() {
              return o(
                J,
                c(),
                a(
                  e(y, {
                    get each() {
                      return n.services;
                    },
                    children: (r) =>
                      o(
                        W,
                        c(),
                        a(
                          e(N, {
                            round: !0,
                            variant: 'secondary',
                            class: 'pointer-events-none',
                            get children() {
                              return r.title;
                            },
                          }),
                        ),
                      ),
                  }),
                ),
              );
            },
          }),
        ),
      ),
    !0,
  );
}
var X = [
    '<main',
    '><header class="py-16"><div class="container flex flex-col items-center justify-center gap-2 text-center"><h1 class="font-bold">',
    '</h1><!--$-->',
    '<!--/--></div></header><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--></main>',
  ],
  Y = ['<p', ' class="text-lg">', '</p>'],
  Z = [
    '<section',
    ' class="py-16"><div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">',
    '</div></section>',
  ],
  ee = ['<section', ' class="py-2"><div class="container flex justify-end">', '</div></section>'];
function Pe() {
  const [t, s] = L(),
    n = h(() => q()),
    l = h(async () => {
      let r = t.page ? Number(t.page) : 1;
      const i = await P(r, g),
        j = Math.ceil(i.total / g);
      r > i.total && (r = j);
      const { data: x, total: _ } = await P(r, g);
      return { data: x, total: _, currentPage: r };
    });
  function p(r) {
    s({ page: r }, { replace: !0 });
  }
  return o(
    X,
    c(),
    a(n()?.title) ?? 'Projetos',
    a(
      e(u, {
        get when() {
          return n()?.headline;
        },
        keyed: !0,
        children: (r) => o(Y, c(), a(r)),
      }),
    ),
    a(
      e(u, {
        get when() {
          return l()?.data;
        },
        keyed: !0,
        children: (r) =>
          o(
            Z,
            c(),
            a(
              e(y, {
                each: r,
                children: (i) =>
                  e(V, {
                    get title() {
                      return i.title;
                    },
                    get headline() {
                      return i.headline;
                    },
                    get thumbnail() {
                      return i.thumbnail;
                    },
                    get services() {
                      return i.services;
                    },
                    get slug() {
                      return i.slug;
                    },
                  }),
              }),
            ),
          ),
      }),
    ),
    a(
      e(u, {
        get when() {
          return l()?.total;
        },
        keyed: !0,
        children: (r) =>
          o(
            ee,
            c(),
            a(
              e(O, {
                count: r,
                defaultPage: 1,
                fixedItems: !0,
                onPageChange: p,
                get page() {
                  return Number(t.page) ?? 1;
                },
                itemComponent: (i) =>
                  e(Q, {
                    get page() {
                      return i.page;
                    },
                    get children() {
                      return i.page;
                    },
                  }),
                ellipsisComponent: () => e(T, {}),
                get children() {
                  return [e(k, {}), e(z, {}), e(E, {})];
                },
              }),
            ),
          ),
      }),
    ),
  );
}
export { Pe as default };
