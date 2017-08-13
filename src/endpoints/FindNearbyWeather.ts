import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class FindNearbyWeather extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('findNearbyWeather', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}