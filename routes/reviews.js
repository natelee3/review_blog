'use strict';

const express = require('express');
const router = express.Router();
const reviewModel = require('../models/Reviews')

router.post('/add', async (req, res) => {
    const {mallet_id, review_content} = req.body;
    console.log("REQ BODY", req.session.user_id)
    const response = await reviewModel.addReview(review_content, req.session.user_id, mallet_id)
    res.sendStatus(200);
    
});

module.exports = router;
