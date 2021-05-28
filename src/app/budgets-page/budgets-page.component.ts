import { Component, OnInit } from '@angular/core';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';

@Component({
  selector: 'app-budgets-page',
  templateUrl: './budgets-page.component.html',
  styleUrls: ['./budgets-page.component.css']
})
export class BudgetsPageComponent implements OnInit {

  public budgets : Budget[] =[];

  public selectedStatus : string ='';
  public filteredBudget: Budget[] = [];

   constructor(private budgetservice: BudgetService) {
   }

  public async ngOnInit(): Promise<void> {
    this.budgets = await this.budgetservice.getBudgets();
    this.selectedStatus = 'Income';
    this.filter();
  }

  private filter():void {
    this.filteredBudget = this.selectedStatus ?
      this.budgets.filter((i: Budget)=> i.status == this.selectedStatus) :
      this.budgets;

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
