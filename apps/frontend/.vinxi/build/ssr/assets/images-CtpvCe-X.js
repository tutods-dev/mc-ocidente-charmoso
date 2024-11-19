import G from '@sanity/image-url';
import { ssrElement as Z } from 'solid-js/web';
import { I as J } from './styles-2TqKWpP5.js';
const K = {
    'images.ctfassets.net': 'contentful',
    'cdn.builder.io': 'builder.io',
    'images.prismic.io': 'imgix',
    'www.datocms-assets.com': 'imgix',
    'cdn.sanity.io': 'imgix',
    'images.unsplash.com': 'imgix',
    'cdn.shopify.com': 'shopify',
    's7d1.scene7.com': 'scene7',
    'ip.keycdn.com': 'keycdn',
    'assets.caisy.io': 'bunny',
    'images.contentstack.io': 'contentstack',
    'ucarecdn.com': 'uploadcare',
  },
  Q = {
    'imgix.net': 'imgix',
    'files.wordpress.com': 'wordpress',
    'b-cdn.net': 'bunny',
    'storyblok.com': 'storyblok',
    'kc-usercontent.com': 'kontent.ai',
    'cloudinary.com': 'cloudinary',
    'kxcdn.com': 'keycdn',
    'imgeng.in': 'imageengine',
    'imagekit.io': 'imagekit',
    'cloudimg.io': 'cloudimage',
    'ucarecdn.com': 'uploadcare',
    'supabase.co': 'supabase',
  },
  Y = {
    '/cdn-cgi/image/': 'cloudflare',
    '/cdn-cgi/imagedelivery/': 'cloudflare_images',
    '/_next/image': 'nextjs',
    '/_next/static': 'nextjs',
    '/_vercel/image': 'vercel',
    '/is/image': 'scene7',
    '/_ipx/': 'ipx',
    '/_image': 'astro',
    '/.netlify/images': 'netlify',
    '/storage/v1/object/public/': 'supabase',
    '/storage/v1/render/image/public/': 'supabase',
  },
  $ = (r) => {
    if (!r) {
      return r;
    }
    const t = Number(r);
    return isNaN(t) ? r : Math.round(t);
  },
  c = (r, t, n, s, e) => {
    n ? (e && (n = $(n)), r.searchParams.set(t, n.toString())) : s && r.searchParams.delete(t);
  },
  p = (r, t, n) => {
    r.searchParams.has(t) || r.searchParams.set(t, n.toString());
  },
  x = (r, t) => {
    const n = Number(r.searchParams.get(t));
    return isNaN(n) ? void 0 : n;
  },
  W = (r) => {
    const { pathname: t, search: n } = r;
    return `${t}${n}`;
  },
  P = (r) => (r.hostname === 'n' ? W(r) : r.toString()),
  l = (r, t) => (typeof r == 'string' ? new URL(r, t ?? 'http://n/') : r),
  O = new Map(Object.entries(K)),
  tt = Object.entries(Q);
