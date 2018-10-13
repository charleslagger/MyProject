import { Component, OnInit } from '@angular/core';
import { AccountService } from './account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {

  constructor(private accountService: AccountService) { }

  private currentUser;
  private listProductBought;
  private listProductSell;

  ngOnInit() {
    this.currentUser = this.getCurrentUser();
    this.listProductBought = this.getListProductBought();
      // .then( (result) => {
      //   console.log('==>' + JSON.stringify(result));
      // });
    this.listProductSell = this.getListProductSell();
  }

  getListProductBought() {
    return this.accountService.getCurrentUserId()
      .then((currentUserId) => {
        return this.accountService.getMyProductBought(currentUserId);
      });
  }

  getListProductSell() {
    return this.accountService.getCurrentUserId()
      .then((currentUserId) => {
        return this.accountService.getMyProductSell(currentUserId);
      });
  }

  getCurrentUser() {
    return this.accountService.getCurrentUser();
  }

}
