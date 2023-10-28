import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-dyfab',
  templateUrl: './dyfab.component.html',
  styleUrls: ['./dyfab.component.css']
})
export class DyfabComponent {
  constructor(private router : Router) {

  }
  certificaciones(){
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.router.navigate(['/certificaciones']);
    }, 0);

  }
  instalacion(){
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.router.navigate(['/instalaciones']);
    }, 0);
  }
  venta(){
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.router.navigate(['/venta']);
    }, 0);}
}
