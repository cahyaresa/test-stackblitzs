import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktHeaderLogoComponent } from './mkt-header-logo/mkt-header-logo.component';
import { ConfigModule, CmsConfig, I18nModule, UrlModule } from '@spartacus/core';
import { RouterModule } from '@angular/router';
import { PageSlotModule } from '@spartacus/storefront';
import { headerCmsConfig, headerCmsStructureConfig, headerLayoutConfig } from './config/header.config';


@NgModule({
  declarations: [MktHeaderLogoComponent],
  imports: [
    CommonModule,
    RouterModule,
    I18nModule,
    PageSlotModule,
    UrlModule,
    ConfigModule.withConfig(headerLayoutConfig),
    ConfigModule.withConfigFactory(headerCmsStructureConfig),
    ConfigModule.withConfig(headerCmsConfig)
  ],
  entryComponents:[
    MktHeaderLogoComponent
  ]
})

export class MktHeaderModule { }
