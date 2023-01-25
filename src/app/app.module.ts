import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RoomsComponent } from './rooms/rooms.component';

@NgModule({
  declarations: [
    // qualquer component, directive ou pipes, precisam estar declarados aqui
    AppComponent,
    RoomsComponent
  ],
  imports: [ // qualquer modulo que precisar ser iniciado
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // qual o primeiro component a ser carregado?
})
export class AppModule { } // root module
