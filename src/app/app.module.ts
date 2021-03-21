import { BrowserModule, BrowserTransferStateModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { translations, translationChunksConfig } from '@spartacus/assets';
import { B2cStorefrontModule } from '@spartacus/storefront';
import { environment } from 'src/environments/environment';
import { PageLoaderModule } from './shared/page-loader/page-loader.module';
import { StorefrontMissingExportsModule } from './storefront-missing-exports/storefront-missing-exports.module';
import { FeatureModule } from './feature/feature.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    PageLoaderModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    B2cStorefrontModule.withConfig({
      backend: {
        occ: {
          baseUrl: environment.occBaseUrl,
          prefix: environment.occBasePrefix
        }
      },
      context: {
        currency: ['IDR'],
        language: ['in'],
        baseSite:['marketplace-spa'],
        urlParameters: ['baseSite', 'language', 'currency']
      },
      i18n: {
        resources: translations,
        chunks: translationChunksConfig,
        fallbackLang: 'en'
      },
      features: {
        level: '3.1'
      }
    }),
    BrowserTransferStateModule,
    StorefrontMissingExportsModule,
    FeatureModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
