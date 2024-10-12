import Dialog from '@corvu/dialog';
import { Image, type ImageProps } from '@unpic/solid';
import { type JSX, Show, mergeProps, splitProps } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import {
  closePreviewStyles,
  figureCaptionStyles,
  figureStyles,
  previewFigureStyles,
  previewStylesOverlay,
} from './styles';

type ImageWithPreviewProps = Omit<
  JSX.ImgHTMLAttributes<HTMLImageElement>,
  'class' | 'classList' | 'src' | 'srcSet' | 'fetchpriority'
> & {
  /**
   * Image source.
   */
  src: NonNullable<JSX.ImgHTMLAttributes<HTMLImageElement>['src']>;

  /**
   * Image caption.
   */
  caption?: string;

  /**
   * Low quality image to show while is loading.
   */
  blurHash?: ImageProps['background'];

  /**
   * Custom styles object for specific elements, like image and figure.
   * @default {}
   */
  classList?: {
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

function ImageWithPreview(rawProps: ImageWithPreviewProps) {
  const propsWithDefaults = mergeProps(rawProps, {
    classList: {
      figure: '',
      image: '',
    },
    width: 800,
    height: 800,
    alt: 'MC Ocidente Charmoso',
  });

  const [imageProps, dimensionsProps, stylesProps, props] = splitProps(
    propsWithDefaults,
    ['src', 'alt', 'blurHash', 'caption'],
    ['width', 'height'],
    ['classList'],
  );

  return (
    <Dialog>
      <Dialog.Trigger
        class={twMerge([figureStyles, stylesProps.classList.figure])}
        as={'figure'}
      >
        <Image
          {...props}
          loading="lazy"
          layout="constrained"
          background={imageProps.blurHash}
          alt={imageProps.alt}
          src={imageProps.src}
          width={dimensionsProps.width}
          height={dimensionsProps.height}
          class={twMerge([
            'size-full object-cover object-center',
            stylesProps.classList.image,
          ])}
        />

        <figcaption class={figureCaptionStyles}>
          <Show when={imageProps.caption} keyed={true}>
            {(caption) => <span class={'text-md'}>{caption}</span>}
          </Show>

          <i class="ph ph-magnifying-glass-plus text-3xl text-white" />
        </figcaption>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay class={previewStylesOverlay} />
        <Dialog.Content as={'figure'} class={previewFigureStyles}>
          <Dialog.Close class={closePreviewStyles}>
            <i class={'ph ph-x'} />
          </Dialog.Close>

          <Image
            {...props}
            loading="lazy"
            layout="fullWidth"
            background={imageProps.blurHash}
            alt={imageProps.alt}
            src={imageProps.src}
            class={twMerge([
              'h-[75vh] w-full min-w-[85vw] max-w-[85vw] md:h-[unset] md:min-h-[50vh] md:min-w-[unset]',
              'rounded-lg',
              'object-cover object-center',
            ])}
          />

          <Show when={imageProps.caption} keyed={true}>
            {(caption) => (
              <figcaption class={'text-center text-sm text-white'}>
                {caption}
              </figcaption>
            )}
          </Show>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog>
  );
}

export { ImageWithPreview };
