import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private httpClient: HttpClient) { }

  getAllTransactions() {
    return this.httpClient.get('http://localhost:3000/api/Trade', { withCredentials: true }).toPromise()
      .then((result) => {
        console.log('Transactions: ' + JSON.stringify(result));
        return result;
      });
  }

  getProductByProductId(productId) {
    return this.httpClient.get('http://localhost:3000/api/Product/' + productId, { withCredentials: true }).toPromise();
  }

  getCollectorById(userId) {
    return this.httpClient.get('http://localhost:3001/api/Collector/' + userId, { withCredentials: true }).toPromise();
  }
}
