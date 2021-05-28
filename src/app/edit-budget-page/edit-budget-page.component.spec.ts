import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBudgetPageComponent } from './edit-budget-page.component';

describe('EditBudgetPageComponent', () => {
  let component: EditBudgetPageComponent;
  let fixture: ComponentFixture<EditBudgetPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBudgetPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBudgetPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
