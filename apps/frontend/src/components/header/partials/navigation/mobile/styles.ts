import { cva } from 'class-variance-authority';

const drawerContentVariants = cva(
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
      {
        side: ['top', 'bottom'],
        class: ['h-full max-h-[500px]', 'inset-x-0'],
      },
      {
        side: ['left', 'right'],
        class: ['h-full w-full max-w-[85vw] md:max-w-[50vw]', 'inset-y-0'],
      },
    ],
  },
);

const navigationItemVariants = cva(
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
        true: ['text-zinc-900', 'before:bg-zinc-900'],
        false: ['text-zinc-800', 'hover:text-zinc-900 hover:before:bg-zinc-900'],
      },
    },
    defaultVariants: {
      isActive: false,
    },
  },
);

export { drawerContentVariants, navigationItemVariants };
