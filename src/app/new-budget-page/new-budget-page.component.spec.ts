import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewBudgetPageComponent } from './new-budget-page.component';

describe('NewBudgetPageComponent', () => {
  let component: NewBudgetPageComponent;
  let fixture: ComponentFixture<NewBudgetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewBudgetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewBudgetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
