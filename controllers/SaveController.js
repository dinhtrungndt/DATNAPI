const SaveServices = require('../services/SaveService');

const getSave = async (req, res, next) => {
    try {
        const Save = await SaveServices.getSave();
        if (Save) {
            return res.status(200).json({ result: true, message: 'getSave Succesful', Save: Save })
        }
        return res.status(400).json({ result: false, message: 'getSave null' })

    } catch (error) {
        console.log(">>>>>>>>>>>>" + error)
        return res.status(500).json({ result: false, message: 'Error getSave' })
    }
}
const addSave = async (req, res, next) => {
    try {
        const addSave = req.body;
        const saveSave = await SaveServices.addSave(addSave);

        if (saveSave) {
            return res.status(200).json({ result: true, message: 'addSave Succesful', Save: saveSave });
        } else {
            return res.status(400).json({ result: false, message: 'addSavenull' });
        }
    } catch (error) {
        console.log(">>>>>>>>>>>>>> 255555", error);
        return res.status(500).json({ result: false, message: 'Error addSave' });
    }
}

const DeleteSave = async (req, res, next) => {
    try {
        const { id } = req.params;
        const Save = await SaveServices.DeleteSave(id);
        if (Save) {
            return res.status(200).json({ result: true, message: 'DeleteSave Succesful', Save: Save })
        }
        return res.status(400).json({ result: false, message: 'DeleteSave null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error DeleteSave' })
    }
}
const UpdateSave = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { createAt } = Date.now();
        const { postid, userid } = req.body;
        const Save = await SaveServices.UpdateSave(id, postid, createAt, userid);
        if (Save) {
            return res.status(200).json({ result: true, message: 'UpdateSave Succesful', Save: Save })
        }
        return res.status(400).json({ result: false, message: 'UpdateSave null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error UpdateSave' })
    }
}
module.exports = {
    getSave,
    addSave,
    DeleteSave,
    UpdateSave
}
