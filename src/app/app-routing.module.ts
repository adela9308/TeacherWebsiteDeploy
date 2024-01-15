import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {AboutMeComponent} from "./about-me/about-me.component";
import {HomePageComponent} from "./home-page/home-page.component";
import {TeachingComponent} from "./teaching/teaching.component";
import {ContactComponent} from "./contact/contact.component";
import {TimetableComponent} from "./timetable/timetable.component";

const routes: Routes = [
  {
    path:'', component: HomePageComponent
  },
  {
    path:'home', component: HomePageComponent
  },
  {
    path:'aboutMe', component: AboutMeComponent,
  },
  {
    path:'teaching', component: TeachingComponent,
  },
  {
    path:'contact', component: ContactComponent,
  },
  {
    path:'timetable', component: TimetableComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
