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
var Neighbourhood = (function (_super) {
    __extends(Neighbourhood, _super);
    function Neighbourhood(config) {
        var _this = _super.call(this, 'neighbourhood', [GeonamesFormat_1.GeonamesFormat.XML, GeonamesFormat_1.GeonamesFormat.JSON], ['US']) || this;
        _this.config = config;
        return _this;
    }
    Neighbourhood.prototype.get = function () {
    };
    return Neighbourhood;
}(GeonamesEndpoint_1.GeonamesEndpoint));
exports.Neighbourhood = Neighbourhood;
