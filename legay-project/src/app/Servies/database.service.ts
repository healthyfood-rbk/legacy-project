import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { BehaviorSubject } from 'rxjs';

const baseUrl = 'http://localhost:3000'
@Injectable({
  providedIn: 'root'
})
export class DatabaseService {
  private messageSource = new BehaviorSubject<any>("default message")
  currentMessage = this.messageSource.asObservable();
  lifter : any
    constructor(private http: HttpClient) { 
    }
    changeMessage(message:any){
      this.messageSource.next(message)
    }
 fetch () : Observable<any>{
  return  this.http.get<any>("http://localhost:3000/api/admin")
 }
delete(id : any) :Observable<any> {
  return this.http.delete(`${baseUrl}/api/admin/${id}`)
}
}




