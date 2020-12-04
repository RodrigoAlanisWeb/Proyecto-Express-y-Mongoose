const mongoose =  require('mongoose');
const Schema = mongoose.Schema;

const task = new Schema({
    name : String,
    description: String,
    status:{
        type:String,
        default: 'no done',
    },
    date:{
        type: Date,
        default: new Date(),
    },
});

module.exports =  mongoose.model('Task',task);