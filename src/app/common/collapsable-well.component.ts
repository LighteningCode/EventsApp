import { Component, Input } from '@angular/core';

@Component({
    selector: 'collapsible-well',
    template: `
        <div (click)="toggleContent()" class="well pointable my-2">
            <h4>
            <ng-content select="[well-title]"></ng-content>
            <ng-content select="[well-presenter]"></ng-content>
            </h4>
            <p *ngIf="!visible">Click here to view more.</p>
            <ng-content select="[well-body]" *ngIf="visible"></ng-content>
        </div>
    `
})


export class CollapsibleWellComponent {
    @Input() title: string;
    visible = false;


    toggleContent() {
        this.visible = !this.visible;
    }
}
