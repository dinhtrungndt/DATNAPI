const typesService = require('../services/TypesServices');

const getCategorydetail = async (req, res, next) => {
    try {
        const categorydetail = await typesService.getCategoryDetail();
        if (categorydetail) {
            return res.status(200).json({ result: true, message: 'getcategorydetail Succesful', data: categorydetail })
        }
        return res.status(400).json({ result: false, message: 'getcategorydetail null' })

    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getcategorydetail' })
    }
}

const getCategorydetailbyid = async (req, res, next) => {
    try {
        const { idCategory } = req.params; // Update the variable name to idCategory
        const categoriesDetailByCategoryId = await typesService.getCategoryDetailByCategoryId(idCategory);
        if (categoriesDetailByCategoryId) {
            return res.status(200).json({ result: true, message: 'getcategorydetailByid Successful', data: categoriesDetailByCategoryId });
        }
        return res.status(400).json({ result: false, message: 'getcategorydetailbyid null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getcategorydetailbyid' });
    }
};

//add
const addCategoryDetail = async (req, res) => {
    try {
        const categoryDetailData = req.body;
        const saveCategoryDetail = await typesService.addCategoryDetail(categoryDetailData);
        res.status(200).json({ result: true, message: 'Save Categorydetail successfully', data: saveCategoryDetail });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error savedProductDetail Categorydetail' });
    }
};

//delete
const deleteCategoryDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteCategoryDetail = await typesService.deleteCategoryDetail(id);
        if (deleteCategoryDetail) {
            return res.status(200).json({ result: true, message: 'Delete Categorydetail Successful' });
        }
    } catch (error) {
        console.error('Error deleting Categorydetail:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting Categorydetail' });
    }
};

//edit
const updateCategoryDetail = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { name, img, icon } = req.body;
        const updateCategoryDetails = await typesService.updateCategoryDetails(id, name, img, icon);
        if (updateCategoryDetails) {
            return res.status(200).json({ result: true, message: 'Update Ads Categorydetail', data: updateCategoryDetails });
        }
    } catch (error) {
        console.error('Error updating Categorydetail:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating Categorydetail' });
    }
};


module.exports = {
    getCategorydetail, addCategoryDetail, updateCategoryDetail, deleteCategoryDetail, getCategorydetailbyid
}