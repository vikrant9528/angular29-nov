import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }
  data(){
    return [
      {name:'vikrant',email:'vikrantchaudary258@gmail.com',address:'ghaziabad'},
      {name:'vikrant',email:'vikrantchaudary258@gmail.com',address:'ghaziabad'},
      {name:'vikrant',email:'vikrantchaudary258@gmail.com',address:'ghaziabad'},
      {name:'vikrant',email:'vikrantchaudary258@gmail.com',address:'ghaziabad'},
    ]
  }
}
