import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'personalSite';
  info = 1;
  isSticky = false;

  @HostListener('window:scroll', ['$event']) checkScroll() {
    this.isSticky = window.pageYOffset >= 640;
  }
}
