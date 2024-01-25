const adModel = require('../models/AdModel');

const getAd = async () => {
    const ad = await adModel.find();
    return ad;
}

//add
const addAds = async (adsData) => {
    try {
        const newAds = new adModel(adsData);
        const savedads = await newAds.save();
        return savedads;
    } catch (error) {
        return false;
    }
};

//delete
const deleteAds = async (id) => {
    try {
        const adToDelete = await adModel.findById(id);

        if (!adToDelete) {
            throw new Error('Không tìm thấy');
        }
        // kiểm tra khóa ngoại iproduct có thì không xóa >>
        if (adToDelete.idProduct) {
            throw new Error('Không thể xóa khi có idProduct');
        }
        const deleteAds= await adModel.findByIdAndDelete(id);
        return deleteAds;
    } catch (error) {
        return false;
    }
};

// edit
const updateAds = async (id, typeAd) => {
    try {
        const updateAds = await adModel.findByIdAndUpdate(id, { typeAd }, { new: true });
        return updateAds;
    } catch (error) {
        return false;
    }
};

module.exports = {
    getAd,addAds,deleteAds,updateAds
}