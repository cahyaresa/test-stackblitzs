import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MostViewProductsCarouselComponent } from './most-view-products-carousel.component';
import { MktSharedModule } from '../../mkt-shared/mkt-shared.module';



@NgModule({
  declarations: [MostViewProductsCarouselComponent],
  imports: [
    CommonModule,
    MktSharedModule
  ]
})
export class MostViewProductsCarouselModule { }
