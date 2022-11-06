import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable, Query } from '@angular/core';
import { Observable } from 'rxjs';
import { Songarr } from '../music-list';
// import 'rxjs/add/operator/map';
@Injectable({
  providedIn: 'root'
})
export class MusicService {
  springEndpoint!: string;

 
  constructor(private _http:HttpClient ) { }

clientId='ODE1MDk1MGUtNzQ2MC00NzljLWE5ZjQtMzliMjEwZmJhNjY0';
musicApiUrl='https://api.napster.com/v2.2/tracks/top?limit=100&apikey='+this.clientId;

searchUrl='https://api.napster.com/v2.2/search?query='; 


 topMusic():Observable<any>{
  // const headers= new HttpHeaders()
  //   .set('apikey', 'ODE1MDk1MGUtNzQ2MC00NzljLWE5ZjQtMzliMjEwZmJhNjY0')
   return this._http.get<Songarr>(this.musicApiUrl)
   
 }


//  search(query : string){
// let url =this.searchUrl+query+'&per_type_limit=5&apikey='+this.clientId;
// console.log(url);
// return this._http.get(url)
//  }



}
