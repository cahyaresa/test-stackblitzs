import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {
  I18nModule,
  UrlModule,
  FeaturesConfigModule,
  ConfigModule,
} from '@spartacus/core';
import {
  MediaModule,
  StarRatingModule,
  ItemCounterModule,
  CarouselModule,
  PageComponentModule,
} from '@spartacus/storefront';

import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SharedModule } from 'src/app/shared/shared.module';
import { sharedTranslationsConfig } from './config/shared.config';
import { MktCategoriesServices } from './service/mkt-categories.service';
import { MktProductCarouselComponent } from './component/mkt-product-carousel/mkt-product-carousel.component';
import { MktCardComponent } from './component/mkt-card/mkt-card.component';
import { MktAppliedCouponsComponent } from './component/mkt-applied-coupons/mkt-applied-coupons.component';
import { MktCartItemComponent } from './component/mkt-cart-item/mkt-cart-item.component';
import { MktCategoriesComponent } from './component/mkt-categories/mkt-categories.component';
import { MktCategoriesRowComponent } from './component/mkt-categories-row/mkt-categories-row.component';
import { MktCouponsComponent } from './component/mkt-coupons/mkt-coupons.component';
import { MktGlobalMessagesComponent } from './component/mkt-global-messages/mkt-global-messages.component';
import { MktIconComponent } from './component/mkt-icon/mkt-icon.component';
import { MktPaginationComponent } from './component/mkt-pagination/mkt-pagination.component';
import { MktProductCarouselLibModule } from './component/mkt-product-carousel-lib/mkt-product-carousel-lib.module';
import { MktBannerCarouselComponent } from './component/mkt-banner-carousel/mkt-banner-carousel.component';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  // a11y: true,
  direction: 'horizontal',
  keyboard: true,
  mousewheel: false,
  pagination: false,
};


@NgModule({
  declarations: [
    MktProductCarouselComponent, 
    MktCardComponent, 
    MktAppliedCouponsComponent, 
    MktCartItemComponent, 
    MktCategoriesComponent, 
    MktCategoriesRowComponent, 
    MktCouponsComponent,
    MktGlobalMessagesComponent, 
    MktIconComponent, 
    MktPaginationComponent, 
    MktBannerCarouselComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MediaModule,
    RouterModule,
    StarRatingModule,
    SwiperModule,
    UrlModule,
    I18nModule,
    SharedModule,
    FeaturesConfigModule,
    ItemCounterModule,
    MktProductCarouselLibModule,
    CarouselModule, 
    PageComponentModule,
    ConfigModule.withConfig(sharedTranslationsConfig),
  ],
  exports: [
    MktProductCarouselComponent, 
    MktCardComponent, 
    MktAppliedCouponsComponent, 
    MktCartItemComponent, 
    MktCategoriesComponent, 
    MktCategoriesRowComponent, 
    MktCouponsComponent,
    MktGlobalMessagesComponent, 
    MktIconComponent, 
    MktPaginationComponent,
    MktBannerCarouselComponent
  ],
  providers:[
    MktCategoriesServices,
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class MktSharedModule { }
