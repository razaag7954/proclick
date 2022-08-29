import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofAssignusersComponent } from './listof-assignusers.component';

describe('ListofAssignusersComponent', () => {
  let component: ListofAssignusersComponent;
  let fixture: ComponentFixture<ListofAssignusersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofAssignusersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofAssignusersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
