const UserService = require('../services/userService');  

const loginUser = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ success: false, message: 'Email và mật khẩu là bắt buộc' });
        }
        const user = await UserService.loginUser(email, password);
        if (!user) {
            return res.status(401).json({ success: false, message: 'Email hoặc mật khẩu không đúng' });
        }
        return res.status(200).json({ success: true, message: 'Đăng nhập thành công', user});
    } catch (error) {
        return res.status(500).json({ success: false, message: 'Lỗi khi đăng nhập' });
    }
};

const registerUser = async (req, res) => {
    try {
        const { email, password, phone, name } = req.body;

        if (!email || !password || !phone || !name) {
            return res.status(400).json({ success: false, message: 'Vui lòng điền đầy đủ thông tin đăng ký' });
        }
        if (!email.includes('@') || !email.includes('.')) {
            return res.status(400).json({ success: false, message: 'Email không hợp lệ' });
        }
        if (password.length < 6) {
            return res.status(400).json({ success: false, message: 'Mật khẩu phải ít nhất 6 ký tự' });
        }
        const phoneStr = phone.toString();
        if (phoneStr.length < 10 || phoneStr.length > 11) {
            return res.status(400).json({ success: false, message: 'Số điện thoại phải từ 10 tới 11 số' });
        }

        const newUser = await UserService.registerUser({ email, password, phone, name });
        if (!newUser) {
            return res.status(400).json({ success: false, message: 'Đăng ký không thành công, kiểm tra lại thông tin' });
        }
        return res.status(201).json({ success: true, message: 'Đăng ký thành công', user: newUser });
    } catch (error) {
        console.error(error); // Log the error for debugging
        return res.status(500).json({ success: false, message: 'Lỗi khi đăng ký người dùng' });
    }
};

const getAllUsers = async (req, res, next) => {
    try {
        const users = await UserService.getAllUsers();
        return res.status(200).json({ result: true, message: 'Lấy tất cả người dùng thành công', users: users });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Có lỗi khi lấy tất cả người dùng' });
    }
};

const addUser = async (req, res, next) => {
    try {
        const userData = req.body;
        const newUser = await UserService.addUser(userData);
        return res.status(200).json({ result: true, message: 'Thêm người dùng thành công', user: newUser });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Lỗi thêm người dùng' });
    }
};

const updateUser = async (req, res, next) => {
    try {
        const id = req.body.id;
        const updatedUserData = req.body;
        const updatedUser = await UserService.updateUser(id, updatedUserData);
        return res.status(200).json({ result: true, message: 'Sửa người dùng thành công', user: updatedUser });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Lỗi khi sửa người dùng' });
    }
};

const deleteUser = async (req, res, next) => {
    try {
        const id = req.query.id;
        const deletedUser = await UserService.deleteUser(id);
        return res.status(200).json({ result: true, message: 'Xóa người dùng thành công', user: deletedUser });
    } catch (error) {
        return res.status(500).json({ result: false, message: 'Lỗi khi xóa người dùng' });
    }
};

module.exports = {
    getAllUsers,addUser,updateUser,deleteUser,loginUser,registerUser
};
