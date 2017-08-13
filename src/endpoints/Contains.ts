import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Contains extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('contains', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}