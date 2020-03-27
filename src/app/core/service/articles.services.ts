import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/internal/operators';
import { _throw } from 'rxjs/observable/throw';
import { Observable } from 'rxjs/Observable';

@Injectable()

export class ArticleService {
    private formatErrors(err) {
        return _throw(err.error);
    }
    
    constructor(private http: HttpClient) { }

    public getArticles(): Observable<any> {
        return this.http.get('http://localhost:8080/articles').pipe(catchError(this.formatErrors));
    }

    public postArticles(body: object): Observable<any> {
        return this.http.post('http://localhost:8080/articles', JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }

    public deleteArticle(id: string): Observable<any> {
        return this.http.delete(`http://localhost:8080/articles/${id}`).pipe(catchError(this.formatErrors));
    }

    public putArticle(id: string, body: object): Observable<any> {
        return this.http.put(`http://localhost:8080/articles/${id}`, JSON.stringify(body)).pipe(catchError(this.formatErrors));
    }
}