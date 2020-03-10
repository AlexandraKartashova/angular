import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';
import { MatSnackBar } from '@angular/material/snack-bar';


@Injectable()
export class HttpService{

    private formatErrors(err) {
        return _throw(err.error);
    }


    constructor(private http: HttpClient, private _snackBar: MatSnackBar) {
    }

    public getData(): Observable<any> {
        return this.http.get('http://localhost:8080/users').pipe(catchError(this.formatErrors));
    }

    public getUser(email: string): Observable<any> {
        return this.http.get(`http://localhost:8080/users/${email}`).pipe(catchError(this.formatErrors));
    }
}
