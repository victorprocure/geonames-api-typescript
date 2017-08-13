const Geonames = require('../build/Geonames').Geonames;

const geo = new Geonames({ username: 'mindfuel' });

console.log(geo.countryInfo.get());