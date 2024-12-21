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

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [ReactiveFormsModule, InputsComponent],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css',
})
export class SignupComponent {
  constructor(private _callAPIService: callAPIService) {}
  // inupts form to send to inputs component
  singupinputs: Inputs[] = [
    {
      type: 'username',
      formcontrol: 'username',
      placeholder: 'enter yor username',
    },
    {
      type: 'firstName',
      formcontrol: 'firstName',
      placeholder: 'enter yor firstName',
    },
    {
      type: 'lastName',
      formcontrol: 'lastName',
      placeholder: 'enter yor lastName',
    },
    {
      type: 'email',
      formcontrol: 'email',
      placeholder: 'enter yor email',
    },
    {
      type: 'password',
      formcontrol: 'password',
      placeholder: 'enter yor password',
    },
    {
      type: 'password',
      formcontrol: 'rePassword',
      placeholder: 'enter yor rePassword',
    },
    {
      type: 'phone',
      formcontrol: 'phone',
      placeholder: 'enter yor phone',
    },
  ];

  // this becouse when change pages errormassege = '' 
  ngOnInit(): void {
    this._callAPIService.errormassege.set('');
  }
  singUp: FormGroup = new FormGroup(
    {
      username: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(15),
      ]),
      firstName: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      lastName: new FormControl(null, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(10),
      ]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.pattern(
          /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
        ),
      ]),
      rePassword: new FormControl(null, [Validators.required]),
      phone: new FormControl(null, [
        Validators.required,
        Validators.pattern(/^01[1250][0-9]{8}$/),
      ]),
    },
    this.confirmPass
  );
// to cheack password and repasword are same
  confirmPass(repss: any) {
    if (repss.get('password').value === repss.get('rePassword').value) {
      return null;
    } else {
      return { mismatch: true };
    }
  }

  singup(formvalue: any) {
    this._callAPIService.singup(formvalue, this.singUp);
  }
}
