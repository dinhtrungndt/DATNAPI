const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ObjectId = Schema.ObjectId;

const NotificationSchema = new Schema({
    id: { type: ObjectId },
    title: { type: String, require: true },
    content: { type: String, require: true },
    userid: { type: ObjectId, ref: 'user' },
    isRead: { type: Boolean, default: false },
},
    {
        versionKey: false
    }
);

module.exports = mongoose.model.Notification || mongoose.model('Notification', NotificationSchema);
