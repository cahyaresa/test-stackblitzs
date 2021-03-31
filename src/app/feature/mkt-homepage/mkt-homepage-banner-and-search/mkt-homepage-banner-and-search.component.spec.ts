import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktHomepageBannerAndSearchComponent } from './mkt-homepage-banner-and-search.component';

describe('MktHomepageBannerAndSearchComponent', () => {
  let component: MktHomepageBannerAndSearchComponent;
  let fixture: ComponentFixture<MktHomepageBannerAndSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktHomepageBannerAndSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktHomepageBannerAndSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
