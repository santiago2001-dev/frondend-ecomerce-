import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { RouterModule } from '@angular/router';

import { NopageFoundComponent } from './nopage-found/nopage-found.component';
import { PagesModule } from './pages/pages.module';
import { ClienteModule } from './cliente/cliente.module';



@NgModule({
  declarations: [
    AppComponent,
    NopageFoundComponent,
    
  ],
  imports: [
    
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    PagesModule,
    ClienteModule

  
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
