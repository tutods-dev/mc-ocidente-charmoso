import {
  j as Ct,
  h as Er,
  B as Fr,
  q as Ie,
  e as Ir,
  r as Nr,
  b as O,
  o as Or,
  p as Pr,
  l as Qe,
  _ as Vr,
  P as Ye,
  s as Zr,
  m as de,
  k as er,
  d as jt,
  n as tr,
} from './styles-CtYowtZs.js';
import {
  v as $r,
  a as Ce,
  m as F,
  F as Gt,
  S as H,
  L as Ht,
  C as Jt,
  t as K,
  o as Kt,
  H as L,
  k as P,
  A as Qt,
  G as Rt,
  n as Te,
  I as Ut,
  K as Wt,
  p as Xt,
  q as Yt,
  w as gt,
  $ as he,
  y as j,
  f as le,
  J as qt,
  M as rt,
  e as ue,
  b as y,
  i as z,
} from './web-Cw_Dym33.js';
import './index-Cf71NSVw.js';
import { b as Rr, u as jr } from './action-BKws-HQi.js';
import { c as Je } from './utils-dZO239yP.js';
import './routing-VhRhlrWH.js';
const vt = Symbol('store-raw'),
  be = Symbol('store-node'),
  Q = Symbol('store-has'),
  rr = Symbol('store-self');
function sr(r) {
  let e = r[he];
  if (!e && (Object.defineProperty(r, he, { value: (e = new Proxy(r, Lr)) }), !Array.isArray(r))) {
    const t = Object.keys(r),
      s = Object.getOwnPropertyDescriptors(r);
    for (let n = 0, a = t.length; n < a; n++) {
      const i = t[n];
      s[i].get && Object.defineProperty(r, i, { enumerable: s[i].enumerable, get: s[i].get.bind(e) });
    }
  }
  return e;
}
function se(r) {
  let e;
  return (
    r != null &&
    typeof r == 'object' &&
    (r[he] || !(e = Object.getPrototypeOf(r)) || e === Object.prototype || Array.isArray(r))
  );
}
function we(r, e = new Set()) {
  let t, s, n, a;
  if ((t = r != null && r[vt])) {
    return t;
  }
  if (!se(r) || e.has(r)) {
    return r;
  }
  if (Array.isArray(r)) {
    Object.isFrozen(r) ? (r = r.slice(0)) : e.add(r);
    for (let i = 0, o = r.length; i < o; i++) {
      (n = r[i]), (s = we(n, e)) !== n && (r[i] = s);
    }
  } else {
    Object.isFrozen(r) ? (r = Object.assign({}, r)) : e.add(r);
    const i = Object.keys(r),
      o = Object.getOwnPropertyDescriptors(r);
    for (let d = 0, l = i.length; d < l; d++) {
      (a = i[d]), !o[a].get && ((n = r[a]), (s = we(n, e)) !== n && (r[a] = s));
    }
  }
  return r;
}
function st(r, e) {
  let t = r[e];
  return t || Object.defineProperty(r, e, { value: (t = Object.create(null)) }), t;
}
function Pe(r, e, t) {
  if (r[e]) {
    return r[e];
  }
  const [s, n] = ue(t, { equals: !1, internal: !0 });
  return (s.$ = n), (r[e] = s);
}
function Dr(r, e) {
  const t = Reflect.getOwnPropertyDescriptor(r, e);
  return (
    !t ||
      t.get ||
      !t.configurable ||
      e === he ||
      e === be ||
      (delete t.value, delete t.writable, (t.get = () => r[he][e])),
    t
  );
}
function nr(r) {
  gt() && Pe(st(r, be), rr)();
}
function Br(r) {
  return nr(r), Reflect.ownKeys(r);
}
const Lr = {
  get(r, e, t) {
    if (e === vt) {
      return r;
    }
    if (e === he) {
      return t;
    }
    if (e === Rt) {
      return nr(r), t;
    }
    const s = st(r, be),
      n = s[e];
    let a = n ? n() : r[e];
    if (e === be || e === Q || e === '__proto__') {
      return a;
    }
    if (!n) {
      const i = Object.getOwnPropertyDescriptor(r, e);
      gt() && (typeof a != 'function' || r.hasOwnProperty(e)) && !(i && i.get) && (a = Pe(s, e, a)());
    }
    return se(a) ? sr(a) : a;
  },
  has(r, e) {
    return e === vt || e === he || e === Rt || e === be || e === Q || e === '__proto__'
      ? !0
      : (gt() && Pe(st(r, Q), e)(), e in r);
  },
  set() {
    return !0;
  },
  deleteProperty() {
    return !0;
  },
  ownKeys: Br,
  getOwnPropertyDescriptor: Dr,
};
function B(r, e, t, s = !1) {
  if (!s && r[e] === t) {
    return;
  }
  const n = r[e],
    a = r.length;
  t === void 0
    ? (delete r[e], r[Q] && r[Q][e] && n !== void 0 && r[Q][e].$())
    : ((r[e] = t), r[Q] && r[Q][e] && n === void 0 && r[Q][e].$());
  let i = st(r, be),
    o;
  if (((o = Pe(i, e, n)) && o.$(() => t), Array.isArray(r) && r.length !== a)) {
    for (let d = r.length; d < a; d++) {
      (o = i[d]) && o.$();
    }
    (o = Pe(i, 'length', a)) && o.$(r.length);
  }
  (o = i[rr]) && o.$();
}
function ar(r, e) {
  const t = Object.keys(e);
  for (let s = 0; s < t.length; s += 1) {
    const n = t[s];
    B(r, n, e[n]);
  }
}
function zr(r, e) {
  if ((typeof e == 'function' && (e = e(r)), (e = we(e)), Array.isArray(e))) {
    if (r === e) {
      return;
    }
    let t = 0,
      s = e.length;
    for (; t < s; t++) {
      const n = e[t];
      r[t] !== n && B(r, t, n);
    }
    B(r, 'length', s);
  } else {
    ar(r, e);
  }
}
function Ee(r, e, t = []) {
  let s,
    n = r;
  if (e.length > 1) {
    s = e.shift();
    const i = typeof s,
      o = Array.isArray(r);
    if (Array.isArray(s)) {
      for (let d = 0; d < s.length; d++) {
        Ee(r, [s[d]].concat(e), t);
      }
      return;
    } else if (o && i === 'function') {
      for (let d = 0; d < r.length; d++) {
        s(r[d], d) && Ee(r, [d].concat(e), t);
      }
      return;
    } else if (o && i === 'object') {
      const { from: d = 0, to: l = r.length - 1, by: c = 1 } = s;
      for (let h = d; h <= l; h += c) {
        Ee(r, [h].concat(e), t);
      }
      return;
    } else if (e.length > 1) {
      Ee(r[s], e, [s].concat(t));
      return;
    }
    (n = r[s]), (t = [s].concat(t));
  }
  let a = e[0];
  (typeof a == 'function' && ((a = a(n, t)), a === n)) ||
    (s === void 0 && a == null) ||
    ((a = we(a)), s === void 0 || (se(n) && se(a) && !Array.isArray(a)) ? ar(n, a) : B(r, s, a));
}
function Ur(...[r, e]) {
  const t = we(r || {}),
    s = Array.isArray(t),
    n = sr(t);
  function a(...i) {
    $r(() => {
      s && i.length === 1 ? zr(t, i[0]) : Ee(t, i);
    });
  }
  return [n, a];
}
const yt = Symbol('store-root');
function ve(r, e, t, s, n) {
  const a = e[t];
  if (r === a) {
    return;
  }
  const i = Array.isArray(r);
  if (t !== yt && (!se(r) || !se(a) || i !== Array.isArray(a) || (n && r[n] !== a[n]))) {
    B(e, t, r);
    return;
  }
  if (i) {
    if (r.length && a.length && (!s || (n && r[0] && r[0][n] != null))) {
      let l, c, h, f, g, w, $, E;
      for (
        h = 0, f = Math.min(a.length, r.length);
        h < f && (a[h] === r[h] || (n && a[h] && r[h] && a[h][n] === r[h][n]));
        h++
      ) {
        ve(r[h], a, h, s, n);
      }
      const C = new Array(r.length),
        A = new Map();
      for (
        f = a.length - 1, g = r.length - 1;
        f >= h && g >= h && (a[f] === r[g] || (n && a[h] && r[h] && a[f][n] === r[g][n]));
        f--, g--
      ) {
        C[g] = a[f];
      }
      if (h > g || h > f) {
        for (c = h; c <= g; c++) {
          B(a, c, r[c]);
        }
        for (; c < r.length; c++) {
          B(a, c, C[c]), ve(r[c], a, c, s, n);
        }
        a.length > r.length && B(a, 'length', r.length);
        return;
      }
      for ($ = new Array(g + 1), c = g; c >= h; c--) {
        (w = r[c]), (E = n && w ? w[n] : w), (l = A.get(E)), ($[c] = l === void 0 ? -1 : l), A.set(E, c);
      }
      for (l = h; l <= f; l++) {
        (w = a[l]),
          (E = n && w ? w[n] : w),
          (c = A.get(E)),
          c !== void 0 && c !== -1 && ((C[c] = a[l]), (c = $[c]), A.set(E, c));
      }
      for (c = h; c < r.length; c++) {
        c in C ? (B(a, c, C[c]), ve(r[c], a, c, s, n)) : B(a, c, r[c]);
      }
    } else {
      for (let l = 0, c = r.length; l < c; l++) {
        ve(r[l], a, l, s, n);
      }
    }
    a.length > r.length && B(a, 'length', r.length);
    return;
  }
  const o = Object.keys(r);
  for (let l = 0, c = o.length; l < c; l++) {
    ve(r[o[l]], a, o[l], s, n);
  }
  const d = Object.keys(a);
  for (let l = 0, c = d.length; l < c; l++) {
    r[d[l]] === void 0 && B(a, d[l], void 0);
  }
}
function qr(r, e = {}) {
  const { merge: t, key: s = 'id' } = e,
    n = we(r);
  return (a) => {
    if (!se(a) || !se(n)) {
      return n;
    }
    const i = ve(n, { [yt]: a }, yt, t, s);
    return i === void 0 ? a : i;
  };
}
var Wr = ['id', 'name', 'validationState', 'required', 'disabled', 'readOnly'];
function Kr(r) {
  const e = `form-control-${Ut()}`,
    t = de({ id: e }, r),
    [s, n] = ue(),
    [a, i] = ue(),
    [o, d] = ue(),
    [l, c] = ue(),
    h = ($, E, C) => {
      const A = C != null || s() != null;
      return [C, s(), A && E != null ? $ : void 0].filter(Boolean).join(' ') || void 0;
    },
    f = ($) => [o(), l(), $].filter(Boolean).join(' ') || void 0,
    g = Ce(() => ({
      'data-valid': O(t.validationState) === 'valid' ? '' : void 0,
      'data-invalid': O(t.validationState) === 'invalid' ? '' : void 0,
      'data-required': O(t.required) ? '' : void 0,
      'data-disabled': O(t.disabled) ? '' : void 0,
      'data-readonly': O(t.readOnly) ? '' : void 0,
    }));
  return {
    formControlContext: {
      name: () => O(t.name) ?? O(t.id),
      dataset: g,
      validationState: () => O(t.validationState),
      isRequired: () => O(t.required),
      isDisabled: () => O(t.disabled),
      isReadOnly: () => O(t.readOnly),
      labelId: s,
      fieldId: a,
      descriptionId: o,
      errorMessageId: l,
      getAriaLabelledBy: h,
      getAriaDescribedBy: f,
      generateId: er(() => O(t.id)),
      registerLabel: Qe(n),
      registerField: Qe(i),
      registerDescription: Qe(d),
      registerErrorMessage: Qe(c),
    },
  };
}
var ir = qt();
function Ge() {
  const r = Wt(ir);
  if (r === void 0) {
    throw new Error('[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component');
  }
  return r;
}
function At(r) {
  const e = Ge(),
    t = de({ id: e.generateId('description') }, r);
  return (
    Te(() => le(e.registerDescription(t.id))),
    y(
      Ye,
      F({ as: 'div' }, () => e.dataset(), t),
    )
  );
}
function $t(r) {
  const e = Ge(),
    t = de({ id: e.generateId('error-message') }, r),
    [s, n] = L(t, ['forceMount']),
    a = () => e.validationState() === 'invalid';
  return (
    Te(() => {
      a() && le(e.registerErrorMessage(n.id));
    }),
    y(H, {
      get when() {
        return s.forceMount || a();
      },
      get children() {
        return y(
          Ye,
          F({ as: 'div' }, () => e.dataset(), n),
        );
      },
    })
  );
}
function Et(r) {
  let e;
  const t = Ge(),
    s = de({ id: t.generateId('label') }, r),
    [n, a] = L(s, ['ref']),
    i = Er(
      () => e,
      () => 'label',
    );
  return (
    Te(() => le(t.registerLabel(a.id))),
    y(
      Ye,
      F(
        {
          as: 'label',
          ref(o) {
            var d = Ct((l) => (e = l), n.ref);
            typeof d == 'function' && d(o);
          },
          get for() {
            return Ce(() => i() === 'label')() ? t.fieldId() : void 0;
          },
        },
        () => t.dataset(),
        a,
      ),
    )
  );
}
var Hr = ['id', 'aria-label', 'aria-labelledby', 'aria-describedby'];
function Yr(r) {
  const e = Ge(),
    t = de({ id: e.generateId('field') }, r);
  return (
    Te(() => le(e.registerField(O(t.id)))),
    {
      fieldProps: {
        id: () => O(t.id),
        ariaLabel: () => O(t['aria-label']),
        ariaLabelledBy: () => e.getAriaLabelledBy(O(t.id), O(t['aria-label']), O(t['aria-labelledby'])),
        ariaDescribedBy: () => e.getAriaDescribedBy(O(t['aria-describedby'])),
      },
    }
  );
}
function Jr(r, e) {
  Te(
    Kt(r, (t) => {
      if (t == null) {
        return;
      }
      const s = Gr(t);
      s != null &&
        (s.addEventListener('reset', e, { passive: !0 }),
        le(() => {
          s.removeEventListener('reset', e);
        }));
    }),
  );
}
function Gr(r) {
  return Xr(r) ? r.form : r.closest('form');
}
function Xr(r) {
  return r.matches('textarea, input, select, button');
}
var Qr = {};
Vr(Qr, {
  Description: () => At,
  ErrorMessage: () => $t,
  Input: () => Vt,
  Label: () => Et,
  Root: () => Ot,
  TextArea: () => It,
  TextField: () => ts,
});
var or = qt();
function lr() {
  const r = Wt(or);
  if (r === void 0) {
    throw new Error('[kobalte]: `useTextFieldContext` must be used within a `TextField` component');
  }
  return r;
}
function Vt(r) {
  return y(dr, F({ type: 'text' }, r));
}
function dr(r) {
  const e = Ge(),
    t = lr(),
    s = de({ id: t.generateId('input') }, r),
    [n, a, i] = L(s, ['onInput'], Hr),
    { fieldProps: o } = Yr(a);
  return y(
    Ye,
    F(
      {
        as: 'input',
        get id() {
          return o.id();
        },
        get name() {
          return e.name();
        },
        get value() {
          return t.value();
        },
        get required() {
          return e.isRequired();
        },
        get disabled() {
          return e.isDisabled();
        },
        get readonly() {
          return e.isReadOnly();
        },
        get 'aria-label'() {
          return o.ariaLabel();
        },
        get 'aria-labelledby'() {
          return o.ariaLabelledBy();
        },
        get 'aria-describedby'() {
          return o.ariaDescribedBy();
        },
        get 'aria-invalid'() {
          return e.validationState() === 'invalid' || void 0;
        },
        get 'aria-required'() {
          return e.isRequired() || void 0;
        },
        get 'aria-disabled'() {
          return e.isDisabled() || void 0;
        },
        get 'aria-readonly'() {
          return e.isReadOnly() || void 0;
        },
        get onInput() {
          return tr([n.onInput, t.onInput]);
        },
      },
      () => e.dataset(),
      i,
    ),
  );
}
function Ot(r) {
  let e;
  const t = `textfield-${Ut()}`,
    s = de({ id: t }, r),
    [n, a, i] = L(s, ['ref', 'value', 'defaultValue', 'onChange'], Wr),
    o = n.value,
    [d, l] = Or({
      value: () => (o === void 0 ? void 0 : (n.value ?? '')),
      defaultValue: () => n.defaultValue,
      onChange: (g) => n.onChange?.(g),
    }),
    { formControlContext: c } = Kr(a);
  Jr(
    () => e,
    () => l(n.defaultValue ?? ''),
  );
  const h = (g) => {
      if (c.isReadOnly() || c.isDisabled()) {
        return;
      }
      const w = g.target;
      l(w.value), (w.value = d() ?? '');
    },
    f = { value: d, generateId: er(() => O(a.id)), onInput: h };
  return y(ir.Provider, {
    value: c,
    get children() {
      return y(or.Provider, {
        value: f,
        get children() {
          return y(
            Ye,
            F(
              {
                as: 'div',
                ref(g) {
                  var w = Ct(($) => (e = $), n.ref);
                  typeof w == 'function' && w(g);
                },
                role: 'group',
                get id() {
                  return O(a.id);
                },
              },
              () => c.dataset(),
              i,
            ),
          );
        },
      });
    },
  });
}
function It(r) {
  let e;
  const t = lr(),
    s = de({ id: t.generateId('textarea') }, r),
    [n, a] = L(s, ['ref', 'autoResize', 'submitOnEnter', 'onKeyPress']);
  Te(
    Kt([() => e, () => n.autoResize, () => t.value()], ([o, d]) => {
      !o || !d || es(o);
    }),
  );
  const i = (o) => {
    e && n.submitOnEnter && o.key === 'Enter' && !o.shiftKey && e.form && (e.form.requestSubmit(), o.preventDefault());
  };
  return y(
    dr,
    F(
      {
        as: 'textarea',
        get 'aria-multiline'() {
          return n.submitOnEnter ? 'false' : void 0;
        },
        get onKeyPress() {
          return tr([n.onKeyPress, i]);
        },
        ref(o) {
          var d = Ct((l) => (e = l), n.ref);
          typeof d == 'function' && d(o);
        },
      },
      a,
    ),
  );
}
function es(r) {
  const e = r.style.alignSelf,
    t = r.style.overflow;
  'MozAppearance' in r.style || (r.style.overflow = 'hidden'),
    (r.style.alignSelf = 'start'),
    (r.style.height = 'auto'),
    (r.style.height = `${r.scrollHeight + (r.offsetHeight - r.clientHeight)}px`),
    (r.style.overflow = t),
    (r.style.alignSelf = e);
}
var ts = Object.assign(Ot, { Description: At, ErrorMessage: $t, Input: Vt, Label: Et, TextArea: It });
const cr = Ot,
  rs = (r) => {
    const [e, t] = L(r, ['type', 'class']);
    return y(
      Vt,
      F(
        {
          get type() {
            return e.type;
          },
          get class() {
            return Je(
              'flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              e.class,
            );
          },
        },
        t,
      ),
    );
  },
  ss = (r) => {
    const [e, t] = L(r, ['class']);
    return y(
      It,
      F(
        {
          get class() {
            return Je(
              'flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50',
              e.class,
            );
          },
        },
        t,
      ),
    );
  },
  Pt = Ir('font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70', {
    variants: {
      variant: {
        label: 'data-[invalid]:text-destructive',
        description: 'text-destructive',
        error: 'font-normal text-destructive',
      },
    },
    defaultVariants: { variant: 'label' },
  }),
  ur = (r) => {
    const [e, t] = L(r, ['class']);
    return y(
      Et,
      F(
        {
          get class() {
            return Je(Pt(), e.class);
          },
        },
        t,
      ),
    );
  },
  fr = (r) => {
    const [e, t] = L(r, ['class']);
    return y(
      At,
      F(
        {
          get class() {
            return Je(Pt({ variant: 'description' }), e.class);
          },
        },
        t,
      ),
    );
  },
  hr = (r) => {
    const [e, t] = L(r, ['class']);
    return y(
      $t,
      F(t, {
        get class() {
          return Je(Pt({ variant: 'error', class: e.class }));
        },
      }),
    );
  };
