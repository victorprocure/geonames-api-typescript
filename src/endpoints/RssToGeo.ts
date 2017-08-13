import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class RssToGeo extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('rssToGeo', [GeonamesFormat.XML, GeonamesFormat.KML])
    }

    public get() {

    }
}