let user = {
    name: "John",
    age: 30,

    toString() {
        return `{name: "${this.name}", age: ${this.age}}`;
    }
}
alert(user);

// JSON JavaScript Object Notation is a general froamt to represent values and objects
// stringify : to convert objects into JSON
// pars: to convert JSON back into an object

let student = {
    name: 'John',
    age: 30,
    isAdmin: false,
    courses: ['html', 'css', 'js'],
    wife: null
};

let json = JSON.stringify(student);

// stringify makes everything double quotes
// no single quotes are used
alert(typeof json);
alert(json);