"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var GeonamesEndpoint_1 = require("./GeonamesEndpoint");
var GeonamesFormat_1 = require("../models/GeonamesFormat");
var querystring = require("querystring");
var CountryInfo = (function (_super) {
    __extends(CountryInfo, _super);
    function CountryInfo(config) {
        var _this = _super.call(this, 'countryInfo', [GeonamesFormat_1.GeonamesFormat.XML, GeonamesFormat_1.GeonamesFormat.JSON, GeonamesFormat_1.GeonamesFormat.CSV]) || this;
        _this.config = config;
        return _this;
    }
    CountryInfo.prototype.get = function (countryCode) {
        if (!this.config.axiosInstance) {
            throw new Error('Unable to call endpoint');
        }
        var qs = querystring.stringify({
            country: countryCode,
            formatted: this.config.formatted || false,
            style: this.config.style,
            lang: this.config.lang,
            username: this.config.username,
            type: (this.config.encoding) ? GeonamesFormat_1.GeonamesFormat[this.config.encoding] : 'JSON'
        });
        return this.config.axiosInstance.get(this.webservice + "?" + qs)
            .then(function (c) {
            console.log(JSON.stringify(c.data));
        });
    };
    return CountryInfo;
}(GeonamesEndpoint_1.GeonamesEndpoint));
exports.CountryInfo = CountryInfo;
