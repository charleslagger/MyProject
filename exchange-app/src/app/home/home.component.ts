import { Component, OnInit, OnChanges, ChangeDetectorRef } from '@angular/core';
import { HomeService } from './home.service';
import { AccountService } from '../account/account.service';
import { Subject } from 'rxjs';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private homeService: HomeService,
              private accountService: AccountService) { }
  private availableProducts;
  private buyInProgress;
  private boughtProduct;

  ngOnInit() {
    this.buyInProgress = false;
    this.availableProducts = this.getAvailableProducts();
  }

  getAvailableProducts() {
    return this.accountService.getCurrentUserId()
      .then((currentUserId) => {
        return this.homeService.getAvailableProducts(currentUserId);
      });
  }

  addToCart(productId) {
    this.buyInProgress = true;
    this.boughtProduct = productId;
    return this.accountService.getCurrentUserId()
      .then((result) => {
        return this.homeService.addToCart(productId, (result.split('#'))[1])
          .then(() => {
            return this.getAvailableProducts();
          })
          .then(() => {
            this.boughtProduct = null;
            this.buyInProgress = false;
          });
    });
  }
}
