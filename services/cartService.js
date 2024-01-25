const CartModel = require('../models/cartModel');

// lấy tất cả giỏ hàng
const getAllCarts = async () => {
    try {
        const carts = await CartModel.find().populate('userId');
        return carts;
    } catch (error) {
        return false;
    }
};

// thêm giỏ hàng
const addCart = async (cartData) => {
    try {
        const newCart = await CartModel.create(cartData);
        return newCart;
    } catch (error) {
        return false;
    }
};

// sửa giỏ hàng
const updateCart = async (id, updatedCartData) => {
    try {
        const updatedCart = await CartModel.findOneAndUpdate(
            { _id: id },
            { $set: updatedCartData }
        );
        return updatedCart;
    } catch (error) {
        return false;
    }
};

//xóa giỏ hàng
const deleteCart = async (id) => {
    try {
        const deletedCart = await CartModel.findOneAndDelete({ _id: id });
        return deletedCart;
    } catch (error) {
        return false;
    }
};

module.exports = {
    getAllCarts, addCart, updateCart, deleteCart
};
