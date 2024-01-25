const express = require('express')
const router = express.Router();
const adController = require('../controllers/Adcontroller');
const upload = require("../middleware/upload")
// const upload = multer({ dest: 'public/images/' })
// lấy danh sách 
router.get('/', async (req, res) => {
    await adController.getAd(res);
});

// add Ads
router.post('/add', adController.addAds);

// delete
router.delete('/delete/:id', adController.deleteAds);

//edit
router.post('/edit/:id', adController.updateAds);

//up load img
router.post('/upload-img', upload.single('image'), adController.upLoadImg);

router.get('/test-get-img', (req, res) => {
    return res.render('index')
});

module.exports = router