import { Location } from '@angular/common';
import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-edit-budget-page',
  templateUrl: './edit-budget-page.component.html',
  styleUrls: ['./edit-budget-page.component.css']
})
export class EditBudgetPageComponent implements OnInit{

  public budget : Budget = new Budget();

  constructor(
    private budgetservice:BudgetService,
    private route:ActivatedRoute,
    private router: Router) {

   }

   public async ngOnInit(): Promise<void> {
    let id = + this.route.snapshot.paramMap.get('id')!;
    this.budget = await this.budgetservice.getBudget(id);
  }

  public async onSaveChanges(budget: Budget){
    if(budget.amount>0){
      budget.status="Income";
    }else{
      budget.status="Outcome";
    }
    await this.budgetservice.updateBudget(this.budget.id,budget);
    this.router.navigateByUrl('/budgets');
  }
  public async delBudget(){
    await this.budgetservice.deleteBudget(this.budget.id);
    this.router.navigateByUrl('/budgets');
  }
}
