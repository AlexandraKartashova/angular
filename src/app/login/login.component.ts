import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../core/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  disabled = true;

  // email ;
  // password ; 

  // userEmail = 'email@list.ru';
  // userPassword = 'aaAA11';

  constructor(private router: Router, 
              private httpService: HttpService, 
              private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [
    Validators.required,
    Validators.email
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])).{6,10}$')
  ]);
  
  getErrorMessageEmail(){
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.email.hasError('email')) {
      return 'You must enter exampl@gmail.com';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  getErrorMessagePassword(){
    if (this.password.hasError('required')){
      return 'Password is not a valid format.';
    }
    if (this.password.hasError('pattern')){
      return 'Password is not a valid format.Use symbol: a-z, A-Z, 0-9.';
    }

    return this.password.hasError('password') ? 'Not a valid password' : '';
  }

  addUser(){

      this.httpService.getUser(this.email.value).subscribe(res => {
        if(res.password === this.password.value) {
          this.router.navigateByUrl('/main');
        } else {
          this._snackBar.open('Invalid email or password','', {
            panelClass: 'error-email-password',
            duration: 2000,
          });
      }
      });

  }
  
}