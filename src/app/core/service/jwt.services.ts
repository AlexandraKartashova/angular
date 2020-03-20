import { Injectable } from '@angular/core';
import { _throw } from 'rxjs/observable/throw';

@Injectable({
    providedIn: 'root'
})
export class JWTService {

    constructor() { }

    public getToken() {
        return localStorage.getItem('token')
    }

    public saveToken(token: string) {
        localStorage.setItem('token', token);
    }

    public deleteToken() {
        localStorage.removeItem('token');
    }
}