import {
    EventDetailsComponent,
    EventListComponent,
    CreateEventComponent,
    EventListResolver,
    EventResolver

} from './events/index';

import { Routes } from '@angular/router';
import { Error404Component } from './errors/404.component';
import { CreateSessionComponent } from './events/event-details/create-session.component';


export const appRoutes: Routes = [
    {path: 'events/new', component: CreateEventComponent, canDeactivate: ['canDeactivateCreateEvent']},
    {path: 'events', component: EventListComponent, resolve: {events: EventListResolver}},
    {path: 'events/:id', component: EventDetailsComponent, resolve: {event : EventResolver}},
    {path: '404', component: Error404Component},
    {path: 'events/session/new', component: CreateSessionComponent},
    {path: '', redirectTo: '/events', pathMatch: 'full'},
    {path: 'user', loadChildren: './user/user.module#UserModule'}
];
