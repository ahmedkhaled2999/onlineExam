export type Root = Root2[]

export interface Root2 {
  answers: Answer[]
  correct: string
  type: string
  question: string
  duration: number
  Personsanswer?:string
  id?:string
}

export interface Answer {
  answer: string
  key: string
}
