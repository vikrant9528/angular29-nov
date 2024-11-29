// import { Component } from '@angular/core';
// import {UserService} from '../app/services/user.service';
// import {UsersdataService} from '../app/services/usersdata.service';
// import { JsonPipe } from '@angular/common';

// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.scss']
// })
// export class AppComponent {
//   title = 'angular-29-nov';
//   users:any;
//   userData:any[]
//   constructor(private user:UserService,userdata:UsersdataService){
//     console.log(user.data());
//     this.userData = user.data();
//     userdata.users().subscribe((data)=>{
//       console.log("data",data);
//       this.users=data
//       console.log(this.users,"users data")
//       const myArray = Object.entries(this.users);
//     })
//   }
// }


// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-root',
//   template: `
//     <div style="text-align:center; padding: 20px;">
//       <mat-card class="example-card">
//         <mat-card-header>
//           <mat-card-title>Welcome to Angular Material</mat-card-title>
//         </mat-card-header>
//         <mat-card-content>
//           <p>This is an example of using Angular Material components.</p>
//         </mat-card-content>
//         <mat-card-actions>
//           <button mat-button (click)="onButtonClick()">Click Me</button>
//         </mat-card-actions>
//       </mat-card>
//     </div>
//   `,
//   styles: [
//     `
//       .example-card {
//         max-width: 400px;
//         margin: 20px auto;
//       }
//     `,
//   ],
// })
// export class AppComponent {
//   onButtonClick() {
//     alert('Button clicked!');
//   }
// }


import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div style="max-width: 400px; margin: 50px auto;">
      <mat-form-field appearance="fill">
        <mat-label>Enter your name</mat-label>
        <input matInput placeholder="John Doe" [(ngModel)]="name" />
      </mat-form-field>

      <button mat-raised-button color="primary" (click)="submitForm()">Submit</button>

      <div *ngIf="name">
        <h3>Hello, {{ name }}!</h3>
      </div>
    </div>
  `,
})
export class AppComponent {
  name = '';

  submitForm() {
    console.log(`Form submitted with name: ${this.name}`);
  }
}


