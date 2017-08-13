import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearbyPlaceName extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearbyPlaceName', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}