function rt(r) {
  return q(r) || et(r);
}
function q(r) {
  if (typeof r == 'string' && !r.startsWith('https://')) {
    return !1;
  }
  const { hostname: t } = l(r);
  if (O.has(t)) {
    return O.get(t);
  }
  for (const [n, s] of tt) {
    if (t.endsWith(`.${n}`)) {
      return s;
    }
  }
  return !1;
}
function et(r) {
  const { pathname: t } = l(r);
  for (const [n, s] of Object.entries(Y)) {
    if (t.startsWith(n)) {
      return s;
    }
  }
  return !1;
}
const nt = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    return (
      t && t > 4e3 && (n && (n = Math.round((n * 4e3) / t)), (t = 4e3)),
      n && n > 4e3 && (t && (t = Math.round((t * 4e3) / n)), (n = 4e3)),
      c(e, 'w', t, !0, !0),
      c(e, 'h', n, !0, !0),
      c(e, 'fm', s),
      p(e, 'fit', 'fill'),
      e
    );
  },
  st = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    return (
      c(e, 'width', t, !0, !0),
      c(e, 'height', n, !0, !0),
      c(e, 'format', s),
      t && n && (p(e, 'fit', 'cover'), p(e, 'sharp', 'true')),
      e
    );
  },
  at = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    if ((c(e, 'w', t, !0, !0), c(e, 'h', n, !0, !0), p(e, 'fit', 'min'), s)) {
      e.searchParams.set('fm', s);
      const a = e.searchParams.get('auto');
      a === 'format'
        ? e.searchParams.delete('auto')
        : a?.includes('format') &&
          e.searchParams.set(
            'auto',
            a
              .split(',')
              .filter((o) => o !== 'format')
              .join(','),
          );
    } else {
      e.searchParams.delete('fm'),
        e.searchParams.get('auto')?.includes('format') || e.searchParams.append('auto', 'format');
    }
    return e;
  },
  ot =
    /(.+?)(?:_(?:(pico|icon|thumb|small|compact|medium|large|grande|original|master)|(\d*)x(\d*)))?(?:_crop_([a-z]+))?(\.[a-zA-Z]+)(\.png|\.jpg|\.webp|\.avif)?$/,
  it = (r) => {
    const t = l(r),
      n = t.pathname.match(ot);
    if (!n) {
      throw new Error('Invalid Shopify URL');
    }
    const [, s, e, a, o, i, u, f] = n;
    t.pathname = `${s}${u}`;
    const m = a || t.searchParams.get('width'),
      d = o || t.searchParams.get('height');
    return (
      t.searchParams.delete('width'),
      t.searchParams.delete('height'),
      {
        base: t.toString(),
        width: Number(m) || void 0,
        height: Number(d) || void 0,
        format: f ? f.slice(1) : void 0,
        params: { crop: i, size: e },
        cdn: 'shopify',
      }
    );
  },
  ct = ({ base: r, width: t, height: n, format: s, params: e }) => {
    const a = l(r);
    return c(a, 'width', t, !0, !0), c(a, 'height', n, !0, !0), c(a, 'crop', e?.crop), c(a, 'format', s), a;
  },
  ut = ({ url: r, width: t, height: n }) => {
    const s = it(r);
    if (!s) {
      return;
    }
    const e = { ...s, width: t, height: n };
    return ct(e);
  },
  ft = ({ url: r, width: t, height: n }) => {
    const s = l(r);
    return c(s, 'w', t, !0, !0), c(s, 'h', n, !0, !0), p(s, 'crop', '1'), s;
  },
  lt = ({ url: r, width: t, height: n }) => {
    const s = l(r);
    return c(s, 'w', t, !0, !0), c(s, 'h', n, !0, !0), c(s, 'q', x(s, 'q'), !0), s;
  },
  mt =
    /https?:\/\/(?<host>[^/]+)\/(?<cloudName>[^/]+)\/(?<assetType>image|video|raw)\/(?<deliveryType>upload|fetch|private|authenticated|sprite|facebook|twitter|youtube|vimeo)\/?(?<signature>s--[a-zA-Z0-9]+--)?\/?(?<transformations>(?:[^_/]+_[^,/]+,?)*)?\/(?:(?<version>v\d+)\/)?(?<idAndFormat>[^\s]+)$/g,
  dt = (r) => (r ? Object.fromEntries(r.split(',').map((t) => t.split('_'))) : {}),
  F = ({
    host: r,
    cloudName: t,
    assetType: n,
    deliveryType: s,
    signature: e,
    transformations: a = {},
    version: o,
    id: i,
    format: u,
  }) => {
    u && (a.f = u);
    const f = Object.entries(a)
      .map(([d, h]) => `${d}_${h}`)
      .join(',');
    return `https://${[r, t, n, s, e, f, o, i].filter(Boolean).join('/')}`;
  },
  z = (r) => {
    const n = [...l(r).toString().matchAll(mt)];
    if (!n.length) {
      throw new Error('Invalid Cloudinary URL');
    }
    const s = n[0].groups || {},
      { transformations: e = '', idAndFormat: a, ...o } = s;
    delete s.idAndFormat;
    const i = a.lastIndexOf('.'),
      u = i < 0 ? a : a.slice(0, i),
      f = i < 0 ? void 0 : a.slice(i + 1),
      { w: m, h: d, f: h, ...b } = dt(e),
      g = h && h !== 'auto' ? h : f;
    return {
      base: F({ ...o, id: u, transformations: b }),
      width: Number(m) || void 0,
      height: Number(d) || void 0,
      format: g,
      cdn: 'cloudinary',
      params: { ...s, id: s.deliveryType === 'fetch' ? a : u, format: g, transformations: b },
    };
  },
  pt = ({ base: r, width: t, height: n, format: s, params: e }) => {
    const a = z(r.toString()),
      o = { transformations: {}, ...a.params, ...e, format: s || 'auto' };
    return (
      t && (o.transformations.w = $(t).toString()),
      n && (o.transformations.h = $(n).toString()),
      (o.transformations.c ||= 'lfill'),
      F(o)
    );
  },
  ht = ({ url: r, width: t, height: n, format: s = 'auto' }) => {
    const e = z(r);
    if (!e) {
      throw new Error('Invalid Cloudinary URL');
    }
    if (e.params?.assetType !== 'image') {
      throw new Error('Cloudinary transformer only supports images');
    }
    if (e.params?.signature) {
      throw new Error('Cloudinary transformer does not support signed URLs');
    }
    const a = { ...e, width: t, height: n, format: s };
    return pt(a);
  },
  gt = /https?:\/\/(?<host>[^/]+)\/cdn-cgi\/image\/(?<transformations>[^/]+)?\/(?<path>.*)$/g,
  bt = (r) => Object.fromEntries(r.split(',').map((t) => t.split('='))),
  A = ({ host: r, transformations: t = {}, path: n }) => {
    const s = Object.entries(t)
      .map(([a, o]) => `${a}=${o}`)
      .join(',');
    return `https://${[r, 'cdn-cgi', 'image', s, n].join('/')}`;
  },
  C = (r) => {
    const t = l(r),
      n = [...t.toString().matchAll(gt)];
    if (!n.length) {
      throw new Error('Invalid Cloudflare URL');
    }
    const s = n[0].groups || {},
      { transformations: e, ...a } = s,
      { width: o, height: i, f: u, ...f } = bt(e);
    return (
      A({ ...a, transformations: f }),
      {
        base: t.toString(),
        width: Number(o) || void 0,
        height: Number(i) || void 0,
        format: u,
        cdn: 'cloudflare',
        params: { ...s, transformations: f },
      }
    );
  },
  $t = ({ base: r, width: t, height: n, format: s, params: e }) => {
    const a = C(r.toString()),
      o = { transformations: {}, ...a.params, ...e };
    return (
      t && (o.transformations.width = t?.toString()),
      n && (o.transformations.height = n?.toString()),
      s && (o.transformations.f = s === 'jpg' ? 'jpeg' : s),
      (o.transformations.fit ||= 'cover'),
      new URL(A(o))
    );
  },
  yt = ({ url: r, width: t, height: n, format: s = 'auto' }) => {
    const e = C(r);
    if (!e) {
      throw new Error('Invalid Cloudflare URL');
    }
    const a = { ...e, width: t, height: n, format: s };
    return $t(a);
  },
  xt = ({ url: r, width: t, height: n }) => {
    const s = l(r);
    return c(s, 'width', t, !0, !0), t && n && p(s, 'aspect_ratio', `${t}:${n}`), s;
  },
  wt =
    /(?<id>\/f\/\d+\/\d+x\d+\/\w+\/[^/]+)\/?(?<modifiers>m\/?(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>-)?(?<width>\d+)x(?<flipy>-)?(?<height>\d+))?\/?(filters:(?<filters>[^/]+))?)?$/g,
  St =
    /^(?<modifiers>\/(?<crop>\d+x\d+:\d+x\d+)?\/?(?<resize>(?<flipx>-)?(?<width>\d+)x(?<flipy>-)?(?<height>\d+))?\/?(filters:(?<filters>[^/]+))?\/?)?(?<id>\/f\/.+)$/g,
  Pt = (r) =>
    r
      ? Object.fromEntries(
          r.split(':').map((t) => {
            if (!t) {
              return [];
            }
            const [n, s] = t.split('(');
            return [n, s.replace(')', '')];
          }),
        )
      : {},
  vt = (r) => {
    if (!r) {
      return;
    }
    const t = Object.entries(r).map(([n, s]) => `${n}(${s ?? ''})`);
    if (t.length !== 0) {
      return `filters:${t.join(':')}`;
    }
  },
  _t = (r) => {
    const t = l(r),
      n = t.hostname === 'img2.storyblok.com' ? St : wt,
      [s] = t.pathname.matchAll(n);
    if (!s || !s.groups) {
      throw new Error('Invalid Storyblok URL');
    }
    const { id: e, crop: a, width: o, height: i, filters: u, flipx: f, flipy: m } = s.groups,
      { format: d, ...h } = Pt(u);
    return (
      t.hostname === 'img2.storyblok.com' && (t.hostname = 'a.storyblok.com'),
      {
        base: t.origin + e,
        width: Number(o) || void 0,
        height: Number(i) || void 0,
        format: d,
        params: { crop: a, filters: h, flipx: f, flipy: m },
        cdn: 'storyblok',
      }
    );
  },
  Ut = ({ base: r, width: t = 0, height: n = 0, format: s, params: e = {} }) => {
    const { crop: a, filters: o, flipx: i = '', flipy: u = '' } = e,
      f = `${i}${t}x${u}${n}`;
    return new URL([r, 'm', a, f, vt(o), s].filter(Boolean).join('/'));
  },
  jt = ({ url: r, width: t, height: n, format: s }) => {
    const e = _t(r);
    if (e) {
      return (
        s &&
          (e.params || (e.params = { filters: {} }),
          e.params.filters || (e.params.filters = {}),
          (e.params.filters.format = s)),
        Ut({ ...e, width: t, height: n })
      );
    }
  },
  It = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    return c(e, 'w', t, !0, !0), c(e, 'h', n, !0, !0), c(e, 'fm', s, !0), t && n && p(e, 'fit', 'crop'), e;
  },
  R = (r) => {
    const n = l(r).searchParams.get('url');
    if (!n || !n.startsWith('http')) {
      return !1;
    }
    const s = q(n);
    return s ? { cdn: s, url: n } : !1;
  },
  Ot = ({ base: r, width: t, params: { quality: n = 75, root: s = '_vercel' } = {} }) => {
    const e = new URL('http://n');
    return (
      (e.pathname = `/${s}/image`), e.searchParams.set('url', r.toString()), c(e, 'w', t, !1, !0), p(e, 'q', n), W(e)
    );
  },
  T = ({ url: r, width: t, cdn: n }) => {
    const s = l(r),
      e = s.pathname.startsWith('/_next/image') || s.pathname.startsWith('/_vercel/image'),
      a = e ? s.searchParams.get('url') : r.toString();
    if (a) {
      return (
        c(s, 'w', t, !0, !0),
        e ? P(s) : Ot({ base: a, width: t, params: { root: n === 'nextjs' ? '_next' : '_vercel' } })
      );
    }
  },
  Rt = (r) => T({ ...r, cdn: 'nextjs' }),
  kt = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    return (
      c(e, 'wid', t, !0, !0),
      c(e, 'hei', n, !0, !0),
      c(e, 'fmt', s, !0),
      c(e, 'qlt', x(e, 'qlt'), !0),
      c(e, 'scl', x(e, 'scl'), !0),
      p(e, 'fit', 'crop'),
      !t && !n && p(e, 'scl', 1),
      e
    );
  },
  Et = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    return (
      c(e, 'width', t, !0, !0),
      c(e, 'height', n, !0, !0),
      c(e, 'format', s, !0),
      c(e, 'quality', x(e, 'quality'), !0),
      p(e, 'enlarge', 0),
      e
    );
  },
  Nt = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    return (
      c(e, 'width', t, !0, !0), c(e, 'height', n, !0, !0), c(e, 'format', s), c(e, 'quality', x(e, 'quality'), !0), e
    );
  },
  S = {
    width: 'w',
    height: 'h',
    autoWidthWithFallback: 'w_auto',
    auto_width_fallback: 'w_auto',
    scaleToScreenWidth: 'pc',
    scale_to_screen_width: 'pc',
    crop: 'cr',
    outputFormat: 'f',
    format: 'f',
    fit: 'm',
    fitMethod: 'm',
    compression: 'cmpr',
    sharpness: 's',
    rotate: 'r',
    inline: 'in',
    keepMeta: 'meta',
    keep_meta: 'meta',
    noOptimization: 'pass',
    no_optimization: 'pass',
    force_download: 'dl',
    max_device_pixel_ratio: 'maxdpr',
    maxDevicePixelRatio: 'maxdpr',
  };
