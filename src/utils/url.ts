export const buildUrl = (url: string, parameters: { [key: string]: string }) => {
    let queryString: string;
    for (const key in parameters) {
        const value = parameters[key];
        queryString += encodeURIComponent(key) + '=' + encodeURIComponent(value) + '&';
    }

    if (queryString.length > 0) {
        queryString = queryString.substring(0, queryString.length - 1);
        url = url + '?' + queryString;
    }

    return url;
}