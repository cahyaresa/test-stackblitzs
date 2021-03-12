import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductAddToCartComponent } from './mkt-product-add-to-cart.component';

describe('MktProductAddToCartComponent', () => {
  let component: MktProductAddToCartComponent;
  let fixture: ComponentFixture<MktProductAddToCartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductAddToCartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductAddToCartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
