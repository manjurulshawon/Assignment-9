
const express = require('express');
const router = express.Router();

const {
  create: createUser,
  read: readUser,
  delete: deleteUser,
  update: updateUser,
} = require('../Controllers/userController');

const {
  create: createAdmin,
  read: readAdmin,
  delete: deleteAdmin,
  update: updateAdmin,
} = require('../Controllers/adminController');

const {
  create: createSubAdmin,
  read: readSubAdmin,
  delete: deleteSubAdmin,
  update: updateSubAdmin,
} = require('../Controllers/subAdminController');

const {
  create: createPost,
  read: readPost,
  delete: deletePost,
  update: updatePost,
} = require('../Controllers/postController');

// User Routes
router.get('/user/create', createUser);
router.get('/user/read', readUser);
router.get('/user/delete', deleteUser);
router.get('/user/update', updateUser);

// Admin Routes
router.get('/admin/create', createAdmin);
router.get('/admin/read', readAdmin);
router.get('/admin/delete', deleteAdmin);
router.get('/admin/update', updateAdmin);

// SubAdmin Routes
router.get('/subadmin/create', createSubAdmin);
router.get('/subadmin/read', readSubAdmin);
router.get('/subadmin/delete', deleteSubAdmin);
router.get('/subadmin/update', updateSubAdmin);

// Post Routes
router.get('/post/create', createPost);
router.get('/post/read', readPost);
router.get('/post/delete', deletePost);
router.get('/post/update', updatePost);

module.exports = router;
