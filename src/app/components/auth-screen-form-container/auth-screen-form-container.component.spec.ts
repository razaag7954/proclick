import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthScreenFormContainerComponent } from './auth-screen-form-container.component';

describe('AuthScreenFormContainerComponent', () => {
  let component: AuthScreenFormContainerComponent;
  let fixture: ComponentFixture<AuthScreenFormContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthScreenFormContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthScreenFormContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
