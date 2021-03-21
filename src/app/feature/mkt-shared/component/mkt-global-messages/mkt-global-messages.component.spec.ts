import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktGlobalMessagesComponent } from './mkt-global-messages.component';

describe('MktGlobalMessagesComponent', () => {
  let component: MktGlobalMessagesComponent;
  let fixture: ComponentFixture<MktGlobalMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktGlobalMessagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktGlobalMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
