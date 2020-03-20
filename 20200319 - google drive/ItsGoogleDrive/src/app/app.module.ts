import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GapiSessionService } from './gapi-session.service';

export function initGapi(gapiSession: GapiSessionService) {
  return () => gapiSession.initClient();
}


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    { provide: APP_INITIALIZER, useFactory: initGapi, deps: [GapiSessionService], multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
