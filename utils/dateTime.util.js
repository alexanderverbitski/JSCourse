class DateTimeUtil {
    today(){
        return new Date();
    };
    setYear(date, year){
        this.date = date;
        this.year = year;

        date.setFullYear(year);
        return date;
    };
    daysDifference(dateLeft, dateRight){
        this.dateLeft = dateLeft.getTime();
        this.dateRight = dateRight.getTime();
        let oneDayMillis = 86400000;

        let diffInMillis = Math.abs(dateLeft - dateRight);
        let result = Math.round(diffInMillis/oneDayMillis);

        return result;
    };
}

module.exports = new DateTimeUtil();