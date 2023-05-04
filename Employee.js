const IS_FULL_TIME = 1;
const IS_PART_TIME = 0;
const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const RATE_PER_HOUR = 20;
const NUM_OF_WORKING_DAYS = 20;
const TOTAL_MONTHLY_HOURS = 100;
let total_hrs = 0;
let total_working_days = 0;

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
while(total_hrs<TOTAL_MONTHLY_HOURS&&total_working_days<NUM_OF_WORKING_DAYS)
{
     total_working_days++;
     total_hrs = total_hrs + getWorkingHours(empcheck);
     if(total_hrs>100){
        break;
     }
     console.log("Day #"+total_working_days+" Emp Hrs #"+total_hrs);
}
   
     
let empwages = total_hrs * RATE_PER_HOUR;
console.log("Monthly Emp Wages "+empwages);