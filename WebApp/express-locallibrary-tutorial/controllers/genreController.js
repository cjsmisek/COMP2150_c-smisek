var Genre = require('../models/genre');


// Display list of genres
exports.genre_list = function(req, res) {
    res.send('NOT IMPLEMENTED: genres list.');
};

// Display specific genre by ID
exports.genre_detail = function(req, res) {
    res.send('NOT IMPLEMENTED: genre detail: ' + req.params.id);
};

// Display genre create form (GET)
exports.genre_create_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre create GET.');
};

// Display genre create form (POST)
exports.genre_create_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre create POST.');
};

// Delete genre form (GET)
exports.genre_delete_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete GET.');
};

// Display genre form (POST)
exports.genre_delete_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete POST.');
};

// Update genre form (GET)
exports.genre_update_get = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete GET.');
};

// Update genre form (POST)
exports.genre_update_post = function(req, res) {
    res.send('NOT IMPLEMENTED: genre delete POST.');
};