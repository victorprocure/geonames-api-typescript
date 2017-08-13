import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Ocean extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('ocean', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}