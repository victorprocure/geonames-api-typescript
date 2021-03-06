import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class PostalCodeCountryInfo extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('postalCodeCountryInfo', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}