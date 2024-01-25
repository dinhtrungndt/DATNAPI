const brandService = require('../services/BrandService');

const getType = async (res) => {
    try {
        const type = await brandService.getType();
        if (type) {
            return res.status(200).json({ result: true, message: 'getType Successful', data: type });
        }
        return res.status(400).json({ result: false, message: 'null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getType' });
    }
};

// get type by categoryid
const getTypebyCategorydetailid = async (req, res, next) => {
    try {
        const { idtype } = req.params;
        const typeByCategorydetailId = await brandService.getTypegByCategoryDetailId(idtype);
        if (typeByCategorydetailId) {
            return res.status(200).json({ result: true, message: 'getTypeByidCategory Successful', data: typeByCategorydetailId });
        }
        return res.status(400).json({ result: false, message: 'getTypeByidCategory null' });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Error getTypeByidCategory' });
    }
};
//add
const addBrandController = async (req, res) => {
    try {
        const brandData = req.body;
        const Data = await brandService.addBrandService(brandData);
        res.status(200).json({ result: true, message: 'Save Brand  successfully', data: Data });
    } catch (error) {
        console.error(error);
        res.status(500).json({ result: false, message: 'Error savedProductDetail Brand' });
    }
};
//edit
const updateType = async (req, res, next) => {
    try {
        const { id } = req.params;
        const { nameBrand,description } = req.body;
        const updateType = await brandService.updateType(id,nameBrand,description);
        if (updateType) {
            return res.status(200).json({ result: true, message: 'Update Type Successful', data: updateType });
        }
        return res.status(400).json({ result: false, message: 'Type null' })
    } catch (error) {
        // console.error('Error updating Type:', error.message);
        return res.status(500).json({ result: false, message: 'Error updating Type' });
    }
};

//delete
const deleteType = async (req, res, next) => {
    try {
        const { id } = req.params;
        const deleteTypes = await brandService.deleteType(id);

        if (deleteTypes) {
            return res.status(200).json({ result: true, message: 'Delete Type Successful' });
        }
        return res.status(400).json({ result: false, message: 'Type not found for delete' });
    } catch (error) {
        console.error('Error deleting Type:', error.message);
        return res.status(500).json({ result: false, message: 'Error deleting Type' });
    }
};



module.exports = {
    getType, addBrandController,updateType,deleteType,getTypebyCategorydetailid
};