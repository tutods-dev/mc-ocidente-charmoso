import { zodValidator as St } from '@tanstack/zod-form-adapter';
import {
  onCleanup as D,
  createComputed as J,
  onMount as X,
  createSignal as Y,
  Match as Z,
  For as at,
  splitProps as et,
  createComponent as gt,
  Switch as st,
  mergeProps as tt,
  createMemo as vt,
  Show as w,
} from 'solid-js';
import {
  ssrHydrationKey as F,
  ssr as V,
  ssrAttribute as W,
  escape as g,
  createComponent as h,
  mergeProps as j,
} from 'solid-js/web';
import { z as _ } from 'zod';
import {
  r as At,
  m as E,
  q as Ft,
  j as K,
  i as Mt,
  c as N,
  B as Vt,
  l as bt,
  k as it,
  n as nt,
  o as ot,
  T as rt,
  p as yt,
} from './assets/styles-2TqKWpP5.js';
import 'clsx';
import './assets/styles-EAaAWUae.js';
import { createTransport as wt } from 'nodemailer';
import { reconcile as Et, createStore as Pt } from 'solid-js/store';
import { b as $t, u as _t } from './assets/action-DjunEzuR.js';
import 'solid-js/web/storage';
import 'h3';
import 'node:async_hooks';
import '@sanity/client';
import './assets/routing-KofvCWNq.js';
import 'class-variance-authority';
import 'tailwind-merge';
import 'tailwind-variants';
class lt {
  constructor(n, a) {
    (this.listeners = new Set()),
      (this._batching = !1),
      (this._flushing = 0),
      (this.subscribe = (e) => {
        var t, s;
        this.listeners.add(e);
        const r = (s = (t = this.options) == null ? void 0 : t.onSubscribe) == null ? void 0 : s.call(t, e, this);
        return () => {
          this.listeners.delete(e), r?.();
        };
      }),
      (this.setState = (e) => {
        var t, s, r;
        const o = this.state;
        (this.state = (t = this.options) != null && t.updateFn ? this.options.updateFn(o)(e) : e(o)),
          (r = (s = this.options) == null ? void 0 : s.onUpdate) == null || r.call(s),
          this._flush();
      }),
      (this._flush = () => {
        if (this._batching) {
          return;
        }
        const e = ++this._flushing;
        this.listeners.forEach((t) => {
          this._flushing === e && t();
        });
      }),
      (this.batch = (e) => {
        if (this._batching) {
          return e();
        }
        (this._batching = !0), e(), (this._batching = !1), this._flush();
      }),
      (this.state = n),
      (this.options = a);
  }
}
function H(i, n) {
  return typeof i == 'function' ? i(n) : i;
}
function ct(i, n) {
  return z(n).reduce((e, t) => {
    if (e === null) {
      return null;
    }
    if (typeof e < 'u') {
      return e[t];
    }
  }, i);
}
function B(i, n, a) {
  const e = z(n);
  function t(s) {
    if (!e.length) {
      return H(a, s);
    }
    const r = e.shift();
    if (typeof r == 'string') {
      return typeof s == 'object' ? (s === null && (s = {}), { ...s, [r]: t(s[r]) }) : { [r]: t() };
    }
    if (Array.isArray(s) && r !== void 0) {
      const o = s.slice(0, r);
      return [...(o.length ? o : new Array(r)), t(s[r]), ...s.slice(r + 1)];
    }
    return [...new Array(r), t()];
  }
  return t(i);
}
function xt(i, n) {
  const a = z(n);
  function e(t) {
    if (!t) {
      return;
    }
    if (a.length === 1) {
      const r = a[0];
      if (Array.isArray(t) && typeof r == 'number') {
        return t.filter((u, l) => l !== r);
      }
      const { [r]: o, ...d } = t;
      return d;
    }
    const s = a.shift();
    if (typeof s == 'string' && typeof t == 'object') {
      return { ...t, [s]: e(t[s]) };
    }
    if (typeof s == 'number' && Array.isArray(t)) {
      if (s >= t.length) {
        return t;
      }
      const r = t.slice(0, s);
      return [...(r.length ? r : new Array(s)), e(t[s]), ...t.slice(s + 1)];
    }
    throw new Error('It seems we have created an infinite loop in deleteBy. ');
  }
  return e(i);
}
const Ct = /^(\d*)$/gm,
  Tt = /\.(\d*)\./gm,
  Zt = /^(\d*)\./gm,
  Bt = /\.(\d*$)/gm,
  qt = /\.{2,}/gm,
  I = '__int__',
  C = `${I}$1`;
