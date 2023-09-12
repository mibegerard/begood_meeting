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
        "location": "En ligne",
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
        "teamsLink": "https://teams.microsoft.com/l/meetup-join/19%3ameeting_NDk5MTYzZWYtOGJmNC00OWYyLTk1ZjEtMzIwOGZkYWQ2ZDQ5%40thread.v2/0?context=%7b%22Tid%22%3a%228a2f18a9-8f0e-4f76-a585-9b07b3a38dea%22%2c%22Oid%22%3a%22b1574102-9cb1-40e8-bff2-20039867321d%22%7d"
      }
    ]
    ;

    return of(events);
  }
}
