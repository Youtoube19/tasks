import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideRouter([])
  ]
})
export class AppModule { }
