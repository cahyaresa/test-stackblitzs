import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktProductCarouselLibComponent } from './mkt-product-carousel-lib.component';
import { CmsConfig, UrlModule, provideDefaultConfig } from '@spartacus/core';
import { CarouselModule, MediaModule } from '@spartacus/storefront';
import { RouterModule } from '@angular/router';



@NgModule({
  imports: [CommonModule, CarouselModule, MediaModule, RouterModule, UrlModule],
  providers: [
    provideDefaultConfig(<CmsConfig>{
      cmsComponents: {
        ProductCarouselComponent: {
          component: MktProductCarouselLibComponent,
        },
      },
    }),
  ],
  declarations: [MktProductCarouselLibComponent],
  entryComponents: [MktProductCarouselLibComponent],
  exports: [MktProductCarouselLibComponent],
})
export class MktProductCarouselLibModule { }
