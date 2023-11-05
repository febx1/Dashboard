import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewuserTableComponent } from './newuser-table.component';

describe('NewuserTableComponent', () => {
  let component: NewuserTableComponent;
  let fixture: ComponentFixture<NewuserTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewuserTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewuserTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
