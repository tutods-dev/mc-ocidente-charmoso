const c = {
  context: void 0,
  registry: void 0,
  effects: void 0,
  done: !1,
  getContextId() {
    return be(this.context.count);
  },
  getNextContextId() {
    return be(this.context.count++);
  },
};
function be(e) {
  const t = String(e),
    n = t.length - 1;
  return c.context.id + (n ? String.fromCharCode(96 + n) : '') + t;
}
function I(e) {
  c.context = e;
}
function Ge() {
  return { ...c.context, id: c.getNextContextId(), count: 0 };
}
const Ue = (e, t) => e === t,
  ee = Symbol('solid-proxy'),
  Ke = Symbol('solid-track'),
  te = { equals: Ue };
let Y = null,
  $e = He;
const j = 1,
  X = 2,
  ve = { owned: null, cleanups: null, context: null, owner: null },
  le = {};
var g = null;
let a = null,
  Ye = null,
  y = null,
  k = null,
  C = null,
  ie = 0;
function U(e, t) {
  const n = y,
    s = g,
    i = e.length === 0,
    r = t === void 0 ? s : t,
    o = i ? ve : { owned: null, cleanups: null, context: r ? r.context : null, owner: r },
    l = i ? e : () => e(() => S(() => D(o)));
  (g = o), (y = null);
  try {
    return P(l, !0);
  } finally {
    (y = n), (g = s);
  }
}
function M(e, t) {
  t = t ? Object.assign({}, te, t) : te;
  const n = { value: e, observers: null, observerSlots: null, comparator: t.equals || void 0 },
    s = (i) => (
      typeof i == 'function' && (a && a.running && a.sources.has(n) ? (i = i(n.tValue)) : (i = i(n.value))), Ve(n, i)
    );
  return [Me.bind(n), s];
}
function pe(e, t, n) {
  const s = J(e, t, !0, j);
  K(s);
}
function F(e, t, n) {
  const s = J(e, t, !1, j);
  K(s);
}
function Le(e, t, n) {
  $e = tt;
  const s = J(e, t, !1, j),
    i = _ && we(_);
  i && (s.suspense = i), (!n || !n.render) && (s.user = !0), C ? C.push(s) : K(s);
}
function O(e, t, n) {
  n = n ? Object.assign({}, te, n) : te;
  const s = J(e, t, !0, 0);
  return (s.observers = null), (s.observerSlots = null), (s.comparator = n.equals || void 0), K(s), Me.bind(s);
}
function Xe(e) {
  return e && typeof e == 'object' && 'then' in e;
}
function We(e, t, n) {
  let s, i, r;
  (arguments.length === 2 && typeof t == 'object') || arguments.length === 1
    ? ((s = !0), (i = e), (r = t || {}))
    : ((s = e), (i = t), (r = n || {}));
  let o = null,
    l = le,
    f = null,
    h = !1,
    d = !1,
    u = 'initialValue' in r,
    m = typeof s == 'function' && O(s);
  const w = new Set(),
    [A, E] = (r.storage || M)(r.initialValue),
    [$, v] = M(void 0),
    [N, T] = M(void 0, { equals: !1 }),
    [L, V] = M(u ? 'ready' : 'unresolved');
  c.context &&
    ((f = c.getNextContextId()),
    r.ssrLoadFrom === 'initial' ? (l = r.initialValue) : c.load && c.has(f) && (l = c.load(f)));
  function H(b, p, x, q) {
    return (
      o === b &&
        ((o = null),
        q !== void 0 && (u = !0),
        (b === l || p === l) && r.onHydrated && queueMicrotask(() => r.onHydrated(q, { value: p })),
        (l = le),
        a && b && h
          ? (a.promises.delete(b),
            (h = !1),
            P(() => {
              (a.running = !0), me(p, x);
            }, !1))
          : me(p, x)),
      p
    );
  }
  function me(b, p) {
    P(() => {
      p === void 0 && E(() => b), V(p !== void 0 ? 'errored' : u ? 'ready' : 'unresolved'), v(p);
      for (const x of w.keys()) {
        x.decrement();
      }
      w.clear();
    }, !1);
  }
  function re() {
    const b = _ && we(_),
      p = A(),
      x = $();
    if (x !== void 0 && !o) {
      throw x;
    }
    return (
      y &&
        !y.user &&
        b &&
        pe(() => {
          N(), o && (b.resolved && a && h ? a.promises.add(o) : w.has(b) || (b.increment(), w.add(b)));
        }),
      p
    );
  }
  function oe(b = !0) {
    if (b !== !1 && d) {
      return;
    }
    d = !1;
    const p = m ? m() : s;
    if (((h = a && a.running), p == null || p === !1)) {
      H(o, S(A));
      return;
    }
    a && o && a.promises.delete(o);
    const x = l !== le ? l : S(() => i(p, { value: A(), refetching: b }));
    return Xe(x)
      ? ((o = x),
        'value' in x
          ? (x.status === 'success' ? H(o, x.value, void 0, p) : H(o, void 0, ce(x.value), p), x)
          : ((d = !0),
            queueMicrotask(() => (d = !1)),
            P(() => {
              V(u ? 'refreshing' : 'pending'), T();
            }, !1),
            x.then(
              (q) => H(x, q, void 0, p),
              (q) => H(x, void 0, ce(q), p),
            )))
      : (H(o, x, void 0, p), x);
  }
  return (
    Object.defineProperties(re, {
      state: { get: () => L() },
      error: { get: () => $() },
      loading: {
        get() {
          const b = L();
          return b === 'pending' || b === 'refreshing';
        },
      },
      latest: {
        get() {
          if (!u) {
            return re();
          }
          const b = $();
          if (b && !o) {
            throw b;
          }
          return A();
        },
      },
    }),
    m ? pe(() => oe(!1)) : oe(!1),
    [re, { refetch: oe, mutate: E }]
  );
}
function Mt(e) {
  return P(e, !1);
}
function S(e) {
  if (y === null) {
    return e();
  }
  const t = y;
  y = null;
  try {
    return e();
  } finally {
    y = t;
  }
}
function Vt(e, t, n) {
  const s = Array.isArray(e);
  let i,
    r = n && n.defer;
  return (o) => {
    let l;
    if (s) {
      l = Array(e.length);
      for (let h = 0; h < e.length; h++) {
        l[h] = e[h]();
      }
    } else {
      l = e();
    }
    if (r) {
      return (r = !1), o;
    }
    const f = S(() => t(l, i, o));
    return (i = l), f;
  };
}
function Ht(e) {
  Le(() => S(e));
}
function W(e) {
  return g === null || (g.cleanups === null ? (g.cleanups = [e]) : g.cleanups.push(e)), e;
}
function Qe(e, t) {
  Y || (Y = Symbol('error')),
    (g = J(void 0, void 0, !0)),
    (g.context = { ...g.context, [Y]: [t] }),
    a && a.running && a.sources.add(g);
  try {
    return e();
  } catch (n) {
    z(n);
  } finally {
    g = g.owner;
  }
}
function Dt() {
  return y;
}
function ue() {
  return g;
}
function Je(e, t) {
  const n = g,
    s = y;
  (g = e), (y = null);
  try {
    return P(t, !0);
  } catch (i) {
    z(i);
  } finally {
    (g = n), (y = s);
  }
}
function Ft(e) {
  if (a && a.running) {
    return e(), a.done;
  }
  const t = y,
    n = g;
  return Promise.resolve().then(() => {
    (y = t), (g = n);
    let s;
    return (
      _ &&
        ((s =
          a ||
          (a = {
            sources: new Set(),
            effects: [],
            promises: new Set(),
            disposed: new Set(),
            queue: new Set(),
            running: !0,
          })),
        s.done || (s.done = new Promise((i) => (s.resolve = i))),
        (s.running = !0)),
      P(e, !1),
      (y = g = null),
      s ? s.done : void 0
    );
  });
}
const [_t, xe] = M(!1);
function ze(e) {
  C.push.apply(C, e), (e.length = 0);
}
function je(e, t) {
  const n = Symbol('context');
  return { id: n, Provider: nt(n), defaultValue: e };
}
function we(e) {
  let t;
  return g && g.context && (t = g.context[e.id]) !== void 0 ? t : e.defaultValue;
}
function Ie(e) {
  const t = O(e),
    n = O(() => ae(t()));
  return (
    (n.toArray = () => {
      const s = n();
      return Array.isArray(s) ? s : s != null ? [s] : [];
    }),
    n
  );
}
let _;
function Ze() {
  return _ || (_ = je());
}
function Me() {
  const e = a && a.running;
  if (this.sources && (e ? this.tState : this.state)) {
    if ((e ? this.tState : this.state) === j) {
      K(this);
    } else {
      const t = k;
      (k = null), P(() => se(this), !1), (k = t);
    }
  }
  if (y) {
    const t = this.observers ? this.observers.length : 0;
    y.sources ? (y.sources.push(this), y.sourceSlots.push(t)) : ((y.sources = [this]), (y.sourceSlots = [t])),
      this.observers
        ? (this.observers.push(y), this.observerSlots.push(y.sources.length - 1))
        : ((this.observers = [y]), (this.observerSlots = [y.sources.length - 1]));
  }
  return e && a.sources.has(this) ? this.tValue : this.value;
}
function Ve(e, t, n) {
  const s = a && a.running && a.sources.has(e) ? e.tValue : e.value;
  if (!e.comparator || !e.comparator(s, t)) {
    if (a) {
      const i = a.running;
      (i || (!n && a.sources.has(e))) && (a.sources.add(e), (e.tValue = t)), i || (e.value = t);
    } else {
      e.value = t;
    }
    e.observers &&
      e.observers.length &&
      P(() => {
        for (let i = 0; i < e.observers.length; i += 1) {
          const r = e.observers[i],
            o = a && a.running;
          (o && a.disposed.has(r)) ||
            ((o ? !r.tState : !r.state) && (r.pure ? k.push(r) : C.push(r), r.observers && De(r)),
            o ? (r.tState = j) : (r.state = j));
        }
        if (k.length > 1e6) {
          throw ((k = []), new Error());
        }
      }, !1);
  }
  return t;
}
function K(e) {
  if (!e.fn) {
    return;
  }
  D(e);
  const t = ie;
  Se(e, a && a.running && a.sources.has(e) ? e.tValue : e.value, t),
    a &&
      !a.running &&
      a.sources.has(e) &&
      queueMicrotask(() => {
        P(() => {
          a && (a.running = !0), (y = g = e), Se(e, e.tValue, t), (y = g = null);
        }, !1);
      });
}
function Se(e, t, n) {
  let s;
  const i = g,
    r = y;
  y = g = e;
  try {
    s = e.fn(t);
  } catch (o) {
    return (
      e.pure &&
        (a && a.running
          ? ((e.tState = j), e.tOwned && e.tOwned.forEach(D), (e.tOwned = void 0))
          : ((e.state = j), e.owned && e.owned.forEach(D), (e.owned = null))),
      (e.updatedAt = n + 1),
      z(o)
    );
  } finally {
    (y = r), (g = i);
  }
  (!e.updatedAt || e.updatedAt <= n) &&
    (e.updatedAt != null && 'observers' in e
      ? Ve(e, s, !0)
      : a && a.running && e.pure
        ? (a.sources.add(e), (e.tValue = s))
        : (e.value = s),
    (e.updatedAt = n));
}
function J(e, t, n, s = j, i) {
  const r = {
    fn: e,
    state: s,
    updatedAt: null,
    owned: null,
    sources: null,
    sourceSlots: null,
    cleanups: null,
    value: t,
    owner: g,
    context: g ? g.context : null,
    pure: n,
  };
  return (
    a && a.running && ((r.state = 0), (r.tState = s)),
    g === null ||
      (g !== ve &&
        (a && a.running && g.pure
          ? g.tOwned
            ? g.tOwned.push(r)
            : (g.tOwned = [r])
          : g.owned
            ? g.owned.push(r)
            : (g.owned = [r]))),
    r
  );
}
function ne(e) {
  const t = a && a.running;
  if ((t ? e.tState : e.state) === 0) {
    return;
  }
  if ((t ? e.tState : e.state) === X) {
    return se(e);
  }
  if (e.suspense && S(e.suspense.inFallback)) {
    return e.suspense.effects.push(e);
  }
  const n = [e];
  while ((e = e.owner) && (!e.updatedAt || e.updatedAt < ie)) {
    if (t && a.disposed.has(e)) {
      return;
    }
    (t ? e.tState : e.state) && n.push(e);
  }
  for (let s = n.length - 1; s >= 0; s--) {
    if (((e = n[s]), t)) {
      let i = e,
        r = n[s + 1];
      while ((i = i.owner) && i !== r) {
        if (a.disposed.has(i)) {
          return;
        }
      }
    }
    if ((t ? e.tState : e.state) === j) {
      K(e);
    } else if ((t ? e.tState : e.state) === X) {
      const i = k;
      (k = null), P(() => se(e, n[0]), !1), (k = i);
    }
  }
}
function P(e, t) {
  if (k) {
    return e();
  }
  let n = !1;
  t || (k = []), C ? (n = !0) : (C = []), ie++;
  try {
    const s = e();
    return et(n), s;
  } catch (s) {
    n || (C = null), (k = null), z(s);
  }
}
function et(e) {
  if ((k && (He(k), (k = null)), e)) {
    return;
  }
  let t;
  if (a) {
    if (!a.promises.size && !a.queue.size) {
      const s = a.sources,
        i = a.disposed;
      C.push.apply(C, a.effects), (t = a.resolve);
      for (const r of C) {
        'tState' in r && (r.state = r.tState), delete r.tState;
      }
      (a = null),
        P(() => {
          for (const r of i) {
            D(r);
          }
          for (const r of s) {
            if (((r.value = r.tValue), r.owned)) {
              for (let o = 0, l = r.owned.length; o < l; o++) {
                D(r.owned[o]);
              }
            }
            r.tOwned && (r.owned = r.tOwned), delete r.tValue, delete r.tOwned, (r.tState = 0);
          }
          xe(!1);
        }, !1);
    } else if (a.running) {
      (a.running = !1), a.effects.push.apply(a.effects, C), (C = null), xe(!0);
      return;
    }
  }
  const n = C;
  (C = null), n.length && P(() => $e(n), !1), t && t();
}
function He(e) {
  for (let t = 0; t < e.length; t++) {
    ne(e[t]);
  }
}
function tt(e) {
  let t,
    n = 0;
  for (t = 0; t < e.length; t++) {
    const s = e[t];
    s.user ? (e[n++] = s) : ne(s);
  }
  if (c.context) {
    if (c.count) {
      c.effects || (c.effects = []), c.effects.push(...e.slice(0, n));
      return;
    }
    I();
  }
  for (
    c.effects && (c.done || !c.count) && ((e = [...c.effects, ...e]), (n += c.effects.length), delete c.effects), t = 0;
    t < n;
    t++
  ) {
    ne(e[t]);
  }
}
function se(e, t) {
  const n = a && a.running;
  n ? (e.tState = 0) : (e.state = 0);
  for (let s = 0; s < e.sources.length; s += 1) {
    const i = e.sources[s];
    if (i.sources) {
      const r = n ? i.tState : i.state;
      r === j ? i !== t && (!i.updatedAt || i.updatedAt < ie) && ne(i) : r === X && se(i, t);
    }
  }
}
function De(e) {
  const t = a && a.running;
  for (let n = 0; n < e.observers.length; n += 1) {
    const s = e.observers[n];
    (t ? !s.tState : !s.state) &&
      (t ? (s.tState = X) : (s.state = X), s.pure ? k.push(s) : C.push(s), s.observers && De(s));
  }
}
function D(e) {
  let t;
  if (e.sources) {
    while (e.sources.length) {
      const n = e.sources.pop(),
        s = e.sourceSlots.pop(),
        i = n.observers;
      if (i && i.length) {
        const r = i.pop(),
          o = n.observerSlots.pop();
        s < i.length && ((r.sourceSlots[o] = s), (i[s] = r), (n.observerSlots[s] = o));
      }
    }
  }
  if (a && a.running && e.pure) {
    if (e.tOwned) {
      for (t = e.tOwned.length - 1; t >= 0; t--) {
        D(e.tOwned[t]);
      }
      delete e.tOwned;
    }
    Fe(e, !0);
  } else if (e.owned) {
    for (t = e.owned.length - 1; t >= 0; t--) {
      D(e.owned[t]);
    }
    e.owned = null;
  }
  if (e.cleanups) {
    for (t = e.cleanups.length - 1; t >= 0; t--) {
      e.cleanups[t]();
    }
    e.cleanups = null;
  }
  a && a.running ? (e.tState = 0) : (e.state = 0);
}
function Fe(e, t) {
  if ((t || ((e.tState = 0), a.disposed.add(e)), e.owned)) {
    for (let n = 0; n < e.owned.length; n++) {
      Fe(e.owned[n]);
    }
  }
}
function ce(e) {
  return e instanceof Error ? e : new Error(typeof e == 'string' ? e : 'Unknown error', { cause: e });
}
function Ae(e, t, n) {
  try {
    for (const s of t) {
      s(e);
    }
  } catch (s) {
    z(s, (n && n.owner) || null);
  }
}
function z(e, t = g) {
  const n = Y && t && t.context && t.context[Y],
    s = ce(e);
  if (!n) {
    throw s;
  }
  C
    ? C.push({
        fn() {
          Ae(s, n, t);
        },
        state: j,
      })
    : Ae(s, n, t);
}
function ae(e) {
  if (typeof e == 'function' && !e.length) {
    return ae(e());
  }
  if (Array.isArray(e)) {
    const t = [];
    for (let n = 0; n < e.length; n++) {
      const s = ae(e[n]);
      Array.isArray(s) ? t.push.apply(t, s) : t.push(s);
    }
    return t;
  }
  return e;
}
function nt(e, t) {
  return (s) => {
    let i;
    return F(() => (i = S(() => ((g.context = { ...g.context, [e]: s.value }), Ie(() => s.children)))), void 0), i;
  };
}
const st = Symbol('fallback');
function Ce(e) {
  for (let t = 0; t < e.length; t++) {
    e[t]();
  }
}
function it(e, t, n = {}) {
  let s = [],
    i = [],
    r = [],
    o = 0,
    l = t.length > 1 ? [] : null;
  return (
    W(() => Ce(r)),
    () => {
      let f = e() || [],
        h = f.length,
        d,
        u;
      return (
        f[Ke],
        S(() => {
          let w, A, E, $, v, N, T, L, V;
          if (h === 0) {
            o !== 0 && (Ce(r), (r = []), (s = []), (i = []), (o = 0), l && (l = [])),
              n.fallback && ((s = [st]), (i[0] = U((H) => ((r[0] = H), n.fallback()))), (o = 1));
          } else if (o === 0) {
            for (i = new Array(h), u = 0; u < h; u++) {
              (s[u] = f[u]), (i[u] = U(m));
            }
            o = h;
          } else {
            for (
              E = new Array(h), $ = new Array(h), l && (v = new Array(h)), N = 0, T = Math.min(o, h);
              N < T && s[N] === f[N];
              N++
            ) {}
            for (T = o - 1, L = h - 1; T >= N && L >= N && s[T] === f[L]; T--, L--) {
              (E[L] = i[T]), ($[L] = r[T]), l && (v[L] = l[T]);
            }
            for (w = new Map(), A = new Array(L + 1), u = L; u >= N; u--) {
              (V = f[u]), (d = w.get(V)), (A[u] = d === void 0 ? -1 : d), w.set(V, u);
            }
            for (d = N; d <= T; d++) {
              (V = s[d]),
                (u = w.get(V)),
                u !== void 0 && u !== -1
                  ? ((E[u] = i[d]), ($[u] = r[d]), l && (v[u] = l[d]), (u = A[u]), w.set(V, u))
                  : r[d]();
            }
            for (u = N; u < h; u++) {
              u in E ? ((i[u] = E[u]), (r[u] = $[u]), l && ((l[u] = v[u]), l[u](u))) : (i[u] = U(m));
            }
            (i = i.slice(0, (o = h))), (s = f.slice(0));
          }
          return i;
        })
      );
      function m(w) {
        if (((r[u] = w), l)) {
          const [A, E] = M(u);
          return (l[u] = E), t(f[u], A);
        }
        return t(f[u]);
      }
    }
  );
}
let _e = !1;
function rt() {
  _e = !0;
}
function ot(e, t) {
  if (_e && c.context) {
    const n = c.context;
    I(Ge());
    const s = S(() => e(t || {}));
    return I(n), s;
  }
  return S(() => e(t || {}));
}
function Z() {
  return !0;
}
const de = {
  get(e, t, n) {
    return t === ee ? n : e.get(t);
  },
  has(e, t) {
    return t === ee ? !0 : e.has(t);
  },
  set: Z,
  deleteProperty: Z,
  getOwnPropertyDescriptor(e, t) {
    return {
      configurable: !0,
      enumerable: !0,
      get() {
        return e.get(t);
      },
      set: Z,
      deleteProperty: Z,
    };
  },
  ownKeys(e) {
    return e.keys();
  },
};
function fe(e) {
  return (e = typeof e == 'function' ? e() : e) ? e : {};
}
function lt() {
  for (let e = 0, t = this.length; e < t; ++e) {
    const n = this[e]();
    if (n !== void 0) {
      return n;
    }
  }
}
function Bt(...e) {
  let t = !1;
  for (let o = 0; o < e.length; o++) {
    const l = e[o];
    (t = t || (!!l && ee in l)), (e[o] = typeof l == 'function' ? ((t = !0), O(l)) : l);
  }
  if (t) {
    return new Proxy(
      {
        get(o) {
          for (let l = e.length - 1; l >= 0; l--) {
            const f = fe(e[l])[o];
            if (f !== void 0) {
              return f;
            }
          }
        },
        has(o) {
          for (let l = e.length - 1; l >= 0; l--) {
            if (o in fe(e[l])) {
              return !0;
            }
          }
          return !1;
        },
        keys() {
          const o = [];
          for (let l = 0; l < e.length; l++) {
            o.push(...Object.keys(fe(e[l])));
          }
          return [...new Set(o)];
        },
      },
      de,
    );
  }
  const n = {},
    s = Object.create(null);
  for (let o = e.length - 1; o >= 0; o--) {
    const l = e[o];
    if (!l) {
      continue;
    }
    const f = Object.getOwnPropertyNames(l);
    for (let h = f.length - 1; h >= 0; h--) {
      const d = f[h];
      if (d === '__proto__' || d === 'constructor') {
        continue;
      }
      const u = Object.getOwnPropertyDescriptor(l, d);
      if (!s[d]) {
        s[d] = u.get
          ? { enumerable: !0, configurable: !0, get: lt.bind((n[d] = [u.get.bind(l)])) }
          : u.value !== void 0
            ? u
            : void 0;
      } else {
        const m = n[d];
        m && (u.get ? m.push(u.get.bind(l)) : u.value !== void 0 && m.push(() => u.value));
      }
    }
  }
  const i = {},
    r = Object.keys(s);
  for (let o = r.length - 1; o >= 0; o--) {
    const l = r[o],
      f = s[l];
    f && f.get ? Object.defineProperty(i, l, f) : (i[l] = f ? f.value : void 0);
  }
  return i;
}
function ft(e, ...t) {
  if (ee in e) {
    const i = new Set(t.length > 1 ? t.flat() : t[0]),
      r = t.map(
        (o) =>
          new Proxy(
            {
              get(l) {
                return o.includes(l) ? e[l] : void 0;
              },
              has(l) {
                return o.includes(l) && l in e;
              },
              keys() {
                return o.filter((l) => l in e);
              },
            },
            de,
          ),
      );
    return (
      r.push(
        new Proxy(
          {
            get(o) {
              return i.has(o) ? void 0 : e[o];
            },
            has(o) {
              return i.has(o) ? !1 : o in e;
            },
            keys() {
              return Object.keys(e).filter((o) => !i.has(o));
            },
          },
          de,
        ),
      ),
      r
    );
  }
  const n = {},
    s = t.map(() => ({}));
  for (const i of Object.getOwnPropertyNames(e)) {
    const r = Object.getOwnPropertyDescriptor(e, i),
      o = !r.get && !r.set && r.enumerable && r.writable && r.configurable;
    let l = !1,
      f = 0;
    for (const h of t) {
      h.includes(i) && ((l = !0), o ? (s[f][i] = r.value) : Object.defineProperty(s[f], i, r)), ++f;
    }
    l || (o ? (n[i] = r.value) : Object.defineProperty(n, i, r));
  }
  return [...s, n];
}
function qt(e) {
  let t, n;
  const s = (i) => {
    const r = c.context;
    if (r) {
      const [l, f] = M();
      c.count || (c.count = 0),
        c.count++,
        (n || (n = e())).then((h) => {
          !c.done && I(r), c.count--, f(() => h.default), I();
        }),
        (t = l);
    } else if (!t) {
      const [l] = We(() => (n || (n = e())).then((f) => f.default));
      t = l;
    }
    let o;
    return O(() =>
      (o = t())
        ? S(() => {
            if (!r || c.done) {
              return o(i);
            }
            const l = c.context;
            I(r);
            const f = o(i);
            return I(l), f;
          })
        : '',
    );
  };
  return (s.preload = () => n || ((n = e()).then((i) => (t = () => i.default)), n)), s;
}
let ut = 0;
function Rt() {
  return c.context ? c.getNextContextId() : `cl-${ut++}`;
}
const Be = (e) => `Stale read from <${e}>.`;
function Gt(e) {
  const t = 'fallback' in e && { fallback: () => e.fallback };
  return O(it(() => e.each, e.children, t || void 0));
}
function Ut(e) {
  const t = e.keyed,
    n = O(() => e.when, void 0, { equals: (s, i) => (t ? s === i : !s == !i) });
  return O(
    () => {
      const s = n();
      if (s) {
        const i = e.children;
        return typeof i == 'function' && i.length > 0
          ? S(() =>
              i(
                t
                  ? s
                  : () => {
                      if (!S(n)) {
                        throw Be('Show');
                      }
                      return e.when;
                    },
              ),
            )
          : i;
      }
      return e.fallback;
    },
    void 0,
    void 0,
  );
}
function Kt(e) {
  let t = !1;
  const n = (r, o) => (t ? r[1] === o[1] : !r[1] == !o[1]) && r[2] === o[2],
    s = Ie(() => e.children),
    i = O(
      () => {
        let r = s();
        Array.isArray(r) || (r = [r]);
        for (let o = 0; o < r.length; o++) {
          const l = r[o].when;
          if (l) {
            return (t = !!r[o].keyed), [o, l, r[o]];
          }
        }
        return [-1];
      },
      void 0,
      { equals: n },
    );
  return O(
    () => {
      const [r, o, l] = i();
      if (r < 0) {
        return e.fallback;
      }
      const f = l.children;
      return typeof f == 'function' && f.length > 0
        ? S(() =>
            f(
              t
                ? o
                : () => {
                    if (S(i)[0] !== r) {
                      throw Be('Match');
                    }
                    return l.when;
                  },
            ),
          )
        : f;
    },
    void 0,
    void 0,
  );
}
function Yt(e) {
  return e;
}
let G;
function Xt() {
  G && [...G].forEach((e) => e());
}
function Wt(e) {
  let t;
  c.context && c.load && (t = c.load(c.getContextId()));
  const [n, s] = M(t, void 0);
  return (
    G || (G = new Set()),
    G.add(s),
    W(() => G.delete(s)),
    O(
      () => {
        let i;
        if ((i = n())) {
          const r = e.fallback;
          return typeof r == 'function' && r.length ? S(() => r(i, () => s())) : r;
        }
        return Qe(() => e.children, s);
      },
      void 0,
      void 0,
    )
  );
}
const ct = je();
function Qt(e) {
  let t = 0,
    n,
    s,
    i,
    r,
    o;
  const [l, f] = M(!1),
    h = Ze(),
    d = {
      increment: () => {
        ++t === 1 && f(!0);
      },
      decrement: () => {
        --t === 0 && f(!1);
      },
      inFallback: l,
      effects: [],
      resolved: !1,
    },
    u = ue();
  if (c.context && c.load) {
    const A = c.getContextId();
    const E = c.load(A);
    if ((E && (typeof E != 'object' || E.status !== 'success' ? (i = E) : c.gather(A)), i && i !== '$$f')) {
      const [$, v] = M(void 0, { equals: !1 });
      (r = $),
        i.then(
          () => {
            if (c.done) {
              return v();
            }
            c.gather(A), I(s), v(), I();
          },
          (N) => {
            (o = N), v();
          },
        );
    }
  }
  const m = we(ct);
  m && (n = m.register(d.inFallback));
  let w;
  return (
    W(() => w && w()),
    ot(h.Provider, {
      value: d,
      get children() {
        return O(() => {
          if (o) {
            throw o;
          }
          if (((s = c.context), r)) {
            return r(), (r = void 0);
          }
          s && i === '$$f' && I();
          const A = O(() => e.children);
          return O((E) => {
            const $ = d.inFallback(),
              { showContent: v = !0, showFallback: N = !0 } = n ? n() : {};
            if ((!$ || (i && i !== '$$f')) && v) {
              return (d.resolved = !0), w && w(), (w = s = i = void 0), ze(d.effects), A();
            }
            if (N) {
              return w ? E : U((T) => ((w = T), s && (I({ id: s.id + 'F', count: 0 }), (s = void 0)), e.fallback), u);
            }
          });
        });
      },
    })
  );
}
const at = [
    'allowfullscreen',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'disabled',
    'formnovalidate',
    'hidden',
    'indeterminate',
    'inert',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'seamless',
    'selected',
  ],
  dt = new Set(['className', 'value', 'readOnly', 'formNoValidate', 'isMap', 'noModule', 'playsInline', ...at]),
  ht = new Set(['innerHTML', 'textContent', 'innerText', 'children']),
  gt = Object.assign(Object.create(null), { className: 'class', htmlFor: 'for' }),
  yt = Object.assign(Object.create(null), {
    class: 'className',
    formnovalidate: { $: 'formNoValidate', BUTTON: 1, INPUT: 1 },
    ismap: { $: 'isMap', IMG: 1 },
    nomodule: { $: 'noModule', SCRIPT: 1 },
    playsinline: { $: 'playsInline', VIDEO: 1 },
    readonly: { $: 'readOnly', INPUT: 1, TEXTAREA: 1 },
  });
