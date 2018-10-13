import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private httpClient: HttpClient) { }

  getAvailableProducts(currentUserId) {
    console.log('==>>currentUserId: ' + currentUserId);
    const httpParams = new HttpParams()
          .set('currentUserId', currentUserId);
    return this.httpClient.get('http://localhost:3000/api/queries/availableProducts',
      {params: httpParams, withCredentials: true}).toPromise();
  }

  addToCart(productId, buyerId) {
    const transactionDetails = {
      $class: 'uet.khoenguyen.exchange.MoveProToCart',
      product: productId,
      newOwnerTemp: buyerId
    };
    return this.httpClient.post('http://localhost:3001/api/MoveProToCart',
      transactionDetails, {withCredentials: true}).toPromise();
  }

  // buyProduct(productId, oldOwner, currentUser) {
  //   console.log('Buy product');
  //   const transactionDetails = {
  //     $class: 'uet.khoenguyen.exchange.Trade',
  //     oldOwner: oldOwner,
  //     product: productId,
  //     newOwner: (currentUser.split('#'))[1]
  //     // newOwner: currentUser
  //   };

  //   return this.httpClient.post('http://localhost:3000/api/Trade',
  //     transactionDetails, {withCredentials: true}).toPromise();
  // }
}
