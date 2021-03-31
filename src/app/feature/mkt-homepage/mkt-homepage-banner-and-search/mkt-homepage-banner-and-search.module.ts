import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MktHomepageBannerAndSearchComponent } from './mkt-homepage-banner-and-search.component';
import { MktHomepageModule } from '../mkt-homepage.module';
import { MktSharedModule } from '../../mkt-shared/mkt-shared.module';



@NgModule({
  declarations: [MktHomepageBannerAndSearchComponent],
  imports: [
    CommonModule,
    MktSharedModule,

  ]
})
export class MktHomepageBannerAndSearchModule { }
