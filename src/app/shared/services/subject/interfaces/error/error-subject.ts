export interface ErrorSubject {
    headers: Headers
    status: number
    statusText: string
    url: string
    ok: boolean
    name: string
    message: string
    error: Error
  }
  
  export interface Headers {
    normalizedNames: NormalizedNames
    lazyUpdate: any
    headers: Headers2
  }
  
  export interface NormalizedNames {}
  
  export interface Headers2 {}
  
  export interface Error {}