import { Component } from '@angular/core';
import { EventService } from '../shared/events.service';
import { ActivatedRoute, Params } from '@angular/router';
import { ISession, IEvent } from '../shared';
import { AuthService } from 'src/app/user/auth.service';


@Component({
    templateUrl: './event-details.component.html',
    styles: [`
        .event-image{height:200px}
        a {cursor:pointer}
        #eventTitle{width:1000px}
    `]
})


export class EventDetailsComponent {
    event: any;
    addMode;
    filterBy = 'all';
    sortBy = 'votes';


    constructor(private eventService: EventService, private route: ActivatedRoute, private auth: AuthService) {

    }

    ngOnInit() {



        this.route.data.forEach((data) => {

            this.event = data['event'];
            this.addMode = false;

        });

    }

    addSession() {
        this.addMode = true;
    }

    saveNewSession(session: ISession) {
        const nextId = Math.max.apply(null, this.event.sessions.map(s => s.id));
        session.id = nextId + 1;
        this.event.sessions.push(session);
        this.eventService.saveEvent(this.event).subscribe();
        this.addMode = false;
    }

    cancelAddSession(value: any) {
        console.log(this.addMode);
        this.addMode = value;
        console.log(this.addMode);
        console.log(value);
    }

}
