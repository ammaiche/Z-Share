import { Route } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const authenticationRoutes: Route[] = [
  {
    path: 'connect',
    component: ConnectionComponent,
  },
  {
    path: 'subscribe',
    component: InscriptionComponent
  }
];
