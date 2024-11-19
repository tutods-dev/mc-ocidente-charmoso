import { cva } from 'class-variance-authority';

/**
 * Styles for `header` element
 */
const headerVariants = cva(['py-2', 'z-50', 'transition duration-300 ease-in-out'], {
  variants: {
    mode: {
      transparent: 'fixed top-0 right-0 left-0',
      solid: '',
    },
    isSticky: {
      true: ['bg-zinc-50', 'shadow-lg', 'sticky inset-x-0 top-0'],
      false: [],
    },
  },
  defaultVariants: {
    mode: 'transparent',
  },
});

/**
 * Styles for the header container.
 */
const headerContainerVariants = cva(['container h-full', 'flex items-center justify-between gap-4', 'mx-auto px-4'], {
  variants: {
    mode: {
      transparent: ['text-white'],
      solid: [''],
    },
    isSticky: {
      true: 'text-zinc-800',
      false: [],
    },
  },
  defaultVariants: {
    mode: 'transparent',
  },
});

export { headerVariants, headerContainerVariants };
