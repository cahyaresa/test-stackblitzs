import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductTabsWrapperComponent } from './mkt-product-tabs-wrapper.component';

describe('MktProductTabsWrapperComponent', () => {
  let component: MktProductTabsWrapperComponent;
  let fixture: ComponentFixture<MktProductTabsWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductTabsWrapperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductTabsWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
