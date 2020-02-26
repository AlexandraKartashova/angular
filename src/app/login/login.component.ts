import { Component, OnInit } from '@angular/core';

export class User{
  email: string;
  password: string; 
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  hide = true;
  disabled = true;
  constructor() { }

  ngOnInit(): void {
  }

  onSave(){
    console.log("Button clicked")
  }

  onEnterPress(){
    console.log("Enter pressed")
  }
  
  user: User = new User();
  addUser(){
      console.log(this.user);
  }

}
