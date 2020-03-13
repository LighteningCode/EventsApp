import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
    selector: 'upvote',
    styleUrls: ['./upvote.component.css'],
    template: `
        <div class="votingWidgetContainer pointable " (click)="onClick()">
            <div class="votingWidget bg-light">
                <div class="d-flex flex-row justify-contents-center">
                    <div class="mx-auto">
                    <i  class="fa fa-heart" [style.color]="iconColor"></i>
                    </div>
                </div>

                <div class="d-flex flex-row justify-contents-center">
                    <div class="mx-auto">{{count}}</div>
                </div>
            </div>
        </div>
    `
})

export class UpvoteComponent {

    @Input() count: number;
    @Input() set voted(val) {
        this.iconColor = val ? 'red' : 'grey';
    }
    @Output() vote = new EventEmitter();
    iconColor: string;

    onClick() {
        this.vote.emit({});
    }
}
