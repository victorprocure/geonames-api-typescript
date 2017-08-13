import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearbyWikipedia extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearbyWikipedia', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.RSS])
    }

    public get() {

    }
}