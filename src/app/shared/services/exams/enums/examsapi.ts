export class examsapi {
  static addExams = 'https://exam.elevateegy.com/api/v1/exams';
  
  static getallExams = 'https://exam.elevateegy.com/api/v1/exams';
  static getallexamsonsubject(id: string) {
    return `https://exam.elevateegy.com/api/v1/exams?subject=${id}`;
  }
}
