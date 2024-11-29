import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NopageComponent } from './nopage/nopage.component';
import { AppComponent } from './app.component';
import { AboutComponent } from './about/about.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { AboutMeComponent } from './about-me/about-me.component';

const routes: Routes = [
//  {
//     path:'',
//     component:AppComponent
//   },
//   {
//     path:'**',
//     component:NopageComponent
//   },
     {
      path:'about',
      component:AboutComponent,
      children:[
        {
          path:'aboutus',
          component:AboutUsComponent
        },
        {
          path:'aboutme',
          component:AboutMeComponent
        }
      ]
     }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
