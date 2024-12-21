import { Injectable } from '@angular/core';
import { Adapterror } from '../../interface/adapt/adapterror';
import { ErrorRes } from '../../interface/errorRes/error-res';
import { Errorres } from '../../interface/error/error';

@Injectable({
  providedIn: 'root',
})
export class ErrorService implements Adapterror {
  constructor() {}
  Adapterror(data: Errorres):ErrorRes {
    return {
      error: data.error.message,
      message: data.message,
      status: data.status,
    };
  }
}
