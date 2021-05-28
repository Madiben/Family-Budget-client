import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormNewBudgetComponent } from './form-new-budget.component';

describe('FormNewBudgetComponent', () => {
  let component: FormNewBudgetComponent;
  let fixture: ComponentFixture<FormNewBudgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormNewBudgetComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormNewBudgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
