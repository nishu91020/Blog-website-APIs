const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    date_of_birth: {
        type: Date,
        required: true
    },
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Blog',
            required: true
        }
    ]
});
module.exports = mongoose.model('User', UserSchema);
