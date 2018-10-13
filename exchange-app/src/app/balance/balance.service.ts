import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BalanceService {

  constructor(private httpClient: HttpClient) { }

  increaseBalance(amountMoney, currentUser) {
    const transaction = {
      $class: 'uet.khoenguyen.exchange.IncreaseBalance',
      amountMoney: amountMoney,
      owner: currentUser
    };
    return this.httpClient.post('http://localhost:3001/api/IncreaseBalance',
      transaction, {withCredentials: true}).toPromise();
  }
}
