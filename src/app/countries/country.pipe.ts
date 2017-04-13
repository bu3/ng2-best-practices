import {Pipe, PipeTransform} from '@angular/core';
import {CountryService} from "./country.service";

@Pipe({
    name: 'country'
})
export class CountryPipe implements PipeTransform {

    constructor(private countryService: CountryService) {}

    transform(value: any, args?: any) {
        console.log(value)
        return this.countryService.getCountryNameByIsoCode(value);
    }

}
