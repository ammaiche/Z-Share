import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './authentication/connection/connection.component';
import { InscriptionComponent } from './authentication/inscription/inscription.component';

import { routes } from './authentication/authentication.route';
import { NavigationComponent } from './navigation/navigation.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    NavigationComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
