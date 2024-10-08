const connectDb = require('../db/Connect');
const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: {type : String, required: true},
    description: {type : String, required: true},
    statusTask : {type: Boolean, required: true}
})

const Task = mongoose.model('Task', TaskSchema)

module.exports = Task;