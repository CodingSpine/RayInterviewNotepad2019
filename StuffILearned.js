
1. A function is an object
2. Never again use var. Use only let and const.
3. var's scope is the function it is inside, and let\'s scope is the block (if, else, for, etc.)
4. There is a new syntax to define a function inside an object; without using a colon.

const person  = {
    name: 'meow',
    walk() {} //this is a valid syntax to define a function
};

5. We need to 'bind' the 'this' of an object to an external variable if we want to use the variable directly as a substitute for the object.

For e.g.:

Case 1:
const person  = {
    name: 'meow',
    walk() {
        console.log(this);
    }
};

const walk = person.walk;
walk(); // it will be undefined, even though it should have given a reference to the 'person' object.

Case 2:
const person  = {
    name: 'meow',
    walk() {
        console.log(this);
    }
};

const walk = person.walk.bind(person);
walk(); // it will successfully display the 'person' object
