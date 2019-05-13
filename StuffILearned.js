
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


6. There is a new, quicker way of taking out values from an object.

const address = {
    street: '',
    city: '',
    country: ''
};

const {street, city, country } = address;



7. Continuing from point 7, what if you wanted to take out the property 'city', and give it a new name?

const{ city: mahCity } = address; //mahCity is the name of the variable I'm going to use to store the value of address.city.


8. Spread operators (3 dots can be used for arrays as well as objects).

For e.g.:
const moo = {wer: 'wer'};
const meow = {sdf: 'sdf'};

const combine = {...moo, ...meow}; //a new object holding properties of both the above objects


9. export and export default

These two keywords are used to make a class/function/variable etc visible to other files. default allows us to import without having to use {}.

For e.g.:
File 1:
export class Teacher {

}

File 2:
import {Teacher} from './teacher'

File 3:
export default class Meow {

}

File 4:
import Meow from './meow'
