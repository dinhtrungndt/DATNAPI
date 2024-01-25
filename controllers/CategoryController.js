const categoryService = require('../services/CategoryServices');

const getCategory = async (res) => {
    try {
        const category = await categoryService.getCategory();
        if (category) {
            return res.status(200).json({ result: true, message: 'getCategory Successful', data: category });
        }
        return res.status(400).json({ result: false, message: 'null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getCategory' });
    }
};

const addCategory = async (req, res) => {
    try {
        const categoryData = req.body;
        const savedCategory = await categoryService.addCategories(categoryData);
        res.status(200).json({ result: true, message: 'Category added successfully', data: savedCategory });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error adding Category' });
    }
};

const updateCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name,img, icon} = req.body;
        const updatedCategory = await categoryService.updateCategory(id, name, img,icon);
        if (updatedCategory) {
            return res.status(200).json({ result: true, message: 'Update Category Successful', data: updatedCategory });
        }
        return res.status(400).json({ result: false, message: 'null' })
    } catch (error) {
        console.error('Error updating Category:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating Category' });
    }
};
const deleteCategory = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCategory = await categoryService.deleteCategory(id);

        if (deleteCategory) {
            return res.status(200).json({ result: true, message: 'Delete Category Successful' });
        }
        return res.status(400).json({ result: false, message: 'getMessage null' })
    } catch (error) {
        console.error('Error deleting Category:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting Category' });
    }
};
// upload img
const upLoadImg = (req, res, next) => {
    try {
        if (!req.file) {
            return res.status(400).json({ result: false, message: 'No file uploaded.' });
        }
        const tempPath = req.file;
        const targetPath = path.join(__dirname, './public/uploads', req.file.filename);
        console.log("check upload image: ", tempPath);
        path.save();
        return res.status(200).json({ result: true, message: 'upload image Successful' });
    } catch (error) {
        console.log(error)
        return res.status(500).json({ result: false, message: 'Error updating Ads' });
    }
}
module.exports = {
    getCategory,addCategory,updateCategory,deleteCategory,upLoadImg
};