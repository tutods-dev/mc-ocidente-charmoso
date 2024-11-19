import { u as Me, g as Oe, I as Q } from './images-aBJc1Pbn.js';
import { o as Be } from './routing-VhRhlrWH.js';
import {
  j as $e,
  B as Ce,
  H as De,
  C as Ie,
  y as L,
  G as Le,
  f as M,
  E as Pe,
  F as R,
  A as Se,
  D as Te,
  _ as _e,
  q as be,
  m as ke,
  d as te,
  P as ve,
  z as we,
  h as xe,
} from './styles-CtYowtZs.js';
import {
  B as A,
  N as B,
  m as D,
  a as E,
  A as I,
  M as N,
  K as O,
  F as P,
  y as S,
  H as U,
  i as c,
  t as d,
  b as l,
  S as p,
  J as pe,
  O as q,
  k as s,
  p as v,
  C as ye,
  n as z,
} from './web-Cw_Dym33.js';
import './preload-helper-DYd7aIoe.js';
var Ne = {};
_e(Ne, { Root: () => ne, Separator: () => re });
function ne(e) {
  let t;
  const n = ke({ orientation: 'horizontal' }, e),
    [r, i] = U(n, ['ref', 'orientation']),
    o = xe(
      () => t,
      () => 'hr',
    );
  return l(
    ve,
    D(
      {
        as: 'hr',
        ref(a) {
          var u = $e((m) => (t = m), r.ref);
          typeof u == 'function' && u(a);
        },
        get role() {
          return o() !== 'hr' ? 'separator' : void 0;
        },
        get 'aria-orientation'() {
          return r.orientation === 'vertical' ? 'vertical' : void 0;
        },
        get 'data-orientation'() {
          return r.orientation;
        },
      },
      i,
    ),
  );
}
var re = ne;
const F = (e) => {
  const [t, n] = U(e, ['class']);
  return l(
    re,
    D(
      {
        get class() {
          return be(
            'shrink-0 bg-border data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px]',
            t.class,
          );
        },
      },
      n,
    ),
  );
};
var je = d('<figcaption><!$><!/><i class="ph ph-magnifying-glass-plus text-3xl text-white">'),
  Ae = d('<i class="ph ph-x">'),
  Ee = d('<span class=text-md>'),
  ze = d('<figcaption class="text-center text-sm text-white">');
