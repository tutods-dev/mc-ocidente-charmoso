import { For, Show } from 'solid-js';
import { urlFor } from '~/cms/utils';
import { ImageWithPreview } from '~/components/common';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/ui';
import type { AboutUs } from '~/shared/types';
import { getBlurHashImage } from '~/shared/utils/images';

function FactorySection(props: NonNullable<AboutUs['factory']>) {
  return (
    <section class="py-16">
      <div class="container">
        <h2 class="text-center">{props.title}</h2>

        <Show when={props.description} keyed={true}>
          {(description) => (
            <p class="mx-auto mt-1 mb-4 max-w-screen-lg text-center md:mb-8">
              {description}
            </p>
          )}
        </Show>

        <Carousel
          opts={{
            loop: true,
          }}
        >
          <CarouselContent>
            <For each={props.gallery}>
              {(image) => (
                <CarouselItem class="relative overflow-hidden rounded-sm md:basis-1/2 lg:basis-1/3">
                  <ImageWithPreview
                    src={urlFor(image).url()}
                    alt={image.alt}
                    blurHash={getBlurHashImage(image)}
                    width={image.asset.metadata?.dimensions?.width}
                    height={image.asset.metadata?.dimensions?.height}
                    classList={{
                      image: 'aspect-square',
                      figure: 'rounded-sm',
                    }}
                  />
                </CarouselItem>
              )}
            </For>
          </CarouselContent>
          <CarouselPrevious variant="secondary" />
          <CarouselNext variant="secondary" />
        </Carousel>
      </div>
    </section>
  );
}

export { FactorySection };
