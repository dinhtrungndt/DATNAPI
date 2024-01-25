const SaveModel = require('../models/SaveModel');

const getSave = async () => {
    try {
        const Save = await SaveModel.find().populate('userid').populate('postid');
        return Save
    }
    catch (error) {
        return false
    }
}
const addSave = async (data) => {
    try {
        const newSave = new SaveModel(data);
        const savedSave = await newSave.save();
        return savedSave;
    }
    catch (error) {
        return false
    }
}
const DeleteSave = async (id) => {
    try {
        const Save = await SaveModel.findByIdAndDelete(id);
        return Save
    }
    catch (error) {
        return false
    }
}
const UpdateSave = async (id, postid,createAt, userid) => {
    try {
        const createAt = Date.now();
        const Save = await SaveModel.findByIdAndUpdate(id, { postid, createAt, userid });
        return Save
    }
    catch (error) {
        return false
    }
}
module.exports = {
    getSave,
    addSave,
    DeleteSave,
    UpdateSave
}
