import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class PostalCodeLookup extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('postalCodeLookup', [GeonamesFormat.JSON])
    }

    public get() {

    }
}