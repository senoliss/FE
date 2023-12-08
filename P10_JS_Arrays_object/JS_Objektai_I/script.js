console.log('**************************');
console.log('**Structure of an Object**');
console.log('**************************');

let person = {
    name: 'John Doe',   // property name
    age: 30,            // property age
    greet: function(){  // method greet
        console.log('Hello, I am ' + this.name);
    }
}

console.log(person);
person.greet();

// print name
console.log(person.name);
console.log(person['name']);

// add property job
person.profession = 'Developer';
console.log(person);

// change property age
person.age = 72;
console.log(person);

// delete property age
delete person.age;
console.log(person);

// add property fav color
person['FavColor'] = 'blue';
console.log(person);


console.log('*****************************');
console.log('**** More complex object ****');
console.log('*****************************');

const student1 ={
    firstName: 'David',
    lastName: 'Jones',
    age: 22,
    strengths: ['Music', 'Art'],
        exams: {
            midterm: 10,
            final: 9,
        }
}

console.log(student1);