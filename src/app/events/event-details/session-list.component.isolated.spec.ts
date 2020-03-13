import { SessionListComponent } from './session-list.component';
import { ISession } from '../shared/event.model';


describe('SessionListComponent', () => {
    let component: SessionListComponent;
    let mockAuthService, mockVoterService;

    beforeEach(() => {
        component = new SessionListComponent(mockAuthService, mockVoterService);
    });

    describe('ngOnChanges', (() => {

        it('should filter sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'Session 1', level: 'intermediate' },
                { name: 'Session 2', level: 'beginner' },
                { name: 'Session 3', level: 'intermediate' },
            ];

            component.filterBy = 'intermediate';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();

            expect(component.visibleSessions.length).toBe(2);
        });

        it('should sort sessions correctly', () => {
            component.sessions = <ISession[]>[
                { name: 'Session 1', level: 'intermediate' },
                { name: 'Session 3', level: 'beginner' },
                { name: 'Session 2', level: 'intermediate' },
            ];

            component.filterBy = 'all';
            component.sortBy = 'name';
            component.eventId = 3;

            component.ngOnChanges();


            expect(component.visibleSessions[2].name).toBe('Session 3');
        });

    }));
});