class mr {
  constructor(e, t) {
    (this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = (s) => {
        var n, a;
        this.listeners.add(s);
        const i = (a = (n = this.options) == null ? void 0 : n.onSubscribe) == null ? void 0 : a.call(n, s, this);
        return () => {
          this.listeners.delete(s), i?.();
        };
      }),
      (this.setState = (s) => {
        var n, a, i;
        const o = this.state;
        (this.state = (n = this.options) != null && n.updateFn ? this.options.updateFn(o)(s) : s(o)),
          (i = (a = this.options) == null ? void 0 : a.onUpdate) == null || i.call(a),
          this._flush();
      }),
      (this._flush = () => {
        if (this._batching) {
          return;
        }
        const s = ++this._flushing;
        this.listeners.forEach((n) => {
          this._flushing === s && n();
        });
      }),
      (this.batch = (s) => {
        if (this._batching) {
          return s();
        }
        (this._batching = !0), s(), (this._batching = !1), this._flush();
      }),
      (this.state = e),
      (this.options = t);
  }
}
function Ft(r, e) {
  return typeof r == 'function' ? r(e) : r;
}
function pr(r, e) {
  return Nt(e).reduce((s, n) => {
    if (s === null) {
      return null;
    }
    if (typeof s < 'u') {
      return s[n];
    }
  }, r);
}
function ft(r, e, t) {
  const s = Nt(e);
  function n(a) {
    if (!s.length) {
      return Ft(t, a);
    }
    const i = s.shift();
    if (typeof i == 'string') {
      return typeof a == 'object' ? (a === null && (a = {}), { ...a, [i]: n(a[i]) }) : { [i]: n() };
    }
    if (Array.isArray(a) && i !== void 0) {
      const o = a.slice(0, i);
      return [...(o.length ? o : new Array(i)), n(a[i]), ...a.slice(i + 1)];
    }
    return [...new Array(i), n()];
  }
  return n(r);
}
function ns(r, e) {
  const t = Nt(e);
  function s(n) {
    if (!n) {
      return;
    }
    if (t.length === 1) {
      const i = t[0];
      if (Array.isArray(n) && typeof i == 'number') {
        return n.filter((l, c) => c !== i);
      }
      const { [i]: o, ...d } = n;
      return d;
    }
    const a = t.shift();
    if (typeof a == 'string' && typeof n == 'object') {
      return { ...n, [a]: s(n[a]) };
    }
    if (typeof a == 'number' && Array.isArray(n)) {
      if (a >= n.length) {
        return n;
      }
      const i = n.slice(0, a);
      return [...(i.length ? i : new Array(a)), s(n[a]), ...n.slice(a + 1)];
    }
    throw new Error('It seems we have created an infinite loop in deleteBy. ');
  }
  return s(r);
}
const as = /^(\d*)$/gm,
  is = /\.(\d*)\./gm,
  os = /^(\d*)\./gm,
  ls = /\.(\d*$)/gm,
  ds = /\.{2,}/gm,
  _t = '__int__',
  et = `${_t}$1`;
