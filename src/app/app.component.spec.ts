import { TestBed, async } from '@angular/core/testing';
import { EventAppComponent } from './event-app.component';

describe('EventAppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        EventAppComponent
      ],
    }).compileComponents();
  }));

  // it('should create the app', () => {
  //   const fixture = TestBed.createComponent(EventAppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app).toBeTruthy();
  // });

  // it(`should have as title 'ng-fundamentals'`, () => {
  //   const fixture = TestBed.createComponent(EventAppComponent);
  //   const app = fixture.debugElement.componentInstance;
  //   expect(app.title).toEqual('Ngundamentals');
  // });

  // it('should render title in a h1 tag', () => {
  //   const fixture = TestBed.createComponent(EventAppComponent);
  //   fixture.detectChanges();
  //   const compiled = fixture.debugElement.nativeElement;
  //   expect(compiled.querySelector('h1').textContent).toContain('Welcome to ng-fundamentals!');
  // });
});
