import { createAsync, useParams } from '@solidjs/router';
import { For, Show, createSignal } from 'solid-js';

import { components, getProject, urlFor } from '@/cms';
import { ImageWithPreview } from '@/components/common';
import { ProjectTestimonialSection } from '@/components/views/project';
import { ProjectDetailsSection } from '@/components/views/project/details';
import { cn } from '@/shared/utils';
import { PortableText } from '@portabletext/solid';

export default function ProjectDetails() {
  // Signal to expand or collapse the content
  const [isExpanded, setIsExpanded] = createSignal(false);

  // Hooks
  const params = useParams<{ slug: string }>();

  // Data fetching
  const data = createAsync(() => getProject(params.slug), {
    name: `project-${params.slug}`,
  });

  return (
    <Show when={data()} keyed={true}>
      {(project) => (
        <>
          <section class="flex items-center justify-center pt-12 pb-10 md:py-12">
            <section
              class={cn([
                'container relative grid grid-cols-1 gap-8',
                { 'md:grid-cols-2 lg:grid-cols-[1fr_0.75fr]': !!project.gallery },
              ])}
            >
              <section class={'flex flex-col gap-6'}>
                <For each={project.gallery}>
                  {(image) => (
                    <ImageWithPreview
                      src={urlFor(image).url()}
                      alt={image.alt}
                      classNames={{
                        image: 'aspect-square',
                        figure: 'rounded-sm',
                      }}
                    />
                  )}
                </For>
              </section>
              <section
                class={
                  'order-first md:sticky md:top-10 md:right-0 md:order-last md:h-fit md:py-10'
                }
              >
                <h1>{project.title}</h1>

                <Show when={project.content} keyed={true}>
                  {(content) => (
                    <div
                      class={cn([
                        'relative my-4 cursor-pointer',
                        'overflow-y-hidden',
                        'transition duration-300 ease-in-out',
                        {
                          'max-h-[300px] after:absolute after:right-0 after:bottom-0 after:left-0 after:h-24 after:bg-gradient-to-b after:from-transparent after:to-gray-50/90 after:content-[""]':
                            !isExpanded() && content.length > 3,
                        },
                      ])}
                      onClick={() => setIsExpanded((prev) => !prev)}
                    >
                      <PortableText components={components} value={content} />
                    </div>
                  )}
                </Show>

                <ProjectDetailsSection
                  local={project.local}
                  date={project.date}
                  services={project.services}
                />

                <Show keyed={true} when={project.showTestimonial}>
                  <ProjectTestimonialSection slug={project.slug} />
                </Show>
              </section>
            </section>
          </section>
        </>
      )}
    </Show>
  );
}
