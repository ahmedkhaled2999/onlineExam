import { callAPIService } from '../../../../shared/services/CALLAPI/callapi.service';
import { Component } from '@angular/core';

import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { InputsComponent } from '../../../../shared/componets/busines/inputs/inputs.component';
import { Inputs } from '../../../../shared/interface/input/inputs';
import { Forgetpassform } from '../../../../shared/interface/auth/forgetpass';

@Component({
  selector: 'app-forgetpassword',
  standalone: true,
  imports: [ReactiveFormsModule, InputsComponent],
  templateUrl: './forgetpassword.component.html',
  styleUrl: './forgetpassword.component.css',
})
export class ForgetpasswordComponent {
  constructor(private _callAPIService: callAPIService) {}

  inputay7ga: Inputs[] = [
    { type: 'email', formcontrol: 'email', placeholder: 'enter yor email' },
  ];

  forgetpass: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
  });

  ForgetPass(formvalu:Forgetpassform) {
    console.log(this.forgetpass.value);
    this._callAPIService.forgetpassword(formvalu, this.forgetpass);
  }
}
