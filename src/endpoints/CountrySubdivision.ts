import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class CountrySubdivision extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('countrySubdivision', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}