function wt(e, t) {
  const n = yt[e];
  return typeof n == 'object' ? (n[t] ? n.$ : void 0) : n;
}
const mt = new Set([
    'beforeinput',
    'click',
    'dblclick',
    'contextmenu',
    'focusin',
    'focusout',
    'input',
    'keydown',
    'keyup',
    'mousedown',
    'mousemove',
    'mouseout',
    'mouseover',
    'mouseup',
    'pointerdown',
    'pointermove',
    'pointerout',
    'pointerover',
    'pointerup',
    'touchend',
    'touchmove',
    'touchstart',
  ]),
  bt = new Set([
    'altGlyph',
    'altGlyphDef',
    'altGlyphItem',
    'animate',
    'animateColor',
    'animateMotion',
    'animateTransform',
    'circle',
    'clipPath',
    'color-profile',
    'cursor',
    'defs',
    'desc',
    'ellipse',
    'feBlend',
    'feColorMatrix',
    'feComponentTransfer',
    'feComposite',
    'feConvolveMatrix',
    'feDiffuseLighting',
    'feDisplacementMap',
    'feDistantLight',
    'feDropShadow',
    'feFlood',
    'feFuncA',
    'feFuncB',
    'feFuncG',
    'feFuncR',
    'feGaussianBlur',
    'feImage',
    'feMerge',
    'feMergeNode',
    'feMorphology',
    'feOffset',
    'fePointLight',
    'feSpecularLighting',
    'feSpotLight',
    'feTile',
    'feTurbulence',
    'filter',
    'font',
    'font-face',
    'font-face-format',
    'font-face-name',
    'font-face-src',
    'font-face-uri',
    'foreignObject',
    'g',
    'glyph',
    'glyphRef',
    'hkern',
    'image',
    'line',
    'linearGradient',
    'marker',
    'mask',
    'metadata',
    'missing-glyph',
    'mpath',
    'path',
    'pattern',
    'polygon',
    'polyline',
    'radialGradient',
    'rect',
    'set',
    'stop',
    'svg',
    'switch',
    'symbol',
    'text',
    'textPath',
    'tref',
    'tspan',
    'use',
    'view',
    'vkern',
  ]),
  pt = { xlink: 'http://www.w3.org/1999/xlink', xml: 'http://www.w3.org/XML/1998/namespace' };
