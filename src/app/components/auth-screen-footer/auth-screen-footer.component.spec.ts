import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthScreenFooterComponent } from './auth-screen-footer.component';

describe('AuthScreenFooterComponent', () => {
  let component: AuthScreenFooterComponent;
  let fixture: ComponentFixture<AuthScreenFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AuthScreenFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AuthScreenFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
