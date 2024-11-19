import { createComponent, ssr, ssrHydrationKey, ssrAttribute, escape, mergeProps, Dynamic, ssrStyle } from 'solid-js/web';
import { createContext, Show, For, splitProps, mergeProps as mergeProps$1, createMemo, Switch, Match, useContext, createEffect } from 'solid-js';
import { R as Pt$1, Z as We$1, q as bc, a0 as Tc, a1 as m$1, a2 as Y$1, a3 as io, a4 as te$1, a5 as pe, a6 as qc, a7 as Kc, a8 as Xc, a9 as Uc, aa as Yc, ab as Rc, V as Ve$1, F as Fc } from '../runtime.mjs';
import { v as vr, O as Or, I as Ir } from './images-CtpvCe-X.mjs';
import { twMerge } from 'tailwind-merge';
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
import '@solid-primitives/scroll';
import 'tailwind-variants';
import '@solid-primitives/resize-observer';
import '@sanity/image-url';

var De = {};
Pt$1(De, { Root: () => J, Separator: () => Q });
function J(e) {
  let t;
  const n = Y$1({ orientation: "horizontal" }, e), [r, o] = splitProps(n, ["ref", "orientation"]), s = io(() => t, () => "hr");
  return createComponent(te$1, mergeProps({ as: "hr", get role() {
    return s() !== "hr" ? "separator" : void 0;
  }, get "aria-orientation"() {
    return r.orientation === "vertical" ? "vertical" : void 0;
  }, get "data-orientation"() {
    return r.orientation;
  } }, o));
}
var Q = J;
const N = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent(Q, mergeProps({ get class() {
    return Ve$1("shrink-0 bg-border data-[orientation=horizontal]:h-[1px] data-[orientation=vertical]:h-full data-[orientation=horizontal]:w-full data-[orientation=vertical]:w-[1px]", t.class);
  } }, n));
};
var Ce = ["<figcaption", "><!--$-->", '<!--/--><i class="ph ph-magnifying-glass-plus text-3xl text-white"></i></figcaption>'], Oe = ["<i", ' class="ph ph-x"></i>'], Me = ["<span", ' class="text-md">', "</span>"], Be = ["<figcaption", ' class="text-center text-sm text-white">', "</figcaption>"];
function je(e) {
  const t = mergeProps$1(e, { classList: { figure: "", image: "" }, width: 800, height: 800, alt: "MC Ocidente Charmoso" }), [n, r, o, s] = splitProps(t, ["src", "alt", "blurHash", "caption"], ["width", "height"], ["classList"]);
  return createComponent(pe, { get children() {
    return [createComponent(pe.Trigger, { get class() {
      return twMerge([qc, o.classList.figure]);
    }, as: "figure", get children() {
      return [createComponent(Ir, mergeProps(s, { loading: "lazy", layout: "constrained", get background() {
        return n.blurHash;
      }, get alt() {
        return n.alt;
      }, get src() {
        return n.src;
      }, get width() {
        return r.width;
      }, get height() {
        return r.height;
      }, get class() {
        return twMerge(["size-full object-cover object-center", o.classList.image]);
      } })), ssr(Ce, ssrHydrationKey() + ssrAttribute("class", escape(Kc, true), false), escape(createComponent(Show, { get when() {
        return n.caption;
      }, keyed: true, children: (u) => ssr(Me, ssrHydrationKey(), escape(u)) })))];
    } }), createComponent(pe.Portal, { get children() {
      return [createComponent(pe.Overlay, { class: Xc }), createComponent(pe.Content, { as: "figure", class: Uc, get children() {
        return [createComponent(pe.Close, { class: Yc, get children() {
          return ssr(Oe, ssrHydrationKey());
        } }), createComponent(Ir, mergeProps(s, { loading: "lazy", layout: "fullWidth", get background() {
          return n.blurHash;
        }, get alt() {
          return n.alt;
        }, get src() {
          return n.src;
        }, get class() {
          return twMerge(["max-h-[85vh] w-full min-w-[50vw]", "rounded-lg", "object-cover object-center"]);
        } })), createComponent(Show, { get when() {
          return n.caption;
        }, keyed: true, children: (u) => ssr(Be, ssrHydrationKey(), escape(u)) })];
      } })];
    } })];
  } });
}
var Ne = ["<blockquote", '><svg class="fill-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><title>Testemunho</title><path d="M6.5 10c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.318.142-.686.238-1.028.466-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.945-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 6.5 10zm11 0c-.223 0-.437.034-.65.065.069-.232.14-.468.254-.68.114-.308.292-.575.469-.844.148-.291.409-.488.601-.737.201-.242.475-.403.692-.604.213-.21.492-.315.714-.463.232-.133.434-.28.65-.35l.539-.222.474-.197-.485-1.938-.597.144c-.191.048-.424.104-.689.171-.271.05-.56.187-.882.312-.317.143-.686.238-1.028.467-.344.218-.741.4-1.091.692-.339.301-.748.562-1.05.944-.33.358-.656.734-.909 1.162-.293.408-.492.856-.702 1.299-.19.443-.343.896-.468 1.336-.237.882-.343 1.72-.384 2.437-.034.718-.014 1.315.028 1.747.015.204.043.402.063.539l.025.168.026-.006A4.5 4.5 0 1 0 17.5 10z"></path></svg><p class="text-xl italic leading-normal">', '</p><footer class="mt-6 flex flex-col items-end text-right"><strong class="font-semibold font-serif text-lg">', "</strong><!--$-->", "<!--/--></footer></blockquote>"];
function Ae(e) {
  const t = mergeProps$1(e, { class: "" }), [n, r] = splitProps(t, ["client", "content", "url"], ["class"]);
  return ssr(Ne, ssrHydrationKey() + ssrAttribute("class", escape(m$1(["mt-8 rounded-lg bg-gray-900 px-6 py-4 text-white", r.class]), true), false), escape(n.content), escape(n.client), escape(createComponent(Show, { get when() {
    return n.url;
  }, keyed: true, children: (o) => createComponent(Fc, { variant: "link", as: "a", href: o, target: "_blank", rel: "noreferrer nofollow", class: "w-fit px-0 text-gray-100", children: "Ver feedback no Google" }) })));
}
function U(e, t) {
  var n = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var r = Object.getOwnPropertySymbols(e);
    t && (r = r.filter(function(o) {
      return Object.getOwnPropertyDescriptor(e, o).enumerable;
    })), n.push.apply(n, r);
  }
  return n;
}
function q(e) {
  for (var t = 1; t < arguments.length; t++) {
    var n = arguments[t] != null ? arguments[t] : {};
    t % 2 ? U(Object(n), true).forEach(function(r) {
      ze(e, r, n[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : U(Object(n)).forEach(function(r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(n, r));
    });
  }
  return e;
}
function ze(e, t, n) {
  return t = Ee(t), t in e ? Object.defineProperty(e, t, { value: n, enumerable: true, configurable: true, writable: true }) : e[t] = n, e;
}
function Ee(e) {
  var t = He(e, "string");
  return typeof t == "symbol" ? t : t + "";
}
function He(e, t) {
  if (typeof e != "object" || !e)
    return e;
  var n = e[Symbol.toPrimitive];
  if (n !== void 0) {
    var r = n.call(e, t || "default");
    if (typeof r != "object")
      return r;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (t === "string" ? String : Number)(e);
}
function O(e) {
  return e._type === "span" && "text" in e && typeof e.text == "string" && (typeof e.marks > "u" || Array.isArray(e.marks) && e.marks.every((t) => typeof t == "string"));
}
function X(e) {
  return typeof e._type == "string" && e._type[0] !== "@" && (!("markDefs" in e) || !e.markDefs || Array.isArray(e.markDefs) && e.markDefs.every((t) => typeof t._key == "string")) && "children" in e && Array.isArray(e.children) && e.children.every((t) => typeof t == "object" && "_type" in t);
}
function Y(e) {
  return X(e) && "listItem" in e && typeof e.listItem == "string" && (typeof e.level > "u" || typeof e.level == "number");
}
function Z(e) {
  return e._type === "@list";
}
function ee(e) {
  return e._type === "@span";
}
function te(e) {
  return e._type === "@text";
}
const F = ["strong", "em", "code", "underline", "strike-through"];
function Ke(e, t, n) {
  if (!O(e) || !e.marks)
    return [];
  if (!e.marks.length)
    return [];
  const r = e.marks.slice(), o = {};
  return r.forEach((s) => {
    o[s] = 1;
    for (let u = t + 1; u < n.length; u++) {
      const d = n[u];
      if (d && O(d) && Array.isArray(d.marks) && d.marks.indexOf(s) !== -1)
        o[s]++;
      else
        break;
    }
  }), r.sort((s, u) => We(o, s, u));
}
function We(e, t, n) {
  const r = e[t], o = e[n];
  if (r !== o)
    return o - r;
  const s = F.indexOf(t), u = F.indexOf(n);
  return s !== u ? s - u : t.localeCompare(n);
}
function ne(e) {
  var t;
  const { children: n, markDefs: r = [] } = e;
  if (!n || !n.length)
    return [];
  const o = n.map(Ke), s = { _type: "@span", children: [], markType: "<unknown>" };
  let u = [s];
  for (let d = 0; d < n.length; d++) {
    const p = n[d];
    if (!p)
      continue;
    const B = o[d] || [];
    let I = 1;
    if (u.length > 1)
      for (I; I < u.length; I++) {
        const y = ((t = u[I]) == null ? void 0 : t.markKey) || "", h = B.indexOf(y);
        if (h === -1)
          break;
        B.splice(h, 1);
      }
    u = u.slice(0, I);
    let k = u[u.length - 1];
    if (k) {
      for (const y of B) {
        const h = r.find((de) => de._key === y), ue = h ? h._type : y, j = { _type: "@span", _key: p._key, children: [], markDef: h, markType: ue, markKey: y };
        k.children.push(j), u.push(j), k = j;
      }
      if (O(p)) {
        const y = p.text.split(`
`);
        for (let h = y.length; h-- > 1; )
          y.splice(h, 0, `
`);
        k.children = k.children.concat(y.map((h) => ({ _type: "@text", text: h })));
      } else
        k.children = k.children.concat(p);
    }
  }
  return s.children;
}
function Ue(e, t) {
  const n = [];
  let r;
  for (let o = 0; o < e.length; o++) {
    const s = e[o];
    if (s) {
      if (!Y(s)) {
        n.push(s), r = void 0;
        continue;
      }
      if (!r) {
        r = D(s, o, t), n.push(r);
        continue;
      }
      if (qe(s, r)) {
        r.children.push(s);
        continue;
      }
      if ((s.level || 1) > r.level) {
        const u = D(s, o, t);
        if (t === "html") {
          const d = r.children[r.children.length - 1], p = q(q({}, d), {}, { children: [...d.children, u] });
          r.children[r.children.length - 1] = p;
        } else
          r.children.push(u);
        r = u;
        continue;
      }
      if ((s.level || 1) < r.level) {
        const u = n[n.length - 1], d = u && E(u, s);
        if (d) {
          r = d, r.children.push(s);
          continue;
        }
        r = D(s, o, t), n.push(r);
        continue;
      }
      if (s.listItem !== r.listItem) {
        const u = n[n.length - 1], d = u && E(u, { level: s.level || 1 });
        if (d && d.listItem === s.listItem) {
          r = d, r.children.push(s);
          continue;
        } else {
          r = D(s, o, t), n.push(r);
          continue;
        }
      }
      console.warn("Unknown state encountered for block", s), n.push(s);
    }
  }
  return n;
}
function qe(e, t) {
  return (e.level || 1) === t.level && e.listItem === t.listItem;
}
function D(e, t, n) {
  return { _type: "@list", _key: `${e._key || `${t}`}-parent`, mode: n, level: e.level || 1, listItem: e.listItem, children: [e] };
}
function E(e, t) {
  const n = t.level || 1, r = t.listItem || "normal", o = typeof t.listItem == "string";
  if (Z(e) && (e.level || 1) === n && o && (e.listItem || "normal") === r)
    return e;
  if (!("children" in e))
    return;
  const s = e.children[e.children.length - 1];
  return s && !O(s) ? E(s, t) : void 0;
}
function re(e) {
  let t = "";
  return e.children.forEach((n) => {
    te(n) ? t += n.text : ee(n) && (t += re(n));
  }), t;
}
const Fe = "html";
var Re = ["<a", ">", "</a>"], Ge = ["<em", ">", "</em>"], Ve = ["<strong", ">", "</strong>"], Je = ["<code", ">", "</code>"], le = ["<span", ' style="', '">', "</span>"], Qe = ["<del", ">", "</del>"], Xe = ["<ol", ">", "</ol>"], ie = ["<ul", ">", "</ul>"], oe = ["<li", ">", "</li>"], Ye = ["<div", ' style="', '">', "</div>"], Ze = ["<span", ' class="', '">', "</span>"], se = ["<p", ">", "</p>"], et = ["<br", ">"], tt = ["<blockquote", ">", "</blockquote>"], nt = ["<h1", ">", "</h1>"], rt = ["<h2", ">", "</h2>"], lt = ["<h3", ">", "</h3>"], it = ["<h4", ">", "</h4>"], ot = ["<h5", ">", "</h5>"], st = ["<h6", ">", "</h6>"];
function at(e, t) {
  const { block: n, list: r, listItem: o, marks: s, types: u, ...d } = t;
  return { ...e, block: T(e, t, "block"), list: T(e, t, "list"), listItem: T(e, t, "listItem"), marks: T(e, t, "marks"), types: T(e, t, "types"), ...d };
}
function T(e, t, n) {
  const r = t[n], o = e[n];
  return typeof r == "function" || r && typeof o == "function" ? r : r ? { ...o, ...r } : o;
}
var ct = (e) => {
  var _a;
  return ssr(Re, ssrHydrationKey() + ssrAttribute("href", escape((_a = e.value) == null ? void 0 : _a.href, true), false), escape(e.children));
}, ut = { textDecoration: "underline" }, dt = { em: (e) => ssr(Ge, ssrHydrationKey(), escape(e.children)), strong: (e) => ssr(Ve, ssrHydrationKey(), escape(e.children)), code: (e) => ssr(Je, ssrHydrationKey(), escape(e.children)), underline: (e) => ssr(le, ssrHydrationKey(), ssrStyle(ut), escape(e.children)), "strike-through": (e) => ssr(Qe, ssrHydrationKey(), escape(e.children)), link: ct }, mt = { number: (e) => ssr(Xe, ssrHydrationKey(), escape(e.children)), bullet: (e) => ssr(ie, ssrHydrationKey(), escape(e.children)) }, gt = (e) => ssr(oe, ssrHydrationKey(), escape(e.children)), L = (e, t) => `[@portabletext/solid] Unknown ${e}, specify a component for it in the \`components.${t}\` prop`, ae = (e) => L(`block type "${e}"`, "types"), ht = (e) => L(`mark type "${e}"`, "marks"), ft = (e) => L(`block style "${e}"`, "block"), yt = (e) => L(`list style "${e}"`, "list"), pt = (e) => L(`list item style "${e}"`, "listItem");
function kt(e) {
}
var R = { display: "none" }, xt = (e) => {
  const t = () => ae(e.value._type);
  return createComponent(Show, { get when() {
    return e.isInline;
  }, get fallback() {
    return ssr(Ye, ssrHydrationKey(), ssrStyle(R), escape(t()));
  }, get children() {
    return ssr(le, ssrHydrationKey(), ssrStyle(R), escape(t()));
  } });
}, vt = (e) => ssr(Ze, ssrHydrationKey(), `unknown__pt__mark__${escape(e.markType, true)}`, escape(e.children)), wt = (e) => ssr(se, ssrHydrationKey(), escape(e.children)), bt = (e) => ssr(ie, ssrHydrationKey(), escape(e.children)), _t = (e) => ssr(oe, ssrHydrationKey(), escape(e.children)), $t = () => ssr(et, ssrHydrationKey()), It = { normal: (e) => ssr(se, ssrHydrationKey(), escape(e.children)), blockquote: (e) => ssr(tt, ssrHydrationKey(), escape(e.children)), h1: (e) => ssr(nt, ssrHydrationKey(), escape(e.children)), h2: (e) => ssr(rt, ssrHydrationKey(), escape(e.children)), h3: (e) => ssr(lt, ssrHydrationKey(), escape(e.children)), h4: (e) => ssr(it, ssrHydrationKey(), escape(e.children)), h5: (e) => ssr(ot, ssrHydrationKey(), escape(e.children)), h6: (e) => ssr(st, ssrHydrationKey(), escape(e.children)) }, H = { types: {}, block: It, marks: dt, list: mt, listItem: gt, hardBreak: $t, unknownType: xt, unknownMark: vt, unknownList: bt, unknownListItem: _t, unknownBlockStyle: wt };
function ce() {
}
var v = createContext({ handleMissingComponent: ce, components: H });
function Pt(e) {
  const t = () => {
    var _a;
    return ((_a = e.onMissingComponent) != null ? _a : kt) || ce;
  }, n = () => Array.isArray(e.value) ? e.value : [e.value], r = () => {
    var _a;
    return Ue(n(), (_a = e.listNestingMode) != null ? _a : Fe);
  }, o = createMemo(() => e.components ? at(H, e.components) : H);
  return createComponent(v.Provider, { value: { get components() {
    return o();
  }, get handleMissingComponent() {
    return t();
  } }, get children() {
    return createComponent(For, { get each() {
      return r();
    }, children: (s, u) => createComponent(m, { node: s, get index() {
      return u();
    }, isInline: false, renderNode: m }) });
  } });
}
function m(e) {
  const t = () => e.node._key || `node-${e.index}`;
  return createComponent(Switch, { get fallback() {
    return createComponent(Ot, { get node() {
      return e.node;
    }, get index() {
      return e.index;
    }, get key() {
      return t();
    }, get isInline() {
      return e.isInline;
    } });
  }, get children() {
    return [createComponent(Match, { get when() {
      return Z(e.node) ? e.node : false;
    }, keyed: true, children: (n) => createComponent(Lt, { node: n, get index() {
      return e.index;
    }, get key() {
      return t();
    } }) }), createComponent(Match, { get when() {
      return Y(e.node) ? e.node : false;
    }, keyed: true, children: (n) => createComponent(St, { node: n, get index() {
      return e.index;
    }, get key() {
      return t();
    } }) }), createComponent(Match, { get when() {
      return ee(e.node) ? e.node : false;
    }, keyed: true, children: (n) => createComponent(Tt, { node: n, get index() {
      return e.index;
    }, get key() {
      return t();
    } }) }), createComponent(Match, { get when() {
      return X(e.node) ? e.node : false;
    }, keyed: true, children: (n) => createComponent(Ct, { node: n, get index() {
      return e.index;
    }, get key() {
      return t();
    }, get isInline() {
      return e.isInline;
    } }) }), createComponent(Match, { get when() {
      return te(e.node) ? e.node : false;
    }, keyed: true, children: (n) => createComponent(Dt, { node: n, get key() {
      return t();
    } }) })];
  } });
}
function Tt(e) {
  const t = useContext(v), n = () => {
    var _a;
    return (_a = t.components.marks[e.node.markType]) != null ? _a : t.components.unknownMark;
  };
  return createEffect(() => {
    n() === t.components.unknownMark && t.handleMissingComponent(ht(e.node.markType), { nodeType: "mark", type: e.node.markType });
  }), createComponent(Dynamic, { get component() {
    return n();
  }, get text() {
    return re(e.node);
  }, get value() {
    return e.node.markDef;
  }, get markType() {
    return e.node.markType;
  }, get markKey() {
    return e.node.markKey;
  }, renderNode: m, get children() {
    return createComponent(For, { get each() {
      return e.node.children;
    }, children: (r, o) => createComponent(m, { node: r, isInline: true, get index() {
      return o();
    }, renderNode: m }) });
  } });
}
function St(e) {
  const t = useContext(v), n = () => {
    const o = t.components.listItem;
    return typeof o == "function" ? o : o[e.node.listItem] || t.components.unknownListItem;
  };
  createEffect(() => {
    if (n() === t.components.unknownListItem) {
      const o = e.node.listItem || "bullet";
      t.handleMissingComponent(pt(o), { nodeType: "listItemStyle", type: o });
    }
  });
  const r = createMemo(() => ne(e.node));
  return createComponent(Dynamic, { get component() {
    return n();
  }, get value() {
    return e.node;
  }, get index() {
    return e.index;
  }, isInline: false, renderNode: m, get children() {
    return createComponent(Show, { get when() {
      return e.node.style != null && e.node.style !== "normal";
    }, get fallback() {
      return createComponent(For, { get each() {
        return r();
      }, children: (o, s) => createComponent(m, { node: o, isInline: true, get index() {
        return s();
      }, renderNode: m }) });
    }, get children() {
      return createComponent(m, { get node() {
        return e.node;
      }, get index() {
        return e.index;
      }, isInline: false, renderNode: m });
    } });
  } });
}
function Lt(e) {
  const t = useContext(v), n = () => {
    const r = t.components.list;
    return typeof r == "function" ? r : r[e.node.listItem] || t.components.unknownList;
  };
  return createEffect(() => {
    if (n() === t.components.unknownList) {
      const r = e.node.listItem || "bullet";
      t.handleMissingComponent(yt(r), { nodeType: "listStyle", type: r });
    }
  }), createComponent(Dynamic, { get component() {
    return n();
  }, get value() {
    return e.node;
  }, get index() {
    return e.index;
  }, isInline: false, renderNode: m, get children() {
    return createComponent(For, { get each() {
      return e.node.children;
    }, children: (r, o) => createComponent(m, { get node() {
      return r._key ? r : { ...r, _key: `li-${e.index}-${o()}` };
    }, get index() {
      return e.index;
    }, isInline: false, renderNode: m }) });
  } });
}
function Dt(e) {
  const t = useContext(v), n = () => t.components.hardBreak || void 0;
  return createComponent(Show, { get when() {
    return e.node.text === `
`;
  }, get fallback() {
    return e.node.text;
  }, get children() {
    return createComponent(Show, { get when() {
      return n();
    }, fallback: "\\n", get children() {
      return createComponent(Dynamic, { get component() {
        return n();
      } });
    } });
  } });
}
function Ct(e) {
  const t = useContext(v), n = () => {
    var _a;
    return (_a = e.node.style) != null ? _a : "normal";
  }, r = () => {
    var _a;
    return (_a = typeof t.components.block == "function" ? t.components.block : t.components.block[n()]) != null ? _a : t.components.unknownBlockStyle;
  };
  createEffect(() => {
    r() === t.components.unknownBlockStyle && t.handleMissingComponent(ft(n()), { nodeType: "blockStyle", type: n() });
  });
  const o = createMemo(() => ne(e.node));
  return createComponent(Show, { get when() {
    return e.key;
  }, keyed: true, get children() {
    return createComponent(Dynamic, { get component() {
      return r();
    }, get index() {
      return e.index;
    }, get isInline() {
      return e.isInline;
    }, get value() {
      return e.node;
    }, renderNode: m, get children() {
      return createComponent(For, { get each() {
        return o();
      }, children: (s, u) => createComponent(m, { node: s, isInline: true, get index() {
        return u();
      }, renderNode: m }) });
    } });
  } });
}
function Ot(e) {
  const t = useContext(v), n = () => {
    var _a;
    return (_a = t.components.types[e.node._type]) != null ? _a : t.components.unknownType;
  };
  return createEffect(() => {
    n() || t.handleMissingComponent(ae(e.node._type), { nodeType: "block", type: e.node._type });
  }), createComponent(Dynamic, { get component() {
    return n();
  }, get value() {
    return e.node;
  }, get isInline() {
    return e.isInline;
  }, get index() {
    return e.index;
  }, renderNode: m });
}
var Mt = ["<p", ' class="my-2 overflow-hidden break-words leading-relaxed first-of-type:mt-0 last-of-type:mb-0">', "</p>"], Bt = ["<ul", ' class="list-disc space-y-1 pl-6">', "</ul>"], jt = ["<ol", ' class="list-decimal space-y-1 pl-6">', "</ol>"], Nt = ["<a", ' class="underline"', ">", "</a>"];
const At = { block: { normal: ({ children: e }) => ssr(Mt, ssrHydrationKey(), escape(e)) }, list: { bullet: ({ children: e }) => ssr(Bt, ssrHydrationKey(), escape(e)), number: ({ children: e }) => ssr(jt, ssrHydrationKey(), escape(e)) }, marks: { link: ({ children: e, value: t }) => ssr(Nt, ssrHydrationKey(), ssrAttribute("href", escape(t == null ? void 0 : t.href, true), false) + ssrAttribute("target", (t == null ? void 0 : t.target) && "_blank", false) + ssrAttribute("rel", (t == null ? void 0 : t.target) ? "nofollow" : escape(void 0, true), false), escape(e)) } };
function zt({ slug: e }) {
  const t = bc(() => Rc(e));
  return createComponent(Show, { get when() {
    return t();
  }, keyed: true, children: (n) => createComponent(Ae, n) });
}
var Et = ["<li", '><span class="flex-1 font-semibold font-serif text-gray-800 text-lg">Servi\xE7os realizados</span><span class="flex-1 break-words text-gray-600 md:text-right">', "</span></li>"], Ht = ["<li", '><span class="flex-1 font-semibold font-serif text-gray-800 text-lg">Local</span><span class="flex-1 text-gray-600 md:text-right">', "</span></li>"], Kt = ["<ul", ' class="flex flex-col"><!--$-->', "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></ul>"], Wt = ["<a", ' href="', '" class="border-b-2 border-b-transparent font-medium transition-all duration-300 ease-in-out hover:border-b-gray-900 hover:text-gray-900">', "</a>"], Ut = ["<li", '><span class="flex-1 font-semibold font-serif text-gray-800 text-lg">Data</span><span class="flex-1 text-gray-600 md:text-right">', "</span></li>"];
function qt({ local: e, date: t, services: n }) {
  return ssr(Kt, ssrHydrationKey(), escape(createComponent(Show, { when: n, get children() {
    return [ssr(Et, ssrHydrationKey() + ssrAttribute("class", escape(twMerge("flex flex-col px-1 pt-2 pb-4 md:flex-row md:items-center md:gap-2"), true), false), escape(createComponent(For, { each: n, children: (r, o) => [ssr(Wt, ssrHydrationKey(), `/servicos/${escape(r.slug, true)}`, escape(r.title)), o() < n.length - 1 && ","] }))), createComponent(N, {})];
  } })), escape(createComponent(Show, { when: e, get children() {
    return [ssr(Ht, ssrHydrationKey() + ssrAttribute("class", escape(twMerge("flex flex-col px-1 py-4 md:flex-row md:items-center md:gap-2"), true), false), escape(e)), createComponent(N, {})];
  } })), escape(createComponent(Show, { when: t, keyed: true, children: (r) => [ssr(Ut, ssrHydrationKey() + ssrAttribute("class", escape(twMerge("flex flex-col px-1 py-4 md:flex-row md:items-center md:gap-2"), true), false), escape(new Date(r).toLocaleDateString("pt-PT", { dateStyle: "long" }))), createComponent(N, {})] })));
}
var Ft = ["<section", ' class="flex items-center justify-center pt-12 pb-10 md:py-12"><section', '><section class="flex flex-col gap-6">', '</section><section class="order-first md:sticky md:top-10 md:right-0 md:order-last md:h-fit md:py-10"><h1>', "</h1><!--$-->", "<!--/--><!--$-->", "<!--/--><!--$-->", "<!--/--></section></section></section>"], Rt = ["<div", ">", "</div>"];
function an() {
  const e = We$1(), t = bc(() => Tc(e.slug), { name: `project-${e.slug}` });
  return createComponent(Show, { get when() {
    return t();
  }, keyed: true, children: (n) => ssr(Ft, ssrHydrationKey(), ssrAttribute("class", escape(m$1(["container relative grid grid-cols-1 gap-8", { "md:grid-cols-2 lg:grid-cols-[1fr_0.75fr]": !!n.gallery }]), true), false), escape(createComponent(For, { get each() {
    return n.gallery;
  }, children: (r) => createComponent(je, { get src() {
    return vr(r).url();
  }, get alt() {
    return r.alt;
  }, get blurHash() {
    return Or(r);
  }, get width() {
    var _a, _b;
    return (_b = (_a = r.asset.metadata) == null ? void 0 : _a.dimensions) == null ? void 0 : _b.width;
  }, get height() {
    var _a, _b;
    return (_b = (_a = r.asset.metadata) == null ? void 0 : _a.dimensions) == null ? void 0 : _b.height;
  }, classList: { image: "aspect-square", figure: "rounded-sm" } }) })), escape(n.title), escape(createComponent(Show, { get when() {
    return n.content;
  }, keyed: true, children: (r) => ssr(Rt, ssrHydrationKey() + ssrAttribute("class", escape(m$1(["relative my-4", "overflow-y-hidden", "transition duration-300 ease-in-out"]), true), false), escape(createComponent(Pt, { components: At, value: r }))) })), escape(createComponent(qt, { get local() {
    return n.local;
  }, get date() {
    return n.date;
  }, get services() {
    return n.services;
  } })), escape(createComponent(Show, { keyed: true, get when() {
    return n.showTestimonial;
  }, get children() {
    return createComponent(zt, { get slug() {
      return n.slug;
    } });
  } }))) });
}

export { an as default };
//# sourceMappingURL=_slug_2.mjs.map
