import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecentOrdersModalComponent } from './recent-orders-modal.component';

describe('RecentOrdersModalComponent', () => {
  let component: RecentOrdersModalComponent;
  let fixture: ComponentFixture<RecentOrdersModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecentOrdersModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecentOrdersModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
