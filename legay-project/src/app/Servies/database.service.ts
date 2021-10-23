import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { BehaviorSubject } from 'rxjs';

import { CardComponent } from '../admin/card/card.component';
const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  private messageSource = new BehaviorSubject<any>("default message")
  currentMessage = this.messageSource.asObservable();
  lifter : any
    path : string = 'http://localhost:3000/'


  


    


    constructor(private http: HttpClient) { 
    }
    changeMessage(message:any){
      this.messageSource.next(message)
    }
 fetch () : Observable<any>{
  return  this.http.get(baseUrl+"/api/admin")
 }
//  update(id, data): Observable<any> {
//   return this.http.put(`${baseUrl}/${id}`, data);
// }
delete(id:any): Observable<any> {
    return this.http.delete(`${baseUrl}/api/admin/${id}`);
  }


}




