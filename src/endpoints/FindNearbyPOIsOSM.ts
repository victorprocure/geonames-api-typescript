import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearbyPOIsOSM extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearbyPOIsOSM', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}