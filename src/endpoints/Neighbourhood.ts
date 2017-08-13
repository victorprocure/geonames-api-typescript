import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Neighbourhood extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('neighbourhood', [GeonamesFormat.XML, GeonamesFormat.JSON], [ 'US' ])
    }

    public get() {

    }
}