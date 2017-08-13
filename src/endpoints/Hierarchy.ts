import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Hierarchy extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('hierarchy', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}