const mongoose = require('mongoose');
const slug = require('mongoose-slug-updater');

mongoose.plugin(slug);

const Schema = mongoose.Schema;


const Course = new Schema({
    name: { type: String, maxLength: 255 },
    description: { type: String },
    image: { type: String, maxLength: 255 },
    videoId: { type: String, maxLength: 255 },
    level: { type: String, maxLength: 255 },
    // createAt: { type: Date, default: Date.now },
    // updateAt: { type: Date, default: Date.now },
    slug: { type: String, slug: 'name', unique: true }

}, {
    timestamps: true,
});

module.exports = mongoose.model('Course', Course);