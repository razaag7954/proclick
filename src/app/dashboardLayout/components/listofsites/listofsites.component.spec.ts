import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofsitesComponent } from './listofsites.component';

describe('ListofsitesComponent', () => {
  let component: ListofsitesComponent;
  let fixture: ComponentFixture<ListofsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofsitesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
