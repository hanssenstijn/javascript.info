// to access the object a method can use the this keyword
// safer than the object name, for example when the code is copied into a different name
let user = {
    name: "John",
    age: 30,

    sayHi() {
        alert(this.name);
    }
};
user.sayHi();

// can also be used in a function
function sayHi() {
    alert(this.name);
}