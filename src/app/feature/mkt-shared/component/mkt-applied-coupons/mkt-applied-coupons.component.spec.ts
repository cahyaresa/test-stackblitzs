import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktAppliedCouponsComponent } from './mkt-applied-coupons.component';

describe('MktAppliedCouponsComponent', () => {
  let component: MktAppliedCouponsComponent;
  let fixture: ComponentFixture<MktAppliedCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktAppliedCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktAppliedCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
