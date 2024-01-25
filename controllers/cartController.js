const CartService = require('../services/cartService')

const getAllCarts = async (req, res, next) => {
    try {
        const carts = await CartService.getAllCarts();
        return res.status(200).json({ result: true, message: 'GetAll Carts Successful', carts: carts });
    } catch (error) {
        console.error('Error in getAllCarts:', error);
        return res.status(500).json({ result: false, message: 'Error in getAllCarts' });
    }
};

const addCart = async (req, res, next) => {
    try {
        const cartData = req.body;
        const newCart = await CartService.addCart(cartData);
        return res.status(200).json({ result: true, message: 'Add Cart Successful', cart: newCart });
    } catch (error) {
        console.error('Error in addCart:', error);
        return res.status(500).json({ result: false, message: 'Error in addCart' });
    }
};

const updateCart = async (req, res, next) => {
    try {
        const id = req.params.id;
        const updatedCartData = req.body;
        const updatedCart = await CartService.updateCart(id, updatedCartData);
        return res.status(200).json({ result: true, message: 'Update Cart Successful', cart: updatedCart });
    } catch (error) {
        console.error('Error in updateCart:', error);
        return res.status(500).json({ result: false, message: 'Error in updateCart' });
    }
};

const deleteCart = async (req, res, next) => {
    try {
        const id = req.query.id;
        const deletedCart = await CartService.deleteCart(id);
        return res.status(200).json({ result: true, message: 'Delete Cart Successful', cart: deletedCart });
    } catch (error) {
        console.error('Error in deleteCart:', error);
        return res.status(500).json({ result: false, message: 'Error in deleteCart' });
    }
};

module.exports = {
    getAllCarts, addCart, updateCart, deleteCart
};
