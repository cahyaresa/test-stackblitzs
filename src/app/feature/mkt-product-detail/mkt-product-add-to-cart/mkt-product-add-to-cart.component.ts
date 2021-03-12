import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { AddToCartComponent, CurrentProductService, ModalService } from '@spartacus/storefront';
import { CartConfigService, GlobalMessageService, ActiveCartService, GlobalMessageType } from '@spartacus/core';

@Component({
  selector: 'app-mkt-product-add-to-cart',
  templateUrl: './mkt-product-add-to-cart.component.html',
  styleUrls: ['./mkt-product-add-to-cart.component.scss']
})
export class MktProductAddToCartComponent extends AddToCartComponent {

  constructor(
    activeCartService: ActiveCartService,
    cd: ChangeDetectorRef,
    currentProductService: CurrentProductService,
    modalService: ModalService,
    private globalMessageService: GlobalMessageService
  ) {
    super(modalService, currentProductService, cd, activeCartService)
  }

  public addToCart(){
    if(!this.productCode || this.quantity <= 0) {
      return;
    }
    
    this.activeCartService
    .getEntry(this.productCode)
    .subscribe((entry) => {
      this.globalMessageService.add(
        "Product has been added to the cart",
        GlobalMessageType.MSG_TYPE_CONFIRMATION
      );
      this.activeCartService.addEntry(this.productCode, this.quantity);
    })
    .unsubscribe();
  }
}
