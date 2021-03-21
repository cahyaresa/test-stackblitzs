import { Component, OnInit } from '@angular/core';
import { ContentSlotComponentData } from '@spartacus/core';

@Component({
  selector: 'app-mkt-product-tabs-wrapper',
  templateUrl: './mkt-product-tabs-wrapper.component.html',
  styleUrls: ['./mkt-product-tabs-wrapper.component.scss']
})
export class MktProductTabsWrapperComponent {
  public mktProductTabsWrapper: ContentSlotComponentData = {
    uid: 'TabPanelContainer',
    typeCode: 'CMSTabParagraphContainer',
    flexType: 'CMSTabParagraphContainer',
  }
}