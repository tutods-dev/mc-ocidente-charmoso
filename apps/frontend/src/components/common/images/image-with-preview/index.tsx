import { type JSX, Show } from 'solid-js';

import Dialog from '@corvu/dialog';
import { twMerge } from 'tailwind-merge';
import {
  closePreviewStyles,
  figureCaptionStyles,
  figureStyles,
  previewFigureStyles,
  previewStylesOverlay,
} from './styles';

type ImageWithPreviewProps = Omit<JSX.ImgHTMLAttributes<HTMLImageElement>, 'class'> & {
  /**
   * Image caption.
   */
  caption?: string;

  /**
   * Custom styles object for specific elements, like image and figure.
   * @default {}
   */
  classNames?: {
    /**
     * Custom styles for figure element.
     * @default ''
     */
    figure?: string;

    /**
     * Custom styles for image element.
     * @default ''
     */
    image?: string;
  };
};

function ImageWithPreview({
  src,
  alt,
  caption,
  classNames = {},
  ...props
}: ImageWithPreviewProps) {
  // Destructure `classNames`  object
  const { image = '', figure = '' } = classNames;

  return (
    <Dialog>
      <Dialog.Trigger class={twMerge([figureStyles, figure])} as={'figure'}>
        <img
          {...props}
          alt={alt}
          src={src}
          class={twMerge(['size-full object-cover object-center', image])}
        />

        <figcaption class={figureCaptionStyles}>
          <Show when={!!caption}>
            <span class={'text-md'}>{caption}</span>
          </Show>

          <i class="ph ph-magnifying-glass-plus text-2xl text-white" />
        </figcaption>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class={previewStylesOverlay} />
        <Dialog.Content as={'figure'} class={previewFigureStyles}>
          <Dialog.Close class={closePreviewStyles}>
            <i class={'ph ph-x'} />
          </Dialog.Close>

          <img
            {...props}
            alt={alt}
            src={src}
            class={twMerge([
              'size-auto max-h-[75vh] min-w-[40vw] max-w-[85vw]',
              'rounded-lg',
              'object-cover object-center',
            ])}
          />

          <Show when={!!caption}>
            <figcaption class={'text-center text-white'}>
              <strong>Legenda:</strong> {caption}
            </figcaption>
          </Show>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

export { ImageWithPreview };
