import { Component } from '@angular/core';
import { GapiSessionService } from './gapi-session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ItsGoogleDrive';

  constructor(private gapiSession: GapiSessionService) {
  }

  signIn() {
    this.gapiSession.signIn()
        .then(() => {
            if (this.gapiSession.isSignedIn) {
                alert('login fatto');
            }
        });
}
}
