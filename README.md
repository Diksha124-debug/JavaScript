# JavaScript
Practice Code and small Projects using JS

Cheat-Sheet for JS-
Skip using var
Var a;  -->declare variable
Var a=12;   -->Initialization(1st value assign) of var
Temporal Dead Zone →area before the variable gets defined.
Ek variable jab JS mai banta h to vo variable do parts mai tut jata h and uska declare part sabse top mai chala jata and initialize part neeche rah jata h.
               	Var a=90;
Var a=undefined;(this will go to the top line)
a=90;
We can print it as undefined before access.
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
Const obj={name:”diksha”}
obj.name=”radha” (true-->updation of property value allowed)
obj={};(false→ressigning of values are not allowed)
object.freeze(namei);  →object property does not change by user 
DATA TYPES:
Primitive -w/o bracket                            Reference -with bracket

