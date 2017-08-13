import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class CountryInfo extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('countryInfo', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.CSV])
    }

    public get() {

    }
}