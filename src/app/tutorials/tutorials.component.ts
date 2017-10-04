import { Component, OnInit, OnDestroy } from '@angular/core';
import { Hero } from '../hero';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.scss']
})
export class TutorialsComponent implements OnInit {
  id: number;
  title: any = {}
  constructor(public dataservice: DataService, public router: Router) { }

  ngOnInit() {
   
  }
  
 gotoRoute(id){
  let title;
  if (id == 1){
     title = 'IONIC3 DEVICE TO DEVICE PUSH NOTIFICATION USING ONESIGNAL AND FIREBASE' 
  }else if (id == 2){
     title = 'IONIC3 DEVICE TO DEVICE PUSH NOTIFICATION USING ONESIGNAL' 
  }  
  this.router.navigate(['tutorialdetails', { start: id, title: title }])
 }

}
