const id=Symbol('123');
const herId=Symbol('456');

//console.log(id==herId);
const bigNumber=738493849479035n;
//console.log(typeof bigNumber)
//var n=undefined;
//let a=[1,2,3];
//console.log(typeof a) //object
const fun=function(){
    
}
//console.log(typeof fun) //function object

let val = {
    name:"diksha",
    age:23
}
let val1 = val;
val.name="radhika"
//console.table([val.name,val1.name]); //both value get changed
//console.log(typeof val); //object
let user="diksha";
let spy=user;
spy="raam"
console.table([user,spy]) //copy created


