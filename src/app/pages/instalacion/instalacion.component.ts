import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-instalacion',
  templateUrl: './instalacion.component.html',
  styleUrls: ['./instalacion.component.css']
})
export class InstalacionComponent {
  constructor(private router : Router) {

  }
  dyfrouter(){
    window.scrollTo(0, 0);
    setTimeout(() => {
      this.router.navigate(['/fabricacion']);
    }, 0);
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
