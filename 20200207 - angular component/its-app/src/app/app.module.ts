import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ItsPanelComponent } from './its-panel/its-panel.component';
import { TextInsertComponent } from './text-insert/text-insert.component';

@NgModule({
  declarations: [
    AppComponent,
    ItsPanelComponent,
    TextInsertComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
