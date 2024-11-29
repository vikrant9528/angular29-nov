import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service'

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  userData:any;
  constructor(private user:UserService) { 
    this.userData = user.data();
    this.userData[0].name = "rupal"
  }


  ngOnInit(): void {
  }

}