function Nt(r) {
  if (typeof r != 'string') {
    throw new Error('Path must be a string.');
  }
  return r
    .replaceAll('[', '.')
    .replaceAll(']', '')
    .replace(as, et)
    .replace(is, `.${et}.`)
    .replace(os, `${et}.`)
    .replace(ls, `.${et}`)
    .replace(ds, '.')
    .split('.')
    .map((e) => (e.indexOf(_t) === 0 ? Number.parseInt(e.substring(_t.length), 10) : e));
}
function cs(r) {
  return !(Array.isArray(r) && r.length === 0);
}
function bt(r, e) {
  const { asyncDebounceMs: t } = e,
    {
      onChangeAsync: s,
      onBlurAsync: n,
      onSubmitAsync: a,
      onBlurAsyncDebounceMs: i,
      onChangeAsyncDebounceMs: o,
    } = e.validators || {},
    d = t ?? 0,
    l = { cause: 'change', validate: s, debounceMs: o ?? d },
    c = { cause: 'blur', validate: n, debounceMs: i ?? d },
    h = { cause: 'submit', validate: a, debounceMs: 0 },
    f = (g) => ({ ...g, debounceMs: 0 });
  switch (r) {
    case 'submit':
      return [f(l), f(c), h];
    case 'blur':
      return [c];
    case 'change':
      return [l];
    case 'server':
    default:
      return [];
  }
}
function xt(r, e) {
  const { onChange: t, onBlur: s, onSubmit: n } = e.validators || {},
    a = { cause: 'change', validate: t },
    i = { cause: 'blur', validate: s },
    o = { cause: 'submit', validate: n },
    d = { cause: 'server', validate: () => {} };
  switch (r) {
    case 'submit':
      return [a, i, o, d];
    case 'server':
      return [d];
    case 'blur':
      return [i, d];
    case 'change':
    default:
      return [a, d];
  }
}
function ht(r) {
  return {
    values: r.values ?? {},
    errors: r.errors ?? [],
    errorMap: r.errorMap ?? {},
    fieldMeta: r.fieldMeta ?? {},
    canSubmit: r.canSubmit ?? !0,
    isFieldsValid: r.isFieldsValid ?? !1,
    isFieldsValidating: r.isFieldsValidating ?? !1,
    isFormValid: r.isFormValid ?? !1,
    isFormValidating: r.isFormValidating ?? !1,
    isSubmitted: r.isSubmitted ?? !1,
    isSubmitting: r.isSubmitting ?? !1,
    isTouched: r.isTouched ?? !1,
    isBlurred: r.isBlurred ?? !1,
    isPristine: r.isPristine ?? !0,
    isDirty: r.isDirty ?? !1,
    isValid: r.isValid ?? !1,
    isValidating: r.isValidating ?? !1,
    submissionAttempts: r.submissionAttempts ?? 0,
    validationMetaMap: r.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0,
    },
  };
}
class us {
  constructor(e) {
    var t;
    (this.options = {}),
      (this.fieldInfo = {}),
      (this.prevTransformArray = []),
      (this.mount = () => {
        const { onMount: s } = this.options.validators || {};
        if (!s) {
          return;
        }
        const n = this.runValidator({
          validate: s,
          value: { value: this.state.values, formApi: this },
          type: 'validate',
        });
        n && this.store.setState((a) => ({ ...a, errorMap: { ...a.errorMap, onMount: n } }));
      }),
      (this.update = (s) => {
        if (!s) {
          return;
        }
        const n = this.options;
        (this.options = s),
          this.store.batch(() => {
            const a = s.defaultValues && s.defaultValues !== n.defaultValues && !this.state.isTouched,
              i = s.defaultState !== n.defaultState && !this.state.isTouched;
            this.store.setState(() =>
              ht(Object.assign({}, this.state, i ? s.defaultState : {}, a ? { values: s.defaultValues } : {})),
            );
          });
      }),
      (this.reset = () => {
        const { fieldMeta: s } = this.state,
          n = this.resetFieldMeta(s);
        this.store.setState(() => {
          var a;
          return ht({
            ...this.options.defaultState,
            values: this.options.defaultValues ?? ((a = this.options.defaultState) == null ? void 0 : a.values),
            fieldMeta: n,
          });
        });
      }),
      (this.validateAllFields = async (s) => {
        const n = [];
        return (
          this.store.batch(() => {
            Object.values(this.fieldInfo).forEach((i) => {
              if (!i.instance) {
                return;
              }
              const o = i.instance;
              n.push(Promise.resolve().then(() => o.validate(s))),
                i.instance.state.meta.isTouched || i.instance.setMeta((d) => ({ ...d, isTouched: !0 })),
                i.instance.state.meta.isBlurred || i.instance.setMeta((d) => ({ ...d, isBlurred: !0 }));
            });
          }),
          (await Promise.all(n)).flat()
        );
      }),
      (this.validateArrayFieldsStartingFrom = async (s, n, a) => {
        const i = this.getFieldValue(s),
          o = Array.isArray(i) ? Math.max(i.length - 1, 0) : null,
          d = [`${s}[${n}]`];
        for (let f = n + 1; f <= (o ?? 0); f++) {
          d.push(`${s}[${f}]`);
        }
        const l = Object.keys(this.fieldInfo).filter((f) => d.some((g) => f.startsWith(g))),
          c = [];
        return (
          this.store.batch(() => {
            l.forEach((f) => {
              c.push(Promise.resolve().then(() => this.validateField(f, a)));
            });
          }),
          (await Promise.all(c)).flat()
        );
      }),
      (this.validateField = (s, n) => {
        var a;
        const i = (a = this.fieldInfo[s]) == null ? void 0 : a.instance;
        return i
          ? (i.state.meta.isTouched || i.setMeta((o) => ({ ...o, isTouched: !0 })),
            i.state.meta.isBlurred || i.setMeta((o) => ({ ...o, isBlurred: !0 })),
            i.validate(n))
          : [];
      }),
      (this.validateSync = (s) => {
        const n = xt(s, this.options);
        let a = !1;
        const i = {};
        this.store.batch(() => {
          for (const d of n) {
            if (!d.validate) {
              continue;
            }
            const l = this.runValidator({
                validate: d.validate,
                value: { value: this.state.values, formApi: this },
                type: 'validate',
              }),
              { formError: c, fieldErrors: h } = wt(l),
              f = tt(d.cause);
            if (h) {
              for (const [g, w] of Object.entries(h)) {
                const E = { ...(i[g] || {}), [f]: w };
                i[g] = E;
                const C = this.getFieldMeta(g);
                C &&
                  C.errorMap[f] !== w &&
                  this.setFieldMeta(g, (A) => ({ ...A, errorMap: { ...A.errorMap, [f]: w } }));
              }
            }
            this.state.errorMap[f] !== c && this.store.setState((g) => ({ ...g, errorMap: { ...g.errorMap, [f]: c } })),
              (c || h) && (a = !0);
          }
        });
        const o = tt('submit');
        return (
          this.state.errorMap[o] &&
            s !== 'submit' &&
            !a &&
            this.store.setState((d) => ({ ...d, errorMap: { ...d.errorMap, [o]: void 0 } })),
          { hasErrored: a, fieldsErrorMap: i }
        );
      }),
      (this.validateAsync = async (s) => {
        const n = bt(s, this.options);
        this.state.isFormValidating || this.store.setState((l) => ({ ...l, isFormValidating: !0 }));
        const a = [];
        let i;
        for (const l of n) {
          if (!l.validate) {
            continue;
          }
          const c = tt(l.cause),
            h = this.state.validationMetaMap[c];
          h?.lastAbortController.abort();
          const f = new AbortController();
          (this.state.validationMetaMap[c] = { lastAbortController: f }),
            a.push(
              new Promise(async (g) => {
                let w;
                try {
                  w = await new Promise((A, T) => {
                    setTimeout(async () => {
                      if (f.signal.aborted) {
                        return A(void 0);
                      }
                      try {
                        A(
                          await this.runValidator({
                            validate: l.validate,
                            value: { value: this.state.values, formApi: this, signal: f.signal },
                            type: 'validateAsync',
                          }),
                        );
                      } catch (r) {
                        T(r);
                      }
                    }, l.debounceMs);
                  });
                } catch (A) {
                  w = A;
                }
                const { formError: $, fieldErrors: E } = wt(w);
                E && (i = i ? { ...i, ...E } : E);
                const C = tt(l.cause);
                if (i) {
                  for (const [A, T] of Object.entries(i)) {
                    const R = this.getFieldMeta(A);
                    R &&
                      R.errorMap[C] !== T &&
                      this.setFieldMeta(A, (te) => ({ ...te, errorMap: { ...te.errorMap, [C]: T } }));
                  }
                }
                this.store.setState((A) => ({ ...A, errorMap: { ...A.errorMap, [C]: $ } })),
                  g(i ? { fieldErrors: i, errorMapKey: C } : void 0);
              }),
            );
        }
        let o = [];
        const d = {};
        if (a.length) {
          o = await Promise.all(a);
          for (const l of o) {
            if (l?.fieldErrors) {
              const { errorMapKey: c } = l;
              for (const [h, f] of Object.entries(l.fieldErrors)) {
                const w = { ...(d[h] || {}), [c]: f };
                d[h] = w;
              }
            }
          }
        }
        return this.store.setState((l) => ({ ...l, isFormValidating: !1 })), d;
      }),
      (this.validate = (s) => {
        const { hasErrored: n, fieldsErrorMap: a } = this.validateSync(s);
        return n && !this.options.asyncAlways ? a : this.validateAsync(s);
      }),
      (this.handleSubmit = async () => {
        var s, n, a, i, o, d;
        if (
          (this.store.setState((c) => ({ ...c, isSubmitted: !1, submissionAttempts: c.submissionAttempts + 1 })),
          !this.state.canSubmit)
        ) {
          return;
        }
        this.store.setState((c) => ({ ...c, isSubmitting: !0 }));
        const l = () => {
          this.store.setState((c) => ({ ...c, isSubmitting: !1 }));
        };
        if ((await this.validateAllFields('submit'), !this.state.isFieldsValid)) {
          l(),
            (n = (s = this.options).onSubmitInvalid) == null || n.call(s, { value: this.state.values, formApi: this });
          return;
        }
        if ((await this.validate('submit'), !this.state.isValid)) {
          l(),
            (i = (a = this.options).onSubmitInvalid) == null || i.call(a, { value: this.state.values, formApi: this });
          return;
        }
        try {
          await ((d = (o = this.options).onSubmit) == null
            ? void 0
            : d.call(o, { value: this.state.values, formApi: this })),
            this.store.batch(() => {
              this.store.setState((c) => ({ ...c, isSubmitted: !0 })), l();
            });
        } catch (c) {
          throw (l(), c);
        }
      }),
      (this.getFieldValue = (s) => pr(this.state.values, s)),
      (this.getFieldMeta = (s) => this.state.fieldMeta[s]),
      (this.getFieldInfo = (s) => {
        var n;
        return (
          (n = this.fieldInfo)[s] ||
          (n[s] = {
            instance: null,
            validationMetaMap: {
              onChange: void 0,
              onBlur: void 0,
              onSubmit: void 0,
              onMount: void 0,
              onServer: void 0,
            },
          })
        );
      }),
      (this.setFieldMeta = (s, n) => {
        this.store.setState((a) => ({ ...a, fieldMeta: { ...a.fieldMeta, [s]: Ft(n, a.fieldMeta[s]) } }));
      }),
      (this.resetFieldMeta = (s) =>
        Object.keys(s).reduce((n, a) => {
          const i = a;
          return (
            (n[i] = {
              isValidating: !1,
              isTouched: !1,
              isBlurred: !1,
              isDirty: !1,
              isPristine: !0,
              errors: [],
              errorMap: {},
            }),
            n
          );
        }, {})),
      (this.setFieldValue = (s, n, a) => {
        const i = a?.dontUpdateMeta ?? !1;
        this.store.batch(() => {
          i || this.setFieldMeta(s, (o) => ({ ...o, isTouched: !0, isBlurred: !0, isDirty: !0 })),
            this.store.setState((o) => ({ ...o, values: ft(o.values, s, n) }));
        });
      }),
      (this.deleteField = (s) => {
        this.store.setState((n) => {
          const a = { ...n };
          return (a.values = ns(a.values, s)), delete a.fieldMeta[s], a;
        }),
          delete this.fieldInfo[s];
      }),
      (this.pushFieldValue = (s, n, a) => {
        this.setFieldValue(s, (i) => [...(Array.isArray(i) ? i : []), n], a), this.validateField(s, 'change');
      }),
      (this.insertFieldValue = async (s, n, a, i) => {
        this.setFieldValue(s, (o) => [...o.slice(0, n), a, ...o.slice(n)], i), await this.validateField(s, 'change');
      }),
      (this.replaceFieldValue = async (s, n, a, i) => {
        this.setFieldValue(s, (o) => o.map((d, l) => (l === n ? a : d)), i),
          await this.validateField(s, 'change'),
          await this.validateArrayFieldsStartingFrom(s, n, 'change');
      }),
      (this.removeFieldValue = async (s, n, a) => {
        const i = this.getFieldValue(s),
          o = Array.isArray(i) ? Math.max(i.length - 1, 0) : null;
        if ((this.setFieldValue(s, (d) => d.filter((l, c) => c !== n), a), o !== null)) {
          const d = `${s}[${o}]`;
          Object.keys(this.fieldInfo)
            .filter((c) => c.startsWith(d))
            .forEach((c) => this.deleteField(c));
        }
        await this.validateField(s, 'change'), await this.validateArrayFieldsStartingFrom(s, n, 'change');
      }),
      (this.swapFieldValues = (s, n, a, i) => {
        this.setFieldValue(
          s,
          (o) => {
            const d = o[n],
              l = o[a];
            return ft(ft(o, `${n}`, l), `${a}`, d);
          },
          i,
        ),
          this.validateField(s, 'change'),
          this.validateField(`${s}[${n}]`, 'change'),
          this.validateField(`${s}[${a}]`, 'change');
      }),
      (this.moveFieldValues = (s, n, a, i) => {
        this.setFieldValue(s, (o) => (o.splice(a, 0, o.splice(n, 1)[0]), o), i),
          this.validateField(s, 'change'),
          this.validateField(`${s}[${n}]`, 'change'),
          this.validateField(`${s}[${a}]`, 'change');
      }),
      (this.store = new mr(
        ht({
          ...e?.defaultState,
          values: e?.defaultValues ?? ((t = e?.defaultState) == null ? void 0 : t.values),
          isFormValid: !0,
        }),
        {
          onUpdate: () => {
            var s, n;
            let { state: a } = this.store;
            const i = Object.values(a.fieldMeta),
              o = i.some((T) => T?.isValidating),
              d = !i.some((T) => T?.errorMap && cs(Object.values(T.errorMap).filter(Boolean))),
              l = i.some((T) => T?.isTouched),
              c = i.some((T) => T?.isBlurred),
              h = i.some((T) => T?.isDirty),
              f = !h,
              g = o || a.isFormValidating;
            a.errors = Object.values(a.errorMap).filter((T) => T !== void 0);
            const w = a.errors.length === 0,
              $ = d && w,
              E = (a.submissionAttempts === 0 && !l) || (!g && !a.isSubmitting && $);
            (a = {
              ...a,
              isFieldsValidating: o,
              isFieldsValid: d,
              isFormValid: w,
              isValid: $,
              canSubmit: E,
              isTouched: l,
              isBlurred: c,
              isPristine: f,
              isDirty: h,
            }),
              (this.state = a),
              (this.store.state = this.state);
            const C = ((s = this.options.transform) == null ? void 0 : s.deps) ?? [];
            (C.length !== this.prevTransformArray.length || C.some((T, R) => T !== this.prevTransformArray[R])) &&
              ((n = this.options.transform) == null || n.fn(this),
              (this.store.state = this.state),
              (this.prevTransformArray = C));
          },
        },
      )),
      (this.state = this.store.state),
      this.update(e || {});
  }
  runValidator(e) {
    const t = this.options.validatorAdapter;
    return t && typeof e.validate != 'function' ? t()[e.type](e.value, e.validate) : e.validate(e.value);
  }
  setErrorMap(e) {
    this.store.setState((t) => ({ ...t, errorMap: { ...t.errorMap, ...e } }));
  }
}
function wt(r) {
  if (r) {
    if (typeof r == 'object') {
      const e = wt(r.form).formError,
        t = r.fields;
      return { formError: e, fieldErrors: t };
    }
    return typeof r != 'string' ? { formError: 'Invalid Form Values' } : { formError: r };
  }
  return { formError: void 0 };
}
function tt(r) {
  switch (r) {
    case 'submit':
      return 'onSubmit';
    case 'blur':
      return 'onBlur';
    case 'mount':
      return 'onMount';
    case 'server':
      return 'onServer';
    case 'change':
    default:
      return 'onChange';
  }
}
class fs {
  constructor(e) {
    (this.options = {}),
      (this.mount = () => {
        const t = this.getInfo();
        t.instance = this;
        const s = this.form.store.subscribe(() => {
          this.store.batch(() => {
            const a = this.getValue(),
              i = this.getMeta();
            a !== this.state.value && this.store.setState((o) => ({ ...o, value: a })),
              i !== this.state.meta && this.store.setState((o) => ({ ...o, meta: i }));
          });
        });
        this.update(this.options);
        const { onMount: n } = this.options.validators || {};
        if (n) {
          const a = this.runValidator({
            validate: n,
            value: { value: this.state.value, fieldApi: this },
            type: 'validate',
          });
          a && this.setMeta((i) => ({ ...i, errorMap: { ...i?.errorMap, onMount: a } }));
        }
        return () => {
          s();
        };
      }),
      (this.update = (t) => {
        if (this.state.value === void 0) {
          const s = pr(t.form.options.defaultValues, t.name);
          t.defaultValue !== void 0
            ? this.setValue(t.defaultValue, { dontUpdateMeta: !0 })
            : s !== void 0 && this.setValue(s, { dontUpdateMeta: !0 });
        }
        this._getMeta() === void 0 && this.setMeta(this.state.meta), (this.options = t);
      }),
      (this.getValue = () => this.form.getFieldValue(this.name)),
      (this.setValue = (t, s) => {
        this.form.setFieldValue(this.name, t, s), this.validate('change');
      }),
      (this._getMeta = () => this.form.getFieldMeta(this.name)),
      (this.getMeta = () =>
        this._getMeta() ?? {
          isValidating: !1,
          isTouched: !1,
          isBlurred: !1,
          isDirty: !1,
          isPristine: !0,
          errors: [],
          errorMap: {},
          ...this.options.defaultMeta,
        }),
      (this.setMeta = (t) => this.form.setFieldMeta(this.name, t)),
      (this.getInfo = () => this.form.getFieldInfo(this.name)),
      (this.pushValue = (t, s) => this.form.pushFieldValue(this.name, t, s)),
      (this.insertValue = (t, s, n) => this.form.insertFieldValue(this.name, t, s, n)),
      (this.replaceValue = (t, s, n) => this.form.replaceFieldValue(this.name, t, s, n)),
      (this.removeValue = (t, s) => this.form.removeFieldValue(this.name, t, s)),
      (this.swapValues = (t, s, n) => this.form.swapFieldValues(this.name, t, s, n)),
      (this.moveValue = (t, s, n) => this.form.moveFieldValues(this.name, t, s, n)),
      (this.getLinkedFields = (t) => {
        const s = Object.values(this.form.fieldInfo),
          n = [];
        for (const a of s) {
          if (!a.instance) {
            continue;
          }
          const { onChangeListenTo: i, onBlurListenTo: o } = a.instance.options.validators || {};
          t === 'change' && i?.includes(this.name) && n.push(a.instance),
            t === 'blur' && o?.includes(this.name) && n.push(a.instance);
        }
        return n;
      }),
      (this.validateSync = (t, s) => {
        const n = xt(t, this.options),
          i = this.getLinkedFields(t).reduce((l, c) => {
            const h = xt(t, c.options);
            return (
              h.forEach((f) => {
                f.field = c;
              }),
              l.concat(h)
            );
          }, []);
        let o = !1;
        this.form.store.batch(() => {
          const l = (c, h) => {
            const f = $e(h.cause),
              g = h.validate
                ? Dt(
                    c.runValidator({
                      validate: h.validate,
                      value: { value: c.getValue(), fieldApi: c },
                      type: 'validate',
                    }),
                  )
                : s[f];
            c.state.meta.errorMap[f] !== g &&
              c.setMeta((w) => ({ ...w, errorMap: { ...w.errorMap, [$e(h.cause)]: g || s[f] } })),
              (g || s[f]) && (o = !0);
          };
          for (const c of n) {
            l(this, c);
          }
          for (const c of i) {
            c.validate && l(c.field, c);
          }
        });
        const d = $e('submit');
        return (
          this.state.meta.errorMap[d] &&
            t !== 'submit' &&
            !o &&
            this.setMeta((l) => ({ ...l, errorMap: { ...l.errorMap, [d]: void 0 } })),
          { hasErrored: o }
        );
      }),
      (this.validateAsync = async (t, s) => {
        const n = bt(t, this.options),
          a = await s,
          i = this.getLinkedFields(t),
          o = i.reduce((f, g) => {
            const w = bt(t, g.options);
            return (
              w.forEach(($) => {
                $.field = g;
              }),
              f.concat(w)
            );
          }, []);
        this.state.meta.isValidating || this.setMeta((f) => ({ ...f, isValidating: !0 }));
        for (const f of i) {
          f.setMeta((g) => ({ ...g, isValidating: !0 }));
        }
        const d = [],
          l = [],
          c = (f, g, w) => {
            const $ = $e(g.cause),
              E = f.getInfo().validationMetaMap[$];
            E?.lastAbortController.abort();
            const C = new AbortController();
            (this.getInfo().validationMetaMap[$] = { lastAbortController: C }),
              w.push(
                new Promise(async (A) => {
                  var T;
                  let R;
                  try {
                    R = await new Promise((_, I) => {
                      setTimeout(async () => {
                        if (C.signal.aborted) {
                          return _(void 0);
                        }
                        try {
                          _(
                            await this.runValidator({
                              validate: g.validate,
                              value: { value: f.getValue(), fieldApi: f, signal: C.signal },
                              type: 'validateAsync',
                            }),
                          );
                        } catch (Ar) {
                          I(Ar);
                        }
                      }, g.debounceMs);
                    });
                  } catch (_) {
                    R = _;
                  }
                  if (C.signal.aborted) {
                    return A(void 0);
                  }
                  const te = Dt(R),
                    Ae = (T = a[this.name]) == null ? void 0 : T[$],
                    ge = te || Ae;
                  f.setMeta((_) => ({ ..._, errorMap: { ..._?.errorMap, [$]: ge } })), A(ge);
                }),
              );
          };
        for (const f of n) {
          f.validate && c(this, f, d);
        }
        for (const f of o) {
          f.validate && c(f.field, f, l);
        }
        let h = [];
        (d.length || l.length) && ((h = await Promise.all(d)), await Promise.all(l)),
          this.setMeta((f) => ({ ...f, isValidating: !1 }));
        for (const f of i) {
          f.setMeta((g) => ({ ...g, isValidating: !1 }));
        }
        return h.filter(Boolean);
      }),
      (this.validate = (t) => {
        var s;
        if (!this.state.meta.isTouched) {
          return [];
        }
        let n = {},
          a = Promise.resolve({});
        try {
          const o = this.form.validate(t);
          if (o instanceof Promise) {
            a = o;
          } else {
            const d = o[this.name];
            d && (n = d);
          }
        } catch {}
        const { hasErrored: i } = this.validateSync(t, n);
        return i && !this.options.asyncAlways
          ? ((s = this.getInfo().validationMetaMap[$e(t)]) == null || s.lastAbortController.abort(),
            this.state.meta.errors)
          : this.validateAsync(t, a);
      }),
      (this.handleChange = (t) => {
        this.setValue(t);
      }),
      (this.handleBlur = () => {
        this.state.meta.isTouched || (this.setMeta((s) => ({ ...s, isTouched: !0 })), this.validate('change')),
          this.state.meta.isBlurred || this.setMeta((s) => ({ ...s, isBlurred: !0 })),
          this.validate('blur');
      }),
      (this.form = e.form),
      (this.name = e.name),
      e.defaultValue !== void 0 && this.form.setFieldValue(this.name, e.defaultValue, { dontUpdateMeta: !0 }),
      (this.store = new mr(
        {
          value: this.getValue(),
          meta: this._getMeta() ?? {
            isValidating: !1,
            isTouched: !1,
            isBlurred: !1,
            isDirty: !1,
            isPristine: !0,
            errors: [],
            errorMap: {},
            ...e.defaultMeta,
          },
        },
        {
          onUpdate: () => {
            const t = this.store.state;
            (t.meta.errors = Object.values(t.meta.errorMap).filter((s) => s !== void 0)),
              (t.meta.isPristine = !t.meta.isDirty),
              (this.prevState = t),
              (this.state = t);
          },
        },
      )),
      (this.state = this.store.state),
      (this.prevState = this.state),
      (this.options = e);
  }
  runValidator(e) {
    const t = [this.form.options.validatorAdapter, this.options.validatorAdapter];
    for (const s of t) {
      if (s && typeof e.validate != 'function') {
        return s()[e.type](e.value, e.validate);
      }
    }
    return e.validate(e.value);
  }
  setErrorMap(e) {
    this.setMeta((t) => ({ ...t, errorMap: { ...t.errorMap, ...e } }));
  }
}
function Dt(r) {
  if (r) {
    return typeof r != 'string' ? 'Invalid Form Values' : r;
  }
}
function $e(r) {
  switch (r) {
    case 'submit':
      return 'onSubmit';
    case 'blur':
      return 'onBlur';
    case 'mount':
      return 'onMount';
    case 'server':
      return 'onServer';
    case 'change':
    default:
      return 'onChange';
  }
}
function Bt(r, e = (t) => t) {
  const [t, s] = Ur({ value: e(r.state) }),
    n = r.subscribe(() => {
      const a = e(r.state);
      s('value', qr(a));
    });
  return (
    le(() => {
      n();
    }),
    () => t.value
  );
}
function hs(r) {
  const [e, t] = ue(!1),
    s = Ce(() => [e(), r]),
    n = r.store.subscribe(() => t((a) => !a));
  return le(n), () => s()[1];
}
function gr(r) {
  const e = r(),
    t = new fs(e),
    s = t;
  return (s.Field = vr), Ht(() => t.update(r())), Yt(() => le(t.mount())), hs(s);
}
function vr(r) {
  const e = gr(() => {
    const { children: t, ...s } = r;
    return s;
  });
  return Ce(() => y(() => r.children(e), {}));
}
function ms(r) {
  const e = r?.(),
    t = new us(e),
    s = t;
  return (
    (s.Field = (n) => y(vr, F(n, { form: t }))),
    (s.createField = (n) => gr(() => ({ ...n(), form: t }))),
    (s.useStore = (n) => Bt(t.store, n)),
    (s.Subscribe = (n) => Ft(n.children, Bt(t.store, n.selector))),
    Yt(t.mount),
    Ht(() => t.update(r?.())),
    s
  );
}
const ps =
  (r = {}) =>
  () => ({
    validate({ value: e }, t) {
      const s = t.safeParse(e);
      if (!s.success) {
        return r.transformErrors ? r.transformErrors(s.error.issues) : s.error.issues.map((n) => n.message).join(', ');
      }
    },
    async validateAsync({ value: e }, t) {
      const s = await t.safeParseAsync(e);
      if (!s.success) {
        return r.transformErrors ? r.transformErrors(s.error.issues) : s.error.issues.map((n) => n.message).join(', ');
      }
    },
  });
var M;
((r) => {
  r.assertEqual = (n) => n;
  function e(n) {}
  r.assertIs = e;
  function t(n) {
    throw new Error();
  }
  (r.assertNever = t),
    (r.arrayToEnum = (n) => {
      const a = {};
      for (const i of n) {
        a[i] = i;
      }
      return a;
    }),
    (r.getValidEnumValues = (n) => {
      const a = r.objectKeys(n).filter((o) => typeof n[n[o]] != 'number'),
        i = {};
      for (const o of a) {
        i[o] = n[o];
      }
      return r.objectValues(i);
    }),
    (r.objectValues = (n) => r.objectKeys(n).map((a) => n[a])),
    (r.objectKeys =
      typeof Object.keys == 'function'
        ? (n) => Object.keys(n)
        : (n) => {
            const a = [];
            for (const i in n) {
              Object.prototype.hasOwnProperty.call(n, i) && a.push(i);
            }
            return a;
          }),
    (r.find = (n, a) => {
      for (const i of n) {
        if (a(i)) {
          return i;
        }
      }
    }),
    (r.isInteger =
      typeof Number.isInteger == 'function'
        ? (n) => Number.isInteger(n)
        : (n) => typeof n == 'number' && isFinite(n) && Math.floor(n) === n);
  function s(n, a = ' | ') {
    return n.map((i) => (typeof i == 'string' ? `'${i}'` : i)).join(a);
  }
  (r.joinValues = s), (r.jsonStringifyReplacer = (n, a) => (typeof a == 'bigint' ? a.toString() : a));
})(M || (M = {}));
var kt;
((r) => {
  r.mergeShapes = (e, t) => ({ ...e, ...t });
})(kt || (kt = {}));
const p = M.arrayToEnum([
    'string',
    'nan',
    'number',
    'integer',
    'float',
    'boolean',
    'date',
    'bigint',
    'symbol',
    'function',
    'undefined',
    'null',
    'array',
    'object',
    'unknown',
    'promise',
    'void',
    'never',
    'map',
    'set',
  ]),
  re = (r) => {
    switch (typeof r) {
      case 'undefined':
        return p.undefined;
      case 'string':
        return p.string;
      case 'number':
        return isNaN(r) ? p.nan : p.number;
      case 'boolean':
        return p.boolean;
      case 'function':
        return p.function;
      case 'bigint':
        return p.bigint;
      case 'symbol':
        return p.symbol;
      case 'object':
        return Array.isArray(r)
          ? p.array
          : r === null
            ? p.null
            : r.then && typeof r.then == 'function' && r.catch && typeof r.catch == 'function'
              ? p.promise
              : typeof Map < 'u' && r instanceof Map
                ? p.map
                : typeof Set < 'u' && r instanceof Set
                  ? p.set
                  : typeof Date < 'u' && r instanceof Date
                    ? p.date
                    : p.object;
      default:
        return p.unknown;
    }
  },
  u = M.arrayToEnum([
    'invalid_type',
    'invalid_literal',
    'custom',
    'invalid_union',
    'invalid_union_discriminator',
    'invalid_enum_value',
    'unrecognized_keys',
    'invalid_arguments',
    'invalid_return_type',
    'invalid_date',
    'invalid_string',
    'too_small',
    'too_big',
    'invalid_intersection_types',
    'not_multiple_of',
    'not_finite',
  ]),
  gs = (r) => JSON.stringify(r, null, 2).replace(/"([^"]+)":/g, '$1:');
