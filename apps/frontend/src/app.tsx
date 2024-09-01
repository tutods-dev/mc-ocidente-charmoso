import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';

import { Header } from '@/components/header';

// Spectral fonts
import '@fontsource/spectral/200.css';
import '@fontsource/spectral/300.css';
import '@fontsource/spectral';
import '@fontsource/spectral/500.css';
import '@fontsource/spectral/600.css';
import '@fontsource/spectral/700.css';

// Montserrat fonts
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900.css';

// Phosphor icons
import '@phosphor-icons/web/regular/style.css';

import '@/styles/app.css';
import { CtaSection } from '@/components/cta';

export default function App() {
  return (
    <Router
      preload={true}
      root={(props) => (
        <>
          <Header />
          <Suspense>{props.children}</Suspense>

          <CtaSection />
        </>
      )}
    >
      <FileRoutes />
    </Router>
  );
}
