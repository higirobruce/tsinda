var mongoose = require('mongoose');
var Chapters = require('mongoose').model('Chapter');
var Schema = mongoose.Schema;


var schema = new Schema({
    title: {type:String, trim:true},
    chapter: {type: Schema.ObjectId},
    body: {type: String},
    content_index: Number,
    done: [{
        
    }]
});

module.exports = mongoose.model('Content', schema);