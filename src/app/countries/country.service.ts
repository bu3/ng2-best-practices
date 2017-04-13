import {Injectable} from "@angular/core";
import "rxjs/add/observable/of";
import "rxjs/add/operator/map";
import {Http} from "@angular/http";
import {Observable} from "rxjs";

@Injectable()
export class CountryService {

    private countries: any[];

    constructor(private http: Http) {
        this.init();
    }

    getCountryNameByIsoCode(isoCode: string): string {
        let country = this.countries ? this.countries.find(country => country.alpha2_code === isoCode).name : null;
        return country ? country.name : null;
    }

    init(): Observable<any> {
        let url = 'http://services.groupkt.com/country/get/all';
        return this.http.get(url).map(res => this.countries = res.json().RestResponse.result);
    }
}
