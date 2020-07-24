import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor( private http: HttpClient) { }

  getUser(username: string) {
    return this.http.get('https://api.github.com/search/users?q=' + username);
  }
}
