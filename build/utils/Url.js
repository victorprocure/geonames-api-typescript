"use strict";
exports.__esModule = true;
var querystring = require("querystring");
var models_1 = require("../models");
exports.buildDefaultQueryString = function (config, moreParams) {
    var defaultQuery = {
        formatted: config.formatted || false,
        style: config.style,
        lang: config.lang,
        username: config.username,
        type: (config.encoding) ? models_1.GeonamesFormat[config.encoding] : 'JSON'
    };
    var fullQuery = Object.assign({}, defaultQuery, moreParams);
    return querystring.stringify(fullQuery);
};
