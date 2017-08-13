export enum GeonamesFormat {
    XML,
    JSON,
    RDF,
    CSV,
    TXT,
    RSS,
    KML
}

export interface GeonamesConfig {
    username: string;
    lang: string;
    encoding: GeonamesFormat;
}

export interface GeonamesEndpoint {
    webservice: string,
    availableFormats: GeonamesFormat[],
    includedCountries?: string[]
}

export class Geonames {
    constructor({ username, lang = 'en', encoding = GeonamesFormat.JSON }: GeonamesConfig) {
        if (!username) {
            throw new Error('A username must be provided, you may register at: http://www.geonames.org/login');
        }
    }

    static geonamesInformation = {
        secureUri: 'https://secure.geonames.org/',
        baseUri: 'http://api.geonames.org/'
    }

    static services: GeonamesEndpoint[] = [
        { webservice: 'astergdem', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT] },
        { webservice: 'children', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'cities', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'contains', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'countryCode', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT] },
        { webservice: 'countryInfo', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.CSV] },
        { webservice: 'countrySubdivision', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'earthquakes', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'extendedFindNearby', availableFormats: [GeonamesFormat.XML] },
        { webservice: 'findNearby', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'findNearbyPlaceName', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'findNearbyPostalCodes', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'findNearbyStreets', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON], includedCountries: ['US'] },
        { webservice: 'findNearbyStreetsOSM', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'findNearbyWeather', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'findNearbyWikipedia', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.RSS] },
        { webservice: 'findNearestAddress', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON], includedCountries: ['US'] },
        { webservice: 'findNearestIntersection', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON], includedCountries: ['US'] },
        { webservice: 'findNearestIntersectionOSM', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'findNearbyPOIsOSM', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'geocode', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON], includedCountries: ['US'] },
        { webservice: 'get', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'gtopo30', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT] },
        { webservice: 'hierarchy', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'neighbourhood', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON], includedCountries: ['US'] },
        { webservice: 'neighbours', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'ocean', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'postalCodeCountryInfo', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'postalCodeLookup', availableFormats: [GeonamesFormat.JSON] },
        { webservice: 'postalCodeSearch', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'rssToGeo', availableFormats: [GeonamesFormat.RSS, GeonamesFormat.KML] },
        { webservice: 'search', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.RDF] },
        { webservice: 'siblings', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'srtm1', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT] },
        { webservice: 'srtm3', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON, GeonamesFormat.TXT] },
        { webservice: 'timezone', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'weather', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'weatherIcao', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'wikipediaBoundingBox', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] },
        { webservice: 'wikipediaSearch', availableFormats: [GeonamesFormat.XML, GeonamesFormat.JSON] }
    ];
}