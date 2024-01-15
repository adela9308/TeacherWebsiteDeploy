import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-teaching',
  templateUrl: './teaching.component.html',
  styleUrls: ['./teaching.component.scss']
})
export class TeachingComponent {
  courses = [
    {
      name: 'Object-Oriented Programming (OOP)',
      icon: './assets/OOP.jpg',
    },
    {
      name: 'Fundamentals of Programming',
      icon: './assets/FP.jpg',
    }
  ];

  constructor(private router: Router) {
  }
  redirectToPage(link: string){
    this.router.navigateByUrl(link)
  }
}
