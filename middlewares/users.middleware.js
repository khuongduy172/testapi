var userSchema = require('../collections/users.collections');


async function GetAllUser() {
    const users = await userSchema.find();

    return users;
}

async function AddUser(data) {
    const user = new userSchema(data);

    await user.save();

    return user;
}

module.exports = {
    GetAllUser,
    AddUser
};