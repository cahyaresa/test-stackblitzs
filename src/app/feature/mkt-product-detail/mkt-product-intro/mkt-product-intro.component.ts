import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ProductIntroComponent, CurrentProductService } from '@spartacus/storefront';
import { TranslationService, WindowRef } from '@spartacus/core';
import { MktProductDetailsService } from '../Mkt-product-details.service';

@Component({
  selector: 'app-mkt-product-intro',
  templateUrl: './mkt-product-intro.component.html',
  styleUrls: ['./mkt-product-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MktProductIntroComponent extends ProductIntroComponent {

  constructor(
    currentProductService: CurrentProductService,
    translationService: TranslationService,
    winRef: WindowRef,
    private productDetailsService: MktProductDetailsService
  ) {
    super(currentProductService, translationService, winRef);
  }

  public goToReviews(): void {
    this.productDetailsService.redirectToReviews.next();
  }
}
