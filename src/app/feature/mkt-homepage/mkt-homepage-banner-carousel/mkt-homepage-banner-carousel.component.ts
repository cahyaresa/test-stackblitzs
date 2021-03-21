import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operators';
import { CmsService } from '@spartacus/core';

@Component({
  selector: 'app-mkt-homepage-banner-carousel',
  templateUrl: './mkt-homepage-banner-carousel.component.html',
  styleUrls: ['./mkt-homepage-banner-carousel.component.scss']
})
export class MktHomepageBannerCarouselComponent {
  public componentData$: Observable<any> = this.cmsService
    .getComponentData('MostViewProductCarouselComponent')
    .pipe(filter(Boolean));

  constructor(private cmsService: CmsService) {}
}
