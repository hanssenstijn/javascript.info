// create empty object / two ways
let user = new Object();
let user = {};

// key value pairs
let user = {
    name: "John",
    age: 30
};

// get property values of the object
alert(user.name);
alert(user.age);

// add or delete value
user.isAdmin = true;
delete user.age;

// Propery value shorthand
function makeUser(name, age) {
    return {
        name: name,
        age: age
    };
}

let user = makeUser("John", 30);
alert(user.name);

// for (key in object){
// execites the body for eacch key among objevt properties
// }

for (let key in user) {
    alert(key);
    alert(user[key]);
}

// clone
for (let key in user) {
    clone[key] = user[key];
}
clone.name = "Pete";

// could also use assign
Object.assign(user, { name: "Pete", isAdmin: true });