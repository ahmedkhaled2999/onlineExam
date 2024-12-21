import { Injectable } from '@angular/core';
import { Adapt } from '../interface/adapt/adapt';

import { Datares } from '../interface/datares/datares';

import { LoginRes } from '../interface/loginres';

@Injectable({
  providedIn: 'root',
})
export class AdaptService implements Adapt {
  constructor() {}
  adapt(data: Datares): LoginRes {
    return {
      message: data.message,
      token: data.token,
      user: data.user.username,
    };
  }
}
