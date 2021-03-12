import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchHompageFilterComponent } from './search-hompage-filter/search-hompage-filter.component';
import { CmsConfig, ConfigModule } from '@spartacus/core';
import { RecentNewsComponent } from './recent-news/recent-news.component';
import { HomepageBannerComponent } from './homepage-banner/homepage-banner.component';
import { MostViewProductCarouselComponent } from './most-view-product-carousel/most-view-product-carousel.component';



@NgModule({
  declarations: [SearchHompageFilterComponent, RecentNewsComponent, MostViewProductCarouselComponent],
  imports: [
    CommonModule,
    ConfigModule.withConfig({
      cmsComponents:{
        SearchFilterHomepageComponent: {
          component: SearchHompageFilterComponent
        },
        RecentNewsComponent:{
          component: RecentNewsComponent
        },
        SimpleResponsiveBannerComponent: {
          component: HomepageBannerComponent
        },
        MostViewProductsCarouselComponent: {
          component: MostViewProductCarouselComponent
        }
      }
    } as CmsConfig)
  ],
  entryComponents: [SearchHompageFilterComponent],
})
export class MktHomepageModule { }
