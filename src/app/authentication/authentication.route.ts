import { Route } from '@angular/router';
import { ConnectionComponent } from './connection/connection.component';
import { InscriptionComponent } from './inscription/inscription.component';

export const routes: Route[] = [
  {
    path: 'connection',
    component: ConnectionComponent
  },
  {
    path: 'inscription',
    component: InscriptionComponent
  }
];
