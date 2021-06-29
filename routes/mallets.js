'use strict';

const express = require('express');
const router = express.Router();
const MalletsModel = require('../models/MalletsModel');


router.get('/:id?', async (req, res) => {
    if (!!req.params.id) {
        const malletId = req.params.id;
        const theMallet = await MalletsModel.getMalletById(malletId);
        const theReview = await MalletsModel.getAllReviewsById(malletId);
        res.render('template', {
            locals: {
                title: 'Mallet Details',
                theMallet,
                theReview,
                is_logged_in: req.session.is_logged_in
            },
            partials: {
                body: 'partial-mallet-details',
                head: 'partial-head',
                nav: 'partial-nav'
            }
        })
    } else {
        const malletsData = await MalletsModel.getAllMalletData();
        res.render('template', {
            locals: {
                title: 'Our Favorite Mallets',
                malletsData,
                is_logged_in: req.session.is_logged_in
            },
            partials: {
                body: 'partial-mallets',
                head: 'partial-head',
                nav: 'partial-nav'
            }
        })
    }
})

module.exports = router;