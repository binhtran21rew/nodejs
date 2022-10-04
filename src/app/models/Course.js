const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator')
const mongooseDelete = require('mongoose-delete')

const Schema = mongoose.Schema;

const Course = new Schema({
    name: { type: String, maxLenght: 255, required: true},
    description: { type: String, maxLenght: 600 },
    image: { type: String, maxLenght: 255 },
    slug: {type: String, slug: 'name', unique: true},
    videoID: {type: String},
},{
    timestamps: true,
})

// Add plugin
mongoose.plugin(slug)
Course.plugin(mongooseDelete, {
    overrideMethods: 'all', 
    deletedAt: true
})
module.exports = mongoose.model('Course', Course);
