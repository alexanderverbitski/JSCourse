const logger = require('./log.util');

const doWait = (action, interval, expectedValue) => {
  return new Promise((resolve, reject) => {
    if(action() === expectedValue){
      setTimeout(() => resolve(), interval);
    }else{
        setTimeout(() => reject(), interval);
        return action();
    };
  })
 };

 function retrier (action, maxCount, interval, expectedValue, count = 0) {
    count++;
    logger.info(`[${count}] Wait for ${expectedValue}`);

    return doWait(action, interval, expectedValue)
        .then(
        () => {
            logger.info('Was able to reach expected condition!');
            return true;
        }, 
        () => {
            if (maxCount <= count) {
            logger.warning(`Was not able to reach expected condition! action() output: ${action()}`);
            return false;
        } else {
            return new retrier(action, maxCount, interval, expectedValue, count);
        }
    });
 };


class Wait {

    forTrue(action, maxCount, interval, expectedValue){
        return retrier(action, maxCount, interval, expectedValue);
    }

    forFalse(action, maxCount, interval, expectedValue){
        return retrier(action, maxCount, interval, expectedValue);
    }
}

module.exports = Wait;