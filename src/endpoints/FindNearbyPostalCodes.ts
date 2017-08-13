import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearbyPostalCodes extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearbyPostalCodes', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}