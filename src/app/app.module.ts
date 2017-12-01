import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ConnectionComponent } from './authentication/connection/connection.component';
import { InscriptionComponent } from './authentication/inscription/inscription.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
