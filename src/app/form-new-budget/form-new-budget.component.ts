import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-form-new-budget',
  templateUrl: './form-new-budget.component.html',
  styleUrls: ['./form-new-budget.component.css']
})
export class FormNewBudgetComponent implements OnInit ,OnChanges{
  @Input() budget : Budget = new Budget();
  public budgetForm : FormGroup = this.formBuilder.group({
    'title':['',[Validators.required]],
    'amount':['',[Validators.required]],
    'category':['',[Validators.required]]
  });

  @Output() saveChanges : EventEmitter<Budget> = new EventEmitter<Budget>();


  constructor(
    private budgetservice:BudgetService,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute) { }


    public ngOnInit(): void {
    }

  public ngOnChanges(): void{
    this.budgetForm.patchValue(this.budget);
  }

  public onSubmit(){
    if(this.budgetForm.valid){
      this.saveChanges.emit(this.budgetForm.value);
    }
  }
}

