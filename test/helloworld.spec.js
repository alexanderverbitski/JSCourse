const { describe, it } = require('mocha');
const { assert, expect, hould} = require('chai');
const logger = require('../utils/log.util');
const dateTime = require('../utils/dateTime.util');
const mockUtil = require('../utils/mock.util');

describe('Hello World Test Suite', () => {
    it('Should write "Hello World"', () => {
        logger.info('Hello World');
    });
});

describe('Dates test suite', () => {
    const RealDate = Date;

    it('Should check "today()" mocked date', () => {
        let isoDate = new Date('2019-01-01T12:34:56z');
        let checkDate = new Date('2019-01-01T12:34:56z');
        mockUtil.mockDate(isoDate, RealDate);

        assert(dateTime.today().getTime() == checkDate.getTime(), 'Mocked date: ' + dateTime.today().getTime() + ' is not equal to: ' + checkDate.getTime());
    });

    it('Should check "setYear(date, year)"', () => {
        let mockInitDate = new Date('2019-01-01T12:34:56z');
        let changedYear = 2021;
        mockUtil.mockDate(mockInitDate, RealDate);
        let dateToChange = new Date();

        assert(dateTime.setYear(dateToChange, changedYear).getFullYear() == changedYear, 'Set year is not equal');
    });

    afterEach(() => {
        global.Date = RealDate;
    })
  })