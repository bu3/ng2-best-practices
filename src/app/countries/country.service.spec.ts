import {TestBed, inject, async} from '@angular/core/testing';

import {CountryService} from './country.service';
import {XHRBackend, HttpModule, RequestMethod, Response, ResponseOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('CountryService', () => {

    const mockResponse = {
        "RestResponse": {
            "result": [
                {
                    "name": "Italy",
                    "alpha2_code": "IT",
                    "alpha3_code": "ITA"
                },
                {
                    "name": "Ireland",
                    "alpha2_code": "IE",
                    "alpha3_code": "IRL"
                }
            ]
        }
    };

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {provide: XHRBackend, useClass: MockBackend},
                CountryService
            ]
        });
    }));

    fit('should load country by iso code', (done: any) => {
        inject([XHRBackend, CountryService], (mockBackend, service: CountryService) => {


            mockBackend.connections.subscribe(connection => {
                expect(connection.request.method).toBe(RequestMethod.Get);
                expect(connection.request.url.toString()).toEqual('http://services.groupkt.com/country/get/all');

                connection.mockRespond(new Response(new ResponseOptions({
                        body: mockResponse,
                        status: 200
                    }
                )));
            });

            service.init().subscribe( () => {
                expect(service.getCountryNameByIsoCode('IT')).toEqual('Italy');
                done();
            });


        })();
    });
});
