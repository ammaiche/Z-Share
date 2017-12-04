import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { ConnectionComponent } from './authentication/connection/connection.component';
import { InscriptionComponent } from './authentication/inscription/inscription.component';

import { routes } from './authentication/authentication.route';
import { NavigationComponent } from './navigation/navigation.component';
import { UserComponent } from './user/user.component';
import { UserListComponent } from './user/user-list/user-list.component';


@NgModule({
  declarations: [
    AppComponent,
    ConnectionComponent,
    InscriptionComponent,
    NavigationComponent,
    UserComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes),
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
