import { CmsConfig, ContentSlotComponentData, CmsPageSlotsConfig, CmsStructureConfig } from '@spartacus/core';
import { MktHeaderLogoComponent } from '../mkt-header-logo/mkt-header-logo.component';
import { LayoutSlotConfig } from '@spartacus/storefront';


export const headerLayoutConfig = {
    layoutSlots: {
      topBar: {
        md: {
          slots: ['SiteContext'],
        },
      },
      header: {
        md: {
          slots: [
             'PreHeader',
             'MktSiteLogo'
          ],
        },
      },
    },
  } as LayoutSlotConfig;

export const headerCmsConfig = <CmsConfig>{
    cmsComponents: {
        MktHeaderLogoComponent: {
        component: MktHeaderLogoComponent
      },
      SimpleBannerComponent:{
        component: MktHeaderLogoComponent
      }
    },
  };


export const staticComponents: {
    [key: string]: ContentSlotComponentData | any;
  } = {
    MktHeaderLogoComponent: {
      typeCode: 'MktHeaderLogoComponent',
      flexType: 'MktHeaderLogoComponent',
      uid: 'MktHeaderLogoComponent',
    }
};
  
const cmsPageSlotConfig: CmsPageSlotsConfig = {
    MktSiteLogo: {
      componentIds: ['MktHeaderLogoComponent'],
    }
};

export function headerCmsStructureConfig(): CmsStructureConfig {
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
  