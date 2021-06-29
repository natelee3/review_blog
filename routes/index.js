'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.render('template', {
        locals: {
            title: 'Good Mallets',
            is_logged_in: req.session.is_logged_in
        },
        partials: {
            body: 'partial-index',
            head: 'partial-head',
            nav: 'partial-nav'
        }
    })
});

module.exports = router;