function xt(e, t, n) {
  let s = n.length,
    i = t.length,
    r = s,
    o = 0,
    l = 0,
    f = t[i - 1].nextSibling,
    h = null;
  while (o < i || l < r) {
    if (t[o] === n[l]) {
      o++, l++;
      continue;
    }
    while (t[i - 1] === n[r - 1]) {
      i--, r--;
    }
    if (i === o) {
      const d = r < s ? (l ? n[l - 1].nextSibling : n[r - l]) : f;
      while (l < r) {
        e.insertBefore(n[l++], d);
      }
    } else if (r === l) {
      while (o < i) {
        (!h || !h.has(t[o])) && t[o].remove(), o++;
      }
    } else if (t[o] === n[r - 1] && n[l] === t[i - 1]) {
      const d = t[--i].nextSibling;
      e.insertBefore(n[l++], t[o++].nextSibling), e.insertBefore(n[--r], d), (t[i] = n[r]);
    } else {
      if (!h) {
        h = new Map();
        let u = l;
        while (u < r) {
          h.set(n[u], u++);
        }
      }
      const d = h.get(t[o]);
      if (d != null) {
        if (l < d && d < r) {
          let u = o,
            m = 1,
            w;
          while (++u < i && u < r && !((w = h.get(t[u])) == null || w !== d + m)) {
            m++;
          }
          if (m > d - l) {
            const A = t[o];
            while (l < d) {
              e.insertBefore(n[l++], A);
            }
          } else {
            e.replaceChild(n[l++], t[o++]);
          }
        } else {
          o++;
        }
      } else {
        t[o++].remove();
      }
    }
  }
}
const Ee = '_$DX_DELEGATE';
function Oe(e, t, n, s = {}) {
  let i;
  return (
    U((r) => {
      (i = r), t === document ? e() : ge(t, e(), t.firstChild ? null : void 0, n);
    }, s.owner),
    () => {
      i(), (t.textContent = '');
    }
  );
}
function Jt(e, t, n) {
  let s;
  const i = () => {
      const o = document.createElement('template');
      return (o.innerHTML = e), n ? o.content.firstChild.firstChild : o.content.firstChild;
    },
    r = t ? () => S(() => document.importNode(s || (s = i()), !0)) : () => (s || (s = i())).cloneNode(!0);
  return (r.cloneNode = r), r;
}
function St(e, t = window.document) {
  const n = t[Ee] || (t[Ee] = new Set());
  for (let s = 0, i = e.length; s < i; s++) {
    const r = e[s];
    n.has(r) || (n.add(r), t.addEventListener(r, qe));
  }
}
function he(e, t, n) {
  B(e) || (n == null ? e.removeAttribute(t) : e.setAttribute(t, n));
}
function At(e, t, n, s) {
  B(e) || (s == null ? e.removeAttributeNS(t, n) : e.setAttributeNS(t, n, s));
}
function Ct(e, t) {
  B(e) || (t == null ? e.removeAttribute('class') : (e.className = t));
}
function Et(e, t, n, s) {
  if (s) {
    Array.isArray(n) ? ((e[`$$${t}`] = n[0]), (e[`$$${t}Data`] = n[1])) : (e[`$$${t}`] = n);
  } else if (Array.isArray(n)) {
    const i = n[0];
    e.addEventListener(t, (n[0] = (r) => i.call(e, n[1], r)));
  } else {
    e.addEventListener(t, n);
  }
}
function Ot(e, t, n = {}) {
  const s = Object.keys(t || {}),
    i = Object.keys(n);
  let r, o;
  for (r = 0, o = i.length; r < o; r++) {
    const l = i[r];
    !l || l === 'undefined' || t[l] || (Ne(e, l, !1), delete n[l]);
  }
  for (r = 0, o = s.length; r < o; r++) {
    const l = s[r],
      f = !!t[l];
    !l || l === 'undefined' || n[l] === f || !f || (Ne(e, l, !0), (n[l] = f));
  }
  return n;
}
function Nt(e, t, n) {
  if (!t) {
    return n ? he(e, 'style') : t;
  }
  const s = e.style;
  if (typeof t == 'string') {
    return (s.cssText = t);
  }
  typeof n == 'string' && (s.cssText = n = void 0), n || (n = {}), t || (t = {});
  let i, r;
  for (r in n) {
    t[r] == null && s.removeProperty(r), delete n[r];
  }
  for (r in t) {
    (i = t[r]), i !== n[r] && (s.setProperty(r, i), (n[r] = i));
  }
  return n;
}
function kt(e, t = {}, n, s) {
  const i = {};
  return (
    s || F(() => (i.children = Q(e, t.children, i.children))),
    F(() => typeof t.ref == 'function' && Tt(t.ref, e)),
    F(() => Pt(e, t, n, !0, i, !0)),
    i
  );
}
function Tt(e, t, n) {
  return S(() => e(t, n));
}
function ge(e, t, n, s) {
  if ((n !== void 0 && !s && (s = []), typeof t != 'function')) {
    return Q(e, t, s, n);
  }
  F((i) => Q(e, t(), i, n), s);
}
function Pt(e, t, n, s, i = {}, r = !1) {
  t || (t = {});
  for (const o in i) {
    if (!(o in t)) {
      if (o === 'children') {
        continue;
      }
      i[o] = ke(e, o, null, i[o], n, r);
    }
  }
  for (const o in t) {
    if (o === 'children') {
      continue;
    }
    const l = t[o];
    i[o] = ke(e, o, l, i[o], n, r);
  }
}
function $t(e, t, n = {}) {
  if (globalThis._$HY.done) {
    return Oe(e, t, [...t.childNodes], n);
  }
  (c.completed = globalThis._$HY.completed),
    (c.events = globalThis._$HY.events),
    (c.load = (s) => globalThis._$HY.r[s]),
    (c.has = (s) => s in globalThis._$HY.r),
    (c.gather = (s) => Pe(t, s)),
    (c.registry = new Map()),
    (c.context = { id: n.renderId || '', count: 0 });
  try {
    return Pe(t, n.renderId), Oe(e, t, [...t.childNodes], n);
  } finally {
    c.context = null;
  }
}
function vt(e) {
  let t, n;
  return !B() || !(t = c.registry.get((n = jt()))) ? e() : (c.completed && c.completed.add(t), c.registry.delete(n), t);
}
function zt(e) {
  let t = e,
    n = 0,
    s = [];
  if (B(e)) {
    while (t) {
      if (t.nodeType === 8) {
        const i = t.nodeValue;
        if (i === '$') {
          n++;
        } else if (i === '/') {
          if (n === 0) {
            return [t, s];
          }
          n--;
        }
      }
      s.push(t), (t = t.nextSibling);
    }
  }
  return [t, s];
}
function Zt() {
  c.events &&
    !c.events.queued &&
    (queueMicrotask(() => {
      const { completed: e, events: t } = c;
      for (t.queued = !1; t.length; ) {
        const [n, s] = t[0];
        if (!e.has(n)) {
          return;
        }
        t.shift(), qe(s);
      }
      c.done && ((c.events = _$HY.events = null), (c.completed = _$HY.completed = null));
    }),
    (c.events.queued = !0));
}
function B(e) {
  return !!c.context && !c.done && (!e || e.isConnected);
}
function Lt(e) {
  return e.toLowerCase().replace(/-([a-z])/g, (t, n) => n.toUpperCase());
}
function Ne(e, t, n) {
  const s = t.trim().split(/\s+/);
  for (let i = 0, r = s.length; i < r; i++) {
    e.classList.toggle(s[i], n);
  }
}
function ke(e, t, n, s, i, r) {
  let o, l, f, h, d;
  if (t === 'style') {
    return Nt(e, n, s);
  }
  if (t === 'classList') {
    return Ot(e, n, s);
  }
  if (n === s) {
    return s;
  }
  if (t === 'ref') {
    r || n(e);
  } else if (t.slice(0, 3) === 'on:') {
    const u = t.slice(3);
    s && e.removeEventListener(u, s), n && e.addEventListener(u, n);
  } else if (t.slice(0, 10) === 'oncapture:') {
    const u = t.slice(10);
    s && e.removeEventListener(u, s, !0), n && e.addEventListener(u, n, !0);
  } else if (t.slice(0, 2) === 'on') {
    const u = t.slice(2).toLowerCase(),
      m = mt.has(u);
    if (!m && s) {
      const w = Array.isArray(s) ? s[0] : s;
      e.removeEventListener(u, w);
    }
    (m || n) && (Et(e, u, n, m), m && St([u]));
  } else if (t.slice(0, 5) === 'attr:') {
    he(e, t.slice(5), n);
  } else if (
    (d = t.slice(0, 5) === 'prop:') ||
    (f = ht.has(t)) ||
    (!i && ((h = wt(t, e.tagName)) || (l = dt.has(t)))) ||
    (o = e.nodeName.includes('-'))
  ) {
    if (d) {
      (t = t.slice(5)), (l = !0);
    } else if (B(e)) {
      return n;
    }
    t === 'class' || t === 'className' ? Ct(e, n) : o && !l && !f ? (e[Lt(t)] = n) : (e[h || t] = n);
  } else {
    const u = i && t.indexOf(':') > -1 && pt[t.split(':')[0]];
    u ? At(e, u, t, n) : he(e, gt[t] || t, n);
  }
  return n;
}
function qe(e) {
  if (c.registry && c.events && c.events.find(([s, i]) => i === e)) {
    return;
  }
  const t = `$$${e.type}`;
  let n = (e.composedPath && e.composedPath()[0]) || e.target;
  for (
    e.target !== n && Object.defineProperty(e, 'target', { configurable: !0, value: n }),
      Object.defineProperty(e, 'currentTarget', {
        configurable: !0,
        get() {
          return n || document;
        },
      }),
      c.registry && !c.done && (c.done = _$HY.done = !0);
    n;
  ) {
    const s = n[t];
    if (s && !n.disabled) {
      const i = n[`${t}Data`];
      if ((i !== void 0 ? s.call(n, i, e) : s.call(n, e), e.cancelBubble)) {
        return;
      }
    }
    n = n._$host || n.parentNode || n.host;
  }
}
function Q(e, t, n, s, i) {
  const r = B(e);
  if (r) {
    !n && (n = [...e.childNodes]);
    const f = [];
    for (let h = 0; h < n.length; h++) {
      const d = n[h];
      d.nodeType === 8 && d.data.slice(0, 2) === '!$' ? d.remove() : f.push(d);
    }
    n = f;
  }
  while (typeof n == 'function') {
    n = n();
  }
  if (t === n) {
    return n;
  }
  const o = typeof t,
    l = s !== void 0;
  if (((e = (l && n[0] && n[0].parentNode) || e), o === 'string' || o === 'number')) {
    if (r || (o === 'number' && ((t = t.toString()), t === n))) {
      return n;
    }
    if (l) {
      let f = n[0];
      f && f.nodeType === 3 ? f.data !== t && (f.data = t) : (f = document.createTextNode(t)), (n = R(e, n, s, f));
    } else {
      n !== '' && typeof n == 'string' ? (n = e.firstChild.data = t) : (n = e.textContent = t);
    }
  } else if (t == null || o === 'boolean') {
    if (r) {
      return n;
    }
    n = R(e, n, s);
  } else {
    if (o === 'function') {
      return (
        F(() => {
          let f = t();
          while (typeof f == 'function') {
            f = f();
          }
          n = Q(e, f, n, s);
        }),
        () => n
      );
    }
    if (Array.isArray(t)) {
      const f = [],
        h = n && Array.isArray(n);
      if (ye(f, t, n, i)) {
        return F(() => (n = Q(e, f, n, s, !0))), () => n;
      }
      if (r) {
        if (!f.length) {
          return n;
        }
        if (s === void 0) {
          return (n = [...e.childNodes]);
        }
        let d = f[0];
        if (d.parentNode !== e) {
          return n;
        }
        const u = [d];
        while ((d = d.nextSibling) !== s) {
          u.push(d);
        }
        return (n = u);
      }
      if (f.length === 0) {
        if (((n = R(e, n, s)), l)) {
          return n;
        }
      } else {
        h ? (n.length === 0 ? Te(e, f, s) : xt(e, n, f)) : (n && R(e), Te(e, f));
      }
      n = f;
    } else if (t.nodeType) {
      if (r && t.parentNode) {
        return (n = l ? [t] : t);
      }
      if (Array.isArray(n)) {
        if (l) {
          return (n = R(e, n, s, t));
        }
        R(e, n, null, t);
      } else {
        n == null || n === '' || !e.firstChild ? e.appendChild(t) : e.replaceChild(t, e.firstChild);
      }
      n = t;
    }
  }
  return n;
}
function ye(e, t, n, s) {
  let i = !1;
  for (let r = 0, o = t.length; r < o; r++) {
    let l = t[r],
      f = n && n[e.length],
      h;
    if (!(l == null || l === !0 || l === !1)) {
      if ((h = typeof l) == 'object' && l.nodeType) {
        e.push(l);
      } else if (Array.isArray(l)) {
        i = ye(e, l, f) || i;
      } else if (h === 'function') {
        if (s) {
          while (typeof l == 'function') {
            l = l();
          }
          i = ye(e, Array.isArray(l) ? l : [l], Array.isArray(f) ? f : [f]) || i;
        } else {
          e.push(l), (i = !0);
        }
      } else {
        const d = String(l);
        f && f.nodeType === 3 && f.data === d ? e.push(f) : e.push(document.createTextNode(d));
      }
    }
  }
  return i;
}
function Te(e, t, n = null) {
  for (let s = 0, i = t.length; s < i; s++) {
    e.insertBefore(t[s], n);
  }
}
function R(e, t, n, s) {
  if (n === void 0) {
    return (e.textContent = '');
  }
  const i = s || document.createTextNode('');
  if (t.length) {
    let r = !1;
    for (let o = t.length - 1; o >= 0; o--) {
      const l = t[o];
      if (i !== l) {
        const f = l.parentNode === e;
        !r && !o ? (f ? e.replaceChild(i, l) : e.insertBefore(i, n)) : f && l.remove();
      } else {
        r = !0;
      }
    }
  } else {
    e.insertBefore(i, n);
  }
  return [i];
}
function Pe(e, t) {
  const n = e.querySelectorAll('*[data-hk]');
  for (let s = 0; s < n.length; s++) {
    const i = n[s],
      r = i.getAttribute('data-hk');
    (!t || r.startsWith(t)) && !c.registry.has(r) && c.registry.set(r, i);
  }
}
function jt() {
  return c.getNextContextId();
}
const en = () => {},
  tn = !1,
  It = 'http://www.w3.org/2000/svg';
