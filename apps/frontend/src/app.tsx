import { Link, Meta, MetaProvider } from '@solidjs/meta';
import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import { CtaSection } from '~/components/cta';
import { Footer } from '~/components/footer';
import { Header } from '~/components/header';
import { LoadingScreen } from '~/components/views/loading';
import '~/styles/app.css';

import '@fontsource/spectral/200.css';
import '@fontsource/spectral/300.css';
import '@fontsource/spectral';
import '@fontsource/spectral/500.css';
import '@fontsource/spectral/600.css';
import '@fontsource/spectral/700.css';
import '@fontsource/montserrat/200.css';
import '@fontsource/montserrat/300.css';
import '@fontsource/montserrat';
import '@fontsource/montserrat/500.css';
import '@fontsource/montserrat/700.css';
import '@fontsource/montserrat/900.css';

import '@phosphor-icons/web/regular/style.css';

function App() {
  return (
    <Router
      preload={true}
      root={(props) => (
        <Suspense fallback={<LoadingScreen />}>
          <MetaProvider>
            {/* Default meta tags */}
            <Meta charset="UTF-8" />
            <Meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <Meta http-equiv="content-language" content="Portuguese" />
            <Meta name="language" content="Portuguese" />

            {/* Default social tags */}
            <Meta property="og:locale" content="Portuguese" />
            <Meta property="og:type" content="website" />

            {/* Favicon */}
            <Link rel="icon" href="/logo.svg" type="image/svg+xml" />

            {/* Robots */}
            <Meta name="robots" content="index, follow" />

            {/* <DefaultSeo /> */}
            <Header mode="solid" />

            {props.children}

            <CtaSection />

            <Footer />
          </MetaProvider>
        </Suspense>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

export default App;
