import { ApplicationConfig, provideZoneChangeDetection } from "@angular/core";
import { provideRouter } from "@angular/router";

import { provideHttpClient, withFetch } from "@angular/common/http";
import {
  provideClientHydration,
  withEventReplay,
} from "@angular/platform-browser";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";
import { providePrimeNG } from "primeng/config";
import { routes } from "./app.routes";
import { GlobalPreset } from "./core/ui/presets/global-preset";

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideHttpClient(withFetch()),
    provideRouter(routes),
    provideClientHydration(withEventReplay()),
    // Prime ng
    provideAnimationsAsync(),
    providePrimeNG({
      theme: {
        preset: GlobalPreset,
        options: {
          darkModeSelector: false,
          cssLayer: {
            name: "primeng",
            order: "theme, base, primeng",
          },
        },
      },
    }),
  ],
};
