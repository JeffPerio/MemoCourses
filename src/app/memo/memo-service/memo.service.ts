import { Injectable } from '@angular/core';
import { InterfaceMemo } from '../memo-liste/interfaceMemo';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, tap, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MemoService {

  //Url du webserveur, ici est le fichier JSON portant les data pour ne pas avoir besoin de setup le serveur dans le tuto
  private memoUrl = 'api/memos/memos.json';

  constructor(private http: HttpClient) { }

  getMemos():Observable<InterfaceMemo[]> {
    return this.http.get<InterfaceMemo[]>(this.memoUrl).pipe(
      tap(data => console.log('All : ', JSON.stringify(data))), 
      catchError(this.handleError)
    );
  }

  private handleError(err: HttpErrorResponse) {
    // in a real world app, we may send the server to some remote logging infrastructure
    // instead of just logging it to the console
    let errorMessage = '';
    if (err.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = `An error occurred: ${err.error.message}`;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
    }
    console.error(errorMessage);
    return throwError(() => errorMessage);
  }
}
