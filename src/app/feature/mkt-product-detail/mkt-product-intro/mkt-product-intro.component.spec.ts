import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktProductIntroComponent } from './mkt-product-intro.component';

describe('MktProductIntroComponent', () => {
  let component: MktProductIntroComponent;
  let fixture: ComponentFixture<MktProductIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktProductIntroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktProductIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
