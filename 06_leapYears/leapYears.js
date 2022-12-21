const leapYears = function(year) {
    switch (true){
        case(year === 0):
            return false;
            break;
        case(year%100 === 0 && year%400 === 0):
            return true;
            break;
        case(year%100 === 0):
            return false;
            break;
        case(year%4 === 0):
            return true;
            break;
        case(year%4 === 1 || year%4 === 2 || year%4 === 3):
        return false;
        break;
    }
};
leapYears(1900);
// Do not edit below this line
module.exports = leapYears;
