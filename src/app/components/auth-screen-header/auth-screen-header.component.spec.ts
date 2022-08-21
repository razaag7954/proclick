import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthScreenHeaderComponent } from './auth-screen-header.component';

describe('AuthScreenHeaderComponent', () => {
  let component: AuthScreenHeaderComponent;
  let fixture: ComponentFixture<AuthScreenHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthScreenHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthScreenHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
