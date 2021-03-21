import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktHeaderModule } from './mkt-header/mkt-header.module';
import { MktHomepageModule } from './mkt-homepage/mkt-homepage.module';
import { MktProductDetailModule } from './mkt-product-detail/mkt-product-detail.module';


@NgModule({
  imports: [
    CommonModule,
    MktHeaderModule,
    MktHomepageModule,
    MktProductDetailModule,
  ]
})
export class FeatureModule { }
