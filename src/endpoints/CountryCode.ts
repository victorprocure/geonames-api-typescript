import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class CountryCode extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('countryCode', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT])
    }

    public get() {

    }
}