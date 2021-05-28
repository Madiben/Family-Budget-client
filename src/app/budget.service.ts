import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Budget } from './budget';

@Injectable({
  providedIn: 'root'
})
export class BudgetService {

  private budgets : Budget[] =[
    {
      id: 1,
      title: 'reprehenderit',
      amount: 1327.0,
      category: 'Medical/Healthcare',
      status: 'Income'
  },
  {
      id: 2,
      title: 'asperiores',
      amount: -16856.0,
      category: 'Retirement',
      status: 'Outcome'
  },
  {
      id: 3,
      title: 'sed',
      amount: 10563.0,
      category: 'Debt',
      status: 'Income'
  }
  ]
  constructor(private httpClient : HttpClient) { }

  private apiUrl = 'http://127.0.0.1:8000/api/budget';
  public getBudgets(): Promise<Budget[]> {
    return this.httpClient.get<Budget[]>(this.apiUrl).toPromise();
  }
  public getBudget(id: number):  Promise<Budget> {
    return this.httpClient.get<Budget>(this.apiUrl + '/' + id).toPromise();
  }
  public updateBudget(id:number, modifiedBudget:Budget):Promise<Budget> {
    return this.httpClient.patch<Budget>(this.apiUrl + '/' + id, modifiedBudget).toPromise();
  }
  public addBudget(newBudget:Budget):Promise<Budget> {
    return this.httpClient.post<Budget>(this.apiUrl + '/', newBudget).toPromise();

  }
  public deleteBudget(id: number){
    return this.httpClient.delete<void>(this.apiUrl + '/' + id).toPromise();
  }
}
