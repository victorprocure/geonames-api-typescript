"use strict";
exports.__esModule = true;
var endpoints_1 = require("./endpoints");
var GeonamesFormat_1 = require("./models/GeonamesFormat");
var axios_1 = require("axios");
var Geonames = (function () {
    function Geonames(configuration) {
        this.configuration = configuration;
        if (!configuration.username) {
            throw new Error('A username must be provided, you may register at: http://www.geonames.org/login');
        }
        this.checkPotentialIssues();
        this.createAxiosInstance();
        this.checkDefaultConfig();
        this.createServices();
    }
    Geonames.prototype.checkPotentialIssues = function () {
        if (this.configuration.encoding === (GeonamesFormat_1.GeonamesFormat.KML || GeonamesFormat_1.GeonamesFormat.RDF || GeonamesFormat_1.GeonamesFormat.RSS || GeonamesFormat_1.GeonamesFormat.CSV)) {
            console.info("You've chosen a default encoding that is not entirely supported by Geonames. Most endpoint will return JSON");
        }
    };
    Geonames.prototype.createAxiosInstance = function () {
        var isSecure = this.configuration.secure || false;
        var instance = axios_1["default"].create({
            baseURL: isSecure ? Geonames.geonamesInformation.secureUri : Geonames.geonamesInformation.baseUri,
            timeout: 10000
        });
        this.configuration.axiosInstance = instance;
    };
    Geonames.prototype.checkDefaultConfig = function () {
        this.configuration.encoding = (this.configuration.encoding) ? this.configuration.encoding : GeonamesFormat_1.GeonamesFormat.JSON;
        this.configuration.formatted = (this.configuration.formatted) ? this.configuration.formatted : false;
        this.configuration.style = (this.configuration.style) ? this.configuration.style : 'FULL';
    };
    Geonames.prototype.createServices = function () {
        this.astergdem = new endpoints_1.AsterGDEM(this.configuration);
        this.children = new endpoints_1.Children(this.configuration);
        this.cities = new endpoints_1.Cities(this.configuration);
        this.contains = new endpoints_1.Contains(this.configuration);
        this.countryCode = new endpoints_1.CountryCode(this.configuration);
        this.countryInfo = new endpoints_1.CountryInfo(this.configuration);
        this.countrySubdivision = new endpoints_1.CountrySubdivision(this.configuration);
        this.earthquakes = new endpoints_1.Earthquakes(this.configuration);
        this.extendedFindNearby = new endpoints_1.ExtendedFindNearby(this.configuration);
        this.findNearby = new endpoints_1.FindNearby(this.configuration);
        this.findNearbyPlacename = new endpoints_1.FindNearbyPlaceName(this.configuration);
        this.findNearbyPostalCodes = new endpoints_1.FindNearbyPostalCodes(this.configuration);
        this.findNearbyStreets = new endpoints_1.FindNearbyStreets(this.configuration);
        this.findNearbyStreetsOSM = new endpoints_1.FindNearbyStreetsOSM(this.configuration);
        this.findNearbyWeather = new endpoints_1.FindNearbyWeather(this.configuration);
        this.findNearbyWikipedia = new endpoints_1.FindNearbyWikipedia(this.configuration);
        this.findNearestAddress = new endpoints_1.FindNearestAddress(this.configuration);
        this.findNearestIntersection = new endpoints_1.FindNearestIntersection(this.configuration);
        this.findNearestIntersectionOSM = new endpoints_1.FindNearestIntersectionOSM(this.configuration);
        this.findNearbyPOIsOSM = new endpoints_1.FindNearbyPOIsOSM(this.configuration);
        this.geocode = new endpoints_1.Geocode(this.configuration);
        this.get = new endpoints_1.Get(this.configuration);
        this.globalTopo = new endpoints_1.GlobalTopo(this.configuration);
        this.hierarchy = new endpoints_1.Hierarchy(this.configuration);
        this.neighbourhood = new endpoints_1.Neighbourhood(this.configuration);
        this.neighbours = new endpoints_1.Neighbours(this.configuration);
        this.ocean = new endpoints_1.Ocean(this.configuration);
        this.postalCodeCountryInfo = new endpoints_1.PostalCodeCountryInfo(this.configuration);
        this.postalCodeLookup = new endpoints_1.PostalCodeLookup(this.configuration);
        this.postalCodeSearch = new endpoints_1.PostalCodeSearch(this.configuration);
        this.rssToGeo = new endpoints_1.RssToGeo(this.configuration);
        this.search = new endpoints_1.Search(this.configuration);
        this.siblings = new endpoints_1.Siblings(this.configuration);
        this.shuttleRadarTopoM1 = new endpoints_1.ShuttleRadarTopoM1(this.configuration);
        this.shuttleRadarTopoM3 = new endpoints_1.ShuttleRadarTopoM3(this.configuration);
        this.timezone = new endpoints_1.Timezone(this.configuration);
        this.weather = new endpoints_1.Weather(this.configuration);
        this.weatherICAO = new endpoints_1.WeatherICAO(this.configuration);
        this.wikipediaBoundingBox = new endpoints_1.WikipediaBoundingBox(this.configuration);
        this.wikipediaSearch = new endpoints_1.WikipediaSearch(this.configuration);
    };
    Geonames.geonamesInformation = {
        secureUri: 'https://secure.geonames.org/',
        baseUri: 'http://api.geonames.org/'
    };
    return Geonames;
}());
exports.Geonames = Geonames;
