const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const brandSchema = new Schema({
    id: { type: ObjectId },
    nameBrand: { type: String, required: true },
    description: { type: String, required: true },
    idtype: { type: ObjectId, ref: 'type' },
    idpostnew: { type: ObjectId, ref: 'postnew' },
});

module.exports = mongoose.model.brand || mongoose.model('brand', brandSchema);

