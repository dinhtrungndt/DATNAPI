const postModel = require('../models/PostnewsModels');

const getProduct = async () => {
    const product = await postModel.find();
    return product
}
//add
const addProduct = async (productData) => {
    try {
        const newProduct = new postModel(productData);
        const savedProduct = await newProduct.save();
        return savedProduct;
    } catch (error) {
        return false;
    }
};
// edit
const updateProduct = async (id, title, status, detail, location, price, created_AT, files, role, activable) => {
    try {
        const updatedProduct = await postModel.findByIdAndUpdate(
            id,
            {  title, status, detail, location, price, created_AT, files, role, activable }, { new: true }
        );
        return updatedProduct;
    } catch (error) {
        return false;
    }
};

const deleteProduct = async (id) => {
    try {
        const deletedProduct = await postModel.findByIdAndDelete(id);
        return deletedProduct;
    } catch (error) {
        return false;
    }
};


module.exports = {
    getProduct, addProduct, updateProduct, deleteProduct
}