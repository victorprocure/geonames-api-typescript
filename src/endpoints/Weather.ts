import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Weather extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('weather', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}