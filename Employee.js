const IS_FULL_TIME = 1;
const IS_PART_TIME = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const RATE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;

let empcheck = Math.floor(Math.random() * 10) % 3;

function getWorkingHours(empcheck)
{
switch(empcheck){
    case IS_FULL_TIME :
        return FULL_TIME_HOURS;
        case IS_PART_TIME:
            return PART_TIME_HOURS;
            default:
                return 0;
}
}
let emphrs = 0;
for(let day = 0; day<NUM_OF_WORKING_DAYS;day++){
   
     emphrs = emphrs + getWorkingHours(empcheck);
    
    
}
let empwages = emphrs * RATE_PER_HOUR;
console.log("Monthly Emp Wages "+empwages);