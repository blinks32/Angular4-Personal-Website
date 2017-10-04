import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  number_of_drivers: any = 0;
  number_of_users: any = 0;
  smallDevice: boolean = false
  
    constructor(public router: Router) {
     }
  

  ngOnInit() {
    var mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
    this.smallDevice = false
    }
    else {
    this.smallDevice = true
    }
    }

  gotoDrivers() {
    // this.router.navigateByUrl('driver');
  }

  gotoUsers() {
    // this.router.navigateByUrl('client');
  }


}