class D extends Error {
  constructor(e) {
    super(),
      (this.issues = []),
      (this.addIssue = (s) => {
        this.issues = [...this.issues, s];
      }),
      (this.addIssues = (s = []) => {
        this.issues = [...this.issues, ...s];
      });
    const t = new.target.prototype;
    Object.setPrototypeOf ? Object.setPrototypeOf(this, t) : (this.__proto__ = t),
      (this.name = 'ZodError'),
      (this.issues = e);
  }
  get errors() {
    return this.issues;
  }
  format(e) {
    const t = e || ((a) => a.message),
      s = { _errors: [] },
      n = (a) => {
        for (const i of a.issues) {
          if (i.code === 'invalid_union') {
            i.unionErrors.map(n);
          } else if (i.code === 'invalid_return_type') {
            n(i.returnTypeError);
          } else if (i.code === 'invalid_arguments') {
            n(i.argumentsError);
          } else if (i.path.length === 0) {
            s._errors.push(t(i));
          } else {
            let o = s,
              d = 0;
            while (d < i.path.length) {
              const l = i.path[d];
              d === i.path.length - 1
                ? ((o[l] = o[l] || { _errors: [] }), o[l]._errors.push(t(i)))
                : (o[l] = o[l] || { _errors: [] }),
                (o = o[l]),
                d++;
            }
          }
        }
      };
    return n(this), s;
  }
  static assert(e) {
    if (!(e instanceof D)) {
      throw new Error(`Not a ZodError: ${e}`);
    }
  }
  toString() {
    return this.message;
  }
  get message() {
    return JSON.stringify(this.issues, M.jsonStringifyReplacer, 2);
  }
  get isEmpty() {
    return this.issues.length === 0;
  }
  flatten(e = (t) => t.message) {
    const t = {},
      s = [];
    for (const n of this.issues) {
      n.path.length > 0 ? ((t[n.path[0]] = t[n.path[0]] || []), t[n.path[0]].push(e(n))) : s.push(e(n));
    }
    return { formErrors: s, fieldErrors: t };
  }
  get formErrors() {
    return this.flatten();
  }
}
D.create = (r) => new D(r);
const ke = (r, e) => {
  let t;
  switch (r.code) {
    case u.invalid_type:
      r.received === p.undefined ? (t = 'Required') : (t = `Expected ${r.expected}, received ${r.received}`);
      break;
    case u.invalid_literal:
      t = `Invalid literal value, expected ${JSON.stringify(r.expected, M.jsonStringifyReplacer)}`;
      break;
    case u.unrecognized_keys:
      t = `Unrecognized key(s) in object: ${M.joinValues(r.keys, ', ')}`;
      break;
    case u.invalid_union:
      t = 'Invalid input';
      break;
    case u.invalid_union_discriminator:
      t = `Invalid discriminator value. Expected ${M.joinValues(r.options)}`;
      break;
    case u.invalid_enum_value:
      t = `Invalid enum value. Expected ${M.joinValues(r.options)}, received '${r.received}'`;
      break;
    case u.invalid_arguments:
      t = 'Invalid function arguments';
      break;
    case u.invalid_return_type:
      t = 'Invalid function return type';
      break;
    case u.invalid_date:
      t = 'Invalid date';
      break;
    case u.invalid_string:
      typeof r.validation == 'object'
        ? 'includes' in r.validation
          ? ((t = `Invalid input: must include "${r.validation.includes}"`),
            typeof r.validation.position == 'number' &&
              (t = `${t} at one or more positions greater than or equal to ${r.validation.position}`))
          : 'startsWith' in r.validation
            ? (t = `Invalid input: must start with "${r.validation.startsWith}"`)
            : 'endsWith' in r.validation
              ? (t = `Invalid input: must end with "${r.validation.endsWith}"`)
              : M.assertNever(r.validation)
        : r.validation !== 'regex'
          ? (t = `Invalid ${r.validation}`)
          : (t = 'Invalid');
      break;
    case u.too_small:
      r.type === 'array'
        ? (t = `Array must contain ${r.exact ? 'exactly' : r.inclusive ? 'at least' : 'more than'} ${r.minimum} element(s)`)
        : r.type === 'string'
          ? (t = `String must contain ${r.exact ? 'exactly' : r.inclusive ? 'at least' : 'over'} ${r.minimum} character(s)`)
          : r.type === 'number'
            ? (t = `Number must be ${r.exact ? 'exactly equal to ' : r.inclusive ? 'greater than or equal to ' : 'greater than '}${r.minimum}`)
            : r.type === 'date'
              ? (t = `Date must be ${r.exact ? 'exactly equal to ' : r.inclusive ? 'greater than or equal to ' : 'greater than '}${new Date(Number(r.minimum))}`)
              : (t = 'Invalid input');
      break;
    case u.too_big:
      r.type === 'array'
        ? (t = `Array must contain ${r.exact ? 'exactly' : r.inclusive ? 'at most' : 'less than'} ${r.maximum} element(s)`)
        : r.type === 'string'
          ? (t = `String must contain ${r.exact ? 'exactly' : r.inclusive ? 'at most' : 'under'} ${r.maximum} character(s)`)
          : r.type === 'number'
            ? (t = `Number must be ${r.exact ? 'exactly' : r.inclusive ? 'less than or equal to' : 'less than'} ${r.maximum}`)
            : r.type === 'bigint'
              ? (t = `BigInt must be ${r.exact ? 'exactly' : r.inclusive ? 'less than or equal to' : 'less than'} ${r.maximum}`)
              : r.type === 'date'
                ? (t = `Date must be ${r.exact ? 'exactly' : r.inclusive ? 'smaller than or equal to' : 'smaller than'} ${new Date(Number(r.maximum))}`)
                : (t = 'Invalid input');
      break;
    case u.custom:
      t = 'Invalid input';
      break;
    case u.invalid_intersection_types:
      t = 'Intersection results could not be merged';
      break;
    case u.not_multiple_of:
      t = `Number must be a multiple of ${r.multipleOf}`;
      break;
    case u.not_finite:
      t = 'Number must be finite';
      break;
    default:
      (t = e.defaultError), M.assertNever(r);
  }
  return { message: t };
};
let yr = ke;
function vs(r) {
  yr = r;
}
function nt() {
  return yr;
}
const at = (r) => {
    const { data: e, path: t, errorMaps: s, issueData: n } = r,
      a = [...t, ...(n.path || [])],
      i = { ...n, path: a };
    if (n.message !== void 0) {
      return { ...n, path: a, message: n.message };
    }
    let o = '';
    const d = s
      .filter((l) => !!l)
      .slice()
      .reverse();
    for (const l of d) {
      o = l(i, { data: e, defaultError: o }).message;
    }
    return { ...n, path: a, message: o };
  },
  ys = [];
function m(r, e) {
  const t = nt(),
    s = at({
      issueData: e,
      data: r.data,
      path: r.path,
      errorMaps: [r.common.contextualErrorMap, r.schemaErrorMap, t, t === ke ? void 0 : ke].filter((n) => !!n),
    });
  r.common.issues.push(s);
}
class N {
  constructor() {
    this.value = 'valid';
  }
  dirty() {
    this.value === 'valid' && (this.value = 'dirty');
  }
  abort() {
    this.value !== 'aborted' && (this.value = 'aborted');
  }
  static mergeArray(e, t) {
    const s = [];
    for (const n of t) {
      if (n.status === 'aborted') {
        return x;
      }
      n.status === 'dirty' && e.dirty(), s.push(n.value);
    }
    return { status: e.value, value: s };
  }
  static async mergeObjectAsync(e, t) {
    const s = [];
    for (const n of t) {
      const a = await n.key,
        i = await n.value;
      s.push({ key: a, value: i });
    }
    return N.mergeObjectSync(e, s);
  }
  static mergeObjectSync(e, t) {
    const s = {};
    for (const n of t) {
      const { key: a, value: i } = n;
      if (a.status === 'aborted' || i.status === 'aborted') {
        return x;
      }
      a.status === 'dirty' && e.dirty(),
        i.status === 'dirty' && e.dirty(),
        a.value !== '__proto__' && (typeof i.value < 'u' || n.alwaysSet) && (s[a.value] = i.value);
    }
    return { status: e.value, value: s };
  }
}
const x = Object.freeze({ status: 'aborted' }),
  _e = (r) => ({ status: 'dirty', value: r }),
  Z = (r) => ({ status: 'valid', value: r }),
  St = (r) => r.status === 'aborted',
  Mt = (r) => r.status === 'dirty',
  Fe = (r) => r.status === 'valid',
  Ne = (r) => typeof Promise < 'u' && r instanceof Promise;
