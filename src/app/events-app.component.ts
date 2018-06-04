import { Component } from '@angular/core';

@Component({
    selector: 'events-app',
    //Note the character below is the CONSOLE KEY, not a quote
    template: `
    <h2> Harros World</h2>
    <img src="/assets/images/basic-shield.png" />

  `
})
export class EventsAppComponent {
    title = 'app';
}
