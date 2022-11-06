import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RouterService {

  constructor(private rout :Router) { }

  
  goToHome(){
    this.rout.navigate(['home']);
  }
  gotoDashboard(){
    this.rout.navigate(['dashboard']);
  }
  gotoLogin(){
    this.rout.navigate(['login']);
  }
}
