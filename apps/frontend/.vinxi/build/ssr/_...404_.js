import { escape as e, ssrHydrationKey as o, ssr as s, createComponent as t } from 'solid-js/web';
import { A as r } from './assets/components-CEmY4i8r.js';
import 'solid-js';
import './assets/routing-KofvCWNq.js';
var a = [
  '<main',
  ' class="mx-auto p-4 text-center text-gray-700"><h1 class="max-6-xs my-16 font-thin text-6xl text-sky-700 uppercase">Not Found</h1><p class="mt-8">Visit <a href="https://solidjs.com" target="_blank" class="text-sky-600 hover:underline" rel="noreferrer">solidjs.com</a> to learn how to build Solid apps.</p><p class="my-4"><!--$-->',
  '<!--/--> - <!--$-->',
  '<!--/--></p></main>',
];
function p() {
  return s(
    a,
    o(),
    e(t(r, { href: '/', class: 'text-sky-600 hover:underline', children: 'Home' })),
    e(t(r, { href: '/about', class: 'text-sky-600 hover:underline', children: 'About Page' })),
  );
}
export { p as default };
