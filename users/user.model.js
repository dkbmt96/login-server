const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
    username: { type: String, unique: true, require: true },
    hash: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    createdDate: { type: String, default: Date.now }
});

schema.set('toJSON', { virtuals: true});

module.exports = mongoose.model('User', schema);