import { Component } from '@angular/core';

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

}
