//UC1 
const IS_PRESENT = 0;
let empcheck = Math.floor(Math.random() * 10) % 2;
if(empcheck==IS_PRESENT)
{
    console.log("Present");
    return;   
}
else
{
    console.log("Absent")
}