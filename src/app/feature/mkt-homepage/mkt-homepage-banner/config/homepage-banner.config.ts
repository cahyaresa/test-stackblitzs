import { CmsConfig, ContentSlotComponentData, CmsPageSlotsConfig, CmsStructureConfig } from '@spartacus/core';
import { HomepageBannerComponent } from '../homepage-banner/homepage-banner.component';

export const bannerCmsConfig = <CmsConfig>{
    cmsComponents: {
        SimpleResponsiveBannerComponent: {
          component: HomepageBannerComponent
        },
        HomepageBannerComponent: {
          component: HomepageBannerComponent
        },
      },
};