import { useLocation } from '@solidjs/router';
import { For } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import { MENU_ITEMS } from '~/shared/constants/menu';
import { navigationItemVariants } from './styles';

type NavigationProps = {
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

  /**
   * Object to override default styles.
   * @default {}
   */
  classNames?: {
    /**
     * Custom styles for `nav` element.
     * @default ''
     */
    nav?: string;

    /**
     * Custom styles for `ul` element.
     * @default ''
     */
    ul?: string;

    /**
     * Custom styles for `li` element.
     * @default ''
     */
    li?: string;

    /**
     * Custom styles for each menu item.
     * @default ''
     */
    item?: string;
  };
};

export function Navigation(props: NavigationProps) {
  const { nav = '', item = '', ul = '', li = '' } = props.classNames ?? {};

  const location = useLocation();

  /**
   * Callback function to check if a specific menu is active or not.
   * @param href Menu URL
   */
  function isMenuActive(href: string) {
    return href === location.pathname;
  }

  return (
    <nav class={nav}>
      <ul class={twMerge('flex items-center justify-end', ul)}>
        <For each={MENU_ITEMS}>
          {(menuItem) => (
            <li class={li}>
              <a
                class={twMerge(
                  navigationItemVariants({
                    mode: props.mode,
                    isSticky: props.isSticky,
                    isActive: isMenuActive(menuItem.href),
                    class: item,
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
  );
}
