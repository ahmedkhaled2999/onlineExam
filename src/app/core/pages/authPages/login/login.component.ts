import { Component, effect, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { RouterLink } from '@angular/router';
import { Inputs } from '../../../../shared/interface/input/inputs';
import { InputsComponent } from '../../../../shared/componets/busines/inputs/inputs.component';
import { callAPIService } from '../../../../shared/services/CALLAPI/callapi.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, InputsComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css',
})
export class LoginComponent implements OnInit {
  logininputs: Inputs[] = [
    { type: 'email', formcontrol: 'email', placeholder: 'enter yor email' },
    {
      type: 'password',
      formcontrol: 'password',
      placeholder: 'enter yor password',
    },
  ];

  constructor(private _callAPIService: callAPIService) {}
  ngOnInit(): void {
    this._callAPIService.errormassege.set('');
  }

  loginform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    password: new FormControl(null, [Validators.required]),
  });

  login(formvalue: any) {
    this._callAPIService.singin(formvalue, this.loginform);
  }
}
