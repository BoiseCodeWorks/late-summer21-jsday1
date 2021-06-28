// #region SECTION Variable Declaration

// var, let, const
//      VAR (HOISTED)
// console.log(x);
// var x = 7;

//      LET (non-hoisted)
// console.log(y);
// let y = 10;

//      CONST (non-hoisted unchangable)
// BAD
// const z = 100;
// z = 10;

// GOOD
// const user = {}
// user.name = "mark";
// user = {}
// #endregion

// Types of Data

// SECTION Value (primative)
// #region SECTION String
// Avoid Double Quotes in JS
let doubleName = "Mark"
let name = 'Mark'
// only with iterpolation
let backtickName = `Mark`

//  String Building
let first = 'mark'
let last = 'ohnsman'
// concatenation
// let full = 'hello my name is ' +  first + ' ' + last + ' and I am an EXPERT'
// interpolation
let full = `hello my name is ${first} ${last} and I am an EXPERT`


// Common methods for strings
// ALL CAPS
full.toUpperCase()
// all smalls
full.toLowerCase()

// COMMON OTHER METHODS (substring, substr, split)


// #endregion

// #region SECTION Numbers
// has all standard math 
// addition (+) 
// subtraction (-)
// multiplication (*)
// division (/)
// modulus (%) remainder of division

// OTHER Number Methods Math.random(), Math.floor()
// #endregion

// #region SECTION Booleans
// TRUE / FALSE

// COMPARATIIVES
// GENERAL EQUALITY (==) type coersion will turn strings to numbers or numbers to strings for comparison 
10 == '10' // true

// STRICT EQUALITY (===) must have same data type
10 === '10' // false

// Greater and Greater than or equal to (< <=)
// Less and Less than or equal to (> >=)


// AND && both statements must be true
true && true // true
false && false // false
true && false // false

// OR || one of the conditions must be true
true || true // true
true || false // true
false || false // false


// #region SECTION Conditionals

// IF
// if(statement){ if the statement is true
  // action  run the action
// }

// IF ELSE
// if(statement){ if the statement is true
//   action1 run action1 
// } else { if the statement was false
//   action 2  run action2
// }


// IF / ELSE IF
// if(statement){ if the statement is true
//   action1 run action1 
// } else if (statement2){ if statement2 is true
//   action2   run action2
// }

// SWITCH
// switch(value){
  // case value1 :
  // action1
  // break;
  // case value2 :
  // action2
  // break;
  // case value3:
  // action3
  // break;
  // default
  // defaultAction
  // break
// }
let color = 'red'
switch(color.toLowerCase()){
  case 'blue':
    console.log('Go BIG BLUE!')
    break;
  case 'danger':
  case 'error':
  case 'red':
    console.error('ROCK\'N RED!')
    break;
  case 'warn':
  case 'yellow':
    console.warn('THEY CALL ME MELLOW!')
    break;
  default:
    console.info('we do not support that color')
}


// Ternary A single binary if else statement in one line
// statement ? action if true : action if false
let myNum = 10
myNum > 100 ? console.log('greater') : console.log('lower')


// #endregion

//#endregion


// undefined / null (represent nothing)

// Reference (non-primative)
// Functions ( Hoisted )
// delarations
// bad
let badFunction = function(){}
let badFunction2 = ()=>{}


function goodFunction(name){
  console.log(name)
  return 'HELLO ' + name.toUpperCase()
}



// SCOPE
// FUNCTIONS CAN REACH OUT INTO GLOBAL SCOPE BUT VARIABLES CREATED INSIDE THE FUNCTION DO NOT ESCAPE

let someVar = 10

function addToSomeVar(num){
  let newNum = someVar + num
  return newNum
}

function increaseSomeVar(num){
  someVar+= num
}



// Objects
// Array
// NaN (represents failed math)