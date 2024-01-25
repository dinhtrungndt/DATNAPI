const express = require('express')
const router = express.Router();
const typesController = require('../controllers/TypesController')

//test
router.get('/', typesController.getCategorydetail);
//byid
router.get('/:idCategory', typesController.getCategorydetailbyid);
// add Ads
router.post('/add', typesController.addCategoryDetail);
// // delete
router.delete('/delete/:id', typesController.deleteCategoryDetail);
//edit
router.post('/edit/:id', typesController.updateCategoryDetail);

module.exports = router