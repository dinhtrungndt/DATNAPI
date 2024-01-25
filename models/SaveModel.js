const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const SaveModel = new Schema({
    id: { type: ObjectId },
    postid: { type: ObjectId, ref: 'post' },
    createAt: { type: Date, default: Date.now },
    userid: { type: ObjectId, ref: 'user' },
},
    {
        versionKey: false
    }
);

module.exports = mongoose.model.SaveModel || mongoose.model('saved', SaveModel);
