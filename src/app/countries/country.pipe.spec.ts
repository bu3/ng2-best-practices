import {CountryPipe} from './country.pipe';
import {Observable} from "rxjs/Observable";

describe('CountryPipe', () => {

    it('create an instance', () => {
        let expected = Observable.of('Italy');
        const mockCountryService = jasmine.createSpyObj('CountryService', ['getCountryNameByIsoCode']);
        mockCountryService.getCountryNameByIsoCode.and.returnValue(expected);
        const pipe = new CountryPipe(mockCountryService);

        expect(pipe.transform('IT')).toEqual('Italy');
        expect(mockCountryService.getCountryNameByIsoCode).toHaveBeenCalledWith('IT');
    });
});
