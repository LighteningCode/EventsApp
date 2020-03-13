import { VoterService } from './voter.service';
import { ISession } from '../shared/event.model';
import { Observable, of } from 'rxjs';

describe('Voter Service', () => {
    let voterService: VoterService
    , mockHttp;

    beforeEach(() => {
        mockHttp = jasmine.createSpyObj('mockHttp', ['delete', 'post']);

        voterService = new VoterService(mockHttp);
    });


    describe('deleteVoter', () => {
        it('should remove the voter from the list of voters', () => {
            let session = {id: 6, voters: ['joe', 'John']};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'joe');

            expect(session.voters.length).toBe(1);
            expect(session.voters[0]).toBe('John');
        });


        it('should call the right HTTP.delete URL', () => {
            let session = {id: 6, voters: ['joe', 'John']};
            mockHttp.delete.and.returnValue(of(false));

            voterService.deleteVoter(3, <ISession>session, 'joe');

            expect(mockHttp.delete).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe');
        });
    });



    describe('addVoter', () => {
        it('should call the right HTTP.post URL', () => {
            let session = {id: 6, voters: ['John']};
            mockHttp.post.and.returnValue(of(false));

            voterService.addVoter(3, <ISession>session, 'joe');

            expect(mockHttp.post).toHaveBeenCalledWith('/api/events/3/sessions/6/voters/joe', {}, jasmine.any(Object));
        });
    });
});
