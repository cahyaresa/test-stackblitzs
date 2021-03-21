import { LayoutConfig } from '@spartacus/storefront';
import { CmsConfig, ContentSlotComponentData, CmsPageSlotsConfig, CmsStructureConfig } from '@spartacus/core';
import { SearchHompageFilterComponent } from '../search-hompage-filter/search-hompage-filter.component';
import { RecentNewsComponent } from '../recent-news/recent-news.component';
import { MostViewProductsCarouselComponent } from '../most-view-products-carousel/most-view-products-carousel.component';
import { MktBannerCarouselComponent } from '../../mkt-shared/component/mkt-banner-carousel/mkt-banner-carousel.component';

export const homepageLayoutConfig: LayoutConfig = {
    layoutSlots: {
      LandingPage2Template: {
        slots: [
          // 'Section1',
          // 'Section1A',
          'Section2A',
          'Section1B',
          // 'Section2A',
          'Section2B',
          'Section2C',
          'Section3',
          'Section4',
          'Section5',
          'Seo-footerContentSlot-homepage',
          'NewsAndArticlesHomePage',


          'banner'
          // 'SearchHompageFilter',
          // 'SearchFilterHomepage',
          // 'mostViewProduct',
        ]
      }
    }
  };


  export const homepageCmsConfig = <CmsConfig>{
      cmsComponents:{
        SearchFilterHomepageComponent: {
          component: SearchHompageFilterComponent
        },
        // SearchHompageFilterComponent:{
        //   component: SearchHompageFilterComponent
        // },
        RecentNewsComponent:{
          component: RecentNewsComponent
        },
        MostViewProductsCarouselComponent:{
          component: MostViewProductsCarouselComponent
        },
        RotatingImagesComponent:{
          component: MktBannerCarouselComponent
        },
        MktBannerCarouselComponent: {
          component: MktBannerCarouselComponent
        }
        
    }
  };


export const staticComponents: {
    [key: string]: ContentSlotComponentData | any;
  } = {
    // SearchHompageFilterComponent: {
    //   typeCode: 'SearchHompageFilterComponent',
    //   flexType: 'SearchHompageFilterComponent',
    //   uid: 'SearchHompageFilterComponent',
    // },
    // SearchFilterHomepageComponent: {
    //   typeCode: 'SearchHompageFilterComponent',
    //   flexType: 'SearchHompageFilterComponent',
    //   uid: 'SearchHompageFilterComponent',
    // },
    RecentNewsComponent: {
      typeCode: 'RecentNewsComponent',
      flexType: 'RecentNewsComponent',
      uid: 'RecentNewsComponent',
    },
    // MostViewProductsCarouselComponent: {
    //   typeCode: 'MostViewProductsCarouselComponent',
    //   flexType: 'MostViewProductsCarouselComponent',
    //   uid: 'MostViewProductsCarouselComponent',
    // },
    MktBannerCarouselComponent: {
      typeCode: 'MktBannerCarouselComponent',
      flexType: 'MktBannerCarouselComponent',
      uid: 'MktBannerCarouselComponent',
    }
};
  
const cmsPageSlotConfig: CmsPageSlotsConfig = {
  // SearchHompageFilter: {
  //   componentIds: ['SearchHompageFilterComponent'],
  // },
  // SearchFilterHomepage: {
  //   componentIds: ['SearchHompageFilterComponent'],
  // },
  // mostViewProduct: {
  //   componentIds: ['MostViewProductsCarouselComponent'],
  // },
  banner: {
    componentIds: ['MktBannerCarouselComponent'],
  }
};

export function HoepageCmsStructureConfig(): CmsStructureConfig {
    return {
      cmsStructure: {
        components: {
          ...staticComponents
        },
        slots: {
          ...cmsPageSlotConfig
        },
      },
    };
  }
  