// Create web server for comment

//import module
const express = require('express');
const router = express.Router();
const commentController = require('../controllers/comments.js')

//Handle request
router.get('/', commentController.comment_list);
router.get('/create', commentController.comment_create_get);
router.post('/create', commentController.comment_create_post);
router.get('/:id/delete', commentController.comment_delete_id);
