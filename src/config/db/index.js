const mongoose = require('mongoose');
async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/project_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log('Connecting');
    } catch (err) {
        console.log('Connect fail');
    }
}

module.exports = { connect };
