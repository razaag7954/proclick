import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSitePopupComponent } from './add-site-popup.component';

describe('AddSitePopupComponent', () => {
  let component: AddSitePopupComponent;
  let fixture: ComponentFixture<AddSitePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddSitePopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddSitePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
