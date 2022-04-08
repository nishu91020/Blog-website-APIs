const mongoose = require('mongoose');

const BlogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        maxLength: 100
    },
    content: {
        type: String,
        required: true,
        maxlength: 3000
    },
    postedOn: {
        type: Date,
        required: true
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    }
});
module.exports = mongoose.model('Blog', BlogSchema);
