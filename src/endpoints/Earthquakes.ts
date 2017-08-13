import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Earthquakes extends GeonamesEndpoint {
    constructor(private config: GeonamesConfig) {
        super('earthquakes', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}