import { GeonamesEndpoint } from './GeonamesEndpoint';
import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';

export class Search extends GeonamesEndpoint{
    constructor(private config: GeonamesConfig) {
        super('search', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.RDF])
    }

    public get() {

    }
}