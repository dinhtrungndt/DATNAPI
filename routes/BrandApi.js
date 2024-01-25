const express = require('express')
const router = express.Router();
const brandController = require('../controllers/BrandControllers');


// lấy danh sách 
router.get('/', async (req, res) => {
    await brandController.getType(res);
});
//byid
router.get('/:idtype', brandController.getTypebyCategorydetailid);

// add product
router.post('/add', brandController.addBrandController);

//edit
router.post('/edit/:id', brandController.updateType);

// delete
router.delete('/delete/:id', brandController.deleteType);

module.exports = router