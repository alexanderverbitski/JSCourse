const { describe, it } = require('mocha');
const logger = require('../utils/log.util');

describe('Hello World Test Suite', ()=> {
    it('Should write "Hello World"', () => {
        logger.info('Hello World');
    });
});