import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductDetailComponent } from './mkt-product-detail.component';

describe('MktProductDetailComponent', () => {
  let component: MktProductDetailComponent;
  let fixture: ComponentFixture<MktProductDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductDetailComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
