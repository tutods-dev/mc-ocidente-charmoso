import { ssr, ssrHydrationKey, escape, createComponent } from 'solid-js/web';
import { A } from './components.mjs';
import 'solid-js';
import '../runtime.mjs';
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

var a=["<main",' class="mx-auto p-4 text-center text-gray-700"><h1 class="max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase">Not Found</h1><p class="mt-8">Visit <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline" rel="noreferrer">solidjs.com</a> to learn how to build Solid apps.</p><p class="my-4"><!--$-->',"<!--/--> - <!--$-->","<!--/--></p></main>"];function p(){return ssr(a,ssrHydrationKey(),escape(createComponent(A,{href:"/",class:"text-sky-600 hover:underline",children:"Home"})),escape(createComponent(A,{href:"/about",class:"text-sky-600 hover:underline",children:"About Page"})))}

export { p as default };
//# sourceMappingURL=_...404_.mjs.map