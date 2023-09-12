import { GuestsInterface } from "./guests-interface";
import { OrganizerInterface } from "./organizer-interface";

export interface EventsInterface {
    subject:string;
    organizer:OrganizerInterface[];
    guests:GuestsInterface[];
    startDateTime:string;
    endDateTime:string;
    channel:string;
    location:string;
    description:string;
    teamsLink:string;
}
