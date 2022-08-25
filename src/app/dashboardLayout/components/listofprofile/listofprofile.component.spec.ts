import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofprofileComponent } from './listofprofile.component';

describe('ListofprofileComponent', () => {
  let component: ListofprofileComponent;
  let fixture: ComponentFixture<ListofprofileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofprofileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