function it(r, e, t, s) {
  if (typeof e == 'function' ? r !== e || !s : !e.has(r)) {
    throw new TypeError('Cannot read private member from an object whose class did not declare it');
  }
  return e.get(r);
}
function _r(r, e, t, s, n) {
  if (typeof e == 'function' ? r !== e || !n : !e.has(r)) {
    throw new TypeError('Cannot write private member to an object whose class did not declare it');
  }
  return e.set(r, t), t;
}
var v;
((r) => {
  (r.errToObj = (e) => (typeof e == 'string' ? { message: e } : e || {})),
    (r.toString = (e) => (typeof e == 'string' ? e : e?.message));
})(v || (v = {}));
var Ve, Oe;
class J {
  constructor(e, t, s, n) {
    (this._cachedPath = []), (this.parent = e), (this.data = t), (this._path = s), (this._key = n);
  }
  get path() {
    return (
      this._cachedPath.length ||
        (this._key instanceof Array
          ? this._cachedPath.push(...this._path, ...this._key)
          : this._cachedPath.push(...this._path, this._key)),
      this._cachedPath
    );
  }
}
const Lt = (r, e) => {
  if (Fe(e)) {
    return { success: !0, data: e.value };
  }
  if (!r.common.issues.length) {
    throw new Error('Validation failed but no issues detected.');
  }
  return {
    success: !1,
    get error() {
      if (this._error) {
        return this._error;
      }
      const t = new D(r.common.issues);
      return (this._error = t), this._error;
    },
  };
};
function k(r) {
  if (!r) {
    return {};
  }
  const { errorMap: e, invalid_type_error: t, required_error: s, description: n } = r;
  if (e && (t || s)) {
    throw new Error(`Can't use "invalid_type_error" or "required_error" in conjunction with custom error map.`);
  }
  return e
    ? { errorMap: e, description: n }
    : {
        errorMap: (i, o) => {
          var d, l;
          const { message: c } = r;
          return i.code === 'invalid_enum_value'
            ? { message: c ?? o.defaultError }
            : typeof o.data > 'u'
              ? { message: (d = c ?? s) !== null && d !== void 0 ? d : o.defaultError }
              : i.code !== 'invalid_type'
                ? { message: o.defaultError }
                : { message: (l = c ?? t) !== null && l !== void 0 ? l : o.defaultError };
        },
        description: n,
      };
}
class S {
  constructor(e) {
    (this.spa = this.safeParseAsync),
      (this._def = e),
      (this.parse = this.parse.bind(this)),
      (this.safeParse = this.safeParse.bind(this)),
      (this.parseAsync = this.parseAsync.bind(this)),
      (this.safeParseAsync = this.safeParseAsync.bind(this)),
      (this.spa = this.spa.bind(this)),
      (this.refine = this.refine.bind(this)),
      (this.refinement = this.refinement.bind(this)),
      (this.superRefine = this.superRefine.bind(this)),
      (this.optional = this.optional.bind(this)),
      (this.nullable = this.nullable.bind(this)),
      (this.nullish = this.nullish.bind(this)),
      (this.array = this.array.bind(this)),
      (this.promise = this.promise.bind(this)),
      (this.or = this.or.bind(this)),
      (this.and = this.and.bind(this)),
      (this.transform = this.transform.bind(this)),
      (this.brand = this.brand.bind(this)),
      (this.default = this.default.bind(this)),
      (this.catch = this.catch.bind(this)),
      (this.describe = this.describe.bind(this)),
      (this.pipe = this.pipe.bind(this)),
      (this.readonly = this.readonly.bind(this)),
      (this.isNullable = this.isNullable.bind(this)),
      (this.isOptional = this.isOptional.bind(this));
  }
  get description() {
    return this._def.description;
  }
  _getType(e) {
    return re(e.data);
  }
  _getOrReturnCtx(e, t) {
    return (
      t || {
        common: e.parent.common,
        data: e.data,
        parsedType: re(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      }
    );
  }
  _processInputParams(e) {
    return {
      status: new N(),
      ctx: {
        common: e.parent.common,
        data: e.data,
        parsedType: re(e.data),
        schemaErrorMap: this._def.errorMap,
        path: e.path,
        parent: e.parent,
      },
    };
  }
  _parseSync(e) {
    const t = this._parse(e);
    if (Ne(t)) {
      throw new Error('Synchronous parse encountered promise.');
    }
    return t;
  }
  _parseAsync(e) {
    const t = this._parse(e);
    return Promise.resolve(t);
  }
  parse(e, t) {
    const s = this.safeParse(e, t);
    if (s.success) {
      return s.data;
    }
    throw s.error;
  }
  safeParse(e, t) {
    var s;
    const n = {
        common: {
          issues: [],
          async: (s = t?.async) !== null && s !== void 0 ? s : !1,
          contextualErrorMap: t?.errorMap,
        },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: re(e),
      },
      a = this._parseSync({ data: e, path: n.path, parent: n });
    return Lt(n, a);
  }
  async parseAsync(e, t) {
    const s = await this.safeParseAsync(e, t);
    if (s.success) {
      return s.data;
    }
    throw s.error;
  }
  async safeParseAsync(e, t) {
    const s = {
        common: { issues: [], contextualErrorMap: t?.errorMap, async: !0 },
        path: t?.path || [],
        schemaErrorMap: this._def.errorMap,
        parent: null,
        data: e,
        parsedType: re(e),
      },
      n = this._parse({ data: e, path: s.path, parent: s }),
      a = await (Ne(n) ? n : Promise.resolve(n));
    return Lt(s, a);
  }
  refine(e, t) {
    const s = (n) => (typeof t == 'string' || typeof t > 'u' ? { message: t } : typeof t == 'function' ? t(n) : t);
    return this._refinement((n, a) => {
      const i = e(n),
        o = () => a.addIssue({ code: u.custom, ...s(n) });
      return typeof Promise < 'u' && i instanceof Promise ? i.then((d) => (d ? !0 : (o(), !1))) : i ? !0 : (o(), !1);
    });
  }
  refinement(e, t) {
    return this._refinement((s, n) => (e(s) ? !0 : (n.addIssue(typeof t == 'function' ? t(s, n) : t), !1)));
  }
  _refinement(e) {
    return new W({ schema: this, typeName: b.ZodEffects, effect: { type: 'refinement', refinement: e } });
  }
  superRefine(e) {
    return this._refinement(e);
  }
  optional() {
    return Y.create(this, this._def);
  }
  nullable() {
    return oe.create(this, this._def);
  }
  nullish() {
    return this.nullable().optional();
  }
  array() {
    return q.create(this, this._def);
  }
  promise() {
    return Me.create(this, this._def);
  }
  or(e) {
    return De.create([this, e], this._def);
  }
  and(e) {
    return Be.create(this, e, this._def);
  }
  transform(e) {
    return new W({
      ...k(this._def),
      schema: this,
      typeName: b.ZodEffects,
      effect: { type: 'transform', transform: e },
    });
  }
  default(e) {
    const t = typeof e == 'function' ? e : () => e;
    return new We({ ...k(this._def), innerType: this, defaultValue: t, typeName: b.ZodDefault });
  }
  brand() {
    return new Zt({ typeName: b.ZodBranded, type: this, ...k(this._def) });
  }
  catch(e) {
    const t = typeof e == 'function' ? e : () => e;
    return new Ke({ ...k(this._def), innerType: this, catchValue: t, typeName: b.ZodCatch });
  }
  describe(e) {
    const t = this.constructor;
    return new t({ ...this._def, description: e });
  }
  pipe(e) {
    return Xe.create(this, e);
  }
  readonly() {
    return He.create(this);
  }
  isOptional() {
    return this.safeParse(void 0).success;
  }
  isNullable() {
    return this.safeParse(null).success;
  }
}
const _s = /^c[^\s-]{8,}$/i,
  bs = /^[0-9a-z]+$/,
  xs = /^[0-9A-HJKMNP-TV-Z]{26}$/,
  ws = /^[0-9a-fA-F]{8}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{4}\b-[0-9a-fA-F]{12}$/i,
  ks = /^[a-z0-9_-]{21}$/i,
  Ss =
    /^[-+]?P(?!$)(?:(?:[-+]?\d+Y)|(?:[-+]?\d+[.,]\d+Y$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:(?:[-+]?\d+W)|(?:[-+]?\d+[.,]\d+W$))?(?:(?:[-+]?\d+D)|(?:[-+]?\d+[.,]\d+D$))?(?:T(?=[\d+-])(?:(?:[-+]?\d+H)|(?:[-+]?\d+[.,]\d+H$))?(?:(?:[-+]?\d+M)|(?:[-+]?\d+[.,]\d+M$))?(?:[-+]?\d+(?:[.,]\d+)?S)?)??$/,
  Ms = /^(?!\.)(?!.*\.\.)([A-Z0-9_'+\-.]*)[A-Z0-9_+-]@([A-Z0-9][A-Z0-9-]*\.)+[A-Z]{2,}$/i,
  Ts = '^(\\p{Extended_Pictographic}|\\p{Emoji_Component})+$';
let mt;
const Cs =
    /^(?:(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])\.){3}(?:25[0-5]|2[0-4][0-9]|1[0-9][0-9]|[1-9][0-9]|[0-9])$/,
  As =
    /^(([a-f0-9]{1,4}:){7}|::([a-f0-9]{1,4}:){0,6}|([a-f0-9]{1,4}:){1}:([a-f0-9]{1,4}:){0,5}|([a-f0-9]{1,4}:){2}:([a-f0-9]{1,4}:){0,4}|([a-f0-9]{1,4}:){3}:([a-f0-9]{1,4}:){0,3}|([a-f0-9]{1,4}:){4}:([a-f0-9]{1,4}:){0,2}|([a-f0-9]{1,4}:){5}:([a-f0-9]{1,4}:){0,1})([a-f0-9]{1,4}|(((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2}))\.){3}((25[0-5])|(2[0-4][0-9])|(1[0-9]{2})|([0-9]{1,2})))$/,
  $s = /^([0-9a-zA-Z+/]{4})*(([0-9a-zA-Z+/]{2}==)|([0-9a-zA-Z+/]{3}=))?$/,
  br =
    '((\\d\\d[2468][048]|\\d\\d[13579][26]|\\d\\d0[48]|[02468][048]00|[13579][26]00)-02-29|\\d{4}-((0[13578]|1[02])-(0[1-9]|[12]\\d|3[01])|(0[469]|11)-(0[1-9]|[12]\\d|30)|(02)-(0[1-9]|1\\d|2[0-8])))',
  Es = new RegExp(`^${br}$`);
function xr(r) {
  let e = '([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d';
  return r.precision ? (e = `${e}\\.\\d{${r.precision}}`) : r.precision == null && (e = `${e}(\\.\\d+)?`), e;
}
function Vs(r) {
  return new RegExp(`^${xr(r)}$`);
}
function wr(r) {
  let e = `${br}T${xr(r)}`;
  const t = [];
  return (
    t.push(r.local ? 'Z?' : 'Z'),
    r.offset && t.push('([+-]\\d{2}:?\\d{2})'),
    (e = `${e}(${t.join('|')})`),
    new RegExp(`^${e}$`)
  );
}
function Os(r, e) {
  return !!(((e === 'v4' || !e) && Cs.test(r)) || ((e === 'v6' || !e) && As.test(r)));
}
class U extends S {
  _parse(e) {
    if ((this._def.coerce && (e.data = String(e.data)), this._getType(e) !== p.string)) {
      const a = this._getOrReturnCtx(e);
      return m(a, { code: u.invalid_type, expected: p.string, received: a.parsedType }), x;
    }
    const s = new N();
    let n;
    for (const a of this._def.checks) {
      if (a.kind === 'min') {
        e.data.length < a.value &&
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { code: u.too_small, minimum: a.value, type: 'string', inclusive: !0, exact: !1, message: a.message }),
          s.dirty());
      } else if (a.kind === 'max') {
        e.data.length > a.value &&
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { code: u.too_big, maximum: a.value, type: 'string', inclusive: !0, exact: !1, message: a.message }),
          s.dirty());
      } else if (a.kind === 'length') {
        const i = e.data.length > a.value,
          o = e.data.length < a.value;
        (i || o) &&
          ((n = this._getOrReturnCtx(e, n)),
          i
            ? m(n, { code: u.too_big, maximum: a.value, type: 'string', inclusive: !0, exact: !0, message: a.message })
            : o &&
              m(n, {
                code: u.too_small,
                minimum: a.value,
                type: 'string',
                inclusive: !0,
                exact: !0,
                message: a.message,
              }),
          s.dirty());
      } else if (a.kind === 'email') {
        Ms.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { validation: 'email', code: u.invalid_string, message: a.message }),
          s.dirty());
      } else if (a.kind === 'emoji') {
        mt || (mt = new RegExp(Ts, 'u')),
          mt.test(e.data) ||
            ((n = this._getOrReturnCtx(e, n)),
            m(n, { validation: 'emoji', code: u.invalid_string, message: a.message }),
            s.dirty());
      } else if (a.kind === 'uuid') {
        ws.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { validation: 'uuid', code: u.invalid_string, message: a.message }),
          s.dirty());
      } else if (a.kind === 'nanoid') {
        ks.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { validation: 'nanoid', code: u.invalid_string, message: a.message }),
          s.dirty());
      } else if (a.kind === 'cuid') {
        _s.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { validation: 'cuid', code: u.invalid_string, message: a.message }),
          s.dirty());
      } else if (a.kind === 'cuid2') {
        bs.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { validation: 'cuid2', code: u.invalid_string, message: a.message }),
          s.dirty());
      } else if (a.kind === 'ulid') {
        xs.test(e.data) ||
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { validation: 'ulid', code: u.invalid_string, message: a.message }),
          s.dirty());
      } else if (a.kind === 'url') {
        try {
          new URL(e.data);
        } catch {
          (n = this._getOrReturnCtx(e, n)),
            m(n, { validation: 'url', code: u.invalid_string, message: a.message }),
            s.dirty();
        }
      } else {
        a.kind === 'regex'
          ? ((a.regex.lastIndex = 0),
            a.regex.test(e.data) ||
              ((n = this._getOrReturnCtx(e, n)),
              m(n, { validation: 'regex', code: u.invalid_string, message: a.message }),
              s.dirty()))
          : a.kind === 'trim'
            ? (e.data = e.data.trim())
            : a.kind === 'includes'
              ? e.data.includes(a.value, a.position) ||
                ((n = this._getOrReturnCtx(e, n)),
                m(n, {
                  code: u.invalid_string,
                  validation: { includes: a.value, position: a.position },
                  message: a.message,
                }),
                s.dirty())
              : a.kind === 'toLowerCase'
                ? (e.data = e.data.toLowerCase())
                : a.kind === 'toUpperCase'
                  ? (e.data = e.data.toUpperCase())
                  : a.kind === 'startsWith'
                    ? e.data.startsWith(a.value) ||
                      ((n = this._getOrReturnCtx(e, n)),
                      m(n, { code: u.invalid_string, validation: { startsWith: a.value }, message: a.message }),
                      s.dirty())
                    : a.kind === 'endsWith'
                      ? e.data.endsWith(a.value) ||
                        ((n = this._getOrReturnCtx(e, n)),
                        m(n, { code: u.invalid_string, validation: { endsWith: a.value }, message: a.message }),
                        s.dirty())
                      : a.kind === 'datetime'
                        ? wr(a).test(e.data) ||
                          ((n = this._getOrReturnCtx(e, n)),
                          m(n, { code: u.invalid_string, validation: 'datetime', message: a.message }),
                          s.dirty())
                        : a.kind === 'date'
                          ? Es.test(e.data) ||
                            ((n = this._getOrReturnCtx(e, n)),
                            m(n, { code: u.invalid_string, validation: 'date', message: a.message }),
                            s.dirty())
                          : a.kind === 'time'
                            ? Vs(a).test(e.data) ||
                              ((n = this._getOrReturnCtx(e, n)),
                              m(n, { code: u.invalid_string, validation: 'time', message: a.message }),
                              s.dirty())
                            : a.kind === 'duration'
                              ? Ss.test(e.data) ||
                                ((n = this._getOrReturnCtx(e, n)),
                                m(n, { validation: 'duration', code: u.invalid_string, message: a.message }),
                                s.dirty())
                              : a.kind === 'ip'
                                ? Os(e.data, a.version) ||
                                  ((n = this._getOrReturnCtx(e, n)),
                                  m(n, { validation: 'ip', code: u.invalid_string, message: a.message }),
                                  s.dirty())
                                : a.kind === 'base64'
                                  ? $s.test(e.data) ||
                                    ((n = this._getOrReturnCtx(e, n)),
                                    m(n, { validation: 'base64', code: u.invalid_string, message: a.message }),
                                    s.dirty())
                                  : M.assertNever(a);
      }
    }
    return { status: s.value, value: e.data };
  }
  _regex(e, t, s) {
    return this.refinement((n) => e.test(n), { validation: t, code: u.invalid_string, ...v.errToObj(s) });
  }
  _addCheck(e) {
    return new U({ ...this._def, checks: [...this._def.checks, e] });
  }
  email(e) {
    return this._addCheck({ kind: 'email', ...v.errToObj(e) });
  }
  url(e) {
    return this._addCheck({ kind: 'url', ...v.errToObj(e) });
  }
  emoji(e) {
    return this._addCheck({ kind: 'emoji', ...v.errToObj(e) });
  }
  uuid(e) {
    return this._addCheck({ kind: 'uuid', ...v.errToObj(e) });
  }
  nanoid(e) {
    return this._addCheck({ kind: 'nanoid', ...v.errToObj(e) });
  }
  cuid(e) {
    return this._addCheck({ kind: 'cuid', ...v.errToObj(e) });
  }
  cuid2(e) {
    return this._addCheck({ kind: 'cuid2', ...v.errToObj(e) });
  }
  ulid(e) {
    return this._addCheck({ kind: 'ulid', ...v.errToObj(e) });
  }
  base64(e) {
    return this._addCheck({ kind: 'base64', ...v.errToObj(e) });
  }
  ip(e) {
    return this._addCheck({ kind: 'ip', ...v.errToObj(e) });
  }
  datetime(e) {
    var t, s;
    return typeof e == 'string'
      ? this._addCheck({ kind: 'datetime', precision: null, offset: !1, local: !1, message: e })
      : this._addCheck({
          kind: 'datetime',
          precision: typeof e?.precision > 'u' ? null : e?.precision,
          offset: (t = e?.offset) !== null && t !== void 0 ? t : !1,
          local: (s = e?.local) !== null && s !== void 0 ? s : !1,
          ...v.errToObj(e?.message),
        });
  }
  date(e) {
    return this._addCheck({ kind: 'date', message: e });
  }
  time(e) {
    return typeof e == 'string'
      ? this._addCheck({ kind: 'time', precision: null, message: e })
      : this._addCheck({
          kind: 'time',
          precision: typeof e?.precision > 'u' ? null : e?.precision,
          ...v.errToObj(e?.message),
        });
  }
  duration(e) {
    return this._addCheck({ kind: 'duration', ...v.errToObj(e) });
  }
  regex(e, t) {
    return this._addCheck({ kind: 'regex', regex: e, ...v.errToObj(t) });
  }
  includes(e, t) {
    return this._addCheck({ kind: 'includes', value: e, position: t?.position, ...v.errToObj(t?.message) });
  }
  startsWith(e, t) {
    return this._addCheck({ kind: 'startsWith', value: e, ...v.errToObj(t) });
  }
  endsWith(e, t) {
    return this._addCheck({ kind: 'endsWith', value: e, ...v.errToObj(t) });
  }
  min(e, t) {
    return this._addCheck({ kind: 'min', value: e, ...v.errToObj(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: 'max', value: e, ...v.errToObj(t) });
  }
  length(e, t) {
    return this._addCheck({ kind: 'length', value: e, ...v.errToObj(t) });
  }
  nonempty(e) {
    return this.min(1, v.errToObj(e));
  }
  trim() {
    return new U({ ...this._def, checks: [...this._def.checks, { kind: 'trim' }] });
  }
  toLowerCase() {
    return new U({ ...this._def, checks: [...this._def.checks, { kind: 'toLowerCase' }] });
  }
  toUpperCase() {
    return new U({ ...this._def, checks: [...this._def.checks, { kind: 'toUpperCase' }] });
  }
  get isDatetime() {
    return !!this._def.checks.find((e) => e.kind === 'datetime');
  }
  get isDate() {
    return !!this._def.checks.find((e) => e.kind === 'date');
  }
  get isTime() {
    return !!this._def.checks.find((e) => e.kind === 'time');
  }
  get isDuration() {
    return !!this._def.checks.find((e) => e.kind === 'duration');
  }
  get isEmail() {
    return !!this._def.checks.find((e) => e.kind === 'email');
  }
  get isURL() {
    return !!this._def.checks.find((e) => e.kind === 'url');
  }
  get isEmoji() {
    return !!this._def.checks.find((e) => e.kind === 'emoji');
  }
  get isUUID() {
    return !!this._def.checks.find((e) => e.kind === 'uuid');
  }
  get isNANOID() {
    return !!this._def.checks.find((e) => e.kind === 'nanoid');
  }
  get isCUID() {
    return !!this._def.checks.find((e) => e.kind === 'cuid');
  }
  get isCUID2() {
    return !!this._def.checks.find((e) => e.kind === 'cuid2');
  }
  get isULID() {
    return !!this._def.checks.find((e) => e.kind === 'ulid');
  }
  get isIP() {
    return !!this._def.checks.find((e) => e.kind === 'ip');
  }
  get isBase64() {
    return !!this._def.checks.find((e) => e.kind === 'base64');
  }
  get minLength() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    }
    return e;
  }
  get maxLength() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    }
    return e;
  }
}
U.create = (r) => {
  var e;
  return new U({
    checks: [],
    typeName: b.ZodString,
    coerce: (e = r?.coerce) !== null && e !== void 0 ? e : !1,
    ...k(r),
  });
};
function Is(r, e) {
  const t = (r.toString().split('.')[1] || '').length,
    s = (e.toString().split('.')[1] || '').length,
    n = t > s ? t : s,
    a = Number.parseInt(r.toFixed(n).replace('.', '')),
    i = Number.parseInt(e.toFixed(n).replace('.', ''));
  return (a % i) / Math.pow(10, n);
}
class ne extends S {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte), (this.step = this.multipleOf);
  }
  _parse(e) {
    if ((this._def.coerce && (e.data = Number(e.data)), this._getType(e) !== p.number)) {
      const a = this._getOrReturnCtx(e);
      return m(a, { code: u.invalid_type, expected: p.number, received: a.parsedType }), x;
    }
    let s;
    const n = new N();
    for (const a of this._def.checks) {
      a.kind === 'int'
        ? M.isInteger(e.data) ||
          ((s = this._getOrReturnCtx(e, s)),
          m(s, { code: u.invalid_type, expected: 'integer', received: 'float', message: a.message }),
          n.dirty())
        : a.kind === 'min'
          ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
            ((s = this._getOrReturnCtx(e, s)),
            m(s, {
              code: u.too_small,
              minimum: a.value,
              type: 'number',
              inclusive: a.inclusive,
              exact: !1,
              message: a.message,
            }),
            n.dirty())
          : a.kind === 'max'
            ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
              ((s = this._getOrReturnCtx(e, s)),
              m(s, {
                code: u.too_big,
                maximum: a.value,
                type: 'number',
                inclusive: a.inclusive,
                exact: !1,
                message: a.message,
              }),
              n.dirty())
            : a.kind === 'multipleOf'
              ? Is(e.data, a.value) !== 0 &&
                ((s = this._getOrReturnCtx(e, s)),
                m(s, { code: u.not_multiple_of, multipleOf: a.value, message: a.message }),
                n.dirty())
              : a.kind === 'finite'
                ? Number.isFinite(e.data) ||
                  ((s = this._getOrReturnCtx(e, s)), m(s, { code: u.not_finite, message: a.message }), n.dirty())
                : M.assertNever(a);
    }
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit('min', e, !0, v.toString(t));
  }
  gt(e, t) {
    return this.setLimit('min', e, !1, v.toString(t));
  }
  lte(e, t) {
    return this.setLimit('max', e, !0, v.toString(t));
  }
  lt(e, t) {
    return this.setLimit('max', e, !1, v.toString(t));
  }
  setLimit(e, t, s, n) {
    return new ne({
      ...this._def,
      checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: v.toString(n) }],
    });
  }
  _addCheck(e) {
    return new ne({ ...this._def, checks: [...this._def.checks, e] });
  }
  int(e) {
    return this._addCheck({ kind: 'int', message: v.toString(e) });
  }
  positive(e) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !1, message: v.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !1, message: v.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: 'max', value: 0, inclusive: !0, message: v.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: 'min', value: 0, inclusive: !0, message: v.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: 'multipleOf', value: e, message: v.toString(t) });
  }
  finite(e) {
    return this._addCheck({ kind: 'finite', message: v.toString(e) });
  }
  safe(e) {
    return this._addCheck({
      kind: 'min',
      inclusive: !0,
      value: Number.MIN_SAFE_INTEGER,
      message: v.toString(e),
    })._addCheck({ kind: 'max', inclusive: !0, value: Number.MAX_SAFE_INTEGER, message: v.toString(e) });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    }
    return e;
  }
  get isInt() {
    return !!this._def.checks.find((e) => e.kind === 'int' || (e.kind === 'multipleOf' && M.isInteger(e.value)));
  }
  get isFinite() {
    let e = null,
      t = null;
    for (const s of this._def.checks) {
      if (s.kind === 'finite' || s.kind === 'int' || s.kind === 'multipleOf') {
        return !0;
      }
      s.kind === 'min'
        ? (t === null || s.value > t) && (t = s.value)
        : s.kind === 'max' && (e === null || s.value < e) && (e = s.value);
    }
    return Number.isFinite(t) && Number.isFinite(e);
  }
}
ne.create = (r) => new ne({ checks: [], typeName: b.ZodNumber, coerce: r?.coerce || !1, ...k(r) });
class Ae extends S {
  constructor() {
    super(...arguments), (this.min = this.gte), (this.max = this.lte);
  }
  _parse(e) {
    if ((this._def.coerce && (e.data = BigInt(e.data)), this._getType(e) !== p.bigint)) {
      const a = this._getOrReturnCtx(e);
      return m(a, { code: u.invalid_type, expected: p.bigint, received: a.parsedType }), x;
    }
    let s;
    const n = new N();
    for (const a of this._def.checks) {
      a.kind === 'min'
        ? (a.inclusive ? e.data < a.value : e.data <= a.value) &&
          ((s = this._getOrReturnCtx(e, s)),
          m(s, { code: u.too_small, type: 'bigint', minimum: a.value, inclusive: a.inclusive, message: a.message }),
          n.dirty())
        : a.kind === 'max'
          ? (a.inclusive ? e.data > a.value : e.data >= a.value) &&
            ((s = this._getOrReturnCtx(e, s)),
            m(s, { code: u.too_big, type: 'bigint', maximum: a.value, inclusive: a.inclusive, message: a.message }),
            n.dirty())
          : a.kind === 'multipleOf'
            ? e.data % a.value !== BigInt(0) &&
              ((s = this._getOrReturnCtx(e, s)),
              m(s, { code: u.not_multiple_of, multipleOf: a.value, message: a.message }),
              n.dirty())
            : M.assertNever(a);
    }
    return { status: n.value, value: e.data };
  }
  gte(e, t) {
    return this.setLimit('min', e, !0, v.toString(t));
  }
  gt(e, t) {
    return this.setLimit('min', e, !1, v.toString(t));
  }
  lte(e, t) {
    return this.setLimit('max', e, !0, v.toString(t));
  }
  lt(e, t) {
    return this.setLimit('max', e, !1, v.toString(t));
  }
  setLimit(e, t, s, n) {
    return new Ae({
      ...this._def,
      checks: [...this._def.checks, { kind: e, value: t, inclusive: s, message: v.toString(n) }],
    });
  }
  _addCheck(e) {
    return new Ae({ ...this._def, checks: [...this._def.checks, e] });
  }
  positive(e) {
    return this._addCheck({ kind: 'min', value: BigInt(0), inclusive: !1, message: v.toString(e) });
  }
  negative(e) {
    return this._addCheck({ kind: 'max', value: BigInt(0), inclusive: !1, message: v.toString(e) });
  }
  nonpositive(e) {
    return this._addCheck({ kind: 'max', value: BigInt(0), inclusive: !0, message: v.toString(e) });
  }
  nonnegative(e) {
    return this._addCheck({ kind: 'min', value: BigInt(0), inclusive: !0, message: v.toString(e) });
  }
  multipleOf(e, t) {
    return this._addCheck({ kind: 'multipleOf', value: e, message: v.toString(t) });
  }
  get minValue() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    }
    return e;
  }
  get maxValue() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    }
    return e;
  }
}
Ae.create = (r) => {
  var e;
  return new Ae({
    checks: [],
    typeName: b.ZodBigInt,
    coerce: (e = r?.coerce) !== null && e !== void 0 ? e : !1,
    ...k(r),
  });
};
class Ze extends S {
  _parse(e) {
    if ((this._def.coerce && (e.data = !!e.data), this._getType(e) !== p.boolean)) {
      const s = this._getOrReturnCtx(e);
      return m(s, { code: u.invalid_type, expected: p.boolean, received: s.parsedType }), x;
    }
    return Z(e.data);
  }
}
Ze.create = (r) => new Ze({ typeName: b.ZodBoolean, coerce: r?.coerce || !1, ...k(r) });
class me extends S {
  _parse(e) {
    if ((this._def.coerce && (e.data = new Date(e.data)), this._getType(e) !== p.date)) {
      const a = this._getOrReturnCtx(e);
      return m(a, { code: u.invalid_type, expected: p.date, received: a.parsedType }), x;
    }
    if (isNaN(e.data.getTime())) {
      const a = this._getOrReturnCtx(e);
      return m(a, { code: u.invalid_date }), x;
    }
    const s = new N();
    let n;
    for (const a of this._def.checks) {
      a.kind === 'min'
        ? e.data.getTime() < a.value &&
          ((n = this._getOrReturnCtx(e, n)),
          m(n, { code: u.too_small, message: a.message, inclusive: !0, exact: !1, minimum: a.value, type: 'date' }),
          s.dirty())
        : a.kind === 'max'
          ? e.data.getTime() > a.value &&
            ((n = this._getOrReturnCtx(e, n)),
            m(n, { code: u.too_big, message: a.message, inclusive: !0, exact: !1, maximum: a.value, type: 'date' }),
            s.dirty())
          : M.assertNever(a);
    }
    return { status: s.value, value: new Date(e.data.getTime()) };
  }
  _addCheck(e) {
    return new me({ ...this._def, checks: [...this._def.checks, e] });
  }
  min(e, t) {
    return this._addCheck({ kind: 'min', value: e.getTime(), message: v.toString(t) });
  }
  max(e, t) {
    return this._addCheck({ kind: 'max', value: e.getTime(), message: v.toString(t) });
  }
  get minDate() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'min' && (e === null || t.value > e) && (e = t.value);
    }
    return e != null ? new Date(e) : null;
  }
  get maxDate() {
    let e = null;
    for (const t of this._def.checks) {
      t.kind === 'max' && (e === null || t.value < e) && (e = t.value);
    }
    return e != null ? new Date(e) : null;
  }
}
me.create = (r) => new me({ checks: [], coerce: r?.coerce || !1, typeName: b.ZodDate, ...k(r) });
class ot extends S {
  _parse(e) {
    if (this._getType(e) !== p.symbol) {
      const s = this._getOrReturnCtx(e);
      return m(s, { code: u.invalid_type, expected: p.symbol, received: s.parsedType }), x;
    }
    return Z(e.data);
  }
}
ot.create = (r) => new ot({ typeName: b.ZodSymbol, ...k(r) });
class Re extends S {
  _parse(e) {
    if (this._getType(e) !== p.undefined) {
      const s = this._getOrReturnCtx(e);
      return m(s, { code: u.invalid_type, expected: p.undefined, received: s.parsedType }), x;
    }
    return Z(e.data);
  }
}
Re.create = (r) => new Re({ typeName: b.ZodUndefined, ...k(r) });
class je extends S {
  _parse(e) {
    if (this._getType(e) !== p.null) {
      const s = this._getOrReturnCtx(e);
      return m(s, { code: u.invalid_type, expected: p.null, received: s.parsedType }), x;
    }
    return Z(e.data);
  }
}
je.create = (r) => new je({ typeName: b.ZodNull, ...k(r) });
class Se extends S {
  constructor() {
    super(...arguments), (this._any = !0);
  }
  _parse(e) {
    return Z(e.data);
  }
}
Se.create = (r) => new Se({ typeName: b.ZodAny, ...k(r) });
class fe extends S {
  constructor() {
    super(...arguments), (this._unknown = !0);
  }
  _parse(e) {
    return Z(e.data);
  }
}
fe.create = (r) => new fe({ typeName: b.ZodUnknown, ...k(r) });
class ee extends S {
  _parse(e) {
    const t = this._getOrReturnCtx(e);
    return m(t, { code: u.invalid_type, expected: p.never, received: t.parsedType }), x;
  }
}
ee.create = (r) => new ee({ typeName: b.ZodNever, ...k(r) });
class lt extends S {
  _parse(e) {
    if (this._getType(e) !== p.undefined) {
      const s = this._getOrReturnCtx(e);
      return m(s, { code: u.invalid_type, expected: p.void, received: s.parsedType }), x;
    }
    return Z(e.data);
  }
}
lt.create = (r) => new lt({ typeName: b.ZodVoid, ...k(r) });
class q extends S {
  _parse(e) {
    const { ctx: t, status: s } = this._processInputParams(e),
      n = this._def;
    if (t.parsedType !== p.array) {
      return m(t, { code: u.invalid_type, expected: p.array, received: t.parsedType }), x;
    }
    if (n.exactLength !== null) {
      const i = t.data.length > n.exactLength.value,
        o = t.data.length < n.exactLength.value;
      (i || o) &&
        (m(t, {
          code: i ? u.too_big : u.too_small,
          minimum: o ? n.exactLength.value : void 0,
          maximum: i ? n.exactLength.value : void 0,
          type: 'array',
          inclusive: !0,
          exact: !0,
          message: n.exactLength.message,
        }),
        s.dirty());
    }
    if (
      (n.minLength !== null &&
        t.data.length < n.minLength.value &&
        (m(t, {
          code: u.too_small,
          minimum: n.minLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: n.minLength.message,
        }),
        s.dirty()),
      n.maxLength !== null &&
        t.data.length > n.maxLength.value &&
        (m(t, {
          code: u.too_big,
          maximum: n.maxLength.value,
          type: 'array',
          inclusive: !0,
          exact: !1,
          message: n.maxLength.message,
        }),
        s.dirty()),
      t.common.async)
    ) {
      return Promise.all([...t.data].map((i, o) => n.type._parseAsync(new J(t, i, t.path, o)))).then((i) =>
        N.mergeArray(s, i),
      );
    }
    const a = [...t.data].map((i, o) => n.type._parseSync(new J(t, i, t.path, o)));
    return N.mergeArray(s, a);
  }
  get element() {
    return this._def.type;
  }
  min(e, t) {
    return new q({ ...this._def, minLength: { value: e, message: v.toString(t) } });
  }
  max(e, t) {
    return new q({ ...this._def, maxLength: { value: e, message: v.toString(t) } });
  }
  length(e, t) {
    return new q({ ...this._def, exactLength: { value: e, message: v.toString(t) } });
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
q.create = (r, e) =>
  new q({ type: r, minLength: null, maxLength: null, exactLength: null, typeName: b.ZodArray, ...k(e) });
function ye(r) {
  if (r instanceof V) {
    const e = {};
    for (const t in r.shape) {
      const s = r.shape[t];
      e[t] = Y.create(ye(s));
    }
    return new V({ ...r._def, shape: () => e });
  } else {
    return r instanceof q
      ? new q({ ...r._def, type: ye(r.element) })
      : r instanceof Y
        ? Y.create(ye(r.unwrap()))
        : r instanceof oe
          ? oe.create(ye(r.unwrap()))
          : r instanceof G
            ? G.create(r.items.map((e) => ye(e)))
            : r;
  }
}
class V extends S {
  constructor() {
    super(...arguments), (this._cached = null), (this.nonstrict = this.passthrough), (this.augment = this.extend);
  }
  _getCached() {
    if (this._cached !== null) {
      return this._cached;
    }
    const e = this._def.shape(),
      t = M.objectKeys(e);
    return (this._cached = { shape: e, keys: t });
  }
  _parse(e) {
    if (this._getType(e) !== p.object) {
      const l = this._getOrReturnCtx(e);
      return m(l, { code: u.invalid_type, expected: p.object, received: l.parsedType }), x;
    }
    const { status: s, ctx: n } = this._processInputParams(e),
      { shape: a, keys: i } = this._getCached(),
      o = [];
    if (!(this._def.catchall instanceof ee && this._def.unknownKeys === 'strip')) {
      for (const l in n.data) {
        i.includes(l) || o.push(l);
      }
    }
    const d = [];
    for (const l of i) {
      const c = a[l],
        h = n.data[l];
      d.push({ key: { status: 'valid', value: l }, value: c._parse(new J(n, h, n.path, l)), alwaysSet: l in n.data });
    }
    if (this._def.catchall instanceof ee) {
      const l = this._def.unknownKeys;
      if (l === 'passthrough') {
        for (const c of o) {
          d.push({ key: { status: 'valid', value: c }, value: { status: 'valid', value: n.data[c] } });
        }
      } else if (l === 'strict') {
        o.length > 0 && (m(n, { code: u.unrecognized_keys, keys: o }), s.dirty());
      } else if (l !== 'strip') {
        throw new Error('Internal ZodObject error: invalid unknownKeys value.');
      }
    } else {
      const l = this._def.catchall;
      for (const c of o) {
        const h = n.data[c];
        d.push({ key: { status: 'valid', value: c }, value: l._parse(new J(n, h, n.path, c)), alwaysSet: c in n.data });
      }
    }
    return n.common.async
      ? Promise.resolve()
          .then(async () => {
            const l = [];
            for (const c of d) {
              const h = await c.key,
                f = await c.value;
              l.push({ key: h, value: f, alwaysSet: c.alwaysSet });
            }
            return l;
          })
          .then((l) => N.mergeObjectSync(s, l))
      : N.mergeObjectSync(s, d);
  }
  get shape() {
    return this._def.shape();
  }
  strict(e) {
    return (
      v.errToObj,
      new V({
        ...this._def,
        unknownKeys: 'strict',
        ...(e !== void 0
          ? {
              errorMap: (t, s) => {
                var n, a, i, o;
                const d =
                  (i = (a = (n = this._def).errorMap) === null || a === void 0 ? void 0 : a.call(n, t, s).message) !==
                    null && i !== void 0
                    ? i
                    : s.defaultError;
                return t.code === 'unrecognized_keys'
                  ? { message: (o = v.errToObj(e).message) !== null && o !== void 0 ? o : d }
                  : { message: d };
              },
            }
          : {}),
      })
    );
  }
  strip() {
    return new V({ ...this._def, unknownKeys: 'strip' });
  }
  passthrough() {
    return new V({ ...this._def, unknownKeys: 'passthrough' });
  }
  extend(e) {
    return new V({ ...this._def, shape: () => ({ ...this._def.shape(), ...e }) });
  }
  merge(e) {
    return new V({
      unknownKeys: e._def.unknownKeys,
      catchall: e._def.catchall,
      shape: () => ({ ...this._def.shape(), ...e._def.shape() }),
      typeName: b.ZodObject,
    });
  }
  setKey(e, t) {
    return this.augment({ [e]: t });
  }
  catchall(e) {
    return new V({ ...this._def, catchall: e });
  }
  pick(e) {
    const t = {};
    return (
      M.objectKeys(e).forEach((s) => {
        e[s] && this.shape[s] && (t[s] = this.shape[s]);
      }),
      new V({ ...this._def, shape: () => t })
    );
  }
  omit(e) {
    const t = {};
    return (
      M.objectKeys(this.shape).forEach((s) => {
        e[s] || (t[s] = this.shape[s]);
      }),
      new V({ ...this._def, shape: () => t })
    );
  }
  deepPartial() {
    return ye(this);
  }
  partial(e) {
    const t = {};
    return (
      M.objectKeys(this.shape).forEach((s) => {
        const n = this.shape[s];
        e && !e[s] ? (t[s] = n) : (t[s] = n.optional());
      }),
      new V({ ...this._def, shape: () => t })
    );
  }
  required(e) {
    const t = {};
    return (
      M.objectKeys(this.shape).forEach((s) => {
        if (e && !e[s]) {
          t[s] = this.shape[s];
        } else {
          let a = this.shape[s];
          while (a instanceof Y) {
            a = a._def.innerType;
          }
          t[s] = a;
        }
      }),
      new V({ ...this._def, shape: () => t })
    );
  }
  keyof() {
    return kr(M.objectKeys(this.shape));
  }
}
V.create = (r, e) =>
  new V({ shape: () => r, unknownKeys: 'strip', catchall: ee.create(), typeName: b.ZodObject, ...k(e) });
V.strictCreate = (r, e) =>
  new V({ shape: () => r, unknownKeys: 'strict', catchall: ee.create(), typeName: b.ZodObject, ...k(e) });
V.lazycreate = (r, e) =>
  new V({ shape: r, unknownKeys: 'strip', catchall: ee.create(), typeName: b.ZodObject, ...k(e) });
class De extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = this._def.options;
    function n(a) {
      for (const o of a) {
        if (o.result.status === 'valid') {
          return o.result;
        }
      }
      for (const o of a) {
        if (o.result.status === 'dirty') {
          return t.common.issues.push(...o.ctx.common.issues), o.result;
        }
      }
      const i = a.map((o) => new D(o.ctx.common.issues));
      return m(t, { code: u.invalid_union, unionErrors: i }), x;
    }
    if (t.common.async) {
      return Promise.all(
        s.map(async (a) => {
          const i = { ...t, common: { ...t.common, issues: [] }, parent: null };
          return { result: await a._parseAsync({ data: t.data, path: t.path, parent: i }), ctx: i };
        }),
      ).then(n);
    }
    {
      let a;
      const i = [];
      for (const d of s) {
        const l = { ...t, common: { ...t.common, issues: [] }, parent: null },
          c = d._parseSync({ data: t.data, path: t.path, parent: l });
        if (c.status === 'valid') {
          return c;
        }
        c.status === 'dirty' && !a && (a = { result: c, ctx: l }), l.common.issues.length && i.push(l.common.issues);
      }
      if (a) {
        return t.common.issues.push(...a.ctx.common.issues), a.result;
      }
      const o = i.map((d) => new D(d));
      return m(t, { code: u.invalid_union, unionErrors: o }), x;
    }
  }
  get options() {
    return this._def.options;
  }
}
De.create = (r, e) => new De({ options: r, typeName: b.ZodUnion, ...k(e) });
const X = (r) =>
  r instanceof ze
    ? X(r.schema)
    : r instanceof W
      ? X(r.innerType())
      : r instanceof Ue
        ? [r.value]
        : r instanceof ie
          ? r.options
          : r instanceof qe
            ? M.objectValues(r.enum)
            : r instanceof We
              ? X(r._def.innerType)
              : r instanceof Re
                ? [void 0]
                : r instanceof je
                  ? [null]
                  : r instanceof Y
                    ? [void 0, ...X(r.unwrap())]
                    : r instanceof oe
                      ? [null, ...X(r.unwrap())]
                      : r instanceof Zt || r instanceof He
                        ? X(r.unwrap())
                        : r instanceof Ke
                          ? X(r._def.innerType)
                          : [];
