class MockUtil{
 
    mockDate (isoDate, RealDate) {
        global.Date = class extends RealDate {
          constructor () {
            
            return new RealDate(isoDate)
          }
        }
      }
}

module.exports = new MockUtil();