function He(e) {
  const t = D(e, { classList: { figure: '', image: '' }, width: 800, height: 800, alt: 'MC Ocidente Charmoso' }),
    [n, r, i, o] = U(t, ['src', 'alt', 'blurHash', 'caption'], ['width', 'height'], ['classList']);
  return l(L, {
    get children() {
      return [
        l(L.Trigger, {
          get class() {
            return M([we, i.classList.figure]);
          },
          as: 'figure',
          get children() {
            return [
              l(
                Q,
                D(o, {
                  loading: 'lazy',
                  layout: 'constrained',
                  get background() {
                    return n.blurHash;
                  },
                  get alt() {
                    return n.alt;
                  },
                  get src() {
                    return n.src;
                  },
                  get width() {
                    return r.width;
                  },
                  get height() {
                    return r.height;
                  },
                  get class() {
                    return M(['size-full object-cover object-center', i.classList.image]);
                  },
                }),
              ),
              (() => {
                var a = c(je),
                  u = a.firstChild,
                  [m, k] = S(u.nextSibling);
                return (
                  m.nextSibling,
                  I(a, Pe),
                  s(
                    a,
                    l(p, {
                      get when() {
                        return n.caption;
                      },
                      keyed: !0,
                      children: (_) =>
                        (() => {
                          var f = c(Ee);
                          return s(f, _), f;
                        })(),
                    }),
                    m,
                    k,
                  ),
                  a
                );
              })(),
            ];
          },
        }),
        l(L.Portal, {
          get children() {
            return [
              l(L.Overlay, { class: Se }),
              l(L.Content, {
                as: 'figure',
                class: Ie,
                get children() {
                  return [
                    l(L.Close, {
                      class: Te,
                      get children() {
                        return c(Ae);
                      },
                    }),
                    l(
                      Q,
                      D(o, {
                        loading: 'lazy',
                        layout: 'fullWidth',
                        get background() {
                          return n.blurHash;
                        },
                        get alt() {
                          return n.alt;
                        },
                        get src() {
                          return n.src;
                        },
                        get class() {
                          return M(['max-h-[85vh] w-full min-w-[50vw]', 'rounded-lg', 'object-cover object-center']);
                        },
                      }),
                    ),
                    l(p, {
                      get when() {
                        return n.caption;
                      },
                      keyed: !0,
                      children: (a) =>
                        (() => {
                          var u = c(ze);
                          return s(u, a), u;
                        })(),
                    }),
                  ];
                },
              }),
            ];
          },
        }),
      ];
    },
  });
}
var Ke = d(
  '<blockquote><svg class=fill-white xmlns=http://www.w3.org/2000/svg width=24 height=24 viewBox="0 0 24 24"><title>Testemunho</title><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path></svg><p class="text-xl italic leading-normal"></p><footer class="mt-6 flex flex-col items-end text-right"><strong class="font-semibold font-serif text-lg"></strong><!$><!/>',
);
function We(e) {
  const t = D(e, { class: '' }),
    [n, r] = U(t, ['client', 'content', 'url'], ['class']);
  return (() => {
    var i = c(Ke),
      o = i.firstChild,
      a = o.nextSibling,
      u = a.nextSibling,
      m = u.firstChild,
      k = m.nextSibling,
      [_, f] = S(k.nextSibling);
    return (
      s(a, () => n.content),
      s(m, () => n.client),
      s(
        u,
        l(p, {
          get when() {
            return n.url;
          },
          keyed: !0,
          children: (y) =>
            l(Ce, {
              variant: 'link',
              as: 'a',
              href: y,
              target: '_blank',
              rel: 'noreferrer nofollow',
              class: 'w-fit px-0 text-gray-100',
              children: 'Ver feedback no Google',
            }),
        }),
        _,
        f,
      ),
      v(() => I(i, R(['mt-8 rounded-lg bg-gray-900 px-6 py-4 text-white', r.class]))),
      i
    );
  })();
}
function X(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter((i) => Object.getOwnPropertyDescriptor(e, i).enumerable)), n.push.apply(n, r);
  }
  return n;
}
function Y(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2
      ? X(Object(n), !0).forEach((r) => {
          Ue(e, r, n[r]);
        })
      : Object.getOwnPropertyDescriptors
        ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n))
        : X(Object(n)).forEach((r) => {
            Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
          });
  }
  return e;
}
function Ue(e, t, n) {
  return (
    (t = Fe(t)),
    t in e ? Object.defineProperty(e, t, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : (e[t] = n),
    e
  );
}
function Fe(e) {
  var t = qe(e, 'string');
  return typeof t == 'symbol' ? t : t + '';
}
function qe(e, t) {
  if (typeof e != 'object' || !e) {
    return e;
  }
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || 'default');
    if (typeof r != 'object') {
      return r;
    }
    throw new TypeError('@@toPrimitive must return a primitive value.');
  }
  return (t === 'string' ? String : Number)(e);
}
function W(e) {
  return (
    e._type === 'span' &&
    'text' in e &&
    typeof e.text == 'string' &&
    (typeof e.marks > 'u' || (Array.isArray(e.marks) && e.marks.every((t) => typeof t == 'string')))
  );
}
function le(e) {
  return (
    typeof e._type == 'string' &&
    e._type[0] !== '@' &&
    (!('markDefs' in e) ||
      !e.markDefs ||
      (Array.isArray(e.markDefs) && e.markDefs.every((t) => typeof t._key == 'string'))) &&
    'children' in e &&
    Array.isArray(e.children) &&
    e.children.every((t) => typeof t == 'object' && '_type' in t)
  );
}
function ie(e) {
  return (
    le(e) && 'listItem' in e && typeof e.listItem == 'string' && (typeof e.level > 'u' || typeof e.level == 'number')
  );
}
function oe(e) {
  return e._type === '@list';
}
function ae(e) {
  return e._type === '@span';
}
function se(e) {
  return e._type === '@text';
}
const Z = ['strong', 'em', 'code', 'underline', 'strike-through'];
function Re(e, t, n) {
  if (!W(e) || !e.marks) {
    return [];
  }
  if (!e.marks.length) {
    return [];
  }
  const r = e.marks.slice(),
    i = {};
  return (
    r.forEach((o) => {
      i[o] = 1;
      for (let a = t + 1; a < n.length; a++) {
        const u = n[a];
        if (u && W(u) && Array.isArray(u.marks) && u.marks.indexOf(o) !== -1) {
          i[o]++;
        } else {
          break;
        }
      }
    }),
    r.sort((o, a) => Ge(i, o, a))
  );
}
function Ge(e, t, n) {
  const r = e[t],
    i = e[n];
  if (r !== i) {
    return i - r;
  }
  const o = Z.indexOf(t),
    a = Z.indexOf(n);
  return o !== a ? o - a : t.localeCompare(n);
}
function ce(e) {
  var t;
  const { children: n, markDefs: r = [] } = e;
  if (!n || !n.length) {
    return [];
  }
  const i = n.map(Re),
    o = { _type: '@span', children: [], markType: '<unknown>' };
  let a = [o];
  for (let u = 0; u < n.length; u++) {
    const m = n[u];
    if (!m) {
      continue;
    }
    const k = i[u] || [];
    let _ = 1;
    if (a.length > 1) {
      for (_; _ < a.length; _++) {
        const y = ((t = a[_]) == null ? void 0 : t.markKey) || '',
          g = k.indexOf(y);
        if (g === -1) {
          break;
        }
        k.splice(g, 1);
      }
    }
    a = a.slice(0, _);
    let f = a[a.length - 1];
    if (f) {
      for (const y of k) {
        const g = r.find((w) => w._key === y),
          x = g ? g._type : y,
          $ = { _type: '@span', _key: m._key, children: [], markDef: g, markType: x, markKey: y };
        f.children.push($), a.push($), (f = $);
      }
      if (W(m)) {
        const y = m.text.split(`
`);
        for (let g = y.length; g-- > 1; ) {
          y.splice(
            g,
            0,
            `
`,
          );
        }
        f.children = f.children.concat(y.map((g) => ({ _type: '@text', text: g })));
      } else {
        f.children = f.children.concat(m);
      }
    }
  }
  return o.children;
}
function Ve(e, t) {
  const n = [];
  let r;
  for (let i = 0; i < e.length; i++) {
    const o = e[i];
    if (o) {
      if (!ie(o)) {
        n.push(o), (r = void 0);
        continue;
      }
      if (!r) {
        (r = K(o, i, t)), n.push(r);
        continue;
      }
      if (Je(o, r)) {
        r.children.push(o);
        continue;
      }
      if ((o.level || 1) > r.level) {
        const a = K(o, i, t);
        if (t === 'html') {
          const u = r.children[r.children.length - 1],
            m = Y(Y({}, u), {}, { children: [...u.children, a] });
          r.children[r.children.length - 1] = m;
        } else {
          r.children.push(a);
        }
        r = a;
        continue;
      }
      if ((o.level || 1) < r.level) {
        const a = n[n.length - 1],
          u = a && G(a, o);
        if (u) {
          (r = u), r.children.push(o);
          continue;
        }
        (r = K(o, i, t)), n.push(r);
        continue;
      }
      if (o.listItem !== r.listItem) {
        const a = n[n.length - 1],
          u = a && G(a, { level: o.level || 1 });
        if (u && u.listItem === o.listItem) {
          (r = u), r.children.push(o);
          continue;
        } else {
          (r = K(o, i, t)), n.push(r);
          continue;
        }
      }
      console.warn('Unknown state encountered for block', o), n.push(o);
    }
  }
  return n;
}
function Je(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function K(e, t, n) {
  return {
    _type: '@list',
    _key: `${e._key || `${t}`}-parent`,
    mode: n,
    level: e.level || 1,
    listItem: e.listItem,
    children: [e],
  };
}
function G(e, t) {
  const n = t.level || 1,
    r = t.listItem || 'normal',
    i = typeof t.listItem == 'string';
  if (oe(e) && (e.level || 1) === n && i && (e.listItem || 'normal') === r) {
    return e;
  }
  if (!('children' in e)) {
    return;
  }
  const o = e.children[e.children.length - 1];
  return o && !W(o) ? G(o, t) : void 0;
}
function ue(e) {
  let t = '';
  return (
    e.children.forEach((n) => {
      se(n) ? (t += n.text) : ae(n) && (t += ue(n));
    }),
    t
  );
}
const Qe = 'html';
var Xe = d('<a>'),
  Ye = d('<em>'),
  Ze = d('<strong>'),
  et = d('<code>'),
  J = d('<span>'),
  tt = d('<del>'),
  nt = d('<ol>'),
  de = d('<ul>'),
  ge = d('<li>'),
  rt = d('<div>'),
  me = d('<p>'),
  lt = d('<br>'),
  it = d('<blockquote>'),
  ot = d('<h1>'),
  at = d('<h2>'),
  st = d('<h3>'),
  ct = d('<h4>'),
  ut = d('<h5>'),
  dt = d('<h6>');
function gt(e, t) {
  const { block: n, list: r, listItem: i, marks: o, types: a, ...u } = t;
  return {
    ...e,
    block: j(e, t, 'block'),
    list: j(e, t, 'list'),
    listItem: j(e, t, 'listItem'),
    marks: j(e, t, 'marks'),
    types: j(e, t, 'types'),
    ...u,
  };
}
function j(e, t, n) {
  const r = t[n],
    i = e[n];
  return typeof r == 'function' || (r && typeof i == 'function') ? r : r ? { ...i, ...r } : i;
}
var mt = (e) =>
    (() => {
      var t = c(Xe);
      return s(t, () => e.children), v(() => A(t, 'href', e.value?.href)), t;
    })(),
  ht = { textDecoration: 'underline' },
  ft = {
    em: (e) =>
      (() => {
        var t = c(Ye);
        return s(t, () => e.children), t;
      })(),
    strong: (e) =>
      (() => {
        var t = c(Ze);
        return s(t, () => e.children), t;
      })(),
    code: (e) =>
      (() => {
        var t = c(et);
        return s(t, () => e.children), t;
      })(),
    underline: (e) =>
      (() => {
        var t = c(J);
        return q(t, ht), s(t, () => e.children), t;
      })(),
    'strike-through': (e) =>
      (() => {
        var t = c(tt);
        return s(t, () => e.children), t;
      })(),
    link: mt,
  },
  yt = {
    number: (e) =>
      (() => {
        var t = c(nt);
        return s(t, () => e.children), t;
      })(),
    bullet: (e) =>
      (() => {
        var t = c(de);
        return s(t, () => e.children), t;
      })(),
  },
  pt = (e) =>
    (() => {
      var t = c(ge);
      return s(t, () => e.children), t;
    })(),
  H = (e, t) => `[@portabletext/solid] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`,
  he = (e) => H(`block type "${e}"`, 'types'),
  _t = (e) => H(`mark type "${e}"`, 'marks'),
  kt = (e) => H(`block style "${e}"`, 'block'),
  xt = (e) => H(`list style "${e}"`, 'list'),
  $t = (e) => H(`list item style "${e}"`, 'listItem');
function vt(e) {}
var ee = { display: 'none' },
  bt = (e) => {
    const t = () => he(e.value._type);
    return l(p, {
      get when() {
        return e.isInline;
      },
      get fallback() {
        return (() => {
          var n = c(rt);
          return q(n, ee), s(n, t), n;
        })();
      },
      get children() {
        var n = c(J);
        return q(n, ee), s(n, t), n;
      },
    });
  },
  wt = (e) =>
    (() => {
      var t = c(J);
      return s(t, () => e.children), v(() => I(t, `unknown__pt__mark__${e.markType}`)), t;
    })(),
  St = (e) =>
    (() => {
      var t = c(me);
      return s(t, () => e.children), t;
    })(),
  It = (e) =>
    (() => {
      var t = c(de);
      return s(t, () => e.children), t;
    })(),
  Tt = (e) =>
    (() => {
      var t = c(ge);
      return s(t, () => e.children), t;
    })(),
  Pt = () => c(lt),
  Ct = {
    normal: (e) =>
      (() => {
        var t = c(me);
        return s(t, () => e.children), t;
      })(),
    blockquote: (e) =>
      (() => {
        var t = c(it);
        return s(t, () => e.children), t;
      })(),
    h1: (e) =>
      (() => {
        var t = c(ot);
        return s(t, () => e.children), t;
      })(),
    h2: (e) =>
      (() => {
        var t = c(at);
        return s(t, () => e.children), t;
      })(),
    h3: (e) =>
      (() => {
        var t = c(st);
        return s(t, () => e.children), t;
      })(),
    h4: (e) =>
      (() => {
        var t = c(ct);
        return s(t, () => e.children), t;
      })(),
    h5: (e) =>
      (() => {
        var t = c(ut);
        return s(t, () => e.children), t;
      })(),
    h6: (e) =>
      (() => {
        var t = c(dt);
        return s(t, () => e.children), t;
      })(),
  },
  V = {
    types: {},
    block: Ct,
    marks: ft,
    list: yt,
    listItem: pt,
    hardBreak: Pt,
    unknownType: bt,
    unknownMark: wt,
    unknownList: It,
    unknownListItem: Tt,
    unknownBlockStyle: St,
  };
function fe() {}
var C = pe({ handleMissingComponent: fe, components: V });
function Lt(e) {
  const t = () => (e.onMissingComponent ?? vt) || fe,
    n = () => (Array.isArray(e.value) ? e.value : [e.value]),
    r = () => Ve(n(), e.listNestingMode ?? Qe),
    i = E(() => (e.components ? gt(V, e.components) : V));
  return l(C.Provider, {
    value: {
      get components() {
        return i();
      },
      get handleMissingComponent() {
        return t();
      },
    },
    get children() {
      return l(P, {
        get each() {
          return r();
        },
        children: (o, a) =>
          l(h, {
            node: o,
            get index() {
              return a();
            },
            isInline: !1,
            renderNode: h,
          }),
      });
    },
  });
}
function h(e) {
  const t = () => e.node._key || `node-${e.index}`;
  return l(ye, {
    get fallback() {
      return l(jt, {
        get node() {
          return e.node;
        },
        get index() {
          return e.index;
        },
        get key() {
          return t();
        },
        get isInline() {
          return e.isInline;
        },
      });
    },
    get children() {
      return [
        l(N, {
          get when() {
            return oe(e.node) ? e.node : !1;
          },
          keyed: !0,
          children: (n) =>
            l(Ot, {
              node: n,
              get index() {
                return e.index;
              },
              get key() {
                return t();
              },
            }),
        }),
        l(N, {
          get when() {
            return ie(e.node) ? e.node : !1;
          },
          keyed: !0,
          children: (n) =>
            l(Mt, {
              node: n,
              get index() {
                return e.index;
              },
              get key() {
                return t();
              },
            }),
        }),
        l(N, {
          get when() {
            return ae(e.node) ? e.node : !1;
          },
          keyed: !0,
          children: (n) =>
            l(Dt, {
              node: n,
              get index() {
                return e.index;
              },
              get key() {
                return t();
              },
            }),
        }),
        l(N, {
          get when() {
            return le(e.node) ? e.node : !1;
          },
          keyed: !0,
          children: (n) =>
            l(Nt, {
              node: n,
              get index() {
                return e.index;
              },
              get key() {
                return t();
              },
              get isInline() {
                return e.isInline;
              },
            }),
        }),
        l(N, {
          get when() {
            return se(e.node) ? e.node : !1;
          },
          keyed: !0,
          children: (n) =>
            l(Bt, {
              node: n,
              get key() {
                return t();
              },
            }),
        }),
      ];
    },
  });
}
function Dt(e) {
  const t = O(C),
    n = () => t.components.marks[e.node.markType] ?? t.components.unknownMark;
  return (
    z(() => {
      n() === t.components.unknownMark &&
        t.handleMissingComponent(_t(e.node.markType), { nodeType: 'mark', type: e.node.markType });
    }),
    l(B, {
      get component() {
        return n();
      },
      get text() {
        return ue(e.node);
      },
      get value() {
        return e.node.markDef;
      },
      get markType() {
        return e.node.markType;
      },
      get markKey() {
        return e.node.markKey;
      },
      renderNode: h,
      get children() {
        return l(P, {
          get each() {
            return e.node.children;
          },
          children: (r, i) =>
            l(h, {
              node: r,
              isInline: !0,
              get index() {
                return i();
              },
              renderNode: h,
            }),
        });
      },
    })
  );
}
function Mt(e) {
  const t = O(C),
    n = () => {
      const i = t.components.listItem;
      return typeof i == 'function' ? i : i[e.node.listItem] || t.components.unknownListItem;
    };
  z(() => {
    if (n() === t.components.unknownListItem) {
      const i = e.node.listItem || 'bullet';
      t.handleMissingComponent($t(i), { nodeType: 'listItemStyle', type: i });
    }
  });
  const r = E(() => ce(e.node));
  return l(B, {
    get component() {
      return n();
    },
    get value() {
      return e.node;
    },
    get index() {
      return e.index;
    },
    isInline: !1,
    renderNode: h,
    get children() {
      return l(p, {
        get when() {
          return e.node.style != null && e.node.style !== 'normal';
        },
        get fallback() {
          return l(P, {
            get each() {
              return r();
            },
            children: (i, o) =>
              l(h, {
                node: i,
                isInline: !0,
                get index() {
                  return o();
                },
                renderNode: h,
              }),
          });
        },
        get children() {
          return l(h, {
            get node() {
              return e.node;
            },
            get index() {
              return e.index;
            },
            isInline: !1,
            renderNode: h,
          });
        },
      });
    },
  });
}
function Ot(e) {
  const t = O(C),
    n = () => {
      const r = t.components.list;
      return typeof r == 'function' ? r : r[e.node.listItem] || t.components.unknownList;
    };
  return (
    z(() => {
      if (n() === t.components.unknownList) {
        const r = e.node.listItem || 'bullet';
        t.handleMissingComponent(xt(r), { nodeType: 'listStyle', type: r });
      }
    }),
    l(B, {
      get component() {
        return n();
      },
      get value() {
        return e.node;
      },
      get index() {
        return e.index;
      },
      isInline: !1,
      renderNode: h,
      get children() {
        return l(P, {
          get each() {
            return e.node.children;
          },
          children: (r, i) =>
            l(h, {
              get node() {
                return E(() => !!r._key)() ? r : { ...r, _key: `li-${e.index}-${i()}` };
              },
              get index() {
                return e.index;
              },
              isInline: !1,
              renderNode: h,
            }),
        });
      },
    })
  );
}
function Bt(e) {
  const t = O(C),
    n = () => t.components.hardBreak || void 0;
  return l(p, {
    get when() {
      return (
        e.node.text ===
        `
`
      );
    },
    get fallback() {
      return e.node.text;
    },
    get children() {
      return l(p, {
        get when() {
          return n();
        },
        fallback: '\\n',
        get children() {
          return l(B, {
            get component() {
              return n();
            },
          });
        },
      });
    },
  });
}
function Nt(e) {
  const t = O(C),
    n = () => e.node.style ?? 'normal',
    r = () =>
      (typeof t.components.block == 'function' ? t.components.block : t.components.block[n()]) ??
      t.components.unknownBlockStyle;
  z(() => {
    r() === t.components.unknownBlockStyle && t.handleMissingComponent(kt(n()), { nodeType: 'blockStyle', type: n() });
  });
  const i = E(() => ce(e.node));
  return l(p, {
    get when() {
      return e.key;
    },
    keyed: !0,
    get children() {
      return l(B, {
        get component() {
          return r();
        },
        get index() {
          return e.index;
        },
        get isInline() {
          return e.isInline;
        },
        get value() {
          return e.node;
        },
        renderNode: h,
        get children() {
          return l(P, {
            get each() {
              return i();
            },
            children: (o, a) =>
              l(h, {
                node: o,
                isInline: !0,
                get index() {
                  return a();
                },
                renderNode: h,
              }),
          });
        },
      });
    },
  });
}
function jt(e) {
  const t = O(C),
    n = () => t.components.types[e.node._type] ?? t.components.unknownType;
  return (
    z(() => {
      n() || t.handleMissingComponent(he(e.node._type), { nodeType: 'block', type: e.node._type });
    }),
    l(B, {
      get component() {
        return n();
      },
      get value() {
        return e.node;
      },
      get isInline() {
        return e.isInline;
      },
      get index() {
        return e.index;
      },
      renderNode: h,
    })
  );
}
var At = d('<p class="my-2 overflow-hidden break-words leading-relaxed first-of-type:mt-0 last-of-type:mb-0">'),
  Et = d('<ul class="list-disc space-y-1 pl-6">'),
  zt = d('<ol class="list-decimal space-y-1 pl-6">'),
  Ht = d('<a class=underline>');
const Kt = {
  block: {
    normal: ({ children: e }) =>
      (() => {
        var t = c(At);
        return s(t, e), t;
      })(),
  },
  list: {
    bullet: ({ children: e }) =>
      (() => {
        var t = c(Et);
        return s(t, e), t;
      })(),
    number: ({ children: e }) =>
      (() => {
        var t = c(zt);
        return s(t, e), t;
      })(),
  },
  marks: {
    link: ({ children: e, value: t }) =>
      (() => {
        var n = c(Ht);
        return (
          s(n, e),
          v(
            (r) => {
              var i = t?.href,
                o = t?.target && '_blank',
                a = t?.target ? 'nofollow' : void 0;
              return (
                i !== r.e && A(n, 'href', (r.e = i)),
                o !== r.t && A(n, 'target', (r.t = o)),
                a !== r.a && A(n, 'rel', (r.a = a)),
                r
              );
            },
            { e: void 0, t: void 0, a: void 0 },
          ),
          n
        );
      })(),
  },
};
function Wt({ slug: e }) {
  const t = te(() => Le(e));
  return l(p, {
    get when() {
      return t();
    },
    keyed: !0,
    children: (n) => l(We, n),
  });
}
var Ut = d(
    '<li><span class="flex-1 font-semibold font-serif text-gray-800 text-lg">Serviços realizados</span><span class="flex-1 break-words text-gray-600 md:text-right">',
  ),
  Ft = d(
    '<li><span class="flex-1 font-semibold font-serif text-gray-800 text-lg">Local</span><span class="flex-1 text-gray-600 md:text-right">',
  ),
  qt = d('<ul class="flex flex-col"><!$><!/><!$><!/><!$><!/>'),
  Rt = d(
    '<a class="border-b-2 border-b-transparent font-medium transition-all duration-300 ease-in-out hover:border-b-gray-900 hover:text-gray-900">',
  ),
  Gt = d(
    '<li><span class="flex-1 font-semibold font-serif text-gray-800 text-lg">Data</span><span class="flex-1 text-gray-600 md:text-right">',
  );
function Vt({ local: e, date: t, services: n }) {
  return (() => {
    var r = c(qt),
      i = r.firstChild,
      [o, a] = S(i.nextSibling),
      u = o.nextSibling,
      [m, k] = S(u.nextSibling),
      _ = m.nextSibling,
      [f, y] = S(_.nextSibling);
    return (
      s(
        r,
        l(p, {
          when: n,
          get children() {
            return [
              (() => {
                var g = c(Ut),
                  x = g.firstChild,
                  $ = x.nextSibling;
                return (
                  s(
                    $,
                    l(P, {
                      each: n,
                      children: (w, b) => [
                        (() => {
                          var T = c(Rt);
                          return s(T, () => w.title), v(() => A(T, 'href', `/servicos/${w.slug}`)), T;
                        })(),
                        E(() => b() < n.length - 1 && ','),
                      ],
                    }),
                  ),
                  v(() => I(g, M('flex flex-col px-1 pt-2 pb-4 md:flex-row md:items-center md:gap-2'))),
                  g
                );
              })(),
              l(F, {}),
            ];
          },
        }),
        o,
        a,
      ),
      s(
        r,
        l(p, {
          when: e,
          get children() {
            return [
              (() => {
                var g = c(Ft),
                  x = g.firstChild,
                  $ = x.nextSibling;
                return s($, e), v(() => I(g, M('flex flex-col px-1 py-4 md:flex-row md:items-center md:gap-2'))), g;
              })(),
              l(F, {}),
            ];
          },
        }),
        m,
        k,
      ),
      s(
        r,
        l(p, {
          when: t,
          keyed: !0,
          children: (g) => [
            (() => {
              var x = c(Gt),
                $ = x.firstChild,
                w = $.nextSibling;
              return (
                s(w, () => new Date(g).toLocaleDateString('pt-PT', { dateStyle: 'long' })),
                v(() => I(x, M('flex flex-col px-1 py-4 md:flex-row md:items-center md:gap-2'))),
                x
              );
            })(),
            l(F, {}),
          ],
        }),
        f,
        y,
      ),
      r
    );
  })();
}
var Jt = d(
    '<section class="flex items-center justify-center pt-12 pb-10 md:py-12"><section><section class="flex flex-col gap-6"></section><section class="order-first md:sticky md:top-10 md:right-0 md:order-last md:h-fit md:py-10"><h1></h1><!$><!/><!$><!/><!$><!/>',
  ),
  Qt = d('<div>');
function nn() {
  const e = Be(),
    t = te(() => De(e.slug), { name: `project-${e.slug}` });
  return l(p, {
    get when() {
      return t();
    },
    keyed: !0,
    children: (n) =>
      (() => {
        var r = c(Jt),
          i = r.firstChild,
          o = i.firstChild,
          a = o.nextSibling,
          u = a.firstChild,
          m = u.nextSibling,
          [k, _] = S(m.nextSibling),
          f = k.nextSibling,
          [y, g] = S(f.nextSibling),
          x = y.nextSibling,
          [$, w] = S(x.nextSibling);
        return (
          s(
            o,
            l(P, {
              get each() {
                return n.gallery;
              },
              children: (b) =>
                l(He, {
                  get src() {
                    return Me(b).url();
                  },
                  get alt() {
                    return b.alt;
                  },
                  get blurHash() {
                    return Oe(b);
                  },
                  get width() {
                    return b.asset.metadata?.dimensions?.width;
                  },
                  get height() {
                    return b.asset.metadata?.dimensions?.height;
                  },
                  classList: { image: 'aspect-square', figure: 'rounded-sm' },
                }),
            }),
          ),
          s(u, () => n.title),
          s(
            a,
            l(p, {
              get when() {
                return n.content;
              },
              keyed: !0,
              children: (b) =>
                (() => {
                  var T = c(Qt);
                  return (
                    s(T, l(Lt, { components: Kt, value: b })),
                    v(() => I(T, R(['relative my-4', 'overflow-y-hidden', 'transition duration-300 ease-in-out']))),
                    T
                  );
                })(),
            }),
            k,
            _,
          ),
          s(
            a,
            l(Vt, {
              get local() {
                return n.local;
              },
              get date() {
                return n.date;
              },
              get services() {
                return n.services;
              },
            }),
            y,
            g,
          ),
          s(
            a,
            l(p, {
              keyed: !0,
              get when() {
                return n.showTestimonial;
              },
              get children() {
                return l(Wt, {
                  get slug() {
                    return n.slug;
                  },
                });
              },
            }),
            $,
            w,
          ),
          v(() =>
            I(
              i,
              R([
                'container relative grid grid-cols-1 gap-8',
                { 'md:grid-cols-2 lg:grid-cols-[1fr_0.75fr]': !!n.gallery },
              ]),
            ),
          ),
          r
        );
      })(),
  });
}
export { nn as default };
