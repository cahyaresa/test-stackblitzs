import { Component, OnInit, Input } from '@angular/core';
import { BannerCarouselComponent } from '@spartacus/storefront';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-mkt-banner-carousel',
  templateUrl: './mkt-banner-carousel.component.html',
  styleUrls: ['./mkt-banner-carousel.component.scss']
})
export class MktBannerCarouselComponent extends BannerCarouselComponent{
  // @Input() set componentData(componentData: Observable<any>) {
  //   this._componentData$ = componentData;
  // }

  // private _componentData$: Observable<any>;
  // public get componentData$(): Observable<any> {
  //   return this._componentData$;
  // }
}