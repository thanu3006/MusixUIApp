import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { LoginSService } from 'src/app/auth/login-s.service';
import { RouterService } from 'src/app/auth/router.service';
import { User } from 'src/app/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
submitted=false;
loading: any;
  u: User = new User();
  loginForm:FormGroup;
  email:FormControl;
  password:FormControl;
  constructor(private service:LoginSService,private rout:RouterService) { }

  ngOnInit() {
    console.log(this.service.isLoggedIn);
    if(localStorage.getItem("authtoken")){
      this.rout.gotoDashboard();
    }
    this.email=new FormControl(),
    this.password=new FormControl(),
    this.loginForm=new FormGroup({
      email:this.email,
      password:this.password
    });
  }



  get f() {
    return this.loginForm.controls;
  }

  submit() {
    console.log(this.loginForm.value);
    this.u.email=this.email.value;
    this.u.password=this.password.value;

    this.service.login(this.loginForm.value).subscribe(data => {
      console.log(data);
      console.log("diusdniu");
      //var variabe = JSON.stringify(data);
      var jsondata = JSON.parse(data);
      console.log("variable");
      console.log(jsondata["token"]);
      localStorage.setItem("authtoken",jsondata["token"]);
      this.service.isLoggedIn = true;
      this.service.setLoggedInUserToken(this.loginForm.value.email);
      if(localStorage.getItem("authtoken"))
        this.rout.gotoDashboard();
    },
    error =>{
    console.log("Wrong Credentials!");}
    );
  }

}
