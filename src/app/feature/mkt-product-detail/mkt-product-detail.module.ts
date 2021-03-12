import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigModule, I18nModule, UrlModule } from '@spartacus/core';
import { productDetailLayoutConfig, productDetailCmsStructureConfig, productDetailCmsConfig, productDetailsTranslationsConfig } from './config/pdp-config';
import { MktProductIntroComponent } from './mkt-product-intro/mkt-product-intro.component';
import { RouterModule } from '@angular/router';
import { PageSlotModule, CartComponentModule, ItemCounterModule, MediaModule, OutletModule, PageComponentModule, StarRatingModule, SpinnerModule } from '@spartacus/storefront';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';
import { MktProductDetailComponent } from './mkt-product-detail/mkt-product-detail.component';
import { MktUpSellingReferencesComponent } from './mkt-up-selling-references/mkt-up-selling-references.component';
import { MktProductTabsComponent } from './mkt-product-tabs/mkt-product-tabs.component';
import { MktStockNotificationComponent } from './mkt-stock-notification/mkt-stock-notification.component';
import { MktProductImageComponent } from './mkt-product-image/mkt-product-image.component';
import { MktProductDetailsService } from './Mkt-product-details.service';
import { MktProductAddToCartComponent } from './mkt-product-add-to-cart/mkt-product-add-to-cart.component';



@NgModule({
  declarations: [
    MktProductDetailComponent, 
    MktUpSellingReferencesComponent, 
    MktProductTabsComponent, 
    MktStockNotificationComponent, 
    MktProductImageComponent,
    MktProductIntroComponent,
    MktProductAddToCartComponent
  ],
  imports: [
    CartComponentModule,
    CommonModule,
    I18nModule,
    ItemCounterModule,
    MediaModule,
    OutletModule,
    FormsModule,
    ReactiveFormsModule,
    PageComponentModule,
    RouterModule,
    StarRatingModule,
    // SwiperModule,
    UrlModule,
    SpinnerModule,
    NgSelectModule,
    ConfigModule.withConfig(productDetailLayoutConfig),
    ConfigModule.withConfigFactory(productDetailCmsStructureConfig),
    ConfigModule.withConfig(productDetailCmsConfig),
    ConfigModule.withConfig(productDetailsTranslationsConfig)
  ],
  entryComponents:[
    MktProductIntroComponent, 
    MktProductDetailComponent, 
    MktUpSellingReferencesComponent,
    MktProductTabsComponent, 
    MktStockNotificationComponent, 
    MktProductImageComponent,
    MktProductAddToCartComponent
  ],
  providers: [
    MktProductDetailsService,
    // {
    //   provide: SWIPER_CONFIG,
    //   useValue: DEFAULT_SWIPER_CONFIG,
    // }
  ]
})
export class MktProductDetailModule { }
