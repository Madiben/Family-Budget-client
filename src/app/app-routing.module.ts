import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainPageComponent } from './main-page/main-page.component';
import { NewBudgetPageComponent } from './new-budget-page/new-budget-page.component';
import { EditBudgetPageComponent } from './edit-budget-page/edit-budget-page.component';
import { BudgetsPageComponent } from './budgets-page/budgets-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';


const routes: Routes = [
  {
    path: "",
    redirectTo: "/home",
    pathMatch: "full",
  },
  {
    path: "home",
    component: MainPageComponent,
  },
  {
    path: "budgets",
    component: BudgetsPageComponent,
  },
  {
    path: "budgets/:id",
    component: BudgetPageComponent,
  },
  {
    path: "budget/new",
    component: NewBudgetPageComponent,
  },
  {
    path: "budgets/:id/edit",
    component: EditBudgetPageComponent,
  },
  {
    path: "about",
    component: AboutPageComponent,
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
