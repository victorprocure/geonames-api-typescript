import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Timezone extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('timezone', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}