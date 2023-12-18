import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent {
  title = 'teacher-website';

  constructor(private router: Router) {
  }
  redirectToPage(link: string){
    this.router.navigateByUrl(link)
  }
}
