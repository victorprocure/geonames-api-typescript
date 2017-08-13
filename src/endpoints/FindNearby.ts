import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearby extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearby', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}