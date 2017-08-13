import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class GlobalTopo extends GeonamesEndpoint {
    constructor(private config: GeonamesConfig) {
        super('gtopo30', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT])
    }

    public get() {

    }
}