class ut extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== p.object) {
      return m(t, { code: u.invalid_type, expected: p.object, received: t.parsedType }), x;
    }
    const s = this.discriminator,
      n = t.data[s],
      a = this.optionsMap.get(n);
    return a
      ? t.common.async
        ? a._parseAsync({ data: t.data, path: t.path, parent: t })
        : a._parseSync({ data: t.data, path: t.path, parent: t })
      : (m(t, { code: u.invalid_union_discriminator, options: Array.from(this.optionsMap.keys()), path: [s] }), x);
  }
  get discriminator() {
    return this._def.discriminator;
  }
  get options() {
    return this._def.options;
  }
  get optionsMap() {
    return this._def.optionsMap;
  }
  static create(e, t, s) {
    const n = new Map();
    for (const a of t) {
      const i = X(a.shape[e]);
      if (!i.length) {
        throw new Error(`A discriminator value for key \`${e}\` could not be extracted from all schema options`);
      }
      for (const o of i) {
        if (n.has(o)) {
          throw new Error(`Discriminator property ${String(e)} has duplicate value ${String(o)}`);
        }
        n.set(o, a);
      }
    }
    return new ut({ typeName: b.ZodDiscriminatedUnion, discriminator: e, options: t, optionsMap: n, ...k(s) });
  }
}
function Tt(r, e) {
  const t = re(r),
    s = re(e);
  if (r === e) {
    return { valid: !0, data: r };
  }
  if (t === p.object && s === p.object) {
    const n = M.objectKeys(e),
      a = M.objectKeys(r).filter((o) => n.indexOf(o) !== -1),
      i = { ...r, ...e };
    for (const o of a) {
      const d = Tt(r[o], e[o]);
      if (!d.valid) {
        return { valid: !1 };
      }
      i[o] = d.data;
    }
    return { valid: !0, data: i };
  } else if (t === p.array && s === p.array) {
    if (r.length !== e.length) {
      return { valid: !1 };
    }
    const n = [];
    for (let a = 0; a < r.length; a++) {
      const i = r[a],
        o = e[a],
        d = Tt(i, o);
      if (!d.valid) {
        return { valid: !1 };
      }
      n.push(d.data);
    }
    return { valid: !0, data: n };
  } else {
    return t === p.date && s === p.date && +r == +e ? { valid: !0, data: r } : { valid: !1 };
  }
}
class Be extends S {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e),
      n = (a, i) => {
        if (St(a) || St(i)) {
          return x;
        }
        const o = Tt(a.value, i.value);
        return o.valid
          ? ((Mt(a) || Mt(i)) && t.dirty(), { status: t.value, value: o.data })
          : (m(s, { code: u.invalid_intersection_types }), x);
      };
    return s.common.async
      ? Promise.all([
          this._def.left._parseAsync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseAsync({ data: s.data, path: s.path, parent: s }),
        ]).then(([a, i]) => n(a, i))
      : n(
          this._def.left._parseSync({ data: s.data, path: s.path, parent: s }),
          this._def.right._parseSync({ data: s.data, path: s.path, parent: s }),
        );
  }
}
Be.create = (r, e, t) => new Be({ left: r, right: e, typeName: b.ZodIntersection, ...k(t) });
class G extends S {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== p.array) {
      return m(s, { code: u.invalid_type, expected: p.array, received: s.parsedType }), x;
    }
    if (s.data.length < this._def.items.length) {
      return m(s, { code: u.too_small, minimum: this._def.items.length, inclusive: !0, exact: !1, type: 'array' }), x;
    }
    !this._def.rest &&
      s.data.length > this._def.items.length &&
      (m(s, { code: u.too_big, maximum: this._def.items.length, inclusive: !0, exact: !1, type: 'array' }), t.dirty());
    const a = [...s.data]
      .map((i, o) => {
        const d = this._def.items[o] || this._def.rest;
        return d ? d._parse(new J(s, i, s.path, o)) : null;
      })
      .filter((i) => !!i);
    return s.common.async ? Promise.all(a).then((i) => N.mergeArray(t, i)) : N.mergeArray(t, a);
  }
  get items() {
    return this._def.items;
  }
  rest(e) {
    return new G({ ...this._def, rest: e });
  }
}
G.create = (r, e) => {
  if (!Array.isArray(r)) {
    throw new Error('You must pass an array of schemas to z.tuple([ ... ])');
  }
  return new G({ items: r, typeName: b.ZodTuple, rest: null, ...k(e) });
};
class Le extends S {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== p.object) {
      return m(s, { code: u.invalid_type, expected: p.object, received: s.parsedType }), x;
    }
    const n = [],
      a = this._def.keyType,
      i = this._def.valueType;
    for (const o in s.data) {
      n.push({
        key: a._parse(new J(s, o, s.path, o)),
        value: i._parse(new J(s, s.data[o], s.path, o)),
        alwaysSet: o in s.data,
      });
    }
    return s.common.async ? N.mergeObjectAsync(t, n) : N.mergeObjectSync(t, n);
  }
  get element() {
    return this._def.valueType;
  }
  static create(e, t, s) {
    return t instanceof S
      ? new Le({ keyType: e, valueType: t, typeName: b.ZodRecord, ...k(s) })
      : new Le({ keyType: U.create(), valueType: e, typeName: b.ZodRecord, ...k(t) });
  }
}
class dt extends S {
  get keySchema() {
    return this._def.keyType;
  }
  get valueSchema() {
    return this._def.valueType;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== p.map) {
      return m(s, { code: u.invalid_type, expected: p.map, received: s.parsedType }), x;
    }
    const n = this._def.keyType,
      a = this._def.valueType,
      i = [...s.data.entries()].map(([o, d], l) => ({
        key: n._parse(new J(s, o, s.path, [l, 'key'])),
        value: a._parse(new J(s, d, s.path, [l, 'value'])),
      }));
    if (s.common.async) {
      const o = new Map();
      return Promise.resolve().then(async () => {
        for (const d of i) {
          const l = await d.key,
            c = await d.value;
          if (l.status === 'aborted' || c.status === 'aborted') {
            return x;
          }
          (l.status === 'dirty' || c.status === 'dirty') && t.dirty(), o.set(l.value, c.value);
        }
        return { status: t.value, value: o };
      });
    } else {
      const o = new Map();
      for (const d of i) {
        const l = d.key,
          c = d.value;
        if (l.status === 'aborted' || c.status === 'aborted') {
          return x;
        }
        (l.status === 'dirty' || c.status === 'dirty') && t.dirty(), o.set(l.value, c.value);
      }
      return { status: t.value, value: o };
    }
  }
}
dt.create = (r, e, t) => new dt({ valueType: e, keyType: r, typeName: b.ZodMap, ...k(t) });
class pe extends S {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.parsedType !== p.set) {
      return m(s, { code: u.invalid_type, expected: p.set, received: s.parsedType }), x;
    }
    const n = this._def;
    n.minSize !== null &&
      s.data.size < n.minSize.value &&
      (m(s, {
        code: u.too_small,
        minimum: n.minSize.value,
        type: 'set',
        inclusive: !0,
        exact: !1,
        message: n.minSize.message,
      }),
      t.dirty()),
      n.maxSize !== null &&
        s.data.size > n.maxSize.value &&
        (m(s, {
          code: u.too_big,
          maximum: n.maxSize.value,
          type: 'set',
          inclusive: !0,
          exact: !1,
          message: n.maxSize.message,
        }),
        t.dirty());
    const a = this._def.valueType;
    function i(d) {
      const l = new Set();
      for (const c of d) {
        if (c.status === 'aborted') {
          return x;
        }
        c.status === 'dirty' && t.dirty(), l.add(c.value);
      }
      return { status: t.value, value: l };
    }
    const o = [...s.data.values()].map((d, l) => a._parse(new J(s, d, s.path, l)));
    return s.common.async ? Promise.all(o).then((d) => i(d)) : i(o);
  }
  min(e, t) {
    return new pe({ ...this._def, minSize: { value: e, message: v.toString(t) } });
  }
  max(e, t) {
    return new pe({ ...this._def, maxSize: { value: e, message: v.toString(t) } });
  }
  size(e, t) {
    return this.min(e, t).max(e, t);
  }
  nonempty(e) {
    return this.min(1, e);
  }
}
pe.create = (r, e) => new pe({ valueType: r, minSize: null, maxSize: null, typeName: b.ZodSet, ...k(e) });
class xe extends S {
  constructor() {
    super(...arguments), (this.validate = this.implement);
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== p.function) {
      return m(t, { code: u.invalid_type, expected: p.function, received: t.parsedType }), x;
    }
    function s(o, d) {
      return at({
        data: o,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, nt(), ke].filter((l) => !!l),
        issueData: { code: u.invalid_arguments, argumentsError: d },
      });
    }
    function n(o, d) {
      return at({
        data: o,
        path: t.path,
        errorMaps: [t.common.contextualErrorMap, t.schemaErrorMap, nt(), ke].filter((l) => !!l),
        issueData: { code: u.invalid_return_type, returnTypeError: d },
      });
    }
    const a = { errorMap: t.common.contextualErrorMap },
      i = t.data;
    if (this._def.returns instanceof Me) {
      const o = this;
      return Z(async function (...d) {
        const l = new D([]),
          c = await o._def.args.parseAsync(d, a).catch((g) => {
            throw (l.addIssue(s(d, g)), l);
          }),
          h = await Reflect.apply(i, this, c);
        return await o._def.returns._def.type.parseAsync(h, a).catch((g) => {
          throw (l.addIssue(n(h, g)), l);
        });
      });
    } else {
      const o = this;
      return Z(function (...d) {
        const l = o._def.args.safeParse(d, a);
        if (!l.success) {
          throw new D([s(d, l.error)]);
        }
        const c = Reflect.apply(i, this, l.data),
          h = o._def.returns.safeParse(c, a);
        if (!h.success) {
          throw new D([n(c, h.error)]);
        }
        return h.data;
      });
    }
  }
  parameters() {
    return this._def.args;
  }
  returnType() {
    return this._def.returns;
  }
  args(...e) {
    return new xe({ ...this._def, args: G.create(e).rest(fe.create()) });
  }
  returns(e) {
    return new xe({ ...this._def, returns: e });
  }
  implement(e) {
    return this.parse(e);
  }
  strictImplement(e) {
    return this.parse(e);
  }
  static create(e, t, s) {
    return new xe({
      args: e || G.create([]).rest(fe.create()),
      returns: t || fe.create(),
      typeName: b.ZodFunction,
      ...k(s),
    });
  }
}
class ze extends S {
  get schema() {
    return this._def.getter();
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    return this._def.getter()._parse({ data: t.data, path: t.path, parent: t });
  }
}
ze.create = (r, e) => new ze({ getter: r, typeName: b.ZodLazy, ...k(e) });
class Ue extends S {
  _parse(e) {
    if (e.data !== this._def.value) {
      const t = this._getOrReturnCtx(e);
      return m(t, { received: t.data, code: u.invalid_literal, expected: this._def.value }), x;
    }
    return { status: 'valid', value: e.data };
  }
  get value() {
    return this._def.value;
  }
}
Ue.create = (r, e) => new Ue({ value: r, typeName: b.ZodLiteral, ...k(e) });
function kr(r, e) {
  return new ie({ values: r, typeName: b.ZodEnum, ...k(e) });
}
class ie extends S {
  constructor() {
    super(...arguments), Ve.set(this, void 0);
  }
  _parse(e) {
    if (typeof e.data != 'string') {
      const t = this._getOrReturnCtx(e),
        s = this._def.values;
      return m(t, { expected: M.joinValues(s), received: t.parsedType, code: u.invalid_type }), x;
    }
    if ((it(this, Ve) || _r(this, Ve, new Set(this._def.values)), !it(this, Ve).has(e.data))) {
      const t = this._getOrReturnCtx(e),
        s = this._def.values;
      return m(t, { received: t.data, code: u.invalid_enum_value, options: s }), x;
    }
    return Z(e.data);
  }
  get options() {
    return this._def.values;
  }
  get enum() {
    const e = {};
    for (const t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  get Values() {
    const e = {};
    for (const t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  get Enum() {
    const e = {};
    for (const t of this._def.values) {
      e[t] = t;
    }
    return e;
  }
  extract(e, t = this._def) {
    return ie.create(e, { ...this._def, ...t });
  }
  exclude(e, t = this._def) {
    return ie.create(
      this.options.filter((s) => !e.includes(s)),
      { ...this._def, ...t },
    );
  }
}
Ve = new WeakMap();
ie.create = kr;
class qe extends S {
  constructor() {
    super(...arguments), Oe.set(this, void 0);
  }
  _parse(e) {
    const t = M.getValidEnumValues(this._def.values),
      s = this._getOrReturnCtx(e);
    if (s.parsedType !== p.string && s.parsedType !== p.number) {
      const n = M.objectValues(t);
      return m(s, { expected: M.joinValues(n), received: s.parsedType, code: u.invalid_type }), x;
    }
    if ((it(this, Oe) || _r(this, Oe, new Set(M.getValidEnumValues(this._def.values))), !it(this, Oe).has(e.data))) {
      const n = M.objectValues(t);
      return m(s, { received: s.data, code: u.invalid_enum_value, options: n }), x;
    }
    return Z(e.data);
  }
  get enum() {
    return this._def.values;
  }
}
Oe = new WeakMap();
qe.create = (r, e) => new qe({ values: r, typeName: b.ZodNativeEnum, ...k(e) });
class Me extends S {
  unwrap() {
    return this._def.type;
  }
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    if (t.parsedType !== p.promise && t.common.async === !1) {
      return m(t, { code: u.invalid_type, expected: p.promise, received: t.parsedType }), x;
    }
    const s = t.parsedType === p.promise ? t.data : Promise.resolve(t.data);
    return Z(s.then((n) => this._def.type.parseAsync(n, { path: t.path, errorMap: t.common.contextualErrorMap })));
  }
}
Me.create = (r, e) => new Me({ type: r, typeName: b.ZodPromise, ...k(e) });
class W extends S {
  innerType() {
    return this._def.schema;
  }
  sourceType() {
    return this._def.schema._def.typeName === b.ZodEffects ? this._def.schema.sourceType() : this._def.schema;
  }
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e),
      n = this._def.effect || null,
      a = {
        addIssue: (i) => {
          m(s, i), i.fatal ? t.abort() : t.dirty();
        },
        get path() {
          return s.path;
        },
      };
    if (((a.addIssue = a.addIssue.bind(a)), n.type === 'preprocess')) {
      const i = n.transform(s.data, a);
      if (s.common.async) {
        return Promise.resolve(i).then(async (o) => {
          if (t.value === 'aborted') {
            return x;
          }
          const d = await this._def.schema._parseAsync({ data: o, path: s.path, parent: s });
          return d.status === 'aborted' ? x : d.status === 'dirty' || t.value === 'dirty' ? _e(d.value) : d;
        });
      }
      {
        if (t.value === 'aborted') {
          return x;
        }
        const o = this._def.schema._parseSync({ data: i, path: s.path, parent: s });
        return o.status === 'aborted' ? x : o.status === 'dirty' || t.value === 'dirty' ? _e(o.value) : o;
      }
    }
    if (n.type === 'refinement') {
      const i = (o) => {
        const d = n.refinement(o, a);
        if (s.common.async) {
          return Promise.resolve(d);
        }
        if (d instanceof Promise) {
          throw new Error('Async refinement encountered during synchronous parse operation. Use .parseAsync instead.');
        }
        return o;
      };
      if (s.common.async === !1) {
        const o = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        return o.status === 'aborted'
          ? x
          : (o.status === 'dirty' && t.dirty(), i(o.value), { status: t.value, value: o.value });
      } else {
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((o) =>
            o.status === 'aborted'
              ? x
              : (o.status === 'dirty' && t.dirty(), i(o.value).then(() => ({ status: t.value, value: o.value }))),
          );
      }
    }
    if (n.type === 'transform') {
      if (s.common.async === !1) {
        const i = this._def.schema._parseSync({ data: s.data, path: s.path, parent: s });
        if (!Fe(i)) {
          return i;
        }
        const o = n.transform(i.value, a);
        if (o instanceof Promise) {
          throw new Error(
            'Asynchronous transform encountered during synchronous parse operation. Use .parseAsync instead.',
          );
        }
        return { status: t.value, value: o };
      } else {
        return this._def.schema
          ._parseAsync({ data: s.data, path: s.path, parent: s })
          .then((i) =>
            Fe(i) ? Promise.resolve(n.transform(i.value, a)).then((o) => ({ status: t.value, value: o })) : i,
          );
      }
    }
    M.assertNever(n);
  }
}
W.create = (r, e, t) => new W({ schema: r, typeName: b.ZodEffects, effect: e, ...k(t) });
W.createWithPreprocess = (r, e, t) =>
  new W({ schema: e, effect: { type: 'preprocess', transform: r }, typeName: b.ZodEffects, ...k(t) });
class Y extends S {
  _parse(e) {
    return this._getType(e) === p.undefined ? Z(void 0) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
Y.create = (r, e) => new Y({ innerType: r, typeName: b.ZodOptional, ...k(e) });
class oe extends S {
  _parse(e) {
    return this._getType(e) === p.null ? Z(null) : this._def.innerType._parse(e);
  }
  unwrap() {
    return this._def.innerType;
  }
}
oe.create = (r, e) => new oe({ innerType: r, typeName: b.ZodNullable, ...k(e) });
class We extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e);
    let s = t.data;
    return (
      t.parsedType === p.undefined && (s = this._def.defaultValue()),
      this._def.innerType._parse({ data: s, path: t.path, parent: t })
    );
  }
  removeDefault() {
    return this._def.innerType;
  }
}
We.create = (r, e) =>
  new We({
    innerType: r,
    typeName: b.ZodDefault,
    defaultValue: typeof e.default == 'function' ? e.default : () => e.default,
    ...k(e),
  });
