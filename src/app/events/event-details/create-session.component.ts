import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ISession, restictedWords } from '../shared/index';

@Component({
    templateUrl: './create-session.component.html',
    styles: [`
    em {float:right; color:#E05C65 ;pading-left:10px}
    .error input, .error select, .error textarea {background-color: #E3C3C5}
    .error ::webkit-input-placeholder{color: #999}
  `],
  selector: 'create-session'
})

export class CreateSessionComponent implements OnInit {

    @Output() saveNewSession = new EventEmitter();
    @Output() cancelAddSession = new EventEmitter();

    newSessionForm: FormGroup;
    name: FormControl;
    presenter: FormControl;
    duration: FormControl;
    level: FormControl;
    abstract: FormControl;

    ngOnInit() {
        this.name = new FormControl('', Validators.required);
        this.presenter = new FormControl('', Validators.required);
        this.duration = new FormControl('', Validators.required);
        this.level = new FormControl('', Validators.required);
        this.abstract = new FormControl('', [Validators.required, Validators.maxLength(400), restictedWords(['foo', 'bar'])]);

        this.newSessionForm = new FormGroup({
            name: this.name,
            presenter: this.presenter,
            duration: this.duration,
            level: this.level,
            abstract: this.abstract
        });
    }


    saveSession(formValues) {
        const session: ISession = {
            id: undefined,
            name: formValues.name,
            duration: formValues.duration,
            presenter: formValues.presenter,
            level: formValues.level,
            abstract: formValues.abstract,
            voters: []

        };

        this.saveNewSession.emit(session);
    }

    cancelSession() {
        const value: any = {closeSession: false};
        this.cancelAddSession.emit(value);
    }


}