function z(i) {
  if (typeof i != 'string') {
    throw new Error('Path must be a string.');
  }
  return i
    .replaceAll('[', '.')
    .replaceAll(']', '')
    .replace(Ct, C)
    .replace(Tt, `.${C}.`)
    .replace(Zt, `${C}.`)
    .replace(Bt, `.${C}`)
    .replace(qt, '.')
    .split('.')
    .map((n) => (n.indexOf(I) === 0 ? Number.parseInt(n.substring(I.length), 10) : n));
}
function kt(i) {
  return !(Array.isArray(i) && i.length === 0);
}
function O(i, n) {
  const { asyncDebounceMs: a } = n,
    {
      onChangeAsync: e,
      onBlurAsync: t,
      onSubmitAsync: s,
      onBlurAsyncDebounceMs: r,
      onChangeAsyncDebounceMs: o,
    } = n.validators || {},
    d = a ?? 0,
    u = { cause: 'change', validate: e, debounceMs: o ?? d },
    l = { cause: 'blur', validate: t, debounceMs: r ?? d },
    p = { cause: 'submit', validate: s, debounceMs: 0 },
    c = (f) => ({ ...f, debounceMs: 0 });
  switch (i) {
    case 'submit':
      return [c(u), c(l), p];
    case 'blur':
      return [l];
    case 'change':
      return [u];
    case 'server':
    default:
      return [];
  }
}
function L(i, n) {
  const { onChange: a, onBlur: e, onSubmit: t } = n.validators || {},
    s = { cause: 'change', validate: a },
    r = { cause: 'blur', validate: e },
    o = { cause: 'submit', validate: t },
    d = { cause: 'server', validate: () => {} };
  switch (i) {
    case 'submit':
      return [s, r, o, d];
    case 'server':
      return [d];
    case 'blur':
      return [r, d];
    case 'change':
    default:
      return [s, d];
  }
}
function q(i) {
  return {
    values: i.values ?? {},
    errors: i.errors ?? [],
    errorMap: i.errorMap ?? {},
    fieldMeta: i.fieldMeta ?? {},
    canSubmit: i.canSubmit ?? !0,
    isFieldsValid: i.isFieldsValid ?? !1,
    isFieldsValidating: i.isFieldsValidating ?? !1,
    isFormValid: i.isFormValid ?? !1,
    isFormValidating: i.isFormValidating ?? !1,
    isSubmitted: i.isSubmitted ?? !1,
    isSubmitting: i.isSubmitting ?? !1,
    isTouched: i.isTouched ?? !1,
    isBlurred: i.isBlurred ?? !1,
    isPristine: i.isPristine ?? !0,
    isDirty: i.isDirty ?? !1,
    isValid: i.isValid ?? !1,
    isValidating: i.isValidating ?? !1,
    submissionAttempts: i.submissionAttempts ?? 0,
    validationMetaMap: i.validationMetaMap ?? {
      onChange: void 0,
      onBlur: void 0,
      onSubmit: void 0,
      onMount: void 0,
      onServer: void 0,
    },
  };
}
class It {
  constructor(n) {
    var a;
    (this.options = {}),
      (this.fieldInfo = {}),
      (this.prevTransformArray = []),
      (this.mount = () => {
        const { onMount: e } = this.options.validators || {};
        if (!e) {
          return;
        }
        const t = this.runValidator({
          validate: e,
          value: { value: this.state.values, formApi: this },
          type: 'validate',
        });
        t && this.store.setState((s) => ({ ...s, errorMap: { ...s.errorMap, onMount: t } }));
      }),
      (this.update = (e) => {
        if (!e) {
          return;
        }
        const t = this.options;
        (this.options = e),
          this.store.batch(() => {
            const s = e.defaultValues && e.defaultValues !== t.defaultValues && !this.state.isTouched,
              r = e.defaultState !== t.defaultState && !this.state.isTouched;
            this.store.setState(() =>
              q(Object.assign({}, this.state, r ? e.defaultState : {}, s ? { values: e.defaultValues } : {})),
            );
          });
      }),
      (this.reset = () => {
        const { fieldMeta: e } = this.state,
          t = this.resetFieldMeta(e);
        this.store.setState(() => {
          var s;
          return q({
            ...this.options.defaultState,
            values: this.options.defaultValues ?? ((s = this.options.defaultState) == null ? void 0 : s.values),
            fieldMeta: t,
          });
        });
      }),
      (this.validateAllFields = async (e) => {
        const t = [];
        return (
          this.store.batch(() => {
            Object.values(this.fieldInfo).forEach((r) => {
              if (!r.instance) {
                return;
              }
              const o = r.instance;
              t.push(Promise.resolve().then(() => o.validate(e))),
                r.instance.state.meta.isTouched || r.instance.setMeta((d) => ({ ...d, isTouched: !0 })),
                r.instance.state.meta.isBlurred || r.instance.setMeta((d) => ({ ...d, isBlurred: !0 }));
            });
          }),
          (await Promise.all(t)).flat()
        );
      }),
      (this.validateArrayFieldsStartingFrom = async (e, t, s) => {
        const r = this.getFieldValue(e),
          o = Array.isArray(r) ? Math.max(r.length - 1, 0) : null,
          d = [`${e}[${t}]`];
        for (let c = t + 1; c <= (o ?? 0); c++) {
          d.push(`${e}[${c}]`);
        }
        const u = Object.keys(this.fieldInfo).filter((c) => d.some((f) => c.startsWith(f))),
          l = [];
        return (
          this.store.batch(() => {
            u.forEach((c) => {
              l.push(Promise.resolve().then(() => this.validateField(c, s)));
            });
          }),
          (await Promise.all(l)).flat()
        );
      }),
      (this.validateField = (e, t) => {
        var s;
        const r = (s = this.fieldInfo[e]) == null ? void 0 : s.instance;
        return r
          ? (r.state.meta.isTouched || r.setMeta((o) => ({ ...o, isTouched: !0 })),
            r.state.meta.isBlurred || r.setMeta((o) => ({ ...o, isBlurred: !0 })),
            r.validate(t))
          : [];
      }),
      (this.validateSync = (e) => {
        const t = L(e, this.options);
        let s = !1;
        const r = {};
        this.store.batch(() => {
          for (const d of t) {
            if (!d.validate) {
              continue;
            }
            const u = this.runValidator({
                validate: d.validate,
                value: { value: this.state.values, formApi: this },
                type: 'validate',
              }),
              { formError: l, fieldErrors: p } = U(u),
              c = T(d.cause);
            if (p) {
              for (const [f, v] of Object.entries(p)) {
                const A = { ...(r[f] || {}), [c]: v };
                r[f] = A;
                const b = this.getFieldMeta(f);
                b &&
                  b.errorMap[c] !== v &&
                  this.setFieldMeta(f, (M) => ({ ...M, errorMap: { ...M.errorMap, [c]: v } }));
              }
            }
            this.state.errorMap[c] !== l && this.store.setState((f) => ({ ...f, errorMap: { ...f.errorMap, [c]: l } })),
              (l || p) && (s = !0);
          }
        });
        const o = T('submit');
        return (
          this.state.errorMap[o] &&
            e !== 'submit' &&
            !s &&
            this.store.setState((d) => ({ ...d, errorMap: { ...d.errorMap, [o]: void 0 } })),
          { hasErrored: s, fieldsErrorMap: r }
        );
      }),
      (this.validateAsync = async (e) => {
        const t = O(e, this.options);
        this.state.isFormValidating || this.store.setState((u) => ({ ...u, isFormValidating: !0 }));
        const s = [];
        let r;
        for (const u of t) {
          if (!u.validate) {
            continue;
          }
          const l = T(u.cause),
            p = this.state.validationMetaMap[l];
          p?.lastAbortController.abort();
          const c = new AbortController();
          (this.state.validationMetaMap[l] = { lastAbortController: c }),
            s.push(
              new Promise(async (f) => {
                let v;
                try {
                  v = await new Promise((M, m) => {
                    setTimeout(async () => {
                      if (c.signal.aborted) {
                        return M(void 0);
                      }
                      try {
                        M(
                          await this.runValidator({
                            validate: u.validate,
                            value: { value: this.state.values, formApi: this, signal: c.signal },
                            type: 'validateAsync',
                          }),
                        );
                      } catch (S) {
                        m(S);
                      }
                    }, u.debounceMs);
                  });
                } catch (m) {
                  v = m;
                }
                const { formError: y, fieldErrors: A } = U(v);
                A && (r = r ? { ...r, ...A } : A);
                const b = T(u.cause);
                if (r) {
                  for (const [M, m] of Object.entries(r)) {
                    const S = this.getFieldMeta(M);
                    S &&
                      S.errorMap[b] !== m &&
                      this.setFieldMeta(M, (x) => ({ ...x, errorMap: { ...x.errorMap, [b]: m } }));
                  }
                }
                this.store.setState((M) => ({ ...M, errorMap: { ...M.errorMap, [b]: y } })),
                  f(r ? { fieldErrors: r, errorMapKey: b } : void 0);
              }),
            );
        }
        let o = [];
        const d = {};
        if (s.length) {
          o = await Promise.all(s);
          for (const u of o) {
            if (u?.fieldErrors) {
              const { errorMapKey: l } = u;
              for (const [p, c] of Object.entries(u.fieldErrors)) {
                const v = { ...(d[p] || {}), [l]: c };
                d[p] = v;
              }
            }
          }
        }
        return this.store.setState((u) => ({ ...u, isFormValidating: !1 })), d;
      }),
      (this.validate = (e) => {
        const { hasErrored: t, fieldsErrorMap: s } = this.validateSync(e);
        return t && !this.options.asyncAlways ? s : this.validateAsync(e);
      }),
      (this.handleSubmit = async () => {
        var e, t, s, r, o, d;
        if (
          (this.store.setState((l) => ({ ...l, isSubmitted: !1, submissionAttempts: l.submissionAttempts + 1 })),
          !this.state.canSubmit)
        ) {
          return;
        }
        this.store.setState((l) => ({ ...l, isSubmitting: !0 }));
        const u = () => {
          this.store.setState((l) => ({ ...l, isSubmitting: !1 }));
        };
        if ((await this.validateAllFields('submit'), !this.state.isFieldsValid)) {
          u(),
            (t = (e = this.options).onSubmitInvalid) == null || t.call(e, { value: this.state.values, formApi: this });
          return;
        }
        if ((await this.validate('submit'), !this.state.isValid)) {
          u(),
            (r = (s = this.options).onSubmitInvalid) == null || r.call(s, { value: this.state.values, formApi: this });
          return;
        }
        try {
          await ((d = (o = this.options).onSubmit) == null
            ? void 0
            : d.call(o, { value: this.state.values, formApi: this })),
            this.store.batch(() => {
              this.store.setState((l) => ({ ...l, isSubmitted: !0 })), u();
            });
        } catch (l) {
          throw (u(), l);
        }
      }),
      (this.getFieldValue = (e) => ct(this.state.values, e)),
      (this.getFieldMeta = (e) => this.state.fieldMeta[e]),
      (this.getFieldInfo = (e) => {
        var t;
        return (
          (t = this.fieldInfo)[e] ||
          (t[e] = {
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
      (this.setFieldMeta = (e, t) => {
        this.store.setState((s) => ({ ...s, fieldMeta: { ...s.fieldMeta, [e]: H(t, s.fieldMeta[e]) } }));
      }),
      (this.resetFieldMeta = (e) =>
        Object.keys(e).reduce((t, s) => {
          const r = s;
          return (
            (t[r] = {
              isValidating: !1,
              isTouched: !1,
              isBlurred: !1,
              isDirty: !1,
              isPristine: !0,
              errors: [],
              errorMap: {},
            }),
            t
          );
        }, {})),
      (this.setFieldValue = (e, t, s) => {
        const r = s?.dontUpdateMeta ?? !1;
        this.store.batch(() => {
          r || this.setFieldMeta(e, (o) => ({ ...o, isTouched: !0, isBlurred: !0, isDirty: !0 })),
            this.store.setState((o) => ({ ...o, values: B(o.values, e, t) }));
        });
      }),
      (this.deleteField = (e) => {
        this.store.setState((t) => {
          const s = { ...t };
          return (s.values = xt(s.values, e)), delete s.fieldMeta[e], s;
        }),
          delete this.fieldInfo[e];
      }),
      (this.pushFieldValue = (e, t, s) => {
        this.setFieldValue(e, (r) => [...(Array.isArray(r) ? r : []), t], s), this.validateField(e, 'change');
      }),
      (this.insertFieldValue = async (e, t, s, r) => {
        this.setFieldValue(e, (o) => [...o.slice(0, t), s, ...o.slice(t)], r), await this.validateField(e, 'change');
      }),
      (this.replaceFieldValue = async (e, t, s, r) => {
        this.setFieldValue(e, (o) => o.map((d, u) => (u === t ? s : d)), r),
          await this.validateField(e, 'change'),
          await this.validateArrayFieldsStartingFrom(e, t, 'change');
      }),
      (this.removeFieldValue = async (e, t, s) => {
        const r = this.getFieldValue(e),
          o = Array.isArray(r) ? Math.max(r.length - 1, 0) : null;
        if ((this.setFieldValue(e, (d) => d.filter((u, l) => l !== t), s), o !== null)) {
          const d = `${e}[${o}]`;
          Object.keys(this.fieldInfo)
            .filter((l) => l.startsWith(d))
            .forEach((l) => this.deleteField(l));
        }
        await this.validateField(e, 'change'), await this.validateArrayFieldsStartingFrom(e, t, 'change');
      }),
      (this.swapFieldValues = (e, t, s, r) => {
        this.setFieldValue(
          e,
          (o) => {
            const d = o[t],
              u = o[s];
            return B(B(o, `${t}`, u), `${s}`, d);
          },
          r,
        ),
          this.validateField(e, 'change'),
          this.validateField(`${e}[${t}]`, 'change'),
          this.validateField(`${e}[${s}]`, 'change');
      }),
      (this.moveFieldValues = (e, t, s, r) => {
        this.setFieldValue(e, (o) => (o.splice(s, 0, o.splice(t, 1)[0]), o), r),
          this.validateField(e, 'change'),
          this.validateField(`${e}[${t}]`, 'change'),
          this.validateField(`${e}[${s}]`, 'change');
      }),
      (this.store = new lt(
        q({
          ...n?.defaultState,
          values: n?.defaultValues ?? ((a = n?.defaultState) == null ? void 0 : a.values),
          isFormValid: !0,
        }),
        {
          onUpdate: () => {
            var e, t;
            let { state: s } = this.store;
            const r = Object.values(s.fieldMeta),
              o = r.some((m) => m?.isValidating),
              d = !r.some((m) => m?.errorMap && kt(Object.values(m.errorMap).filter(Boolean))),
              u = r.some((m) => m?.isTouched),
              l = r.some((m) => m?.isBlurred),
              p = r.some((m) => m?.isDirty),
              c = !p,
              f = o || s.isFormValidating;
            s.errors = Object.values(s.errorMap).filter((m) => m !== void 0);
            const v = s.errors.length === 0,
              y = d && v,
              A = (s.submissionAttempts === 0 && !u) || (!f && !s.isSubmitting && y);
            (s = {
              ...s,
              isFieldsValidating: o,
              isFieldsValid: d,
              isFormValid: v,
              isValid: y,
              canSubmit: A,
              isTouched: u,
              isBlurred: l,
              isPristine: c,
              isDirty: p,
            }),
              (this.state = s),
              (this.store.state = this.state);
            const b = ((e = this.options.transform) == null ? void 0 : e.deps) ?? [];
            (b.length !== this.prevTransformArray.length || b.some((m, S) => m !== this.prevTransformArray[S])) &&
              ((t = this.options.transform) == null || t.fn(this),
              (this.store.state = this.state),
              (this.prevTransformArray = b));
          },
        },
      )),
      (this.state = this.store.state),
      this.update(n || {});
  }
  runValidator(n) {
    const a = this.options.validatorAdapter;
    return a && typeof n.validate != 'function' ? a()[n.type](n.value, n.validate) : n.validate(n.value);
  }
  setErrorMap(n) {
    this.store.setState((a) => ({ ...a, errorMap: { ...a.errorMap, ...n } }));
  }
}
function U(i) {
  if (i) {
    if (typeof i == 'object') {
      const n = U(i.form).formError,
        a = i.fields;
      return { formError: n, fieldErrors: a };
    }
    return typeof i != 'string' ? { formError: 'Invalid Form Values' } : { formError: i };
  }
  return { formError: void 0 };
}
function T(i) {
  switch (i) {
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
class Ot {
  constructor(n) {
    (this.options = {}),
      (this.mount = () => {
        const a = this.getInfo();
        a.instance = this;
        const e = this.form.store.subscribe(() => {
          this.store.batch(() => {
            const s = this.getValue(),
              r = this.getMeta();
            s !== this.state.value && this.store.setState((o) => ({ ...o, value: s })),
              r !== this.state.meta && this.store.setState((o) => ({ ...o, meta: r }));
          });
        });
        this.update(this.options);
        const { onMount: t } = this.options.validators || {};
        if (t) {
          const s = this.runValidator({
            validate: t,
            value: { value: this.state.value, fieldApi: this },
            type: 'validate',
          });
          s && this.setMeta((r) => ({ ...r, errorMap: { ...r?.errorMap, onMount: s } }));
        }
        return () => {
          e();
        };
      }),
      (this.update = (a) => {
        if (this.state.value === void 0) {
          const e = ct(a.form.options.defaultValues, a.name);
          a.defaultValue !== void 0
            ? this.setValue(a.defaultValue, { dontUpdateMeta: !0 })
            : e !== void 0 && this.setValue(e, { dontUpdateMeta: !0 });
        }
        this._getMeta() === void 0 && this.setMeta(this.state.meta), (this.options = a);
      }),
      (this.getValue = () => this.form.getFieldValue(this.name)),
      (this.setValue = (a, e) => {
        this.form.setFieldValue(this.name, a, e), this.validate('change');
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
      (this.setMeta = (a) => this.form.setFieldMeta(this.name, a)),
      (this.getInfo = () => this.form.getFieldInfo(this.name)),
      (this.pushValue = (a, e) => this.form.pushFieldValue(this.name, a, e)),
      (this.insertValue = (a, e, t) => this.form.insertFieldValue(this.name, a, e, t)),
      (this.replaceValue = (a, e, t) => this.form.replaceFieldValue(this.name, a, e, t)),
      (this.removeValue = (a, e) => this.form.removeFieldValue(this.name, a, e)),
      (this.swapValues = (a, e, t) => this.form.swapFieldValues(this.name, a, e, t)),
      (this.moveValue = (a, e, t) => this.form.moveFieldValues(this.name, a, e, t)),
      (this.getLinkedFields = (a) => {
        const e = Object.values(this.form.fieldInfo),
          t = [];
        for (const s of e) {
          if (!s.instance) {
            continue;
          }
          const { onChangeListenTo: r, onBlurListenTo: o } = s.instance.options.validators || {};
          a === 'change' && r?.includes(this.name) && t.push(s.instance),
            a === 'blur' && o?.includes(this.name) && t.push(s.instance);
        }
        return t;
      }),
      (this.validateSync = (a, e) => {
        const t = L(a, this.options),
          r = this.getLinkedFields(a).reduce((u, l) => {
            const p = L(a, l.options);
            return (
              p.forEach((c) => {
                c.field = l;
              }),
              u.concat(p)
            );
          }, []);
        let o = !1;
        this.form.store.batch(() => {
          const u = (l, p) => {
            const c = P(p.cause),
              f = p.validate
                ? R(
                    l.runValidator({
                      validate: p.validate,
                      value: { value: l.getValue(), fieldApi: l },
                      type: 'validate',
                    }),
                  )
                : e[c];
            l.state.meta.errorMap[c] !== f &&
              l.setMeta((v) => ({ ...v, errorMap: { ...v.errorMap, [P(p.cause)]: f || e[c] } })),
              (f || e[c]) && (o = !0);
          };
          for (const l of t) {
            u(this, l);
          }
          for (const l of r) {
            l.validate && u(l.field, l);
          }
        });
        const d = P('submit');
        return (
          this.state.meta.errorMap[d] &&
            a !== 'submit' &&
            !o &&
            this.setMeta((u) => ({ ...u, errorMap: { ...u.errorMap, [d]: void 0 } })),
          { hasErrored: o }
        );
      }),
      (this.validateAsync = async (a, e) => {
        const t = O(a, this.options),
          s = await e,
          r = this.getLinkedFields(a),
          o = r.reduce((c, f) => {
            const v = O(a, f.options);
            return (
              v.forEach((y) => {
                y.field = f;
              }),
              c.concat(v)
            );
          }, []);
        this.state.meta.isValidating || this.setMeta((c) => ({ ...c, isValidating: !0 }));
        for (const c of r) {
          c.setMeta((f) => ({ ...f, isValidating: !0 }));
        }
        const d = [],
          u = [],
          l = (c, f, v) => {
            const y = P(f.cause),
              A = c.getInfo().validationMetaMap[y];
            A?.lastAbortController.abort();
            const b = new AbortController();
            (this.getInfo().validationMetaMap[y] = { lastAbortController: b }),
              v.push(
                new Promise(async (M) => {
                  var m;
                  let S;
                  try {
                    S = await new Promise(($, mt) => {
                      setTimeout(async () => {
                        if (b.signal.aborted) {
                          return $(void 0);
                        }
                        try {
                          $(
                            await this.runValidator({
                              validate: f.validate,
                              value: { value: c.getValue(), fieldApi: c, signal: b.signal },
                              type: 'validateAsync',
                            }),
                          );
                        } catch (pt) {
                          mt(pt);
                        }
                      }, f.debounceMs);
                    });
                  } catch ($) {
                    S = $;
                  }
                  if (b.signal.aborted) {
                    return M(void 0);
                  }
                  const x = R(S),
                    ft = (m = s[this.name]) == null ? void 0 : m[y],
                    G = x || ft;
                  c.setMeta(($) => ({ ...$, errorMap: { ...$?.errorMap, [y]: G } })), M(G);
                }),
              );
          };
        for (const c of t) {
          c.validate && l(this, c, d);
        }
        for (const c of o) {
          c.validate && l(c.field, c, u);
        }
        let p = [];
        (d.length || u.length) && ((p = await Promise.all(d)), await Promise.all(u)),
          this.setMeta((c) => ({ ...c, isValidating: !1 }));
        for (const c of r) {
          c.setMeta((f) => ({ ...f, isValidating: !1 }));
        }
        return p.filter(Boolean);
      }),
      (this.validate = (a) => {
        var e;
        if (!this.state.meta.isTouched) {
          return [];
        }
        let t = {},
          s = Promise.resolve({});
        try {
          const o = this.form.validate(a);
          if (o instanceof Promise) {
            s = o;
          } else {
            const d = o[this.name];
            d && (t = d);
          }
        } catch {}
        const { hasErrored: r } = this.validateSync(a, t);
        return r && !this.options.asyncAlways
          ? ((e = this.getInfo().validationMetaMap[P(a)]) == null || e.lastAbortController.abort(),
            this.state.meta.errors)
          : this.validateAsync(a, s);
      }),
      (this.handleChange = (a) => {
        this.setValue(a);
      }),
      (this.handleBlur = () => {
        this.state.meta.isTouched || (this.setMeta((e) => ({ ...e, isTouched: !0 })), this.validate('change')),
          this.state.meta.isBlurred || this.setMeta((e) => ({ ...e, isBlurred: !0 })),
          this.validate('blur');
      }),
      (this.form = n.form),
      (this.name = n.name),
      n.defaultValue !== void 0 && this.form.setFieldValue(this.name, n.defaultValue, { dontUpdateMeta: !0 }),
      (this.store = new lt(
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
            ...n.defaultMeta,
          },
        },
        {
          onUpdate: () => {
            const a = this.store.state;
            (a.meta.errors = Object.values(a.meta.errorMap).filter((e) => e !== void 0)),
              (a.meta.isPristine = !a.meta.isDirty),
              (this.prevState = a),
              (this.state = a);
          },
        },
      )),
      (this.state = this.store.state),
      (this.prevState = this.state),
      (this.options = n);
  }
  runValidator(n) {
    const a = [this.form.options.validatorAdapter, this.options.validatorAdapter];
    for (const e of a) {
      if (e && typeof n.validate != 'function') {
        return e()[n.type](n.value, n.validate);
      }
    }
    return n.validate(n.value);
  }
  setErrorMap(n) {
    this.setMeta((a) => ({ ...a, errorMap: { ...a.errorMap, ...n } }));
  }
}
function R(i) {
  if (i) {
    return typeof i != 'string' ? 'Invalid Form Values' : i;
  }
}
function P(i) {
  switch (i) {
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
function Q(i, n = (a) => a) {
  const [a, e] = Pt({ value: n(i.state) }),
    t = i.subscribe(() => {
      const s = n(i.state);
      e('value', Et(s));
    });
  return (
    D(() => {
      t();
    }),
    () => a.value
  );
}
function Lt(i) {
  const [n, a] = Y(!1),
    e = vt(() => [n(), i]),
    t = i.store.subscribe(() => a((s) => !s));
  return D(t), () => e()[1];
}
function dt(i) {
  const n = i(),
    a = new Ot(n),
    e = a;
  return (e.Field = ut), J(() => a.update(i())), X(() => D(a.mount())), Lt(e);
}
function ut(i) {
  const n = dt(() => {
    const { children: a, ...e } = i;
    return e;
  });
  return gt(() => i.children(n), {});
}
function Ut(i) {
  const n = i?.(),
    a = new It(n),
    e = a;
  return (
    (e.Field = (t) => h(ut, j(t, { form: a }))),
    (e.createField = (t) => dt(() => ({ ...t(), form: a }))),
    (e.useStore = (t) => Q(a.store, t)),
    (e.Subscribe = (t) => H(t.children, Q(a.store, t.selector))),
    X(a.mount),
    J(() => a.update(i?.())),
    e
  );
}
const jt = ({ email: i, message: n, name: a, phone: e, title: t = 'Impulsionar' }) => `
<svg xmlns="http://www.w3.org/2000/svg" width="200" xmlns:xlink="http://www.w3.org/1999/xlink"
  viewBox="0 0 1129.34 299.77">
  <defs>
    <style>
      .cls-1{fill:none;}.cls-2{clip-path:url(#clip-path);}.cls-3{fill:url(#linear-gradient);}.cls-4{fill:url(#linear-gradient-2);}.cls-5{fill:#ea5329;}.cls-6{fill:url(#linear-gradient-3);}.cls-7{fill:url(#linear-gradient-4);}.cls-8{fill:url(#linear-gradient-5);}.cls-9{fill:url(#linear-gradient-6);}.cls-10{fill:url(#linear-gradient-7);}.cls-11{fill:#485daa;opacity:0.35;}.cls-12{fill:#fff;}.cls-13{fill:#ece6ef;}.cls-14{fill:#43c5e4;}.cls-15{fill:url(#linear-gradient-8);}</style>
    <clipPath id="clip-path" transform="translate(-82.93 -82.96)">
      <rect class="cls-1" width="1295.19" height="465.68" />
    </clipPath>
    <linearGradient id="linear-gradient" x1="85.7" y1="360.65" x2="117.15" y2="269.16"
      gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#ea5329" />
      <stop offset="0.5" stop-color="#f26a36" />
      <stop offset="1" stop-color="#ea5329" />
    </linearGradient>
    <linearGradient id="linear-gradient-2" x1="150.45" y1="360.04" x2="194.79" y2="177.24"
      xlink:href="#linear-gradient" />
    <linearGradient id="linear-gradient-3" x1="248.12" y1="165.75" x2="335.55" y2="178.5"
      gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#43c5e4" />
      <stop offset="0.16" stop-color="#43bee0" />
      <stop offset="0.4" stop-color="#44aad5" />
      <stop offset="0.68" stop-color="#468ac3" />
      <stop offset="1" stop-color="#485daa" />
    </linearGradient>
    <linearGradient id="linear-gradient-4" x1="209.79" y1="270.61" x2="236.36" y2="260.94"
      gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#f26a36" />
      <stop offset="1" stop-color="#ea5329" />
    </linearGradient>
    <linearGradient id="linear-gradient-5" x1="243.49" y1="352.71" x2="266.02" y2="265.42"
      xlink:href="#linear-gradient" />
    <linearGradient id="linear-gradient-6" x1="350.01" y1="242.61" x2="315.22" y2="215.13"
      gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#43c5e4" />
      <stop offset="0.3" stop-color="#459ccd" />
      <stop offset="0.59" stop-color="#477aba" />
      <stop offset="0.84" stop-color="#4865ae" />
      <stop offset="1" stop-color="#485daa" />
    </linearGradient>
    <linearGradient id="linear-gradient-7" x1="212.41" y1="192.6" x2="247.12" y2="197.66"
      gradientUnits="userSpaceOnUse">
      <stop offset="0" stop-color="#43c5e4" />
      <stop offset="0.17" stop-color="#43bbde" />
      <stop offset="0.45" stop-color="#45a0d0" />
      <stop offset="0.82" stop-color="#4775b8" />
      <stop offset="1" stop-color="#485daa" />
    </linearGradient>
    <linearGradient id="linear-gradient-8" x1="129.71" y1="316.27" x2="144.56" y2="310.86"
      xlink:href="#linear-gradient-4" />
  </defs>
  <g id="Layer_2" data-name="Layer 2">
    <g id="Layer_1-2" data-name="Layer 1">
      <g class="cls-2">
        <path class="cls-3"
          d="M92.26,357.79a4.79,4.79,0,0,1-6.05,3h0a4.8,4.8,0,0,1-3-6.06L110.59,272a4.79,4.79,0,0,1,6-3h0a4.8,4.8,0,0,1,3,6.06L92.26,357.79"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-4"
          d="M156.54,357.34a4.78,4.78,0,0,1-5.76,3.56h0a4.78,4.78,0,0,1-3.56-5.76l41.27-174.35a4.79,4.79,0,0,1,5.77-3.56h0a4.8,4.8,0,0,1,3.56,5.76L156.54,357.34"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M795.27,357.5h2.19v11.72a13.68,13.68,0,0,1-5,3,18.7,18.7,0,0,1-6.19,1,17.12,17.12,0,0,1-8.39-2.06,15.16,15.16,0,0,1-5.86-5.68,16.71,16.71,0,0,1,0-16.29,15.16,15.16,0,0,1,5.86-5.68,17.2,17.2,0,0,1,8.43-2.06,17.68,17.68,0,0,1,6.33,1.1,13.57,13.57,0,0,1,4.94,3.2l-1.43,1.52a11.84,11.84,0,0,0-4.4-2.84,16,16,0,0,0-5.39-.87,14.7,14.7,0,0,0-7.27,1.79,13,13,0,0,0-5.08,4.94,13.78,13.78,0,0,0-1.83,7.05,13.47,13.47,0,0,0,6.93,12,14.5,14.5,0,0,0,7.25,1.81,13.68,13.68,0,0,0,8.9-2.86Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5" d="M827.61,371V373H806V341.71h20.94v2.06H808.29v12.34H825v2H808.29V371Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M856.19,373l-7.47-10.46a24.29,24.29,0,0,1-3,.22h-8.95V373h-2.28V341.71h11.23q5.91,0,9.26,2.79a9.57,9.57,0,0,1,3.36,7.77,9.56,9.56,0,0,1-7.34,9.79l7.83,11Zm-10.51-12.26c3.34,0,5.89-.73,7.65-2.21a8.8,8.8,0,0,0,0-12.57c-1.76-1.48-4.31-2.21-7.65-2.21h-8.95v17Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M884.55,364.21H866.39l-4,8.81H860l14.4-31.31h2.29L891,373h-2.46Zm-.85-1.92-8.23-18.08-8.18,18.08Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M899.74,371.19a15.17,15.17,0,0,1-5.81-5.68,16.64,16.64,0,0,1,0-16.29,15.17,15.17,0,0,1,5.81-5.68,16.78,16.78,0,0,1,8.3-2.06,17.41,17.41,0,0,1,6.26,1.1,13,13,0,0,1,4.88,3.24l-1.43,1.48a13.13,13.13,0,0,0-9.62-3.71,14.41,14.41,0,0,0-7.16,1.79,13,13,0,0,0-5.05,4.94,14.41,14.41,0,0,0,0,14.09,13,13,0,0,0,5.05,4.94,14.41,14.41,0,0,0,7.16,1.79,13.16,13.16,0,0,0,9.62-3.75l1.43,1.47a13.28,13.28,0,0,1-4.9,3.27,17.21,17.21,0,0,1-6.24,1.12A16.78,16.78,0,0,1,899.74,371.19Zm3.33,10.42.63-1.25a4.63,4.63,0,0,0,2.91.94,3.36,3.36,0,0,0,2.14-.63,2.08,2.08,0,0,0,.81-1.74,2,2,0,0,0-.76-1.66,3.36,3.36,0,0,0-2.19-.62h-.9l1-3.9h1.48l-.72,2.69a4.38,4.38,0,0,1,2.8,1.09,3.3,3.3,0,0,1,1,2.49,3.22,3.22,0,0,1-1.32,2.7,5.38,5.38,0,0,1-3.37,1A5.57,5.57,0,0,1,903.07,381.61Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M943.87,364.21H925.71l-4,8.81h-2.46l14.4-31.31H936L950.36,373H947.9Zm-.85-1.92-8.23-18.08-8.19,18.08Zm-7-24a9.55,9.55,0,0,1-1.63-1.27,11.6,11.6,0,0,0-1.28-1,2,2,0,0,0-1.09-.34,2,2,0,0,0-1.66.79,3.62,3.62,0,0,0-.71,2.12h-1.48a5.41,5.41,0,0,1,1.07-3.24,3.22,3.22,0,0,1,2.64-1.23,3.3,3.3,0,0,1,1.77.47,10,10,0,0,1,1.63,1.27,10.73,10.73,0,0,0,1.28,1,2,2,0,0,0,1.09.34,2,2,0,0,0,1.66-.77,3.56,3.56,0,0,0,.71-2.05h1.48a5.17,5.17,0,0,1-1.1,3.17,3.22,3.22,0,0,1-2.61,1.21A3.39,3.39,0,0,1,936,338.33Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M959.08,371.17a15.33,15.33,0,0,1-5.84-5.71,16.51,16.51,0,0,1,0-16.19,15.33,15.33,0,0,1,5.84-5.71,17.76,17.76,0,0,1,16.64,0,15.25,15.25,0,0,1,5.84,5.68,16.71,16.71,0,0,1,0,16.29,15.25,15.25,0,0,1-5.84,5.68,17.76,17.76,0,0,1-16.64,0Zm15.43-1.82a13.13,13.13,0,0,0,5-4.94,14.41,14.41,0,0,0,0-14.09,13.13,13.13,0,0,0-5-4.94,15.08,15.08,0,0,0-14.25,0,13.12,13.12,0,0,0-5,4.94,14.48,14.48,0,0,0,0,14.09,13.12,13.12,0,0,0,5,4.94,15.08,15.08,0,0,0,14.25,0Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M1000.14,341.71h12.39a18.17,18.17,0,0,1,8.66,2,14.69,14.69,0,0,1,5.88,5.57,16.58,16.58,0,0,1,0,16.15,14.69,14.69,0,0,1-5.88,5.57,18.17,18.17,0,0,1-8.66,2h-12.39ZM1012.35,371a16.28,16.28,0,0,0,7.65-1.72,12.28,12.28,0,0,0,5.1-4.81,14.84,14.84,0,0,0,0-14.13,12.28,12.28,0,0,0-5.1-4.81,16.28,16.28,0,0,0-7.65-1.72h-9.93V371Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M1057.22,371V373h-21.6V341.71h20.93v2.06H1037.9v12.34h16.68v2H1037.9V371Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5" d="M1074.08,341.71h2.29V371h18V373h-20.31Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M1120.38,371V373h-21.6V341.71h20.93v2.06h-18.65v12.34h16.68v2h-16.68V371Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M1146.6,364.21h-18.17l-4,8.81H1122l14.41-31.31h2.28l14.4,31.31h-2.46Zm-.85-1.92-8.23-18.08-8.19,18.08Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M1157.29,341.71h12.39a18.13,18.13,0,0,1,8.65,2,14.78,14.78,0,0,1,5.89,5.57,16.58,16.58,0,0,1,0,16.15,14.78,14.78,0,0,1-5.89,5.57,18.13,18.13,0,0,1-8.65,2h-12.39ZM1169.5,371a16.34,16.34,0,0,0,7.65-1.72,12.4,12.4,0,0,0,5.1-4.81,14.84,14.84,0,0,0,0-14.13,12.4,12.4,0,0,0-5.1-4.81,16.34,16.34,0,0,0-7.65-1.72h-9.93V371Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-5"
          d="M1194.44,372.06a12.68,12.68,0,0,1-4.86-3.06l1-1.7a12.15,12.15,0,0,0,4.45,2.84,16,16,0,0,0,5.89,1.09c3,0,5.23-.56,6.75-1.7a5.27,5.27,0,0,0,2.28-4.43,4.59,4.59,0,0,0-1.21-3.35,7.79,7.79,0,0,0-3-1.92,42,42,0,0,0-4.83-1.39,47.13,47.13,0,0,1-5.53-1.66,8.7,8.7,0,0,1-3.53-2.48,6.63,6.63,0,0,1-1.46-4.49,7.72,7.72,0,0,1,1.21-4.19,8.33,8.33,0,0,1,3.69-3,15.21,15.21,0,0,1,6.2-1.12,17.37,17.37,0,0,1,5.1.77,15,15,0,0,1,4.34,2.05l-.85,1.84a14.62,14.62,0,0,0-4.14-2,15.5,15.5,0,0,0-4.45-.67q-4.35,0-6.58,1.74a5.49,5.49,0,0,0-2.24,4.52,4.68,4.68,0,0,0,1.21,3.36,8.15,8.15,0,0,0,3,1.92,45.8,45.8,0,0,0,4.87,1.43,45.49,45.49,0,0,1,5.51,1.66,9.06,9.06,0,0,1,3.51,2.43,6.39,6.39,0,0,1,1.45,4.41,7.43,7.43,0,0,1-1.23,4.16,8.42,8.42,0,0,1-3.78,3,15.68,15.68,0,0,1-6.26,1.12A18.2,18.2,0,0,1,1194.44,372.06Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-6"
          d="M331.87,194.05c0,.1-.07.25-.11.35a154.72,154.72,0,0,1-24.05,49,150.46,150.46,0,0,1-18.66,21.13,36.11,36.11,0,0,0-12.12-10,37.12,37.12,0,0,0-6.61-2.61,36.36,36.36,0,0,0-22.59.79,153,153,0,0,1-4.57-27.84,154.94,154.94,0,0,1,5.75-54.33c0-.11.07-.25.11-.36A155.2,155.2,0,0,1,310.6,85c.4-.29.79-.54,1.18-.82a9.09,9.09,0,0,1,12.69,3.68,8.09,8.09,0,0,1,.57,1.32c.11.21.18.46.29.68A155.43,155.43,0,0,1,331.87,194.05Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-7"
          d="M250.94,356.3a9,9,0,0,1-1.75,2.33,9.23,9.23,0,0,1-4,2.18,9.53,9.53,0,0,1-3.86.21,9.72,9.72,0,0,1-1.43-.39,6.92,6.92,0,0,1-1.35-.57,8.76,8.76,0,0,1-1.22-.79,9.78,9.78,0,0,1-1.07-.93l-.11-.11a7.66,7.66,0,0,1-.86-1.11,8.43,8.43,0,0,1-.75-1.28s0-.07,0-.11a5.87,5.87,0,0,1-.43-1.18,1.72,1.72,0,0,1-.07-.21L188.61,184.06a9.17,9.17,0,0,1,6.47-11.19,8.66,8.66,0,0,1,2.36-.32,9.13,9.13,0,0,1,8.82,6.79L210.7,196a63.52,63.52,0,0,0-5.4,13.12l-.18.71c-.18.72-.39,1.43-.54,2.15-.14.39-.17.71-.25.89v.07l0,.18a9.67,9.67,0,0,0,3.29,8.94,9.43,9.43,0,0,0,5.89,2.28h.18a5.78,5.78,0,0,0,.72,0h.14c1-.07,2.11-.11,3.18-.11a2.46,2.46,0,0,1,.54,0L243,317.09l8.68,32.53A9.1,9.1,0,0,1,250.94,356.3Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-8"
          d="M277.47,260.65l-25.74,93.79a6.56,6.56,0,0,1-.79,1.86,7.48,7.48,0,0,1-1.75,2.33,5.08,5.08,0,0,1-.86.71,8.88,8.88,0,0,1-7,1.68,6.09,6.09,0,0,1-.89-.18,1.73,1.73,0,0,1-.54-.21,6.92,6.92,0,0,1-1.35-.57,8.76,8.76,0,0,1-1.22-.79,9.78,9.78,0,0,1-1.07-.93l-.11-.11a7.66,7.66,0,0,1-.86-1.11,8.43,8.43,0,0,1-.75-1.28s0-.07,0-.11a5.87,5.87,0,0,1-.43-1.18,8.88,8.88,0,0,1,0-4.93L243,317.09l16.9-61.55h.29a31.64,31.64,0,0,1,8.72,1.25,34.22,34.22,0,0,1,5.69,2.22C275.57,259.51,276.54,260.05,277.47,260.65Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-9"
          d="M343.31,248.84c-.32,1.07-.64,2.14-1,3.22a4.52,4.52,0,0,1-3.61,2.89,4.36,4.36,0,0,1-2.93-.53,6.41,6.41,0,0,1-.79-.58,59.57,59.57,0,0,0-17.83-8.5,58.23,58.23,0,0,0-9.4-1.9,154.72,154.72,0,0,0,24.05-49c0-.1.08-.25.11-.35A59.72,59.72,0,0,1,343.31,248.84Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-10"
          d="M248.91,170.53a154.94,154.94,0,0,0-5.75,54.33,56.69,56.69,0,0,0-8.94-3.4,59.39,59.39,0,0,0-20-2.25c-.17,0-.35,0-.53,0a4.58,4.58,0,0,1-4.36-5.36,3,3,0,0,1,.14-.57c.21-.93.46-1.86.71-2.82A59.94,59.94,0,0,1,249,170.17C249,170.28,249,170.42,248.91,170.53Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-11"
          d="M314.18,156.87a13.8,13.8,0,0,1-26.49.18,13.63,13.63,0,0,0,8.12,6.4,13.79,13.79,0,0,0,17.05-17.27A13.67,13.67,0,0,1,314.18,156.87Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-11"
          d="M331.87,194.05c0,.1-.07.25-.11.35a154.72,154.72,0,0,1-24.05,49,150.46,150.46,0,0,1-18.66,21.13,36.11,36.11,0,0,0-12.12-10A156,156,0,0,0,330.8,115.41a153,153,0,0,0-5.47-25.52A155.43,155.43,0,0,1,331.87,194.05Z"
          transform="translate(-82.93 -82.96)" />
        <circle class="cls-12" cx="216.71" cy="67.23" r="13.82" />
        <path class="cls-13"
          d="M312.93,154a13.81,13.81,0,0,1-17.12,9.44,14,14,0,0,1-9.62-10.15,11,11,0,0,0,1,1.64,13.53,13.53,0,0,0,7.4,5.26,13.86,13.86,0,0,0,17.55-15.09c-.08-.39-.15-.78-.22-1.18a12.88,12.88,0,0,1,.9,2.25A13.89,13.89,0,0,1,312.93,154Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14" d="M382.25,208h22.86v98.79H382.25Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14"
          d="M537.75,238.11q8.38,8.4,8.39,25.2v43.46h-22V266.69q0-9-3.74-13.48t-10.66-4.44q-7.75,0-12.28,5t-4.51,14.89v38.1h-22V266.69q0-17.92-14.39-17.92-7.62,0-12.14,5t-4.51,14.89v38.1h-22V230.85h21v8.74a27.82,27.82,0,0,1,10.37-7.33,34.77,34.77,0,0,1,13.48-2.54,32.63,32.63,0,0,1,14.54,3.17,25.83,25.83,0,0,1,10.44,9.25A31.1,31.1,0,0,1,499.5,233a37.24,37.24,0,0,1,15.6-3.24Q529.35,229.72,537.75,238.11Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14"
          d="M623,234.58a35,35,0,0,1,13.61,13.7,45,45,0,0,1,0,41.06A34.93,34.93,0,0,1,623,303a38.67,38.67,0,0,1-19.27,4.87q-14.53,0-22.86-9.17v35.42h-22V230.85h21v8.74q8.19-9.87,23.85-9.87A38.77,38.77,0,0,1,623,234.58Zm-9.18,49.54q5.43-5.72,5.44-15.31t-5.44-15.31a19.75,19.75,0,0,0-27.8,0q-5.43,5.72-5.43,15.31t5.43,15.31a19.75,19.75,0,0,0,27.8,0Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14"
          d="M731.26,230.85v75.92H710.37v-9a29.29,29.29,0,0,1-10.44,7.55,32.92,32.92,0,0,1-13.13,2.61q-15,0-23.71-8.61t-8.75-25.54v-42.9h22V270.5q0,18.35,15.38,18.35,7.9,0,12.7-5.15t4.8-15.32V230.85Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14" d="M744,202.06h22V306.77H744Z" transform="translate(-82.93 -82.96)" />
        <path class="cls-14"
          d="M791.41,305.59a48.18,48.18,0,0,1-14.4-5.85l7.32-15.81a46.28,46.28,0,0,0,12.29,5.28,51.6,51.6,0,0,0,14.11,2q14,0,14-6.93,0-3.24-3.81-4.65a56.12,56.12,0,0,0-11.71-2.39A113.71,113.71,0,0,1,793.78,274a23.89,23.89,0,0,1-10.52-6.48q-4.44-4.65-4.45-13.26A20.77,20.77,0,0,1,783,241.52q4.15-5.57,12.13-8.69a51.78,51.78,0,0,1,18.84-3.11,73.75,73.75,0,0,1,16,1.75,45.08,45.08,0,0,1,13.2,4.85L835.82,252a43.76,43.76,0,0,0-21.88-5.63q-7.07,0-10.58,2c-2.35,1.32-3.53,3-3.53,5.08,0,2.36,1.28,4,3.82,4.94A67,67,0,0,0,815.79,261,128.16,128.16,0,0,1,831,264.35a22.91,22.91,0,0,1,10.31,6.41c2.91,3.1,4.38,7.43,4.38,13a20,20,0,0,1-4.22,12.56q-4.23,5.52-12.34,8.55a55.05,55.05,0,0,1-19.26,3A73.83,73.83,0,0,1,791.41,305.59Z"
          transform="translate(-82.93 -82.96)" />
        <rect class="cls-14" x="775.75" y="147.89" width="22.02" height="75.93" />
        <path class="cls-14"
          d="M913.69,302.89A37.2,37.2,0,0,1,898.8,289a40.67,40.67,0,0,1,0-40.36,37.2,37.2,0,0,1,14.89-13.9,48.57,48.57,0,0,1,43,0,37.4,37.4,0,0,1,14.82,13.9,40.67,40.67,0,0,1,0,40.36,37.4,37.4,0,0,1-14.82,13.9,48.57,48.57,0,0,1-43,0Zm35.42-18.77q5.43-5.72,5.43-15.31t-5.43-15.31a18.33,18.33,0,0,0-13.9-5.72,18.57,18.57,0,0,0-14,5.72q-5.5,5.72-5.51,15.31t5.51,15.31a18.57,18.57,0,0,0,14,5.72A18.33,18.33,0,0,0,949.11,284.12Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14"
          d="M1058.53,238.09q8.68,8.47,8.68,25.12v43.47h-22V266.6q0-9-4-13.48t-11.43-4.45q-8.32,0-13.26,5.15t-4.94,15.32v37.54h-22V230.75h21v8.89a29.2,29.2,0,0,1,10.87-7.41,37.8,37.8,0,0,1,14.25-2.61Q1049.86,229.62,1058.53,238.09Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14"
          d="M1142.86,238.11q9.47,8.4,9.46,25.34v43.32h-20.61v-9.45q-6.21,10.57-23.14,10.58a35.83,35.83,0,0,1-15.17-3,22.63,22.63,0,0,1-9.81-8.19,21.28,21.28,0,0,1-3.39-11.85q0-10.59,8-16.65t24.62-6.07h17.5q0-7.2-4.37-11.08t-13.13-3.88a38.29,38.29,0,0,0-11.92,1.9,31.59,31.59,0,0,0-10,5.15l-7.9-15.38a47.75,47.75,0,0,1,14.88-6.77,66.73,66.73,0,0,1,17.86-2.4Q1133.41,229.72,1142.86,238.11Zm-18.77,52.36a14.24,14.24,0,0,0,6.21-7.69V275h-15.1q-13.54,0-13.55,8.89a7.91,7.91,0,0,0,3.32,6.7q3.32,2.47,9.1,2.47A19.05,19.05,0,0,0,1124.09,290.47Z"
          transform="translate(-82.93 -82.96)" />
        <path class="cls-14"
          d="M1196.75,232.54a39.58,39.58,0,0,1,15.45-2.82V250c-2.44-.19-4.09-.28-4.94-.28q-9.45,0-14.81,5.29t-5.37,15.88v35.84h-22V230.85h21v10A24.44,24.44,0,0,1,1196.75,232.54Z"
          transform="translate(-82.93 -82.96)" />
        <circle class="cls-14" cx="786.75" cy="126.57" r="13.82" />
        <path class="cls-15"
          d="M156.24,354.31a4.79,4.79,0,0,1-2.44,6.32h0a4.79,4.79,0,0,1-6.32-2.44l-36.73-82.72a4.8,4.8,0,0,1,2.44-6.32h0a4.79,4.79,0,0,1,6.32,2.44l36.73,82.72"
          transform="translate(-82.93 -82.96)" />
      </g>
    </g>
  </g>
</svg>

<h3>Novo Formulário de Contacto</h3>

<p>Recebeu um novo formulário de contacto de ${a}:</p>
<ul>
<li><strong>Nome:</strong> ${a}</li>
<li><strong>Email:</strong> <a href="mailto:${i}">${i}</a></li>
${e ? `<li><strong>Contacto Telefónico:</strong> <a href="tel:${e}">${e}</a></li>` : ''}
</ul>

<p style="margin-top: 20px;font-weight:bold;">Mensagem</p>
<p>${n}</p>


<p style="margin-top: 40px;">
    Ao seu dispor,<br />
    <strong>${t}</strong>.
</p>`,
  ht = wt({
    host: process.env.SMTP_HOST ?? '',
    port: Number(process.env.SMTP_PORT) ?? 587,
    secureConnection: !!process.env.SMTP_SECURE,
    auth: { user: process.env.SMTP_EMAIL ?? '', pass: process.env.SMTP_PASSWORD ?? '' },
  });
ht.verify((i, n) => {
  i ? console.error('📥 Email serverw error:', i) : console.info('📤 Email server is ready to send messages!');
});
const Dt = $t(Mt(Ht, 'c_10313', '$$function0'));
async function Ht(i) {
  try {
    await ht.sendMail({
      from: K.email.email,
      to: K.email.email,
      subject: 'Formulário de contacto',
      html: jt({
        email: i.email,
        message: i.message,
        name: i.name,
        phone: i.phone ? i.phone : void 0,
        title: 'Impulsionar',
      }),
    });
  } catch {}
}
var zt = ['<span', ' class="text-red-500">*</span>'];
function Gt(i) {
  const n = tt({ class: '' }, i),
    [a, e, t] = et(n, ['field', 'children', 'class', 'helpMessage'], ['onChange']);
  return h(rt, {
    get validationState() {
      return a.field.state.meta.errors.length ? 'invalid' : 'valid';
    },
    get onChange() {
      return e.onChange;
    },
    class: 'flex flex-col gap-1.5',
    get children() {
      return [
        h(it, {
          get for() {
            return t.name ?? t.id;
          },
          get children() {
            return [
              a.children,
              h(w, {
                get when() {
                  return t.required;
                },
                get children() {
                  return V(zt, F());
                },
              }),
            ];
          },
        }),
        h(
          bt,
          j(t, {
            get name() {
              return t.name ?? t.id;
            },
            get class() {
              return E([a.class, { 'border-destructive text-destructive': a.field.state.meta.errors.length }]);
            },
          }),
        ),
        h(st, {
          get children() {
            return [
              h(Z, {
                get when() {
                  return a.field.state.meta.errors;
                },
                keyed: !0,
                children: (s) => h(at, { each: s, children: (r) => h(nt, { children: r }) }),
              }),
              h(Z, {
                get when() {
                  return a.helpMessage;
                },
                get children() {
                  return h(ot, {
                    get children() {
                      return a.helpMessage;
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
var Kt = ['<span', ' class="text-red-500">*</span>'];
function k(i) {
  const n = tt({ type: 'text', class: '' }, i),
    [a, e, t] = et(n, ['field', 'children', 'class', 'helpMessage'], ['onChange']);
  return h(rt, {
    get validationState() {
      return a.field.state.meta.errors.length ? 'invalid' : 'valid';
    },
    get onChange() {
      return e.onChange;
    },
    class: 'flex flex-col gap-1.5',
    get children() {
      return [
        h(it, {
          get for() {
            return t.name ?? t.id;
          },
          get children() {
            return [
              a.children,
              h(w, {
                get when() {
                  return t.required;
                },
                get children() {
                  return V(Kt, F());
                },
              }),
            ];
          },
        }),
        h(
          yt,
          j(t, {
            get class() {
              return E([a.class, { 'border-destructive text-destructive': a.field.state.meta.errors.length }]);
            },
            get 'aria-invalid'() {
              return a.field.state.meta.errors.length ? 'true' : 'false';
            },
            get name() {
              return t.name ?? t.id;
            },
            get type() {
              return t.type;
            },
          }),
        ),
        h(st, {
          get children() {
            return [
              h(Z, {
                get when() {
                  return !!a.field.state.meta.errors.length;
                },
                get children() {
                  return h(at, {
                    get each() {
                      return a.field.state.meta.errors ?? [];
                    },
                    children: (s) => h(nt, { children: s }),
                  });
                },
              }),
              h(Z, {
                get when() {
                  return a.helpMessage;
                },
                get children() {
                  return h(ot, {
                    get children() {
                      return a.helpMessage;
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
var Nt = [
    '<div',
    ' data-aos="fade-down"',
    '><h4 class="font-semibold text-lg">Obrigado!</h4><p>A sua mensagem foi enviada com sucesso, iremos responder o mais breve possível.</p></div>',
  ],
  Rt = [
    '<form',
    ' class="space-y-6"><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--></form>',
  ];
function Qt() {
  const [i, n] = Y(!1),
    a = _t(Dt),
    e = Ut(() => ({
      defaultValues: { name: '', email: '', phone: 0, message: '', acceptance: !1 },
      onSubmit: async ({ value: t }) => {
        try {
          await a(t);
        } catch {
          throw new Error('Failed to send email');
        }
      },
      validatorAdapter: St(),
    }));
  return V(
    Rt,
    F(),
    g(
      h(w, {
        get when() {
          return i();
        },
        get children() {
          return V(
            Nt,
            F(),
            W('class', g(E(['px-2 py-3', 'rounded border border-green-500', 'bg-green-50/20', 'text-sm']), !0), !1),
          );
        },
      }),
    ),
    g(
      h(e.Field, {
        name: 'name',
        get validators() {
          return {
            onSubmit: _.string({ required_error: 'Por favor, preencha o seu nome.' }).min(
              2,
              'Por favor, preencha o seu nome.',
            ),
            onChange: _.string({ required_error: 'Por favor, preencha o seu nome.' }).min(
              2,
              'Por favor, preencha o seu nome.',
            ),
          };
        },
        children: (t) =>
          h(k, {
            type: 'text',
            required: !0,
            get id() {
              return t().name;
            },
            get name() {
              return t().name;
            },
            get onBlur() {
              return t().handleBlur;
            },
            onChange: (s) => t().handleChange(s),
            get field() {
              return t();
            },
            placeholder: 'Por favor introduza o seu nome.',
            children: 'Nome',
          }),
      }),
    ),
    g(
      h(e.Field, {
        name: 'email',
        get validators() {
          return {
            onSubmit: _.string({ required_error: 'Por favor, preencha o seu nome.' }).email(
              'Por favor, introduza um email válido',
            ),
            onChange: _.string({ required_error: 'Por favor, preencha o seu nome.' }).email(
              'Por favor, introduza um email válido',
            ),
          };
        },
        children: (t) =>
          h(k, {
            required: !0,
            get id() {
              return t().name;
            },
            get name() {
              return t().name;
            },
            type: 'email',
            get onBlur() {
              return t().handleBlur;
            },
            onChange: (s) => t().handleChange(s),
            get field() {
              return t();
            },
            placeholder: 'Por favor introduza o seu email.',
            children: 'Email',
          }),
      }),
    ),
    g(
      h(e.Field, {
        name: 'phone',
        get validators() {
          return {
            onChange: _.number({ invalid_type_error: 'Por favor, introduza apenas números.' })
              .refine((t) => (t ? /^\d{9}$/.test(String(t)) : !0), 'Por favor, introduza um contacto válido.')
              .optional(),
            onSubmit: _.number({ invalid_type_error: 'Por favor, introduza apenas números.' })
              .refine((t) => (t ? /^\d{9}$/.test(String(t)) : !0), 'Por favor, introduza um contacto válido.')
              .optional(),
          };
        },
        children: (t) =>
          h(k, {
            get id() {
              return t().name;
            },
            get name() {
              return t().name;
            },
            type: 'number',
            get onBlur() {
              return t().handleBlur;
            },
            onChange: (s) => t().handleChange(Number(s)),
            get field() {
              return t();
            },
            pattern: 'd{9}',
            placeholder: 'Por favor introduza o seu contacto telefónico.',
            children: 'Contacto telefónico',
          }),
      }),
    ),
    g(
      h(e.Field, {
        name: 'message',
        get validators() {
          return {
            onChange: _.string({ required_error: 'Por favor, preencha a mensagem.' }).min(
              5,
              'A sua mensagem deve conter, pelo menos, 5 caracteres.',
            ),
          };
        },
        children: (t) =>
          h(Gt, {
            get id() {
              return t().name;
            },
            get name() {
              return t().name;
            },
            get onBlur() {
              return t().handleBlur;
            },
            required: !0,
            onChange: (s) => t().handleChange(s),
            get field() {
              return t();
            },
            placeholder: 'Por favor introduza a sua mensagem.',
            children: 'Mensagem',
          }),
      }),
    ),
    g(
      h(e.Subscribe, {
        selector: (t) => ({ canSubmit: t.canSubmit, isSubmitting: t.isSubmitting }),
        children: (t) =>
          h(Vt, {
            get disabled() {
              return !t().canSubmit || t().isSubmitting;
            },
            get class() {
              return E(['w-fit', { 'animate-pulse': t().isSubmitting }]);
            },
            type: 'submit',
            children: 'Enviar',
          }),
      }),
    ),
  );
}
var Wt = ['<section', ' class=""><div><!--$-->', '<!--/--><!--$-->', '<!--/--></div></section>'],
  Jt = ['<h2', ' class="font-semibold text-lg text-zinc-50 md:text-xl">', '</h2>'],
  Xt = ['<p', ' class="mt-2">', '</p>'];
function Yt(i) {
  return V(
    Wt,
    F(),
    g(
      h(w, {
        get when() {
          return i.title;
        },
        keyed: !0,
        children: (n) => V(Jt, F(), g(n)),
      }),
    ),
    g(
      h(w, {
        get when() {
          return i.headline;
        },
        keyed: !0,
        children: (n) => V(Xt, F(), g(n)),
      }),
    ),
  );
}
var te = [
    '<main',
    '><header class="py-16"><div class="container flex flex-col items-center justify-center gap-2 text-center"><h1 class="font-bold">',
    '</h1><!--$-->',
    '<!--/--></div></header><section class="py-8 md:py-12"><div class="container grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[0.5fr_1fr]"><!--$-->',
    '<!--/--><section><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--><!--$-->',
    '<!--/--></section></div></section></main>',
  ],
  ee = ['<p', ' class="text-lg">', '</p>'],
  se = ['<h2', '>', '</h2>'],
  ae = ['<p', ' class="mb-6">', '</p>'];
function Fe() {
  const i = N(() => Ft()),
    n = N(() => At());
  return V(
    te,
    F(),
    g(i()?.title) ?? 'Contactos',
    g(
      h(w, {
        get when() {
          return i()?.headline;
        },
        keyed: !0,
        children: (a) => V(ee, F(), g(a)),
      }),
    ),
    g(
      h(w, {
        get when() {
          return !!n()?.contacts?.length || !!n()?.social?.length;
        },
        get children() {
          return h(Yt, {
            get title() {
              return i()?.list?.title;
            },
            get headline() {
              return i()?.list?.headline;
            },
            get contacts() {
              return n()?.contacts;
            },
            get social() {
              return n()?.social;
            },
          });
        },
      }),
    ),
    g(
      h(w, {
        get when() {
          return i()?.form?.title;
        },
        keyed: !0,
        children: (a) =>
          V(se, F() + W('class', g(E(['mb-1 font-semibold', { 'mb-6': !i()?.form?.headline }]), !0), !1), g(a)),
      }),
    ),
    g(
      h(w, {
        get when() {
          return i()?.form?.headline;
        },
        keyed: !0,
        children: (a) => V(ae, F(), g(a)),
      }),
    ),
    g(h(Qt, {})),
  );
}
export { Fe as default };
