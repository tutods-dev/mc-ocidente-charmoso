import { cva as t } from 'class-variance-authority';
import { tv as e } from 'tailwind-variants';
const i = e({
    base: ['py-2', 'z-50', 'transition duration-300 ease-in-out'],
    variants: {
      mode: { transparent: 'fixed top-0 right-0 left-0', solid: '' },
      isSticky: { true: ['bg-gray-50', 'shadow-lg', 'sticky top-0 inset-x-0'], false: [] },
    },
    defaultVariants: { mode: 'transparent' },
  }),
  n = e({
    base: ['container h-full', 'flex items-center justify-between gap-4', 'mx-auto px-4'],
    variants: { mode: { transparent: ['text-white'], solid: [''] }, isSticky: { true: 'text-gray-800', false: [] } },
    defaultVariants: { mode: 'transparent' },
  }),
  s = t(
    [
      'fixed',
      'z-50',
      'flex flex-col',
      'bg-white',
      'shadow-sm',
      'data-[transitioning]:transition-transform data-[transitioning]:duration-500 data-[transitioning]:ease-[cubic-bezier(0.32,0.72,0,1)]',
    ],
    {
      variants: {
        side: {
          top: ['top-0', 'rounded-b-lg'],
          bottom: ['bottom-0', 'rounded-t-lg'],
          right: ['right-0'],
          left: ['left-0'],
        },
      },
      compoundVariants: [
        { side: ['top', 'bottom'], class: ['h-full max-h-[500px]', 'inset-x-0'] },
        { side: ['left', 'right'], class: ['h-full w-full max-w-[85vw] md:max-w-[50vw]', 'inset-y-0'] },
      ],
    },
  ),
  o = t(
    [
      'py-3 pr-4 pl-8',
      'flex items-center',
      'font-bold font-serif text-lg',
      'transition duration-300 ease-in-out',
      'relative before:absolute before:inset-y-0 before:left-0 before:h-full before:w-1 before:rounded-r-md before:bg-transparent before:content-[""]',
    ],
    {
      variants: {
        isActive: {
          true: ['text-gray-900', 'before:bg-gray-900'],
          false: ['text-gray-800', 'hover:text-gray-900 hover:before:bg-gray-900'],
        },
      },
      defaultVariants: { isActive: !1 },
    },
  ),
  f = t(
    [
      'h-14',
      'px-4',
      'inline-flex items-center justify-center',
      'font-bold font-serif text-lg',
      'transition-all duration-300 ease-in-out',
      'relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-full after:rounded-b-sm after:bg-transparent after:content-[""]',
    ],
    {
      variants: {
        isActive: { true: [], false: [] },
        mode: {
          transparent: ['text-gray-100', 'hover:text-white hover:after:bg-white'],
          solid: ['text-gray-500', 'hover:text-gray-900 hover:after:bg-gray-900'],
        },
        isSticky: { true: ['text-gray-600', 'hover:text-gray-900 hover:after:bg-gray-900'], false: [] },
      },
      compoundVariants: [
        { isActive: !0, mode: 'solid', class: ['after:bg-gray-900', 'text-gray-900'] },
        { isActive: !0, mode: 'transparent', class: ['after:bg-white', 'text-white'] },
      ],
      defaultVariants: { isActive: !1 },
    },
  );
export { f as a, n as b, s as d, i as h, o as n };
