import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  events:any;

  constructor(
    private eventsService:EventsService,
    private router:Router
  ){}

  ngOnInit(){
    let eventsData = this.eventsService.getEvents();

    eventsData.subscribe(res =>{
      this.events = res;
    });
  }
  
}
