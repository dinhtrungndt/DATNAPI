const HistoryService = require('../services/historyService');

const getAllHistory = async (req, res, next) => {
    try {
        const historyRecords = await HistoryService.getAllHistory();
        return res.status(200).json({ result: true, message: 'GetAll History Successful', historyRecords: historyRecords });
    } catch (error) {
        console.error('Error in getAllHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in getAllHistory' });
    }
};
const getHistoryByUserID = async (req, res, next) => {
    try {
        const UserID = req.query.userID;
        const historyRecords = await HistoryService.getHistoryByUserID(UserID);
        return res.status(200).json({ result: true, message: 'GetAll History Successful', historyRecords: historyRecords });
    } catch (error) {
        console.error('Error in getAllHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in getAllHistory' });
    }
};

const addHistory = async (req, res, next) => {
    try {
        const historyData = req.body;
        const newHistoryRecord = await HistoryService.addHistory(historyData);
        return res.status(200).json({ result: true, message: 'Add History Successful', historyRecord: newHistoryRecord });
    } catch (error) {
        console.error('Error in addHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in addHistory' });
    }
};

const updateHistory = async (req, res, next) => {
    try {
        const id = req.body.id;
        const updatedHistoryData = req.body;
        const updatedHistoryRecord = await HistoryService.updateHistory(id, updatedHistoryData);
        return res.status(200).json({ result: true, message: 'Update History Successful', historyRecord: updatedHistoryRecord });
    } catch (error) {
        console.error('Error in updateHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in updateHistory' });
    }
};

const deleteHistory = async (req, res, next) => {
    try {
        const id = req.query.id;
        const deletedHistoryRecord = await HistoryService.deleteHistory(id);
        return res.status(200).json({ result: true, message: 'Delete History Successful', historyRecord: deletedHistoryRecord });
    } catch (error) {
        console.error('Error in deleteHistory:', error);
        return res.status(500).json({ result: false, message: 'Error in deleteHistory' });
    }
};

module.exports = {
    getAllHistory, addHistory, updateHistory, deleteHistory, getHistoryByUserID,
};
