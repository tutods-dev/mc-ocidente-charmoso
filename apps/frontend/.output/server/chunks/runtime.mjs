import process from 'node:process';globalThis._importMeta_=globalThis._importMeta_||{url:"file:///_entry.js",env:process.env};import * as http$1 from 'node:http';
import http__default$1, { Server as Server$1 } from 'node:http';
import * as node_https from 'node:https';
import node_https__default, { Server } from 'node:https';
import * as node_zlib from 'node:zlib';
import * as node_stream from 'node:stream';
import * as node_buffer from 'node:buffer';
import * as node_util from 'node:util';
import * as node_url from 'node:url';
import { pathToFileURL, fileURLToPath } from 'node:url';
import * as node_net from 'node:net';
import * as node_fs$1 from 'node:fs';
import { promises, existsSync } from 'node:fs';
import * as node_path$1 from 'node:path';
import { dirname as dirname$1, resolve as resolve$1, join } from 'node:path';
import { AsyncLocalStorage } from 'node:async_hooks';
import invariant from 'vinxi/lib/invariant';
import { join as join$1, virtualId, handlerModule } from 'vinxi/lib/path';
import { isServer, getRequestEvent, renderToString, ssrElement, escape, mergeProps, ssr, createComponent as createComponent$1, ssrHydrationKey, Portal, Dynamic, ssrAttribute, renderToStream, NoHydration, useAssets, HydrationScript, Hydration, delegateEvents } from 'solid-js/web';
import { provideRequestEvent } from 'solid-js/web/storage';
import { createContext as createContext$1, useContext, createMemo, untrack, createSignal, createRenderEffect, on as on$2, runWithOwner, createComponent, getOwner, startTransition, resetErrorBoundaries, batch, getListener, onCleanup, sharedConfig, lazy, createResource, splitProps, Show, For, createUniqueId, mergeProps as mergeProps$1, createEffect, onMount, DEV, Suspense, ErrorBoundary, catchError, Switch, Match, children, createRoot } from 'solid-js';
import { createClient } from '@sanity/client';
import { createTransport } from 'nodemailer';
import { cva } from 'class-variance-authority';
import je$3, { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { useWindowScrollPosition } from '@solid-primitives/scroll';
import { tv } from 'tailwind-variants';
import { useWindowSize } from '@solid-primitives/resize-observer';

var commonjsGlobal$1 = typeof globalThis !== 'undefined' ? globalThis : "undefined" !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

function getDefaultExportFromNamespaceIfNotNamed (n) {
	return n && Object.prototype.hasOwnProperty.call(n, 'default') && Object.keys(n).length === 1 ? n['default'] : n;
}

var node$1 = {};

const require$$3 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(http$1);

const require$$4$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_https);

const require$$5 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_zlib);

const require$$6$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_stream);

const require$$7 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_buffer);

const require$$8 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_util);

var nodeFetchNative_61758d11 = {};

var l$3=Object.defineProperty;var o$5=(e,t)=>l$3(e,"name",{value:t,configurable:!0});var commonjsGlobal=typeof globalThis<"u"?globalThis:typeof commonjsGlobal$1<"u"?commonjsGlobal$1:typeof self<"u"?self:{};function getDefaultExportFromCjs(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}o$5(getDefaultExportFromCjs,"getDefaultExportFromCjs"),nodeFetchNative_61758d11.commonjsGlobal=commonjsGlobal,nodeFetchNative_61758d11.getDefaultExportFromCjs=getDefaultExportFromCjs;

const require$$10 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_url);

const require$$11 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_net);

const require$$0$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_fs$1);

const require$$1$1 = /*@__PURE__*/getDefaultExportFromNamespaceIfNotNamed(node_path$1);

var ms$1=Object.defineProperty;var u$3=(c,l)=>ms$1(c,"name",{value:l,configurable:!0});var Po$1=(c,l,d)=>{if(!l.has(c))throw TypeError("Cannot "+d)};var D$4=(c,l,d)=>(Po$1(c,l,"read from private field"),d?d.call(c):l.get(c)),ye$3=(c,l,d)=>{if(l.has(c))throw TypeError("Cannot add the same private member more than once");l instanceof WeakSet?l.add(c):l.set(c,d);},ne$4=(c,l,d,y)=>(Po$1(c,l,"write to private field"),l.set(c,d),d);var Pe$4,bt$3,ot$3,Zt$3,Ue$2,mt$3,yt$3,gt$3,oe$4,_t$2,Me$3,xe$4,St$3;Object.defineProperty(node$1,"__esModule",{value:!0});const http=require$$3,https=require$$4$1,zlib=require$$5,Stream=require$$6$1,require$$6=require$$7,require$$0=require$$8,_commonjsHelpers=nodeFetchNative_61758d11,require$$1=require$$10,require$$4=require$$11,node_fs=require$$0$1,node_path=require$$1$1;function _interopDefaultCompat(c){return c&&typeof c=="object"&&"default"in c?c.default:c}u$3(_interopDefaultCompat,"_interopDefaultCompat");const http__default=_interopDefaultCompat(http),https__default=_interopDefaultCompat(https),zlib__default=_interopDefaultCompat(zlib),Stream__default=_interopDefaultCompat(Stream);function dataUriToBuffer(c){if(!/^data:/i.test(c))throw new TypeError('`uri` does not appear to be a Data URI (must begin with "data:")');c=c.replace(/\r?\n/g,"");const l=c.indexOf(",");if(l===-1||l<=4)throw new TypeError("malformed data: URI");const d=c.substring(5,l).split(";");let y="",b=!1;const R=d[0]||"text/plain";let w=R;for(let F=1;F<d.length;F++)d[F]==="base64"?b=!0:d[F]&&(w+=`;${d[F]}`,d[F].indexOf("charset=")===0&&(y=d[F].substring(8)));!d[0]&&!y.length&&(w+=";charset=US-ASCII",y="US-ASCII");const v=b?"base64":"ascii",I=unescape(c.substring(l+1)),B=Buffer.from(I,v);return B.type=R,B.typeFull=w,B.charset=y,B}u$3(dataUriToBuffer,"dataUriToBuffer");var ponyfill_es2018={exports:{}};/**
 * @license
 * web-streams-polyfill v3.3.3
 * Copyright 2024 Mattias Buelens, Diwank Singh Tomer and other contributors.
 * This code is released under the MIT license.
 * SPDX-License-Identifier: MIT
 */var hasRequiredPonyfill_es2018;function requirePonyfill_es2018(){return hasRequiredPonyfill_es2018||(hasRequiredPonyfill_es2018=1,function(c,l){(function(d,y){y(l);})(_commonjsHelpers.commonjsGlobal,function(d){function y(){}u$3(y,"noop");function b(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$3(b,"typeIsObject");const R=y;function w(n,o){try{Object.defineProperty(n,"name",{value:o,configurable:!0});}catch{}}u$3(w,"setFunctionName");const v=Promise,I=Promise.prototype.then,B=Promise.reject.bind(v);function F(n){return new v(n)}u$3(F,"newPromise");function k(n){return F(o=>o(n))}u$3(k,"promiseResolvedWith");function T(n){return B(n)}u$3(T,"promiseRejectedWith");function $(n,o,a){return I.call(n,o,a)}u$3($,"PerformPromiseThen");function E(n,o,a){$($(n,o,a),void 0,R);}u$3(E,"uponPromise");function K(n,o){E(n,o);}u$3(K,"uponFulfillment");function U(n,o){E(n,void 0,o);}u$3(U,"uponRejection");function N(n,o,a){return $(n,o,a)}u$3(N,"transformPromiseWith");function J(n){$(n,void 0,R);}u$3(J,"setPromiseIsHandledToTrue");let ge=u$3(n=>{if(typeof queueMicrotask=="function")ge=queueMicrotask;else {const o=k(void 0);ge=u$3(a=>$(o,a),"_queueMicrotask");}return ge(n)},"_queueMicrotask");function M(n,o,a){if(typeof n!="function")throw new TypeError("Argument is not a function");return Function.prototype.apply.call(n,o,a)}u$3(M,"reflectCall");function H(n,o,a){try{return k(M(n,o,a))}catch(p){return T(p)}}u$3(H,"promiseCall");const G=16384,Dr=class Dr{constructor(){this._cursor=0,this._size=0,this._front={_elements:[],_next:void 0},this._back=this._front,this._cursor=0,this._size=0;}get length(){return this._size}push(o){const a=this._back;let p=a;a._elements.length===G-1&&(p={_elements:[],_next:void 0}),a._elements.push(o),p!==a&&(this._back=p,a._next=p),++this._size;}shift(){const o=this._front;let a=o;const p=this._cursor;let g=p+1;const _=o._elements,S=_[p];return g===G&&(a=o._next,g=0),--this._size,this._cursor=g,o!==a&&(this._front=a),_[p]=void 0,S}forEach(o){let a=this._cursor,p=this._front,g=p._elements;for(;(a!==g.length||p._next!==void 0)&&!(a===g.length&&(p=p._next,g=p._elements,a=0,g.length===0));)o(g[a]),++a;}peek(){const o=this._front,a=this._cursor;return o._elements[a]}};u$3(Dr,"SimpleQueue");let Q=Dr;const wt=Symbol("[[AbortSteps]]"),un=Symbol("[[ErrorSteps]]"),er=Symbol("[[CancelSteps]]"),tr=Symbol("[[PullSteps]]"),rr=Symbol("[[ReleaseSteps]]");function ln(n,o){n._ownerReadableStream=o,o._reader=n,o._state==="readable"?or(n):o._state==="closed"?vo(n):fn(n,o._storedError);}u$3(ln,"ReadableStreamReaderGenericInitialize");function nr(n,o){const a=n._ownerReadableStream;return le(a,o)}u$3(nr,"ReadableStreamReaderGenericCancel");function _e(n){const o=n._ownerReadableStream;o._state==="readable"?ir(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")):Eo(n,new TypeError("Reader was released and can no longer be used to monitor the stream's closedness")),o._readableStreamController[rr](),o._reader=void 0,n._ownerReadableStream=void 0;}u$3(_e,"ReadableStreamReaderGenericRelease");function Rt(n){return new TypeError("Cannot "+n+" a stream using a released reader")}u$3(Rt,"readerLockException");function or(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a;});}u$3(or,"defaultReaderClosedPromiseInitialize");function fn(n,o){or(n),ir(n,o);}u$3(fn,"defaultReaderClosedPromiseInitializeAsRejected");function vo(n){or(n),cn(n);}u$3(vo,"defaultReaderClosedPromiseInitializeAsResolved");function ir(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$3(ir,"defaultReaderClosedPromiseReject");function Eo(n,o){fn(n,o);}u$3(Eo,"defaultReaderClosedPromiseResetToRejected");function cn(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0);}u$3(cn,"defaultReaderClosedPromiseResolve");const dn=Number.isFinite||function(n){return typeof n=="number"&&isFinite(n)},Ao=Math.trunc||function(n){return n<0?Math.ceil(n):Math.floor(n)};function Bo(n){return typeof n=="object"||typeof n=="function"}u$3(Bo,"isDictionary");function ce(n,o){if(n!==void 0&&!Bo(n))throw new TypeError(`${o} is not an object.`)}u$3(ce,"assertDictionary");function ee(n,o){if(typeof n!="function")throw new TypeError(`${o} is not a function.`)}u$3(ee,"assertFunction");function qo(n){return typeof n=="object"&&n!==null||typeof n=="function"}u$3(qo,"isObject");function hn(n,o){if(!qo(n))throw new TypeError(`${o} is not an object.`)}u$3(hn,"assertObject");function Se(n,o,a){if(n===void 0)throw new TypeError(`Parameter ${o} is required in '${a}'.`)}u$3(Se,"assertRequiredArgument");function sr(n,o,a){if(n===void 0)throw new TypeError(`${o} is required in '${a}'.`)}u$3(sr,"assertRequiredField");function ar(n){return Number(n)}u$3(ar,"convertUnrestrictedDouble");function pn(n){return n===0?0:n}u$3(pn,"censorNegativeZero");function ko(n){return pn(Ao(n))}u$3(ko,"integerPart");function ur(n,o){const p=Number.MAX_SAFE_INTEGER;let g=Number(n);if(g=pn(g),!dn(g))throw new TypeError(`${o} is not a finite number`);if(g=ko(g),g<0||g>p)throw new TypeError(`${o} is outside the accepted range of 0 to ${p}, inclusive`);return !dn(g)||g===0?0:g}u$3(ur,"convertUnsignedLongLongWithEnforceRange");function lr(n,o){if(!qe(n))throw new TypeError(`${o} is not a ReadableStream.`)}u$3(lr,"assertReadableStream");function Ne(n){return new de(n)}u$3(Ne,"AcquireReadableStreamDefaultReader");function bn(n,o){n._reader._readRequests.push(o);}u$3(bn,"ReadableStreamAddReadRequest");function fr(n,o,a){const g=n._reader._readRequests.shift();a?g._closeSteps():g._chunkSteps(o);}u$3(fr,"ReadableStreamFulfillReadRequest");function Tt(n){return n._reader._readRequests.length}u$3(Tt,"ReadableStreamGetNumReadRequests");function mn(n){const o=n._reader;return !(o===void 0||!ve(o))}u$3(mn,"ReadableStreamHasDefaultReader");const Mr=class Mr{constructor(o){if(Se(o,1,"ReadableStreamDefaultReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");ln(this,o),this._readRequests=new Q;}get closed(){return ve(this)?this._closedPromise:T(Ct("closed"))}cancel(o=void 0){return ve(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Ct("cancel"))}read(){if(!ve(this))return T(Ct("read"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let o,a;const p=F((_,S)=>{o=_,a=S;});return it(this,{_chunkSteps:_=>o({value:_,done:!1}),_closeSteps:()=>o({value:void 0,done:!0}),_errorSteps:_=>a(_)}),p}releaseLock(){if(!ve(this))throw Ct("releaseLock");this._ownerReadableStream!==void 0&&Wo(this);}};u$3(Mr,"ReadableStreamDefaultReader");let de=Mr;Object.defineProperties(de.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(de.prototype.cancel,"cancel"),w(de.prototype.read,"read"),w(de.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(de.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultReader",configurable:!0});function ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readRequests")?!1:n instanceof de}u$3(ve,"IsReadableStreamDefaultReader");function it(n,o){const a=n._ownerReadableStream;a._disturbed=!0,a._state==="closed"?o._closeSteps():a._state==="errored"?o._errorSteps(a._storedError):a._readableStreamController[tr](o);}u$3(it,"ReadableStreamDefaultReaderRead");function Wo(n){_e(n);const o=new TypeError("Reader was released");yn(n,o);}u$3(Wo,"ReadableStreamDefaultReaderRelease");function yn(n,o){const a=n._readRequests;n._readRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$3(yn,"ReadableStreamDefaultReaderErrorReadRequests");function Ct(n){return new TypeError(`ReadableStreamDefaultReader.prototype.${n} can only be used on a ReadableStreamDefaultReader`)}u$3(Ct,"defaultReaderBrandCheckException");const Oo=Object.getPrototypeOf(Object.getPrototypeOf(async function*(){}).prototype),xr=class xr{constructor(o,a){this._ongoingPromise=void 0,this._isFinished=!1,this._reader=o,this._preventCancel=a;}next(){const o=u$3(()=>this._nextSteps(),"nextSteps");return this._ongoingPromise=this._ongoingPromise?N(this._ongoingPromise,o,o):o(),this._ongoingPromise}return(o){const a=u$3(()=>this._returnSteps(o),"returnSteps");return this._ongoingPromise?N(this._ongoingPromise,a,a):a()}_nextSteps(){if(this._isFinished)return Promise.resolve({value:void 0,done:!0});const o=this._reader;let a,p;const g=F((S,C)=>{a=S,p=C;});return it(o,{_chunkSteps:S=>{this._ongoingPromise=void 0,ge(()=>a({value:S,done:!1}));},_closeSteps:()=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),a({value:void 0,done:!0});},_errorSteps:S=>{this._ongoingPromise=void 0,this._isFinished=!0,_e(o),p(S);}}),g}_returnSteps(o){if(this._isFinished)return Promise.resolve({value:o,done:!0});this._isFinished=!0;const a=this._reader;if(!this._preventCancel){const p=nr(a,o);return _e(a),N(p,()=>({value:o,done:!0}))}return _e(a),k({value:o,done:!0})}};u$3(xr,"ReadableStreamAsyncIteratorImpl");let Pt=xr;const gn={next(){return _n(this)?this._asyncIteratorImpl.next():T(Sn("next"))},return(n){return _n(this)?this._asyncIteratorImpl.return(n):T(Sn("return"))}};Object.setPrototypeOf(gn,Oo);function zo(n,o){const a=Ne(n),p=new Pt(a,o),g=Object.create(gn);return g._asyncIteratorImpl=p,g}u$3(zo,"AcquireReadableStreamAsyncIterator");function _n(n){if(!b(n)||!Object.prototype.hasOwnProperty.call(n,"_asyncIteratorImpl"))return !1;try{return n._asyncIteratorImpl instanceof Pt}catch{return !1}}u$3(_n,"IsReadableStreamAsyncIterator");function Sn(n){return new TypeError(`ReadableStreamAsyncIterator.${n} can only be used on a ReadableSteamAsyncIterator`)}u$3(Sn,"streamAsyncIteratorBrandCheckException");const wn=Number.isNaN||function(n){return n!==n};var cr,dr,hr;function st(n){return n.slice()}u$3(st,"CreateArrayFromList");function Rn(n,o,a,p,g){new Uint8Array(n).set(new Uint8Array(a,p,g),o);}u$3(Rn,"CopyDataBlockBytes");let we=u$3(n=>(typeof n.transfer=="function"?we=u$3(o=>o.transfer(),"TransferArrayBuffer"):typeof structuredClone=="function"?we=u$3(o=>structuredClone(o,{transfer:[o]}),"TransferArrayBuffer"):we=u$3(o=>o,"TransferArrayBuffer"),we(n)),"TransferArrayBuffer"),Ee=u$3(n=>(typeof n.detached=="boolean"?Ee=u$3(o=>o.detached,"IsDetachedBuffer"):Ee=u$3(o=>o.byteLength===0,"IsDetachedBuffer"),Ee(n)),"IsDetachedBuffer");function Tn(n,o,a){if(n.slice)return n.slice(o,a);const p=a-o,g=new ArrayBuffer(p);return Rn(g,0,n,o,p),g}u$3(Tn,"ArrayBufferSlice");function vt(n,o){const a=n[o];if(a!=null){if(typeof a!="function")throw new TypeError(`${String(o)} is not a function`);return a}}u$3(vt,"GetMethod");function Fo(n){const o={[Symbol.iterator]:()=>n.iterator},a=async function*(){return yield*o}(),p=a.next;return {iterator:a,nextMethod:p,done:!1}}u$3(Fo,"CreateAsyncFromSyncIterator");const pr=(hr=(cr=Symbol.asyncIterator)!==null&&cr!==void 0?cr:(dr=Symbol.for)===null||dr===void 0?void 0:dr.call(Symbol,"Symbol.asyncIterator"))!==null&&hr!==void 0?hr:"@@asyncIterator";function Cn(n,o="sync",a){if(a===void 0)if(o==="async"){if(a=vt(n,pr),a===void 0){const _=vt(n,Symbol.iterator),S=Cn(n,"sync",_);return Fo(S)}}else a=vt(n,Symbol.iterator);if(a===void 0)throw new TypeError("The object is not iterable");const p=M(a,n,[]);if(!b(p))throw new TypeError("The iterator method must return an object");const g=p.next;return {iterator:p,nextMethod:g,done:!1}}u$3(Cn,"GetIterator");function Io(n){const o=M(n.nextMethod,n.iterator,[]);if(!b(o))throw new TypeError("The iterator.next() method must return an object");return o}u$3(Io,"IteratorNext");function jo(n){return !!n.done}u$3(jo,"IteratorComplete");function Lo(n){return n.value}u$3(Lo,"IteratorValue");function $o(n){return !(typeof n!="number"||wn(n)||n<0)}u$3($o,"IsNonNegativeNumber");function Pn(n){const o=Tn(n.buffer,n.byteOffset,n.byteOffset+n.byteLength);return new Uint8Array(o)}u$3(Pn,"CloneAsUint8Array");function br(n){const o=n._queue.shift();return n._queueTotalSize-=o.size,n._queueTotalSize<0&&(n._queueTotalSize=0),o.value}u$3(br,"DequeueValue");function mr(n,o,a){if(!$o(a)||a===1/0)throw new RangeError("Size must be a finite, non-NaN, non-negative number.");n._queue.push({value:o,size:a}),n._queueTotalSize+=a;}u$3(mr,"EnqueueValueWithSize");function Do(n){return n._queue.peek().value}u$3(Do,"PeekQueueValue");function Ae(n){n._queue=new Q,n._queueTotalSize=0;}u$3(Ae,"ResetQueue");function vn(n){return n===DataView}u$3(vn,"isDataViewConstructor");function Mo(n){return vn(n.constructor)}u$3(Mo,"isDataView");function xo(n){return vn(n)?1:n.BYTES_PER_ELEMENT}u$3(xo,"arrayBufferViewElementSize");const Ur=class Ur{constructor(){throw new TypeError("Illegal constructor")}get view(){if(!yr(this))throw Rr("view");return this._view}respond(o){if(!yr(this))throw Rr("respond");if(Se(o,1,"respond"),o=ur(o,"First parameter"),this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(this._view.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be used as a response");qt(this._associatedReadableByteStreamController,o);}respondWithNewView(o){if(!yr(this))throw Rr("respondWithNewView");if(Se(o,1,"respondWithNewView"),!ArrayBuffer.isView(o))throw new TypeError("You can only respond with array buffer views");if(this._associatedReadableByteStreamController===void 0)throw new TypeError("This BYOB request has been invalidated");if(Ee(o.buffer))throw new TypeError("The given view's buffer has been detached and so cannot be used as a response");kt(this._associatedReadableByteStreamController,o);}};u$3(Ur,"ReadableStreamBYOBRequest");let Re=Ur;Object.defineProperties(Re.prototype,{respond:{enumerable:!0},respondWithNewView:{enumerable:!0},view:{enumerable:!0}}),w(Re.prototype.respond,"respond"),w(Re.prototype.respondWithNewView,"respondWithNewView"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Re.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBRequest",configurable:!0});const Nr=class Nr{constructor(){throw new TypeError("Illegal constructor")}get byobRequest(){if(!Oe(this))throw ut("byobRequest");return wr(this)}get desiredSize(){if(!Oe(this))throw ut("desiredSize");return In(this)}close(){if(!Oe(this))throw ut("close");if(this._closeRequested)throw new TypeError("The stream has already been closed; do not close it again!");const o=this._controlledReadableByteStream._state;if(o!=="readable")throw new TypeError(`The stream (in ${o} state) is not in the readable state and cannot be closed`);at(this);}enqueue(o){if(!Oe(this))throw ut("enqueue");if(Se(o,1,"enqueue"),!ArrayBuffer.isView(o))throw new TypeError("chunk must be an array buffer view");if(o.byteLength===0)throw new TypeError("chunk must have non-zero byteLength");if(o.buffer.byteLength===0)throw new TypeError("chunk's buffer must have non-zero byteLength");if(this._closeRequested)throw new TypeError("stream is closed or draining");const a=this._controlledReadableByteStream._state;if(a!=="readable")throw new TypeError(`The stream (in ${a} state) is not in the readable state and cannot be enqueued to`);Bt(this,o);}error(o=void 0){if(!Oe(this))throw ut("error");te(this,o);}[er](o){En(this),Ae(this);const a=this._cancelAlgorithm(o);return At(this),a}[tr](o){const a=this._controlledReadableByteStream;if(this._queueTotalSize>0){Fn(this,o);return}const p=this._autoAllocateChunkSize;if(p!==void 0){let g;try{g=new ArrayBuffer(p);}catch(S){o._errorSteps(S);return}const _={buffer:g,bufferByteLength:p,byteOffset:0,byteLength:p,bytesFilled:0,minimumFill:1,elementSize:1,viewConstructor:Uint8Array,readerType:"default"};this._pendingPullIntos.push(_);}bn(a,o),ze(this);}[rr](){if(this._pendingPullIntos.length>0){const o=this._pendingPullIntos.peek();o.readerType="none",this._pendingPullIntos=new Q,this._pendingPullIntos.push(o);}}};u$3(Nr,"ReadableByteStreamController");let ie=Nr;Object.defineProperties(ie.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},byobRequest:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ie.prototype.close,"close"),w(ie.prototype.enqueue,"enqueue"),w(ie.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ie.prototype,Symbol.toStringTag,{value:"ReadableByteStreamController",configurable:!0});function Oe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableByteStream")?!1:n instanceof ie}u$3(Oe,"IsReadableByteStreamController");function yr(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_associatedReadableByteStreamController")?!1:n instanceof Re}u$3(yr,"IsReadableStreamBYOBRequest");function ze(n){if(!Qo(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,ze(n)),null),p=>(te(n,p),null));}u$3(ze,"ReadableByteStreamControllerCallPullIfNeeded");function En(n){_r(n),n._pendingPullIntos=new Q;}u$3(En,"ReadableByteStreamControllerClearPendingPullIntos");function gr(n,o){let a=!1;n._state==="closed"&&(a=!0);const p=An(o);o.readerType==="default"?fr(n,p,a):Xo(n,p,a);}u$3(gr,"ReadableByteStreamControllerCommitPullIntoDescriptor");function An(n){const o=n.bytesFilled,a=n.elementSize;return new n.viewConstructor(n.buffer,n.byteOffset,o/a)}u$3(An,"ReadableByteStreamControllerConvertPullIntoDescriptor");function Et(n,o,a,p){n._queue.push({buffer:o,byteOffset:a,byteLength:p}),n._queueTotalSize+=p;}u$3(Et,"ReadableByteStreamControllerEnqueueChunkToQueue");function Bn(n,o,a,p){let g;try{g=Tn(o,a,a+p);}catch(_){throw te(n,_),_}Et(n,g,0,p);}u$3(Bn,"ReadableByteStreamControllerEnqueueClonedChunkToQueue");function qn(n,o){o.bytesFilled>0&&Bn(n,o.buffer,o.byteOffset,o.bytesFilled),He(n);}u$3(qn,"ReadableByteStreamControllerEnqueueDetachedPullIntoToQueue");function kn(n,o){const a=Math.min(n._queueTotalSize,o.byteLength-o.bytesFilled),p=o.bytesFilled+a;let g=a,_=!1;const S=p%o.elementSize,C=p-S;C>=o.minimumFill&&(g=C-o.bytesFilled,_=!0);const q=n._queue;for(;g>0;){const P=q.peek(),W=Math.min(g,P.byteLength),O=o.byteOffset+o.bytesFilled;Rn(o.buffer,O,P.buffer,P.byteOffset,W),P.byteLength===W?q.shift():(P.byteOffset+=W,P.byteLength-=W),n._queueTotalSize-=W,Wn(n,W,o),g-=W;}return _}u$3(kn,"ReadableByteStreamControllerFillPullIntoDescriptorFromQueue");function Wn(n,o,a){a.bytesFilled+=o;}u$3(Wn,"ReadableByteStreamControllerFillHeadPullIntoDescriptor");function On(n){n._queueTotalSize===0&&n._closeRequested?(At(n),pt(n._controlledReadableByteStream)):ze(n);}u$3(On,"ReadableByteStreamControllerHandleQueueDrain");function _r(n){n._byobRequest!==null&&(n._byobRequest._associatedReadableByteStreamController=void 0,n._byobRequest._view=null,n._byobRequest=null);}u$3(_r,"ReadableByteStreamControllerInvalidateBYOBRequest");function Sr(n){for(;n._pendingPullIntos.length>0;){if(n._queueTotalSize===0)return;const o=n._pendingPullIntos.peek();kn(n,o)&&(He(n),gr(n._controlledReadableByteStream,o));}}u$3(Sr,"ReadableByteStreamControllerProcessPullIntoDescriptorsUsingQueue");function Uo(n){const o=n._controlledReadableByteStream._reader;for(;o._readRequests.length>0;){if(n._queueTotalSize===0)return;const a=o._readRequests.shift();Fn(n,a);}}u$3(Uo,"ReadableByteStreamControllerProcessReadRequestsUsingQueue");function No(n,o,a,p){const g=n._controlledReadableByteStream,_=o.constructor,S=xo(_),{byteOffset:C,byteLength:q}=o,P=a*S;let W;try{W=we(o.buffer);}catch(j){p._errorSteps(j);return}const O={buffer:W,bufferByteLength:W.byteLength,byteOffset:C,byteLength:q,bytesFilled:0,minimumFill:P,elementSize:S,viewConstructor:_,readerType:"byob"};if(n._pendingPullIntos.length>0){n._pendingPullIntos.push(O),$n(g,p);return}if(g._state==="closed"){const j=new _(O.buffer,O.byteOffset,0);p._closeSteps(j);return}if(n._queueTotalSize>0){if(kn(n,O)){const j=An(O);On(n),p._chunkSteps(j);return}if(n._closeRequested){const j=new TypeError("Insufficient bytes to fill elements in the given buffer");te(n,j),p._errorSteps(j);return}}n._pendingPullIntos.push(O),$n(g,p),ze(n);}u$3(No,"ReadableByteStreamControllerPullInto");function Ho(n,o){o.readerType==="none"&&He(n);const a=n._controlledReadableByteStream;if(Tr(a))for(;Dn(a)>0;){const p=He(n);gr(a,p);}}u$3(Ho,"ReadableByteStreamControllerRespondInClosedState");function Vo(n,o,a){if(Wn(n,o,a),a.readerType==="none"){qn(n,a),Sr(n);return}if(a.bytesFilled<a.minimumFill)return;He(n);const p=a.bytesFilled%a.elementSize;if(p>0){const g=a.byteOffset+a.bytesFilled;Bn(n,a.buffer,g-p,p);}a.bytesFilled-=p,gr(n._controlledReadableByteStream,a),Sr(n);}u$3(Vo,"ReadableByteStreamControllerRespondInReadableState");function zn(n,o){const a=n._pendingPullIntos.peek();_r(n),n._controlledReadableByteStream._state==="closed"?Ho(n,a):Vo(n,o,a),ze(n);}u$3(zn,"ReadableByteStreamControllerRespondInternal");function He(n){return n._pendingPullIntos.shift()}u$3(He,"ReadableByteStreamControllerShiftPendingPullInto");function Qo(n){const o=n._controlledReadableByteStream;return o._state!=="readable"||n._closeRequested||!n._started?!1:!!(mn(o)&&Tt(o)>0||Tr(o)&&Dn(o)>0||In(n)>0)}u$3(Qo,"ReadableByteStreamControllerShouldCallPull");function At(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$3(At,"ReadableByteStreamControllerClearAlgorithms");function at(n){const o=n._controlledReadableByteStream;if(!(n._closeRequested||o._state!=="readable")){if(n._queueTotalSize>0){n._closeRequested=!0;return}if(n._pendingPullIntos.length>0){const a=n._pendingPullIntos.peek();if(a.bytesFilled%a.elementSize!==0){const p=new TypeError("Insufficient bytes to fill elements in the given buffer");throw te(n,p),p}}At(n),pt(o);}}u$3(at,"ReadableByteStreamControllerClose");function Bt(n,o){const a=n._controlledReadableByteStream;if(n._closeRequested||a._state!=="readable")return;const{buffer:p,byteOffset:g,byteLength:_}=o;if(Ee(p))throw new TypeError("chunk's buffer is detached and so cannot be enqueued");const S=we(p);if(n._pendingPullIntos.length>0){const C=n._pendingPullIntos.peek();if(Ee(C.buffer))throw new TypeError("The BYOB request's buffer has been detached and so cannot be filled with an enqueued chunk");_r(n),C.buffer=we(C.buffer),C.readerType==="none"&&qn(n,C);}if(mn(a))if(Uo(n),Tt(a)===0)Et(n,S,g,_);else {n._pendingPullIntos.length>0&&He(n);const C=new Uint8Array(S,g,_);fr(a,C,!1);}else Tr(a)?(Et(n,S,g,_),Sr(n)):Et(n,S,g,_);ze(n);}u$3(Bt,"ReadableByteStreamControllerEnqueue");function te(n,o){const a=n._controlledReadableByteStream;a._state==="readable"&&(En(n),Ae(n),At(n),fo(a,o));}u$3(te,"ReadableByteStreamControllerError");function Fn(n,o){const a=n._queue.shift();n._queueTotalSize-=a.byteLength,On(n);const p=new Uint8Array(a.buffer,a.byteOffset,a.byteLength);o._chunkSteps(p);}u$3(Fn,"ReadableByteStreamControllerFillReadRequestFromQueue");function wr(n){if(n._byobRequest===null&&n._pendingPullIntos.length>0){const o=n._pendingPullIntos.peek(),a=new Uint8Array(o.buffer,o.byteOffset+o.bytesFilled,o.byteLength-o.bytesFilled),p=Object.create(Re.prototype);Yo(p,n,a),n._byobRequest=p;}return n._byobRequest}u$3(wr,"ReadableByteStreamControllerGetBYOBRequest");function In(n){const o=n._controlledReadableByteStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$3(In,"ReadableByteStreamControllerGetDesiredSize");function qt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o!==0)throw new TypeError("bytesWritten must be 0 when calling respond() on a closed stream")}else {if(o===0)throw new TypeError("bytesWritten must be greater than 0 when calling respond() on a readable stream");if(a.bytesFilled+o>a.byteLength)throw new RangeError("bytesWritten out of range")}a.buffer=we(a.buffer),zn(n,o);}u$3(qt,"ReadableByteStreamControllerRespond");function kt(n,o){const a=n._pendingPullIntos.peek();if(n._controlledReadableByteStream._state==="closed"){if(o.byteLength!==0)throw new TypeError("The view's length must be 0 when calling respondWithNewView() on a closed stream")}else if(o.byteLength===0)throw new TypeError("The view's length must be greater than 0 when calling respondWithNewView() on a readable stream");if(a.byteOffset+a.bytesFilled!==o.byteOffset)throw new RangeError("The region specified by view does not match byobRequest");if(a.bufferByteLength!==o.buffer.byteLength)throw new RangeError("The buffer of view has different capacity than byobRequest");if(a.bytesFilled+o.byteLength>a.byteLength)throw new RangeError("The region specified by view is larger than byobRequest");const g=o.byteLength;a.buffer=we(o.buffer),zn(n,g);}u$3(kt,"ReadableByteStreamControllerRespondWithNewView");function jn(n,o,a,p,g,_,S){o._controlledReadableByteStream=n,o._pullAgain=!1,o._pulling=!1,o._byobRequest=null,o._queue=o._queueTotalSize=void 0,Ae(o),o._closeRequested=!1,o._started=!1,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,o._autoAllocateChunkSize=S,o._pendingPullIntos=new Q,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,ze(o),null),q=>(te(o,q),null));}u$3(jn,"SetUpReadableByteStreamController");function Go(n,o,a){const p=Object.create(ie.prototype);let g,_,S;o.start!==void 0?g=u$3(()=>o.start(p),"startAlgorithm"):g=u$3(()=>{},"startAlgorithm"),o.pull!==void 0?_=u$3(()=>o.pull(p),"pullAlgorithm"):_=u$3(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?S=u$3(q=>o.cancel(q),"cancelAlgorithm"):S=u$3(()=>k(void 0),"cancelAlgorithm");const C=o.autoAllocateChunkSize;if(C===0)throw new TypeError("autoAllocateChunkSize must be greater than 0");jn(n,p,g,_,S,a,C);}u$3(Go,"SetUpReadableByteStreamControllerFromUnderlyingSource");function Yo(n,o,a){n._associatedReadableByteStreamController=o,n._view=a;}u$3(Yo,"SetUpReadableStreamBYOBRequest");function Rr(n){return new TypeError(`ReadableStreamBYOBRequest.prototype.${n} can only be used on a ReadableStreamBYOBRequest`)}u$3(Rr,"byobRequestBrandCheckException");function ut(n){return new TypeError(`ReadableByteStreamController.prototype.${n} can only be used on a ReadableByteStreamController`)}u$3(ut,"byteStreamControllerBrandCheckException");function Zo(n,o){ce(n,o);const a=n?.mode;return {mode:a===void 0?void 0:Ko(a,`${o} has member 'mode' that`)}}u$3(Zo,"convertReaderOptions");function Ko(n,o){if(n=`${n}`,n!=="byob")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamReaderMode`);return n}u$3(Ko,"convertReadableStreamReaderMode");function Jo(n,o){var a;ce(n,o);const p=(a=n?.min)!==null&&a!==void 0?a:1;return {min:ur(p,`${o} has member 'min' that`)}}u$3(Jo,"convertByobReadOptions");function Ln(n){return new he(n)}u$3(Ln,"AcquireReadableStreamBYOBReader");function $n(n,o){n._reader._readIntoRequests.push(o);}u$3($n,"ReadableStreamAddReadIntoRequest");function Xo(n,o,a){const g=n._reader._readIntoRequests.shift();a?g._closeSteps(o):g._chunkSteps(o);}u$3(Xo,"ReadableStreamFulfillReadIntoRequest");function Dn(n){return n._reader._readIntoRequests.length}u$3(Dn,"ReadableStreamGetNumReadIntoRequests");function Tr(n){const o=n._reader;return !(o===void 0||!Fe(o))}u$3(Tr,"ReadableStreamHasBYOBReader");const Hr=class Hr{constructor(o){if(Se(o,1,"ReadableStreamBYOBReader"),lr(o,"First parameter"),ke(o))throw new TypeError("This stream has already been locked for exclusive reading by another reader");if(!Oe(o._readableStreamController))throw new TypeError("Cannot construct a ReadableStreamBYOBReader for a stream not constructed with a byte source");ln(this,o),this._readIntoRequests=new Q;}get closed(){return Fe(this)?this._closedPromise:T(Wt("closed"))}cancel(o=void 0){return Fe(this)?this._ownerReadableStream===void 0?T(Rt("cancel")):nr(this,o):T(Wt("cancel"))}read(o,a={}){if(!Fe(this))return T(Wt("read"));if(!ArrayBuffer.isView(o))return T(new TypeError("view must be an array buffer view"));if(o.byteLength===0)return T(new TypeError("view must have non-zero byteLength"));if(o.buffer.byteLength===0)return T(new TypeError("view's buffer must have non-zero byteLength"));if(Ee(o.buffer))return T(new TypeError("view's buffer has been detached"));let p;try{p=Jo(a,"options");}catch(P){return T(P)}const g=p.min;if(g===0)return T(new TypeError("options.min must be greater than 0"));if(Mo(o)){if(g>o.byteLength)return T(new RangeError("options.min must be less than or equal to view's byteLength"))}else if(g>o.length)return T(new RangeError("options.min must be less than or equal to view's length"));if(this._ownerReadableStream===void 0)return T(Rt("read from"));let _,S;const C=F((P,W)=>{_=P,S=W;});return Mn(this,o,g,{_chunkSteps:P=>_({value:P,done:!1}),_closeSteps:P=>_({value:P,done:!0}),_errorSteps:P=>S(P)}),C}releaseLock(){if(!Fe(this))throw Wt("releaseLock");this._ownerReadableStream!==void 0&&ei(this);}};u$3(Hr,"ReadableStreamBYOBReader");let he=Hr;Object.defineProperties(he.prototype,{cancel:{enumerable:!0},read:{enumerable:!0},releaseLock:{enumerable:!0},closed:{enumerable:!0}}),w(he.prototype.cancel,"cancel"),w(he.prototype.read,"read"),w(he.prototype.releaseLock,"releaseLock"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(he.prototype,Symbol.toStringTag,{value:"ReadableStreamBYOBReader",configurable:!0});function Fe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readIntoRequests")?!1:n instanceof he}u$3(Fe,"IsReadableStreamBYOBReader");function Mn(n,o,a,p){const g=n._ownerReadableStream;g._disturbed=!0,g._state==="errored"?p._errorSteps(g._storedError):No(g._readableStreamController,o,a,p);}u$3(Mn,"ReadableStreamBYOBReaderRead");function ei(n){_e(n);const o=new TypeError("Reader was released");xn(n,o);}u$3(ei,"ReadableStreamBYOBReaderRelease");function xn(n,o){const a=n._readIntoRequests;n._readIntoRequests=new Q,a.forEach(p=>{p._errorSteps(o);});}u$3(xn,"ReadableStreamBYOBReaderErrorReadIntoRequests");function Wt(n){return new TypeError(`ReadableStreamBYOBReader.prototype.${n} can only be used on a ReadableStreamBYOBReader`)}u$3(Wt,"byobReaderBrandCheckException");function lt(n,o){const{highWaterMark:a}=n;if(a===void 0)return o;if(wn(a)||a<0)throw new RangeError("Invalid highWaterMark");return a}u$3(lt,"ExtractHighWaterMark");function Ot(n){const{size:o}=n;return o||(()=>1)}u$3(Ot,"ExtractSizeAlgorithm");function zt(n,o){ce(n,o);const a=n?.highWaterMark,p=n?.size;return {highWaterMark:a===void 0?void 0:ar(a),size:p===void 0?void 0:ti(p,`${o} has member 'size' that`)}}u$3(zt,"convertQueuingStrategy");function ti(n,o){return ee(n,o),a=>ar(n(a))}u$3(ti,"convertQueuingStrategySize");function ri(n,o){ce(n,o);const a=n?.abort,p=n?.close,g=n?.start,_=n?.type,S=n?.write;return {abort:a===void 0?void 0:ni(a,n,`${o} has member 'abort' that`),close:p===void 0?void 0:oi(p,n,`${o} has member 'close' that`),start:g===void 0?void 0:ii(g,n,`${o} has member 'start' that`),write:S===void 0?void 0:si(S,n,`${o} has member 'write' that`),type:_}}u$3(ri,"convertUnderlyingSink");function ni(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$3(ni,"convertUnderlyingSinkAbortCallback");function oi(n,o,a){return ee(n,a),()=>H(n,o,[])}u$3(oi,"convertUnderlyingSinkCloseCallback");function ii(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$3(ii,"convertUnderlyingSinkStartCallback");function si(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u$3(si,"convertUnderlyingSinkWriteCallback");function Un(n,o){if(!Ve(n))throw new TypeError(`${o} is not a WritableStream.`)}u$3(Un,"assertWritableStream");function ai(n){if(typeof n!="object"||n===null)return !1;try{return typeof n.aborted=="boolean"}catch{return !1}}u$3(ai,"isAbortSignal");const ui=typeof AbortController=="function";function li(){if(ui)return new AbortController}u$3(li,"createAbortController");const Vr=class Vr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=ri(o,"First parameter");if(Hn(this),g.type!==void 0)throw new RangeError("Invalid type is specified");const S=Ot(p),C=lt(p,1);Ti(this,g,C,S);}get locked(){if(!Ve(this))throw $t("locked");return Qe(this)}abort(o=void 0){return Ve(this)?Qe(this)?T(new TypeError("Cannot abort a stream that already has a writer")):Ft(this,o):T($t("abort"))}close(){return Ve(this)?Qe(this)?T(new TypeError("Cannot close a stream that already has a writer")):be(this)?T(new TypeError("Cannot close an already-closing stream")):Vn(this):T($t("close"))}getWriter(){if(!Ve(this))throw $t("getWriter");return Nn(this)}};u$3(Vr,"WritableStream");let pe=Vr;Object.defineProperties(pe.prototype,{abort:{enumerable:!0},close:{enumerable:!0},getWriter:{enumerable:!0},locked:{enumerable:!0}}),w(pe.prototype.abort,"abort"),w(pe.prototype.close,"close"),w(pe.prototype.getWriter,"getWriter"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(pe.prototype,Symbol.toStringTag,{value:"WritableStream",configurable:!0});function Nn(n){return new se(n)}u$3(Nn,"AcquireWritableStreamDefaultWriter");function fi(n,o,a,p,g=1,_=()=>1){const S=Object.create(pe.prototype);Hn(S);const C=Object.create(Be.prototype);return Jn(S,C,n,o,a,p,g,_),S}u$3(fi,"CreateWritableStream");function Hn(n){n._state="writable",n._storedError=void 0,n._writer=void 0,n._writableStreamController=void 0,n._writeRequests=new Q,n._inFlightWriteRequest=void 0,n._closeRequest=void 0,n._inFlightCloseRequest=void 0,n._pendingAbortRequest=void 0,n._backpressure=!1;}u$3(Hn,"InitializeWritableStream");function Ve(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_writableStreamController")?!1:n instanceof pe}u$3(Ve,"IsWritableStream");function Qe(n){return n._writer!==void 0}u$3(Qe,"IsWritableStreamLocked");function Ft(n,o){var a;if(n._state==="closed"||n._state==="errored")return k(void 0);n._writableStreamController._abortReason=o,(a=n._writableStreamController._abortController)===null||a===void 0||a.abort(o);const p=n._state;if(p==="closed"||p==="errored")return k(void 0);if(n._pendingAbortRequest!==void 0)return n._pendingAbortRequest._promise;let g=!1;p==="erroring"&&(g=!0,o=void 0);const _=F((S,C)=>{n._pendingAbortRequest={_promise:void 0,_resolve:S,_reject:C,_reason:o,_wasAlreadyErroring:g};});return n._pendingAbortRequest._promise=_,g||Pr(n,o),_}u$3(Ft,"WritableStreamAbort");function Vn(n){const o=n._state;if(o==="closed"||o==="errored")return T(new TypeError(`The stream (in ${o} state) is not in the writable state and cannot be closed`));const a=F((g,_)=>{const S={_resolve:g,_reject:_};n._closeRequest=S;}),p=n._writer;return p!==void 0&&n._backpressure&&o==="writable"&&Or(p),Ci(n._writableStreamController),a}u$3(Vn,"WritableStreamClose");function ci(n){return F((a,p)=>{const g={_resolve:a,_reject:p};n._writeRequests.push(g);})}u$3(ci,"WritableStreamAddWriteRequest");function Cr(n,o){if(n._state==="writable"){Pr(n,o);return}vr(n);}u$3(Cr,"WritableStreamDealWithRejection");function Pr(n,o){const a=n._writableStreamController;n._state="erroring",n._storedError=o;const p=n._writer;p!==void 0&&Gn(p,o),!mi(n)&&a._started&&vr(n);}u$3(Pr,"WritableStreamStartErroring");function vr(n){n._state="errored",n._writableStreamController[un]();const o=n._storedError;if(n._writeRequests.forEach(g=>{g._reject(o);}),n._writeRequests=new Q,n._pendingAbortRequest===void 0){It(n);return}const a=n._pendingAbortRequest;if(n._pendingAbortRequest=void 0,a._wasAlreadyErroring){a._reject(o),It(n);return}const p=n._writableStreamController[wt](a._reason);E(p,()=>(a._resolve(),It(n),null),g=>(a._reject(g),It(n),null));}u$3(vr,"WritableStreamFinishErroring");function di(n){n._inFlightWriteRequest._resolve(void 0),n._inFlightWriteRequest=void 0;}u$3(di,"WritableStreamFinishInFlightWrite");function hi(n,o){n._inFlightWriteRequest._reject(o),n._inFlightWriteRequest=void 0,Cr(n,o);}u$3(hi,"WritableStreamFinishInFlightWriteWithError");function pi(n){n._inFlightCloseRequest._resolve(void 0),n._inFlightCloseRequest=void 0,n._state==="erroring"&&(n._storedError=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._resolve(),n._pendingAbortRequest=void 0)),n._state="closed";const a=n._writer;a!==void 0&&ro(a);}u$3(pi,"WritableStreamFinishInFlightClose");function bi(n,o){n._inFlightCloseRequest._reject(o),n._inFlightCloseRequest=void 0,n._pendingAbortRequest!==void 0&&(n._pendingAbortRequest._reject(o),n._pendingAbortRequest=void 0),Cr(n,o);}u$3(bi,"WritableStreamFinishInFlightCloseWithError");function be(n){return !(n._closeRequest===void 0&&n._inFlightCloseRequest===void 0)}u$3(be,"WritableStreamCloseQueuedOrInFlight");function mi(n){return !(n._inFlightWriteRequest===void 0&&n._inFlightCloseRequest===void 0)}u$3(mi,"WritableStreamHasOperationMarkedInFlight");function yi(n){n._inFlightCloseRequest=n._closeRequest,n._closeRequest=void 0;}u$3(yi,"WritableStreamMarkCloseRequestInFlight");function gi(n){n._inFlightWriteRequest=n._writeRequests.shift();}u$3(gi,"WritableStreamMarkFirstWriteRequestInFlight");function It(n){n._closeRequest!==void 0&&(n._closeRequest._reject(n._storedError),n._closeRequest=void 0);const o=n._writer;o!==void 0&&kr(o,n._storedError);}u$3(It,"WritableStreamRejectCloseAndClosedPromiseIfNeeded");function Er(n,o){const a=n._writer;a!==void 0&&o!==n._backpressure&&(o?ki(a):Or(a)),n._backpressure=o;}u$3(Er,"WritableStreamUpdateBackpressure");const Qr=class Qr{constructor(o){if(Se(o,1,"WritableStreamDefaultWriter"),Un(o,"First parameter"),Qe(o))throw new TypeError("This stream has already been locked for exclusive writing by another writer");this._ownerWritableStream=o,o._writer=this;const a=o._state;if(a==="writable")!be(o)&&o._backpressure?Mt(this):no(this),Dt(this);else if(a==="erroring")Wr(this,o._storedError),Dt(this);else if(a==="closed")no(this),Bi(this);else {const p=o._storedError;Wr(this,p),to(this,p);}}get closed(){return Ie(this)?this._closedPromise:T(je("closed"))}get desiredSize(){if(!Ie(this))throw je("desiredSize");if(this._ownerWritableStream===void 0)throw ct("desiredSize");return Ri(this)}get ready(){return Ie(this)?this._readyPromise:T(je("ready"))}abort(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("abort")):_i(this,o):T(je("abort"))}close(){if(!Ie(this))return T(je("close"));const o=this._ownerWritableStream;return o===void 0?T(ct("close")):be(o)?T(new TypeError("Cannot close an already-closing stream")):Qn(this)}releaseLock(){if(!Ie(this))throw je("releaseLock");this._ownerWritableStream!==void 0&&Yn(this);}write(o=void 0){return Ie(this)?this._ownerWritableStream===void 0?T(ct("write to")):Zn(this,o):T(je("write"))}};u$3(Qr,"WritableStreamDefaultWriter");let se=Qr;Object.defineProperties(se.prototype,{abort:{enumerable:!0},close:{enumerable:!0},releaseLock:{enumerable:!0},write:{enumerable:!0},closed:{enumerable:!0},desiredSize:{enumerable:!0},ready:{enumerable:!0}}),w(se.prototype.abort,"abort"),w(se.prototype.close,"close"),w(se.prototype.releaseLock,"releaseLock"),w(se.prototype.write,"write"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(se.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultWriter",configurable:!0});function Ie(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_ownerWritableStream")?!1:n instanceof se}u$3(Ie,"IsWritableStreamDefaultWriter");function _i(n,o){const a=n._ownerWritableStream;return Ft(a,o)}u$3(_i,"WritableStreamDefaultWriterAbort");function Qn(n){const o=n._ownerWritableStream;return Vn(o)}u$3(Qn,"WritableStreamDefaultWriterClose");function Si(n){const o=n._ownerWritableStream,a=o._state;return be(o)||a==="closed"?k(void 0):a==="errored"?T(o._storedError):Qn(n)}u$3(Si,"WritableStreamDefaultWriterCloseWithErrorPropagation");function wi(n,o){n._closedPromiseState==="pending"?kr(n,o):qi(n,o);}u$3(wi,"WritableStreamDefaultWriterEnsureClosedPromiseRejected");function Gn(n,o){n._readyPromiseState==="pending"?oo(n,o):Wi(n,o);}u$3(Gn,"WritableStreamDefaultWriterEnsureReadyPromiseRejected");function Ri(n){const o=n._ownerWritableStream,a=o._state;return a==="errored"||a==="erroring"?null:a==="closed"?0:Xn(o._writableStreamController)}u$3(Ri,"WritableStreamDefaultWriterGetDesiredSize");function Yn(n){const o=n._ownerWritableStream,a=new TypeError("Writer was released and can no longer be used to monitor the stream's closedness");Gn(n,a),wi(n,a),o._writer=void 0,n._ownerWritableStream=void 0;}u$3(Yn,"WritableStreamDefaultWriterRelease");function Zn(n,o){const a=n._ownerWritableStream,p=a._writableStreamController,g=Pi(p,o);if(a!==n._ownerWritableStream)return T(ct("write to"));const _=a._state;if(_==="errored")return T(a._storedError);if(be(a)||_==="closed")return T(new TypeError("The stream is closing or closed and cannot be written to"));if(_==="erroring")return T(a._storedError);const S=ci(a);return vi(p,o,g),S}u$3(Zn,"WritableStreamDefaultWriterWrite");const Kn={},Gr=class Gr{constructor(){throw new TypeError("Illegal constructor")}get abortReason(){if(!Ar(this))throw qr("abortReason");return this._abortReason}get signal(){if(!Ar(this))throw qr("signal");if(this._abortController===void 0)throw new TypeError("WritableStreamDefaultController.prototype.signal is not supported");return this._abortController.signal}error(o=void 0){if(!Ar(this))throw qr("error");this._controlledWritableStream._state==="writable"&&eo(this,o);}[wt](o){const a=this._abortAlgorithm(o);return jt(this),a}[un](){Ae(this);}};u$3(Gr,"WritableStreamDefaultController");let Be=Gr;Object.defineProperties(Be.prototype,{abortReason:{enumerable:!0},signal:{enumerable:!0},error:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Be.prototype,Symbol.toStringTag,{value:"WritableStreamDefaultController",configurable:!0});function Ar(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledWritableStream")?!1:n instanceof Be}u$3(Ar,"IsWritableStreamDefaultController");function Jn(n,o,a,p,g,_,S,C){o._controlledWritableStream=n,n._writableStreamController=o,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._abortReason=void 0,o._abortController=li(),o._started=!1,o._strategySizeAlgorithm=C,o._strategyHWM=S,o._writeAlgorithm=p,o._closeAlgorithm=g,o._abortAlgorithm=_;const q=Br(o);Er(n,q);const P=a(),W=k(P);E(W,()=>(o._started=!0,Lt(o),null),O=>(o._started=!0,Cr(n,O),null));}u$3(Jn,"SetUpWritableStreamDefaultController");function Ti(n,o,a,p){const g=Object.create(Be.prototype);let _,S,C,q;o.start!==void 0?_=u$3(()=>o.start(g),"startAlgorithm"):_=u$3(()=>{},"startAlgorithm"),o.write!==void 0?S=u$3(P=>o.write(P,g),"writeAlgorithm"):S=u$3(()=>k(void 0),"writeAlgorithm"),o.close!==void 0?C=u$3(()=>o.close(),"closeAlgorithm"):C=u$3(()=>k(void 0),"closeAlgorithm"),o.abort!==void 0?q=u$3(P=>o.abort(P),"abortAlgorithm"):q=u$3(()=>k(void 0),"abortAlgorithm"),Jn(n,g,_,S,C,q,a,p);}u$3(Ti,"SetUpWritableStreamDefaultControllerFromUnderlyingSink");function jt(n){n._writeAlgorithm=void 0,n._closeAlgorithm=void 0,n._abortAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$3(jt,"WritableStreamDefaultControllerClearAlgorithms");function Ci(n){mr(n,Kn,0),Lt(n);}u$3(Ci,"WritableStreamDefaultControllerClose");function Pi(n,o){try{return n._strategySizeAlgorithm(o)}catch(a){return ft(n,a),1}}u$3(Pi,"WritableStreamDefaultControllerGetChunkSize");function Xn(n){return n._strategyHWM-n._queueTotalSize}u$3(Xn,"WritableStreamDefaultControllerGetDesiredSize");function vi(n,o,a){try{mr(n,o,a);}catch(g){ft(n,g);return}const p=n._controlledWritableStream;if(!be(p)&&p._state==="writable"){const g=Br(n);Er(p,g);}Lt(n);}u$3(vi,"WritableStreamDefaultControllerWrite");function Lt(n){const o=n._controlledWritableStream;if(!n._started||o._inFlightWriteRequest!==void 0)return;if(o._state==="erroring"){vr(o);return}if(n._queue.length===0)return;const p=Do(n);p===Kn?Ei(n):Ai(n,p);}u$3(Lt,"WritableStreamDefaultControllerAdvanceQueueIfNeeded");function ft(n,o){n._controlledWritableStream._state==="writable"&&eo(n,o);}u$3(ft,"WritableStreamDefaultControllerErrorIfNeeded");function Ei(n){const o=n._controlledWritableStream;yi(o),br(n);const a=n._closeAlgorithm();jt(n),E(a,()=>(pi(o),null),p=>(bi(o,p),null));}u$3(Ei,"WritableStreamDefaultControllerProcessClose");function Ai(n,o){const a=n._controlledWritableStream;gi(a);const p=n._writeAlgorithm(o);E(p,()=>{di(a);const g=a._state;if(br(n),!be(a)&&g==="writable"){const _=Br(n);Er(a,_);}return Lt(n),null},g=>(a._state==="writable"&&jt(n),hi(a,g),null));}u$3(Ai,"WritableStreamDefaultControllerProcessWrite");function Br(n){return Xn(n)<=0}u$3(Br,"WritableStreamDefaultControllerGetBackpressure");function eo(n,o){const a=n._controlledWritableStream;jt(n),Pr(a,o);}u$3(eo,"WritableStreamDefaultControllerError");function $t(n){return new TypeError(`WritableStream.prototype.${n} can only be used on a WritableStream`)}u$3($t,"streamBrandCheckException$2");function qr(n){return new TypeError(`WritableStreamDefaultController.prototype.${n} can only be used on a WritableStreamDefaultController`)}u$3(qr,"defaultControllerBrandCheckException$2");function je(n){return new TypeError(`WritableStreamDefaultWriter.prototype.${n} can only be used on a WritableStreamDefaultWriter`)}u$3(je,"defaultWriterBrandCheckException");function ct(n){return new TypeError("Cannot "+n+" a stream using a released writer")}u$3(ct,"defaultWriterLockException");function Dt(n){n._closedPromise=F((o,a)=>{n._closedPromise_resolve=o,n._closedPromise_reject=a,n._closedPromiseState="pending";});}u$3(Dt,"defaultWriterClosedPromiseInitialize");function to(n,o){Dt(n),kr(n,o);}u$3(to,"defaultWriterClosedPromiseInitializeAsRejected");function Bi(n){Dt(n),ro(n);}u$3(Bi,"defaultWriterClosedPromiseInitializeAsResolved");function kr(n,o){n._closedPromise_reject!==void 0&&(J(n._closedPromise),n._closedPromise_reject(o),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="rejected");}u$3(kr,"defaultWriterClosedPromiseReject");function qi(n,o){to(n,o);}u$3(qi,"defaultWriterClosedPromiseResetToRejected");function ro(n){n._closedPromise_resolve!==void 0&&(n._closedPromise_resolve(void 0),n._closedPromise_resolve=void 0,n._closedPromise_reject=void 0,n._closedPromiseState="resolved");}u$3(ro,"defaultWriterClosedPromiseResolve");function Mt(n){n._readyPromise=F((o,a)=>{n._readyPromise_resolve=o,n._readyPromise_reject=a;}),n._readyPromiseState="pending";}u$3(Mt,"defaultWriterReadyPromiseInitialize");function Wr(n,o){Mt(n),oo(n,o);}u$3(Wr,"defaultWriterReadyPromiseInitializeAsRejected");function no(n){Mt(n),Or(n);}u$3(no,"defaultWriterReadyPromiseInitializeAsResolved");function oo(n,o){n._readyPromise_reject!==void 0&&(J(n._readyPromise),n._readyPromise_reject(o),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="rejected");}u$3(oo,"defaultWriterReadyPromiseReject");function ki(n){Mt(n);}u$3(ki,"defaultWriterReadyPromiseReset");function Wi(n,o){Wr(n,o);}u$3(Wi,"defaultWriterReadyPromiseResetToRejected");function Or(n){n._readyPromise_resolve!==void 0&&(n._readyPromise_resolve(void 0),n._readyPromise_resolve=void 0,n._readyPromise_reject=void 0,n._readyPromiseState="fulfilled");}u$3(Or,"defaultWriterReadyPromiseResolve");function Oi(){if(typeof globalThis<"u")return globalThis;if(typeof self<"u")return self;if(typeof _commonjsHelpers.commonjsGlobal<"u")return _commonjsHelpers.commonjsGlobal}u$3(Oi,"getGlobals");const zr=Oi();function zi(n){if(!(typeof n=="function"||typeof n=="object")||n.name!=="DOMException")return !1;try{return new n,!0}catch{return !1}}u$3(zi,"isDOMExceptionConstructor");function Fi(){const n=zr?.DOMException;return zi(n)?n:void 0}u$3(Fi,"getFromGlobal");function Ii(){const n=u$3(function(a,p){this.message=a||"",this.name=p||"Error",Error.captureStackTrace&&Error.captureStackTrace(this,this.constructor);},"DOMException");return w(n,"DOMException"),n.prototype=Object.create(Error.prototype),Object.defineProperty(n.prototype,"constructor",{value:n,writable:!0,configurable:!0}),n}u$3(Ii,"createPolyfill");const ji=Fi()||Ii();function io(n,o,a,p,g,_){const S=Ne(n),C=Nn(o);n._disturbed=!0;let q=!1,P=k(void 0);return F((W,O)=>{let j;if(_!==void 0){if(j=u$3(()=>{const A=_.reason!==void 0?_.reason:new ji("Aborted","AbortError"),z=[];p||z.push(()=>o._state==="writable"?Ft(o,A):k(void 0)),g||z.push(()=>n._state==="readable"?le(n,A):k(void 0)),Z(()=>Promise.all(z.map(L=>L())),!0,A);},"abortAlgorithm"),_.aborted){j();return}_.addEventListener("abort",j);}function fe(){return F((A,z)=>{function L(X){X?A():$(et(),L,z);}u$3(L,"next"),L(!1);})}u$3(fe,"pipeLoop");function et(){return q?k(!0):$(C._readyPromise,()=>F((A,z)=>{it(S,{_chunkSteps:L=>{P=$(Zn(C,L),void 0,y),A(!1);},_closeSteps:()=>A(!0),_errorSteps:z});}))}if(u$3(et,"pipeStep"),Te(n,S._closedPromise,A=>(p?re(!0,A):Z(()=>Ft(o,A),!0,A),null)),Te(o,C._closedPromise,A=>(g?re(!0,A):Z(()=>le(n,A),!0,A),null)),Y(n,S._closedPromise,()=>(a?re():Z(()=>Si(C)),null)),be(o)||o._state==="closed"){const A=new TypeError("the destination writable stream closed before all data could be piped to it");g?re(!0,A):Z(()=>le(n,A),!0,A);}J(fe());function We(){const A=P;return $(P,()=>A!==P?We():void 0)}u$3(We,"waitForWritesToFinish");function Te(A,z,L){A._state==="errored"?L(A._storedError):U(z,L);}u$3(Te,"isOrBecomesErrored");function Y(A,z,L){A._state==="closed"?L():K(z,L);}u$3(Y,"isOrBecomesClosed");function Z(A,z,L){if(q)return;q=!0,o._state==="writable"&&!be(o)?K(We(),X):X();function X(){return E(A(),()=>Ce(z,L),tt=>Ce(!0,tt)),null}u$3(X,"doTheRest");}u$3(Z,"shutdownWithAction");function re(A,z){q||(q=!0,o._state==="writable"&&!be(o)?K(We(),()=>Ce(A,z)):Ce(A,z));}u$3(re,"shutdown");function Ce(A,z){return Yn(C),_e(S),_!==void 0&&_.removeEventListener("abort",j),A?O(z):W(void 0),null}u$3(Ce,"finalize");})}u$3(io,"ReadableStreamPipeTo");const Yr=class Yr{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!xt(this))throw Nt("desiredSize");return Fr(this)}close(){if(!xt(this))throw Nt("close");if(!Ye(this))throw new TypeError("The stream is not in a state that permits close");Le(this);}enqueue(o=void 0){if(!xt(this))throw Nt("enqueue");if(!Ye(this))throw new TypeError("The stream is not in a state that permits enqueue");return Ge(this,o)}error(o=void 0){if(!xt(this))throw Nt("error");ue(this,o);}[er](o){Ae(this);const a=this._cancelAlgorithm(o);return Ut(this),a}[tr](o){const a=this._controlledReadableStream;if(this._queue.length>0){const p=br(this);this._closeRequested&&this._queue.length===0?(Ut(this),pt(a)):dt(this),o._chunkSteps(p);}else bn(a,o),dt(this);}[rr](){}};u$3(Yr,"ReadableStreamDefaultController");let ae=Yr;Object.defineProperties(ae.prototype,{close:{enumerable:!0},enqueue:{enumerable:!0},error:{enumerable:!0},desiredSize:{enumerable:!0}}),w(ae.prototype.close,"close"),w(ae.prototype.enqueue,"enqueue"),w(ae.prototype.error,"error"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(ae.prototype,Symbol.toStringTag,{value:"ReadableStreamDefaultController",configurable:!0});function xt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledReadableStream")?!1:n instanceof ae}u$3(xt,"IsReadableStreamDefaultController");function dt(n){if(!so(n))return;if(n._pulling){n._pullAgain=!0;return}n._pulling=!0;const a=n._pullAlgorithm();E(a,()=>(n._pulling=!1,n._pullAgain&&(n._pullAgain=!1,dt(n)),null),p=>(ue(n,p),null));}u$3(dt,"ReadableStreamDefaultControllerCallPullIfNeeded");function so(n){const o=n._controlledReadableStream;return !Ye(n)||!n._started?!1:!!(ke(o)&&Tt(o)>0||Fr(n)>0)}u$3(so,"ReadableStreamDefaultControllerShouldCallPull");function Ut(n){n._pullAlgorithm=void 0,n._cancelAlgorithm=void 0,n._strategySizeAlgorithm=void 0;}u$3(Ut,"ReadableStreamDefaultControllerClearAlgorithms");function Le(n){if(!Ye(n))return;const o=n._controlledReadableStream;n._closeRequested=!0,n._queue.length===0&&(Ut(n),pt(o));}u$3(Le,"ReadableStreamDefaultControllerClose");function Ge(n,o){if(!Ye(n))return;const a=n._controlledReadableStream;if(ke(a)&&Tt(a)>0)fr(a,o,!1);else {let p;try{p=n._strategySizeAlgorithm(o);}catch(g){throw ue(n,g),g}try{mr(n,o,p);}catch(g){throw ue(n,g),g}}dt(n);}u$3(Ge,"ReadableStreamDefaultControllerEnqueue");function ue(n,o){const a=n._controlledReadableStream;a._state==="readable"&&(Ae(n),Ut(n),fo(a,o));}u$3(ue,"ReadableStreamDefaultControllerError");function Fr(n){const o=n._controlledReadableStream._state;return o==="errored"?null:o==="closed"?0:n._strategyHWM-n._queueTotalSize}u$3(Fr,"ReadableStreamDefaultControllerGetDesiredSize");function Li(n){return !so(n)}u$3(Li,"ReadableStreamDefaultControllerHasBackpressure");function Ye(n){const o=n._controlledReadableStream._state;return !n._closeRequested&&o==="readable"}u$3(Ye,"ReadableStreamDefaultControllerCanCloseOrEnqueue");function ao(n,o,a,p,g,_,S){o._controlledReadableStream=n,o._queue=void 0,o._queueTotalSize=void 0,Ae(o),o._started=!1,o._closeRequested=!1,o._pullAgain=!1,o._pulling=!1,o._strategySizeAlgorithm=S,o._strategyHWM=_,o._pullAlgorithm=p,o._cancelAlgorithm=g,n._readableStreamController=o;const C=a();E(k(C),()=>(o._started=!0,dt(o),null),q=>(ue(o,q),null));}u$3(ao,"SetUpReadableStreamDefaultController");function $i(n,o,a,p){const g=Object.create(ae.prototype);let _,S,C;o.start!==void 0?_=u$3(()=>o.start(g),"startAlgorithm"):_=u$3(()=>{},"startAlgorithm"),o.pull!==void 0?S=u$3(()=>o.pull(g),"pullAlgorithm"):S=u$3(()=>k(void 0),"pullAlgorithm"),o.cancel!==void 0?C=u$3(q=>o.cancel(q),"cancelAlgorithm"):C=u$3(()=>k(void 0),"cancelAlgorithm"),ao(n,g,_,S,C,a,p);}u$3($i,"SetUpReadableStreamDefaultControllerFromUnderlyingSource");function Nt(n){return new TypeError(`ReadableStreamDefaultController.prototype.${n} can only be used on a ReadableStreamDefaultController`)}u$3(Nt,"defaultControllerBrandCheckException$1");function Di(n,o){return Oe(n._readableStreamController)?xi(n):Mi(n)}u$3(Di,"ReadableStreamTee");function Mi(n,o){const a=Ne(n);let p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(Y=>{O=Y;});function fe(){return p?(g=!0,k(void 0)):(p=!0,it(a,{_chunkSteps:Z=>{ge(()=>{g=!1;const re=Z,Ce=Z;_||Ge(P._readableStreamController,re),S||Ge(W._readableStreamController,Ce),p=!1,g&&fe();});},_closeSteps:()=>{p=!1,_||Le(P._readableStreamController),S||Le(W._readableStreamController),(!_||!S)&&O(void 0);},_errorSteps:()=>{p=!1;}}),k(void 0))}u$3(fe,"pullAlgorithm");function et(Y){if(_=!0,C=Y,S){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u$3(et,"cancel1Algorithm");function We(Y){if(S=!0,q=Y,_){const Z=st([C,q]),re=le(n,Z);O(re);}return j}u$3(We,"cancel2Algorithm");function Te(){}return u$3(Te,"startAlgorithm"),P=ht(Te,fe,et),W=ht(Te,fe,We),U(a._closedPromise,Y=>(ue(P._readableStreamController,Y),ue(W._readableStreamController,Y),(!_||!S)&&O(void 0),null)),[P,W]}u$3(Mi,"ReadableStreamDefaultTee");function xi(n){let o=Ne(n),a=!1,p=!1,g=!1,_=!1,S=!1,C,q,P,W,O;const j=F(A=>{O=A;});function fe(A){U(A._closedPromise,z=>(A!==o||(te(P._readableStreamController,z),te(W._readableStreamController,z),(!_||!S)&&O(void 0)),null));}u$3(fe,"forwardReaderError");function et(){Fe(o)&&(_e(o),o=Ne(n),fe(o)),it(o,{_chunkSteps:z=>{ge(()=>{p=!1,g=!1;const L=z;let X=z;if(!_&&!S)try{X=Pn(z);}catch(tt){te(P._readableStreamController,tt),te(W._readableStreamController,tt),O(le(n,tt));return}_||Bt(P._readableStreamController,L),S||Bt(W._readableStreamController,X),a=!1,p?Te():g&&Y();});},_closeSteps:()=>{a=!1,_||at(P._readableStreamController),S||at(W._readableStreamController),P._readableStreamController._pendingPullIntos.length>0&&qt(P._readableStreamController,0),W._readableStreamController._pendingPullIntos.length>0&&qt(W._readableStreamController,0),(!_||!S)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u$3(et,"pullWithDefaultReader");function We(A,z){ve(o)&&(_e(o),o=Ln(n),fe(o));const L=z?W:P,X=z?P:W;Mn(o,A,1,{_chunkSteps:rt=>{ge(()=>{p=!1,g=!1;const nt=z?S:_;if(z?_:S)nt||kt(L._readableStreamController,rt);else {let Co;try{Co=Pn(rt);}catch(tn){te(L._readableStreamController,tn),te(X._readableStreamController,tn),O(le(n,tn));return}nt||kt(L._readableStreamController,rt),Bt(X._readableStreamController,Co);}a=!1,p?Te():g&&Y();});},_closeSteps:rt=>{a=!1;const nt=z?S:_,Yt=z?_:S;nt||at(L._readableStreamController),Yt||at(X._readableStreamController),rt!==void 0&&(nt||kt(L._readableStreamController,rt),!Yt&&X._readableStreamController._pendingPullIntos.length>0&&qt(X._readableStreamController,0)),(!nt||!Yt)&&O(void 0);},_errorSteps:()=>{a=!1;}});}u$3(We,"pullWithBYOBReader");function Te(){if(a)return p=!0,k(void 0);a=!0;const A=wr(P._readableStreamController);return A===null?et():We(A._view,!1),k(void 0)}u$3(Te,"pull1Algorithm");function Y(){if(a)return g=!0,k(void 0);a=!0;const A=wr(W._readableStreamController);return A===null?et():We(A._view,!0),k(void 0)}u$3(Y,"pull2Algorithm");function Z(A){if(_=!0,C=A,S){const z=st([C,q]),L=le(n,z);O(L);}return j}u$3(Z,"cancel1Algorithm");function re(A){if(S=!0,q=A,_){const z=st([C,q]),L=le(n,z);O(L);}return j}u$3(re,"cancel2Algorithm");function Ce(){}return u$3(Ce,"startAlgorithm"),P=lo(Ce,Te,Z),W=lo(Ce,Y,re),fe(o),[P,W]}u$3(xi,"ReadableByteStreamTee");function Ui(n){return b(n)&&typeof n.getReader<"u"}u$3(Ui,"isReadableStreamLike");function Ni(n){return Ui(n)?Vi(n.getReader()):Hi(n)}u$3(Ni,"ReadableStreamFrom");function Hi(n){let o;const a=Cn(n,"async"),p=y;function g(){let S;try{S=Io(a);}catch(q){return T(q)}const C=k(S);return N(C,q=>{if(!b(q))throw new TypeError("The promise returned by the iterator.next() method must fulfill with an object");if(jo(q))Le(o._readableStreamController);else {const W=Lo(q);Ge(o._readableStreamController,W);}})}u$3(g,"pullAlgorithm");function _(S){const C=a.iterator;let q;try{q=vt(C,"return");}catch(O){return T(O)}if(q===void 0)return k(void 0);let P;try{P=M(q,C,[S]);}catch(O){return T(O)}const W=k(P);return N(W,O=>{if(!b(O))throw new TypeError("The promise returned by the iterator.return() method must fulfill with an object")})}return u$3(_,"cancelAlgorithm"),o=ht(p,g,_,0),o}u$3(Hi,"ReadableStreamFromIterable");function Vi(n){let o;const a=y;function p(){let _;try{_=n.read();}catch(S){return T(S)}return N(_,S=>{if(!b(S))throw new TypeError("The promise returned by the reader.read() method must fulfill with an object");if(S.done)Le(o._readableStreamController);else {const C=S.value;Ge(o._readableStreamController,C);}})}u$3(p,"pullAlgorithm");function g(_){try{return k(n.cancel(_))}catch(S){return T(S)}}return u$3(g,"cancelAlgorithm"),o=ht(a,p,g,0),o}u$3(Vi,"ReadableStreamFromDefaultReader");function Qi(n,o){ce(n,o);const a=n,p=a?.autoAllocateChunkSize,g=a?.cancel,_=a?.pull,S=a?.start,C=a?.type;return {autoAllocateChunkSize:p===void 0?void 0:ur(p,`${o} has member 'autoAllocateChunkSize' that`),cancel:g===void 0?void 0:Gi(g,a,`${o} has member 'cancel' that`),pull:_===void 0?void 0:Yi(_,a,`${o} has member 'pull' that`),start:S===void 0?void 0:Zi(S,a,`${o} has member 'start' that`),type:C===void 0?void 0:Ki(C,`${o} has member 'type' that`)}}u$3(Qi,"convertUnderlyingDefaultOrByteSource");function Gi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$3(Gi,"convertUnderlyingSourceCancelCallback");function Yi(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$3(Yi,"convertUnderlyingSourcePullCallback");function Zi(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$3(Zi,"convertUnderlyingSourceStartCallback");function Ki(n,o){if(n=`${n}`,n!=="bytes")throw new TypeError(`${o} '${n}' is not a valid enumeration value for ReadableStreamType`);return n}u$3(Ki,"convertReadableStreamType");function Ji(n,o){return ce(n,o),{preventCancel:!!n?.preventCancel}}u$3(Ji,"convertIteratorOptions");function uo(n,o){ce(n,o);const a=n?.preventAbort,p=n?.preventCancel,g=n?.preventClose,_=n?.signal;return _!==void 0&&Xi(_,`${o} has member 'signal' that`),{preventAbort:!!a,preventCancel:!!p,preventClose:!!g,signal:_}}u$3(uo,"convertPipeOptions");function Xi(n,o){if(!ai(n))throw new TypeError(`${o} is not an AbortSignal.`)}u$3(Xi,"assertAbortSignal");function es(n,o){ce(n,o);const a=n?.readable;sr(a,"readable","ReadableWritablePair"),lr(a,`${o} has member 'readable' that`);const p=n?.writable;return sr(p,"writable","ReadableWritablePair"),Un(p,`${o} has member 'writable' that`),{readable:a,writable:p}}u$3(es,"convertReadableWritablePair");const Zr=class Zr{constructor(o={},a={}){o===void 0?o=null:hn(o,"First parameter");const p=zt(a,"Second parameter"),g=Qi(o,"First parameter");if(Ir(this),g.type==="bytes"){if(p.size!==void 0)throw new RangeError("The strategy for a byte stream cannot have a size function");const _=lt(p,0);Go(this,g,_);}else {const _=Ot(p),S=lt(p,1);$i(this,g,S,_);}}get locked(){if(!qe(this))throw $e("locked");return ke(this)}cancel(o=void 0){return qe(this)?ke(this)?T(new TypeError("Cannot cancel a stream that already has a reader")):le(this,o):T($e("cancel"))}getReader(o=void 0){if(!qe(this))throw $e("getReader");return Zo(o,"First parameter").mode===void 0?Ne(this):Ln(this)}pipeThrough(o,a={}){if(!qe(this))throw $e("pipeThrough");Se(o,1,"pipeThrough");const p=es(o,"First parameter"),g=uo(a,"Second parameter");if(ke(this))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked ReadableStream");if(Qe(p.writable))throw new TypeError("ReadableStream.prototype.pipeThrough cannot be used on a locked WritableStream");const _=io(this,p.writable,g.preventClose,g.preventAbort,g.preventCancel,g.signal);return J(_),p.readable}pipeTo(o,a={}){if(!qe(this))return T($e("pipeTo"));if(o===void 0)return T("Parameter 1 is required in 'pipeTo'.");if(!Ve(o))return T(new TypeError("ReadableStream.prototype.pipeTo's first argument must be a WritableStream"));let p;try{p=uo(a,"Second parameter");}catch(g){return T(g)}return ke(this)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked ReadableStream")):Qe(o)?T(new TypeError("ReadableStream.prototype.pipeTo cannot be used on a locked WritableStream")):io(this,o,p.preventClose,p.preventAbort,p.preventCancel,p.signal)}tee(){if(!qe(this))throw $e("tee");const o=Di(this);return st(o)}values(o=void 0){if(!qe(this))throw $e("values");const a=Ji(o,"First parameter");return zo(this,a.preventCancel)}[pr](o){return this.values(o)}static from(o){return Ni(o)}};u$3(Zr,"ReadableStream");let V=Zr;Object.defineProperties(V,{from:{enumerable:!0}}),Object.defineProperties(V.prototype,{cancel:{enumerable:!0},getReader:{enumerable:!0},pipeThrough:{enumerable:!0},pipeTo:{enumerable:!0},tee:{enumerable:!0},values:{enumerable:!0},locked:{enumerable:!0}}),w(V.from,"from"),w(V.prototype.cancel,"cancel"),w(V.prototype.getReader,"getReader"),w(V.prototype.pipeThrough,"pipeThrough"),w(V.prototype.pipeTo,"pipeTo"),w(V.prototype.tee,"tee"),w(V.prototype.values,"values"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(V.prototype,Symbol.toStringTag,{value:"ReadableStream",configurable:!0}),Object.defineProperty(V.prototype,pr,{value:V.prototype.values,writable:!0,configurable:!0});function ht(n,o,a,p=1,g=()=>1){const _=Object.create(V.prototype);Ir(_);const S=Object.create(ae.prototype);return ao(_,S,n,o,a,p,g),_}u$3(ht,"CreateReadableStream");function lo(n,o,a){const p=Object.create(V.prototype);Ir(p);const g=Object.create(ie.prototype);return jn(p,g,n,o,a,0,void 0),p}u$3(lo,"CreateReadableByteStream");function Ir(n){n._state="readable",n._reader=void 0,n._storedError=void 0,n._disturbed=!1;}u$3(Ir,"InitializeReadableStream");function qe(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_readableStreamController")?!1:n instanceof V}u$3(qe,"IsReadableStream");function ke(n){return n._reader!==void 0}u$3(ke,"IsReadableStreamLocked");function le(n,o){if(n._disturbed=!0,n._state==="closed")return k(void 0);if(n._state==="errored")return T(n._storedError);pt(n);const a=n._reader;if(a!==void 0&&Fe(a)){const g=a._readIntoRequests;a._readIntoRequests=new Q,g.forEach(_=>{_._closeSteps(void 0);});}const p=n._readableStreamController[er](o);return N(p,y)}u$3(le,"ReadableStreamCancel");function pt(n){n._state="closed";const o=n._reader;if(o!==void 0&&(cn(o),ve(o))){const a=o._readRequests;o._readRequests=new Q,a.forEach(p=>{p._closeSteps();});}}u$3(pt,"ReadableStreamClose");function fo(n,o){n._state="errored",n._storedError=o;const a=n._reader;a!==void 0&&(ir(a,o),ve(a)?yn(a,o):xn(a,o));}u$3(fo,"ReadableStreamError");function $e(n){return new TypeError(`ReadableStream.prototype.${n} can only be used on a ReadableStream`)}u$3($e,"streamBrandCheckException$1");function co(n,o){ce(n,o);const a=n?.highWaterMark;return sr(a,"highWaterMark","QueuingStrategyInit"),{highWaterMark:ar(a)}}u$3(co,"convertQueuingStrategyInit");const ho=u$3(n=>n.byteLength,"byteLengthSizeFunction");w(ho,"size");const Kr=class Kr{constructor(o){Se(o,1,"ByteLengthQueuingStrategy"),o=co(o,"First parameter"),this._byteLengthQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!bo(this))throw po("highWaterMark");return this._byteLengthQueuingStrategyHighWaterMark}get size(){if(!bo(this))throw po("size");return ho}};u$3(Kr,"ByteLengthQueuingStrategy");let Ze=Kr;Object.defineProperties(Ze.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ze.prototype,Symbol.toStringTag,{value:"ByteLengthQueuingStrategy",configurable:!0});function po(n){return new TypeError(`ByteLengthQueuingStrategy.prototype.${n} can only be used on a ByteLengthQueuingStrategy`)}u$3(po,"byteLengthBrandCheckException");function bo(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_byteLengthQueuingStrategyHighWaterMark")?!1:n instanceof Ze}u$3(bo,"IsByteLengthQueuingStrategy");const mo=u$3(()=>1,"countSizeFunction");w(mo,"size");const Jr=class Jr{constructor(o){Se(o,1,"CountQueuingStrategy"),o=co(o,"First parameter"),this._countQueuingStrategyHighWaterMark=o.highWaterMark;}get highWaterMark(){if(!go(this))throw yo("highWaterMark");return this._countQueuingStrategyHighWaterMark}get size(){if(!go(this))throw yo("size");return mo}};u$3(Jr,"CountQueuingStrategy");let Ke=Jr;Object.defineProperties(Ke.prototype,{highWaterMark:{enumerable:!0},size:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Ke.prototype,Symbol.toStringTag,{value:"CountQueuingStrategy",configurable:!0});function yo(n){return new TypeError(`CountQueuingStrategy.prototype.${n} can only be used on a CountQueuingStrategy`)}u$3(yo,"countBrandCheckException");function go(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_countQueuingStrategyHighWaterMark")?!1:n instanceof Ke}u$3(go,"IsCountQueuingStrategy");function ts(n,o){ce(n,o);const a=n?.cancel,p=n?.flush,g=n?.readableType,_=n?.start,S=n?.transform,C=n?.writableType;return {cancel:a===void 0?void 0:is(a,n,`${o} has member 'cancel' that`),flush:p===void 0?void 0:rs(p,n,`${o} has member 'flush' that`),readableType:g,start:_===void 0?void 0:ns(_,n,`${o} has member 'start' that`),transform:S===void 0?void 0:os(S,n,`${o} has member 'transform' that`),writableType:C}}u$3(ts,"convertTransformer");function rs(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$3(rs,"convertTransformerFlushCallback");function ns(n,o,a){return ee(n,a),p=>M(n,o,[p])}u$3(ns,"convertTransformerStartCallback");function os(n,o,a){return ee(n,a),(p,g)=>H(n,o,[p,g])}u$3(os,"convertTransformerTransformCallback");function is(n,o,a){return ee(n,a),p=>H(n,o,[p])}u$3(is,"convertTransformerCancelCallback");const Xr=class Xr{constructor(o={},a={},p={}){o===void 0&&(o=null);const g=zt(a,"Second parameter"),_=zt(p,"Third parameter"),S=ts(o,"First parameter");if(S.readableType!==void 0)throw new RangeError("Invalid readableType specified");if(S.writableType!==void 0)throw new RangeError("Invalid writableType specified");const C=lt(_,0),q=Ot(_),P=lt(g,1),W=Ot(g);let O;const j=F(fe=>{O=fe;});ss(this,j,P,W,C,q),us(this,S),S.start!==void 0?O(S.start(this._transformStreamController)):O(void 0);}get readable(){if(!_o(this))throw To("readable");return this._readable}get writable(){if(!_o(this))throw To("writable");return this._writable}};u$3(Xr,"TransformStream");let Je=Xr;Object.defineProperties(Je.prototype,{readable:{enumerable:!0},writable:{enumerable:!0}}),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(Je.prototype,Symbol.toStringTag,{value:"TransformStream",configurable:!0});function ss(n,o,a,p,g,_){function S(){return o}u$3(S,"startAlgorithm");function C(j){return cs(n,j)}u$3(C,"writeAlgorithm");function q(j){return ds(n,j)}u$3(q,"abortAlgorithm");function P(){return hs(n)}u$3(P,"closeAlgorithm"),n._writable=fi(S,C,P,q,a,p);function W(){return ps(n)}u$3(W,"pullAlgorithm");function O(j){return bs(n,j)}u$3(O,"cancelAlgorithm"),n._readable=ht(S,W,O,g,_),n._backpressure=void 0,n._backpressureChangePromise=void 0,n._backpressureChangePromise_resolve=void 0,Ht(n,!0),n._transformStreamController=void 0;}u$3(ss,"InitializeTransformStream");function _o(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_transformStreamController")?!1:n instanceof Je}u$3(_o,"IsTransformStream");function So(n,o){ue(n._readable._readableStreamController,o),jr(n,o);}u$3(So,"TransformStreamError");function jr(n,o){Qt(n._transformStreamController),ft(n._writable._writableStreamController,o),Lr(n);}u$3(jr,"TransformStreamErrorWritableAndUnblockWrite");function Lr(n){n._backpressure&&Ht(n,!1);}u$3(Lr,"TransformStreamUnblockWrite");function Ht(n,o){n._backpressureChangePromise!==void 0&&n._backpressureChangePromise_resolve(),n._backpressureChangePromise=F(a=>{n._backpressureChangePromise_resolve=a;}),n._backpressure=o;}u$3(Ht,"TransformStreamSetBackpressure");const en=class en{constructor(){throw new TypeError("Illegal constructor")}get desiredSize(){if(!Vt(this))throw Gt("desiredSize");const o=this._controlledTransformStream._readable._readableStreamController;return Fr(o)}enqueue(o=void 0){if(!Vt(this))throw Gt("enqueue");wo(this,o);}error(o=void 0){if(!Vt(this))throw Gt("error");ls(this,o);}terminate(){if(!Vt(this))throw Gt("terminate");fs(this);}};u$3(en,"TransformStreamDefaultController");let me=en;Object.defineProperties(me.prototype,{enqueue:{enumerable:!0},error:{enumerable:!0},terminate:{enumerable:!0},desiredSize:{enumerable:!0}}),w(me.prototype.enqueue,"enqueue"),w(me.prototype.error,"error"),w(me.prototype.terminate,"terminate"),typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(me.prototype,Symbol.toStringTag,{value:"TransformStreamDefaultController",configurable:!0});function Vt(n){return !b(n)||!Object.prototype.hasOwnProperty.call(n,"_controlledTransformStream")?!1:n instanceof me}u$3(Vt,"IsTransformStreamDefaultController");function as(n,o,a,p,g){o._controlledTransformStream=n,n._transformStreamController=o,o._transformAlgorithm=a,o._flushAlgorithm=p,o._cancelAlgorithm=g,o._finishPromise=void 0,o._finishPromise_resolve=void 0,o._finishPromise_reject=void 0;}u$3(as,"SetUpTransformStreamDefaultController");function us(n,o){const a=Object.create(me.prototype);let p,g,_;o.transform!==void 0?p=u$3(S=>o.transform(S,a),"transformAlgorithm"):p=u$3(S=>{try{return wo(a,S),k(void 0)}catch(C){return T(C)}},"transformAlgorithm"),o.flush!==void 0?g=u$3(()=>o.flush(a),"flushAlgorithm"):g=u$3(()=>k(void 0),"flushAlgorithm"),o.cancel!==void 0?_=u$3(S=>o.cancel(S),"cancelAlgorithm"):_=u$3(()=>k(void 0),"cancelAlgorithm"),as(n,a,p,g,_);}u$3(us,"SetUpTransformStreamDefaultControllerFromTransformer");function Qt(n){n._transformAlgorithm=void 0,n._flushAlgorithm=void 0,n._cancelAlgorithm=void 0;}u$3(Qt,"TransformStreamDefaultControllerClearAlgorithms");function wo(n,o){const a=n._controlledTransformStream,p=a._readable._readableStreamController;if(!Ye(p))throw new TypeError("Readable side is not in a state that permits enqueue");try{Ge(p,o);}catch(_){throw jr(a,_),a._readable._storedError}Li(p)!==a._backpressure&&Ht(a,!0);}u$3(wo,"TransformStreamDefaultControllerEnqueue");function ls(n,o){So(n._controlledTransformStream,o);}u$3(ls,"TransformStreamDefaultControllerError");function Ro(n,o){const a=n._transformAlgorithm(o);return N(a,void 0,p=>{throw So(n._controlledTransformStream,p),p})}u$3(Ro,"TransformStreamDefaultControllerPerformTransform");function fs(n){const o=n._controlledTransformStream,a=o._readable._readableStreamController;Le(a);const p=new TypeError("TransformStream terminated");jr(o,p);}u$3(fs,"TransformStreamDefaultControllerTerminate");function cs(n,o){const a=n._transformStreamController;if(n._backpressure){const p=n._backpressureChangePromise;return N(p,()=>{const g=n._writable;if(g._state==="erroring")throw g._storedError;return Ro(a,o)})}return Ro(a,o)}u$3(cs,"TransformStreamDefaultSinkWriteAlgorithm");function ds(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._readable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ue(p._readableStreamController,o),$r(a)),null),_=>(ue(p._readableStreamController,_),Xe(a,_),null)),a._finishPromise}u$3(ds,"TransformStreamDefaultSinkAbortAlgorithm");function hs(n){const o=n._transformStreamController;if(o._finishPromise!==void 0)return o._finishPromise;const a=n._readable;o._finishPromise=F((g,_)=>{o._finishPromise_resolve=g,o._finishPromise_reject=_;});const p=o._flushAlgorithm();return Qt(o),E(p,()=>(a._state==="errored"?Xe(o,a._storedError):(Le(a._readableStreamController),$r(o)),null),g=>(ue(a._readableStreamController,g),Xe(o,g),null)),o._finishPromise}u$3(hs,"TransformStreamDefaultSinkCloseAlgorithm");function ps(n){return Ht(n,!1),n._backpressureChangePromise}u$3(ps,"TransformStreamDefaultSourcePullAlgorithm");function bs(n,o){const a=n._transformStreamController;if(a._finishPromise!==void 0)return a._finishPromise;const p=n._writable;a._finishPromise=F((_,S)=>{a._finishPromise_resolve=_,a._finishPromise_reject=S;});const g=a._cancelAlgorithm(o);return Qt(a),E(g,()=>(p._state==="errored"?Xe(a,p._storedError):(ft(p._writableStreamController,o),Lr(n),$r(a)),null),_=>(ft(p._writableStreamController,_),Lr(n),Xe(a,_),null)),a._finishPromise}u$3(bs,"TransformStreamDefaultSourceCancelAlgorithm");function Gt(n){return new TypeError(`TransformStreamDefaultController.prototype.${n} can only be used on a TransformStreamDefaultController`)}u$3(Gt,"defaultControllerBrandCheckException");function $r(n){n._finishPromise_resolve!==void 0&&(n._finishPromise_resolve(),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$3($r,"defaultControllerFinishPromiseResolve");function Xe(n,o){n._finishPromise_reject!==void 0&&(J(n._finishPromise),n._finishPromise_reject(o),n._finishPromise_resolve=void 0,n._finishPromise_reject=void 0);}u$3(Xe,"defaultControllerFinishPromiseReject");function To(n){return new TypeError(`TransformStream.prototype.${n} can only be used on a TransformStream`)}u$3(To,"streamBrandCheckException"),d.ByteLengthQueuingStrategy=Ze,d.CountQueuingStrategy=Ke,d.ReadableByteStreamController=ie,d.ReadableStream=V,d.ReadableStreamBYOBReader=he,d.ReadableStreamBYOBRequest=Re,d.ReadableStreamDefaultController=ae,d.ReadableStreamDefaultReader=de,d.TransformStream=Je,d.TransformStreamDefaultController=me,d.WritableStream=pe,d.WritableStreamDefaultController=Be,d.WritableStreamDefaultWriter=se;});}(ponyfill_es2018,ponyfill_es2018.exports)),ponyfill_es2018.exports}u$3(requirePonyfill_es2018,"requirePonyfill_es2018");const POOL_SIZE$1=65536;if(!globalThis.ReadableStream)try{const c=require("node:process"),{emitWarning:l}=c;try{c.emitWarning=()=>{},Object.assign(globalThis,require("node:stream/web")),c.emitWarning=l;}catch(d){throw c.emitWarning=l,d}}catch{Object.assign(globalThis,requirePonyfill_es2018());}try{const{Blob:c}=require("buffer");c&&!c.prototype.stream&&(c.prototype.stream=u$3(function(d){let y=0;const b=this;return new ReadableStream({type:"bytes",async pull(R){const v=await b.slice(y,Math.min(b.size,y+POOL_SIZE$1)).arrayBuffer();y+=v.byteLength,R.enqueue(new Uint8Array(v)),y===b.size&&R.close();}})},"name"));}catch{}/*! fetch-blob. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */const POOL_SIZE=65536;async function*toIterator(c,l=!0){for(const d of c)if("stream"in d)yield*d.stream();else if(ArrayBuffer.isView(d))if(l){let y=d.byteOffset;const b=d.byteOffset+d.byteLength;for(;y!==b;){const R=Math.min(b-y,POOL_SIZE),w=d.buffer.slice(y,y+R);y+=w.byteLength,yield new Uint8Array(w);}}else yield d;else {let y=0,b=d;for(;y!==b.size;){const w=await b.slice(y,Math.min(b.size,y+POOL_SIZE)).arrayBuffer();y+=w.byteLength,yield new Uint8Array(w);}}}u$3(toIterator,"toIterator");const _Blob=(Ue$2=class{constructor(l=[],d={}){ye$3(this,Pe$4,[]);ye$3(this,bt$3,"");ye$3(this,ot$3,0);ye$3(this,Zt$3,"transparent");if(typeof l!="object"||l===null)throw new TypeError("Failed to construct 'Blob': The provided value cannot be converted to a sequence.");if(typeof l[Symbol.iterator]!="function")throw new TypeError("Failed to construct 'Blob': The object must have a callable @@iterator property.");if(typeof d!="object"&&typeof d!="function")throw new TypeError("Failed to construct 'Blob': parameter 2 cannot convert to dictionary.");d===null&&(d={});const y=new TextEncoder;for(const R of l){let w;ArrayBuffer.isView(R)?w=new Uint8Array(R.buffer.slice(R.byteOffset,R.byteOffset+R.byteLength)):R instanceof ArrayBuffer?w=new Uint8Array(R.slice(0)):R instanceof Ue$2?w=R:w=y.encode(`${R}`),ne$4(this,ot$3,D$4(this,ot$3)+(ArrayBuffer.isView(w)?w.byteLength:w.size)),D$4(this,Pe$4).push(w);}ne$4(this,Zt$3,`${d.endings===void 0?"transparent":d.endings}`);const b=d.type===void 0?"":String(d.type);ne$4(this,bt$3,/^[\x20-\x7E]*$/.test(b)?b:"");}get size(){return D$4(this,ot$3)}get type(){return D$4(this,bt$3)}async text(){const l=new TextDecoder;let d="";for await(const y of toIterator(D$4(this,Pe$4),!1))d+=l.decode(y,{stream:!0});return d+=l.decode(),d}async arrayBuffer(){const l=new Uint8Array(this.size);let d=0;for await(const y of toIterator(D$4(this,Pe$4),!1))l.set(y,d),d+=y.length;return l.buffer}stream(){const l=toIterator(D$4(this,Pe$4),!0);return new globalThis.ReadableStream({type:"bytes",async pull(d){const y=await l.next();y.done?d.close():d.enqueue(y.value);},async cancel(){await l.return();}})}slice(l=0,d=this.size,y=""){const{size:b}=this;let R=l<0?Math.max(b+l,0):Math.min(l,b),w=d<0?Math.max(b+d,0):Math.min(d,b);const v=Math.max(w-R,0),I=D$4(this,Pe$4),B=[];let F=0;for(const T of I){if(F>=v)break;const $=ArrayBuffer.isView(T)?T.byteLength:T.size;if(R&&$<=R)R-=$,w-=$;else {let E;ArrayBuffer.isView(T)?(E=T.subarray(R,Math.min($,w)),F+=E.byteLength):(E=T.slice(R,Math.min($,w)),F+=E.size),w-=$,B.push(E),R=0;}}const k=new Ue$2([],{type:String(y).toLowerCase()});return ne$4(k,ot$3,v),ne$4(k,Pe$4,B),k}get[Symbol.toStringTag](){return "Blob"}static[Symbol.hasInstance](l){return l&&typeof l=="object"&&typeof l.constructor=="function"&&(typeof l.stream=="function"||typeof l.arrayBuffer=="function")&&/^(Blob|File)$/.test(l[Symbol.toStringTag])}},Pe$4=new WeakMap,bt$3=new WeakMap,ot$3=new WeakMap,Zt$3=new WeakMap,u$3(Ue$2,"Blob"),Ue$2);Object.defineProperties(_Blob.prototype,{size:{enumerable:!0},type:{enumerable:!0},slice:{enumerable:!0}});const Blob=_Blob,r$1=Blob,_File=(gt$3=class extends r$1{constructor(d,y,b={}){if(arguments.length<2)throw new TypeError(`Failed to construct 'File': 2 arguments required, but only ${arguments.length} present.`);super(d,b);ye$3(this,mt$3,0);ye$3(this,yt$3,"");b===null&&(b={});const R=b.lastModified===void 0?Date.now():Number(b.lastModified);Number.isNaN(R)||ne$4(this,mt$3,R),ne$4(this,yt$3,String(y));}get name(){return D$4(this,yt$3)}get lastModified(){return D$4(this,mt$3)}get[Symbol.toStringTag](){return "File"}static[Symbol.hasInstance](d){return !!d&&d instanceof r$1&&/^(File)$/.test(d[Symbol.toStringTag])}},mt$3=new WeakMap,yt$3=new WeakMap,u$3(gt$3,"File"),gt$3),File$1=_File,File$1$1=File$1;/*! formdata-polyfill. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */var{toStringTag:t$1$1,iterator:i$5,hasInstance:h$4}=Symbol,r=Math.random,m$6="append,set,get,getAll,delete,keys,values,entries,forEach,constructor".split(","),f$3=u$3((c,l,d)=>(c+="",/^(Blob|File)$/.test(l&&l[t$1$1])?[(d=d!==void 0?d+"":l[t$1$1]=="File"?l.name:"blob",c),l.name!==d||l[t$1$1]=="blob"?new File$1$1([l],d,l):l]:[c,l+""]),"f"),e$1$1=u$3((c,l)=>(l?c:c.replace(/\r?\n|\r/g,`\r
`)).replace(/\n/g,"%0A").replace(/\r/g,"%0D").replace(/"/g,"%22"),"e$1"),x$5=u$3((c,l,d)=>{if(l.length<d)throw new TypeError(`Failed to execute '${c}' on 'FormData': ${d} arguments required, but only ${l.length} present.`)},"x");const FormData$1=(_t$2=class{constructor(...l){ye$3(this,oe$4,[]);if(l.length)throw new TypeError("Failed to construct 'FormData': parameter 1 is not of type 'HTMLFormElement'.")}get[t$1$1](){return "FormData"}[i$5](){return this.entries()}static[h$4](l){return l&&typeof l=="object"&&l[t$1$1]==="FormData"&&!m$6.some(d=>typeof l[d]!="function")}append(...l){x$5("append",arguments,2),D$4(this,oe$4).push(f$3(...l));}delete(l){x$5("delete",arguments,1),l+="",ne$4(this,oe$4,D$4(this,oe$4).filter(([d])=>d!==l));}get(l){x$5("get",arguments,1),l+="";for(var d=D$4(this,oe$4),y=d.length,b=0;b<y;b++)if(d[b][0]===l)return d[b][1];return null}getAll(l,d){return x$5("getAll",arguments,1),d=[],l+="",D$4(this,oe$4).forEach(y=>y[0]===l&&d.push(y[1])),d}has(l){return x$5("has",arguments,1),l+="",D$4(this,oe$4).some(d=>d[0]===l)}forEach(l,d){x$5("forEach",arguments,1);for(var[y,b]of this)l.call(d,b,y,this);}set(...l){x$5("set",arguments,2);var d=[],y=!0;l=f$3(...l),D$4(this,oe$4).forEach(b=>{b[0]===l[0]?y&&(y=!d.push(l)):d.push(b);}),y&&d.push(l),ne$4(this,oe$4,d);}*entries(){yield*D$4(this,oe$4);}*keys(){for(var[l]of this)yield l;}*values(){for(var[,l]of this)yield l;}},oe$4=new WeakMap,u$3(_t$2,"FormData"),_t$2);function formDataToBlob(c,l=r$1){var d=`${r()}${r()}`.replace(/\./g,"").slice(-28).padStart(32,"-"),y=[],b=`--${d}\r
Content-Disposition: form-data; name="`;return c.forEach((R,w)=>typeof R=="string"?y.push(b+e$1$1(w)+`"\r
\r
${R.replace(/\r(?!\n)|(?<!\r)\n/g,`\r
`)}\r
`):y.push(b+e$1$1(w)+`"; filename="${e$1$1(R.name,1)}"\r
Content-Type: ${R.type||"application/octet-stream"}\r
\r
`,R,`\r
`)),y.push(`--${d}--`),new l(y,{type:"multipart/form-data; boundary="+d})}u$3(formDataToBlob,"formDataToBlob");const rn$1=class rn extends Error{constructor(l,d){super(l),Error.captureStackTrace(this,this.constructor),this.type=d;}get name(){return this.constructor.name}get[Symbol.toStringTag](){return this.constructor.name}};u$3(rn$1,"FetchBaseError");let FetchBaseError=rn$1;const nn$1=class nn extends FetchBaseError{constructor(l,d,y){super(l,d),y&&(this.code=this.errno=y.code,this.erroredSysCall=y.syscall);}};u$3(nn$1,"FetchError");let FetchError$1=nn$1;const NAME=Symbol.toStringTag,isURLSearchParameters=u$3(c=>typeof c=="object"&&typeof c.append=="function"&&typeof c.delete=="function"&&typeof c.get=="function"&&typeof c.getAll=="function"&&typeof c.has=="function"&&typeof c.set=="function"&&typeof c.sort=="function"&&c[NAME]==="URLSearchParams","isURLSearchParameters"),isBlob=u$3(c=>c&&typeof c=="object"&&typeof c.arrayBuffer=="function"&&typeof c.type=="string"&&typeof c.stream=="function"&&typeof c.constructor=="function"&&/^(Blob|File)$/.test(c[NAME]),"isBlob"),isAbortSignal=u$3(c=>typeof c=="object"&&(c[NAME]==="AbortSignal"||c[NAME]==="EventTarget"),"isAbortSignal"),isDomainOrSubdomain=u$3((c,l)=>{const d=new URL(l).hostname,y=new URL(c).hostname;return d===y||d.endsWith(`.${y}`)},"isDomainOrSubdomain"),isSameProtocol=u$3((c,l)=>{const d=new URL(l).protocol,y=new URL(c).protocol;return d===y},"isSameProtocol"),pipeline=require$$0.promisify(Stream__default.pipeline),INTERNALS$2=Symbol("Body internals"),on$1=class on{constructor(l,{size:d=0}={}){let y=null;l===null?l=null:isURLSearchParameters(l)?l=require$$6.Buffer.from(l.toString()):isBlob(l)||require$$6.Buffer.isBuffer(l)||(require$$0.types.isAnyArrayBuffer(l)?l=require$$6.Buffer.from(l):ArrayBuffer.isView(l)?l=require$$6.Buffer.from(l.buffer,l.byteOffset,l.byteLength):l instanceof Stream__default||(l instanceof FormData$1?(l=formDataToBlob(l),y=l.type.split("=")[1]):l=require$$6.Buffer.from(String(l))));let b=l;require$$6.Buffer.isBuffer(l)?b=Stream__default.Readable.from(l):isBlob(l)&&(b=Stream__default.Readable.from(l.stream())),this[INTERNALS$2]={body:l,stream:b,boundary:y,disturbed:!1,error:null},this.size=d,l instanceof Stream__default&&l.on("error",R=>{const w=R instanceof FetchBaseError?R:new FetchError$1(`Invalid response body while trying to fetch ${this.url}: ${R.message}`,"system",R);this[INTERNALS$2].error=w;});}get body(){return this[INTERNALS$2].stream}get bodyUsed(){return this[INTERNALS$2].disturbed}async arrayBuffer(){const{buffer:l,byteOffset:d,byteLength:y}=await consumeBody(this);return l.slice(d,d+y)}async formData(){const l=this.headers.get("content-type");if(l.startsWith("application/x-www-form-urlencoded")){const y=new FormData$1,b=new URLSearchParams(await this.text());for(const[R,w]of b)y.append(R,w);return y}const{toFormData:d}=await import('./_/multipart-parser.mjs').then(function (n) { return n.m; });return d(this.body,l)}async blob(){const l=this.headers&&this.headers.get("content-type")||this[INTERNALS$2].body&&this[INTERNALS$2].body.type||"",d=await this.arrayBuffer();return new r$1([d],{type:l})}async json(){const l=await this.text();return JSON.parse(l)}async text(){const l=await consumeBody(this);return new TextDecoder().decode(l)}buffer(){return consumeBody(this)}};u$3(on$1,"Body");let Body=on$1;Body.prototype.buffer=require$$0.deprecate(Body.prototype.buffer,"Please use 'response.arrayBuffer()' instead of 'response.buffer()'","node-fetch#buffer"),Object.defineProperties(Body.prototype,{body:{enumerable:!0},bodyUsed:{enumerable:!0},arrayBuffer:{enumerable:!0},blob:{enumerable:!0},json:{enumerable:!0},text:{enumerable:!0},data:{get:require$$0.deprecate(()=>{},"data doesn't exist, use json(), text(), arrayBuffer(), or body instead","https://github.com/node-fetch/node-fetch/issues/1000 (response)")}});async function consumeBody(c){if(c[INTERNALS$2].disturbed)throw new TypeError(`body used already for: ${c.url}`);if(c[INTERNALS$2].disturbed=!0,c[INTERNALS$2].error)throw c[INTERNALS$2].error;const{body:l}=c;if(l===null||!(l instanceof Stream__default))return require$$6.Buffer.alloc(0);const d=[];let y=0;try{for await(const b of l){if(c.size>0&&y+b.length>c.size){const R=new FetchError$1(`content size at ${c.url} over limit: ${c.size}`,"max-size");throw l.destroy(R),R}y+=b.length,d.push(b);}}catch(b){throw b instanceof FetchBaseError?b:new FetchError$1(`Invalid response body while trying to fetch ${c.url}: ${b.message}`,"system",b)}if(l.readableEnded===!0||l._readableState.ended===!0)try{return d.every(b=>typeof b=="string")?require$$6.Buffer.from(d.join("")):require$$6.Buffer.concat(d,y)}catch(b){throw new FetchError$1(`Could not create Buffer from response body for ${c.url}: ${b.message}`,"system",b)}else throw new FetchError$1(`Premature close of server response while trying to fetch ${c.url}`)}u$3(consumeBody,"consumeBody");const clone=u$3((c,l)=>{let d,y,{body:b}=c[INTERNALS$2];if(c.bodyUsed)throw new Error("cannot clone body after it is used");return b instanceof Stream__default&&typeof b.getBoundary!="function"&&(d=new Stream.PassThrough({highWaterMark:l}),y=new Stream.PassThrough({highWaterMark:l}),b.pipe(d),b.pipe(y),c[INTERNALS$2].stream=d,b=y),b},"clone"),getNonSpecFormDataBoundary=require$$0.deprecate(c=>c.getBoundary(),"form-data doesn't follow the spec and requires special treatment. Use alternative package","https://github.com/node-fetch/node-fetch/issues/1167"),extractContentType=u$3((c,l)=>c===null?null:typeof c=="string"?"text/plain;charset=UTF-8":isURLSearchParameters(c)?"application/x-www-form-urlencoded;charset=UTF-8":isBlob(c)?c.type||null:require$$6.Buffer.isBuffer(c)||require$$0.types.isAnyArrayBuffer(c)||ArrayBuffer.isView(c)?null:c instanceof FormData$1?`multipart/form-data; boundary=${l[INTERNALS$2].boundary}`:c&&typeof c.getBoundary=="function"?`multipart/form-data;boundary=${getNonSpecFormDataBoundary(c)}`:c instanceof Stream__default?null:"text/plain;charset=UTF-8","extractContentType"),getTotalBytes=u$3(c=>{const{body:l}=c[INTERNALS$2];return l===null?0:isBlob(l)?l.size:require$$6.Buffer.isBuffer(l)?l.length:l&&typeof l.getLengthSync=="function"&&l.hasKnownLength&&l.hasKnownLength()?l.getLengthSync():null},"getTotalBytes"),writeToStream=u$3(async(c,{body:l})=>{l===null?c.end():await pipeline(l,c);},"writeToStream"),validateHeaderName=typeof http__default.validateHeaderName=="function"?http__default.validateHeaderName:c=>{if(!/^[\^`\-\w!#$%&'*+.|~]+$/.test(c)){const l=new TypeError(`Header name must be a valid HTTP token [${c}]`);throw Object.defineProperty(l,"code",{value:"ERR_INVALID_HTTP_TOKEN"}),l}},validateHeaderValue=typeof http__default.validateHeaderValue=="function"?http__default.validateHeaderValue:(c,l)=>{if(/[^\t\u0020-\u007E\u0080-\u00FF]/.test(l)){const d=new TypeError(`Invalid character in header content ["${c}"]`);throw Object.defineProperty(d,"code",{value:"ERR_INVALID_CHAR"}),d}},Kt$3=class Kt extends URLSearchParams{constructor(l){let d=[];if(l instanceof Kt){const y=l.raw();for(const[b,R]of Object.entries(y))d.push(...R.map(w=>[b,w]));}else if(l!=null)if(typeof l=="object"&&!require$$0.types.isBoxedPrimitive(l)){const y=l[Symbol.iterator];if(y==null)d.push(...Object.entries(l));else {if(typeof y!="function")throw new TypeError("Header pairs must be iterable");d=[...l].map(b=>{if(typeof b!="object"||require$$0.types.isBoxedPrimitive(b))throw new TypeError("Each header pair must be an iterable object");return [...b]}).map(b=>{if(b.length!==2)throw new TypeError("Each header pair must be a name/value tuple");return [...b]});}}else throw new TypeError("Failed to construct 'Headers': The provided value is not of type '(sequence<sequence<ByteString>> or record<ByteString, ByteString>)");return d=d.length>0?d.map(([y,b])=>(validateHeaderName(y),validateHeaderValue(y,String(b)),[String(y).toLowerCase(),String(b)])):void 0,super(d),new Proxy(this,{get(y,b,R){switch(b){case"append":case"set":return (w,v)=>(validateHeaderName(w),validateHeaderValue(w,String(v)),URLSearchParams.prototype[b].call(y,String(w).toLowerCase(),String(v)));case"delete":case"has":case"getAll":return w=>(validateHeaderName(w),URLSearchParams.prototype[b].call(y,String(w).toLowerCase()));case"keys":return ()=>(y.sort(),new Set(URLSearchParams.prototype.keys.call(y)).keys());default:return Reflect.get(y,b,R)}}})}get[Symbol.toStringTag](){return this.constructor.name}toString(){return Object.prototype.toString.call(this)}get(l){const d=this.getAll(l);if(d.length===0)return null;let y=d.join(", ");return /^content-encoding$/i.test(l)&&(y=y.toLowerCase()),y}forEach(l,d=void 0){for(const y of this.keys())Reflect.apply(l,d,[this.get(y),y,this]);}*values(){for(const l of this.keys())yield this.get(l);}*entries(){for(const l of this.keys())yield [l,this.get(l)];}[Symbol.iterator](){return this.entries()}raw(){return [...this.keys()].reduce((l,d)=>(l[d]=this.getAll(d),l),{})}[Symbol.for("nodejs.util.inspect.custom")](){return [...this.keys()].reduce((l,d)=>{const y=this.getAll(d);return d==="host"?l[d]=y[0]:l[d]=y.length>1?y:y[0],l},{})}};u$3(Kt$3,"Headers");let Headers$2=Kt$3;Object.defineProperties(Headers$2.prototype,["get","entries","forEach","values"].reduce((c,l)=>(c[l]={enumerable:!0},c),{}));function fromRawHeaders(c=[]){return new Headers$2(c.reduce((l,d,y,b)=>(y%2===0&&l.push(b.slice(y,y+2)),l),[]).filter(([l,d])=>{try{return validateHeaderName(l),validateHeaderValue(l,String(d)),!0}catch{return !1}}))}u$3(fromRawHeaders,"fromRawHeaders");const redirectStatus=new Set([301,302,303,307,308]),isRedirect=u$3(c=>redirectStatus.has(c),"isRedirect"),INTERNALS$1=Symbol("Response internals"),De$4=class De extends Body{constructor(l=null,d={}){super(l,d);const y=d.status!=null?d.status:200,b=new Headers$2(d.headers);if(l!==null&&!b.has("Content-Type")){const R=extractContentType(l,this);R&&b.append("Content-Type",R);}this[INTERNALS$1]={type:"default",url:d.url,status:y,statusText:d.statusText||"",headers:b,counter:d.counter,highWaterMark:d.highWaterMark};}get type(){return this[INTERNALS$1].type}get url(){return this[INTERNALS$1].url||""}get status(){return this[INTERNALS$1].status}get ok(){return this[INTERNALS$1].status>=200&&this[INTERNALS$1].status<300}get redirected(){return this[INTERNALS$1].counter>0}get statusText(){return this[INTERNALS$1].statusText}get headers(){return this[INTERNALS$1].headers}get highWaterMark(){return this[INTERNALS$1].highWaterMark}clone(){return new De(clone(this,this.highWaterMark),{type:this.type,url:this.url,status:this.status,statusText:this.statusText,headers:this.headers,ok:this.ok,redirected:this.redirected,size:this.size,highWaterMark:this.highWaterMark})}static redirect(l,d=302){if(!isRedirect(d))throw new RangeError('Failed to execute "redirect" on "response": Invalid status code');return new De(null,{headers:{location:new URL(l).toString()},status:d})}static error(){const l=new De(null,{status:0,statusText:""});return l[INTERNALS$1].type="error",l}static json(l=void 0,d={}){const y=JSON.stringify(l);if(y===void 0)throw new TypeError("data is not JSON serializable");const b=new Headers$2(d&&d.headers);return b.has("content-type")||b.set("content-type","application/json"),new De(y,{...d,headers:b})}get[Symbol.toStringTag](){return "Response"}};u$3(De$4,"Response");let Response$1=De$4;Object.defineProperties(Response$1.prototype,{type:{enumerable:!0},url:{enumerable:!0},status:{enumerable:!0},ok:{enumerable:!0},redirected:{enumerable:!0},statusText:{enumerable:!0},headers:{enumerable:!0},clone:{enumerable:!0}});const getSearch=u$3(c=>{if(c.search)return c.search;const l=c.href.length-1,d=c.hash||(c.href[l]==="#"?"#":"");return c.href[l-d.length]==="?"?"?":""},"getSearch");function stripURLForUseAsAReferrer(c,l=!1){return c==null||(c=new URL(c),/^(about|blob|data):$/.test(c.protocol))?"no-referrer":(c.username="",c.password="",c.hash="",l&&(c.pathname="",c.search=""),c)}u$3(stripURLForUseAsAReferrer,"stripURLForUseAsAReferrer");const ReferrerPolicy=new Set(["","no-referrer","no-referrer-when-downgrade","same-origin","origin","strict-origin","origin-when-cross-origin","strict-origin-when-cross-origin","unsafe-url"]),DEFAULT_REFERRER_POLICY="strict-origin-when-cross-origin";function validateReferrerPolicy(c){if(!ReferrerPolicy.has(c))throw new TypeError(`Invalid referrerPolicy: ${c}`);return c}u$3(validateReferrerPolicy,"validateReferrerPolicy");function isOriginPotentiallyTrustworthy(c){if(/^(http|ws)s:$/.test(c.protocol))return !0;const l=c.host.replace(/(^\[)|(]$)/g,""),d=require$$4.isIP(l);return d===4&&/^127\./.test(l)||d===6&&/^(((0+:){7})|(::(0+:){0,6}))0*1$/.test(l)?!0:c.host==="localhost"||c.host.endsWith(".localhost")?!1:c.protocol==="file:"}u$3(isOriginPotentiallyTrustworthy,"isOriginPotentiallyTrustworthy");function isUrlPotentiallyTrustworthy(c){return /^about:(blank|srcdoc)$/.test(c)||c.protocol==="data:"||/^(blob|filesystem):$/.test(c.protocol)?!0:isOriginPotentiallyTrustworthy(c)}u$3(isUrlPotentiallyTrustworthy,"isUrlPotentiallyTrustworthy");function determineRequestsReferrer(c,{referrerURLCallback:l,referrerOriginCallback:d}={}){if(c.referrer==="no-referrer"||c.referrerPolicy==="")return null;const y=c.referrerPolicy;if(c.referrer==="about:client")return "no-referrer";const b=c.referrer;let R=stripURLForUseAsAReferrer(b),w=stripURLForUseAsAReferrer(b,!0);R.toString().length>4096&&(R=w),l&&(R=l(R)),d&&(w=d(w));const v=new URL(c.url);switch(y){case"no-referrer":return "no-referrer";case"origin":return w;case"unsafe-url":return R;case"strict-origin":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w.toString();case"strict-origin-when-cross-origin":return R.origin===v.origin?R:isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":w;case"same-origin":return R.origin===v.origin?R:"no-referrer";case"origin-when-cross-origin":return R.origin===v.origin?R:w;case"no-referrer-when-downgrade":return isUrlPotentiallyTrustworthy(R)&&!isUrlPotentiallyTrustworthy(v)?"no-referrer":R;default:throw new TypeError(`Invalid referrerPolicy: ${y}`)}}u$3(determineRequestsReferrer,"determineRequestsReferrer");function parseReferrerPolicyFromHeader(c){const l=(c.get("referrer-policy")||"").split(/[,\s]+/);let d="";for(const y of l)y&&ReferrerPolicy.has(y)&&(d=y);return d}u$3(parseReferrerPolicyFromHeader,"parseReferrerPolicyFromHeader");const INTERNALS=Symbol("Request internals"),isRequest=u$3(c=>typeof c=="object"&&typeof c[INTERNALS]=="object","isRequest"),doBadDataWarn=require$$0.deprecate(()=>{},".data is not a valid RequestInit property, use .body instead","https://github.com/node-fetch/node-fetch/issues/1000 (request)"),Jt$3=class Jt extends Body{constructor(l,d={}){let y;if(isRequest(l)?y=new URL(l.url):(y=new URL(l),l={}),y.username!==""||y.password!=="")throw new TypeError(`${y} is an url with embedded credentials.`);let b=d.method||l.method||"GET";if(/^(delete|get|head|options|post|put)$/i.test(b)&&(b=b.toUpperCase()),!isRequest(d)&&"data"in d&&doBadDataWarn(),(d.body!=null||isRequest(l)&&l.body!==null)&&(b==="GET"||b==="HEAD"))throw new TypeError("Request with GET/HEAD method cannot have body");const R=d.body?d.body:isRequest(l)&&l.body!==null?clone(l):null;super(R,{size:d.size||l.size||0});const w=new Headers$2(d.headers||l.headers||{});if(R!==null&&!w.has("Content-Type")){const B=extractContentType(R,this);B&&w.set("Content-Type",B);}let v=isRequest(l)?l.signal:null;if("signal"in d&&(v=d.signal),v!=null&&!isAbortSignal(v))throw new TypeError("Expected signal to be an instanceof AbortSignal or EventTarget");let I=d.referrer==null?l.referrer:d.referrer;if(I==="")I="no-referrer";else if(I){const B=new URL(I);I=/^about:(\/\/)?client$/.test(B)?"client":B;}else I=void 0;this[INTERNALS]={method:b,redirect:d.redirect||l.redirect||"follow",headers:w,parsedURL:y,signal:v,referrer:I},this.follow=d.follow===void 0?l.follow===void 0?20:l.follow:d.follow,this.compress=d.compress===void 0?l.compress===void 0?!0:l.compress:d.compress,this.counter=d.counter||l.counter||0,this.agent=d.agent||l.agent,this.highWaterMark=d.highWaterMark||l.highWaterMark||16384,this.insecureHTTPParser=d.insecureHTTPParser||l.insecureHTTPParser||!1,this.referrerPolicy=d.referrerPolicy||l.referrerPolicy||"";}get method(){return this[INTERNALS].method}get url(){return require$$1.format(this[INTERNALS].parsedURL)}get headers(){return this[INTERNALS].headers}get redirect(){return this[INTERNALS].redirect}get signal(){return this[INTERNALS].signal}get referrer(){if(this[INTERNALS].referrer==="no-referrer")return "";if(this[INTERNALS].referrer==="client")return "about:client";if(this[INTERNALS].referrer)return this[INTERNALS].referrer.toString()}get referrerPolicy(){return this[INTERNALS].referrerPolicy}set referrerPolicy(l){this[INTERNALS].referrerPolicy=validateReferrerPolicy(l);}clone(){return new Jt(this)}get[Symbol.toStringTag](){return "Request"}};u$3(Jt$3,"Request");let Request$1=Jt$3;Object.defineProperties(Request$1.prototype,{method:{enumerable:!0},url:{enumerable:!0},headers:{enumerable:!0},redirect:{enumerable:!0},clone:{enumerable:!0},signal:{enumerable:!0},referrer:{enumerable:!0},referrerPolicy:{enumerable:!0}});const getNodeRequestOptions=u$3(c=>{const{parsedURL:l}=c[INTERNALS],d=new Headers$2(c[INTERNALS].headers);d.has("Accept")||d.set("Accept","*/*");let y=null;if(c.body===null&&/^(post|put)$/i.test(c.method)&&(y="0"),c.body!==null){const v=getTotalBytes(c);typeof v=="number"&&!Number.isNaN(v)&&(y=String(v));}y&&d.set("Content-Length",y),c.referrerPolicy===""&&(c.referrerPolicy=DEFAULT_REFERRER_POLICY),c.referrer&&c.referrer!=="no-referrer"?c[INTERNALS].referrer=determineRequestsReferrer(c):c[INTERNALS].referrer="no-referrer",c[INTERNALS].referrer instanceof URL&&d.set("Referer",c.referrer),d.has("User-Agent")||d.set("User-Agent","node-fetch"),c.compress&&!d.has("Accept-Encoding")&&d.set("Accept-Encoding","gzip, deflate, br");let{agent:b}=c;typeof b=="function"&&(b=b(l));const R=getSearch(l),w={path:l.pathname+R,method:c.method,headers:d[Symbol.for("nodejs.util.inspect.custom")](),insecureHTTPParser:c.insecureHTTPParser,agent:b};return {parsedURL:l,options:w}},"getNodeRequestOptions"),sn$1=class sn extends FetchBaseError{constructor(l,d="aborted"){super(l,d);}};u$3(sn$1,"AbortError");let AbortError=sn$1;/*! node-domexception. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */if(!globalThis.DOMException)try{const{MessageChannel:c}=require("worker_threads"),l=new c().port1,d=new ArrayBuffer;l.postMessage(d,[d,d]);}catch(c){c.constructor.name==="DOMException"&&(globalThis.DOMException=c.constructor);}var nodeDomexception=globalThis.DOMException;const DOMException$1=_commonjsHelpers.getDefaultExportFromCjs(nodeDomexception),{stat}=node_fs.promises,blobFromSync=u$3((c,l)=>fromBlob(node_fs.statSync(c),c,l),"blobFromSync"),blobFrom=u$3((c,l)=>stat(c).then(d=>fromBlob(d,c,l)),"blobFrom"),fileFrom=u$3((c,l)=>stat(c).then(d=>fromFile(d,c,l)),"fileFrom"),fileFromSync=u$3((c,l)=>fromFile(node_fs.statSync(c),c,l),"fileFromSync"),fromBlob=u$3((c,l,d="")=>new r$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],{type:d}),"fromBlob"),fromFile=u$3((c,l,d="")=>new File$1$1([new BlobDataItem({path:l,size:c.size,lastModified:c.mtimeMs,start:0})],node_path.basename(l),{type:d,lastModified:c.mtimeMs}),"fromFile"),Xt$3=class Xt{constructor(l){ye$3(this,Me$3,void 0);ye$3(this,xe$4,void 0);ne$4(this,Me$3,l.path),ne$4(this,xe$4,l.start),this.size=l.size,this.lastModified=l.lastModified;}slice(l,d){return new Xt({path:D$4(this,Me$3),lastModified:this.lastModified,size:d-l,start:D$4(this,xe$4)+l})}async*stream(){const{mtimeMs:l}=await stat(D$4(this,Me$3));if(l>this.lastModified)throw new DOMException$1("The requested file could not be read, typically due to permission problems that have occurred after a reference to a file was acquired.","NotReadableError");yield*node_fs.createReadStream(D$4(this,Me$3),{start:D$4(this,xe$4),end:D$4(this,xe$4)+this.size-1});}get[Symbol.toStringTag](){return "Blob"}};Me$3=new WeakMap,xe$4=new WeakMap,u$3(Xt$3,"BlobDataItem");let BlobDataItem=Xt$3;const supportedSchemas=new Set(["data:","http:","https:"]);async function fetch$1$1(c,l){return new Promise((d,y)=>{const b=new Request$1(c,l),{parsedURL:R,options:w}=getNodeRequestOptions(b);if(!supportedSchemas.has(R.protocol))throw new TypeError(`node-fetch cannot load ${c}. URL scheme "${R.protocol.replace(/:$/,"")}" is not supported.`);if(R.protocol==="data:"){const E=dataUriToBuffer(b.url),K=new Response$1(E,{headers:{"Content-Type":E.typeFull}});d(K);return}const v=(R.protocol==="https:"?https__default:http__default).request,{signal:I}=b;let B=null;const F=u$3(()=>{const E=new AbortError("The operation was aborted.");y(E),b.body&&b.body instanceof Stream__default.Readable&&b.body.destroy(E),!(!B||!B.body)&&B.body.emit("error",E);},"abort");if(I&&I.aborted){F();return}const k=u$3(()=>{F(),$();},"abortAndFinalize"),T=v(R.toString(),w);I&&I.addEventListener("abort",k);const $=u$3(()=>{T.abort(),I&&I.removeEventListener("abort",k);},"finalize");T.on("error",E=>{y(new FetchError$1(`request to ${b.url} failed, reason: ${E.message}`,"system",E)),$();}),fixResponseChunkedTransferBadEnding(T,E=>{B&&B.body&&B.body.destroy(E);}),process.version<"v14"&&T.on("socket",E=>{let K;E.prependListener("end",()=>{K=E._eventsCount;}),E.prependListener("close",U=>{if(B&&K<E._eventsCount&&!U){const N=new Error("Premature close");N.code="ERR_STREAM_PREMATURE_CLOSE",B.body.emit("error",N);}});}),T.on("response",E=>{T.setTimeout(0);const K=fromRawHeaders(E.rawHeaders);if(isRedirect(E.statusCode)){const M=K.get("Location");let H=null;try{H=M===null?null:new URL(M,b.url);}catch{if(b.redirect!=="manual"){y(new FetchError$1(`uri requested responds with an invalid redirect URL: ${M}`,"invalid-redirect")),$();return}}switch(b.redirect){case"error":y(new FetchError$1(`uri requested responds with a redirect, redirect mode is set to error: ${b.url}`,"no-redirect")),$();return;case"manual":break;case"follow":{if(H===null)break;if(b.counter>=b.follow){y(new FetchError$1(`maximum redirect reached at: ${b.url}`,"max-redirect")),$();return}const G={headers:new Headers$2(b.headers),follow:b.follow,counter:b.counter+1,agent:b.agent,compress:b.compress,method:b.method,body:clone(b),signal:b.signal,size:b.size,referrer:b.referrer,referrerPolicy:b.referrerPolicy};if(!isDomainOrSubdomain(b.url,H)||!isSameProtocol(b.url,H))for(const wt of ["authorization","www-authenticate","cookie","cookie2"])G.headers.delete(wt);if(E.statusCode!==303&&b.body&&l.body instanceof Stream__default.Readable){y(new FetchError$1("Cannot follow redirect with body being a readable stream","unsupported-redirect")),$();return}(E.statusCode===303||(E.statusCode===301||E.statusCode===302)&&b.method==="POST")&&(G.method="GET",G.body=void 0,G.headers.delete("content-length"));const Q=parseReferrerPolicyFromHeader(K);Q&&(G.referrerPolicy=Q),d(fetch$1$1(new Request$1(H,G))),$();return}default:return y(new TypeError(`Redirect option '${b.redirect}' is not a valid value of RequestRedirect`))}}I&&E.once("end",()=>{I.removeEventListener("abort",k);});let U=Stream.pipeline(E,new Stream.PassThrough,M=>{M&&y(M);});process.version<"v12.10"&&E.on("aborted",k);const N={url:b.url,status:E.statusCode,statusText:E.statusMessage,headers:K,size:b.size,counter:b.counter,highWaterMark:b.highWaterMark},J=K.get("Content-Encoding");if(!b.compress||b.method==="HEAD"||J===null||E.statusCode===204||E.statusCode===304){B=new Response$1(U,N),d(B);return}const ge={flush:zlib__default.Z_SYNC_FLUSH,finishFlush:zlib__default.Z_SYNC_FLUSH};if(J==="gzip"||J==="x-gzip"){U=Stream.pipeline(U,zlib__default.createGunzip(ge),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}if(J==="deflate"||J==="x-deflate"){const M=Stream.pipeline(E,new Stream.PassThrough,H=>{H&&y(H);});M.once("data",H=>{(H[0]&15)===8?U=Stream.pipeline(U,zlib__default.createInflate(),G=>{G&&y(G);}):U=Stream.pipeline(U,zlib__default.createInflateRaw(),G=>{G&&y(G);}),B=new Response$1(U,N),d(B);}),M.once("end",()=>{B||(B=new Response$1(U,N),d(B));});return}if(J==="br"){U=Stream.pipeline(U,zlib__default.createBrotliDecompress(),M=>{M&&y(M);}),B=new Response$1(U,N),d(B);return}B=new Response$1(U,N),d(B);}),writeToStream(T,b).catch(y);})}u$3(fetch$1$1,"fetch$1");function fixResponseChunkedTransferBadEnding(c,l){const d=require$$6.Buffer.from(`0\r
\r
`);let y=!1,b=!1,R;c.on("response",w=>{const{headers:v}=w;y=v["transfer-encoding"]==="chunked"&&!v["content-length"];}),c.on("socket",w=>{const v=u$3(()=>{if(y&&!b){const B=new Error("Premature close");B.code="ERR_STREAM_PREMATURE_CLOSE",l(B);}},"onSocketClose"),I=u$3(B=>{b=require$$6.Buffer.compare(B.slice(-5),d)===0,!b&&R&&(b=require$$6.Buffer.compare(R.slice(-3),d.slice(0,3))===0&&require$$6.Buffer.compare(B.slice(-2),d.slice(3))===0),R=B;},"onData");w.prependListener("close",v),w.on("data",I),c.on("close",()=>{w.removeListener("close",v),w.removeListener("data",I);});});}u$3(fixResponseChunkedTransferBadEnding,"fixResponseChunkedTransferBadEnding");const privateData=new WeakMap,wrappers=new WeakMap;function pd(c){const l=privateData.get(c);return console.assert(l!=null,"'this' is expected an Event object, but got",c),l}u$3(pd,"pd");function setCancelFlag(c){if(c.passiveListener!=null){typeof console<"u"&&typeof console.error=="function"&&console.error("Unable to preventDefault inside passive event listener invocation.",c.passiveListener);return}c.event.cancelable&&(c.canceled=!0,typeof c.event.preventDefault=="function"&&c.event.preventDefault());}u$3(setCancelFlag,"setCancelFlag");function Event$1(c,l){privateData.set(this,{eventTarget:c,event:l,eventPhase:2,currentTarget:c,canceled:!1,stopped:!1,immediateStopped:!1,passiveListener:null,timeStamp:l.timeStamp||Date.now()}),Object.defineProperty(this,"isTrusted",{value:!1,enumerable:!0});const d=Object.keys(l);for(let y=0;y<d.length;++y){const b=d[y];b in this||Object.defineProperty(this,b,defineRedirectDescriptor(b));}}u$3(Event$1,"Event"),Event$1.prototype={get type(){return pd(this).event.type},get target(){return pd(this).eventTarget},get currentTarget(){return pd(this).currentTarget},composedPath(){const c=pd(this).currentTarget;return c==null?[]:[c]},get NONE(){return 0},get CAPTURING_PHASE(){return 1},get AT_TARGET(){return 2},get BUBBLING_PHASE(){return 3},get eventPhase(){return pd(this).eventPhase},stopPropagation(){const c=pd(this);c.stopped=!0,typeof c.event.stopPropagation=="function"&&c.event.stopPropagation();},stopImmediatePropagation(){const c=pd(this);c.stopped=!0,c.immediateStopped=!0,typeof c.event.stopImmediatePropagation=="function"&&c.event.stopImmediatePropagation();},get bubbles(){return !!pd(this).event.bubbles},get cancelable(){return !!pd(this).event.cancelable},preventDefault(){setCancelFlag(pd(this));},get defaultPrevented(){return pd(this).canceled},get composed(){return !!pd(this).event.composed},get timeStamp(){return pd(this).timeStamp},get srcElement(){return pd(this).eventTarget},get cancelBubble(){return pd(this).stopped},set cancelBubble(c){if(!c)return;const l=pd(this);l.stopped=!0,typeof l.event.cancelBubble=="boolean"&&(l.event.cancelBubble=!0);},get returnValue(){return !pd(this).canceled},set returnValue(c){c||setCancelFlag(pd(this));},initEvent(){}},Object.defineProperty(Event$1.prototype,"constructor",{value:Event$1,configurable:!0,writable:!0});function defineRedirectDescriptor(c){return {get(){return pd(this).event[c]},set(l){pd(this).event[c]=l;},configurable:!0,enumerable:!0}}u$3(defineRedirectDescriptor,"defineRedirectDescriptor");function defineCallDescriptor(c){return {value(){const l=pd(this).event;return l[c].apply(l,arguments)},configurable:!0,enumerable:!0}}u$3(defineCallDescriptor,"defineCallDescriptor");function defineWrapper(c,l){const d=Object.keys(l);if(d.length===0)return c;function y(b,R){c.call(this,b,R);}u$3(y,"CustomEvent"),y.prototype=Object.create(c.prototype,{constructor:{value:y,configurable:!0,writable:!0}});for(let b=0;b<d.length;++b){const R=d[b];if(!(R in c.prototype)){const v=typeof Object.getOwnPropertyDescriptor(l,R).value=="function";Object.defineProperty(y.prototype,R,v?defineCallDescriptor(R):defineRedirectDescriptor(R));}}return y}u$3(defineWrapper,"defineWrapper");function getWrapper(c){if(c==null||c===Object.prototype)return Event$1;let l=wrappers.get(c);return l==null&&(l=defineWrapper(getWrapper(Object.getPrototypeOf(c)),c),wrappers.set(c,l)),l}u$3(getWrapper,"getWrapper");function wrapEvent(c,l){const d=getWrapper(Object.getPrototypeOf(l));return new d(c,l)}u$3(wrapEvent,"wrapEvent");function isStopped(c){return pd(c).immediateStopped}u$3(isStopped,"isStopped");function setEventPhase(c,l){pd(c).eventPhase=l;}u$3(setEventPhase,"setEventPhase");function setCurrentTarget(c,l){pd(c).currentTarget=l;}u$3(setCurrentTarget,"setCurrentTarget");function setPassiveListener(c,l){pd(c).passiveListener=l;}u$3(setPassiveListener,"setPassiveListener");const listenersMap=new WeakMap,CAPTURE=1,BUBBLE=2,ATTRIBUTE=3;function isObject(c){return c!==null&&typeof c=="object"}u$3(isObject,"isObject");function getListeners(c){const l=listenersMap.get(c);if(l==null)throw new TypeError("'this' is expected an EventTarget object, but got another value.");return l}u$3(getListeners,"getListeners");function defineEventAttributeDescriptor(c){return {get(){let d=getListeners(this).get(c);for(;d!=null;){if(d.listenerType===ATTRIBUTE)return d.listener;d=d.next;}return null},set(l){typeof l!="function"&&!isObject(l)&&(l=null);const d=getListeners(this);let y=null,b=d.get(c);for(;b!=null;)b.listenerType===ATTRIBUTE?y!==null?y.next=b.next:b.next!==null?d.set(c,b.next):d.delete(c):y=b,b=b.next;if(l!==null){const R={listener:l,listenerType:ATTRIBUTE,passive:!1,once:!1,next:null};y===null?d.set(c,R):y.next=R;}},configurable:!0,enumerable:!0}}u$3(defineEventAttributeDescriptor,"defineEventAttributeDescriptor");function defineEventAttribute(c,l){Object.defineProperty(c,`on${l}`,defineEventAttributeDescriptor(l));}u$3(defineEventAttribute,"defineEventAttribute");function defineCustomEventTarget(c){function l(){EventTarget.call(this);}u$3(l,"CustomEventTarget"),l.prototype=Object.create(EventTarget.prototype,{constructor:{value:l,configurable:!0,writable:!0}});for(let d=0;d<c.length;++d)defineEventAttribute(l.prototype,c[d]);return l}u$3(defineCustomEventTarget,"defineCustomEventTarget");function EventTarget(){if(this instanceof EventTarget){listenersMap.set(this,new Map);return}if(arguments.length===1&&Array.isArray(arguments[0]))return defineCustomEventTarget(arguments[0]);if(arguments.length>0){const c=new Array(arguments.length);for(let l=0;l<arguments.length;++l)c[l]=arguments[l];return defineCustomEventTarget(c)}throw new TypeError("Cannot call a class as a function")}u$3(EventTarget,"EventTarget"),EventTarget.prototype={addEventListener(c,l,d){if(l==null)return;if(typeof l!="function"&&!isObject(l))throw new TypeError("'listener' should be a function or an object.");const y=getListeners(this),b=isObject(d),w=(b?!!d.capture:!!d)?CAPTURE:BUBBLE,v={listener:l,listenerType:w,passive:b&&!!d.passive,once:b&&!!d.once,next:null};let I=y.get(c);if(I===void 0){y.set(c,v);return}let B=null;for(;I!=null;){if(I.listener===l&&I.listenerType===w)return;B=I,I=I.next;}B.next=v;},removeEventListener(c,l,d){if(l==null)return;const y=getListeners(this),R=(isObject(d)?!!d.capture:!!d)?CAPTURE:BUBBLE;let w=null,v=y.get(c);for(;v!=null;){if(v.listener===l&&v.listenerType===R){w!==null?w.next=v.next:v.next!==null?y.set(c,v.next):y.delete(c);return}w=v,v=v.next;}},dispatchEvent(c){if(c==null||typeof c.type!="string")throw new TypeError('"event.type" should be a string.');const l=getListeners(this),d=c.type;let y=l.get(d);if(y==null)return !0;const b=wrapEvent(this,c);let R=null;for(;y!=null;){if(y.once?R!==null?R.next=y.next:y.next!==null?l.set(d,y.next):l.delete(d):R=y,setPassiveListener(b,y.passive?y.listener:null),typeof y.listener=="function")try{y.listener.call(this,b);}catch(w){typeof console<"u"&&typeof console.error=="function"&&console.error(w);}else y.listenerType!==ATTRIBUTE&&typeof y.listener.handleEvent=="function"&&y.listener.handleEvent(b);if(isStopped(b))break;y=y.next;}return setPassiveListener(b,null),setEventPhase(b,0),setCurrentTarget(b,null),!b.defaultPrevented}},Object.defineProperty(EventTarget.prototype,"constructor",{value:EventTarget,configurable:!0,writable:!0});const an$1=class an extends EventTarget{constructor(){throw super(),new TypeError("AbortSignal cannot be constructed directly")}get aborted(){const l=abortedFlags.get(this);if(typeof l!="boolean")throw new TypeError(`Expected 'this' to be an 'AbortSignal' object, but got ${this===null?"null":typeof this}`);return l}};u$3(an$1,"AbortSignal");let AbortSignal=an$1;defineEventAttribute(AbortSignal.prototype,"abort");function createAbortSignal(){const c=Object.create(AbortSignal.prototype);return EventTarget.call(c),abortedFlags.set(c,!1),c}u$3(createAbortSignal,"createAbortSignal");function abortSignal(c){abortedFlags.get(c)===!1&&(abortedFlags.set(c,!0),c.dispatchEvent({type:"abort"}));}u$3(abortSignal,"abortSignal");const abortedFlags=new WeakMap;Object.defineProperties(AbortSignal.prototype,{aborted:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortSignal.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortSignal"});let AbortController$1$1=(St$3=class{constructor(){signals.set(this,createAbortSignal());}get signal(){return getSignal(this)}abort(){abortSignal(getSignal(this));}},u$3(St$3,"AbortController"),St$3);const signals=new WeakMap;function getSignal(c){const l=signals.get(c);if(l==null)throw new TypeError(`Expected 'this' to be an 'AbortController' object, but got ${c===null?"null":typeof c}`);return l}u$3(getSignal,"getSignal"),Object.defineProperties(AbortController$1$1.prototype,{signal:{enumerable:!0},abort:{enumerable:!0}}),typeof Symbol=="function"&&typeof Symbol.toStringTag=="symbol"&&Object.defineProperty(AbortController$1$1.prototype,Symbol.toStringTag,{configurable:!0,value:"AbortController"});var t$3=Object.defineProperty,e$4=u$3((c,l)=>t$3(c,"name",{value:l,configurable:!0}),"e");const fetch$2=fetch$1$1;s$4();function s$4(){!globalThis.process?.versions?.node&&!globalThis.process?.env.DISABLE_NODE_FETCH_NATIVE_WARN&&console.warn("[node-fetch-native] Node.js compatible build of `node-fetch-native` is being used in a non-Node.js environment. Please make sure you are using proper export conditions or report this issue to https://github.com/unjs/node-fetch-native. You can set `process.env.DISABLE_NODE_FETCH_NATIVE_WARN` to disable this warning.");}u$3(s$4,"s"),e$4(s$4,"checkNodeEnvironment"),node$1.AbortController=AbortController$1$1,node$1.AbortError=AbortError,node$1.Blob=r$1,node$1.FetchError=FetchError$1,node$1.File=File$1$1,node$1.FormData=FormData$1,node$1.Headers=Headers$2,node$1.Request=Request$1,node$1.Response=Response$1,node$1.blobFrom=blobFrom,node$1.blobFromSync=blobFromSync,node$1.default=fetch$2,node$1.fetch=fetch$2,node$1.fileFrom=fileFrom,node$1.fileFromSync=fileFromSync,node$1.isRedirect=isRedirect;

var n$4=Object.defineProperty;var i$4=(r,o)=>n$4(r,"name",{value:o,configurable:!0});const node=node$1;var t$2=Object.defineProperty,a$2=i$4((r,o)=>t$2(r,"name",{value:o,configurable:!0}),"a");function e$3(r,o){if(!(r in globalThis))try{globalThis[r]=o;}catch{}}i$4(e$3,"e"),a$2(e$3,"polyfill"),e$3("fetch",node.fetch),e$3("Blob",node.Blob),e$3("File",node.File),e$3("FormData",node.FormData),e$3("Headers",node.Headers),e$3("Request",node.Request),e$3("Response",node.Response),e$3("AbortController",node.AbortController);

const suspectProtoRx = /"(?:_|\\u0{2}5[Ff]){2}(?:p|\\u0{2}70)(?:r|\\u0{2}72)(?:o|\\u0{2}6[Ff])(?:t|\\u0{2}74)(?:o|\\u0{2}6[Ff])(?:_|\\u0{2}5[Ff]){2}"\s*:/;
const suspectConstructorRx = /"(?:c|\\u0063)(?:o|\\u006[Ff])(?:n|\\u006[Ee])(?:s|\\u0073)(?:t|\\u0074)(?:r|\\u0072)(?:u|\\u0075)(?:c|\\u0063)(?:t|\\u0074)(?:o|\\u006[Ff])(?:r|\\u0072)"\s*:/;
const JsonSigRx = /^\s*["[{]|^\s*-?\d{1,16}(\.\d{1,17})?([Ee][+-]?\d+)?\s*$/;
function jsonParseTransform(key, value) {
  if (key === "__proto__" || key === "constructor" && value && typeof value === "object" && "prototype" in value) {
    warnKeyDropped(key);
    return;
  }
  return value;
}
function warnKeyDropped(key) {
  console.warn(`[destr] Dropping "${key}" key to prevent prototype pollution.`);
}
function destr(value, options = {}) {
  if (typeof value !== "string") {
    return value;
  }
  const _value = value.trim();
  if (
    // eslint-disable-next-line unicorn/prefer-at
    value[0] === '"' && value.endsWith('"') && !value.includes("\\")
  ) {
    return _value.slice(1, -1);
  }
  if (_value.length <= 9) {
    const _lval = _value.toLowerCase();
    if (_lval === "true") {
      return true;
    }
    if (_lval === "false") {
      return false;
    }
    if (_lval === "undefined") {
      return void 0;
    }
    if (_lval === "null") {
      return null;
    }
    if (_lval === "nan") {
      return Number.NaN;
    }
    if (_lval === "infinity") {
      return Number.POSITIVE_INFINITY;
    }
    if (_lval === "-infinity") {
      return Number.NEGATIVE_INFINITY;
    }
  }
  if (!JsonSigRx.test(value)) {
    if (options.strict) {
      throw new SyntaxError("[destr] Invalid JSON");
    }
    return value;
  }
  try {
    if (suspectProtoRx.test(value) || suspectConstructorRx.test(value)) {
      if (options.strict) {
        throw new Error("[destr] Possible prototype pollution");
      }
      return JSON.parse(value, jsonParseTransform);
    }
    return JSON.parse(value);
  } catch (error) {
    if (options.strict) {
      throw error;
    }
    return value;
  }
}

const HASH_RE = /#/g;
const AMPERSAND_RE = /&/g;
const SLASH_RE = /\//g;
const EQUAL_RE = /=/g;
const PLUS_RE = /\+/g;
const ENC_CARET_RE = /%5e/gi;
const ENC_BACKTICK_RE = /%60/gi;
const ENC_PIPE_RE = /%7c/gi;
const ENC_SPACE_RE = /%20/gi;
const ENC_SLASH_RE = /%2f/gi;
function encode(text) {
  return encodeURI("" + text).replace(ENC_PIPE_RE, "|");
}
function encodeQueryValue(input) {
  return encode(typeof input === "string" ? input : JSON.stringify(input)).replace(PLUS_RE, "%2B").replace(ENC_SPACE_RE, "+").replace(HASH_RE, "%23").replace(AMPERSAND_RE, "%26").replace(ENC_BACKTICK_RE, "`").replace(ENC_CARET_RE, "^").replace(SLASH_RE, "%2F");
}
function encodeQueryKey(text) {
  return encodeQueryValue(text).replace(EQUAL_RE, "%3D");
}
function decode$1(text = "") {
  try {
    return decodeURIComponent("" + text);
  } catch {
    return "" + text;
  }
}
function decodePath(text) {
  return decode$1(text.replace(ENC_SLASH_RE, "%252F"));
}
function decodeQueryKey(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}
function decodeQueryValue(text) {
  return decode$1(text.replace(PLUS_RE, " "));
}

function parseQuery(parametersString = "") {
  const object = {};
  if (parametersString[0] === "?") {
    parametersString = parametersString.slice(1);
  }
  for (const parameter of parametersString.split("&")) {
    const s = parameter.match(/([^=]+)=?(.*)/) || [];
    if (s.length < 2) {
      continue;
    }
    const key = decodeQueryKey(s[1]);
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = decodeQueryValue(s[2] || "");
    if (object[key] === void 0) {
      object[key] = value;
    } else if (Array.isArray(object[key])) {
      object[key].push(value);
    } else {
      object[key] = [object[key], value];
    }
  }
  return object;
}
function encodeQueryItem(key, value) {
  if (typeof value === "number" || typeof value === "boolean") {
    value = String(value);
  }
  if (!value) {
    return encodeQueryKey(key);
  }
  if (Array.isArray(value)) {
    return value.map((_value) => `${encodeQueryKey(key)}=${encodeQueryValue(_value)}`).join("&");
  }
  return `${encodeQueryKey(key)}=${encodeQueryValue(value)}`;
}
function stringifyQuery(query) {
  return Object.keys(query).filter((k) => query[k] !== void 0).map((k) => encodeQueryItem(k, query[k])).filter(Boolean).join("&");
}

const PROTOCOL_STRICT_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{1,2})/;
const PROTOCOL_REGEX = /^[\s\w\0+.-]{2,}:([/\\]{2})?/;
const PROTOCOL_RELATIVE_REGEX = /^([/\\]\s*){2,}[^/\\]/;
const JOIN_LEADING_SLASH_RE = /^\.?\//;
function hasProtocol(inputString, opts = {}) {
  if (typeof opts === "boolean") {
    opts = { acceptRelative: opts };
  }
  if (opts.strict) {
    return PROTOCOL_STRICT_REGEX.test(inputString);
  }
  return PROTOCOL_REGEX.test(inputString) || (opts.acceptRelative ? PROTOCOL_RELATIVE_REGEX.test(inputString) : false);
}
function hasTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/");
  }
}
function withoutTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return (hasTrailingSlash(input) ? input.slice(0, -1) : input) || "/";
  }
}
function withTrailingSlash(input = "", respectQueryAndFragment) {
  {
    return input.endsWith("/") ? input : input + "/";
  }
}
function hasLeadingSlash(input = "") {
  return input.startsWith("/");
}
function withLeadingSlash(input = "") {
  return hasLeadingSlash(input) ? input : "/" + input;
}
function withBase(input, base) {
  if (isEmptyURL(base) || hasProtocol(input)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (input.startsWith(_base)) {
    return input;
  }
  return joinURL(_base, input);
}
function withoutBase(input, base) {
  if (isEmptyURL(base)) {
    return input;
  }
  const _base = withoutTrailingSlash(base);
  if (!input.startsWith(_base)) {
    return input;
  }
  const trimmed = input.slice(_base.length);
  return trimmed[0] === "/" ? trimmed : "/" + trimmed;
}
function withQuery(input, query) {
  const parsed = parseURL(input);
  const mergedQuery = { ...parseQuery(parsed.search), ...query };
  parsed.search = stringifyQuery(mergedQuery);
  return stringifyParsedURL(parsed);
}
function getQuery(input) {
  return parseQuery(parseURL(input).search);
}
function isEmptyURL(url) {
  return !url || url === "/";
}
function isNonEmptyURL(url) {
  return url && url !== "/";
}
function joinURL(base, ...input) {
  let url = base || "";
  for (const segment of input.filter((url2) => isNonEmptyURL(url2))) {
    if (url) {
      const _segment = segment.replace(JOIN_LEADING_SLASH_RE, "");
      url = withTrailingSlash(url) + _segment;
    } else {
      url = segment;
    }
  }
  return url;
}

const protocolRelative = Symbol.for("ufo:protocolRelative");
function parseURL(input = "", defaultProto) {
  const _specialProtoMatch = input.match(
    /^[\s\0]*(blob:|data:|javascript:|vbscript:)(.*)/i
  );
  if (_specialProtoMatch) {
    const [, _proto, _pathname = ""] = _specialProtoMatch;
    return {
      protocol: _proto.toLowerCase(),
      pathname: _pathname,
      href: _proto + _pathname,
      auth: "",
      host: "",
      search: "",
      hash: ""
    };
  }
  if (!hasProtocol(input, { acceptRelative: true })) {
    return defaultProto ? parseURL(defaultProto + input) : parsePath(input);
  }
  const [, protocol = "", auth, hostAndPath = ""] = input.replace(/\\/g, "/").match(/^[\s\0]*([\w+.-]{2,}:)?\/\/([^/@]+@)?(.*)/) || [];
  let [, host = "", path = ""] = hostAndPath.match(/([^#/?]*)(.*)?/) || [];
  if (protocol === "file:") {
    path = path.replace(/\/(?=[A-Za-z]:)/, "");
  }
  const { pathname, search, hash } = parsePath(path);
  return {
    protocol: protocol.toLowerCase(),
    auth: auth ? auth.slice(0, Math.max(0, auth.length - 1)) : "",
    host,
    pathname,
    search,
    hash,
    [protocolRelative]: !protocol
  };
}
function parsePath(input = "") {
  const [pathname = "", search = "", hash = ""] = (input.match(/([^#?]*)(\?[^#]*)?(#.*)?/) || []).splice(1);
  return {
    pathname,
    search,
    hash
  };
}
function stringifyParsedURL(parsed) {
  const pathname = parsed.pathname || "";
  const search = parsed.search ? (parsed.search.startsWith("?") ? "" : "?") + parsed.search : "";
  const hash = parsed.hash || "";
  const auth = parsed.auth ? parsed.auth + "@" : "";
  const host = parsed.host || "";
  const proto = parsed.protocol || parsed[protocolRelative] ? (parsed.protocol || "") + "//" : "";
  return proto + auth + host + pathname + search + hash;
}

function parse(str, options) {
  if (typeof str !== "string") {
    throw new TypeError("argument str must be a string");
  }
  const obj = {};
  const opt = {};
  const dec = opt.decode || decode;
  let index = 0;
  while (index < str.length) {
    const eqIdx = str.indexOf("=", index);
    if (eqIdx === -1) {
      break;
    }
    let endIdx = str.indexOf(";", index);
    if (endIdx === -1) {
      endIdx = str.length;
    } else if (endIdx < eqIdx) {
      index = str.lastIndexOf(";", eqIdx - 1) + 1;
      continue;
    }
    const key = str.slice(index, eqIdx).trim();
    if (opt?.filter && !opt?.filter(key)) {
      index = endIdx + 1;
      continue;
    }
    if (void 0 === obj[key]) {
      let val = str.slice(eqIdx + 1, endIdx).trim();
      if (val.codePointAt(0) === 34) {
        val = val.slice(1, -1);
      }
      obj[key] = tryDecode(val, dec);
    }
    index = endIdx + 1;
  }
  return obj;
}
function decode(str) {
  return str.includes("%") ? decodeURIComponent(str) : str;
}
function tryDecode(str, decode2) {
  try {
    return decode2(str);
  } catch {
    return str;
  }
}

const fieldContentRegExp = /^[\u0009\u0020-\u007E\u0080-\u00FF]+$/;
function serialize(name, value, options) {
  const opt = options || {};
  const enc = opt.encode || encodeURIComponent;
  if (typeof enc !== "function") {
    throw new TypeError("option encode is invalid");
  }
  if (!fieldContentRegExp.test(name)) {
    throw new TypeError("argument name is invalid");
  }
  const encodedValue = enc(value);
  if (encodedValue && !fieldContentRegExp.test(encodedValue)) {
    throw new TypeError("argument val is invalid");
  }
  let str = name + "=" + encodedValue;
  if (void 0 !== opt.maxAge && opt.maxAge !== null) {
    const maxAge = opt.maxAge - 0;
    if (Number.isNaN(maxAge) || !Number.isFinite(maxAge)) {
      throw new TypeError("option maxAge is invalid");
    }
    str += "; Max-Age=" + Math.floor(maxAge);
  }
  if (opt.domain) {
    if (!fieldContentRegExp.test(opt.domain)) {
      throw new TypeError("option domain is invalid");
    }
    str += "; Domain=" + opt.domain;
  }
  if (opt.path) {
    if (!fieldContentRegExp.test(opt.path)) {
      throw new TypeError("option path is invalid");
    }
    str += "; Path=" + opt.path;
  }
  if (opt.expires) {
    if (!isDate(opt.expires) || Number.isNaN(opt.expires.valueOf())) {
      throw new TypeError("option expires is invalid");
    }
    str += "; Expires=" + opt.expires.toUTCString();
  }
  if (opt.httpOnly) {
    str += "; HttpOnly";
  }
  if (opt.secure) {
    str += "; Secure";
  }
  if (opt.priority) {
    const priority = typeof opt.priority === "string" ? opt.priority.toLowerCase() : opt.priority;
    switch (priority) {
      case "low": {
        str += "; Priority=Low";
        break;
      }
      case "medium": {
        str += "; Priority=Medium";
        break;
      }
      case "high": {
        str += "; Priority=High";
        break;
      }
      default: {
        throw new TypeError("option priority is invalid");
      }
    }
  }
  if (opt.sameSite) {
    const sameSite = typeof opt.sameSite === "string" ? opt.sameSite.toLowerCase() : opt.sameSite;
    switch (sameSite) {
      case true: {
        str += "; SameSite=Strict";
        break;
      }
      case "lax": {
        str += "; SameSite=Lax";
        break;
      }
      case "strict": {
        str += "; SameSite=Strict";
        break;
      }
      case "none": {
        str += "; SameSite=None";
        break;
      }
      default: {
        throw new TypeError("option sameSite is invalid");
      }
    }
  }
  if (opt.partitioned) {
    str += "; Partitioned";
  }
  return str;
}
function isDate(val) {
  return Object.prototype.toString.call(val) === "[object Date]" || val instanceof Date;
}

const defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
const defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex) {
      return write("regex:" + regex.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
const nativeFunc = "[native code] }";
const nativeFuncLength = nativeFunc.length;
function isNativeFunction(f) {
  if (typeof f !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f).slice(-nativeFuncLength) === nativeFunc;
}

class WordArray {
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i = 0; i < wordArray.sigBytes; i++) {
        const thatByte = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
        this.words[this.sigBytes + i >>> 2] |= thatByte << 24 - (this.sigBytes + i) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new WordArray([...this.words]);
  }
}
const Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i = 0; i < wordArray.sigBytes; i++) {
      const bite = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
const Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i = 0; i < wordArray.sigBytes; i += 3) {
      const byte1 = wordArray.words[i >>> 2] >>> 24 - i % 4 * 8 & 255;
      const byte2 = wordArray.words[i + 1 >>> 2] >>> 24 - (i + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i + 2 >>> 2] >>> 24 - (i + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
const Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i = 0; i < latin1StrLength; i++) {
      words[i >>> 2] |= (latin1Str.charCodeAt(i) & 255) << 24 - i % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
const Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
class BufferedBlockAlgorithm {
  constructor() {
    this._data = new WordArray();
    this._nDataBytes = 0;
    this._minBufferSize = 0;
    this.blockSize = 512 / 32;
  }
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
}
class Hasher extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
}

const H$3 = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
const K$5 = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
const W$3 = [];
class SHA256 extends Hasher {
  constructor() {
    super(...arguments);
    this._hash = new WordArray([...H$3]);
  }
  reset() {
    super.reset();
    this._hash = new WordArray([...H$3]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a = H2[0];
    let b = H2[1];
    let c = H2[2];
    let d = H2[3];
    let e = H2[4];
    let f = H2[5];
    let g = H2[6];
    let h = H2[7];
    for (let i = 0; i < 64; i++) {
      if (i < 16) {
        W$3[i] = M[offset + i] | 0;
      } else {
        const gamma0x = W$3[i - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W$3[i - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W$3[i] = gamma0 + W$3[i - 7] + gamma1 + W$3[i - 16];
      }
      const ch = e & f ^ ~e & g;
      const maj = a & b ^ a & c ^ b & c;
      const sigma0 = (a << 30 | a >>> 2) ^ (a << 19 | a >>> 13) ^ (a << 10 | a >>> 22);
      const sigma1 = (e << 26 | e >>> 6) ^ (e << 21 | e >>> 11) ^ (e << 7 | e >>> 25);
      const t1 = h + sigma1 + ch + K$5[i] + W$3[i];
      const t2 = sigma0 + maj;
      h = g;
      g = f;
      f = e;
      e = d + t1 | 0;
      d = c;
      c = b;
      b = a;
      a = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a | 0;
    H2[1] = H2[1] + b | 0;
    H2[2] = H2[2] + c | 0;
    H2[3] = H2[3] + d | 0;
    H2[4] = H2[4] + e | 0;
    H2[5] = H2[5] + f | 0;
    H2[6] = H2[6] + g | 0;
    H2[7] = H2[7] + h | 0;
  }
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
}
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}

function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

const NODE_TYPES = {
  NORMAL: 0,
  WILDCARD: 1,
  PLACEHOLDER: 2
};

function createRouter$1(options = {}) {
  const ctx = {
    options,
    rootNode: createRadixNode(),
    staticRoutesMap: {}
  };
  const normalizeTrailingSlash = (p) => options.strictTrailingSlash ? p : p.replace(/\/$/, "") || "/";
  if (options.routes) {
    for (const path in options.routes) {
      insert(ctx, normalizeTrailingSlash(path), options.routes[path]);
    }
  }
  return {
    ctx,
    lookup: (path) => lookup(ctx, normalizeTrailingSlash(path)),
    insert: (path, data) => insert(ctx, normalizeTrailingSlash(path), data),
    remove: (path) => remove(ctx, normalizeTrailingSlash(path))
  };
}
function lookup(ctx, path) {
  const staticPathNode = ctx.staticRoutesMap[path];
  if (staticPathNode) {
    return staticPathNode.data;
  }
  const sections = path.split("/");
  const params = {};
  let paramsFound = false;
  let wildcardNode = null;
  let node = ctx.rootNode;
  let wildCardParam = null;
  for (let i = 0; i < sections.length; i++) {
    const section = sections[i];
    if (node.wildcardChildNode !== null) {
      wildcardNode = node.wildcardChildNode;
      wildCardParam = sections.slice(i).join("/");
    }
    const nextNode = node.children.get(section);
    if (nextNode === void 0) {
      if (node && node.placeholderChildren.length > 1) {
        const remaining = sections.length - i;
        node = node.placeholderChildren.find((c) => c.maxDepth === remaining) || null;
      } else {
        node = node.placeholderChildren[0] || null;
      }
      if (!node) {
        break;
      }
      if (node.paramName) {
        params[node.paramName] = section;
      }
      paramsFound = true;
    } else {
      node = nextNode;
    }
  }
  if ((node === null || node.data === null) && wildcardNode !== null) {
    node = wildcardNode;
    params[node.paramName || "_"] = wildCardParam;
    paramsFound = true;
  }
  if (!node) {
    return null;
  }
  if (paramsFound) {
    return {
      ...node.data,
      params: paramsFound ? params : void 0
    };
  }
  return node.data;
}
function insert(ctx, path, data) {
  let isStaticRoute = true;
  const sections = path.split("/");
  let node = ctx.rootNode;
  let _unnamedPlaceholderCtr = 0;
  const matchedNodes = [node];
  for (const section of sections) {
    let childNode;
    if (childNode = node.children.get(section)) {
      node = childNode;
    } else {
      const type = getNodeType(section);
      childNode = createRadixNode({ type, parent: node });
      node.children.set(section, childNode);
      if (type === NODE_TYPES.PLACEHOLDER) {
        childNode.paramName = section === "*" ? `_${_unnamedPlaceholderCtr++}` : section.slice(1);
        node.placeholderChildren.push(childNode);
        isStaticRoute = false;
      } else if (type === NODE_TYPES.WILDCARD) {
        node.wildcardChildNode = childNode;
        childNode.paramName = section.slice(
          3
          /* "**:" */
        ) || "_";
        isStaticRoute = false;
      }
      matchedNodes.push(childNode);
      node = childNode;
    }
  }
  for (const [depth, node2] of matchedNodes.entries()) {
    node2.maxDepth = Math.max(matchedNodes.length - depth, node2.maxDepth || 0);
  }
  node.data = data;
  if (isStaticRoute === true) {
    ctx.staticRoutesMap[path] = node;
  }
  return node;
}
function remove(ctx, path) {
  let success = false;
  const sections = path.split("/");
  let node = ctx.rootNode;
  for (const section of sections) {
    node = node.children.get(section);
    if (!node) {
      return success;
    }
  }
  if (node.data) {
    const lastSection = sections.at(-1) || "";
    node.data = null;
    if (Object.keys(node.children).length === 0 && node.parent) {
      node.parent.children.delete(lastSection);
      node.parent.wildcardChildNode = null;
      node.parent.placeholderChildren = [];
    }
    success = true;
  }
  return success;
}
function createRadixNode(options = {}) {
  return {
    type: options.type || NODE_TYPES.NORMAL,
    maxDepth: 0,
    parent: options.parent || null,
    children: /* @__PURE__ */ new Map(),
    data: options.data || null,
    paramName: options.paramName || null,
    wildcardChildNode: null,
    placeholderChildren: []
  };
}
function getNodeType(str) {
  if (str.startsWith("**")) {
    return NODE_TYPES.WILDCARD;
  }
  if (str[0] === ":" || str === "*") {
    return NODE_TYPES.PLACEHOLDER;
  }
  return NODE_TYPES.NORMAL;
}

function toRouteMatcher(router) {
  const table = _routerNodeToTable("", router.ctx.rootNode);
  return _createMatcher(table, router.ctx.options.strictTrailingSlash);
}
function _createMatcher(table, strictTrailingSlash) {
  return {
    ctx: { table },
    matchAll: (path) => _matchRoutes(path, table, strictTrailingSlash)
  };
}
function _createRouteTable() {
  return {
    static: /* @__PURE__ */ new Map(),
    wildcard: /* @__PURE__ */ new Map(),
    dynamic: /* @__PURE__ */ new Map()
  };
}
function _matchRoutes(path, table, strictTrailingSlash) {
  if (strictTrailingSlash !== true && path.endsWith("/")) {
    path = path.slice(0, -1) || "/";
  }
  const matches = [];
  for (const [key, value] of _sortRoutesMap(table.wildcard)) {
    if (path === key || path.startsWith(key + "/")) {
      matches.push(value);
    }
  }
  for (const [key, value] of _sortRoutesMap(table.dynamic)) {
    if (path.startsWith(key + "/")) {
      const subPath = "/" + path.slice(key.length).split("/").splice(2).join("/");
      matches.push(..._matchRoutes(subPath, value));
    }
  }
  const staticMatch = table.static.get(path);
  if (staticMatch) {
    matches.push(staticMatch);
  }
  return matches.filter(Boolean);
}
function _sortRoutesMap(m) {
  return [...m.entries()].sort((a, b) => a[0].length - b[0].length);
}
function _routerNodeToTable(initialPath, initialNode) {
  const table = _createRouteTable();
  function _addNode(path, node) {
    if (path) {
      if (node.type === NODE_TYPES.NORMAL && !(path.includes("*") || path.includes(":"))) {
        if (node.data) {
          table.static.set(path, node.data);
        }
      } else if (node.type === NODE_TYPES.WILDCARD) {
        table.wildcard.set(path.replace("/**", ""), node.data);
      } else if (node.type === NODE_TYPES.PLACEHOLDER) {
        const subTable = _routerNodeToTable("", node);
        if (node.data) {
          subTable.static.set("/", node.data);
        }
        table.dynamic.set(path.replace(/\/\*|\/:\w+/, ""), subTable);
        return;
      }
    }
    for (const [childPath, child] of node.children.entries()) {
      _addNode(`${path}/${childPath}`.replace("//", "/"), child);
    }
  }
  _addNode(initialPath, initialNode);
  return table;
}

function isPlainObject(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}

function _defu(baseObject, defaults, namespace = ".", merger) {
  if (!isPlainObject(defaults)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject(value) && isPlainObject(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c) => _defu(p, c, "", merger), {})
  );
}
const defu = createDefu();
const defuFn = createDefu((object, key, currentValue) => {
  if (object[key] !== void 0 && typeof currentValue === "function") {
    object[key] = currentValue(object[key]);
    return true;
  }
});

function rawHeaders(headers) {
  const rawHeaders2 = [];
  for (const key in headers) {
    if (Array.isArray(headers[key])) {
      for (const h of headers[key]) {
        rawHeaders2.push(key, h);
      }
    } else {
      rawHeaders2.push(key, headers[key]);
    }
  }
  return rawHeaders2;
}
function mergeFns(...functions) {
  return function(...args) {
    for (const fn of functions) {
      fn(...args);
    }
  };
}
function createNotImplementedError(name) {
  throw new Error(`[unenv] ${name} is not implemented yet!`);
}

let defaultMaxListeners = 10;
let EventEmitter$1 = class EventEmitter {
  __unenv__ = true;
  _events = /* @__PURE__ */ Object.create(null);
  _maxListeners;
  static get defaultMaxListeners() {
    return defaultMaxListeners;
  }
  static set defaultMaxListeners(arg) {
    if (typeof arg !== "number" || arg < 0 || Number.isNaN(arg)) {
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + "."
      );
    }
    defaultMaxListeners = arg;
  }
  setMaxListeners(n) {
    if (typeof n !== "number" || n < 0 || Number.isNaN(n)) {
      throw new RangeError(
        'The value of "n" is out of range. It must be a non-negative number. Received ' + n + "."
      );
    }
    this._maxListeners = n;
    return this;
  }
  getMaxListeners() {
    return _getMaxListeners(this);
  }
  emit(type, ...args) {
    if (!this._events[type] || this._events[type].length === 0) {
      return false;
    }
    if (type === "error") {
      let er;
      if (args.length > 0) {
        er = args[0];
      }
      if (er instanceof Error) {
        throw er;
      }
      const err = new Error(
        "Unhandled error." + (er ? " (" + er.message + ")" : "")
      );
      err.context = er;
      throw err;
    }
    for (const _listener of this._events[type]) {
      (_listener.listener || _listener).apply(this, args);
    }
    return true;
  }
  addListener(type, listener) {
    return _addListener(this, type, listener, false);
  }
  on(type, listener) {
    return _addListener(this, type, listener, false);
  }
  prependListener(type, listener) {
    return _addListener(this, type, listener, true);
  }
  once(type, listener) {
    return this.on(type, _wrapOnce(this, type, listener));
  }
  prependOnceListener(type, listener) {
    return this.prependListener(type, _wrapOnce(this, type, listener));
  }
  removeListener(type, listener) {
    return _removeListener(this, type, listener);
  }
  off(type, listener) {
    return this.removeListener(type, listener);
  }
  removeAllListeners(type) {
    return _removeAllListeners(this, type);
  }
  listeners(type) {
    return _listeners(this, type, true);
  }
  rawListeners(type) {
    return _listeners(this, type, false);
  }
  listenerCount(type) {
    return this.rawListeners(type).length;
  }
  eventNames() {
    return Object.keys(this._events);
  }
};
function _addListener(target, type, listener, prepend) {
  _checkListener(listener);
  if (target._events.newListener !== void 0) {
    target.emit("newListener", type, listener.listener || listener);
  }
  if (!target._events[type]) {
    target._events[type] = [];
  }
  if (prepend) {
    target._events[type].unshift(listener);
  } else {
    target._events[type].push(listener);
  }
  const maxListeners = _getMaxListeners(target);
  if (maxListeners > 0 && target._events[type].length > maxListeners && !target._events[type].warned) {
    target._events[type].warned = true;
    const warning = new Error(
      `[unenv] Possible EventEmitter memory leak detected. ${target._events[type].length} ${type} listeners added. Use emitter.setMaxListeners() to increase limit`
    );
    warning.name = "MaxListenersExceededWarning";
    warning.emitter = target;
    warning.type = type;
    warning.count = target._events[type]?.length;
    console.warn(warning);
  }
  return target;
}
function _removeListener(target, type, listener) {
  _checkListener(listener);
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  const lenBeforeFilter = target._events[type].length;
  target._events[type] = target._events[type].filter((fn) => fn !== listener);
  if (lenBeforeFilter === target._events[type].length) {
    return target;
  }
  if (target._events.removeListener) {
    target.emit("removeListener", type, listener.listener || listener);
  }
  if (target._events[type].length === 0) {
    delete target._events[type];
  }
  return target;
}
function _removeAllListeners(target, type) {
  if (!target._events[type] || target._events[type].length === 0) {
    return target;
  }
  if (target._events.removeListener) {
    for (const _listener of target._events[type]) {
      target.emit("removeListener", type, _listener.listener || _listener);
    }
  }
  delete target._events[type];
  return target;
}
function _wrapOnce(target, type, listener) {
  let fired = false;
  const wrapper = (...args) => {
    if (fired) {
      return;
    }
    target.removeListener(type, wrapper);
    fired = true;
    return args.length === 0 ? listener.call(target) : listener.apply(target, args);
  };
  wrapper.listener = listener;
  return wrapper;
}
function _getMaxListeners(target) {
  return target._maxListeners ?? EventEmitter$1.defaultMaxListeners;
}
function _listeners(target, type, unwrap) {
  let listeners = target._events[type];
  if (typeof listeners === "function") {
    listeners = [listeners];
  }
  return unwrap ? listeners.map((l) => l.listener || l) : listeners;
}
function _checkListener(listener) {
  if (typeof listener !== "function") {
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' + typeof listener
    );
  }
}

const EventEmitter = globalThis.EventEmitter || EventEmitter$1;

class _Readable extends EventEmitter {
  __unenv__ = true;
  readableEncoding = null;
  readableEnded = true;
  readableFlowing = false;
  readableHighWaterMark = 0;
  readableLength = 0;
  readableObjectMode = false;
  readableAborted = false;
  readableDidRead = false;
  closed = false;
  errored = null;
  readable = false;
  destroyed = false;
  static from(_iterable, options) {
    return new _Readable(options);
  }
  constructor(_opts) {
    super();
  }
  _read(_size) {
  }
  read(_size) {
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  isPaused() {
    return true;
  }
  unpipe(_destination) {
    return this;
  }
  unshift(_chunk, _encoding) {
  }
  wrap(_oldStream) {
    return this;
  }
  push(_chunk, _encoding) {
    return false;
  }
  _destroy(_error, _callback) {
    this.removeAllListeners();
  }
  destroy(error) {
    this.destroyed = true;
    this._destroy(error);
    return this;
  }
  pipe(_destenition, _options) {
    return {};
  }
  compose(stream, options) {
    throw new Error("[unenv] Method not implemented.");
  }
  [Symbol.asyncDispose]() {
    this.destroy();
    return Promise.resolve();
  }
  // eslint-disable-next-line require-yield
  async *[Symbol.asyncIterator]() {
    throw createNotImplementedError("Readable.asyncIterator");
  }
  iterator(options) {
    throw createNotImplementedError("Readable.iterator");
  }
  map(fn, options) {
    throw createNotImplementedError("Readable.map");
  }
  filter(fn, options) {
    throw createNotImplementedError("Readable.filter");
  }
  forEach(fn, options) {
    throw createNotImplementedError("Readable.forEach");
  }
  reduce(fn, initialValue, options) {
    throw createNotImplementedError("Readable.reduce");
  }
  find(fn, options) {
    throw createNotImplementedError("Readable.find");
  }
  findIndex(fn, options) {
    throw createNotImplementedError("Readable.findIndex");
  }
  some(fn, options) {
    throw createNotImplementedError("Readable.some");
  }
  toArray(options) {
    throw createNotImplementedError("Readable.toArray");
  }
  every(fn, options) {
    throw createNotImplementedError("Readable.every");
  }
  flatMap(fn, options) {
    throw createNotImplementedError("Readable.flatMap");
  }
  drop(limit, options) {
    throw createNotImplementedError("Readable.drop");
  }
  take(limit, options) {
    throw createNotImplementedError("Readable.take");
  }
  asIndexedPairs(options) {
    throw createNotImplementedError("Readable.asIndexedPairs");
  }
}
const Readable = globalThis.Readable || _Readable;

class _Writable extends EventEmitter {
  __unenv__ = true;
  writable = true;
  writableEnded = false;
  writableFinished = false;
  writableHighWaterMark = 0;
  writableLength = 0;
  writableObjectMode = false;
  writableCorked = 0;
  closed = false;
  errored = null;
  writableNeedDrain = false;
  destroyed = false;
  _data;
  _encoding = "utf-8";
  constructor(_opts) {
    super();
  }
  pipe(_destenition, _options) {
    return {};
  }
  _write(chunk, encoding, callback) {
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return;
    }
    if (this._data === void 0) {
      this._data = chunk;
    } else {
      const a = typeof this._data === "string" ? Buffer.from(this._data, this._encoding || encoding || "utf8") : this._data;
      const b = typeof chunk === "string" ? Buffer.from(chunk, encoding || this._encoding || "utf8") : chunk;
      this._data = Buffer.concat([a, b]);
    }
    this._encoding = encoding;
    if (callback) {
      callback();
    }
  }
  _writev(_chunks, _callback) {
  }
  _destroy(_error, _callback) {
  }
  _final(_callback) {
  }
  write(chunk, arg2, arg3) {
    const encoding = typeof arg2 === "string" ? this._encoding : "utf-8";
    const cb = typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    this._write(chunk, encoding, cb);
    return true;
  }
  setDefaultEncoding(_encoding) {
    return this;
  }
  end(arg1, arg2, arg3) {
    const callback = typeof arg1 === "function" ? arg1 : typeof arg2 === "function" ? arg2 : typeof arg3 === "function" ? arg3 : void 0;
    if (this.writableEnded) {
      if (callback) {
        callback();
      }
      return this;
    }
    const data = arg1 === callback ? void 0 : arg1;
    if (data) {
      const encoding = arg2 === callback ? void 0 : arg2;
      this.write(data, encoding, callback);
    }
    this.writableEnded = true;
    this.writableFinished = true;
    this.emit("close");
    this.emit("finish");
    return this;
  }
  cork() {
  }
  uncork() {
  }
  destroy(_error) {
    this.destroyed = true;
    delete this._data;
    this.removeAllListeners();
    return this;
  }
  compose(stream, options) {
    throw new Error("[h3] Method not implemented.");
  }
}
const Writable = globalThis.Writable || _Writable;

const __Duplex = class {
  allowHalfOpen = true;
  _destroy;
  constructor(readable = new Readable(), writable = new Writable()) {
    Object.assign(this, readable);
    Object.assign(this, writable);
    this._destroy = mergeFns(readable._destroy, writable._destroy);
  }
};
function getDuplex() {
  Object.assign(__Duplex.prototype, Readable.prototype);
  Object.assign(__Duplex.prototype, Writable.prototype);
  return __Duplex;
}
const _Duplex = /* @__PURE__ */ getDuplex();
const Duplex = globalThis.Duplex || _Duplex;

class Socket extends Duplex {
  __unenv__ = true;
  bufferSize = 0;
  bytesRead = 0;
  bytesWritten = 0;
  connecting = false;
  destroyed = false;
  pending = false;
  localAddress = "";
  localPort = 0;
  remoteAddress = "";
  remoteFamily = "";
  remotePort = 0;
  autoSelectFamilyAttemptedAddresses = [];
  readyState = "readOnly";
  constructor(_options) {
    super();
  }
  write(_buffer, _arg1, _arg2) {
    return false;
  }
  connect(_arg1, _arg2, _arg3) {
    return this;
  }
  end(_arg1, _arg2, _arg3) {
    return this;
  }
  setEncoding(_encoding) {
    return this;
  }
  pause() {
    return this;
  }
  resume() {
    return this;
  }
  setTimeout(_timeout, _callback) {
    return this;
  }
  setNoDelay(_noDelay) {
    return this;
  }
  setKeepAlive(_enable, _initialDelay) {
    return this;
  }
  address() {
    return {};
  }
  unref() {
    return this;
  }
  ref() {
    return this;
  }
  destroySoon() {
    this.destroy();
  }
  resetAndDestroy() {
    const err = new Error("ERR_SOCKET_CLOSED");
    err.code = "ERR_SOCKET_CLOSED";
    this.destroy(err);
    return this;
  }
}

class IncomingMessage extends Readable {
  __unenv__ = {};
  aborted = false;
  httpVersion = "1.1";
  httpVersionMajor = 1;
  httpVersionMinor = 1;
  complete = true;
  connection;
  socket;
  headers = {};
  trailers = {};
  method = "GET";
  url = "/";
  statusCode = 200;
  statusMessage = "";
  closed = false;
  errored = null;
  readable = false;
  constructor(socket) {
    super();
    this.socket = this.connection = socket || new Socket();
  }
  get rawHeaders() {
    return rawHeaders(this.headers);
  }
  get rawTrailers() {
    return [];
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  get headersDistinct() {
    return _distinct(this.headers);
  }
  get trailersDistinct() {
    return _distinct(this.trailers);
  }
}
function _distinct(obj) {
  const d = {};
  for (const [key, value] of Object.entries(obj)) {
    if (key) {
      d[key] = (Array.isArray(value) ? value : [value]).filter(
        Boolean
      );
    }
  }
  return d;
}

class ServerResponse extends Writable {
  __unenv__ = true;
  statusCode = 200;
  statusMessage = "";
  upgrading = false;
  chunkedEncoding = false;
  shouldKeepAlive = false;
  useChunkedEncodingByDefault = false;
  sendDate = false;
  finished = false;
  headersSent = false;
  strictContentLength = false;
  connection = null;
  socket = null;
  req;
  _headers = {};
  constructor(req) {
    super();
    this.req = req;
  }
  assignSocket(socket) {
    socket._httpMessage = this;
    this.socket = socket;
    this.connection = socket;
    this.emit("socket", socket);
    this._flush();
  }
  _flush() {
    this.flushHeaders();
  }
  detachSocket(_socket) {
  }
  writeContinue(_callback) {
  }
  writeHead(statusCode, arg1, arg2) {
    if (statusCode) {
      this.statusCode = statusCode;
    }
    if (typeof arg1 === "string") {
      this.statusMessage = arg1;
      arg1 = void 0;
    }
    const headers = arg2 || arg1;
    if (headers) {
      if (Array.isArray(headers)) ; else {
        for (const key in headers) {
          this.setHeader(key, headers[key]);
        }
      }
    }
    this.headersSent = true;
    return this;
  }
  writeProcessing() {
  }
  setTimeout(_msecs, _callback) {
    return this;
  }
  appendHeader(name, value) {
    name = name.toLowerCase();
    const current = this._headers[name];
    const all = [
      ...Array.isArray(current) ? current : [current],
      ...Array.isArray(value) ? value : [value]
    ].filter(Boolean);
    this._headers[name] = all.length > 1 ? all : all[0];
    return this;
  }
  setHeader(name, value) {
    this._headers[name.toLowerCase()] = value;
    return this;
  }
  getHeader(name) {
    return this._headers[name.toLowerCase()];
  }
  getHeaders() {
    return this._headers;
  }
  getHeaderNames() {
    return Object.keys(this._headers);
  }
  hasHeader(name) {
    return name.toLowerCase() in this._headers;
  }
  removeHeader(name) {
    delete this._headers[name.toLowerCase()];
  }
  addTrailers(_headers) {
  }
  flushHeaders() {
  }
  writeEarlyHints(_headers, cb) {
    if (typeof cb === "function") {
      cb();
    }
  }
}

function hasProp(obj, prop) {
  try {
    return prop in obj;
  } catch {
    return false;
  }
}

var __defProp$2 = Object.defineProperty;
var __defNormalProp$2 = (obj, key, value) => key in obj ? __defProp$2(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$2 = (obj, key, value) => {
  __defNormalProp$2(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Error extends Error {
  constructor(message, opts = {}) {
    super(message, opts);
    __publicField$2(this, "statusCode", 500);
    __publicField$2(this, "fatal", false);
    __publicField$2(this, "unhandled", false);
    __publicField$2(this, "statusMessage");
    __publicField$2(this, "data");
    __publicField$2(this, "cause");
    if (opts.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
  toJSON() {
    const obj = {
      message: this.message,
      statusCode: sanitizeStatusCode(this.statusCode, 500)
    };
    if (this.statusMessage) {
      obj.statusMessage = sanitizeStatusMessage(this.statusMessage);
    }
    if (this.data !== void 0) {
      obj.data = this.data;
    }
    return obj;
  }
}
__publicField$2(H3Error, "__h3_error__", true);
function createError$1(input) {
  if (typeof input === "string") {
    return new H3Error(input);
  }
  if (isError(input)) {
    return input;
  }
  const err = new H3Error(input.message ?? input.statusMessage ?? "", {
    cause: input.cause || input
  });
  if (hasProp(input, "stack")) {
    try {
      Object.defineProperty(err, "stack", {
        get() {
          return input.stack;
        }
      });
    } catch {
      try {
        err.stack = input.stack;
      } catch {
      }
    }
  }
  if (input.data) {
    err.data = input.data;
  }
  if (input.statusCode) {
    err.statusCode = sanitizeStatusCode(input.statusCode, err.statusCode);
  } else if (input.status) {
    err.statusCode = sanitizeStatusCode(input.status, err.statusCode);
  }
  if (input.statusMessage) {
    err.statusMessage = input.statusMessage;
  } else if (input.statusText) {
    err.statusMessage = input.statusText;
  }
  if (err.statusMessage) {
    const originalMessage = err.statusMessage;
    const sanitizedMessage = sanitizeStatusMessage(err.statusMessage);
    if (sanitizedMessage !== originalMessage) {
      console.warn(
        "[h3] Please prefer using `message` for longer error messages instead of `statusMessage`. In the future, `statusMessage` will be sanitized by default."
      );
    }
  }
  if (input.fatal !== void 0) {
    err.fatal = input.fatal;
  }
  if (input.unhandled !== void 0) {
    err.unhandled = input.unhandled;
  }
  return err;
}
function sendError(event, error, debug) {
  if (event.handled) {
    return;
  }
  const h3Error = isError(error) ? error : createError$1(error);
  const responseBody = {
    statusCode: h3Error.statusCode,
    statusMessage: h3Error.statusMessage,
    stack: [],
    data: h3Error.data
  };
  if (debug) {
    responseBody.stack = (h3Error.stack || "").split("\n").map((l) => l.trim());
  }
  if (event.handled) {
    return;
  }
  const _code = Number.parseInt(h3Error.statusCode);
  setResponseStatus(event, _code, h3Error.statusMessage);
  event.node.res.setHeader("content-type", MIMES.json);
  event.node.res.end(JSON.stringify(responseBody, void 0, 2));
}
function isError(input) {
  return input?.constructor?.__h3_error__ === true;
}
function isMethod(event, expected, allowHead) {
  if (typeof expected === "string") {
    if (event.method === expected) {
      return true;
    }
  } else if (expected.includes(event.method)) {
    return true;
  }
  return false;
}
function assertMethod(event, expected, allowHead) {
  if (!isMethod(event, expected)) {
    throw createError$1({
      statusCode: 405,
      statusMessage: "HTTP method is not allowed."
    });
  }
}
function getRequestHeaders(event) {
  const _headers = {};
  for (const key in event.node.req.headers) {
    const val = event.node.req.headers[key];
    _headers[key] = Array.isArray(val) ? val.filter(Boolean).join(", ") : val;
  }
  return _headers;
}
function getRequestHeader(event, name) {
  const headers = getRequestHeaders(event);
  const value = headers[name.toLowerCase()];
  return value;
}
function getRequestHost(event, opts = {}) {
  if (opts.xForwardedHost) {
    const xForwardedHost = event.node.req.headers["x-forwarded-host"];
    if (xForwardedHost) {
      return xForwardedHost;
    }
  }
  return event.node.req.headers.host || "localhost";
}
function getRequestProtocol(event, opts = {}) {
  if (opts.xForwardedProto !== false && event.node.req.headers["x-forwarded-proto"] === "https") {
    return "https";
  }
  return event.node.req.connection?.encrypted ? "https" : "http";
}
function getRequestURL(event, opts = {}) {
  const host = getRequestHost(event, opts);
  const protocol = getRequestProtocol(event, opts);
  const path = (event.node.req.originalUrl || event.path).replace(
    /^[/\\]+/g,
    "/"
  );
  return new URL(path, `${protocol}://${host}`);
}
function getRequestIP(event, opts = {}) {
  if (event.context.clientAddress) {
    return event.context.clientAddress;
  }
  if (opts.xForwardedFor) {
    const xForwardedFor = getRequestHeader(event, "x-forwarded-for")?.split(",").shift()?.trim();
    if (xForwardedFor) {
      return xForwardedFor;
    }
  }
  if (event.node.req.socket.remoteAddress) {
    return event.node.req.socket.remoteAddress;
  }
}

const RawBodySymbol = Symbol.for("h3RawBody");
const PayloadMethods$1 = ["PATCH", "POST", "PUT", "DELETE"];
function readRawBody(event, encoding = "utf8") {
  assertMethod(event, PayloadMethods$1);
  const _rawBody = event._requestBody || event.web?.request?.body || event.node.req[RawBodySymbol] || event.node.req.rawBody || event.node.req.body;
  if (_rawBody) {
    const promise2 = Promise.resolve(_rawBody).then((_resolved) => {
      if (Buffer.isBuffer(_resolved)) {
        return _resolved;
      }
      if (typeof _resolved.pipeTo === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.pipeTo(
            new WritableStream({
              write(chunk) {
                chunks.push(chunk);
              },
              close() {
                resolve(Buffer.concat(chunks));
              },
              abort(reason) {
                reject(reason);
              }
            })
          ).catch(reject);
        });
      } else if (typeof _resolved.pipe === "function") {
        return new Promise((resolve, reject) => {
          const chunks = [];
          _resolved.on("data", (chunk) => {
            chunks.push(chunk);
          }).on("end", () => {
            resolve(Buffer.concat(chunks));
          }).on("error", reject);
        });
      }
      if (_resolved.constructor === Object) {
        return Buffer.from(JSON.stringify(_resolved));
      }
      return Buffer.from(_resolved);
    });
    return encoding ? promise2.then((buff) => buff.toString(encoding)) : promise2;
  }
  if (!Number.parseInt(event.node.req.headers["content-length"] || "") && !String(event.node.req.headers["transfer-encoding"] ?? "").split(",").map((e) => e.trim()).filter(Boolean).includes("chunked")) {
    return Promise.resolve(void 0);
  }
  const promise = event.node.req[RawBodySymbol] = new Promise(
    (resolve, reject) => {
      const bodyData = [];
      event.node.req.on("error", (err) => {
        reject(err);
      }).on("data", (chunk) => {
        bodyData.push(chunk);
      }).on("end", () => {
        resolve(Buffer.concat(bodyData));
      });
    }
  );
  const result = encoding ? promise.then((buff) => buff.toString(encoding)) : promise;
  return result;
}
function getRequestWebStream(event) {
  if (!PayloadMethods$1.includes(event.method)) {
    return;
  }
  const bodyStream = event.web?.request?.body || event._requestBody;
  if (bodyStream) {
    return bodyStream;
  }
  const _hasRawBody = RawBodySymbol in event.node.req || "rawBody" in event.node.req || "body" in event.node.req || "__unenv__" in event.node.req;
  if (_hasRawBody) {
    return new ReadableStream({
      async start(controller) {
        const _rawBody = await readRawBody(event, false);
        if (_rawBody) {
          controller.enqueue(_rawBody);
        }
        controller.close();
      }
    });
  }
  return new ReadableStream({
    start: (controller) => {
      event.node.req.on("data", (chunk) => {
        controller.enqueue(chunk);
      });
      event.node.req.on("end", () => {
        controller.close();
      });
      event.node.req.on("error", (err) => {
        controller.error(err);
      });
    }
  });
}

function handleCacheHeaders(event, opts) {
  const cacheControls = ["public", ...opts.cacheControls || []];
  let cacheMatched = false;
  if (opts.maxAge !== void 0) {
    cacheControls.push(`max-age=${+opts.maxAge}`, `s-maxage=${+opts.maxAge}`);
  }
  if (opts.modifiedTime) {
    const modifiedTime = new Date(opts.modifiedTime);
    const ifModifiedSince = event.node.req.headers["if-modified-since"];
    event.node.res.setHeader("last-modified", modifiedTime.toUTCString());
    if (ifModifiedSince && new Date(ifModifiedSince) >= opts.modifiedTime) {
      cacheMatched = true;
    }
  }
  if (opts.etag) {
    event.node.res.setHeader("etag", opts.etag);
    const ifNonMatch = event.node.req.headers["if-none-match"];
    if (ifNonMatch === opts.etag) {
      cacheMatched = true;
    }
  }
  event.node.res.setHeader("cache-control", cacheControls.join(", "));
  if (cacheMatched) {
    event.node.res.statusCode = 304;
    if (!event.handled) {
      event.node.res.end();
    }
    return true;
  }
  return false;
}

const MIMES = {
  html: "text/html",
  json: "application/json"
};

const DISALLOWED_STATUS_CHARS = /[^\u0009\u0020-\u007E]/g;
function sanitizeStatusMessage(statusMessage = "") {
  return statusMessage.replace(DISALLOWED_STATUS_CHARS, "");
}
function sanitizeStatusCode(statusCode, defaultStatusCode = 200) {
  if (!statusCode) {
    return defaultStatusCode;
  }
  if (typeof statusCode === "string") {
    statusCode = Number.parseInt(statusCode, 10);
  }
  if (statusCode < 100 || statusCode > 999) {
    return defaultStatusCode;
  }
  return statusCode;
}

function parseCookies(event) {
  return parse(event.node.req.headers.cookie || "");
}
function getCookie(event, name) {
  return parseCookies(event)[name];
}
function setCookie(event, name, value, serializeOptions) {
  serializeOptions = { path: "/", ...serializeOptions };
  const cookieStr = serialize(name, value, serializeOptions);
  let setCookies = event.node.res.getHeader("set-cookie");
  if (!Array.isArray(setCookies)) {
    setCookies = [setCookies];
  }
  const _optionsHash = objectHash(serializeOptions);
  setCookies = setCookies.filter((cookieValue) => {
    return cookieValue && _optionsHash !== objectHash(parse(cookieValue));
  });
  event.node.res.setHeader("set-cookie", [...setCookies, cookieStr]);
}
function splitCookiesString(cookiesString) {
  if (Array.isArray(cookiesString)) {
    return cookiesString.flatMap((c) => splitCookiesString(c));
  }
  if (typeof cookiesString !== "string") {
    return [];
  }
  const cookiesStrings = [];
  let pos = 0;
  let start;
  let ch;
  let lastComma;
  let nextStart;
  let cookiesSeparatorFound;
  const skipWhitespace = () => {
    while (pos < cookiesString.length && /\s/.test(cookiesString.charAt(pos))) {
      pos += 1;
    }
    return pos < cookiesString.length;
  };
  const notSpecialChar = () => {
    ch = cookiesString.charAt(pos);
    return ch !== "=" && ch !== ";" && ch !== ",";
  };
  while (pos < cookiesString.length) {
    start = pos;
    cookiesSeparatorFound = false;
    while (skipWhitespace()) {
      ch = cookiesString.charAt(pos);
      if (ch === ",") {
        lastComma = pos;
        pos += 1;
        skipWhitespace();
        nextStart = pos;
        while (pos < cookiesString.length && notSpecialChar()) {
          pos += 1;
        }
        if (pos < cookiesString.length && cookiesString.charAt(pos) === "=") {
          cookiesSeparatorFound = true;
          pos = nextStart;
          cookiesStrings.push(cookiesString.slice(start, lastComma));
          start = pos;
        } else {
          pos = lastComma + 1;
        }
      } else {
        pos += 1;
      }
    }
    if (!cookiesSeparatorFound || pos >= cookiesString.length) {
      cookiesStrings.push(cookiesString.slice(start, cookiesString.length));
    }
  }
  return cookiesStrings;
}

const defer = typeof setImmediate === "undefined" ? (fn) => fn() : setImmediate;
function send(event, data, type) {
  if (type) {
    defaultContentType(event, type);
  }
  return new Promise((resolve) => {
    defer(() => {
      if (!event.handled) {
        event.node.res.end(data);
      }
      resolve();
    });
  });
}
function sendNoContent(event, code) {
  if (event.handled) {
    return;
  }
  if (!code && event.node.res.statusCode !== 200) {
    code = event.node.res.statusCode;
  }
  const _code = sanitizeStatusCode(code, 204);
  if (_code === 204) {
    event.node.res.removeHeader("content-length");
  }
  event.node.res.writeHead(_code);
  event.node.res.end();
}
function setResponseStatus(event, code, text) {
  if (code) {
    event.node.res.statusCode = sanitizeStatusCode(
      code,
      event.node.res.statusCode
    );
  }
  if (text) {
    event.node.res.statusMessage = sanitizeStatusMessage(text);
  }
}
function getResponseStatus(event) {
  return event.node.res.statusCode;
}
function getResponseStatusText(event) {
  return event.node.res.statusMessage;
}
function defaultContentType(event, type) {
  if (type && event.node.res.statusCode !== 304 && !event.node.res.getHeader("content-type")) {
    event.node.res.setHeader("content-type", type);
  }
}
function sendRedirect(event, location, code = 302) {
  event.node.res.statusCode = sanitizeStatusCode(
    code,
    event.node.res.statusCode
  );
  event.node.res.setHeader("location", location);
  const encodedLoc = location.replace(/"/g, "%22");
  const html = `<!DOCTYPE html><html><head><meta http-equiv="refresh" content="0; url=${encodedLoc}"></head></html>`;
  return send(event, html, MIMES.html);
}
function getResponseHeaders(event) {
  return event.node.res.getHeaders();
}
function getResponseHeader(event, name) {
  return event.node.res.getHeader(name);
}
function setResponseHeaders(event, headers) {
  for (const [name, value] of Object.entries(headers)) {
    event.node.res.setHeader(
      name,
      value
    );
  }
}
const setHeaders = setResponseHeaders;
function setResponseHeader(event, name, value) {
  event.node.res.setHeader(name, value);
}
const setHeader = setResponseHeader;
function appendResponseHeader(event, name, value) {
  let current = event.node.res.getHeader(name);
  if (!current) {
    event.node.res.setHeader(name, value);
    return;
  }
  if (!Array.isArray(current)) {
    current = [current.toString()];
  }
  event.node.res.setHeader(name, [...current, value]);
}
function removeResponseHeader(event, name) {
  return event.node.res.removeHeader(name);
}
function isStream(data) {
  if (!data || typeof data !== "object") {
    return false;
  }
  if (typeof data.pipe === "function") {
    if (typeof data._read === "function") {
      return true;
    }
    if (typeof data.abort === "function") {
      return true;
    }
  }
  if (typeof data.pipeTo === "function") {
    return true;
  }
  return false;
}
function isWebResponse(data) {
  return typeof Response !== "undefined" && data instanceof Response;
}
function sendStream(event, stream) {
  if (!stream || typeof stream !== "object") {
    throw new Error("[h3] Invalid stream provided.");
  }
  event.node.res._data = stream;
  if (!event.node.res.socket) {
    event._handled = true;
    return Promise.resolve();
  }
  if (hasProp(stream, "pipeTo") && typeof stream.pipeTo === "function") {
    return stream.pipeTo(
      new WritableStream({
        write(chunk) {
          event.node.res.write(chunk);
        }
      })
    ).then(() => {
      event.node.res.end();
    });
  }
  if (hasProp(stream, "pipe") && typeof stream.pipe === "function") {
    return new Promise((resolve, reject) => {
      stream.pipe(event.node.res);
      if (stream.on) {
        stream.on("end", () => {
          event.node.res.end();
          resolve();
        });
        stream.on("error", (error) => {
          reject(error);
        });
      }
      event.node.res.on("close", () => {
        if (stream.abort) {
          stream.abort();
        }
      });
    });
  }
  throw new Error("[h3] Invalid or incompatible stream provided.");
}
function sendWebResponse(event, response) {
  for (const [key, value] of response.headers) {
    if (key === "set-cookie") {
      event.node.res.appendHeader(key, splitCookiesString(value));
    } else {
      event.node.res.setHeader(key, value);
    }
  }
  if (response.status) {
    event.node.res.statusCode = sanitizeStatusCode(
      response.status,
      event.node.res.statusCode
    );
  }
  if (response.statusText) {
    event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  }
  if (response.redirected) {
    event.node.res.setHeader("location", response.url);
  }
  if (!response.body) {
    event.node.res.end();
    return;
  }
  return sendStream(event, response.body);
}

const PayloadMethods = /* @__PURE__ */ new Set(["PATCH", "POST", "PUT", "DELETE"]);
const ignoredHeaders = /* @__PURE__ */ new Set([
  "transfer-encoding",
  "connection",
  "keep-alive",
  "upgrade",
  "expect",
  "host",
  "accept"
]);
async function proxyRequest(event, target, opts = {}) {
  let body;
  let duplex;
  if (PayloadMethods.has(event.method)) {
    if (opts.streamRequest) {
      body = getRequestWebStream(event);
      duplex = "half";
    } else {
      body = await readRawBody(event, false).catch(() => void 0);
    }
  }
  const method = opts.fetchOptions?.method || event.method;
  const fetchHeaders = mergeHeaders(
    getProxyRequestHeaders(event),
    opts.fetchOptions?.headers,
    opts.headers
  );
  return sendProxy(event, target, {
    ...opts,
    fetchOptions: {
      method,
      body,
      duplex,
      ...opts.fetchOptions,
      headers: fetchHeaders
    }
  });
}
async function sendProxy(event, target, opts = {}) {
  let response;
  try {
    response = await _getFetch(opts.fetch)(target, {
      headers: opts.headers,
      ignoreResponseError: true,
      // make $ofetch.raw transparent
      ...opts.fetchOptions
    });
  } catch (error) {
    throw createError$1({
      status: 502,
      statusMessage: "Bad Gateway",
      cause: error
    });
  }
  event.node.res.statusCode = sanitizeStatusCode(
    response.status,
    event.node.res.statusCode
  );
  event.node.res.statusMessage = sanitizeStatusMessage(response.statusText);
  const cookies = [];
  for (const [key, value] of response.headers.entries()) {
    if (key === "content-encoding") {
      continue;
    }
    if (key === "content-length") {
      continue;
    }
    if (key === "set-cookie") {
      cookies.push(...splitCookiesString(value));
      continue;
    }
    event.node.res.setHeader(key, value);
  }
  if (cookies.length > 0) {
    event.node.res.setHeader(
      "set-cookie",
      cookies.map((cookie) => {
        if (opts.cookieDomainRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookieDomainRewrite,
            "domain"
          );
        }
        if (opts.cookiePathRewrite) {
          cookie = rewriteCookieProperty(
            cookie,
            opts.cookiePathRewrite,
            "path"
          );
        }
        return cookie;
      })
    );
  }
  if (opts.onResponse) {
    await opts.onResponse(event, response);
  }
  if (response._data !== void 0) {
    return response._data;
  }
  if (event.handled) {
    return;
  }
  if (opts.sendStream === false) {
    const data = new Uint8Array(await response.arrayBuffer());
    return event.node.res.end(data);
  }
  if (response.body) {
    for await (const chunk of response.body) {
      event.node.res.write(chunk);
    }
  }
  return event.node.res.end();
}
function getProxyRequestHeaders(event) {
  const headers = /* @__PURE__ */ Object.create(null);
  const reqHeaders = getRequestHeaders(event);
  for (const name in reqHeaders) {
    if (!ignoredHeaders.has(name)) {
      headers[name] = reqHeaders[name];
    }
  }
  return headers;
}
function fetchWithEvent(event, req, init, options) {
  return _getFetch(options?.fetch)(req, {
    ...init,
    context: init?.context || event.context,
    headers: {
      ...getProxyRequestHeaders(event),
      ...init?.headers
    }
  });
}
function _getFetch(_fetch) {
  if (_fetch) {
    return _fetch;
  }
  if (globalThis.fetch) {
    return globalThis.fetch;
  }
  throw new Error(
    "fetch is not available. Try importing `node-fetch-native/polyfill` for Node.js."
  );
}
function rewriteCookieProperty(header, map, property) {
  const _map = typeof map === "string" ? { "*": map } : map;
  return header.replace(
    new RegExp(`(;\\s*${property}=)([^;]+)`, "gi"),
    (match, prefix, previousValue) => {
      let newValue;
      if (previousValue in _map) {
        newValue = _map[previousValue];
      } else if ("*" in _map) {
        newValue = _map["*"];
      } else {
        return match;
      }
      return newValue ? prefix + newValue : "";
    }
  );
}
function mergeHeaders(defaults, ...inputs) {
  const _inputs = inputs.filter(Boolean);
  if (_inputs.length === 0) {
    return defaults;
  }
  const merged = new Headers(defaults);
  for (const input of _inputs) {
    for (const [key, value] of Object.entries(input)) {
      if (value !== void 0) {
        merged.set(key, value);
      }
    }
  }
  return merged;
}

var __defProp$1 = Object.defineProperty;
var __defNormalProp$1 = (obj, key, value) => key in obj ? __defProp$1(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField$1 = (obj, key, value) => {
  __defNormalProp$1(obj, typeof key !== "symbol" ? key + "" : key, value);
  return value;
};
class H3Event {
  constructor(req, res) {
    __publicField$1(this, "__is_event__", true);
    // Context
    __publicField$1(this, "node");
    // Node
    __publicField$1(this, "web");
    // Web
    __publicField$1(this, "context", {});
    // Shared
    // Request
    __publicField$1(this, "_method");
    __publicField$1(this, "_path");
    __publicField$1(this, "_headers");
    __publicField$1(this, "_requestBody");
    // Response
    __publicField$1(this, "_handled", false);
    // Hooks
    __publicField$1(this, "_onBeforeResponseCalled");
    __publicField$1(this, "_onAfterResponseCalled");
    this.node = { req, res };
  }
  // --- Request ---
  get method() {
    if (!this._method) {
      this._method = (this.node.req.method || "GET").toUpperCase();
    }
    return this._method;
  }
  get path() {
    return this._path || this.node.req.url || "/";
  }
  get headers() {
    if (!this._headers) {
      this._headers = _normalizeNodeHeaders(this.node.req.headers);
    }
    return this._headers;
  }
  // --- Respoonse ---
  get handled() {
    return this._handled || this.node.res.writableEnded || this.node.res.headersSent;
  }
  respondWith(response) {
    return Promise.resolve(response).then(
      (_response) => sendWebResponse(this, _response)
    );
  }
  // --- Utils ---
  toString() {
    return `[${this.method}] ${this.path}`;
  }
  toJSON() {
    return this.toString();
  }
  // --- Deprecated ---
  /** @deprecated Please use `event.node.req` instead. */
  get req() {
    return this.node.req;
  }
  /** @deprecated Please use `event.node.res` instead. */
  get res() {
    return this.node.res;
  }
}
function isEvent(input) {
  return hasProp(input, "__is_event__");
}
function createEvent(req, res) {
  return new H3Event(req, res);
}
function _normalizeNodeHeaders(nodeHeaders) {
  const headers = new Headers();
  for (const [name, value] of Object.entries(nodeHeaders)) {
    if (Array.isArray(value)) {
      for (const item of value) {
        headers.append(name, item);
      }
    } else if (value) {
      headers.set(name, value);
    }
  }
  return headers;
}

function defineEventHandler(handler) {
  if (typeof handler === "function") {
    handler.__is_handler__ = true;
    return handler;
  }
  const _hooks = {
    onRequest: _normalizeArray(handler.onRequest),
    onBeforeResponse: _normalizeArray(handler.onBeforeResponse)
  };
  const _handler = (event) => {
    return _callHandler(event, handler.handler, _hooks);
  };
  _handler.__is_handler__ = true;
  _handler.__resolve__ = handler.handler.__resolve__;
  _handler.__websocket__ = handler.websocket;
  return _handler;
}
function _normalizeArray(input) {
  return input ? Array.isArray(input) ? input : [input] : void 0;
}
async function _callHandler(event, handler, hooks) {
  if (hooks.onRequest) {
    for (const hook of hooks.onRequest) {
      await hook(event);
      if (event.handled) {
        return;
      }
    }
  }
  const body = await handler(event);
  const response = { body };
  if (hooks.onBeforeResponse) {
    for (const hook of hooks.onBeforeResponse) {
      await hook(event, response);
    }
  }
  return response.body;
}
const eventHandler = defineEventHandler;
function isEventHandler(input) {
  return hasProp(input, "__is_handler__");
}
function toEventHandler(input, _, _route) {
  if (!isEventHandler(input)) {
    console.warn(
      "[h3] Implicit event handler conversion is deprecated. Use `eventHandler()` or `fromNodeMiddleware()` to define event handlers.",
      _route && _route !== "/" ? `
     Route: ${_route}` : "",
      `
     Handler: ${input}`
    );
  }
  return input;
}
function defineLazyEventHandler(factory) {
  let _promise;
  let _resolved;
  const resolveHandler = () => {
    if (_resolved) {
      return Promise.resolve(_resolved);
    }
    if (!_promise) {
      _promise = Promise.resolve(factory()).then((r) => {
        const handler2 = r.default || r;
        if (typeof handler2 !== "function") {
          throw new TypeError(
            "Invalid lazy handler result. It should be a function:",
            handler2
          );
        }
        _resolved = { handler: toEventHandler(r.default || r) };
        return _resolved;
      });
    }
    return _promise;
  };
  const handler = eventHandler((event) => {
    if (_resolved) {
      return _resolved.handler(event);
    }
    return resolveHandler().then((r) => r.handler(event));
  });
  handler.__resolve__ = resolveHandler;
  return handler;
}
const lazyEventHandler = defineLazyEventHandler;

function createApp(options = {}) {
  const stack = [];
  const handler = createAppEventHandler(stack, options);
  const resolve = createResolver(stack);
  handler.__resolve__ = resolve;
  const getWebsocket = cachedFn(() => websocketOptions(resolve, options));
  const app = {
    // @ts-expect-error
    use: (arg1, arg2, arg3) => use(app, arg1, arg2, arg3),
    resolve,
    handler,
    stack,
    options,
    get websocket() {
      return getWebsocket();
    }
  };
  return app;
}
function use(app, arg1, arg2, arg3) {
  if (Array.isArray(arg1)) {
    for (const i of arg1) {
      use(app, i, arg2, arg3);
    }
  } else if (Array.isArray(arg2)) {
    for (const i of arg2) {
      use(app, arg1, i, arg3);
    }
  } else if (typeof arg1 === "string") {
    app.stack.push(
      normalizeLayer({ ...arg3, route: arg1, handler: arg2 })
    );
  } else if (typeof arg1 === "function") {
    app.stack.push(normalizeLayer({ ...arg2, handler: arg1 }));
  } else {
    app.stack.push(normalizeLayer({ ...arg1 }));
  }
  return app;
}
function createAppEventHandler(stack, options) {
  const spacing = options.debug ? 2 : void 0;
  return eventHandler(async (event) => {
    event.node.req.originalUrl = event.node.req.originalUrl || event.node.req.url || "/";
    const _reqPath = event._path || event.node.req.url || "/";
    let _layerPath;
    if (options.onRequest) {
      await options.onRequest(event);
    }
    for (const layer of stack) {
      if (layer.route.length > 1) {
        if (!_reqPath.startsWith(layer.route)) {
          continue;
        }
        _layerPath = _reqPath.slice(layer.route.length) || "/";
      } else {
        _layerPath = _reqPath;
      }
      if (layer.match && !layer.match(_layerPath, event)) {
        continue;
      }
      event._path = _layerPath;
      event.node.req.url = _layerPath;
      const val = await layer.handler(event);
      const _body = val === void 0 ? void 0 : await val;
      if (_body !== void 0) {
        const _response = { body: _body };
        if (options.onBeforeResponse) {
          event._onBeforeResponseCalled = true;
          await options.onBeforeResponse(event, _response);
        }
        await handleHandlerResponse(event, _response.body, spacing);
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, _response);
        }
        return;
      }
      if (event.handled) {
        if (options.onAfterResponse) {
          event._onAfterResponseCalled = true;
          await options.onAfterResponse(event, void 0);
        }
        return;
      }
    }
    if (!event.handled) {
      throw createError$1({
        statusCode: 404,
        statusMessage: `Cannot find any path matching ${event.path || "/"}.`
      });
    }
    if (options.onAfterResponse) {
      event._onAfterResponseCalled = true;
      await options.onAfterResponse(event, void 0);
    }
  });
}
function createResolver(stack) {
  return async (path) => {
    let _layerPath;
    for (const layer of stack) {
      if (layer.route === "/" && !layer.handler.__resolve__) {
        continue;
      }
      if (!path.startsWith(layer.route)) {
        continue;
      }
      _layerPath = path.slice(layer.route.length) || "/";
      if (layer.match && !layer.match(_layerPath, void 0)) {
        continue;
      }
      let res = { route: layer.route, handler: layer.handler };
      if (res.handler.__resolve__) {
        const _res = await res.handler.__resolve__(_layerPath);
        if (!_res) {
          continue;
        }
        res = {
          ...res,
          ..._res,
          route: joinURL(res.route || "/", _res.route || "/")
        };
      }
      return res;
    }
  };
}
function normalizeLayer(input) {
  let handler = input.handler;
  if (handler.handler) {
    handler = handler.handler;
  }
  if (input.lazy) {
    handler = lazyEventHandler(handler);
  } else if (!isEventHandler(handler)) {
    handler = toEventHandler(handler, void 0, input.route);
  }
  return {
    route: withoutTrailingSlash(input.route),
    match: input.match,
    handler
  };
}
function handleHandlerResponse(event, val, jsonSpace) {
  if (val === null) {
    return sendNoContent(event);
  }
  if (val) {
    if (isWebResponse(val)) {
      return sendWebResponse(event, val);
    }
    if (isStream(val)) {
      return sendStream(event, val);
    }
    if (val.buffer) {
      return send(event, val);
    }
    if (val.arrayBuffer && typeof val.arrayBuffer === "function") {
      return val.arrayBuffer().then((arrayBuffer) => {
        return send(event, Buffer.from(arrayBuffer), val.type);
      });
    }
    if (val instanceof Error) {
      throw createError$1(val);
    }
    if (typeof val.end === "function") {
      return true;
    }
  }
  const valType = typeof val;
  if (valType === "string") {
    return send(event, val, MIMES.html);
  }
  if (valType === "object" || valType === "boolean" || valType === "number") {
    return send(event, JSON.stringify(val, void 0, jsonSpace), MIMES.json);
  }
  if (valType === "bigint") {
    return send(event, val.toString(), MIMES.json);
  }
  throw createError$1({
    statusCode: 500,
    statusMessage: `[h3] Cannot send ${valType} as response.`
  });
}
function cachedFn(fn) {
  let cache;
  return () => {
    if (!cache) {
      cache = fn();
    }
    return cache;
  };
}
function websocketOptions(evResolver, appOptions) {
  return {
    ...appOptions.websocket,
    async resolve(info) {
      const { pathname } = parseURL(info.url || "/");
      const resolved = await evResolver(pathname);
      return resolved?.handler?.__websocket__ || {};
    }
  };
}

const RouterMethods = [
  "connect",
  "delete",
  "get",
  "head",
  "options",
  "post",
  "put",
  "trace",
  "patch"
];
function createRouter(opts = {}) {
  const _router = createRouter$1({});
  const routes = {};
  let _matcher;
  const router = {};
  const addRoute = (path, handler, method) => {
    let route = routes[path];
    if (!route) {
      routes[path] = route = { path, handlers: {} };
      _router.insert(path, route);
    }
    if (Array.isArray(method)) {
      for (const m of method) {
        addRoute(path, handler, m);
      }
    } else {
      route.handlers[method] = toEventHandler(handler, void 0, path);
    }
    return router;
  };
  router.use = router.add = (path, handler, method) => addRoute(path, handler, method || "all");
  for (const method of RouterMethods) {
    router[method] = (path, handle) => router.add(path, handle, method);
  }
  const matchHandler = (path = "/", method = "get") => {
    const qIndex = path.indexOf("?");
    if (qIndex !== -1) {
      path = path.slice(0, Math.max(0, qIndex));
    }
    const matched = _router.lookup(path);
    if (!matched || !matched.handlers) {
      return {
        error: createError$1({
          statusCode: 404,
          name: "Not Found",
          statusMessage: `Cannot find any route matching ${path || "/"}.`
        })
      };
    }
    let handler = matched.handlers[method] || matched.handlers.all;
    if (!handler) {
      if (!_matcher) {
        _matcher = toRouteMatcher(_router);
      }
      const _matches = _matcher.matchAll(path).reverse();
      for (const _match of _matches) {
        if (_match.handlers[method]) {
          handler = _match.handlers[method];
          matched.handlers[method] = matched.handlers[method] || handler;
          break;
        }
        if (_match.handlers.all) {
          handler = _match.handlers.all;
          matched.handlers.all = matched.handlers.all || handler;
          break;
        }
      }
    }
    if (!handler) {
      return {
        error: createError$1({
          statusCode: 405,
          name: "Method Not Allowed",
          statusMessage: `Method ${method} is not allowed on this route.`
        })
      };
    }
    return { matched, handler };
  };
  const isPreemptive = opts.preemptive || opts.preemtive;
  router.handler = eventHandler((event) => {
    const match = matchHandler(
      event.path,
      event.method.toLowerCase()
    );
    if ("error" in match) {
      if (isPreemptive) {
        throw match.error;
      } else {
        return;
      }
    }
    event.context.matchedRoute = match.matched;
    const params = match.matched.params || {};
    event.context.params = params;
    return Promise.resolve(match.handler(event)).then((res) => {
      if (res === void 0 && isPreemptive) {
        return null;
      }
      return res;
    });
  });
  router.handler.__resolve__ = async (path) => {
    path = withLeadingSlash(path);
    const match = matchHandler(path);
    if ("error" in match) {
      return;
    }
    let res = {
      route: match.matched.path,
      handler: match.handler
    };
    if (match.handler.__resolve__) {
      const _res = await match.handler.__resolve__(path);
      if (!_res) {
        return;
      }
      res = { ...res, ..._res };
    }
    return res;
  };
  return router;
}
function toNodeListener(app) {
  const toNodeHandle = async function(req, res) {
    const event = createEvent(req, res);
    try {
      await app.handler(event);
    } catch (_error) {
      const error = createError$1(_error);
      if (!isError(_error)) {
        error.unhandled = true;
      }
      setResponseStatus(event, error.statusCode, error.statusMessage);
      if (app.options.onError) {
        await app.options.onError(error, event);
      }
      if (event.handled) {
        return;
      }
      if (error.unhandled || error.fatal) {
        console.error("[h3]", error.fatal ? "[fatal]" : "[unhandled]", error);
      }
      if (app.options.onBeforeResponse && !event._onBeforeResponseCalled) {
        await app.options.onBeforeResponse(event, { body: error });
      }
      await sendError(event, error, !!app.options.debug);
      if (app.options.onAfterResponse && !event._onAfterResponseCalled) {
        await app.options.onAfterResponse(event, { body: error });
      }
    }
  };
  return toNodeHandle;
}

const s$3=globalThis.Headers,i$3=globalThis.AbortController,l$2=globalThis.fetch||(()=>{throw new Error("[node-fetch-native] Failed to fetch: `globalThis.fetch` is not available!")});

class FetchError extends Error {
  constructor(message, opts) {
    super(message, opts);
    this.name = "FetchError";
    if (opts?.cause && !this.cause) {
      this.cause = opts.cause;
    }
  }
}
function createFetchError(ctx) {
  const errorMessage = ctx.error?.message || ctx.error?.toString() || "";
  const method = ctx.request?.method || ctx.options?.method || "GET";
  const url = ctx.request?.url || String(ctx.request) || "/";
  const requestStr = `[${method}] ${JSON.stringify(url)}`;
  const statusStr = ctx.response ? `${ctx.response.status} ${ctx.response.statusText}` : "<no response>";
  const message = `${requestStr}: ${statusStr}${errorMessage ? ` ${errorMessage}` : ""}`;
  const fetchError = new FetchError(
    message,
    ctx.error ? { cause: ctx.error } : void 0
  );
  for (const key of ["request", "options", "response"]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx[key];
      }
    });
  }
  for (const [key, refKey] of [
    ["data", "_data"],
    ["status", "status"],
    ["statusCode", "status"],
    ["statusText", "statusText"],
    ["statusMessage", "statusText"]
  ]) {
    Object.defineProperty(fetchError, key, {
      get() {
        return ctx.response && ctx.response[refKey];
      }
    });
  }
  return fetchError;
}

const payloadMethods = new Set(
  Object.freeze(["PATCH", "POST", "PUT", "DELETE"])
);
function isPayloadMethod(method = "GET") {
  return payloadMethods.has(method.toUpperCase());
}
function isJSONSerializable(value) {
  if (value === void 0) {
    return false;
  }
  const t = typeof value;
  if (t === "string" || t === "number" || t === "boolean" || t === null) {
    return true;
  }
  if (t !== "object") {
    return false;
  }
  if (Array.isArray(value)) {
    return true;
  }
  if (value.buffer) {
    return false;
  }
  return value.constructor && value.constructor.name === "Object" || typeof value.toJSON === "function";
}
const textTypes = /* @__PURE__ */ new Set([
  "image/svg",
  "application/xml",
  "application/xhtml",
  "application/html"
]);
const JSON_RE = /^application\/(?:[\w!#$%&*.^`~-]*\+)?json(;.+)?$/i;
function detectResponseType(_contentType = "") {
  if (!_contentType) {
    return "json";
  }
  const contentType = _contentType.split(";").shift() || "";
  if (JSON_RE.test(contentType)) {
    return "json";
  }
  if (textTypes.has(contentType) || contentType.startsWith("text/")) {
    return "text";
  }
  return "blob";
}
function mergeFetchOptions(input, defaults, Headers = globalThis.Headers) {
  const merged = {
    ...defaults,
    ...input
  };
  if (defaults?.params && input?.params) {
    merged.params = {
      ...defaults?.params,
      ...input?.params
    };
  }
  if (defaults?.query && input?.query) {
    merged.query = {
      ...defaults?.query,
      ...input?.query
    };
  }
  if (defaults?.headers && input?.headers) {
    merged.headers = new Headers(defaults?.headers || {});
    for (const [key, value] of new Headers(input?.headers || {})) {
      merged.headers.set(key, value);
    }
  }
  return merged;
}

const retryStatusCodes = /* @__PURE__ */ new Set([
  408,
  // Request Timeout
  409,
  // Conflict
  425,
  // Too Early
  429,
  // Too Many Requests
  500,
  // Internal Server Error
  502,
  // Bad Gateway
  503,
  // Service Unavailable
  504
  //  Gateway Timeout
]);
const nullBodyResponses$1 = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createFetch$1(globalOptions = {}) {
  const {
    fetch = globalThis.fetch,
    Headers = globalThis.Headers,
    AbortController = globalThis.AbortController
  } = globalOptions;
  async function onError(context) {
    const isAbort = context.error && context.error.name === "AbortError" && !context.options.timeout || false;
    if (context.options.retry !== false && !isAbort) {
      let retries;
      if (typeof context.options.retry === "number") {
        retries = context.options.retry;
      } else {
        retries = isPayloadMethod(context.options.method) ? 0 : 1;
      }
      const responseCode = context.response && context.response.status || 500;
      if (retries > 0 && (Array.isArray(context.options.retryStatusCodes) ? context.options.retryStatusCodes.includes(responseCode) : retryStatusCodes.has(responseCode))) {
        const retryDelay = context.options.retryDelay || 0;
        if (retryDelay > 0) {
          await new Promise((resolve) => setTimeout(resolve, retryDelay));
        }
        return $fetchRaw(context.request, {
          ...context.options,
          retry: retries - 1
        });
      }
    }
    const error = createFetchError(context);
    if (Error.captureStackTrace) {
      Error.captureStackTrace(error, $fetchRaw);
    }
    throw error;
  }
  const $fetchRaw = async function $fetchRaw2(_request, _options = {}) {
    const context = {
      request: _request,
      options: mergeFetchOptions(_options, globalOptions.defaults, Headers),
      response: void 0,
      error: void 0
    };
    context.options.method = context.options.method?.toUpperCase();
    if (context.options.onRequest) {
      await context.options.onRequest(context);
    }
    if (typeof context.request === "string") {
      if (context.options.baseURL) {
        context.request = withBase(context.request, context.options.baseURL);
      }
      if (context.options.query || context.options.params) {
        context.request = withQuery(context.request, {
          ...context.options.params,
          ...context.options.query
        });
      }
    }
    if (context.options.body && isPayloadMethod(context.options.method)) {
      if (isJSONSerializable(context.options.body)) {
        context.options.body = typeof context.options.body === "string" ? context.options.body : JSON.stringify(context.options.body);
        context.options.headers = new Headers(context.options.headers || {});
        if (!context.options.headers.has("content-type")) {
          context.options.headers.set("content-type", "application/json");
        }
        if (!context.options.headers.has("accept")) {
          context.options.headers.set("accept", "application/json");
        }
      } else if (
        // ReadableStream Body
        "pipeTo" in context.options.body && typeof context.options.body.pipeTo === "function" || // Node.js Stream Body
        typeof context.options.body.pipe === "function"
      ) {
        if (!("duplex" in context.options)) {
          context.options.duplex = "half";
        }
      }
    }
    let abortTimeout;
    if (!context.options.signal && context.options.timeout) {
      const controller = new AbortController();
      abortTimeout = setTimeout(
        () => controller.abort(),
        context.options.timeout
      );
      context.options.signal = controller.signal;
    }
    try {
      context.response = await fetch(
        context.request,
        context.options
      );
    } catch (error) {
      context.error = error;
      if (context.options.onRequestError) {
        await context.options.onRequestError(context);
      }
      return await onError(context);
    } finally {
      if (abortTimeout) {
        clearTimeout(abortTimeout);
      }
    }
    const hasBody = context.response.body && !nullBodyResponses$1.has(context.response.status) && context.options.method !== "HEAD";
    if (hasBody) {
      const responseType = (context.options.parseResponse ? "json" : context.options.responseType) || detectResponseType(context.response.headers.get("content-type") || "");
      switch (responseType) {
        case "json": {
          const data = await context.response.text();
          const parseFunction = context.options.parseResponse || destr;
          context.response._data = parseFunction(data);
          break;
        }
        case "stream": {
          context.response._data = context.response.body;
          break;
        }
        default: {
          context.response._data = await context.response[responseType]();
        }
      }
    }
    if (context.options.onResponse) {
      await context.options.onResponse(context);
    }
    if (!context.options.ignoreResponseError && context.response.status >= 400 && context.response.status < 600) {
      if (context.options.onResponseError) {
        await context.options.onResponseError(context);
      }
      return await onError(context);
    }
    return context.response;
  };
  const $fetch = async function $fetch2(request, options) {
    const r = await $fetchRaw(request, options);
    return r._data;
  };
  $fetch.raw = $fetchRaw;
  $fetch.native = (...args) => fetch(...args);
  $fetch.create = (defaultOptions = {}) => createFetch$1({
    ...globalOptions,
    defaults: {
      ...globalOptions.defaults,
      ...defaultOptions
    }
  });
  return $fetch;
}

function createNodeFetch() {
  const useKeepAlive = JSON.parse(process.env.FETCH_KEEP_ALIVE || "false");
  if (!useKeepAlive) {
    return l$2;
  }
  const agentOptions = { keepAlive: true };
  const httpAgent = new http__default$1.Agent(agentOptions);
  const httpsAgent = new node_https__default.Agent(agentOptions);
  const nodeFetchOptions = {
    agent(parsedURL) {
      return parsedURL.protocol === "http:" ? httpAgent : httpsAgent;
    }
  };
  return function nodeFetchWithKeepAlive(input, init) {
    return l$2(input, { ...nodeFetchOptions, ...init });
  };
}
const fetch$1 = globalThis.fetch || createNodeFetch();
const Headers$1 = globalThis.Headers || s$3;
const AbortController$1 = globalThis.AbortController || i$3;
createFetch$1({ fetch: fetch$1, Headers: Headers$1, AbortController: AbortController$1 });

const nullBodyResponses = /* @__PURE__ */ new Set([101, 204, 205, 304]);
function createCall(handle) {
  return function callHandle(context) {
    const req = new IncomingMessage();
    const res = new ServerResponse(req);
    req.url = context.url || "/";
    req.method = context.method || "GET";
    req.headers = {};
    if (context.headers) {
      const headerEntries = typeof context.headers.entries === "function" ? context.headers.entries() : Object.entries(context.headers);
      for (const [name, value] of headerEntries) {
        if (!value) {
          continue;
        }
        req.headers[name.toLowerCase()] = value;
      }
    }
    req.headers.host = req.headers.host || context.host || "localhost";
    req.connection.encrypted = // @ts-ignore
    req.connection.encrypted || context.protocol === "https";
    req.body = context.body || null;
    req.__unenv__ = context.context;
    return handle(req, res).then(() => {
      let body = res._data;
      if (nullBodyResponses.has(res.statusCode) || req.method.toUpperCase() === "HEAD") {
        body = null;
        delete res._headers["content-length"];
      }
      const r = {
        body,
        headers: res._headers,
        status: res.statusCode,
        statusText: res.statusMessage
      };
      req.destroy();
      res.destroy();
      return r;
    });
  };
}

function createFetch(call, _fetch = global.fetch) {
  return async function ufetch(input, init) {
    const url = input.toString();
    if (!url.startsWith("/")) {
      return _fetch(url, init);
    }
    try {
      const r = await call({ url, ...init });
      return new Response(r.body, {
        status: r.status,
        statusText: r.statusText,
        headers: Object.fromEntries(
          Object.entries(r.headers).map(([name, value]) => [
            name,
            Array.isArray(value) ? value.join(",") : String(value) || ""
          ])
        )
      });
    } catch (error) {
      return new Response(error.toString(), {
        status: Number.parseInt(error.statusCode || error.code) || 500,
        statusText: error.statusText
      });
    }
  };
}

function flatHooks(configHooks, hooks = {}, parentName) {
  for (const key in configHooks) {
    const subHook = configHooks[key];
    const name = parentName ? `${parentName}:${key}` : key;
    if (typeof subHook === "object" && subHook !== null) {
      flatHooks(subHook, hooks, name);
    } else if (typeof subHook === "function") {
      hooks[name] = subHook;
    }
  }
  return hooks;
}
const defaultTask = { run: (function_) => function_() };
const _createTask = () => defaultTask;
const createTask = typeof console.createTask !== "undefined" ? console.createTask : _createTask;
function serialTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return hooks.reduce(
    (promise, hookFunction) => promise.then(() => task.run(() => hookFunction(...args))),
    Promise.resolve()
  );
}
function parallelTaskCaller(hooks, args) {
  const name = args.shift();
  const task = createTask(name);
  return Promise.all(hooks.map((hook) => task.run(() => hook(...args))));
}
function callEachWith(callbacks, arg0) {
  for (const callback of [...callbacks]) {
    callback(arg0);
  }
}

class Hookable {
  constructor() {
    this._hooks = {};
    this._before = void 0;
    this._after = void 0;
    this._deprecatedMessages = void 0;
    this._deprecatedHooks = {};
    this.hook = this.hook.bind(this);
    this.callHook = this.callHook.bind(this);
    this.callHookWith = this.callHookWith.bind(this);
  }
  hook(name, function_, options = {}) {
    if (!name || typeof function_ !== "function") {
      return () => {
      };
    }
    const originalName = name;
    let dep;
    while (this._deprecatedHooks[name]) {
      dep = this._deprecatedHooks[name];
      name = dep.to;
    }
    if (dep && !options.allowDeprecated) {
      let message = dep.message;
      if (!message) {
        message = `${originalName} hook has been deprecated` + (dep.to ? `, please use ${dep.to}` : "");
      }
      if (!this._deprecatedMessages) {
        this._deprecatedMessages = /* @__PURE__ */ new Set();
      }
      if (!this._deprecatedMessages.has(message)) {
        console.warn(message);
        this._deprecatedMessages.add(message);
      }
    }
    if (!function_.name) {
      try {
        Object.defineProperty(function_, "name", {
          get: () => "_" + name.replace(/\W+/g, "_") + "_hook_cb",
          configurable: true
        });
      } catch {
      }
    }
    this._hooks[name] = this._hooks[name] || [];
    this._hooks[name].push(function_);
    return () => {
      if (function_) {
        this.removeHook(name, function_);
        function_ = void 0;
      }
    };
  }
  hookOnce(name, function_) {
    let _unreg;
    let _function = (...arguments_) => {
      if (typeof _unreg === "function") {
        _unreg();
      }
      _unreg = void 0;
      _function = void 0;
      return function_(...arguments_);
    };
    _unreg = this.hook(name, _function);
    return _unreg;
  }
  removeHook(name, function_) {
    if (this._hooks[name]) {
      const index = this._hooks[name].indexOf(function_);
      if (index !== -1) {
        this._hooks[name].splice(index, 1);
      }
      if (this._hooks[name].length === 0) {
        delete this._hooks[name];
      }
    }
  }
  deprecateHook(name, deprecated) {
    this._deprecatedHooks[name] = typeof deprecated === "string" ? { to: deprecated } : deprecated;
    const _hooks = this._hooks[name] || [];
    delete this._hooks[name];
    for (const hook of _hooks) {
      this.hook(name, hook);
    }
  }
  deprecateHooks(deprecatedHooks) {
    Object.assign(this._deprecatedHooks, deprecatedHooks);
    for (const name in deprecatedHooks) {
      this.deprecateHook(name, deprecatedHooks[name]);
    }
  }
  addHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    const removeFns = Object.keys(hooks).map(
      (key) => this.hook(key, hooks[key])
    );
    return () => {
      for (const unreg of removeFns.splice(0, removeFns.length)) {
        unreg();
      }
    };
  }
  removeHooks(configHooks) {
    const hooks = flatHooks(configHooks);
    for (const key in hooks) {
      this.removeHook(key, hooks[key]);
    }
  }
  removeAllHooks() {
    for (const key in this._hooks) {
      delete this._hooks[key];
    }
  }
  callHook(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(serialTaskCaller, name, ...arguments_);
  }
  callHookParallel(name, ...arguments_) {
    arguments_.unshift(name);
    return this.callHookWith(parallelTaskCaller, name, ...arguments_);
  }
  callHookWith(caller, name, ...arguments_) {
    const event = this._before || this._after ? { name, args: arguments_, context: {} } : void 0;
    if (this._before) {
      callEachWith(this._before, event);
    }
    const result = caller(
      name in this._hooks ? [...this._hooks[name]] : [],
      arguments_
    );
    if (result instanceof Promise) {
      return result.finally(() => {
        if (this._after && event) {
          callEachWith(this._after, event);
        }
      });
    }
    if (this._after && event) {
      callEachWith(this._after, event);
    }
    return result;
  }
  beforeEach(function_) {
    this._before = this._before || [];
    this._before.push(function_);
    return () => {
      if (this._before !== void 0) {
        const index = this._before.indexOf(function_);
        if (index !== -1) {
          this._before.splice(index, 1);
        }
      }
    };
  }
  afterEach(function_) {
    this._after = this._after || [];
    this._after.push(function_);
    return () => {
      if (this._after !== void 0) {
        const index = this._after.indexOf(function_);
        if (index !== -1) {
          this._after.splice(index, 1);
        }
      }
    };
  }
}
function createHooks() {
  return new Hookable();
}

function klona(x) {
	if (typeof x !== 'object') return x;

	var k, tmp, str=Object.prototype.toString.call(x);

	if (str === '[object Object]') {
		if (x.constructor !== Object && typeof x.constructor === 'function') {
			tmp = new x.constructor();
			for (k in x) {
				if (x.hasOwnProperty(k) && tmp[k] !== x[k]) {
					tmp[k] = klona(x[k]);
				}
			}
		} else {
			tmp = {}; // null
			for (k in x) {
				if (k === '__proto__') {
					Object.defineProperty(tmp, k, {
						value: klona(x[k]),
						configurable: true,
						enumerable: true,
						writable: true,
					});
				} else {
					tmp[k] = klona(x[k]);
				}
			}
		}
		return tmp;
	}

	if (str === '[object Array]') {
		k = x.length;
		for (tmp=Array(k); k--;) {
			tmp[k] = klona(x[k]);
		}
		return tmp;
	}

	if (str === '[object Set]') {
		tmp = new Set;
		x.forEach(function (val) {
			tmp.add(klona(val));
		});
		return tmp;
	}

	if (str === '[object Map]') {
		tmp = new Map;
		x.forEach(function (val, key) {
			tmp.set(klona(key), klona(val));
		});
		return tmp;
	}

	if (str === '[object Date]') {
		return new Date(+x);
	}

	if (str === '[object RegExp]') {
		tmp = new RegExp(x.source, x.flags);
		tmp.lastIndex = x.lastIndex;
		return tmp;
	}

	if (str === '[object DataView]') {
		return new x.constructor( klona(x.buffer) );
	}

	if (str === '[object ArrayBuffer]') {
		return x.slice(0);
	}

	// ArrayBuffer.isView(x)
	// ~> `new` bcuz `Buffer.slice` => ref
	if (str.slice(-6) === 'Array]') {
		return new x.constructor(x);
	}

	return x;
}

const NUMBER_CHAR_RE = /\d/;
const STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner) : "";
}
function snakeCase(str) {
  return kebabCase(str || "", "_");
}

function getEnv(key, opts) {
  const envKey = snakeCase(key).toUpperCase();
  return destr(
    process.env[opts.prefix + envKey] ?? process.env[opts.altPrefix + envKey]
  );
}
function _isObject(input) {
  return typeof input === "object" && !Array.isArray(input);
}
function applyEnv(obj, opts, parentKey = "") {
  for (const key in obj) {
    const subKey = parentKey ? `${parentKey}_${key}` : key;
    const envValue = getEnv(subKey, opts);
    if (_isObject(obj[key])) {
      if (_isObject(envValue)) {
        obj[key] = { ...obj[key], ...envValue };
        applyEnv(obj[key], opts, subKey);
      } else if (envValue === void 0) {
        applyEnv(obj[key], opts, subKey);
      } else {
        obj[key] = envValue ?? obj[key];
      }
    } else {
      obj[key] = envValue ?? obj[key];
    }
    if (opts.envExpansion && typeof obj[key] === "string") {
      obj[key] = _expandFromEnv(obj[key]);
    }
  }
  return obj;
}
const envExpandRx = /{{(.*?)}}/g;
function _expandFromEnv(value) {
  return value.replace(envExpandRx, (match, key) => {
    return process.env[key] || match;
  });
}

const inlineAppConfig = {};



const appConfig$1 = defuFn(inlineAppConfig);

const _inlineRuntimeConfig = {
  "app": {
    "baseURL": "/"
  },
  "nitro": {
    "routeRules": {
      "/_build/assets/**": {
        "headers": {
          "cache-control": "public, immutable, max-age=31536000"
        }
      }
    }
  }
};
const envOptions = {
  prefix: "NITRO_",
  altPrefix: _inlineRuntimeConfig.nitro.envPrefix ?? process.env.NITRO_ENV_PREFIX ?? "_",
  envExpansion: _inlineRuntimeConfig.nitro.envExpansion ?? process.env.NITRO_ENV_EXPANSION ?? false
};
const _sharedRuntimeConfig = _deepFreeze(
  applyEnv(klona(_inlineRuntimeConfig), envOptions)
);
function useRuntimeConfig(event) {
  {
    return _sharedRuntimeConfig;
  }
}
_deepFreeze(klona(appConfig$1));
function _deepFreeze(object) {
  const propNames = Object.getOwnPropertyNames(object);
  for (const name of propNames) {
    const value = object[name];
    if (value && typeof value === "object") {
      _deepFreeze(value);
    }
  }
  return Object.freeze(object);
}
new Proxy(/* @__PURE__ */ Object.create(null), {
  get: (_, prop) => {
    console.warn(
      "Please use `useRuntimeConfig()` instead of accessing config directly."
    );
    const runtimeConfig = useRuntimeConfig();
    if (prop in runtimeConfig) {
      return runtimeConfig[prop];
    }
    return void 0;
  }
});

function wrapToPromise(value) {
  if (!value || typeof value.then !== "function") {
    return Promise.resolve(value);
  }
  return value;
}
function asyncCall(function_, ...arguments_) {
  try {
    return wrapToPromise(function_(...arguments_));
  } catch (error) {
    return Promise.reject(error);
  }
}
function isPrimitive(value) {
  const type = typeof value;
  return value === null || type !== "object" && type !== "function";
}
function isPureObject(value) {
  const proto = Object.getPrototypeOf(value);
  return !proto || proto.isPrototypeOf(Object);
}
function stringify(value) {
  if (isPrimitive(value)) {
    return String(value);
  }
  if (isPureObject(value) || Array.isArray(value)) {
    return JSON.stringify(value);
  }
  if (typeof value.toJSON === "function") {
    return stringify(value.toJSON());
  }
  throw new Error("[unstorage] Cannot stringify value!");
}
function checkBufferSupport() {
  if (typeof Buffer === "undefined") {
    throw new TypeError("[unstorage] Buffer is not supported!");
  }
}
const BASE64_PREFIX = "base64:";
function serializeRaw(value) {
  if (typeof value === "string") {
    return value;
  }
  checkBufferSupport();
  const base64 = Buffer.from(value).toString("base64");
  return BASE64_PREFIX + base64;
}
function deserializeRaw(value) {
  if (typeof value !== "string") {
    return value;
  }
  if (!value.startsWith(BASE64_PREFIX)) {
    return value;
  }
  checkBufferSupport();
  return Buffer.from(value.slice(BASE64_PREFIX.length), "base64");
}

const storageKeyProperties = [
  "hasItem",
  "getItem",
  "getItemRaw",
  "setItem",
  "setItemRaw",
  "removeItem",
  "getMeta",
  "setMeta",
  "removeMeta",
  "getKeys",
  "clear",
  "mount",
  "unmount"
];
function prefixStorage(storage, base) {
  base = normalizeBaseKey(base);
  if (!base) {
    return storage;
  }
  const nsStorage = { ...storage };
  for (const property of storageKeyProperties) {
    nsStorage[property] = (key = "", ...args) => (
      // @ts-ignore
      storage[property](base + key, ...args)
    );
  }
  nsStorage.getKeys = (key = "", ...arguments_) => storage.getKeys(base + key, ...arguments_).then((keys) => keys.map((key2) => key2.slice(base.length)));
  return nsStorage;
}
function normalizeKey$1(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
}
function joinKeys(...keys) {
  return normalizeKey$1(keys.join(":"));
}
function normalizeBaseKey(base) {
  base = normalizeKey$1(base);
  return base ? base + ":" : "";
}

function defineDriver$1(factory) {
  return factory;
}

const DRIVER_NAME$1 = "memory";
const memory = defineDriver$1(() => {
  const data = /* @__PURE__ */ new Map();
  return {
    name: DRIVER_NAME$1,
    getInstance: () => data,
    hasItem(key) {
      return data.has(key);
    },
    getItem(key) {
      return data.get(key) ?? null;
    },
    getItemRaw(key) {
      return data.get(key) ?? null;
    },
    setItem(key, value) {
      data.set(key, value);
    },
    setItemRaw(key, value) {
      data.set(key, value);
    },
    removeItem(key) {
      data.delete(key);
    },
    getKeys() {
      return [...data.keys()];
    },
    clear() {
      data.clear();
    },
    dispose() {
      data.clear();
    }
  };
});

function createStorage(options = {}) {
  const context = {
    mounts: { "": options.driver || memory() },
    mountpoints: [""],
    watching: false,
    watchListeners: [],
    unwatch: {}
  };
  const getMount = (key) => {
    for (const base of context.mountpoints) {
      if (key.startsWith(base)) {
        return {
          base,
          relativeKey: key.slice(base.length),
          driver: context.mounts[base]
        };
      }
    }
    return {
      base: "",
      relativeKey: key,
      driver: context.mounts[""]
    };
  };
  const getMounts = (base, includeParent) => {
    return context.mountpoints.filter(
      (mountpoint) => mountpoint.startsWith(base) || includeParent && base.startsWith(mountpoint)
    ).map((mountpoint) => ({
      relativeBase: base.length > mountpoint.length ? base.slice(mountpoint.length) : void 0,
      mountpoint,
      driver: context.mounts[mountpoint]
    }));
  };
  const onChange = (event, key) => {
    if (!context.watching) {
      return;
    }
    key = normalizeKey$1(key);
    for (const listener of context.watchListeners) {
      listener(event, key);
    }
  };
  const startWatch = async () => {
    if (context.watching) {
      return;
    }
    context.watching = true;
    for (const mountpoint in context.mounts) {
      context.unwatch[mountpoint] = await watch(
        context.mounts[mountpoint],
        onChange,
        mountpoint
      );
    }
  };
  const stopWatch = async () => {
    if (!context.watching) {
      return;
    }
    for (const mountpoint in context.unwatch) {
      await context.unwatch[mountpoint]();
    }
    context.unwatch = {};
    context.watching = false;
  };
  const runBatch = (items, commonOptions, cb) => {
    const batches = /* @__PURE__ */ new Map();
    const getBatch = (mount) => {
      let batch = batches.get(mount.base);
      if (!batch) {
        batch = {
          driver: mount.driver,
          base: mount.base,
          items: []
        };
        batches.set(mount.base, batch);
      }
      return batch;
    };
    for (const item of items) {
      const isStringItem = typeof item === "string";
      const key = normalizeKey$1(isStringItem ? item : item.key);
      const value = isStringItem ? void 0 : item.value;
      const options2 = isStringItem || !item.options ? commonOptions : { ...commonOptions, ...item.options };
      const mount = getMount(key);
      getBatch(mount).items.push({
        key,
        value,
        relativeKey: mount.relativeKey,
        options: options2
      });
    }
    return Promise.all([...batches.values()].map((batch) => cb(batch))).then(
      (r) => r.flat()
    );
  };
  const storage = {
    // Item
    hasItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.hasItem, relativeKey, opts);
    },
    getItem(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => destr(value)
      );
    },
    getItems(items, commonOptions) {
      return runBatch(items, commonOptions, (batch) => {
        if (batch.driver.getItems) {
          return asyncCall(
            batch.driver.getItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              options: item.options
            })),
            commonOptions
          ).then(
            (r) => r.map((item) => ({
              key: joinKeys(batch.base, item.key),
              value: destr(item.value)
            }))
          );
        }
        return Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.getItem,
              item.relativeKey,
              item.options
            ).then((value) => ({
              key: item.key,
              value: destr(value)
            }));
          })
        );
      });
    },
    getItemRaw(key, opts = {}) {
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.getItemRaw) {
        return asyncCall(driver.getItemRaw, relativeKey, opts);
      }
      return asyncCall(driver.getItem, relativeKey, opts).then(
        (value) => deserializeRaw(value)
      );
    },
    async setItem(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.setItem) {
        return;
      }
      await asyncCall(driver.setItem, relativeKey, stringify(value), opts);
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async setItems(items, commonOptions) {
      await runBatch(items, commonOptions, async (batch) => {
        if (batch.driver.setItems) {
          return asyncCall(
            batch.driver.setItems,
            batch.items.map((item) => ({
              key: item.relativeKey,
              value: stringify(item.value),
              options: item.options
            })),
            commonOptions
          );
        }
        if (!batch.driver.setItem) {
          return;
        }
        await Promise.all(
          batch.items.map((item) => {
            return asyncCall(
              batch.driver.setItem,
              item.relativeKey,
              stringify(item.value),
              item.options
            );
          })
        );
      });
    },
    async setItemRaw(key, value, opts = {}) {
      if (value === void 0) {
        return storage.removeItem(key, opts);
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (driver.setItemRaw) {
        await asyncCall(driver.setItemRaw, relativeKey, value, opts);
      } else if (driver.setItem) {
        await asyncCall(driver.setItem, relativeKey, serializeRaw(value), opts);
      } else {
        return;
      }
      if (!driver.watch) {
        onChange("update", key);
      }
    },
    async removeItem(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { removeMeta: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      if (!driver.removeItem) {
        return;
      }
      await asyncCall(driver.removeItem, relativeKey, opts);
      if (opts.removeMeta || opts.removeMata) {
        await asyncCall(driver.removeItem, relativeKey + "$", opts);
      }
      if (!driver.watch) {
        onChange("remove", key);
      }
    },
    // Meta
    async getMeta(key, opts = {}) {
      if (typeof opts === "boolean") {
        opts = { nativeOnly: opts };
      }
      key = normalizeKey$1(key);
      const { relativeKey, driver } = getMount(key);
      const meta = /* @__PURE__ */ Object.create(null);
      if (driver.getMeta) {
        Object.assign(meta, await asyncCall(driver.getMeta, relativeKey, opts));
      }
      if (!opts.nativeOnly) {
        const value = await asyncCall(
          driver.getItem,
          relativeKey + "$",
          opts
        ).then((value_) => destr(value_));
        if (value && typeof value === "object") {
          if (typeof value.atime === "string") {
            value.atime = new Date(value.atime);
          }
          if (typeof value.mtime === "string") {
            value.mtime = new Date(value.mtime);
          }
          Object.assign(meta, value);
        }
      }
      return meta;
    },
    setMeta(key, value, opts = {}) {
      return this.setItem(key + "$", value, opts);
    },
    removeMeta(key, opts = {}) {
      return this.removeItem(key + "$", opts);
    },
    // Keys
    async getKeys(base, opts = {}) {
      base = normalizeBaseKey(base);
      const mounts = getMounts(base, true);
      let maskedMounts = [];
      const allKeys = [];
      for (const mount of mounts) {
        const rawKeys = await asyncCall(
          mount.driver.getKeys,
          mount.relativeBase,
          opts
        );
        for (const key of rawKeys) {
          const fullKey = mount.mountpoint + normalizeKey$1(key);
          if (!maskedMounts.some((p) => fullKey.startsWith(p))) {
            allKeys.push(fullKey);
          }
        }
        maskedMounts = [
          mount.mountpoint,
          ...maskedMounts.filter((p) => !p.startsWith(mount.mountpoint))
        ];
      }
      return base ? allKeys.filter(
        (key) => key.startsWith(base) && key[key.length - 1] !== "$"
      ) : allKeys.filter((key) => key[key.length - 1] !== "$");
    },
    // Utils
    async clear(base, opts = {}) {
      base = normalizeBaseKey(base);
      await Promise.all(
        getMounts(base, false).map(async (m) => {
          if (m.driver.clear) {
            return asyncCall(m.driver.clear, m.relativeBase, opts);
          }
          if (m.driver.removeItem) {
            const keys = await m.driver.getKeys(m.relativeBase || "", opts);
            return Promise.all(
              keys.map((key) => m.driver.removeItem(key, opts))
            );
          }
        })
      );
    },
    async dispose() {
      await Promise.all(
        Object.values(context.mounts).map((driver) => dispose(driver))
      );
    },
    async watch(callback) {
      await startWatch();
      context.watchListeners.push(callback);
      return async () => {
        context.watchListeners = context.watchListeners.filter(
          (listener) => listener !== callback
        );
        if (context.watchListeners.length === 0) {
          await stopWatch();
        }
      };
    },
    async unwatch() {
      context.watchListeners = [];
      await stopWatch();
    },
    // Mount
    mount(base, driver) {
      base = normalizeBaseKey(base);
      if (base && context.mounts[base]) {
        throw new Error(`already mounted at ${base}`);
      }
      if (base) {
        context.mountpoints.push(base);
        context.mountpoints.sort((a, b) => b.length - a.length);
      }
      context.mounts[base] = driver;
      if (context.watching) {
        Promise.resolve(watch(driver, onChange, base)).then((unwatcher) => {
          context.unwatch[base] = unwatcher;
        }).catch(console.error);
      }
      return storage;
    },
    async unmount(base, _dispose = true) {
      base = normalizeBaseKey(base);
      if (!base || !context.mounts[base]) {
        return;
      }
      if (context.watching && base in context.unwatch) {
        context.unwatch[base]();
        delete context.unwatch[base];
      }
      if (_dispose) {
        await dispose(context.mounts[base]);
      }
      context.mountpoints = context.mountpoints.filter((key) => key !== base);
      delete context.mounts[base];
    },
    getMount(key = "") {
      key = normalizeKey$1(key) + ":";
      const m = getMount(key);
      return {
        driver: m.driver,
        base: m.base
      };
    },
    getMounts(base = "", opts = {}) {
      base = normalizeKey$1(base);
      const mounts = getMounts(base, opts.parents);
      return mounts.map((m) => ({
        driver: m.driver,
        base: m.mountpoint
      }));
    },
    // Aliases
    keys: (base, opts = {}) => storage.getKeys(base, opts),
    get: (key, opts = {}) => storage.getItem(key, opts),
    set: (key, value, opts = {}) => storage.setItem(key, value, opts),
    has: (key, opts = {}) => storage.hasItem(key, opts),
    del: (key, opts = {}) => storage.removeItem(key, opts),
    remove: (key, opts = {}) => storage.removeItem(key, opts)
  };
  return storage;
}
function watch(driver, onChange, base) {
  return driver.watch ? driver.watch((event, key) => onChange(event, base + key)) : () => {
  };
}
async function dispose(driver) {
  if (typeof driver.dispose === "function") {
    await asyncCall(driver.dispose);
  }
}

const _assets = {

};

const normalizeKey = function normalizeKey(key) {
  if (!key) {
    return "";
  }
  return key.split("?")[0].replace(/[/\\]/g, ":").replace(/:+/g, ":").replace(/^:|:$/g, "");
};

const assets$1 = {
  getKeys() {
    return Promise.resolve(Object.keys(_assets))
  },
  hasItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(id in _assets)
  },
  getItem (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].import() : null)
  },
  getMeta (id) {
    id = normalizeKey(id);
    return Promise.resolve(_assets[id] ? _assets[id].meta : {})
  }
};

function defineDriver(factory) {
  return factory;
}
function createError(driver, message, opts) {
  const err = new Error(`[unstorage] [${driver}] ${message}`, opts);
  return err;
}
function createRequiredError(driver, name) {
  if (Array.isArray(name)) {
    return createError(
      driver,
      `Missing some of the required options ${name.map((n) => "`" + n + "`").join(", ")}`
    );
  }
  return createError(driver, `Missing required option \`${name}\`.`);
}

function ignoreNotfound(err) {
  return err.code === "ENOENT" || err.code === "EISDIR" ? null : err;
}
function ignoreExists(err) {
  return err.code === "EEXIST" ? null : err;
}
async function writeFile(path, data, encoding) {
  await ensuredir(dirname$1(path));
  return promises.writeFile(path, data, encoding);
}
function readFile(path, encoding) {
  return promises.readFile(path, encoding).catch(ignoreNotfound);
}
function unlink(path) {
  return promises.unlink(path).catch(ignoreNotfound);
}
function readdir(dir) {
  return promises.readdir(dir, { withFileTypes: true }).catch(ignoreNotfound).then((r) => r || []);
}
async function ensuredir(dir) {
  if (existsSync(dir)) {
    return;
  }
  await ensuredir(dirname$1(dir)).catch(ignoreExists);
  await promises.mkdir(dir).catch(ignoreExists);
}
async function readdirRecursive(dir, ignore) {
  if (ignore && ignore(dir)) {
    return [];
  }
  const entries = await readdir(dir);
  const files = [];
  await Promise.all(
    entries.map(async (entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        const dirFiles = await readdirRecursive(entryPath, ignore);
        files.push(...dirFiles.map((f) => entry.name + "/" + f));
      } else {
        if (!(ignore && ignore(entry.name))) {
          files.push(entry.name);
        }
      }
    })
  );
  return files;
}
async function rmRecursive(dir) {
  const entries = await readdir(dir);
  await Promise.all(
    entries.map((entry) => {
      const entryPath = resolve$1(dir, entry.name);
      if (entry.isDirectory()) {
        return rmRecursive(entryPath).then(() => promises.rmdir(entryPath));
      } else {
        return promises.unlink(entryPath);
      }
    })
  );
}

const PATH_TRAVERSE_RE = /\.\.:|\.\.$/;
const DRIVER_NAME = "fs-lite";
const unstorage_47drivers_47fs_45lite = defineDriver((opts = {}) => {
  if (!opts.base) {
    throw createRequiredError(DRIVER_NAME, "base");
  }
  opts.base = resolve$1(opts.base);
  const r = (key) => {
    if (PATH_TRAVERSE_RE.test(key)) {
      throw createError(
        DRIVER_NAME,
        `Invalid key: ${JSON.stringify(key)}. It should not contain .. segments`
      );
    }
    const resolved = join(opts.base, key.replace(/:/g, "/"));
    return resolved;
  };
  return {
    name: DRIVER_NAME,
    options: opts,
    hasItem(key) {
      return existsSync(r(key));
    },
    getItem(key) {
      return readFile(r(key), "utf8");
    },
    getItemRaw(key) {
      return readFile(r(key));
    },
    async getMeta(key) {
      const { atime, mtime, size, birthtime, ctime } = await promises.stat(r(key)).catch(() => ({}));
      return { atime, mtime, size, birthtime, ctime };
    },
    setItem(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value, "utf8");
    },
    setItemRaw(key, value) {
      if (opts.readOnly) {
        return;
      }
      return writeFile(r(key), value);
    },
    removeItem(key) {
      if (opts.readOnly) {
        return;
      }
      return unlink(r(key));
    },
    getKeys() {
      return readdirRecursive(r("."), opts.ignore);
    },
    async clear() {
      if (opts.readOnly || opts.noClear) {
        return;
      }
      await rmRecursive(r("."));
    }
  };
});

const storage = createStorage({});

storage.mount('/assets', assets$1);

storage.mount('data', unstorage_47drivers_47fs_45lite({"driver":"fsLite","base":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/.data/kv"}));

function useStorage(base = "") {
  return base ? prefixStorage(storage, base) : storage;
}

const defaultCacheOptions = {
  name: "_",
  base: "/cache",
  swr: true,
  maxAge: 1
};
function defineCachedFunction(fn, opts = {}) {
  opts = { ...defaultCacheOptions, ...opts };
  const pending = {};
  const group = opts.group || "nitro/functions";
  const name = opts.name || fn.name || "_";
  const integrity = opts.integrity || hash([fn, opts]);
  const validate = opts.validate || ((entry) => entry.value !== void 0);
  async function get(key, resolver, shouldInvalidateCache, event) {
    const cacheKey = [opts.base, group, name, key + ".json"].filter(Boolean).join(":").replace(/:\/$/, ":index");
    let entry = await useStorage().getItem(cacheKey) || {};
    if (typeof entry !== "object") {
      entry = {};
      const error = new Error("Malformed data read from cache.");
      console.error("[nitro] [cache]", error);
      useNitroApp().captureError(error, { event, tags: ["cache"] });
    }
    const ttl = (opts.maxAge ?? opts.maxAge ?? 0) * 1e3;
    if (ttl) {
      entry.expires = Date.now() + ttl;
    }
    const expired = shouldInvalidateCache || entry.integrity !== integrity || ttl && Date.now() - (entry.mtime || 0) > ttl || validate(entry) === false;
    const _resolve = async () => {
      const isPending = pending[key];
      if (!isPending) {
        if (entry.value !== void 0 && (opts.staleMaxAge || 0) >= 0 && opts.swr === false) {
          entry.value = void 0;
          entry.integrity = void 0;
          entry.mtime = void 0;
          entry.expires = void 0;
        }
        pending[key] = Promise.resolve(resolver());
      }
      try {
        entry.value = await pending[key];
      } catch (error) {
        if (!isPending) {
          delete pending[key];
        }
        throw error;
      }
      if (!isPending) {
        entry.mtime = Date.now();
        entry.integrity = integrity;
        delete pending[key];
        if (validate(entry) !== false) {
          const promise = useStorage().setItem(cacheKey, entry).catch((error) => {
            console.error(`[nitro] [cache] Cache write error.`, error);
            useNitroApp().captureError(error, { event, tags: ["cache"] });
          });
          if (event && event.waitUntil) {
            event.waitUntil(promise);
          }
        }
      }
    };
    const _resolvePromise = expired ? _resolve() : Promise.resolve();
    if (entry.value === void 0) {
      await _resolvePromise;
    } else if (expired && event && event.waitUntil) {
      event.waitUntil(_resolvePromise);
    }
    if (opts.swr && validate(entry) !== false) {
      _resolvePromise.catch((error) => {
        console.error(`[nitro] [cache] SWR handler error.`, error);
        useNitroApp().captureError(error, { event, tags: ["cache"] });
      });
      return entry;
    }
    return _resolvePromise.then(() => entry);
  }
  return async (...args) => {
    const shouldBypassCache = await opts.shouldBypassCache?.(...args);
    if (shouldBypassCache) {
      return fn(...args);
    }
    const key = await (opts.getKey || getKey)(...args);
    const shouldInvalidateCache = await opts.shouldInvalidateCache?.(...args);
    const entry = await get(
      key,
      () => fn(...args),
      shouldInvalidateCache,
      args[0] && isEvent(args[0]) ? args[0] : void 0
    );
    let value = entry.value;
    if (opts.transform) {
      value = await opts.transform(entry, ...args) || value;
    }
    return value;
  };
}
const cachedFunction = defineCachedFunction;
function getKey(...args) {
  return args.length > 0 ? hash(args, {}) : "";
}
function escapeKey(key) {
  return String(key).replace(/\W/g, "");
}
function defineCachedEventHandler(handler, opts = defaultCacheOptions) {
  const variableHeaderNames = (opts.varies || []).filter(Boolean).map((h) => h.toLowerCase()).sort();
  const _opts = {
    ...opts,
    getKey: async (event) => {
      const customKey = await opts.getKey?.(event);
      if (customKey) {
        return escapeKey(customKey);
      }
      const _path = event.node.req.originalUrl || event.node.req.url || event.path;
      const _pathname = escapeKey(decodeURI(parseURL(_path).pathname)).slice(0, 16) || "index";
      const _hashedPath = `${_pathname}.${hash(_path)}`;
      const _headers = variableHeaderNames.map((header) => [header, event.node.req.headers[header]]).map(([name, value]) => `${escapeKey(name)}.${hash(value)}`);
      return [_hashedPath, ..._headers].join(":");
    },
    validate: (entry) => {
      if (!entry.value) {
        return false;
      }
      if (entry.value.code >= 400) {
        return false;
      }
      if (entry.value.body === void 0) {
        return false;
      }
      if (entry.value.headers.etag === "undefined" || entry.value.headers["last-modified"] === "undefined") {
        return false;
      }
      return true;
    },
    group: opts.group || "nitro/handlers",
    integrity: opts.integrity || hash([handler, opts])
  };
  const _cachedHandler = cachedFunction(
    async (incomingEvent) => {
      const variableHeaders = {};
      for (const header of variableHeaderNames) {
        variableHeaders[header] = incomingEvent.node.req.headers[header];
      }
      const reqProxy = cloneWithProxy(incomingEvent.node.req, {
        headers: variableHeaders
      });
      const resHeaders = {};
      let _resSendBody;
      const resProxy = cloneWithProxy(incomingEvent.node.res, {
        statusCode: 200,
        writableEnded: false,
        writableFinished: false,
        headersSent: false,
        closed: false,
        getHeader(name) {
          return resHeaders[name];
        },
        setHeader(name, value) {
          resHeaders[name] = value;
          return this;
        },
        getHeaderNames() {
          return Object.keys(resHeaders);
        },
        hasHeader(name) {
          return name in resHeaders;
        },
        removeHeader(name) {
          delete resHeaders[name];
        },
        getHeaders() {
          return resHeaders;
        },
        end(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        write(chunk, arg2, arg3) {
          if (typeof chunk === "string") {
            _resSendBody = chunk;
          }
          if (typeof arg2 === "function") {
            arg2();
          }
          if (typeof arg3 === "function") {
            arg3();
          }
          return this;
        },
        writeHead(statusCode, headers2) {
          this.statusCode = statusCode;
          if (headers2) {
            for (const header in headers2) {
              this.setHeader(header, headers2[header]);
            }
          }
          return this;
        }
      });
      const event = createEvent(reqProxy, resProxy);
      event.fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: useNitroApp().localFetch
      });
      event.$fetch = (url, fetchOptions) => fetchWithEvent(event, url, fetchOptions, {
        fetch: globalThis.$fetch
      });
      event.context = incomingEvent.context;
      event.context.cache = {
        options: _opts
      };
      const body = await handler(event) || _resSendBody;
      const headers = event.node.res.getHeaders();
      headers.etag = String(
        headers.Etag || headers.etag || `W/"${hash(body)}"`
      );
      headers["last-modified"] = String(
        headers["Last-Modified"] || headers["last-modified"] || (/* @__PURE__ */ new Date()).toUTCString()
      );
      const cacheControl = [];
      if (opts.swr) {
        if (opts.maxAge) {
          cacheControl.push(`s-maxage=${opts.maxAge}`);
        }
        if (opts.staleMaxAge) {
          cacheControl.push(`stale-while-revalidate=${opts.staleMaxAge}`);
        } else {
          cacheControl.push("stale-while-revalidate");
        }
      } else if (opts.maxAge) {
        cacheControl.push(`max-age=${opts.maxAge}`);
      }
      if (cacheControl.length > 0) {
        headers["cache-control"] = cacheControl.join(", ");
      }
      const cacheEntry = {
        code: event.node.res.statusCode,
        headers,
        body
      };
      return cacheEntry;
    },
    _opts
  );
  return defineEventHandler(async (event) => {
    if (opts.headersOnly) {
      if (handleCacheHeaders(event, { maxAge: opts.maxAge })) {
        return;
      }
      return handler(event);
    }
    const response = await _cachedHandler(event);
    if (event.node.res.headersSent || event.node.res.writableEnded) {
      return response.body;
    }
    if (handleCacheHeaders(event, {
      modifiedTime: new Date(response.headers["last-modified"]),
      etag: response.headers.etag,
      maxAge: opts.maxAge
    })) {
      return;
    }
    event.node.res.statusCode = response.code;
    for (const name in response.headers) {
      const value = response.headers[name];
      if (name === "set-cookie") {
        event.node.res.appendHeader(
          name,
          splitCookiesString(value)
        );
      } else {
        event.node.res.setHeader(name, value);
      }
    }
    return response.body;
  });
}
function cloneWithProxy(obj, overrides) {
  return new Proxy(obj, {
    get(target, property, receiver) {
      if (property in overrides) {
        return overrides[property];
      }
      return Reflect.get(target, property, receiver);
    },
    set(target, property, value, receiver) {
      if (property in overrides) {
        overrides[property] = value;
        return true;
      }
      return Reflect.set(target, property, value, receiver);
    }
  });
}
const cachedEventHandler = defineCachedEventHandler;

function hasReqHeader(event, name, includes) {
  const value = getRequestHeader(event, name);
  return value && typeof value === "string" && value.toLowerCase().includes(includes);
}
function isJsonRequest(event) {
  if (hasReqHeader(event, "accept", "text/html")) {
    return false;
  }
  return hasReqHeader(event, "accept", "application/json") || hasReqHeader(event, "user-agent", "curl/") || hasReqHeader(event, "user-agent", "httpie/") || hasReqHeader(event, "sec-fetch-mode", "cors") || event.path.startsWith("/api/") || event.path.endsWith(".json");
}
function normalizeError(error) {
  const cwd = typeof process.cwd === "function" ? process.cwd() : "/";
  const stack = (error.stack || "").split("\n").splice(1).filter((line) => line.includes("at ")).map((line) => {
    const text = line.replace(cwd + "/", "./").replace("webpack:/", "").replace("file://", "").trim();
    return {
      text,
      internal: line.includes("node_modules") && !line.includes(".cache") || line.includes("internal") || line.includes("new Promise")
    };
  });
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage ?? (statusCode === 404 ? "Not Found" : "");
  const message = error.message || error.toString();
  return {
    stack,
    statusCode,
    statusMessage,
    message
  };
}
function _captureError(error, type) {
  console.error(`[nitro] [${type}]`, error);
  useNitroApp().captureError(error, { tags: [type] });
}
function trapUnhandledNodeErrors() {
  process.on(
    "unhandledRejection",
    (error) => _captureError(error, "unhandledRejection")
  );
  process.on(
    "uncaughtException",
    (error) => _captureError(error, "uncaughtException")
  );
}
function joinHeaders(value) {
  return Array.isArray(value) ? value.join(", ") : String(value);
}
function normalizeFetchResponse(response) {
  if (!response.headers.has("set-cookie")) {
    return response;
  }
  return new Response(response.body, {
    status: response.status,
    statusText: response.statusText,
    headers: normalizeCookieHeaders(response.headers)
  });
}
function normalizeCookieHeader(header = "") {
  return splitCookiesString(joinHeaders(header));
}
function normalizeCookieHeaders(headers) {
  const outgoingHeaders = new Headers();
  for (const [name, header] of headers) {
    if (name === "set-cookie") {
      for (const cookie of normalizeCookieHeader(header)) {
        outgoingHeaders.append("set-cookie", cookie);
      }
    } else {
      outgoingHeaders.set(name, joinHeaders(header));
    }
  }
  return outgoingHeaders;
}

const config = useRuntimeConfig();
const _routeRulesMatcher = toRouteMatcher(
  createRouter$1({ routes: config.nitro.routeRules })
);
function createRouteRulesHandler(ctx) {
  return eventHandler((event) => {
    const routeRules = getRouteRules(event);
    if (routeRules.headers) {
      setHeaders(event, routeRules.headers);
    }
    if (routeRules.redirect) {
      let target = routeRules.redirect.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.redirect._redirectStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return sendRedirect(event, target, routeRules.redirect.statusCode);
    }
    if (routeRules.proxy) {
      let target = routeRules.proxy.to;
      if (target.endsWith("/**")) {
        let targetPath = event.path;
        const strpBase = routeRules.proxy._proxyStripBase;
        if (strpBase) {
          targetPath = withoutBase(targetPath, strpBase);
        }
        target = joinURL(target.slice(0, -3), targetPath);
      } else if (event.path.includes("?")) {
        const query = getQuery(event.path);
        target = withQuery(target, query);
      }
      return proxyRequest(event, target, {
        fetch: ctx.localFetch,
        ...routeRules.proxy
      });
    }
  });
}
function getRouteRules(event) {
  event.context._nitro = event.context._nitro || {};
  if (!event.context._nitro.routeRules) {
    event.context._nitro.routeRules = getRouteRulesForPath(
      withoutBase(event.path.split("?")[0], useRuntimeConfig().app.baseURL)
    );
  }
  return event.context._nitro.routeRules;
}
function getRouteRulesForPath(path) {
  return defu({}, ..._routeRulesMatcher.matchAll(path).reverse());
}

function createContext(opts = {}) {
  let currentInstance;
  let isSingleton = false;
  const checkConflict = (instance) => {
    if (currentInstance && currentInstance !== instance) {
      throw new Error("Context conflict");
    }
  };
  let als;
  if (opts.asyncContext) {
    const _AsyncLocalStorage = opts.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    if (_AsyncLocalStorage) {
      als = new _AsyncLocalStorage();
    } else {
      console.warn("[unctx] `AsyncLocalStorage` is not provided.");
    }
  }
  const _getCurrentInstance = () => {
    if (als && currentInstance === void 0) {
      const instance = als.getStore();
      if (instance !== void 0) {
        return instance;
      }
    }
    return currentInstance;
  };
  return {
    use: () => {
      const _instance = _getCurrentInstance();
      if (_instance === void 0) {
        throw new Error("Context is not available");
      }
      return _instance;
    },
    tryUse: () => {
      return _getCurrentInstance();
    },
    set: (instance, replace) => {
      if (!replace) {
        checkConflict(instance);
      }
      currentInstance = instance;
      isSingleton = true;
    },
    unset: () => {
      currentInstance = void 0;
      isSingleton = false;
    },
    call: (instance, callback) => {
      checkConflict(instance);
      currentInstance = instance;
      try {
        return als ? als.run(instance, callback) : callback();
      } finally {
        if (!isSingleton) {
          currentInstance = void 0;
        }
      }
    },
    async callAsync(instance, callback) {
      currentInstance = instance;
      const onRestore = () => {
        currentInstance = instance;
      };
      const onLeave = () => currentInstance === instance ? onRestore : void 0;
      asyncHandlers.add(onLeave);
      try {
        const r = als ? als.run(instance, callback) : callback();
        if (!isSingleton) {
          currentInstance = void 0;
        }
        return await r;
      } finally {
        asyncHandlers.delete(onLeave);
      }
    }
  };
}
function createNamespace(defaultOpts = {}) {
  const contexts = {};
  return {
    get(key, opts = {}) {
      if (!contexts[key]) {
        contexts[key] = createContext({ ...defaultOpts, ...opts });
      }
      contexts[key];
      return contexts[key];
    }
  };
}
const _globalThis = typeof globalThis !== "undefined" ? globalThis : typeof self !== "undefined" ? self : typeof global !== "undefined" ? global : {};
const globalKey = "__unctx__";
const defaultNamespace = _globalThis[globalKey] || (_globalThis[globalKey] = createNamespace());
const getContext = (key, opts = {}) => defaultNamespace.get(key, opts);
const asyncHandlersKey = "__unctx_async_handlers__";
const asyncHandlers = _globalThis[asyncHandlersKey] || (_globalThis[asyncHandlersKey] = /* @__PURE__ */ new Set());

const nitroAsyncContext = getContext("nitro-app", {
  asyncContext: true,
  AsyncLocalStorage: AsyncLocalStorage 
});

const appConfig = {"name":"vinxi","routers":[{"name":"public","type":"static","base":"/","dir":"./public","root":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend","order":0,"outDir":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/.vinxi/build/public"},{"name":"ssr","type":"http","link":{"client":"client"},"handler":"src/entry-server.tsx","extensions":["js","jsx","ts","tsx"],"target":"server","root":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend","base":"/","outDir":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/.vinxi/build/ssr","order":1},{"name":"client","type":"client","base":"/_build","handler":"src/entry-client.tsx","extensions":["js","jsx","ts","tsx"],"target":"browser","root":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend","outDir":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/.vinxi/build/client","order":2},{"name":"server-fns","type":"http","base":"/_server","handler":"../../node_modules/.pnpm/@solidjs+start@1.0.6_rollup@4.21.2_solid-js@1.8.22_vinxi@0.4.2_@types+node@22.5.4_ioredis@5.4_rqe5y2puywfcbhvwpb2ucfb3lu/node_modules/@solidjs/start/dist/runtime/server-handler.js","target":"server","root":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend","outDir":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/.vinxi/build/server-fns","order":3}],"server":{"compressPublicAssets":{"brotli":true},"routeRules":{"/_build/assets/**":{"headers":{"cache-control":"public, immutable, max-age=31536000"}}},"experimental":{"asyncContext":true},"minify":false,"prerender":{"crawlLinks":false}},"root":"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend"};
				const buildManifest = {"ssr":{"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff":{"file":"assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff2":{"file":"assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff":{"file":"assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff2":{"file":"assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff":{"file":"assets/montserrat-cyrillic-400-normal-95VoEncJ.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff2":{"file":"assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff":{"file":"assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff2":{"file":"assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff":{"file":"assets/montserrat-cyrillic-700-normal-Blzg39qC.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff2":{"file":"assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff":{"file":"assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff2":{"file":"assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff":{"file":"assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff":{"file":"assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff":{"file":"assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff":{"file":"assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff":{"file":"assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff":{"file":"assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff":{"file":"assets/montserrat-latin-200-normal-ByeQgr9u.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff2":{"file":"assets/montserrat-latin-200-normal-Co0glrxx.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff":{"file":"assets/montserrat-latin-300-normal-DrgRfrdN.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff2":{"file":"assets/montserrat-latin-300-normal-DYYY4VIB.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff":{"file":"assets/montserrat-latin-400-normal-BhTl8mZv.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2":{"file":"assets/montserrat-latin-400-normal-BfmCfwfZ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff":{"file":"assets/montserrat-latin-500-normal-T-BM6Fhn.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2":{"file":"assets/montserrat-latin-500-normal-CN3hDfLq.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff":{"file":"assets/montserrat-latin-700-normal-o5q9xX7W.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2":{"file":"assets/montserrat-latin-700-normal-Dkxlx_w4.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff":{"file":"assets/montserrat-latin-900-normal-B8YluUfy.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff2":{"file":"assets/montserrat-latin-900-normal-HIE66ZyV.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff":{"file":"assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff2":{"file":"assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff":{"file":"assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff2":{"file":"assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff":{"file":"assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff2":{"file":"assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff":{"file":"assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff2":{"file":"assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff":{"file":"assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff2":{"file":"assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff":{"file":"assets/montserrat-latin-ext-900-normal-B2fljPr4.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff2":{"file":"assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff":{"file":"assets/montserrat-vietnamese-200-normal-CuJsZitD.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff2":{"file":"assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff":{"file":"assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff2":{"file":"assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff":{"file":"assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff2":{"file":"assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff":{"file":"assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff2":{"file":"assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff":{"file":"assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff2":{"file":"assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff":{"file":"assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff2":{"file":"assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff":{"file":"assets/spectral-cyrillic-200-normal-DBFgNIo-.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff2":{"file":"assets/spectral-cyrillic-200-normal-B_x--0bF.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff":{"file":"assets/spectral-cyrillic-300-normal-BuwX68dz.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff2":{"file":"assets/spectral-cyrillic-300-normal-3mshyS_1.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff":{"file":"assets/spectral-cyrillic-400-normal-BSztQViE.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff2":{"file":"assets/spectral-cyrillic-400-normal-DSdESYJf.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff":{"file":"assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff2":{"file":"assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff":{"file":"assets/spectral-cyrillic-600-normal-CGQrotlm.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff2":{"file":"assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff":{"file":"assets/spectral-cyrillic-700-normal-COc0fxPc.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff2":{"file":"assets/spectral-cyrillic-700-normal-97LnvvSG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff":{"file":"assets/spectral-latin-200-normal-WQAAvAV9.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff2":{"file":"assets/spectral-latin-200-normal-WAtLTr05.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff":{"file":"assets/spectral-latin-300-normal-BJ3qdcga.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff2":{"file":"assets/spectral-latin-300-normal-8KdwH-BZ.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff":{"file":"assets/spectral-latin-400-normal-CFnFwP8t.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff2":{"file":"assets/spectral-latin-400-normal-MXBVgyrt.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff":{"file":"assets/spectral-latin-500-normal-D__sIyLH.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff2":{"file":"assets/spectral-latin-500-normal-5HBkxKjs.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff":{"file":"assets/spectral-latin-600-normal-BLtkLvbx.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff2":{"file":"assets/spectral-latin-600-normal-CPXfyHlN.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff":{"file":"assets/spectral-latin-700-normal-Rag2g1u6.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2":{"file":"assets/spectral-latin-700-normal-BqcegO99.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff":{"file":"assets/spectral-latin-ext-200-normal-Ca1vATCy.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff2":{"file":"assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff":{"file":"assets/spectral-latin-ext-300-normal-DTEvBdvf.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff2":{"file":"assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff":{"file":"assets/spectral-latin-ext-400-normal-COH_Sm0M.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff2":{"file":"assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff":{"file":"assets/spectral-latin-ext-500-normal-BKlxGjla.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff2":{"file":"assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff":{"file":"assets/spectral-latin-ext-600-normal-B2UuAU7N.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff2":{"file":"assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff":{"file":"assets/spectral-latin-ext-700-normal-riPWKqQE.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff2":{"file":"assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff":{"file":"assets/spectral-vietnamese-200-normal-BRyI-oGK.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff2":{"file":"assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff":{"file":"assets/spectral-vietnamese-300-normal-DA2hpTYn.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff2":{"file":"assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff":{"file":"assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff2":{"file":"assets/spectral-vietnamese-400-normal-12CTPExn.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff":{"file":"assets/spectral-vietnamese-500-normal-DRaA1n-5.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff2":{"file":"assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff":{"file":"assets/spectral-vietnamese-600-normal-CYCcfOL0.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff2":{"file":"assets/spectral-vietnamese-600-normal-VomzNZvj.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff":{"file":"assets/spectral-vietnamese-700-normal-CBpdhthx.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff2":{"file":"assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff2"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.svg":{"file":"assets/Phosphor-BXRFlF4V.svg","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.svg"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.ttf":{"file":"assets/Phosphor-CDxgqcPu.ttf","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.ttf"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff":{"file":"assets/Phosphor-BdqudwT5.woff","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2":{"file":"assets/Phosphor-DtdjzkpE.woff2","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2"},"_action-DjunEzuR.js":{"file":"assets/action-DjunEzuR.js","name":"action","imports":["_routing-KofvCWNq.js","_styles-2TqKWpP5.js"]},"_cn-YZS7jNQp.js":{"file":"assets/cn-YZS7jNQp.js","name":"cn"},"_components-CEmY4i8r.js":{"file":"assets/components-CEmY4i8r.js","name":"components","imports":["_routing-KofvCWNq.js"]},"_images-CtpvCe-X.js":{"file":"assets/images-CtpvCe-X.js","name":"images","imports":["_styles-2TqKWpP5.js"]},"_routing-KofvCWNq.js":{"file":"assets/routing-KofvCWNq.js","name":"routing"},"_styles-2TqKWpP5.js":{"file":"assets/styles-2TqKWpP5.js","name":"styles","imports":["_routing-KofvCWNq.js"]},"_styles-EAaAWUae.js":{"file":"assets/styles-EAaAWUae.js","name":"styles"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_components-CEmY4i8r.js","_routing-KofvCWNq.js"]},"src/routes/about.tsx?pick=default&pick=$css":{"file":"about.js","name":"about","src":"src/routes/about.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"src/routes/contactos.tsx?pick=default&pick=$css":{"file":"contactos.js","name":"contactos","src":"src/routes/contactos.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_styles-2TqKWpP5.js","_styles-EAaAWUae.js","_action-DjunEzuR.js","_routing-KofvCWNq.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_components-CEmY4i8r.js","_routing-KofvCWNq.js"]},"src/routes/projetos/[slug].tsx?pick=default&pick=$css":{"file":"_slug_.js","name":"_slug_","src":"src/routes/projetos/[slug].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_styles-2TqKWpP5.js","_images-CtpvCe-X.js","_cn-YZS7jNQp.js","_routing-KofvCWNq.js"]},"src/routes/projetos/index.tsx?pick=default&pick=$css":{"file":"index2.js","name":"index","src":"src/routes/projetos/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_styles-2TqKWpP5.js","_styles-EAaAWUae.js","_images-CtpvCe-X.js","_cn-YZS7jNQp.js","_routing-KofvCWNq.js"]},"src/routes/sobre-nos.tsx?pick=default&pick=$css":{"file":"sobre-nos.js","name":"sobre-nos","src":"src/routes/sobre-nos.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true},"virtual:$vinxi/handler/ssr":{"file":"ssr.js","name":"ssr","src":"virtual:$vinxi/handler/ssr","isEntry":true,"imports":["_styles-2TqKWpP5.js","_routing-KofvCWNq.js","_styles-EAaAWUae.js","_cn-YZS7jNQp.js","_action-DjunEzuR.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/contactos.tsx?pick=default&pick=$css","src/routes/contactos.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/sobre-nos.tsx?pick=default&pick=$css","src/routes/sobre-nos.tsx?pick=default&pick=$css","src/routes/projetos/[slug].tsx?pick=default&pick=$css","src/routes/projetos/[slug].tsx?pick=default&pick=$css","src/routes/projetos/index.tsx?pick=default&pick=$css","src/routes/projetos/index.tsx?pick=default&pick=$css"],"css":["assets/ssr-B2cBF7do.css"],"assets":["assets/spectral-cyrillic-200-normal-B_x--0bF.woff2","assets/spectral-cyrillic-200-normal-DBFgNIo-.woff","assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2","assets/spectral-vietnamese-200-normal-BRyI-oGK.woff","assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2","assets/spectral-latin-ext-200-normal-Ca1vATCy.woff","assets/spectral-latin-200-normal-WAtLTr05.woff2","assets/spectral-latin-200-normal-WQAAvAV9.woff","assets/spectral-cyrillic-300-normal-3mshyS_1.woff2","assets/spectral-cyrillic-300-normal-BuwX68dz.woff","assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2","assets/spectral-vietnamese-300-normal-DA2hpTYn.woff","assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2","assets/spectral-latin-ext-300-normal-DTEvBdvf.woff","assets/spectral-latin-300-normal-8KdwH-BZ.woff2","assets/spectral-latin-300-normal-BJ3qdcga.woff","assets/spectral-cyrillic-400-normal-DSdESYJf.woff2","assets/spectral-cyrillic-400-normal-BSztQViE.woff","assets/spectral-vietnamese-400-normal-12CTPExn.woff2","assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff","assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2","assets/spectral-latin-ext-400-normal-COH_Sm0M.woff","assets/spectral-latin-400-normal-MXBVgyrt.woff2","assets/spectral-latin-400-normal-CFnFwP8t.woff","assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2","assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff","assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2","assets/spectral-vietnamese-500-normal-DRaA1n-5.woff","assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2","assets/spectral-latin-ext-500-normal-BKlxGjla.woff","assets/spectral-latin-500-normal-5HBkxKjs.woff2","assets/spectral-latin-500-normal-D__sIyLH.woff","assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2","assets/spectral-cyrillic-600-normal-CGQrotlm.woff","assets/spectral-vietnamese-600-normal-VomzNZvj.woff2","assets/spectral-vietnamese-600-normal-CYCcfOL0.woff","assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2","assets/spectral-latin-ext-600-normal-B2UuAU7N.woff","assets/spectral-latin-600-normal-CPXfyHlN.woff2","assets/spectral-latin-600-normal-BLtkLvbx.woff","assets/spectral-cyrillic-700-normal-97LnvvSG.woff2","assets/spectral-cyrillic-700-normal-COc0fxPc.woff","assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2","assets/spectral-vietnamese-700-normal-CBpdhthx.woff","assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2","assets/spectral-latin-ext-700-normal-riPWKqQE.woff","assets/spectral-latin-700-normal-BqcegO99.woff2","assets/spectral-latin-700-normal-Rag2g1u6.woff","assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2","assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff","assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2","assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff","assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2","assets/montserrat-vietnamese-200-normal-CuJsZitD.woff","assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2","assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff","assets/montserrat-latin-200-normal-Co0glrxx.woff2","assets/montserrat-latin-200-normal-ByeQgr9u.woff","assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2","assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff","assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2","assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff","assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2","assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff","assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2","assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff","assets/montserrat-latin-300-normal-DYYY4VIB.woff2","assets/montserrat-latin-300-normal-DrgRfrdN.woff","assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2","assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff","assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2","assets/montserrat-cyrillic-400-normal-95VoEncJ.woff","assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2","assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff","assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2","assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff","assets/montserrat-latin-400-normal-BfmCfwfZ.woff2","assets/montserrat-latin-400-normal-BhTl8mZv.woff","assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2","assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff","assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2","assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff","assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2","assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff","assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2","assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff","assets/montserrat-latin-500-normal-CN3hDfLq.woff2","assets/montserrat-latin-500-normal-T-BM6Fhn.woff","assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2","assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff","assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2","assets/montserrat-cyrillic-700-normal-Blzg39qC.woff","assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2","assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff","assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2","assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff","assets/montserrat-latin-700-normal-Dkxlx_w4.woff2","assets/montserrat-latin-700-normal-o5q9xX7W.woff","assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2","assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff","assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2","assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff","assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2","assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff","assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2","assets/montserrat-latin-ext-900-normal-B2fljPr4.woff","assets/montserrat-latin-900-normal-HIE66ZyV.woff2","assets/montserrat-latin-900-normal-B8YluUfy.woff","assets/Phosphor-DtdjzkpE.woff2","assets/Phosphor-BdqudwT5.woff","assets/Phosphor-CDxgqcPu.ttf","assets/Phosphor-BXRFlF4V.svg"]}},"client":{"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff":{"file":"assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff2":{"file":"assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff":{"file":"assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff2":{"file":"assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff":{"file":"assets/montserrat-cyrillic-400-normal-95VoEncJ.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff2":{"file":"assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff":{"file":"assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff2":{"file":"assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff":{"file":"assets/montserrat-cyrillic-700-normal-Blzg39qC.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff2":{"file":"assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff":{"file":"assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff2":{"file":"assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff":{"file":"assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff":{"file":"assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff":{"file":"assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff":{"file":"assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff":{"file":"assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff":{"file":"assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff":{"file":"assets/montserrat-latin-200-normal-ByeQgr9u.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff2":{"file":"assets/montserrat-latin-200-normal-Co0glrxx.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff":{"file":"assets/montserrat-latin-300-normal-DrgRfrdN.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff2":{"file":"assets/montserrat-latin-300-normal-DYYY4VIB.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff":{"file":"assets/montserrat-latin-400-normal-BhTl8mZv.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2":{"file":"assets/montserrat-latin-400-normal-BfmCfwfZ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff":{"file":"assets/montserrat-latin-500-normal-T-BM6Fhn.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2":{"file":"assets/montserrat-latin-500-normal-CN3hDfLq.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff":{"file":"assets/montserrat-latin-700-normal-o5q9xX7W.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2":{"file":"assets/montserrat-latin-700-normal-Dkxlx_w4.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff":{"file":"assets/montserrat-latin-900-normal-B8YluUfy.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff2":{"file":"assets/montserrat-latin-900-normal-HIE66ZyV.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff":{"file":"assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff2":{"file":"assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff":{"file":"assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff2":{"file":"assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff":{"file":"assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff2":{"file":"assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff":{"file":"assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff2":{"file":"assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff":{"file":"assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff2":{"file":"assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff":{"file":"assets/montserrat-latin-ext-900-normal-B2fljPr4.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff2":{"file":"assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff":{"file":"assets/montserrat-vietnamese-200-normal-CuJsZitD.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff2":{"file":"assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff":{"file":"assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff2":{"file":"assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff":{"file":"assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff2":{"file":"assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff":{"file":"assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff2":{"file":"assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff":{"file":"assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff2":{"file":"assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff":{"file":"assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff2":{"file":"assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff":{"file":"assets/spectral-cyrillic-200-normal-DBFgNIo-.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff2":{"file":"assets/spectral-cyrillic-200-normal-B_x--0bF.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff":{"file":"assets/spectral-cyrillic-300-normal-BuwX68dz.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff2":{"file":"assets/spectral-cyrillic-300-normal-3mshyS_1.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff":{"file":"assets/spectral-cyrillic-400-normal-BSztQViE.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff2":{"file":"assets/spectral-cyrillic-400-normal-DSdESYJf.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff":{"file":"assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff2":{"file":"assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff":{"file":"assets/spectral-cyrillic-600-normal-CGQrotlm.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff2":{"file":"assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff":{"file":"assets/spectral-cyrillic-700-normal-COc0fxPc.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff2":{"file":"assets/spectral-cyrillic-700-normal-97LnvvSG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff":{"file":"assets/spectral-latin-200-normal-WQAAvAV9.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff2":{"file":"assets/spectral-latin-200-normal-WAtLTr05.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff":{"file":"assets/spectral-latin-300-normal-BJ3qdcga.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff2":{"file":"assets/spectral-latin-300-normal-8KdwH-BZ.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff":{"file":"assets/spectral-latin-400-normal-CFnFwP8t.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff2":{"file":"assets/spectral-latin-400-normal-MXBVgyrt.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff":{"file":"assets/spectral-latin-500-normal-D__sIyLH.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff2":{"file":"assets/spectral-latin-500-normal-5HBkxKjs.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff":{"file":"assets/spectral-latin-600-normal-BLtkLvbx.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff2":{"file":"assets/spectral-latin-600-normal-CPXfyHlN.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff":{"file":"assets/spectral-latin-700-normal-Rag2g1u6.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2":{"file":"assets/spectral-latin-700-normal-BqcegO99.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff":{"file":"assets/spectral-latin-ext-200-normal-Ca1vATCy.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff2":{"file":"assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff":{"file":"assets/spectral-latin-ext-300-normal-DTEvBdvf.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff2":{"file":"assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff":{"file":"assets/spectral-latin-ext-400-normal-COH_Sm0M.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff2":{"file":"assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff":{"file":"assets/spectral-latin-ext-500-normal-BKlxGjla.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff2":{"file":"assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff":{"file":"assets/spectral-latin-ext-600-normal-B2UuAU7N.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff2":{"file":"assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff":{"file":"assets/spectral-latin-ext-700-normal-riPWKqQE.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff2":{"file":"assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff":{"file":"assets/spectral-vietnamese-200-normal-BRyI-oGK.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff2":{"file":"assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff":{"file":"assets/spectral-vietnamese-300-normal-DA2hpTYn.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff2":{"file":"assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff":{"file":"assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff2":{"file":"assets/spectral-vietnamese-400-normal-12CTPExn.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff":{"file":"assets/spectral-vietnamese-500-normal-DRaA1n-5.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff2":{"file":"assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff":{"file":"assets/spectral-vietnamese-600-normal-CYCcfOL0.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff2":{"file":"assets/spectral-vietnamese-600-normal-VomzNZvj.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff":{"file":"assets/spectral-vietnamese-700-normal-CBpdhthx.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff2":{"file":"assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff2"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.svg":{"file":"assets/Phosphor-BXRFlF4V.svg","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.svg"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.ttf":{"file":"assets/Phosphor-CDxgqcPu.ttf","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.ttf"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff":{"file":"assets/Phosphor-BdqudwT5.woff","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2":{"file":"assets/Phosphor-DtdjzkpE.woff2","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2"},"../../node_modules/.pnpm/@sanity+client@6.21.3_debug@4.3.7/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js":{"file":"assets/stegaEncodeSourceMap-BFqegUkD.js","name":"stegaEncodeSourceMap","src":"../../node_modules/.pnpm/@sanity+client@6.21.3_debug@4.3.7/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js","isDynamicEntry":true,"imports":["_images-aBJc1Pbn.js","_web-Cw_Dym33.js","_preload-helper-DYd7aIoe.js"]},"_action-BKws-HQi.js":{"file":"assets/action-BKws-HQi.js","name":"action","imports":["_web-Cw_Dym33.js","_routing-VhRhlrWH.js","_styles-CtYowtZs.js"]},"_browser-8omxnHMC.js":{"file":"assets/browser-8omxnHMC.js","name":"browser","isDynamicEntry":true,"imports":["_images-aBJc1Pbn.js"]},"_components-BT2slyNk.js":{"file":"assets/components-BT2slyNk.js","name":"components","imports":["_web-Cw_Dym33.js","_routing-VhRhlrWH.js"]},"_images-aBJc1Pbn.js":{"file":"assets/images-aBJc1Pbn.js","name":"images","imports":["_web-Cw_Dym33.js","_preload-helper-DYd7aIoe.js"],"dynamicImports":["../../node_modules/.pnpm/@sanity+client@6.21.3_debug@4.3.7/node_modules/@sanity/client/dist/_chunks-es/stegaEncodeSourceMap.js","_browser-8omxnHMC.js","_browser-8omxnHMC.js"]},"_index-Cf71NSVw.js":{"file":"assets/index-Cf71NSVw.js","name":"index","imports":["_styles-CtYowtZs.js","_web-Cw_Dym33.js","_routing-VhRhlrWH.js"]},"_preload-helper-DYd7aIoe.js":{"file":"assets/preload-helper-DYd7aIoe.js","name":"preload-helper"},"_routing-VhRhlrWH.js":{"file":"assets/routing-VhRhlrWH.js","name":"routing","imports":["_web-Cw_Dym33.js"]},"_styles-CtYowtZs.js":{"file":"assets/styles-CtYowtZs.js","name":"styles","imports":["_web-Cw_Dym33.js","_routing-VhRhlrWH.js"]},"_utils-dZO239yP.js":{"file":"assets/utils-dZO239yP.js","name":"utils","imports":["_styles-CtYowtZs.js"]},"_web-Cw_Dym33.js":{"file":"assets/web-Cw_Dym33.js","name":"web"},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"assets/_...404_-DvBTMdu5.js","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Cw_Dym33.js","_components-BT2slyNk.js","_routing-VhRhlrWH.js"]},"src/routes/about.tsx?pick=default&pick=$css":{"file":"assets/about-C3TBm2tE.js","name":"about","src":"src/routes/about.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Cw_Dym33.js"]},"src/routes/contactos.tsx?pick=default&pick=$css":{"file":"assets/contactos-CtWc_Nx6.js","name":"contactos","src":"src/routes/contactos.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Cw_Dym33.js","_styles-CtYowtZs.js","_index-Cf71NSVw.js","_action-BKws-HQi.js","_utils-dZO239yP.js","_routing-VhRhlrWH.js"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"assets/index-1Hxyzcqf.js","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Cw_Dym33.js","_components-BT2slyNk.js","_routing-VhRhlrWH.js"]},"src/routes/projetos/[slug].tsx?pick=default&pick=$css":{"file":"assets/_slug_-I_KSXykn.js","name":"_slug_","src":"src/routes/projetos/[slug].tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Cw_Dym33.js","_styles-CtYowtZs.js","_images-aBJc1Pbn.js","_routing-VhRhlrWH.js","_preload-helper-DYd7aIoe.js"]},"src/routes/projetos/index.tsx?pick=default&pick=$css":{"file":"assets/index-D0OGMJsU.js","name":"index","src":"src/routes/projetos/index.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Cw_Dym33.js","_styles-CtYowtZs.js","_images-aBJc1Pbn.js","_index-Cf71NSVw.js","_utils-dZO239yP.js","_routing-VhRhlrWH.js","_preload-helper-DYd7aIoe.js"]},"src/routes/sobre-nos.tsx?pick=default&pick=$css":{"file":"assets/sobre-nos-pG7yVOlw.js","name":"sobre-nos","src":"src/routes/sobre-nos.tsx?pick=default&pick=$css","isEntry":true,"isDynamicEntry":true,"imports":["_web-Cw_Dym33.js"]},"virtual:$vinxi/handler/client":{"file":"assets/client-BWSyo5q4.js","name":"client","src":"virtual:$vinxi/handler/client","isEntry":true,"imports":["_web-Cw_Dym33.js","_preload-helper-DYd7aIoe.js","_styles-CtYowtZs.js","_routing-VhRhlrWH.js","_index-Cf71NSVw.js","_action-BKws-HQi.js"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/contactos.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/sobre-nos.tsx?pick=default&pick=$css","src/routes/projetos/[slug].tsx?pick=default&pick=$css","src/routes/projetos/index.tsx?pick=default&pick=$css"],"css":["assets/client-B2cBF7do.css"],"assets":["assets/spectral-cyrillic-200-normal-B_x--0bF.woff2","assets/spectral-cyrillic-200-normal-DBFgNIo-.woff","assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2","assets/spectral-vietnamese-200-normal-BRyI-oGK.woff","assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2","assets/spectral-latin-ext-200-normal-Ca1vATCy.woff","assets/spectral-latin-200-normal-WAtLTr05.woff2","assets/spectral-latin-200-normal-WQAAvAV9.woff","assets/spectral-cyrillic-300-normal-3mshyS_1.woff2","assets/spectral-cyrillic-300-normal-BuwX68dz.woff","assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2","assets/spectral-vietnamese-300-normal-DA2hpTYn.woff","assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2","assets/spectral-latin-ext-300-normal-DTEvBdvf.woff","assets/spectral-latin-300-normal-8KdwH-BZ.woff2","assets/spectral-latin-300-normal-BJ3qdcga.woff","assets/spectral-cyrillic-400-normal-DSdESYJf.woff2","assets/spectral-cyrillic-400-normal-BSztQViE.woff","assets/spectral-vietnamese-400-normal-12CTPExn.woff2","assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff","assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2","assets/spectral-latin-ext-400-normal-COH_Sm0M.woff","assets/spectral-latin-400-normal-MXBVgyrt.woff2","assets/spectral-latin-400-normal-CFnFwP8t.woff","assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2","assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff","assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2","assets/spectral-vietnamese-500-normal-DRaA1n-5.woff","assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2","assets/spectral-latin-ext-500-normal-BKlxGjla.woff","assets/spectral-latin-500-normal-5HBkxKjs.woff2","assets/spectral-latin-500-normal-D__sIyLH.woff","assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2","assets/spectral-cyrillic-600-normal-CGQrotlm.woff","assets/spectral-vietnamese-600-normal-VomzNZvj.woff2","assets/spectral-vietnamese-600-normal-CYCcfOL0.woff","assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2","assets/spectral-latin-ext-600-normal-B2UuAU7N.woff","assets/spectral-latin-600-normal-CPXfyHlN.woff2","assets/spectral-latin-600-normal-BLtkLvbx.woff","assets/spectral-cyrillic-700-normal-97LnvvSG.woff2","assets/spectral-cyrillic-700-normal-COc0fxPc.woff","assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2","assets/spectral-vietnamese-700-normal-CBpdhthx.woff","assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2","assets/spectral-latin-ext-700-normal-riPWKqQE.woff","assets/spectral-latin-700-normal-BqcegO99.woff2","assets/spectral-latin-700-normal-Rag2g1u6.woff","assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2","assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff","assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2","assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff","assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2","assets/montserrat-vietnamese-200-normal-CuJsZitD.woff","assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2","assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff","assets/montserrat-latin-200-normal-Co0glrxx.woff2","assets/montserrat-latin-200-normal-ByeQgr9u.woff","assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2","assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff","assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2","assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff","assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2","assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff","assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2","assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff","assets/montserrat-latin-300-normal-DYYY4VIB.woff2","assets/montserrat-latin-300-normal-DrgRfrdN.woff","assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2","assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff","assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2","assets/montserrat-cyrillic-400-normal-95VoEncJ.woff","assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2","assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff","assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2","assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff","assets/montserrat-latin-400-normal-BfmCfwfZ.woff2","assets/montserrat-latin-400-normal-BhTl8mZv.woff","assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2","assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff","assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2","assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff","assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2","assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff","assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2","assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff","assets/montserrat-latin-500-normal-CN3hDfLq.woff2","assets/montserrat-latin-500-normal-T-BM6Fhn.woff","assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2","assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff","assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2","assets/montserrat-cyrillic-700-normal-Blzg39qC.woff","assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2","assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff","assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2","assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff","assets/montserrat-latin-700-normal-Dkxlx_w4.woff2","assets/montserrat-latin-700-normal-o5q9xX7W.woff","assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2","assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff","assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2","assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff","assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2","assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff","assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2","assets/montserrat-latin-ext-900-normal-B2fljPr4.woff","assets/montserrat-latin-900-normal-HIE66ZyV.woff2","assets/montserrat-latin-900-normal-B8YluUfy.woff","assets/Phosphor-DtdjzkpE.woff2","assets/Phosphor-BdqudwT5.woff","assets/Phosphor-CDxgqcPu.ttf","assets/Phosphor-BXRFlF4V.svg"]}},"server-fns":{"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff":{"file":"assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff2":{"file":"assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff":{"file":"assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff2":{"file":"assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff":{"file":"assets/montserrat-cyrillic-400-normal-95VoEncJ.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff2":{"file":"assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff":{"file":"assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff2":{"file":"assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff":{"file":"assets/montserrat-cyrillic-700-normal-Blzg39qC.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff2":{"file":"assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff":{"file":"assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff2":{"file":"assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff":{"file":"assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff":{"file":"assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff":{"file":"assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff":{"file":"assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff":{"file":"assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff":{"file":"assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff2":{"file":"assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-cyrillic-ext-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff":{"file":"assets/montserrat-latin-200-normal-ByeQgr9u.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff2":{"file":"assets/montserrat-latin-200-normal-Co0glrxx.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff":{"file":"assets/montserrat-latin-300-normal-DrgRfrdN.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff2":{"file":"assets/montserrat-latin-300-normal-DYYY4VIB.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff":{"file":"assets/montserrat-latin-400-normal-BhTl8mZv.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2":{"file":"assets/montserrat-latin-400-normal-BfmCfwfZ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff":{"file":"assets/montserrat-latin-500-normal-T-BM6Fhn.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2":{"file":"assets/montserrat-latin-500-normal-CN3hDfLq.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff":{"file":"assets/montserrat-latin-700-normal-o5q9xX7W.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2":{"file":"assets/montserrat-latin-700-normal-Dkxlx_w4.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff":{"file":"assets/montserrat-latin-900-normal-B8YluUfy.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff2":{"file":"assets/montserrat-latin-900-normal-HIE66ZyV.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff":{"file":"assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff2":{"file":"assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff":{"file":"assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff2":{"file":"assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff":{"file":"assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff2":{"file":"assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff":{"file":"assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff2":{"file":"assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff":{"file":"assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff2":{"file":"assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff":{"file":"assets/montserrat-latin-ext-900-normal-B2fljPr4.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff2":{"file":"assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-latin-ext-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff":{"file":"assets/montserrat-vietnamese-200-normal-CuJsZitD.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff2":{"file":"assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff":{"file":"assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff2":{"file":"assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff":{"file":"assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff2":{"file":"assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff":{"file":"assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff2":{"file":"assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff":{"file":"assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff2":{"file":"assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff":{"file":"assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff"},"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff2":{"file":"assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2","src":"../../node_modules/.pnpm/@fontsource+montserrat@5.0.20/node_modules/@fontsource/montserrat/files/montserrat-vietnamese-900-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff":{"file":"assets/spectral-cyrillic-200-normal-DBFgNIo-.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff2":{"file":"assets/spectral-cyrillic-200-normal-B_x--0bF.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff":{"file":"assets/spectral-cyrillic-300-normal-BuwX68dz.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff2":{"file":"assets/spectral-cyrillic-300-normal-3mshyS_1.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff":{"file":"assets/spectral-cyrillic-400-normal-BSztQViE.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff2":{"file":"assets/spectral-cyrillic-400-normal-DSdESYJf.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff":{"file":"assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff2":{"file":"assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff":{"file":"assets/spectral-cyrillic-600-normal-CGQrotlm.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff2":{"file":"assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff":{"file":"assets/spectral-cyrillic-700-normal-COc0fxPc.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff2":{"file":"assets/spectral-cyrillic-700-normal-97LnvvSG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-cyrillic-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff":{"file":"assets/spectral-latin-200-normal-WQAAvAV9.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff2":{"file":"assets/spectral-latin-200-normal-WAtLTr05.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff":{"file":"assets/spectral-latin-300-normal-BJ3qdcga.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff2":{"file":"assets/spectral-latin-300-normal-8KdwH-BZ.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff":{"file":"assets/spectral-latin-400-normal-CFnFwP8t.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff2":{"file":"assets/spectral-latin-400-normal-MXBVgyrt.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff":{"file":"assets/spectral-latin-500-normal-D__sIyLH.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff2":{"file":"assets/spectral-latin-500-normal-5HBkxKjs.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff":{"file":"assets/spectral-latin-600-normal-BLtkLvbx.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff2":{"file":"assets/spectral-latin-600-normal-CPXfyHlN.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff":{"file":"assets/spectral-latin-700-normal-Rag2g1u6.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2":{"file":"assets/spectral-latin-700-normal-BqcegO99.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff":{"file":"assets/spectral-latin-ext-200-normal-Ca1vATCy.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff2":{"file":"assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff":{"file":"assets/spectral-latin-ext-300-normal-DTEvBdvf.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff2":{"file":"assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff":{"file":"assets/spectral-latin-ext-400-normal-COH_Sm0M.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff2":{"file":"assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff":{"file":"assets/spectral-latin-ext-500-normal-BKlxGjla.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff2":{"file":"assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff":{"file":"assets/spectral-latin-ext-600-normal-B2UuAU7N.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff2":{"file":"assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff":{"file":"assets/spectral-latin-ext-700-normal-riPWKqQE.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff2":{"file":"assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-latin-ext-700-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff":{"file":"assets/spectral-vietnamese-200-normal-BRyI-oGK.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff2":{"file":"assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-200-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff":{"file":"assets/spectral-vietnamese-300-normal-DA2hpTYn.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff2":{"file":"assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-300-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff":{"file":"assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff2":{"file":"assets/spectral-vietnamese-400-normal-12CTPExn.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-400-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff":{"file":"assets/spectral-vietnamese-500-normal-DRaA1n-5.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff2":{"file":"assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-500-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff":{"file":"assets/spectral-vietnamese-600-normal-CYCcfOL0.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff2":{"file":"assets/spectral-vietnamese-600-normal-VomzNZvj.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-600-normal.woff2"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff":{"file":"assets/spectral-vietnamese-700-normal-CBpdhthx.woff","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff"},"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff2":{"file":"assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2","src":"../../node_modules/.pnpm/@fontsource+spectral@5.0.15/node_modules/@fontsource/spectral/files/spectral-vietnamese-700-normal.woff2"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.svg":{"file":"assets/Phosphor-BXRFlF4V.svg","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.svg"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.ttf":{"file":"assets/Phosphor-CDxgqcPu.ttf","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.ttf"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff":{"file":"assets/Phosphor-BdqudwT5.woff","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff"},"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2":{"file":"assets/Phosphor-DtdjzkpE.woff2","src":"../../node_modules/.pnpm/@phosphor-icons+web@2.1.1/node_modules/@phosphor-icons/web/src/regular/Phosphor.woff2"},"_action.mjs":{"file":"action.mjs","name":"action","imports":["_routing.mjs","_env.mjs"]},"_cn.mjs":{"file":"cn.mjs","name":"cn"},"_components.mjs":{"file":"components.mjs","name":"components","imports":["_routing.mjs"]},"_env.mjs":{"file":"env.mjs","name":"env","imports":["_fetchEvent.mjs","_routing.mjs"]},"_fetchEvent.mjs":{"file":"fetchEvent.mjs","name":"fetchEvent"},"_get-projects.mjs":{"file":"get-projects.mjs","name":"get-projects","imports":["_env.mjs","_index3.mjs"]},"_get-settings.mjs":{"file":"get-settings.mjs","name":"get-settings"},"_images.mjs":{"file":"images.mjs","name":"images","imports":["_index3.mjs"]},"_index3.mjs":{"file":"index3.mjs","name":"index","imports":["_env.mjs"]},"_routing.mjs":{"file":"routing.mjs","name":"routing"},"_server-fns.mjs":{"file":"server-fns.mjs","name":"server-fns","imports":["_fetchEvent.mjs"],"dynamicImports":["src/routes/[...404].tsx?pick=default&pick=$css","src/routes/[...404].tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/about.tsx?pick=default&pick=$css","src/routes/contactos.tsx?pick=default&pick=$css","src/routes/contactos.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/index.tsx?pick=default&pick=$css","src/routes/sobre-nos.tsx?pick=default&pick=$css","src/routes/sobre-nos.tsx?pick=default&pick=$css","src/routes/projetos/[slug].tsx?pick=default&pick=$css","src/routes/projetos/[slug].tsx?pick=default&pick=$css","src/routes/projetos/index.tsx?pick=default&pick=$css","src/routes/projetos/index.tsx?pick=default&pick=$css","src/app.tsx"]},"_styles.mjs":{"file":"styles.mjs","name":"styles"},"_styles2.mjs":{"file":"styles2.mjs","name":"styles"},"src/app.tsx":{"file":"app.mjs","name":"app","src":"src/app.tsx","isDynamicEntry":true,"imports":["_server-fns.mjs","src/cms/services/singletons/settings/get-cta-settings.ts","src/cms/services/singletons/settings/get-contacts.ts","src/cms/services/singletons/get-archives.ts","src/cms/services/singletons/get-contacts.ts","src/cms/services/projects/get-project.ts","src/cms/services/projects/get-related-projects-by-service.ts","src/cms/services/testimonials/get-project-testimonial.ts","_styles.mjs","_routing.mjs","_styles2.mjs","_cn.mjs","_action.mjs","_fetchEvent.mjs","_env.mjs","_index3.mjs","_get-settings.mjs"],"css":["assets/app-it5hbxyk.css"],"assets":["assets/spectral-cyrillic-200-normal-B_x--0bF.woff2","assets/spectral-cyrillic-200-normal-DBFgNIo-.woff","assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2","assets/spectral-vietnamese-200-normal-BRyI-oGK.woff","assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2","assets/spectral-latin-ext-200-normal-Ca1vATCy.woff","assets/spectral-latin-200-normal-WAtLTr05.woff2","assets/spectral-latin-200-normal-WQAAvAV9.woff","assets/spectral-cyrillic-300-normal-3mshyS_1.woff2","assets/spectral-cyrillic-300-normal-BuwX68dz.woff","assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2","assets/spectral-vietnamese-300-normal-DA2hpTYn.woff","assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2","assets/spectral-latin-ext-300-normal-DTEvBdvf.woff","assets/spectral-latin-300-normal-8KdwH-BZ.woff2","assets/spectral-latin-300-normal-BJ3qdcga.woff","assets/spectral-cyrillic-400-normal-DSdESYJf.woff2","assets/spectral-cyrillic-400-normal-BSztQViE.woff","assets/spectral-vietnamese-400-normal-12CTPExn.woff2","assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff","assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2","assets/spectral-latin-ext-400-normal-COH_Sm0M.woff","assets/spectral-latin-400-normal-MXBVgyrt.woff2","assets/spectral-latin-400-normal-CFnFwP8t.woff","assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2","assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff","assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2","assets/spectral-vietnamese-500-normal-DRaA1n-5.woff","assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2","assets/spectral-latin-ext-500-normal-BKlxGjla.woff","assets/spectral-latin-500-normal-5HBkxKjs.woff2","assets/spectral-latin-500-normal-D__sIyLH.woff","assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2","assets/spectral-cyrillic-600-normal-CGQrotlm.woff","assets/spectral-vietnamese-600-normal-VomzNZvj.woff2","assets/spectral-vietnamese-600-normal-CYCcfOL0.woff","assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2","assets/spectral-latin-ext-600-normal-B2UuAU7N.woff","assets/spectral-latin-600-normal-CPXfyHlN.woff2","assets/spectral-latin-600-normal-BLtkLvbx.woff","assets/spectral-cyrillic-700-normal-97LnvvSG.woff2","assets/spectral-cyrillic-700-normal-COc0fxPc.woff","assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2","assets/spectral-vietnamese-700-normal-CBpdhthx.woff","assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2","assets/spectral-latin-ext-700-normal-riPWKqQE.woff","assets/spectral-latin-700-normal-BqcegO99.woff2","assets/spectral-latin-700-normal-Rag2g1u6.woff","assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2","assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff","assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2","assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff","assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2","assets/montserrat-vietnamese-200-normal-CuJsZitD.woff","assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2","assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff","assets/montserrat-latin-200-normal-Co0glrxx.woff2","assets/montserrat-latin-200-normal-ByeQgr9u.woff","assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2","assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff","assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2","assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff","assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2","assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff","assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2","assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff","assets/montserrat-latin-300-normal-DYYY4VIB.woff2","assets/montserrat-latin-300-normal-DrgRfrdN.woff","assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2","assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff","assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2","assets/montserrat-cyrillic-400-normal-95VoEncJ.woff","assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2","assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff","assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2","assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff","assets/montserrat-latin-400-normal-BfmCfwfZ.woff2","assets/montserrat-latin-400-normal-BhTl8mZv.woff","assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2","assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff","assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2","assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff","assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2","assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff","assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2","assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff","assets/montserrat-latin-500-normal-CN3hDfLq.woff2","assets/montserrat-latin-500-normal-T-BM6Fhn.woff","assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2","assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff","assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2","assets/montserrat-cyrillic-700-normal-Blzg39qC.woff","assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2","assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff","assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2","assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff","assets/montserrat-latin-700-normal-Dkxlx_w4.woff2","assets/montserrat-latin-700-normal-o5q9xX7W.woff","assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2","assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff","assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2","assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff","assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2","assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff","assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2","assets/montserrat-latin-ext-900-normal-B2fljPr4.woff","assets/montserrat-latin-900-normal-HIE66ZyV.woff2","assets/montserrat-latin-900-normal-B8YluUfy.woff","assets/Phosphor-DtdjzkpE.woff2","assets/Phosphor-BdqudwT5.woff","assets/Phosphor-CDxgqcPu.ttf","assets/Phosphor-BXRFlF4V.svg"]},"src/cms/services/projects/get-project.ts":{"file":"c_10846.mjs","name":"c_10846","src":"src/cms/services/projects/get-project.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/cms/services/projects/get-projects.ts":{"file":"c_10961.mjs","name":"c_10961","src":"src/cms/services/projects/get-projects.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_get-projects.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/cms/services/projects/get-related-projects-by-service.ts":{"file":"c_12805.mjs","name":"c_12805","src":"src/cms/services/projects/get-related-projects-by-service.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/cms/services/singletons/get-archives.ts":{"file":"c_11160.mjs","name":"c_11160","src":"src/cms/services/singletons/get-archives.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/cms/services/singletons/get-contacts.ts":{"file":"c_11170.mjs","name":"c_11170","src":"src/cms/services/singletons/get-contacts.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/cms/services/singletons/settings/get-contacts.ts":{"file":"c_12098.mjs","name":"c_12098","src":"src/cms/services/singletons/settings/get-contacts.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_get-settings.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/cms/services/singletons/settings/get-cta-settings.ts":{"file":"c_12473.mjs","name":"c_12473","src":"src/cms/services/singletons/settings/get-cta-settings.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_get-settings.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/cms/services/testimonials/get-project-testimonial.ts":{"file":"c_12518.mjs","name":"c_12518","src":"src/cms/services/testimonials/get-project-testimonial.ts","isEntry":true,"imports":["_env.mjs","_index3.mjs","_fetchEvent.mjs","_routing.mjs"]},"src/routes/[...404].tsx?pick=default&pick=$css":{"file":"_...404_.mjs","name":"_...404_","src":"src/routes/[...404].tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_components.mjs","_routing.mjs"]},"src/routes/about.tsx?pick=default&pick=$css":{"file":"about.mjs","name":"about","src":"src/routes/about.tsx?pick=default&pick=$css","isDynamicEntry":true},"src/routes/contactos.tsx?pick=default&pick=$css":{"file":"contactos.mjs","name":"contactos","src":"src/routes/contactos.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["src/cms/services/singletons/settings/get-cta-settings.ts","src/cms/services/singletons/settings/get-contacts.ts","src/cms/services/singletons/get-archives.ts","src/cms/services/singletons/get-contacts.ts","src/cms/services/projects/get-project.ts","src/cms/services/projects/get-related-projects-by-service.ts","src/cms/services/testimonials/get-project-testimonial.ts","_styles.mjs","_styles2.mjs","src/shared/actions/email.actions.ts","_action.mjs","_env.mjs","_fetchEvent.mjs","_routing.mjs","_index3.mjs","_get-settings.mjs"]},"src/routes/index.tsx?pick=default&pick=$css":{"file":"index.mjs","name":"index","src":"src/routes/index.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_components.mjs","_routing.mjs"]},"src/routes/projetos/[slug].tsx?pick=default&pick=$css":{"file":"_slug_.mjs","name":"_slug_","src":"src/routes/projetos/[slug].tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["src/cms/services/singletons/settings/get-cta-settings.ts","src/cms/services/singletons/settings/get-contacts.ts","src/cms/services/singletons/get-archives.ts","src/cms/services/singletons/get-contacts.ts","src/cms/services/projects/get-project.ts","src/cms/services/projects/get-related-projects-by-service.ts","src/cms/services/testimonials/get-project-testimonial.ts","_images.mjs","_styles.mjs","_cn.mjs","_routing.mjs","_env.mjs","_fetchEvent.mjs","_index3.mjs","_get-settings.mjs"]},"src/routes/projetos/index.tsx?pick=default&pick=$css":{"file":"index2.mjs","name":"index","src":"src/routes/projetos/index.tsx?pick=default&pick=$css","isDynamicEntry":true,"imports":["_get-projects.mjs","src/cms/services/singletons/get-archives.ts","src/cms/services/singletons/settings/get-cta-settings.ts","src/cms/services/singletons/settings/get-contacts.ts","src/cms/services/singletons/get-contacts.ts","src/cms/services/projects/get-project.ts","src/cms/services/projects/get-related-projects-by-service.ts","src/cms/services/testimonials/get-project-testimonial.ts","_styles.mjs","_styles2.mjs","_images.mjs","_cn.mjs","_routing.mjs","_env.mjs","_fetchEvent.mjs","_index3.mjs","_get-settings.mjs"]},"src/routes/sobre-nos.tsx?pick=default&pick=$css":{"file":"sobre-nos.mjs","name":"sobre-nos","src":"src/routes/sobre-nos.tsx?pick=default&pick=$css","isDynamicEntry":true},"src/shared/actions/email.actions.ts":{"file":"c_10313.mjs","name":"c_10313","src":"src/shared/actions/email.actions.ts","isEntry":true,"imports":["_env.mjs","_action.mjs","_fetchEvent.mjs","_routing.mjs"]},"virtual:$vinxi/handler/server-fns":{"file":"entry.mjs","name":"entry","src":"virtual:$vinxi/handler/server-fns","isEntry":true,"imports":["_server-fns.mjs","_fetchEvent.mjs"]}}};

				const routeManifest = {"ssr":{},"client":{},"server-fns":{}};

        function createProdApp(appConfig) {
          return {
            config: { ...appConfig, buildManifest, routeManifest },
            getRouter(name) {
              return appConfig.routers.find(router => router.name === name)
            }
          }
        }

        function plugin$2(app) {
          const prodApp = createProdApp(appConfig);
          globalThis.app = prodApp;
        }

function plugin$1(app) {
	globalThis.$handle = (event) => app.h3App.handler(event);
}

/**
 * Traverses the module graph and collects assets for a given chunk
 *
 * @param {any} manifest Client manifest
 * @param {string} id Chunk id
 * @param {Map<string, string[]>} assetMap Cache of assets
 * @param {string[]} stack Stack of chunk ids to prevent circular dependencies
 * @returns Array of asset URLs
 */
function findAssetsInViteManifest(manifest, id, assetMap = new Map(), stack = []) {
	if (stack.includes(id)) {
		return [];
	}

	const cached = assetMap.get(id);
	if (cached) {
		return cached;
	}
	const chunk = manifest[id];
	if (!chunk) {
		return [];
	}

	const assets = [
		...(chunk.assets?.filter(Boolean) || []),
		...(chunk.css?.filter(Boolean) || [])
	];
	if (chunk.imports) {
		stack.push(id);
		for (let i = 0, l = chunk.imports.length; i < l; i++) {
			assets.push(...findAssetsInViteManifest(manifest, chunk.imports[i], assetMap, stack));
		}
		stack.pop();
	}
	assets.push(chunk.file);
	const all = Array.from(new Set(assets));
	assetMap.set(id, all);

	return all;
}

/** @typedef {import("../app.js").App & { config: { buildManifest: { [key:string]: any } }}} ProdApp */

function createHtmlTagsForAssets(router, app, assets) {
	return assets
		.filter(
			(asset) =>
				asset.endsWith(".css") ||
				asset.endsWith(".js") ||
				asset.endsWith(".mjs"),
		)
		.map((asset) => ({
			tag: "link",
			attrs: {
				href: joinURL(app.config.server.baseURL ?? "/", router.base, asset),
				key: join$1(app.config.server.baseURL ?? "", router.base, asset),
				...(asset.endsWith(".css")
					? { rel: "stylesheet", fetchPriority: "high" }
					: { rel: "modulepreload" }),
			},
		}));
}

/**
 *
 * @param {ProdApp} app
 * @returns
 */
function createProdManifest(app) {
	const manifest = new Proxy(
		{},
		{
			get(target, routerName) {
				invariant(typeof routerName === "string", "Bundler name expected");
				const router = app.getRouter(routerName);
				const bundlerManifest = app.config.buildManifest[routerName];

				invariant(
					router.type !== "static",
					"manifest not available for static router",
				);
				return {
					handler: router.handler,
					async assets() {
						/** @type {{ [key: string]: string[] }} */
						let assets = {};
						assets[router.handler] = await this.inputs[router.handler].assets();
						for (const route of (await router.internals.routes?.getRoutes()) ??
							[]) {
							assets[route.filePath] = await this.inputs[
								route.filePath
							].assets();
						}
						return assets;
					},
					async routes() {
						return (await router.internals.routes?.getRoutes()) ?? [];
					},
					async json() {
						/** @type {{ [key: string]: { output: string; assets: string[]} }} */
						let json = {};
						for (const input of Object.keys(this.inputs)) {
							json[input] = {
								output: this.inputs[input].output.path,
								assets: await this.inputs[input].assets(),
							};
						}
						return json;
					},
					chunks: new Proxy(
						{},
						{
							get(target, chunk) {
								invariant(typeof chunk === "string", "Chunk expected");
								const chunkPath = join$1(
									router.outDir,
									router.base,
									chunk + ".mjs",
								);
								return {
									import() {
										if (globalThis.$$chunks[chunk + ".mjs"]) {
											return globalThis.$$chunks[chunk + ".mjs"];
										}
										return import(
											/* @vite-ignore */ pathToFileURL(chunkPath).href
										);
									},
									output: {
										path: chunkPath,
									},
								};
							},
						},
					),
					inputs: new Proxy(
						{},
						{
							ownKeys(target) {
								const keys = Object.keys(bundlerManifest)
									.filter((id) => bundlerManifest[id].isEntry)
									.map((id) => id);
								return keys;
							},
							getOwnPropertyDescriptor(k) {
								return {
									enumerable: true,
									configurable: true,
								};
							},
							get(target, input) {
								invariant(typeof input === "string", "Input expected");
								if (router.target === "server") {
									const id =
										input === router.handler
											? virtualId(handlerModule(router))
											: input;
									return {
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: join$1(
												router.outDir,
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								} else if (router.target === "browser") {
									const id =
										input === router.handler && !input.endsWith(".html")
											? virtualId(handlerModule(router))
											: input;
									return {
										import() {
											return import(
												/* @vite-ignore */ joinURL(
													app.config.server.baseURL ?? "",
													router.base,
													bundlerManifest[id].file,
												)
											);
										},
										assets() {
											return createHtmlTagsForAssets(
												router,
												app,
												findAssetsInViteManifest(bundlerManifest, id),
											);
										},
										output: {
											path: joinURL(
												app.config.server.baseURL ?? "",
												router.base,
												bundlerManifest[id].file,
											),
										},
									};
								}
							},
						},
					),
				};
			},
		},
	);

	return manifest;
}

function plugin() {
	globalThis.MANIFEST =
		createProdManifest(globalThis.app)
			;
}

function N$1(t={}){let e,n=!1;const r=s=>{if(e&&e!==s)throw new Error("Context conflict")};let a;if(t.asyncContext){const s=t.AsyncLocalStorage||globalThis.AsyncLocalStorage;s?a=new s:console.warn("[unctx] `AsyncLocalStorage` is not provided.");}const d=()=>{if(a&&e===void 0){const s=a.getStore();if(s!==void 0)return s}return e};return {use:()=>{const s=d();if(s===void 0)throw new Error("Context is not available");return s},tryUse:()=>d(),set:(s,i)=>{i||r(s),e=s,n=!0;},unset:()=>{e=void 0,n=!1;},call:(s,i)=>{r(s),e=s;try{return a?a.run(s,i):i()}finally{n||(e=void 0);}},async callAsync(s,i){e=s;const x=()=>{e=s;},p=()=>e===s?x:void 0;h$3.add(p);try{const _=a?a.run(s,i):i();return n||(e=void 0),await _}finally{h$3.delete(p);}}}}function F$1(t={}){const e={};return {get(n,r={}){return e[n]||(e[n]=N$1({...t,...r})),e[n],e[n]}}}const u$2=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof global<"u"?global:{},g$4="__unctx__",K$4=u$2[g$4]||(u$2[g$4]=F$1()),B$2=(t,e={})=>K$4.get(t,e),y$1="__unctx_async_handlers__",h$3=u$2[y$1]||(u$2[y$1]=new Set);function M$4(t){let e;const n=H$2(t),r={duplex:"half",method:t.method,headers:t.headers};return t.node.req.body instanceof ArrayBuffer?new Request(n,{...r,body:t.node.req.body}):new Request(n,{...r,get body(){return e||(e=X$3(t),e)}})}function z$1(t){return t.web??={request:M$4(t),url:H$2(t)},t.web.request}function D$3(){return te$5()}const m$5=Symbol("$HTTPEvent");function G$3(t){return typeof t=="object"&&(t instanceof H3Event||t?.[m$5]instanceof H3Event||t?.__is_event__===!0)}function o$4(t){return function(...e){let n=e[0];if(G$3(n))e[0]=n instanceof H3Event||n.__is_event__?n:n[m$5];else {if(!globalThis.app.config.server.experimental?.asyncContext)throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");if(n=D$3(),!n)throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");e.unshift(n);}return t(...e)}}const H$2=o$4(getRequestURL),J$3=o$4(getRequestIP),R$1=o$4(setResponseStatus),b$1=o$4(getResponseStatus),Q$2=o$4(getResponseStatusText),c$3=o$4(getResponseHeaders),S$5=o$4(getResponseHeader),V$3=o$4(setResponseHeader),v$1=o$4(appendResponseHeader),ie$1=o$4(getCookie),ce$1=o$4(setCookie),ue$2=o$4(setHeader),X$3=o$4(getRequestWebStream),Y$5=o$4(removeResponseHeader),Z$4=o$4(z$1);function ee$4(){return B$2("nitro-app",{asyncContext:!!globalThis.app.config.server.experimental?.asyncContext,AsyncLocalStorage:AsyncLocalStorage})}function te$5(){return ee$4().use().event}const l$1=Symbol("fetchEvent");function ne$3(t){return {request:Z$4(t),response:oe$3(t),clientAddress:J$3(t),locals:{},nativeEvent:t}}function le$2(t){return {...t}}function fe$2(t){if(!t[l$1]){const e=ne$3(t);t[l$1]=e;}return t[l$1]}function de$2(t,e){for(const[n,r]of e.entries())v$1(t,n,r);}let se$2 = class se{event;constructor(e){this.event=e;}get(e){const n=S$5(this.event,e);return Array.isArray(n)?n.join(", "):n||null}has(e){return this.get(e)!==void 0}set(e,n){return V$3(this.event,e,n)}delete(e){return Y$5(this.event,e)}append(e,n){v$1(this.event,e,n);}getSetCookie(){const e=S$5(this.event,"Set-Cookie");return Array.isArray(e)?e:[e]}forEach(e){return Object.entries(c$3(this.event)).forEach(([n,r])=>e(Array.isArray(r)?r.join(", "):r,n,this))}entries(){return Object.entries(c$3(this.event)).map(([e,n])=>[e,Array.isArray(n)?n.join(", "):n])[Symbol.iterator]()}keys(){return Object.keys(c$3(this.event))[Symbol.iterator]()}values(){return Object.values(c$3(this.event)).map(e=>Array.isArray(e)?e.join(", "):e)[Symbol.iterator]()}[Symbol.iterator](){return this.entries()[Symbol.iterator]()}};function oe$3(t){return {get status(){return b$1(t)},set status(e){R$1(t,e);},get statusText(){return Q$2(t)},set statusText(e){R$1(t,b$1(t),e);},headers:new se$2(t)}}

function ye$2(){let e=new Set;function t(r){return e.add(r),()=>e.delete(r)}let n=!1;function s(r,o){if(n)return !(n=!1);const c={to:r,options:o,defaultPrevented:!1,preventDefault:()=>c.defaultPrevented=!0};for(const i of e)i.listener({...c,from:i.location,retry:l=>{l&&(n=!0),i.navigate(r,{...o,resolve:!1});}});return !c.defaultPrevented}return {subscribe:t,confirm:s}}let U$2;function Y$4(){(!window.history.state||window.history.state._depth==null)&&window.history.replaceState({...window.history.state,_depth:window.history.length-1},""),U$2=window.history.state._depth;}isServer||Y$4();function De$3(e){return {...e,_depth:window.history.state&&window.history.state._depth}}function Me$2(e,t){let n=!1;return ()=>{const s=U$2;Y$4();const r=s==null?null:U$2-s;if(n){n=!1;return}r&&t(r)?(n=!0,window.history.go(-r)):e();}}const ve$2=/^(?:[a-z0-9]+:)?\/\//i,we$1=/^\/+|(\/)\/+$/g,Pe$3="http://sr";function E$4(e,t=!1){const n=e.replace(we$1,"$1");return n?t||/^[?#]/.test(n)?n:"/"+n:""}function I$3(e,t,n){if(ve$2.test(t))return;const s=E$4(e),r=n&&E$4(n);let o="";return !r||t.startsWith("/")?o=s:r.toLowerCase().indexOf(s.toLowerCase())!==0?o=s+r:o=r,(o||"/")+E$4(t,!o)}function Re$3(e,t){if(e==null)throw new Error(t);return e}function be$3(e,t){return E$4(e).replace(/\/*(\*.*)?$/g,"")+E$4(t)}function Z$3(e){const t={};return e.searchParams.forEach((n,s)=>{t[s]=n;}),t}function xe$3(e,t,n){const[s,r]=e.split("/*",2),o=s.split("/").filter(Boolean),c=o.length;return i=>{const l=i.split("/").filter(Boolean),f=l.length-c;if(f<0||f>0&&r===void 0&&!t)return null;const h={path:c?"":"/",params:{}},y=p=>n===void 0?void 0:n[p];for(let p=0;p<c;p++){const d=o[p],m=l[p],w=d[0]===":",A=w?d.slice(1):d;if(w&&D$2(m,y(A)))h.params[A]=m;else if(w||!D$2(m,d))return null;h.path+=`/${m}`;}if(r){const p=f?l.slice(-f).join("/"):"";if(D$2(p,y(r)))h.params[r]=p;else return null}return h}}function D$2(e,t){const n=s=>s.localeCompare(e,void 0,{sensitivity:"base"})===0;return t===void 0?!0:typeof t=="string"?n(t):typeof t=="function"?t(e):Array.isArray(t)?t.some(n):t instanceof RegExp?t.test(e):!1}function Se$2(e){const[t,n]=e.pattern.split("/*",2),s=t.split("/").filter(Boolean);return s.reduce((r,o)=>r+(o.startsWith(":")?2:3),s.length-(n===void 0?0:1))}function ee$3(e){const t=new Map,n=getOwner();return new Proxy({},{get(s,r){return t.has(r)||runWithOwner(n,()=>t.set(r,createMemo(()=>e()[r]))),t.get(r)()},getOwnPropertyDescriptor(){return {enumerable:!0,configurable:!0}},ownKeys(){return Reflect.ownKeys(e())}})}function Ee$3(e,t){const n=new URLSearchParams(e);Object.entries(t).forEach(([r,o])=>{o==null||o===""?n.delete(r):n.set(r,String(o));});const s=n.toString();return s?`?${s}`:""}function te$4(e){let t=/(\/?\:[^\/]+)\?/.exec(e);if(!t)return [e];let n=e.slice(0,t.index),s=e.slice(t.index+t[0].length);const r=[n,n+=t[1]];for(;t=/^(\/\:[^\/]+)\?/.exec(s);)r.push(n+=t[1]),s=s.slice(t[0].length);return te$4(s).reduce((o,c)=>[...o,...r.map(i=>i+c)],[])}const Ce$3=100,Ae$3=createContext$1(),ne$2=createContext$1(),C$5=()=>Re$3(useContext(Ae$3),"<A> and 'use' router primitives can be only used inside a Route."),Fe$3=()=>useContext(ne$2)||C$5().base,Ue$1=e=>{const t=Fe$3();return createMemo(()=>t.resolvePath(e()))},ke$3=e=>{const t=C$5();return createMemo(()=>{const n=e();return n!==void 0?t.renderPath(n):n})},Le$2=()=>C$5().navigatorFactory(),Oe$3=()=>C$5().location,We$2=()=>C$5().params,ze$3=()=>{const e=Oe$3(),t=Le$2(),n=(s,r)=>{const o=untrack(()=>Ee$3(e.search,s)+e.hash);t(o,{scroll:!1,resolve:!1,...r});};return [e.query,n]};function je$2(e,t=""){const{component:n,preload:s,load:r,children:o,info:c}=e,i=!o||Array.isArray(o)&&!o.length,l={key:e,component:n,preload:s||r,info:c};return re$3(e.path).reduce((f,h)=>{for(const y of te$4(h)){const p=be$3(t,y);let d=i?p:p.split("/*",1)[0];d=d.split("/").map(m=>m.startsWith(":")||m.startsWith("*")?m:encodeURIComponent(m)).join("/"),f.push({...l,originalPath:h,pattern:d,matcher:xe$3(d,!i,e.matchFilters)});}return f},[])}function Be$2(e,t=0){return {routes:e,score:Se$2(e[e.length-1])*1e4-t,matcher(n){const s=[];for(let r=e.length-1;r>=0;r--){const o=e[r],c=o.matcher(n);if(!c)return null;s.unshift({...c,route:o});}return s}}}function re$3(e){return Array.isArray(e)?e:[e]}function _e$1(e,t="",n=[],s=[]){const r=re$3(e);for(let o=0,c=r.length;o<c;o++){const i=r[o];if(i&&typeof i=="object"){i.hasOwnProperty("path")||(i.path="");const l=je$2(i,t);for(const f of l){n.push(f);const h=Array.isArray(i.children)&&i.children.length===0;if(i.children&&!h)_e$1(i.children,f.pattern,n,s);else {const y=Be$2([...n],s.length);s.push(y);}n.pop();}}}return n.length?s:s.sort((o,c)=>c.score-o.score)}function M$3(e,t){for(let n=0,s=e.length;n<s;n++){const r=e[n].matcher(t);if(r)return r}return []}function qe$2(e,t){const n=new URL(Pe$3),s=createMemo(l=>{const f=e();try{return new URL(f,n)}catch{return console.error(`Invalid path ${f}`),l}},n,{equals:(l,f)=>l.href===f.href}),r=createMemo(()=>s().pathname),o=createMemo(()=>s().search,!0),c=createMemo(()=>s().hash),i=()=>"";return {get pathname(){return r()},get search(){return o()},get hash(){return c()},get state(){return t()},get key(){return i()},query:ee$3(on$2(o,()=>Z$3(s())))}}let P$2;function He$2(){return P$2}let S$4=!1;function Ke$2(){return S$4}function Ne$3(e){S$4=e;}function Te$3(e,t,n,s={}){const{signal:[r,o],utils:c={}}=e,i=c.parsePath||(a=>a),l=c.renderPath||(a=>a),f=c.beforeLeave||ye$2(),h=I$3("",s.base||"");if(h===void 0)throw new Error(`${h} is not a valid base path`);h&&!r().value&&o({value:h,replace:!0,scroll:!1});const[y,p]=createSignal(!1);let d;const m=(a,u)=>{u.value===w()&&u.state===F()||(d===void 0&&p(!0),P$2=a,d=u,startTransition(()=>{d===u&&(A(d.value),se(d.state),resetErrorBoundaries(),isServer||W[1]([]));}).finally(()=>{d===u&&batch(()=>{P$2=void 0,a==="navigate"&&ie(d),p(!1),d=void 0;});}));},[w,A]=createSignal(r().value),[F,se]=createSignal(r().state),$=qe$2(w,F),L=[],W=createSignal(isServer?le():[]),z=createMemo(()=>typeof s.transformUrl=="function"?M$3(t(),s.transformUrl($.pathname)):M$3(t(),$.pathname)),oe=ee$3(()=>{const a=z(),u={};for(let g=0;g<a.length;g++)Object.assign(u,a[g].params);return u}),H={pattern:h,path:()=>h,outlet:()=>null,resolvePath(a){return I$3(h,a)}};return createRenderEffect(on$2(r,a=>m("native",a),{defer:!0})),{base:H,location:$,params:oe,isRouting:y,renderPath:l,parsePath:i,navigatorFactory:ce,matches:z,beforeLeave:f,preloadRoute:ue,singleFlight:s.singleFlight===void 0?!0:s.singleFlight,submissions:W};function ae(a,u,g){untrack(()=>{if(typeof u=="number"){u&&(c.go?c.go(u):console.warn("Router integration does not support relative routing"));return}const O=!u||u[0]==="?",{replace:j,resolve:R,scroll:B,state:b}={replace:!1,resolve:!O,scroll:!0,...g};let K;const x=R?a.resolvePath(u):I$3(O&&(K=r().value)&&K.split("?")[0]||"",u);if(x===void 0)throw new Error(`Path '${u}' is not a routable path`);if(L.length>=Ce$3)throw new Error("Too many redirects");const N=w();if(x!==N||b!==F())if(isServer){const T=getRequestEvent();T&&(T.response={status:302,headers:new Headers({Location:x})}),o({value:x,replace:j,scroll:B,state:b});}else f.confirm(x,g)&&(L.push({value:N,replace:j,scroll:B,state:F()}),m("navigate",{value:x,state:b}));});}function ce(a){return a=a||useContext(ne$2)||H,(u,g)=>ae(a,u,g)}function ie(a){const u=L[0];u&&(o({...a,replace:u.replace,scroll:u.scroll}),L.length=0);}function ue(a,u={}){const g=M$3(t(),a.pathname),O=P$2;P$2="preload";for(let j in g){const{route:R,params:B}=g[j];R.component&&R.component.preload&&R.component.preload();const{preload:b}=R;S$4=!0,u.preloadData&&b&&runWithOwner(n(),()=>b({params:B,location:{pathname:a.pathname,search:a.search,hash:a.hash,query:Z$3(a),state:null,key:""},intent:"preload"})),S$4=!1;}P$2=O;}function le(){const a=getRequestEvent();return a&&a.router&&a.router.submission?[a.router.submission]:[]}}function Xe$2(e,t,n,s){const{base:r,location:o,params:c}=e,{pattern:i,component:l,preload:f}=s().route,h=createMemo(()=>s().path);l&&l.preload&&l.preload(),S$4=!0;const y=f?f({params:c,location:o,intent:P$2||"initial"}):void 0;return S$4=!1,{parent:t,pattern:i,path:h,outlet:()=>l?createComponent(l,{params:c,location:o,data:y,get children(){return n()}}):n(),resolvePath(d){return I$3(r.path(),d,h())}}}

function W$2(e,r,n){if(typeof e!="function")throw new Error("Export from a 'use server' module must be a function");const a="";return new Proxy(e,{get(c,i,p){return i==="url"?`${a}/_server?id=${encodeURIComponent(r)}&name=${encodeURIComponent(n)}`:i==="GET"?p:c[i]},apply(c,i,p){const v=getRequestEvent();if(!v)throw new Error("Cannot call server function outside of a request");const w=le$2(v);return w.locals.serverFunctionMeta={id:r+"#"+n},w.serverOnly=!0,provideRequestEvent(w,()=>e.apply(i,p))}})}const q$1="Location",H$1=5e3,S$3=18e4;let m$4=new Map;isServer||setInterval(()=>{const e=Date.now();for(let[r,n]of m$4.entries())!n[3].count&&e-n[0]>S$3&&m$4.delete(r);},3e5);function C$4(){if(!isServer)return m$4;const e=getRequestEvent();if(!e)throw new Error("Cannot find cache context");return (e.router||(e.router={})).cache||(e.router.cache=new Map)}function J$2(e,r=!0){return startTransition(()=>{const n=Date.now();_$2(e,a=>{r&&(a[0]=0),a[3][1](n);});})}function _$2(e,r){e&&!Array.isArray(e)&&(e=[e]);for(let n of m$4.keys())(e===void 0||G$2(n,e))&&r(m$4.get(n));}function T$1(e,r){e.GET&&(e=e.GET);const n=(...a)=>{const c=C$4(),i=He$2(),p=Ke$2(),w=getOwner()?Le$2():void 0,O=Date.now(),l=r+I$2(a);let t=c.get(l),x;if(isServer){const o=getRequestEvent();if(o){const f=(o.router||(o.router={})).dataOnly;if(f){const d=o&&(o.router.data||(o.router.data={}));if(d&&l in d)return d[l];if(Array.isArray(f)&&!f.includes(l))return d[l]=void 0,Promise.resolve()}}}if(getListener()&&!isServer&&(x=!0,onCleanup(()=>t[3].count--)),t&&t[0]&&(isServer||i==="native"||t[3].count||Date.now()-t[0]<H$1)){x&&(t[3].count++,t[3][0]()),t[2]==="preload"&&i!=="preload"&&(t[0]=O);let o=t[1];return i!=="preload"&&(o="then"in t[1]?t[1].then(y(!1),y(!0)):y(!1)(t[1]),!isServer&&i==="navigate"&&startTransition(()=>t[3][1](t[0]))),p&&"then"in o&&o.catch(()=>{}),o}let u=!isServer&&sharedConfig.context&&sharedConfig.has(l)?sharedConfig.load(l):e(...a);if(t?(t[0]=O,t[1]=u,t[2]=i,!isServer&&i==="navigate"&&startTransition(()=>t[3][1](t[0]))):(c.set(l,t=[O,u,i,createSignal(O)]),t[3].count=0),x&&(t[3].count++,t[3][0]()),isServer){const o=getRequestEvent();if(o&&o.router.dataOnly)return o.router.data[l]=u}if(i!=="preload"&&(u="then"in u?u.then(y(!1),y(!0)):y(!1)(u)),p&&"then"in u&&u.catch(()=>{}),isServer&&sharedConfig.context&&sharedConfig.context.async&&!sharedConfig.context.noHydrate){const o=getRequestEvent();(!o||!o.serverOnly)&&sharedConfig.context.serialize(l,u);}return u;function y(o){return async f=>{if(f instanceof Response){const d=f.headers.get(q$1);if(d!==null){if(w&&d.startsWith("/"))startTransition(()=>{w(d,{replace:!0});});else if(!isServer)window.location.href=d;else if(isServer){const R=getRequestEvent();R&&(R.response={status:302,headers:new Headers({Location:d})});}return}f.customBody&&(f=await f.customBody());}if(o)throw f;return f}}};return n.keyFor=(...a)=>r+I$2(a),n.key=r,n}T$1.set=(e,r)=>{const n=C$4(),a=Date.now();let c=n.get(e);c?(c[0]=a,c[1]=r,c[2]="preload"):(n.set(e,c=[a,r,,createSignal(a)]),c[3].count=0);};T$1.clear=()=>C$4().clear();function G$2(e,r){for(let n of r)if(e.startsWith(n))return !0;return !1}function I$2(e){return JSON.stringify(e,(r,n)=>K$3(n)?Object.keys(n).sort().reduce((a,c)=>(a[c]=n[c],a),{}):n)}function K$3(e){let r;return e!=null&&typeof e=="object"&&(!(r=Object.getPrototypeOf(e))||r===Object.prototype)}const V$2={sanity:{projectId:"sg9zb269",dataset:"production",apiVersion:"X"},isProduction:!1};

const a$1=createClient({projectId:V$2.sanity.projectId,dataset:V$2.sanity.dataset,useCdn:V$2.isProduction,apiVersion:V$2.sanity.apiVersion,perspective:"published"});

function c$2(r,e=302){let t,s;typeof e=="number"?t={status:e}:({revalidate:s,...t}=e,typeof t.status>"u"&&(t.status=302));const o=new Headers(t.headers);return o.set("Location",r),s&&o.set("X-Revalidate",s.toString()),new Response(null,{...t,headers:o})}const l=`
    *[_type == "project" && slug.current == $slug] [0] {
      ...,
      "slug": slug.current,
      "thumbnail": {
          ...thumbnail,
          "asset": thumbnail.asset->
      },
      "services": coalesce(services[]->{
          _id,
          title,
          'slug': slug.current
      }, []),
      "gallery": coalesce(gallery[]{
        ...,
        "asset": asset->
      }, null)
    }
`,$$2=T$1(W$2(u$1,"c_10846","$$function0"),"project");async function u$1(r){try{const e=await a$1.fetch(l,{slug:r});if(!e)throw c$2("/projetos");return e}catch{throw c$2("/projetos")}}

const mod_0_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: u$1,
	getProject: $$2
});

const a=`
  count(*[_type == 'project'])
`,g$3=`
  count(*[_type == 'project' && $serviceSlug in services[]->slug.current])
`,s$2=`
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
`,d=`
  {
    "total": ${a},
    "data": ${s$2}
  }
`,n$3=12;function o$3(t=1,e=n$3){return {start:(t-1)*e,end:t*e}}const h$2=T$1(async t=>{try{let e=0;return t?e=await a$1.fetch(g$3,{serviceSlug:t}):e=await a$1.fetch(a),e}catch{return 0}},"total-projects"),p$2=T$1(W$2(f$2,"c_10961","$$function0"),"projects"),P$1=T$1(async(t=1,e=n$3)=>{try{const{start:i,end:u}=o$3(t,e);return a$1.fetch(d,{start:i,end:u})}catch{return {total:0,data:[]}}},"paginated-projects");async function f$2(t=1){try{return a$1.fetch(s$2,{...o$3(t)})}catch{return []}}

const mod_1_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: f$2,
	getPaginatedProjects: P$1,
	getProjects: p$2,
	getTotalOfProjects: h$2
});

const n$2=`
    *[_type == "project" && slug.current != $slug && array::intersects(services[]->slug.current, $serviceSlugs)] [$start...$end] | order(_createdAt desc) {
        _id,
        "slug": slug.current,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
        "services": coalesce(services[]->{
            _id,
            title,
            'slug': slug.current
        }, [])
    }
`,h$1=T$1(W$2(u,"c_12805","$$function0"),"related-projects");async function u(e,t,r=0,c=6){try{return a$1.fetch(n$2,{slug:e,serviceSlugs:t,start:r,end:c})}catch{return []}}

const mod_2_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: u,
	getRelatedProjectsByService: h$1
});

const t$1=`
    *[_type == "archives"] [0].projects
`,i$2=`
    *[_type == "archives"] [0].services
`,g$2=T$1(W$2(o$2,"c_11160","$$function0"),"projects-archive"),j$1=T$1(W$2(n$1,"c_11160","$$function1"),"services-archive");async function o$2(){try{return a$1.fetch(t$1)}catch{return}}async function n$1(){try{return a$1.fetch(i$2)}catch{return}}

const mod_3_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: o$2,
	$$function1: n$1,
	getProjectsArchive: g$2,
	getServicesArchive: j$1
});

const o$1=`
  *[_type == 'contacts'] [0]
`,g$1=T$1(W$2(e$2,"c_11170","$$function0"),"contacts-page");async function e$2(){try{return a$1.fetch(o$1)}catch{return}}

const mod_4_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: e$2,
	getContacts: g$1
});

const t=`
    *[_type == "settings"] [0] {
        ...cta,
        "points": cta.points
    }
`,s$1=`
  *[_type == "settings"] [0] {
    "contacts": coalesce(contacts, []),
    "social": coalesce(social, [])
  }
`;

const g=T$1(W$2(e$1,"c_12098","$$function0"),"social-networks-and-contacts");async function e$1(){try{return a$1.fetch(s$1)}catch{return {social:[],contacts:[]}}}

const mod_5_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: e$1,
	getSocialNetworksAndContacts: g
});

const S$2=T$1(W$2(c$1,"c_12473","$$function0"),"cta-settings");async function c$1(t$1=!0){if(t$1)try{return a$1.fetch(t)}catch{return}}

const mod_6_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: c$1,
	getCtaSettings: S$2
});

const c=`
    *[_type == "testimonial" && project->slug.current == $slug] [0] {
      _id,
      client,
      content,
      "url": coalesce(url, null),
      _createdAt,
      _updatedAt
    }
`,$$1=T$1(W$2(i$1,"c_12518","$$function0"),"cta-settings");async function i$1(t){return a$1.fetch(c,{slug:t})}

const mod_7_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: i$1,
	getProjectTestimonial: $$1
});

const m$3=new Map;function x$4(t){const e=C$5();return (...n)=>t.apply({r:e},n)}function E$3(t,e){function n(...r){const a=this.r,c=this.f,o=(a.singleFlight&&t.withOptions?t.withOptions({headers:{"X-Single-Flight":"true"}}):t)(...r),[l,f]=createSignal();let g;function u(d){return async h=>{const s=await C$3(h,d,a.navigatorFactory());if(!s)return g.clear();if(f(s),s.error&&!c)throw s.error;return s.data}}return a.submissions[1](d=>[...d,g={input:r,url:i,get result(){return l()?.data},get error(){return l()?.error},get pending(){return !l()},clear(){a.submissions[1](h=>h.filter(s=>s.input!==r));},retry(){return f(void 0),t(...r).then(u(),u(!0))}}]),o.then(u(),u(!0))}const i=t.url||e||(isServer?"":`https://action/${B$1(t.toString())}`);return w$2(n,i)}function w$2(t,e){return t.toString=()=>{if(!e)throw new Error("Client Actions need explicit names if server rendered");return e},t.with=function(...n){const i=function(...a){return t.call(this,...n,...a)},r=new URL(e,Pe$3);return r.searchParams.set("args",I$2(n)),w$2(i,(r.origin==="https://action"?r.origin:"")+r.pathname+r.search)},t.url=e,isServer||(m$3.set(e,t),getOwner()&&onCleanup(()=>m$3.delete(e))),t}const B$1=t=>t.split("").reduce((e,n)=>(e<<5)-e+n.charCodeAt(0)|0,0);async function C$3(t,e,n){let i,r,a,c;if(t instanceof Response){if(t.headers.has("X-Revalidate")&&(a=t.headers.get("X-Revalidate").split(",")),t.customBody&&(i=r=await t.customBody(),t.headers.has("X-Single-Flight")&&(i=i._$value,delete r._$value,c=Object.keys(r))),t.headers.has("Location")){const o=t.headers.get("Location")||"/";o.startsWith("http")?window.location.href=o:n(o);}}else {if(e)return {error:t};i=t;}return _$2(a,o=>o[0]=0),c&&c.forEach(o=>T$1.set(o,r[o])),await J$2(a,!1),i!=null?{data:i}:void 0}

const p$1=({email:a,message:s,name:l,phone:t,title:o="Impulsionar"})=>`
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

<p>Recebeu um novo formulário de contacto de ${l}:</p>
<ul>
<li><strong>Nome:</strong> ${l}</li>
<li><strong>Email:</strong> <a href="mailto:${a}">${a}</a></li>
${t?`<li><strong>Contacto Telefónico:</strong> <a href="tel:${t}">${t}</a></li>`:""}
</ul>

<p style="margin-top: 20px;font-weight:bold;">Mensagem</p>
<p>${s}</p>


<p style="margin-top: 40px;">
    Ao seu dispor,<br />
    <strong>${o}</strong>.
</p>`,e=createTransport({host:process.env.SMTP_HOST??"",port:Number(process.env.SMTP_PORT)??587,secureConnection:!!process.env.SMTP_SECURE,auth:{user:process.env.SMTP_EMAIL??"",pass:process.env.SMTP_PASSWORD??""}});e.verify((a,s)=>{a?console.error("📥 Email serverw error:",a):console.info("📤 Email server is ready to send messages!");});const A$2=E$3(W$2(h,"c_10313","$$function0"));async function h(a){try{await e.sendMail({from:V$2.email.email,to:V$2.email.email,subject:"Formulário de contacto",html:p$1({email:a.email,message:a.message,name:a.name,phone:a.phone?a.phone:void 0,title:"Impulsionar"})});}catch{}}

const mod_8_3 = /*#__PURE__*/Object.freeze({
	__proto__: null,
	$$function0: h,
	sendEmailAction: A$2
});

const chunks = {};
				chunks['c_10846.mjs'] = mod_0_3;
				chunks['c_10961.mjs'] = mod_1_3;
				chunks['c_12805.mjs'] = mod_2_3;
				chunks['c_11160.mjs'] = mod_3_3;
				chunks['c_11170.mjs'] = mod_4_3;
				chunks['c_12098.mjs'] = mod_5_3;
				chunks['c_12473.mjs'] = mod_6_3;
				chunks['c_12518.mjs'] = mod_7_3;
				chunks['c_10313.mjs'] = mod_8_3;
			
			 function app() {
				 globalThis.$$chunks = chunks;
			 }

const plugins = [
  plugin$2,
plugin$1,
plugin,
app
];

function defineNitroErrorHandler(handler) {
  return handler;
}
const errorHandler = defineNitroErrorHandler(
  function defaultNitroErrorHandler(error, event) {
    const { stack, statusCode, statusMessage, message } = normalizeError(error);
    const errorObject = {
      url: event.path || "",
      statusCode,
      statusMessage,
      message,
      stack: void 0
    };
    if (error.unhandled || error.fatal) {
      const tags = [
        "[nitro]",
        "[request error]",
        error.unhandled && "[unhandled]",
        error.fatal && "[fatal]"
      ].filter(Boolean).join(" ");
      console.error(
        tags,
        error.message + "\n" + stack.map((l) => "  " + l.text).join("  \n")
      );
    }
    setResponseStatus(event, statusCode, statusMessage);
    if (isJsonRequest(event)) {
      setResponseHeader(event, "Content-Type", "application/json");
      return send(event, JSON.stringify(errorObject));
    } else {
      setResponseHeader(event, "Content-Type", "text/html");
      return send(event, renderHTMLError(errorObject));
    }
  }
);
function renderHTMLError(error) {
  const statusCode = error.statusCode || 500;
  const statusMessage = error.statusMessage || "Request Error";
  return `<!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>${statusCode} ${statusMessage}</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/@picocss/pico/css/pico.min.css">
  </head>
  <body>
    <main class="container">
      <dialog open>
        <article>
          <header>
            <h2>${statusCode} ${statusMessage}</h2>
          </header>
          <code>
            ${error.message}<br><br>
            ${"\n" + (error.stack || []).map((i) => `&nbsp;&nbsp;${i}`).join("<br>")}
          </code>
          <footer>
            <a href="/" onclick="event.preventDefault();history.back();">Go Back</a>
          </footer>
        </article>
      </dialog>
    </main>
  </body>
</html>
`;
}

const assets = {
  "/favicon.ico": {
    "type": "image/vnd.microsoft.icon",
    "etag": "\"298-hdW7/pL89QptiszdYCHH67XxLxs\"",
    "mtime": "2024-09-12T20:56:18.716Z",
    "size": 664,
    "path": "../public/favicon.ico"
  },
  "/logo.jpeg": {
    "type": "image/jpeg",
    "etag": "\"8343-i/VvAT0eHX+cY03cK2KKeWh1kqQ\"",
    "mtime": "2024-09-12T20:56:18.717Z",
    "size": 33603,
    "path": "../public/logo.jpeg"
  },
  "/_build/server-functions-manifest.json": {
    "type": "application/json",
    "etag": "\"453-O4a7K1FwMi/DgYDjufduQllA8to\"",
    "mtime": "2024-09-12T20:56:18.753Z",
    "size": 1107,
    "path": "../public/_build/server-functions-manifest.json"
  },
  "/_build/server-functions-manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"b9-cZ7ZLuIF7geueH9dunCkaH3Is2c\"",
    "mtime": "2024-09-12T20:56:19.337Z",
    "size": 185,
    "path": "../public/_build/server-functions-manifest.json.br"
  },
  "/_build/server-functions-manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"dd-8ci/P8WLUSa88amjiYwtUtNJckY\"",
    "mtime": "2024-09-12T20:56:19.337Z",
    "size": 221,
    "path": "../public/_build/server-functions-manifest.json.gz"
  },
  "/assets/Phosphor-BXRFlF4V.svg": {
    "type": "image/svg+xml",
    "etag": "\"2db893-fdwcN//S+NeYW9Iz2sQQnsetu5g\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 2996371,
    "path": "../public/assets/Phosphor-BXRFlF4V.svg"
  },
  "/assets/Phosphor-BXRFlF4V.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"48e94-F5vKlPJ93nS5oF2swzS8Ddla2PQ\"",
    "mtime": "2024-09-12T20:56:21.539Z",
    "size": 298644,
    "path": "../public/assets/Phosphor-BXRFlF4V.svg.br"
  },
  "/assets/Phosphor-BXRFlF4V.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"c6526-nVo8y24qP8yhB5FZ7f55+goo4JQ\"",
    "mtime": "2024-09-12T20:56:20.188Z",
    "size": 812326,
    "path": "../public/assets/Phosphor-BXRFlF4V.svg.gz"
  },
  "/assets/Phosphor-BdqudwT5.woff": {
    "type": "font/woff",
    "etag": "\"7750c-Ca8Prk0UmNKVgVcXqMI1ngfnaYY\"",
    "mtime": "2024-09-12T20:56:18.728Z",
    "size": 488716,
    "path": "../public/assets/Phosphor-BdqudwT5.woff"
  },
  "/assets/Phosphor-CDxgqcPu.ttf": {
    "type": "font/ttf",
    "etag": "\"774bc-GlNGkqYKgH+Ho+zEl7o8FOx8y0o\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 488636,
    "path": "../public/assets/Phosphor-CDxgqcPu.ttf"
  },
  "/assets/Phosphor-CDxgqcPu.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"29cc8-FX3mvec3JfFYPbHreBlq9xg+/GM\"",
    "mtime": "2024-09-12T20:56:20.060Z",
    "size": 171208,
    "path": "../public/assets/Phosphor-CDxgqcPu.ttf.br"
  },
  "/assets/Phosphor-CDxgqcPu.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"30bc9-GZn2n4R/Xf+K6Ki+Oj76r5N5Xn0\"",
    "mtime": "2024-09-12T20:56:20.053Z",
    "size": 199625,
    "path": "../public/assets/Phosphor-CDxgqcPu.ttf.gz"
  },
  "/assets/Phosphor-DtdjzkpE.woff2": {
    "type": "font/woff2",
    "etag": "\"23fb4-DYFfFANzl8y/1I/l3775btbmYgU\"",
    "mtime": "2024-09-12T20:56:18.728Z",
    "size": 147380,
    "path": "../public/assets/Phosphor-DtdjzkpE.woff2"
  },
  "/assets/action-DjunEzuR.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"77e-cStltwro+HfwoPrdjWWdJ9sgvis\"",
    "mtime": "2024-09-12T20:56:18.728Z",
    "size": 1918,
    "path": "../public/assets/action-DjunEzuR.js"
  },
  "/assets/action-DjunEzuR.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"3b6-UKDRJwrE068DIFCpeTB5YG5+Y1I\"",
    "mtime": "2024-09-12T20:56:19.337Z",
    "size": 950,
    "path": "../public/assets/action-DjunEzuR.js.br"
  },
  "/assets/action-DjunEzuR.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"41d-KJWepbZHf7qM3HtkouoC9e5PP8c\"",
    "mtime": "2024-09-12T20:56:19.337Z",
    "size": 1053,
    "path": "../public/assets/action-DjunEzuR.js.gz"
  },
  "/assets/cn-YZS7jNQp.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"70-shaCHzOe4X8A3U3dnAeuz0GcXWA\"",
    "mtime": "2024-09-12T20:56:18.728Z",
    "size": 112,
    "path": "../public/assets/cn-YZS7jNQp.js"
  },
  "/assets/components-CEmY4i8r.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"343-raNXHw93Wzp0GgIzR3yfwh+l7Dk\"",
    "mtime": "2024-09-12T20:56:18.728Z",
    "size": 835,
    "path": "../public/assets/components-CEmY4i8r.js"
  },
  "/assets/images-CtpvCe-X.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"541c-q1TVB7remD0uNGQmmBqyhi5DX4w\"",
    "mtime": "2024-09-12T20:56:18.728Z",
    "size": 21532,
    "path": "../public/assets/images-CtpvCe-X.js"
  },
  "/assets/images-CtpvCe-X.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"18f2-Shk1hgLF+jCWKUrKenzJUwwz300\"",
    "mtime": "2024-09-12T20:56:19.338Z",
    "size": 6386,
    "path": "../public/assets/images-CtpvCe-X.js.br"
  },
  "/assets/images-CtpvCe-X.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1b86-3Sn+2OjUirWFq6SV9XDdV+7zK7Y\"",
    "mtime": "2024-09-12T20:56:19.338Z",
    "size": 7046,
    "path": "../public/assets/images-CtpvCe-X.js.gz"
  },
  "/assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff": {
    "type": "font/woff",
    "etag": "\"2af8-8KLBB2RBEjOHXFAdx8bWDoDoIss\"",
    "mtime": "2024-09-12T20:56:18.729Z",
    "size": 11000,
    "path": "../public/assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff"
  },
  "/assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2": {
    "type": "font/woff2",
    "etag": "\"21dc-BncGB3gMaeV/COJusnMimrGc2Pg\"",
    "mtime": "2024-09-12T20:56:18.729Z",
    "size": 8668,
    "path": "../public/assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2"
  },
  "/assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2": {
    "type": "font/woff2",
    "etag": "\"21a0-dyh6UlSBrJ8DYPH6Lg9ohSDdobk\"",
    "mtime": "2024-09-12T20:56:18.729Z",
    "size": 8608,
    "path": "../public/assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2"
  },
  "/assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff": {
    "type": "font/woff",
    "etag": "\"2ae0-g2HKi7Dq6jh7lGzvZIBuftgrhts\"",
    "mtime": "2024-09-12T20:56:18.729Z",
    "size": 10976,
    "path": "../public/assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff"
  },
  "/assets/montserrat-cyrillic-400-normal-95VoEncJ.woff": {
    "type": "font/woff",
    "etag": "\"2b28-Im2nkTqwyFGTWabs8j4OwRFVX/I\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 11048,
    "path": "../public/assets/montserrat-cyrillic-400-normal-95VoEncJ.woff"
  },
  "/assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2": {
    "type": "font/woff2",
    "etag": "\"21bc-q4vU5LoKBfQ2tW7UEDOZ2kd57OA\"",
    "mtime": "2024-09-12T20:56:18.729Z",
    "size": 8636,
    "path": "../public/assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2"
  },
  "/assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2": {
    "type": "font/woff2",
    "etag": "\"2258-aGugatxwmLihBAOefV3+/X/Utbk\"",
    "mtime": "2024-09-12T20:56:18.729Z",
    "size": 8792,
    "path": "../public/assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2"
  },
  "/assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff": {
    "type": "font/woff",
    "etag": "\"2b78-fHzxIoq4PqttTlyc8dYyXye/Rj8\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 11128,
    "path": "../public/assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff"
  },
  "/assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2": {
    "type": "font/woff2",
    "etag": "\"2258-+lVUpPSl1Tt6vr4iUOyDRvfb2II\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 8792,
    "path": "../public/assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2"
  },
  "/assets/montserrat-cyrillic-700-normal-Blzg39qC.woff": {
    "type": "font/woff",
    "etag": "\"2b20-EBsv8pIXrt6lgPlGPuHzDGkx/4A\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 11040,
    "path": "../public/assets/montserrat-cyrillic-700-normal-Blzg39qC.woff"
  },
  "/assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff": {
    "type": "font/woff",
    "etag": "\"29b8-CL5MmKL15SMsJKl85Eq0bBWO+cY\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 10680,
    "path": "../public/assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff"
  },
  "/assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2": {
    "type": "font/woff2",
    "etag": "\"2168-BNmllk5c2O45/ublwrLa5wmbQNY\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 8552,
    "path": "../public/assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2"
  },
  "/assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff": {
    "type": "font/woff",
    "etag": "\"31b8-01BGD4wLUm4WVD2yKJ1GLzbYkec\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 12728,
    "path": "../public/assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff"
  },
  "/assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2": {
    "type": "font/woff2",
    "etag": "\"24f8-OchMlfjkRqnmGfcJONlrnzgSQgc\"",
    "mtime": "2024-09-12T20:56:18.730Z",
    "size": 9464,
    "path": "../public/assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2"
  },
  "/assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2": {
    "type": "font/woff2",
    "etag": "\"2558-/yuHithgVrVY+hl6YllDCoISHbg\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 9560,
    "path": "../public/assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2"
  },
  "/assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff": {
    "type": "font/woff",
    "etag": "\"3204-Em/x63Q5J4PbqkaJT9Aom+XUT8A\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 12804,
    "path": "../public/assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff"
  },
  "/assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff": {
    "type": "font/woff",
    "etag": "\"320c-xSv01tfmUGjpROpQWK8tKbvFcPI\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 12812,
    "path": "../public/assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff"
  },
  "/assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2": {
    "type": "font/woff2",
    "etag": "\"2570-DAxZWsG9DPixGXz0p2X6vyhWjy4\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 9584,
    "path": "../public/assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2"
  },
  "/assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff": {
    "type": "font/woff",
    "etag": "\"3270-+j7g6o1odKyoCf+J100mILtRLR8\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 12912,
    "path": "../public/assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff"
  },
  "/assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2": {
    "type": "font/woff2",
    "etag": "\"2574-/kcoPuRXoAiLSexacYd5VaG5l0Q\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 9588,
    "path": "../public/assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2"
  },
  "/assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff": {
    "type": "font/woff",
    "etag": "\"3250-Ib8FMdI9f1jGbtECEWYWMBbPqVM\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 12880,
    "path": "../public/assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff"
  },
  "/assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2": {
    "type": "font/woff2",
    "etag": "\"2604-qzEsUdnUBDgcniUw5inHJJNrGvg\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 9732,
    "path": "../public/assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2"
  },
  "/assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff": {
    "type": "font/woff",
    "etag": "\"3050-cRC+z9HLUkgtl1fe8MMt1VK0K9E\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 12368,
    "path": "../public/assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff"
  },
  "/assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2": {
    "type": "font/woff2",
    "etag": "\"2460-04XAHux9l7ynsJkCnhvvEd3XjZw\"",
    "mtime": "2024-09-12T20:56:18.731Z",
    "size": 9312,
    "path": "../public/assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2"
  },
  "/assets/montserrat-latin-200-normal-ByeQgr9u.woff": {
    "type": "font/woff",
    "etag": "\"4a8c-hzXQhLZ2pVU558a4L4NrtWDcgAU\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 19084,
    "path": "../public/assets/montserrat-latin-200-normal-ByeQgr9u.woff"
  },
  "/assets/montserrat-latin-200-normal-Co0glrxx.woff2": {
    "type": "font/woff2",
    "etag": "\"3a14-BZeLOJHABQEPptQsFpfvCnPLE/Q\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 14868,
    "path": "../public/assets/montserrat-latin-200-normal-Co0glrxx.woff2"
  },
  "/assets/montserrat-latin-300-normal-DYYY4VIB.woff2": {
    "type": "font/woff2",
    "etag": "\"3a74-VMAKHqbbfQPj52UVl21vzqEpi0g\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 14964,
    "path": "../public/assets/montserrat-latin-300-normal-DYYY4VIB.woff2"
  },
  "/assets/montserrat-latin-300-normal-DrgRfrdN.woff": {
    "type": "font/woff",
    "etag": "\"4bac-STJbayeiZyOB3jZwxdIVPx10tCM\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 19372,
    "path": "../public/assets/montserrat-latin-300-normal-DrgRfrdN.woff"
  },
  "/assets/montserrat-latin-400-normal-BfmCfwfZ.woff2": {
    "type": "font/woff2",
    "etag": "\"3a5c-HuUL9ZhcGVbd4cBtmxzsRkXduSs\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 14940,
    "path": "../public/assets/montserrat-latin-400-normal-BfmCfwfZ.woff2"
  },
  "/assets/montserrat-latin-400-normal-BhTl8mZv.woff": {
    "type": "font/woff",
    "etag": "\"4b78-v1wq4+6DYDoTjR7BIbuEF698WxM\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 19320,
    "path": "../public/assets/montserrat-latin-400-normal-BhTl8mZv.woff"
  },
  "/assets/montserrat-latin-500-normal-CN3hDfLq.woff2": {
    "type": "font/woff2",
    "etag": "\"3afc-RhY/ZJJi9UdPjCmBTnEc3JHb+LI\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 15100,
    "path": "../public/assets/montserrat-latin-500-normal-CN3hDfLq.woff2"
  },
  "/assets/montserrat-latin-500-normal-T-BM6Fhn.woff": {
    "type": "font/woff",
    "etag": "\"4b20-wWTr3+j6tkna4R2yg0hppQSAbp4\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 19232,
    "path": "../public/assets/montserrat-latin-500-normal-T-BM6Fhn.woff"
  },
  "/assets/montserrat-latin-700-normal-Dkxlx_w4.woff2": {
    "type": "font/woff2",
    "etag": "\"3b88-XsyNtFppBwPcG+9vjbK29bhlzwc\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 15240,
    "path": "../public/assets/montserrat-latin-700-normal-Dkxlx_w4.woff2"
  },
  "/assets/montserrat-latin-700-normal-o5q9xX7W.woff": {
    "type": "font/woff",
    "etag": "\"4b84-XLqf3151Cc01D2M+fQCq5I6rHpg\"",
    "mtime": "2024-09-12T20:56:18.732Z",
    "size": 19332,
    "path": "../public/assets/montserrat-latin-700-normal-o5q9xX7W.woff"
  },
  "/assets/montserrat-latin-900-normal-B8YluUfy.woff": {
    "type": "font/woff",
    "etag": "\"477c-gAQMad8FhMuXhoSfhxuFbaXyuGE\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 18300,
    "path": "../public/assets/montserrat-latin-900-normal-B8YluUfy.woff"
  },
  "/assets/montserrat-latin-900-normal-HIE66ZyV.woff2": {
    "type": "font/woff2",
    "etag": "\"38a8-XSYLtghYYfaZGbYcW+c+QcuMIcc\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 14504,
    "path": "../public/assets/montserrat-latin-900-normal-HIE66ZyV.woff2"
  },
  "/assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff": {
    "type": "font/woff",
    "etag": "\"4934-pvOgVnSICnupKkt8SlASha7pbBg\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 18740,
    "path": "../public/assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff"
  },
  "/assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2": {
    "type": "font/woff2",
    "etag": "\"3354-6zFgLq3B3Cf+3moTjss8s0lAVKg\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 13140,
    "path": "../public/assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2"
  },
  "/assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2": {
    "type": "font/woff2",
    "etag": "\"3410-mbiR5euYrxuVugZgegXAH3i5ebY\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 13328,
    "path": "../public/assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2"
  },
  "/assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff": {
    "type": "font/woff",
    "etag": "\"49c8-OKlItMtvjmxHB3Sre+X6ZGuR7qo\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 18888,
    "path": "../public/assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff"
  },
  "/assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff": {
    "type": "font/woff",
    "etag": "\"4a08-3bFLNR+84ygU0XSIFMnhTZQoJuc\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 18952,
    "path": "../public/assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff"
  },
  "/assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2": {
    "type": "font/woff2",
    "etag": "\"34c4-GD9yl3XRl5xkYVd/7ZMSjJuW19U\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 13508,
    "path": "../public/assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2"
  },
  "/assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff": {
    "type": "font/woff",
    "etag": "\"4a20-KNvW++FOvVFTe+Qkrz2qzPZAVCQ\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 18976,
    "path": "../public/assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff"
  },
  "/assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2": {
    "type": "font/woff2",
    "etag": "\"34c0-oyXdh8kpfQuiPw0tw9fdMtszajI\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 13504,
    "path": "../public/assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2"
  },
  "/assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2": {
    "type": "font/woff2",
    "etag": "\"35e0-4ua+E7CZEo4ltx5yYGeRBZ2C0e0\"",
    "mtime": "2024-09-12T20:56:18.733Z",
    "size": 13792,
    "path": "../public/assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2"
  },
  "/assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff": {
    "type": "font/woff",
    "etag": "\"4ae8-GTlDUvvdmRGItrBzthhE4kB0CCA\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 19176,
    "path": "../public/assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff"
  },
  "/assets/montserrat-latin-ext-900-normal-B2fljPr4.woff": {
    "type": "font/woff",
    "etag": "\"49bc-Nm1C4kqnNxFcsIlwICIV1789AZg\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 18876,
    "path": "../public/assets/montserrat-latin-ext-900-normal-B2fljPr4.woff"
  },
  "/assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2": {
    "type": "font/woff2",
    "etag": "\"355c-/VhHG+ZjofSm4oXNO63jHi1oZGo\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 13660,
    "path": "../public/assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2"
  },
  "/assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2": {
    "type": "font/woff2",
    "etag": "\"1374-GJMYwlw9me6/I1hhZHlHwo392ak\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 4980,
    "path": "../public/assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2"
  },
  "/assets/montserrat-vietnamese-200-normal-CuJsZitD.woff": {
    "type": "font/woff",
    "etag": "\"1a78-kkw89m72TiOWVuGdkLG2sKtoR88\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 6776,
    "path": "../public/assets/montserrat-vietnamese-200-normal-CuJsZitD.woff"
  },
  "/assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2": {
    "type": "font/woff2",
    "etag": "\"1380-QsTbkZzyS1rAu0YCM3XwliaS+Fo\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 4992,
    "path": "../public/assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2"
  },
  "/assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff": {
    "type": "font/woff",
    "etag": "\"1ac4-VhoXa6XtmmypM+Y1u3lFGHrDWAw\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 6852,
    "path": "../public/assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff"
  },
  "/assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2": {
    "type": "font/woff2",
    "etag": "\"13d8-8vzrT6b24+SC7bWwTi+3651GWH4\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 5080,
    "path": "../public/assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2"
  },
  "/assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff": {
    "type": "font/woff",
    "etag": "\"1acc-zxuk+8LyS00/9YBNNuOv1+Noo2o\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 6860,
    "path": "../public/assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff"
  },
  "/assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff": {
    "type": "font/woff",
    "etag": "\"1ad8-8pl6pmCzmKx/OPHh4VRhTi185Vk\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 6872,
    "path": "../public/assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff"
  },
  "/assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2": {
    "type": "font/woff2",
    "etag": "\"13c4-j6wC2aQo+m2DiPJn8bllbQ6pkNg\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 5060,
    "path": "../public/assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2"
  },
  "/assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff": {
    "type": "font/woff",
    "etag": "\"1aec-fpvSCfygfmYoG3WyZY0XRUva1Hw\"",
    "mtime": "2024-09-12T20:56:18.734Z",
    "size": 6892,
    "path": "../public/assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff"
  },
  "/assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2": {
    "type": "font/woff2",
    "etag": "\"140c-sjLJYp0rg3P+UyduTbAeLfvFQVE\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 5132,
    "path": "../public/assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2"
  },
  "/assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff": {
    "type": "font/woff",
    "etag": "\"1ad0-KhbB5r9UL6jWs0lCSCzTfBujrGg\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 6864,
    "path": "../public/assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff"
  },
  "/assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2": {
    "type": "font/woff2",
    "etag": "\"13d0-DlU0JqoRasU8HZIJEtgb90nAtRQ\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 5072,
    "path": "../public/assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2"
  },
  "/assets/routing-KofvCWNq.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fe6-QCPUC089+aR1kbtnpC3HYFGzYyg\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 8166,
    "path": "../public/assets/routing-KofvCWNq.js"
  },
  "/assets/routing-KofvCWNq.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"d88-fOIwplVbyxThhM0FT5r6jYIVhkk\"",
    "mtime": "2024-09-12T20:56:19.338Z",
    "size": 3464,
    "path": "../public/assets/routing-KofvCWNq.js.br"
  },
  "/assets/routing-KofvCWNq.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"ed2-viWmuTz1sO8fUMFuQdvwGQTpvmE\"",
    "mtime": "2024-09-12T20:56:19.338Z",
    "size": 3794,
    "path": "../public/assets/routing-KofvCWNq.js.gz"
  },
  "/assets/spectral-cyrillic-200-normal-B_x--0bF.woff2": {
    "type": "font/woff2",
    "etag": "\"3b44-V4yFAkDWosRLRuotI1tZSxSF8io\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 15172,
    "path": "../public/assets/spectral-cyrillic-200-normal-B_x--0bF.woff2"
  },
  "/assets/spectral-cyrillic-200-normal-DBFgNIo-.woff": {
    "type": "font/woff",
    "etag": "\"2dfc-JaS2ZHKz0oVHnhoil4N+sxCRAyY\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 11772,
    "path": "../public/assets/spectral-cyrillic-200-normal-DBFgNIo-.woff"
  },
  "/assets/spectral-cyrillic-300-normal-3mshyS_1.woff2": {
    "type": "font/woff2",
    "etag": "\"3ddc-cc4rx5T4DBrChA/XaF/QnobdRK0\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 15836,
    "path": "../public/assets/spectral-cyrillic-300-normal-3mshyS_1.woff2"
  },
  "/assets/spectral-cyrillic-300-normal-BuwX68dz.woff": {
    "type": "font/woff",
    "etag": "\"3184-VEpRsJReA4kj5fVTQP1k7sKAjoY\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 12676,
    "path": "../public/assets/spectral-cyrillic-300-normal-BuwX68dz.woff"
  },
  "/assets/spectral-cyrillic-400-normal-BSztQViE.woff": {
    "type": "font/woff",
    "etag": "\"2cc4-e8kxUNfG0LTRWGSSSkm6Ey6o9EY\"",
    "mtime": "2024-09-12T20:56:18.736Z",
    "size": 11460,
    "path": "../public/assets/spectral-cyrillic-400-normal-BSztQViE.woff"
  },
  "/assets/spectral-cyrillic-400-normal-DSdESYJf.woff2": {
    "type": "font/woff2",
    "etag": "\"3cf4-NQszRMRm+Lb61aawgm5EWH2V3OI\"",
    "mtime": "2024-09-12T20:56:18.735Z",
    "size": 15604,
    "path": "../public/assets/spectral-cyrillic-400-normal-DSdESYJf.woff2"
  },
  "/assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff": {
    "type": "font/woff",
    "etag": "\"3270-MEsmHF73Jnd3iC00jFPlbUWebKc\"",
    "mtime": "2024-09-12T20:56:18.736Z",
    "size": 12912,
    "path": "../public/assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff"
  },
  "/assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2": {
    "type": "font/woff2",
    "etag": "\"3f54-REsHnHvOnhzu63FZON42YLRGW4s\"",
    "mtime": "2024-09-12T20:56:18.736Z",
    "size": 16212,
    "path": "../public/assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2"
  },
  "/assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2": {
    "type": "font/woff2",
    "etag": "\"4050-eJy5Ksqr070n7Jx5hbfYXHRAhsQ\"",
    "mtime": "2024-09-12T20:56:18.736Z",
    "size": 16464,
    "path": "../public/assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2"
  },
  "/assets/spectral-cyrillic-600-normal-CGQrotlm.woff": {
    "type": "font/woff",
    "etag": "\"329c-PybuKlDYStuV3IbBE1/8ny9YEVw\"",
    "mtime": "2024-09-12T20:56:18.736Z",
    "size": 12956,
    "path": "../public/assets/spectral-cyrillic-600-normal-CGQrotlm.woff"
  },
  "/assets/spectral-cyrillic-700-normal-97LnvvSG.woff2": {
    "type": "font/woff2",
    "etag": "\"4138-BK0YwsEQHdJ+Nrpo48i3I3NOUDM\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 16696,
    "path": "../public/assets/spectral-cyrillic-700-normal-97LnvvSG.woff2"
  },
  "/assets/spectral-cyrillic-700-normal-COc0fxPc.woff": {
    "type": "font/woff",
    "etag": "\"32c0-dZQpX5L52kKdLiu10YxKjrswK+Y\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 12992,
    "path": "../public/assets/spectral-cyrillic-700-normal-COc0fxPc.woff"
  },
  "/assets/spectral-latin-200-normal-WAtLTr05.woff2": {
    "type": "font/woff2",
    "etag": "\"5254-ymwLR7Y+vRCQyKfnxzWQe3Q1Dzw\"",
    "mtime": "2024-09-12T20:56:18.736Z",
    "size": 21076,
    "path": "../public/assets/spectral-latin-200-normal-WAtLTr05.woff2"
  },
  "/assets/spectral-latin-200-normal-WQAAvAV9.woff": {
    "type": "font/woff",
    "etag": "\"4198-JcIgciCKzsDgs6dKIujMEb119EE\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 16792,
    "path": "../public/assets/spectral-latin-200-normal-WQAAvAV9.woff"
  },
  "/assets/spectral-latin-300-normal-8KdwH-BZ.woff2": {
    "type": "font/woff2",
    "etag": "\"5664-CY4fT5695N5CczxhwPKmpESoyf0\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 22116,
    "path": "../public/assets/spectral-latin-300-normal-8KdwH-BZ.woff2"
  },
  "/assets/spectral-latin-300-normal-BJ3qdcga.woff": {
    "type": "font/woff",
    "etag": "\"4604-reQazPJCyS1jPCu7nIgbjkL75vM\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 17924,
    "path": "../public/assets/spectral-latin-300-normal-BJ3qdcga.woff"
  },
  "/assets/spectral-latin-400-normal-CFnFwP8t.woff": {
    "type": "font/woff",
    "etag": "\"4210-4c53pKUnOJmnCE7RHgC+VyV9xtU\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 16912,
    "path": "../public/assets/spectral-latin-400-normal-CFnFwP8t.woff"
  },
  "/assets/spectral-latin-400-normal-MXBVgyrt.woff2": {
    "type": "font/woff2",
    "etag": "\"5538-NWaNZW4mKGgdQMD2KPpA+Aj1DrQ\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 21816,
    "path": "../public/assets/spectral-latin-400-normal-MXBVgyrt.woff2"
  },
  "/assets/spectral-latin-500-normal-5HBkxKjs.woff2": {
    "type": "font/woff2",
    "etag": "\"58e8-xtTdY5i5Oql44zyUEiojqwKoIVg\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 22760,
    "path": "../public/assets/spectral-latin-500-normal-5HBkxKjs.woff2"
  },
  "/assets/spectral-latin-500-normal-D__sIyLH.woff": {
    "type": "font/woff",
    "etag": "\"46b8-PBBNIWWJdXcuRqd6nfNaCsUK/W4\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 18104,
    "path": "../public/assets/spectral-latin-500-normal-D__sIyLH.woff"
  },
  "/assets/spectral-latin-600-normal-BLtkLvbx.woff": {
    "type": "font/woff",
    "etag": "\"46d0-CDff26Rim3UH4YN5HhZRm5H4LJE\"",
    "mtime": "2024-09-12T20:56:18.737Z",
    "size": 18128,
    "path": "../public/assets/spectral-latin-600-normal-BLtkLvbx.woff"
  },
  "/assets/spectral-latin-600-normal-CPXfyHlN.woff2": {
    "type": "font/woff2",
    "etag": "\"58bc-UJehpNui9bZLOvUDNrS3bshYKQs\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 22716,
    "path": "../public/assets/spectral-latin-600-normal-CPXfyHlN.woff2"
  },
  "/assets/spectral-latin-700-normal-BqcegO99.woff2": {
    "type": "font/woff2",
    "etag": "\"5a54-e1X9pzaBHkjRxNtc+harSrua9fA\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 23124,
    "path": "../public/assets/spectral-latin-700-normal-BqcegO99.woff2"
  },
  "/assets/spectral-latin-700-normal-Rag2g1u6.woff": {
    "type": "font/woff",
    "etag": "\"46f4-LqFECgnwlFDVwxZGoi8KDR8OK8c\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 18164,
    "path": "../public/assets/spectral-latin-700-normal-Rag2g1u6.woff"
  },
  "/assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2": {
    "type": "font/woff2",
    "etag": "\"4870-+HPKAHZyDdS5oi4v/heOYFckT3I\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 18544,
    "path": "../public/assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2"
  },
  "/assets/spectral-latin-ext-200-normal-Ca1vATCy.woff": {
    "type": "font/woff",
    "etag": "\"3aec-8kE6xkSDyuel+7ohC4nYqWyF4oQ\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 15084,
    "path": "../public/assets/spectral-latin-ext-200-normal-Ca1vATCy.woff"
  },
  "/assets/spectral-latin-ext-300-normal-DTEvBdvf.woff": {
    "type": "font/woff",
    "etag": "\"3d90-KVRlyCPYZtb9zL7yPowLLi9M4Po\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 15760,
    "path": "../public/assets/spectral-latin-ext-300-normal-DTEvBdvf.woff"
  },
  "/assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2": {
    "type": "font/woff2",
    "etag": "\"4a40-3APi1NQjtZzOtheNhuaOVd4kvqM\"",
    "mtime": "2024-09-12T20:56:18.739Z",
    "size": 19008,
    "path": "../public/assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2"
  },
  "/assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2": {
    "type": "font/woff2",
    "etag": "\"49dc-26//h21rJbiz1NUSarfbOt8+y6s\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 18908,
    "path": "../public/assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2"
  },
  "/assets/spectral-latin-ext-400-normal-COH_Sm0M.woff": {
    "type": "font/woff",
    "etag": "\"3ba0-BCYjqFfVuCYtpfChosYXhgK6cuU\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 15264,
    "path": "../public/assets/spectral-latin-ext-400-normal-COH_Sm0M.woff"
  },
  "/assets/spectral-latin-ext-500-normal-BKlxGjla.woff": {
    "type": "font/woff",
    "etag": "\"3dd0-khGIs0fU0ajLxdoBize7LmhTgYE\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 15824,
    "path": "../public/assets/spectral-latin-ext-500-normal-BKlxGjla.woff"
  },
  "/assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2": {
    "type": "font/woff2",
    "etag": "\"4ba4-UH2BmIJbqq6GCZ+Sclvwe0kVHsY\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 19364,
    "path": "../public/assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2"
  },
  "/assets/spectral-latin-ext-600-normal-B2UuAU7N.woff": {
    "type": "font/woff",
    "etag": "\"3dcc-729nU48wBHZp4t8xz7xi2O6C12k\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 15820,
    "path": "../public/assets/spectral-latin-ext-600-normal-B2UuAU7N.woff"
  },
  "/assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2": {
    "type": "font/woff2",
    "etag": "\"4bfc-FZnVyswfu2hdmFfmP1rlD1bMyN0\"",
    "mtime": "2024-09-12T20:56:18.738Z",
    "size": 19452,
    "path": "../public/assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2"
  },
  "/assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2": {
    "type": "font/woff2",
    "etag": "\"4c9c-RBxF3Cuui+uQoLORA+IIkUAhlGg\"",
    "mtime": "2024-09-12T20:56:18.739Z",
    "size": 19612,
    "path": "../public/assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2"
  },
  "/assets/spectral-latin-ext-700-normal-riPWKqQE.woff": {
    "type": "font/woff",
    "etag": "\"3dc8-W6ugW/qpu/ytNZPuQTGOo1LQq7c\"",
    "mtime": "2024-09-12T20:56:18.739Z",
    "size": 15816,
    "path": "../public/assets/spectral-latin-ext-700-normal-riPWKqQE.woff"
  },
  "/assets/spectral-vietnamese-200-normal-BRyI-oGK.woff": {
    "type": "font/woff",
    "etag": "\"1414-153k1yACyo9bjBQ8WbBgdLZ4glE\"",
    "mtime": "2024-09-12T20:56:18.739Z",
    "size": 5140,
    "path": "../public/assets/spectral-vietnamese-200-normal-BRyI-oGK.woff"
  },
  "/assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2": {
    "type": "font/woff2",
    "etag": "\"1a88-aZrOqOvrbAdZ28mB/PCHCpOIlDc\"",
    "mtime": "2024-09-12T20:56:18.739Z",
    "size": 6792,
    "path": "../public/assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2"
  },
  "/assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2": {
    "type": "font/woff2",
    "etag": "\"1ad8-OXJBZeS2+W+I2Oqx0cyR/Ywx2dU\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 6872,
    "path": "../public/assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2"
  },
  "/assets/spectral-vietnamese-300-normal-DA2hpTYn.woff": {
    "type": "font/woff",
    "etag": "\"1440-5/8kagnbU1V47K7x9seHMZsBZQg\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 5184,
    "path": "../public/assets/spectral-vietnamese-300-normal-DA2hpTYn.woff"
  },
  "/assets/spectral-vietnamese-400-normal-12CTPExn.woff2": {
    "type": "font/woff2",
    "etag": "\"1c1c-XBwXqdferCzJydFJ/UTcuukUFHE\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 7196,
    "path": "../public/assets/spectral-vietnamese-400-normal-12CTPExn.woff2"
  },
  "/assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff": {
    "type": "font/woff",
    "etag": "\"1434-b6ClbeMdb31zLSz/pTrJe4mGp4s\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 5172,
    "path": "../public/assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff"
  },
  "/assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2": {
    "type": "font/woff2",
    "etag": "\"1b78-uySZfvo+3A9fL/ojIJKya8oHl1E\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 7032,
    "path": "../public/assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2"
  },
  "/assets/spectral-vietnamese-500-normal-DRaA1n-5.woff": {
    "type": "font/woff",
    "etag": "\"1470-wfNyFXsn9MoOjC6X7BY0WBc9o1g\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 5232,
    "path": "../public/assets/spectral-vietnamese-500-normal-DRaA1n-5.woff"
  },
  "/assets/spectral-vietnamese-600-normal-CYCcfOL0.woff": {
    "type": "font/woff",
    "etag": "\"1458-2/c2F4BufNcdLJGFNeGaG85FZlk\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 5208,
    "path": "../public/assets/spectral-vietnamese-600-normal-CYCcfOL0.woff"
  },
  "/assets/spectral-vietnamese-600-normal-VomzNZvj.woff2": {
    "type": "font/woff2",
    "etag": "\"1b94-I0xwqpf34L6FkULeKAbKwOzozOY\"",
    "mtime": "2024-09-12T20:56:18.741Z",
    "size": 7060,
    "path": "../public/assets/spectral-vietnamese-600-normal-VomzNZvj.woff2"
  },
  "/assets/spectral-vietnamese-700-normal-CBpdhthx.woff": {
    "type": "font/woff",
    "etag": "\"1464-CgflxWWPSNaxjCc40bw1dWEP5jk\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 5220,
    "path": "../public/assets/spectral-vietnamese-700-normal-CBpdhthx.woff"
  },
  "/assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2": {
    "type": "font/woff2",
    "etag": "\"1bbc-lCAXtklvMmJr6QdBxuEpDt0/+rs\"",
    "mtime": "2024-09-12T20:56:18.740Z",
    "size": 7100,
    "path": "../public/assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2"
  },
  "/assets/ssr-B2cBF7do.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d18a-8xpWpDCeRZ5LhlvjwCtdiSuozbs\"",
    "mtime": "2024-09-12T20:56:18.742Z",
    "size": 119178,
    "path": "../public/assets/ssr-B2cBF7do.css"
  },
  "/assets/ssr-B2cBF7do.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"43a2-3UmG8rCSVArR7QOrk1nnhKIl22s\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 17314,
    "path": "../public/assets/ssr-B2cBF7do.css.br"
  },
  "/assets/ssr-B2cBF7do.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"522f-pXzF37ZF0wP12vnrfNwA0tQY4sk\"",
    "mtime": "2024-09-12T20:56:19.344Z",
    "size": 21039,
    "path": "../public/assets/ssr-B2cBF7do.css.gz"
  },
  "/assets/styles-2TqKWpP5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"17c3d-GxNwXLxUKW8w//vYKdtyy3rjPUM\"",
    "mtime": "2024-09-12T20:56:18.741Z",
    "size": 97341,
    "path": "../public/assets/styles-2TqKWpP5.js"
  },
  "/assets/styles-2TqKWpP5.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"6bdc-vtPbJczMvqbzcg7m+CdJKlkRiig\"",
    "mtime": "2024-09-12T20:56:19.344Z",
    "size": 27612,
    "path": "../public/assets/styles-2TqKWpP5.js.br"
  },
  "/assets/styles-2TqKWpP5.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"7a6f-Ug9gvtCOKyBGfKxt9A0geyBPS50\"",
    "mtime": "2024-09-12T20:56:19.344Z",
    "size": 31343,
    "path": "../public/assets/styles-2TqKWpP5.js.gz"
  },
  "/assets/styles-EAaAWUae.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"8dc-5wYOD0X0J8x4R2H9pe0Mm/nSxds\"",
    "mtime": "2024-09-12T20:56:18.741Z",
    "size": 2268,
    "path": "../public/assets/styles-EAaAWUae.js"
  },
  "/assets/styles-EAaAWUae.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2df-jq21KkzydUaDTTHNLzVS3AKrj0c\"",
    "mtime": "2024-09-12T20:56:19.339Z",
    "size": 735,
    "path": "../public/assets/styles-EAaAWUae.js.br"
  },
  "/assets/styles-EAaAWUae.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"34a-XHxQ2IS2P8dqbO6WBqaT2z8SdLk\"",
    "mtime": "2024-09-12T20:56:19.339Z",
    "size": 842,
    "path": "../public/assets/styles-EAaAWUae.js.gz"
  },
  "/_build/.vite/manifest.json": {
    "type": "application/json",
    "etag": "\"cb1c-9WlSnXi4Er9d72wuLXeXg89sVpw\"",
    "mtime": "2024-09-12T20:56:18.766Z",
    "size": 51996,
    "path": "../public/_build/.vite/manifest.json"
  },
  "/_build/.vite/manifest.json.br": {
    "type": "application/json",
    "encoding": "br",
    "etag": "\"b36-3H/6cAPbK6TJ2kCjcLXC4E5vTXE\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 2870,
    "path": "../public/_build/.vite/manifest.json.br"
  },
  "/_build/.vite/manifest.json.gz": {
    "type": "application/json",
    "encoding": "gzip",
    "etag": "\"f0e-2WKJyGbqYk7s64DoahW2qZKmXTs\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 3854,
    "path": "../public/_build/.vite/manifest.json.gz"
  },
  "/_server/assets/Phosphor-BXRFlF4V.svg": {
    "type": "image/svg+xml",
    "etag": "\"2db893-fdwcN//S+NeYW9Iz2sQQnsetu5g\"",
    "mtime": "2024-09-12T20:56:18.792Z",
    "size": 2996371,
    "path": "../public/_server/assets/Phosphor-BXRFlF4V.svg"
  },
  "/_server/assets/Phosphor-BXRFlF4V.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"48e94-F5vKlPJ93nS5oF2swzS8Ddla2PQ\"",
    "mtime": "2024-09-12T20:56:22.148Z",
    "size": 298644,
    "path": "../public/_server/assets/Phosphor-BXRFlF4V.svg.br"
  },
  "/_server/assets/Phosphor-BXRFlF4V.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"c6526-nVo8y24qP8yhB5FZ7f55+goo4JQ\"",
    "mtime": "2024-09-12T20:56:20.188Z",
    "size": 812326,
    "path": "../public/_server/assets/Phosphor-BXRFlF4V.svg.gz"
  },
  "/_server/assets/Phosphor-BdqudwT5.woff": {
    "type": "font/woff",
    "etag": "\"7750c-Ca8Prk0UmNKVgVcXqMI1ngfnaYY\"",
    "mtime": "2024-09-12T20:56:18.780Z",
    "size": 488716,
    "path": "../public/_server/assets/Phosphor-BdqudwT5.woff"
  },
  "/_server/assets/Phosphor-CDxgqcPu.ttf": {
    "type": "font/ttf",
    "etag": "\"774bc-GlNGkqYKgH+Ho+zEl7o8FOx8y0o\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 488636,
    "path": "../public/_server/assets/Phosphor-CDxgqcPu.ttf"
  },
  "/_server/assets/Phosphor-CDxgqcPu.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"29cc8-FX3mvec3JfFYPbHreBlq9xg+/GM\"",
    "mtime": "2024-09-12T20:56:20.064Z",
    "size": 171208,
    "path": "../public/_server/assets/Phosphor-CDxgqcPu.ttf.br"
  },
  "/_server/assets/Phosphor-CDxgqcPu.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"30bc9-GZn2n4R/Xf+K6Ki+Oj76r5N5Xn0\"",
    "mtime": "2024-09-12T20:56:20.053Z",
    "size": 199625,
    "path": "../public/_server/assets/Phosphor-CDxgqcPu.ttf.gz"
  },
  "/_server/assets/Phosphor-DtdjzkpE.woff2": {
    "type": "font/woff2",
    "etag": "\"23fb4-DYFfFANzl8y/1I/l3775btbmYgU\"",
    "mtime": "2024-09-12T20:56:18.781Z",
    "size": 147380,
    "path": "../public/_server/assets/Phosphor-DtdjzkpE.woff2"
  },
  "/_server/assets/app-it5hbxyk.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d1fa-hFcE1vGrCS4dvo9CH0AUH3imAqc\"",
    "mtime": "2024-09-12T20:56:18.781Z",
    "size": 119290,
    "path": "../public/_server/assets/app-it5hbxyk.css"
  },
  "/_server/assets/app-it5hbxyk.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"43ce-fFJ176GUXs/Z7FnSCGTqtjUDOzA\"",
    "mtime": "2024-09-12T20:56:19.925Z",
    "size": 17358,
    "path": "../public/_server/assets/app-it5hbxyk.css.br"
  },
  "/_server/assets/app-it5hbxyk.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"5230-B5dNPHYm16B86buaTnxViTa73j8\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 21040,
    "path": "../public/_server/assets/app-it5hbxyk.css.gz"
  },
  "/_server/assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff": {
    "type": "font/woff",
    "etag": "\"2af8-8KLBB2RBEjOHXFAdx8bWDoDoIss\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 11000,
    "path": "../public/_server/assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff"
  },
  "/_server/assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2": {
    "type": "font/woff2",
    "etag": "\"21dc-BncGB3gMaeV/COJusnMimrGc2Pg\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 8668,
    "path": "../public/_server/assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2"
  },
  "/_server/assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2": {
    "type": "font/woff2",
    "etag": "\"21a0-dyh6UlSBrJ8DYPH6Lg9ohSDdobk\"",
    "mtime": "2024-09-12T20:56:18.781Z",
    "size": 8608,
    "path": "../public/_server/assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2"
  },
  "/_server/assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff": {
    "type": "font/woff",
    "etag": "\"2ae0-g2HKi7Dq6jh7lGzvZIBuftgrhts\"",
    "mtime": "2024-09-12T20:56:18.781Z",
    "size": 10976,
    "path": "../public/_server/assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff"
  },
  "/_server/assets/montserrat-cyrillic-400-normal-95VoEncJ.woff": {
    "type": "font/woff",
    "etag": "\"2b28-Im2nkTqwyFGTWabs8j4OwRFVX/I\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 11048,
    "path": "../public/_server/assets/montserrat-cyrillic-400-normal-95VoEncJ.woff"
  },
  "/_server/assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2": {
    "type": "font/woff2",
    "etag": "\"21bc-q4vU5LoKBfQ2tW7UEDOZ2kd57OA\"",
    "mtime": "2024-09-12T20:56:18.781Z",
    "size": 8636,
    "path": "../public/_server/assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2"
  },
  "/_server/assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2": {
    "type": "font/woff2",
    "etag": "\"2258-aGugatxwmLihBAOefV3+/X/Utbk\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 8792,
    "path": "../public/_server/assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2"
  },
  "/_server/assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff": {
    "type": "font/woff",
    "etag": "\"2b78-fHzxIoq4PqttTlyc8dYyXye/Rj8\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 11128,
    "path": "../public/_server/assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff"
  },
  "/_server/assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2": {
    "type": "font/woff2",
    "etag": "\"2258-+lVUpPSl1Tt6vr4iUOyDRvfb2II\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 8792,
    "path": "../public/_server/assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2"
  },
  "/_server/assets/montserrat-cyrillic-700-normal-Blzg39qC.woff": {
    "type": "font/woff",
    "etag": "\"2b20-EBsv8pIXrt6lgPlGPuHzDGkx/4A\"",
    "mtime": "2024-09-12T20:56:18.781Z",
    "size": 11040,
    "path": "../public/_server/assets/montserrat-cyrillic-700-normal-Blzg39qC.woff"
  },
  "/_server/assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff": {
    "type": "font/woff",
    "etag": "\"29b8-CL5MmKL15SMsJKl85Eq0bBWO+cY\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 10680,
    "path": "../public/_server/assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff"
  },
  "/_server/assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2": {
    "type": "font/woff2",
    "etag": "\"2168-BNmllk5c2O45/ublwrLa5wmbQNY\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 8552,
    "path": "../public/_server/assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2"
  },
  "/_server/assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff": {
    "type": "font/woff",
    "etag": "\"31b8-01BGD4wLUm4WVD2yKJ1GLzbYkec\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 12728,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff"
  },
  "/_server/assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2": {
    "type": "font/woff2",
    "etag": "\"24f8-OchMlfjkRqnmGfcJONlrnzgSQgc\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 9464,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2"
  },
  "/_server/assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2": {
    "type": "font/woff2",
    "etag": "\"2558-/yuHithgVrVY+hl6YllDCoISHbg\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 9560,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2"
  },
  "/_server/assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff": {
    "type": "font/woff",
    "etag": "\"3204-Em/x63Q5J4PbqkaJT9Aom+XUT8A\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 12804,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff"
  },
  "/_server/assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff": {
    "type": "font/woff",
    "etag": "\"320c-xSv01tfmUGjpROpQWK8tKbvFcPI\"",
    "mtime": "2024-09-12T20:56:18.782Z",
    "size": 12812,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff"
  },
  "/_server/assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2": {
    "type": "font/woff2",
    "etag": "\"2570-DAxZWsG9DPixGXz0p2X6vyhWjy4\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 9584,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2"
  },
  "/_server/assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff": {
    "type": "font/woff",
    "etag": "\"3270-+j7g6o1odKyoCf+J100mILtRLR8\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 12912,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff"
  },
  "/_server/assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2": {
    "type": "font/woff2",
    "etag": "\"2574-/kcoPuRXoAiLSexacYd5VaG5l0Q\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 9588,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2"
  },
  "/_server/assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff": {
    "type": "font/woff",
    "etag": "\"3250-Ib8FMdI9f1jGbtECEWYWMBbPqVM\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 12880,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff"
  },
  "/_server/assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2": {
    "type": "font/woff2",
    "etag": "\"2604-qzEsUdnUBDgcniUw5inHJJNrGvg\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 9732,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2"
  },
  "/_server/assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff": {
    "type": "font/woff",
    "etag": "\"3050-cRC+z9HLUkgtl1fe8MMt1VK0K9E\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 12368,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff"
  },
  "/_server/assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2": {
    "type": "font/woff2",
    "etag": "\"2460-04XAHux9l7ynsJkCnhvvEd3XjZw\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 9312,
    "path": "../public/_server/assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2"
  },
  "/_server/assets/montserrat-latin-200-normal-ByeQgr9u.woff": {
    "type": "font/woff",
    "etag": "\"4a8c-hzXQhLZ2pVU558a4L4NrtWDcgAU\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 19084,
    "path": "../public/_server/assets/montserrat-latin-200-normal-ByeQgr9u.woff"
  },
  "/_server/assets/montserrat-latin-200-normal-Co0glrxx.woff2": {
    "type": "font/woff2",
    "etag": "\"3a14-BZeLOJHABQEPptQsFpfvCnPLE/Q\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 14868,
    "path": "../public/_server/assets/montserrat-latin-200-normal-Co0glrxx.woff2"
  },
  "/_server/assets/montserrat-latin-300-normal-DYYY4VIB.woff2": {
    "type": "font/woff2",
    "etag": "\"3a74-VMAKHqbbfQPj52UVl21vzqEpi0g\"",
    "mtime": "2024-09-12T20:56:18.783Z",
    "size": 14964,
    "path": "../public/_server/assets/montserrat-latin-300-normal-DYYY4VIB.woff2"
  },
  "/_server/assets/montserrat-latin-300-normal-DrgRfrdN.woff": {
    "type": "font/woff",
    "etag": "\"4bac-STJbayeiZyOB3jZwxdIVPx10tCM\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 19372,
    "path": "../public/_server/assets/montserrat-latin-300-normal-DrgRfrdN.woff"
  },
  "/_server/assets/montserrat-latin-400-normal-BfmCfwfZ.woff2": {
    "type": "font/woff2",
    "etag": "\"3a5c-HuUL9ZhcGVbd4cBtmxzsRkXduSs\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 14940,
    "path": "../public/_server/assets/montserrat-latin-400-normal-BfmCfwfZ.woff2"
  },
  "/_server/assets/montserrat-latin-400-normal-BhTl8mZv.woff": {
    "type": "font/woff",
    "etag": "\"4b78-v1wq4+6DYDoTjR7BIbuEF698WxM\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 19320,
    "path": "../public/_server/assets/montserrat-latin-400-normal-BhTl8mZv.woff"
  },
  "/_server/assets/montserrat-latin-500-normal-CN3hDfLq.woff2": {
    "type": "font/woff2",
    "etag": "\"3afc-RhY/ZJJi9UdPjCmBTnEc3JHb+LI\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 15100,
    "path": "../public/_server/assets/montserrat-latin-500-normal-CN3hDfLq.woff2"
  },
  "/_server/assets/montserrat-latin-500-normal-T-BM6Fhn.woff": {
    "type": "font/woff",
    "etag": "\"4b20-wWTr3+j6tkna4R2yg0hppQSAbp4\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 19232,
    "path": "../public/_server/assets/montserrat-latin-500-normal-T-BM6Fhn.woff"
  },
  "/_server/assets/montserrat-latin-700-normal-Dkxlx_w4.woff2": {
    "type": "font/woff2",
    "etag": "\"3b88-XsyNtFppBwPcG+9vjbK29bhlzwc\"",
    "mtime": "2024-09-12T20:56:18.784Z",
    "size": 15240,
    "path": "../public/_server/assets/montserrat-latin-700-normal-Dkxlx_w4.woff2"
  },
  "/_server/assets/montserrat-latin-700-normal-o5q9xX7W.woff": {
    "type": "font/woff",
    "etag": "\"4b84-XLqf3151Cc01D2M+fQCq5I6rHpg\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 19332,
    "path": "../public/_server/assets/montserrat-latin-700-normal-o5q9xX7W.woff"
  },
  "/_server/assets/montserrat-latin-900-normal-B8YluUfy.woff": {
    "type": "font/woff",
    "etag": "\"477c-gAQMad8FhMuXhoSfhxuFbaXyuGE\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 18300,
    "path": "../public/_server/assets/montserrat-latin-900-normal-B8YluUfy.woff"
  },
  "/_server/assets/montserrat-latin-900-normal-HIE66ZyV.woff2": {
    "type": "font/woff2",
    "etag": "\"38a8-XSYLtghYYfaZGbYcW+c+QcuMIcc\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 14504,
    "path": "../public/_server/assets/montserrat-latin-900-normal-HIE66ZyV.woff2"
  },
  "/_server/assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff": {
    "type": "font/woff",
    "etag": "\"4934-pvOgVnSICnupKkt8SlASha7pbBg\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 18740,
    "path": "../public/_server/assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff"
  },
  "/_server/assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2": {
    "type": "font/woff2",
    "etag": "\"3354-6zFgLq3B3Cf+3moTjss8s0lAVKg\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 13140,
    "path": "../public/_server/assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2"
  },
  "/_server/assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2": {
    "type": "font/woff2",
    "etag": "\"3410-mbiR5euYrxuVugZgegXAH3i5ebY\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 13328,
    "path": "../public/_server/assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2"
  },
  "/_server/assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff": {
    "type": "font/woff",
    "etag": "\"49c8-OKlItMtvjmxHB3Sre+X6ZGuR7qo\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 18888,
    "path": "../public/_server/assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff"
  },
  "/_server/assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff": {
    "type": "font/woff",
    "etag": "\"4a08-3bFLNR+84ygU0XSIFMnhTZQoJuc\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 18952,
    "path": "../public/_server/assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff"
  },
  "/_server/assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2": {
    "type": "font/woff2",
    "etag": "\"34c4-GD9yl3XRl5xkYVd/7ZMSjJuW19U\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 13508,
    "path": "../public/_server/assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2"
  },
  "/_server/assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff": {
    "type": "font/woff",
    "etag": "\"4a20-KNvW++FOvVFTe+Qkrz2qzPZAVCQ\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 18976,
    "path": "../public/_server/assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff"
  },
  "/_server/assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2": {
    "type": "font/woff2",
    "etag": "\"34c0-oyXdh8kpfQuiPw0tw9fdMtszajI\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 13504,
    "path": "../public/_server/assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2"
  },
  "/_server/assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2": {
    "type": "font/woff2",
    "etag": "\"35e0-4ua+E7CZEo4ltx5yYGeRBZ2C0e0\"",
    "mtime": "2024-09-12T20:56:18.785Z",
    "size": 13792,
    "path": "../public/_server/assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2"
  },
  "/_server/assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff": {
    "type": "font/woff",
    "etag": "\"4ae8-GTlDUvvdmRGItrBzthhE4kB0CCA\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 19176,
    "path": "../public/_server/assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff"
  },
  "/_server/assets/montserrat-latin-ext-900-normal-B2fljPr4.woff": {
    "type": "font/woff",
    "etag": "\"49bc-Nm1C4kqnNxFcsIlwICIV1789AZg\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 18876,
    "path": "../public/_server/assets/montserrat-latin-ext-900-normal-B2fljPr4.woff"
  },
  "/_server/assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2": {
    "type": "font/woff2",
    "etag": "\"355c-/VhHG+ZjofSm4oXNO63jHi1oZGo\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 13660,
    "path": "../public/_server/assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2"
  },
  "/_server/assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2": {
    "type": "font/woff2",
    "etag": "\"1374-GJMYwlw9me6/I1hhZHlHwo392ak\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 4980,
    "path": "../public/_server/assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2"
  },
  "/_server/assets/montserrat-vietnamese-200-normal-CuJsZitD.woff": {
    "type": "font/woff",
    "etag": "\"1a78-kkw89m72TiOWVuGdkLG2sKtoR88\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 6776,
    "path": "../public/_server/assets/montserrat-vietnamese-200-normal-CuJsZitD.woff"
  },
  "/_server/assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2": {
    "type": "font/woff2",
    "etag": "\"1380-QsTbkZzyS1rAu0YCM3XwliaS+Fo\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 4992,
    "path": "../public/_server/assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2"
  },
  "/_server/assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff": {
    "type": "font/woff",
    "etag": "\"1ac4-VhoXa6XtmmypM+Y1u3lFGHrDWAw\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 6852,
    "path": "../public/_server/assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff"
  },
  "/_server/assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2": {
    "type": "font/woff2",
    "etag": "\"13d8-8vzrT6b24+SC7bWwTi+3651GWH4\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 5080,
    "path": "../public/_server/assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2"
  },
  "/_server/assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff": {
    "type": "font/woff",
    "etag": "\"1acc-zxuk+8LyS00/9YBNNuOv1+Noo2o\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 6860,
    "path": "../public/_server/assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff"
  },
  "/_server/assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff": {
    "type": "font/woff",
    "etag": "\"1ad8-8pl6pmCzmKx/OPHh4VRhTi185Vk\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 6872,
    "path": "../public/_server/assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff"
  },
  "/_server/assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2": {
    "type": "font/woff2",
    "etag": "\"13c4-j6wC2aQo+m2DiPJn8bllbQ6pkNg\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 5060,
    "path": "../public/_server/assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2"
  },
  "/_server/assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff": {
    "type": "font/woff",
    "etag": "\"1aec-fpvSCfygfmYoG3WyZY0XRUva1Hw\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 6892,
    "path": "../public/_server/assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff"
  },
  "/_server/assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2": {
    "type": "font/woff2",
    "etag": "\"140c-sjLJYp0rg3P+UyduTbAeLfvFQVE\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 5132,
    "path": "../public/_server/assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2"
  },
  "/_server/assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff": {
    "type": "font/woff",
    "etag": "\"1ad0-KhbB5r9UL6jWs0lCSCzTfBujrGg\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 6864,
    "path": "../public/_server/assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff"
  },
  "/_server/assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2": {
    "type": "font/woff2",
    "etag": "\"13d0-DlU0JqoRasU8HZIJEtgb90nAtRQ\"",
    "mtime": "2024-09-12T20:56:18.786Z",
    "size": 5072,
    "path": "../public/_server/assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2"
  },
  "/_server/assets/spectral-cyrillic-200-normal-B_x--0bF.woff2": {
    "type": "font/woff2",
    "etag": "\"3b44-V4yFAkDWosRLRuotI1tZSxSF8io\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 15172,
    "path": "../public/_server/assets/spectral-cyrillic-200-normal-B_x--0bF.woff2"
  },
  "/_server/assets/spectral-cyrillic-200-normal-DBFgNIo-.woff": {
    "type": "font/woff",
    "etag": "\"2dfc-JaS2ZHKz0oVHnhoil4N+sxCRAyY\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 11772,
    "path": "../public/_server/assets/spectral-cyrillic-200-normal-DBFgNIo-.woff"
  },
  "/_server/assets/spectral-cyrillic-300-normal-3mshyS_1.woff2": {
    "type": "font/woff2",
    "etag": "\"3ddc-cc4rx5T4DBrChA/XaF/QnobdRK0\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 15836,
    "path": "../public/_server/assets/spectral-cyrillic-300-normal-3mshyS_1.woff2"
  },
  "/_server/assets/spectral-cyrillic-300-normal-BuwX68dz.woff": {
    "type": "font/woff",
    "etag": "\"3184-VEpRsJReA4kj5fVTQP1k7sKAjoY\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 12676,
    "path": "../public/_server/assets/spectral-cyrillic-300-normal-BuwX68dz.woff"
  },
  "/_server/assets/spectral-cyrillic-400-normal-BSztQViE.woff": {
    "type": "font/woff",
    "etag": "\"2cc4-e8kxUNfG0LTRWGSSSkm6Ey6o9EY\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 11460,
    "path": "../public/_server/assets/spectral-cyrillic-400-normal-BSztQViE.woff"
  },
  "/_server/assets/spectral-cyrillic-400-normal-DSdESYJf.woff2": {
    "type": "font/woff2",
    "etag": "\"3cf4-NQszRMRm+Lb61aawgm5EWH2V3OI\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 15604,
    "path": "../public/_server/assets/spectral-cyrillic-400-normal-DSdESYJf.woff2"
  },
  "/_server/assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff": {
    "type": "font/woff",
    "etag": "\"3270-MEsmHF73Jnd3iC00jFPlbUWebKc\"",
    "mtime": "2024-09-12T20:56:18.787Z",
    "size": 12912,
    "path": "../public/_server/assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff"
  },
  "/_server/assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2": {
    "type": "font/woff2",
    "etag": "\"3f54-REsHnHvOnhzu63FZON42YLRGW4s\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 16212,
    "path": "../public/_server/assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2"
  },
  "/_server/assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2": {
    "type": "font/woff2",
    "etag": "\"4050-eJy5Ksqr070n7Jx5hbfYXHRAhsQ\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 16464,
    "path": "../public/_server/assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2"
  },
  "/_server/assets/spectral-cyrillic-600-normal-CGQrotlm.woff": {
    "type": "font/woff",
    "etag": "\"329c-PybuKlDYStuV3IbBE1/8ny9YEVw\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 12956,
    "path": "../public/_server/assets/spectral-cyrillic-600-normal-CGQrotlm.woff"
  },
  "/_server/assets/spectral-cyrillic-700-normal-97LnvvSG.woff2": {
    "type": "font/woff2",
    "etag": "\"4138-BK0YwsEQHdJ+Nrpo48i3I3NOUDM\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 16696,
    "path": "../public/_server/assets/spectral-cyrillic-700-normal-97LnvvSG.woff2"
  },
  "/_server/assets/spectral-cyrillic-700-normal-COc0fxPc.woff": {
    "type": "font/woff",
    "etag": "\"32c0-dZQpX5L52kKdLiu10YxKjrswK+Y\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 12992,
    "path": "../public/_server/assets/spectral-cyrillic-700-normal-COc0fxPc.woff"
  },
  "/_server/assets/spectral-latin-200-normal-WAtLTr05.woff2": {
    "type": "font/woff2",
    "etag": "\"5254-ymwLR7Y+vRCQyKfnxzWQe3Q1Dzw\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 21076,
    "path": "../public/_server/assets/spectral-latin-200-normal-WAtLTr05.woff2"
  },
  "/_server/assets/spectral-latin-200-normal-WQAAvAV9.woff": {
    "type": "font/woff",
    "etag": "\"4198-JcIgciCKzsDgs6dKIujMEb119EE\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 16792,
    "path": "../public/_server/assets/spectral-latin-200-normal-WQAAvAV9.woff"
  },
  "/_server/assets/spectral-latin-300-normal-8KdwH-BZ.woff2": {
    "type": "font/woff2",
    "etag": "\"5664-CY4fT5695N5CczxhwPKmpESoyf0\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 22116,
    "path": "../public/_server/assets/spectral-latin-300-normal-8KdwH-BZ.woff2"
  },
  "/_server/assets/spectral-latin-300-normal-BJ3qdcga.woff": {
    "type": "font/woff",
    "etag": "\"4604-reQazPJCyS1jPCu7nIgbjkL75vM\"",
    "mtime": "2024-09-12T20:56:18.788Z",
    "size": 17924,
    "path": "../public/_server/assets/spectral-latin-300-normal-BJ3qdcga.woff"
  },
  "/_server/assets/spectral-latin-400-normal-CFnFwP8t.woff": {
    "type": "font/woff",
    "etag": "\"4210-4c53pKUnOJmnCE7RHgC+VyV9xtU\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 16912,
    "path": "../public/_server/assets/spectral-latin-400-normal-CFnFwP8t.woff"
  },
  "/_server/assets/spectral-latin-400-normal-MXBVgyrt.woff2": {
    "type": "font/woff2",
    "etag": "\"5538-NWaNZW4mKGgdQMD2KPpA+Aj1DrQ\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 21816,
    "path": "../public/_server/assets/spectral-latin-400-normal-MXBVgyrt.woff2"
  },
  "/_server/assets/spectral-latin-500-normal-5HBkxKjs.woff2": {
    "type": "font/woff2",
    "etag": "\"58e8-xtTdY5i5Oql44zyUEiojqwKoIVg\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 22760,
    "path": "../public/_server/assets/spectral-latin-500-normal-5HBkxKjs.woff2"
  },
  "/_server/assets/spectral-latin-500-normal-D__sIyLH.woff": {
    "type": "font/woff",
    "etag": "\"46b8-PBBNIWWJdXcuRqd6nfNaCsUK/W4\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 18104,
    "path": "../public/_server/assets/spectral-latin-500-normal-D__sIyLH.woff"
  },
  "/_server/assets/spectral-latin-600-normal-BLtkLvbx.woff": {
    "type": "font/woff",
    "etag": "\"46d0-CDff26Rim3UH4YN5HhZRm5H4LJE\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 18128,
    "path": "../public/_server/assets/spectral-latin-600-normal-BLtkLvbx.woff"
  },
  "/_server/assets/spectral-latin-600-normal-CPXfyHlN.woff2": {
    "type": "font/woff2",
    "etag": "\"58bc-UJehpNui9bZLOvUDNrS3bshYKQs\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 22716,
    "path": "../public/_server/assets/spectral-latin-600-normal-CPXfyHlN.woff2"
  },
  "/_server/assets/spectral-latin-700-normal-BqcegO99.woff2": {
    "type": "font/woff2",
    "etag": "\"5a54-e1X9pzaBHkjRxNtc+harSrua9fA\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 23124,
    "path": "../public/_server/assets/spectral-latin-700-normal-BqcegO99.woff2"
  },
  "/_server/assets/spectral-latin-700-normal-Rag2g1u6.woff": {
    "type": "font/woff",
    "etag": "\"46f4-LqFECgnwlFDVwxZGoi8KDR8OK8c\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 18164,
    "path": "../public/_server/assets/spectral-latin-700-normal-Rag2g1u6.woff"
  },
  "/_server/assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2": {
    "type": "font/woff2",
    "etag": "\"4870-+HPKAHZyDdS5oi4v/heOYFckT3I\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 18544,
    "path": "../public/_server/assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2"
  },
  "/_server/assets/spectral-latin-ext-200-normal-Ca1vATCy.woff": {
    "type": "font/woff",
    "etag": "\"3aec-8kE6xkSDyuel+7ohC4nYqWyF4oQ\"",
    "mtime": "2024-09-12T20:56:18.789Z",
    "size": 15084,
    "path": "../public/_server/assets/spectral-latin-ext-200-normal-Ca1vATCy.woff"
  },
  "/_server/assets/spectral-latin-ext-300-normal-DTEvBdvf.woff": {
    "type": "font/woff",
    "etag": "\"3d90-KVRlyCPYZtb9zL7yPowLLi9M4Po\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 15760,
    "path": "../public/_server/assets/spectral-latin-ext-300-normal-DTEvBdvf.woff"
  },
  "/_server/assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2": {
    "type": "font/woff2",
    "etag": "\"4a40-3APi1NQjtZzOtheNhuaOVd4kvqM\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 19008,
    "path": "../public/_server/assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2"
  },
  "/_server/assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2": {
    "type": "font/woff2",
    "etag": "\"49dc-26//h21rJbiz1NUSarfbOt8+y6s\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 18908,
    "path": "../public/_server/assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2"
  },
  "/_server/assets/spectral-latin-ext-400-normal-COH_Sm0M.woff": {
    "type": "font/woff",
    "etag": "\"3ba0-BCYjqFfVuCYtpfChosYXhgK6cuU\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 15264,
    "path": "../public/_server/assets/spectral-latin-ext-400-normal-COH_Sm0M.woff"
  },
  "/_server/assets/spectral-latin-ext-500-normal-BKlxGjla.woff": {
    "type": "font/woff",
    "etag": "\"3dd0-khGIs0fU0ajLxdoBize7LmhTgYE\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 15824,
    "path": "../public/_server/assets/spectral-latin-ext-500-normal-BKlxGjla.woff"
  },
  "/_server/assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2": {
    "type": "font/woff2",
    "etag": "\"4ba4-UH2BmIJbqq6GCZ+Sclvwe0kVHsY\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 19364,
    "path": "../public/_server/assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2"
  },
  "/_server/assets/spectral-latin-ext-600-normal-B2UuAU7N.woff": {
    "type": "font/woff",
    "etag": "\"3dcc-729nU48wBHZp4t8xz7xi2O6C12k\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 15820,
    "path": "../public/_server/assets/spectral-latin-ext-600-normal-B2UuAU7N.woff"
  },
  "/_server/assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2": {
    "type": "font/woff2",
    "etag": "\"4bfc-FZnVyswfu2hdmFfmP1rlD1bMyN0\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 19452,
    "path": "../public/_server/assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2"
  },
  "/_server/assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2": {
    "type": "font/woff2",
    "etag": "\"4c9c-RBxF3Cuui+uQoLORA+IIkUAhlGg\"",
    "mtime": "2024-09-12T20:56:18.790Z",
    "size": 19612,
    "path": "../public/_server/assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2"
  },
  "/_server/assets/spectral-latin-ext-700-normal-riPWKqQE.woff": {
    "type": "font/woff",
    "etag": "\"3dc8-W6ugW/qpu/ytNZPuQTGOo1LQq7c\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 15816,
    "path": "../public/_server/assets/spectral-latin-ext-700-normal-riPWKqQE.woff"
  },
  "/_server/assets/spectral-vietnamese-200-normal-BRyI-oGK.woff": {
    "type": "font/woff",
    "etag": "\"1414-153k1yACyo9bjBQ8WbBgdLZ4glE\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 5140,
    "path": "../public/_server/assets/spectral-vietnamese-200-normal-BRyI-oGK.woff"
  },
  "/_server/assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2": {
    "type": "font/woff2",
    "etag": "\"1a88-aZrOqOvrbAdZ28mB/PCHCpOIlDc\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 6792,
    "path": "../public/_server/assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2"
  },
  "/_server/assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2": {
    "type": "font/woff2",
    "etag": "\"1ad8-OXJBZeS2+W+I2Oqx0cyR/Ywx2dU\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 6872,
    "path": "../public/_server/assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2"
  },
  "/_server/assets/spectral-vietnamese-300-normal-DA2hpTYn.woff": {
    "type": "font/woff",
    "etag": "\"1440-5/8kagnbU1V47K7x9seHMZsBZQg\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 5184,
    "path": "../public/_server/assets/spectral-vietnamese-300-normal-DA2hpTYn.woff"
  },
  "/_server/assets/spectral-vietnamese-400-normal-12CTPExn.woff2": {
    "type": "font/woff2",
    "etag": "\"1c1c-XBwXqdferCzJydFJ/UTcuukUFHE\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 7196,
    "path": "../public/_server/assets/spectral-vietnamese-400-normal-12CTPExn.woff2"
  },
  "/_server/assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff": {
    "type": "font/woff",
    "etag": "\"1434-b6ClbeMdb31zLSz/pTrJe4mGp4s\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 5172,
    "path": "../public/_server/assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff"
  },
  "/_server/assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2": {
    "type": "font/woff2",
    "etag": "\"1b78-uySZfvo+3A9fL/ojIJKya8oHl1E\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 7032,
    "path": "../public/_server/assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2"
  },
  "/_server/assets/spectral-vietnamese-500-normal-DRaA1n-5.woff": {
    "type": "font/woff",
    "etag": "\"1470-wfNyFXsn9MoOjC6X7BY0WBc9o1g\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 5232,
    "path": "../public/_server/assets/spectral-vietnamese-500-normal-DRaA1n-5.woff"
  },
  "/_server/assets/spectral-vietnamese-600-normal-CYCcfOL0.woff": {
    "type": "font/woff",
    "etag": "\"1458-2/c2F4BufNcdLJGFNeGaG85FZlk\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 5208,
    "path": "../public/_server/assets/spectral-vietnamese-600-normal-CYCcfOL0.woff"
  },
  "/_server/assets/spectral-vietnamese-600-normal-VomzNZvj.woff2": {
    "type": "font/woff2",
    "etag": "\"1b94-I0xwqpf34L6FkULeKAbKwOzozOY\"",
    "mtime": "2024-09-12T20:56:18.792Z",
    "size": 7060,
    "path": "../public/_server/assets/spectral-vietnamese-600-normal-VomzNZvj.woff2"
  },
  "/_server/assets/spectral-vietnamese-700-normal-CBpdhthx.woff": {
    "type": "font/woff",
    "etag": "\"1464-CgflxWWPSNaxjCc40bw1dWEP5jk\"",
    "mtime": "2024-09-12T20:56:18.792Z",
    "size": 5220,
    "path": "../public/_server/assets/spectral-vietnamese-700-normal-CBpdhthx.woff"
  },
  "/_server/assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2": {
    "type": "font/woff2",
    "etag": "\"1bbc-lCAXtklvMmJr6QdBxuEpDt0/+rs\"",
    "mtime": "2024-09-12T20:56:18.791Z",
    "size": 7100,
    "path": "../public/_server/assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2"
  },
  "/_build/assets/Phosphor-BXRFlF4V.svg": {
    "type": "image/svg+xml",
    "etag": "\"2db893-fdwcN//S+NeYW9Iz2sQQnsetu5g\"",
    "mtime": "2024-09-12T20:56:18.770Z",
    "size": 2996371,
    "path": "../public/_build/assets/Phosphor-BXRFlF4V.svg"
  },
  "/_build/assets/Phosphor-BXRFlF4V.svg.br": {
    "type": "image/svg+xml",
    "encoding": "br",
    "etag": "\"48e94-F5vKlPJ93nS5oF2swzS8Ddla2PQ\"",
    "mtime": "2024-09-12T20:56:22.144Z",
    "size": 298644,
    "path": "../public/_build/assets/Phosphor-BXRFlF4V.svg.br"
  },
  "/_build/assets/Phosphor-BXRFlF4V.svg.gz": {
    "type": "image/svg+xml",
    "encoding": "gzip",
    "etag": "\"c6526-nVo8y24qP8yhB5FZ7f55+goo4JQ\"",
    "mtime": "2024-09-12T20:56:20.188Z",
    "size": 812326,
    "path": "../public/_build/assets/Phosphor-BXRFlF4V.svg.gz"
  },
  "/_build/assets/Phosphor-BdqudwT5.woff": {
    "type": "font/woff",
    "etag": "\"7750c-Ca8Prk0UmNKVgVcXqMI1ngfnaYY\"",
    "mtime": "2024-09-12T20:56:18.754Z",
    "size": 488716,
    "path": "../public/_build/assets/Phosphor-BdqudwT5.woff"
  },
  "/_build/assets/Phosphor-CDxgqcPu.ttf": {
    "type": "font/ttf",
    "etag": "\"774bc-GlNGkqYKgH+Ho+zEl7o8FOx8y0o\"",
    "mtime": "2024-09-12T20:56:18.756Z",
    "size": 488636,
    "path": "../public/_build/assets/Phosphor-CDxgqcPu.ttf"
  },
  "/_build/assets/Phosphor-CDxgqcPu.ttf.br": {
    "type": "font/ttf",
    "encoding": "br",
    "etag": "\"29cc8-FX3mvec3JfFYPbHreBlq9xg+/GM\"",
    "mtime": "2024-09-12T20:56:20.062Z",
    "size": 171208,
    "path": "../public/_build/assets/Phosphor-CDxgqcPu.ttf.br"
  },
  "/_build/assets/Phosphor-CDxgqcPu.ttf.gz": {
    "type": "font/ttf",
    "encoding": "gzip",
    "etag": "\"30bc9-GZn2n4R/Xf+K6Ki+Oj76r5N5Xn0\"",
    "mtime": "2024-09-12T20:56:20.053Z",
    "size": 199625,
    "path": "../public/_build/assets/Phosphor-CDxgqcPu.ttf.gz"
  },
  "/_build/assets/Phosphor-DtdjzkpE.woff2": {
    "type": "font/woff2",
    "etag": "\"23fb4-DYFfFANzl8y/1I/l3775btbmYgU\"",
    "mtime": "2024-09-12T20:56:18.755Z",
    "size": 147380,
    "path": "../public/_build/assets/Phosphor-DtdjzkpE.woff2"
  },
  "/_build/assets/_...404_-DvBTMdu5.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"361-ByjmRYs4gvejkIavzRnQE9xrw1M\"",
    "mtime": "2024-09-12T20:56:18.754Z",
    "size": 865,
    "path": "../public/_build/assets/_...404_-DvBTMdu5.js"
  },
  "/_build/assets/_slug_-I_KSXykn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"4f51-/7x84X5fyAKmszPr22kwfxeGW4I\"",
    "mtime": "2024-09-12T20:56:18.755Z",
    "size": 20305,
    "path": "../public/_build/assets/_slug_-I_KSXykn.js"
  },
  "/_build/assets/_slug_-I_KSXykn.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1768-Bfz4aR1Vy/I+uFK4PvJC9EBtnII\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 5992,
    "path": "../public/_build/assets/_slug_-I_KSXykn.js.br"
  },
  "/_build/assets/_slug_-I_KSXykn.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"1a7c-zcDL29lJ4g5FfeD/FO6rp1QyLqE\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 6780,
    "path": "../public/_build/assets/_slug_-I_KSXykn.js.gz"
  },
  "/_build/assets/about-C3TBm2tE.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"eb-oGmUuzJl59kdhm77fUo4+dFtuV0\"",
    "mtime": "2024-09-12T20:56:18.754Z",
    "size": 235,
    "path": "../public/_build/assets/about-C3TBm2tE.js"
  },
  "/_build/assets/action-BKws-HQi.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"734-ci+mEhFGoOxWpZfHPCikStmu4YM\"",
    "mtime": "2024-09-12T20:56:18.754Z",
    "size": 1844,
    "path": "../public/_build/assets/action-BKws-HQi.js"
  },
  "/_build/assets/action-BKws-HQi.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"388-KQQDoLhHotaxJSntpEZq0D9Mbag\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 904,
    "path": "../public/_build/assets/action-BKws-HQi.js.br"
  },
  "/_build/assets/action-BKws-HQi.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"3fa-cYny9XRwuB8gsGeeBcdiJEZ4asY\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 1018,
    "path": "../public/_build/assets/action-BKws-HQi.js.gz"
  },
  "/_build/assets/browser-8omxnHMC.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"2fdd-F8weF7lGJj93TszRb/AVvl7DfQw\"",
    "mtime": "2024-09-12T20:56:18.755Z",
    "size": 12253,
    "path": "../public/_build/assets/browser-8omxnHMC.js"
  },
  "/_build/assets/browser-8omxnHMC.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"10e8-Olc5GBj7rhQH/nzf1vpX6bKd00M\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 4328,
    "path": "../public/_build/assets/browser-8omxnHMC.js.br"
  },
  "/_build/assets/browser-8omxnHMC.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"12cf-TR1t0RwtHXnx9/yaw0tiHUZsKzo\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 4815,
    "path": "../public/_build/assets/browser-8omxnHMC.js.gz"
  },
  "/_build/assets/client-B2cBF7do.css": {
    "type": "text/css; charset=utf-8",
    "etag": "\"1d18a-8xpWpDCeRZ5LhlvjwCtdiSuozbs\"",
    "mtime": "2024-09-12T20:56:18.755Z",
    "size": 119178,
    "path": "../public/_build/assets/client-B2cBF7do.css"
  },
  "/_build/assets/client-B2cBF7do.css.br": {
    "type": "text/css; charset=utf-8",
    "encoding": "br",
    "etag": "\"43a2-3UmG8rCSVArR7QOrk1nnhKIl22s\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 17314,
    "path": "../public/_build/assets/client-B2cBF7do.css.br"
  },
  "/_build/assets/client-B2cBF7do.css.gz": {
    "type": "text/css; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"522f-pXzF37ZF0wP12vnrfNwA0tQY4sk\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 21039,
    "path": "../public/_build/assets/client-B2cBF7do.css.gz"
  },
  "/_build/assets/client-BWSyo5q4.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"54c5-JSjn1NDNZ8v1CZU9X8CGR8KYYR4\"",
    "mtime": "2024-09-12T20:56:18.756Z",
    "size": 21701,
    "path": "../public/_build/assets/client-BWSyo5q4.js"
  },
  "/_build/assets/client-BWSyo5q4.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"1d16-ni1NoSpq8+aIxc6wttYAY7Sk+NI\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 7446,
    "path": "../public/_build/assets/client-BWSyo5q4.js.br"
  },
  "/_build/assets/client-BWSyo5q4.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2042-nYUnz+UKL7fAdolQISMuw47DpSY\"",
    "mtime": "2024-09-12T20:56:19.340Z",
    "size": 8258,
    "path": "../public/_build/assets/client-BWSyo5q4.js.gz"
  },
  "/_build/assets/components-BT2slyNk.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"33d-jL97JHoSEq0A8//OXqF2EpQKsWU\"",
    "mtime": "2024-09-12T20:56:18.755Z",
    "size": 829,
    "path": "../public/_build/assets/components-BT2slyNk.js"
  },
  "/_build/assets/contactos-CtWc_Nx6.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"175aa-Zf9wFFPOdtIxv1wEKpxHpKmJmlk\"",
    "mtime": "2024-09-12T20:56:18.756Z",
    "size": 95658,
    "path": "../public/_build/assets/contactos-CtWc_Nx6.js"
  },
  "/_build/assets/contactos-CtWc_Nx6.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"584e-JkJxuE3SylP1oYb660f/8cCR5J0\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 22606,
    "path": "../public/_build/assets/contactos-CtWc_Nx6.js.br"
  },
  "/_build/assets/contactos-CtWc_Nx6.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"635a-AcwbhqENeZPdx3mP5FspvG1f9OI\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 25434,
    "path": "../public/_build/assets/contactos-CtWc_Nx6.js.gz"
  },
  "/_build/assets/images-aBJc1Pbn.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"158f8-+VK3aTmafMgBheuTaj3cW56XxGE\"",
    "mtime": "2024-09-12T20:56:18.755Z",
    "size": 88312,
    "path": "../public/_build/assets/images-aBJc1Pbn.js"
  },
  "/_build/assets/images-aBJc1Pbn.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"66d3-VrttNKKWDPG+wLS/yCTcIPcIsTE\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 26323,
    "path": "../public/_build/assets/images-aBJc1Pbn.js.br"
  },
  "/_build/assets/images-aBJc1Pbn.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"732c-4RPj+oqjoyWvYEV74bJBrh2PHxc\"",
    "mtime": "2024-09-12T20:56:19.345Z",
    "size": 29484,
    "path": "../public/_build/assets/images-aBJc1Pbn.js.gz"
  },
  "/_build/assets/index-1Hxyzcqf.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"987-6iB5n/fiNWAP2D8Gu/MG9UZFpGs\"",
    "mtime": "2024-09-12T20:56:18.756Z",
    "size": 2439,
    "path": "../public/_build/assets/index-1Hxyzcqf.js"
  },
  "/_build/assets/index-1Hxyzcqf.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"226-K9wkc0meQxHrqjhsaMm8OHruiyc\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 550,
    "path": "../public/_build/assets/index-1Hxyzcqf.js.br"
  },
  "/_build/assets/index-1Hxyzcqf.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"2a9-t/K0cTq8ZhCpgFlXOhdpu8MqIfc\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 681,
    "path": "../public/_build/assets/index-1Hxyzcqf.js.gz"
  },
  "/_build/assets/index-Cf71NSVw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1fe4-qa0RM4QPDjkH5P2skUO773hsva8\"",
    "mtime": "2024-09-12T20:56:18.756Z",
    "size": 8164,
    "path": "../public/_build/assets/index-Cf71NSVw.js"
  },
  "/_build/assets/index-Cf71NSVw.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"c5d-yODTKIevUB+NjKtEdA25jmq0l2s\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 3165,
    "path": "../public/_build/assets/index-Cf71NSVw.js.br"
  },
  "/_build/assets/index-Cf71NSVw.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"d96-WJcVut8ZrBDaT5TXFFpnW9u2FlY\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 3478,
    "path": "../public/_build/assets/index-Cf71NSVw.js.gz"
  },
  "/_build/assets/index-D0OGMJsU.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1583-07O4u0xEOFzGZqEXakzSQdjQ5Pc\"",
    "mtime": "2024-09-12T20:56:18.756Z",
    "size": 5507,
    "path": "../public/_build/assets/index-D0OGMJsU.js"
  },
  "/_build/assets/index-D0OGMJsU.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"82f-oXWxPgGQh3HkVJ4Wm6QkgzYbG54\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 2095,
    "path": "../public/_build/assets/index-D0OGMJsU.js.br"
  },
  "/_build/assets/index-D0OGMJsU.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"92a-rnTejgY8IPM5CSO5Zh2021b/Na0\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 2346,
    "path": "../public/_build/assets/index-D0OGMJsU.js.gz"
  },
  "/_build/assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff": {
    "type": "font/woff",
    "etag": "\"2af8-8KLBB2RBEjOHXFAdx8bWDoDoIss\"",
    "mtime": "2024-09-12T20:56:18.756Z",
    "size": 11000,
    "path": "../public/_build/assets/montserrat-cyrillic-200-normal-9hFUkTEP.woff"
  },
  "/_build/assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2": {
    "type": "font/woff2",
    "etag": "\"21dc-BncGB3gMaeV/COJusnMimrGc2Pg\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 8668,
    "path": "../public/_build/assets/montserrat-cyrillic-200-normal-Q8W383uB.woff2"
  },
  "/_build/assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2": {
    "type": "font/woff2",
    "etag": "\"21a0-dyh6UlSBrJ8DYPH6Lg9ohSDdobk\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 8608,
    "path": "../public/_build/assets/montserrat-cyrillic-300-normal-DZWfU3uv.woff2"
  },
  "/_build/assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff": {
    "type": "font/woff",
    "etag": "\"2ae0-g2HKi7Dq6jh7lGzvZIBuftgrhts\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 10976,
    "path": "../public/_build/assets/montserrat-cyrillic-300-normal-RwgAW_jy.woff"
  },
  "/_build/assets/montserrat-cyrillic-400-normal-95VoEncJ.woff": {
    "type": "font/woff",
    "etag": "\"2b28-Im2nkTqwyFGTWabs8j4OwRFVX/I\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 11048,
    "path": "../public/_build/assets/montserrat-cyrillic-400-normal-95VoEncJ.woff"
  },
  "/_build/assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2": {
    "type": "font/woff2",
    "etag": "\"21bc-q4vU5LoKBfQ2tW7UEDOZ2kd57OA\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 8636,
    "path": "../public/_build/assets/montserrat-cyrillic-400-normal-9OhHGxkQ.woff2"
  },
  "/_build/assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2": {
    "type": "font/woff2",
    "etag": "\"2258-aGugatxwmLihBAOefV3+/X/Utbk\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 8792,
    "path": "../public/_build/assets/montserrat-cyrillic-500-normal-CHozKiUr.woff2"
  },
  "/_build/assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff": {
    "type": "font/woff",
    "etag": "\"2b78-fHzxIoq4PqttTlyc8dYyXye/Rj8\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 11128,
    "path": "../public/_build/assets/montserrat-cyrillic-500-normal-CmaGyqH0.woff"
  },
  "/_build/assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2": {
    "type": "font/woff2",
    "etag": "\"2258-+lVUpPSl1Tt6vr4iUOyDRvfb2II\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 8792,
    "path": "../public/_build/assets/montserrat-cyrillic-700-normal-BNhhQdQz.woff2"
  },
  "/_build/assets/montserrat-cyrillic-700-normal-Blzg39qC.woff": {
    "type": "font/woff",
    "etag": "\"2b20-EBsv8pIXrt6lgPlGPuHzDGkx/4A\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 11040,
    "path": "../public/_build/assets/montserrat-cyrillic-700-normal-Blzg39qC.woff"
  },
  "/_build/assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff": {
    "type": "font/woff",
    "etag": "\"29b8-CL5MmKL15SMsJKl85Eq0bBWO+cY\"",
    "mtime": "2024-09-12T20:56:18.757Z",
    "size": 10680,
    "path": "../public/_build/assets/montserrat-cyrillic-900-normal-WIKyzRVX.woff"
  },
  "/_build/assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2": {
    "type": "font/woff2",
    "etag": "\"2168-BNmllk5c2O45/ublwrLa5wmbQNY\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 8552,
    "path": "../public/_build/assets/montserrat-cyrillic-900-normal-nJ51SYsr.woff2"
  },
  "/_build/assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff": {
    "type": "font/woff",
    "etag": "\"31b8-01BGD4wLUm4WVD2yKJ1GLzbYkec\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 12728,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-200-normal-DiZdyJ_U.woff"
  },
  "/_build/assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2": {
    "type": "font/woff2",
    "etag": "\"24f8-OchMlfjkRqnmGfcJONlrnzgSQgc\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 9464,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-200-normal-oBYVCSid.woff2"
  },
  "/_build/assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2": {
    "type": "font/woff2",
    "etag": "\"2558-/yuHithgVrVY+hl6YllDCoISHbg\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 9560,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-300-normal-BqcEd4qu.woff2"
  },
  "/_build/assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff": {
    "type": "font/woff",
    "etag": "\"3204-Em/x63Q5J4PbqkaJT9Aom+XUT8A\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 12804,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-300-normal-DjziL-tQ.woff"
  },
  "/_build/assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff": {
    "type": "font/woff",
    "etag": "\"320c-xSv01tfmUGjpROpQWK8tKbvFcPI\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 12812,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-400-normal-4z3sNOWE.woff"
  },
  "/_build/assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2": {
    "type": "font/woff2",
    "etag": "\"2570-DAxZWsG9DPixGXz0p2X6vyhWjy4\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 9584,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-400-normal-vOaqz9CW.woff2"
  },
  "/_build/assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff": {
    "type": "font/woff",
    "etag": "\"3270-+j7g6o1odKyoCf+J100mILtRLR8\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 12912,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-500-normal-CcC8SmM1.woff"
  },
  "/_build/assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2": {
    "type": "font/woff2",
    "etag": "\"2574-/kcoPuRXoAiLSexacYd5VaG5l0Q\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 9588,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-500-normal-DOnS9IN9.woff2"
  },
  "/_build/assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff": {
    "type": "font/woff",
    "etag": "\"3250-Ib8FMdI9f1jGbtECEWYWMBbPqVM\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 12880,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-700-normal-BFjdwtlN.woff"
  },
  "/_build/assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2": {
    "type": "font/woff2",
    "etag": "\"2604-qzEsUdnUBDgcniUw5inHJJNrGvg\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 9732,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-700-normal-x-aBxbRb.woff2"
  },
  "/_build/assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff": {
    "type": "font/woff",
    "etag": "\"3050-cRC+z9HLUkgtl1fe8MMt1VK0K9E\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 12368,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-900-normal-CTcm2eb_.woff"
  },
  "/_build/assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2": {
    "type": "font/woff2",
    "etag": "\"2460-04XAHux9l7ynsJkCnhvvEd3XjZw\"",
    "mtime": "2024-09-12T20:56:18.758Z",
    "size": 9312,
    "path": "../public/_build/assets/montserrat-cyrillic-ext-900-normal-Cmg6eycG.woff2"
  },
  "/_build/assets/montserrat-latin-200-normal-ByeQgr9u.woff": {
    "type": "font/woff",
    "etag": "\"4a8c-hzXQhLZ2pVU558a4L4NrtWDcgAU\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 19084,
    "path": "../public/_build/assets/montserrat-latin-200-normal-ByeQgr9u.woff"
  },
  "/_build/assets/montserrat-latin-200-normal-Co0glrxx.woff2": {
    "type": "font/woff2",
    "etag": "\"3a14-BZeLOJHABQEPptQsFpfvCnPLE/Q\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 14868,
    "path": "../public/_build/assets/montserrat-latin-200-normal-Co0glrxx.woff2"
  },
  "/_build/assets/montserrat-latin-300-normal-DYYY4VIB.woff2": {
    "type": "font/woff2",
    "etag": "\"3a74-VMAKHqbbfQPj52UVl21vzqEpi0g\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 14964,
    "path": "../public/_build/assets/montserrat-latin-300-normal-DYYY4VIB.woff2"
  },
  "/_build/assets/montserrat-latin-300-normal-DrgRfrdN.woff": {
    "type": "font/woff",
    "etag": "\"4bac-STJbayeiZyOB3jZwxdIVPx10tCM\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 19372,
    "path": "../public/_build/assets/montserrat-latin-300-normal-DrgRfrdN.woff"
  },
  "/_build/assets/montserrat-latin-400-normal-BfmCfwfZ.woff2": {
    "type": "font/woff2",
    "etag": "\"3a5c-HuUL9ZhcGVbd4cBtmxzsRkXduSs\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 14940,
    "path": "../public/_build/assets/montserrat-latin-400-normal-BfmCfwfZ.woff2"
  },
  "/_build/assets/montserrat-latin-400-normal-BhTl8mZv.woff": {
    "type": "font/woff",
    "etag": "\"4b78-v1wq4+6DYDoTjR7BIbuEF698WxM\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 19320,
    "path": "../public/_build/assets/montserrat-latin-400-normal-BhTl8mZv.woff"
  },
  "/_build/assets/montserrat-latin-500-normal-CN3hDfLq.woff2": {
    "type": "font/woff2",
    "etag": "\"3afc-RhY/ZJJi9UdPjCmBTnEc3JHb+LI\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 15100,
    "path": "../public/_build/assets/montserrat-latin-500-normal-CN3hDfLq.woff2"
  },
  "/_build/assets/montserrat-latin-500-normal-T-BM6Fhn.woff": {
    "type": "font/woff",
    "etag": "\"4b20-wWTr3+j6tkna4R2yg0hppQSAbp4\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 19232,
    "path": "../public/_build/assets/montserrat-latin-500-normal-T-BM6Fhn.woff"
  },
  "/_build/assets/montserrat-latin-700-normal-Dkxlx_w4.woff2": {
    "type": "font/woff2",
    "etag": "\"3b88-XsyNtFppBwPcG+9vjbK29bhlzwc\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 15240,
    "path": "../public/_build/assets/montserrat-latin-700-normal-Dkxlx_w4.woff2"
  },
  "/_build/assets/montserrat-latin-700-normal-o5q9xX7W.woff": {
    "type": "font/woff",
    "etag": "\"4b84-XLqf3151Cc01D2M+fQCq5I6rHpg\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 19332,
    "path": "../public/_build/assets/montserrat-latin-700-normal-o5q9xX7W.woff"
  },
  "/_build/assets/montserrat-latin-900-normal-B8YluUfy.woff": {
    "type": "font/woff",
    "etag": "\"477c-gAQMad8FhMuXhoSfhxuFbaXyuGE\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 18300,
    "path": "../public/_build/assets/montserrat-latin-900-normal-B8YluUfy.woff"
  },
  "/_build/assets/montserrat-latin-900-normal-HIE66ZyV.woff2": {
    "type": "font/woff2",
    "etag": "\"38a8-XSYLtghYYfaZGbYcW+c+QcuMIcc\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 14504,
    "path": "../public/_build/assets/montserrat-latin-900-normal-HIE66ZyV.woff2"
  },
  "/_build/assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff": {
    "type": "font/woff",
    "etag": "\"4934-pvOgVnSICnupKkt8SlASha7pbBg\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 18740,
    "path": "../public/_build/assets/montserrat-latin-ext-200-normal-Cmh4DZeV.woff"
  },
  "/_build/assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2": {
    "type": "font/woff2",
    "etag": "\"3354-6zFgLq3B3Cf+3moTjss8s0lAVKg\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 13140,
    "path": "../public/_build/assets/montserrat-latin-ext-200-normal-DS-PRLCQ.woff2"
  },
  "/_build/assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2": {
    "type": "font/woff2",
    "etag": "\"3410-mbiR5euYrxuVugZgegXAH3i5ebY\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 13328,
    "path": "../public/_build/assets/montserrat-latin-ext-300-normal-CR5xELzt.woff2"
  },
  "/_build/assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff": {
    "type": "font/woff",
    "etag": "\"49c8-OKlItMtvjmxHB3Sre+X6ZGuR7qo\"",
    "mtime": "2024-09-12T20:56:18.759Z",
    "size": 18888,
    "path": "../public/_build/assets/montserrat-latin-ext-300-normal-_7nKvkyh.woff"
  },
  "/_build/assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff": {
    "type": "font/woff",
    "etag": "\"4a08-3bFLNR+84ygU0XSIFMnhTZQoJuc\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 18952,
    "path": "../public/_build/assets/montserrat-latin-ext-400-normal-DE2qOTV3.woff"
  },
  "/_build/assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2": {
    "type": "font/woff2",
    "etag": "\"34c4-GD9yl3XRl5xkYVd/7ZMSjJuW19U\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 13508,
    "path": "../public/_build/assets/montserrat-latin-ext-400-normal-omNc5MGi.woff2"
  },
  "/_build/assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff": {
    "type": "font/woff",
    "etag": "\"4a20-KNvW++FOvVFTe+Qkrz2qzPZAVCQ\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 18976,
    "path": "../public/_build/assets/montserrat-latin-ext-500-normal-6GGXOHtv.woff"
  },
  "/_build/assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2": {
    "type": "font/woff2",
    "etag": "\"34c0-oyXdh8kpfQuiPw0tw9fdMtszajI\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 13504,
    "path": "../public/_build/assets/montserrat-latin-ext-500-normal-Ca3gjDSY.woff2"
  },
  "/_build/assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2": {
    "type": "font/woff2",
    "etag": "\"35e0-4ua+E7CZEo4ltx5yYGeRBZ2C0e0\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 13792,
    "path": "../public/_build/assets/montserrat-latin-ext-700-normal-98nzzMf9.woff2"
  },
  "/_build/assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff": {
    "type": "font/woff",
    "etag": "\"4ae8-GTlDUvvdmRGItrBzthhE4kB0CCA\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 19176,
    "path": "../public/_build/assets/montserrat-latin-ext-700-normal-CF2bYQiV.woff"
  },
  "/_build/assets/montserrat-latin-ext-900-normal-B2fljPr4.woff": {
    "type": "font/woff",
    "etag": "\"49bc-Nm1C4kqnNxFcsIlwICIV1789AZg\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 18876,
    "path": "../public/_build/assets/montserrat-latin-ext-900-normal-B2fljPr4.woff"
  },
  "/_build/assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2": {
    "type": "font/woff2",
    "etag": "\"355c-/VhHG+ZjofSm4oXNO63jHi1oZGo\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 13660,
    "path": "../public/_build/assets/montserrat-latin-ext-900-normal-DexfrwAZ.woff2"
  },
  "/_build/assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2": {
    "type": "font/woff2",
    "etag": "\"1374-GJMYwlw9me6/I1hhZHlHwo392ak\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 4980,
    "path": "../public/_build/assets/montserrat-vietnamese-200-normal-CfDAjxqw.woff2"
  },
  "/_build/assets/montserrat-vietnamese-200-normal-CuJsZitD.woff": {
    "type": "font/woff",
    "etag": "\"1a78-kkw89m72TiOWVuGdkLG2sKtoR88\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 6776,
    "path": "../public/_build/assets/montserrat-vietnamese-200-normal-CuJsZitD.woff"
  },
  "/_build/assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2": {
    "type": "font/woff2",
    "etag": "\"1380-QsTbkZzyS1rAu0YCM3XwliaS+Fo\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 4992,
    "path": "../public/_build/assets/montserrat-vietnamese-300-normal-BAGnKF9I.woff2"
  },
  "/_build/assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff": {
    "type": "font/woff",
    "etag": "\"1ac4-VhoXa6XtmmypM+Y1u3lFGHrDWAw\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 6852,
    "path": "../public/_build/assets/montserrat-vietnamese-300-normal-Bqd5gFyf.woff"
  },
  "/_build/assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2": {
    "type": "font/woff2",
    "etag": "\"13d8-8vzrT6b24+SC7bWwTi+3651GWH4\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 5080,
    "path": "../public/_build/assets/montserrat-vietnamese-400-normal-BWKK40rE.woff2"
  },
  "/_build/assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff": {
    "type": "font/woff",
    "etag": "\"1acc-zxuk+8LyS00/9YBNNuOv1+Noo2o\"",
    "mtime": "2024-09-12T20:56:18.760Z",
    "size": 6860,
    "path": "../public/_build/assets/montserrat-vietnamese-400-normal-DoB8ClNE.woff"
  },
  "/_build/assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff": {
    "type": "font/woff",
    "etag": "\"1ad8-8pl6pmCzmKx/OPHh4VRhTi185Vk\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 6872,
    "path": "../public/_build/assets/montserrat-vietnamese-500-normal-1tzYKqWL.woff"
  },
  "/_build/assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2": {
    "type": "font/woff2",
    "etag": "\"13c4-j6wC2aQo+m2DiPJn8bllbQ6pkNg\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 5060,
    "path": "../public/_build/assets/montserrat-vietnamese-500-normal-CMJ1weDP.woff2"
  },
  "/_build/assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff": {
    "type": "font/woff",
    "etag": "\"1aec-fpvSCfygfmYoG3WyZY0XRUva1Hw\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 6892,
    "path": "../public/_build/assets/montserrat-vietnamese-700-normal-C_ub6cv3.woff"
  },
  "/_build/assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2": {
    "type": "font/woff2",
    "etag": "\"140c-sjLJYp0rg3P+UyduTbAeLfvFQVE\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 5132,
    "path": "../public/_build/assets/montserrat-vietnamese-700-normal-DKDLz5fg.woff2"
  },
  "/_build/assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff": {
    "type": "font/woff",
    "etag": "\"1ad0-KhbB5r9UL6jWs0lCSCzTfBujrGg\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 6864,
    "path": "../public/_build/assets/montserrat-vietnamese-900-normal-B9Uu00QP.woff"
  },
  "/_build/assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2": {
    "type": "font/woff2",
    "etag": "\"13d0-DlU0JqoRasU8HZIJEtgb90nAtRQ\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 5072,
    "path": "../public/_build/assets/montserrat-vietnamese-900-normal-DaIz9oLq.woff2"
  },
  "/_build/assets/preload-helper-DYd7aIoe.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"38e-YU2GoNSTAia8sWdMjUdMjNz13zc\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 910,
    "path": "../public/_build/assets/preload-helper-DYd7aIoe.js"
  },
  "/_build/assets/routing-VhRhlrWH.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1e3e-eO8YR3WZIBZAjm+JI5M/duodfXM\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 7742,
    "path": "../public/_build/assets/routing-VhRhlrWH.js"
  },
  "/_build/assets/routing-VhRhlrWH.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"cf9-v/fhk/ScwN5nmzpLxN2wpLNcOUQ\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 3321,
    "path": "../public/_build/assets/routing-VhRhlrWH.js.br"
  },
  "/_build/assets/routing-VhRhlrWH.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"e27-d7mom9xpA/eG+Q4H6v/Bty2A4kc\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 3623,
    "path": "../public/_build/assets/routing-VhRhlrWH.js.gz"
  },
  "/_build/assets/sobre-nos-pG7yVOlw.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"75-0n7D+jcCp2jAfhbcCGTIbVFenyI\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 117,
    "path": "../public/_build/assets/sobre-nos-pG7yVOlw.js"
  },
  "/_build/assets/spectral-cyrillic-200-normal-B_x--0bF.woff2": {
    "type": "font/woff2",
    "etag": "\"3b44-V4yFAkDWosRLRuotI1tZSxSF8io\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 15172,
    "path": "../public/_build/assets/spectral-cyrillic-200-normal-B_x--0bF.woff2"
  },
  "/_build/assets/spectral-cyrillic-200-normal-DBFgNIo-.woff": {
    "type": "font/woff",
    "etag": "\"2dfc-JaS2ZHKz0oVHnhoil4N+sxCRAyY\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 11772,
    "path": "../public/_build/assets/spectral-cyrillic-200-normal-DBFgNIo-.woff"
  },
  "/_build/assets/spectral-cyrillic-300-normal-3mshyS_1.woff2": {
    "type": "font/woff2",
    "etag": "\"3ddc-cc4rx5T4DBrChA/XaF/QnobdRK0\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 15836,
    "path": "../public/_build/assets/spectral-cyrillic-300-normal-3mshyS_1.woff2"
  },
  "/_build/assets/spectral-cyrillic-300-normal-BuwX68dz.woff": {
    "type": "font/woff",
    "etag": "\"3184-VEpRsJReA4kj5fVTQP1k7sKAjoY\"",
    "mtime": "2024-09-12T20:56:18.761Z",
    "size": 12676,
    "path": "../public/_build/assets/spectral-cyrillic-300-normal-BuwX68dz.woff"
  },
  "/_build/assets/spectral-cyrillic-400-normal-BSztQViE.woff": {
    "type": "font/woff",
    "etag": "\"2cc4-e8kxUNfG0LTRWGSSSkm6Ey6o9EY\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 11460,
    "path": "../public/_build/assets/spectral-cyrillic-400-normal-BSztQViE.woff"
  },
  "/_build/assets/spectral-cyrillic-400-normal-DSdESYJf.woff2": {
    "type": "font/woff2",
    "etag": "\"3cf4-NQszRMRm+Lb61aawgm5EWH2V3OI\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 15604,
    "path": "../public/_build/assets/spectral-cyrillic-400-normal-DSdESYJf.woff2"
  },
  "/_build/assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff": {
    "type": "font/woff",
    "etag": "\"3270-MEsmHF73Jnd3iC00jFPlbUWebKc\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 12912,
    "path": "../public/_build/assets/spectral-cyrillic-500-normal-C3fZ0FU5.woff"
  },
  "/_build/assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2": {
    "type": "font/woff2",
    "etag": "\"3f54-REsHnHvOnhzu63FZON42YLRGW4s\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 16212,
    "path": "../public/_build/assets/spectral-cyrillic-500-normal-Cjj_P8gC.woff2"
  },
  "/_build/assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2": {
    "type": "font/woff2",
    "etag": "\"4050-eJy5Ksqr070n7Jx5hbfYXHRAhsQ\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 16464,
    "path": "../public/_build/assets/spectral-cyrillic-600-normal-BO5c8k9Q.woff2"
  },
  "/_build/assets/spectral-cyrillic-600-normal-CGQrotlm.woff": {
    "type": "font/woff",
    "etag": "\"329c-PybuKlDYStuV3IbBE1/8ny9YEVw\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 12956,
    "path": "../public/_build/assets/spectral-cyrillic-600-normal-CGQrotlm.woff"
  },
  "/_build/assets/spectral-cyrillic-700-normal-97LnvvSG.woff2": {
    "type": "font/woff2",
    "etag": "\"4138-BK0YwsEQHdJ+Nrpo48i3I3NOUDM\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 16696,
    "path": "../public/_build/assets/spectral-cyrillic-700-normal-97LnvvSG.woff2"
  },
  "/_build/assets/spectral-cyrillic-700-normal-COc0fxPc.woff": {
    "type": "font/woff",
    "etag": "\"32c0-dZQpX5L52kKdLiu10YxKjrswK+Y\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 12992,
    "path": "../public/_build/assets/spectral-cyrillic-700-normal-COc0fxPc.woff"
  },
  "/_build/assets/spectral-latin-200-normal-WAtLTr05.woff2": {
    "type": "font/woff2",
    "etag": "\"5254-ymwLR7Y+vRCQyKfnxzWQe3Q1Dzw\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 21076,
    "path": "../public/_build/assets/spectral-latin-200-normal-WAtLTr05.woff2"
  },
  "/_build/assets/spectral-latin-200-normal-WQAAvAV9.woff": {
    "type": "font/woff",
    "etag": "\"4198-JcIgciCKzsDgs6dKIujMEb119EE\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 16792,
    "path": "../public/_build/assets/spectral-latin-200-normal-WQAAvAV9.woff"
  },
  "/_build/assets/spectral-latin-300-normal-8KdwH-BZ.woff2": {
    "type": "font/woff2",
    "etag": "\"5664-CY4fT5695N5CczxhwPKmpESoyf0\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 22116,
    "path": "../public/_build/assets/spectral-latin-300-normal-8KdwH-BZ.woff2"
  },
  "/_build/assets/spectral-latin-300-normal-BJ3qdcga.woff": {
    "type": "font/woff",
    "etag": "\"4604-reQazPJCyS1jPCu7nIgbjkL75vM\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 17924,
    "path": "../public/_build/assets/spectral-latin-300-normal-BJ3qdcga.woff"
  },
  "/_build/assets/spectral-latin-400-normal-CFnFwP8t.woff": {
    "type": "font/woff",
    "etag": "\"4210-4c53pKUnOJmnCE7RHgC+VyV9xtU\"",
    "mtime": "2024-09-12T20:56:18.762Z",
    "size": 16912,
    "path": "../public/_build/assets/spectral-latin-400-normal-CFnFwP8t.woff"
  },
  "/_build/assets/spectral-latin-400-normal-MXBVgyrt.woff2": {
    "type": "font/woff2",
    "etag": "\"5538-NWaNZW4mKGgdQMD2KPpA+Aj1DrQ\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 21816,
    "path": "../public/_build/assets/spectral-latin-400-normal-MXBVgyrt.woff2"
  },
  "/_build/assets/spectral-latin-500-normal-5HBkxKjs.woff2": {
    "type": "font/woff2",
    "etag": "\"58e8-xtTdY5i5Oql44zyUEiojqwKoIVg\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 22760,
    "path": "../public/_build/assets/spectral-latin-500-normal-5HBkxKjs.woff2"
  },
  "/_build/assets/spectral-latin-500-normal-D__sIyLH.woff": {
    "type": "font/woff",
    "etag": "\"46b8-PBBNIWWJdXcuRqd6nfNaCsUK/W4\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 18104,
    "path": "../public/_build/assets/spectral-latin-500-normal-D__sIyLH.woff"
  },
  "/_build/assets/spectral-latin-600-normal-BLtkLvbx.woff": {
    "type": "font/woff",
    "etag": "\"46d0-CDff26Rim3UH4YN5HhZRm5H4LJE\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 18128,
    "path": "../public/_build/assets/spectral-latin-600-normal-BLtkLvbx.woff"
  },
  "/_build/assets/spectral-latin-600-normal-CPXfyHlN.woff2": {
    "type": "font/woff2",
    "etag": "\"58bc-UJehpNui9bZLOvUDNrS3bshYKQs\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 22716,
    "path": "../public/_build/assets/spectral-latin-600-normal-CPXfyHlN.woff2"
  },
  "/_build/assets/spectral-latin-700-normal-BqcegO99.woff2": {
    "type": "font/woff2",
    "etag": "\"5a54-e1X9pzaBHkjRxNtc+harSrua9fA\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 23124,
    "path": "../public/_build/assets/spectral-latin-700-normal-BqcegO99.woff2"
  },
  "/_build/assets/spectral-latin-700-normal-Rag2g1u6.woff": {
    "type": "font/woff",
    "etag": "\"46f4-LqFECgnwlFDVwxZGoi8KDR8OK8c\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 18164,
    "path": "../public/_build/assets/spectral-latin-700-normal-Rag2g1u6.woff"
  },
  "/_build/assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2": {
    "type": "font/woff2",
    "etag": "\"4870-+HPKAHZyDdS5oi4v/heOYFckT3I\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 18544,
    "path": "../public/_build/assets/spectral-latin-ext-200-normal-B-UCrlMc.woff2"
  },
  "/_build/assets/spectral-latin-ext-200-normal-Ca1vATCy.woff": {
    "type": "font/woff",
    "etag": "\"3aec-8kE6xkSDyuel+7ohC4nYqWyF4oQ\"",
    "mtime": "2024-09-12T20:56:18.763Z",
    "size": 15084,
    "path": "../public/_build/assets/spectral-latin-ext-200-normal-Ca1vATCy.woff"
  },
  "/_build/assets/spectral-latin-ext-300-normal-DTEvBdvf.woff": {
    "type": "font/woff",
    "etag": "\"3d90-KVRlyCPYZtb9zL7yPowLLi9M4Po\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 15760,
    "path": "../public/_build/assets/spectral-latin-ext-300-normal-DTEvBdvf.woff"
  },
  "/_build/assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2": {
    "type": "font/woff2",
    "etag": "\"4a40-3APi1NQjtZzOtheNhuaOVd4kvqM\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 19008,
    "path": "../public/_build/assets/spectral-latin-ext-300-normal-V6d4NwmG.woff2"
  },
  "/_build/assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2": {
    "type": "font/woff2",
    "etag": "\"49dc-26//h21rJbiz1NUSarfbOt8+y6s\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 18908,
    "path": "../public/_build/assets/spectral-latin-ext-400-normal-BuEXBWu2.woff2"
  },
  "/_build/assets/spectral-latin-ext-400-normal-COH_Sm0M.woff": {
    "type": "font/woff",
    "etag": "\"3ba0-BCYjqFfVuCYtpfChosYXhgK6cuU\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 15264,
    "path": "../public/_build/assets/spectral-latin-ext-400-normal-COH_Sm0M.woff"
  },
  "/_build/assets/spectral-latin-ext-500-normal-BKlxGjla.woff": {
    "type": "font/woff",
    "etag": "\"3dd0-khGIs0fU0ajLxdoBize7LmhTgYE\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 15824,
    "path": "../public/_build/assets/spectral-latin-ext-500-normal-BKlxGjla.woff"
  },
  "/_build/assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2": {
    "type": "font/woff2",
    "etag": "\"4ba4-UH2BmIJbqq6GCZ+Sclvwe0kVHsY\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 19364,
    "path": "../public/_build/assets/spectral-latin-ext-500-normal-DLd2D6F-.woff2"
  },
  "/_build/assets/spectral-latin-ext-600-normal-B2UuAU7N.woff": {
    "type": "font/woff",
    "etag": "\"3dcc-729nU48wBHZp4t8xz7xi2O6C12k\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 15820,
    "path": "../public/_build/assets/spectral-latin-ext-600-normal-B2UuAU7N.woff"
  },
  "/_build/assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2": {
    "type": "font/woff2",
    "etag": "\"4bfc-FZnVyswfu2hdmFfmP1rlD1bMyN0\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 19452,
    "path": "../public/_build/assets/spectral-latin-ext-600-normal-CIbm-WA4.woff2"
  },
  "/_build/assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2": {
    "type": "font/woff2",
    "etag": "\"4c9c-RBxF3Cuui+uQoLORA+IIkUAhlGg\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 19612,
    "path": "../public/_build/assets/spectral-latin-ext-700-normal-BMhGKlMm.woff2"
  },
  "/_build/assets/spectral-latin-ext-700-normal-riPWKqQE.woff": {
    "type": "font/woff",
    "etag": "\"3dc8-W6ugW/qpu/ytNZPuQTGOo1LQq7c\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 15816,
    "path": "../public/_build/assets/spectral-latin-ext-700-normal-riPWKqQE.woff"
  },
  "/_build/assets/spectral-vietnamese-200-normal-BRyI-oGK.woff": {
    "type": "font/woff",
    "etag": "\"1414-153k1yACyo9bjBQ8WbBgdLZ4glE\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 5140,
    "path": "../public/_build/assets/spectral-vietnamese-200-normal-BRyI-oGK.woff"
  },
  "/_build/assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2": {
    "type": "font/woff2",
    "etag": "\"1a88-aZrOqOvrbAdZ28mB/PCHCpOIlDc\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 6792,
    "path": "../public/_build/assets/spectral-vietnamese-200-normal-Dtn87-Vf.woff2"
  },
  "/_build/assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2": {
    "type": "font/woff2",
    "etag": "\"1ad8-OXJBZeS2+W+I2Oqx0cyR/Ywx2dU\"",
    "mtime": "2024-09-12T20:56:18.764Z",
    "size": 6872,
    "path": "../public/_build/assets/spectral-vietnamese-300-normal-CddJ5GQG.woff2"
  },
  "/_build/assets/spectral-vietnamese-300-normal-DA2hpTYn.woff": {
    "type": "font/woff",
    "etag": "\"1440-5/8kagnbU1V47K7x9seHMZsBZQg\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 5184,
    "path": "../public/_build/assets/spectral-vietnamese-300-normal-DA2hpTYn.woff"
  },
  "/_build/assets/spectral-vietnamese-400-normal-12CTPExn.woff2": {
    "type": "font/woff2",
    "etag": "\"1c1c-XBwXqdferCzJydFJ/UTcuukUFHE\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 7196,
    "path": "../public/_build/assets/spectral-vietnamese-400-normal-12CTPExn.woff2"
  },
  "/_build/assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff": {
    "type": "font/woff",
    "etag": "\"1434-b6ClbeMdb31zLSz/pTrJe4mGp4s\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 5172,
    "path": "../public/_build/assets/spectral-vietnamese-400-normal-D_Xu_Im0.woff"
  },
  "/_build/assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2": {
    "type": "font/woff2",
    "etag": "\"1b78-uySZfvo+3A9fL/ojIJKya8oHl1E\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 7032,
    "path": "../public/_build/assets/spectral-vietnamese-500-normal-CjPDdrjT.woff2"
  },
  "/_build/assets/spectral-vietnamese-500-normal-DRaA1n-5.woff": {
    "type": "font/woff",
    "etag": "\"1470-wfNyFXsn9MoOjC6X7BY0WBc9o1g\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 5232,
    "path": "../public/_build/assets/spectral-vietnamese-500-normal-DRaA1n-5.woff"
  },
  "/_build/assets/spectral-vietnamese-600-normal-CYCcfOL0.woff": {
    "type": "font/woff",
    "etag": "\"1458-2/c2F4BufNcdLJGFNeGaG85FZlk\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 5208,
    "path": "../public/_build/assets/spectral-vietnamese-600-normal-CYCcfOL0.woff"
  },
  "/_build/assets/spectral-vietnamese-600-normal-VomzNZvj.woff2": {
    "type": "font/woff2",
    "etag": "\"1b94-I0xwqpf34L6FkULeKAbKwOzozOY\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 7060,
    "path": "../public/_build/assets/spectral-vietnamese-600-normal-VomzNZvj.woff2"
  },
  "/_build/assets/spectral-vietnamese-700-normal-CBpdhthx.woff": {
    "type": "font/woff",
    "etag": "\"1464-CgflxWWPSNaxjCc40bw1dWEP5jk\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 5220,
    "path": "../public/_build/assets/spectral-vietnamese-700-normal-CBpdhthx.woff"
  },
  "/_build/assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2": {
    "type": "font/woff2",
    "etag": "\"1bbc-lCAXtklvMmJr6QdBxuEpDt0/+rs\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 7100,
    "path": "../public/_build/assets/spectral-vietnamese-700-normal-ClKgMfoy.woff2"
  },
  "/_build/assets/stegaEncodeSourceMap-BFqegUkD.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1a8e-X3uJBL72Au7KZIZR4A+/BXVxqH0\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 6798,
    "path": "../public/_build/assets/stegaEncodeSourceMap-BFqegUkD.js"
  },
  "/_build/assets/stegaEncodeSourceMap-BFqegUkD.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"9ef-5ugYxr5Rkq4Nx5rzAolprvZwOqI\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 2543,
    "path": "../public/_build/assets/stegaEncodeSourceMap-BFqegUkD.js.br"
  },
  "/_build/assets/stegaEncodeSourceMap-BFqegUkD.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"b0d-hAz7GYauaahIQPbKNhp8fjhDxPg\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 2829,
    "path": "../public/_build/assets/stegaEncodeSourceMap-BFqegUkD.js.gz"
  },
  "/_build/assets/styles-CtYowtZs.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"1f5ed-REuOlCuHDMqpuwbJB6yK75SnGh0\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 128493,
    "path": "../public/_build/assets/styles-CtYowtZs.js"
  },
  "/_build/assets/styles-CtYowtZs.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"89e2-Ob7AfAW3M54a+Y4Bogd0kPT9sKs\"",
    "mtime": "2024-09-12T20:56:20.004Z",
    "size": 35298,
    "path": "../public/_build/assets/styles-CtYowtZs.js.br"
  },
  "/_build/assets/styles-CtYowtZs.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"9be0-W5YGVmL9bwVP7IbASaP+Yn1m9Q0\"",
    "mtime": "2024-09-12T20:56:19.935Z",
    "size": 39904,
    "path": "../public/_build/assets/styles-CtYowtZs.js.gz"
  },
  "/_build/assets/utils-dZO239yP.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"60-Yd2HLRbVpJC3oDXiM2l7po1PhPc\"",
    "mtime": "2024-09-12T20:56:18.765Z",
    "size": 96,
    "path": "../public/_build/assets/utils-dZO239yP.js"
  },
  "/_build/assets/web-Cw_Dym33.js": {
    "type": "text/javascript; charset=utf-8",
    "etag": "\"6a78-bxSmhTqeLY7DATtEw57Aw8NuBVc\"",
    "mtime": "2024-09-12T20:56:18.766Z",
    "size": 27256,
    "path": "../public/_build/assets/web-Cw_Dym33.js"
  },
  "/_build/assets/web-Cw_Dym33.js.br": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "br",
    "etag": "\"2601-Nt+iFO9dRWnXa01y4PoeqC8ryZ8\"",
    "mtime": "2024-09-12T20:56:19.344Z",
    "size": 9729,
    "path": "../public/_build/assets/web-Cw_Dym33.js.br"
  },
  "/_build/assets/web-Cw_Dym33.js.gz": {
    "type": "text/javascript; charset=utf-8",
    "encoding": "gzip",
    "etag": "\"29b6-keIlGOFqbtbiAzEOjtW50KG20LE\"",
    "mtime": "2024-09-12T20:56:19.342Z",
    "size": 10678,
    "path": "../public/_build/assets/web-Cw_Dym33.js.gz"
  }
};

const _DRIVE_LETTER_START_RE = /^[A-Za-z]:\//;
function normalizeWindowsPath(input = "") {
  if (!input) {
    return input;
  }
  return input.replace(/\\/g, "/").replace(_DRIVE_LETTER_START_RE, (r) => r.toUpperCase());
}
const _IS_ABSOLUTE_RE = /^[/\\](?![/\\])|^[/\\]{2}(?!\.)|^[A-Za-z]:[/\\]/;
const _DRIVE_LETTER_RE = /^[A-Za-z]:$/;
function cwd() {
  if (typeof process !== "undefined" && typeof process.cwd === "function") {
    return process.cwd().replace(/\\/g, "/");
  }
  return "/";
}
const resolve = function(...arguments_) {
  arguments_ = arguments_.map((argument) => normalizeWindowsPath(argument));
  let resolvedPath = "";
  let resolvedAbsolute = false;
  for (let index = arguments_.length - 1; index >= -1 && !resolvedAbsolute; index--) {
    const path = index >= 0 ? arguments_[index] : cwd();
    if (!path || path.length === 0) {
      continue;
    }
    resolvedPath = `${path}/${resolvedPath}`;
    resolvedAbsolute = isAbsolute(path);
  }
  resolvedPath = normalizeString(resolvedPath, !resolvedAbsolute);
  if (resolvedAbsolute && !isAbsolute(resolvedPath)) {
    return `/${resolvedPath}`;
  }
  return resolvedPath.length > 0 ? resolvedPath : ".";
};
function normalizeString(path, allowAboveRoot) {
  let res = "";
  let lastSegmentLength = 0;
  let lastSlash = -1;
  let dots = 0;
  let char = null;
  for (let index = 0; index <= path.length; ++index) {
    if (index < path.length) {
      char = path[index];
    } else if (char === "/") {
      break;
    } else {
      char = "/";
    }
    if (char === "/") {
      if (lastSlash === index - 1 || dots === 1) ; else if (dots === 2) {
        if (res.length < 2 || lastSegmentLength !== 2 || res[res.length - 1] !== "." || res[res.length - 2] !== ".") {
          if (res.length > 2) {
            const lastSlashIndex = res.lastIndexOf("/");
            if (lastSlashIndex === -1) {
              res = "";
              lastSegmentLength = 0;
            } else {
              res = res.slice(0, lastSlashIndex);
              lastSegmentLength = res.length - 1 - res.lastIndexOf("/");
            }
            lastSlash = index;
            dots = 0;
            continue;
          } else if (res.length > 0) {
            res = "";
            lastSegmentLength = 0;
            lastSlash = index;
            dots = 0;
            continue;
          }
        }
        if (allowAboveRoot) {
          res += res.length > 0 ? "/.." : "..";
          lastSegmentLength = 2;
        }
      } else {
        if (res.length > 0) {
          res += `/${path.slice(lastSlash + 1, index)}`;
        } else {
          res = path.slice(lastSlash + 1, index);
        }
        lastSegmentLength = index - lastSlash - 1;
      }
      lastSlash = index;
      dots = 0;
    } else if (char === "." && dots !== -1) {
      ++dots;
    } else {
      dots = -1;
    }
  }
  return res;
}
const isAbsolute = function(p) {
  return _IS_ABSOLUTE_RE.test(p);
};
const dirname = function(p) {
  const segments = normalizeWindowsPath(p).replace(/\/$/, "").split("/").slice(0, -1);
  if (segments.length === 1 && _DRIVE_LETTER_RE.test(segments[0])) {
    segments[0] += "/";
  }
  return segments.join("/") || (isAbsolute(p) ? "/" : ".");
};

function readAsset (id) {
  const serverDir = dirname(fileURLToPath(globalThis._importMeta_.url));
  return promises.readFile(resolve(serverDir, assets[id].path))
}

const publicAssetBases = {};

function isPublicAssetURL(id = '') {
  if (assets[id]) {
    return true
  }
  for (const base in publicAssetBases) {
    if (id.startsWith(base)) { return true }
  }
  return false
}

function getAsset (id) {
  return assets[id]
}

const METHODS = /* @__PURE__ */ new Set(["HEAD", "GET"]);
const EncodingMap = { gzip: ".gz", br: ".br" };
const _f4b49z = eventHandler((event) => {
  if (event.method && !METHODS.has(event.method)) {
    return;
  }
  let id = decodePath(
    withLeadingSlash(withoutTrailingSlash(parseURL(event.path).pathname))
  );
  let asset;
  const encodingHeader = String(
    getRequestHeader(event, "accept-encoding") || ""
  );
  const encodings = [
    ...encodingHeader.split(",").map((e) => EncodingMap[e.trim()]).filter(Boolean).sort(),
    ""
  ];
  if (encodings.length > 1) {
    setResponseHeader(event, "Vary", "Accept-Encoding");
  }
  for (const encoding of encodings) {
    for (const _id of [id + encoding, joinURL(id, "index.html" + encoding)]) {
      const _asset = getAsset(_id);
      if (_asset) {
        asset = _asset;
        id = _id;
        break;
      }
    }
  }
  if (!asset) {
    if (isPublicAssetURL(id)) {
      removeResponseHeader(event, "Cache-Control");
      throw createError$1({
        statusMessage: "Cannot find static asset " + id,
        statusCode: 404
      });
    }
    return;
  }
  const ifNotMatch = getRequestHeader(event, "if-none-match") === asset.etag;
  if (ifNotMatch) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  const ifModifiedSinceH = getRequestHeader(event, "if-modified-since");
  const mtimeDate = new Date(asset.mtime);
  if (ifModifiedSinceH && asset.mtime && new Date(ifModifiedSinceH) >= mtimeDate) {
    setResponseStatus(event, 304, "Not Modified");
    return "";
  }
  if (asset.type && !getResponseHeader(event, "Content-Type")) {
    setResponseHeader(event, "Content-Type", asset.type);
  }
  if (asset.etag && !getResponseHeader(event, "ETag")) {
    setResponseHeader(event, "ETag", asset.etag);
  }
  if (asset.mtime && !getResponseHeader(event, "Last-Modified")) {
    setResponseHeader(event, "Last-Modified", mtimeDate.toUTCString());
  }
  if (asset.encoding && !getResponseHeader(event, "Content-Encoding")) {
    setResponseHeader(event, "Content-Encoding", asset.encoding);
  }
  if (asset.size > 0 && !getResponseHeader(event, "Content-Length")) {
    setResponseHeader(event, "Content-Length", asset.size);
  }
  return readAsset(id);
});

var Ze$1=(t=>(t[t.AggregateError=1]="AggregateError",t[t.ArrowFunction=2]="ArrowFunction",t[t.ErrorPrototypeStack=4]="ErrorPrototypeStack",t[t.ObjectAssign=8]="ObjectAssign",t[t.BigIntTypedArray=16]="BigIntTypedArray",t))(Ze$1||{});function Qe$1(t){switch(t){case'"':return '\\"';case"\\":return "\\\\";case`
`:return "\\n";case"\r":return "\\r";case"\b":return "\\b";case"	":return "\\t";case"\f":return "\\f";case"<":return "\\x3C";case"\u2028":return "\\u2028";case"\u2029":return "\\u2029";default:return}}function p(t){let e="",r=0,s;for(let i=0,a=t.length;i<a;i++)s=Qe$1(t[i]),s&&(e+=t.slice(r,i)+s,r=i+1);return r===0?e=t:e+=t.slice(r),e}function et$1(t){switch(t){case"\\\\":return "\\";case'\\"':return '"';case"\\n":return `
`;case"\\r":return "\r";case"\\b":return "\b";case"\\t":return "	";case"\\f":return "\f";case"\\x3C":return "<";case"\\u2028":return "\u2028";case"\\u2029":return "\u2029";default:return t}}function m$2(t){return t.replace(/(\\\\|\\"|\\n|\\r|\\b|\\t|\\f|\\u2028|\\u2029|\\x3C)/g,et$1)}var w$1="__SEROVAL_REFS__",O="$R",F=`self.${O}`;function tt$2(t){return t==null?`${F}=${F}||[]`:`(${F}=${F}||{})["${p(t)}"]=[]`}function f$1(t,e){if(!t)throw e}var Re$2=new Map,y=new Map;function M$2(t){return Re$2.has(t)}function rt$2(t){return y.has(t)}function st$2(t){return f$1(M$2(t),new Mt$2(t)),Re$2.get(t)}function it$2(t){return f$1(rt$2(t),new Ut$2(t)),y.get(t)}typeof globalThis<"u"?Object.defineProperty(globalThis,w$1,{value:y,configurable:!0,writable:!1,enumerable:!1}):typeof self<"u"?Object.defineProperty(self,w$1,{value:y,configurable:!0,writable:!1,enumerable:!1}):typeof global<"u"&&Object.defineProperty(global,w$1,{value:y,configurable:!0,writable:!1,enumerable:!1});function Ie$1(t,e){for(let r=0,s=e.length;r<s;r++){let i=e[r];t.has(i)||(t.add(i),i.extends&&Ie$1(t,i.extends));}}function xe$2(t){if(t){let e=new Set;return Ie$1(e,t),[...e]}}var at$2={0:"Symbol.asyncIterator",1:"Symbol.hasInstance",2:"Symbol.isConcatSpreadable",3:"Symbol.iterator",4:"Symbol.match",5:"Symbol.matchAll",6:"Symbol.replace",7:"Symbol.search",8:"Symbol.species",9:"Symbol.split",10:"Symbol.toPrimitive",11:"Symbol.toStringTag",12:"Symbol.unscopables"},Ee$2={[Symbol.asyncIterator]:0,[Symbol.hasInstance]:1,[Symbol.isConcatSpreadable]:2,[Symbol.iterator]:3,[Symbol.match]:4,[Symbol.matchAll]:5,[Symbol.replace]:6,[Symbol.search]:7,[Symbol.species]:8,[Symbol.split]:9,[Symbol.toPrimitive]:10,[Symbol.toStringTag]:11,[Symbol.unscopables]:12},nt$2={0:Symbol.asyncIterator,1:Symbol.hasInstance,2:Symbol.isConcatSpreadable,3:Symbol.iterator,4:Symbol.match,5:Symbol.matchAll,6:Symbol.replace,7:Symbol.search,8:Symbol.species,9:Symbol.split,10:Symbol.toPrimitive,11:Symbol.toStringTag,12:Symbol.unscopables},ot$2={2:"!0",3:"!1",1:"void 0",0:"null",4:"-0",5:"1/0",6:"-1/0",7:"0/0"},lt$2={2:!0,3:!1,1:void 0,0:null,4:-0,5:Number.POSITIVE_INFINITY,6:Number.NEGATIVE_INFINITY,7:Number.NaN},Ae$2={0:"Error",1:"EvalError",2:"RangeError",3:"ReferenceError",4:"SyntaxError",5:"TypeError",6:"URIError"},ct$2={0:Error,1:EvalError,2:RangeError,3:ReferenceError,4:SyntaxError,5:TypeError,6:URIError};function v(t){return {t:2,i:void 0,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}var U$1=v(2),L=v(3),ut$2=v(1),dt$2=v(0),ht$2=v(4),pt=v(5),ft$2=v(6),vt$2=v(7);function Z$2(t){return t instanceof EvalError?1:t instanceof RangeError?2:t instanceof ReferenceError?3:t instanceof SyntaxError?4:t instanceof TypeError?5:t instanceof URIError?6:0}function mt$2(t){let e=Ae$2[Z$2(t)];return t.name!==e?{name:t.name}:t.constructor.name!==e?{name:t.constructor.name}:{}}function oe$2(t,e){let r=mt$2(t),s=Object.getOwnPropertyNames(t);for(let i=0,a=s.length,n;i<a;i++)n=s[i],n!=="name"&&n!=="message"&&(n==="stack"?e&4&&(r=r||{},r[n]=t[n]):(r=r||{},r[n]=t[n]));return r}function Pe$2(t){return Object.isFrozen(t)?3:Object.isSealed(t)?2:Object.isExtensible(t)?0:1}function gt$2(t){switch(t){case Number.POSITIVE_INFINITY:return pt;case Number.NEGATIVE_INFINITY:return ft$2}return t!==t?vt$2:Object.is(t,-0)?ht$2:{t:0,i:void 0,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function _$1(t){return {t:1,i:void 0,s:p(t),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function yt$2(t){return {t:3,i:void 0,s:""+t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function bt$2(t){return {t:4,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function zt$2(t,e){return {t:5,i:t,s:e.toISOString(),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,f:void 0,a:void 0,b:void 0,o:void 0}}function wt$2(t,e){return {t:6,i:t,s:void 0,l:void 0,c:p(e.source),m:e.flags,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function St$2(t,e){let r=new Uint8Array(e),s=r.length,i=new Array(s);for(let a=0;a<s;a++)i[a]=r[a];return {t:19,i:t,s:i,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Rt$1(t,e){return {t:17,i:t,s:Ee$2[e],l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function le$1(t,e){return {t:18,i:t,s:p(st$2(e)),l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function ke$2(t,e,r){return {t:25,i:t,s:r,l:void 0,c:p(e),m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function It$2(t,e,r){return {t:9,i:t,s:void 0,l:e.length,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:Pe$2(e)}}function xt$1(t,e){return {t:21,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function Et$2(t,e,r){return {t:15,i:t,s:void 0,l:e.length,c:e.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function At$2(t,e,r){return {t:16,i:t,s:void 0,l:e.length,c:e.constructor.name,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function Pt$2(t,e,r){return {t:20,i:t,s:void 0,l:e.byteLength,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:r,b:e.byteOffset,o:void 0}}function kt$2(t,e,r){return {t:13,i:t,s:Z$2(e),l:void 0,c:void 0,m:p(e.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ft$2(t,e,r){return {t:14,i:t,s:Z$2(e),l:void 0,c:void 0,m:p(e.message),p:r,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}function Ot$2(t,e,r){return {t:7,i:t,s:void 0,l:e,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:void 0,b:void 0,o:void 0}}function Fe$2(t,e){return {t:28,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[t,e],f:void 0,b:void 0,o:void 0}}function Oe$2(t,e){return {t:30,i:void 0,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[t,e],f:void 0,b:void 0,o:void 0}}function $e$1(t,e,r){return {t:31,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:r,f:e,b:void 0,o:void 0}}function $t$2(t,e){return {t:32,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function Ct$2(t,e){return {t:33,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}function jt$2(t,e){return {t:34,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:e,b:void 0,o:void 0}}var{toString:Q$1}=Object.prototype;function Vt$2(t,e){return e instanceof Error?`Seroval caught an error during the ${t} process.
  
${e.name}
${e.message}

- For more information, please check the "cause" property of this error.
- If you believe this is an error in Seroval, please submit an issue at https://github.com/lxsmnsyc/seroval/issues/new`:`Seroval caught an error during the ${t} process.

"${Q$1.call(e)}"

For more information, please check the "cause" property of this error.`}var ee$2=class ee extends Error{constructor(e,r){super(Vt$2(e,r)),this.cause=r;}},Tt$1=class Tt extends ee$2{constructor(t){super("parsing",t);}},Dt$2=class Dt extends ee$2{constructor(t){super("serialization",t);}},Nt$2=class Nt extends ee$2{constructor(t){super("deserialization",t);}},$=class extends Error{constructor(e){super(`The value ${Q$1.call(e)} of type "${typeof e}" cannot be parsed/serialized.
      
There are few workarounds for this problem:
- Transform the value in a way that it can be serialized.
- If the reference is present on multiple runtimes (isomorphic), you can use the Reference API to map the references.`),this.value=e;}},Ce$2=class Ce extends Error{constructor(e){super('Unsupported node type "'+e.t+'".');}},je$1=class je extends Error{constructor(e){super('Missing plugin for tag "'+e+'".');}},z=class extends Error{constructor(e){super('Missing "'+e+'" instance.');}},Mt$2=class Mt extends Error{constructor(t){super('Missing reference for the value "'+Q$1.call(t)+'" of type "'+typeof t+'"'),this.value=t;}},Ut$2=class Ut extends Error{constructor(t){super('Missing reference for id "'+p(t)+'"');}},Lt$2=class Lt extends Error{constructor(t){super('Unknown TypedArray "'+t+'"');}},_t$1=class _t{constructor(e,r){this.value=e,this.replacement=r;}},Bt$2={},Wt$2={},qt$1={0:{},1:{},2:{},3:{},4:{}};function B(){let t,e;return {promise:new Promise((r,s)=>{t=r,e=s;}),resolve(r){t(r);},reject(r){e(r);}}}function Ht$2(t){return "__SEROVAL_STREAM__"in t}function A$1(){let t=new Set,e=[],r=!0,s=!0;function i(o){for(let l of t.keys())l.next(o);}function a(o){for(let l of t.keys())l.throw(o);}function n(o){for(let l of t.keys())l.return(o);}return {__SEROVAL_STREAM__:!0,on(o){r&&t.add(o);for(let l=0,u=e.length;l<u;l++){let d=e[l];l===u-1&&!r?s?o.return(d):o.throw(d):o.next(d);}return ()=>{r&&t.delete(o);}},next(o){r&&(e.push(o),i(o));},throw(o){r&&(e.push(o),a(o),r=!1,s=!1,t.clear());},return(o){r&&(e.push(o),n(o),r=!1,s=!0,t.clear());}}}function Kt$2(t){let e=A$1(),r=t[Symbol.asyncIterator]();async function s(){try{let i=await r.next();i.done?e.return(i.value):(e.next(i.value),await s());}catch(i){e.throw(i);}}return s().catch(()=>{}),e}function Xt$2(t){return ()=>{let e=[],r=[],s=0,i=-1,a=!1;function n(){for(let l=0,u=r.length;l<u;l++)r[l].resolve({done:!0,value:void 0});}t.on({next(l){let u=r.shift();u&&u.resolve({done:!1,value:l}),e.push(l);},throw(l){let u=r.shift();u&&u.reject(l),n(),i=e.length,e.push(l),a=!0;},return(l){let u=r.shift();u&&u.resolve({done:!0,value:l}),n(),i=e.length,e.push(l);}});function o(){let l=s++,u=e[l];if(l!==i)return {done:!1,value:u};if(a)throw u;return {done:!0,value:u}}return {[Symbol.asyncIterator](){return this},async next(){if(i===-1){let l=s++;if(l>=e.length){let u=B();return r.push(u),await u.promise}return {done:!1,value:e[l]}}return s>i?{done:!0,value:void 0}:o()}}}}function Ve$1(t){let e=[],r=-1,s=-1,i=t[Symbol.iterator]();for(;;)try{let a=i.next();if(e.push(a.value),a.done){s=e.length-1;break}}catch(a){r=e.length,e.push(a);}return {v:e,t:r,d:s}}function Gt$2(t){return ()=>{let e=0;return {[Symbol.iterator](){return this},next(){if(e>t.d)return {done:!0,value:void 0};let r=e++,s=t.v[r];if(r===t.t)throw s;return {done:r===t.d,value:s}}}}}var Yt$2=class Yt{constructor(t){this.marked=new Set,this.plugins=t.plugins,this.features=31^(t.disabledFeatures||0),this.refs=t.refs||new Map;}markRef(t){this.marked.add(t);}isMarked(t){return this.marked.has(t)}getIndexedValue(t){let e=this.refs.get(t);if(e!=null)return this.markRef(e),{type:1,value:bt$2(e)};let r=this.refs.size;return this.refs.set(t,r),{type:0,value:r}}getReference(t){let e=this.getIndexedValue(t);return e.type===1?e:M$2(t)?{type:2,value:le$1(e.value,t)}:e}getStrictReference(t){f$1(M$2(t),new $(t));let e=this.getIndexedValue(t);return e.type===1?e.value:le$1(e.value,t)}parseFunction(t){return this.getStrictReference(t)}parseWellKnownSymbol(t){let e=this.getReference(t);return e.type!==0?e.value:(f$1(t in Ee$2,new $(t)),Rt$1(e.value,t))}parseSpecialReference(t){let e=this.getIndexedValue(qt$1[t]);return e.type===1?e.value:{t:26,i:e.value,s:t,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:void 0,b:void 0,o:void 0}}parseIteratorFactory(){let t=this.getIndexedValue(Bt$2);return t.type===1?t.value:{t:27,i:t.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseWellKnownSymbol(Symbol.iterator),b:void 0,o:void 0}}parseAsyncIteratorFactory(){let t=this.getIndexedValue(Wt$2);return t.type===1?t.value:{t:29,i:t.value,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(1),this.parseWellKnownSymbol(Symbol.asyncIterator)],f:void 0,b:void 0,o:void 0}}createObjectNode(t,e,r,s){return {t:r?11:10,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:s,e:void 0,a:void 0,f:void 0,b:void 0,o:Pe$2(e)}}createMapNode(t,e,r,s){return {t:8,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:{k:e,v:r,s},a:void 0,f:this.parseSpecialReference(0),b:void 0,o:void 0}}createPromiseConstructorNode(t){return {t:22,i:t,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:void 0,f:this.parseSpecialReference(1),b:void 0,o:void 0}}};function Jt$2(t){switch(t){case"Int8Array":return Int8Array;case"Int16Array":return Int16Array;case"Int32Array":return Int32Array;case"Uint8Array":return Uint8Array;case"Uint16Array":return Uint16Array;case"Uint32Array":return Uint32Array;case"Uint8ClampedArray":return Uint8ClampedArray;case"Float32Array":return Float32Array;case"Float64Array":return Float64Array;case"BigInt64Array":return BigInt64Array;case"BigUint64Array":return BigUint64Array;default:throw new Lt$2(t)}}function ce(t,e){switch(e){case 3:return Object.freeze(t);case 1:return Object.preventExtensions(t);case 2:return Object.seal(t);default:return t}}var Zt$2=class Zt{constructor(t){this.plugins=t.plugins,this.refs=t.refs||new Map;}deserializeReference(t){return this.assignIndexedValue(t.i,it$2(m$2(t.s)))}deserializeArray(t){let e=t.l,r=this.assignIndexedValue(t.i,new Array(e)),s;for(let i=0;i<e;i++)s=t.a[i],s&&(r[i]=this.deserialize(s));return ce(r,t.o),r}deserializeProperties(t,e){let r=t.s;if(r){let s=t.k,i=t.v;for(let a=0,n;a<r;a++)n=s[a],typeof n=="string"?e[m$2(n)]=this.deserialize(i[a]):e[this.deserialize(n)]=this.deserialize(i[a]);}return e}deserializeObject(t){let e=this.assignIndexedValue(t.i,t.t===10?{}:Object.create(null));return this.deserializeProperties(t.p,e),ce(e,t.o),e}deserializeDate(t){return this.assignIndexedValue(t.i,new Date(t.s))}deserializeRegExp(t){return this.assignIndexedValue(t.i,new RegExp(m$2(t.c),t.m))}deserializeSet(t){let e=this.assignIndexedValue(t.i,new Set),r=t.a;for(let s=0,i=t.l;s<i;s++)e.add(this.deserialize(r[s]));return e}deserializeMap(t){let e=this.assignIndexedValue(t.i,new Map),r=t.e.k,s=t.e.v;for(let i=0,a=t.e.s;i<a;i++)e.set(this.deserialize(r[i]),this.deserialize(s[i]));return e}deserializeArrayBuffer(t){let e=new Uint8Array(t.s);return this.assignIndexedValue(t.i,e.buffer)}deserializeTypedArray(t){let e=Jt$2(t.c),r=this.deserialize(t.f);return this.assignIndexedValue(t.i,new e(r,t.b,t.l))}deserializeDataView(t){let e=this.deserialize(t.f);return this.assignIndexedValue(t.i,new DataView(e,t.b,t.l))}deserializeDictionary(t,e){if(t.p){let r=this.deserializeProperties(t.p,{});Object.assign(e,r);}return e}deserializeAggregateError(t){let e=this.assignIndexedValue(t.i,new AggregateError([],m$2(t.m)));return this.deserializeDictionary(t,e)}deserializeError(t){let e=ct$2[t.s],r=this.assignIndexedValue(t.i,new e(m$2(t.m)));return this.deserializeDictionary(t,r)}deserializePromise(t){let e=B(),r=this.assignIndexedValue(t.i,e),s=this.deserialize(t.f);return t.s?e.resolve(s):e.reject(s),r.promise}deserializeBoxed(t){return this.assignIndexedValue(t.i,Object(this.deserialize(t.f)))}deserializePlugin(t){let e=this.plugins;if(e){let r=m$2(t.c);for(let s=0,i=e.length;s<i;s++){let a=e[s];if(a.tag===r)return this.assignIndexedValue(t.i,a.deserialize(t.s,this,{id:t.i}))}}throw new je$1(t.c)}deserializePromiseConstructor(t){return this.assignIndexedValue(t.i,B()).promise}deserializePromiseResolve(t){let e=this.refs.get(t.i);f$1(e,new z("Promise")),e.resolve(this.deserialize(t.a[1]));}deserializePromiseReject(t){let e=this.refs.get(t.i);f$1(e,new z("Promise")),e.reject(this.deserialize(t.a[1]));}deserializeIteratorFactoryInstance(t){this.deserialize(t.a[0]);let e=this.deserialize(t.a[1]);return Gt$2(e)}deserializeAsyncIteratorFactoryInstance(t){this.deserialize(t.a[0]);let e=this.deserialize(t.a[1]);return Xt$2(e)}deserializeStreamConstructor(t){let e=this.assignIndexedValue(t.i,A$1()),r=t.a.length;if(r)for(let s=0;s<r;s++)this.deserialize(t.a[s]);return e}deserializeStreamNext(t){let e=this.refs.get(t.i);f$1(e,new z("Stream")),e.next(this.deserialize(t.f));}deserializeStreamThrow(t){let e=this.refs.get(t.i);f$1(e,new z("Stream")),e.throw(this.deserialize(t.f));}deserializeStreamReturn(t){let e=this.refs.get(t.i);f$1(e,new z("Stream")),e.return(this.deserialize(t.f));}deserializeIteratorFactory(t){this.deserialize(t.f);}deserializeAsyncIteratorFactory(t){this.deserialize(t.a[1]);}deserialize(t){try{switch(t.t){case 2:return lt$2[t.s];case 0:return t.s;case 1:return m$2(t.s);case 3:return BigInt(t.s);case 4:return this.refs.get(t.i);case 18:return this.deserializeReference(t);case 9:return this.deserializeArray(t);case 10:case 11:return this.deserializeObject(t);case 5:return this.deserializeDate(t);case 6:return this.deserializeRegExp(t);case 7:return this.deserializeSet(t);case 8:return this.deserializeMap(t);case 19:return this.deserializeArrayBuffer(t);case 16:case 15:return this.deserializeTypedArray(t);case 20:return this.deserializeDataView(t);case 14:return this.deserializeAggregateError(t);case 13:return this.deserializeError(t);case 12:return this.deserializePromise(t);case 17:return nt$2[t.s];case 21:return this.deserializeBoxed(t);case 25:return this.deserializePlugin(t);case 22:return this.deserializePromiseConstructor(t);case 23:return this.deserializePromiseResolve(t);case 24:return this.deserializePromiseReject(t);case 28:return this.deserializeIteratorFactoryInstance(t);case 30:return this.deserializeAsyncIteratorFactoryInstance(t);case 31:return this.deserializeStreamConstructor(t);case 32:return this.deserializeStreamNext(t);case 33:return this.deserializeStreamThrow(t);case 34:return this.deserializeStreamReturn(t);case 27:return this.deserializeIteratorFactory(t);case 29:return this.deserializeAsyncIteratorFactory(t);default:throw new Ce$2(t)}}catch(e){throw new Nt$2(e)}}},Qt$2=/^[$A-Z_][0-9A-Z_$]*$/i;function ue$1(t){let e=t[0];return (e==="$"||e==="_"||e>="A"&&e<="Z"||e>="a"&&e<="z")&&Qt$2.test(t)}function S$1(t){switch(t.t){case 0:return t.s+"="+t.v;case 2:return t.s+".set("+t.k+","+t.v+")";case 1:return t.s+".add("+t.v+")";case 3:return t.s+".delete("+t.k+")"}}function er$2(t){let e=[],r=t[0];for(let s=1,i=t.length,a,n=r;s<i;s++)a=t[s],a.t===0&&a.v===n.v?r={t:0,s:a.s,k:void 0,v:S$1(r)}:a.t===2&&a.s===n.s?r={t:2,s:S$1(r),k:a.k,v:a.v}:a.t===1&&a.s===n.s?r={t:1,s:S$1(r),k:void 0,v:a.v}:a.t===3&&a.s===n.s?r={t:3,s:S$1(r),k:a.k,v:void 0}:(e.push(r),r=a),n=a;return e.push(r),e}function de$1(t){if(t.length){let e="",r=er$2(t);for(let s=0,i=r.length;s<i;s++)e+=S$1(r[s])+",";return e}}var tr$2="Object.create(null)",rr$1="new Set",sr$1="new Map",ir="Promise.resolve",ar$1="Promise.reject",nr$2={3:"Object.freeze",2:"Object.seal",1:"Object.preventExtensions",0:void 0},or$1=class or{constructor(e){this.stack=[],this.flags=[],this.assignments=[],this.plugins=e.plugins,this.features=e.features,this.marked=new Set(e.markedRefs);}createFunction(e,r){return this.features&2?(e.length===1?e[0]:"("+e.join(",")+")")+"=>"+(r.startsWith("{")?"("+r+")":r):"function("+e.join(",")+"){return "+r+"}"}createEffectfulFunction(e,r){return this.features&2?(e.length===1?e[0]:"("+e.join(",")+")")+"=>{"+r+"}":"function("+e.join(",")+"){"+r+"}"}markRef(e){this.marked.add(e);}isMarked(e){return this.marked.has(e)}pushObjectFlag(e,r){e!==0&&(this.markRef(r),this.flags.push({type:e,value:this.getRefParam(r)}));}resolveFlags(){let e="";for(let r=0,s=this.flags,i=s.length;r<i;r++){let a=s[r];e+=nr$2[a.type]+"("+a.value+"),";}return e}resolvePatches(){let e=de$1(this.assignments),r=this.resolveFlags();return e?r?e+r:e:r}createAssignment(e,r){this.assignments.push({t:0,s:e,k:void 0,v:r});}createAddAssignment(e,r){this.assignments.push({t:1,s:this.getRefParam(e),k:void 0,v:r});}createSetAssignment(e,r,s){this.assignments.push({t:2,s:this.getRefParam(e),k:r,v:s});}createDeleteAssignment(e,r){this.assignments.push({t:3,s:this.getRefParam(e),k:r,v:void 0});}createArrayAssign(e,r,s){this.createAssignment(this.getRefParam(e)+"["+r+"]",s);}createObjectAssign(e,r,s){this.createAssignment(this.getRefParam(e)+"."+r,s);}isIndexedValueInStack(e){return e.t===4&&this.stack.includes(e.i)}serializeReference(e){return this.assignIndexedValue(e.i,w$1+'.get("'+e.s+'")')}serializeArrayItem(e,r,s){return r?this.isIndexedValueInStack(r)?(this.markRef(e),this.createArrayAssign(e,s,this.getRefParam(r.i)),""):this.serialize(r):""}serializeArray(e){let r=e.i;if(e.l){this.stack.push(r);let s=e.a,i=this.serializeArrayItem(r,s[0],0),a=i==="";for(let n=1,o=e.l,l;n<o;n++)l=this.serializeArrayItem(r,s[n],n),i+=","+l,a=l==="";return this.stack.pop(),this.pushObjectFlag(e.o,e.i),this.assignIndexedValue(r,"["+i+(a?",]":"]"))}return this.assignIndexedValue(r,"[]")}serializeProperty(e,r,s){if(typeof r=="string"){let i=Number(r),a=i>=0&&i.toString()===r||ue$1(r);if(this.isIndexedValueInStack(s)){let n=this.getRefParam(s.i);return this.markRef(e.i),a&&i!==i?this.createObjectAssign(e.i,r,n):this.createArrayAssign(e.i,a?r:'"'+r+'"',n),""}return (a?r:'"'+r+'"')+":"+this.serialize(s)}return "["+this.serialize(r)+"]:"+this.serialize(s)}serializeProperties(e,r){let s=r.s;if(s){let i=r.k,a=r.v;this.stack.push(e.i);let n=this.serializeProperty(e,i[0],a[0]);for(let o=1,l=n;o<s;o++)l=this.serializeProperty(e,i[o],a[o]),n+=(l&&n&&",")+l;return this.stack.pop(),"{"+n+"}"}return "{}"}serializeObject(e){return this.pushObjectFlag(e.o,e.i),this.assignIndexedValue(e.i,this.serializeProperties(e,e.p))}serializeWithObjectAssign(e,r,s){let i=this.serializeProperties(e,r);return i!=="{}"?"Object.assign("+s+","+i+")":s}serializeStringKeyAssignment(e,r,s,i){let a=this.serialize(i),n=Number(s),o=n>=0&&n.toString()===s||ue$1(s);if(this.isIndexedValueInStack(i))o&&n!==n?this.createObjectAssign(e.i,s,a):this.createArrayAssign(e.i,o?s:'"'+s+'"',a);else {let l=this.assignments;this.assignments=r,o&&n!==n?this.createObjectAssign(e.i,s,a):this.createArrayAssign(e.i,o?s:'"'+s+'"',a),this.assignments=l;}}serializeAssignment(e,r,s,i){if(typeof s=="string")this.serializeStringKeyAssignment(e,r,s,i);else {let a=this.stack;this.stack=[];let n=this.serialize(i);this.stack=a;let o=this.assignments;this.assignments=r,this.createArrayAssign(e.i,this.serialize(s),n),this.assignments=o;}}serializeAssignments(e,r){let s=r.s;if(s){let i=[],a=r.k,n=r.v;this.stack.push(e.i);for(let o=0;o<s;o++)this.serializeAssignment(e,i,a[o],n[o]);return this.stack.pop(),de$1(i)}}serializeDictionary(e,r){if(e.p)if(this.features&8)r=this.serializeWithObjectAssign(e,e.p,r);else {this.markRef(e.i);let s=this.serializeAssignments(e,e.p);if(s)return "("+this.assignIndexedValue(e.i,r)+","+s+this.getRefParam(e.i)+")"}return this.assignIndexedValue(e.i,r)}serializeNullConstructor(e){return this.pushObjectFlag(e.o,e.i),this.serializeDictionary(e,tr$2)}serializeDate(e){return this.assignIndexedValue(e.i,'new Date("'+e.s+'")')}serializeRegExp(e){return this.assignIndexedValue(e.i,"/"+e.c+"/"+e.m)}serializeSetItem(e,r){return this.isIndexedValueInStack(r)?(this.markRef(e),this.createAddAssignment(e,this.getRefParam(r.i)),""):this.serialize(r)}serializeSet(e){let r=rr$1,s=e.l,i=e.i;if(s){let a=e.a;this.stack.push(i);let n=this.serializeSetItem(i,a[0]);for(let o=1,l=n;o<s;o++)l=this.serializeSetItem(i,a[o]),n+=(l&&n&&",")+l;this.stack.pop(),n&&(r+="(["+n+"])");}return this.assignIndexedValue(i,r)}serializeMapEntry(e,r,s,i){if(this.isIndexedValueInStack(r)){let a=this.getRefParam(r.i);if(this.markRef(e),this.isIndexedValueInStack(s)){let o=this.getRefParam(s.i);return this.createSetAssignment(e,a,o),""}if(s.t!==4&&s.i!=null&&this.isMarked(s.i)){let o="("+this.serialize(s)+",["+i+","+i+"])";return this.createSetAssignment(e,a,this.getRefParam(s.i)),this.createDeleteAssignment(e,i),o}let n=this.stack;return this.stack=[],this.createSetAssignment(e,a,this.serialize(s)),this.stack=n,""}if(this.isIndexedValueInStack(s)){let a=this.getRefParam(s.i);if(this.markRef(e),r.t!==4&&r.i!=null&&this.isMarked(r.i)){let o="("+this.serialize(r)+",["+i+","+i+"])";return this.createSetAssignment(e,this.getRefParam(r.i),a),this.createDeleteAssignment(e,i),o}let n=this.stack;return this.stack=[],this.createSetAssignment(e,this.serialize(r),a),this.stack=n,""}return "["+this.serialize(r)+","+this.serialize(s)+"]"}serializeMap(e){let r=sr$1,s=e.e.s,i=e.i,a=e.f,n=this.getRefParam(a.i);if(s){let o=e.e.k,l=e.e.v;this.stack.push(i);let u=this.serializeMapEntry(i,o[0],l[0],n);for(let d=1,c=u;d<s;d++)c=this.serializeMapEntry(i,o[d],l[d],n),u+=(c&&u&&",")+c;this.stack.pop(),u&&(r+="(["+u+"])");}return a.t===26&&(this.markRef(a.i),r="("+this.serialize(a)+","+r+")"),this.assignIndexedValue(i,r)}serializeArrayBuffer(e){let r="new Uint8Array(",s=e.s,i=s.length;if(i){r+="["+s[0];for(let a=1;a<i;a++)r+=","+s[a];r+="]";}return this.assignIndexedValue(e.i,r+").buffer")}serializeTypedArray(e){return this.assignIndexedValue(e.i,"new "+e.c+"("+this.serialize(e.f)+","+e.b+","+e.l+")")}serializeDataView(e){return this.assignIndexedValue(e.i,"new DataView("+this.serialize(e.f)+","+e.b+","+e.l+")")}serializeAggregateError(e){let r=e.i;this.stack.push(r);let s=this.serializeDictionary(e,'new AggregateError([],"'+e.m+'")');return this.stack.pop(),s}serializeError(e){return this.serializeDictionary(e,"new "+Ae$2[e.s]+'("'+e.m+'")')}serializePromise(e){let r,s=e.f,i=e.i,a=e.s?ir:ar$1;if(this.isIndexedValueInStack(s)){let n=this.getRefParam(s.i);r=a+(e.s?"().then("+this.createFunction([],n)+")":"().catch("+this.createEffectfulFunction([],"throw "+n)+")");}else {this.stack.push(i);let n=this.serialize(s);this.stack.pop(),r=a+"("+n+")";}return this.assignIndexedValue(i,r)}serializeWellKnownSymbol(e){return this.assignIndexedValue(e.i,at$2[e.s])}serializeBoxed(e){return this.assignIndexedValue(e.i,"Object("+this.serialize(e.f)+")")}serializePlugin(e){let r=this.plugins;if(r)for(let s=0,i=r.length;s<i;s++){let a=r[s];if(a.tag===e.c)return this.assignIndexedValue(e.i,a.serialize(e.s,this,{id:e.i}))}throw new je$1(e.c)}getConstructor(e){let r=this.serialize(e);return r===this.getRefParam(e.i)?r:"("+r+")"}serializePromiseConstructor(e){return this.assignIndexedValue(e.i,this.getConstructor(e.f)+"()")}serializePromiseResolve(e){return this.getConstructor(e.a[0])+"("+this.getRefParam(e.i)+","+this.serialize(e.a[1])+")"}serializePromiseReject(e){return this.getConstructor(e.a[0])+"("+this.getRefParam(e.i)+","+this.serialize(e.a[1])+")"}serializeSpecialReferenceValue(e){switch(e){case 0:return "[]";case 1:return this.createFunction(["s","f","p"],"((p=new Promise("+this.createEffectfulFunction(["a","b"],"s=a,f=b")+")).s=s,p.f=f,p)");case 2:return this.createEffectfulFunction(["p","d"],'p.s(d),p.status="success",p.value=d;delete p.s;delete p.f');case 3:return this.createEffectfulFunction(["p","d"],'p.f(d),p.status="failure",p.value=d;delete p.s;delete p.f');case 4:return this.createFunction(["b","a","s","l","p","f","e","n"],"(b=[],a=!0,s=!1,l=[],p=0,f="+this.createEffectfulFunction(["v","m","x"],"for(x=0;x<p;x++)l[x]&&l[x][m](v)")+",n="+this.createEffectfulFunction(["o","x","z","c"],'for(x=0,z=b.length;x<z;x++)(c=b[x],(!a&&x===z-1)?o[s?"return":"throw"](c):o.next(c))')+",e="+this.createFunction(["o","t"],"(a&&(l[t=p++]=o),n(o),"+this.createEffectfulFunction([],"a&&(l[t]=void 0)")+")")+",{__SEROVAL_STREAM__:!0,on:"+this.createFunction(["o"],"e(o)")+",next:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"next"))')+",throw:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"throw"),a=s=!1,l.length=0)')+",return:"+this.createEffectfulFunction(["v"],'a&&(b.push(v),f(v,"return"),a=!1,s=!0,l.length=0)')+"})");default:return ""}}serializeSpecialReference(e){return this.assignIndexedValue(e.i,this.serializeSpecialReferenceValue(e.s))}serializeIteratorFactory(e){let r="",s=!1;return e.f.t!==4&&(this.markRef(e.f.i),r="("+this.serialize(e.f)+",",s=!0),r+=this.assignIndexedValue(e.i,this.createFunction(["s"],this.createFunction(["i","c","d","t"],"(i=0,t={["+this.getRefParam(e.f.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction([],"if(i>s.d)return{done:!0,value:void 0};if(d=s.v[c=i++],c===s.t)throw d;return{done:c===s.d,value:d}")+"})"))),s&&(r+=")"),r}serializeIteratorFactoryInstance(e){return this.getConstructor(e.a[0])+"("+this.serialize(e.a[1])+")"}serializeAsyncIteratorFactory(e){let r=e.a[0],s=e.a[1],i="";r.t!==4&&(this.markRef(r.i),i+="("+this.serialize(r)),s.t!==4&&(this.markRef(s.i),i+=(i?",":"(")+this.serialize(s)),i&&(i+=",");let a=this.assignIndexedValue(e.i,this.createFunction(["s"],this.createFunction(["b","c","p","d","e","t","f"],"(b=[],c=0,p=[],d=-1,e=!1,f="+this.createEffectfulFunction(["i","l"],"for(i=0,l=p.length;i<l;i++)p[i].s({done:!0,value:void 0})")+",s.on({next:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!1,value:v});b.push(v)")+",throw:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.f(v);f(),d=b.length,e=!0,b.push(v)")+",return:"+this.createEffectfulFunction(["v","t"],"if(t=p.shift())t.s({done:!0,value:v});f(),d=b.length,b.push(v)")+"}),t={["+this.getRefParam(s.i)+"]:"+this.createFunction([],"t")+",next:"+this.createEffectfulFunction(["i","t","v"],"if(d===-1){return((i=c++)>=b.length)?(p.push(t="+this.getRefParam(r.i)+"()),t):{done:!1,value:b[i]}}if(c>d)return{done:!0,value:void 0};if(v=b[i=c++],i!==d)return{done:!1,value:v};if(e)throw v;return{done:!0,value:v}")+"})")));return i?i+a+")":a}serializeAsyncIteratorFactoryInstance(e){return this.getConstructor(e.a[0])+"("+this.serialize(e.a[1])+")"}serializeStreamConstructor(e){let r=this.assignIndexedValue(e.i,this.getConstructor(e.f)+"()"),s=e.a.length;if(s){let i=this.serialize(e.a[0]);for(let a=1;a<s;a++)i+=","+this.serialize(e.a[a]);return "("+r+","+i+","+this.getRefParam(e.i)+")"}return r}serializeStreamNext(e){return this.getRefParam(e.i)+".next("+this.serialize(e.f)+")"}serializeStreamThrow(e){return this.getRefParam(e.i)+".throw("+this.serialize(e.f)+")"}serializeStreamReturn(e){return this.getRefParam(e.i)+".return("+this.serialize(e.f)+")"}serialize(e){try{switch(e.t){case 2:return ot$2[e.s];case 0:return ""+e.s;case 1:return '"'+e.s+'"';case 3:return e.s+"n";case 4:return this.getRefParam(e.i);case 18:return this.serializeReference(e);case 9:return this.serializeArray(e);case 10:return this.serializeObject(e);case 11:return this.serializeNullConstructor(e);case 5:return this.serializeDate(e);case 6:return this.serializeRegExp(e);case 7:return this.serializeSet(e);case 8:return this.serializeMap(e);case 19:return this.serializeArrayBuffer(e);case 16:case 15:return this.serializeTypedArray(e);case 20:return this.serializeDataView(e);case 14:return this.serializeAggregateError(e);case 13:return this.serializeError(e);case 12:return this.serializePromise(e);case 17:return this.serializeWellKnownSymbol(e);case 21:return this.serializeBoxed(e);case 22:return this.serializePromiseConstructor(e);case 23:return this.serializePromiseResolve(e);case 24:return this.serializePromiseReject(e);case 25:return this.serializePlugin(e);case 26:return this.serializeSpecialReference(e);case 27:return this.serializeIteratorFactory(e);case 28:return this.serializeIteratorFactoryInstance(e);case 29:return this.serializeAsyncIteratorFactory(e);case 30:return this.serializeAsyncIteratorFactoryInstance(e);case 31:return this.serializeStreamConstructor(e);case 32:return this.serializeStreamNext(e);case 33:return this.serializeStreamThrow(e);case 34:return this.serializeStreamReturn(e);default:throw new Ce$2(e)}}catch(r){throw new Dt$2(r)}}},lr=class extends or$1{constructor(t){super(t),this.mode="cross",this.scopeId=t.scopeId;}getRefParam(t){return O+"["+t+"]"}assignIndexedValue(t,e){return this.getRefParam(t)+"="+e}serializeTop(t){let e=this.serialize(t),r=t.i;if(r==null)return e;let s=this.resolvePatches(),i=this.getRefParam(r),a=this.scopeId==null?"":O,n=s?"("+e+","+s+i+")":e;if(a==="")return t.t===10&&!s?"("+n+")":n;let o=this.scopeId==null?"()":"("+O+'["'+p(this.scopeId)+'"])';return "("+this.createFunction([a],n)+")"+o}},cr=class extends Yt$2{parseItems(e){let r=[];for(let s=0,i=e.length;s<i;s++)s in e&&(r[s]=this.parse(e[s]));return r}parseArray(e,r){return It$2(e,r,this.parseItems(r))}parseProperties(e){let r=Object.entries(e),s=[],i=[];for(let n=0,o=r.length;n<o;n++)s.push(p(r[n][0])),i.push(this.parse(r[n][1]));let a=Symbol.iterator;return a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Fe$2(this.parseIteratorFactory(),this.parse(Ve$1(e))))),a=Symbol.asyncIterator,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Oe$2(this.parseAsyncIteratorFactory(),this.parse(A$1())))),a=Symbol.toStringTag,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(_$1(e[a]))),a=Symbol.isConcatSpreadable,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(e[a]?U$1:L)),{k:s,v:i,s:s.length}}parsePlainObject(e,r,s){return this.createObjectNode(e,r,s,this.parseProperties(r))}parseBoxed(e,r){return xt$1(e,this.parse(r.valueOf()))}parseTypedArray(e,r){return Et$2(e,r,this.parse(r.buffer))}parseBigIntTypedArray(e,r){return At$2(e,r,this.parse(r.buffer))}parseDataView(e,r){return Pt$2(e,r,this.parse(r.buffer))}parseError(e,r){let s=oe$2(r,this.features);return kt$2(e,r,s?this.parseProperties(s):void 0)}parseAggregateError(e,r){let s=oe$2(r,this.features);return Ft$2(e,r,s?this.parseProperties(s):void 0)}parseMap(e,r){let s=[],i=[];for(let[a,n]of r.entries())s.push(this.parse(a)),i.push(this.parse(n));return this.createMapNode(e,s,i,r.size)}parseSet(e,r){let s=[];for(let i of r.keys())s.push(this.parse(i));return Ot$2(e,r.size,s)}parsePlugin(e,r){let s=this.plugins;if(s)for(let i=0,a=s.length;i<a;i++){let n=s[i];if(n.parse.sync&&n.test(r))return ke$2(e,n.tag,n.parse.sync(r,this,{id:e}))}}parseStream(e,r){return $e$1(e,this.parseSpecialReference(4),[])}parsePromise(e,r){return this.createPromiseConstructorNode(e)}parseObject(e,r){if(Array.isArray(r))return this.parseArray(e,r);if(Ht$2(r))return this.parseStream(e,r);let s=r.constructor;if(s===_t$1)return this.parse(r.replacement);let i=this.parsePlugin(e,r);if(i)return i;switch(s){case Object:return this.parsePlainObject(e,r,!1);case void 0:return this.parsePlainObject(e,r,!0);case Date:return zt$2(e,r);case RegExp:return wt$2(e,r);case Error:case EvalError:case RangeError:case ReferenceError:case SyntaxError:case TypeError:case URIError:return this.parseError(e,r);case Number:case Boolean:case String:case BigInt:return this.parseBoxed(e,r);case ArrayBuffer:return St$2(e,r);case Int8Array:case Int16Array:case Int32Array:case Uint8Array:case Uint16Array:case Uint32Array:case Uint8ClampedArray:case Float32Array:case Float64Array:return this.parseTypedArray(e,r);case DataView:return this.parseDataView(e,r);case Map:return this.parseMap(e,r);case Set:return this.parseSet(e,r)}if(s===Promise||r instanceof Promise)return this.parsePromise(e,r);let a=this.features;if(a&16)switch(s){case BigInt64Array:case BigUint64Array:return this.parseBigIntTypedArray(e,r)}if(a&1&&typeof AggregateError<"u"&&(s===AggregateError||r instanceof AggregateError))return this.parseAggregateError(e,r);if(r instanceof Error)return this.parseError(e,r);if(Symbol.iterator in r||Symbol.asyncIterator in r)return this.parsePlainObject(e,r,!!s);throw new $(r)}parse(e){try{switch(typeof e){case"boolean":return e?U$1:L;case"undefined":return ut$2;case"string":return _$1(e);case"number":return gt$2(e);case"bigint":return yt$2(e);case"object":{if(e){let r=this.getReference(e);return r.type===0?this.parseObject(r.value,e):r.value}return dt$2}case"symbol":return this.parseWellKnownSymbol(e);case"function":return this.parseFunction(e);default:throw new $(e)}}catch(r){throw new Tt$1(r)}}},ur=class extends cr{constructor(e){super(e),this.alive=!0,this.pending=0,this.initial=!0,this.buffer=[],this.onParseCallback=e.onParse,this.onErrorCallback=e.onError,this.onDoneCallback=e.onDone;}onParseInternal(e,r){try{this.onParseCallback(e,r);}catch(s){this.onError(s);}}flush(){for(let e=0,r=this.buffer.length;e<r;e++)this.onParseInternal(this.buffer[e],!1);}onParse(e){this.initial?this.buffer.push(e):this.onParseInternal(e,!1);}onError(e){if(this.onErrorCallback)this.onErrorCallback(e);else throw e}onDone(){this.onDoneCallback&&this.onDoneCallback();}pushPendingState(){this.pending++;}popPendingState(){--this.pending<=0&&this.onDone();}parseProperties(e){let r=Object.entries(e),s=[],i=[];for(let n=0,o=r.length;n<o;n++)s.push(p(r[n][0])),i.push(this.parse(r[n][1]));let a=Symbol.iterator;return a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Fe$2(this.parseIteratorFactory(),this.parse(Ve$1(e))))),a=Symbol.asyncIterator,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(Oe$2(this.parseAsyncIteratorFactory(),this.parse(Kt$2(e))))),a=Symbol.toStringTag,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(_$1(e[a]))),a=Symbol.isConcatSpreadable,a in e&&(s.push(this.parseWellKnownSymbol(a)),i.push(e[a]?U$1:L)),{k:s,v:i,s:s.length}}parsePromise(e,r){return r.then(s=>{let i=this.parseWithError(s);i&&this.onParse({t:23,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(2),i],f:void 0,b:void 0,o:void 0}),this.popPendingState();},s=>{if(this.alive){let i=this.parseWithError(s);i&&this.onParse({t:24,i:e,s:void 0,l:void 0,c:void 0,m:void 0,p:void 0,e:void 0,a:[this.parseSpecialReference(3),i],f:void 0,b:void 0,o:void 0});}this.popPendingState();}),this.pushPendingState(),this.createPromiseConstructorNode(e)}parsePlugin(e,r){let s=this.plugins;if(s)for(let i=0,a=s.length;i<a;i++){let n=s[i];if(n.parse.stream&&n.test(r))return ke$2(e,n.tag,n.parse.stream(r,this,{id:e}))}}parseStream(e,r){let s=$e$1(e,this.parseSpecialReference(4),[]);return this.pushPendingState(),r.on({next:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse($t$2(e,a));}},throw:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(Ct$2(e,a));}this.popPendingState();},return:i=>{if(this.alive){let a=this.parseWithError(i);a&&this.onParse(jt$2(e,a));}this.popPendingState();}}),s}parseWithError(e){try{return this.parse(e)}catch(r){this.onError(r);return}}start(e){let r=this.parseWithError(e);r&&(this.onParseInternal(r,!0),this.initial=!1,this.flush(),this.pending<=0&&this.destroy());}destroy(){this.alive&&(this.onDone(),this.alive=!1);}isAlive(){return this.alive}},dr=class extends ur{constructor(){super(...arguments),this.mode="cross";}};function hr(t,e){let r=xe$2(e.plugins),s=new dr({plugins:r,refs:e.refs,disabledFeatures:e.disabledFeatures,onParse(i,a){let n=new lr({plugins:r,features:s.features,scopeId:e.scopeId,markedRefs:s.marked}),o;try{o=n.serializeTop(i);}catch(l){e.onError&&e.onError(l);return}e.onSerialize(o,a);},onError:e.onError,onDone:e.onDone});return s.start(t),()=>{s.destroy();}}var pr=class extends Zt$2{constructor(e){super(e),this.mode="vanilla",this.marked=new Set(e.markedRefs);}assignIndexedValue(e,r){return this.marked.has(e)&&this.refs.set(e,r),r}};function he(t,e={}){let r=xe$2(e.plugins);return new pr({plugins:r,markedRefs:t.m}).deserialize(t.t)}function C$2(t){return {detail:t.detail,bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}}var fr={tag:"seroval-plugins/web/CustomEvent",test(t){return typeof CustomEvent>"u"?!1:t instanceof CustomEvent},parse:{sync(t,e){return {type:e.parse(t.type),options:e.parse(C$2(t))}},async async(t,e){return {type:await e.parse(t.type),options:await e.parse(C$2(t))}},stream(t,e){return {type:e.parse(t.type),options:e.parse(C$2(t))}}},serialize(t,e){return "new CustomEvent("+e.serialize(t.type)+","+e.serialize(t.options)+")"},deserialize(t,e){return new CustomEvent(e.deserialize(t.type),e.deserialize(t.options))}},W$1=fr,vr={tag:"seroval-plugins/web/DOMException",test(t){return typeof DOMException>"u"?!1:t instanceof DOMException},parse:{sync(t,e){return {name:e.parse(t.name),message:e.parse(t.message)}},async async(t,e){return {name:await e.parse(t.name),message:await e.parse(t.message)}},stream(t,e){return {name:e.parse(t.name),message:e.parse(t.message)}}},serialize(t,e){return "new DOMException("+e.serialize(t.message)+","+e.serialize(t.name)+")"},deserialize(t,e){return new DOMException(e.deserialize(t.message),e.deserialize(t.name))}},q=vr;function j(t){return {bubbles:t.bubbles,cancelable:t.cancelable,composed:t.composed}}var mr={tag:"seroval-plugins/web/Event",test(t){return typeof Event>"u"?!1:t instanceof Event},parse:{sync(t,e){return {type:e.parse(t.type),options:e.parse(j(t))}},async async(t,e){return {type:await e.parse(t.type),options:await e.parse(j(t))}},stream(t,e){return {type:e.parse(t.type),options:e.parse(j(t))}}},serialize(t,e){return "new Event("+e.serialize(t.type)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Event(e.deserialize(t.type),e.deserialize(t.options))}},H=mr,gr={tag:"seroval-plugins/web/File",test(t){return typeof File>"u"?!1:t instanceof File},parse:{async async(t,e){return {name:await e.parse(t.name),options:await e.parse({type:t.type,lastModified:t.lastModified}),buffer:await e.parse(await t.arrayBuffer())}}},serialize(t,e){return "new File(["+e.serialize(t.buffer)+"],"+e.serialize(t.name)+","+e.serialize(t.options)+")"},deserialize(t,e){return new File([e.deserialize(t.buffer)],e.deserialize(t.name),e.deserialize(t.options))}},yr=gr;function V$1(t){let e=[];return t.forEach((r,s)=>{e.push([s,r]);}),e}var R={},br={tag:"seroval-plugins/web/FormDataFactory",test(t){return t===R},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(t,e){return e.createEffectfulFunction(["e","f","i","s","t"],"f=new FormData;for(i=0,s=e.length;i<s;i++)f.append((t=e[i])[0],t[1]);return f")},deserialize(){return R}},zr$1={tag:"seroval-plugins/web/FormData",extends:[yr,br],test(t){return typeof FormData>"u"?!1:t instanceof FormData},parse:{sync(t,e){return {factory:e.parse(R),entries:e.parse(V$1(t))}},async async(t,e){return {factory:await e.parse(R),entries:await e.parse(V$1(t))}},stream(t,e){return {factory:e.parse(R),entries:e.parse(V$1(t))}}},serialize(t,e){return "("+e.serialize(t.factory)+")("+e.serialize(t.entries)+")"},deserialize(t,e){let r=new FormData,s=e.deserialize(t.entries);for(let i=0,a=s.length;i<a;i++){let n=s[i];r.append(n[0],n[1]);}return r}},K$2=zr$1;function T(t){let e=[];return t.forEach((r,s)=>{e.push([s,r]);}),e}var wr={tag:"seroval-plugins/web/Headers",test(t){return typeof Headers>"u"?!1:t instanceof Headers},parse:{sync(t,e){return e.parse(T(t))},async async(t,e){return await e.parse(T(t))},stream(t,e){return e.parse(T(t))}},serialize(t,e){return "new Headers("+e.serialize(t)+")"},deserialize(t,e){return new Headers(e.deserialize(t))}},x$3=wr,I$1={},Sr={tag:"seroval-plugins/web/ReadableStreamFactory",test(t){return t===I$1},parse:{sync(){},async async(){return await Promise.resolve(void 0)},stream(){}},serialize(t,e){return e.createFunction(["d"],"new ReadableStream({start:"+e.createEffectfulFunction(["c"],"d.on({next:"+e.createEffectfulFunction(["v"],"c.enqueue(v)")+",throw:"+e.createEffectfulFunction(["v"],"c.error(v)")+",return:"+e.createEffectfulFunction([],"c.close()")+"})")+"})")},deserialize(){return I$1}};function pe$1(t){let e=A$1(),r=t.getReader();async function s(){try{let i=await r.read();i.done?e.return(i.value):(e.next(i.value),await s());}catch(i){e.throw(i);}}return s().catch(()=>{}),e}var Rr={tag:"seroval/plugins/web/ReadableStream",extends:[Sr],test(t){return typeof ReadableStream>"u"?!1:t instanceof ReadableStream},parse:{sync(t,e){return {factory:e.parse(I$1),stream:e.parse(A$1())}},async async(t,e){return {factory:await e.parse(I$1),stream:await e.parse(pe$1(t))}},stream(t,e){return {factory:e.parse(I$1),stream:e.parse(pe$1(t))}}},serialize(t,e){return "("+e.serialize(t.factory)+")("+e.serialize(t.stream)+")"},deserialize(t,e){let r=e.deserialize(t.stream);return new ReadableStream({start(s){r.on({next(i){s.enqueue(i);},throw(i){s.error(i);},return(){s.close();}});}})}},E$2=Rr;function fe$1(t,e){return {body:e,cache:t.cache,credentials:t.credentials,headers:t.headers,integrity:t.integrity,keepalive:t.keepalive,method:t.method,mode:t.mode,redirect:t.redirect,referrer:t.referrer,referrerPolicy:t.referrerPolicy}}var Ir$1={tag:"seroval-plugins/web/Request",extends:[E$2,x$3],test(t){return typeof Request>"u"?!1:t instanceof Request},parse:{async async(t,e){return {url:await e.parse(t.url),options:await e.parse(fe$1(t,t.body?await t.clone().arrayBuffer():null))}},stream(t,e){return {url:e.parse(t.url),options:e.parse(fe$1(t,t.clone().body))}}},serialize(t,e){return "new Request("+e.serialize(t.url)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Request(e.deserialize(t.url),e.deserialize(t.options))}},X$2=Ir$1;function ve$1(t){return {headers:t.headers,status:t.status,statusText:t.statusText}}var xr={tag:"seroval-plugins/web/Response",extends:[E$2,x$3],test(t){return typeof Response>"u"?!1:t instanceof Response},parse:{async async(t,e){return {body:await e.parse(t.body?await t.clone().arrayBuffer():null),options:await e.parse(ve$1(t))}},stream(t,e){return {body:e.parse(t.clone().body),options:e.parse(ve$1(t))}}},serialize(t,e){return "new Response("+e.serialize(t.body)+","+e.serialize(t.options)+")"},deserialize(t,e){return new Response(e.deserialize(t.body),e.deserialize(t.options))}},G$1=xr,Er={tag:"seroval-plugins/web/URLSearchParams",test(t){return typeof URLSearchParams>"u"?!1:t instanceof URLSearchParams},parse:{sync(t,e){return e.parse(t.toString())},async async(t,e){return await e.parse(t.toString())},stream(t,e){return e.parse(t.toString())}},serialize(t,e){return "new URLSearchParams("+e.serialize(t)+")"},deserialize(t,e){return new URLSearchParams(e.deserialize(t))}},Y$3=Er,Ar$1={tag:"seroval-plugins/web/URL",test(t){return typeof URL>"u"?!1:t instanceof URL},parse:{sync(t,e){return e.parse(t.href)},async async(t,e){return await e.parse(t.href)},stream(t,e){return e.parse(t.href)}},serialize(t,e){return "new URL("+e.serialize(t)+")"},deserialize(t,e){return new URL(e.deserialize(t))}},J$1=Ar$1;const D$1="Invariant Violation",{setPrototypeOf:Pr=function(t,e){return t.__proto__=e,t}}=Object;let te$3 = class te extends Error{framesToPop=1;name=D$1;constructor(e=D$1){super(typeof e=="number"?`${D$1}: ${e} (see https://github.com/apollographql/invariant-packages)`:e),Pr(this,te.prototype);}};function kr$1(t,e){if(!t)throw new te$3(e)}const b={NORMAL:0,WILDCARD:1,PLACEHOLDER:2};function Fr$1(t={}){const e={options:t,rootNode:Te$2(),staticRoutesMap:{}},r=s=>t.strictTrailingSlash?s:s.replace(/\/$/,"")||"/";if(t.routes)for(const s in t.routes)me$1(e,r(s),t.routes[s]);return {ctx:e,lookup:s=>Or(e,r(s)),insert:(s,i)=>me$1(e,r(s),i),remove:s=>$r$1(e,r(s))}}function Or(t,e){const r=t.staticRoutesMap[e];if(r)return r.data;const s=e.split("/"),i={};let a=!1,n=null,o=t.rootNode,l=null;for(let u=0;u<s.length;u++){const d=s[u];o.wildcardChildNode!==null&&(n=o.wildcardChildNode,l=s.slice(u).join("/"));const c=o.children.get(d);if(c===void 0){if(o&&o.placeholderChildren.length>1){const h=s.length-u;o=o.placeholderChildren.find(g=>g.maxDepth===h)||null;}else o=o.placeholderChildren[0]||null;if(!o)break;o.paramName&&(i[o.paramName]=d),a=!0;}else o=c;}return (o===null||o.data===null)&&n!==null&&(o=n,i[o.paramName||"_"]=l,a=!0),o?a?{...o.data,params:a?i:void 0}:o.data:null}function me$1(t,e,r){let s=!0;const i=e.split("/");let a=t.rootNode,n=0;const o=[a];for(const l of i){let u;if(u=a.children.get(l))a=u;else {const d=Cr$1(l);u=Te$2({type:d,parent:a}),a.children.set(l,u),d===b.PLACEHOLDER?(u.paramName=l==="*"?`_${n++}`:l.slice(1),a.placeholderChildren.push(u),s=!1):d===b.WILDCARD&&(a.wildcardChildNode=u,u.paramName=l.slice(3)||"_",s=!1),o.push(u),a=u;}}for(const[l,u]of o.entries())u.maxDepth=Math.max(o.length-l,u.maxDepth||0);return a.data=r,s===!0&&(t.staticRoutesMap[e]=a),a}function $r$1(t,e){let r=!1;const s=e.split("/");let i=t.rootNode;for(const a of s)if(i=i.children.get(a),!i)return r;if(i.data){const a=s.at(-1)||"";i.data=null,Object.keys(i.children).length===0&&i.parent&&(i.parent.children.delete(a),i.parent.wildcardChildNode=null,i.parent.placeholderChildren=[]),r=!0;}return r}function Te$2(t={}){return {type:t.type||b.NORMAL,maxDepth:0,parent:t.parent||null,children:new Map,data:t.data||null,paramName:t.paramName||null,wildcardChildNode:null,placeholderChildren:[]}}function Cr$1(t){return t.startsWith("**")?b.WILDCARD:t[0]===":"||t==="*"?b.PLACEHOLDER:b.NORMAL}const De$2=[{page:!0,$component:{src:"src/routes/[...404].tsx?pick=default&pick=$css",build:()=>import('./build/_...404_.mjs'),import:()=>import('./build/_...404_.mjs')},path:"/*404",filePath:"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/[...404].tsx"},{page:!0,$component:{src:"src/routes/about.tsx?pick=default&pick=$css",build:()=>import('./build/about.mjs'),import:()=>import('./build/about.mjs')},path:"/about",filePath:"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/about.tsx"},{page:!0,$component:{src:"src/routes/contactos.tsx?pick=default&pick=$css",build:()=>import('./build/contactos.mjs'),import:()=>import('./build/contactos.mjs')},path:"/contactos",filePath:"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/contactos.tsx"},{page:!0,$component:{src:"src/routes/index.tsx?pick=default&pick=$css",build:()=>import('./build/index.mjs'),import:()=>import('./build/index.mjs')},path:"/",filePath:"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/index.tsx"},{page:!0,$component:{src:"src/routes/sobre-nos.tsx?pick=default&pick=$css",build:()=>import('./build/sobre-nos.mjs'),import:()=>import('./build/sobre-nos.mjs')},path:"/sobre-nos",filePath:"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/sobre-nos.tsx"},{page:!0,$component:{src:"src/routes/projetos/[slug].tsx?pick=default&pick=$css",build:()=>import('./build/_slug_.mjs'),import:()=>import('./build/_slug_.mjs')},path:"/projetos/:slug",filePath:"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/[slug].tsx"},{page:!0,$component:{src:"src/routes/projetos/index.tsx?pick=default&pick=$css",build:()=>import('./build/index2.mjs'),import:()=>import('./build/index2.mjs')},path:"/projetos/",filePath:"/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/index.tsx"}],jr$1=Vr$1(De$2.filter(t=>t.page));function Vr$1(t){function e(r,s,i,a){const n=Object.values(r).find(o=>i.startsWith(o.id+"/"));return n?(e(n.children||(n.children=[]),s,i.slice(n.id.length)),r):(r.push({...s,id:i,path:i.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"")}),r)}return t.sort((r,s)=>r.path.length-s.path.length).reduce((r,s)=>e(r,s,s.path,s.path),[])}function Tr(t){return t.$GET||t.$POST||t.$PUT||t.$PATCH||t.$DELETE}Fr$1({routes:De$2.reduce((t,e)=>{if(!Tr(e))return t;let r=e.path.replace(/\/\([^)/]+\)/g,"").replace(/\([^)/]+\)/g,"").replace(/\*([^/]*)/g,(s,i)=>`**:${i}`);if(/:[^/]*\?/g.test(r))throw new Error(`Optional parameters are not supported in API routes: ${r}`);if(t[r])throw new Error(`Duplicate API routes for "${r}" found at "${t[r].route.path}" and "${e.path}"`);return t[r]={route:e},t},{})});var Nr$1=" ";const Mr$1={style:t=>ssrElement("style",t.attrs,()=>escape(t.children),!0),link:t=>ssrElement("link",t.attrs,void 0,!0),script:t=>t.attrs.src?ssrElement("script",mergeProps(()=>t.attrs,{get id(){return t.key}}),()=>ssr(Nr$1),!0):null,noscript:t=>ssrElement("noscript",t.attrs,()=>escape(t.children),!0)};function Ur$1(t,e){let{tag:r,attrs:{key:s,...i}={key:void 0},children:a}=t;return Mr$1[r]({attrs:{...i,nonce:e},key:s,children:a})}function Lr(t,e,r,s="default"){return lazy(async()=>{{const a=(await t.import())[s],o=(await e.inputs?.[t.src].assets()).filter(u=>u.tag==="style"||u.attrs.rel==="stylesheet");return {default:u=>[...o.map(d=>Ur$1(d)),createComponent(a,u)]}}})}function Ne$2(){function t(r){return {...r,...r.$$route?r.$$route.require().route:void 0,info:{...r.$$route?r.$$route.require().route.info:{},filesystem:!0},component:r.$component&&Lr(r.$component,globalThis.MANIFEST.client,globalThis.MANIFEST.ssr),children:r.children?r.children.map(t):void 0}}return jr$1.map(t)}let ge$1;const ds$1=isServer?()=>getRequestEvent().routes:()=>ge$1||(ge$1=Ne$2());function _r$1(t){const e=ie$1(t.nativeEvent,"flash");if(!e)return;let r=JSON.parse(e);if(!r||!r.result)return;const s=[...r.input.slice(0,-1),new Map(r.input[r.input.length-1])];ce$1(t.nativeEvent,"flash","",{maxAge:0});const i=r.error?new Error(r.result):r.result;return {input:s,url:r.url,pending:!1,result:r.thrown?void 0:i,error:r.thrown?i:void 0}}async function Br$1(t){const e=globalThis.MANIFEST.client;return globalThis.MANIFEST.ssr,t.response.headers.set("Content-Type","text/html"),Object.assign(t,{manifest:await e.json(),assets:[...await e.inputs[e.handler].assets()],router:{submission:_r$1(t)},routes:Ne$2(),complete:!1,$islands:new Set})}const Wr$1=new Set([301,302,303,307,308]);function qr$1(t){return t.status&&Wr$1.has(t.status)?t.status:302}function Hr$1(t){const e=new TextEncoder().encode(t),r=e.length,s=r.toString(16),i="00000000".substring(0,8-s.length)+s,a=new TextEncoder().encode(`;0x${i};`),n=new Uint8Array(12+r);return n.set(a),n.set(e,12),n}function ye$1(t,e){return new ReadableStream({start(r){hr(e,{scopeId:t,plugins:[W$1,q,H,K$2,x$3,E$2,X$2,G$1,Y$3,J$1],onSerialize(s,i){r.enqueue(Hr$1(i?`(${tt$2(t)},${s})`:s));},onDone(){r.close();},onError(s){r.error(s);}});}})}async function Kr$1(t){const e=fe$2(t),r=e.request,s=r.headers.get("X-Server-Id"),i=r.headers.get("X-Server-Instance"),a=r.headers.has("X-Single-Flight"),n=new URL(r.url);let o,l;if(s)kr$1(typeof s=="string","Invalid server function"),[o,l]=s.split("#");else if(o=n.searchParams.get("id"),l=n.searchParams.get("name"),!o||!l)throw new Error("Invalid request");const u=(await globalThis.MANIFEST["server-fns"].chunks[o].import())[l];let d=[];if(!i||t.method==="GET"){const c=n.searchParams.get("args");if(c){const h=JSON.parse(c);(h.t?he(h,{plugins:[W$1,q,H,K$2,x$3,E$2,X$2,G$1,Y$3,J$1]}):h).forEach(g=>d.push(g));}}if(t.method==="POST"){const c=r.headers.get("content-type"),h=t.node.req,g=h instanceof ReadableStream,re=g&&h.locked,se=g?h:h.body;if(c?.startsWith("multipart/form-data")||c?.startsWith("application/x-www-form-urlencoded"))d.push(await(re?r:new Request(r,{...r,body:se})).formData());else if(c?.startsWith("application/json")){const Me=re?r:new Request(r,{...r,body:se});d=he(await Me.json(),{plugins:[W$1,q,H,K$2,x$3,E$2,X$2,G$1,Y$3,J$1]});}}try{let c=await provideRequestEvent(e,async()=>(sharedConfig.context={event:e},e.locals.serverFunctionMeta={id:o+"#"+l},u(...d)));if(a&&i&&(c=await ze$2(e,c)),c instanceof Response){if(c.headers&&c.headers.has("X-Content-Raw"))return c;i&&(c.headers&&de$2(t,c.headers),c.status&&(c.status<300||c.status>=400)&&R$1(t,c.status),c.customBody?c=await c.customBody():c.body==null&&(c=null));}return i?(ue$2(t,"content-type","text/javascript"),ye$1(i,c)):be$2(c,r,d)}catch(c){if(c instanceof Response)a&&i&&(c=await ze$2(e,c)),c.headers&&de$2(t,c.headers),c.status&&(!i||c.status<300||c.status>=400)&&R$1(t,c.status),c.customBody?c=c.customBody():c.body==null&&(c=null),ue$2(t,"X-Error","true");else if(i){const h=c instanceof Error?c.message:typeof c=="string"?c:"true";ue$2(t,"X-Error",h.replace(/[\r\n]+/g,""));}else c=be$2(c,r,d,!0);return i?(ue$2(t,"content-type","text/javascript"),ye$1(i,c)):c}}function be$2(t,e,r,s){const i=new URL(e.url),a=t instanceof Error;let n=new URL(e.headers.get("referer")).toString(),o=302;return t instanceof Response&&t.headers.has("Location")&&(n=new URL(t.headers.get("Location"),i.origin+"").toString(),o=qr$1(t)),new Response(null,{status:o,headers:{Location:n,...t?{"Set-Cookie":`flash=${JSON.stringify({url:i.pathname+encodeURIComponent(i.search),result:a?t.message:t,thrown:s,error:a,input:[...r.slice(0,-1),[...r[r.length-1].entries()]]})}; Secure; HttpOnly;`}:{}}})}let N;async function ze$2(t,e){let r,s=new URL(t.request.headers.get("referer")).toString();e instanceof Response&&(e.headers.has("X-Revalidate")&&(r=e.headers.get("X-Revalidate").split(",")),e.headers.has("Location")&&(s=new URL(e.headers.get("Location"),new URL(t.request.url).origin+"").toString()));const i=le$2(t);return i.request=new Request(s),await provideRequestEvent(i,async()=>{await Br$1(i),N||(N=(await import('./build/app.mjs')).default),i.router.dataOnly=r||!0,i.router.previousUrl=t.request.headers.get("referer");try{renderToString(()=>{sharedConfig.context.event=i,N();});}catch(o){console.log(o);}const a=i.router.data;if(!a)return e;let n=!1;for(const o in a)a[o]===void 0?delete a[o]:n=!0;return n&&(e instanceof Response?e.customBody&&(a._$value=e.customBody()):(a._$value=e,e=new Response(null,{status:200})),e.customBody=()=>a,e.headers.set("X-Single-Flight","true")),e})}const hs$1=eventHandler(Kr$1);

function ye() {
  let e = /* @__PURE__ */ new Set();
  function t(r) {
    return e.add(r), () => e.delete(r);
  }
  let n = false;
  function s(r, o) {
    if (n)
      return !(n = false);
    const c = { to: r, options: o, defaultPrevented: false, preventDefault: () => c.defaultPrevented = true };
    for (const i of e)
      i.listener({ ...c, from: i.location, retry: (l) => {
        l && (n = true), i.navigate(r, { ...o, resolve: false });
      } });
    return !c.defaultPrevented;
  }
  return { subscribe: t, confirm: s };
}
let U;
function Y$2() {
  (!window.history.state || window.history.state._depth == null) && window.history.replaceState({ ...window.history.state, _depth: window.history.length - 1 }, ""), U = window.history.state._depth;
}
isServer || Y$2();
function De$1(e) {
  return { ...e, _depth: window.history.state && window.history.state._depth };
}
function Me$1(e, t) {
  let n = false;
  return () => {
    const s = U;
    Y$2();
    const r = s == null ? null : U - s;
    if (n) {
      n = false;
      return;
    }
    r && t(r) ? (n = true, window.history.go(-r)) : e();
  };
}
const ve = /^(?:[a-z0-9]+:)?\/\//i, we = /^\/+|(\/)\/+$/g, Pe$1 = "http://sr";
function E$1(e, t = false) {
  const n = e.replace(we, "$1");
  return n ? t || /^[?#]/.test(n) ? n : "/" + n : "";
}
function I(e, t, n) {
  if (ve.test(t))
    return;
  const s = E$1(e), r = n && E$1(n);
  let o = "";
  return !r || t.startsWith("/") ? o = s : r.toLowerCase().indexOf(s.toLowerCase()) !== 0 ? o = s + r : o = r, (o || "/") + E$1(t, !o);
}
function Re$1(e, t) {
  if (e == null)
    throw new Error(t);
  return e;
}
function be$1(e, t) {
  return E$1(e).replace(/\/*(\*.*)?$/g, "") + E$1(t);
}
function Z$1(e) {
  const t = {};
  return e.searchParams.forEach((n, s) => {
    t[s] = n;
  }), t;
}
function xe$1(e, t, n) {
  const [s, r] = e.split("/*", 2), o = s.split("/").filter(Boolean), c = o.length;
  return (i) => {
    const l = i.split("/").filter(Boolean), f = l.length - c;
    if (f < 0 || f > 0 && r === void 0 && !t)
      return null;
    const h = { path: c ? "" : "/", params: {} }, y = (p) => n === void 0 ? void 0 : n[p];
    for (let p = 0; p < c; p++) {
      const d = o[p], m = l[p], w = d[0] === ":", A = w ? d.slice(1) : d;
      if (w && D(m, y(A)))
        h.params[A] = m;
      else if (w || !D(m, d))
        return null;
      h.path += `/${m}`;
    }
    if (r) {
      const p = f ? l.slice(-f).join("/") : "";
      if (D(p, y(r)))
        h.params[r] = p;
      else
        return null;
    }
    return h;
  };
}
function D(e, t) {
  const n = (s) => s.localeCompare(e, void 0, { sensitivity: "base" }) === 0;
  return t === void 0 ? true : typeof t == "string" ? n(t) : typeof t == "function" ? t(e) : Array.isArray(t) ? t.some(n) : t instanceof RegExp ? t.test(e) : false;
}
function Se$1(e) {
  const [t, n] = e.pattern.split("/*", 2), s = t.split("/").filter(Boolean);
  return s.reduce((r, o) => r + (o.startsWith(":") ? 2 : 3), s.length - (n === void 0 ? 0 : 1));
}
function ee$1(e) {
  const t = /* @__PURE__ */ new Map(), n = getOwner();
  return new Proxy({}, { get(s, r) {
    return t.has(r) || runWithOwner(n, () => t.set(r, createMemo(() => e()[r]))), t.get(r)();
  }, getOwnPropertyDescriptor() {
    return { enumerable: true, configurable: true };
  }, ownKeys() {
    return Reflect.ownKeys(e());
  } });
}
function Ee$1(e, t) {
  const n = new URLSearchParams(e);
  Object.entries(t).forEach(([r, o]) => {
    o == null || o === "" ? n.delete(r) : n.set(r, String(o));
  });
  const s = n.toString();
  return s ? `?${s}` : "";
}
function te$2(e) {
  let t = /(\/?\:[^\/]+)\?/.exec(e);
  if (!t)
    return [e];
  let n = e.slice(0, t.index), s = e.slice(t.index + t[0].length);
  const r = [n, n += t[1]];
  for (; t = /^(\/\:[^\/]+)\?/.exec(s); )
    r.push(n += t[1]), s = s.slice(t[0].length);
  return te$2(s).reduce((o, c) => [...o, ...r.map((i) => i + c)], []);
}
const Ce$1 = 100, Ae$1 = createContext$1(), ne$1 = createContext$1(), C$1 = () => Re$1(useContext(Ae$1), "<A> and 'use' router primitives can be only used inside a Route."), Fe$1 = () => useContext(ne$1) || C$1().base, Ue = (e) => {
  const t = Fe$1();
  return createMemo(() => t.resolvePath(e()));
}, ke$1 = (e) => {
  const t = C$1();
  return createMemo(() => {
    const n = e();
    return n !== void 0 ? t.renderPath(n) : n;
  });
}, Le$1 = () => C$1().navigatorFactory(), Oe$1 = () => C$1().location, We$1 = () => C$1().params, ze$1 = () => {
  const e = Oe$1(), t = Le$1(), n = (s, r) => {
    const o = untrack(() => Ee$1(e.search, s) + e.hash);
    t(o, { scroll: false, resolve: false, ...r });
  };
  return [e.query, n];
};
function je(e, t = "") {
  const { component: n, preload: s, load: r, children: o, info: c } = e, i = !o || Array.isArray(o) && !o.length, l = { key: e, component: n, preload: s || r, info: c };
  return re$2(e.path).reduce((f, h) => {
    for (const y of te$2(h)) {
      const p = be$1(t, y);
      let d = i ? p : p.split("/*", 1)[0];
      d = d.split("/").map((m) => m.startsWith(":") || m.startsWith("*") ? m : encodeURIComponent(m)).join("/"), f.push({ ...l, originalPath: h, pattern: d, matcher: xe$1(d, !i, e.matchFilters) });
    }
    return f;
  }, []);
}
function Be$1(e, t = 0) {
  return { routes: e, score: Se$1(e[e.length - 1]) * 1e4 - t, matcher(n) {
    const s = [];
    for (let r = e.length - 1; r >= 0; r--) {
      const o = e[r], c = o.matcher(n);
      if (!c)
        return null;
      s.unshift({ ...c, route: o });
    }
    return s;
  } };
}
function re$2(e) {
  return Array.isArray(e) ? e : [e];
}
function _e(e, t = "", n = [], s = []) {
  const r = re$2(e);
  for (let o = 0, c = r.length; o < c; o++) {
    const i = r[o];
    if (i && typeof i == "object") {
      i.hasOwnProperty("path") || (i.path = "");
      const l = je(i, t);
      for (const f of l) {
        n.push(f);
        const h = Array.isArray(i.children) && i.children.length === 0;
        if (i.children && !h)
          _e(i.children, f.pattern, n, s);
        else {
          const y = Be$1([...n], s.length);
          s.push(y);
        }
        n.pop();
      }
    }
  }
  return n.length ? s : s.sort((o, c) => c.score - o.score);
}
function M$1(e, t) {
  for (let n = 0, s = e.length; n < s; n++) {
    const r = e[n].matcher(t);
    if (r)
      return r;
  }
  return [];
}
function qe$1(e, t) {
  const n = new URL(Pe$1), s = createMemo((l) => {
    const f = e();
    try {
      return new URL(f, n);
    } catch {
      return console.error(`Invalid path ${f}`), l;
    }
  }, n, { equals: (l, f) => l.href === f.href }), r = createMemo(() => s().pathname), o = createMemo(() => s().search, true), c = createMemo(() => s().hash), i = () => "";
  return { get pathname() {
    return r();
  }, get search() {
    return o();
  }, get hash() {
    return c();
  }, get state() {
    return t();
  }, get key() {
    return i();
  }, query: ee$1(on$2(o, () => Z$1(s()))) };
}
let P;
function He$1() {
  return P;
}
let S = false;
function Ke$1() {
  return S;
}
function Ne$1(e) {
  S = e;
}
function Te$1(e, t, n, s = {}) {
  const { signal: [r, o], utils: c = {} } = e, i = c.parsePath || ((a) => a), l = c.renderPath || ((a) => a), f = c.beforeLeave || ye(), h = I("", s.base || "");
  if (h === void 0)
    throw new Error(`${h} is not a valid base path`);
  h && !r().value && o({ value: h, replace: true, scroll: false });
  const [y, p] = createSignal(false);
  let d;
  const m = (a, u) => {
    u.value === w() && u.state === F() || (d === void 0 && p(true), P = a, d = u, startTransition(() => {
      d === u && (A(d.value), se(d.state), resetErrorBoundaries(), isServer || W[1]([]));
    }).finally(() => {
      d === u && batch(() => {
        P = void 0, a === "navigate" && ie(d), p(false), d = void 0;
      });
    }));
  }, [w, A] = createSignal(r().value), [F, se] = createSignal(r().state), $ = qe$1(w, F), L = [], W = createSignal(isServer ? le() : []), z = createMemo(() => typeof s.transformUrl == "function" ? M$1(t(), s.transformUrl($.pathname)) : M$1(t(), $.pathname)), oe = ee$1(() => {
    const a = z(), u = {};
    for (let g = 0; g < a.length; g++)
      Object.assign(u, a[g].params);
    return u;
  }), H = { pattern: h, path: () => h, outlet: () => null, resolvePath(a) {
    return I(h, a);
  } };
  return createRenderEffect(on$2(r, (a) => m("native", a), { defer: true })), { base: H, location: $, params: oe, isRouting: y, renderPath: l, parsePath: i, navigatorFactory: ce, matches: z, beforeLeave: f, preloadRoute: ue, singleFlight: s.singleFlight === void 0 ? true : s.singleFlight, submissions: W };
  function ae(a, u, g) {
    untrack(() => {
      if (typeof u == "number") {
        u && (c.go ? c.go(u) : console.warn("Router integration does not support relative routing"));
        return;
      }
      const O = !u || u[0] === "?", { replace: j, resolve: R, scroll: B, state: b } = { replace: false, resolve: !O, scroll: true, ...g };
      let K;
      const x = R ? a.resolvePath(u) : I(O && (K = r().value) && K.split("?")[0] || "", u);
      if (x === void 0)
        throw new Error(`Path '${u}' is not a routable path`);
      if (L.length >= Ce$1)
        throw new Error("Too many redirects");
      const N = w();
      if (x !== N || b !== F())
        if (isServer) {
          const T = getRequestEvent();
          T && (T.response = { status: 302, headers: new Headers({ Location: x }) }), o({ value: x, replace: j, scroll: B, state: b });
        } else
          f.confirm(x, g) && (L.push({ value: N, replace: j, scroll: B, state: F() }), m("navigate", { value: x, state: b }));
    });
  }
  function ce(a) {
    return a = a || useContext(ne$1) || H, (u, g) => ae(a, u, g);
  }
  function ie(a) {
    const u = L[0];
    u && (o({ ...a, replace: u.replace, scroll: u.scroll }), L.length = 0);
  }
  function ue(a, u = {}) {
    const g = M$1(t(), a.pathname), O = P;
    P = "preload";
    for (let j in g) {
      const { route: R, params: B } = g[j];
      R.component && R.component.preload && R.component.preload();
      const { preload: b } = R;
      S = true, u.preloadData && b && runWithOwner(n(), () => b({ params: B, location: { pathname: a.pathname, search: a.search, hash: a.hash, query: Z$1(a), state: null, key: "" }, intent: "preload" })), S = false;
    }
    P = O;
  }
  function le() {
    const a = getRequestEvent();
    return a && a.router && a.router.submission ? [a.router.submission] : [];
  }
}
function Xe$1(e, t, n, s) {
  const { base: r, location: o, params: c } = e, { pattern: i, component: l, preload: f } = s().route, h = createMemo(() => s().path);
  l && l.preload && l.preload(), S = true;
  const y = f ? f({ params: c, location: o, intent: P || "initial" }) : void 0;
  return S = false, { parent: t, pattern: i, path: h, outlet: () => l ? createComponent(l, { params: c, location: o, data: y, get children() {
    return n();
  } }) : n(), resolvePath(d) {
    return I(r.path(), d, h());
  } };
}

var __defProp = Object.defineProperty;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __publicField = (obj, key, value) => {
  __defNormalProp(obj, key + "" , value);
  return value;
};
const Fr = "Location", Ir = 5e3, $r = 18e4;
let Je = /* @__PURE__ */ new Map();
isServer || setInterval(() => {
  const e = Date.now();
  for (let [t, n] of Je.entries())
    !n[3].count && e - n[0] > $r && Je.delete(t);
}, 3e5);
function Kt$1() {
  if (!isServer)
    return Je;
  const e = getRequestEvent();
  if (!e)
    throw new Error("Cannot find cache context");
  return (e.router || (e.router = {})).cache || (e.router.cache = /* @__PURE__ */ new Map());
}
function vc(e, t = true) {
  return startTransition(() => {
    const n = Date.now();
    kr(e, (o) => {
      t && (o[0] = 0), o[3][1](n);
    });
  });
}
function kr(e, t) {
  e && !Array.isArray(e) && (e = [e]);
  for (let n of Je.keys())
    (e === void 0 || Ar(n, e)) && t(Je.get(n));
}
function de(e, t) {
  e.GET && (e = e.GET);
  const n = (...o) => {
    const r = Kt$1(), i = He$1(), s = Ke$1(), a = getOwner() ? Le$1() : void 0, c = Date.now(), p = t + mn(o);
    let u = r.get(p), g;
    if (isServer) {
      const m = getRequestEvent();
      if (m) {
        const v = (m.router || (m.router = {})).dataOnly;
        if (v) {
          const h = m && (m.router.data || (m.router.data = {}));
          if (h && p in h)
            return h[p];
          if (Array.isArray(v) && !v.includes(p))
            return h[p] = void 0, Promise.resolve();
        }
      }
    }
    if (getListener() && !isServer && (g = true, onCleanup(() => u[3].count--)), u && u[0] && (isServer || i === "native" || u[3].count || Date.now() - u[0] < Ir)) {
      g && (u[3].count++, u[3][0]()), u[2] === "preload" && i !== "preload" && (u[0] = c);
      let m = u[1];
      return i !== "preload" && (m = "then" in u[1] ? u[1].then(d(false), d(true)) : d(false)(u[1]), !isServer && i === "navigate" && startTransition(() => u[3][1](u[0]))), s && "then" in m && m.catch(() => {
      }), m;
    }
    let f = !isServer && sharedConfig.context && sharedConfig.has(p) ? sharedConfig.load(p) : e(...o);
    if (u ? (u[0] = c, u[1] = f, u[2] = i, !isServer && i === "navigate" && startTransition(() => u[3][1](u[0]))) : (r.set(p, u = [c, f, i, createSignal(c)]), u[3].count = 0), g && (u[3].count++, u[3][0]()), isServer) {
      const m = getRequestEvent();
      if (m && m.router.dataOnly)
        return m.router.data[p] = f;
    }
    if (i !== "preload" && (f = "then" in f ? f.then(d(false), d(true)) : d(false)(f)), s && "then" in f && f.catch(() => {
    }), isServer && sharedConfig.context && sharedConfig.context.async && !sharedConfig.context.noHydrate) {
      const m = getRequestEvent();
      (!m || !m.serverOnly) && sharedConfig.context.serialize(p, f);
    }
    return f;
    function d(m) {
      return async (v) => {
        if (v instanceof Response) {
          const h = v.headers.get(Fr);
          if (h !== null) {
            if (a && h.startsWith("/"))
              startTransition(() => {
                a(h, { replace: true });
              });
            else if (!isServer)
              window.location.href = h;
            else if (isServer) {
              const w = getRequestEvent();
              w && (w.response = { status: 302, headers: new Headers({ Location: h }) });
            }
            return;
          }
          v.customBody && (v = await v.customBody());
        }
        if (m)
          throw v;
        return v;
      };
    }
  };
  return n.keyFor = (...o) => t + mn(o), n.key = t, n;
}
de.set = (e, t) => {
  const n = Kt$1(), o = Date.now();
  let r = n.get(e);
  r ? (r[0] = o, r[1] = t, r[2] = "preload") : (n.set(e, r = [o, t, , createSignal(o)]), r[3].count = 0);
};
de.clear = () => Kt$1().clear();
function Ar(e, t) {
  for (let n of t)
    if (e.startsWith(n))
      return true;
  return false;
}
function mn(e) {
  return JSON.stringify(e, (t, n) => _r(n) ? Object.keys(n).sort().reduce((o, r) => (o[r] = n[r], o), {}) : n);
}
function _r(e) {
  let t;
  return e != null && typeof e == "object" && (!(t = Object.getPrototypeOf(e)) || t === Object.prototype);
}
function bc(e, t) {
  let n, o = () => !n || n.state === "unresolved" ? void 0 : n.latest;
  [n] = createResource(() => Mr(e, untrack(o)), (i) => i, t);
  const r = () => n();
  return Object.defineProperty(r, "latest", { get() {
    return n.latest;
  } }), r;
}
class ee {
  static all() {
    return new ee();
  }
  static allSettled() {
    return new ee();
  }
  static any() {
    return new ee();
  }
  static race() {
    return new ee();
  }
  static reject() {
    return new ee();
  }
  static resolve() {
    return new ee();
  }
  catch() {
    return new ee();
  }
  then() {
    return new ee();
  }
  finally() {
    return new ee();
  }
}
function Mr(e, t) {
  if (isServer || !sharedConfig.context)
    return e(t);
  const n = fetch, o = Promise;
  try {
    return window.fetch = () => new ee(), Promise = ee, e(t);
  } finally {
    window.fetch = n, Promise = o;
  }
}
function hn(e, t = 302) {
  let n, o;
  typeof t == "number" ? n = { status: t } : ({ revalidate: o, ...n } = t, typeof n.status > "u" && (n.status = 302));
  const r = new Headers(n.headers);
  return r.set("Location", e), o && r.set("X-Revalidate", o.toString()), new Response(null, { ...n, headers: r });
}
function zr(e = {}) {
  let t, n = false;
  const o = (s) => {
    if (t && t !== s)
      throw new Error("Context conflict");
  };
  let r;
  if (e.asyncContext) {
    const s = e.AsyncLocalStorage || globalThis.AsyncLocalStorage;
    s ? r = new s() : console.warn("[unctx] `AsyncLocalStorage` is not provided.");
  }
  const i = () => {
    if (r && t === void 0) {
      const s = r.getStore();
      if (s !== void 0)
        return s;
    }
    return t;
  };
  return { use: () => {
    const s = i();
    if (s === void 0)
      throw new Error("Context is not available");
    return s;
  }, tryUse: () => i(), set: (s, l) => {
    l || o(s), t = s, n = true;
  }, unset: () => {
    t = void 0, n = false;
  }, call: (s, l) => {
    o(s), t = s;
    try {
      return r ? r.run(s, l) : l();
    } finally {
      n || (t = void 0);
    }
  }, async callAsync(s, l) {
    t = s;
    const a = () => {
      t = s;
    }, c = () => t === s ? a : void 0;
    yn.add(c);
    try {
      const p = r ? r.run(s, l) : l();
      return n || (t = void 0), await p;
    } finally {
      yn.delete(c);
    }
  } };
}
function Nr(e = {}) {
  const t = {};
  return { get(n, o = {}) {
    return t[n] || (t[n] = zr({ ...e, ...o })), t[n], t[n];
  } };
}
const vt$1 = typeof globalThis < "u" ? globalThis : typeof self < "u" ? self : typeof global < "u" ? global : {}, vn = "__unctx__", Br = vt$1[vn] || (vt$1[vn] = Nr()), Hr = (e, t = {}) => Br.get(e, t), bn = "__unctx_async_handlers__", yn = vt$1[bn] || (vt$1[bn] = /* @__PURE__ */ new Set());
function jr(e) {
  let t;
  const n = eo(e), o = { duplex: "half", method: e.method, headers: e.headers };
  return e.node.req.body instanceof ArrayBuffer ? new Request(n, { ...o, body: e.node.req.body }) : new Request(n, { ...o, get body() {
    return t || (t = Zr(e), t);
  } });
}
function Vr(e) {
  var _a2;
  return (_a2 = e.web) != null ? _a2 : e.web = { request: jr(e), url: eo(e) }, e.web.request;
}
function Wr() {
  return ei();
}
const Jn = Symbol("$HTTPEvent");
function qr(e) {
  return typeof e == "object" && (e instanceof H3Event || (e == null ? void 0 : e[Jn]) instanceof H3Event || (e == null ? void 0 : e.__is_event__) === true);
}
function V(e) {
  return function(...t) {
    var _a2;
    let n = t[0];
    if (qr(n))
      t[0] = n instanceof H3Event || n.__is_event__ ? n : n[Jn];
    else {
      if (!((_a2 = globalThis.app.config.server.experimental) == null ? void 0 : _a2.asyncContext))
        throw new Error("AsyncLocalStorage was not enabled. Use the `server.experimental.asyncContext: true` option in your app configuration to enable it. Or, pass the instance of HTTPEvent that you have as the first argument to the function.");
      if (n = Wr(), !n)
        throw new Error("No HTTPEvent found in AsyncLocalStorage. Make sure you are using the function within the server runtime.");
      t.unshift(n);
    }
    return e(...t);
  };
}
const eo = V(getRequestURL), Kr = V(getRequestIP), wn = V(setResponseStatus), xn = V(getResponseStatus), Ur = V(getResponseStatusText), at$1 = V(getResponseHeaders), Pn = V(getResponseHeader), Yr = V(setResponseHeader), Xr = V(appendResponseHeader), yc = V(sendRedirect), wc = V(getCookie), xc = V(setCookie), Pc = V(setHeader), Zr = V(getRequestWebStream), Gr = V(removeResponseHeader), Qr = V(Vr);
function Jr() {
  var _a2;
  return Hr("nitro-app", { asyncContext: !!((_a2 = globalThis.app.config.server.experimental) == null ? void 0 : _a2.asyncContext), AsyncLocalStorage: AsyncLocalStorage });
}
function ei() {
  return Jr().use().event;
}
const Lt$1 = Symbol("fetchEvent");
function ti(e) {
  return { request: Qr(e), response: ri(e), clientAddress: Kr(e), locals: {}, nativeEvent: e };
}
function ni(e) {
  return { ...e };
}
function Sc(e) {
  if (!e[Lt$1]) {
    const t = ti(e);
    e[Lt$1] = t;
  }
  return e[Lt$1];
}
class oi {
  constructor(t) {
    __publicField(this, "event");
    this.event = t;
  }
  get(t) {
    const n = Pn(this.event, t);
    return Array.isArray(n) ? n.join(", ") : n || null;
  }
  has(t) {
    return this.get(t) !== void 0;
  }
  set(t, n) {
    return Yr(this.event, t, n);
  }
  delete(t) {
    return Gr(this.event, t);
  }
  append(t, n) {
    Xr(this.event, t, n);
  }
  getSetCookie() {
    const t = Pn(this.event, "Set-Cookie");
    return Array.isArray(t) ? t : [t];
  }
  forEach(t) {
    return Object.entries(at$1(this.event)).forEach(([n, o]) => t(Array.isArray(o) ? o.join(", ") : o, n, this));
  }
  entries() {
    return Object.entries(at$1(this.event)).map(([t, n]) => [t, Array.isArray(n) ? n.join(", ") : n])[Symbol.iterator]();
  }
  keys() {
    return Object.keys(at$1(this.event))[Symbol.iterator]();
  }
  values() {
    return Object.values(at$1(this.event)).map((t) => Array.isArray(t) ? t.join(", ") : t)[Symbol.iterator]();
  }
  [Symbol.iterator]() {
    return this.entries()[Symbol.iterator]();
  }
}
function ri(e) {
  return { get status() {
    return xn(e);
  }, set status(t) {
    wn(e, t);
  }, get statusText() {
    return Ur(e);
  }, set statusText(t) {
    wn(e, xn(e), t);
  }, headers: new oi(e) };
}
function Ee(e, t, n) {
  if (typeof e != "function")
    throw new Error("Export from a 'use server' module must be a function");
  const o = "";
  return new Proxy(e, { get(r, i, s) {
    return i === "url" ? `${o}/_server?id=${encodeURIComponent(t)}&name=${encodeURIComponent(n)}` : i === "GET" ? s : r[i];
  }, apply(r, i, s) {
    const l = getRequestEvent();
    if (!l)
      throw new Error("Cannot call server function outside of a request");
    const a = ni(l);
    return a.locals.serverFunctionMeta = { id: t + "#" + n }, a.serverOnly = true, provideRequestEvent(a, () => e.apply(i, s));
  } });
}
const lt$1 = { sanity: { projectId: "sg9zb269", dataset: "production", apiVersion: "X" }, isProduction: false }, Oe = createClient({ projectId: lt$1.sanity.projectId, dataset: lt$1.sanity.dataset, useCdn: lt$1.isProduction, apiVersion: lt$1.sanity.apiVersion, perspective: "published" }), ii = `
    *[_type == "project" && slug.current == $slug] [0] {
      ...,
      "slug": slug.current,
      "thumbnail": {
          ...thumbnail,
          "asset": thumbnail.asset->
      },
      "services": coalesce(services[]->{
          _id,
          title,
          'slug': slug.current
      }, []),
      "gallery": coalesce(gallery[]{
        ...,
        "asset": asset->
      }, null)
    }
`, si = `
    *[_type == "project" && slug.current != $slug && array::intersects(services[]->slug.current, $serviceSlugs)] [$start...$end] | order(_createdAt desc) {
        _id,
        "slug": slug.current,
        "thumbnail": {
            ...thumbnail,
            "asset": thumbnail.asset->
        },
        "services": coalesce(services[]->{
            _id,
            title,
            'slug': slug.current
        }, [])
    }
`, ai = `
    *[_type == "settings"] [0] {
        ...cta,
        "points": cta.points
    }
`, li = `
  *[_type == "settings"] [0] {
    "contacts": coalesce(contacts, []),
    "social": coalesce(social, [])
  }
`, ci = `
    *[_type == "archives"] [0].projects
`, ui = `
    *[_type == "archives"] [0].services
`, di = `
  *[_type == 'contacts'] [0]
`, fi = `
    *[_type == "testimonial" && project->slug.current == $slug] [0] {
      _id,
      client,
      content,
      "url": coalesce(url, null),
      _createdAt,
      _updatedAt
    }
`, Ec = de(Ee(gi, "c_12473", "$$function0"), "cta-settings");
async function gi(e = true) {
  if (e)
    try {
      return Oe.fetch(ai);
    } catch {
      return;
    }
}
const Oc = de(Ee(pi, "c_12098", "$$function0"), "social-networks-and-contacts");
async function pi() {
  try {
    return Oe.fetch(li);
  } catch {
    return { social: [], contacts: [] };
  }
}
const Cc = de(Ee(mi, "c_11160", "$$function0"), "projects-archive");
de(Ee(hi, "c_11160", "$$function1"), "services-archive");
async function mi() {
  try {
    return Oe.fetch(ci);
  } catch {
    return;
  }
}
async function hi() {
  try {
    return Oe.fetch(ui);
  } catch {
    return;
  }
}
const Dc = de(Ee(vi, "c_11170", "$$function0"), "contacts-page");
async function vi() {
  try {
    return Oe.fetch(di);
  } catch {
    return;
  }
}
const Tc = de(Ee(bi, "c_10846", "$$function0"), "project");
async function bi(e) {
  try {
    const t = await Oe.fetch(ii, { slug: e });
    if (!t)
      throw hn("/projetos");
    return t;
  } catch {
    throw hn("/projetos");
  }
}
de(Ee(yi, "c_12805", "$$function0"), "related-projects");
async function yi(e, t, n = 0, o = 6) {
  try {
    return Oe.fetch(si, { slug: e, serviceSlugs: t, start: n, end: o });
  } catch {
    return [];
  }
}
const Rc = de(Ee(wi, "c_12518", "$$function0"), "cta-settings");
async function wi(e) {
  return Oe.fetch(fi, { slug: e });
}
var to = { equals: false }, A = (e) => typeof e == "function" && !e.length ? e() : e;
function xi(e, ...t) {
  return typeof e == "function" ? e(...t) : e;
}
var Pi = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function Sn(e) {
  const t = {};
  let n;
  for (; n = Pi.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Ut$1(e, t) {
  if (typeof e == "string") {
    if (typeof t == "string")
      return `${e};${t}`;
    e = Sn(e);
  } else
    typeof t == "string" && (t = Sn(t));
  return { ...e, ...t };
}
function Si(e) {
  return Object.prototype.toString.call(e) === "[object String]";
}
function Ei(e) {
  return typeof e == "function";
}
function Yt$1(e) {
  return (t) => `${e()}-${t}`;
}
function Qe(e, t) {
  return e ? e === t || e.contains(t) : false;
}
function no(e) {
  return ge(e).defaultView || window;
}
function ge(e) {
  return e ? e.ownerDocument || e : document;
}
var oo = ((e) => (e.Escape = "Escape", e.Enter = "Enter", e.Tab = "Tab", e.Space = " ", e.ArrowDown = "ArrowDown", e.ArrowLeft = "ArrowLeft", e.ArrowRight = "ArrowRight", e.ArrowUp = "ArrowUp", e.End = "End", e.Home = "Home", e.PageDown = "PageDown", e.PageUp = "PageUp", e))(oo || {});
function De(e, t) {
  return t && (Ei(t) ? t(e) : t[0](t[1], e)), e == null ? void 0 : e.defaultPrevented;
}
function Te(e) {
  return (t) => {
    for (const n of e)
      De(t, n);
  };
}
function Di(e) {
  return e.ctrlKey && !e.metaKey;
}
function Ti() {
}
function Ri(e) {
  return [e.clientX, e.clientY];
}
function Li(e, t) {
  const [n, o] = e;
  let r = false;
  const i = t.length;
  for (let s = i, l = 0, a = s - 1; l < s; a = l++) {
    const [c, p] = t[l], [u, g] = t[a], [, f] = t[a === 0 ? s - 1 : a - 1] || [0, 0], d = (p - g) * (n - c) - (c - u) * (o - p);
    if (g < p) {
      if (o >= g && o < p) {
        if (d === 0)
          return true;
        d > 0 && (o === g ? o > f && (r = !r) : r = !r);
      }
    } else if (p < g) {
      if (o > p && o <= g) {
        if (d === 0)
          return true;
        d < 0 && (o === g ? o < f && (r = !r) : r = !r);
      }
    } else if (o === p && (n >= u && n <= c || n >= c && n <= u))
      return true;
  }
  return r;
}
function Y$1(e, t) {
  return mergeProps$1(e, t);
}
function On() {
  return;
}
typeof document < "u" && (document.readyState !== "loading" ? On() : document.addEventListener("DOMContentLoaded", On));
function Xt$1(e) {
  var _a2;
  const [t, n] = createSignal((_a2 = e.defaultValue) == null ? void 0 : _a2.call(e)), o = createMemo(() => {
    var _a3;
    return ((_a3 = e.value) == null ? void 0 : _a3.call(e)) !== void 0;
  }), r = createMemo(() => {
    var _a3;
    return o() ? (_a3 = e.value) == null ? void 0 : _a3.call(e) : t();
  });
  return [r, (s) => {
    untrack(() => {
      var _a3;
      const l = xi(s, r());
      return Object.is(l, r()) || (o() || n(l), (_a3 = e.onChange) == null ? void 0 : _a3.call(e, l)), l;
    });
  }];
}
function Fi(e) {
  const [t, n] = Xt$1(e);
  return [() => {
    var _a2;
    return (_a2 = t()) != null ? _a2 : false;
  }, n];
}
var Ii = /* @__PURE__ */ new Set(["Avst", "Arab", "Armi", "Syrc", "Samr", "Mand", "Thaa", "Mend", "Nkoo", "Adlm", "Rohg", "Hebr"]), $i = /* @__PURE__ */ new Set(["ae", "ar", "arc", "bcc", "bqi", "ckb", "dv", "fa", "glk", "he", "ku", "mzn", "nqo", "pnb", "ps", "sd", "ug", "ur", "yi"]);
function ki(e) {
  var _a2;
  if (Intl.Locale) {
    const n = (_a2 = new Intl.Locale(e).maximize().script) != null ? _a2 : "";
    return Ii.has(n);
  }
  const t = e.split("-")[0];
  return $i.has(t);
}
function Ai(e) {
  return ki(e) ? "rtl" : "ltr";
}
function ro() {
  let e = typeof navigator < "u" && (navigator.language || navigator.userLanguage) || "en-US";
  try {
    Intl.DateTimeFormat.supportedLocalesOf([e]);
  } catch {
    e = "en-US";
  }
  return { locale: e, direction: Ai(e) };
}
var Mt$1 = ro(), Xe = /* @__PURE__ */ new Set();
function Cn() {
  Mt$1 = ro();
  for (const e of Xe)
    e(Mt$1);
}
function _i() {
  const e = { locale: "en-US", direction: "ltr" }, [t, n] = createSignal(Mt$1), o = createMemo(() => isServer ? e : t());
  return onMount(() => {
    Xe.size === 0 && window.addEventListener("languagechange", Cn), Xe.add(n), onCleanup(() => {
      Xe.delete(n), Xe.size === 0 && window.removeEventListener("languagechange", Cn);
    });
  }), { locale: () => o().locale, direction: () => o().direction };
}
var Mi = createContext$1();
function zi() {
  const e = _i();
  return useContext(Mi) || e;
}
function Ni(e = {}) {
  const [t, n] = Fi({ value: () => A(e.open), defaultValue: () => !!A(e.defaultOpen), onChange: (s) => {
    var _a2;
    return (_a2 = e.onOpenChange) == null ? void 0 : _a2.call(e, s);
  } }), o = () => {
    n(true);
  }, r = () => {
    n(false);
  };
  return { isOpen: t, setIsOpen: n, open: o, close: r, toggle: () => {
    t() ? r() : o();
  } };
}
function io(e, t) {
  const [n, o] = createSignal(Dn(t == null ? void 0 : t()));
  return createEffect(() => {
    var _a2;
    o(((_a2 = e()) == null ? void 0 : _a2.tagName.toLowerCase()) || Dn(t == null ? void 0 : t()));
  }), n;
}
function Dn(e) {
  return Si(e) ? e : void 0;
}
function te$1(e) {
  const [t, n] = splitProps(e, ["as"]);
  if (!t.as)
    throw new Error("[kobalte]: Polymorphic is missing the required `as` prop.");
  return createComponent$1(Dynamic, mergeProps(n, { get component() {
    return t.as;
  } }));
}
var Bi = Object.defineProperty, Pt$1 = (e, t) => {
  for (var n in t)
    Bi(e, n, { get: t[n], enumerable: true });
}, Hi = {};
Pt$1(Hi, { Button: () => so, Root: () => ot$1 });
var ji = ["button", "color", "file", "image", "reset", "submit"];
function Vi(e) {
  const t = e.tagName.toLowerCase();
  return t === "button" ? true : t === "input" && e.type ? ji.indexOf(e.type) !== -1 : false;
}
function ot$1(e) {
  let t;
  const n = Y$1({ type: "button" }, e), [o, r] = splitProps(n, ["ref", "type", "disabled"]), i = io(() => t, () => "button"), s = createMemo(() => {
    const c = i();
    return c == null ? false : Vi({ tagName: c, type: o.type });
  }), l = createMemo(() => i() === "input"), a = createMemo(() => i() === "a" && (void 0 ) != null);
  return createComponent$1(te$1, mergeProps({ as: "button", get type() {
    return s() || l() ? o.type : void 0;
  }, get role() {
    return !s() && !a() ? "button" : void 0;
  }, get tabIndex() {
    return !s() && !a() && !o.disabled ? 0 : void 0;
  }, get disabled() {
    return s() || l() ? o.disabled : void 0;
  }, get "aria-disabled"() {
    return !s() && !l() && o.disabled ? true : void 0;
  }, get "data-disabled"() {
    return o.disabled ? "" : void 0;
  } }, r));
}
var so = ot$1;
function Ze(e) {
  return (t) => (e(t), () => e(void 0));
}
var x$2 = (e) => typeof e == "function" ? e() : e, Zt$1 = (...e) => e.some((t) => !!t()), Wi = (e) => {
  const t = createMemo(() => {
    const s = x$2(e.element);
    if (s)
      return getComputedStyle(s);
  }), n = () => {
    var _a2, _b;
    return (_b = (_a2 = t()) == null ? void 0 : _a2.animationName) != null ? _b : "none";
  }, [o, r] = createSignal(x$2(e.show) ? "present" : "hidden");
  let i = "none";
  return createEffect((s) => {
    const l = x$2(e.show);
    return untrack(() => {
      var _a2;
      if (s === l)
        return l;
      const a = i, c = n();
      l ? r("present") : c === "none" || ((_a2 = t()) == null ? void 0 : _a2.display) === "none" ? r("hidden") : r(s === true && a !== c ? "hiding" : "hidden");
    }), l;
  }), createEffect(() => {
    const s = x$2(e.element);
    if (!s)
      return;
    const l = (c) => {
      c.target === s && (i = n());
    }, a = (c) => {
      const u = n().includes(c.animationName);
      c.target === s && u && o() === "hiding" && r("hidden");
    };
    s.addEventListener("animationstart", l), s.addEventListener("animationcancel", a), s.addEventListener("animationend", a), onCleanup(() => {
      s.removeEventListener("animationstart", l), s.removeEventListener("animationcancel", a), s.removeEventListener("animationend", a);
    });
  }), { present: () => o() === "present" || o() === "hiding", state: o, setState: r };
}, qi = Wi, zt$1 = qi;
const Ve = (...e) => twMerge(je$3(e));
function We(...e) {
  return twMerge(clsx(e));
}
const Ki = cva("inline-flex items-center border px-2.5 py-0.5 font-semibold text-xs transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2", { variants: { variant: { default: "border-transparent bg-primary text-primary-foreground hover:bg-primary/80", secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80", destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80", outline: "text-foreground" } }, defaultVariants: { variant: "default" } }), Lc = (e) => {
  const [t, n] = splitProps(e, ["class", "variant", "round"]);
  return ssrElement("div", mergeProps({ get class() {
    return We(Ki({ variant: t.variant }), t.round ? "rounded-full" : "rounded-md", t.class);
  } }, n), void 0, true);
}, St$1 = cva("inline-flex items-center justify-center rounded-md font-medium text-sm transition-[color,background-color,box-shadow] focus-visible:outline-none focus-visible:ring-[1.5px] focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50", { variants: { variant: { default: "bg-primary text-primary-foreground shadow hover:bg-primary/90", destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90", outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground", secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80", ghost: "hover:bg-accent hover:text-accent-foreground", link: "text-primary underline-offset-4 hover:underline" }, size: { default: "h-9 px-4 py-2", sm: "h-8 rounded-md px-3 text-xs", lg: "h-10 rounded-md px-8", icon: "h-9 w-9" } }, defaultVariants: { variant: "default", size: "default" } }), Fc = (e) => {
  const [t, n] = splitProps(e, ["class", "variant", "size"]);
  return createComponent$1(so, mergeProps({ get class() {
    return Ve(St$1({ size: t.size, variant: t.variant }), t.class);
  } }, n));
};
createContext$1(null);
var Ui = ["id", "name", "validationState", "required", "disabled", "readOnly"];
function Yi(e) {
  const t = `form-control-${createUniqueId()}`, n = Y$1({ id: t }, e), [o, r] = createSignal(), [i, s] = createSignal(), [l, a] = createSignal(), [c, p] = createSignal(), u = (m, v, h) => {
    const w = h != null || o() != null;
    return [h, o(), w && v != null ? m : void 0].filter(Boolean).join(" ") || void 0;
  }, g = (m) => [l(), c(), m].filter(Boolean).join(" ") || void 0, f = createMemo(() => ({ "data-valid": A(n.validationState) === "valid" ? "" : void 0, "data-invalid": A(n.validationState) === "invalid" ? "" : void 0, "data-required": A(n.required) ? "" : void 0, "data-disabled": A(n.disabled) ? "" : void 0, "data-readonly": A(n.readOnly) ? "" : void 0 }));
  return { formControlContext: { name: () => {
    var _a2;
    return (_a2 = A(n.name)) != null ? _a2 : A(n.id);
  }, dataset: f, validationState: () => A(n.validationState), isRequired: () => A(n.required), isDisabled: () => A(n.disabled), isReadOnly: () => A(n.readOnly), labelId: o, fieldId: i, descriptionId: l, errorMessageId: c, getAriaLabelledBy: u, getAriaDescribedBy: g, generateId: Yt$1(() => A(n.id)), registerLabel: Ze(r), registerField: Ze(s), registerDescription: Ze(a), registerErrorMessage: Ze(p) } };
}
var ao = createContext$1();
function rt$1() {
  const e = useContext(ao);
  if (e === void 0)
    throw new Error("[kobalte]: `useFormControlContext` must be used within a `FormControlContext.Provider` component");
  return e;
}
function Gt$1(e) {
  const t = rt$1(), n = Y$1({ id: t.generateId("description") }, e);
  return createEffect(() => onCleanup(t.registerDescription(n.id))), createComponent$1(te$1, mergeProps({ as: "div" }, () => t.dataset(), n));
}
function Qt$1(e) {
  const t = rt$1(), n = Y$1({ id: t.generateId("error-message") }, e), [o, r] = splitProps(n, ["forceMount"]), i = () => t.validationState() === "invalid";
  return createEffect(() => {
    i() && onCleanup(t.registerErrorMessage(r.id));
  }), createComponent$1(Show, { get when() {
    return o.forceMount || i();
  }, get children() {
    return createComponent$1(te$1, mergeProps({ as: "div" }, () => t.dataset(), r));
  } });
}
function Jt$1(e) {
  let t;
  const n = rt$1(), o = Y$1({ id: n.generateId("label") }, e), [r, i] = splitProps(o, ["ref"]), s = io(() => t, () => "label");
  return createEffect(() => onCleanup(n.registerLabel(i.id))), createComponent$1(te$1, mergeProps({ as: "label", get for() {
    return s() === "label" ? n.fieldId() : void 0;
  } }, () => n.dataset(), i));
}
var Xi = ["id", "aria-label", "aria-labelledby", "aria-describedby"];
function Zi(e) {
  const t = rt$1(), n = Y$1({ id: t.generateId("field") }, e);
  return createEffect(() => onCleanup(t.registerField(A(n.id)))), { fieldProps: { id: () => A(n.id), ariaLabel: () => A(n["aria-label"]), ariaLabelledBy: () => t.getAriaLabelledBy(A(n.id), A(n["aria-label"]), A(n["aria-labelledby"])), ariaDescribedBy: () => t.getAriaDescribedBy(A(n["aria-describedby"])) } };
}
function Gi(e, t) {
  createEffect(on$2(e, (n) => {
    if (n == null)
      return;
    const o = Qi(n);
    o != null && (o.addEventListener("reset", t, { passive: true }), onCleanup(() => {
      o.removeEventListener("reset", t);
    }));
  }));
}
function Qi(e) {
  return Ji(e) ? e.form : e.closest("form");
}
function Ji(e) {
  return e.matches("textarea, input, select, button");
}
var es = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function ts(e) {
  const t = {};
  let n;
  for (; n = es.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function lo(e, t) {
  return typeof t == "string" && (t = ts(t)), { ...e, ...t };
}
var co = (e, t) => (e && (typeof e == "function" ? e(t) : e[0](e[1], t)), t.defaultPrevented), ze = (e, t) => {
  var _a2;
  if (e.contains(t))
    return true;
  let n = t;
  for (; n; ) {
    if (n === e)
      return true;
    n = (_a2 = n._$host) != null ? _a2 : n.parentElement;
  }
  return false;
}, ns = (e) => createMemo(() => {
  var _a2, _b;
  return (_b = (_a2 = x$2(e.element)) == null ? void 0 : _a2.tagName.toLowerCase()) != null ? _b : e.fallback;
}), os = ns, uo = (e) => typeof e == "function" && e.length > 0, rs = ["button", "color", "file", "image", "reset", "submit"], is = (e, t) => e === "button" ? true : e === "input" && t !== void 0 ? rs.indexOf(t) !== -1 : false, Ne = (e) => e ? "" : void 0, ss = (e) => {
  const [t, n] = splitProps(e, ["as"]), o = createMemo(() => {
    var _a2;
    return (_a2 = t.as) != null ? _a2 : "div";
  });
  return createMemo(() => {
    const i = o();
    switch (typeof i) {
      case "function":
        return untrack(() => i(n));
      case "string":
        return createComponent$1(Dynamic, mergeProps({ component: i }, n));
    }
  });
}, it$1 = ss, as = (e) => {
  const [t, n] = createSignal(null), [o, r] = splitProps(e, ["ref", "type"]), i = os({ element: t, fallback: "button" }), s = createMemo(() => is(i(), o.type));
  return createComponent$1(it$1, mergeProps({ as: "button", get type() {
    return s() ? "button" : void 0;
  }, get role() {
    return s() ? void 0 : "button";
  } }, r));
}, fo = as, mt$1 = /* @__PURE__ */ new Map(), go = (e, t) => {
  if (mt$1.has(e))
    return mt$1.get(e);
  const n = createContext$1(t);
  return mt$1.set(e, n), n;
}, po = (e) => {
  const t = mt$1.get(e);
  if (t)
    return useContext(t);
}, ct$1 = /* @__PURE__ */ new Map(), ls = (e) => {
  createEffect(() => {
    var _a2, _b;
    const t = (_a2 = x$2(e.style)) != null ? _a2 : {}, n = (_b = x$2(e.properties)) != null ? _b : [], o = {};
    for (const i in t)
      o[i] = e.element.style[i];
    const r = ct$1.get(e.key);
    r ? r.activeCount++ : ct$1.set(e.key, { activeCount: 1, originalStyles: o, properties: n.map((i) => i.key) }), Object.assign(e.element.style, e.style);
    for (const i of n)
      e.element.style.setProperty(i.key, i.value);
    onCleanup(() => {
      var _a3;
      const i = ct$1.get(e.key);
      if (i) {
        if (i.activeCount !== 1) {
          i.activeCount--;
          return;
        }
        ct$1.delete(e.key);
        for (const [s, l] of Object.entries(i.originalStyles))
          e.element.style[s] = l;
        for (const s of i.properties)
          e.element.style.removeProperty(s);
        e.element.style.length === 0 && e.element.removeAttribute("style"), (_a3 = e.cleanup) == null ? void 0 : _a3.call(e);
      }
    });
  });
}, Nt$1 = ls, cs = (e) => {
  const t = mergeProps$1({ enabled: true }, e);
  createEffect(() => {
    x$2(t.enabled) && (document.addEventListener("keydown", n), onCleanup(() => {
      document.removeEventListener("keydown", n);
    }));
  });
  const n = (o) => {
    o.key === "Escape" && t.onEscapeKeyDown(o);
  };
}, us = cs, ds = (e) => {
  const t = mergeProps$1({ enabled: true }, e);
  createEffect(() => {
    const { body: n } = document;
    x$2(t.enabled) && Nt$1({ key: "no-pointer-events", element: n, style: { pointerEvents: "none" } });
  });
}, fs = ds, gs = "dismissible.outsideFocus", ps = { bubbles: false, cancelable: true }, ms = (e) => {
  const t = mergeProps$1({ enabled: true, ignorePointerEvents: false }, e);
  let n = false;
  createEffect(() => {
    if (!x$2(t.enabled))
      return;
    const i = x$2(t.ignorePointerEvents);
    document.addEventListener("focusin", o), i && document.addEventListener("pointerdown", r), onCleanup(() => {
      document.removeEventListener("focusin", o), i && document.removeEventListener("pointerdown", r);
    });
  });
  const o = (i) => {
    if (n) {
      n = false;
      return;
    }
    const s = x$2(t.element);
    if (s && !ze(s, i.target)) {
      const l = new CustomEvent(gs, ps);
      s.dispatchEvent(l), t.onFocus(l);
    }
  }, r = () => {
    n = true;
  };
}, hs = ms, vs = (e) => {
  const t = mergeProps$1({ enabled: true, strategy: "pointerup" }, e);
  createEffect(() => {
    if (!x$2(t.enabled))
      return;
    const o = x$2(t.strategy);
    document.addEventListener(o, n), onCleanup(() => {
      document.removeEventListener(o, n);
    });
  });
  const n = (o) => {
    const r = x$2(t.element), i = x$2(t.ignore);
    r && !ze(r, o.target) && !(i && i.some((s) => s && ze(s, o.target))) && t.onPointer(o);
  };
}, bs = vs, ys = (e) => {
  const t = mergeProps$1({ dismissOnEscapeKeyDown: true, dismissOnOutsideFocus: true, dismissOnOutsidePointer: true, outsidePointerStrategy: "pointerup", noOutsidePointerEvents: true }, e);
  us({ enabled: () => x$2(t.dismissOnEscapeKeyDown), onEscapeKeyDown: (n) => {
    var _a2;
    (_a2 = t.onEscapeKeyDown) == null ? void 0 : _a2.call(t, n), n.defaultPrevented || t.onDismiss("escapeKey");
  } }), hs({ enabled: () => x$2(t.dismissOnOutsideFocus), onFocus: (n) => {
    var _a2;
    (_a2 = t.onOutsideFocus) == null ? void 0 : _a2.call(t, n), n.defaultPrevented || t.onDismiss("outsideFocus");
  }, element: () => x$2(t.element), ignorePointerEvents: () => x$2(t.noOutsidePointerEvents) || x$2(t.dismissOnOutsidePointer) }), bs({ enabled: () => x$2(t.dismissOnOutsidePointer), strategy: () => x$2(t.outsidePointerStrategy), ignore: () => {
    var _a2;
    return (_a2 = x$2(t.outsidePointerIgnore)) != null ? _a2 : [];
  }, onPointer: (n) => {
    var _a2;
    if ((_a2 = t.onOutsidePointer) == null ? void 0 : _a2.call(t, n), !n.defaultPrevented) {
      const o = n.button === 0 && n.ctrlKey === true;
      if (n.button === 2 || o)
        return;
      t.onDismiss("outsidePointer");
    }
  }, element: () => x$2(t.element) }), fs({ enabled: () => x$2(t.noOutsidePointerEvents) });
}, ws = ys, Bt$1 = createContext$1(), xs = (e) => {
  const t = mergeProps$1({ dismissibleId: createUniqueId() }, e);
  return createMemo(() => {
    if (useContext(Bt$1))
      return createComponent$1(Tn, e);
    const [r, i] = createSignal([t.dismissibleId]), s = (a) => {
      i((c) => [...c, a]);
    }, l = (a) => {
      i((c) => c.filter((p) => p !== a));
    };
    return createComponent$1(Bt$1.Provider, { value: { layers: r, onLayerShow: s, onLayerDismiss: l }, get children() {
      return createComponent$1(Tn, e);
    } });
  });
}, [Ic, Ft$1] = createSignal([]), Tn = (e) => {
  const t = mergeProps$1({ enabled: true, dismissibleId: createUniqueId(), dismissOnEscapeKeyDown: true, dismissOnOutsideFocus: true, dismissOnOutsidePointer: true, outsidePointerStrategy: "pointerup", noOutsidePointerEvents: true }, e), [n, o] = splitProps(t, ["enabled", "children", "dismissOnEscapeKeyDown", "dismissOnOutsideFocus", "dismissOnOutsidePointer", "outsidePointerStrategy", "outsidePointerIgnore", "noOutsidePointerEvents", "onDismiss"]), r = useContext(Bt$1);
  onCleanup(() => {
    r.onLayerDismiss(t.dismissibleId), Ft$1((a) => a.filter((c) => c !== t.dismissibleId));
  }), createEffect(() => {
    n.enabled ? (r.onLayerShow(t.dismissibleId), Ft$1((a) => [...a, t.dismissibleId])) : (r.onLayerDismiss(t.dismissibleId), Ft$1((a) => a.filter((c) => c !== t.dismissibleId)));
  });
  const i = () => r.layers()[r.layers().length - 1] === t.dismissibleId;
  ws({ dismissOnEscapeKeyDown: () => x$2(n.dismissOnEscapeKeyDown) && i() && n.enabled, dismissOnOutsideFocus: () => x$2(n.dismissOnOutsideFocus) && i() && n.enabled, dismissOnOutsidePointer: () => x$2(n.dismissOnOutsidePointer) && i() && n.enabled, outsidePointerStrategy: n.outsidePointerStrategy, outsidePointerIgnore: n.outsidePointerIgnore, noOutsidePointerEvents: () => x$2(n.noOutsidePointerEvents) && n.enabled, onDismiss: (a) => {
    n.onDismiss(a);
  }, ...o });
  const s = createMemo(() => n.children), l = () => {
    const a = s();
    return uo(a) ? a({ get isLastLayer() {
      return i();
    } }) : a;
  };
  return untrack(() => l());
}, Ps = xs, Ss = Ps;
function Es(e) {
  const [t, n] = createSignal(e.initialValue), o = () => {
    var _a2;
    return ((_a2 = e.value) == null ? void 0 : _a2.call(e)) !== void 0;
  }, r = () => {
    var _a2;
    return o() ? (_a2 = e.value) == null ? void 0 : _a2.call(e) : t();
  };
  return [r, (s) => untrack(() => {
    var _a2;
    let l;
    return typeof s == "function" ? l = s(r()) : l = s, Object.is(l, r()) || (o() || n(l), (_a2 = e.onChange) == null ? void 0 : _a2.call(e, l)), l;
  })];
}
var Os = Es, W = (e) => typeof e == "function" ? e() : e, Cs = /((?:--)?(?:\w+-?)+)\s*:\s*([^;]*)/g;
function Ds(e) {
  const t = {};
  let n;
  for (; n = Cs.exec(e); )
    t[n[1]] = n[2];
  return t;
}
function Ts(e, t) {
  return typeof t == "string" && (t = Ds(t)), { ...e, ...t };
}
var Be = (e) => requestAnimationFrame(() => requestAnimationFrame(e)), Rs = 'a[href]:not([tabindex="-1"]), button:not([tabindex="-1"]), input:not([tabindex="-1"]), textarea:not([tabindex="-1"]), select:not([tabindex="-1"]), details:not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])', It$1 = "focusTrap.initialFocus", $t$1 = "focusTrap.finalFocus", Rn = { bubbles: false, cancelable: true }, Ls = (e) => {
  const t = mergeProps$1({ enabled: true, observeChanges: true, restoreFocus: true }, e), [n, o] = createSignal(null), r = createMemo(() => {
    var _a2;
    const d = n();
    return d ? (_a2 = d[0]) != null ? _a2 : null : null;
  }), i = createMemo(() => {
    var _a2;
    const d = n();
    return d ? (_a2 = d[d.length - 1]) != null ? _a2 : null : null;
  });
  let s = null;
  const l = () => {
    a(W(t.element)), (document.activeElement === null || document.activeElement === document.body) && c(W(t.element));
  };
  createEffect(() => {
    const d = W(t.element);
    if (d && W(t.enabled)) {
      s = document.activeElement, untrack(() => {
        a(d), c(d);
      });
      const m = new MutationObserver(l);
      W(t.observeChanges) && m.observe(d, { subtree: true, childList: true, attributes: true, attributeFilter: ["tabindex"] }), onCleanup(() => {
        W(t.observeChanges) && m.disconnect(), o(null), f(d);
      });
    }
  }), createEffect(() => {
    const d = n();
    d === null || d.length !== 0 || (document.addEventListener("keydown", g), onCleanup(() => {
      document.removeEventListener("keydown", g);
    }));
  }), createEffect(() => {
    const d = r();
    d && (d.addEventListener("keydown", p), onCleanup(() => {
      d.removeEventListener("keydown", p);
    }));
  }), createEffect(() => {
    const d = i();
    d && (d.addEventListener("keydown", u), onCleanup(() => {
      d.removeEventListener("keydown", u);
    }));
  });
  const a = (d) => {
    o(Array.from(d.querySelectorAll(Rs)));
  }, c = (d) => {
    var _a2, _b;
    const m = (_b = (_a2 = W(t.initialFocusElement)) != null ? _a2 : r()) != null ? _b : d, v = t.onInitialFocus;
    let h;
    v && (h = new CustomEvent(It$1, Rn), d.addEventListener(It$1, v), d.dispatchEvent(h), d.removeEventListener(It$1, v)), (h == null ? void 0 : h.defaultPrevented) !== true && Be(() => m.focus());
  }, p = (d) => {
    d.key === "Tab" && d.shiftKey && (d.preventDefault(), i().focus());
  }, u = (d) => {
    d.key === "Tab" && !d.shiftKey && (d.preventDefault(), r().focus());
  }, g = (d) => {
    d.key === "Tab" && d.preventDefault();
  }, f = (d) => {
    var _a2;
    if (!W(t.restoreFocus))
      return;
    const v = (_a2 = W(t.finalFocusElement)) != null ? _a2 : s;
    if (!v)
      return;
    let h;
    const w = t.onFinalFocus;
    w && (h = new CustomEvent($t$1, Rn), d.addEventListener($t$1, w), d.dispatchEvent(h), d.removeEventListener($t$1, w)), (h == null ? void 0 : h.defaultPrevented) !== true && Be(() => v.focus());
  };
}, Fs = Ls, Is = Fs, $s = (e) => {
  let t, n = false;
  return () => n ? t : (n = true, t = createMemo(e));
}, ks = $s, As = (e, t) => {
  switch (t) {
    case "x":
      return [e.clientWidth, e.scrollLeft, e.scrollWidth];
    case "y":
      return [e.clientHeight, e.scrollTop, e.scrollHeight];
  }
}, _s = (e, t) => {
  const n = getComputedStyle(e), o = t === "x" ? n.overflowX : n.overflowY;
  return o === "auto" || o === "scroll" || e.tagName === "HTML" && o === "visible";
}, Ms = (e, t, n) => {
  var _a2;
  const o = t === "x" && window.getComputedStyle(e).direction === "rtl" ? -1 : 1;
  let r = e, i = 0, s = 0, l = false;
  do {
    const [a, c, p] = As(r, t), u = p - a - o * c;
    (c !== 0 || u !== 0) && _s(r, t) && (i += u, s += c), r === (n != null ? n : document.documentElement) ? l = true : r = (_a2 = r._$host) != null ? _a2 : r.parentElement;
  } while (r && !l);
  return [i, s];
}, [Ln, Fn] = createSignal([]), zs = (e) => Ln().indexOf(e) === Ln().length - 1, Ns = (e) => {
  const t = mergeProps$1({ element: null, enabled: true, hideScrollbar: true, preventScrollbarShift: true, preventScrollbarShiftMode: "padding", restoreScrollPosition: true, allowPinchZoom: false }, e), n = createUniqueId();
  let o = [0, 0], r = null, i = null;
  createEffect(() => {
    x$2(t.enabled) && (Fn((c) => [...c, n]), onCleanup(() => {
      Fn((c) => c.filter((p) => p !== n));
    }));
  }), createEffect(() => {
    if (!x$2(t.enabled) || !x$2(t.hideScrollbar))
      return;
    const { body: c } = document, p = window.innerWidth - c.offsetWidth;
    if (x$2(t.preventScrollbarShift)) {
      const u = { overflow: "hidden" }, g = [];
      p > 0 && (x$2(t.preventScrollbarShiftMode) === "padding" ? u.paddingRight = `calc(${window.getComputedStyle(c).paddingRight} + ${p}px)` : u.marginRight = `calc(${window.getComputedStyle(c).marginRight} + ${p}px)`, g.push({ key: "--scrollbar-width", value: `${p}px` }));
      const f = window.scrollY, d = window.scrollX;
      Nt$1({ key: "prevent-scroll", element: c, style: u, properties: g, cleanup: () => {
        x$2(t.restoreScrollPosition) && p > 0 && window.scrollTo(d, f);
      } });
    } else
      Nt$1({ key: "prevent-scroll", element: c, style: { overflow: "hidden" } });
  }), createEffect(() => {
    !zs(n) || !x$2(t.enabled) || (document.addEventListener("wheel", l, { passive: false }), document.addEventListener("touchstart", s, { passive: false }), document.addEventListener("touchmove", a, { passive: false }), onCleanup(() => {
      document.removeEventListener("wheel", l), document.removeEventListener("touchstart", s), document.removeEventListener("touchmove", a);
    }));
  });
  const s = (c) => {
    o = In(c), r = null, i = null;
  }, l = (c) => {
    const p = c.target, u = x$2(t.element), g = Bs(c), f = Math.abs(g[0]) > Math.abs(g[1]) ? "x" : "y", d = f === "x" ? g[0] : g[1], m = $n(p, f, d, u);
    let v;
    u && ze(u, p) ? v = !m : v = true, v && c.cancelable && c.preventDefault();
  }, a = (c) => {
    const p = x$2(t.element), u = c.target;
    let g;
    if (c.touches.length === 2)
      g = !x$2(t.allowPinchZoom);
    else {
      if (r == null || i === null) {
        const f = In(c).map((m, v) => o[v] - m), d = Math.abs(f[0]) > Math.abs(f[1]) ? "x" : "y";
        r = d, i = d === "x" ? f[0] : f[1];
      }
      if (u.type === "range")
        g = false;
      else {
        const f = $n(u, r, i, p);
        p && ze(p, u) ? g = !f : g = true;
      }
    }
    g && c.cancelable && c.preventDefault();
  };
}, Bs = (e) => [e.deltaX, e.deltaY], In = (e) => e.changedTouches[0] ? [e.changedTouches[0].clientX, e.changedTouches[0].clientY] : [0, 0], $n = (e, t, n, o) => {
  const r = o !== null && ze(o, e), [i, s] = Ms(e, t, r ? o : void 0);
  return !(n > 0 && Math.abs(i) <= 1 || n < 0 && Math.abs(s) < 1);
}, Hs = Ns, js = Hs, Vs = (e) => {
  const t = mergeProps$1({ initialRegistered: false }, e), [n, o] = createSignal(t.initialRegistered);
  return [createMemo(() => {
    if (n())
      return x$2(t.value);
  }), () => {
    o(true);
  }, () => {
    o(false);
  }];
}, kn = Vs, mo = createContext$1(), Ws = (e) => e === void 0 ? mo : go(`dialog-${e}`), ho = (e) => {
  if (e === void 0) {
    const n = useContext(mo);
    if (!n)
      throw new Error("[corvu]: Dialog context not found. Make sure to wrap Dialog components in <Dialog.Root>");
    return n;
  }
  const t = po(`dialog-${e}`);
  if (!t)
    throw new Error(`[corvu]: Dialog context with id "${e}" not found. Make sure to wrap Dialog components in <Dialog.Root contextId="${e}">`);
  return t;
}, vo = createContext$1(), qs = (e) => e === void 0 ? vo : go(`dialog-internal-${e}`), Fe = (e) => {
  if (e === void 0) {
    const n = useContext(vo);
    if (!n)
      throw new Error("[corvu]: Dialog context not found. Make sure to wrap Dialog components in <Dialog.Root>");
    return n;
  }
  const t = po(`dialog-internal-${e}`);
  if (!t)
    throw new Error(`[corvu]: Dialog context with id "${e}" not found. Make sure to wrap Dialog components in <Dialog.Root contextId="${e}">`);
  return t;
}, Ks = (e) => {
  const [t, n] = splitProps(e, ["contextId", "onClick"]), o = createMemo(() => Fe(t.contextId));
  return createComponent$1(fo, mergeProps({ onClick: (i) => {
    !co(t.onClick, i) && o().setOpen(false);
  }, "aria-label": "close", "data-corvu-dialog-close": "" }, n));
}, Us = Ks, Ys = (e) => {
  const [t, n] = splitProps(e, ["forceMount", "contextId", "ref", "style"]), o = createMemo(() => Fe(t.contextId)), r = () => Zt$1(o().open, () => t.forceMount, o().contentPresent), i = createMemo(() => o().open() || o().contentPresent());
  return createComponent$1(Ss, { get element() {
    return o().contentRef;
  }, get enabled() {
    return i();
  }, get dismissibleId() {
    return o().dialogId();
  }, onDismiss: () => o().setOpen(false), get dismissOnEscapeKeyDown() {
    return o().closeOnEscapeKeyDown;
  }, get dismissOnOutsideFocus() {
    return o().closeOnOutsideFocus;
  }, get dismissOnOutsidePointer() {
    return o().closeOnOutsidePointer;
  }, get outsidePointerStrategy() {
    return o().closeOnOutsidePointerStrategy;
  }, outsidePointerIgnore: () => [o().triggerRef()], get noOutsidePointerEvents() {
    return o().noOutsidePointerEvents;
  }, get onEscapeKeyDown() {
    return o().onEscapeKeyDown;
  }, get onOutsideFocus() {
    return o().onOutsideFocus;
  }, get onOutsidePointer() {
    return o().onOutsidePointer;
  }, children: (s) => createComponent$1(Show, { get when() {
    return r();
  }, get children() {
    return createComponent$1(it$1, mergeProps({ as: "div", get style() {
      return lo({ "pointer-events": s.isLastLayer ? "auto" : void 0 }, t.style);
    }, get id() {
      return o().dialogId();
    }, get role() {
      return o().role();
    }, tabIndex: "-1", get "aria-describedby"() {
      return o().descriptionId();
    }, get "aria-labelledby"() {
      return o().labelId();
    }, get "aria-modal"() {
      return o().modal() ? "true" : "false";
    }, get "data-closed"() {
      return Ne(!o().open());
    }, get "data-open"() {
      return Ne(o().open());
    }, "data-corvu-dialog-content": "" }, n));
  } }) });
}, Xs = Ys, Zs = (e) => {
  const [t, n] = splitProps(e, ["contextId"]), o = createMemo(() => Fe(t.contextId));
  return createEffect(() => {
    const r = o();
    r.registerDescriptionId(), onCleanup(() => r.unregisterDescriptionId());
  }), createComponent$1(it$1, mergeProps({ as: "p", get id() {
    return o().descriptionId();
  }, "data-corvu-dialog-description": "" }, n));
}, Gs = Zs, Qs = (e) => {
  const [t, n] = splitProps(e, ["contextId"]), o = createMemo(() => Fe(t.contextId));
  return createEffect(() => {
    const r = o();
    r.registerLabelId(), onCleanup(() => r.unregisterLabelId());
  }), createComponent$1(it$1, mergeProps({ as: "h2", get id() {
    return o().labelId();
  }, "data-corvu-dialog-label": "" }, n));
}, Js = Qs, ea = (e) => {
  const [t, n] = splitProps(e, ["forceMount", "contextId", "ref", "style"]), o = createMemo(() => Fe(t.contextId)), r = () => Zt$1(o().open, () => t.forceMount, o().overlayPresent);
  return createComponent$1(Show, { get when() {
    return r();
  }, get children() {
    return createComponent$1(it$1, mergeProps({ as: "div", get style() {
      return lo({ "pointer-events": "auto" }, t.style);
    }, "aria-hidden": "true", get "data-closed"() {
      return Ne(!o().open());
    }, get "data-open"() {
      return Ne(o().open());
    }, "data-corvu-dialog-overlay": "" }, n));
  } });
}, ta = ea, na = (e) => {
  const [t, n] = splitProps(e, ["forceMount", "contextId"]), o = createMemo(() => Fe(t.contextId)), r = () => Zt$1(o().open, () => t.forceMount, o().contentPresent, o().overlayPresent);
  return createComponent$1(Show, { get when() {
    return r();
  }, get children() {
    return createComponent$1(Portal, n);
  } });
}, bo = na, kt$1 = true, oa = (e) => {
  const t = mergeProps$1({ role: "dialog", initialOpen: false, modal: true, closeOnEscapeKeyDown: true, closeOnOutsideFocus: () => {
    var _a2;
    return (_a2 = e.trapFocus) != null ? _a2 : true;
  }, closeOnOutsidePointer: () => {
    var _a2;
    return (_a2 = e.modal) != null ? _a2 : kt$1;
  }, closeOnOutsidePointerStrategy: "pointerup", noOutsidePointerEvents: () => {
    var _a2;
    return (_a2 = e.modal) != null ? _a2 : kt$1;
  }, preventScroll: () => {
    var _a2;
    return (_a2 = e.modal) != null ? _a2 : kt$1;
  }, hideScrollbar: true, preventScrollbarShift: true, preventScrollbarShiftMode: "padding", restoreScrollPosition: true, allowPinchZoom: true, trapFocus: true, restoreFocus: true, dialogId: createUniqueId() }, e), [n, o] = Os({ value: () => t.open, initialValue: t.initialOpen, onChange: t.onOpenChange }), [r, i, s] = kn({ value: () => {
    var _a2;
    return (_a2 = t.labelId) != null ? _a2 : createUniqueId();
  } }), [l, a, c] = kn({ value: () => {
    var _a2;
    return (_a2 = t.descriptionId) != null ? _a2 : createUniqueId();
  } }), [p, u] = createSignal(null), [g, f] = createSignal(null), [d, m] = createSignal(null), { present: v } = zt$1({ show: n, element: g }), { present: h } = zt$1({ show: n, element: d });
  Is({ element: g, enabled: () => n() && t.trapFocus, initialFocusElement: () => {
    var _a2;
    return (_a2 = t.initialFocusEl) != null ? _a2 : null;
  }, restoreFocus: () => t.restoreFocus, finalFocusElement: () => {
    var _a2;
    return (_a2 = t.finalFocusEl) != null ? _a2 : null;
  }, onFinalFocus: t.onFinalFocus, onInitialFocus: t.onInitialFocus }), js({ element: g, enabled: () => v() && x$2(t.preventScroll), hideScrollbar: () => t.hideScrollbar, preventScrollbarShift: () => t.preventScrollbarShift, preventScrollbarShiftMode: () => t.preventScrollbarShiftMode, restoreScrollPosition: () => t.restoreScrollPosition, allowPinchZoom: () => t.allowPinchZoom });
  const w = { get role() {
    return t.role;
  }, get open() {
    return n();
  }, setOpen: o, get modal() {
    return t.modal;
  }, get closeOnEscapeKeyDown() {
    return t.closeOnEscapeKeyDown;
  }, get closeOnOutsideFocus() {
    return x$2(t.closeOnOutsideFocus);
  }, get closeOnOutsidePointer() {
    return x$2(t.closeOnOutsidePointer);
  }, get closeOnOutsidePointerStrategy() {
    return t.closeOnOutsidePointerStrategy;
  }, get noOutsidePointerEvents() {
    return x$2(t.noOutsidePointerEvents);
  }, get preventScroll() {
    return x$2(t.preventScroll);
  }, get hideScrollbar() {
    return t.hideScrollbar;
  }, get preventScrollbarShift() {
    return x$2(t.preventScrollbarShift);
  }, get preventScrollbarShiftMode() {
    return t.preventScrollbarShiftMode;
  }, get restoreScrollPosition() {
    return t.restoreScrollPosition;
  }, get allowPinchZoom() {
    return t.allowPinchZoom;
  }, get trapFocus() {
    return t.trapFocus;
  }, get restoreFocus() {
    return t.restoreFocus;
  }, get initialFocusEl() {
    return t.initialFocusEl;
  }, get finalFocusEl() {
    return t.finalFocusEl;
  }, get contentPresent() {
    return v();
  }, get contentRef() {
    return g();
  }, get overlayPresent() {
    return h();
  }, get overlayRef() {
    return d();
  }, get dialogId() {
    return t.dialogId;
  }, get labelId() {
    return r();
  }, get descriptionId() {
    return l();
  } }, D = ks(() => t.children), T = () => {
    const S = D()();
    return uo(S) ? S(w) : S;
  };
  return createMemo(() => {
    const S = Ws(t.contextId), F = qs(t.contextId);
    return createComponent$1(S.Provider, { value: { role: () => t.role, open: n, setOpen: o, modal: () => t.modal, closeOnEscapeKeyDown: () => t.closeOnEscapeKeyDown, closeOnOutsideFocus: () => x$2(t.closeOnOutsideFocus), closeOnOutsidePointer: () => x$2(t.closeOnOutsidePointer), closeOnOutsidePointerStrategy: () => t.closeOnOutsidePointerStrategy, noOutsidePointerEvents: () => x$2(t.noOutsidePointerEvents), preventScroll: () => x$2(t.preventScroll), hideScrollbar: () => t.hideScrollbar, preventScrollbarShift: () => x$2(t.preventScrollbarShift), preventScrollbarShiftMode: () => t.preventScrollbarShiftMode, restoreScrollPosition: () => t.restoreScrollPosition, allowPinchZoom: () => t.allowPinchZoom, trapFocus: () => t.trapFocus, restoreFocus: () => t.restoreFocus, initialFocusEl: () => t.initialFocusEl, finalFocusEl: () => t.finalFocusEl, contentPresent: v, contentRef: g, overlayPresent: h, overlayRef: d, dialogId: () => t.dialogId, labelId: r, descriptionId: l }, get children() {
      return createComponent$1(F.Provider, { get value() {
        return { role: () => t.role, open: n, setOpen: o, modal: () => t.modal, closeOnEscapeKeyDown: () => t.closeOnEscapeKeyDown, onEscapeKeyDown: t.onEscapeKeyDown, closeOnOutsideFocus: () => x$2(t.closeOnOutsideFocus), closeOnOutsidePointer: () => x$2(t.closeOnOutsidePointer), closeOnOutsidePointerStrategy: () => t.closeOnOutsidePointerStrategy, onOutsideFocus: t.onOutsideFocus, onOutsidePointer: t.onOutsidePointer, noOutsidePointerEvents: () => x$2(t.noOutsidePointerEvents), preventScroll: () => x$2(t.preventScroll), hideScrollbar: () => t.hideScrollbar, preventScrollbarShift: () => x$2(t.preventScrollbarShift), preventScrollbarShiftMode: () => t.preventScrollbarShiftMode, restoreScrollPosition: () => t.restoreScrollPosition, allowPinchZoom: () => t.allowPinchZoom, trapFocus: () => t.trapFocus, restoreFocus: () => t.restoreFocus, initialFocusEl: () => t.initialFocusEl, finalFocusEl: () => t.finalFocusEl, contentPresent: v, contentRef: g, overlayPresent: h, overlayRef: d, dialogId: () => t.dialogId, labelId: r, registerLabelId: i, unregisterLabelId: s, descriptionId: l, registerDescriptionId: a, unregisterDescriptionId: c, setContentRef: f, setOverlayRef: m, triggerRef: p, setTriggerRef: u };
      }, get children() {
        return untrack(() => T());
      } });
    } });
  });
}, ra = oa, ia = (e) => {
  const [t, n] = splitProps(e, ["contextId", "ref", "onClick"]), o = createMemo(() => Fe(t.contextId));
  return createComponent$1(fo, mergeProps({ onClick: (i) => {
    !co(t.onClick, i) && o().setOpen((s) => !s);
  }, get "aria-controls"() {
    return o().dialogId();
  }, get "aria-expanded"() {
    return o().open() ? "true" : "false";
  }, "aria-haspopup": "dialog", get "data-closed"() {
    return Ne(!o().open());
  }, get "data-open"() {
    return Ne(o().open());
  }, "data-corvu-dialog-trigger": "" }, n));
}, sa = ia, aa = Object.assign(ra, { Trigger: sa, Portal: bo, Overlay: ta, Content: Xs, Label: Js, Description: Gs, Close: Us, useContext: ho }), pe = aa, la = (e) => typeof e == "function" && e.length > 0, se$1 = (e) => e ? "" : void 0, ca = (e, t) => {
  switch (t) {
    case "x":
      return [e.clientWidth, e.scrollLeft, e.scrollWidth];
    case "y":
      return [e.clientHeight, e.scrollTop, e.scrollHeight];
  }
}, ua = (e, t) => {
  const n = getComputedStyle(e), o = t === "x" ? n.overflowX : n.overflowY;
  return o === "auto" || o === "scroll" || e.tagName === "HTML" && o === "visible";
}, da = (e, t, n) => {
  var _a2;
  const o = t === "x" && window.getComputedStyle(e).direction === "rtl" ? -1 : 1;
  let r = e, i = 0, s = 0, l = false;
  do {
    const [a, c, p] = ca(r, t), u = p - a - o * c;
    (c !== 0 || u !== 0) && ua(r, t) && (i += u, s += c), r === (n != null ? n : document.documentElement) ? l = true : r = (_a2 = r._$host) != null ? _a2 : r.parentElement;
  } while (r && !l);
  return [i, s];
}, ht$1 = /* @__PURE__ */ new Map(), yo = (e, t) => {
  if (ht$1.has(e))
    return ht$1.get(e);
  const n = createContext$1(t);
  return ht$1.set(e, n), n;
}, wo = (e) => {
  const t = ht$1.get(e);
  if (t)
    return useContext(t);
};
function fa(e) {
  const [t, n] = createSignal(e.initialValue), o = () => {
    var _a2;
    return ((_a2 = e.value) == null ? void 0 : _a2.call(e)) !== void 0;
  }, r = () => {
    var _a2;
    return o() ? (_a2 = e.value) == null ? void 0 : _a2.call(e) : t();
  };
  return [r, (s) => untrack(() => {
    var _a2;
    let l;
    return typeof s == "function" ? l = s(r()) : l = s, Object.is(l, r()) || (o() || n(l), (_a2 = e.onChange) == null ? void 0 : _a2.call(e, l)), l;
  })];
}
var An = fa, ga = (e) => {
  let t, n = false;
  return () => n ? t : (n = true, t = createMemo(e));
}, pa = ga, ma = (e) => {
  const [t, n] = createSignal(0);
  createEffect(() => {
    const i = W(e.element);
    if (!i)
      return;
    r(i);
    const s = new ResizeObserver(o);
    s.observe(i), onCleanup(() => {
      s.disconnect();
    });
  });
  const o = ([i]) => {
    r(i.target);
  }, r = (i) => {
    switch (W(e.dimension)) {
      case "width":
        n(i.offsetWidth);
        break;
      case "height":
        n(i.offsetHeight);
        break;
    }
  };
  return t;
}, ha = ma;
function va(e) {
  const t = mergeProps$1({ enabled: true, dimension: "both" }, e), [n, o] = createSignal(false), [r, i] = createSignal(null);
  let s = null;
  createEffect(() => {
    const c = W(t.element), p = W(t.enabled);
    if (!c || !p)
      return;
    const u = new ResizeObserver(l);
    u.observe(c), c.addEventListener("transitionend", a), onCleanup(() => {
      u.disconnect(), c.removeEventListener("transitionend", a), a();
    });
  });
  const l = ([c]) => {
    if (n())
      return;
    const p = c.target, u = [p.offsetWidth, p.offsetHeight], g = W(t.dimension);
    g === "both" ? s ? s[0] !== u[0] && s[1] !== u[1] && (batch(() => {
      i(s), o(true);
    }), Be(() => {
      i(u), parseFloat(getComputedStyle(c.target).transitionDuration) === 0 && a();
    })) : s = u : s ? ut$1(g, s) !== ut$1(g, u) && (batch(() => {
      i(ut$1(g, s)), o(true);
    }), Be(() => {
      i(ut$1(g, u)), parseFloat(getComputedStyle(c.target).transitionDuration) === 0 && a();
    })) : s = u;
  }, a = () => {
    if (!n())
      return;
    const c = W(t.element);
    c ? s = [c.offsetWidth, c.offsetHeight] : s = null, batch(() => {
      o(false), i(null);
    });
  };
  return { transitioning: n, transitionSize: r };
}
var ut$1 = (e, t) => {
  switch (e) {
    case "width":
      return t[0];
    case "height":
      return t[1];
  }
}, ba = va, ya = ba, wa = (e, t) => e.length > 0 ? () => e(untrack(t)) : e;
function xa(e, t) {
  let n = 0;
  const o = e.map((r, i) => createMemo(() => (n = i, r()), void 0, DEV ? { name: i + 1 + ". source", equals: false } : to));
  return createMemo(() => o.map((r) => r())[n], void 0, t);
}
function _n(e, t, n) {
  let o = () => t;
  const [r, i] = createSignal(t, to), s = createMemo(wa(e, () => o()), t);
  return [o = xa([r, s], n), (l) => i(() => typeof l == "function" ? l(untrack(o)) : l)];
}
var Pa = (e) => createComponent$1(pe.Close, mergeProps({ "data-corvu-drawer-close": "", "data-corvu-dialog-close": null }, e)), Sa = Pa, xo = (e, t, n, o) => {
  if (n === void 0 || o === void 0)
    return { value: e, offset: dt$1(e, t) };
  const r = o[n - 1] !== void 0 && o[n - 1] !== null ? dt$1(o[n - 1], t) : void 0, i = o[n] !== void 0 && o[n] !== null ? dt$1(o[n], t) : void 0;
  return { value: e, offset: dt$1(e, t), lowerBreakPoint: i, upperBreakPoint: r };
}, dt$1 = (e, t) => {
  if (typeof e == "number")
    return t - e * t;
  if (!e.endsWith("px"))
    throw new Error(`[corvu] Snap and break points must be a number or a string ending with 'px'. Got ${e}`);
  return t - parseInt(e, 10);
}, Ea = (e, t, n, o) => {
  const r = Mn("upper", e, o ? n : t), i = Mn("lower", e, o ? n : t);
  return r ? i ? i.upperBreakPoint === void 0 || r.lowerBreakPoint === void 0 ? Math.abs(i.offset - n) < Math.abs(r.offset - n) ? i : r : n < r.lowerBreakPoint ? i : r : r : i;
}, Mn = (e, t, n) => t.reduce((o, r) => e == "upper" && r.offset >= n && (!o || r.offset < o.offset) || e == "lower" && r.offset <= n && (!o || r.offset > o.offset) ? r : o, void 0), Oa = (e, t, n) => {
  let o = e, r = false;
  do {
    if (o.hasAttribute("data-corvu-no-drag") || o.type === "range" || o.tagName === "SELECT" && n === "mouse")
      return false;
    o === t ? r = true : o = o.parentElement;
  } while (o && !r);
  return true;
}, Po = createContext$1(), Ca = (e) => e === void 0 ? Po : yo(`drawer-${e}`), Da = (e) => {
  if (e === void 0) {
    const n = useContext(Po);
    if (!n)
      throw new Error("[corvu]: Drawer context not found. Make sure to wrap Drawer components in <Drawer.Root>");
    return n;
  }
  const t = wo(`drawer-${e}`);
  if (!t)
    throw new Error(`[corvu]: Drawer context with id "${e}" not found. Make sure to wrap Drawer components in <Drawer.Root contextId="${e}">`);
  return t;
}, So = createContext$1(), Ta = (e) => e === void 0 ? So : yo(`drawer-internal-${e}`), Eo = (e) => {
  if (e === void 0) {
    const n = useContext(So);
    if (!n)
      throw new Error("[corvu]: Drawer context not found. Make sure to wrap Drawer components in <Drawer.Root>");
    return n;
  }
  const t = wo(`drawer-internal-${e}`);
  if (!t)
    throw new Error(`[corvu]: Drawer context with id "${e}" not found. Make sure to wrap Drawer components in <Drawer.Root contextId="${e}">`);
  return t;
}, Ra = (e) => {
  const [t, n] = splitProps(e, ["contextId", "style"]);
  let o = false, r = null, i = [0, 0], s, l = 0;
  const a = createMemo(() => Eo(t.contextId)), c = createMemo(() => pe.useContext(t.contextId)), p = createMemo(() => a().snapPoints().map((y, S) => xo(y, a().drawerSize(), S, a().breakPoints()))), u = createMemo(() => {
    switch (a().side()) {
      case "top":
        return `translate3d(0, ${-a().translate()}px, 0)`;
      case "bottom":
        return `translate3d(0, ${a().translate()}px, 0)`;
      case "right":
        return `translate3d(${a().translate()}px, 0, 0)`;
      case "left":
        return `translate3d(${-a().translate()}px, 0, 0)`;
    }
  }), g = createMemo(() => {
    const y = a().transitionSize();
    if (y !== null)
      switch (a().side()) {
        case "top":
        case "bottom":
          return `${y}px`;
      }
  }), f = createMemo(() => {
    const y = a().transitionSize();
    if (y !== null)
      switch (a().side()) {
        case "left":
        case "right":
          return `${y}px`;
      }
  });
  createEffect(() => {
    c().open() && (document.addEventListener("pointermove", m), document.addEventListener("touchmove", v), document.addEventListener("pointerup", w), document.addEventListener("touchend", D), document.addEventListener("contextmenu", T), onCleanup(() => {
      document.removeEventListener("pointermove", m), document.removeEventListener("touchmove", v), document.removeEventListener("pointerup", w), document.removeEventListener("touchend", D), document.removeEventListener("contextmenu", T);
    }));
  }), createEffect(() => {
    a().transitionState() === "closing" && a().setIsDragging(false);
  });
  const d = (y) => {
    y.button === 0 && Oa(y.target, c().contentRef(), y.pointerType) && a().transitionState() !== "closing" && (o = true, a().handleScrollableElements() && (i = [y.clientX, y.clientY]));
  }, m = (y) => {
    h(y.target, y.clientX, y.clientY);
  }, v = (y) => {
    y.touches[0] && h(y.target, y.touches[0].clientX, y.touches[0].clientY);
  }, h = (y, S, F) => {
    if (!o)
      return;
    if (!a().isDragging() || r === null) {
      const B = window.getSelection();
      if (B && B.toString().length > 0) {
        T();
        return;
      }
      if (a().handleScrollableElements()) {
        const H = [S, F].map((U, J) => i[J] - U), Q = Math.abs(H[0]) > Math.abs(H[1]) ? "x" : "y", k = Q === "x" ? H[0] : H[1];
        if (Math.abs(k) < 0.3)
          return;
        const P = c().contentRef(), [_, N] = da(y, Q, P);
        if (k > 0 && Math.abs(_) > 1 || k < 0 && Math.abs(N) > 0) {
          T();
          return;
        }
      }
      switch (a().side()) {
        case "top":
        case "bottom":
          r = F;
          break;
        case "right":
        case "left":
          r = S;
      }
      s = /* @__PURE__ */ new Date(), l = a().translate(), batch(() => {
        a().setIsDragging(true), a().setTransitionState(null);
      });
    }
    let I;
    switch (a().side()) {
      case "top":
        I = -(r - F);
        break;
      case "bottom":
        I = r - F;
        break;
      case "right":
        I = r - S;
        break;
      case "left":
        I = -(r - S);
        break;
    }
    I -= a().resolvedActiveSnapPoint().offset, I > 0 && (I = a().dampFunction(I));
    const z = /* @__PURE__ */ new Date();
    z.getTime() - s.getTime() > a().velocityCacheReset() && (s = z, l = a().translate()), a().setTranslate(-I);
  }, w = (y) => {
    y.pointerType !== "touch" && T();
  }, D = (y) => {
    y.touches.length === 0 && T();
  }, T = () => {
    if (o = false, !a().isDragging())
      return;
    const y = /* @__PURE__ */ new Date(), S = a().velocityFunction(-(l - a().translate()), y.getTime() - s.getTime() || 1), F = a().translate() * S, I = Ea(p(), a().translate(), F, a().allowSkippingSnapPoints());
    batch(() => {
      a().setTransitionState("snapping"), a().setIsDragging(false);
    }), batch(() => {
      a().setActiveSnapPoint(I.value), I.offset === a().drawerSize() ? c().setOpen(false) : (a().setTranslate(I.offset), parseFloat(a().drawerStyles().transitionDuration) === 0 && a().setTransitionState(null));
    });
  };
  return createComponent$1(pe.Content, mergeProps({ get contextId() {
    return t.contextId;
  }, get style() {
    return Ts({ transform: u(), "transition-duration": a().isDragging() ? "0ms" : void 0, height: g(), width: f() }, t.style);
  }, onPointerDown: d, onTouchStart: (y) => {
    y.touches.length === 1 && (r = null);
  }, onTransitionEnd: () => {
    batch(() => {
      a().transitionState() === "closing" && a().closeDrawer(), a().transitionState() !== "resizing" && a().setTransitionState(null);
    });
  }, get "data-closing"() {
    return se$1(a().transitionState() === "closing");
  }, get "data-opening"() {
    return se$1(a().transitionState() === "opening");
  }, get "data-resizing"() {
    return se$1(a().transitionState() === "resizing");
  }, get "data-snapping"() {
    return se$1(a().transitionState() === "snapping");
  }, get "data-transitioning"() {
    return se$1(a().isTransitioning());
  }, "data-corvu-drawer-content": "", "data-corvu-dialog-content": null }, n));
}, La = Ra, Fa = (e) => createComponent$1(pe.Description, mergeProps({ "data-corvu-drawer-description": "", "data-corvu-dialog-description": null }, e)), Ia = Fa, $a = (e) => createComponent$1(pe.Label, mergeProps({ "data-corvu-drawer-label": "", "data-corvu-dialog-label": null }, e)), ka = $a, Aa = (e) => {
  const [t, n] = splitProps(e, ["contextId"]), o = createMemo(() => Eo(t.contextId));
  return createComponent$1(pe.Overlay, mergeProps({ get contextId() {
    return t.contextId;
  }, get "data-closing"() {
    return se$1(o().transitionState() === "closing");
  }, get "data-opening"() {
    return se$1(o().transitionState() === "opening");
  }, get "data-resizing"() {
    return se$1(o().transitionState() === "resizing");
  }, get "data-snapping"() {
    return se$1(o().transitionState() === "snapping");
  }, get "data-transitioning"() {
    return se$1(o().isTransitioning());
  }, "data-corvu-drawer-overlay": "", "data-corvu-dialog-overlay": null }, n));
}, _a = Aa, Ma = (e) => {
  const t = mergeProps$1({ initialOpen: false, snapPoints: [0, 1], breakPoints: [null], defaultSnapPoint: 1, side: "bottom", dampFunction: (k) => 6 * Math.log(k + 1), velocityFunction: (k, P) => {
    const _ = k / P;
    return _ < 1 && _ > -1 ? 1 : _;
  }, velocityCacheReset: 200, allowSkippingSnapPoints: true, handleScrollableElements: true, transitionResize: false, closeOnOutsidePointer: true, allowPinchZoom: false }, e), [n, o] = splitProps(t, ["snapPoints", "breakPoints", "defaultSnapPoint", "activeSnapPoint", "onActiveSnapPointChange", "side", "dampFunction", "velocityFunction", "velocityCacheReset", "allowSkippingSnapPoints", "handleScrollableElements", "transitionResize", "open", "initialOpen", "onOpenChange", "closeOnOutsidePointer", "contextId", "children"]), [r, i] = An({ value: () => n.open, initialValue: n.initialOpen, onChange: n.onOpenChange }), [s, l] = An({ value: () => n.activeSnapPoint, initialValue: 0, onChange: n.onActiveSnapPointChange }), [a, c] = createSignal(), { transitioning: p, transitionSize: u } = ya({ element: () => {
    var _a2, _b;
    return (_b = (_a2 = a()) == null ? void 0 : _a2.contentRef()) != null ? _b : null;
  }, enabled: () => r() && n.transitionResize, dimension: () => {
    switch (n.side) {
      case "top":
      case "bottom":
        return "height";
      case "left":
      case "right":
        return "width";
    }
  } }), [g, f] = createSignal(false), [d, m] = _n(() => p() ? "resizing" : null), v = createMemo(() => {
    var _a2;
    const k = (_a2 = a()) == null ? void 0 : _a2.contentRef();
    if (k)
      return getComputedStyle(k);
  }), [h, w] = createSignal(false);
  createEffect(() => {
    const k = r();
    untrack(() => {
      h() !== k && (k ? (w(true), Be(() => {
        batch(() => {
          m("opening"), l(n.defaultSnapPoint);
        }), parseFloat(v().transitionDuration) === 0 && m(null);
      })) : (batch(() => {
        m("closing"), l(0);
      }), Be(() => {
        parseFloat(v().transitionDuration) === 0 && D();
      })));
    });
  });
  const D = () => {
    batch(() => {
      w(false), m(null);
    });
  }, T = ha({ element: () => {
    var _a2, _b;
    return (_b = (_a2 = a()) == null ? void 0 : _a2.contentRef()) != null ? _b : null;
  }, dimension: () => {
    switch (n.side) {
      case "top":
      case "bottom":
        return "height";
      case "left":
      case "right":
        return "width";
    }
  } }), y = createMemo(() => xo(s(), T())), [S, F] = _n(() => y().offset), I = createMemo(() => T() ? (T() - S()) / T() : 0), z = { get snapPoints() {
    return n.snapPoints;
  }, get breakPoints() {
    return n.breakPoints;
  }, get defaultSnapPoint() {
    return n.defaultSnapPoint;
  }, get activeSnapPoint() {
    return s();
  }, setActiveSnapPoint: l, get side() {
    return n.side;
  }, get isDragging() {
    return g();
  }, get isTransitioning() {
    return d() !== null;
  }, get transitionState() {
    return d();
  }, get openPercentage() {
    return I();
  }, get translate() {
    return S();
  }, get velocityCacheReset() {
    return n.velocityCacheReset;
  }, get allowSkippingSnapPoints() {
    return n.allowSkippingSnapPoints;
  }, get handleScrollableElements() {
    return n.handleScrollableElements;
  }, get transitionResize() {
    return n.transitionResize;
  } }, B = pa(() => n.children), H = (k) => {
    c(pe.useContext(n.contextId));
    const P = B()();
    if (la(P)) {
      const _ = mergeProps$1(k, z);
      return P(_);
    }
    return P;
  };
  return createMemo(() => {
    const k = Ca(n.contextId), P = Ta(n.contextId);
    return untrack(() => createComponent$1(k.Provider, { value: { snapPoints: () => n.snapPoints, breakPoints: () => n.breakPoints, defaultSnapPoint: () => n.defaultSnapPoint, activeSnapPoint: s, setActiveSnapPoint: l, side: () => n.side, isDragging: g, isTransitioning: () => d() !== null, transitionState: d, openPercentage: I, translate: S, velocityCacheReset: () => n.velocityCacheReset, allowSkippingSnapPoints: () => n.allowSkippingSnapPoints, handleScrollableElements: () => n.handleScrollableElements, transitionResize: () => n.transitionResize }, get children() {
      return createComponent$1(P.Provider, { get value() {
        return { snapPoints: () => n.snapPoints, breakPoints: () => n.breakPoints, defaultSnapPoint: () => n.defaultSnapPoint, activeSnapPoint: s, setActiveSnapPoint: l, side: () => n.side, isDragging: g, isTransitioning: () => d() !== null, transitionState: d, openPercentage: I, translate: S, velocityCacheReset: () => n.velocityCacheReset, allowSkippingSnapPoints: () => n.allowSkippingSnapPoints, handleScrollableElements: () => n.handleScrollableElements, transitionResize: () => n.transitionResize, dampFunction: n.dampFunction, velocityFunction: n.velocityFunction, setIsDragging: f, setTranslate: F, drawerSize: T, resolvedActiveSnapPoint: y, drawerStyles: v, setTransitionState: m, transitionSize: u, closeDrawer: D };
      }, get children() {
        return createComponent$1(pe, mergeProps({ get open() {
          return h();
        }, onOpenChange: i, get contextId() {
          return n.contextId;
        }, get closeOnOutsidePointer() {
          return !g() && n.closeOnOutsidePointer;
        } }, o, { children: (_) => H(_) }));
      } });
    } }));
  });
}, za = Ma, Na = (e) => createComponent$1(pe.Trigger, mergeProps({ "data-corvu-drawer-trigger": "", "data-corvu-dialog-trigger": null }, e)), Ba = Na, Ha = Object.assign(za, { Trigger: Ba, Portal: bo, Overlay: _a, Content: La, Label: ka, Description: Ia, Close: Sa, useContext: Da, useDialogContext: ho }), Oo = Ha;
Oo.Trigger;
Oo.Close;
var Et$1 = ["<li", ">", "</li>"], ja = ["<ul", ">", "</ul>"], Va = {};
Pt$1(Va, { Ellipsis: () => Co, Item: () => To, Items: () => Ro, Next: () => Lo, Pagination: () => Ie, Previous: () => Fo, Root: () => Io });
function Co(e) {
  return ssr(Et$1, ssrHydrationKey(), escape(createComponent$1(te$1, mergeProps({ as: "div" }, e))));
}
var Do = createContext$1();
function Ot$1() {
  const e = useContext(Do);
  if (e === void 0)
    throw new Error("[kobalte]: `usePaginationContext` must be used within a `Pagination` component");
  return e;
}
function To(e) {
  const t = Ot$1(), [n, o] = splitProps(e, ["page", "onClick"]), r = () => t.page() === n.page, i = () => {
    t.setPage(n.page);
  };
  return ssr(Et$1, ssrHydrationKey(), escape(createComponent$1(ot$1, mergeProps({ get "aria-current"() {
    return r() ? "page" : void 0;
  }, get "data-current"() {
    return r() ? "" : void 0;
  }, get onClick() {
    return Te([n.onClick, i]);
  } }, o))));
}
function Ro(e) {
  const t = Ot$1(), n = createMemo(() => {
    const { count: o, siblingCount: r, page: i, fixedItems: s, showFirst: l, showLast: a } = t, c = o() < 2 * r() + (s() ? 6 : 4);
    if (c)
      return { renderItemsDirectly: c };
    const p = l() && i() - 1 > r(), u = a() && o() - i() > r();
    let g = i() - (l() ? 2 : 1) > r(), f = o() - i() - (a() ? 1 : 0) > r(), d = Math.min(i() - 1, r()), m = Math.min(o() - i(), r());
    if (s() !== false) {
      const v = d, h = m;
      d += Math.max(r() - h, 0), m += Math.max(r() - v, 0), p || m++, u || d++, s() === true && (g || m++, f || d++), i() - d - (l() ? 2 : 1) === 1 && (g = false, d++), o() - i() - m - (a() ? 1 : 0) === 1 && (f = false, m++);
    }
    return { showFirst: p, showLast: u, showFirstEllipsis: g, showLastEllipsis: f, previousSiblingCount: d, nextSiblingCount: m, renderItemsDirectly: c };
  });
  return createComponent$1(Show, { get when() {
    return n().renderItemsDirectly;
  }, get fallback() {
    return [createComponent$1(Show, { get when() {
      return n().showFirst;
    }, get children() {
      return t.renderItem(1);
    } }), createComponent$1(Show, { get when() {
      return n().showFirstEllipsis;
    }, get children() {
      return t.renderEllipsis();
    } }), createComponent$1(For, { get each() {
      return [...Array(n().previousSiblingCount).keys()].reverse();
    }, children: (o) => t.renderItem(t.page() - (o + 1)) }), t.renderItem(t.page()), createComponent$1(For, { get each() {
      return [...Array(n().nextSiblingCount).keys()];
    }, children: (o) => t.renderItem(t.page() + (o + 1)) }), createComponent$1(Show, { get when() {
      return n().showLastEllipsis;
    }, get children() {
      return t.renderEllipsis();
    } }), createComponent$1(Show, { get when() {
      return n().showLast;
    }, get children() {
      return t.renderItem(t.count());
    } })];
  }, get children() {
    return createComponent$1(For, { get each() {
      return [...Array(t.count()).keys()];
    }, children: (o) => t.renderItem(o + 1) });
  } });
}
function Lo(e) {
  const t = Ot$1(), [n, o] = splitProps(e, ["onClick"]), r = () => {
    t.setPage(t.page() + 1);
  }, i = () => t.page() === t.count();
  return ssr(Et$1, ssrHydrationKey(), escape(createComponent$1(ot$1, mergeProps({ get tabIndex() {
    return i() || t.page() === t.count() ? -1 : void 0;
  }, get disabled() {
    return i();
  }, get "aria-disabled"() {
    return i() || void 0;
  }, get "data-disabled"() {
    return i() ? "" : void 0;
  }, get onClick() {
    return Te([n.onClick, r]);
  } }, o))));
}
function Fo(e) {
  const t = Ot$1(), [n, o] = splitProps(e, ["onClick"]), r = () => {
    t.setPage(t.page() - 1);
  }, i = () => t.page() === 1;
  return ssr(Et$1, ssrHydrationKey(), escape(createComponent$1(ot$1, mergeProps({ get tabIndex() {
    return i() || t.page() === 1 ? -1 : void 0;
  }, get disabled() {
    return i();
  }, get "aria-disabled"() {
    return i() || void 0;
  }, get "data-disabled"() {
    return i() ? "" : void 0;
  }, get onClick() {
    return Te([n.onClick, r]);
  } }, o))));
}
function Io(e) {
  const t = `pagination-${createUniqueId()}`, n = Y$1({ id: t }, e), [o, r] = splitProps(n, ["page", "defaultPage", "onPageChange", "count", "siblingCount", "showFirst", "showLast", "fixedItems", "itemComponent", "ellipsisComponent", "disabled", "children"]), i = Xt$1({ defaultValue: () => {
    var _a2;
    return (_a2 = o.defaultPage) != null ? _a2 : 1;
  }, onChange: o.onPageChange, value: () => o.page }), s = { count: () => o.count, siblingCount: () => {
    var _a2;
    return (_a2 = o.siblingCount) != null ? _a2 : 1;
  }, showFirst: () => {
    var _a2;
    return (_a2 = o.showFirst) != null ? _a2 : true;
  }, showLast: () => {
    var _a2;
    return (_a2 = o.showLast) != null ? _a2 : true;
  }, fixedItems: () => {
    var _a2;
    return (_a2 = o.fixedItems) != null ? _a2 : false;
  }, isDisabled: () => {
    var _a2;
    return (_a2 = o.disabled) != null ? _a2 : false;
  }, renderItem: (l) => o.itemComponent({ page: l }), renderEllipsis: o.ellipsisComponent, page: () => {
    var _a2;
    return Math.min((_a2 = i[0]()) != null ? _a2 : 1, o.count);
  }, setPage: i[1] };
  return createComponent$1(Do.Provider, { value: s, get children() {
    return createComponent$1(te$1, mergeProps({ as: "nav", get "data-disabled"() {
      return o.disabled ? "" : void 0;
    } }, r, { get children() {
      return ssr(ja, ssrHydrationKey(), escape(o.children));
    } }));
  } });
}
var Ie = Object.assign(Io, { Ellipsis: Co, Item: To, Items: Ro, Next: Lo, Previous: Fo }), Wa = ["<svg", ' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="h-4 w-4"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path><title>More pages</title></svg>'], qa = ["<i", ' class="ph ph-caret-left text-base leading-none" aria-label="P\xE1gina anterior"></i>'], Ka = ["<i", ' class="ph ph-caret-right text-base leading-none" aria-label="Pr\xF3xima p\xE1gina"></i>'];
const $c = Ie.Items, kc = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent$1(Ie, mergeProps({ get class() {
    return Ve("mx-auto flex w-full justify-center [&>ul]:flex [&>ul]:flex-row [&>ul]:items-center [&>ul]:gap-1", t.class);
  } }, n));
}, Ac = (e) => {
  const t = mergeProps$1({ size: "icon" }, e), [n, o] = splitProps(t, ["class", "size"]);
  return createComponent$1(Ie.Item, mergeProps({ get class() {
    return Ve(St$1({ variant: "ghost", size: n.size }), "aria-[current=page]:border aria-[current=page]:border-input aria-[current=page]:bg-background aria-[current=page]:shadow-sm aria-[current=page]:hover:bg-accent aria-[current=page]:hover:text-accent-foreground", n.class);
  } }, o));
}, _c = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent$1(Ie.Ellipsis, mergeProps({ get class() {
    return Ve("flex h-9 w-9 items-center justify-center", t.class);
  } }, n, { get children() {
    return ssr(Wa, ssrHydrationKey());
  } }));
}, Mc = (e) => {
  const t = mergeProps$1({ size: "icon" }, e), [n, o] = splitProps(t, ["class", "size"]);
  return createComponent$1(Ie.Previous, mergeProps({ get class() {
    return Ve(St$1({ variant: "ghost", size: n.size }), "aria-[current=page]:border aria-[current=page]:border-input aria-[current=page]:bg-background aria-[current=page]:shadow-sm aria-[current=page]:hover:bg-accent aria-[current=page]:hover:text-accent-foreground", n.class);
  } }, o, { get children() {
    return ssr(qa, ssrHydrationKey());
  } }));
}, zc = (e) => {
  const t = mergeProps$1({ size: "icon" }, e), [n, o] = splitProps(t, ["class", "size"]);
  return createComponent$1(Ie.Next, mergeProps({ get class() {
    return Ve(St$1({ variant: "ghost", size: n.size }), "aria-[current=page]:border aria-[current=page]:border-input aria-[current=page]:bg-background aria-[current=page]:shadow-sm aria-[current=page]:hover:bg-accent aria-[current=page]:hover:text-accent-foreground", n.class);
  } }, o, { get children() {
    return ssr(Ka, ssrHydrationKey());
  } }));
};
cva("absolute outline-none transition-all duration-200", { variants: { variant: { block: "rounded-md bg-background shadow peer-focus-visible:outline-none peer-focus-visible:ring-[1.5px] peer-focus-visible:ring-ring peer-focus-visible:ring-offset-2 peer-focus-visible:ring-offset-background data-[orientation=vertical]:top-0 data-[orientation=vertical]:right-1 data-[orientation=horizontal]:bottom-1 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-[calc(100%-0.5rem)] data-[orientation=vertical]:w-[calc(100%-0.5rem)]", underline: "data-[orientation=horizontal]:-bottom-[1px] data-[orientation=vertical]:-right-[1px] bg-primary data-[orientation=vertical]:top-0 data-[orientation=horizontal]:left-0 data-[orientation=horizontal]:h-[2px] data-[orientation=vertical]:w-[2px]" } }, defaultVariants: { variant: "block" } });
var Ua = {};
Pt$1(Ua, { Description: () => Gt$1, ErrorMessage: () => Qt$1, Input: () => en, Label: () => Jt$1, Root: () => tn, TextArea: () => nn, TextField: () => Xa });
var $o = createContext$1();
function ko() {
  const e = useContext($o);
  if (e === void 0)
    throw new Error("[kobalte]: `useTextFieldContext` must be used within a `TextField` component");
  return e;
}
function en(e) {
  return createComponent$1(Ao, mergeProps({ type: "text" }, e));
}
function Ao(e) {
  const t = rt$1(), n = ko(), o = Y$1({ id: n.generateId("input") }, e), [r, i, s] = splitProps(o, ["onInput"], Xi), { fieldProps: l } = Zi(i);
  return createComponent$1(te$1, mergeProps({ as: "input", get id() {
    return l.id();
  }, get name() {
    return t.name();
  }, get value() {
    return n.value();
  }, get required() {
    return t.isRequired();
  }, get disabled() {
    return t.isDisabled();
  }, get readonly() {
    return t.isReadOnly();
  }, get "aria-label"() {
    return l.ariaLabel();
  }, get "aria-labelledby"() {
    return l.ariaLabelledBy();
  }, get "aria-describedby"() {
    return l.ariaDescribedBy();
  }, get "aria-invalid"() {
    return t.validationState() === "invalid" || void 0;
  }, get "aria-required"() {
    return t.isRequired() || void 0;
  }, get "aria-disabled"() {
    return t.isDisabled() || void 0;
  }, get "aria-readonly"() {
    return t.isReadOnly() || void 0;
  }, get onInput() {
    return Te([r.onInput, n.onInput]);
  } }, () => t.dataset(), s));
}
function tn(e) {
  let t;
  const n = `textfield-${createUniqueId()}`, o = Y$1({ id: n }, e), [r, i, s] = splitProps(o, ["ref", "value", "defaultValue", "onChange"], Ui), l = r.value, [a, c] = Xt$1({ value: () => {
    var _a2;
    return l === void 0 ? void 0 : (_a2 = r.value) != null ? _a2 : "";
  }, defaultValue: () => r.defaultValue, onChange: (f) => {
    var _a2;
    return (_a2 = r.onChange) == null ? void 0 : _a2.call(r, f);
  } }), { formControlContext: p } = Yi(i);
  Gi(() => t, () => {
    var _a2;
    return c((_a2 = r.defaultValue) != null ? _a2 : "");
  });
  const u = (f) => {
    var _a2;
    if (p.isReadOnly() || p.isDisabled())
      return;
    const d = f.target;
    c(d.value), d.value = (_a2 = a()) != null ? _a2 : "";
  }, g = { value: a, generateId: Yt$1(() => A(i.id)), onInput: u };
  return createComponent$1(ao.Provider, { value: p, get children() {
    return createComponent$1($o.Provider, { value: g, get children() {
      return createComponent$1(te$1, mergeProps({ as: "div", role: "group", get id() {
        return A(i.id);
      } }, () => p.dataset(), s));
    } });
  } });
}
function nn(e) {
  let t;
  const n = ko(), o = Y$1({ id: n.generateId("textarea") }, e), [r, i] = splitProps(o, ["ref", "autoResize", "submitOnEnter", "onKeyPress"]);
  createEffect(on$2([() => t, () => r.autoResize, () => n.value()], ([l, a]) => {
    !l || !a || Ya(l);
  }));
  const s = (l) => {
  };
  return createComponent$1(Ao, mergeProps({ as: "textarea", get "aria-multiline"() {
    return r.submitOnEnter ? "false" : void 0;
  }, get onKeyPress() {
    return Te([r.onKeyPress, s]);
  } }, i));
}
function Ya(e) {
  const t = e.style.alignSelf, n = e.style.overflow;
  "MozAppearance" in e.style || (e.style.overflow = "hidden"), e.style.alignSelf = "start", e.style.height = "auto", e.style.height = `${e.scrollHeight + (e.offsetHeight - e.clientHeight)}px`, e.style.overflow = n, e.style.alignSelf = t;
}
var Xa = Object.assign(tn, { Description: Gt$1, ErrorMessage: Qt$1, Input: en, Label: Jt$1, TextArea: nn });
const Nc = tn, Bc = (e) => {
  const [t, n] = splitProps(e, ["type", "class"]);
  return createComponent$1(en, mergeProps({ get type() {
    return t.type;
  }, get class() {
    return We("flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:font-medium file:text-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t.class);
  } }, n));
}, Hc = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent$1(nn, mergeProps({ get class() {
    return We("flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50", t.class);
  } }, n));
}, on = cva("font-medium text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70", { variants: { variant: { label: "data-[invalid]:text-destructive", description: "text-destructive", error: "font-normal text-destructive" } }, defaultVariants: { variant: "label" } }), jc = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent$1(Jt$1, mergeProps({ get class() {
    return We(on(), t.class);
  } }, n));
}, Vc = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent$1(Gt$1, mergeProps({ get class() {
    return We(on({ variant: "description" }), t.class);
  } }, n));
}, Wc = (e) => {
  const [t, n] = splitProps(e, ["class"]);
  return createComponent$1(Qt$1, mergeProps(n, { get class() {
    return We(on({ variant: "error", class: t.class }));
  } }));
}, Za = ["top", "right", "bottom", "left"], le = Math.min, X$1 = Math.max, bt$1 = Math.round, ft$1 = Math.floor, xe = (e) => ({ x: e, y: e }), Ga = { left: "right", right: "left", bottom: "top", top: "bottom" }, Qa = { start: "end", end: "start" };
function Ht$1(e, t, n) {
  return X$1(e, le(t, n));
}
function $e(e, t) {
  return typeof e == "function" ? e(t) : e;
}
function Pe(e) {
  return e.split("-")[0];
}
function qe(e) {
  return e.split("-")[1];
}
function _o(e) {
  return e === "x" ? "y" : "x";
}
function rn(e) {
  return e === "y" ? "height" : "width";
}
function Re(e) {
  return ["top", "bottom"].includes(Pe(e)) ? "y" : "x";
}
function sn(e) {
  return _o(Re(e));
}
function Ja(e, t, n) {
  n === void 0 && (n = false);
  const o = qe(e), r = sn(e), i = rn(r);
  let s = r === "x" ? o === (n ? "end" : "start") ? "right" : "left" : o === "start" ? "bottom" : "top";
  return t.reference[i] > t.floating[i] && (s = yt$1(s)), [s, yt$1(s)];
}
function el(e) {
  const t = yt$1(e);
  return [jt$1(e), t, jt$1(t)];
}
function jt$1(e) {
  return e.replace(/start|end/g, (t) => Qa[t]);
}
function tl(e, t, n) {
  const o = ["left", "right"], r = ["right", "left"], i = ["top", "bottom"], s = ["bottom", "top"];
  switch (e) {
    case "top":
    case "bottom":
      return n ? t ? r : o : t ? o : r;
    case "left":
    case "right":
      return t ? i : s;
    default:
      return [];
  }
}
function nl(e, t, n, o) {
  const r = qe(e);
  let i = tl(Pe(e), n === "start", o);
  return r && (i = i.map((s) => s + "-" + r), t && (i = i.concat(i.map(jt$1)))), i;
}
function yt$1(e) {
  return e.replace(/left|right|bottom|top/g, (t) => Ga[t]);
}
function ol(e) {
  return { top: 0, right: 0, bottom: 0, left: 0, ...e };
}
function Mo(e) {
  return typeof e != "number" ? ol(e) : { top: e, right: e, bottom: e, left: e };
}
function wt$1(e) {
  const { x: t, y: n, width: o, height: r } = e;
  return { width: o, height: r, top: n, left: t, right: t + o, bottom: n + r, x: t, y: n };
}
function zn(e, t, n) {
  let { reference: o, floating: r } = e;
  const i = Re(t), s = sn(t), l = rn(s), a = Pe(t), c = i === "y", p = o.x + o.width / 2 - r.width / 2, u = o.y + o.height / 2 - r.height / 2, g = o[l] / 2 - r[l] / 2;
  let f;
  switch (a) {
    case "top":
      f = { x: p, y: o.y - r.height };
      break;
    case "bottom":
      f = { x: p, y: o.y + o.height };
      break;
    case "right":
      f = { x: o.x + o.width, y: u };
      break;
    case "left":
      f = { x: o.x - r.width, y: u };
      break;
    default:
      f = { x: o.x, y: o.y };
  }
  switch (qe(t)) {
    case "start":
      f[s] -= g * (n && c ? -1 : 1);
      break;
    case "end":
      f[s] += g * (n && c ? -1 : 1);
      break;
  }
  return f;
}
const rl = async (e, t, n) => {
  const { placement: o = "bottom", strategy: r = "absolute", middleware: i = [], platform: s } = n, l = i.filter(Boolean), a = await (s.isRTL == null ? void 0 : s.isRTL(t));
  let c = await s.getElementRects({ reference: e, floating: t, strategy: r }), { x: p, y: u } = zn(c, o, a), g = o, f = {}, d = 0;
  for (let m = 0; m < l.length; m++) {
    const { name: v, fn: h } = l[m], { x: w, y: D, data: T, reset: y } = await h({ x: p, y: u, initialPlacement: o, placement: g, strategy: r, middlewareData: f, rects: c, platform: s, elements: { reference: e, floating: t } });
    p = w != null ? w : p, u = D != null ? D : u, f = { ...f, [v]: { ...f[v], ...T } }, y && d <= 50 && (d++, typeof y == "object" && (y.placement && (g = y.placement), y.rects && (c = y.rects === true ? await s.getElementRects({ reference: e, floating: t, strategy: r }) : y.rects), { x: p, y: u } = zn(c, g, a)), m = -1);
  }
  return { x: p, y: u, placement: g, strategy: r, middlewareData: f };
};
async function et(e, t) {
  var n;
  t === void 0 && (t = {});
  const { x: o, y: r, platform: i, rects: s, elements: l, strategy: a } = e, { boundary: c = "clippingAncestors", rootBoundary: p = "viewport", elementContext: u = "floating", altBoundary: g = false, padding: f = 0 } = $e(t, e), d = Mo(f), v = l[g ? u === "floating" ? "reference" : "floating" : u], h = wt$1(await i.getClippingRect({ element: (n = await (i.isElement == null ? void 0 : i.isElement(v))) == null || n ? v : v.contextElement || await (i.getDocumentElement == null ? void 0 : i.getDocumentElement(l.floating)), boundary: c, rootBoundary: p, strategy: a })), w = u === "floating" ? { x: o, y: r, width: s.floating.width, height: s.floating.height } : s.reference, D = await (i.getOffsetParent == null ? void 0 : i.getOffsetParent(l.floating)), T = await (i.isElement == null ? void 0 : i.isElement(D)) ? await (i.getScale == null ? void 0 : i.getScale(D)) || { x: 1, y: 1 } : { x: 1, y: 1 }, y = wt$1(i.convertOffsetParentRelativeRectToViewportRelativeRect ? await i.convertOffsetParentRelativeRectToViewportRelativeRect({ elements: l, rect: w, offsetParent: D, strategy: a }) : w);
  return { top: (h.top - y.top + d.top) / T.y, bottom: (y.bottom - h.bottom + d.bottom) / T.y, left: (h.left - y.left + d.left) / T.x, right: (y.right - h.right + d.right) / T.x };
}
const il = (e) => ({ name: "arrow", options: e, async fn(t) {
  const { x: n, y: o, placement: r, rects: i, platform: s, elements: l, middlewareData: a } = t, { element: c, padding: p = 0 } = $e(e, t) || {};
  if (c == null)
    return {};
  const u = Mo(p), g = { x: n, y: o }, f = sn(r), d = rn(f), m = await s.getDimensions(c), v = f === "y", h = v ? "top" : "left", w = v ? "bottom" : "right", D = v ? "clientHeight" : "clientWidth", T = i.reference[d] + i.reference[f] - g[f] - i.floating[d], y = g[f] - i.reference[f], S = await (s.getOffsetParent == null ? void 0 : s.getOffsetParent(c));
  let F = S ? S[D] : 0;
  (!F || !await (s.isElement == null ? void 0 : s.isElement(S))) && (F = l.floating[D] || i.floating[d]);
  const I = T / 2 - y / 2, z = F / 2 - m[d] / 2 - 1, B = le(u[h], z), H = le(u[w], z), Q = B, k = F - m[d] - H, P = F / 2 - m[d] / 2 + I, _ = Ht$1(Q, P, k), N = !a.arrow && qe(r) != null && P !== _ && i.reference[d] / 2 - (P < Q ? B : H) - m[d] / 2 < 0, U = N ? P < Q ? P - Q : P - k : 0;
  return { [f]: g[f] + U, data: { [f]: _, centerOffset: P - _ - U, ...N && { alignmentOffset: U } }, reset: N };
} }), sl = function(e) {
  return e === void 0 && (e = {}), { name: "flip", options: e, async fn(t) {
    var n, o;
    const { placement: r, middlewareData: i, rects: s, initialPlacement: l, platform: a, elements: c } = t, { mainAxis: p = true, crossAxis: u = true, fallbackPlacements: g, fallbackStrategy: f = "bestFit", fallbackAxisSideDirection: d = "none", flipAlignment: m = true, ...v } = $e(e, t);
    if ((n = i.arrow) != null && n.alignmentOffset)
      return {};
    const h = Pe(r), w = Re(l), D = Pe(l) === l, T = await (a.isRTL == null ? void 0 : a.isRTL(c.floating)), y = g || (D || !m ? [yt$1(l)] : el(l)), S = d !== "none";
    !g && S && y.push(...nl(l, m, d, T));
    const F = [l, ...y], I = await et(t, v), z = [];
    let B = ((o = i.flip) == null ? void 0 : o.overflows) || [];
    if (p && z.push(I[h]), u) {
      const P = Ja(r, s, T);
      z.push(I[P[0]], I[P[1]]);
    }
    if (B = [...B, { placement: r, overflows: z }], !z.every((P) => P <= 0)) {
      var H, Q;
      const P = (((H = i.flip) == null ? void 0 : H.index) || 0) + 1, _ = F[P];
      if (_)
        return { data: { index: P, overflows: B }, reset: { placement: _ } };
      let N = (Q = B.filter((U) => U.overflows[0] <= 0).sort((U, J) => U.overflows[1] - J.overflows[1])[0]) == null ? void 0 : Q.placement;
      if (!N)
        switch (f) {
          case "bestFit": {
            var k;
            const U = (k = B.filter((J) => {
              if (S) {
                const ye = Re(J.placement);
                return ye === w || ye === "y";
              }
              return true;
            }).map((J) => [J.placement, J.overflows.filter((ye) => ye > 0).reduce((ye, or) => ye + or, 0)]).sort((J, ye) => J[1] - ye[1])[0]) == null ? void 0 : k[0];
            U && (N = U);
            break;
          }
          case "initialPlacement":
            N = l;
            break;
        }
      if (r !== N)
        return { reset: { placement: N } };
    }
    return {};
  } };
};
function Nn(e, t) {
  return { top: e.top - t.height, right: e.right - t.width, bottom: e.bottom - t.height, left: e.left - t.width };
}
function Bn(e) {
  return Za.some((t) => e[t] >= 0);
}
const al = function(e) {
  return e === void 0 && (e = {}), { name: "hide", options: e, async fn(t) {
    const { rects: n } = t, { strategy: o = "referenceHidden", ...r } = $e(e, t);
    switch (o) {
      case "referenceHidden": {
        const i = await et(t, { ...r, elementContext: "reference" }), s = Nn(i, n.reference);
        return { data: { referenceHiddenOffsets: s, referenceHidden: Bn(s) } };
      }
      case "escaped": {
        const i = await et(t, { ...r, altBoundary: true }), s = Nn(i, n.floating);
        return { data: { escapedOffsets: s, escaped: Bn(s) } };
      }
      default:
        return {};
    }
  } };
};
async function ll(e, t) {
  const { placement: n, platform: o, elements: r } = e, i = await (o.isRTL == null ? void 0 : o.isRTL(r.floating)), s = Pe(n), l = qe(n), a = Re(n) === "y", c = ["left", "top"].includes(s) ? -1 : 1, p = i && a ? -1 : 1, u = $e(t, e);
  let { mainAxis: g, crossAxis: f, alignmentAxis: d } = typeof u == "number" ? { mainAxis: u, crossAxis: 0, alignmentAxis: null } : { mainAxis: 0, crossAxis: 0, alignmentAxis: null, ...u };
  return l && typeof d == "number" && (f = l === "end" ? d * -1 : d), a ? { x: f * p, y: g * c } : { x: g * c, y: f * p };
}
const cl = function(e) {
  return e === void 0 && (e = 0), { name: "offset", options: e, async fn(t) {
    var n, o;
    const { x: r, y: i, placement: s, middlewareData: l } = t, a = await ll(t, e);
    return s === ((n = l.offset) == null ? void 0 : n.placement) && (o = l.arrow) != null && o.alignmentOffset ? {} : { x: r + a.x, y: i + a.y, data: { ...a, placement: s } };
  } };
}, ul = function(e) {
  return e === void 0 && (e = {}), { name: "shift", options: e, async fn(t) {
    const { x: n, y: o, placement: r } = t, { mainAxis: i = true, crossAxis: s = false, limiter: l = { fn: (v) => {
      let { x: h, y: w } = v;
      return { x: h, y: w };
    } }, ...a } = $e(e, t), c = { x: n, y: o }, p = await et(t, a), u = Re(Pe(r)), g = _o(u);
    let f = c[g], d = c[u];
    if (i) {
      const v = g === "y" ? "top" : "left", h = g === "y" ? "bottom" : "right", w = f + p[v], D = f - p[h];
      f = Ht$1(w, f, D);
    }
    if (s) {
      const v = u === "y" ? "top" : "left", h = u === "y" ? "bottom" : "right", w = d + p[v], D = d - p[h];
      d = Ht$1(w, d, D);
    }
    const m = l.fn({ ...t, [g]: f, [u]: d });
    return { ...m, data: { x: m.x - n, y: m.y - o } };
  } };
}, dl = function(e) {
  return e === void 0 && (e = {}), { name: "size", options: e, async fn(t) {
    const { placement: n, rects: o, platform: r, elements: i } = t, { apply: s = () => {
    }, ...l } = $e(e, t), a = await et(t, l), c = Pe(n), p = qe(n), u = Re(n) === "y", { width: g, height: f } = o.floating;
    let d, m;
    c === "top" || c === "bottom" ? (d = c, m = p === (await (r.isRTL == null ? void 0 : r.isRTL(i.floating)) ? "start" : "end") ? "left" : "right") : (m = c, d = p === "end" ? "top" : "bottom");
    const v = f - a.top - a.bottom, h = g - a.left - a.right, w = le(f - a[d], v), D = le(g - a[m], h), T = !t.middlewareData.shift;
    let y = w, S = D;
    if (u ? S = p || T ? le(D, h) : h : y = p || T ? le(w, v) : v, T && !p) {
      const I = X$1(a.left, 0), z = X$1(a.right, 0), B = X$1(a.top, 0), H = X$1(a.bottom, 0);
      u ? S = g - 2 * (I !== 0 || z !== 0 ? I + z : X$1(a.left, a.right)) : y = f - 2 * (B !== 0 || H !== 0 ? B + H : X$1(a.top, a.bottom));
    }
    await s({ ...t, availableWidth: S, availableHeight: y });
    const F = await r.getDimensions(i.floating);
    return g !== F.width || f !== F.height ? { reset: { rects: true } } : {};
  } };
};
function Ke(e) {
  return zo(e) ? (e.nodeName || "").toLowerCase() : "#document";
}
function Z(e) {
  var t;
  return (e == null || (t = e.ownerDocument) == null ? void 0 : t.defaultView) || window;
}
function be(e) {
  var t;
  return (t = (zo(e) ? e.ownerDocument : e.document) || window.document) == null ? void 0 : t.documentElement;
}
function zo(e) {
  return e instanceof Node || e instanceof Z(e).Node;
}
function oe$1(e) {
  return e instanceof Element || e instanceof Z(e).Element;
}
function ue(e) {
  return e instanceof HTMLElement || e instanceof Z(e).HTMLElement;
}
function Hn(e) {
  return typeof ShadowRoot > "u" ? false : e instanceof ShadowRoot || e instanceof Z(e).ShadowRoot;
}
function st$1(e) {
  const { overflow: t, overflowX: n, overflowY: o, display: r } = re$1(e);
  return /auto|scroll|overlay|hidden|clip/.test(t + o + n) && !["inline", "contents"].includes(r);
}
function fl(e) {
  return ["table", "td", "th"].includes(Ke(e));
}
function Ct$1(e) {
  return [":popover-open", ":modal"].some((t) => {
    try {
      return e.matches(t);
    } catch {
      return false;
    }
  });
}
function an(e) {
  const t = ln(), n = oe$1(e) ? re$1(e) : e;
  return n.transform !== "none" || n.perspective !== "none" || (n.containerType ? n.containerType !== "normal" : false) || !t && (n.backdropFilter ? n.backdropFilter !== "none" : false) || !t && (n.filter ? n.filter !== "none" : false) || ["transform", "perspective", "filter"].some((o) => (n.willChange || "").includes(o)) || ["paint", "layout", "strict", "content"].some((o) => (n.contain || "").includes(o));
}
function gl(e) {
  let t = Se(e);
  for (; ue(t) && !He(t); ) {
    if (an(t))
      return t;
    if (Ct$1(t))
      return null;
    t = Se(t);
  }
  return null;
}
function ln() {
  return typeof CSS > "u" || !CSS.supports ? false : CSS.supports("-webkit-backdrop-filter", "none");
}
function He(e) {
  return ["html", "body", "#document"].includes(Ke(e));
}
function re$1(e) {
  return Z(e).getComputedStyle(e);
}
function Dt$1(e) {
  return oe$1(e) ? { scrollLeft: e.scrollLeft, scrollTop: e.scrollTop } : { scrollLeft: e.scrollX, scrollTop: e.scrollY };
}
function Se(e) {
  if (Ke(e) === "html")
    return e;
  const t = e.assignedSlot || e.parentNode || Hn(e) && e.host || be(e);
  return Hn(t) ? t.host : t;
}
function No(e) {
  const t = Se(e);
  return He(t) ? e.ownerDocument ? e.ownerDocument.body : e.body : ue(t) && st$1(t) ? t : No(t);
}
function tt$1(e, t, n) {
  var o;
  t === void 0 && (t = []), n === void 0 && (n = true);
  const r = No(e), i = r === ((o = e.ownerDocument) == null ? void 0 : o.body), s = Z(r);
  if (i) {
    const l = Vt$1(s);
    return t.concat(s, s.visualViewport || [], st$1(r) ? r : [], l && n ? tt$1(l) : []);
  }
  return t.concat(r, tt$1(r, [], n));
}
function Vt$1(e) {
  return e.parent && Object.getPrototypeOf(e.parent) ? e.frameElement : null;
}
function Bo(e) {
  const t = re$1(e);
  let n = parseFloat(t.width) || 0, o = parseFloat(t.height) || 0;
  const r = ue(e), i = r ? e.offsetWidth : n, s = r ? e.offsetHeight : o, l = bt$1(n) !== i || bt$1(o) !== s;
  return l && (n = i, o = s), { width: n, height: o, $: l };
}
function cn(e) {
  return oe$1(e) ? e : e.contextElement;
}
function Me(e) {
  const t = cn(e);
  if (!ue(t))
    return xe(1);
  const n = t.getBoundingClientRect(), { width: o, height: r, $: i } = Bo(t);
  let s = (i ? bt$1(n.width) : n.width) / o, l = (i ? bt$1(n.height) : n.height) / r;
  return (!s || !Number.isFinite(s)) && (s = 1), (!l || !Number.isFinite(l)) && (l = 1), { x: s, y: l };
}
const pl = xe(0);
function Ho(e) {
  const t = Z(e);
  return !ln() || !t.visualViewport ? pl : { x: t.visualViewport.offsetLeft, y: t.visualViewport.offsetTop };
}
function ml(e, t, n) {
  return t === void 0 && (t = false), !n || t && n !== Z(e) ? false : t;
}
function Le(e, t, n, o) {
  t === void 0 && (t = false), n === void 0 && (n = false);
  const r = e.getBoundingClientRect(), i = cn(e);
  let s = xe(1);
  t && (o ? oe$1(o) && (s = Me(o)) : s = Me(e));
  const l = ml(i, n, o) ? Ho(i) : xe(0);
  let a = (r.left + l.x) / s.x, c = (r.top + l.y) / s.y, p = r.width / s.x, u = r.height / s.y;
  if (i) {
    const g = Z(i), f = o && oe$1(o) ? Z(o) : o;
    let d = g, m = Vt$1(d);
    for (; m && o && f !== d; ) {
      const v = Me(m), h = m.getBoundingClientRect(), w = re$1(m), D = h.left + (m.clientLeft + parseFloat(w.paddingLeft)) * v.x, T = h.top + (m.clientTop + parseFloat(w.paddingTop)) * v.y;
      a *= v.x, c *= v.y, p *= v.x, u *= v.y, a += D, c += T, d = Z(m), m = Vt$1(d);
    }
  }
  return wt$1({ width: p, height: u, x: a, y: c });
}
function hl(e) {
  let { elements: t, rect: n, offsetParent: o, strategy: r } = e;
  const i = r === "fixed", s = be(o), l = t ? Ct$1(t.floating) : false;
  if (o === s || l && i)
    return n;
  let a = { scrollLeft: 0, scrollTop: 0 }, c = xe(1);
  const p = xe(0), u = ue(o);
  if ((u || !u && !i) && ((Ke(o) !== "body" || st$1(s)) && (a = Dt$1(o)), ue(o))) {
    const g = Le(o);
    c = Me(o), p.x = g.x + o.clientLeft, p.y = g.y + o.clientTop;
  }
  return { width: n.width * c.x, height: n.height * c.y, x: n.x * c.x - a.scrollLeft * c.x + p.x, y: n.y * c.y - a.scrollTop * c.y + p.y };
}
function vl(e) {
  return Array.from(e.getClientRects());
}
function jo(e) {
  return Le(be(e)).left + Dt$1(e).scrollLeft;
}
function bl(e) {
  const t = be(e), n = Dt$1(e), o = e.ownerDocument.body, r = X$1(t.scrollWidth, t.clientWidth, o.scrollWidth, o.clientWidth), i = X$1(t.scrollHeight, t.clientHeight, o.scrollHeight, o.clientHeight);
  let s = -n.scrollLeft + jo(e);
  const l = -n.scrollTop;
  return re$1(o).direction === "rtl" && (s += X$1(t.clientWidth, o.clientWidth) - r), { width: r, height: i, x: s, y: l };
}
function yl(e, t) {
  const n = Z(e), o = be(e), r = n.visualViewport;
  let i = o.clientWidth, s = o.clientHeight, l = 0, a = 0;
  if (r) {
    i = r.width, s = r.height;
    const c = ln();
    (!c || c && t === "fixed") && (l = r.offsetLeft, a = r.offsetTop);
  }
  return { width: i, height: s, x: l, y: a };
}
function wl(e, t) {
  const n = Le(e, true, t === "fixed"), o = n.top + e.clientTop, r = n.left + e.clientLeft, i = ue(e) ? Me(e) : xe(1), s = e.clientWidth * i.x, l = e.clientHeight * i.y, a = r * i.x, c = o * i.y;
  return { width: s, height: l, x: a, y: c };
}
function jn(e, t, n) {
  let o;
  if (t === "viewport")
    o = yl(e, n);
  else if (t === "document")
    o = bl(be(e));
  else if (oe$1(t))
    o = wl(t, n);
  else {
    const r = Ho(e);
    o = { ...t, x: t.x - r.x, y: t.y - r.y };
  }
  return wt$1(o);
}
function Vo(e, t) {
  const n = Se(e);
  return n === t || !oe$1(n) || He(n) ? false : re$1(n).position === "fixed" || Vo(n, t);
}
function xl(e, t) {
  const n = t.get(e);
  if (n)
    return n;
  let o = tt$1(e, [], false).filter((l) => oe$1(l) && Ke(l) !== "body"), r = null;
  const i = re$1(e).position === "fixed";
  let s = i ? Se(e) : e;
  for (; oe$1(s) && !He(s); ) {
    const l = re$1(s), a = an(s);
    !a && l.position === "fixed" && (r = null), (i ? !a && !r : !a && l.position === "static" && !!r && ["absolute", "fixed"].includes(r.position) || st$1(s) && !a && Vo(e, s)) ? o = o.filter((p) => p !== s) : r = l, s = Se(s);
  }
  return t.set(e, o), o;
}
function Pl(e) {
  let { element: t, boundary: n, rootBoundary: o, strategy: r } = e;
  const s = [...n === "clippingAncestors" ? Ct$1(t) ? [] : xl(t, this._c) : [].concat(n), o], l = s[0], a = s.reduce((c, p) => {
    const u = jn(t, p, r);
    return c.top = X$1(u.top, c.top), c.right = le(u.right, c.right), c.bottom = le(u.bottom, c.bottom), c.left = X$1(u.left, c.left), c;
  }, jn(t, l, r));
  return { width: a.right - a.left, height: a.bottom - a.top, x: a.left, y: a.top };
}
function Sl(e) {
  const { width: t, height: n } = Bo(e);
  return { width: t, height: n };
}
function El(e, t, n) {
  const o = ue(t), r = be(t), i = n === "fixed", s = Le(e, true, i, t);
  let l = { scrollLeft: 0, scrollTop: 0 };
  const a = xe(0);
  if (o || !o && !i)
    if ((Ke(t) !== "body" || st$1(r)) && (l = Dt$1(t)), o) {
      const u = Le(t, true, i, t);
      a.x = u.x + t.clientLeft, a.y = u.y + t.clientTop;
    } else
      r && (a.x = jo(r));
  const c = s.left + l.scrollLeft - a.x, p = s.top + l.scrollTop - a.y;
  return { x: c, y: p, width: s.width, height: s.height };
}
function At$1(e) {
  return re$1(e).position === "static";
}
function Vn(e, t) {
  return !ue(e) || re$1(e).position === "fixed" ? null : t ? t(e) : e.offsetParent;
}
function Wo(e, t) {
  const n = Z(e);
  if (Ct$1(e))
    return n;
  if (!ue(e)) {
    let r = Se(e);
    for (; r && !He(r); ) {
      if (oe$1(r) && !At$1(r))
        return r;
      r = Se(r);
    }
    return n;
  }
  let o = Vn(e, t);
  for (; o && fl(o) && At$1(o); )
    o = Vn(o, t);
  return o && He(o) && At$1(o) && !an(o) ? n : o || gl(e) || n;
}
const Ol = async function(e) {
  const t = this.getOffsetParent || Wo, n = this.getDimensions, o = await n(e.floating);
  return { reference: El(e.reference, await t(e.floating), e.strategy), floating: { x: 0, y: 0, width: o.width, height: o.height } };
};
function Cl(e) {
  return re$1(e).direction === "rtl";
}
const qo = { convertOffsetParentRelativeRectToViewportRelativeRect: hl, getDocumentElement: be, getClippingRect: Pl, getOffsetParent: Wo, getElementRects: Ol, getClientRects: vl, getDimensions: Sl, getScale: Me, isElement: oe$1, isRTL: Cl };
function Dl(e, t) {
  let n = null, o;
  const r = be(e);
  function i() {
    var l;
    clearTimeout(o), (l = n) == null || l.disconnect(), n = null;
  }
  function s(l, a) {
    l === void 0 && (l = false), a === void 0 && (a = 1), i();
    const { left: c, top: p, width: u, height: g } = e.getBoundingClientRect();
    if (l || t(), !u || !g)
      return;
    const f = ft$1(p), d = ft$1(r.clientWidth - (c + u)), m = ft$1(r.clientHeight - (p + g)), v = ft$1(c), w = { rootMargin: -f + "px " + -d + "px " + -m + "px " + -v + "px", threshold: X$1(0, le(1, a)) || 1 };
    let D = true;
    function T(y) {
      const S = y[0].intersectionRatio;
      if (S !== a) {
        if (!D)
          return s();
        S ? s(false, S) : o = setTimeout(() => {
          s(false, 1e-7);
        }, 1e3);
      }
      D = false;
    }
    try {
      n = new IntersectionObserver(T, { ...w, root: r.ownerDocument });
    } catch {
      n = new IntersectionObserver(T, w);
    }
    n.observe(e);
  }
  return s(true), i;
}
function Tl(e, t, n, o) {
  o === void 0 && (o = {});
  const { ancestorScroll: r = true, ancestorResize: i = true, elementResize: s = typeof ResizeObserver == "function", layoutShift: l = typeof IntersectionObserver == "function", animationFrame: a = false } = o, c = cn(e), p = r || i ? [...c ? tt$1(c) : [], ...tt$1(t)] : [];
  p.forEach((h) => {
    r && h.addEventListener("scroll", n, { passive: true }), i && h.addEventListener("resize", n);
  });
  const u = c && l ? Dl(c, n) : null;
  let g = -1, f = null;
  s && (f = new ResizeObserver((h) => {
    let [w] = h;
    w && w.target === c && f && (f.unobserve(t), cancelAnimationFrame(g), g = requestAnimationFrame(() => {
      var D;
      (D = f) == null || D.observe(t);
    })), n();
  }), c && !a && f.observe(c), f.observe(t));
  let d, m = a ? Le(e) : null;
  a && v();
  function v() {
    const h = Le(e);
    m && (h.x !== m.x || h.y !== m.y || h.width !== m.width || h.height !== m.height) && n(), m = h, d = requestAnimationFrame(v);
  }
  return n(), () => {
    var h;
    p.forEach((w) => {
      r && w.removeEventListener("scroll", n), i && w.removeEventListener("resize", n);
    }), u == null ? void 0 : u(), (h = f) == null || h.disconnect(), f = null, a && cancelAnimationFrame(d);
  };
}
const Rl = cl, Ll = ul, Fl = sl, Il = dl, $l = al, kl = il, Al = (e, t, n) => {
  const o = /* @__PURE__ */ new Map(), r = { platform: qo, ...n }, i = { ...r.platform, _c: o };
  return rl(e, t, { ...r, platform: i });
};
var _l = ["<svg", ' display="block" viewBox="', '" style="transform:scale(1.02)"><g', '><path fill="none"', '></path><path stroke="none"', "></path></g></svg>"], un = createContext$1();
function dn() {
  const e = useContext(un);
  if (e === void 0)
    throw new Error("[kobalte]: `usePopperContext` must be used within a `Popper` component");
  return e;
}
var Ge = 30, Wn = Ge / 2, Ml = { top: 180, right: -90, bottom: 0, left: 90 }, qn = "M23,27.8c1.1,1.2,3.4,2.2,5,2.2h2H0h2c1.7,0,3.9-1,5-2.2l6.6-7.2c0.7-0.8,2-0.8,2.7,0L23,27.8L23,27.8z";
function fn(e) {
  const t = dn(), n = Y$1({ size: Ge }, e), [o, r] = splitProps(n, ["ref", "style", "size"]), i = () => t.currentPlacement().split("-")[0], s = zl(t.contentRef), l = () => {
    var _a2;
    return ((_a2 = s()) == null ? void 0 : _a2.getPropertyValue("background-color")) || "none";
  }, a = () => {
    var _a2;
    return ((_a2 = s()) == null ? void 0 : _a2.getPropertyValue(`border-${i()}-color`)) || "none";
  }, c = () => {
    var _a2;
    return ((_a2 = s()) == null ? void 0 : _a2.getPropertyValue(`border-${i()}-width`)) || "0px";
  }, p = () => Number.parseInt(c()) * 2 * (Ge / o.size), u = () => `rotate(${Ml[i()]} ${Wn} ${Wn}) translate(0 2)`;
  return createComponent$1(te$1, mergeProps({ as: "div", "aria-hidden": "true", get style() {
    return Ut$1({ position: "absolute", "font-size": `${o.size}px`, width: "1em", height: "1em", "pointer-events": "none", fill: l(), stroke: a(), "stroke-width": p() }, o.style);
  } }, r, { get children() {
    return ssr(_l, ssrHydrationKey(), `0 0 ${escape(Ge, true)} ${escape(Ge, true)}`, ssrAttribute("transform", escape(u(), true), false), ssrAttribute("d", escape(qn, true), false), ssrAttribute("d", escape(qn, true), false));
  } }));
}
function zl(e) {
  const [t, n] = createSignal();
  return createEffect(() => {
    const o = e();
    o && n(no(o).getComputedStyle(o));
  }), t;
}
function Nl(e) {
  dn();
  const [t, n] = splitProps(e, ["ref", "style"]);
  return createComponent$1(te$1, mergeProps({ as: "div", "data-popper-positioner": "", get style() {
    return Ut$1({ position: "absolute", top: 0, left: 0, "min-width": "max-content" }, t.style);
  } }, n));
}
function Kn(e) {
  const { x: t = 0, y: n = 0, width: o = 0, height: r = 0 } = e != null ? e : {};
  if (typeof DOMRect == "function")
    return new DOMRect(t, n, o, r);
  const i = { x: t, y: n, width: o, height: r, top: n, right: t + o, bottom: n + r, left: t };
  return { ...i, toJSON: () => i };
}
function Bl(e, t) {
  return { contextElement: e, getBoundingClientRect: () => {
    const o = t(e);
    return o ? Kn(o) : e ? e.getBoundingClientRect() : Kn();
  } };
}
function Hl(e) {
  return /^(?:top|bottom|left|right)(?:-(?:start|end))?$/.test(e);
}
var jl = { top: "bottom", right: "left", bottom: "top", left: "right" };
function Vl(e, t) {
  const [n, o] = e.split("-"), r = jl[n];
  return o ? n === "left" || n === "right" ? `${r} ${o === "start" ? "top" : "bottom"}` : o === "start" ? `${r} ${t === "rtl" ? "right" : "left"}` : `${r} ${t === "rtl" ? "left" : "right"}` : `${r} center`;
}
function Wl(e) {
  const t = Y$1({ getAnchorRect: (g) => g == null ? void 0 : g.getBoundingClientRect(), placement: "bottom", gutter: 0, shift: 0, flip: true, slide: true, overlap: false, sameWidth: false, fitViewport: false, hideWhenDetached: false, detachedPadding: 0, arrowPadding: 4, overflowPadding: 8 }, e), [n, o] = createSignal(), [r, i] = createSignal(), [s, l] = createSignal(t.placement), a = () => {
    var _a2;
    return Bl((_a2 = t.anchorRef) == null ? void 0 : _a2.call(t), t.getAnchorRect);
  }, { direction: c } = zi();
  async function p() {
    var _a2, _b, _c2;
    const g = a(), f = n(), d = r();
    if (!g || !f)
      return;
    const m = ((d == null ? void 0 : d.clientHeight) || 0) / 2, v = typeof t.gutter == "number" ? t.gutter + m : (_a2 = t.gutter) != null ? _a2 : m;
    f.style.setProperty("--kb-popper-content-overflow-padding", `${t.overflowPadding}px`), g.getBoundingClientRect();
    const h = [Rl(({ placement: S }) => {
      const F = !!S.split("-")[1];
      return { mainAxis: v, crossAxis: F ? void 0 : t.shift, alignmentAxis: t.shift };
    })];
    if (t.flip !== false) {
      const S = typeof t.flip == "string" ? t.flip.split(" ") : void 0;
      if (S !== void 0 && !S.every(Hl))
        throw new Error("`flip` expects a spaced-delimited list of placements");
      h.push(Fl({ padding: t.overflowPadding, fallbackPlacements: S }));
    }
    (t.slide || t.overlap) && h.push(Ll({ mainAxis: t.slide, crossAxis: t.overlap, padding: t.overflowPadding })), h.push(Il({ padding: t.overflowPadding, apply({ availableWidth: S, availableHeight: F, rects: I }) {
      const z = Math.round(I.reference.width);
      S = Math.floor(S), F = Math.floor(F), f.style.setProperty("--kb-popper-anchor-width", `${z}px`), f.style.setProperty("--kb-popper-content-available-width", `${S}px`), f.style.setProperty("--kb-popper-content-available-height", `${F}px`), t.sameWidth && (f.style.width = `${z}px`), t.fitViewport && (f.style.maxWidth = `${S}px`, f.style.maxHeight = `${F}px`);
    } })), t.hideWhenDetached && h.push($l({ padding: t.detachedPadding })), d && h.push(kl({ element: d, padding: t.arrowPadding }));
    const w = await Al(g, f, { placement: t.placement, strategy: "absolute", middleware: h, platform: { ...qo, isRTL: () => c() === "rtl" } });
    if (l(w.placement), (_b = t.onCurrentPlacementChange) == null ? void 0 : _b.call(t, w.placement), !f)
      return;
    f.style.setProperty("--kb-popper-content-transform-origin", Vl(w.placement, c()));
    const D = Math.round(w.x), T = Math.round(w.y);
    let y;
    if (t.hideWhenDetached && (y = ((_c2 = w.middlewareData.hide) == null ? void 0 : _c2.referenceHidden) ? "hidden" : "visible"), Object.assign(f.style, { top: "0", left: "0", transform: `translate3d(${D}px, ${T}px, 0)`, visibility: y }), d && w.middlewareData.arrow) {
      const { x: S, y: F } = w.middlewareData.arrow, I = w.placement.split("-")[0];
      Object.assign(d.style, { left: S != null ? `${S}px` : "", top: F != null ? `${F}px` : "", [I]: "100%" });
    }
  }
  createEffect(() => {
    const g = a(), f = n();
    if (!g || !f)
      return;
    const d = Tl(g, f, p, { elementResize: typeof ResizeObserver == "function" });
    onCleanup(d);
  }), createEffect(() => {
    var _a2;
    const g = n(), f = (_a2 = t.contentRef) == null ? void 0 : _a2.call(t);
    !g || !f || queueMicrotask(() => {
      g.style.zIndex = getComputedStyle(f).zIndex;
    });
  });
  const u = { currentPlacement: s, contentRef: () => {
    var _a2;
    return (_a2 = t.contentRef) == null ? void 0 : _a2.call(t);
  }, setPositionerRef: o, setArrowRef: i };
  return createComponent$1(un.Provider, { value: u, get children() {
    return t.children;
  } });
}
var Ko = Object.assign(Wl, { Arrow: fn, Context: un, usePopperContext: dn, Positioner: Nl });
function ql(e) {
  const t = (n) => {
    n.key, oo.Escape;
  };
  createEffect(() => {
    var _a2, _b;
    if (isServer || A(e.isDisabled))
      return;
    const n = (_b = (_a2 = e.ownerDocument) == null ? void 0 : _a2.call(e)) != null ? _b : ge();
    n.addEventListener("keydown", t), onCleanup(() => {
      n.removeEventListener("keydown", t);
    });
  });
}
var Kl = "data-kb-top-layer", Uo, Wt$1 = false, me = [];
function nt$1(e) {
  return me.findIndex((t) => t.node === e);
}
function Ul(e) {
  return me[nt$1(e)];
}
function Yl(e) {
  return me[me.length - 1].node === e;
}
function Yo() {
  return me.filter((e) => e.isPointerBlocking);
}
function Xl() {
  return [...Yo()].slice(-1)[0];
}
function gn() {
  return Yo().length > 0;
}
function Xo(e) {
  var _a2;
  const t = nt$1((_a2 = Xl()) == null ? void 0 : _a2.node);
  return nt$1(e) < t;
}
function Zl(e) {
  me.push(e);
}
function Gl(e) {
  const t = nt$1(e);
  t < 0 || me.splice(t, 1);
}
function Ql() {
  for (const { node: e } of me)
    e.style.pointerEvents = Xo(e) ? "none" : "auto";
}
function Jl(e) {
  if (gn() && !Wt$1) {
    const t = ge(e);
    Uo = document.body.style.pointerEvents, t.body.style.pointerEvents = "none", Wt$1 = true;
  }
}
function ec(e) {
  if (gn())
    return;
  const t = ge(e);
  t.body.style.pointerEvents = Uo, t.body.style.length === 0 && t.body.removeAttribute("style"), Wt$1 = false;
}
var gt$1 = { layers: me, isTopMostLayer: Yl, hasPointerBlockingLayer: gn, isBelowPointerBlockingLayer: Xo, addLayer: Zl, removeLayer: Gl, indexOf: nt$1, find: Ul, assignPointerEventToLayers: Ql, disableBodyPointerEvents: Jl, restoreBodyPointerEvents: ec }, Un = "interactOutside.pointerDownOutside", Yn = "interactOutside.focusOutside";
function tc(e, t) {
  let n, o = Ti;
  const r = () => ge(t()), i = (u) => {
    var _a2;
    return (_a2 = e.onPointerDownOutside) == null ? void 0 : _a2.call(e, u);
  }, s = (u) => {
    var _a2;
    return (_a2 = e.onFocusOutside) == null ? void 0 : _a2.call(e, u);
  }, l = (u) => {
    var _a2;
    return (_a2 = e.onInteractOutside) == null ? void 0 : _a2.call(e, u);
  }, a = (u) => {
    var _a2;
    const g = u.target;
    return !(g instanceof HTMLElement) || g.closest(`[${Kl}]`) || !Qe(r(), g) || Qe(t(), g) ? false : !((_a2 = e.shouldExcludeElement) == null ? void 0 : _a2.call(e, g));
  }, c = (u) => {
    function g() {
      const f = t(), d = u.target;
      if (!f || !d || !a(u))
        return;
      const m = Te([i, l]);
      d.addEventListener(Un, m, { once: true });
      const v = new CustomEvent(Un, { bubbles: false, cancelable: true, detail: { originalEvent: u, isContextMenu: u.button === 2 || Di(u) && u.button === 0 } });
      d.dispatchEvent(v);
    }
    u.pointerType === "touch" ? (r().removeEventListener("click", g), o = g, r().addEventListener("click", g, { once: true })) : g();
  }, p = (u) => {
    const g = t(), f = u.target;
    if (!g || !f || !a(u))
      return;
    const d = Te([s, l]);
    f.addEventListener(Yn, d, { once: true });
    const m = new CustomEvent(Yn, { bubbles: false, cancelable: true, detail: { originalEvent: u, isContextMenu: false } });
    f.dispatchEvent(m);
  };
  createEffect(() => {
    isServer || A(e.isDisabled) || (n = window.setTimeout(() => {
      r().addEventListener("pointerdown", c, true);
    }, 0), r().addEventListener("focusin", p, true), onCleanup(() => {
      window.clearTimeout(n), r().removeEventListener("click", o), r().removeEventListener("pointerdown", c, true), r().removeEventListener("focusin", p, true);
    }));
  });
}
var Zo = createContext$1();
function nc() {
  return useContext(Zo);
}
function oc(e) {
  let t;
  const n = nc(), [o, r] = splitProps(e, ["ref", "disableOutsidePointerEvents", "excludedElements", "onEscapeKeyDown", "onPointerDownOutside", "onFocusOutside", "onInteractOutside", "onDismiss", "bypassTopMostLayerCheck"]), i = /* @__PURE__ */ new Set([]), s = (u) => {
    i.add(u);
    const g = n == null ? void 0 : n.registerNestedLayer(u);
    return () => {
      i.delete(u), g == null ? void 0 : g();
    };
  };
  tc({ shouldExcludeElement: (u) => false, onPointerDownOutside: (u) => {
  }, onFocusOutside: (u) => {
    var _a2, _b, _c2;
    (_a2 = o.onFocusOutside) == null ? void 0 : _a2.call(o, u), (_b = o.onInteractOutside) == null ? void 0 : _b.call(o, u), u.defaultPrevented || ((_c2 = o.onDismiss) == null ? void 0 : _c2.call(o));
  } }, () => t), ql({ ownerDocument: () => ge(t), onEscapeKeyDown: (u) => {
  } }), onMount(() => {
  }), createEffect(on$2([() => t, () => o.disableOutsidePointerEvents], ([u, g]) => {
    if (!u)
      return;
    const f = gt$1.find(u);
    f && f.isPointerBlocking !== g && (f.isPointerBlocking = g, gt$1.assignPointerEventToLayers()), g && gt$1.disableBodyPointerEvents(u), onCleanup(() => {
      gt$1.restoreBodyPointerEvents(u);
    });
  }, { defer: true }));
  const p = { registerNestedLayer: s };
  return createComponent$1(Zo.Provider, { value: p, get children() {
    return createComponent$1(te$1, mergeProps({ as: "div" }, r));
  } });
}
var rc = {};
Pt$1(rc, { Arrow: () => fn, Content: () => Qo, Portal: () => Jo, Root: () => er$1, Tooltip: () => nr$1, Trigger: () => tr$1 });
var Go = createContext$1();
function pn() {
  const e = useContext(Go);
  if (e === void 0)
    throw new Error("[kobalte]: `useTooltipContext` must be used within a `Tooltip` component");
  return e;
}
function Qo(e) {
  const t = pn(), n = Y$1({ id: t.generateId("content") }, e), [o, r] = splitProps(n, ["ref", "style"]);
  return createEffect(() => onCleanup(t.registerContentId(r.id))), createComponent$1(Show, { get when() {
    return t.contentPresent();
  }, get children() {
    return createComponent$1(Ko.Positioner, { get children() {
      return createComponent$1(oc, mergeProps({ role: "tooltip", disableOutsidePointerEvents: false, get style() {
        return Ut$1({ "--kb-tooltip-content-transform-origin": "var(--kb-popper-content-transform-origin)", position: "relative" }, o.style);
      }, onFocusOutside: (i) => i.preventDefault(), onDismiss: () => t.hideTooltip(true) }, () => t.dataset(), r));
    } });
  } });
}
function Jo(e) {
  const t = pn();
  return createComponent$1(Show, { get when() {
    return t.contentPresent();
  }, get children() {
    return createComponent$1(Portal, e);
  } });
}
function ic(e, t, n) {
  const o = e.split("-")[0], r = t.getBoundingClientRect(), i = n.getBoundingClientRect(), s = [], l = r.left + r.width / 2, a = r.top + r.height / 2;
  switch (o) {
    case "top":
      s.push([r.left, a]), s.push([i.left, i.bottom]), s.push([i.left, i.top]), s.push([i.right, i.top]), s.push([i.right, i.bottom]), s.push([r.right, a]);
      break;
    case "right":
      s.push([l, r.top]), s.push([i.left, i.top]), s.push([i.right, i.top]), s.push([i.right, i.bottom]), s.push([i.left, i.bottom]), s.push([l, r.bottom]);
      break;
    case "bottom":
      s.push([r.left, a]), s.push([i.left, i.top]), s.push([i.left, i.bottom]), s.push([i.right, i.bottom]), s.push([i.right, i.top]), s.push([r.right, a]);
      break;
    case "left":
      s.push([l, r.top]), s.push([i.right, i.top]), s.push([i.left, i.top]), s.push([i.left, i.bottom]), s.push([i.right, i.bottom]), s.push([l, r.bottom]);
      break;
  }
  return s;
}
var Ce = {}, sc = 0, ke = false, fe, Ye, Ae;
function er$1(e) {
  const t = `tooltip-${createUniqueId()}`, n = `${++sc}`, o = Y$1({ id: t, openDelay: 700, closeDelay: 300, skipDelayDuration: 300 }, e), [r, i] = splitProps(o, ["id", "open", "defaultOpen", "onOpenChange", "disabled", "triggerOnFocusOnly", "openDelay", "closeDelay", "skipDelayDuration", "ignoreSafeArea", "forceMount"]);
  let s;
  const [l, a] = createSignal(), [c, p] = createSignal(), [u, g] = createSignal(), [f, d] = createSignal(i.placement), m = Ni({ open: () => r.open, defaultOpen: () => r.defaultOpen, onOpenChange: (P) => {
    var _a2;
    return (_a2 = r.onOpenChange) == null ? void 0 : _a2.call(r, P);
  } }), { present: v } = zt$1({ show: () => r.forceMount || m.isOpen(), element: () => {
    var _a2;
    return (_a2 = u()) != null ? _a2 : null;
  } }), h = () => {
    Ce[n] = D;
  }, w = () => {
    for (const P in Ce)
      P !== n && (Ce[P](true), delete Ce[P]);
  }, D = (P = false) => {
    isServer || (P || r.closeDelay && r.closeDelay <= 0 ? (window.clearTimeout(s), s = void 0, m.close()) : s || (s = window.setTimeout(() => {
      s = void 0, m.close();
    }, r.closeDelay)), window.clearTimeout(fe), fe = void 0, r.skipDelayDuration && r.skipDelayDuration >= 0 && (Ae = window.setTimeout(() => {
      window.clearTimeout(Ae), Ae = void 0;
    }, r.skipDelayDuration)), ke && (window.clearTimeout(Ye), Ye = window.setTimeout(() => {
      delete Ce[n], Ye = void 0, ke = false;
    }, r.closeDelay)));
  }, T = () => {
    isServer || (clearTimeout(s), s = void 0, w(), h(), ke = true, m.open(), window.clearTimeout(fe), fe = void 0, window.clearTimeout(Ye), Ye = void 0, window.clearTimeout(Ae), Ae = void 0);
  }, y = () => {
    isServer || (w(), h(), !m.isOpen() && !fe && !ke ? fe = window.setTimeout(() => {
      fe = void 0, ke = true, T();
    }, r.openDelay) : m.isOpen() || T());
  }, S = (P = false) => {
    isServer || (!P && r.openDelay && r.openDelay > 0 && !s && !Ae ? y() : T());
  }, F = () => {
    isServer || (window.clearTimeout(fe), fe = void 0, ke = false);
  }, I = () => {
    isServer || (window.clearTimeout(s), s = void 0);
  }, z = (P) => Qe(c(), P) || Qe(u(), P), B = (P) => {
    const _ = c(), N = u();
    if (!(!_ || !N))
      return ic(P, _, N);
  }, H = (P) => {
    const _ = P.target;
    if (z(_)) {
      I();
      return;
    }
    if (!r.ignoreSafeArea) {
      const N = B(f());
      if (N && Li(Ri(P), N)) {
        I();
        return;
      }
    }
    s || D();
  };
  createEffect(() => {
    if (isServer || !m.isOpen())
      return;
    const P = ge();
    P.addEventListener("pointermove", H, true), onCleanup(() => {
      P.removeEventListener("pointermove", H, true);
    });
  }), createEffect(() => {
    const P = c();
    if (!P || !m.isOpen())
      return;
    const _ = (U) => {
      const J = U.target;
      Qe(J, P) && D(true);
    }, N = no();
    N.addEventListener("scroll", _, { capture: true }), onCleanup(() => {
      N.removeEventListener("scroll", _, { capture: true });
    });
  }), onCleanup(() => {
    clearTimeout(s), Ce[n] && delete Ce[n];
  });
  const k = { dataset: createMemo(() => ({ "data-expanded": m.isOpen() ? "" : void 0, "data-closed": m.isOpen() ? void 0 : "" })), isOpen: m.isOpen, isDisabled: () => {
    var _a2;
    return (_a2 = r.disabled) != null ? _a2 : false;
  }, triggerOnFocusOnly: () => {
    var _a2;
    return (_a2 = r.triggerOnFocusOnly) != null ? _a2 : false;
  }, contentId: l, contentPresent: v, openTooltip: S, hideTooltip: D, cancelOpening: F, generateId: Yt$1(() => o.id), registerContentId: Ze(a), isTargetOnTooltip: z, setTriggerRef: p, setContentRef: g };
  return createComponent$1(Go.Provider, { value: k, get children() {
    return createComponent$1(Ko, mergeProps({ anchorRef: c, contentRef: u, onCurrentPlacementChange: d }, i));
  } });
}
function tr$1(e) {
  let t;
  const n = pn(), [o, r] = splitProps(e, ["ref", "onPointerEnter", "onPointerLeave", "onPointerDown", "onClick", "onFocus", "onBlur"]);
  let i = false, s = false, l = false;
  const a = () => {
    i = false;
  }, c = () => {
    !n.isOpen() && (s || l) && n.openTooltip(l);
  }, p = (h) => {
    n.isOpen() && !s && !l && n.hideTooltip(h);
  }, u = (h) => {
    De(h, o.onPointerEnter), !(h.pointerType === "touch" || n.triggerOnFocusOnly() || n.isDisabled() || h.defaultPrevented) && (s = true, c());
  }, g = (h) => {
    De(h, o.onPointerLeave), h.pointerType !== "touch" && (s = false, l = false, n.isOpen() ? p() : n.cancelOpening());
  }, f = (h) => {
    De(h, o.onPointerDown), i = true, ge(t).addEventListener("pointerup", a, { once: true });
  }, d = (h) => {
    De(h, o.onClick), s = false, l = false, p(true);
  }, m = (h) => {
    De(h, o.onFocus), !(n.isDisabled() || h.defaultPrevented || i) && (l = true, c());
  }, v = (h) => {
    De(h, o.onBlur);
    const w = h.relatedTarget;
    n.isTargetOnTooltip(w) || (s = false, l = false, p(true));
  };
  return onCleanup(() => {
    isServer || ge(t).removeEventListener("pointerup", a);
  }), createComponent$1(te$1, mergeProps({ as: "button", get "aria-describedby"() {
    return n.isOpen() ? n.contentId() : void 0;
  }, onPointerEnter: u, onPointerLeave: g, onPointerDown: f, onClick: d, onFocus: m, onBlur: v }, () => n.dataset(), r));
}
var nr$1 = Object.assign(er$1, { Arrow: fn, Content: Qo, Portal: Jo, Trigger: tr$1 });
nr$1.Trigger;
const qc = je$3(["relative isolate", "rounded-md", "overflow-hidden", "cursor-pointer", "outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"]), Kc = je$3(["absolute inset-0", "flex flex-col items-center justify-center gap-2", "opacity-0 hover:opacity-100", "transition-all duration-300 ease-in-out", "bg-gradient-to-b from-gray-500/20 to-foreground/85", "text-center text-white"]), Uc = je$3(["-translate-y-1/2 -translate-x-1/2 fixed top-1/2 left-1/2 z-50", "px-4 py-4", "flex items-center justify-center gap-4", "data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] duration-200 data-[closed]:animate-out data-[expanded]:animate-in"]), Yc = je$3(["absolute top-6 right-6", "flex items-center justify-center", "size-8 rounded-full", "bg-gray-500/40 text-gray-100 hover:bg-gray-950/50 hover:text-white", "text-lg leading-none", "transition-colors duration-300 ease-in-out", "outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"]), Xc = je$3(["fixed inset-0 z-50", "bg-gray-900/90 backdrop-blur-sm", "data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:animate-out data-[expanded]:animate-in"]);

const i = tv({ base: ["py-2", "z-50", "transition duration-300 ease-in-out"], variants: { mode: { transparent: "fixed top-0 right-0 left-0", solid: "" }, isSticky: { true: ["bg-gray-50", "shadow-lg", "sticky top-0 inset-x-0"], false: [] } }, defaultVariants: { mode: "transparent" } }), n = tv({ base: ["container h-full", "flex items-center justify-between gap-4", "mx-auto px-4"], variants: { mode: { transparent: ["text-white"], solid: [""] }, isSticky: { true: "text-gray-800", false: [] } }, defaultVariants: { mode: "transparent" } }), s = cva(["fixed", "z-50", "flex flex-col", "bg-white", "shadow-sm", "data-[transitioning]:transition-transform data-[transitioning]:duration-500 data-[transitioning]:ease-[cubic-bezier(0.32,0.72,0,1)]"], { variants: { side: { top: ["top-0", "rounded-b-lg"], bottom: ["bottom-0", "rounded-t-lg"], right: ["right-0"], left: ["left-0"] } }, compoundVariants: [{ side: ["top", "bottom"], class: ["h-full max-h-[500px]", "inset-x-0"] }, { side: ["left", "right"], class: ["h-full w-full max-w-[85vw] md:max-w-[50vw]", "inset-y-0"] }] }), o = cva(["py-3 pr-4 pl-8", "flex items-center", "font-bold font-serif text-lg", "transition duration-300 ease-in-out", 'relative before:absolute before:inset-y-0 before:left-0 before:h-full before:w-1 before:rounded-r-md before:bg-transparent before:content-[""]'], { variants: { isActive: { true: ["text-gray-900", "before:bg-gray-900"], false: ["text-gray-800", "hover:text-gray-900 hover:before:bg-gray-900"] } }, defaultVariants: { isActive: false } }), f = cva(["h-14", "px-4", "inline-flex items-center justify-center", "font-bold font-serif text-lg", "transition-all duration-300 ease-in-out", 'relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-b-sm after:bg-transparent after:content-[""]'], { variants: { isActive: { true: [], false: [] }, mode: { transparent: ["text-gray-100", "hover:text-white hover:after:bg-white"], solid: ["text-gray-500", "hover:text-gray-900 hover:after:bg-gray-900"] }, isSticky: { true: ["text-gray-600", "hover:text-gray-900 hover:after:bg-gray-900"], false: [] } }, compoundVariants: [{ isActive: true, mode: "solid", class: ["after:bg-gray-900", "text-gray-900"] }, { isActive: true, mode: "transparent", class: ["after:bg-white", "text-white"] }], defaultVariants: { isActive: false } });

function m$1(...r) {
  return twMerge(je$3(...r));
}

const m = /* @__PURE__ */ new Map();
function x$1(t) {
  const e = C$1();
  return (...n) => t.apply({ r: e }, n);
}
function E(t, e) {
  function n(...r) {
    const a = this.r, c = this.f, o = (a.singleFlight && t.withOptions ? t.withOptions({ headers: { "X-Single-Flight": "true" } }) : t)(...r), [l, f] = createSignal();
    let g;
    function u(d) {
      return async (h) => {
        const s = await K$1(h, d, a.navigatorFactory());
        if (!s)
          return g.clear();
        if (f(s), s.error && !c)
          throw s.error;
        return s.data;
      };
    }
    return a.submissions[1]((d) => [...d, g = { input: r, url: i, get result() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.data;
    }, get error() {
      var _a;
      return (_a = l()) == null ? void 0 : _a.error;
    }, get pending() {
      return !l();
    }, clear() {
      a.submissions[1]((h) => h.filter((s) => s.input !== r));
    }, retry() {
      return f(void 0), t(...r).then(u(), u(true));
    } }]), o.then(u(), u(true));
  }
  const i = t.url || e || (isServer ? "" : `https://action/${C(t.toString())}`);
  return w(n, i);
}
function w(t, e) {
  return t.toString = () => {
    if (!e)
      throw new Error("Client Actions need explicit names if server rendered");
    return e;
  }, t.with = function(...n) {
    const i = function(...a) {
      return t.call(this, ...n, ...a);
    }, r = new URL(e, Pe$1);
    return r.searchParams.set("args", mn(n)), w(i, (r.origin === "https://action" ? r.origin : "") + r.pathname + r.search);
  }, t.url = e, isServer || (m.set(e, t), getOwner() && onCleanup(() => m.delete(e))), t;
}
const C = (t) => t.split("").reduce((e, n) => (e << 5) - e + n.charCodeAt(0) | 0, 0);
async function K$1(t, e, n) {
  let i, r, a, c;
  if (t instanceof Response) {
    if (t.headers.has("X-Revalidate") && (a = t.headers.get("X-Revalidate").split(",")), t.customBody && (i = r = await t.customBody(), t.headers.has("X-Single-Flight") && (i = i._$value, delete r._$value, c = Object.keys(r))), t.headers.has("Location")) {
      const o = t.headers.get("Location") || "/";
      o.startsWith("http") ? window.location.href = o : n(o);
    }
  } else {
    if (e)
      return { error: t };
    i = t;
  }
  return kr(a, (o) => o[0] = 0), c && c.forEach((o) => de.set(o, r[o])), await vc(a, false), i != null ? { data: i } : void 0;
}

const te = (e) => (t) => {
  const { base: r } = t, o = children(() => t.children), n = createMemo(() => _e(o(), t.base || ""));
  let a;
  const s = Te$1(e, n, () => a, { base: r, singleFlight: t.singleFlight, transformUrl: t.transformUrl });
  return e.create && e.create(s), createComponent$1(Ae$1.Provider, { value: s, get children() {
    return createComponent$1(tt, { routerState: s, get root() {
      return t.root;
    }, get preload() {
      return t.rootPreload || t.rootLoad;
    }, get children() {
      return [(a = getOwner()) && null, createComponent$1(rt, { routerState: s, get branches() {
        return n();
      } })];
    } });
  } });
};
function tt(e) {
  const t = e.routerState.location, r = e.routerState.params, o = createMemo(() => e.preload && untrack(() => {
    Ne$1(true), e.preload({ params: r, location: t, intent: He$1() || "initial" }), Ne$1(false);
  }));
  return createComponent$1(Show, { get when() {
    return e.root;
  }, keyed: true, get fallback() {
    return e.children;
  }, children: (n) => createComponent$1(n, { params: r, location: t, get data() {
    return o();
  }, get children() {
    return e.children;
  } }) });
}
function rt(e) {
  if (isServer) {
    const n = getRequestEvent();
    if (n && n.router && n.router.dataOnly) {
      nt(n, e.routerState, e.branches);
      return;
    }
    n && ((n.router || (n.router = {})).matches || (n.router.matches = e.routerState.matches().map(({ route: a, path: s, params: i }) => ({ path: a.originalPath, pattern: a.pattern, match: s, params: i, info: a.info }))));
  }
  const t = [];
  let r;
  const o = createMemo(on$2(e.routerState.matches, (n, a, s) => {
    let i = a && n.length === a.length;
    const p = [];
    for (let c = 0, w = n.length; c < w; c++) {
      const S = a && a[c], v = n[c];
      s && S && v.route.key === S.route.key ? p[c] = s[c] : (i = false, t[c] && t[c](), createRoot((y) => {
        t[c] = y, p[c] = Xe$1(e.routerState, p[c - 1] || e.routerState.base, K(() => o()[c + 1]), () => e.routerState.matches()[c]);
      }));
    }
    return t.splice(n.length).forEach((c) => c()), s && i ? s : (r = p[0], p);
  }));
  return K(() => o() && r)();
}
const K = (e) => () => createComponent$1(Show, { get when() {
  return e();
}, keyed: true, children: (t) => createComponent$1(ne$1.Provider, { value: t, get children() {
  return t.outlet();
} }) });
function nt(e, t, r) {
  const o = new URL(e.request.url), n = M$1(r, new URL(e.router.previousUrl || e.request.url).pathname), a = M$1(r, o.pathname);
  for (let s = 0; s < a.length; s++) {
    (!n[s] || a[s].route !== n[s].route) && (e.router.dataOnly = true);
    const { route: i, params: p } = a[s];
    i.preload && i.preload({ params: p, location: t.location, intent: "preload" });
  }
}
function ot([e, t], r, o) {
  return [e, o ? (n) => t(o(n)) : t];
}
function st(e) {
  if (e === "#")
    return null;
  try {
    return document.querySelector(e);
  } catch {
    return null;
  }
}
function at(e) {
  let t = false;
  const r = (n) => typeof n == "string" ? { value: n } : n, o = ot(createSignal(r(e.get()), { equals: (n, a) => n.value === a.value && n.state === a.state }), void 0, (n) => (!t && e.set(n), sharedConfig.registry && !sharedConfig.done && (sharedConfig.done = true), n));
  return e.init && onCleanup(e.init((n = e.get()) => {
    t = true, o[1](r(n)), t = false;
  })), te({ signal: o, create: e.create, utils: e.utils });
}
function it(e, t, r) {
  return e.addEventListener(t, r), () => e.removeEventListener(t, r);
}
function ct(e, t) {
  const r = st(`#${e}`);
  r ? r.scrollIntoView() : t && window.scrollTo(0, 0);
}
function lt(e) {
  const t = new URL(e);
  return t.pathname + t.search;
}
function ut(e) {
  let t;
  const r = { value: e.url || (t = getRequestEvent()) && lt(t.request.url) || "" };
  return te({ signal: [() => r, (o) => Object.assign(r, o)] })(e);
}
function dt(e = true, t = false, r = "/_server", o) {
  return (n) => {
    const a = n.base.path(), s = n.navigatorFactory(n.base);
    let i = {};
    function p(u) {
      return u.namespaceURI === "http://www.w3.org/2000/svg";
    }
    function c(u) {
      if (u.defaultPrevented || u.button !== 0 || u.metaKey || u.altKey || u.ctrlKey || u.shiftKey)
        return;
      const d = u.composedPath().find((H) => H instanceof Node && H.nodeName.toUpperCase() === "A");
      if (!d || t && !d.hasAttribute("link"))
        return;
      const g = p(d), f = g ? d.href.baseVal : d.href;
      if ((g ? d.target.baseVal : d.target) || !f && !d.hasAttribute("state"))
        return;
      const T = (d.getAttribute("rel") || "").split(/\s+/);
      if (d.hasAttribute("download") || T && T.includes("external"))
        return;
      const N = g ? new URL(f, document.baseURI) : new URL(f);
      if (!(N.origin !== window.location.origin || a && N.pathname && !N.pathname.toLowerCase().startsWith(a.toLowerCase())))
        return [d, N];
    }
    function w(u) {
      const d = c(u);
      if (!d)
        return;
      const [g, f] = d, F = n.parsePath(f.pathname + f.search + f.hash), T = g.getAttribute("state");
      u.preventDefault(), s(F, { resolve: false, replace: g.hasAttribute("replace"), scroll: !g.hasAttribute("noscroll"), state: T && JSON.parse(T) });
    }
    function S(u) {
      const d = c(u);
      if (!d)
        return;
      const [g, f] = d;
      typeof o == "function" && (f.pathname = o(f.pathname)), i[f.pathname] || n.preloadRoute(f, { preloadData: g.getAttribute("preload") !== "false" });
    }
    function v(u) {
      const d = c(u);
      if (!d)
        return;
      const [g, f] = d;
      typeof o == "function" && (f.pathname = o(f.pathname)), !i[f.pathname] && (i[f.pathname] = setTimeout(() => {
        n.preloadRoute(f, { preloadData: g.getAttribute("preload") !== "false" }), delete i[f.pathname];
      }, 200));
    }
    function y(u) {
      const d = c(u);
      if (!d)
        return;
      const [, g] = d;
      typeof o == "function" && (g.pathname = o(g.pathname)), i[g.pathname] && (clearTimeout(i[g.pathname]), delete i[g.pathname]);
    }
    function A(u) {
      if (u.defaultPrevented)
        return;
      let d = u.submitter && u.submitter.hasAttribute("formaction") ? u.submitter.getAttribute("formaction") : u.target.getAttribute("action");
      if (!d)
        return;
      if (!d.startsWith("https://action/")) {
        const f = new URL(d, Pe$1);
        if (d = n.parsePath(f.pathname + f.search), !d.startsWith(r))
          return;
      }
      if (u.target.method.toUpperCase() !== "POST")
        throw new Error("Only POST forms are supported for Actions");
      const g = m.get(d);
      if (g) {
        u.preventDefault();
        const f = new FormData(u.target, u.submitter);
        g.call({ r: n, f: u.target }, u.target.enctype === "multipart/form-data" ? f : new URLSearchParams(f));
      }
    }
    delegateEvents(["click", "submit"]), document.addEventListener("click", w), e && (document.addEventListener("mouseover", v), document.addEventListener("mouseout", y), document.addEventListener("focusin", S), document.addEventListener("touchstart", S)), document.addEventListener("submit", A), onCleanup(() => {
      document.removeEventListener("click", w), e && (document.removeEventListener("mouseover", v), document.removeEventListener("mouseout", y), document.removeEventListener("focusin", S), document.removeEventListener("touchstart", S)), document.removeEventListener("submit", A);
    });
  };
}
function ht(e) {
  if (isServer)
    return ut(e);
  const t = () => ({ value: window.location.pathname.replace(/^\/+/, "/") + window.location.search + window.location.hash, state: window.history.state }), r = ye();
  return at({ get: t, set({ value: o, replace: n, scroll: a, state: s }) {
    n ? window.history.replaceState(De$1(s), "", o) : window.history.pushState(s, "", o), ct(decodeURIComponent(window.location.hash.slice(1)), a), Y$2();
  }, init: (o) => it(window, "popstate", Me$1(o, (n) => {
    if (n && n < 0)
      return !r.confirm(n);
    {
      const a = t();
      return !r.confirm(a.value, { state: a.state });
    }
  })), create: dt(e.preload, e.explicitLinks, e.actionBase, e.transformUrl), utils: { go: (o) => window.history.go(o), beforeLeave: r } })(e);
}
var ft = " ";
const mt = { style: (e) => ssrElement("style", e.attrs, () => escape(e.children), true), link: (e) => ssrElement("link", e.attrs, void 0, true), script: (e) => e.attrs.src ? ssrElement("script", mergeProps(() => e.attrs, { get id() {
  return e.key;
} }), () => ssr(ft), true) : null, noscript: (e) => ssrElement("noscript", e.attrs, () => escape(e.children), true) };
function _(e, t) {
  let { tag: r, attrs: { key: o, ...n } = { key: void 0 }, children: a } = e;
  return mt[r]({ attrs: { ...n, nonce: t }, key: o, children: a });
}
function gt(e, t, r, o = "default") {
  return lazy(async () => {
    var _a;
    {
      const a = (await e.import())[o], i = (await ((_a = t.inputs) == null ? void 0 : _a[e.src].assets())).filter((c) => c.tag === "style" || c.attrs.rel === "stylesheet");
      return { default: (c) => [...i.map((w) => _(w)), createComponent(a, c)] };
    }
  });
}
const x = { NORMAL: 0, WILDCARD: 1, PLACEHOLDER: 2 };
function bt(e = {}) {
  const t = { options: e, rootNode: re(), staticRoutesMap: {} }, r = (o) => e.strictTrailingSlash ? o : o.replace(/\/$/, "") || "/";
  if (e.routes)
    for (const o in e.routes)
      J(t, r(o), e.routes[o]);
  return { ctx: t, lookup: (o) => wt(t, r(o)), insert: (o, n) => J(t, r(o), n), remove: (o) => vt(t, r(o)) };
}
function wt(e, t) {
  const r = e.staticRoutesMap[t];
  if (r)
    return r.data;
  const o = t.split("/"), n = {};
  let a = false, s = null, i = e.rootNode, p = null;
  for (let c = 0; c < o.length; c++) {
    const w = o[c];
    i.wildcardChildNode !== null && (s = i.wildcardChildNode, p = o.slice(c).join("/"));
    const S = i.children.get(w);
    if (S === void 0) {
      if (i && i.placeholderChildren.length > 1) {
        const v = o.length - c;
        i = i.placeholderChildren.find((y) => y.maxDepth === v) || null;
      } else
        i = i.placeholderChildren[0] || null;
      if (!i)
        break;
      i.paramName && (n[i.paramName] = w), a = true;
    } else
      i = S;
  }
  return (i === null || i.data === null) && s !== null && (i = s, n[i.paramName || "_"] = p, a = true), i ? a ? { ...i.data, params: a ? n : void 0 } : i.data : null;
}
function J(e, t, r) {
  let o = true;
  const n = t.split("/");
  let a = e.rootNode, s = 0;
  const i = [a];
  for (const p of n) {
    let c;
    if (c = a.children.get(p))
      a = c;
    else {
      const w = yt(p);
      c = re({ type: w, parent: a }), a.children.set(p, c), w === x.PLACEHOLDER ? (c.paramName = p === "*" ? `_${s++}` : p.slice(1), a.placeholderChildren.push(c), o = false) : w === x.WILDCARD && (a.wildcardChildNode = c, c.paramName = p.slice(3) || "_", o = false), i.push(c), a = c;
    }
  }
  for (const [p, c] of i.entries())
    c.maxDepth = Math.max(i.length - p, c.maxDepth || 0);
  return a.data = r, o === true && (e.staticRoutesMap[t] = a), a;
}
function vt(e, t) {
  let r = false;
  const o = t.split("/");
  let n = e.rootNode;
  for (const a of o)
    if (n = n.children.get(a), !n)
      return r;
  if (n.data) {
    const a = o.at(-1) || "";
    n.data = null, Object.keys(n.children).length === 0 && n.parent && (n.parent.children.delete(a), n.parent.wildcardChildNode = null, n.parent.placeholderChildren = []), r = true;
  }
  return r;
}
function re(e = {}) {
  return { type: e.type || x.NORMAL, maxDepth: 0, parent: e.parent || null, children: /* @__PURE__ */ new Map(), data: e.data || null, paramName: e.paramName || null, wildcardChildNode: null, placeholderChildren: [] };
}
function yt(e) {
  return e.startsWith("**") ? x.WILDCARD : e[0] === ":" || e === "*" ? x.PLACEHOLDER : x.NORMAL;
}
const ne = [{ page: true, $component: { src: "src/routes/[...404].tsx?pick=default&pick=$css", build: () => import('./build/_...404_2.mjs'), import: () => import('./build/_...404_2.mjs') }, path: "/*404", filePath: "/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/[...404].tsx" }, { page: true, $component: { src: "src/routes/about.tsx?pick=default&pick=$css", build: () => import('./build/about2.mjs'), import: () => import('./build/about2.mjs') }, path: "/about", filePath: "/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/about.tsx" }, { page: true, $component: { src: "src/routes/contactos.tsx?pick=default&pick=$css", build: () => import('./build/contactos2.mjs'), import: () => import('./build/contactos2.mjs') }, path: "/contactos", filePath: "/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/contactos.tsx" }, { page: true, $component: { src: "src/routes/index.tsx?pick=default&pick=$css", build: () => import('./build/index3.mjs'), import: () => import('./build/index3.mjs') }, path: "/", filePath: "/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/index.tsx" }, { page: true, $component: { src: "src/routes/sobre-nos.tsx?pick=default&pick=$css", build: () => import('./build/sobre-nos2.mjs'), import: () => import('./build/sobre-nos2.mjs') }, path: "/sobre-nos", filePath: "/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/sobre-nos.tsx" }, { page: true, $component: { src: "src/routes/projetos/[slug].tsx?pick=default&pick=$css", build: () => import('./build/_slug_2.mjs'), import: () => import('./build/_slug_2.mjs') }, path: "/projetos/:slug", filePath: "/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/[slug].tsx" }, { page: true, $component: { src: "src/routes/projetos/index.tsx?pick=default&pick=$css", build: () => import('./build/index22.mjs'), import: () => import('./build/index22.mjs') }, path: "/projetos/", filePath: "/Users/tutods/Developer/freelances/mc-ocidente-charmoso/apps/frontend/src/routes/projetos/index.tsx" }], $t = St(ne.filter((e) => e.page));
function St(e) {
  function t(r, o, n, a) {
    const s = Object.values(r).find((i) => n.startsWith(i.id + "/"));
    return s ? (t(s.children || (s.children = []), o, n.slice(s.id.length)), r) : (r.push({ ...o, id: n, path: n.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "") }), r);
  }
  return e.sort((r, o) => r.path.length - o.path.length).reduce((r, o) => t(r, o, o.path, o.path), []);
}
function Et(e, t) {
  const r = kt.lookup(e);
  if (r && r.route) {
    const o = r.route[`$${t}`];
    return o === void 0 ? void 0 : { handler: o, params: r.params };
  }
}
function Ct(e) {
  return e.$GET || e.$POST || e.$PUT || e.$PATCH || e.$DELETE;
}
const kt = bt({ routes: ne.reduce((e, t) => {
  if (!Ct(t))
    return e;
  let r = t.path.replace(/\/\([^)/]+\)/g, "").replace(/\([^)/]+\)/g, "").replace(/\*([^/]*)/g, (o, n) => `**:${n}`);
  if (/:[^/]*\?/g.test(r))
    throw new Error(`Optional parameters are not supported in API routes: ${r}`);
  if (e[r])
    throw new Error(`Duplicate API routes for "${r}" found at "${e[r].route.path}" and "${t.path}"`);
  return e[r] = { route: t }, e;
}, {}) });
function oe() {
  function e(r) {
    return { ...r, ...r.$$route ? r.$$route.require().route : void 0, info: { ...r.$$route ? r.$$route.require().route.info : {}, filesystem: true }, component: r.$component && gt(r.$component, globalThis.MANIFEST.client, globalThis.MANIFEST.ssr), children: r.children ? r.children.map(e) : void 0 };
  }
  return $t.map(e);
}
let G;
const xt = isServer ? () => getRequestEvent().routes : () => G || (G = oe()), Rt = ["/", "/contactos", "/404"], se = [{ key: "home", label: "P\xE1gina Inicial", href: "/" }, { key: "about-us", label: "Sobre n\xF3s", href: "/sobre-nos" }, { key: "projects", label: "Projetos", href: "/projetos" }, { key: "contacts", label: "Contactos", href: "/contactos" }], At = ["/projetos/:slug", "/projetos"];
var Tt = ["<i", ' class="ph ph-arrow-right leading-none"></i>'], Lt = ["<section", ' class="flex flex-col items-center justify-center overflow-hidden py-20"><div class="container relative isolate text-center"><h2>', '</h2><p class="mt-2 text-lg leading-8">', '</p><ul class="mt-6 flex flex-wrap items-center justify-center gap-8">', "</ul><!--$-->", "<!--/--></div></section>"], Pt = ["<li", ' class="flex items-center gap-2 font-medium"><i class="ph ph-check text-lg"></i><!--$-->', "<!--/--></li>"];
function Nt() {
  const e = Oe$1(), t = createMemo(() => e.pathname), r = createMemo(() => !Rt.includes(t())), o = bc(() => Ec(r()));
  return createComponent$1(Suspense, { get children() {
    return createComponent$1(Show, { get when() {
      return r() && !!o();
    }, get children() {
      var _a, _b;
      return ssr(Lt, ssrHydrationKey(), escape((_a = o()) == null ? void 0 : _a.title), escape((_b = o()) == null ? void 0 : _b.description), escape(createComponent$1(For, { get each() {
        var _a2;
        return (_a2 = o()) == null ? void 0 : _a2.points;
      }, children: (n) => ssr(Pt, ssrHydrationKey(), escape(n)) })), escape(createComponent$1(Fc, { variant: "ghost", class: "mt-10 inline-flex items-center gap-2 font-semibold", as: "a", href: "/contactos", get children() {
        var _a2;
        return [(_a2 = o()) == null ? void 0 : _a2.button, ssr(Tt, ssrHydrationKey())];
      } })));
    } });
  } });
}
function Dt() {
  const e = useWindowSize();
  return createMemo(() => e.width > 480 && e.width < 1024 ? "tablet" : e.width <= 480 ? "mobile" : "desktop");
}
var Ot = ["<i", ' class="ph ph-list text-2xl"></i>'], _t = ["<i", ' class="ph ph-x text-lg"></i>'], Mt = ["<header", ' class="flex items-center justify-between gap-4 p-4"><p>MC Ocidente charmoso</p><!--$-->', "<!--/--></header>"], It = ["<nav", ' class="flex-1 py-4"><ul class="flex flex-col">', "</ul></nav>"], jt = ["<li", "><a", ">", "</a></li>"];
function Ut(e) {
  const t = Oe$1();
  function r(o) {
    return o === t.pathname;
  }
  return createComponent$1(Oo, { side: "right", children: (o$1) => [createComponent$1(Oo.Trigger, { get class() {
    return m$1(["size-8 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-70", { "text-gray-50 hover:text-white": e.mode === "transparent" }, { "text-gray-800": e.isSticky }]);
  }, get children() {
    return ssr(Ot, ssrHydrationKey());
  } }), createComponent$1(Oo.Portal, { get children() {
    return [createComponent$1(Oo.Overlay, { get class() {
      return m$1(["fixed inset-0", "z-50", "data-[transitioning]:transition-colors data-[transitioning]:duration-300"]);
    }, get style() {
      return { "background-color": `rgb(0 0 0 / ${0.5 * o$1.openPercentage})` };
    } }), createComponent$1(Oo.Content, { get class() {
      return twMerge(s({ side: "right" }));
    }, get children() {
      return [ssr(Mt, ssrHydrationKey(), escape(createComponent$1(Oo.Close, { class: "size-7 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-gray-100/50 disabled:cursor-not-allowed disabled:opacity-70", get children() {
        return ssr(_t, ssrHydrationKey());
      } }))), ssr(It, ssrHydrationKey(), escape(createComponent$1(For, { each: se, children: (n) => ssr(jt, ssrHydrationKey(), ssrAttribute("class", escape(twMerge(o({ isActive: r(n.href) })), true), false) + ssrAttribute("href", escape(n.href, true), false), escape(n.label)) })))];
    } })];
  } })] });
}
var Ft = ["<nav", "><ul", ">", "</ul></nav>"], Ht = ["<li", "><a", ">", "</a></li>"];
function qt(e) {
  var _a;
  const { nav: t = "", item: r = "", ul: o = "", li: n = "" } = (_a = e.classNames) != null ? _a : {}, a = Oe$1();
  function s(i) {
    return i === a.pathname;
  }
  return ssr(Ft, ssrHydrationKey() + ssrAttribute("class", escape(t, true), false), ssrAttribute("class", escape(twMerge("flex items-center justify-end", o), true), false), escape(createComponent$1(For, { each: se, children: (i) => ssr(Ht, ssrHydrationKey() + ssrAttribute("class", escape(n, true), false), ssrAttribute("class", escape(twMerge(f({ mode: e.mode, isSticky: e.isSticky, isActive: s(i.href), class: r })), true), false) + ssrAttribute("href", escape(i.href, true), false), escape(i.label)) })));
}
var Bt = ["<header", "><div", '><a href="/"><img class="h-auto max-w-20" fetchpriority="high" src="/logo.jpeg" alt="MC Ocidente Charmoso"></a><!--$-->', "<!--/--></div></header>"];
function Wt({ mode: e = "transparent", className: t = "" }) {
  const r = useWindowScrollPosition(), o = Dt(), n$1 = Oe$1(), a = createMemo(() => n$1.pathname), s = createMemo(() => At.includes(a()) ? "solid" : e != null ? e : "transparent"), i$1 = createMemo(() => r.y > 50);
  return ssr(Bt, ssrHydrationKey() + ssrAttribute("class", escape(twMerge(i({ mode: s(), isSticky: i$1(), class: t })), true), false), ssrAttribute("class", escape(twMerge(n({ mode: s(), isSticky: i$1() })), true), false), escape(createComponent$1(Switch, { get children() {
    return [createComponent$1(Match, { get when() {
      return o() === "desktop";
    }, get children() {
      return createComponent$1(qt, { get mode() {
        return s();
      }, get isSticky() {
        return i$1();
      } });
    } }), createComponent$1(Match, { get when() {
      return ["mobile", "tablet"].includes(o());
    }, get children() {
      return createComponent$1(Ut, { get mode() {
        return s();
      }, get isSticky() {
        return i$1();
      } });
    } })];
  } })));
}
function zt() {
  return createComponent$1(ht, { preload: true, root: (e) => createComponent$1(Suspense, { fallback: "Loading...", get children() {
    return [createComponent$1(Wt, { mode: "solid" }), e.children, createComponent$1(Nt, {})];
  } }), get children() {
    return createComponent$1(xt, {});
  } });
}
const ae = isServer ? (e) => {
  const t = getRequestEvent();
  return t.response.status = e.code, t.response.statusText = e.text, onCleanup(() => !t.nativeEvent.handled && !t.complete && (t.response.status = 200)), null;
} : (e) => null;
var Vt = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">', "</span>"], Kt = ["<span", ' style="font-size:1.5em;text-align:center;position:fixed;left:0px;bottom:55%;width:100%;">500 | Internal Server Error</span>'];
const Jt = (e) => {
  const t = isServer ? "500 | Internal Server Error" : "Error | Uncaught Client Exception";
  return createComponent$1(ErrorBoundary, { fallback: (r) => (console.error(r), [ssr(Vt, ssrHydrationKey(), escape(t)), createComponent$1(ae, { code: 500 })]), get children() {
    return e.children;
  } });
}, Gt = (e) => {
  let t = false;
  const r = catchError(() => e.children, (o) => {
    console.error(o), t = !!o;
  });
  return t ? [ssr(Kt, ssrHydrationKey()), createComponent$1(ae, { code: 500 })] : r;
};
var Y = ["<script", ">", "<\/script>"], Yt = ["<script", ' type="module"', " async", "><\/script>"], Xt = ["<script", ' type="module" async', "><\/script>"];
const Qt = ssr("<!DOCTYPE html>");
function ie(e, t, r = []) {
  for (let o = 0; o < t.length; o++) {
    const n = t[o];
    if (n.path !== e[0].path)
      continue;
    let a = [...r, n];
    if (n.children) {
      const s = e.slice(1);
      if (s.length === 0 || (a = ie(s, n.children, a), !a))
        continue;
    }
    return a;
  }
}
function Zt(e) {
  const t = getRequestEvent(), r = t.nonce;
  let o = [];
  return Promise.resolve().then(async () => {
    let n = [];
    if (t.router && t.router.matches) {
      const a = [...t.router.matches];
      for (; a.length && (!a[0].info || !a[0].info.filesystem); )
        a.shift();
      const s = a.length && ie(a, t.routes);
      if (s) {
        const i = globalThis.MANIFEST.client.inputs;
        for (let p = 0; p < s.length; p++) {
          const c = s[p], w = i[c.$component.src];
          n.push(w.assets());
        }
      }
    }
    o = await Promise.all(n).then((a) => [...new Map(a.flat().map((s) => [s.attrs.key, s])).values()].filter((s) => s.attrs.rel === "modulepreload" && !t.assets.find((i) => i.attrs.key === s.attrs.key)));
  }), useAssets(() => o.length ? o.map((n) => _(n)) : void 0), createComponent$1(NoHydration, { get children() {
    return [Qt, createComponent$1(Gt, { get children() {
      return createComponent$1(e.document, { get assets() {
        return [createComponent$1(HydrationScript, {}), t.assets.map((n) => _(n, r))];
      }, get scripts() {
        return r ? [ssr(Y, ssrHydrationKey() + ssrAttribute("nonce", escape(r, true), false), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(Yt, ssrHydrationKey(), ssrAttribute("nonce", escape(r, true), false), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))] : [ssr(Y, ssrHydrationKey(), `window.manifest = ${JSON.stringify(t.manifest)}`), ssr(Xt, ssrHydrationKey(), ssrAttribute("src", escape(globalThis.MANIFEST.client.inputs[globalThis.MANIFEST.client.handler].output.path, true), false))];
      }, get children() {
        return createComponent$1(Hydration, { get children() {
          return createComponent$1(Jt, { get children() {
            return createComponent$1(zt, {});
          } });
        } });
      } });
    } })];
  } });
}
function er(e) {
  const t = wc(e.nativeEvent, "flash");
  if (!t)
    return;
  let r = JSON.parse(t);
  if (!r || !r.result)
    return;
  const o = [...r.input.slice(0, -1), new Map(r.input[r.input.length - 1])];
  xc(e.nativeEvent, "flash", "", { maxAge: 0 });
  const n = r.error ? new Error(r.result) : r.result;
  return { input: o, url: r.url, pending: false, result: r.thrown ? void 0 : n, error: r.thrown ? n : void 0 };
}
async function tr(e) {
  const t = globalThis.MANIFEST.client;
  return globalThis.MANIFEST.ssr, e.response.headers.set("Content-Type", "text/html"), Object.assign(e, { manifest: await t.json(), assets: [...await t.inputs[t.handler].assets()], router: { submission: er(e) }, routes: oe(), complete: false, $islands: /* @__PURE__ */ new Set() });
}
const rr = /* @__PURE__ */ new Set([301, 302, 303, 307, 308]);
function M(e) {
  return e.status && rr.has(e.status) ? e.status : 302;
}
function nr(e, t, r = {}) {
  return eventHandler({ handler: (o) => {
    const n = Sc(o);
    return provideRequestEvent(n, async () => {
      const a = Et(new URL(n.request.url).pathname, n.request.method);
      if (a) {
        const y = (await a.handler.import())[n.request.method];
        n.params = a.params || {}, sharedConfig.context = { event: n };
        const A = await y(n);
        if (A !== void 0)
          return A;
        if (n.request.method !== "GET")
          throw new Error(`API handler for ${n.request.method} "${n.request.url}" did not return a response.`);
      }
      const s = await t(n), i = typeof r == "function" ? await r(s) : { ...r }, p = i.mode || "stream";
      if (i.nonce && (s.nonce = i.nonce), p === "sync") {
        const v = renderToString(() => (sharedConfig.context.event = s, e(s)), i);
        if (s.complete = true, s.response && s.response.headers.get("Location")) {
          const y = M(s.response);
          return yc(o, s.response.headers.get("Location"), y);
        }
        return v;
      }
      if (i.onCompleteAll) {
        const v = i.onCompleteAll;
        i.onCompleteAll = (y) => {
          Q(s)(y), v(y);
        };
      } else
        i.onCompleteAll = Q(s);
      if (i.onCompleteShell) {
        const v = i.onCompleteShell;
        i.onCompleteShell = (y) => {
          X(s, o)(), v(y);
        };
      } else
        i.onCompleteShell = X(s, o);
      const c = renderToStream(() => (sharedConfig.context.event = s, e(s)), i);
      if (s.response && s.response.headers.get("Location")) {
        const v = M(s.response);
        return yc(o, s.response.headers.get("Location"), v);
      }
      if (p === "async")
        return c;
      const { writable: w, readable: S } = new TransformStream();
      return c.pipeTo(w), S;
    });
  } });
}
function X(e, t) {
  return () => {
    if (e.response && e.response.headers.get("Location")) {
      const r = M(e.response);
      wn(t, r), Pc(t, "Location", e.response.headers.get("Location"));
    }
  };
}
function Q(e) {
  return ({ write: t }) => {
    e.complete = true;
    const r = e.response && e.response.headers.get("Location");
    r && t(`<script>window.location="${r}"<\/script>`);
  };
}
function or(e, t) {
  return nr(e, tr, t);
}
var sr = ['<head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><link rel="icon" href="/favicon.ico">', "</head>"], ar = ["<html", ' lang="en">', '<body><div id="app">', "</div><!--$-->", "<!--/--></body></html>"];
const Cr = or(() => createComponent$1(Zt, { document: ({ assets: e, children: t, scripts: r }) => ssr(ar, ssrHydrationKey(), createComponent$1(NoHydration, { get children() {
  return ssr(sr, escape(e));
} }), escape(t), escape(r)) }));

const handlers = [
  { route: '', handler: _f4b49z, lazy: false, middleware: true, method: undefined },
  { route: '/_server', handler: hs$1, lazy: false, middleware: true, method: undefined },
  { route: '/', handler: Cr, lazy: false, middleware: true, method: undefined }
];

function createNitroApp() {
  const config = useRuntimeConfig();
  const hooks = createHooks();
  const captureError = (error, context = {}) => {
    const promise = hooks.callHookParallel("error", error, context).catch((_err) => {
      console.error("Error while capturing another error", _err);
    });
    if (context.event && isEvent(context.event)) {
      const errors = context.event.context.nitro?.errors;
      if (errors) {
        errors.push({ error, context });
      }
      if (context.event.waitUntil) {
        context.event.waitUntil(promise);
      }
    }
  };
  const h3App = createApp({
    debug: destr(false),
    onError: (error, event) => {
      captureError(error, { event, tags: ["request"] });
      return errorHandler(error, event);
    },
    onRequest: async (event) => {
      await nitroApp.hooks.callHook("request", event).catch((error) => {
        captureError(error, { event, tags: ["request"] });
      });
    },
    onBeforeResponse: async (event, response) => {
      await nitroApp.hooks.callHook("beforeResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    },
    onAfterResponse: async (event, response) => {
      await nitroApp.hooks.callHook("afterResponse", event, response).catch((error) => {
        captureError(error, { event, tags: ["request", "response"] });
      });
    }
  });
  const router = createRouter({
    preemptive: true
  });
  const localCall = createCall(toNodeListener(h3App));
  const _localFetch = createFetch(localCall, globalThis.fetch);
  const localFetch = (input, init) => _localFetch(input, init).then(
    (response) => normalizeFetchResponse(response)
  );
  const $fetch = createFetch$1({
    fetch: localFetch,
    Headers: Headers$1,
    defaults: { baseURL: config.app.baseURL }
  });
  globalThis.$fetch = $fetch;
  h3App.use(createRouteRulesHandler({ localFetch }));
  h3App.use(
    eventHandler((event) => {
      event.context.nitro = event.context.nitro || { errors: [] };
      const envContext = event.node.req?.__unenv__;
      if (envContext) {
        Object.assign(event.context, envContext);
      }
      event.fetch = (req, init) => fetchWithEvent(event, req, init, { fetch: localFetch });
      event.$fetch = (req, init) => fetchWithEvent(event, req, init, {
        fetch: $fetch
      });
      event.waitUntil = (promise) => {
        if (!event.context.nitro._waitUntilPromises) {
          event.context.nitro._waitUntilPromises = [];
        }
        event.context.nitro._waitUntilPromises.push(promise);
        if (envContext?.waitUntil) {
          envContext.waitUntil(promise);
        }
      };
      event.captureError = (error, context) => {
        captureError(error, { event, ...context });
      };
    })
  );
  for (const h of handlers) {
    let handler = h.lazy ? lazyEventHandler(h.handler) : h.handler;
    if (h.middleware || !h.route) {
      const middlewareBase = (config.app.baseURL + (h.route || "/")).replace(
        /\/+/g,
        "/"
      );
      h3App.use(middlewareBase, handler);
    } else {
      const routeRules = getRouteRulesForPath(
        h.route.replace(/:\w+|\*\*/g, "_")
      );
      if (routeRules.cache) {
        handler = cachedEventHandler(handler, {
          group: "nitro/routes",
          ...routeRules.cache
        });
      }
      router.use(h.route, handler, h.method);
    }
  }
  h3App.use(config.app.baseURL, router.handler);
  {
    const _handler = h3App.handler;
    h3App.handler = (event) => {
      const ctx = { event };
      return nitroAsyncContext.callAsync(ctx, () => _handler(event));
    };
  }
  const app = {
    hooks,
    h3App,
    router,
    localCall,
    localFetch,
    captureError
  };
  for (const plugin of plugins) {
    try {
      plugin(app);
    } catch (err) {
      captureError(err, { tags: ["plugin"] });
      throw err;
    }
  }
  return app;
}
const nitroApp = createNitroApp();
const useNitroApp = () => nitroApp;

const debug = (...args) => {
};
function GracefulShutdown(server, opts) {
  opts = opts || {};
  const options = Object.assign(
    {
      signals: "SIGINT SIGTERM",
      timeout: 3e4,
      development: false,
      forceExit: true,
      onShutdown: (signal) => Promise.resolve(signal),
      preShutdown: (signal) => Promise.resolve(signal)
    },
    opts
  );
  let isShuttingDown = false;
  const connections = {};
  let connectionCounter = 0;
  const secureConnections = {};
  let secureConnectionCounter = 0;
  let failed = false;
  let finalRun = false;
  function onceFactory() {
    let called = false;
    return (emitter, events, callback) => {
      function call() {
        if (!called) {
          called = true;
          return Reflect.apply(callback, this, arguments);
        }
      }
      for (const e of events) {
        emitter.on(e, call);
      }
    };
  }
  const signals = options.signals.split(" ").map((s) => s.trim()).filter((s) => s.length > 0);
  const once = onceFactory();
  once(process, signals, (signal) => {
    shutdown(signal).then(() => {
      if (options.forceExit) {
        process.exit(failed ? 1 : 0);
      }
    }).catch((err) => {
      process.exit(1);
    });
  });
  function isFunction(functionToCheck) {
    const getType = Object.prototype.toString.call(functionToCheck);
    return /^\[object\s([A-Za-z]+)?Function]$/.test(getType);
  }
  function destroy(socket, force = false) {
    if (socket._isIdle && isShuttingDown || force) {
      socket.destroy();
      if (socket.server instanceof http__default$1.Server) {
        delete connections[socket._connectionId];
      } else {
        delete secureConnections[socket._connectionId];
      }
    }
  }
  function destroyAllConnections(force = false) {
    for (const key of Object.keys(connections)) {
      const socket = connections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
    for (const key of Object.keys(secureConnections)) {
      const socket = secureConnections[key];
      const serverResponse = socket._httpMessage;
      if (serverResponse && !force) {
        if (!serverResponse.headersSent) {
          serverResponse.setHeader("connection", "close");
        }
      } else {
        destroy(socket);
      }
    }
  }
  server.on("request", function(req, res) {
    req.socket._isIdle = false;
    if (isShuttingDown && !res.headersSent) {
      res.setHeader("connection", "close");
    }
    res.on("finish", function() {
      req.socket._isIdle = true;
      destroy(req.socket);
    });
  });
  server.on("connection", function(socket) {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = connectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      connections[id] = socket;
      socket.once("close", () => {
        delete connections[socket._connectionId];
      });
    }
  });
  server.on("secureConnection", (socket) => {
    if (isShuttingDown) {
      socket.destroy();
    } else {
      const id = secureConnectionCounter++;
      socket._isIdle = true;
      socket._connectionId = id;
      secureConnections[id] = socket;
      socket.once("close", () => {
        delete secureConnections[socket._connectionId];
      });
    }
  });
  process.on("close", function() {
  });
  function shutdown(sig) {
    function cleanupHttp() {
      destroyAllConnections();
      return new Promise((resolve, reject) => {
        server.close((err) => {
          if (err) {
            return reject(err);
          }
          return resolve(true);
        });
      });
    }
    if (options.development) {
      return process.exit(0);
    }
    function finalHandler() {
      if (!finalRun) {
        finalRun = true;
        if (options.finally && isFunction(options.finally)) {
          options.finally();
        }
      }
      return Promise.resolve();
    }
    function waitForReadyToShutDown(totalNumInterval) {
      if (totalNumInterval === 0) {
        debug(
          `Could not close connections in time (${options.timeout}ms), will forcefully shut down`
        );
        return Promise.resolve(true);
      }
      const allConnectionsClosed = Object.keys(connections).length === 0 && Object.keys(secureConnections).length === 0;
      if (allConnectionsClosed) {
        return Promise.resolve(false);
      }
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(waitForReadyToShutDown(totalNumInterval - 1));
        }, 250);
      });
    }
    if (isShuttingDown) {
      return Promise.resolve();
    }
    return options.preShutdown(sig).then(() => {
      isShuttingDown = true;
      cleanupHttp();
    }).then(() => {
      const pollIterations = options.timeout ? Math.round(options.timeout / 250) : 0;
      return waitForReadyToShutDown(pollIterations);
    }).then((force) => {
      if (force) {
        destroyAllConnections(force);
      }
      return options.onShutdown(sig);
    }).then(finalHandler).catch((err) => {
      const errString = typeof err === "string" ? err : JSON.stringify(err);
      failed = true;
      throw errString;
    });
  }
  function shutdownManual() {
    return shutdown("manual");
  }
  return shutdownManual;
}

function getGracefulShutdownConfig() {
  return {
    disabled: !!process.env.NITRO_SHUTDOWN_DISABLED,
    signals: (process.env.NITRO_SHUTDOWN_SIGNALS || "SIGTERM SIGINT").split(" ").map((s) => s.trim()),
    timeout: Number.parseInt(process.env.NITRO_SHUTDOWN_TIMEOUT, 10) || 3e4,
    forceExit: !process.env.NITRO_SHUTDOWN_NO_FORCE_EXIT
  };
}
function setupGracefulShutdown(listener, nitroApp) {
  const shutdownConfig = getGracefulShutdownConfig();
  if (shutdownConfig.disabled) {
    return;
  }
  GracefulShutdown(listener, {
    signals: shutdownConfig.signals.join(" "),
    timeout: shutdownConfig.timeout,
    forceExit: shutdownConfig.forceExit,
    onShutdown: async () => {
      await new Promise((resolve) => {
        const timeout = setTimeout(() => {
          console.warn("Graceful shutdown timeout, force exiting...");
          resolve();
        }, shutdownConfig.timeout);
        nitroApp.hooks.callHook("close").catch((err) => {
          console.error(err);
        }).finally(() => {
          clearTimeout(timeout);
          resolve();
        });
      });
    }
  });
}

const cert = process.env.NITRO_SSL_CERT;
const key = process.env.NITRO_SSL_KEY;
const server = cert && key ? new Server({ key, cert }, toNodeListener(nitroApp.h3App)) : new Server$1(toNodeListener(nitroApp.h3App));
const port = destr(process.env.NITRO_PORT || process.env.PORT) || 3e3;
const host = process.env.NITRO_HOST || process.env.HOST;
const path = process.env.NITRO_UNIX_SOCKET;
const listener = server.listen(path ? { path } : { port, host }, (err) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  const protocol = cert && key ? "https" : "http";
  const addressInfo = listener.address();
  if (typeof addressInfo === "string") {
    console.log(`Listening on unix socket ${addressInfo}`);
    return;
  }
  const baseURL = (useRuntimeConfig().app.baseURL || "").replace(/\/$/, "");
  const url = `${protocol}://${addressInfo.family === "IPv6" ? `[${addressInfo.address}]` : addressInfo.address}:${addressInfo.port}${baseURL}`;
  console.log(`Listening on ${url}`);
});
trapUnhandledNodeErrors();
setupGracefulShutdown(listener, nitroApp);
const nodeServer = {};

export { $$2 as $, A$2 as A, Hc as B, Wc as C, De$3 as D, E$4 as E, Fc as F, Vc as G, He$2 as H, Bc as I, Ue as J, ke$1 as K, Oe$1 as L, Me$2 as M, Ne$3 as N, Oe$3 as O, P$1 as P, E$1 as Q, Pt$1 as R, S$2 as S, Te$3 as T, Ue$1 as U, Ve as V, We$2 as W, Xe$2 as X, Y$4 as Y, We$1 as Z, _e$1 as _, g as a, Tc as a0, m$1 as a1, Y$1 as a2, io as a3, te$1 as a4, pe as a5, qc as a6, Kc as a7, Xc as a8, Uc as a9, Yc as aa, Rc as ab, de as ac, ze$1 as ad, kc as ae, Ac as af, _c as ag, Mc as ah, $c as ai, zc as aj, Oe as ak, Lc as al, Cc as am, nodeServer as an, $$1 as b, g$2 as c, n$3 as d, a$1 as e, ds$1 as f, g$1 as g, Ae$3 as h, ne$2 as i, M$3 as j, ke$3 as k, Pe$3 as l, m$3 as m, node$1 as n, E as o, Ee as p, bc as q, lt$1 as r, x$1 as s, Dc as t, Oc as u, Nc as v, jc as w, x$4 as x, ye$2 as y, ze$3 as z };
//# sourceMappingURL=runtime.mjs.map
