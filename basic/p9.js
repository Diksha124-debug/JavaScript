let todayDate=new Date();
//console.log(todayDate);
//console.log(todayDate.toString())
//console.log(todayDate.toDateString())  //only date day 
//console.log(todayDate.toISOString()) //only date
// console.log(todayDate.toJSON()) 
// console.log(todayDate.toLocaleString()) //date+time
//console.log(typeof todayDate) 

let myCreatedDate=new Date(2023,2,19);
//to customize --->
console.log(myCreatedDate.toLocaleString('default',{
    weekday:"narrow",
    hour:"2-digit"
    
}) );
// console.log(myCreatedDate.getDate())
// console.log(myCreatedDate.getDay())
// console.log(myCreatedDate.getFullYear())
// console.log(myCreatedDate.toDateString())
//console.log(myCreatedDate.toString())

//let myCreatedDate=new Date(2023,2,19,8,12,5); //m starts from 0 onwards

//let myCreatedDate=new Date("2023-0-09"); //yy-mm-dd  m starts from 1

//let TimeStamp = Date.now();  //1jan 1970 to now mili sec tme
//console.log(TimeStamp)
//let myCreatedDate=new Date("12-04-2025");//mm-dd-yy
//console.log(myCreatedDate.getTime()) //mycurrentDate mili second
//console.log(Math.floor(TimeStamp/1000));//convert into second from 1jan 1970 to now