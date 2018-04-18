var Book = require('../models/book');
var Author = require('../models/author');
var Genre = require('../models/genre');
var BookInstance = require('../models/bookinstance');
var async = require('async');

// Home page of our app
exports.index = function(req, res) {
    async.parallel({
        book_count: function(callback) {
            Book.count({}, callback);
        },
        book_instance_count: function(callback) {
            BookInstance.count({}, callback);
        },
        book_instance_avalible_count: function(callback) {
            BookInstance.count({status: 'Available'}, callback);
        },
        author_count: function(callback) {
            Author.count({}, callback);
        },
        genre_count: function(callback) {
            Genre.count({}, callback);
        }
    }, function(err, result) {
        res.render('index', {title: 'Local Library Home', error: err, data: result});
    });
}

// Display list of book
exports.book_list = function(req, res) {
    res.send('NOT IMPLEMENTED: Book list.');
};

// Display specific book by ID
exports.book_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Book detail: ' + req.params.id);
};

// Display book create form (GET)
exports.book_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create GET.');
};

// Display book create form (POST)
exports.book_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book create POST.');
};

// Delete book form (GET)
exports.book_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET.');
};

// Display book form (POST)
exports.book_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST.');
};

// Update book form (GET)
exports.book_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete GET.');
};

// Update book form (POST)
exports.book_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Book delete POST.');
};