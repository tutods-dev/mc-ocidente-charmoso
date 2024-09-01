import { useWindowSize } from '@solid-primitives/resize-observer';
import { createMemo } from 'solid-js';

/**
 * Custom hook to retrieve the current device type.
 */
function useDeviceType() {
  const size = useWindowSize();

  return createMemo(() => {
    if (size.width > 480 && size.width < 1024) {
      return 'tablet';
    }

    if (size.width <= 480) {
      return 'mobile';
    }

    return 'desktop';
  });
}

export { useDeviceType };
