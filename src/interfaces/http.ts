import axios from 'axios'; 

export const api = axios.create({
  baseURL: 'http://localhost:5000'
}); 

// TODO make an interface that implements axios so we don't git too much responsability to this library
// TODO see a good design pattern to this case