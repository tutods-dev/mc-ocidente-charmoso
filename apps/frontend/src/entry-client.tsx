// @refresh reload
import { StartClient, mount } from '@solidjs/start/client';

// biome-ignore lint/style/noNonNullAssertion: is required
mount(() => <StartClient />, document.getElementById('app')!);
