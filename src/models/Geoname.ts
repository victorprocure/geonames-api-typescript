export interface Geoname {
  continent: string;
  capital: string;
  languages: string;
  geonameId: number;
  south: number;
  isoAlpha3: string;
  north: number;
  fipsCode: string;
  population: string;
  east: number;
  isoNumeric: string;
  areaInSqKm: string;
  countryCode: string;
  west: number;
  countryName: string;
  continentName: string;
  currencyCode: string;
  timezone: Timezone;
  bbox: Bbox;
  asciiName: string;
  countryId: string;
  fcl: string;
  adminId1: string;
  lat: string;
  fcode: string;
  continentCode: string;
  adminCode1: string;
  lng: string;
  toponymName: string;
  adminTypeName: string;
  adminName5: string;
  adminName4: string;
  adminName3: string;
  alternateNames: AlternateName[];
  adminName2: string;
  numberOfChildren?: number;
  name: string;
  fclName: string;
  fcodeName: string;
  adminName1: string;
}


export interface AlternateName {
  isShortName?: boolean;
  name: string;
  lang: string;
  isPreferredName?: boolean;
  isHistoric?: boolean;
}

export interface Bbox {
  east: number;
  south: number;
  north: number;
  west: number;
  accuracyLevel: number;
}

export interface Timezone {
  gmtOffset: number;
  timeZoneId: string;
  dstOffset: number;
}