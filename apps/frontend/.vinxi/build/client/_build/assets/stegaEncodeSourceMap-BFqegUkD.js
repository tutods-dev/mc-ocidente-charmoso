import { C as I } from './images-aBJc1Pbn.js';
import './web-Cw_Dym33.js';
import './preload-helper-DYd7aIoe.js';
const P = /_key\s*==\s*['"](.*)['"]/;
function C(e) {
  return typeof e == 'string' ? P.test(e.trim()) : typeof e == 'object' && '_key' in e;
}
function U(e) {
  if (!Array.isArray(e)) {
    throw new Error('Path is not an array');
  }
  return e.reduce((t, r, n) => {
    const i = typeof r;
    if (i === 'number') {
      return `${t}[${r}]`;
    }
    if (i === 'string') {
      return `${t}${n === 0 ? '' : '.'}${r}`;
    }
    if (C(r) && r._key) {
      return `${t}[_key=="${r._key}"]`;
    }
    if (Array.isArray(r)) {
      const [a, o] = r;
      return `${t}[${a}:${o}]`;
    }
    throw new Error(`Unsupported path segment \`${JSON.stringify(r)}\``);
  }, '');
}
const w = { '\f': '\\f', '\n': '\\n', '\r': '\\r', '	': '\\t', "'": "\\'", '\\': '\\\\' },
  m = {
    '\\f': '\f',
    '\\n': `
`,
    '\\r': '\r',
    '\\t': '	',
    "\\'": "'",
    '\\\\': '\\',
  };
function L(e) {
  return `$${e.map((t) => (typeof t == 'string' ? `['${t.replace(/[\f\n\r\t'\\]/g, (r) => w[r])}']` : typeof t == 'number' ? `[${t}]` : t._key !== '' ? `[?(@._key=='${t._key.replace(/['\\]/g, (r) => w[r])}')]` : `[${t._index}]`)).join('')}`;
}
function b(e) {
  const t = [],
    r = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
  let n;
  while ((n = r.exec(e)) !== null) {
    if (n[1] !== void 0) {
      const i = n[1].replace(/\\(\\|f|n|r|t|')/g, (a) => m[a]);
      t.push(i);
      continue;
    }
    if (n[2] !== void 0) {
      t.push(Number.parseInt(n[2], 10));
      continue;
    }
    if (n[3] !== void 0) {
      const i = n[3].replace(/\\(\\')/g, (a) => m[a]);
      t.push({ _key: i, _index: -1 });
      continue;
    }
  }
  return t;
}
function A(e) {
  return e.map((t) => {
    if (typeof t == 'string' || typeof t == 'number') {
      return t;
    }
    if (t._key !== '') {
      return { _key: t._key };
    }
    if (t._index !== -1) {
      return t._index;
    }
    throw new Error(`invalid segment:${JSON.stringify(t)}`);
  });
}
function O(e) {
  return e.map((t) => {
    if (typeof t == 'string' || typeof t == 'number') {
      return t;
    }
    if (t._index !== -1) {
      return t._index;
    }
    throw new Error(`invalid segment:${JSON.stringify(t)}`);
  });
}
function W(e, t) {
  if (!t?.mappings) {
    return;
  }
  const r = L(O(e));
  if (t.mappings[r] !== void 0) {
    return { mapping: t.mappings[r], matchedPath: r, pathSuffix: '' };
  }
  const n = Object.entries(t.mappings)
    .filter(([d]) => r.startsWith(d))
    .sort(([d], [s]) => s.length - d.length);
  if (n.length == 0) {
    return;
  }
  const [i, a] = n[0],
    o = r.substring(i.length);
  return { mapping: a, matchedPath: i, pathSuffix: o };
}
function D(e) {
  return e !== null && Array.isArray(e);
}
function E(e) {
  return typeof e == 'object' && e !== null;
}
function k(e, t, r = []) {
  return D(e)
    ? e.map((n, i) => {
        if (E(n)) {
          const a = n._key;
          if (typeof a == 'string') {
            return k(n, t, r.concat({ _key: a, _index: i }));
          }
        }
        return k(n, t, r.concat(i));
      })
    : E(e)
      ? Object.fromEntries(Object.entries(e).map(([n, i]) => [n, k(i, t, r.concat(n))]))
      : t(e, r);
}
function N(e, t, r) {
  return k(e, (n, i) => {
    if (typeof n != 'string') {
      return n;
    }
    const a = W(i, t);
    if (!a) {
      return n;
    }
    const { mapping: o, matchedPath: d } = a;
    if (o.type !== 'value' || o.source.type !== 'documentValue') {
      return n;
    }
    const s = t.documents[o.source.document],
      c = t.paths[o.source.path],
      f = b(d),
      p = b(c).concat(i.slice(f.length));
    return r({ sourcePath: p, sourceDocument: s, resultPath: i, value: n });
  });
}
const $ = 'drafts.';
function M(e) {
  return e.startsWith($) ? e.slice($.length) : e;
}
function q(e) {
  const {
    baseUrl: t,
    workspace: r = 'default',
    tool: n = 'default',
    id: i,
    type: a,
    path: o,
    projectId: d,
    dataset: s,
  } = e;
  if (!t) {
    throw new Error('baseUrl is required');
  }
  if (!o) {
    throw new Error('path is required');
  }
  if (!i) {
    throw new Error('id is required');
  }
  if (t !== '/' && t.endsWith('/')) {
    throw new Error('baseUrl must not end with a slash');
  }
  const c = r === 'default' ? void 0 : r,
    f = n === 'default' ? void 0 : n,
    p = M(i),
    l = Array.isArray(o) ? U(A(o)) : o,
    u = new URLSearchParams({ baseUrl: t, id: p, type: a, path: l });
  c && u.set('workspace', c),
    f && u.set('tool', f),
    d && u.set('projectId', d),
    s && u.set('dataset', s),
    i.startsWith($) && u.set('isDraft', '');
  const h = [t === '/' ? '' : t];
  c && h.push(c);
  const y = ['mode=presentation', `id=${p}`, `type=${a}`, `path=${encodeURIComponent(l)}`];
  return f && y.push(`tool=${f}`), h.push('intent', 'edit', `${y.join(';')}?${u}`), h.join('/');
}
function J(e) {
  let t = typeof e == 'string' ? e : e.baseUrl;
  return t !== '/' && (t = t.replace(/\/$/, '')), typeof e == 'string' ? { baseUrl: t } : { ...e, baseUrl: t };
}
const _ = ({ sourcePath: e, resultPath: t, value: r }) => {
    if (G(r) || K(r)) {
      return !1;
    }
    const n = e.at(-1);
    return !(
      (e.at(-2) === 'slug' && n === 'current') ||
      (typeof n == 'string' && n.startsWith('_')) ||
      (typeof n == 'number' && e.at(-2) === 'marks') ||
      (n === 'href' && typeof e.at(-2) == 'number' && e.at(-3) === 'markDefs') ||
      n === 'style' ||
      n === 'listItem' ||
      e.some((i) => i === 'meta' || i === 'metadata' || i === 'openGraph' || i === 'seo') ||
      S(e) ||
      S(t) ||
      (typeof n == 'string' && V.has(n))
    );
  },
  V = new Set([
    'color',
    'colour',
    'currency',
    'email',
    'format',
    'gid',
    'hex',
    'href',
    'hsl',
    'hsla',
    'icon',
    'id',
    'index',
    'key',
    'language',
    'layout',
    'link',
    'linkAction',
    'locale',
    'lqip',
    'page',
    'path',
    'ref',
    'rgb',
    'rgba',
    'route',
    'secret',
    'slug',
    'status',
    'tag',
    'template',
    'theme',
    'type',
    'unit',
    'url',
    'username',
    'variant',
    'website',
  ]);
function G(e) {
  return /^\d{4}-\d{2}-\d{2}/.test(e) ? !!Date.parse(e) : !1;
}
function K(e) {
  try {
    new URL(e, e.startsWith('/') ? 'https://acme.com' : void 0);
  } catch {
    return !1;
  }
  return !0;
}
function S(e) {
  return e.some((t) => typeof t == 'string' && t.match(/type/i) !== null);
}
const g = 20;
function z(e, t, r) {
  const { filter: n, logger: i, enabled: a } = r;
  if (!a) {
    const s = "config.enabled must be true, don't call this function otherwise";
    throw (i?.error?.(`[@sanity/client]: ${s}`, { result: e, resultSourceMap: t, config: r }), new TypeError(s));
  }
  if (!t) {
    return (
      i?.error?.('[@sanity/client]: Missing Content Source Map from response body', {
        result: e,
        resultSourceMap: t,
        config: r,
      }),
      e
    );
  }
  if (!r.studioUrl) {
    const s = 'config.studioUrl must be defined';
    throw (i?.error?.(`[@sanity/client]: ${s}`, { result: e, resultSourceMap: t, config: r }), new TypeError(s));
  }
  const o = { encoded: [], skipped: [] },
    d = N(e, t, ({ sourcePath: s, sourceDocument: c, resultPath: f, value: p }) => {
      if (
        (typeof n == 'function'
          ? n({ sourcePath: s, resultPath: f, filterDefault: _, sourceDocument: c, value: p })
          : _({ sourcePath: s, resultPath: f, filterDefault: _, sourceDocument: c, value: p })) === !1
      ) {
        return (
          i && o.skipped.push({ path: j(s), value: `${p.slice(0, g)}${p.length > g ? '...' : ''}`, length: p.length }),
          p
        );
      }
      i && o.encoded.push({ path: j(s), value: `${p.slice(0, g)}${p.length > g ? '...' : ''}`, length: p.length });
      const { baseUrl: l, workspace: u, tool: h } = J(typeof r.studioUrl == 'function' ? r.studioUrl(c) : r.studioUrl);
      if (!l) {
        return p;
      }
      const { _id: y, _type: R, _projectId: x, _dataset: T } = c;
      return I(
        p,
        {
          origin: 'sanity.io',
          href: q({
            baseUrl: l,
            workspace: u,
            tool: h,
            id: y,
            type: R,
            path: s,
            ...(!r.omitCrossDatasetReferenceData && { dataset: T, projectId: x }),
          }),
        },
        !1,
      );
    });
  if (i) {
    const s = o.skipped.length,
      c = o.encoded.length;
    if (
      ((s || c) &&
        ((i?.groupCollapsed || i.log)?.('[@sanity/client]: Encoding source map into result'),
        i.log?.(`[@sanity/client]: Paths encoded: ${o.encoded.length}, skipped: ${o.skipped.length}`)),
      o.encoded.length > 0 && (i?.log?.('[@sanity/client]: Table of encoded paths'), (i?.table || i.log)?.(o.encoded)),
      o.skipped.length > 0)
    ) {
      const f = new Set();
      for (const { path: p } of o.skipped) {
        f.add(p.replace(P, '0').replace(/\[\d+\]/g, '[]'));
      }
      i?.log?.('[@sanity/client]: List of skipped paths', [...f.values()]);
    }
    (s || c) && i?.groupEnd?.();
  }
  return d;
}
function j(e) {
  return U(A(e));
}
var F = Object.freeze({ __proto__: null, stegaEncodeSourceMap: z });
export { N as encodeIntoResult, z as stegaEncodeSourceMap, F as stegaEncodeSourceMap$1 };