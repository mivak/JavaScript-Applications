// Write a function that by a given array of students finds the student with highest marks

window.onload = function () {
    'use strict'

    if (typeof require !== 'undefined') {
        _ = require('./underscore.js');
    }

    var students = [
        {
            firstName: 'Pesho',
            lastName: 'Petrov',
            age: 25,
            mark: 4
        },
        {
            firstName: 'Ani',
            lastName: 'Borisova',
            age: 19,
            mark: 3
        },
        {
            firstName: 'Gosho',
            lastName: 'Borisov',
            age: 34,
            mark: 2
        },
        {
            firstName: 'Doncho',
            lastName: 'Minkov',
            age: 26,
            mark: 5
        },
        {
            firstName: 'Nikolay',
            lastName: 'Kostov',
            age: 23,
            mark: 6
        },
        {
            firstName: 'Ivaylo',
            lastName: 'Kenov',
            age: 27,
            mark: 5
        }
    ];

    var topStudents = _.sortBy(students, function (student) {
        return student.mark;
    });

    var topStudent = _.last(topStudents);

    console.log('Top student\n');
    console.log(topStudent.firstName + ' ' + topStudent.lastName + ' ' + topStudent.age + ' ' + topStudent.mark);
};