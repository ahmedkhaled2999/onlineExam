import { Observable } from 'rxjs';
import { AdaptErrorService } from './adabt/AdaptError/adapt-error.service';
import { AdaptAsubjectService } from './adabt/adabtallsubject/adapt-asubject.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { methodSUbject } from './base/Method_subject';
import { catchError, map,  throwError } from 'rxjs';
import { Apisubject } from './enums/apisubject';
import { SubjectRes } from './interfaces/subjectRes/subject-res';
import { ErrorResponse } from './interfaces/ErrorRes/error-response';
import { ErrorSubject } from './interfaces/error/error-subject';

@Injectable({
  providedIn: 'root',
})
export class SubjectService implements methodSUbject {
  constructor(
    private _http: HttpClient,
    private _adaptAsubjectService: AdaptAsubjectService,
    private _adaptErrorService: AdaptErrorService
  ) {}
  getall_subject(numpage: number, limit: number): Observable<SubjectRes | ErrorResponse > {
    return this._http.get(Apisubject.getAllSubjects(numpage, limit)).pipe(
      map((data: any) =>  this._adaptAsubjectService.adaptASubject(data)),


      
       catchError((error:ErrorSubject ) => {
         let adaptError = this._adaptErrorService.adaptError(error);
         return throwError(adaptError)
       })
    );
  }



}
