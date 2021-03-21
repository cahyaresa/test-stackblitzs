import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductCarouselLibComponent } from './mkt-product-carousel-lib.component';

describe('MktProductCarouselLibComponent', () => {
  let component: MktProductCarouselLibComponent;
  let fixture: ComponentFixture<MktProductCarouselLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductCarouselLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductCarouselLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
