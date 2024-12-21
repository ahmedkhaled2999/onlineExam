import { Injectable } from '@angular/core';
import { ErrorSubject } from '../../interfaces/error/error-subject';
import { ErrorResponse } from '../../interfaces/ErrorRes/error-response';

@Injectable({
  providedIn: 'root',
})
export class AdaptErrorService {
  constructor() {}

  adaptError(error: ErrorSubject): ErrorResponse {
    return {
      status: error.status,
      message: error.message 
    };
  }
}
