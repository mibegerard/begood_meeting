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
        "organizer": [
          {
            "name": "Gerard Mibe",
            "email": "gerard.mibe@my-digital-school.org"
          }
        ],
        "guests": [
          {
            "name": "Hermann Jude",
            "email":"hermann-jude.rencontre@my-digital-school.org"
          },
          {
            "name": "prof",
            "email":"prof@my-digital-school.org"
          }
        ],
        "startDateTime": "2023-09-20T10:00:00Z",
        "endDateTime": "2023-09-20T11:00:00Z",
        "channel": "Canal 1",
        "location": "Salle de réunion A",
        "description": "Réunion de planification du projet",
        "teamsLink": "lien1"
      },
      {
        "subject": "Présentation client",
        "organizer": [
          {
            "name": "Alice Smith",
            "email": "alice@example.com"
          }
        ],
        "guests": [
          {
            "name": "Hermann Jude",
            "email":"hermann-jude.rencontre@my-digital-school.org"
          },
          {
            "name": "prof",
            "email":"prof@my-digital-school.org"
          }
        ],
        "startDateTime": "2023-09-22T15:30:00Z",
        "endDateTime": "2023-09-22T17:00:00Z",
        "channel": "Canal 2",
        "location": "Salle de conférence B",
        "description": "Présentation du produit au client",
        "teamsLink": "lien2"
      }
    ]
    ;

    return of(events);
  }
}
