import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearestAddress extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearestAddress', [GeonamesFormat.XML, GeonamesFormat.JSON], [ 'US' ])
    }

    public get() {

    }
}