import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() { }

  getEvents(): Observable<any[]> {
    const events = [
      {
        "subject": "Réunion d'équipe",
        "organizer": "gerard.mibe@my-digital-school.org",
        "guests": [
          "hermann-jude.rencontre@my-digital-school.org",
          "alice@example.com",
          "bob@example.com"
        ],
        "startDateTime": "2023-09-20T10:00:00Z",
        "endDateTime": "2023-09-20T11:00:00Z",
        "channel": "Canal 1",
        "location": "Salle de réunion A",
        "description": "Réunion de planification du projet"
      },
      {
        "subject": "Présentation client",
        "organizer": "alice@example.com",
        "guests": [
          "bob@example.com",
          "charlie@example.com",
          "david@example.com"
        ],
        "startDateTime": "2023-09-22T15:30:00Z",
        "endDateTime": "2023-09-22T17:00:00Z",
        "channel": "Canal 2",
        "location": "Salle de conférence B",
        "description": "Présentation du produit au client"
      }
    ];

    return of(events);
  }
}
