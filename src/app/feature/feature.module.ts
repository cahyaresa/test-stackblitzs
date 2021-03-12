import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktHeaderModule } from './mkt-header/mkt-header.module';
import { CustomLayoutModule } from './custom-layout/custom-layout.module';
import { MktHomepageModule } from './mkt-homepage/mkt-homepage.module';
import { MktProductDetailModule } from './mkt-product-detail/mkt-product-detail.module';


@NgModule({
  imports: [
    CommonModule,
    MktHeaderModule,
    CustomLayoutModule,
    MktHomepageModule,
    MktProductDetailModule
  ]
})
export class FeatureModule { }
