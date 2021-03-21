import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktCouponsComponent } from './mkt-coupons.component';

describe('MktCouponsComponent', () => {
  let component: MktCouponsComponent;
  let fixture: ComponentFixture<MktCouponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktCouponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktCouponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
