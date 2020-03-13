import { Component, Input, ViewChild, ElementRef, Inject } from '@angular/core';
import { JQ_TOKEN } from './jQuery.service';


@Component({
    selector: 'simple-modal',
    template: `
    <div id="{{elementId}}" #modalContainer class="modal fade" tabindex="-1" role="dialog" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title text-dark" id="my-modal-title">{{title}}</h5>
        <button class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
        <div class="modal-body" (click)="closeModal()">
          <ng-content></ng-content>
        </div>
      </div>
    </div>
  </div>

    `,
    styles: [`
        .modal-body{height:250px; overflow-y:scroll;}
    `]
})


export class SimpleModalComponent {
    @Input() title: string;
    @Input() elementId: string;
    @Input() closeOnBodyClick: string;
    @ViewChild('modalContainer') containerEl: ElementRef;

    constructor(@Inject(JQ_TOKEN) private $: any) {

    }

    closeModal() {
      if (this.closeOnBodyClick.toLocaleLowerCase() === 'true') {
        this.$(this.containerEl.nativeElement).modal('hide');
      }
    }
}

