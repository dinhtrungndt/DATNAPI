const express = require('express')
const router = express.Router();
const Save = require('../controllers/SaveController');

router.get('/', Save.getSave);

router.post('/add', Save.addSave);

router.delete('/delete/:id', Save.DeleteSave);

router.put('/update/:id', Save.UpdateSave);

module.exports = router
