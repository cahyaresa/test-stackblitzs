import { CmsConfig, ContentSlotComponentData, CmsPageSlotsConfig, CmsStructureConfig } from '@spartacus/core';
import { LayoutSlotConfig } from '@spartacus/storefront';
import { MktProductIntroComponent } from '../mkt-product-intro/mkt-product-intro.component';
import { MktProductDetailComponent } from '../mkt-product-detail/mkt-product-detail.component';
import { MktUpSellingReferencesComponent } from '../mkt-up-selling-references/mkt-up-selling-references.component';
import { MktProductTabsComponent } from '../mkt-product-tabs/mkt-product-tabs.component';
import { MktStockNotificationComponent } from '../mkt-stock-notification/mkt-stock-notification.component';


export const productDetailLayoutConfig = {
    layoutSlots: {
        ProductDetailsPageTemplate: {
        md: {
          slots: [
             'MktProductDetails',
             'UpSelling',
            //  'CrossSelling',
            //  'VariantSelector'
          ],
        },
      },
    },
  } as LayoutSlotConfig;

export const productDetailCmsConfig = <CmsConfig>{
    cmsComponents: {
      MktProductDetailComponent: {
        component: MktProductDetailComponent,
      },
      CMSTabParagraphComponent: {
        component: MktProductTabsComponent,
      },
      UpsellCarouselComponent: {
        component: MktUpSellingReferencesComponent
      },
      StockNotificationComponent: {
        component: MktStockNotificationComponent
      }

    },
  };


export const staticComponents: {
    [key: string]: ContentSlotComponentData | any;
  } = {
    MktProductDetailComponent: {
      typeCode: 'MktProductDetailComponent',
      flexType: 'MktProductDetailComponent',
      uid: 'MktProductDetailComponent',
    },
    MktStockNotificationComponent: {
      typeCode: 'MktStockNotificationComponent',
      flexType: 'MktStockNotificationComponent',
      uid: 'MktStockNotificationComponent',
    },
};
  
const cmsPageSlotConfig: CmsPageSlotsConfig = {
  MktProductDetails: {
      componentIds: ['MktProductDetailComponent'],
    }
};

export function productDetailCmsStructureConfig(): CmsStructureConfig {
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

  const productDetailsTranslationOverwrites = {
    en: {
      product: {
        productDetails: {
          quantity: 'Quantity',
        },
        productReview: {
          readAll: 'Read all {{count}} review',
        },
      },
    },
  };

export const productDetailsTranslationsConfig = {
    i18n: { resources: productDetailsTranslationOverwrites },
};
  