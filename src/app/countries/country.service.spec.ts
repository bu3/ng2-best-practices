import {TestBed, inject, async} from '@angular/core/testing';

import {CountryService} from './country.service';
import {XHRBackend, HttpModule, RequestMethod, Response, ResponseOptions} from "@angular/http";
import {MockBackend} from "@angular/http/testing";

describe('CountryService', () => {

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            imports: [HttpModule],
            providers: [
                {provide: XHRBackend, useClass: MockBackend},
                CountryService
            ]
        });
    }));

    it('should load country by iso code', (done: any) => {
        inject([XHRBackend, CountryService], (mockBackend, service: CountryService) => {
            mockBackend.connections.subscribe(connection => {
                expect(connection.request.method).toBe(RequestMethod.Get);
                expect(connection.request.url.toString()).toEqual('http://services.groupkt.com/country/get/iso2code/IT');
                connection.mockRespond(new Response(new ResponseOptions({
                        body: {
                            "RestResponse": {
                                "messages": ["More webservices are available at http://www.groupkt.com/post/f2129b88/services.htm", "Country found matching code [IT]."],
                                "result": {
                                    "name": "Italy",
                                    "alpha2_code": "IT",
                                    "alpha3_code": "ITA"
                                }
                            }
                        },
                        status: 200
                    }
                )));
            });

            service.getCountryNameByIsoCode('IT').subscribe(name => {
                expect(name).toEqual('Italy');
                done();
            });
        })();
    });
});
