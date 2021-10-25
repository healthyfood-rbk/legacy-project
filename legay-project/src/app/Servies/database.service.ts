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
 public messageSource = new BehaviorSubject<any>("")
 public details = new BehaviorSubject<any>("")
  lifter : any
    constructor(private http: HttpClient) { 
    }
    emit(data : any){
      this.messageSource.next(data)
      console.log(this.messageSource);
      
    }
    save(data :any){
      this.details.next(data)
      console.log(this.details);
    }
    sub():Observable<any>{
      return this.details.asObservable();
    }
    on():Observable<any>{
      return this.messageSource.asObservable();
    }
 fetch () : Observable<any>{
  return  this.http.get<any>("http://localhost:3000/api/admin")
 }
delete(id: any) :Observable<any> {
  return this.http.delete(`${baseUrl}/api/admin/${id}`)
}
create(data:any): Observable<any> {
  return this.http.post("http://localhost:3000/api/admin", data);
}

update(id:any, data:any): Observable<any> {
  return this.http.put(`${baseUrl}/api/admin/${id}`, data);
}


}




