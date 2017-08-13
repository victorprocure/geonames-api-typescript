import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class PostalCodeSearch extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('postalCodeSearch', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}