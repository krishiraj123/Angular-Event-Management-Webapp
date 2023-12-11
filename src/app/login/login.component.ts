import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ApiLoginService } from '../api-login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  type_pass = "password";
  checkbox = false;
  errMsg = "";

  constructor(private _router: Router, private _login: ApiLoginService) {}

  loginForm = new FormGroup({
    username: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  login() {
    if (this.loginForm.invalid) {
      this.errMsg = "Fill in all fields";
      return;
    }
    
    // Check if the username is "admin" and the password is "ad123"
    if (this.loginForm.value.username === "admin" && this.loginForm.value.password === "ad123") {
      localStorage.setItem('user', JSON.stringify(this.loginForm.value));
      this._router.navigate(['/adminpanel']);
    } else {
      this.errMsg = "Invalid username/password";
    }
  }
  
  handleCheckBox() {
    this.type_pass = this.checkbox ? "password" : "text";
    this.checkbox = !this.checkbox;
  }
}
