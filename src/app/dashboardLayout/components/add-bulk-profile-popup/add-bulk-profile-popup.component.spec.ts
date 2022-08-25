import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBulkProfilePopupComponent } from './add-bulk-profile-popup.component';

describe('AddBulkProfilePopupComponent', () => {
  let component: AddBulkProfilePopupComponent;
  let fixture: ComponentFixture<AddBulkProfilePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBulkProfilePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddBulkProfilePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
