import { useWindowScrollPosition } from '@solid-primitives/scroll';
import { useLocation } from '@solidjs/router';
import { Match, Switch, createMemo } from 'solid-js';
import { twMerge } from 'tailwind-merge';
import { Logo } from '~/components/common';
import { headerContainerVariants, headerVariants } from '~/components/header/styles';
import { SOLID_HEADER_PATHS } from '~/shared/constants/header';
import { useDeviceType } from '~/shared/hooks/use-device-type';
import { MobileNavigation, Navigation } from './partials/navigation';

type HeaderProps = {
  /**
   * Indicates the mode of the navigation been used.
   * @description When the `mode` is `transparent`, this indicates that the header will be rendered without any backgroud.
   * Otherwise, the header will contain background.
   * @default 'transparent'
   */
  mode?: 'transparent' | 'solid';

  /**
   * Custom styles for header.
   * @default ''
   */
  className?: string;
};

function Header({ mode = 'transparent', className = '' }: HeaderProps) {
  /**
   * Hooks
   */
  const scroll = useWindowScrollPosition();
  const deviceType = useDeviceType();
  const location = useLocation();

  /**
   * The current pathname.
   */
  const pathname = createMemo(() => location.pathname);

  /**
   * Header mode to be used.
   * @description If the current `pathname` is included on the `SOLID_HEADER_PATHS` constant, use the mode `solid` instead of the mode received by property.
   */
  const headerMode = createMemo(() => {
    // If the current `pathname` is on the `SOLID_HEADER_PATHS` constant.
    if (SOLID_HEADER_PATHS.includes(pathname())) {
      return 'solid';
    }

    // Otherwise, return the `mode` received by property
    return mode ?? 'transparent';
  });

  /**
   * Constant to store if the header is sticky or not.
   */
  const isSticky = createMemo(() => scroll.y > 50);

  return (
    <header
      class={twMerge(
        headerVariants({
          mode: headerMode(),
          isSticky: isSticky(),
          class: className,
        }),
      )}
    >
      <div
        class={twMerge(
          headerContainerVariants({ mode: headerMode(), isSticky: isSticky() }),
        )}
      >
        <a href="/">
          <Logo class="h-auto w-full max-w-20" />
        </a>

        <Switch>
          <Match when={deviceType() === 'desktop'}>
            <Navigation mode={headerMode()} isSticky={isSticky()} />
          </Match>

          <Match when={['mobile', 'tablet'].includes(deviceType())}>
            <MobileNavigation mode={headerMode()} isSticky={isSticky()} />
          </Match>
        </Switch>
      </div>
    </header>
  );
}

export { Header };
