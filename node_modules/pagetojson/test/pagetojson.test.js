const pagetojson = require('../lib/pagetojson');
const fs = require('fs');
const path = require('path');
const _ = require('lodash');
/*
process.on('unhandledRejection', up => {
    throw up;
});
*/
describe('pagetojson Local', function() {
    let html = '';

    beforeAll(() => {
        html = fs.readFileSync(path.resolve(__dirname, 'htmlPage.html'), {encoding: 'UTF-8'});
    });

    it('calls convert and expects an exception', () => {
        expect(pagetojson.convert).toThrow('Not yet implemented');
    });

    it('calls convertUrl and expects an exception', () => {
        expect.assertions(1);
        return pagetojson.convertUrl().catch(e => expect(e).toMatch('Not yet implemented'));
    });
});
