import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { methodauth } from './base/methodauth';
import { catchError, map, Observable, of, throwError } from 'rxjs';
import { Authendpoint } from './enams/m-authapiendpoint';
import { AdaptService } from './adapt/adapt.service';
import { Errorres } from './interface/error/error';
import { ErrorService } from './adapt/adapterror/error.service';
import { SingupForm } from './interface/singup-form';
import { logForm } from './interface/form/formgroup';
import { LoginRes } from './interface/loginres';
import { ErrorRes } from './interface/errorRes/error-res';
import { ForgetForm, ForgetRes } from './interface/forgetpassword/forget';
import { AdaptForgetService } from './adapt/adaptforget/adapt-forget.service';
import { ResetCodeapi } from './interface/resetCodeapi/reset-codeapi';
import { UserInfoService } from './adapt/adaptuserinfo/user-info.service';
import { AdaptuserInfoRes } from './adapt/adaptuserinfo/adapt.userinfores/adaptuserinfores';

@Injectable({
  providedIn: 'root',
})
export class MAuthapiService implements methodauth {
  constructor(
    private _httpClient: HttpClient,
    private _adaptForgetService: AdaptForgetService,
    private _adaptSeRVICE: AdaptService,
    private _adapterror: ErrorService,
    private _userInfoService: UserInfoService
  ) {}
  login(data: logForm): Observable<LoginRes | ErrorRes> {
    return this._httpClient.post(Authendpoint.LOGIN, data).pipe(
      map((response: any) => this._adaptSeRVICE.adapt(response)),
      catchError((error: Errorres) => {
        let adaptError = this._adapterror.Adapterror(error);
        return throwError(adaptError);
      })
    );
  }

  regester(data: SingupForm): Observable<LoginRes | ErrorRes> {
    return this._httpClient.post(Authendpoint.signup, data).pipe(
      map((response: any) => this._adaptSeRVICE.adapt(response)),
      catchError((error: Errorres) => {
        let adaptError = this._adapterror.Adapterror(error);
        return throwError(adaptError);
      })
    );
  }

  forgetpass(data: ForgetForm): Observable<ForgetRes | ErrorRes> {
    return this._httpClient.post(Authendpoint.forgotpassword, data).pipe(
      map((response: any) => this._adaptForgetService.adaptForget(response)),
      catchError((error: Errorres) => {
        let adaptError = this._adapterror.Adapterror(error);
        return throwError(adaptError);
      })
    );
  }

  resetCodeapi(data: ResetCodeapi): Observable<{ status: string } | ErrorRes> {
    return this._httpClient.post(Authendpoint.VerifyResetCode, data).pipe(
      map((response: any) => response),
      catchError((error: Errorres) => {
        let adaptError = this._adapterror.Adapterror(error);
        return throwError(adaptError);
      })
    );
  }
  ResetPassworde(data: {
    email: string;
    newPassword: string;
  }): Observable<{ message: string; token: string } | ErrorRes> {
    return this._httpClient.put(Authendpoint.ResetPassword, data).pipe(
      map((response: any) => response),
      catchError((error: Errorres) => {
        let adaptError = this._adapterror.Adapterror(error);
        return throwError(adaptError);
      })
    );
  }

  userInfo(): Observable<AdaptuserInfoRes> {
    return this._httpClient
      .get(Authendpoint.useriFno)
      .pipe(map((res: any) => this._userInfoService.adaptUserInfo(res)));
  }
}
