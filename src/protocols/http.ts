export interface HttpResponse {
  body: any
  statusCode: number
}

export interface Http {
  get: (path: string, options?:any) => Promise<HttpResponse>
  post: (path: string, body:any ,options?:any) => Promise<HttpResponse>
  put: (path: string, body: any ,options?:any) => Promise<HttpResponse>
  delete: (path: string,options?:any) => Promise<HttpResponse>
}