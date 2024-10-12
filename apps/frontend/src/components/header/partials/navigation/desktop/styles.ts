import { cva } from 'class-variance-authority';

const navigationItemVariants = cva(
  [
    'h-14',
    'px-4',
    'inline-flex items-center justify-center',
    'font-bold font-serif text-lg',
    'transition-all duration-300 ease-in-out',
    'relative after:absolute after:inset-x-0 after:bottom-0 after:h-0.5 after:w-full after:bg-transparent after:content-[""]',
  ],
  {
    variants: {
      isActive: {
        true: [],
        false: [],
      },
      mode: {
        transparent: ['text-zinc-100', 'hover:text-white hover:after:bg-white'],
        solid: ['text-zinc-500', 'hover:text-zinc-900 hover:after:bg-zinc-900'],
      },
      isSticky: {
        true: ['text-zinc-600', 'hover:text-zinc-900 hover:after:bg-zinc-900'],
        false: [],
      },
    },
    compoundVariants: [
      {
        isActive: true,
        mode: 'solid',
        class: ['after:bg-zinc-900', 'text-zinc-900'],
      },
      {
        isActive: true,
        mode: 'transparent',
        class: ['after:bg-white', 'text-white'],
      },
    ],
    defaultVariants: {
      isActive: false,
    },
  },
);

export { navigationItemVariants };
