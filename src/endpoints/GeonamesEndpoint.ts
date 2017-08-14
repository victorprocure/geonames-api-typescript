import { GeonamesFormat, GeonamesConfig } from '../models';
import { buildDefaultQueryString } from '../utils/Url';


export abstract class GeonamesEndpoint {
    protected buildQueryString = (config: GeonamesConfig, obj: {}) => buildDefaultQueryString(config, obj);
    
    constructor(public webservice: string, public availableFormats: GeonamesFormat[], public includedCountries?: string[]) { }

    abstract get(...args: any[]): any;
}