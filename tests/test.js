const Geonames = require('../build/Geonames').Geonames;

const geo = new Geonames({ username: 'mindfuel' });

console.log(geo.countryInfo.get());

geo.children.get(6251999).subscribe(c => console.log(c));