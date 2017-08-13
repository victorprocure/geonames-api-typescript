import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Geocode extends GeonamesEndpoint {
    constructor(private config: GeonamesConfig) {
        super('geocode', [GeonamesFormat.XML, GeonamesFormat.JSON], ['US'])
    }

    public get() {

    }
}