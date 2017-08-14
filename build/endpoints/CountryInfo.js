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
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/operator/map");
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
        var qs = this.buildQueryString(this.config, { country: countryCode });
        return Observable_1.Observable.fromPromise(this.config.axiosInstance.get(this.webservice + "?" + qs))
            .map(function (c) { return c.data; })
            .map(function (c) { return c.geonames; });
    };
    return CountryInfo;
}(GeonamesEndpoint_1.GeonamesEndpoint));
exports.CountryInfo = CountryInfo;
