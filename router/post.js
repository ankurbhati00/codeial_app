const express = require('express');
const router = express.Router();

const postController = require('../controller/post_controller');

router.post('/create', postController.create);

module.exports = router;