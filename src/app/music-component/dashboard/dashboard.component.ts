import { Component, OnInit } from '@angular/core';
import { LoginSService } from 'src/app/auth/login-s.service';
import { RouterService } from 'src/app/auth/router.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  loggedUserName: string;
  imgURL: string;

  constructor(private loginService: LoginSService,private rout: RouterService) {}

  ngOnInit() {
    if(!localStorage.getItem("authtoken")){
      this.rout.gotoLogin();
    }
    this.loggedUserName= this.loginService.getLoggedInUserToken();
    this.loginService.getimage(this.loggedUserName).subscribe(data => {
      console.log(data);
      this.imgURL = data['image'];
      console.log(this.imgURL);
    },
    error =>{
      console.log(error);
    })
  }
  logout() {
    localStorage.removeItem("userKey");
    localStorage.removeItem("authtoken");

  }

}
