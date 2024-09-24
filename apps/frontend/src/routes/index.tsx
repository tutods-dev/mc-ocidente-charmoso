import { createAsync } from '@solidjs/router';
import { Show } from 'solid-js';
import { getSeoSettings } from '~/cms/services';

export default function Home() {
  const seo = createAsync(() => getSeoSettings());

  return (
    <main>
      <header class="py-8 md:py-16">
        <div class="container flex flex-col items-center justify-center gap-2 text-center">
          <h1 class="font-bold">{seo()?.title ?? 'MC Ocidente Charmoso'}</h1>

          <Show when={seo()?.description} keyed={true}>
            {(description) => <p class="text-lg">{description}</p>}
          </Show>
        </div>
      </header>
    </main>
  );
}
