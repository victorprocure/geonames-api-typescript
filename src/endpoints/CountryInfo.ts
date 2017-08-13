import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';
import { ICountryInfo } from '../models/CountryInfo';

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

        return this.config.axiosInstance.get(`${this.webservice}?${qs}`)
            .then(c => {
                return c.data;
            })
            .then((c: ICountryInfo[]) => {
                console.log(JSON.stringify(c));
                return c;
            });
    }
}