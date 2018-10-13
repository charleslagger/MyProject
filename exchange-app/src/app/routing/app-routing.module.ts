import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AccountComponent } from '../account/account.component';
import { MessageComponent } from '../message/message.component';
import { DaoComponent } from '../dao/dao.component';
import { CartComponent } from '../cart/cart.component';
import { SellComponent } from '../sell/sell.component';
import { BalanceComponent } from '../balance/balance.component';
import { HistoryComponent } from '../history/history.component';

const routes: Routes = [
  { path: '?loggedIn=true', redirectTo: '', pathMatch: 'full' },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'account', component: AccountComponent },
  { path: 'history', component: HistoryComponent },
  { path: 'dao', component: DaoComponent },
  { path: 'cart', component: CartComponent },
  { path: 'sell', component: SellComponent },
  { path: 'balance', component: BalanceComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [ RouterModule.forRoot(routes) ]
})
export class AppRoutingModule {}
