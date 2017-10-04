import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.scss']
})
export class WorksComponent implements OnInit {
  public slideIndex: number = 0;
  public slideIndex2: number = 0;
  myTimeout: any;
  constructor(private router: Router) { 
    router.events.subscribe((val) => {
      clearTimeout( this.myTimeout)
    })
  }

  ngOnInit() {
    this.showSlides();
  }

  
  showSlides() {
      var i;
      var slides = document.getElementsByClassName("myslides") as HTMLCollectionOf<HTMLElement>;
      var slides2 = document.getElementsByClassName("myslides2") as HTMLCollectionOf<HTMLElement>;
      var slides3 = document.getElementsByClassName("myslides3") as HTMLCollectionOf<HTMLElement>;
      for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none"; 
      }
      for (i = 0; i < slides2.length; i++) {
        slides2[i].style.display = "none"; 
    }
    for (i = 0; i < slides3.length; i++) {
      slides3[i].style.display = "none"; 
  }
      this.slideIndex++;
      if (this.slideIndex > slides.length) {this.slideIndex = 1} 
      slides[this.slideIndex-1].style.display = "block"; 
      slides2[this.slideIndex-1].style.display = "block"; 
      slides3[this.slideIndex-1].style.display = "block"; 
      this.myTimeout = setTimeout(() => {
        this.showSlides()
      }, 2000);; // Change image every 2 seconds
  }
 

}
