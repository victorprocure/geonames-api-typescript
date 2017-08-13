import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Children extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('children', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}