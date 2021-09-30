import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Repository } from '../../models/Repository';

const baseUrl = 'https://api.github.com/users/by-pinja/repos';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public getRepos() {
    return this.http.get<Repository[]>(baseUrl);
  }
}
