import { Component, OnInit, ViewChild } from '@angular/core';
import { BalanceService } from './balance.service';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-balance',
  templateUrl: './balance.component.html',
  styleUrls: ['./balance.component.css']
})
export class BalanceComponent implements OnInit {

  constructor(private balanceService: BalanceService,
      private accountService: AccountService) { }

  @ViewChild('balanceForm') balanceForm;
  private amountMoney = {
    accountBalance: ''
  };

  ngOnInit() {
  }

  increaseBalance() {
    return this.accountService.getCurrentUserId().then((currentUserId) => {
      return this.balanceService.increaseBalance(this.amountMoney.accountBalance, currentUserId);
    });
  }


}
