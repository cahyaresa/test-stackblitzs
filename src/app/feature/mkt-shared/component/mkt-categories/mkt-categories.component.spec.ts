import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktCategoriesComponent } from './mkt-categories.component';

describe('MktCategoriesComponent', () => {
  let component: MktCategoriesComponent;
  let fixture: ComponentFixture<MktCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktCategoriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
