import { createAsync, useLocation } from '@solidjs/router';
import { For, Show, Suspense, createMemo } from 'solid-js';
import { getCtaSettings } from '~/cms/services/singletons/get-settings';
import { Button } from '~/components/ui';
import { EXCLUDED_PATHS_TO_SHOW_CTA } from '~/shared/constants';

function CtaSection() {
  // Get location and pathname
  const location = useLocation();
  const pathname = createMemo(() => location.pathname);

  // Constant to check if the CTA section can be rendered.
  const canRenderCta = createMemo(
    () => !EXCLUDED_PATHS_TO_SHOW_CTA.includes(pathname()),
  );

  // Request CTA data
  const cta = createAsync(() => getCtaSettings(canRenderCta()));

  return (
    <Suspense>
      <Show when={canRenderCta() && !!cta()}>
        <section class="flex flex-col items-center justify-center overflow-hidden py-20">
          <div class="container relative isolate text-center">
            <h2>{cta()?.title}</h2>
            <p class="mt-2 text-lg leading-8">{cta()?.description}</p>

            <ul class={'mt-6 flex flex-wrap items-center justify-center gap-8'}>
              <For each={cta()?.points}>
                {(point) => (
                  <li class={'flex items-center gap-2 font-medium'}>
                    <span class="inline-flex size-4 items-center justify-center rounded-full bg-green-700">
                      <i class="ph ph-check text-white text-xs" />
                    </span>

                    {point}
                  </li>
                )}
              </For>
            </ul>

            <Button
              variant="ghost"
              class="mt-10 inline-flex items-center gap-2 font-semibold"
              as="a"
              href="/contactos"
            >
              {cta()?.button}
              <i class="ph ph-arrow-right leading-none" />
            </Button>
            {/* <a
              class={
                'mt-10 inline-flex items-center gap-2 border-b border-b-transparent font-semibold text-gray-700 transition-all duration-300 ease-in-out hover:border-b-gray-900 hover:text-gray-900'
              }
              href={'/contactos'}
            ></a> */}
          </div>
        </section>
      </Show>
    </Suspense>
  );
}

export { CtaSection };
