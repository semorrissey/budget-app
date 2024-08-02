import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchseHistoryComponent } from './purchse-history.component';

describe('PurchseHistoryComponent', () => {
  let component: PurchseHistoryComponent;
  let fixture: ComponentFixture<PurchseHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PurchseHistoryComponent]
    });
    fixture = TestBed.createComponent(PurchseHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
