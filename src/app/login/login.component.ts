import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	public email: string;
  	public password: string;
  	public message : string;
  	public error : boolean;
  constructor(public router: Router) { }

  ngOnInit() {
  }

  public chkLogin(event) {
    if(this.email == "test@gmail.com" && this.password == "test") {
    	this.error = false;
    	console.log("login successful");
    	this.router.navigate(['/workplace']);
    } else {
    	this.error = true;
    	this.message = "Invalid username and password";
    }
  }
}
