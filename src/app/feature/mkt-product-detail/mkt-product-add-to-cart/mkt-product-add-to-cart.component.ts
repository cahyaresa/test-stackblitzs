import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { AddToCartComponent, CurrentProductService, ModalService } from '@spartacus/storefront';
import { GlobalMessageService, ActiveCartService, GlobalMessageType } from '@spartacus/core';

@Component({
  selector: 'app-mkt-product-add-to-cart',
  templateUrl: './mkt-product-add-to-cart.component.html',
  styleUrls: ['./mkt-product-add-to-cart.component.scss',],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MktProductAddToCartComponent extends AddToCartComponent {}

 