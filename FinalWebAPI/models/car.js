var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var CarSchema = new Schema(
{
    model: {type: String, required: true},
    manufacturer: {type: String, required: true},
    modelDate: {type: String, required: true},
    bodyType:{type: String, required: true}
    }
);

CarSchema.virtual('url').get(function(){
    return '/' + this._id;
});

//Export Car Model
module.exports = mongoose.model('Car', CarSchema);