import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { MainPageComponent } from './main-page/main-page.component';
import { NavPageComponent } from './nav-page/nav-page.component';
import { NewBudgetPageComponent } from './new-budget-page/new-budget-page.component';
import { EditBudgetPageComponent } from './edit-budget-page/edit-budget-page.component';
import { BudgetsPageComponent } from './budgets-page/budgets-page.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { BudgetPageComponent } from './budget-page/budget-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBudgetComponent } from './form-budget/form-budget.component';
import { FormNewBudgetComponent } from './form-new-budget/form-new-budget.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    NavPageComponent,
    NewBudgetPageComponent,
    EditBudgetPageComponent,
    BudgetsPageComponent,
    AboutPageComponent,
    BudgetPageComponent,
    FormBudgetComponent,
    FormNewBudgetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
