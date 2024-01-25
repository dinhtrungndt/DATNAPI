const express = require('express')
const router = express.Router();
const Notification = require('../controllers/NotificationController');

router.get('/', Notification.getNotification);

router.post('/add', Notification.addNotification);

router.delete('/delete/:id', Notification.DeleteNotification);

router.put('/update/:id', Notification.UpdateNotification);

module.exports = router
