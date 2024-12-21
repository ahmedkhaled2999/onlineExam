import { Injectable } from '@angular/core';
import { AdaptuserInfo } from '../../interface/userinfo/adaptuser-info';
import { AdaptuserInfoRes } from './adapt.userinfores/adaptuserinfores';

@Injectable({
  providedIn: 'root',
})
export class UserInfoService {
  constructor() {}
  adaptUserInfo(data: AdaptuserInfo): AdaptuserInfoRes {
    return {
      email: data.user.email,
      _id: data.user._id,
      username: data.user.username,
      firstNam: data.user.firstName,
      lastName: data.user.lastName,
    };
  }
}
