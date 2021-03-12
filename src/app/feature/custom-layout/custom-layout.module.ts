import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutConfig } from '@spartacus/storefront';
import { ConfigModule } from '@spartacus/core';

export const defaultLayoutConfig: LayoutConfig = {
  layoutSlots: {
    LandingPage2Template: {
      slots: [
        'Section1',
        'Section1A',
        'Section1B',
        'Section2A',
        'Section2B',
        'Section2C',
        'Section3',
        'Section4',
        'Section5',
        'Seo-footerContentSlot-homepage',
        'NewsAndArticlesHomePage',
      ]
    }
  }
};


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ConfigModule.withConfig(defaultLayoutConfig)
  ]
})
export class CustomLayoutModule { }
