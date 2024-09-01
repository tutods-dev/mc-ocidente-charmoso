import type { ClassValue } from 'clsx';
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Callback function to use **Tailwind Merge** together with **CLSX**.
 * @param classes List of css classes
 */
export function cn(...classes: ClassValue[]) {
  return twMerge(clsx(...classes));
}
