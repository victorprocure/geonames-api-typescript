import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class WeatherICAO extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('weatherIcao', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}