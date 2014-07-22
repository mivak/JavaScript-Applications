// Write a function that by a given array of animals,
// groups them by species and sorts them by number of legs

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

    var sortedAnimals = _.sortBy(animals, function (animal) {
        return animal.numberOfLegs
    });

    var groupedAnimals = _.groupBy(sortedAnimals, 'species');
    console.log(groupedAnimals);
};