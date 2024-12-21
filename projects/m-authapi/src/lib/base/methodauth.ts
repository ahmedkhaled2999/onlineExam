import { Observable } from 'rxjs';
import { logForm } from '../interface/form/formgroup';
import { LoginRes } from '../interface/loginres';
import { ErrorRes } from '../interface/errorRes/error-res';
import { ForgetForm, ForgetRes } from '../interface/forgetpassword/forget';
import { SingupForm } from '../interface/singup-form';
import { ResetCodeapi } from '../interface/resetCodeapi/reset-codeapi';

export abstract class methodauth {
  abstract login(data: logForm): Observable<LoginRes | ErrorRes>;
  abstract regester(data: SingupForm): Observable<LoginRes | ErrorRes>;
  abstract forgetpass(data: ForgetForm): Observable<ForgetRes | ErrorRes>;
  abstract resetCodeapi(
    data: ResetCodeapi
  ): Observable<{ status: string } | ErrorRes>;
  abstract ResetPassworde(data: {
    email: string;
    newPassword: string;
  }): Observable<{ message: string; token: string } | ErrorRes>;

  abstract userInfo(data: any): Observable<any>;
}
