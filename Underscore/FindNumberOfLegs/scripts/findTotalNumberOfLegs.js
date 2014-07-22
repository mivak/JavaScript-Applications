// By a given array of animals, find the total number of legs.
// Each animal can have 2, 4, 6, 8 or 100 legs

window.onload = function () {
    'use strict'

    if (typeof require !== 'undefined') {
        _ = require('./underscore.js');
    }

    var animals = [
        {
            species: 'monkey',
            name: 'Boncho',
            numberOfLegs: 2
        },
        {
            species: 'cat',
            name: 'Ali',
            numberOfLegs: 6
        },
        {
            species: 'monkey',
            name: 'Tony',
            numberOfLegs: 8
        },
        {
            species: 'dog',
            name: 'Pesho',
            numberOfLegs: 4
        },
        {
            species: 'monkey',
            name: 'Alex',
            numberOfLegs: 4
        },
        {
            species: 'dog',
            name: 'Sharo',
            numberOfLegs: 100
        },
        {
            species: 'cat',
            name: 'Tom',
            numberOfLegs: 2
        }
    ];

    var totalNumberOfLegs = _.reduce(animals, function (memo, animal) {
        return memo + animal.numberOfLegs;
    }, 0);

    console.log('Total number of legs: ' + totalNumberOfLegs);
};