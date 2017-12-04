import { NgModule } from '@angular/core';
import { UserComponent } from './user.component';
import { UserListComponent } from './user-list/user-list.component';
import { RouterModule } from '@angular/router';
import { userRoutes } from './user.route';


@NgModule({
  declarations: [
    UserComponent,
    UserListComponent
  ],
  imports: [
    RouterModule.forRoot(userRoutes),
  ]

})

export class UserModule {}
