import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinierPageLoaderComponent } from './linier-page-loader.component';

describe('LinierPageLoaderComponent', () => {
  let component: LinierPageLoaderComponent;
  let fixture: ComponentFixture<LinierPageLoaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinierPageLoaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinierPageLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
