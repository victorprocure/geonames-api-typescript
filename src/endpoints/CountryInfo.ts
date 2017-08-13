import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';
import { ICountryInfo } from '../models/CountryInfo';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

import * as querystring from 'querystring';

export class CountryInfo extends GeonamesEndpoint {
    constructor(private config: GeonamesConfig) {
        super('countryInfo', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.CSV])
    }

    public get(countryCode?: string) {
        if (!this.config.axiosInstance) {
            throw new Error('Unable to call endpoint');
        }

        const qs = querystring.stringify({
            country: countryCode,
            formatted: this.config.formatted || false,
            style: this.config.style,
            lang: this.config.lang,
            username: this.config.username,
            type: (this.config.encoding) ? GeonamesFormat[this.config.encoding] : 'JSON'
        });

        return Observable.fromPromise(this.config.axiosInstance.get(`${this.webservice}?${qs}`))
            .map(c => c.data)
            .map(c => c.geonames as ICountryInfo[]);
    }
}