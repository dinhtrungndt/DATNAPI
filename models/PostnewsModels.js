const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const productSchema = new Schema({
    id: { type: ObjectId },
    title: { type: String, require: true },
    status: {type: Boolean},
    detail: { type: String, require: true },
    location: {type: String, require: true},
    price: {type: Number, require: true},
    created_AT: {type: String, require: true},
    files: {type: String, require: true},
    role:{type: String, require: true},
    activable: {type: Boolean},
    userid: { type: ObjectId, ref: 'User' },
    brandid: { type: ObjectId, ref: 'brand' },
   

});

module.exports = mongoose.model.postnew || mongoose.model('postnew', productSchema);