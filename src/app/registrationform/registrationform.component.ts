import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrationform',
  templateUrl: './registrationform.component.html',
  styleUrls: ['./registrationform.component.css']
})
export class RegistrationformComponent {
  registrationForm: FormGroup = new FormGroup({
    Firstname: new FormControl(""),
    Middlename: new FormControl(""),
    Lastname: new FormControl(""),
    City: new FormControl(""),
    State: new FormControl(""),
    Zip: new FormControl(""),
    Age: new FormControl(""),
    Mobilenumber: new FormControl(""),
    Email: new FormControl(""),
    Events: new FormControl("")
  });

  errMsg = "";

  constructor(private _router: Router) {}

  submitForm() {
    if (
      this.registrationForm.value.Firstname === "" ||
      this.registrationForm.value.Lastname === "" ||
      this.registrationForm.value.City === "" ||
      this.registrationForm.value.State === "" ||
      this.registrationForm.value.Zip === "" ||
      this.registrationForm.value.Age === "" ||
      this.registrationForm.value.Mobilenumber === "" ||
      this.registrationForm.value.Email === "" ||
      this.registrationForm.value.Events === ""
    ) {
      this.errMsg = "Fill all the fields";
    } else {
      this._router.navigate(["/"]) 
    }
  }
}
