import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-form-budget',
  templateUrl: './form-budget.component.html',
  styleUrls: ['./form-budget.component.css']
})
export class FormBudgetComponent implements OnInit,OnChanges {

  @Input() budget : Budget = new Budget();
  public budgetForm : FormGroup = this.formBuilder.group({
    'title':['',[Validators.required]],
    'amount':['',[Validators.required]],
    'category':['',[Validators.required]]
  });
  public get wrongtitle(){
    return (this.budgetForm.get('title')?.invalid)&&(this.budgetForm.get('title')?.dirty||this.budgetForm.get('title')?.touched);
  }
  public get wrongcategory(){
    return (this.budgetForm.get('category')?.invalid)&&(this.budgetForm.get('category')?.dirty||this.budgetForm.get('category')?.touched);
  }
  public get correcttitle(){
    return (this.budgetForm.get('title')?.valid)||(this.budget.title);
  }
  public get correctcategory(){
    return this.budgetForm.get('category')?.valid;
  }


// HTML

// <!-- [class.is-invalid]="wrongtitle.invalid &&(wrongtitle.dirty||wrongtitle.touched)"  -->
// <!-- [class.is-valid]="correcttitle" -->
// [class.is-invalid]="wrongcategory"
//       [class.is-valid]="correctcategory"


  @Output() saveChanges : EventEmitter<Budget> = new EventEmitter<Budget>();


  constructor(
    private budgetservice:BudgetService,
    private formBuilder:FormBuilder,
    private route:ActivatedRoute) { }


    public async ngOnInit(): Promise<void> {
      let id = + this.route.snapshot.paramMap.get('id')!;
      this.budget = await this.budgetservice.getBudget(id);
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
