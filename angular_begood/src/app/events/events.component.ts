import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventsInterface } from '../interfaces/events-interface';
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

  exportToCSV() {
    const csvData = this.convertToCSV(this.events);
    const blob = new Blob([csvData], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'events.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }

  private convertToCSV(data: EventsInterface[]): string {
    const delimiter = ';';
    const escapeDoubleQuotes = (value: string) => {
      return value.replace(/"/g, '""');
    };
  
    const header = Object.keys(data[0]).join(delimiter);
  
    const rows = data.map(event => {
      const guestNames = event.guests.map(guest => guest.email).join('; '); // Pour séparer les noms des invités par des points-virgules
      return `"${escapeDoubleQuotes(event.subject)}"${delimiter}"${escapeDoubleQuotes(event.organizer[0].email)} (${escapeDoubleQuotes(event.organizer[0].email)})"${delimiter}"${escapeDoubleQuotes(guestNames)}"${delimiter}"${event.startDateTime}"${delimiter}"${event.endDateTime}"${delimiter}"${escapeDoubleQuotes(event.description)}"${delimiter}"${event.channel}"${delimiter}"${event.location}"${delimiter}"${event.teamsLink}"`;
    });
  
    return `${header}\n${rows.join('\n')}`;
  }
  
  
}
