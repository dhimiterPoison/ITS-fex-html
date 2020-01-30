class User {
    constructor(public firstName: string,
        public lastName: string) {
    }

    public getDescription(): string {
        return this.firstName + " " + this.lastName;
    }

    public getFullName = () => {
        return this.firstName + " " + this.lastName;
    }
}

class Employee extends User {
    constructor(public firstName: string,
                public lastName: string,
                public company: string) {
        super(firstName, lastName);
    }
}

var u1 = new User("Andrea", "Dottor");
// var userName = u1.firstName;
//var x = u1.getFullName();
var e1 = new Employee("Andrea", "Dottor", "ITS");

var list :User[] = [];
list.push(u1);
list.push(e1);

var pnl = document.getElementById("mioDiv");    // div
var txt = document.getElementById("txtInput") as HTMLInputElement;  // input type="text"
