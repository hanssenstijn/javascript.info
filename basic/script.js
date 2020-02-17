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