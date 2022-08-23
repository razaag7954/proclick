import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofdocumentComponent } from './listofdocument.component';

describe('ListofdocumentComponent', () => {
  let component: ListofdocumentComponent;
  let fixture: ComponentFixture<ListofdocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofdocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListofdocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
