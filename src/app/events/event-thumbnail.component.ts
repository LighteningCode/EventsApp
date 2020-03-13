import { Component, Input } from '@angular/core';
import { IEvent } from './shared';


@Component({
    selector: 'events-thumbnail',
    template: `
    <div [routerLink]="['/events',event.id]" class="card eventThumb bg-light container">
        <h3 class="text-primary">{{event?.name | uppercase}}</h3>
        <p>Date: {{event?.date  | date:'shortDate'}}<p>
        <div [ngStyle]="getStartTimeStyles()" [ngSwitch]="event?.time">
        Time: {{event?.time}}
            <span *ngSwitchCase="'8:00 am'">(Early start)</span>
            <span *ngSwitchCase="'10:00 am'">(Late Start)</span>
            <span *ngSwitchDefault>(Normal Start)</span>
        </div>
        <p>Price: {{event?.price | currency:'USD'}}<p>
        <p *ngIf="event?.location" class="pad-left">Location: {{event?.location.address}}, {{event?.location.city}}, {{event?.location.country}}<p>
    </div>


    `,
    styles: [`
        .eventThumb {min-height:100%}
        .eventThumb:hover{ background-color: #53a9ff !important;}
        .green { color: green !important; }
        .bold {font-weight: Bold}
        .thumbnail{width:300px !important;height:230px !important }
    `]
})


export class EventThumbnailComponent {
    // tells angular that this event will be passed in from another component
    @Input() event: IEvent;

    getStartTimeStyles() {
        if (this.event && this.event.time === '8:00 am') {
            return {color: '#51a351', 'font-weight': 'bold'};
        }
        return [];
    }
}