class Ke extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = { ...t, common: { ...t.common, issues: [] } },
      n = this._def.innerType._parse({ data: s.data, path: s.path, parent: { ...s } });
    return Ne(n)
      ? n.then((a) => ({
          status: 'valid',
          value:
            a.status === 'valid'
              ? a.value
              : this._def.catchValue({
                  get error() {
                    return new D(s.common.issues);
                  },
                  input: s.data,
                }),
        }))
      : {
          status: 'valid',
          value:
            n.status === 'valid'
              ? n.value
              : this._def.catchValue({
                  get error() {
                    return new D(s.common.issues);
                  },
                  input: s.data,
                }),
        };
  }
  removeCatch() {
    return this._def.innerType;
  }
}
Ke.create = (r, e) =>
  new Ke({
    innerType: r,
    typeName: b.ZodCatch,
    catchValue: typeof e.catch == 'function' ? e.catch : () => e.catch,
    ...k(e),
  });
class ct extends S {
  _parse(e) {
    if (this._getType(e) !== p.nan) {
      const s = this._getOrReturnCtx(e);
      return m(s, { code: u.invalid_type, expected: p.nan, received: s.parsedType }), x;
    }
    return { status: 'valid', value: e.data };
  }
}
ct.create = (r) => new ct({ typeName: b.ZodNaN, ...k(r) });
const Ps = Symbol('zod_brand');
class Zt extends S {
  _parse(e) {
    const { ctx: t } = this._processInputParams(e),
      s = t.data;
    return this._def.type._parse({ data: s, path: t.path, parent: t });
  }
  unwrap() {
    return this._def.type;
  }
}
class Xe extends S {
  _parse(e) {
    const { status: t, ctx: s } = this._processInputParams(e);
    if (s.common.async) {
      return (async () => {
        const a = await this._def.in._parseAsync({ data: s.data, path: s.path, parent: s });
        return a.status === 'aborted'
          ? x
          : a.status === 'dirty'
            ? (t.dirty(), _e(a.value))
            : this._def.out._parseAsync({ data: a.value, path: s.path, parent: s });
      })();
    }
    {
      const n = this._def.in._parseSync({ data: s.data, path: s.path, parent: s });
      return n.status === 'aborted'
        ? x
        : n.status === 'dirty'
          ? (t.dirty(), { status: 'dirty', value: n.value })
          : this._def.out._parseSync({ data: n.value, path: s.path, parent: s });
    }
  }
  static create(e, t) {
    return new Xe({ in: e, out: t, typeName: b.ZodPipeline });
  }
}
class He extends S {
  _parse(e) {
    const t = this._def.innerType._parse(e),
      s = (n) => (Fe(n) && (n.value = Object.freeze(n.value)), n);
    return Ne(t) ? t.then((n) => s(n)) : s(t);
  }
  unwrap() {
    return this._def.innerType;
  }
}
He.create = (r, e) => new He({ innerType: r, typeName: b.ZodReadonly, ...k(e) });
function Sr(r, e = {}, t) {
  return r
    ? Se.create().superRefine((s, n) => {
        var a, i;
        if (!r(s)) {
          const o = typeof e == 'function' ? e(s) : typeof e == 'string' ? { message: e } : e,
            d = (i = (a = o.fatal) !== null && a !== void 0 ? a : t) !== null && i !== void 0 ? i : !0,
            l = typeof o == 'string' ? { message: o } : o;
          n.addIssue({ code: 'custom', ...l, fatal: d });
        }
      })
    : Se.create();
}
const Fs = { object: V.lazycreate };
var b;
((r) => {
  (r.ZodString = 'ZodString'),
    (r.ZodNumber = 'ZodNumber'),
    (r.ZodNaN = 'ZodNaN'),
    (r.ZodBigInt = 'ZodBigInt'),
    (r.ZodBoolean = 'ZodBoolean'),
    (r.ZodDate = 'ZodDate'),
    (r.ZodSymbol = 'ZodSymbol'),
    (r.ZodUndefined = 'ZodUndefined'),
    (r.ZodNull = 'ZodNull'),
    (r.ZodAny = 'ZodAny'),
    (r.ZodUnknown = 'ZodUnknown'),
    (r.ZodNever = 'ZodNever'),
    (r.ZodVoid = 'ZodVoid'),
    (r.ZodArray = 'ZodArray'),
    (r.ZodObject = 'ZodObject'),
    (r.ZodUnion = 'ZodUnion'),
    (r.ZodDiscriminatedUnion = 'ZodDiscriminatedUnion'),
    (r.ZodIntersection = 'ZodIntersection'),
    (r.ZodTuple = 'ZodTuple'),
    (r.ZodRecord = 'ZodRecord'),
    (r.ZodMap = 'ZodMap'),
    (r.ZodSet = 'ZodSet'),
    (r.ZodFunction = 'ZodFunction'),
    (r.ZodLazy = 'ZodLazy'),
    (r.ZodLiteral = 'ZodLiteral'),
    (r.ZodEnum = 'ZodEnum'),
    (r.ZodEffects = 'ZodEffects'),
    (r.ZodNativeEnum = 'ZodNativeEnum'),
    (r.ZodOptional = 'ZodOptional'),
    (r.ZodNullable = 'ZodNullable'),
    (r.ZodDefault = 'ZodDefault'),
    (r.ZodCatch = 'ZodCatch'),
    (r.ZodPromise = 'ZodPromise'),
    (r.ZodBranded = 'ZodBranded'),
    (r.ZodPipeline = 'ZodPipeline'),
    (r.ZodReadonly = 'ZodReadonly');
})(b || (b = {}));
const Ns = (r, e = { message: `Input not instance of ${r.name}` }) => Sr((t) => t instanceof r, e),
  Mr = U.create,
  Tr = ne.create,
  Zs = ct.create,
  Rs = Ae.create,
  Cr = Ze.create,
  js = me.create,
  Ds = ot.create,
  Bs = Re.create,
  Ls = je.create,
  zs = Se.create,
  Us = fe.create,
  qs = ee.create,
  Ws = lt.create,
  Ks = q.create,
  Hs = V.create,
  Ys = V.strictCreate,
  Js = De.create,
  Gs = ut.create,
  Xs = Be.create,
  Qs = G.create,
  en = Le.create,
  tn = dt.create,
  rn = pe.create,
  sn = xe.create,
  nn = ze.create,
  an = Ue.create,
  on = ie.create,
  ln = qe.create,
  dn = Me.create,
  zt = W.create,
  cn = Y.create,
  un = oe.create,
  fn = W.createWithPreprocess,
  hn = Xe.create,
  mn = () => Mr().optional(),
  pn = () => Tr().optional(),
  gn = () => Cr().optional(),
  vn = {
    string: (r) => U.create({ ...r, coerce: !0 }),
    number: (r) => ne.create({ ...r, coerce: !0 }),
    boolean: (r) => Ze.create({ ...r, coerce: !0 }),
    bigint: (r) => Ae.create({ ...r, coerce: !0 }),
    date: (r) => me.create({ ...r, coerce: !0 }),
  },
  yn = x;
