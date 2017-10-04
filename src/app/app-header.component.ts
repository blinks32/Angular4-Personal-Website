import { Component, NgZone } from '@angular/core';
import { Router } from '@angular/router';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-header',
  styleUrls: ['./app-header.component.scss'],
  templateUrl: 'app-header.component.html',
  animations: [
    trigger('heroState', [
      state('inactive', style({transform: 'translateX(0) scale(1)'})),
      state('active',   style({transform: 'translateX(0) scale(1.1)'})),
      transition('inactive => active', animate('100ms ease-in')),
      transition('active => inactive', animate('100ms ease-out')),
      transition('void => inactive', [
        style({transform: 'translateX(-100%) scale(1)'}),
        animate(100)
      ]),
      transition('inactive => void', [
        animate(100, style({transform: 'translateX(100%) scale(1)'}))
      ]),
      transition('void => active', [
        style({transform: 'translateX(0) scale(0)'}),
        animate(200)
      ]),
      transition('active => void', [
        animate(200, style({transform: 'translateX(0) scale(0)'}))
      ])
    ])
  ]
   
})

export class AppHeaderComponent {
  toggleMore: boolean = false;
  canShow: boolean = false;
  smallDevice: boolean = false;
  myText: string = 'showMore'
  state: any = 'inactive';
  interval: any;
  constructor(public router: Router, private _ngZone: NgZone) {
  }

  ngOnInit(){
    var mq = window.matchMedia( "(max-width: 768px)" );
    if (mq.matches) {
    this.smallDevice = true
    }
    else {
    this.toggleMore = true
    }
  }

  MytoggleMore(){
    this.toggleMore = this.toggleMore ? false : true
    this.canShow = this.toggleMore;
    this.state = this.state === 'active' ? 'inactive' : 'active';
  }


}
