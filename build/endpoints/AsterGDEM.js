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
var GeonamesFormat_1 = require("../models/GeonamesFormat");
var GeonamesEndpoint_1 = require("./GeonamesEndpoint");
var axios_1 = require("axios");
var AsterGDEM = (function (_super) {
    __extends(AsterGDEM, _super);
    function AsterGDEM(config) {
        var _this = _super.call(this, 'astergdem', [GeonamesFormat_1.GeonamesFormat.XML, GeonamesFormat_1.GeonamesFormat.JSON, GeonamesFormat_1.GeonamesFormat.TXT]) || this;
        _this.config = config;
        return _this;
    }
    AsterGDEM.prototype.get = function (latitude, longitude, format) {
        format = format || this.config.encoding;
        format = format === (GeonamesFormat_1.GeonamesFormat.XML || GeonamesFormat_1.GeonamesFormat.JSON || GeonamesFormat_1.GeonamesFormat.TXT) ? format : GeonamesFormat_1.GeonamesFormat.JSON;
        axios_1["default"].get('/');
    };
    return AsterGDEM;
}(GeonamesEndpoint_1.GeonamesEndpoint));
exports.AsterGDEM = AsterGDEM;