function Re(e, t = !1) {
  return t ? document.createElementNS(It, e) : document.createElement(e);
}
const nn = (...e) => (rt(), $t(...e));
function sn(e) {
  const { useShadow: t } = e,
    n = document.createTextNode(''),
    s = () => e.mount || document.body,
    i = ue();
  let r,
    o = !!c.context;
  return (
    Le(
      () => {
        o && (ue().user = o = !1), r || (r = Je(i, () => O(() => e.children)));
        const l = s();
        if (l instanceof HTMLHeadElement) {
          const [f, h] = M(!1),
            d = () => h(!0);
          U((u) => ge(l, () => (f() ? u() : r()), null)), W(d);
        } else {
          const f = Re(e.isSVG ? 'g' : 'div', e.isSVG),
            h = t && f.attachShadow ? f.attachShadow({ mode: 'open' }) : f;
          Object.defineProperty(f, '_$host', {
            get() {
              return n.parentNode;
            },
            configurable: !0,
          }),
            ge(h, r),
            l.appendChild(f),
            e.ref && e.ref(f),
            W(() => l.removeChild(f));
        }
      },
      void 0,
      { render: !o },
    ),
    n
  );
}
function rn(e) {
  const [t, n] = ft(e, ['component']),
    s = O(() => t.component);
  return O(() => {
    const i = s();
    switch (typeof i) {
      case 'function':
        return S(() => i(n));
      case 'string':
        const r = bt.has(i),
          o = c.context ? vt() : Re(i, r);
        return kt(o, n, r), o;
    }
  });
}
export {
  ee as $,
  Ct as A,
  he as B,
  Kt as C,
  nn as D,
  Wt as E,
  Gt as F,
  Ke as G,
  ft as H,
  Rt as I,
  je as J,
  we as K,
  pe as L,
  Yt as M,
  rn as N,
  Nt as O,
  tn as P,
  Ft as Q,
  We as R,
  Ut as S,
  sn as T,
  Xt as U,
  en as V,
  O as a,
  ot as b,
  Ie as c,
  U as d,
  M as e,
  W as f,
  ue as g,
  St as h,
  vt as i,
  kt as j,
  ge as k,
  qt as l,
  Bt as m,
  Le as n,
  Vt as o,
  F as p,
  Ht as q,
  Zt as r,
  c as s,
  Jt as t,
  S as u,
  Mt as v,
  Dt as w,
  Je as x,
  zt as y,
  Qt as z,
};
