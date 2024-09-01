import clsx from 'clsx';

/**
 * Styles for main figure element.
 */
const figureStyles = clsx([
  'relative isolate',
  'rounded-md',
  'overflow-hidden',
  'cursor-pointer',
  'outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
]);

/**
 * Styles for figure caption.
 */
const figureCaptionStyles = clsx([
  'absolute inset-0',
  'flex flex-col items-center justify-center gap-2',
  'opacity-0 hover:opacity-100',
  'transition-all duration-300 ease-in-out',
  'bg-gradient-to-b from-gray-500/20 via-gray-800/70 to-gray-900/100',
  'text-center text-white',
]);

/**
 * Styles for preview.
 */
const previewFigureStyles = clsx([
  'fixed top-1/2 left-1/2 z-50',
  '-translate-x-1/2 -translate-y-1/2',
  'flex flex-col gap-4',
  'size-auto max-h-[75vh] max-w-[85vw]',
  'data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:zoom-out-95 data-[expanded]:zoom-in-95 data-[closed]:slide-out-to-left-1/2 data-[closed]:slide-out-to-top-[48%] data-[expanded]:slide-in-from-left-1/2 data-[expanded]:slide-in-from-top-[48%] duration-200 data-[closed]:animate-out data-[expanded]:animate-in',
]);

/**
 * Styles for the close previe button.
 */
const closePreviewStyles = clsx([
  'absolute top-2 right-2',
  'flex items-center justify-center',
  'size-8 rounded-full',
  'bg-gray-500/40 text-gray-100 hover:bg-gray-950/50 hover:text-white',
  'text-lg leading-none',
  'transition-colors duration-300 ease-in-out',
  'outline-none focus-visible:ring-2 focus-visible:ring-indigo-500',
]);

/**
 * Styles for preview overlay.
 */
const previewStylesOverlay = clsx([
  'fixed inset-0 z-50',
  'bg-gray-900/90 backdrop-blur-sm',
  'data-[closed]:fade-out-0 data-[expanded]:fade-in-0 data-[closed]:animate-out data-[expanded]:animate-in',
]);

export {
  previewFigureStyles,
  figureStyles,
  closePreviewStyles,
  previewStylesOverlay,
  figureCaptionStyles,
};
