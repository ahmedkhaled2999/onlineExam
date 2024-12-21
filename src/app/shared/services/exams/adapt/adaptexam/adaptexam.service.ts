import { Injectable } from '@angular/core';
import { ExamResApi } from '../../interface/exam_Res_Api/exam-res-api';
import {
  Exam,
  ExampsRes,
} from '../../../../interface/examsResponse/examps-res';

@Injectable({
  providedIn: 'root',
})
export class AdaptexamService {
  constructor() {}
  adaptexam(data: ExamResApi): ExampsRes {
    return {
      exams: data.exams.map((res: Exam) => ({
        duration: res.duration,
        _id: res._id,
        title: res.title,
        numberOfQuestions: res.numberOfQuestions,
      })),
    };
  }
}
