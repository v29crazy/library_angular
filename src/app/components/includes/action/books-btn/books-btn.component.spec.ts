import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksBtnComponent } from './books-btn.component';

describe('BooksBtnComponent', () => {
  let component: BooksBtnComponent;
  let fixture: ComponentFixture<BooksBtnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksBtnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksBtnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
