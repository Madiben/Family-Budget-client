import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-new-budget-page',
  templateUrl: './new-budget-page.component.html',
  styleUrls: ['./new-budget-page.component.css']
})
export class NewBudgetPageComponent implements OnInit {


  constructor(
    private budgetservice:BudgetService,
    private route:ActivatedRoute,
    private router: Router) {
   }

  public ngOnInit(): void {
  }

  public async onSaveChanges(budget: Budget){
    if(budget.amount>0){
      budget.status="Income";
    }else{
      budget.status="Outcome";
    }
      await this.budgetservice.addBudget(budget);
      this.router.navigateByUrl('/budgets');
}

}
