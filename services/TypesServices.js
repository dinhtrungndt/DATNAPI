const TypesModel = require('../models/TypesModels');
const getCategoryDetail = async () => {
    const categoryDetail = await TypesModel.find();
    return categoryDetail
}

const getCategoryDetailByCategoryId = async (idCategory) => {
    try {
        const categoryDetail = await TypesModel.find({ idCategory });
        return categoryDetail;
    } catch (error) {
        return false;
    }
};


//add
const addCategoryDetail = async (categoryDetailData) => {
    try {
        const newCategoryDetailData = new TypesModel(categoryDetailData);
        const saveCategoryDetailData = await newCategoryDetailData.save();
        return saveCategoryDetailData;
    } catch (error) {
        return false;
    }
};

//delete
const deleteCategoryDetail = async (id) => {
    try {
        const categoryadlDelete = await TypesModel.findById(id);

        if (!categoryadlDelete) {
            throw new Error('Không tìm thấy');
        }
        // kiểm tra khóa ngoại iproduct có thì không xóa >>
        if (categoryadlDelete.idCategory) {
            throw new Error('Không thể xóa khi có idCategory');
        }
        const deleteCategoryDetail = await categoryDetailModel.findByIdAndDelete(id);
        return deleteCategoryDetail;
    } catch (error) {
        return false;
    }
};

// edit
const updateCategoryDetails = async (id, name,img,icon) => {
    try {
        const updateCategoryDetails = await TypesModel.findByIdAndUpdate(id, { name,img,icon }, { new: true });
        return updateCategoryDetails;
    } catch (error) {
        return false;
    }
};


module.exports = {
    getCategoryDetail,addCategoryDetail,updateCategoryDetails,deleteCategoryDetail,getCategoryDetailByCategoryId
}