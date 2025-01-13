const mongoose = require('mongoose');
const Projects = mongoose.model('Projects', {
    title: {
        type: String
    },
    description: {
        type: String
    },
    dateD: {
        type: Date
    },
    dateF: {
        type: Date
    },
    budget: {
        type: Number
    }
})
module.exports = Projects;