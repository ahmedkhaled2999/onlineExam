import { Component } from '@angular/core';
import { InputsComponent } from '../../../../shared/componets/busines/inputs/inputs.component';
import { Inputs } from '../../../../shared/interface/input/inputs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { callAPIService } from '../../../../shared/services/CALLAPI/callapi.service';

@Component({
  selector: 'app-verifycode',
  standalone: true,
  imports: [InputsComponent],
  templateUrl: './verifycode.component.html',
  styleUrl: './verifycode.component.css',
})
export class VerifycodeComponent {
  constructor(private _callAPIService: callAPIService) {}

  inputs: Inputs[] = [
    {
      type: 'number',
      formcontrol: 'resetCode',
      placeholder: 'enter yor valid number',
    },
  ];

  ResetCode: FormGroup = new FormGroup({
    resetCode: new FormControl(null, [Validators.required]),
  });

  CALLAPI(formvalu: { resetCode: string }) {
    this._callAPIService.VerifyResetCode(formvalu, this.ResetCode);
  }
}
