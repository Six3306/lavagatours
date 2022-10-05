import { Component, HostListener } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'lavagatours';

  r:boolean = false;
  navbarfixed: boolean = false;

  @HostListener('window:scroll', ['$event']) onscroll(){
    if(window.scrollY>window.outerHeight-300){
      
      this.navbarfixed = true;
    }else{
      this.navbarfixed = false; 
    }
  }
}
