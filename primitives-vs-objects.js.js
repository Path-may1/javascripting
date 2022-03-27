//primitives vs objects
// PRIMITIVES are stored in callstack in javascript engine, the values are stored as executed.
let age = 30;
let oldAge = age;
age = 31;

console.log(age); //displays 31
console.log(oldAge); //displays 30


//objects - are stored in heap memory of javascript. objects are too large to store in the stack , so they are stored memories in heap
const me = {
    name: 'Mayura',
    age: 30,
};

const friend = me;
friend.age = 27;

console.log('Freind', friend); // shows 27
console.log('Me', me); // shows 27?\??

//another exampled

let lastNam = 'Steve';
let oldname = lastNam;
lastNam = 'Garis'
console.log(lastNam, oldname);
//in the above example , the lastnam and oldname is diffrent eventhough
//lastnam = oldname becuase these are primitive types and the data is stored-
//in callstack

//exampled with reference type

const jessica = {

    firstname: 'Jesica',
    lastname: 'Davis',
    age: 27
}
const marriedJessica = jessica;
marriedJessica.lastname = 'william';
console.log("last naem before marraige", jessica);
console.log("last naem after marraige", marriedJessica);

// in the above example both the last name shows as william .. becuase this is reference  type


//Onject.assign - it makes a copy of the array at teh mere superifcial level, 
//that means if the parent object has object inside object the  Object.assign   that 
//does not make a copy of inside array

const jessicacopy = Object.assign({}, jessica);
jessicacopy.lastname = "Mary";
console.log(jessicacopy)