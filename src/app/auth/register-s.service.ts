import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterSService {

  constructor(private http:HttpClient) { }

  private baseUrl = 'http://localhost:8083/users/';  
  
  register(User: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'register',User);  
  } 
}
