import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, Validators } from '@angular/forms';

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

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  email = new FormControl('', [
    Validators.required,
    Validators.pattern('^[a-zA-Z_]+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$')
  ]);

  password = new FormControl('', [
    Validators.required,
    Validators.pattern('^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=(.*[a-zA-Z])).{6,10}$')
  ]);
  
  getErrorMessageEmail(){
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }
    if(this.email.hasError('pattern')) {
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
      // if((this.userEmail === this.email) && (this.userPassword === this.password)) {
      //   //const redirectUrl = '/main';
        // this.router.navigateByUrl('/main');
      // } 
      console.log(this.email.value);
      console.log(this.password.value);
  }
  
}