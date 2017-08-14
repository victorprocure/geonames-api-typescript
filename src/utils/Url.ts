import * as querystring from 'querystring';
import { GeonamesConfig, GeonamesFormat } from '../models';

export const buildDefaultQueryString = (config: GeonamesConfig, moreParams: {}) => {
    const defaultQuery = {
        formatted: config.formatted || false,
        style: config.style,
        lang: config.lang,
        username: config.username,
        type: (config.encoding) ? GeonamesFormat[config.encoding] : 'JSON',
    }

    const fullQuery = Object.assign({}, defaultQuery, moreParams);

    return querystring.stringify(fullQuery);
}