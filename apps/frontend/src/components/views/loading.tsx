import { Logo } from '~/components/common';

function LoadingScreen() {
  return (
    <div class="fixed inset-0 flex flex-col items-center justify-center bg-zinc-50">
      <Logo class="pointer-events-none h-auto w-80 animate-pulse" />

      <h1 class="mx-auto my-4 w-fit rounded-full px-4 py-1 text-center font-bold text-xs text-zinc-800 shadow-sm ring-1 ring-zinc-800/60">
        MC Ocidente Charmoso
      </h1>

      <p class="text-center text-xs text-zinc-700">A carregar, por favor aguarde um momento!</p>
    </div>
  );
}

export { LoadingScreen };
