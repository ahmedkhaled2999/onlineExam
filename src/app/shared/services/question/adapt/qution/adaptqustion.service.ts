import { Injectable } from '@angular/core';
import { ResquizApi } from '../../../../interface/quiztion/resquizApi/resquiz-api';
import { ResquizAdapt } from '../../../../interface/quiztion/resquizAdapt/resquiz-adapt';

@Injectable({
  providedIn: 'root',
})
export class AdaptqustionService {
  constructor() {}

  adaptQus(data: ResquizApi):ResquizAdapt {
    return {
      answers: data.questions.map((res: any) => ({
        answers: res.answers.map((res: any) => ({
          answer: res.answer,
          key: res.key,
        })),
        correct: res.correct ,
        type: res.type,
        id:res._id,
        question: res.question,
        duration:res.exam.duration
      })),
    };
  }
}
