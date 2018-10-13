import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private httpClient: HttpClient) { }

  getListProductInCart(currentUserId) {
    const httpParams = new HttpParams()
      .set('ownerId', currentUserId)
      .set('productStatus', 'SELLING');
    return this.httpClient.get('http://localhost:3000/api/queries/listProductsInMyCart',
      { params: httpParams, withCredentials: true }).toPromise();
  }

  buyProduct(productId, oldOwnerId, currentUserId, nameOldOwner, productName, nameNewOwner, productImage) {
    // console.log('productId: ' + productId);
    // console.log('oldOwnerId: ' + oldOwnerId);
    // console.log('currentUserId: ' + currentUserId);
    // console.log('nameNewUser: ' + nameNewOwner);
    // console.log('productName: ' + productName);
    // console.log('nameOldOwner: ' + nameOldOwner);
    // console.log('productImage: ' + productImage);
    const transactionDetails = {
      $class: 'uet.khoenguyen.exchange.Trade',
      oldOwner: oldOwnerId,
      oldOwnerName: nameOldOwner,
      product: productId,
      productName: productName,
      newOwner: currentUserId,
      newOwnerName: nameNewOwner,
      image: productImage
    };

    return this.httpClient.post('http://localhost:3001/api/Trade',
      transactionDetails, { withCredentials: true }).toPromise();
  }

  getProductNameById(productId) {
    return this.httpClient.get('http://localhost:3000/api/Product/' + productId, { withCredentials: true }).toPromise()
      .then((product) => {
        // console.log('=>product name: ' + ((((JSON.stringify(product)).split(':\"'))[3]).split('\"'))[0]);
        return ((((JSON.stringify(product)).split(':\"'))[3]).split('\"'))[0];
      });
  }

  getProductImageById(productId) {
    return this.httpClient.get('http://localhost:3000/api/Product/' + productId, { withCredentials: true }).toPromise()
      .then((product) => {
        // console.log('=>product image: ' + ((((JSON.stringify(product)).split(':\"'))[5]).split('\"'))[0]);
        return ((((JSON.stringify(product)).split(':\"'))[5]).split('\"'))[0];
      });
  }
}
