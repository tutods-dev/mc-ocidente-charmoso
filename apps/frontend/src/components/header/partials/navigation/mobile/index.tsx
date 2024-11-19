import Drawer from '@corvu/drawer';
import { useLocation } from '@solidjs/router';
import { For } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import { cn } from '~/lib/utils';
import { MENU_ITEMS } from '~/shared/constants/menu';
import { drawerContentVariants, navigationItemVariants } from './styles';

type MobileNavigationProps = {
  /**
   * Indicates the mode of the navigation been used.
   * @description When the `mode` is `transparent`, this indicates that the header will be rendered without any backgroud.
   * Otherwise, the header will contain background.
   */
  mode: 'transparent' | 'solid';

  /**
   * Indicates if the header is sticky or not.
   */
  isSticky: boolean;
};

function MobileNavigation(props: MobileNavigationProps) {
  const location = useLocation();

  /**
   * Callback function to check if a specific menu is active or not.
   * @param href Menu URL
   */
  function isMenuActive(href: string) {
    return href === location.pathname;
  }

  return (
    <Drawer side={'right'}>
      {(drawerProps) => (
        <>
          <Drawer.Trigger
            class={cn([
              'size-8 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-zinc-100/50 disabled:cursor-not-allowed disabled:opacity-70',
              { 'text-zinc-50 hover:text-white': props.mode === 'transparent' },
              { 'text-zinc-800': props.isSticky },
            ])}
            aria-label="Abrir menu"
          >
            <i class="ph ph-list text-2xl" />
          </Drawer.Trigger>
          <Drawer.Portal>
            <Drawer.Overlay
              class={cn([
                'fixed inset-0',
                'z-50',
                'data-[transitioning]:transition-colors data-[transitioning]:duration-300',
              ])}
              style={{
                'background-color': `rgb(0 0 0 / ${0.5 * drawerProps.openPercentage})`,
              }}
            />
            <Drawer.Content
              class={twMerge(
                drawerContentVariants({
                  side: 'right',
                }),
              )}
            >
              <header class={'flex items-center justify-end p-4'}>
                <Drawer.Close
                  class={
                    'size-7 rounded bg-transparent transition-colors duration-300 ease-in-out enabled:cursor-pointer enabled:hover:bg-zinc-100/50 disabled:cursor-not-allowed disabled:opacity-70'
                  }
                >
                  <i class="ph ph-x text-lg" />
                </Drawer.Close>
              </header>
              <nav class={'flex-1 py-4'}>
                <ul class="flex flex-col">
                  <For each={MENU_ITEMS}>
                    {(menuItem) => (
                      <li>
                        <a
                          onclick={() => drawerProps.setOpen(false)}
                          class={twMerge(
                            navigationItemVariants({
                              isActive: isMenuActive(menuItem.href),
                            }),
                          )}
                          href={menuItem.href}
                        >
                          {menuItem.label}
                        </a>
                      </li>
                    )}
                  </For>
                </ul>
              </nav>
            </Drawer.Content>
          </Drawer.Portal>
        </>
      )}
    </Drawer>
  );
}

export { MobileNavigation };
