import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersBooksComponent } from './users-books.component';

describe('UsersBooksComponent', () => {
  let component: UsersBooksComponent;
  let fixture: ComponentFixture<UsersBooksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersBooksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersBooksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
