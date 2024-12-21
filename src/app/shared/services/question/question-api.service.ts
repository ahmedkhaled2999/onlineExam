import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { apiEXAMS } from './enums/ApISEXAMS';
import { AdaptqustionService } from './adapt/qution/adaptqustion.service';
import { ResquizApi } from '../../interface/quiztion/resquizApi/resquiz-api';
import { HistoryAnswer } from '../../interface/historyAnswer/history-answer';

@Injectable({
  providedIn: 'root',
})
export class QuestionApiService {
  constructor(
    private _httpClient: HttpClient,
    private _adaptqustionService: AdaptqustionService
  ) {}

  getallQuestions(id: string): Observable<any> {
    return this._httpClient
      .get<ResquizApi>(apiEXAMS.getallquestionsonexam(id))
      .pipe(map((res: ResquizApi) => this._adaptqustionService.adaptQus(res)));
  }

  cheackHistory(data: HistoryAnswer): Observable<any> {
    return this._httpClient.post(apiEXAMS.history, data);
  }
}
