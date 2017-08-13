import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class WikipediaBoundingBox extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('wikipediaBoundingBox', [GeonamesFormat.XML, GeonamesFormat.JSON])
    }

    public get() {

    }
}