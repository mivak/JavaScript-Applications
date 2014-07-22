// By an array of people find the most common first and last name. Use underscore.

window.onload = function () {
    'use strict'

    if (typeof require !== 'undefined') {
        _ = require('./underscore.js');
    }

    var people = [
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
            firstName: 'Gosho',
            lastName: 'Petrov'
        },
        {
            firstName: 'Doncho',
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
        },
        {
            firstName: 'Doncho',
            lastName: 'Borisov'
        }
    ];

    var groupedByFirstName = _.groupBy(people, 'firstName');

    var sortedByFirstName = _.sortBy(groupedByFirstName, function (person) {
        return person.length;
    });

    var mostCommonFirstName = _.last(sortedByFirstName)[0].firstName;

    console.log(mostCommonFirstName);

    var groupedByLastName = _.groupBy(people, 'lastName');

    var sortedByLastName = _.sortBy(groupedByLastName, function (person) {
        return person.length;
    });

    var mostCommonLastName = _.last(sortedByLastName)[0].lastName;

    console.log(mostCommonLastName);
};