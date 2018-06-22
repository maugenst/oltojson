'use strict';

const AbstractToJson = require('./AbstractToJson');

class pagetojson extends AbstractToJson {
    constructor() {
        super();
    }

    /**
     * Static conversion of a given HTML Page
     * @return {Object} Converted Object as an object literal
     */
    static convert(html, options) {
        throw new Error('Not yet implemented');
    }

    /**
     * Convert an HTML Page for a given URL
     * @return {Promise<*>} Promise containing the result
     */
    static async convertUrl(url, options) {
        return new Promise((resolve, reject) => {
            reject('Not yet implemented');
        });
    }
}

module.exports = pagetojson;
