function leapYear(year){
    if(year % 4 === 0 && year % 100 !== 0){
        return false;
    }
    else if(year % 4 === 0 && year % 400 === 0){
        return true;
    }
    return false;
}

let year1 = leapYear(2000);
let year2 = leapYear(1700);
let year3 = leapYear(1900);
let year4 = leapYear(1600);

console.log(year1,year2,year3,year4)