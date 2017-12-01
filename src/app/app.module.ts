import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { ConnectionComponent } from './authentication/connection/connection.component';
import { InscriptionComponent } from './authentication/inscription/inscription.component';
import { routes } from './authentication/authentication.route';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,

  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
