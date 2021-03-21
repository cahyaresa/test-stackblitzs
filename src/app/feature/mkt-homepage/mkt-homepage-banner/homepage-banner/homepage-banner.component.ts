import { Component, ChangeDetectionStrategy } from '@angular/core';
import { BannerComponent, CmsComponentData} from '@spartacus/storefront';
import { CmsBannerComponent } from '@spartacus/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-homepage-banner',
  templateUrl: './homepage-banner.component.html',
  styleUrls: ['./homepage-banner.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class HomepageBannerComponent extends BannerComponent {
  // protected component: CmsComponentData<CmsBannerComponent>;
  // data$: Observable<CmsBannerComponent>;

  // constructor(component: CmsComponentData<CmsBannerComponent>) {
  //   super(component);
  //   // console.log(this.data$)            
  // }   
  

  
}
