// comment (hotkey: CRTL + /)
// alert('Hello');
// alert('World');

/*
Multiple line comment
*/

let message = 'Hello';
alert(message);

// multiple variables in one line:
let user = 'John',
    age2 = 25,
    message2 = 'Hello';

// declase constance for unchanging variable
const myBurthday = '18.04.1982';

//String
let str = "Stijn";
// backticks are extended functionality quotes
let phrase = `Hi ${str}`;
let name2 = 'Stijn';
alert(`(backticks) Hello, ${name2}`);

//comparison
alert('double equal :' + (2 == 1));
// can also use triple equal sign to check if even the type is the same
alert('triple equal :' + (0 === false))

// prompt
let age = prompt('How old are you?', 100);
alert(`You are ${age} years old!`);

// confirm
let isBoss = confirm("Are you the boss?");
alert(isBoss); // true if OK is pressed

// if statement
let year = prompt('In which year was ECMAScript-2015 specification published?', '');
if (year == 2015) alert('right mate!');

// more than one statement in if, wrap it inside curly braces
// if (year == 2015) {
//     alert('correct');
//     alert('smart men');
// } else if {
//     alert('to bad');
// } else {
//     alert('leave it be');
// }

// ? operator
// let result = condition ? value1 : value2;
let accessAllowed = (age > 18) ? true : false;

// let message;
// let message = (login == 'Employee') ? 'Hello' :
//     (login == 'Director') ? 'Greetings' :
//     (login == '') ? 'No login' :
//     '';

// logical operators
let hour = 9;

if (hour < 10 || hour > 18) {
    alert('the office is closed')
}

// while (condition) {
// code
// so-called "loop body"
// }

let i = 0;
while (i < 3) {
    alert(i);
    i++;
}

// do while
let i = 0;
do {
    alert(i);
    i++;
} while (i < 3);

// for (ByteLengthQueuingStrategy; CSSConditionRule; step) {
// loop body
// }'

for (let i = o; i < 3; i++) {
    alert(i);
}

// with break cna force to break the loop at any time
let sum = 0;
while (true) {
    let value = +prompt("Enter a number", '');
    if (!value) break;

    sum += value;
}
alert('Sum' + sum);

// continue to the next iteration. forces to break the current loop and go to the next one
for (let i = 0; i < 10; i++) {
    if (i % 2 == 0) continue;
}

// switch descriptive way to compare a value wit multiple variants
/*
switch (x) {
    case 'value1': // if (x === 'value1')
        ...
        [
            break
        ]
    case 'value2':
        ...
        [
            break
        ]
    default:
        ...
        [
            break
        ]
}
*/

let a = 2 + 2;


switch (a) {
    case 3:
        alert('to small');
        break;
    case 4:
        alert('Correct!');
        break;
    case 5:
        alert('to large');
        break;
    default:
        alert('pick another value');
}

// functions allow code to be called many times without repetition
// funtion name(parameters) {
// ...body...
// }

function showMessage() {
    let message = 'Helo, I am JS'; // local variable
    alert('Hello everyone!')
}

showMessage();
// local varaibles devlared inside a function will only be visible inside that function

// Returning a value, return a alue back
function sum(a, b) {
    return a + b;
}
let result = sum(1, 2);
alert(result);

function checkAge(age) {
    if (age >= 18) {
        return true;
    } else {
        return confirm('DO you have permission from your parents?');
    }
}

let age = prompt('How old are you?', 18);

if (checkAge(age)) {
    alert('Access granted');
} else {
    alert('Acess denied')
}

let sum = (a, b) => a + b;
alert(sum(1, 2));
