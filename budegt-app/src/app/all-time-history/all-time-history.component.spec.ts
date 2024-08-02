import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTimeHistoryComponent } from './all-time-history.component';

describe('AllTimeHistoryComponent', () => {
  let component: AllTimeHistoryComponent;
  let fixture: ComponentFixture<AllTimeHistoryComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AllTimeHistoryComponent]
    });
    fixture = TestBed.createComponent(AllTimeHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
