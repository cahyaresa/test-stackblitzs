import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { GenericLinkModule, MediaModule } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';
import { HomepageBannerComponent } from './homepage-banner/homepage-banner.component';
import { bannerCmsConfig, } from './config/homepage-banner.config';


@NgModule({
  imports: [CommonModule, RouterModule, GenericLinkModule, MediaModule, 
    CommonModule,
    ConfigModule.withConfig(bannerCmsConfig)],
  providers: [
  ],
  declarations: [HomepageBannerComponent],
  entryComponents: [HomepageBannerComponent],
  exports: [HomepageBannerComponent],
})

export class MktHomepageBannerModule { }
