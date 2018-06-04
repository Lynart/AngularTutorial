import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    //Note the character below is the CONSOLE KEY, not a quote
    template: '<events-list></events-list>'
})
export class EventsAppComponent {
    title = 'app';
}
