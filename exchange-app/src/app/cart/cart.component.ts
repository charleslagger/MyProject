import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { AccountService } from '../account/account.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  private listProducts;
  constructor(private cartService: CartService,
    private accountService: AccountService) { }

  ngOnInit() {
    this.listProducts = this.getListProductInCart();
  }

  getListProductInCart() {
    return this.accountService.getCurrentUserId()
      .then((result) => {
        return this.cartService.getListProductInCart((result.split('#'))[1]);
      });
  }

  buyProduct(productId, oldOwnerId) {
    return this.accountService.getUserNameById((oldOwnerId.split('#'))[1]).then((oldOwnerName) => {
      return this.cartService.getProductNameById(productId).then((productName) => {
        return this.cartService.getProductImageById(productId).then((productImage) => {
          return this.accountService.getCurrentUserId()
            .then((newUserId) => {
              return this.accountService.getUserNameById((newUserId.split('#'))[1])
                .then((nameNewOwner) => {
                  return this.cartService.buyProduct(productId, (oldOwnerId.split('#'))[1], (newUserId.split('#'))[1],
                    oldOwnerName, productName, nameNewOwner, productImage);
                });
            });
        });
      });
    });
  }

}
