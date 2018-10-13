import { Component, OnInit, ViewChild } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { Router, ActivatedRoute } from '@angular/router';
import { ComposerRestService } from './service/composer-rest-service.service';
import { HomeService } from './home/home.service';
import { AccountService } from './account/account.service';
import { LoginComponent } from './login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'exchange-app';
  private authenticated = false;
  private loggedIn = false;
  private currentUser;
  private imageEncode;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private restService: ComposerRestService,
    private homeService: HomeService,
    private accountService: AccountService,
    public dialog: MatDialog) {
  }

  private signUpInProgress = false;
  @ViewChild('signupForm') signupForm;
  private signUp = {
    email: '',
    firstName: '',
    surname: '',
    phoneNum: '',
    country: '',
    city: '',
    street: ''
  };

  ngOnInit() {
    this.route
      .queryParams
      .subscribe((queryParams) => {
        const loggedIn = queryParams['loggedIn'];
        if (loggedIn) {
          console.log('Already login: ' + loggedIn);
          this.authenticated = true;
          return this.router.navigate(['/'])
            .then(() => {
              return this.checkWallet();
            });
        }
      });
  }

  openLoginPopup() {
    const dialogRef = this.dialog.open(LoginComponent);
  }

  changeListener($event): void {
    this.readFileContent($event.target);
  }

  // return file to base 64 encode string
  readFileContent(inputValue: any): void {
    const file: File = inputValue.files[0];
    const myReader: FileReader = new FileReader();
    myReader.onloadend = (e) => {
      this.imageEncode = myReader.result;
    };

    myReader.readAsDataURL(file);
  }

  checkWallet() {
    return this.restService.checkWallet()
      .then((results) => {
        console.log('Result of check wallet: ' + JSON.stringify(results));
        if (results['length'] > 0) {
          this.loggedIn = true;
          return this.getCurrentUserId()
            .then((currentUserId) => {
              return this.homeService.getAvailableProducts(currentUserId);
            });
        }
      });
  }

  onSignUp() {
    this.signUpInProgress = true;
    return this.restService.signUp(this.signUp, this.imageEncode)
      .then(() => {
        return this.getCurrentUser();
      })
      .then(() => {
        this.loggedIn = true;
        this.signUpInProgress = true;
        console.log('Sign up done');
      });
  }

  getCurrentUser() {
    return this.accountService.getCurrentUser()
      .then((currentUser) => {
        this.currentUser = currentUser;
      });
  }

  getCurrentUserId() {
    return this.accountService.getCurrentUserId()
      .then((currentUser) => {
        this.currentUser = currentUser;
      });
  }

}
