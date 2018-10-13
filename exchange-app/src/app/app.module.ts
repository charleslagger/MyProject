import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './routing/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AccountComponent } from './account/account.component';
import { MessageComponent } from './message/message.component';
import { CartComponent } from './cart/cart.component';
import { DaoComponent } from './dao/dao.component';
import { LoginComponent } from './login/login.component';
import { SellComponent } from './sell/sell.component';
import { BalanceComponent } from './balance/balance.component';
import { HomeService } from './home/home.service';
import { AccountService } from './account/account.service';
import { ComposerRestService } from './service/composer-rest-service.service';
import { SellService } from './sell/sell.service';
import { HistoryComponent } from './history/history.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatCardModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatFormFieldModule,
  MatInputModule,
  MatGridListModule,
  MatDialogModule,
  MatNativeDateModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AccountComponent,
    MessageComponent,
    CartComponent,
    DaoComponent,
    LoginComponent,
    SellComponent,
    BalanceComponent,
    HistoryComponent
  ],
  entryComponents: [LoginComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    FlexLayoutModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatDialogModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    MatSelectModule
  ],
  providers: [
    HomeService,
    AccountService,
    ComposerRestService,
    SellService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
