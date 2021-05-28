import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budget-page',
  templateUrl: './budget-page.component.html',
  styleUrls: ['./budget-page.component.css']
})
export class BudgetPageComponent implements OnInit {

  public budget! : Budget ;
  constructor(
    private budgetservice:BudgetService,
    private route:ActivatedRoute,
    private router:Router) {

   }

   public async ngOnInit(): Promise<void> {
    let id = + this.route.snapshot.paramMap.get('id')!;
    this.budget = await this.budgetservice.getBudget(id);
  }
  public async delBudget(){
    await this.budgetservice.deleteBudget(this.budget.id);
    this.router.navigateByUrl('/budgets');
  }
  public bstatus(a:Budget): string{
    if(a.amount>0){
      a.status = 'Income'
    }else{
      a.status = 'Outcome'
    }
    return a.status;
  }
}
