import { GeonamesFormat } from '../models/GeonamesFormat';

export abstract class GeonamesEndpoint {
    constructor(public webservice: string, public availableFormats: GeonamesFormat[], public includedCountries?: string[]) { }

    abstract get(...args: any[]): any;
}