import { ssr, ssrHydrationKey, escape, createComponent, ssrElement, mergeProps as mergeProps$1, ssrAttribute } from 'solid-js/web';
import { Show, For, mergeProps, splitProps } from 'solid-js';
import { ac as de, p as Ee, ad as ze, q as bc, ae as kc, af as Ac, ag as _c, ah as Mc, ai as $c, aj as zc, ak as Oe, a1 as m, al as Lc, am as Cc } from '../runtime.mjs';
import { I as Ir, v as vr, O as Or } from './images-CtpvCe-X.mjs';
import 'node:http';
import 'node:https';
import 'node:zlib';
import 'node:stream';
import 'node:buffer';
import 'node:util';
import 'node:url';
import 'node:net';
import 'node:fs';
import 'node:path';
import 'node:async_hooks';
import 'vinxi/lib/invariant';
import 'vinxi/lib/path';
import 'solid-js/web/storage';
import '@sanity/client';
import 'nodemailer';
import 'class-variance-authority';
import 'clsx';
import 'tailwind-merge';
import '@solid-primitives/scroll';
import 'tailwind-variants';
import '@solid-primitives/resize-observer';
import '@sanity/image-url';

const v = `
  count(*[_type == 'project'])
`, M = `
  count(*[_type == 'project' && $serviceSlug in services[]->slug.current])
`, $ = `
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
`, R = `
  {
    "total": ${v},
    "data": ${$}
  }
`, g = 12;
function b(t = 1, s = g) {
  return { start: (t - 1) * s, end: t * s };
}
de(async (t) => {
  try {
    let s = 0;
    return t ? s = await Oe.fetch(M, { serviceSlug: t }) : s = await Oe.fetch(v), s;
  } catch {
    return 0;
  }
}, "total-projects");
de(Ee(D, "c_10961", "$$function0"), "projects");
const P = de(async (t = 1, s = g) => {
  try {
    const { start: n, end: l } = b(t, s);
    return Oe.fetch(R, { start: n, end: l });
  } catch {
    return { total: 0, data: [] };
  }
}, "paginated-projects");
async function D(t = 1) {
  try {
    return Oe.fetch($, { ...b(t) });
  } catch {
    return [];
  }
}
var G = ["<p", ' class="mt-0.5 mb-4 line-clamp-3 text-md">', "</p>"], J = ["<ul", ' class="flex flex-wrap items-center gap-2">', "</ul>"], U = ["<article", "><!--$-->", '<!--/--><section class="flex size-full flex-col justify-end bg-gradient-to-b from-50% from-transparent to-foreground px-6 py-8 text-gray-50 transition-colors duration-300 ease-in-out hover:from-0% group-hover:to-foreground"><h3 class="font-semibold text-white">', "</h3><!--$-->", "<!--/--><!--$-->", "<!--/--></section></article>"], W = ["<li", ">", "</li>"];
function V(t) {
  const s = mergeProps(t, { class: "" }), [n, l, p] = splitProps(s, ["thumbnail", "slug", "headline", "services", "title"], ["class"]);
  return ssrElement("a", mergeProps$1(p, { get href() {
    return `/projetos/${n.slug}`;
  }, get class() {
    return m(["group shadow transition duration-300 ease-in-out", l.class]);
  } }), () => ssr(U, ssrAttribute("class", escape(m(["relative isolate", "overflow-hidden", "h-[500px] rounded-lg"]), true), false), escape(createComponent(Ir, { loading: "lazy", layout: "fullWidth", get src() {
    return vr(n.thumbnail).auto("format").quality(80).width(600).url();
  }, get alt() {
    return n.title;
  }, get background() {
    return Or(n.thumbnail);
  }, class: "-z-10 absolute inset-0 size-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105" })), escape(n.title), escape(createComponent(Show, { get when() {
    return n.headline;
  }, get children() {
    return ssr(G, ssrHydrationKey(), escape(n.headline));
  } })), escape(createComponent(Show, { get when() {
    return n.services.length;
  }, get children() {
    return ssr(J, ssrHydrationKey(), escape(createComponent(For, { get each() {
      return n.services;
    }, children: (r) => ssr(W, ssrHydrationKey(), escape(createComponent(Lc, { round: true, variant: "secondary", class: "pointer-events-none", get children() {
      return r.title;
    } }))) })));
  } }))), true);
}
var X = ["<main", '><header class="py-16"><div class="container flex flex-col items-center justify-center gap-2 text-center"><h1 class="font-bold">', "</h1><!--$-->", "<!--/--></div></header><!--$-->", "<!--/--><!--$-->", "<!--/--></main>"], Y = ["<p", ' class="text-lg">', "</p>"], Z = ["<section", ' class="py-16"><div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">', "</div></section>"], ee = ["<section", ' class="py-2"><div class="container flex justify-end">', "</div></section>"];
function Pe() {
  var _a, _b;
  const [t, s] = ze(), n = bc(() => Cc()), l = bc(async () => {
    let r = t.page ? Number(t.page) : 1;
    const i = await P(r, g), j = Math.ceil(i.total / g);
    r > i.total && (r = j);
    const { data: x, total: _ } = await P(r, g);
    return { data: x, total: _, currentPage: r };
  });
  function p(r) {
    s({ page: r }, { replace: true });
  }
  return ssr(X, ssrHydrationKey(), (_b = escape((_a = n()) == null ? void 0 : _a.title)) != null ? _b : "Projetos", escape(createComponent(Show, { get when() {
    var _a2;
    return (_a2 = n()) == null ? void 0 : _a2.headline;
  }, keyed: true, children: (r) => ssr(Y, ssrHydrationKey(), escape(r)) })), escape(createComponent(Show, { get when() {
    var _a2;
    return (_a2 = l()) == null ? void 0 : _a2.data;
  }, keyed: true, children: (r) => ssr(Z, ssrHydrationKey(), escape(createComponent(For, { each: r, children: (i) => createComponent(V, { get title() {
    return i.title;
  }, get headline() {
    return i.headline;
  }, get thumbnail() {
    return i.thumbnail;
  }, get services() {
    return i.services;
  }, get slug() {
    return i.slug;
  } }) }))) })), escape(createComponent(Show, { get when() {
    var _a2;
    return (_a2 = l()) == null ? void 0 : _a2.total;
  }, keyed: true, children: (r) => ssr(ee, ssrHydrationKey(), escape(createComponent(kc, { count: r, defaultPage: 1, fixedItems: true, onPageChange: p, get page() {
    var _a2;
    return (_a2 = Number(t.page)) != null ? _a2 : 1;
  }, itemComponent: (i) => createComponent(Ac, { get page() {
    return i.page;
  }, get children() {
    return i.page;
  } }), ellipsisComponent: () => createComponent(_c, {}), get children() {
    return [createComponent(Mc, {}), createComponent($c, {}), createComponent(zc, {})];
  } }))) })));
}

export { Pe as default };
//# sourceMappingURL=index22.mjs.map
