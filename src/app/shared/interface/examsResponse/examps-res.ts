export interface Exam {
  duration: number;
  _id: string;
  title: string;
  numberOfQuestions: number;
}

// Define the structure of the ExampsRes response
export interface ExampsRes {
  exams: Exam[];
}
