import {Injectable} from '@angular/core';
import {Observable} from "rxjs/Observable";
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/map';

import {Http} from "@angular/http";

@Injectable()
export class CountryService {

    constructor(private http: Http) {
    }

    getCountryNameByIsoCode(isoCode: string): Observable<string> {
        let url = `http://services.groupkt.com/country/get/iso2code/${isoCode}`;
        return this.http.get(url).map(res => res.json().RestResponse.result.name);
    }
}
