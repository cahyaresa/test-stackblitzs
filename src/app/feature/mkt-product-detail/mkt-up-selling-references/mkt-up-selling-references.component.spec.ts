import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktUpSellingReferencesComponent } from './mkt-up-selling-references.component';

describe('MktUpSellingReferencesComponent', () => {
  let component: MktUpSellingReferencesComponent;
  let fixture: ComponentFixture<MktUpSellingReferencesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktUpSellingReferencesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktUpSellingReferencesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
