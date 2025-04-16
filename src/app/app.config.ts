import { ApplicationConfig, provideZoneChangeDetection, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { es_ES, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import es from '@angular/common/locales/es';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient } from '@angular/common/http';
import { providePrimeNG } from 'primeng/config';
import Aura from '@primeng/themes/aura';

registerLocaleData(es);

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
              provideRouter(routes),
              provideClientHydration(),
              provideNzI18n(es_ES),
              importProvidersFrom(FormsModule),
              provideAnimationsAsync(), provideHttpClient(),
              provideAnimationsAsync(),
              provideAnimationsAsync(),
              providePrimeNG({
                  theme: {
                      preset: Aura,
                      options: {
                        // desactiva por completo la detección de dark/light
                        darkModeSelector: false
                      }
                  }
              })
              ]
};
