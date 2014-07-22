// By a given collection of books, find the most popular author
// (the author with the highest number of books)

window.onload = function () {
    'use strict'

    if (typeof require !== 'undefined') {
        _ = require('./underscore.js');
    }

    var books = [
        {
            title: 'The Pragmatic Programmer',
            author: 'Andrew Hunt'
        },
        {
            title: 'Continuous Delivery',
            author: 'Jez Humble'
        },
        {
            title: 'Pragmatic Thinking and Learning',
            author: 'Andrew Hunt'
        },
        {
            title: 'Clean Code',
            author: 'Robert C. Martin'
        },
        {
            title: 'Pragmatic Unit Testing in C# with NUnit',
            author: 'Andrew Hunt'
        },
        {
            title: 'Continuous Delivery',
            author: 'Jez Humble'
        },
        {
            title: 'Refactoring',
            author: 'Martin Fowler'
        }
    ];

    var groupedBooks = _.groupBy(books, 'author');

    var sortedBooks = _.sortBy(groupedBooks, function (book) {
        return book.length;
    });

    var mostFamousAuthor = _.last(sortedBooks)[0].author;

    console.log(mostFamousAuthor);
};