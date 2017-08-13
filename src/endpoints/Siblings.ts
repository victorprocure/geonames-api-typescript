import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Siblings extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('siblings', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}