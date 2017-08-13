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
define("models/GeonamesFormat", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GeonamesFormat;
    (function (GeonamesFormat) {
        GeonamesFormat[GeonamesFormat["XML"] = 0] = "XML";
        GeonamesFormat[GeonamesFormat["JSON"] = 1] = "JSON";
        GeonamesFormat[GeonamesFormat["RDF"] = 2] = "RDF";
        GeonamesFormat[GeonamesFormat["CSV"] = 3] = "CSV";
        GeonamesFormat[GeonamesFormat["TXT"] = 4] = "TXT";
        GeonamesFormat[GeonamesFormat["RSS"] = 5] = "RSS";
        GeonamesFormat[GeonamesFormat["KML"] = 6] = "KML";
    })(GeonamesFormat = exports.GeonamesFormat || (exports.GeonamesFormat = {}));
});
define("models/GeonamesConfig", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
});
define("endpoints/GeonamesEndpoint", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    var GeonamesEndpoint = (function () {
        function GeonamesEndpoint(webservice, availableFormats, includedCountries) {
            this.webservice = webservice;
            this.availableFormats = availableFormats;
            this.includedCountries = includedCountries;
        }
        return GeonamesEndpoint;
    }());
    exports.GeonamesEndpoint = GeonamesEndpoint;
});
define("endpoints/AsterGDEM", ["require", "exports", "models/GeonamesFormat", "endpoints/GeonamesEndpoint", "axios"], function (require, exports, GeonamesFormat_1, GeonamesEndpoint_1, axios_1) {
    "use strict";
    exports.__esModule = true;
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
});
define("endpoints/Children", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_2, GeonamesFormat_2) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_2.GeonamesFormat.XML, GeonamesFormat_2.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_2.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Cities", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_3, GeonamesFormat_3) {
    "use strict";
    exports.__esModule = true;
    var Cities = (function (_super) {
        __extends(Cities, _super);
        function Cities(config) {
            var _this = _super.call(this, 'cities', [GeonamesFormat_3.GeonamesFormat.XML, GeonamesFormat_3.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Cities.prototype.get = function () {
        };
        return Cities;
    }(GeonamesEndpoint_3.GeonamesEndpoint));
    exports.Cities = Cities;
});
define("endpoints/Contains", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_4, GeonamesFormat_4) {
    "use strict";
    exports.__esModule = true;
    var Contains = (function (_super) {
        __extends(Contains, _super);
        function Contains(config) {
            var _this = _super.call(this, 'contains', [GeonamesFormat_4.GeonamesFormat.XML, GeonamesFormat_4.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Contains.prototype.get = function () {
        };
        return Contains;
    }(GeonamesEndpoint_4.GeonamesEndpoint));
    exports.Contains = Contains;
});
define("endpoints/CountryCode", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_5, GeonamesFormat_5) {
    "use strict";
    exports.__esModule = true;
    var CountryCode = (function (_super) {
        __extends(CountryCode, _super);
        function CountryCode(config) {
            var _this = _super.call(this, 'countryCode', [GeonamesFormat_5.GeonamesFormat.XML, GeonamesFormat_5.GeonamesFormat.JSON, GeonamesFormat_5.GeonamesFormat.TXT]) || this;
            _this.config = config;
            return _this;
        }
        CountryCode.prototype.get = function () {
        };
        return CountryCode;
    }(GeonamesEndpoint_5.GeonamesEndpoint));
    exports.CountryCode = CountryCode;
});
define("endpoints/CountryInfo", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_6, GeonamesFormat_6) {
    "use strict";
    exports.__esModule = true;
    var CountryInfo = (function (_super) {
        __extends(CountryInfo, _super);
        function CountryInfo(config) {
            var _this = _super.call(this, 'countryInfo', [GeonamesFormat_6.GeonamesFormat.XML, GeonamesFormat_6.GeonamesFormat.JSON, GeonamesFormat_6.GeonamesFormat.CSV]) || this;
            _this.config = config;
            return _this;
        }
        CountryInfo.prototype.get = function () {
        };
        return CountryInfo;
    }(GeonamesEndpoint_6.GeonamesEndpoint));
    exports.CountryInfo = CountryInfo;
});
define("endpoints/CountrySubdivision", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_7, GeonamesFormat_7) {
    "use strict";
    exports.__esModule = true;
    var CountrySubdivision = (function (_super) {
        __extends(CountrySubdivision, _super);
        function CountrySubdivision(config) {
            var _this = _super.call(this, 'countrySubdivision', [GeonamesFormat_7.GeonamesFormat.XML, GeonamesFormat_7.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        CountrySubdivision.prototype.get = function () {
        };
        return CountrySubdivision;
    }(GeonamesEndpoint_7.GeonamesEndpoint));
    exports.CountrySubdivision = CountrySubdivision;
});
define("endpoints/Earthquakes", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_8, GeonamesFormat_8) {
    "use strict";
    exports.__esModule = true;
    var Earthquakes = (function (_super) {
        __extends(Earthquakes, _super);
        function Earthquakes(config) {
            var _this = _super.call(this, 'earthquakes', [GeonamesFormat_8.GeonamesFormat.XML, GeonamesFormat_8.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Earthquakes.prototype.get = function () {
        };
        return Earthquakes;
    }(GeonamesEndpoint_8.GeonamesEndpoint));
    exports.Earthquakes = Earthquakes;
});
define("endpoints/ExtendedFindNearby", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_9, GeonamesFormat_9) {
    "use strict";
    exports.__esModule = true;
    var ExtendedFindNearby = (function (_super) {
        __extends(ExtendedFindNearby, _super);
        function ExtendedFindNearby(config) {
            var _this = _super.call(this, 'extendedFindNearby', [GeonamesFormat_9.GeonamesFormat.XML]) || this;
            _this.config = config;
            return _this;
        }
        ExtendedFindNearby.prototype.get = function () {
        };
        return ExtendedFindNearby;
    }(GeonamesEndpoint_9.GeonamesEndpoint));
    exports.ExtendedFindNearby = ExtendedFindNearby;
});
define("endpoints/FindNearby", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_10, GeonamesFormat_10) {
    "use strict";
    exports.__esModule = true;
    var FindNearby = (function (_super) {
        __extends(FindNearby, _super);
        function FindNearby(config) {
            var _this = _super.call(this, 'findNearby', [GeonamesFormat_10.GeonamesFormat.XML, GeonamesFormat_10.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        FindNearby.prototype.get = function () {
        };
        return FindNearby;
    }(GeonamesEndpoint_10.GeonamesEndpoint));
    exports.FindNearby = FindNearby;
});
define("endpoints/FindNearbyPlaceName", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_11, GeonamesFormat_11) {
    "use strict";
    exports.__esModule = true;
    var FindNearbyPlaceName = (function (_super) {
        __extends(FindNearbyPlaceName, _super);
        function FindNearbyPlaceName(config) {
            var _this = _super.call(this, 'findNearbyPlaceName', [GeonamesFormat_11.GeonamesFormat.XML, GeonamesFormat_11.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        FindNearbyPlaceName.prototype.get = function () {
        };
        return FindNearbyPlaceName;
    }(GeonamesEndpoint_11.GeonamesEndpoint));
    exports.FindNearbyPlaceName = FindNearbyPlaceName;
});
define("endpoints/FindNearbyPostalCodes", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_12, GeonamesFormat_12) {
    "use strict";
    exports.__esModule = true;
    var FindNearbyPostalCodes = (function (_super) {
        __extends(FindNearbyPostalCodes, _super);
        function FindNearbyPostalCodes(config) {
            var _this = _super.call(this, 'findNearbyPostalCodes', [GeonamesFormat_12.GeonamesFormat.XML, GeonamesFormat_12.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        FindNearbyPostalCodes.prototype.get = function () {
        };
        return FindNearbyPostalCodes;
    }(GeonamesEndpoint_12.GeonamesEndpoint));
    exports.FindNearbyPostalCodes = FindNearbyPostalCodes;
});
define("endpoints/FindNearbyStreets", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_13, GeonamesFormat_13) {
    "use strict";
    exports.__esModule = true;
    var FindNearbyStreets = (function (_super) {
        __extends(FindNearbyStreets, _super);
        function FindNearbyStreets(config) {
            var _this = _super.call(this, 'findNearbyStreets', [GeonamesFormat_13.GeonamesFormat.XML, GeonamesFormat_13.GeonamesFormat.JSON], ['US']) || this;
            _this.config = config;
            return _this;
        }
        FindNearbyStreets.prototype.get = function () {
        };
        return FindNearbyStreets;
    }(GeonamesEndpoint_13.GeonamesEndpoint));
    exports.FindNearbyStreets = FindNearbyStreets;
});
define("endpoints/FindNearbyStreetsOSM", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_14, GeonamesFormat_14) {
    "use strict";
    exports.__esModule = true;
    var FindNearbyStreetsOSM = (function (_super) {
        __extends(FindNearbyStreetsOSM, _super);
        function FindNearbyStreetsOSM(config) {
            var _this = _super.call(this, 'findNearbyStreetsOSM', [GeonamesFormat_14.GeonamesFormat.XML, GeonamesFormat_14.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        FindNearbyStreetsOSM.prototype.get = function () {
        };
        return FindNearbyStreetsOSM;
    }(GeonamesEndpoint_14.GeonamesEndpoint));
    exports.FindNearbyStreetsOSM = FindNearbyStreetsOSM;
});
define("endpoints/FindNearbyWeather", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_15, GeonamesFormat_15) {
    "use strict";
    exports.__esModule = true;
    var FindNearbyWeather = (function (_super) {
        __extends(FindNearbyWeather, _super);
        function FindNearbyWeather(config) {
            var _this = _super.call(this, 'findNearbyWeather', [GeonamesFormat_15.GeonamesFormat.XML, GeonamesFormat_15.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        FindNearbyWeather.prototype.get = function () {
        };
        return FindNearbyWeather;
    }(GeonamesEndpoint_15.GeonamesEndpoint));
    exports.FindNearbyWeather = FindNearbyWeather;
});
define("endpoints/FindNearbyWikipedia", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_16, GeonamesFormat_16) {
    "use strict";
    exports.__esModule = true;
    var FindNearbyWikipedia = (function (_super) {
        __extends(FindNearbyWikipedia, _super);
        function FindNearbyWikipedia(config) {
            var _this = _super.call(this, 'findNearbyWikipedia', [GeonamesFormat_16.GeonamesFormat.XML, GeonamesFormat_16.GeonamesFormat.JSON, GeonamesFormat_16.GeonamesFormat.RSS]) || this;
            _this.config = config;
            return _this;
        }
        FindNearbyWikipedia.prototype.get = function () {
        };
        return FindNearbyWikipedia;
    }(GeonamesEndpoint_16.GeonamesEndpoint));
    exports.FindNearbyWikipedia = FindNearbyWikipedia;
});
define("endpoints/FindNearestAddress", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_17, GeonamesFormat_17) {
    "use strict";
    exports.__esModule = true;
    var FindNearestAddress = (function (_super) {
        __extends(FindNearestAddress, _super);
        function FindNearestAddress(config) {
            var _this = _super.call(this, 'findNearestAddress', [GeonamesFormat_17.GeonamesFormat.XML, GeonamesFormat_17.GeonamesFormat.JSON], ['US']) || this;
            _this.config = config;
            return _this;
        }
        FindNearestAddress.prototype.get = function () {
        };
        return FindNearestAddress;
    }(GeonamesEndpoint_17.GeonamesEndpoint));
    exports.FindNearestAddress = FindNearestAddress;
});
define("endpoints/FindNearestIntersection", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_18, GeonamesFormat_18) {
    "use strict";
    exports.__esModule = true;
    var FindNearestIntersection = (function (_super) {
        __extends(FindNearestIntersection, _super);
        function FindNearestIntersection(config) {
            var _this = _super.call(this, 'findNearestIntersection', [GeonamesFormat_18.GeonamesFormat.XML, GeonamesFormat_18.GeonamesFormat.JSON], ['US']) || this;
            _this.config = config;
            return _this;
        }
        FindNearestIntersection.prototype.get = function () {
        };
        return FindNearestIntersection;
    }(GeonamesEndpoint_18.GeonamesEndpoint));
    exports.FindNearestIntersection = FindNearestIntersection;
});
define("endpoints/FindNearestIntersectionOSM", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_19, GeonamesFormat_19) {
    "use strict";
    exports.__esModule = true;
    var FindNearestIntersectionOSM = (function (_super) {
        __extends(FindNearestIntersectionOSM, _super);
        function FindNearestIntersectionOSM(config) {
            var _this = _super.call(this, 'findNearestIntersectionOSM', [GeonamesFormat_19.GeonamesFormat.XML, GeonamesFormat_19.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        FindNearestIntersectionOSM.prototype.get = function () {
        };
        return FindNearestIntersectionOSM;
    }(GeonamesEndpoint_19.GeonamesEndpoint));
    exports.FindNearestIntersectionOSM = FindNearestIntersectionOSM;
});
define("endpoints/FindNearbyPOIsOSM", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_20, GeonamesFormat_20) {
    "use strict";
    exports.__esModule = true;
    var FindNearbyPOIsOSM = (function (_super) {
        __extends(FindNearbyPOIsOSM, _super);
        function FindNearbyPOIsOSM(config) {
            var _this = _super.call(this, 'findNearbyPOIsOSM', [GeonamesFormat_20.GeonamesFormat.XML, GeonamesFormat_20.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        FindNearbyPOIsOSM.prototype.get = function () {
        };
        return FindNearbyPOIsOSM;
    }(GeonamesEndpoint_20.GeonamesEndpoint));
    exports.FindNearbyPOIsOSM = FindNearbyPOIsOSM;
});
define("endpoints/Geocode", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_21, GeonamesFormat_21) {
    "use strict";
    exports.__esModule = true;
    var Geocode = (function (_super) {
        __extends(Geocode, _super);
        function Geocode(config) {
            var _this = _super.call(this, 'geocode', [GeonamesFormat_21.GeonamesFormat.XML, GeonamesFormat_21.GeonamesFormat.JSON], ['US']) || this;
            _this.config = config;
            return _this;
        }
        Geocode.prototype.get = function () {
        };
        return Geocode;
    }(GeonamesEndpoint_21.GeonamesEndpoint));
    exports.Geocode = Geocode;
});
define("endpoints/Get", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_22, GeonamesFormat_22) {
    "use strict";
    exports.__esModule = true;
    var Get = (function (_super) {
        __extends(Get, _super);
        function Get(config) {
            var _this = _super.call(this, 'get', [GeonamesFormat_22.GeonamesFormat.XML, GeonamesFormat_22.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Get.prototype.get = function () {
        };
        return Get;
    }(GeonamesEndpoint_22.GeonamesEndpoint));
    exports.Get = Get;
});
define("endpoints/GlobalTopo", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_23, GeonamesFormat_23) {
    "use strict";
    exports.__esModule = true;
    var GlobalTopo = (function (_super) {
        __extends(GlobalTopo, _super);
        function GlobalTopo(config) {
            var _this = _super.call(this, 'gtopo30', [GeonamesFormat_23.GeonamesFormat.XML, GeonamesFormat_23.GeonamesFormat.JSON, GeonamesFormat_23.GeonamesFormat.TXT]) || this;
            _this.config = config;
            return _this;
        }
        GlobalTopo.prototype.get = function () {
        };
        return GlobalTopo;
    }(GeonamesEndpoint_23.GeonamesEndpoint));
    exports.GlobalTopo = GlobalTopo;
});
define("endpoints/Hierarchy", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_24, GeonamesFormat_24) {
    "use strict";
    exports.__esModule = true;
    var Hierarchy = (function (_super) {
        __extends(Hierarchy, _super);
        function Hierarchy(config) {
            var _this = _super.call(this, 'hierarchy', [GeonamesFormat_24.GeonamesFormat.XML, GeonamesFormat_24.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Hierarchy.prototype.get = function () {
        };
        return Hierarchy;
    }(GeonamesEndpoint_24.GeonamesEndpoint));
    exports.Hierarchy = Hierarchy;
});
define("endpoints/Neighbourhood", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_25, GeonamesFormat_25) {
    "use strict";
    exports.__esModule = true;
    var Neighbourhood = (function (_super) {
        __extends(Neighbourhood, _super);
        function Neighbourhood(config) {
            var _this = _super.call(this, 'neighbourhood', [GeonamesFormat_25.GeonamesFormat.XML, GeonamesFormat_25.GeonamesFormat.JSON], ['US']) || this;
            _this.config = config;
            return _this;
        }
        Neighbourhood.prototype.get = function () {
        };
        return Neighbourhood;
    }(GeonamesEndpoint_25.GeonamesEndpoint));
    exports.Neighbourhood = Neighbourhood;
});
define("endpoints/Neighbours", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_26, GeonamesFormat_26) {
    "use strict";
    exports.__esModule = true;
    var Neighbours = (function (_super) {
        __extends(Neighbours, _super);
        function Neighbours(config) {
            var _this = _super.call(this, 'neighbours', [GeonamesFormat_26.GeonamesFormat.XML, GeonamesFormat_26.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Neighbours.prototype.get = function () {
        };
        return Neighbours;
    }(GeonamesEndpoint_26.GeonamesEndpoint));
    exports.Neighbours = Neighbours;
});
define("endpoints/Ocean", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_27, GeonamesFormat_27) {
    "use strict";
    exports.__esModule = true;
    var Ocean = (function (_super) {
        __extends(Ocean, _super);
        function Ocean(config) {
            var _this = _super.call(this, 'ocean', [GeonamesFormat_27.GeonamesFormat.XML, GeonamesFormat_27.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Ocean.prototype.get = function () {
        };
        return Ocean;
    }(GeonamesEndpoint_27.GeonamesEndpoint));
    exports.Ocean = Ocean;
});
define("endpoints/PostalCodeCountryInfo", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_28, GeonamesFormat_28) {
    "use strict";
    exports.__esModule = true;
    var PostalCodeCountryInfo = (function (_super) {
        __extends(PostalCodeCountryInfo, _super);
        function PostalCodeCountryInfo(config) {
            var _this = _super.call(this, 'postalCodeCountryInfo', [GeonamesFormat_28.GeonamesFormat.XML, GeonamesFormat_28.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        PostalCodeCountryInfo.prototype.get = function () {
        };
        return PostalCodeCountryInfo;
    }(GeonamesEndpoint_28.GeonamesEndpoint));
    exports.PostalCodeCountryInfo = PostalCodeCountryInfo;
});
define("endpoints/PostalCodeLookup", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_29, GeonamesFormat_29) {
    "use strict";
    exports.__esModule = true;
    var PostalCodeLookup = (function (_super) {
        __extends(PostalCodeLookup, _super);
        function PostalCodeLookup(config) {
            var _this = _super.call(this, 'postalCodeLookup', [GeonamesFormat_29.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        PostalCodeLookup.prototype.get = function () {
        };
        return PostalCodeLookup;
    }(GeonamesEndpoint_29.GeonamesEndpoint));
    exports.PostalCodeLookup = PostalCodeLookup;
});
define("endpoints/PostalCodeSearch", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_30, GeonamesFormat_30) {
    "use strict";
    exports.__esModule = true;
    var PostalCodeSearch = (function (_super) {
        __extends(PostalCodeSearch, _super);
        function PostalCodeSearch(config) {
            var _this = _super.call(this, 'postalCodeSearch', [GeonamesFormat_30.GeonamesFormat.XML, GeonamesFormat_30.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        PostalCodeSearch.prototype.get = function () {
        };
        return PostalCodeSearch;
    }(GeonamesEndpoint_30.GeonamesEndpoint));
    exports.PostalCodeSearch = PostalCodeSearch;
});
define("endpoints/RssToGeo", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_31, GeonamesFormat_31) {
    "use strict";
    exports.__esModule = true;
    var RssToGeo = (function (_super) {
        __extends(RssToGeo, _super);
        function RssToGeo(config) {
            var _this = _super.call(this, 'rssToGeo', [GeonamesFormat_31.GeonamesFormat.XML, GeonamesFormat_31.GeonamesFormat.KML]) || this;
            _this.config = config;
            return _this;
        }
        RssToGeo.prototype.get = function () {
        };
        return RssToGeo;
    }(GeonamesEndpoint_31.GeonamesEndpoint));
    exports.RssToGeo = RssToGeo;
});
define("endpoints/Search", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_32, GeonamesFormat_32) {
    "use strict";
    exports.__esModule = true;
    var Search = (function (_super) {
        __extends(Search, _super);
        function Search(config) {
            var _this = _super.call(this, 'search', [GeonamesFormat_32.GeonamesFormat.XML, GeonamesFormat_32.GeonamesFormat.JSON, GeonamesFormat_32.GeonamesFormat.RDF]) || this;
            _this.config = config;
            return _this;
        }
        Search.prototype.get = function () {
        };
        return Search;
    }(GeonamesEndpoint_32.GeonamesEndpoint));
    exports.Search = Search;
});
define("endpoints/Siblings", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_33, GeonamesFormat_33) {
    "use strict";
    exports.__esModule = true;
    var Siblings = (function (_super) {
        __extends(Siblings, _super);
        function Siblings(config) {
            var _this = _super.call(this, 'siblings', [GeonamesFormat_33.GeonamesFormat.XML, GeonamesFormat_33.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Siblings.prototype.get = function () {
        };
        return Siblings;
    }(GeonamesEndpoint_33.GeonamesEndpoint));
    exports.Siblings = Siblings;
});
define("endpoints/ShuttleRadarTopoM1", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_34, GeonamesFormat_34) {
    "use strict";
    exports.__esModule = true;
    var ShuttleRadarTopoM1 = (function (_super) {
        __extends(ShuttleRadarTopoM1, _super);
        function ShuttleRadarTopoM1(config) {
            var _this = _super.call(this, 'srtm1', [GeonamesFormat_34.GeonamesFormat.XML, GeonamesFormat_34.GeonamesFormat.JSON, GeonamesFormat_34.GeonamesFormat.TXT]) || this;
            _this.config = config;
            return _this;
        }
        ShuttleRadarTopoM1.prototype.get = function () {
        };
        return ShuttleRadarTopoM1;
    }(GeonamesEndpoint_34.GeonamesEndpoint));
    exports.ShuttleRadarTopoM1 = ShuttleRadarTopoM1;
});
define("endpoints/ShuttleRadarTopoM3", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_35, GeonamesFormat_35) {
    "use strict";
    exports.__esModule = true;
    var ShuttleRadarTopoM3 = (function (_super) {
        __extends(ShuttleRadarTopoM3, _super);
        function ShuttleRadarTopoM3(config) {
            var _this = _super.call(this, 'srtm3', [GeonamesFormat_35.GeonamesFormat.XML, GeonamesFormat_35.GeonamesFormat.JSON, GeonamesFormat_35.GeonamesFormat.TXT]) || this;
            _this.config = config;
            return _this;
        }
        ShuttleRadarTopoM3.prototype.get = function () {
        };
        return ShuttleRadarTopoM3;
    }(GeonamesEndpoint_35.GeonamesEndpoint));
    exports.ShuttleRadarTopoM3 = ShuttleRadarTopoM3;
});
define("endpoints/Timezone", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_36, GeonamesFormat_36) {
    "use strict";
    exports.__esModule = true;
    var Timezone = (function (_super) {
        __extends(Timezone, _super);
        function Timezone(config) {
            var _this = _super.call(this, 'timezone', [GeonamesFormat_36.GeonamesFormat.XML, GeonamesFormat_36.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Timezone.prototype.get = function () {
        };
        return Timezone;
    }(GeonamesEndpoint_36.GeonamesEndpoint));
    exports.Timezone = Timezone;
});
define("endpoints/Weather", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_37, GeonamesFormat_37) {
    "use strict";
    exports.__esModule = true;
    var Weather = (function (_super) {
        __extends(Weather, _super);
        function Weather(config) {
            var _this = _super.call(this, 'weather', [GeonamesFormat_37.GeonamesFormat.XML, GeonamesFormat_37.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Weather.prototype.get = function () {
        };
        return Weather;
    }(GeonamesEndpoint_37.GeonamesEndpoint));
    exports.Weather = Weather;
});
define("endpoints/WeatherICAO", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_38, GeonamesFormat_38) {
    "use strict";
    exports.__esModule = true;
    var WeatherICAO = (function (_super) {
        __extends(WeatherICAO, _super);
        function WeatherICAO(config) {
            var _this = _super.call(this, 'weatherIcao', [GeonamesFormat_38.GeonamesFormat.XML, GeonamesFormat_38.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        WeatherICAO.prototype.get = function () {
        };
        return WeatherICAO;
    }(GeonamesEndpoint_38.GeonamesEndpoint));
    exports.WeatherICAO = WeatherICAO;
});
define("endpoints/WikipediaBoundingBox", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_39, GeonamesFormat_39) {
    "use strict";
    exports.__esModule = true;
    var WikipediaBoundingBox = (function (_super) {
        __extends(WikipediaBoundingBox, _super);
        function WikipediaBoundingBox(config) {
            var _this = _super.call(this, 'wikipediaBoundingBox', [GeonamesFormat_39.GeonamesFormat.XML, GeonamesFormat_39.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        WikipediaBoundingBox.prototype.get = function () {
        };
        return WikipediaBoundingBox;
    }(GeonamesEndpoint_39.GeonamesEndpoint));
    exports.WikipediaBoundingBox = WikipediaBoundingBox;
});
define("endpoints/WikipediaSearch", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_40, GeonamesFormat_40) {
    "use strict";
    exports.__esModule = true;
    var WikipediaSearch = (function (_super) {
        __extends(WikipediaSearch, _super);
        function WikipediaSearch(config) {
            var _this = _super.call(this, 'wikipediaSearch', [GeonamesFormat_40.GeonamesFormat.XML, GeonamesFormat_40.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        WikipediaSearch.prototype.get = function () {
        };
        return WikipediaSearch;
    }(GeonamesEndpoint_40.GeonamesEndpoint));
    exports.WikipediaSearch = WikipediaSearch;
});
define("endpoints/index", ["require", "exports", "endpoints/AsterGDEM", "endpoints/Children", "endpoints/Cities", "endpoints/Contains", "endpoints/CountryCode", "endpoints/CountryInfo", "endpoints/CountrySubdivision", "endpoints/Earthquakes", "endpoints/ExtendedFindNearby", "endpoints/FindNearby", "endpoints/FindNearbyPlaceName", "endpoints/FindNearbyPostalCodes", "endpoints/FindNearbyStreets", "endpoints/FindNearbyStreetsOSM", "endpoints/FindNearbyWeather", "endpoints/FindNearbyWikipedia", "endpoints/FindNearestAddress", "endpoints/FindNearestIntersection", "endpoints/FindNearestIntersectionOSM", "endpoints/FindNearbyPOIsOSM", "endpoints/Geocode", "endpoints/Get", "endpoints/GlobalTopo", "endpoints/Hierarchy", "endpoints/Neighbourhood", "endpoints/Neighbours", "endpoints/Ocean", "endpoints/PostalCodeCountryInfo", "endpoints/PostalCodeLookup", "endpoints/PostalCodeSearch", "endpoints/RssToGeo", "endpoints/Search", "endpoints/Siblings", "endpoints/ShuttleRadarTopoM1", "endpoints/ShuttleRadarTopoM3", "endpoints/Timezone", "endpoints/Weather", "endpoints/WeatherICAO", "endpoints/WikipediaBoundingBox", "endpoints/WikipediaSearch"], function (require, exports, AsterGDEM_1, Children_1, Cities_1, Contains_1, CountryCode_1, CountryInfo_1, CountrySubdivision_1, Earthquakes_1, ExtendedFindNearby_1, FindNearby_1, FindNearbyPlaceName_1, FindNearbyPostalCodes_1, FindNearbyStreets_1, FindNearbyStreetsOSM_1, FindNearbyWeather_1, FindNearbyWikipedia_1, FindNearestAddress_1, FindNearestIntersection_1, FindNearestIntersectionOSM_1, FindNearbyPOIsOSM_1, Geocode_1, Get_1, GlobalTopo_1, Hierarchy_1, Neighbourhood_1, Neighbours_1, Ocean_1, PostalCodeCountryInfo_1, PostalCodeLookup_1, PostalCodeSearch_1, RssToGeo_1, Search_1, Siblings_1, ShuttleRadarTopoM1_1, ShuttleRadarTopoM3_1, Timezone_1, Weather_1, WeatherICAO_1, WikipediaBoundingBox_1, WikipediaSearch_1) {
    "use strict";
    exports.__esModule = true;
    exports.AsterGDEM = AsterGDEM_1.AsterGDEM;
    exports.Children = Children_1.Children;
    exports.Cities = Cities_1.Cities;
    exports.Contains = Contains_1.Contains;
    exports.CountryCode = CountryCode_1.CountryCode;
    exports.CountryInfo = CountryInfo_1.CountryInfo;
    exports.CountrySubdivision = CountrySubdivision_1.CountrySubdivision;
    exports.Earthquakes = Earthquakes_1.Earthquakes;
    exports.ExtendedFindNearby = ExtendedFindNearby_1.ExtendedFindNearby;
    exports.FindNearby = FindNearby_1.FindNearby;
    exports.FindNearbyPlaceName = FindNearbyPlaceName_1.FindNearbyPlaceName;
    exports.FindNearbyPostalCodes = FindNearbyPostalCodes_1.FindNearbyPostalCodes;
    exports.FindNearbyStreets = FindNearbyStreets_1.FindNearbyStreets;
    exports.FindNearbyStreetsOSM = FindNearbyStreetsOSM_1.FindNearbyStreetsOSM;
    exports.FindNearbyWeather = FindNearbyWeather_1.FindNearbyWeather;
    exports.FindNearbyWikipedia = FindNearbyWikipedia_1.FindNearbyWikipedia;
    exports.FindNearestAddress = FindNearestAddress_1.FindNearestAddress;
    exports.FindNearestIntersection = FindNearestIntersection_1.FindNearestIntersection;
    exports.FindNearestIntersectionOSM = FindNearestIntersectionOSM_1.FindNearestIntersectionOSM;
    exports.FindNearbyPOIsOSM = FindNearbyPOIsOSM_1.FindNearbyPOIsOSM;
    exports.Geocode = Geocode_1.Geocode;
    exports.Get = Get_1.Get;
    exports.GlobalTopo = GlobalTopo_1.GlobalTopo;
    exports.Hierarchy = Hierarchy_1.Hierarchy;
    exports.Neighbourhood = Neighbourhood_1.Neighbourhood;
    exports.Neighbours = Neighbours_1.Neighbours;
    exports.Ocean = Ocean_1.Ocean;
    exports.PostalCodeCountryInfo = PostalCodeCountryInfo_1.PostalCodeCountryInfo;
    exports.PostalCodeLookup = PostalCodeLookup_1.PostalCodeLookup;
    exports.PostalCodeSearch = PostalCodeSearch_1.PostalCodeSearch;
    exports.RssToGeo = RssToGeo_1.RssToGeo;
    exports.Search = Search_1.Search;
    exports.Siblings = Siblings_1.Siblings;
    exports.ShuttleRadarTopoM1 = ShuttleRadarTopoM1_1.ShuttleRadarTopoM1;
    exports.ShuttleRadarTopoM3 = ShuttleRadarTopoM3_1.ShuttleRadarTopoM3;
    exports.Timezone = Timezone_1.Timezone;
    exports.Weather = Weather_1.Weather;
    exports.WeatherICAO = WeatherICAO_1.WeatherICAO;
    exports.WikipediaBoundingBox = WikipediaBoundingBox_1.WikipediaBoundingBox;
    exports.WikipediaSearch = WikipediaSearch_1.WikipediaSearch;
});
define("Geonames", ["require", "exports", "endpoints/index", "models/GeonamesFormat", "axios"], function (require, exports, endpoints_1, GeonamesFormat_41, axios_2) {
    "use strict";
    exports.__esModule = true;
    var Geonames = (function () {
        function Geonames(configuration) {
            this.configuration = configuration;
            if (!configuration.username) {
                throw new Error('A username must be provided, you may register at: http://www.geonames.org/login');
            }
            this.checkPotentialIssues();
            this.createAxiosInstance();
            this.createServices();
        }
        Geonames.prototype.checkPotentialIssues = function () {
            if (this.configuration.encoding === (GeonamesFormat_41.GeonamesFormat.KML || GeonamesFormat_41.GeonamesFormat.RDF || GeonamesFormat_41.GeonamesFormat.RSS || GeonamesFormat_41.GeonamesFormat.CSV)) {
                console.info("You've chosen a default encoding that is not entirely supported by Geonames. Most endpoint will return JSON");
            }
        };
        Geonames.prototype.createAxiosInstance = function () {
            var isSecure = this.configuration.secure || false;
            var instance = axios_2["default"].create({
                baseURL: isSecure ? Geonames.geonamesInformation.secureUri : Geonames.geonamesInformation.baseUri,
                timeout: 10000
            });
            this.configuration.axiosInstance = instance;
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
});
define("endpoints/Children.10", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_41, GeonamesFormat_42) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_42.GeonamesFormat.XML, GeonamesFormat_42.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_41.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.11", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_42, GeonamesFormat_43) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_43.GeonamesFormat.XML, GeonamesFormat_43.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_42.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.12", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_43, GeonamesFormat_44) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_44.GeonamesFormat.XML, GeonamesFormat_44.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_43.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.13", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_44, GeonamesFormat_45) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_45.GeonamesFormat.XML, GeonamesFormat_45.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_44.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.14", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_45, GeonamesFormat_46) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_46.GeonamesFormat.XML, GeonamesFormat_46.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_45.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.15", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_46, GeonamesFormat_47) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_47.GeonamesFormat.XML, GeonamesFormat_47.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_46.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.16", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_47, GeonamesFormat_48) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_48.GeonamesFormat.XML, GeonamesFormat_48.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_47.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.17", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_48, GeonamesFormat_49) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_49.GeonamesFormat.XML, GeonamesFormat_49.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_48.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.18", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_49, GeonamesFormat_50) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_50.GeonamesFormat.XML, GeonamesFormat_50.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_49.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.19", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_50, GeonamesFormat_51) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_51.GeonamesFormat.XML, GeonamesFormat_51.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_50.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.2", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_51, GeonamesFormat_52) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_52.GeonamesFormat.XML, GeonamesFormat_52.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_51.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.20", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_52, GeonamesFormat_53) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_53.GeonamesFormat.XML, GeonamesFormat_53.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_52.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.21", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_53, GeonamesFormat_54) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_54.GeonamesFormat.XML, GeonamesFormat_54.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_53.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.22", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_54, GeonamesFormat_55) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_55.GeonamesFormat.XML, GeonamesFormat_55.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_54.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.23", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_55, GeonamesFormat_56) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_56.GeonamesFormat.XML, GeonamesFormat_56.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_55.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.24", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_56, GeonamesFormat_57) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_57.GeonamesFormat.XML, GeonamesFormat_57.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_56.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.25", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_57, GeonamesFormat_58) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_58.GeonamesFormat.XML, GeonamesFormat_58.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_57.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.26", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_58, GeonamesFormat_59) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_59.GeonamesFormat.XML, GeonamesFormat_59.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_58.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.27", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_59, GeonamesFormat_60) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_60.GeonamesFormat.XML, GeonamesFormat_60.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_59.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.28", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_60, GeonamesFormat_61) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_61.GeonamesFormat.XML, GeonamesFormat_61.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_60.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.29", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_61, GeonamesFormat_62) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_62.GeonamesFormat.XML, GeonamesFormat_62.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_61.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.3", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_62, GeonamesFormat_63) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_63.GeonamesFormat.XML, GeonamesFormat_63.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_62.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.30", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_63, GeonamesFormat_64) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_64.GeonamesFormat.XML, GeonamesFormat_64.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_63.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.31", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_64, GeonamesFormat_65) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_65.GeonamesFormat.XML, GeonamesFormat_65.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_64.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.4", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_65, GeonamesFormat_66) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_66.GeonamesFormat.XML, GeonamesFormat_66.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_65.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.5", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_66, GeonamesFormat_67) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_67.GeonamesFormat.XML, GeonamesFormat_67.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_66.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.6", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_67, GeonamesFormat_68) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_68.GeonamesFormat.XML, GeonamesFormat_68.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_67.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.7", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_68, GeonamesFormat_69) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_69.GeonamesFormat.XML, GeonamesFormat_69.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_68.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.8", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_69, GeonamesFormat_70) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_70.GeonamesFormat.XML, GeonamesFormat_70.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_69.GeonamesEndpoint));
    exports.Children = Children;
});
define("endpoints/Children.9", ["require", "exports", "endpoints/GeonamesEndpoint", "models/GeonamesFormat"], function (require, exports, GeonamesEndpoint_70, GeonamesFormat_71) {
    "use strict";
    exports.__esModule = true;
    var Children = (function (_super) {
        __extends(Children, _super);
        function Children(config) {
            var _this = _super.call(this, 'children', [GeonamesFormat_71.GeonamesFormat.XML, GeonamesFormat_71.GeonamesFormat.JSON]) || this;
            _this.config = config;
            return _this;
        }
        Children.prototype.get = function () {
        };
        return Children;
    }(GeonamesEndpoint_70.GeonamesEndpoint));
    exports.Children = Children;
});
define("utils/url", ["require", "exports"], function (require, exports) {
    "use strict";
    exports.__esModule = true;
    exports.buildUrl = function (url, parameters) {
        var queryString = '';
        for (var key in parameters) {
            var value = parameters[key];
            queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
        }
        if (queryString.length > 0) {
            queryString = queryString.substring(0, queryString.length - 1);
            url = url + '?' + queryString;
        }
        return url;
    };
});
