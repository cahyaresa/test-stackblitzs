import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktIconComponent } from './mkt-icon.component';

describe('MktIconComponent', () => {
  let component: MktIconComponent;
  let fixture: ComponentFixture<MktIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktIconComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
