import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { JWTService } from './jwt.services';

@Injectable({
  providedIn: 'root'
})

export class AuthService implements CanActivate {

  constructor( private jwtService: JWTService, private router: Router) { }

  canActivate() {
    const currentUser = this.jwtService.getToken();
    if (currentUser) {
      return true;
    }

    this.router.navigate(['/login']);
    return false;
  }
}
