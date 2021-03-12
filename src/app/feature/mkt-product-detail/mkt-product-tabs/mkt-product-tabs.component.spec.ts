import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductTabsComponent } from './mkt-product-tabs.component';

describe('MktProductTabsComponent', () => {
  let component: MktProductTabsComponent;
  let fixture: ComponentFixture<MktProductTabsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductTabsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
