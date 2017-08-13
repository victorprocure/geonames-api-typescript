import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Cities extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('cities', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}