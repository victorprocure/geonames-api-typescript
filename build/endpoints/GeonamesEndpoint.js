"use strict";
exports.__esModule = true;
var Url_1 = require("../utils/Url");
var GeonamesEndpoint = (function () {
    function GeonamesEndpoint(webservice, availableFormats, includedCountries) {
        this.webservice = webservice;
        this.availableFormats = availableFormats;
        this.includedCountries = includedCountries;
        this.buildQueryString = function (config, obj) { return Url_1.buildDefaultQueryString(config, obj); };
    }
    return GeonamesEndpoint;
}());
exports.GeonamesEndpoint = GeonamesEndpoint;
