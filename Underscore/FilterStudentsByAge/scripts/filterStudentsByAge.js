// Write function that finds the first name and last name of all students with age
// between 18 and 24. Use Underscore.js

window.onload = function () {
    'use strict'

    if (typeof require !== 'undefined') {
        _ = require('./underscore.js');
    }

    var students = [
        {
            firstName: 'Pesho',
            lastName: 'Petrov',
            age: 25
        },
        {
            firstName: 'Ani',
            lastName: 'Borisova',
            age: 19
        },
        {
            firstName: 'Gosho',
            lastName: 'Borisov',
            age: 34
        },
        {
            firstName: 'Doncho',
            lastName: 'Minkov',
            age: 26
        },
        {
            firstName: 'Nikolay',
            lastName: 'Kostov',
            age: 23
        },
        {
            firstName: 'Ivaylo',
            lastName: 'Kenov',
            age: 27
        }
    ];

    var filteredStudentsByAge = _.filter(students, function (student) {
        return student.age >= 18 && student.age <= 24;
    });

    console.log('All student older than 18 and younger than 24\n');
    _.each(filteredStudentsByAge, function (student) {
        console.log(student.firstName + ' ' + student.lastName + ' ' + student.age);
    });
};