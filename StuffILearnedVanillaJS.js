Great site for revising concepts: 'https://quiz.typeofnan.dev/'

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


6. There is a new, quicker way of taking out values from an object. Called destructuring.

    const address = {
        street: '',
        city: '',
        country: ''
    };

    const {street, city, country } = address;



7. Continuing from point 6, what if you wanted to take out the property 'city', and give it a new name?

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


10. Primitive data-types are passed by value, while Object, Array and Function are passed by reference.

11. Pure Functions are those functions that do not modify anything outside their scope. Modifying something outside their scope is possible when you pass stuff by reference as parameters. Therefore, Pure Functions only take primitive datatypes as inputs.

12. Closures are functions within functions. They have access to the outer function's variables, but (IMPORTANT!) they store references to those variables, rather than store by value. This is why the following for loop will not work:

    function celebrityIDCreator (theCelebrities) {
        var i;
        var uniqueID = 100;
        for (i = 0; i < theCelebrities.length; i++) {
          theCelebrities[i]["id"] = function ()  {
            return uniqueID + i;
          }
    }
    return theCelebrities;
    }

    var actionCelebs = [{name:"Stallone", id:0}, {name:"Cruise", id:0}, {name:"Willis", id:0}];

    var createIdForActionCelebs = celebrityIDCreator (actionCelebs);

    var stalloneID = createIdForActionCelebs [0];  console.log(stalloneID.id()); // 103, instead of 100


13. The above problem of closures is solved by using IIFE

    function celebrityIDCreator (theCelebrities) {
        var i;
        var uniqueID = 100;
        for (i = 0; i < theCelebrities.length; i++) {
            theCelebrities[i]["id"] = function (j)  { // the j parametric variable is the i passed in on invocation of this IIFE
                return function () {
                    return uniqueID + j;
                } () ;
            } (i);
        }

        return theCelebrities;
    }

14. Call vs Apply vs Bind. These are all inbuilt methods of a Function. Call and Apply return a value, while Bind returns a function that can be used later. All 3 functions are used to gain access to `this`.

    14.1 Call takes in comma-separated inputs.
        var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
        var person2 = {firstName: 'Kelly', lastName: 'King'};

        function say(greeting) {
            console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
        }

        say.call(person1, 'Hello'); // Hello Jon Kuperman
        say.call(person2, 'Hello'); // Hello Kelly King

    14.2 Apply takes in array of values
        var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
        var person2 = {firstName: 'Kelly', lastName: 'King'};

        function say(greeting) {
        console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
        }

        say.apply(person1, ['Hello']); // Hello Jon Kuperman
        say.apply(person2, ['Hello']); // Hello Kelly King

    14.3 bind
        var person1 = {firstName: 'Jon', lastName: 'Kuperman'};
        var person2 = {firstName: 'Kelly', lastName: 'King'};

        function say(greeting) {
            console.log(greeting + ' ' + this.firstName + ' ' + this.lastName);
        }

        var sayHelloJon = say.bind(person1);
        var sayHelloKelly = say.bind(person2);

        sayHelloJon('Hello'); // Hello Jon Kuperman
        sayHelloKelly('Hello'); // Hello Kelly King


15. Hoisting - when a declaration of a function or variable is moved to the top of the file by the JS engine at runtime.

16. Rest - a quick way of initializing variables

    const { first, second, ...others } = {
        first: 1,
        second: 2,
        third: 3,
        fourth: 4,
        fifth: 5
    }
    first // 1
    second // 2
    others // { third: 3, fourth: 4, fifth: 5 }


17. Object destructuring - Extracting some properties and putting them into variables.

    const person = {
      firstName: 'Tom',
      lastName: 'Cruise',
      actor: true,
      age: 54 //made up
    }
    const { firstName: name, age } = person //name: Tom, age: 54


18. static - Just like in Java, JS has static keyword that allows you to call a method on the Class itself rather than the instance.

    class Person {
      static genericHello() {
        return 'Hello'
      }
    }
    Person.genericHello() //Hello


19. Higher order functions are those which execute other functions when the latter are passed as arguments


20. A mixin is a group of functions that can be added to an object. It is useful when you want to add the same set of functions to objects that are not related (and hence inheritance isn't the right option)
    let flyMixin = function(obj) {
        obj.fly = function() {
            console.log("Flying, wooosh!");
        }
    };

21. Functional Programming terminology:
    - Callbacks are the functions that are slipped or passed into another function to decide the invocation of that function.
    - Functions that can be assigned to a variable, passed into another function, or returned from another function just like any other normal value, are called first class functions.
    - The functions that take a function as an argument, or return a function as a return value are called higher order functions.
    - When the functions are passed in to another function or returned from another function, then those functions which gets passed in or returned can be called a lambda.
    - Callbacks = lambda?


22. A new way to do for loop in ES6: use "for... of" instead of "for...in".
	For...of is meant particularly for iteration through collections (like Arrays, Sets, and even a String). For...in is used to loop through properties of
	an object.
	E.g.:
		let S = "meow";
		for (character of S){// this returns the visual value of the character. If we used for...in, we would have got the ASCII value of the character.
            if (character === 'w') {
                console.log('www');
            }
        }

23. Difference between undefined and not defined.
	var a;
	console.log(a); //declared but undefined
	console.log(b); //not defined

24. Debouncing is a way to group multiple identical events into only one once the trigger has stopped firing to avoid doing     excessive processing.
    E.g.:
    var timer;
    function debounce(callback, delay) {
    	clearTimeout(timer);
    	timer = setTimeout(callback, delay);
    }

    document.getElementById('search-bar').addEventListener('input', function(event) {
    	debounce(executeSearch, 300);
    });

25. Throttling in JS is similar to debouncing. It’s a way to run multiple identical events at regular intervals rather than allowing them to run when triggered.

26. A polyfill is a browser fallback, written in JS, that allows latest features to run on older/outdated browsers. Babel is one of the tools that helps you comile your code into older versions of browsers, using polyfills.

27. Boolean is a function, and the output of Boolean() is false.

28. When checking the equality of an Array to a string, JS first converts the array to a string and then checks the equality.
    So, the following would return true:
    var a = [1,2,3];
    var c = '1,2,3';
    console.log(a == c);//true

29. console.log(1 < 2 < 3); //true
    console.log(3 > 2 > 1); //false
    Reason: 1) JS reads stuff from left to right
            2) 1 < 2 evaluates to true, and so does 3 > 2
            3) true is coerced to 1.

30. array.sort() first converts elements to strings before sorting.
    const arr = [5,1,3,7,25];
    console.log(arr.sort());//1,25,3,5,7

31. More array coercions.
    var a = [9];
    var b = [10];
    console.log( a == 9);//true
    console.log( a == 10);//true
    console.log( a < b);//false

    1) and 2) are true because an array is converted into a number when compared with a number.
    3) is false because arrays are converted to strings when compared with each other. Evaluation of "9" < "10" is the same as evaluation of "9" < "1", which is false.
