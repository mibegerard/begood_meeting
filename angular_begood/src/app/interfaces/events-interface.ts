import { GuestsInterface } from "./guests-interface";

export interface EventsInterface {
    subject:string;
    organizer:string;
    guests:GuestsInterface[];
    startDateTime:string;
    endDateTime:string;
    channel:string;
    location:string;
    description:string;
    teamsLink:string;
}
