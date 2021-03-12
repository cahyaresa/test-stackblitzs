import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchHompageFilterComponent } from './search-hompage-filter.component';

describe('SearchHompageFilterComponent', () => {
  let component: SearchHompageFilterComponent;
  let fixture: ComponentFixture<SearchHompageFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchHompageFilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchHompageFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
