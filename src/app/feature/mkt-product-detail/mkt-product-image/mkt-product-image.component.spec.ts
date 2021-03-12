import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductImageComponent } from './mkt-product-image.component';

describe('MktProductImageComponent', () => {
  let component: MktProductImageComponent;
  let fixture: ComponentFixture<MktProductImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductImageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
