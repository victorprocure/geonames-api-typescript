import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearbyStreets extends GeonamesEndpoint {
    constructor(private config: GeonamesConfig) {
        super('findNearbyStreets', [GeonamesFormat.XML, GeonamesFormat.JSON], ['US'])
    }

    public get() {

    }
}