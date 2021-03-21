import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktPaginationComponent } from './mkt-pagination.component';

describe('MktPaginationComponent', () => {
  let component: MktPaginationComponent;
  let fixture: ComponentFixture<MktPaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktPaginationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
