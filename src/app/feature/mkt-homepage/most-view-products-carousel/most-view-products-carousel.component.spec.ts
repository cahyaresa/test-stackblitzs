import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewProductsCarouselComponent } from './most-view-products-carousel.component';

describe('MostViewProductsCarouselComponent', () => {
  let component: MostViewProductsCarouselComponent;
  let fixture: ComponentFixture<MostViewProductsCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostViewProductsCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewProductsCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
