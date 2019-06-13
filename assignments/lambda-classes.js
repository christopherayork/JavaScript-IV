// CODE here for your Lambda Classes

class Person {
    constructor(person) {
        this.name = person.name;
        this.role = person.role;
        this.location = person.location;
        this.age = person.age;

    }

    speak() {
        console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
    }
}

class Instructor extends Person {
    constructor(person) {
        super(person);
        this.favLanguage = person.favLanguage;
        this.specialty = person.specialty;
        this.catchPhrase = person.catchPhrase;

    }

    static demo(subject) {
        console.log(`Today we are learning about ${subject}`);
    }

    static grade(student, subject) {
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }

    modifyGrade(student) {
        let modifyAmount = Math.floor(Math.random() * 100);
        let possible = [1,2];
        let operation = Math.floor(Math.random() * possible.length);
        if(operation) student.grade += modifyAmount;
        else student.grade -= modifyAmount;
    }
}

class Student extends Person {
    constructor(person) {
        super(person);
        this.previousBackground = person.previousBackground;
        this.className = person.className;
        this.favSubjects = person.favSubjects; // array
        this.grade = Math.floor(Math.random() * 100);

    }

    listsSubjects() {
        let phrase = this.favSubjects.reduce(function(total, current, index, source) {
            return index === source.length - 1 ? total + ', and ' + current : total + ', ' + current;
        });
        phrase = `${this.name} likes ${phrase}.`;
        console.log(phrase);
    }

    PRAssignment(subject) {
        console.log(`${this.name} has submitted a PR for ${subject}`);
    }

    sprintChallenge(subject) {
        console.log(`${this.name} has begun sprint challenge for ${subject}`);
    }

    graduate() {
        if(this.grade >= 70) {
            console.log(`${this.name} graduates from ${this.className}!`);
        }
        else {
            console.log(`${this.name} isn't ready to graduate yet...`);
        }
    }
}

class Project_Manager extends Person {
    constructor(person) {
        super(person);
        this.gradClassName = person.gradClassName;
        this.favInstructor = person.favInstructor;

    }

    standUp(channel) {
        console.log(`${this.name} announces to ${channel}, @channel standy times!`);
    }

    debugsCode(student, subject) {
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}.`);
    }

    modifyGrade(student) {
        let modifyAmount = Math.floor(Math.random() * 100);
        let possible = [1,2];
        let operation = Math.floor(Math.random() * possible.length);
        if(operation) student.grade += modifyAmount;
        else student.grade -= modifyAmount;
    }

}

const instructor = new Instructor({
    name: 'Seijuro Hiko',
    role: 'Master',
    location: 'Japan',
    age: 30,
    favLanguage: 'Japanese',
    specialty: 'Hiten Mitsurugi',
    catchPhrase: 'It is foolish to listen to one who will not listen to you. Do as you wish.'
});

const student = new Student({
    name: 'Kenshin Himura',
    role: 'Battousai',
    location: 'Japan',
    age: 15,
    previousBackground: 'Peasant',
    className: 'Seijuro Hiko\'s Students',
    favSubjects: ['Bringing Peace & Freedom', 'Saving Lives', 'Sleeping with his Sword']
});

const project_manager = new Project_Manager({
    name: 'Katsura Kogoro',
    role: 'Leader of Chosu Ishin Shishi',
    location: 'Japan',
    age: 31,
    gradClassName: 'Chosu Ishin Shishi',
    favInstructor: 'Seijuro Hiko'
});

console.log(instructor.name);
console.log(instructor.age);
console.log(instructor.catchPhrase);
Instructor.demo('battojutsu');

console.log(student.name);
console.log(student.previousBackground);
console.log(student.favSubjects);
student.listsSubjects();
student.PRAssignment('battojutsu');
Instructor.grade(student, 'battojutsu');
student.sprintChallenge('Hiten Mitsurugi');

console.log(project_manager.name);
console.log(project_manager.role);
console.log(project_manager.gradClassName);
project_manager.standUp('Kyoto');
project_manager.debugsCode(student, 'Meiji Revolution');

instructor.modifyGrade(student);
console.log(student.grade);
student.graduate();

project_manager.modifyGrade(student);
console.log(student.grade);
student.graduate();
