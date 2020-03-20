import { Component } from '@angular/core';
import { JWTService } from '../../core/service/jwt.services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent {

  item = 0;
  
  constructor(private jwtService: JWTService, private router: Router) { }

  getNameUser() {
    let userName = localStorage.getItem('userName');
    return userName;
  }

  logOut() {
    this.jwtService.deleteToken();
    localStorage.removeItem('userName');
    this.router.navigate(['/login']);
  }

  clickOnElement(value) {
    this.item = value;
  }
}
