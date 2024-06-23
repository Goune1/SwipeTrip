const mongoose = require('mongoose');

const loginSchema = new mongoose.Schema({
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    payment: { type: String, required: true }
});

module.exports = mongoose.models.users || mongoose.model('users', loginSchema);
