import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DasbhboardTableComponent } from './dasbhboard-table.component';

describe('DasbhboardTableComponent', () => {
  let component: DasbhboardTableComponent;
  let fixture: ComponentFixture<DasbhboardTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DasbhboardTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DasbhboardTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
