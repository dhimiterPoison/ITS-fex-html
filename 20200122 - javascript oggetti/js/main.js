var user = new Object();
user.name = "Andrea";
user.surname = "Dottor";

console.log(user.name);
console.log(user["name"]);

function Person(firstName, lastName, age){
    this.name = firstName;
    this.surname = lastName;
    this.age = age;
    this.fullName = firstName + " " + lastName;

    this.getFullName = function(){
        return this.name + " " + this.surname;
    }

    this.getDescription = function(prefix){
        var text = "Persona con nome " + this.name + " e cognome " + this.surname;
        if(prefix)
            return prefix + " " + text;

        return text;
    }
}
var user1 = new Person("Andrea", "Dottor", 37);
var user2 = new Person("Lorenzo", "Dottor", 6);

user1.name = "Tommaso";

console.log(user1.name);
console.log(user1.fullName);
console.log(user1.getDescription("DESCRIZIONE:"));
console.log(user2.fullName);

var user3 = {
    name: "Andrea",
    lastName: "Dottor",
    age: 37,
    address: {
        street: "",
        city: ""
    }
};

console.log(user3.name)

console.log(JSON.stringify(user1));

var t = '{"name": "Andrea", "surname": "Dottor"}';
var objUser = JSON.parse(t);
console.log(objUser.name);


var userJson = JSON.stringify(user1);
var user9 = JSON.parse(userJson);
console.log(user9.getFullName());
