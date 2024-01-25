const express = require('express')
const router = express.Router();

const conversationController = require('../controllers/conversationController');
const messageController = require('../controllers/messageController');
const chatsController = require('../controllers/chatController');

//conversationApi
router.get('/get-conversation', conversationController.getConversation);
router.get('/get-conversation-by-members/:members', conversationController.getConversationByMembers);
router.post('/add-conversation/:members', conversationController.addConversation);


//messageApi
router.get('/get-message/:conversationId', messageController.getMessage);
router.post('/add-message/:conversationId/:senderId/:content', messageController.addMessage);

module.exports = router;