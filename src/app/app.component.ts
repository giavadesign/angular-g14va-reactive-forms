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
      name: new FormControl('Luca', Validators.required),
      nickname: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        Validators.maxLength(12),
      ]),
      account: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          /**
           * custom validator con regex pattern
           * minimo una lettera maiuscola
           * almeno un numero
           * minimo 8 max 12 caratteri
           */
          Validators.pattern(/^(?=.*[A-Z])(?=.*\d).{8,12}$/),
        ]),
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
