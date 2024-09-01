import { tv } from 'tailwind-variants';

const navigatioItemVariants = tv({
  base: [
    'h-14',
    'px-4',
    'inline-flex items-center justify-center',
    'font-semibold font-serif text-lg',
    'transition duration-300 ease-in-out',
    'relative before:absolute before:inset-x-0 before:top-0 before:h-0.5 before:w-full before:rounded-b-sm before:bg-transparent before:content-[""]',
  ],
  variants: {
    isActive: {
      true: [],
      false: [],
    },
    mode: {
      transparent: ['text-gray-100', 'hover:text-white hover:before:bg-white'],
      solid: ['text-gray-600', 'hover:text-gray-900 hover:before:bg-gray-900'],
    },
    isSticky: {
      true: ['text-gray-600', 'hover:text-gray-900 hover:before:bg-gray-900'],
      false: [],
    },
  },
  compoundVariants: [
    {
      isActive: true,
      mode: 'solid',
      class: ['before:bg-gray-900', 'text-gray-900'],
    },
    {
      isActive: true,
      mode: 'transparent',
      class: ['before:bg-white', 'text-white'],
    },
  ],
  defaultVariants: {
    isActive: false,
  },
});

export { navigatioItemVariants };
