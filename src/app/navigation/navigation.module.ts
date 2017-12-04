import { SharedModule } from '../shared/shared.module';
import { NavigationComponent } from './navigation.component';
import { NgModule } from '@angular/core';


@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    NavigationComponent
  ],
  exports: [
    NavigationComponent
  ]
})

export class NavigationModule {}
