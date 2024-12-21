import { Injectable } from '@angular/core';
import { AdabtForget } from '../../interface/adaptForget/adabt-forget';
import { Forget, ForgetRes } from '../../interface/forgetpassword/forget';

@Injectable({
  providedIn: 'root',
})
export class AdaptForgetService implements AdabtForget {
  constructor() {}

  adaptForget(data: Forget):ForgetRes {
    return {
      message: data.message,
    };
  }
}
