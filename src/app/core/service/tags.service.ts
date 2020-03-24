import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class TagService {
    private formatErrors(err) {
        return _throw(err.error);
    }
    constructor(private http: HttpClient) { }
    public getTag(): Observable<any> {
        return this.http.get('http://localhost:8080/tags').pipe(catchError(this.formatErrors));
    }

    public postTag(tags: any): Observable<any> {
        const body = {
            tags: tags,
        }
        return this.http.post('http://localhost:8080/tags', JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
}