import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Neighbours extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('neighbours', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}