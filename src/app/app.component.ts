import { Component } from '@angular/core';
import {CountryService} from "./countries/country.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
  ready = false;

  countryCode:string = 'IT';

  constructor(countryService: CountryService) {
    countryService.init().subscribe(()=> this.ready = true)
  }
}
