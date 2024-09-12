import { Router } from '@solidjs/router';
import { FileRoutes } from '@solidjs/start/router';
import { Suspense } from 'solid-js';
import { CtaSection, Header } from '~/components';
import '~/styles/app.css';
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
// Boxicons
import 'boxicons/css/boxicons.min.css';
// Phosphor icons
import '@phosphor-icons/web/regular/style.css';

function App() {
  return (
    <Router
      preload={true}
      root={(props) => (
        <Suspense fallback={'Loading...'}>
          {/*TODO: fallback*/}
          <Header mode="solid" />

          {props.children}

          <CtaSection />
        </Suspense>
      )}
    >
      <FileRoutes />
    </Router>
  );
}

export default App;
