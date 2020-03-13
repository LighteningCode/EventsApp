import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from './shared';



@Component({
    templateUrl: 'create-event.component.html',
    styles: [`
    em {float:right; color:#E05C65 ;pading-left:10px}
    .error input {background-color: #E3C3C5}
    .error ::webkit-input-placeholder{color: #999}
  `]
})

export class CreateEventComponent {


    event: any;

    isDirty = true;
    constructor(private router: Router, private eventService: EventService) {

    }

    cancel() {
        this.router.navigate(['/events']);
    }

    ngOnInit() {  }

    saveEvent(formvalues) {
        this.eventService.saveEvent(formvalues).subscribe(() => {
            this.isDirty = false;
            this.router.navigate(['/events']);
        });

    }
}
