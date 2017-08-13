import {
    AsterGDEM,
    Children,
    Cities,
    Contains,
    CountryCode,
    CountryInfo,
    CountrySubdivision,
    Earthquakes,
    ExtendedFindNearby,
    FindNearby,
    FindNearbyPlaceName,
    FindNearbyPostalCodes,
    FindNearbyStreets,
    FindNearbyStreetsOSM,
    FindNearbyWeather,
    FindNearbyWikipedia,
    FindNearestAddress,
    FindNearestIntersection,
    FindNearestIntersectionOSM,
    FindNearbyPOIsOSM,
    Geocode,
    Get,
    GlobalTopo,
    Hierarchy,
    Neighbourhood,
    Neighbours,
    Ocean,
    PostalCodeCountryInfo,
    PostalCodeLookup,
    PostalCodeSearch,
    RssToGeo,
    Search,
    Siblings,
    ShuttleRadarTopoM1,
    ShuttleRadarTopoM3,
    Timezone,
    Weather,
    WeatherICAO,
    WikipediaBoundingBox,
    WikipediaSearch
} from './endpoints';


import { GeonamesConfig } from './models/GeonamesConfig';
import { GeonamesFormat } from './models/GeonamesFormat';
import { GeonamesEndpoint } from './endpoints/GeonamesEndpoint';
import axios from 'axios';



export class Geonames {
    public astergdem: AsterGDEM;
    public children: Children;
    public cities: Cities;
    public contains: Contains;
    public countryCode: CountryCode;
    public countryInfo: CountryInfo;
    public countrySubdivision: CountrySubdivision;
    public earthquakes: Earthquakes;
    public extendedFindNearby: ExtendedFindNearby;
    public findNearby: FindNearby;
    public findNearbyPlacename: FindNearbyPlaceName;
    public findNearbyPostalCodes: FindNearbyPostalCodes;
    public findNearbyStreets: FindNearbyStreets;
    public findNearbyStreetsOSM: FindNearbyStreetsOSM;
    public findNearbyWeather: FindNearbyWeather;
    public findNearbyWikipedia: FindNearbyWikipedia;
    public findNearestAddress: FindNearestAddress;
    public findNearestIntersection: FindNearestIntersection;
    public findNearestIntersectionOSM: FindNearestIntersectionOSM;
    public findNearbyPOIsOSM: FindNearbyPOIsOSM;
    public geocode: Geocode;
    public get: Get;
    public globalTopo: GlobalTopo;
    public hierarchy: Hierarchy;
    public neighbourhood: Neighbourhood;
    public neighbours: Neighbours;
    public ocean: Ocean;
    public postalCodeCountryInfo: PostalCodeCountryInfo;
    public postalCodeLookup: PostalCodeLookup;
    public postalCodeSearch: PostalCodeSearch;
    public rssToGeo: RssToGeo;
    public search: Search;
    public siblings: Siblings;
    public shuttleRadarTopoM1: ShuttleRadarTopoM1;
    public shuttleRadarTopoM3: ShuttleRadarTopoM3;
    public timezone: Timezone;
    public weather: Weather;
    public weatherICAO: WeatherICAO;
    public wikipediaBoundingBox: WikipediaBoundingBox;
    public wikipediaSearch: WikipediaSearch;

    constructor(private configuration: GeonamesConfig) {
        if (!configuration.username) {
            throw new Error('A username must be provided, you may register at: http://www.geonames.org/login');
        }

        this.checkPotentialIssues();
        this.createAxiosInstance();
        this.checkDefaultConfig();
        this.createServices();
    }

    private checkPotentialIssues() {
        if (this.configuration.encoding === (GeonamesFormat.KML || GeonamesFormat.RDF || GeonamesFormat.RSS || GeonamesFormat.CSV)) {
            console.info(`You've chosen a default encoding that is not entirely supported by Geonames. Most endpoint will return JSON`);
        }
    }

    private createAxiosInstance() {
        const isSecure = this.configuration.secure || false;
        const instance = axios.create({
            baseURL: isSecure ? Geonames.geonamesInformation.secureUri : Geonames.geonamesInformation.baseUri,
            timeout: 10000
        });

        this.configuration.axiosInstance = instance;
    }

    private checkDefaultConfig() {
        this.configuration.encoding = (this.configuration.encoding) ? this.configuration.encoding : GeonamesFormat.JSON;
        this.configuration.formatted = (this.configuration.formatted) ? this.configuration.formatted : false;
        this.configuration.style = (this.configuration.style) ? this.configuration.style : 'FULL';
    }

    private createServices() {
        this.astergdem = new AsterGDEM(this.configuration);
        this.children = new Children(this.configuration);
        this.cities = new Cities(this.configuration);
        this.contains = new Contains(this.configuration);
        this.countryCode = new CountryCode(this.configuration);
        this.countryInfo = new CountryInfo(this.configuration);
        this.countrySubdivision = new CountrySubdivision(this.configuration);
        this.earthquakes = new Earthquakes(this.configuration);
        this.extendedFindNearby = new ExtendedFindNearby(this.configuration);
        this.findNearby = new FindNearby(this.configuration);
        this.findNearbyPlacename = new FindNearbyPlaceName(this.configuration);
        this.findNearbyPostalCodes = new FindNearbyPostalCodes(this.configuration);
        this.findNearbyStreets = new FindNearbyStreets(this.configuration);
        this.findNearbyStreetsOSM = new FindNearbyStreetsOSM(this.configuration);
        this.findNearbyWeather = new FindNearbyWeather(this.configuration);
        this.findNearbyWikipedia = new FindNearbyWikipedia(this.configuration);
        this.findNearestAddress = new FindNearestAddress(this.configuration);
        this.findNearestIntersection = new FindNearestIntersection(this.configuration);
        this.findNearestIntersectionOSM = new FindNearestIntersectionOSM(this.configuration);
        this.findNearbyPOIsOSM = new FindNearbyPOIsOSM(this.configuration);
        this.geocode = new Geocode(this.configuration);
        this.get = new Get(this.configuration);
        this.globalTopo = new GlobalTopo(this.configuration);
        this.hierarchy = new Hierarchy(this.configuration);
        this.neighbourhood = new Neighbourhood(this.configuration);
        this.neighbours = new Neighbours(this.configuration);
        this.ocean = new Ocean(this.configuration);
        this.postalCodeCountryInfo = new PostalCodeCountryInfo(this.configuration);
        this.postalCodeLookup = new PostalCodeLookup(this.configuration);
        this.postalCodeSearch = new PostalCodeSearch(this.configuration);
        this.rssToGeo = new RssToGeo(this.configuration);
        this.search = new Search(this.configuration);
        this.siblings = new Siblings(this.configuration);
        this.shuttleRadarTopoM1 = new ShuttleRadarTopoM1(this.configuration);
        this.shuttleRadarTopoM3 = new ShuttleRadarTopoM3(this.configuration);
        this.timezone = new Timezone(this.configuration);
        this.weather = new Weather(this.configuration);
        this.weatherICAO = new WeatherICAO(this.configuration);
        this.wikipediaBoundingBox = new WikipediaBoundingBox(this.configuration);
        this.wikipediaSearch = new WikipediaSearch(this.configuration);
    }

    static geonamesInformation = {
        secureUri: 'https://secure.geonames.org/',
        baseUri: 'http://api.geonames.org/'
    }
}