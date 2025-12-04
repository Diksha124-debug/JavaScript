//objects created 1)literal 2)constructor
//singleton creates ->constructor se object bnate hain
// Object.create()


//insert symbol in object
let mySym=Symbol("place");
const myobj={
    name:"diksha",
    [mySym]:"kumalt",
    hobby:"coding",
    age:23,
    ids:["Dikshapandeydynamics@mail","dp729080@gmail.com","dp730346@gmail.com"],
    salary:6000
}
//access-dot mai quotes krke access not allowed but in square bracket it is allowed
//console.log(myobj["name"]);
//console.log(myobj["ids"]);
//console.log( myobj[mySym]);
//myobj[mySym]="kafra";

//want to change value
myobj.age=90;
//console.log(myobj);
//lock object
Object.freeze(myobj);
myobj.age=900;
//console.log(myobj);//does not throw any error
myobj.addition=function(){
    console.log(2+2);
    console.log(`the name of the user is ${this.name}`);

}
console.log(myobj.addition());