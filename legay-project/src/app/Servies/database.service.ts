import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  lifter : any
    path : string = 'http://localhost:3000/'
    constructor(private http: HttpClient) { 
    }
    
 fetch () : Observable<any>{
  return  this.http.get<any>("./api/admin")
 }

}
