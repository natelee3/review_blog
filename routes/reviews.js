'use strict';

const express = require('express');
const router = express.Router();
const reviewModel = require('../models/Reviews')

router.post('/add', async (req, res) => {
    const {mallet_id, review_content} = req.body;
    const reviewString = review_content[0] + review_content.slice(1).replace(/'/g, "''")
    const response = await reviewModel.addReview(reviewString, req.session.user_id, mallet_id)
    res.redirect('back');
});

module.exports = router;
