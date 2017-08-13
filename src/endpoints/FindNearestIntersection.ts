import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearestIntersection extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearestIntersection', [GeonamesFormat.XML, GeonamesFormat.JSON], [ 'US' ])
    }

    public get() {

    }
}