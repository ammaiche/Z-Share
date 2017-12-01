import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InscriptionComponent } from './inscription/inscription.component';
import { ConnectionComponent } from './connection/connection.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [InscriptionComponent, ConnectionComponent]
})
export class AuthenticationModule { }
