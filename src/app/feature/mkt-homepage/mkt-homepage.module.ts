import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHompageFilterComponent } from './search-hompage-filter/search-hompage-filter.component';
import { ConfigModule } from '@spartacus/core';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { homepageLayoutConfig, HoepageCmsStructureConfig, homepageCmsConfig } from './config/homepage.config';
import { MostViewProductsCarouselModule } from './most-view-products-carousel/most-view-products-carousel.module';
import { MktHomepageBannerModule } from './mkt-homepage-banner/mkt-homepage-banner.module';
import { MktHomepageBannerCarouselComponent } from './mkt-homepage-banner-carousel/mkt-homepage-banner-carousel.component';
import { MktSharedModule } from '../mkt-shared/mkt-shared.module';

@NgModule({
  declarations: [SearchHompageFilterComponent, RecentNewsComponent, MktHomepageBannerCarouselComponent],
  imports: [
    CommonModule,
    MktSharedModule,
    MktHomepageBannerModule,
    MostViewProductsCarouselModule,
    ConfigModule.withConfig(homepageLayoutConfig),
    ConfigModule.withConfigFactory(HoepageCmsStructureConfig),
    ConfigModule.withConfig(homepageCmsConfig),
    
  ],
  entryComponents: [SearchHompageFilterComponent, RecentNewsComponent, MktHomepageBannerCarouselComponent],
})
export class MktHomepageModule { }
