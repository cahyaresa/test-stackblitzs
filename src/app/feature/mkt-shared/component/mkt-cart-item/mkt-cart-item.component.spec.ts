import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktCartItemComponent } from './mkt-cart-item.component';

describe('MktCartItemComponent', () => {
  let component: MktCartItemComponent;
  let fixture: ComponentFixture<MktCartItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktCartItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktCartItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
