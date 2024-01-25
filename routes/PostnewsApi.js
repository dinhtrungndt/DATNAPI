const express = require('express')
const router = express.Router();
const postController = require('../controllers/PostnewsController');

//test
router.get('/', postController.getProduct);
// router.post('/add-product', testController.addTest);
// add product
router.post('/add', postController.addProduct);
//edit
router.post('/edit/:id', postController.updateProduct);
// delete
router.delete('/delete/:id', postController.deleteProduct);


module.exports = router