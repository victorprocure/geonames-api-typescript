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
var models_1 = require("../models");
var Observable_1 = require("rxjs/Observable");
require("rxjs/add/observable/fromPromise");
require("rxjs/add/operator/map");
var Children = (function (_super) {
    __extends(Children, _super);
    function Children(config) {
        var _this = _super.call(this, 'children', [models_1.GeonamesFormat.XML, models_1.GeonamesFormat.JSON]) || this;
        _this.config = config;
        return _this;
    }
    Children.prototype.get = function (geonameId, maxRows) {
        if (maxRows === void 0) { maxRows = 200; }
        if (!this.config.axiosInstance) {
            throw new Error('Unable to call endpoint');
        }
        var queryString = this.buildQueryString(this.config, { geonameId: geonameId, maxRows: maxRows });
        return Observable_1.Observable.fromPromise(this.config.axiosInstance.get(this.webservice + "?" + queryString))
            .map(function (r) { return r.data; })
            .map(function (r) { return r.geonames; });
    };
    return Children;
}(GeonamesEndpoint_1.GeonamesEndpoint));
exports.Children = Children;
