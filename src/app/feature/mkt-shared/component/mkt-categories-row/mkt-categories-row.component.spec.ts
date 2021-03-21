import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktCategoriesRowComponent } from './mkt-categories-row.component';

describe('MktCategoriesRowComponent', () => {
  let component: MktCategoriesRowComponent;
  let fixture: ComponentFixture<MktCategoriesRowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktCategoriesRowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktCategoriesRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
