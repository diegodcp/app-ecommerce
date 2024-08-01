import { APP_INITIALIZER, ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { HttpClient, provideHttpClient, withFetch } from '@angular/common/http';

import { InitConfig } from './config/init.config';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { translateLoadFactory } from './shared/utils/translate';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';


export function loadInitialConfig(initConfig: InitConfig) {
  return () => initConfig.load();
}

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes), 
    provideClientHydration(),
    provideHttpClient(withFetch()),
    {
      provide: APP_INITIALIZER,
      useFactory: loadInitialConfig,
      deps: [InitConfig],
      multi: true
    },
    importProvidersFrom(
      TranslateModule.forRoot({
        defaultLanguage: 'es',
        loader: {
          provide: TranslateLoader,
          useFactory: translateLoadFactory,
          deps: [HttpClient]
        }
      })
    ), provideAnimationsAsync()
  ]
};
