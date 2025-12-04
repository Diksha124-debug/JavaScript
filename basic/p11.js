const arr=[90,78,45,23,12,80]
const arr1=["diksha","radhika","raam","rosy"]
//let newone = arr.push(arr1);//returns length of array
//console.log(newone)
//console.log(arr);//arr1 inside array
//console.log(arr[6][2])
//let newarray = arr.concat(arr1)
//console.log(newarray)//retruns newarray arrr+arr1

//spread operator
const anotherOne = [...arr,...arr1] //merge both arrays
//console.log(anotherOne)

const anotherarray=[1,3,4,[4,61,7],[18,9,[8,6,4]]]
const new_anotherarray=anotherarray.flat();//bydefault flat value is 1 ,assign Infinity to flat all deepen
//console.log(new_anotherarray)

//to check array or not
//console.log(Array.isArray("diksha"))
//to create array
var myarray = Array.from("Hitesh")
//console.log(myarray)
console.log(Array.of("diksha","ray",89));//create array of multiple element

//obj->array
//console.log(Array.from({name:"diksha"}));//empty array
