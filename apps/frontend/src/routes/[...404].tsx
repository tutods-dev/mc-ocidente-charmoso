import { PageSeo } from '~/components/seo';
import { Button } from '~/components/ui';

export default function NotFound() {
  return (
    <main class="flex items-center justify-center py-8 md:h-[65vh] md:py-16">
      <PageSeo title="Página não encontrada" />
      <div class="container flex flex-col items-center justify-center text-center">
        <h1 class="mb-1 font-bold">404</h1>
        <h2>Página não encontrada!</h2>
        <p class="mt-2 mb-6">A página que procura não foi encontrada ou foi removida.</p>

        <Button as="a" href="/" variant="ghost" class="inline-flex items-center gap-1">
          Ir para a página inicial
          <i class="ph ph-arrow-right text-sm leading-none" />
        </Button>
      </div>
    </main>
  );
}
