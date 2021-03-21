import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktHomepageBannerCarouselComponent } from './mkt-homepage-banner-carousel.component';

describe('MktHomepageBannerCarouselComponent', () => {
  let component: MktHomepageBannerCarouselComponent;
  let fixture: ComponentFixture<MktHomepageBannerCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktHomepageBannerCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktHomepageBannerCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
