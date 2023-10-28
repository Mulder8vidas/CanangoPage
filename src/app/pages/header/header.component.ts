import {Component, ElementRef} from '@angular/core';
import {Router} from "@angular/router";



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {


  constructor(private router: Router,private elRef: ElementRef) {




  }

  logeado=false;
  nombreuser: any="";
  ngOnInit(): void {

  }

  redirigir() {
    this.router.navigate(['/login']);
  }
  RedigirSmartphones(){
    this.router.navigate(['/smartphones'])
  }
  RedigirAccesorios(){
    this.router.navigate(['/accesorios'])
  }
  closeMenu() {
    const menuBtn = this.elRef.nativeElement.querySelector('#menu-btn');
    menuBtn.checked = false;
  }



}
