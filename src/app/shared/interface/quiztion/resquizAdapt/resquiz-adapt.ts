export interface ResquizAdapt {
    answers: Answer[]
}

export interface Answer {
  answers: Answer2[]
  correct: string
  type: string
  question: string
  duration: number
}

export interface Answer2 {
  answer: string
  key: string
}
