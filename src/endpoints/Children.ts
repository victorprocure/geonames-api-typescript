import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig, GeonamesFormat, Geoname } from '../models';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/fromPromise';
import 'rxjs/add/operator/map';

export class Children extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('children', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get(geonameId: string | number, maxRows = 200) {
        if (!this.config.axiosInstance) {
            throw new Error('Unable to call endpoint');
        }

        const queryString = this.buildQueryString(this.config, { geonameId, maxRows });

        return Observable.fromPromise(this.config.axiosInstance.get(`${this.webservice}?${queryString}`))
            .map(r => r.data)
            .map(r => r.geonames as Geoname[]);
    }
}