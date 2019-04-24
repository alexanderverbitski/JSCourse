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

    };
}

module.exports = new DateTimeUtil();