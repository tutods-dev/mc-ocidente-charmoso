import { ssr, ssrHydrationKey, escape, createComponent, ssrElement, mergeProps as mergeProps$1, ssrAttribute } from 'solid-js/web';
import { Show, For, mergeProps, splitProps } from 'solid-js';
import { z as ze, c as g, P, d as n } from '../runtime.mjs';
import { I as Ia, M as Ma, b as _a, z as za, N as Na, c as $a, B as Ba, R as Ra } from './styles.mjs';
import { I as Ir, K as K$1, O as Or } from './images.mjs';
import { m } from './cn.mjs';
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

var T=["<p",' class="mt-0.5 mb-4 line-clamp-3 text-md">',"</p>"],B=["<ul",' class="flex flex-wrap items-center gap-2">',"</ul>"],D=["<article","><!--$-->",'<!--/--><section class="flex size-full flex-col justify-end bg-gradient-to-b from-50% from-transparent to-foreground px-6 py-8 text-gray-50 transition-colors duration-300 ease-in-out hover:from-0% group-hover:to-foreground"><h3 class="font-semibold text-white">',"</h3><!--$-->","<!--/--><!--$-->","<!--/--></section></article>"],H=["<li",">","</li>"];function G(o){const u=mergeProps(o,{class:""}),[a,c,m$1]=splitProps(u,["thumbnail","slug","headline","services","title"],["class"]);return ssrElement("a",mergeProps$1(m$1,{get href(){return `/projetos/${a.slug}`},get class(){return m(["group shadow transition duration-300 ease-in-out",c.class])}}),()=>ssr(D,ssrAttribute("class",escape(m(["relative isolate","overflow-hidden","h-[500px] rounded-lg"]),!0),!1),escape(createComponent(Ir,{loading:"lazy",layout:"fullWidth",get src(){return K$1(a.thumbnail).auto("format").quality(80).width(600).url()},get alt(){return a.title},get background(){return Or(a.thumbnail)},class:"-z-10 absolute inset-0 size-full object-cover object-center transition-transform duration-300 ease-in-out group-hover:scale-105"})),escape(a.title),escape(createComponent(Show,{get when(){return a.headline},get children(){return ssr(T,ssrHydrationKey(),escape(a.headline))}})),escape(createComponent(Show,{get when(){return a.services.length},get children(){return ssr(B,ssrHydrationKey(),escape(createComponent(For,{get each(){return a.services},children:t=>ssr(H,ssrHydrationKey(),escape(createComponent(Ra,{round:!0,variant:"secondary",class:"pointer-events-none",get children(){return t.title}})))})))}}))),!0)}var K=["<main",'><header class="py-16"><div class="container flex flex-col items-center justify-center gap-2 text-center"><h1 class="font-bold">',"</h1><!--$-->","<!--/--></div></header><!--$-->","<!--/--><!--$-->","<!--/--></main>"],L=["<p",' class="text-lg">',"</p>"],M=["<section",' class="py-16"><div class="container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">',"</div></section>"],U=["<section",' class="py-2"><div class="container flex justify-end">',"</div></section>"];function $e(){const[o,u]=ze(),a=Ia(()=>g()),c=Ia(async()=>{let t=o.page?Number(o.page):1;const s=await P(t,n),P$1=Math.ceil(s.total/n);t>s.total&&(t=P$1);const{data:v,total:y}=await P(t,n);return {data:v,total:y,currentPage:t}});function m(t){u({page:t},{replace:!0});}return ssr(K,ssrHydrationKey(),escape(a()?.title)??"Projetos",escape(createComponent(Show,{get when(){return a()?.headline},keyed:!0,children:t=>ssr(L,ssrHydrationKey(),escape(t))})),escape(createComponent(Show,{get when(){return c()?.data},keyed:!0,children:t=>ssr(M,ssrHydrationKey(),escape(createComponent(For,{each:t,children:s=>createComponent(G,{get title(){return s.title},get headline(){return s.headline},get thumbnail(){return s.thumbnail},get services(){return s.services},get slug(){return s.slug}})})))})),escape(createComponent(Show,{get when(){return c()?.total},keyed:!0,children:t=>ssr(U,ssrHydrationKey(),escape(createComponent(Ma,{count:t,defaultPage:1,fixedItems:!0,onPageChange:m,get page(){return Number(o.page)??1},itemComponent:s=>createComponent(_a,{get page(){return s.page},get children(){return s.page}}),ellipsisComponent:()=>createComponent(za,{}),get children(){return [createComponent(Na,{}),createComponent($a,{}),createComponent(Ba,{})]}})))})))}

export { $e as default };
//# sourceMappingURL=index2.mjs.map
