const conversationModel = require('../models/conversationsModel')

const getConversation = async () => {
    try {

        const conversation = await conversationModel.find();

        return conversation;
    } catch (error) {
        return false
    }
}

const getConversationByMembers = async (members) => {
    try {

        const conversation = await conversationModel.find({ members: members });

        return conversation;
    } catch (error) {
        return false
    }
}
const addConversation = async (conversationData) => {
    try {

        const conversation = await conversationModel.create({ members: ['6587edd36c13142ab0adcd86', '6587eeda6c13142ab0adcd96'] });
        console.log(conversation)
        return conversation;
    } catch (error) {
        return false
    }
}

module.exports = {
    addConversation, getConversation, getConversationByMembers
}