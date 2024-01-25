const categorylModel = require('../models/CategoriesModel');

const getCategory = async () => {
     try {
          const category = await categorylModel.find();
          return category
     }
     catch (error) {
          return false
     }
}
//add
const addCategories = async (categoryData) => {
     try {
         const newCategory = new categorylModel(categoryData);
         const savedCategory = await newCategory.save();
         return savedCategory;
     } catch (error) {
         return false;
     }
 };
 // edit
 const updateCategory = async (id, name,img,icon) => {
     try {
         const updateCategorys = await categorylModel.findByIdAndUpdate(
             id,
             { name, img, icon},{ new: true }
         );
         return updateCategorys;
     } catch (error) {
         return false;
     }
 };
 
   const deleteCategory = async (id) => {
     try {
         const deleteCategory = await categorylModel.findByIdAndDelete(id);
         return deleteCategory;
     } catch (error) {
         return false;
     }
 };

module.exports = {
    getCategory,addCategories,updateCategory,deleteCategory
}