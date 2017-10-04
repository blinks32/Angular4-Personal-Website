import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { DataService } from '../data.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-tutorial-details',
  templateUrl: './tutorial-details.component.html',
  styleUrls: ['./tutorial-details.component.scss']
})
export class TutorialDetailsComponent implements OnInit {
  current_id: any;
  title: string = '';
  constructor(private router: Router, public route: ActivatedRoute) { }
   
  ngOnInit() {
  this.current_id = this.route.snapshot.params['start']
  this.title = this.route.snapshot.params['title']
  }

}
