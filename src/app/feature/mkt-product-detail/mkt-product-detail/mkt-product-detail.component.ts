import { Component, OnInit } from '@angular/core';
import { Observable, combineLatest } from 'rxjs';
import { Product, AuthService, UserService, UserIdService } from '@spartacus/core';
import { CurrentProductService, BreakpointService, BREAKPOINT } from '@spartacus/storefront';
import { map, filter } from 'rxjs/operators';
import { product } from '@spartacus/assets/translations/en/product';

@Component({
  selector: 'app-mkt-product-detail',
  templateUrl: './mkt-product-detail.component.html',
  styleUrls: ['./mkt-product-detail.component.scss']
})
export class MktProductDetailComponent implements OnInit {

  public isMobileView$: Observable<boolean>;
  public product$: Observable<Product>;
  public outOfStock$: Observable<boolean>;


  constructor(
    private authService: AuthService,
    private userIdService: UserIdService,
    private currentProductService: CurrentProductService,
    private breakpointService: BreakpointService
  ) { 
    this.product$ = this.currentProductService.getProduct();

    this.isMobileView$ = this.breakpointService.breakpoint$.pipe(
      map((breakpoint) => breakpoint === BREAKPOINT.xs)
    )
  }

  ngOnInit() {
    this.outOfStock$ = combineLatest([
      this.currentProductService.getProduct().pipe(filter(Boolean)), 
      this.userIdService.getUserId(),
    ]).pipe(
      map(
        (
          [product]: [Product, String] 
        ) => !! product.stock && product.stock.stockLevelStatus === 'outOfStock'
      )
    );
  }

}