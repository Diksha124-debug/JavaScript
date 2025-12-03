# JavaScript Cheat-Sheet

Cheat-Sheet for JS-
=======
Skip using var
Var a;  -->declare variable
Var a=12;   -->Initialization(1st value assign) of var
=======

## Temporal Dead Zone →area before the variable gets defined.
Ek variable jab JS mai banta h to vo variable do parts mai tut jata h and uska declare part sabse top mai chala jata and initialize part neeche rah jata h.
               	Var a=90;
Var a=undefined;(this will go to the top line)
a=90;
Isi wjh se we can print it as undefined before access.

var(gopi bahu)
const
let
Redaclaration -Yes
Redaclaration -No
Redaclaration -No
Scope-function(inside the fun anywhere)
Scope-block{only inside the block where defined}
Scope-block{}
Temporal Dead Zone-No
undefined
Temporal Dead Zone-Yes
Temporal Dead Zone-Yes
Hoisting-Yes
(value set undefined)
Hoisting-Yes
(value set nahi-Reference error)
Hoisting-Yes
(We can not access a variable before initialisation ->also gives an error of the same)Reference error

Global declared variables can be accessed everywhere.
Var is a function-based outside of the function, it can not be accessed.
Let it be block-based (curly braces), and outside it, we can not access.
1)var(gopi bahu)
2)const
3)let
## Redaclaration -Yes No No
## Scope-function(inside the fun anywhere) 

## Temporal Dead Zone-No(undefined) Yes Yes

## Hoisting-Yes(value set undefined) Yes(value set nahi-Reference error) Yes(We can not access a variable before initialisation ->also gives an error of the same)Reference error

### Global declared variables can be accessed everywhere.
### Var is function-based outside of the function can not be accessed.
```
Let is block-based (curly braces), and outside it, we can not access.

Const obj={name:”diksha”}
obj.name=”radha” (true-->updation of property value allowed)
obj={};(false→ressigning of values are not allowed)

````object.freeze(namei);  →object property does not change by user ```

### DATA TYPES:
Primitive -w/o bracket                            Reference -with bracket
```

# DATA TYPES:
Primitive -w/o bracket (copy created ) string ,number ,null(empty),undefined,boolean,symbol,bigInt

Reference -with bracket() array,object,functions

### Js is Dynamically Typed language(because we need not to define its variable type before execution of program)

### typeof(null)=objects rest primitve same as their name
### typeof(<any function>)=function(object function)
### Non -primitive ka type always object

## stack and heap memory
```
primitive data type stored in stack(copy created) and non primitive stored in heap(original data )
```
## String Methods
strings are immutable means any case original string can not change
### <string_name>.slice(start_given,last_given)  
```  If start > end → returns "" (empty string)
     else
	num= length -negative value --> slice(num,last_given)
	```
### <string_name>.substring(start_given,last_given) 
```  If start > end → returns "" (swap values)
     else
	num= length -negative value --> slice(0,last_given)
	``` 
### <string_name>.trim()removesextra space from startand end of the string

### <string_name>.replace(kya,kisse)==1st occur and <string_name>.replaceAll(kya,kisse)==All replace

### <string_name>.includes(kya) -->start to end check
### <string_name>.split("based on what")

## Numbers
```
num.toString(); -->can convert number to string and performstring operations

number.toFixed(2); -->convert decimal to 2 precision(any precision value)

number.toPrecision(n) returns a number formatted to n significant digits.

✔ Works on both integer and decimal numbers
✔ Returns a string
✔ Does rounding when necessary

number.totalLocaleString('en-In); -->number =100000 o/p 10,00,00
```
*************************MATHS****************************
## Maths 