var ce = Object.freeze({
  __proto__: null,
  defaultErrorMap: ke,
  setErrorMap: vs,
  getErrorMap: nt,
  makeIssue: at,
  EMPTY_PATH: ys,
  addIssueToContext: m,
  ParseStatus: N,
  INVALID: x,
  DIRTY: _e,
  OK: Z,
  isAborted: St,
  isDirty: Mt,
  isValid: Fe,
  isAsync: Ne,
  get util() {
    return M;
  },
  get objectUtil() {
    return kt;
  },
  ZodParsedType: p,
  getParsedType: re,
  ZodType: S,
  datetimeRegex: wr,
  ZodString: U,
  ZodNumber: ne,
  ZodBigInt: Ae,
  ZodBoolean: Ze,
  ZodDate: me,
  ZodSymbol: ot,
  ZodUndefined: Re,
  ZodNull: je,
  ZodAny: Se,
  ZodUnknown: fe,
  ZodNever: ee,
  ZodVoid: lt,
  ZodArray: q,
  ZodObject: V,
  ZodUnion: De,
  ZodDiscriminatedUnion: ut,
  ZodIntersection: Be,
  ZodTuple: G,
  ZodRecord: Le,
  ZodMap: dt,
  ZodSet: pe,
  ZodFunction: xe,
  ZodLazy: ze,
  ZodLiteral: Ue,
  ZodEnum: ie,
  ZodNativeEnum: qe,
  ZodPromise: Me,
  ZodEffects: W,
  ZodTransformer: W,
  ZodOptional: Y,
  ZodNullable: oe,
  ZodDefault: We,
  ZodCatch: Ke,
  ZodNaN: ct,
  BRAND: Ps,
  ZodBranded: Zt,
  ZodPipeline: Xe,
  ZodReadonly: He,
  custom: Sr,
  Schema: S,
  ZodSchema: S,
  late: Fs,
  get ZodFirstPartyTypeKind() {
    return b;
  },
  coerce: vn,
  any: zs,
  array: Ks,
  bigint: Rs,
  boolean: Cr,
  date: js,
  discriminatedUnion: Gs,
  effect: zt,
  enum: on,
  function: sn,
  instanceof: Ns,
  intersection: Xs,
  lazy: nn,
  literal: an,
  map: tn,
  nan: Zs,
  nativeEnum: ln,
  never: qs,
  null: Ls,
  nullable: un,
  number: Tr,
  object: Hs,
  oboolean: gn,
  onumber: pn,
  optional: cn,
  ostring: mn,
  pipeline: hn,
  preprocess: fn,
  promise: dn,
  record: en,
  set: rn,
  strictObject: Ys,
  string: Mr,
  symbol: Ds,
  transformer: zt,
  tuple: Qs,
  undefined: Bs,
  union: Js,
  unknown: Us,
  void: Ws,
  NEVER: yn,
  ZodIssueCode: u,
  quotelessJson: gs,
  ZodError: D,
});
const _n = Rr(Pr(bn, 'c_10313', '$$function0'));
async function bn(r) {}
var xn = K('<span class=text-red-500>*');
function wn(r) {
  const e = F({ class: '' }, r),
    [t, s, n] = L(e, ['field', 'children', 'class', 'helpMessage'], ['onChange']);
  return y(cr, {
    get validationState() {
      return t.field.state.meta.errors.length ? 'invalid' : 'valid';
    },
    get onChange() {
      return s.onChange;
    },
    class: 'flex flex-col gap-1.5',
    get children() {
      return [
        y(ur, {
          get for() {
            return n.name ?? n.id;
          },
          get children() {
            return [
              Ce(() => t.children),
              y(H, {
                get when() {
                  return n.required;
                },
                get children() {
                  return z(xn);
                },
              }),
            ];
          },
        }),
        y(
          ss,
          F(n, {
            get name() {
              return n.name ?? n.id;
            },
            get class() {
              return Ie([t.class, { 'border-destructive text-destructive': t.field.state.meta.errors.length }]);
            },
          }),
        ),
        y(Jt, {
          get children() {
            return [
              y(rt, {
                get when() {
                  return t.field.state.meta.errors;
                },
                keyed: !0,
                children: (a) => y(Gt, { each: a, children: (i) => y(hr, { children: i }) }),
              }),
              y(rt, {
                get when() {
                  return t.helpMessage;
                },
                get children() {
                  return y(fr, {
                    get children() {
                      return t.helpMessage;
                    },
                  });
                },
              }),
            ];
          },
        }),
      ];
    },
  });
}
var kn = K('<span class=text-red-500>*');
function pt(r) {
  const e = F({ type: 'text', class: '' }, r),
    [t, s, n] = L(e, ['field', 'children', 'class', 'helpMessage'], ['onChange']);
  return y(cr, {
    get validationState() {
      return t.field.state.meta.errors.length ? 'invalid' : 'valid';
    },
    get onChange() {
      return s.onChange;
    },
    class: 'flex flex-col gap-1.5',
    get children() {
      return [
        y(ur, {
          get for() {
            return n.name ?? n.id;
          },
          get children() {
            return [
              Ce(() => t.children),
              y(H, {
                get when() {
                  return n.required;
                },
                get children() {
                  return z(kn);
                },
              }),
            ];
          },
        }),
        y(
          rs,
          F(n, {
            get class() {
              return Ie([t.class, { 'border-destructive text-destructive': t.field.state.meta.errors.length }]);
            },
            get 'aria-invalid'() {
              return t.field.state.meta.errors.length ? 'true' : 'false';
            },
            get name() {
              return n.name ?? n.id;
            },
            get type() {
              return n.type;
            },
          }),
        ),
        y(Jt, {
          get children() {
            return [
              y(rt, {
                get when() {
                  return !!t.field.state.meta.errors.length;
                },
                get children() {
                  return y(Gt, {
                    get each() {
                      return t.field.state.meta.errors ?? [];
                    },
                    children: (a) => y(hr, { children: a }),
                  });
                },
              }),
              y(rt, {
                get when() {
                  return t.helpMessage;
                },
                get children() {
                  return y(fr, {
                    get children() {
                      return t.helpMessage;
                    },
                  });
                },
              }),
            ];
          },
        }),
      ];
    },
  });
}
var Sn = K(
    '<div data-aos=fade-down><h4 class="font-semibold text-lg">Obrigado!</h4><p>A sua mensagem foi enviada com sucesso, iremos responder o mais breve possível.',
  ),
  Mn = K('<form class=space-y-6><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/><!$><!/>');
function Tn() {
  const [r, e] = ue(!1),
    t = jr(_n),
    s = ms(() => ({
      defaultValues: { name: '', email: '', phone: 0, message: '', acceptance: !1 },
      onSubmit: async ({ value: a }) => {
        try {
          await t(a);
        } catch {
          throw new Error('Failed to send email');
        }
      },
      validatorAdapter: ps(),
    }));
  async function n(a) {
    a.preventDefault(), a.stopPropagation();
    try {
      await s.handleSubmit(), s.reset(), e(!0);
    } catch {}
  }
  return (() => {
    var a = z(Mn),
      i = a.firstChild,
      [o, d] = j(i.nextSibling),
      l = o.nextSibling,
      [c, h] = j(l.nextSibling),
      f = c.nextSibling,
      [g, w] = j(f.nextSibling),
      $ = g.nextSibling,
      [E, C] = j($.nextSibling),
      A = E.nextSibling,
      [T, R] = j(A.nextSibling),
      te = T.nextSibling,
      [Ae, ge] = j(te.nextSibling);
    return (
      a.addEventListener('submit', n),
      P(
        a,
        y(H, {
          get when() {
            return r();
          },
          get children() {
            var _ = z(Sn);
            return (
              Xt(() => Qt(_, Ie(['px-2 py-3', 'rounded border border-green-500', 'bg-green-50/20', 'text-sm']))), _
            );
          },
        }),
        o,
        d,
      ),
      P(
        a,
        y(s.Field, {
          name: 'name',
          get validators() {
            return {
              onSubmit: ce
                .string({ required_error: 'Por favor, preencha o seu nome.' })
                .min(2, 'Por favor, preencha o seu nome.'),
              onChange: ce
                .string({ required_error: 'Por favor, preencha o seu nome.' })
                .min(2, 'Por favor, preencha o seu nome.'),
            };
          },
          children: (_) =>
            y(pt, {
              type: 'text',
              required: !0,
              get id() {
                return _().name;
              },
              get name() {
                return _().name;
              },
              get onBlur() {
                return _().handleBlur;
              },
              onChange: (I) => _().handleChange(I),
              get field() {
                return _();
              },
              placeholder: 'Por favor introduza o seu nome.',
              children: 'Nome',
            }),
        }),
        c,
        h,
      ),
      P(
        a,
        y(s.Field, {
          name: 'email',
          get validators() {
            return {
              onSubmit: ce
                .string({ required_error: 'Por favor, preencha o seu nome.' })
                .email('Por favor, introduza um email válido'),
              onChange: ce
                .string({ required_error: 'Por favor, preencha o seu nome.' })
                .email('Por favor, introduza um email válido'),
            };
          },
          children: (_) =>
            y(pt, {
              required: !0,
              get id() {
                return _().name;
              },
              get name() {
                return _().name;
              },
              type: 'email',
              get onBlur() {
                return _().handleBlur;
              },
              onChange: (I) => _().handleChange(I),
              get field() {
                return _();
              },
              placeholder: 'Por favor introduza o seu email.',
              children: 'Email',
            }),
        }),
        g,
        w,
      ),
      P(
        a,
        y(s.Field, {
          name: 'phone',
          get validators() {
            return {
              onChange: ce
                .number({ invalid_type_error: 'Por favor, introduza apenas números.' })
                .refine((_) => (_ ? /^\d{9}$/.test(String(_)) : !0), 'Por favor, introduza um contacto válido.')
                .optional(),
              onSubmit: ce
                .number({ invalid_type_error: 'Por favor, introduza apenas números.' })
                .refine((_) => (_ ? /^\d{9}$/.test(String(_)) : !0), 'Por favor, introduza um contacto válido.')
                .optional(),
            };
          },
          children: (_) =>
            y(pt, {
              get id() {
                return _().name;
              },
              get name() {
                return _().name;
              },
              type: 'number',
              get onBlur() {
                return _().handleBlur;
              },
              onChange: (I) => _().handleChange(Number(I)),
              get field() {
                return _();
              },
              pattern: 'd{9}',
              placeholder: 'Por favor introduza o seu contacto telefónico.',
              children: 'Contacto telefónico',
            }),
        }),
        E,
        C,
      ),
      P(
        a,
        y(s.Field, {
          name: 'message',
          get validators() {
            return {
              onChange: ce
                .string({ required_error: 'Por favor, preencha a mensagem.' })
                .min(5, 'A sua mensagem deve conter, pelo menos, 5 caracteres.'),
            };
          },
          children: (_) =>
            y(wn, {
              get id() {
                return _().name;
              },
              get name() {
                return _().name;
              },
              get onBlur() {
                return _().handleBlur;
              },
              required: !0,
              onChange: (I) => _().handleChange(I),
              get field() {
                return _();
              },
              placeholder: 'Por favor introduza a sua mensagem.',
              children: 'Mensagem',
            }),
        }),
        T,
        R,
      ),
      P(
        a,
        y(s.Subscribe, {
          selector: (_) => ({ canSubmit: _.canSubmit, isSubmitting: _.isSubmitting }),
          children: (_) =>
            y(Fr, {
              get disabled() {
                return !_().canSubmit || _().isSubmitting;
              },
              get class() {
                return Ie(['w-fit', { 'animate-pulse': _().isSubmitting }]);
              },
              type: 'submit',
              children: 'Enviar',
            }),
        }),
        Ae,
        ge,
      ),
      a
    );
  })();
}
var Cn = K('<section class=""><div><!$><!/><!$><!/>'),
  An = K('<h2 class="font-semibold text-lg text-zinc-50 md:text-xl">'),
  $n = K('<p class=mt-2>');
function En(r) {
  return (() => {
    var e = z(Cn),
      t = e.firstChild,
      s = t.firstChild,
      [n, a] = j(s.nextSibling),
      i = n.nextSibling,
      [o, d] = j(i.nextSibling);
    return (
      P(
        t,
        y(H, {
          get when() {
            return r.title;
          },
          keyed: !0,
          children: (l) =>
            (() => {
              var c = z(An);
              return P(c, l), c;
            })(),
        }),
        n,
        a,
      ),
      P(
        t,
        y(H, {
          get when() {
            return r.headline;
          },
          keyed: !0,
          children: (l) =>
            (() => {
              var c = z($n);
              return P(c, l), c;
            })(),
        }),
        o,
        d,
      ),
      e
    );
  })();
}
var Vn = K(
    '<main><header class=py-16><div class="container flex flex-col items-center justify-center gap-2 text-center"><h1 class=font-bold></h1><!$><!/></div></header><section class="py-8 md:py-12"><div class="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[0.5fr_1fr]"><!$><!/><section><!$><!/><!$><!/><!$><!/>',
  ),
  On = K('<p class=text-lg>'),
  In = K('<h2>'),
  Pn = K('<p class=mb-6>');
function Bn() {
  const r = jt(() => Nr()),
    e = jt(() => Zr());
  return (() => {
    var t = z(Vn),
      s = t.firstChild,
      n = s.firstChild,
      a = n.firstChild,
      i = a.nextSibling,
      [o, d] = j(i.nextSibling),
      l = s.nextSibling,
      c = l.firstChild,
      h = c.firstChild,
      [f, g] = j(h.nextSibling),
      w = f.nextSibling,
      $ = w.firstChild,
      [E, C] = j($.nextSibling),
      A = E.nextSibling,
      [T, R] = j(A.nextSibling),
      te = T.nextSibling,
      [Ae, ge] = j(te.nextSibling);
    return (
      P(a, () => r()?.title ?? 'Contactos'),
      P(
        n,
        y(H, {
          get when() {
            return r()?.headline;
          },
          keyed: !0,
          children: (_) =>
            (() => {
              var I = z(On);
              return P(I, _), I;
            })(),
        }),
        o,
        d,
      ),
      P(
        c,
        y(H, {
          get when() {
            return !!e()?.contacts?.length || !!e()?.social?.length;
          },
          get children() {
            return y(En, {
              get title() {
                return r()?.list?.title;
              },
              get headline() {
                return r()?.list?.headline;
              },
              get contacts() {
                return e()?.contacts;
              },
              get social() {
                return e()?.social;
              },
            });
          },
        }),
        f,
        g,
      ),
      P(
        w,
        y(H, {
          get when() {
            return r()?.form?.title;
          },
          keyed: !0,
          children: (_) =>
            (() => {
              var I = z(In);
              return P(I, _), Xt(() => Qt(I, Ie(['mb-1 font-semibold', { 'mb-6': !r()?.form?.headline }]))), I;
            })(),
        }),
        E,
        C,
      ),
      P(
        w,
        y(H, {
          get when() {
            return r()?.form?.headline;
          },
          keyed: !0,
          children: (_) =>
            (() => {
              var I = z(Pn);
              return P(I, _), I;
            })(),
        }),
        T,
        R,
      ),
      P(w, y(Tn, {}), Ae, ge),
      t
    );
  })();
}
export { Bn as default };
