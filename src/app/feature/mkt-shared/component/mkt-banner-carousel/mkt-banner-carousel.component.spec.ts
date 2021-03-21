import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktBannerCarouselComponent } from './mkt-banner-carousel.component';

describe('MktBannerCarouselComponent', () => {
  let component: MktBannerCarouselComponent;
  let fixture: ComponentFixture<MktBannerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktBannerCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktBannerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
