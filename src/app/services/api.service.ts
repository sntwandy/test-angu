import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IPeople } from '../app.component';

interface IRequest {
  results: IPeople[];
}

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  API = 'https://swapi.dev/api/people';

  constructor(private http: HttpClient) {}

  getPeople() {
    return this.http.get<IRequest>(this.API);
  }

}
