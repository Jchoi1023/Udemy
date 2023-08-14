const express = require('express');
const {getAllUsers, getUser, createUser, deleteUser, updateUser} = require('./../constrollers/userController');
const router = express.Router();

router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUser).patch(updateUser).delete(deleteUser);

module.exports = router;