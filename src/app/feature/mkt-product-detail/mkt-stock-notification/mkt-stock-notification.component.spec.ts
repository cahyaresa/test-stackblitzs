import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MktStockNotificationComponent } from './mkt-stock-notification.component';

describe('MktStockNotificationComponent', () => {
  let component: MktStockNotificationComponent;
  let fixture: ComponentFixture<MktStockNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MktStockNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MktStockNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
