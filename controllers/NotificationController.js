const NotificationServices = require('../services/NotificationServices');

const getNotification = async (req, res, next) => {
    try {
        const Notification = await NotificationServices.getNotification();
        if (Notification) {
            return res.status(200).json({ result: true, message: 'getNotification Succesful', Notification: Notification })
        }
        return res.status(400).json({ result: false, message: 'getNotification null' })

    } catch (error) {
        console.log(">>>>>>>>>>>>" + error)
        return res.status(500).json({ result: false, message: 'Error getNotification' })
    }
}
const addNotification = async (req, res, next) => {
    try {
        const addNotifi = req.body;
        const saveNotifi = await NotificationServices.addNotification(addNotifi);

        if (saveNotifi) {
            return res.status(200).json({ result: true, message: 'addNotification Succesful', Notification: saveNotifi });
        } else {
            return res.status(400).json({ result: false, message: 'addNotification null' });
        }
    } catch (error) {
        console.log(">>>>>>>>>>>>>> 255555", error);
        return res.status(500).json({ result: false, message: 'Error addNotification' });
    }
}

const DeleteNotification = async (req, res, next) => {
    try {
        const { id } = req.params;
        const Notification = await NotificationServices.DeleteNotification(id);
        if (Notification) {
            return res.status(200).json({ result: true, message: 'DeleteNotification Succesful', Notification: Notification })
        }
        return res.status(400).json({ result: false, message: 'DeleteNotification null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error DeleteNotification' })
    }
}
const UpdateNotification = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { title, content, userid,isRead } = req.body;
        const Notification = await NotificationServices.UpdateNotification(id, title, content, userid,isRead);
        if (Notification) {
            return res.status(200).json({ result: true, message: 'UpdateNotification Succesful', Notification: Notification })
        }
        return res.status(400).json({ result: false, message: 'UpdateNotification null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error UpdateNotification' })
    }
}
module.exports = {
    getNotification,
    addNotification,
    DeleteNotification,
    UpdateNotification
}