function Lt(r) {
  return Object.keys(S).find((s) => S[s] === r) || '';
}
function Wt(r) {
  let t = r.toString(),
    n = [];
  if (t) {
    const s = t.split('imgeng=');
    s.length > 1 && (n = s[1].split('/'));
  }
  return n;
}
function qt(r) {
  let t = r.toString(),
    n = '';
  if (t) {
    const s = t.split('imgeng=');
    s.length > 1 ? (n = s[0].slice(0, -1)) : (n = t);
  }
  return n;
}
const Ft = ({ url: r, width: t, height: n, format: s }) => {
  const e = l(r),
    a = qt(e);
  let o = {};
  const i = e.toString() === a ? [] : Wt(e);
  i.length && (o = Tt(i)),
    t && (o.width = t),
    n && (o.height = n),
    s && (o.format = s),
    o.hasOwnProperty('fit') || (o = { ...o, fit: 'cropbox' });
  const u = zt(o),
    f = At(u),
    m = f === '' ? '' : a.includes('?') ? '&' : '?';
  return `${a}${m}${f}`;
};
function zt(r) {
  return Object.entries(r).reduce((t, [n, s]) => t + Ct(n, s), '');
}
function At(r) {
  return r && r !== '' ? `imgeng=${r}` : '';
}
function Ct(r, t) {
  const n = S[r];
  return n && (t || t === 0) ? `/${n}_${t}` : '';
}
function Tt(r) {
  const t = {};
  return (
    r.forEach((n) => {
      const s = n.split('_');
      if (s.length > 1) {
        const e = s[0],
          a = s[1],
          o = Lt(e);
        o && (t[o] = a);
      }
    }),
    t
  );
}
const Mt = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r);
    return (
      c(e, 'width', t, !0, !0),
      c(e, 'height', n, !0, !0),
      c(e, 'format', s),
      e.searchParams.has('format') || p(e, 'auto', 'webp'),
      t && n && p(e, 'fit', 'crop'),
      e
    );
  },
  Dt =
    /https?:\/\/(?<host>[^/]+)\/cdn-cgi\/imagedelivery\/(?<accountHash>[^/]+)\/(?<imageId>[^/]+)\/*(?<transformations>[^/]+)*$/g,
  Bt = (r) => Object.fromEntries(r?.split(',')?.map((t) => t.split('=')) ?? []),
  Ht = ({ host: r, accountHash: t, transformations: n = {}, imageId: s }) => {
    const e = Object.entries(n)
      .map(([o, i]) => `${o}=${i}`)
      .join(',');
    return `https://${[r, 'cdn-cgi', 'imagedelivery', t, s, e].join('/')}`;
  },
  M = (r) => {
    const t = l(r),
      n = [...t.toString().matchAll(Dt)];
    if (!n.length) {
      throw new Error('Invalid Cloudflare Images URL');
    }
    const s = n[0].groups || {},
      { transformations: e, ...a } = s,
      { w: o, h: i, f: u, ...f } = Bt(e);
    return {
      base: t.toString(),
      width: Number(o) || void 0,
      height: Number(i) || void 0,
      format: u,
      cdn: 'cloudflare_images',
      params: { ...a, transformations: f },
    };
  },
  Vt = ({ base: r, width: t, height: n, format: s, params: e }) => {
    const a = M(r.toString()),
      o = { transformations: {}, ...a.params, ...e };
    return (
      t && (o.transformations.w = t?.toString()),
      n && (o.transformations.h = n?.toString()),
      s && (o.transformations.f = s),
      (o.transformations.fit ||= 'cover'),
      new URL(Ht(o))
    );
  },
  Xt = ({ url: r, width: t, height: n, format: s = 'auto' }) => {
    const e = M(r);
    if (!e) {
      throw new Error('Invalid Cloudflare Images URL');
    }
    const a = { ...e, width: t, height: n, format: s };
    return Vt(a);
  },
  Zt = (r) => {
    const t = l(r),
      [n, ...s] = t.pathname.split('/').slice(1),
      e = Object.fromEntries(
        n.split(',').map((a) => {
          const [o, i] = a.split('_');
          return [o, i];
        }),
      );
    if (e.s) {
      const [a, o] = e.s.split('x');
      (e.w ||= a), (e.h ||= o);
    }
    return {
      base: s.join('/'),
      width: Number(e.w) || void 0,
      height: Number(e.h) || void 0,
      quality: Number(e.q) || void 0,
      format: e.f || 'auto',
      params: e,
      cdn: 'ipx',
    };
  },
  k = ({ base: r, width: t, height: n, format: s, params: e }) => {
    const a = e?.modifiers ?? {};
    t && n ? (a.s = `${t}x${n}`) : t ? (a.w = `${t}`) : n && (a.h = `${n}`), s && (a.f = s);
    const o = e?.base.endsWith('/') ? e?.base : `${e?.base}/`,
      i = Object.entries(a)
        .map(([m, d]) => `${m}_${d}`)
        .join(','),
      u = r.toString(),
      f = u.startsWith('/') ? u.slice(1) : u;
    return `${o}${i}/${f}`;
  },
  Gt = (r) => {
    const t = String(r.url),
      n = l(t),
      s = n.pathname.startsWith('/_ipx') && n.hostname !== 'n' ? `${n.origin}/_ipx` : '/_ipx',
      e = r.cdnOptions?.ipx?.base ?? s;
    if (e && e !== '/' && t.startsWith(e)) {
      const o = Zt(t.replace(e, ''));
      return k({ ...o, ...r, params: { ...r.cdnOptions?.ipx, base: e } });
    }
    return k({ ...r, base: t, params: { ...r.cdnOptions?.ipx, base: e } });
  },
  Jt = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r),
      a = P(new URL(e.pathname, e.origin)),
      o = { searchParams: new URLSearchParams() };
    return (
      c(o, 'href', a, !0, !0),
      c(o, 'w', t, !0, !0),
      c(o, 'h', n, !0, !0),
      c(o, 'f', s),
      `/_image?${o.searchParams.toString()}`
    );
  },
  Kt = new Set(['w', 'h', 'q', 'fm', 'url', 'width', 'height', 'quality']),
  Qt = (r) => {
    const t = l(r),
      n = Number(t.searchParams.get('w') ?? t.searchParams.get('width')) ?? void 0,
      s = Number(t.searchParams.get('h') ?? t.searchParams.get('height')) ?? void 0,
      e = Number(t.searchParams.get('q') ?? t.searchParams.get('quality')) || void 0,
      a = t.searchParams.get('fm') || void 0,
      o = t.searchParams.get('url') || '',
      i = { quality: e };
    return (
      t.searchParams.forEach((u, f) => {
        Kt.has(f) || (i[f] = u);
      }),
      (t.search = ''),
      { base: o, width: n, height: s, format: a, params: i, cdn: 'netlify' }
    );
  },
  E = ({ base: r, width: t, height: n, format: s, params: { site: e, quality: a, ...o } = {} }) => {
    const i = l('/.netlify/images', e);
    return (
      Object.entries(o).forEach(([u, f]) => c(i, u, f)),
      c(i, 'q', a, !0, !0),
      c(i, 'w', t, !0, !0),
      c(i, 'h', n, !0, !0),
      c(i, 'fm', s),
      p(i, 'fit', 'cover'),
      i.searchParams.set('url', r.toString()),
      P(i)
    );
  },
  Yt = (r) => {
    const t = l(r.url);
    if (t.pathname.startsWith('/.netlify/images')) {
      const { params: n, base: s, format: e } = Qt(t);
      return E({ base: s, format: e, ...r, params: { ...n, site: t.hostname === 'n' ? void 0 : t.origin } });
    }
    return E({ ...r, base: r.url, params: { site: r.cdnOptions?.netlify?.site } });
  },
  tr = (r) =>
    (r.searchParams.get('tr') || '').split(',').reduce((n, s) => {
      const [e, a] = s.split('-');
      return (n[e] = a), n;
    }, {}),
  rr = ({ url: r, width: t, height: n, format: s }) => {
    const e = l(r),
      a = tr(e);
    (a.w = t && Math.round(t)), (a.h = n && Math.round(n)), a.f || (a.f = 'auto'), s && (a.f = s);
    const o = Object.keys(a)
      .map((i) => {
        const u = a[i];
        if (u) {
          return `${i}-${u}`;
        }
      })
      .filter((i) => i)
      .join(',');
    return e.searchParams.set('tr', o), e;
  },
  er = /^https?:\/\/(?<host>[^/]+)\/(?<uuid>[^/]+)/g;
function D(r) {
  const t = new URL(r),
    n = t.pathname + t.search + t.hash,
    s = n.lastIndexOf('http'),
    e = n.lastIndexOf('/');
  let a = '';
  return s >= 0 ? (a = n.slice(s)) : e >= 0 && (a = n.slice(e + 1)), a;
}
function nr(r) {
  return r.startsWith('http');
}
function sr(r) {
  const t = new URL(r);
  return { pathname: t.origin + t.pathname || '', search: t.search || '', hash: t.hash || '' };
}
function ar(r) {
  const t = new URL(r),
    n = D(r),
    s = nr(n) ? sr(n).pathname : n;
  return (t.pathname = t.pathname.replace(s, '')), (t.search = ''), (t.hash = ''), t.toString();
}
const or = (r) => {
  if (typeof r != 'string' || !r) {
    return '';
  }
  let t = r.trim();
  return (
    t.startsWith('-/') ? (t = t.slice(2)) : t.startsWith('/') && (t = t.slice(1)),
    t.endsWith('/') && (t = t.slice(0, t.length - 1)),
    t
  );
};
function ir(r) {
  const t = ar(r),
    n = new URL(t),
    s = n.pathname.indexOf('/-/');
  return s === -1
    ? []
    : n.pathname
        .substring(s)
        .split('/-/')
        .filter(Boolean)
        .map((a) => or(a));
}
const cr = (r) =>
    r.length
      ? r.reduce((t, n) => {
          const [s, e] = n.split('/');
          return { ...t, [s]: e };
        }, {})
      : {},
  B = ({ host: r, uuid: t, operations: n = {}, filename: s }) => {
    const e = Object.entries(n)
      .map(([o, i]) => `${o}/${i}`)
      .join('/-/');
    return `https://${[r, t, e ? `-/${e}` : '', s].join('/')}`;
  },
  H = (r) => {
    const t = l(r),
      n = [...t.toString().matchAll(er)];
    if (!n.length) {
      throw new Error('Invalid Uploadcare URL');
    }
    const s = n[0].groups || {},
      { ...e } = s,
      a = D(t.toString()),
      { format: o, ...i } = cr(ir(t.toString())),
      u = o && o !== 'auto' ? o : 'auto';
    return {
      base: B({ ...e, filename: a || void 0, operations: { ...i, format: u } }),
      cdn: 'uploadcare',
      params: { ...s, filename: a || void 0, operations: { ...i, format: u } },
    };
  },
  ur = ({ base: r, width: t, height: n, params: s }) => {
    const e = r.toString(),
      a = H(e.endsWith('/') ? e : `${e}/`),
      o = { operations: {}, ...a.params, ...s };
    return (
      t && n
        ? (o.operations = { ...o.operations, resize: `${t}x${n}` })
        : (t && (o.operations = { ...o.operations, resize: `${t}x` }),
          n && (o.operations = { ...o.operations, resize: `x${n}` })),
      B(o)
    );
  },
  fr = ({ url: r, width: t, height: n }) => {
    const s = H(r);
    if (!s) {
      throw new Error('Invalid Uploadcare URL');
    }
    const e = { ...s, width: t, height: n };
    return ur(e);
  },
  lr = ['origin'],
  V = '/storage/v1/object/public/',
  v = '/storage/v1/render/image/public/',
  mr = (r) => r.pathname.startsWith(v),
  X = (r) => {
    const t = l(r);
    if (!mr(t)) {
      return { cdn: 'supabase', base: t.origin + t.pathname };
    }
    const s = t.pathname.replace(v, ''),
      e = t.searchParams.has('quality') ? Number(t.searchParams.get('quality')) : void 0,
      a = t.searchParams.has('width') ? Number(t.searchParams.get('width')) : void 0,
      o = t.searchParams.has('height') ? Number(t.searchParams.get('height')) : void 0,
      i = t.searchParams.has('format') ? t.searchParams.get('format') : void 0,
      u = t.searchParams.has('resize') ? t.searchParams.get('resize') : void 0;
    return {
      cdn: 'supabase',
      base: t.origin + V + s,
      width: a,
      height: o,
      format: i,
      params: { quality: e, resize: u },
    };
  },
  dr = ({ base: r, width: t, height: n, format: s, params: e }) => {
    const a = X(r.toString());
    (r = a.base), (t = t || a.width), (n = n || a.height), (s = s || a.format), (e = { ...a.params, ...e });
    const o = new URLSearchParams();
    return (
      t && o.set('width', $(t).toString()),
      n && o.set('height', $(n).toString()),
      s && lr.includes(s) && o.set('format', s),
      e?.quality && o.set('quality', $(e.quality).toString()),
      e?.resize && o.set('resize', e.resize),
      o.toString() === '' ? r : a.base.replace(V, v) + '?' + o.toString()
    );
  },
  pr = ({ url: r, width: t, height: n, format: s, cdnOptions: e }) => {
    const a = X(r);
    return dr({
      base: a.base,
      width: t || a.width,
      height: n || a.height,
      format: s || a.format,
      params: e?.supabase || a.params,
    });
  },
  N = { vercel: R, nextjs: R };
function hr(r, t) {
  if (!(t in N)) {
    return !1;
  }
  const n = N[t];
  return n ? n(r) : !1;
}
function _(r, t) {
  const n = rt(r) || t;
  if (!n) {
    return !1;
  }
  const s = hr(r, n);
  return s || { cdn: n, url: r };
}
const U = (r) =>
  ({
    imgix: at,
    contentful: nt,
    'builder.io': st,
    shopify: ut,
    wordpress: ft,
    cloudimage: lt,
    cloudinary: ht,
    bunny: xt,
    storyblok: jt,
    cloudflare: yt,
    vercel: T,
    nextjs: Rt,
    scene7: kt,
    'kontent.ai': It,
    keycdn: Et,
    directus: Nt,
    imageengine: Ft,
    contentstack: Mt,
    cloudflare_images: Xt,
    ipx: Gt,
    astro: Jt,
    netlify: Yt,
    imagekit: rr,
    uploadcare: fr,
    supabase: pr,
  })[r];
var gr = (r, t) => {
    if (!(!r || !t)) {
      switch (t) {
        case 'constrained':
          return `(min-width: ${r}px) ${r}px, 100vw`;
        case 'fixed':
          return `${r}px`;
        case 'fullWidth':
          return '100vw';
        default:
          return;
      }
    }
  },
  y = (r) => (r || r === 0 ? `${r}px` : void 0),
  br = ({ width: r, height: t, aspectRatio: n, layout: s, objectFit: e = 'cover', background: a }) => {
    const o = [['object-fit', e]];
    return (
      a?.startsWith('https:') || a?.startsWith('http:') || a?.startsWith('data:')
        ? (o.push(['background-image', `url(${a})`]),
          o.push(['background-size', 'cover']),
          o.push(['background-repeat', 'no-repeat']))
        : o.push(['background', a]),
      s === 'fixed' && (o.push(['width', y(r)]), o.push(['height', y(t)])),
      s === 'constrained' &&
        (o.push(['max-width', y(r)]),
        o.push(['max-height', y(t)]),
        o.push(['aspect-ratio', n ? `${n}` : void 0]),
        o.push(['width', '100%'])),
      s === 'fullWidth' &&
        (o.push(['width', '100%']), o.push(['aspect-ratio', n ? `${n}` : void 0]), o.push(['height', y(t)])),
      Object.fromEntries(o.filter(([, i]) => i))
    );
  },
  $r = [6016, 5120, 4480, 3840, 3200, 2560, 2048, 1920, 1668, 1280, 1080, 960, 828, 750, 640],
  L = 24,
  yr = ({ width: r, layout: t, resolutions: n = $r }) => {
    if (t === 'fullWidth') {
      return n;
    }
    if (!r) {
      return [];
    }
    const s = r * 2;
    return t === 'fixed' ? [r, s] : t === 'constrained' ? [r, s, ...n.filter((e) => e < s)] : [];
  },
  xr = ({
    src: r,
    width: t,
    layout: n = 'constrained',
    height: s,
    aspectRatio: e,
    breakpoints: a,
    cdn: o,
    transformer: i,
    format: u,
  }) => {
    const f = _(r, o);
    return (
      f && !i && (i = U(f.cdn)),
      i
        ? ((a ||= yr({ width: t, layout: n })),
          a
            .sort((m, d) => m - d)
            .map((m) => {
              let d;
              return s && e && (d = Math.round(m / e)), { url: f ? f.url : r, width: m, height: d, format: u };
            }))
        : []
    );
  },
  wr = (r) => {
    let { src: t, cdn: n, transformer: s } = r;
    const e = _(t, n);
    return (
      e && !s && (s = U(e.cdn)),
      s
        ? xr({ ...r, transformer: s })
            .map((a) => `${s(a)?.toString()} ${a.width}w`)
            .join(`,
`)
        : ''
    );
  };
function Sr({ width: r, height: t, priority: n, layout: s = 'constrained', aspectRatio: e, ...a }) {
  return (
    (r = (r && Number(r)) || void 0),
    (t = (t && Number(t)) || void 0),
    n ? ((a.loading ||= 'eager'), (a.fetchpriority ||= 'high')) : ((a.loading ||= 'lazy'), (a.decoding ||= 'async')),
    a.alt === '' && (a.role ||= 'presentation'),
    e ? (r ? t || (t = Math.round(r / e)) : t && (r = Math.round(t * e))) : r && t && (e = r / t),
    { width: r, height: t, aspectRatio: e, layout: s, ...a }
  );
}
function Pr(r) {
  let {
    src: t,
    cdn: n,
    transformer: s,
    background: e,
    layout: a,
    objectFit: o,
    breakpoints: i,
    width: u,
    height: f,
    aspectRatio: m,
    unstyled: d,
    ...h
  } = Sr(r);
  const b = t ? _(t, n) : void 0;
  let g = t;
  if ((b && ((g = b.url), (s ||= U(b.cdn))), s && e === 'auto')) {
    const w = m ? Math.round(L / m) : void 0,
      I = s({ url: g, width: L, height: w });
    I && (e = I.toString());
  }
  const j = { width: u, height: f, aspectRatio: m, layout: a, objectFit: o, background: e };
  if (((h.sizes ||= gr(u, a)), d || (h.style = { ...br(j), ...h.style }), s)) {
    h.srcset = wr({ src: g, width: u, height: f, aspectRatio: m, layout: a, breakpoints: i, transformer: s, cdn: n });
    const w = s({ url: g, width: u, height: f });
    w && (g = w), (a === 'fullWidth' || a === 'constrained') && ((u = void 0), (f = void 0));
  }
  return { ...h, src: g?.toString(), width: u, height: f };
}
function Ir(r) {
  return Z('img', Pr(r), void 0, !0);
}
function vr(r) {
  return G(J).image(r);
}
function Or(r) {
  return r.asset.metadata?.lqip
    ? r.asset.metadata?.lqip
    : vr(r).size(25, 25).quality(60).blur(60).fit('max').auto('format').url();
}
export { Ir as I, Or as g, vr as u };
