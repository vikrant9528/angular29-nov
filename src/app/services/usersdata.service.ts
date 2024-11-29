import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UrlHandlingStrategy } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UsersdataService {
  url = 'https://dummyjson.com/users';
  constructor(private http:HttpClient) { }
  users(){
    return this.http.get(this.url);
  }
}
