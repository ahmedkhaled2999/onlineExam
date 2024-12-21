import { Injectable } from '@angular/core';
import { AllsubjectApi } from '../../../../interface/AllSubject/allsubject-api';
import { SubjectRes } from '../../interfaces/subjectRes/subject-res';


@Injectable({
  providedIn: 'root',
})
export class AdaptAsubjectService {
  constructor() {}
  adaptASubject(data: AllsubjectApi):any {
    return {
      subjects: data.subjects.map((res: any) => ({
        _id: res._id,
        name: res.name,
        icon: res.icon,
      })),
      totalPages: data.metadata.numberOfPages,
    };
  }
}
