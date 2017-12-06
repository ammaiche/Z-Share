import { UserModule } from './user/user.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AppComponent } from './app.component';
import {NavigationModule} from './navigation/navigation.module';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    UserModule,
    AuthenticationModule,
    NavigationModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
