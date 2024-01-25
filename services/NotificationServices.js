const NotificationModel = require('../models/NotificationModels');

const getNotification = async () => {
     try {
          const Notification = await NotificationModel.find().populate('userid');
          return Notification
     }
     catch (error) {
          return false
     }
}
const addNotification = async (data) => {
     try {
          const newNotification = new NotificationModel(data);
          const savedNotification = await newNotification.save();
          return savedNotification;
     }
     catch (error) {
          return false
     }
}
const DeleteNotification = async (id) => {
     try {
          const Notification = await NotificationModel.findByIdAndDelete(id);
          return Notification
     }
     catch (error) {
          return false
     }
}
const UpdateNotification = async (id, title, content, userid, isRead) => {
     try {
          const Notification = await NotificationModel.findByIdAndUpdate(id, { title, content, userid, isRead });
          return Notification
     }
     catch (error) {
          return false
     }
}
module.exports = {
     getNotification,
     addNotification,
     DeleteNotification,
     UpdateNotification
}
