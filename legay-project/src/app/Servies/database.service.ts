import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { CardComponent } from '../admin/card/card.component';
const baseUrl = 'http://localhost:3000'

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  


    

    constructor(private http: HttpClient) { 
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
