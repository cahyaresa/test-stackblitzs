import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CmsService } from '@spartacus/core';

@Component({
  selector: 'app-most-view-products-carousel',
  templateUrl: './most-view-products-carousel.component.html',
  styleUrls: ['./most-view-products-carousel.component.scss']
})
export class MostViewProductsCarouselComponent {
  public componentData$: Observable<any> = this.cmsService
    .getComponentData('MostViewProductCarouselComponent')
    .pipe(filter(Boolean));

  constructor(private cmsService: CmsService) {}
}
