import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductCarouselComponent } from './mkt-product-carousel.component';

describe('MktProductCarouselComponent', () => {
  let component: MktProductCarouselComponent;
  let fixture: ComponentFixture<MktProductCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
