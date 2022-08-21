import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthScreenContainerComponent } from './auth-screen-container.component';

describe('AuthScreenContainerComponent', () => {
  let component: AuthScreenContainerComponent;
  let fixture: ComponentFixture<AuthScreenContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthScreenContainerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthScreenContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
