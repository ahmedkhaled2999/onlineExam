export interface ExamResApi {
    message: string
    metadata: Metadata
    exams: Examapi[]
  }
  
  export interface Metadata {
    currentPage: number
    numberOfPages: number
    limit: number
  }
  
  export interface Examapi {
    _id: string
    title: string
    duration: number
    subject: string
    numberOfQuestions: number
    active: boolean
    createdAt: string
  }
  