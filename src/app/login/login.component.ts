import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';
import { HttpService } from '../core/service/http.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { JWTService } from '../core/service/jwt.services';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  disabled = true;
  condition = false;
  errorCheckPassword = false;

  constructor(private router: Router, 
              private httpService: HttpService, 
              private _snackBar: MatSnackBar,
              private jwtService: JWTService) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [
    Validators.required,
    Validators.email
    
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])(?=.*[0-9])).{6,10}$')
  ]);
  
  checkPassword = new FormControl('', [
    Validators.required,
  ])

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
// example@list.ru  asQ1asd
  getErrorMessageRepeatPassword(){
    if (this.checkPassword.hasError('required')){
      return 'Password is not a valid format.';
    }
  }

  addUser(){
    if (!this.condition) {
      this.httpService.getUser(this.email.value).subscribe(res => {
        if(res.password === this.password.value) {
          this.jwtService.saveToken(res.token);
          localStorage.setItem('userName', res.display_name);
          this.router.navigateByUrl('/main');
        } else { //post
          this._snackBar.open('Invalid email or password','', {
            panelClass: 'error-email-password',
            duration: 2000,
          });
        }
      });
    } else {
      this.httpService.postUser(this.email.value, this.password.value).subscribe(res => {
        if (res.email) {
          this.jwtService.saveToken(res.token);
          localStorage.setItem('userName', res.display_name);
          this.router.navigateByUrl('/main');
        }
      })
    }

  }

  checkedEqualityPassword(){
    this.errorCheckPassword = this.checkPassword.value !== this.password.value;
  }
}