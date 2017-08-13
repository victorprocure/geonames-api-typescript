import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class ShuttleRadarTopoM1 extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('srtm1', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT])
    }

    public get() {

    }
}