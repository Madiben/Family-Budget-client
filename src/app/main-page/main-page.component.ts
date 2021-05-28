import { Component, OnInit } from '@angular/core';
import { NumberValueAccessor } from '@angular/forms';
import {NgbCarouselConfig} from '@ng-bootstrap/ng-bootstrap';
import { Budget } from '../budget';
import { BudgetService } from '../budget.service';
@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css'],
  providers: [NgbCarouselConfig]
})
export class MainPageComponent implements OnInit {
  public budgets : Budget[] =[];

  public income:number = 0;
  public outcome:number = 0;

  showNavigationArrows = false;
  showNavigationIndicators = false;
  images = [1055, 194, 368].map((n) => `https://picsum.photos/id/${n}/900/500`);

  constructor(config: NgbCarouselConfig,
    private budgetservice: BudgetService) {
    // customize default values of carousels used by this component tree
    config.showNavigationArrows = true;
    config.showNavigationIndicators = true;
  }
  public async ngOnInit(): Promise<void> {
    this.budgets = await this.budgetservice.getBudgets();
    this.budgets.forEach(budget => {
      if(budget.amount>0){
        budget.status = 'Income'
        this.income = this.income + +(budget.amount);
      }else{
        budget.status = 'Outcome'
        this.outcome =this.outcome + +(budget.amount);
      }
    });
  }

}

