import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { CountryPipe } from './countries/country.pipe';
import {CountryService} from "./countries/country.service";

@NgModule({
  declarations: [
    AppComponent,
    CountryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [CountryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
