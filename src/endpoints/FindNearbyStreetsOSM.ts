import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearbyStreetsOSM extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearbyStreetsOSM', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}