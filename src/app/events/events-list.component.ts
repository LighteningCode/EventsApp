import { Component, OnInit } from '@angular/core';
import { EventService } from './shared/events.service';
import { Router, ActivatedRoute } from '@angular/router';
import { IEvent } from './shared';

declare let toastr;

@Component({
    selector: 'events-list',
    template: `
    <div class="container">
        <h1>Upcoming Angular Events</h1>
        <hr/>
        <div class="row">
            <div *ngFor="let event of events" class="col-md-5 m-2">
                <events-thumbnail [event]="event" ></events-thumbnail>
            </div>
        </div>
    </div>
    `
})

export class EventListComponent implements OnInit {
    events: IEvent[];

    constructor(private eventService: EventService, private route: ActivatedRoute) {

    }

    ngOnInit() {
        this.events = this.route.snapshot.data['events'];
    }


}
