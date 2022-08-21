import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountvarificationComponent } from './accountvarification.component';

describe('AccountvarificationComponent', () => {
  let component: AccountvarificationComponent;
  let fixture: ComponentFixture<AccountvarificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccountvarificationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccountvarificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
