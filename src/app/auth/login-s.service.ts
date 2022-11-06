import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';

@Injectable({
  providedIn: 'root'
})
export class LoginSService {

  
  private baseUrl = 'http://localhost:8083/users/';
  isLoggedIn : boolean = false;



  constructor(private http: HttpClient) {
    
   }

login(users:User) {

  return this.http.post(`${this.baseUrl}`+'login',users,{responseType:"text"});
}
setLoggedInUserToken(val: string){
  localStorage.setItem("userKey",val)
}
getLoggedInUserToken(){
  return localStorage.getItem("userKey");
}
getimage(email:String): Observable<User> {
  return this.http.get<User>(`${this.baseUrl}/getimage/${email}`);
}
}


