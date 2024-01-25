const UserModel = require('../models/userModel');
const bcrypt = require('bcryptjs')

//Đăng nhập
const loginUser = async (email, password) => {
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            throw new Error('Người dùng không tồn tại');
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            throw new Error('Mật khẩu không hợp lệ');
        }
        return user;
    } catch (error) {
        return false;
    }
};

// đăng ký
const registerUser = async ({ email, password, phone, name }) => {
    try {
        if (!email || !email.includes('@') || !email.includes('.')) {
            throw new Error('Email không hợp lệ');
        }
        if (password.length < 6) {
            throw new Error('Mật khẩu phải ít nhất 6 ký tự');
        }
        const phoneStr = phone.toString();
        if (phoneStr.length < 10 || phoneStr.length > 11) {
            throw new Error('Số điện thoại phải từ 10 tới 11 số');
        }

        const existingUser = await UserModel.findOne({ email });
        if (existingUser) {
            throw new Error('Người dùng đã tồn tại với email này');
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        const newUser = new UserModel({
            email,
            password: hashedPassword,
            phone,
            name
        });
        await newUser.save();
        return newUser;
    } catch (error) {
        console.error("Error registering user:", error.message);
        return false;
    }
};

//lấy user bằng email
const getUserByEmail = async (email) => {
    try {
        const user = await UserModel.findOne({ email });
        return user;
    } catch (error) {
        return false;
    }
};

//lấy user
const getAllUsers = async () => {
    try {
        const users = await UserModel.find();
        return users;
    } catch (error) {
        return false;
    }
};

//thêm user
const addUser = async (userData) => {
    try {
        const newUser = await UserModel.create(userData);
        return newUser;
    } catch (error) {
        return false;
    }
};

// sửa user
const updateUser = async (id, updatedUserData) => {
    try {
        const updatedUser = await UserModel.findOneAndUpdate(
            { _id: id },
            { $set: updatedUserData }
        );
        return updatedUser;
    } catch (error) {
        return false;
    }
};

// xóa user
const deleteUser = async (id) => {
    try {
        const deletedUser = await UserModel.findOneAndDelete({ _id: id });
        return deletedUser;
    } catch (error) {
        return false;
    }
};



module.exports = {
    getAllUsers, addUser, updateUser, deleteUser, loginUser, registerUser
};
