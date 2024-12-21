import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { examsapi } from './enums/examsapi';
import { catchError, map, Observable, throwError } from 'rxjs';
import { AdaptexamService } from './adapt/adaptexam/adaptexam.service';
import { ExampsRes } from '../../interface/examsResponse/examps-res';
import { ExamResApi } from './interface/exam_Res_Api/exam-res-api';
import { AdaptErrorService } from '../subject/adabt/AdaptError/adapt-error.service';
import { ErrorResponse } from '../subject/interfaces/ErrorRes/error-response';
import { ErrorSubject } from '../subject/interfaces/error/error-subject';

@Injectable({
  providedIn: 'root',
})
export class ExamsService {
  constructor(
    private _httpClient: HttpClient,
    private _adaptexamService: AdaptexamService,
    private _adaptErrorService:AdaptErrorService
    
  ) {}

  getexamsubject(id: string): Observable<ExampsRes| ErrorResponse> {
    return this._httpClient
      .get<ExamResApi>(examsapi.getallexamsonsubject(id))
      .pipe(
        map((res: ExamResApi) => this._adaptexamService.adaptexam(res)),
        catchError((error: ErrorSubject) => {
          let adaptError = this._adaptErrorService.adaptError(error);
          return throwError(adaptError);
        })
      );
  }

  getallExams(): Observable<any> {
    return this._httpClient
      .get(examsapi.getallExams)
      .pipe(map((res: any) => this._adaptexamService.adaptexam(res)));
  }
}
