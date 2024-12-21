import { Component } from '@angular/core';
import { Inputs } from '../../../../shared/interface/input/inputs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { InputsComponent } from '../../../../shared/componets/busines/inputs/inputs.component';
import { callAPIService } from '../../../../shared/services/CALLAPI/callapi.service';

@Component({
  selector: 'app-resetpassword',
  standalone: true,
  imports: [InputsComponent],
  templateUrl: './resetpassword.component.html',
  styleUrl: './resetpassword.component.css',
})
export class ResetpasswordComponent {
  constructor(private _callAPIService: callAPIService) {}



  // inputs for rest password form
  Restpasswordinputs: Inputs[] = [
    { type: 'email', formcontrol: 'email', placeholder: 'enter yor email' },
    {
      type: 'password',
      formcontrol: 'newPassword',
      placeholder: 'enter yor password',
    },
  ];

  Restpasswordform: FormGroup = new FormGroup({
    email: new FormControl(null, [Validators.required]),
    newPassword: new FormControl(null, [Validators.required]),
  });

  Restpass(formvalue: { email: string; newPassword: string }) {
    this._callAPIService.Restpaswword(formvalue, this.Restpasswordform);
  }
}
