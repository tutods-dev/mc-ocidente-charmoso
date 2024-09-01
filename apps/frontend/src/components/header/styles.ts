import { tv } from 'tailwind-variants';

/**
 * Styles for `header` element
 */
const headerVariants = tv({
  base: ['h-14', 'z-50', 'transition duration-300 ease-in-out'],
  variants: {
    mode: {
      transparent: 'fixed top-0 right-0 left-0',
      solid: '',
    },
    isSticky: {
      true: ['bg-gray-50', 'shadow-lg', 'sticky top-0 inset-x-0'],
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
const headerContainerVariants = tv({
  base: ['container h-full', 'flex items-center justify-between gap-4', 'mx-auto px-4'],
  variants: {
    mode: {
      transparent: ['text-white'],
      solid: [''],
    },
    isSticky: {
      true: 'text-gray-800',
      false: [],
    },
  },
  defaultVariants: {
    mode: 'transparent',
  },
});

export { headerVariants, headerContainerVariants };
