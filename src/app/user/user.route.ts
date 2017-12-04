import { UserListComponent } from './user-list/user-list.component';
import {Route} from '@angular/router';

export const userRoutes: Route[] = [
  {
    path: 'users',
    component: UserListComponent
  }
];
