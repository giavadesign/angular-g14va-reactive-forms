import { Component, OnInit, VERSION } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  myForm: FormGroup;

  ngOnInit() {
    this.myForm = new FormGroup({
      nome: new FormControl('Luca', Validators.required),
      nickname: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
      account: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [Validators.required]),
      }),
    });
  }

  onSubmit() {
    console.log(this.myForm);
  }
}

export interface User {
  name: string;
  nickename: string;
  account: {
    email: string;
    emailConfirm: string;
    password: string;
  };
}
