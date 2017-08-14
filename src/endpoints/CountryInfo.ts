import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';
import { Geoname } from '../models/Geoname';
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

        const qs = this.buildQueryString(this.config, { country: countryCode });

        return Observable.fromPromise(this.config.axiosInstance.get(`${this.webservice}?${qs}`))
            .map(c => c.data)
            .map(c => c.geonames as Geoname[]);
    }
}