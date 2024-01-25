const express = require('express')
const router = express.Router();
const userController = require('../controllers/userController')
const cartController = require('../controllers/cartController')
const historyController = require('../controllers/historyController')

// User routes
router.get('/user', userController.getAllUsers);
router.post('/login-user', userController.loginUser);
router.post('/register-user', userController.registerUser );
router.post('/add-user', userController.addUser);
router.post('/update-user', userController.updateUser);
router.delete('/delete-user', userController.deleteUser);

// Cart routes
router.get('/cart', cartController.getAllCarts);
router.post('/add-cart', cartController.addCart);
router.post('/update-cart', cartController.updateCart);
router.delete('/delete-cart', cartController.deleteCart);

// History routes
router.get('/history', historyController.getAllHistory);
router.get('/user/history', historyController.getHistoryByUserID);
router.post('/add-history', historyController.addHistory);
router.post('/update-history', historyController.updateHistory);
router.delete('/delete-history', historyController.deleteHistory);



module.exports = router