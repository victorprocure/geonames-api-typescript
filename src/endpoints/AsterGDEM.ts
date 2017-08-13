import { GeonamesConfig } from '../models/GeonamesConfig';
import { GeonamesFormat } from '../models/GeonamesFormat';
import { GeonamesEndpoint } from './GeonamesEndpoint';

import axios from 'axios';


export class AsterGDEM extends GeonamesEndpoint {

    constructor(private config: GeonamesConfig) {
        super('astergdem', [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT])
     }

    public get(latitude: number, longitude: number, format?: GeonamesFormat) {
        format = format || this.config.encoding;
        format = format === (GeonamesFormat.XML || GeonamesFormat.JSON || GeonamesFormat.TXT) ? format : GeonamesFormat.JSON;

        axios.get('/');
    }
}