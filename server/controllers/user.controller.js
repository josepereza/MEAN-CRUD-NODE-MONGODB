const User =  require('../models/user');

const userCtrl = {};

userCtrl.getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json(user);
}

userCtrl.getUsers = async (req, res) => {
   const users = await User.find();
   res.json(users);
}

userCtrl.createUser = async (req, res) => {
    const user =  new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    });
    await user.save();
    res.json({
        'status': 'User saved'
    });
}

userCtrl.editUser = async (req, res) => {
    const { id } = req.params;
    const user = {
        name: req.body.name,
        email: req.body.email,
        age: req.body.age
    }; 

    await User.findByIdAndUpdate(id, {$set: user}, {new: true});
    res.json({status: 'User updated'});
}

userCtrl.deleteUser = async (req, res) => {
    await User.findByIdAndRemove(req.params.id);
    res.json({ status: 'User deleted'});
}

module.exports = userCtrl;