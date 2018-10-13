import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ComposerRestService {

  constructor(private httpClient: HttpClient) { }

  checkWallet() {
    return this.httpClient.get('http://localhost:3000/api/wallet', {withCredentials: true}).toPromise();
  }

  signUp(data, imageEncode) {
    const addressData = {
      $class: 'uet.khoenguyen.exchange.Address',
      city : data.city,
      country: data.country,
      street: data.street
    };

    const collector = {
      $class: 'uet.khoenguyen.exchange.Collector',
      email: data.email,
      accountBalance: 0,
      firstName: data.firstName,
      lastName: data.surname,
      phoneNumber: data.phoneNum,
      address : addressData,
      coverPhoto: imageEncode
    };

    return this.httpClient.post('http://localhost:3001/api/Collector',
        collector, {responseType: 'blob'}).toPromise()
      .then(() => {
        const identity = {
          participant: 'uet.khoenguyen.exchange.Collector#' + data.email,
          userID: data.email,
          options: {}
        };

        return this.httpClient.post('http://localhost:3001/api/system/identities/issue', identity, {responseType: 'blob'}).toPromise();
      })
      .then((cardData) => {
      console.log('CARD-DATA', cardData);
        const file = new File([cardData], 'myCard.card', {type: 'application/octet-stream', lastModified: Date.now()});

        const formData = new FormData();
        formData.append('card', file);

        const headers = new HttpHeaders();
        headers.set('Content-Type', 'multipart/form-data');
        return this.httpClient.post('http://localhost:3000/api/wallet/import', formData, {
          withCredentials: true,
          headers
        }).toPromise();
      });
  }
}
