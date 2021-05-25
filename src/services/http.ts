import axios, { AxiosInstance } from 'axios'; 
import { Http, HttpResponse } from '../protocols/http';



// TODO make an interface that implements axios so we don't git too much responsability to this library
// TODO see a good design pattern to this case

class HttpRequest implements Http {
  private readonly api: AxiosInstance
  constructor(baseURL: string){
    this.api =  axios.create({
      baseURL
    }); 
  }

  async get(path: string, options?: any): Promise<HttpResponse> {
    const response = await this.api.get(path,options); 
    return {
      body: response.data, 
      statusCode: response.status
    }
  }

  async post(path: string, body: any ,options?: any): Promise<HttpResponse> {
    const response = await this.api.post(path, body, options); 
    return {
      body: response.data, 
      statusCode: response.status
    }
  }

  async put(path: string, body: any, options?:any): Promise<HttpResponse>{
    const respose = await this.api.put(path, body, options); 
    return {
      body: respose.data, 
      statusCode: respose.status
    }
  }

  async delete(path: string, options?:any): Promise<HttpResponse>{
    const respose = await this.api.delete(path, options); 
    return {
      body: respose.data, 
      statusCode: respose.status
    }
  }
}

export const http = new HttpRequest(process.env.REACT_APP_BASE_URL!)