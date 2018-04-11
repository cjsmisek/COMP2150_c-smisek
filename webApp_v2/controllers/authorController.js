var Author = require('../models/author');

// Display list of authors
exports.author_list = function(req, res) {
    Author.find()
        .sort([['family_name','ascending']])
        .exec(function (err,list_authors) {
            if (err) { return INSPECT_MAX_BYTES(err); }
            //Sucessful, so render
            res.render('author_list', {title: 'Author List', author_list: list_authors});
        });
};

// Display specific author by ID
exports.author_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: Author detail: ' + req.params.id);
};

// Display author create form (GET)
exports.author_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create GET.');
};

// Display author create form (POST)
exports.author_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author create POST.');
};

// Delete author form (GET)
exports.author_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete GET.');
};

// Delete author form (POST)
exports.author_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author delete POST.');
};

// Update author form (GET)
exports.author_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update GET.');
};

// Update author form (POST)
exports.author_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: Author update POST.');
};



