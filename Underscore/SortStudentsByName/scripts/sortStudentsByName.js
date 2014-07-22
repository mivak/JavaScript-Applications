// Write a method that from a given array of students finds all students whose first name is 
// before its last name alphabetically. Print the students in descending order by full name.
// Use Underscore.js

window.onload = function () {
    'use strict'

    if (typeof require !== 'undefined') {
        _ = require('./underscore.js');
    }

    var students = [
        {
            firstName: 'Pesho',
            lastName: 'Petrov'
        },
        {
            firstName: 'Ani',
            lastName: 'Borisova'
        },
        {
            firstName: 'Gosho',
            lastName: 'Borisov'
        },
        {
            firstName: 'Doncho',
            lastName: 'Minkov'
        },
        {
            firstName: 'Nikolay',
            lastName: 'Kostov'
        },
        {
            firstName: 'Ivaylo',
            lastName: 'Kenov'
        }
    ];

    var studentsFirstNameBeforeLastName = _.filter(students, function (student) {
        return student.firstName < student.lastName;
    });

    var sortedByFullName = _.sortBy(studentsFirstNameBeforeLastName, function (student) {
        return student.firstName + student.lastName;
    });

    var sortedByFullNameDescending = sortedByFullName.reverse();

    console.log('All student whose first name is before their last name alphabetically\n');
    _.each(sortedByFullNameDescending, function (student) {
        console.log(student.firstName + ' ' + student.lastName);
    });
};