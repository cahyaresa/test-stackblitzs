import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MostViewProductCarouselComponent } from './most-view-product-carousel.component';

describe('MostViewProductCarouselComponent', () => {
  let component: MostViewProductCarouselComponent;
  let fixture: ComponentFixture<MostViewProductCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MostViewProductCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MostViewProductCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
