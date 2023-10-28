import {Component, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent  implements OnDestroy{
  currentIndex: number = 0;
  currentIndex2: number = 0;

  constructor(private router : Router) {

  }

  activeSlide: string = 'active';
  autoplayInterval: any;
  calidad:any[]=[
    {
      img: 'assets/calidadimg.jpg',
    },
    {
      img: 'assets/2.jpg',
    },
    {
      img: 'assets/3.jpg',
    },
  ]
  images: any[]= [
    {
      img: 'assets/portada2.webp',

    },



  ];


  ngOnInit() {
    this.autoplayInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);


  }
  previousSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  nextSlide() {
    this.currentIndex2 = (this.currentIndex2 + 1) % this.calidad.length;
  }
  estadoBolita(index:number){
    this.currentIndex2=index;
  }

  ngOnDestroy(): void {
    clearTimeout(this.autoplayInterval)
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
  }, 0);

}}
