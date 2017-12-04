import { NgModule } from '@angular/core';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';
import {RouterModule} from '@angular/router';
import { authenticationRoutes } from './authentication.route';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    SharedModule,
    RouterModule.forRoot(authenticationRoutes)
  ],
  declarations: [InscriptionComponent, ConnectionComponent],
})
export class AuthenticationModule { }
