import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { EventsInterface } from '../interfaces/events-interface';
import { EventsService } from '../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events: any;

  constructor(
    private eventsService: EventsService,
    private router: Router
  ) { }

  ngOnInit() {
    let eventsData = this.eventsService.getEvents();

    eventsData.subscribe(res => {
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

  convertToCSV(data: EventsInterface[]): string {
    const delimiter = ';';
  
    const rows = data.map(event => {
      const guestEmails = event.guests.map(guest => guest.email).join(', '); 
      return `${event.subject}${delimiter}${event.organizer[0].email}${delimiter}${guestEmails}${delimiter}${event.startDateTime}${delimiter}${event.endDateTime}${delimiter}${event.channel}${delimiter}${event.location}${delimiter}${event.description}${delimiter}${event.teamsLink}`;
    });
  
    const header = 'subject;organizer;guests;startDateTime;endDateTime;channel;location;description;teamsLink';
  
    return `${header}\n${rows.join('\n')}`;
  }
  
  

  importCSV() {
    const fileInput = document.getElementById('csvFileInput') as HTMLInputElement;
    if (fileInput && fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      const reader = new FileReader();
      reader.onload = (e) => {
        const contents = e.target?.result as string;
        this.parseCSV(contents);
      };
      reader.readAsText(file);
    } else {
      alert('Aucun fichier sélectionné.');
    }
  }

  parseCSV(csvText: string) {
    const rows = csvText.split('\n');
    const data = [];
    const columnOrder = [
      'subject', 'organizer', 'guests', 'startDateTime',
      'endDateTime', 'channel', 'location', 'description', 'teamsLink'
    ];
  
    for (let i = 1; i < rows.length; i++) {
      const columns = rows[i].split(';');

      const eventData: any = {};
  

      for (let j = 0; j < columnOrder.length; j++) {
        eventData[columnOrder[j]] = columns[j] || '';
      }
  
      if (eventData['guests']) {
        eventData['guests'] = eventData['guests'].split(', ').map((email: any) => ({ email }));
      } else {
        eventData['guests'] = [];
      }
  
      data.push(eventData);
    }
    alert('Importation réussie ! Nombre de lignes importées : ' + data.length )
    console.log(data);
  }

  
}
