const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const categorydetailSchema = new Schema({
    id: { type: ObjectId },
    name: { type: String, required: true }, 
    img: { type: String, required: true},
    icon: { type: String, required: true},
    idCategory: {type: ObjectId, ref: 'category'},

});

module.exports = mongoose.model.type || mongoose.model('type', categorydetailSchema);